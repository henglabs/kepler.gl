"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.colorMaker = exports.layerColors = exports.OVERLAY_TYPE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread6 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _colorUtils = require("../utils/color-utils");

var _window = require("global/window");

var _keymirror = _interopRequireDefault(require("keymirror"));

var _defaultLayerIcon = _interopRequireDefault(require("./default-layer-icon"));

var _defaultSettings = require("../constants/default-settings");

var _customColorRanges = require("../constants/custom-color-ranges");

var _layerFactory = require("./layer-factory");

var _utils = require("../utils/utils");

var _dataUtils = require("../utils/data-utils");

var _dataScaleUtils = require("../utils/data-scale-utils");

var _marked =
/*#__PURE__*/
_regenerator["default"].mark(generateColor);

/**
 * Approx. number of points to sample in a large data set
 * @type {number}
 */
var MAX_SAMPLE_SIZE = 5000;
var OVERLAY_TYPE = (0, _keymirror["default"])({
  deckgl: null,
  mapboxgl: null
});
exports.OVERLAY_TYPE = OVERLAY_TYPE;
var layerColors = Object.values(_customColorRanges.DataVizColors).map(_colorUtils.hexToRgb);
exports.layerColors = layerColors;

function generateColor() {
  var index;
  return _regenerator["default"].wrap(function generateColor$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          index = 0;

        case 1:
          if (!(index < layerColors.length + 1)) {
            _context.next = 7;
            break;
          }

          if (index === layerColors.length) {
            index = 0;
          }

          _context.next = 5;
          return layerColors[index++];

        case 5:
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var colorMaker = generateColor();
exports.colorMaker = colorMaker;

var defaultGetFieldValue = function defaultGetFieldValue(field, d) {
  return d[field.tableFieldIndex - 1];
};

var Layer =
/*#__PURE__*/
function () {
  function Layer() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2["default"])(this, Layer);
    this.id = props.id || (0, _utils.generateHashId)(6); // meta

    this.meta = {}; // visConfigSettings

    this.visConfigSettings = {};
    this.config = this.getDefaultLayerConfig((0, _objectSpread6["default"])({
      columns: this.getLayerColumns()
    }, props));
  }

  (0, _createClass2["default"])(Layer, [{
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        dataId: props.dataId || null,
        label: props.label || 'new layer',
        color: props.color || colorMaker.next().value,
        columns: props.columns || null,
        isVisible: props.isVisible || false,
        isConfigActive: props.isConfigActive || false,
        highlightColor: props.highlightColor || [252, 242, 26, 255],
        // TODO: refactor this into separate visual Channel config
        // color by field, domain is set by filters, field, scale type
        colorField: null,
        colorDomain: [0, 1],
        colorScale: 'quantile',
        // color by size, domain is set by filters, field, scale type
        sizeDomain: [0, 1],
        sizeScale: 'linear',
        sizeField: null,
        visConfig: {},
        textLabel: {
          field: null,
          color: [255, 255, 255],
          size: 50,
          offset: [0, 0],
          anchor: 'middle'
        }
      };
    }
    /**
     * Get the description of a visualChannel config
     * @param key
     * @returns {{label: string, measure: (string|string)}}
     */

  }, {
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(key) {
      // e.g. label: Color, measure: Vehicle Type
      return {
        label: this.visConfigSettings[this.visualChannels[key].range].label,
        measure: this.config[this.visualChannels[key].field] ? this.config[this.visualChannels[key].field].name : this.visualChannels[key].defaultMeasure
      };
    }
    /**
     * Assign a field to layer column, return column config
     * @param key - Column Key
     * @param field - Selected field
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumn",
    value: function assignColumn(key, field) {
      // field value could be null for optional columns
      var update = field ? {
        value: field.name,
        fieldIdx: field.tableFieldIndex - 1
      } : {
        value: null,
        fieldIdx: -1
      };
      return (0, _objectSpread6["default"])({}, this.config.columns, (0, _defineProperty2["default"])({}, key, (0, _objectSpread6["default"])({}, this.config.columns[key], update)));
    }
    /**
     * Assign a field pair to column config, return column config
     * @param key - Column Key
     * @param pair - field Pair
     * @returns {{}} - Column config
     */

  }, {
    key: "assignColumnPairs",
    value: function assignColumnPairs(key, pair) {
      var _objectSpread3;

      if (!this.columnPairs || !this.columnPairs[key]) {
        // should not end in this state
        return this.config.columns;
      }

      var _this$columnPairs$key = this.columnPairs[key],
          partnerKey = _this$columnPairs$key.pair,
          fieldPairKey = _this$columnPairs$key.fieldPairKey;
      var partnerFieldPairKey = this.columnPairs[partnerKey].fieldPairKey;
      return (0, _objectSpread6["default"])({}, this.config.columns, (_objectSpread3 = {}, (0, _defineProperty2["default"])(_objectSpread3, key, pair[fieldPairKey]), (0, _defineProperty2["default"])(_objectSpread3, partnerKey, pair[partnerFieldPairKey]), _objectSpread3));
    }
    /**
      * Calculate a radius zoom multiplier to render points, so they are visible in all zoom level
      * @param mapState
      * @param mapState.zoom - actual zoom
      * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
      * @returns {number}
      */

  }, {
    key: "getZoomFactor",
    value: function getZoomFactor(_ref) {
      var zoom = _ref.zoom,
          _ref$zoomOffset = _ref.zoomOffset,
          zoomOffset = _ref$zoomOffset === void 0 ? 0 : _ref$zoomOffset;
      return Math.pow(2, Math.max(14 - zoom + zoomOffset, 0));
    }
    /**
      * Calculate a elevation zoom multiplier to render points, so they are visible in all zoom level
      * @param mapState
      * @param mapState.zoom - actual zoom
      * @param mapState.zoomOffset - zoomOffset when render in the plot container for export image
      * @returns {number}
      */

  }, {
    key: "getElevationZoomFactor",
    value: function getElevationZoomFactor(_ref2) {
      var zoom = _ref2.zoom,
          _ref2$zoomOffset = _ref2.zoomOffset,
          zoomOffset = _ref2$zoomOffset === void 0 ? 0 : _ref2$zoomOffset;
      return Math.pow(2, Math.max(8 - zoom + zoomOffset, 0));
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(data, allData, filteredIndex) {
      return {};
    }
  }, {
    key: "renderLayer",
    value: function renderLayer() {
      return [];
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object) {
      if (!object) {
        return null;
      } // by default, each entry of layerData should have a data property points
      // to the original item in the allData array
      // each layer can implement its own getHoverData method


      return object.data;
    }
    /**
     * When change layer type, try to copy over layer configs as much as possible
     * @param configToCopy - config to copy over
     * @param visConfigSettings - visConfig settings of config to copy
     */

  }, {
    key: "assignConfigToLayer",
    value: function assignConfigToLayer(configToCopy, visConfigSettings) {
      var _this = this;

      // don't deep merge visualChannel field
      var notToDeepMerge = Object.values(this.visualChannels).map(function (v) {
        return v.field;
      }); // don't deep merge color range, reversed: is not a key by default

      notToDeepMerge.push('colorRange', 'strokeColorRange'); // don't copy over domain

      var notToCopy = Object.values(this.visualChannels).map(function (v) {
        return v.domain;
      }); // if range is for the same property group copy it, otherwise, not to copy

      Object.values(this.visualChannels).forEach(function (v) {
        if (configToCopy.visConfig[v.range] && visConfigSettings[v.range].group !== _this.visConfigSettings[v.range].group) {
          notToCopy.push(v.range);
        }
      }); // don't copy over visualChannel range

      var currentConfig = this.config;
      var copied = this.copyLayerConfig(currentConfig, configToCopy, {
        notToDeepMerge: notToDeepMerge,
        notToCopy: notToCopy
      });
      this.updateLayerConfig(copied); // validate visualChannel field type and scale types

      Object.keys(this.visualChannels).forEach(function (channel) {
        _this.validateVisualChannel(channel);
      });
    }
    /*
     * Recursively copy config over to an empty layer
     * when received saved config, or copy config over from a different layer type
     * make sure to only copy over value to existing keys
     * @param {object} currentConfig - existing config to be override
     * @param {object} configToCopy - new Config to copy over
     * @param {string[]} notToDeepMerge - array of properties to not to be deep copied
     * @param {string[]} notToCopy - array of properties not to copy
     * @returns {object} - copied config
     */

  }, {
    key: "copyLayerConfig",
    value: function copyLayerConfig(currentConfig, configToCopy) {
      var _this2 = this;

      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref3$notToDeepMerge = _ref3.notToDeepMerge,
          notToDeepMerge = _ref3$notToDeepMerge === void 0 ? [] : _ref3$notToDeepMerge,
          _ref3$notToCopy = _ref3.notToCopy,
          notToCopy = _ref3$notToCopy === void 0 ? [] : _ref3$notToCopy;

      var copied = {};
      Object.keys(currentConfig).forEach(function (key) {
        if ((0, _utils.isPlainObject)(currentConfig[key]) && (0, _utils.isPlainObject)(configToCopy[key]) && !notToDeepMerge.includes(key) && !notToCopy.includes(key)) {
          // recursively assign object value
          copied[key] = _this2.copyLayerConfig(currentConfig[key], configToCopy[key], {
            notToDeepMerge: notToDeepMerge,
            notToCopy: notToCopy
          });
        } else if ((0, _utils.notNullorUndefined)(configToCopy[key]) && !notToCopy.includes(key)) {
          // copy
          copied[key] = configToCopy[key];
        } else {
          // keep existing
          copied[key] = currentConfig[key];
        }
      });
      return copied;
    }
  }, {
    key: "registerVisConfig",
    value: function registerVisConfig(layerVisConfigs) {
      var _this3 = this;

      Object.keys(layerVisConfigs).forEach(function (item) {
        if (typeof item === 'string' && _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]]) {
          // if assigned one of default LAYER_CONFIGS
          _this3.config.visConfig[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]].defaultValue;
          _this3.visConfigSettings[item] = _layerFactory.LAYER_VIS_CONFIGS[layerVisConfigs[item]];
        } else if (['type', 'defaultValue'].every(function (p) {
          return layerVisConfigs[item][p];
        })) {
          // if provided customized visConfig, and has type && defaultValue
          // TODO: further check if customized visConfig is valid
          _this3.config.visConfig[item] = layerVisConfigs[item].defaultValue;
          _this3.visConfigSettings[item] = layerVisConfigs[item];
        }
      });
    }
  }, {
    key: "getLayerColumns",
    value: function getLayerColumns() {
      var required = this.requiredLayerColumns.reduce(function (accu, key) {
        return (0, _objectSpread6["default"])({}, accu, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1
        }));
      }, {});
      var optional = this.optionalColumns.reduce(function (accu, key) {
        return (0, _objectSpread6["default"])({}, accu, (0, _defineProperty2["default"])({}, key, {
          value: null,
          fieldIdx: -1,
          optional: true
        }));
      }, {});
      return (0, _objectSpread6["default"])({}, required, optional);
    }
  }, {
    key: "updateLayerConfig",
    value: function updateLayerConfig(newConfig) {
      this.config = (0, _objectSpread6["default"])({}, this.config, newConfig);
      return this;
    }
  }, {
    key: "updateLayerVisConfig",
    value: function updateLayerVisConfig(newVisConfig) {
      this.config.visConfig = (0, _objectSpread6["default"])({}, this.config.visConfig, newVisConfig);
      return this;
    }
    /**
     * Check whether layer has all columns
     *
     * @param {object} layer
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasAllColumns",
    value: function hasAllColumns() {
      var columns = this.config.columns;
      return columns && Object.values(columns).every(function (v) {
        return Boolean(v.optional || v.value && v.fieldIdx > -1);
      });
    }
    /**
     * Check whether layer has data
     *
     * @param {object} layer
     * @param {Array | Object} layerData
     * @returns {boolean} yes or no
     */

  }, {
    key: "hasLayerData",
    value: function hasLayerData(layerData) {
      if (!layerData) {
        return false;
      }

      return Boolean(layerData.data && layerData.data.length);
    }
  }, {
    key: "isValidToSave",
    value: function isValidToSave() {
      return this.type && this.hasAllColumns();
    }
  }, {
    key: "shouldRenderLayer",
    value: function shouldRenderLayer(data) {
      return this.type && this.hasAllColumns() && this.config.isVisible && this.hasLayerData(data);
    }
  }, {
    key: "getVisChannelScale",
    value: function getVisChannelScale(scale, domain, range, fixed) {
      return _defaultSettings.SCALE_FUNC[fixed ? 'linear' : scale]().domain(domain).range(fixed ? domain : range);
    }
  }, {
    key: "getPointsBounds",
    value: function getPointsBounds(allData, getPosition) {
      // no need to loop through the entire dataset
      // get a sample of data to calculate bounds
      var sampleData = allData.length > MAX_SAMPLE_SIZE ? (0, _dataUtils.getSampleData)(allData, MAX_SAMPLE_SIZE) : allData;
      var points = sampleData.map(getPosition);
      var latBounds = (0, _dataUtils.getLatLngBounds)(points, 1, [-90, 90]);
      var lngBounds = (0, _dataUtils.getLatLngBounds)(points, 0, [-180, 180]);

      if (!latBounds || !lngBounds) {
        return null;
      }

      return [lngBounds[0], latBounds[0], lngBounds[1], latBounds[1]];
    }
  }, {
    key: "getLightSettingsFromBounds",
    value: function getLightSettingsFromBounds(bounds) {
      return Array.isArray(bounds) && bounds.length >= 4 ? (0, _objectSpread6["default"])({}, _defaultSettings.DEFAULT_LIGHT_SETTINGS, {
        lightsPosition: [].concat((0, _toConsumableArray2["default"])(bounds.slice(0, 2)), [_defaultSettings.DEFAULT_LIGHT_SETTINGS.lightsPosition[2]], (0, _toConsumableArray2["default"])(bounds.slice(2, 4)), [_defaultSettings.DEFAULT_LIGHT_SETTINGS.lightsPosition[5]])
      }) : _defaultSettings.DEFAULT_LIGHT_SETTINGS;
    }
  }, {
    key: "getEncodedChannelValue",
    value: function getEncodedChannelValue(scale, data, field) {
      var defaultValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultSettings.NO_VALUE_COLOR;
      var getValue = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultGetFieldValue;
      var type = field.type;
      var value = getValue(field, data);
      var attributeValue;

      if (type === _defaultSettings.ALL_FIELD_TYPES.timestamp) {
        // shouldn't need to convert here
        // scale Function should take care of it
        attributeValue = scale(new Date(value));
      } else {
        attributeValue = scale(value);
      }

      if (!attributeValue) {
        attributeValue = defaultValue;
      }

      return attributeValue;
    }
  }, {
    key: "updateMeta",
    value: function updateMeta(meta) {
      this.meta = (0, _objectSpread6["default"])({}, this.meta, meta);
    }
    /**
     * helper function to update one layer domain when state.data changed
     * if state.data change is due ot update filter, newFiler will be passed
     * called by updateAllLayerDomainData
     * @param {Object} dataset
     * @param {Object} newFilter
     * @returns {object} layer
     */

  }, {
    key: "updateLayerDomain",
    value: function updateLayerDomain(dataset, newFilter) {
      var _this4 = this;

      Object.values(this.visualChannels).forEach(function (channel) {
        var scale = channel.scale;
        var scaleType = _this4.config[scale]; // ordinal domain is based on allData, if only filter changed
        // no need to update ordinal domain

        if (!newFilter || scaleType !== _defaultSettings.SCALE_TYPES.ordinal) {
          var domain = channel.domain;

          var updatedDomain = _this4.calculateLayerDomain(dataset, channel);

          _this4.updateLayerConfig((0, _defineProperty2["default"])({}, domain, updatedDomain));
        }
      });
      return this;
    }
    /**
     * Validate visual channel field and scales based on supported field & scale type
     * @param channel
     */

  }, {
    key: "validateVisualChannel",
    value: function validateVisualChannel(channel) {
      this.validateFieldType(channel);
      this.validateScale(channel);
    }
    /**
     * Validate field type based on channelScaleType
     */

  }, {
    key: "validateFieldType",
    value: function validateFieldType(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          channelScaleType = visualChannel.channelScaleType,
          supportedFieldTypes = visualChannel.supportedFieldTypes;

      if (this.config[field]) {
        // if field is selected, check if field type is supported
        var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];

        if (!channelSupportedFieldTypes.includes(this.config[field].type)) {
          // field type is not supported, set it back to null
          // set scale back to default
          this.updateLayerConfig((0, _defineProperty2["default"])({}, field, null));
        }
      }
    }
    /**
     * Validate scale type based on aggregation
     */

  }, {
    key: "validateScale",
    value: function validateScale(channel) {
      var visualChannel = this.visualChannels[channel];
      var scale = visualChannel.scale;

      if (!scale) {
        // visualChannel doesn't have scale
        return;
      }

      var scaleOptions = this.getScaleOptions(channel); // check if current selected scale is
      // supported, if not, change to default

      if (!scaleOptions.includes(this.config[scale])) {
        this.updateLayerConfig((0, _defineProperty2["default"])({}, scale, scaleOptions[0]));
      }
    }
    /**
     * Get scale options based on current field
     * @param {string} channel
     * @returns {string[]}
     */

  }, {
    key: "getScaleOptions",
    value: function getScaleOptions(channel) {
      var visualChannel = this.visualChannels[channel];
      var field = visualChannel.field,
          scale = visualChannel.scale,
          channelScaleType = visualChannel.channelScaleType;
      return this.config[field] ? _defaultSettings.FIELD_OPTS[this.config[field].type].scale[channelScaleType] : [this.getDefaultLayerConfig()[scale]];
    }
  }, {
    key: "updateLayerVisualChannel",
    value: function updateLayerVisualChannel(dataset, channel) {
      var visualChannel = this.visualChannels[channel];
      this.validateVisualChannel(channel); // calculate layer channel domain

      var updatedDomain = this.calculateLayerDomain(dataset, visualChannel);
      this.updateLayerConfig((0, _defineProperty2["default"])({}, visualChannel.domain, updatedDomain));
    }
  }, {
    key: "calculateLayerDomain",
    value: function calculateLayerDomain(dataset, visualChannel) {
      var allData = dataset.allData,
          filteredIndexForDomain = dataset.filteredIndexForDomain;
      var defaultDomain = [0, 1];
      var scale = visualChannel.scale;
      var scaleType = this.config[scale];
      var field = this.config[visualChannel.field];

      if (!field) {
        // if colorField or sizeField were set back to null
        return defaultDomain;
      }

      if (!_defaultSettings.SCALE_TYPES[scaleType]) {
        _window.console.error("scale type ".concat(scaleType, " not supported"));

        return defaultDomain;
      } // TODO: refactor to add valueAccessor to field


      var fieldIdx = field.tableFieldIndex - 1;
      var isTime = field.type === _defaultSettings.ALL_FIELD_TYPES.timestamp;

      var valueAccessor = _dataUtils.maybeToDate.bind(null, isTime, fieldIdx, field.format);

      var indexValueAccessor = function indexValueAccessor(i) {
        return valueAccessor(allData[i]);
      };

      var sortFunction = (0, _dataUtils.getSortingFunction)(field.type);

      switch (scaleType) {
        case _defaultSettings.SCALE_TYPES.ordinal:
        case _defaultSettings.SCALE_TYPES.point:
          // do not recalculate ordinal domain based on filtered data
          // don't need to update ordinal domain every time
          return (0, _dataScaleUtils.getOrdinalDomain)(allData, valueAccessor);

        case _defaultSettings.SCALE_TYPES.quantile:
          return (0, _dataScaleUtils.getQuantileDomain)(filteredIndexForDomain, indexValueAccessor, sortFunction);

        case _defaultSettings.SCALE_TYPES.quantize:
        case _defaultSettings.SCALE_TYPES.linear:
        case _defaultSettings.SCALE_TYPES.sqrt:
        default:
          return (0, _dataScaleUtils.getLinearDomain)(filteredIndexForDomain, indexValueAccessor);
      }
    }
  }, {
    key: "isLayerHovered",
    value: function isLayerHovered(objectInfo) {
      return objectInfo && objectInfo.layer && objectInfo.picked && objectInfo.layer.props.id === this.id;
    }
  }, {
    key: "getRadiusScaleByZoom",
    value: function getRadiusScaleByZoom(mapState, fixedRadius) {
      var radiusChannel = Object.values(this.visualChannels).find(function (vc) {
        return vc.property === 'radius';
      });

      if (!radiusChannel) {
        return 1;
      }

      var field = radiusChannel.field;
      var fixed = fixedRadius === undefined ? this.config.visConfig.fixedRadius : fixedRadius;
      var radius = this.config.visConfig.radius;
      return fixed ? 1 : (this.config[field] ? 1 : radius) * this.getZoomFactor(mapState);
    }
  }, {
    key: "shouldCalculateLayerData",
    value: function shouldCalculateLayerData(props) {
      var _this5 = this;

      return props.some(function (p) {
        return !_this5.noneLayerDataAffectingProps.includes(p);
      });
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _defaultLayerIcon["default"];
    }
  }, {
    key: "overlayType",
    get: function get() {
      return OVERLAY_TYPE.deckgl;
    }
  }, {
    key: "type",
    get: function get() {
      return null;
    }
  }, {
    key: "name",
    get: function get() {
      return this.type;
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return [];
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return ['label', 'opacity', 'thickness', 'isVisible'];
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        color: {
          property: 'color',
          field: 'colorField',
          scale: 'colorScale',
          domain: 'colorDomain',
          range: 'colorRange',
          key: 'color',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: {
          property: 'size',
          field: 'sizeField',
          scale: 'sizeScale',
          domain: 'sizeDomain',
          range: 'sizeRange',
          key: 'size',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }
    /*
     * Column pairs maps layer column to a specific field pairs,
     * By default, it is set to null
     */

  }, {
    key: "columnPairs",
    get: function get() {
      return null;
    }
    /*
     * Default point column pairs, can be used for point based layers: point, icon etc.
     */

  }, {
    key: "defaultPointColumnPairs",
    get: function get() {
      return {
        lat: {
          pair: 'lng',
          fieldPairKey: 'lat'
        },
        lng: {
          pair: 'lat',
          fieldPairKey: 'lng'
        }
      };
    }
    /*
     * Default link column pairs, can be used for link based layers: arc, line etc
     */

  }, {
    key: "defaultLinkColumnPairs",
    get: function get() {
      return {
        lat0: {
          pair: 'lng0',
          fieldPairKey: 'lat'
        },
        lng0: {
          pair: 'lat0',
          fieldPairKey: 'lng'
        },
        lat1: {
          pair: 'lng1',
          fieldPairKey: 'lat'
        },
        lng1: {
          pair: 'lat1',
          fieldPairKey: 'lng'
        }
      };
    }
    /**
     * Return a React component for to render layer instructions in a modal
     * @returns {object} - an object
     * @example
     *  return {
     *    id: 'iconInfo',
     *    template: IconInfoModal,
     *    modalProps: {
     *      title: 'How to draw icons'
     *   };
     * }
     */

  }, {
    key: "layerInfoModal",
    get: function get() {
      return null;
    }
    /*
     * Given a dataset, automatically create layers based on it
     * and return the props
     * By default, no layers will be found
     */

  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(fieldPairs, dataId) {
      return null;
    }
    /**
     * Given a array of preset required column names
     * found field that has the same name to set as layer column
     *
     * @param {object[]} defaultFields
     * @param {object[]} allFields
     * @returns {object[] | null} all possible required layer column pairs
     */

  }, {
    key: "findDefaultColumnField",
    value: function findDefaultColumnField(defaultFields, allFields) {
      // find all matched fields for each required col
      var requiredColumns = Object.keys(defaultFields).reduce(function (prev, key) {
        var requiredFields = allFields.filter(function (f) {
          return f.name === defaultFields[key] || defaultFields[key].includes(f.name);
        });
        prev[key] = requiredFields.length ? requiredFields.map(function (f) {
          return {
            value: f.name,
            fieldIdx: f.tableFieldIndex - 1
          };
        }) : null;
        return prev;
      }, {});

      if (!Object.values(requiredColumns).every(Boolean)) {
        // if any field missing, return null
        return null;
      }

      return this.getAllPossibleColumnParis(requiredColumns);
    }
  }, {
    key: "getAllPossibleColumnParis",
    value: function getAllPossibleColumnParis(requiredColumns) {
      // for multiple matched field for one required column, return multiple
      // combinations, e. g. if column a has 2 matched, column b has 3 matched
      // 6 possible column pairs will be returned
      var allKeys = Object.keys(requiredColumns);
      var pointers = allKeys.map(function (k, i) {
        return i === allKeys.length - 1 ? -1 : 0;
      });
      var countPerKey = allKeys.map(function (k) {
        return requiredColumns[k].length;
      });
      var pairs = [];
      /* eslint-disable no-loop-func */

      while (incrementPointers(pointers, countPerKey, pointers.length - 1)) {
        var newPair = pointers.reduce(function (prev, cuur, i) {
          prev[allKeys[i]] = requiredColumns[allKeys[i]][cuur];
          return prev;
        }, {});
        pairs.push(newPair);
      }
      /* eslint-enable no-loop-func */
      // recursively increment pointers


      function incrementPointers(pts, counts, index) {
        if (index === 0 && pts[0] === counts[0] - 1) {
          // nothing to increment
          return false;
        }

        if (pts[index] + 1 < counts[index]) {
          pts[index] = pts[index] + 1;
          return true;
        }

        pts[index] = 0;
        return incrementPointers(pts, counts, index - 1);
      }

      return pairs;
    }
  }, {
    key: "hexToRgb",
    value: function hexToRgb(c) {
      return (0, _colorUtils.hexToRgb)(c);
    }
  }]);
  return Layer;
}();

exports["default"] = Layer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvYmFzZS1sYXllci5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNvbG9yIiwiTUFYX1NBTVBMRV9TSVpFIiwiT1ZFUkxBWV9UWVBFIiwiZGVja2dsIiwibWFwYm94Z2wiLCJsYXllckNvbG9ycyIsIk9iamVjdCIsInZhbHVlcyIsIkRhdGFWaXpDb2xvcnMiLCJtYXAiLCJoZXhUb1JnYiIsImluZGV4IiwibGVuZ3RoIiwiY29sb3JNYWtlciIsImRlZmF1bHRHZXRGaWVsZFZhbHVlIiwiZmllbGQiLCJkIiwidGFibGVGaWVsZEluZGV4IiwiTGF5ZXIiLCJwcm9wcyIsImlkIiwibWV0YSIsInZpc0NvbmZpZ1NldHRpbmdzIiwiY29uZmlnIiwiZ2V0RGVmYXVsdExheWVyQ29uZmlnIiwiY29sdW1ucyIsImdldExheWVyQ29sdW1ucyIsImRhdGFJZCIsImxhYmVsIiwiY29sb3IiLCJuZXh0IiwidmFsdWUiLCJpc1Zpc2libGUiLCJpc0NvbmZpZ0FjdGl2ZSIsImhpZ2hsaWdodENvbG9yIiwiY29sb3JGaWVsZCIsImNvbG9yRG9tYWluIiwiY29sb3JTY2FsZSIsInNpemVEb21haW4iLCJzaXplU2NhbGUiLCJzaXplRmllbGQiLCJ2aXNDb25maWciLCJ0ZXh0TGFiZWwiLCJzaXplIiwib2Zmc2V0IiwiYW5jaG9yIiwia2V5IiwidmlzdWFsQ2hhbm5lbHMiLCJyYW5nZSIsIm1lYXN1cmUiLCJuYW1lIiwiZGVmYXVsdE1lYXN1cmUiLCJ1cGRhdGUiLCJmaWVsZElkeCIsInBhaXIiLCJjb2x1bW5QYWlycyIsInBhcnRuZXJLZXkiLCJmaWVsZFBhaXJLZXkiLCJwYXJ0bmVyRmllbGRQYWlyS2V5Iiwiem9vbSIsInpvb21PZmZzZXQiLCJNYXRoIiwicG93IiwibWF4IiwiZGF0YSIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4Iiwib2JqZWN0IiwiY29uZmlnVG9Db3B5Iiwibm90VG9EZWVwTWVyZ2UiLCJ2IiwicHVzaCIsIm5vdFRvQ29weSIsImRvbWFpbiIsImZvckVhY2giLCJncm91cCIsImN1cnJlbnRDb25maWciLCJjb3BpZWQiLCJjb3B5TGF5ZXJDb25maWciLCJ1cGRhdGVMYXllckNvbmZpZyIsImtleXMiLCJjaGFubmVsIiwidmFsaWRhdGVWaXN1YWxDaGFubmVsIiwiaW5jbHVkZXMiLCJsYXllclZpc0NvbmZpZ3MiLCJpdGVtIiwiTEFZRVJfVklTX0NPTkZJR1MiLCJkZWZhdWx0VmFsdWUiLCJldmVyeSIsInAiLCJyZXF1aXJlZCIsInJlcXVpcmVkTGF5ZXJDb2x1bW5zIiwicmVkdWNlIiwiYWNjdSIsIm9wdGlvbmFsIiwib3B0aW9uYWxDb2x1bW5zIiwibmV3Q29uZmlnIiwibmV3VmlzQ29uZmlnIiwiQm9vbGVhbiIsImxheWVyRGF0YSIsInR5cGUiLCJoYXNBbGxDb2x1bW5zIiwiaGFzTGF5ZXJEYXRhIiwic2NhbGUiLCJmaXhlZCIsIlNDQUxFX0ZVTkMiLCJnZXRQb3NpdGlvbiIsInNhbXBsZURhdGEiLCJwb2ludHMiLCJsYXRCb3VuZHMiLCJsbmdCb3VuZHMiLCJib3VuZHMiLCJBcnJheSIsImlzQXJyYXkiLCJERUZBVUxUX0xJR0hUX1NFVFRJTkdTIiwibGlnaHRzUG9zaXRpb24iLCJzbGljZSIsIk5PX1ZBTFVFX0NPTE9SIiwiZ2V0VmFsdWUiLCJhdHRyaWJ1dGVWYWx1ZSIsIkFMTF9GSUVMRF9UWVBFUyIsInRpbWVzdGFtcCIsIkRhdGUiLCJkYXRhc2V0IiwibmV3RmlsdGVyIiwic2NhbGVUeXBlIiwiU0NBTEVfVFlQRVMiLCJvcmRpbmFsIiwidXBkYXRlZERvbWFpbiIsImNhbGN1bGF0ZUxheWVyRG9tYWluIiwidmFsaWRhdGVGaWVsZFR5cGUiLCJ2YWxpZGF0ZVNjYWxlIiwidmlzdWFsQ2hhbm5lbCIsImNoYW5uZWxTY2FsZVR5cGUiLCJzdXBwb3J0ZWRGaWVsZFR5cGVzIiwiY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMiLCJDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJGSUVMRF9PUFRTIiwiZmlsdGVyZWRJbmRleEZvckRvbWFpbiIsImRlZmF1bHREb21haW4iLCJDb25zb2xlIiwiZXJyb3IiLCJpc1RpbWUiLCJ2YWx1ZUFjY2Vzc29yIiwibWF5YmVUb0RhdGUiLCJiaW5kIiwiZm9ybWF0IiwiaW5kZXhWYWx1ZUFjY2Vzc29yIiwiaSIsInNvcnRGdW5jdGlvbiIsInBvaW50IiwicXVhbnRpbGUiLCJxdWFudGl6ZSIsImxpbmVhciIsInNxcnQiLCJvYmplY3RJbmZvIiwibGF5ZXIiLCJwaWNrZWQiLCJtYXBTdGF0ZSIsImZpeGVkUmFkaXVzIiwicmFkaXVzQ2hhbm5lbCIsImZpbmQiLCJ2YyIsInByb3BlcnR5IiwidW5kZWZpbmVkIiwicmFkaXVzIiwiZ2V0Wm9vbUZhY3RvciIsInNvbWUiLCJub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMiLCJEZWZhdWx0TGF5ZXJJY29uIiwiQ0hBTk5FTF9TQ0FMRVMiLCJsYXQiLCJsbmciLCJsYXQwIiwibG5nMCIsImxhdDEiLCJsbmcxIiwiZmllbGRQYWlycyIsImRlZmF1bHRGaWVsZHMiLCJhbGxGaWVsZHMiLCJyZXF1aXJlZENvbHVtbnMiLCJwcmV2IiwicmVxdWlyZWRGaWVsZHMiLCJmaWx0ZXIiLCJmIiwiZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyIsImFsbEtleXMiLCJwb2ludGVycyIsImsiLCJjb3VudFBlcktleSIsInBhaXJzIiwiaW5jcmVtZW50UG9pbnRlcnMiLCJuZXdQYWlyIiwiY3V1ciIsInB0cyIsImNvdW50cyIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFVQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFPQTs7Ozs2QkFrQlVBLGE7O0FBWlY7Ozs7QUFJQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFFTyxJQUFNQyxZQUFZLEdBQUcsMkJBQVU7QUFDcENDLEVBQUFBLE1BQU0sRUFBRSxJQUQ0QjtBQUVwQ0Ms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c0wsaUJBQWlCLENBQUNHLEdBQUQsRUFBTUMsTUFBTixFQUFjMUwsS0FBSyxHQUFHLENBQXRCLENBQXhCO0FBQ0Q7O0FBRUQsYUFBT3FMLEtBQVA7QUFDRDs7OzZCQUVlTSxDLEVBQUc7QUFDakIsYUFBTywwQkFBU0EsQ0FBVCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQga2V5bWlycm9yIGZyb20gJ2tleW1pcnJvcic7XG5pbXBvcnQgRGVmYXVsdExheWVySWNvbiBmcm9tICcuL2RlZmF1bHQtbGF5ZXItaWNvbic7XG5cbmltcG9ydCB7XG4gIEFMTF9GSUVMRF9UWVBFUyxcbiAgREVGQVVMVF9MSUdIVF9TRVRUSU5HUyxcbiAgTk9fVkFMVUVfQ09MT1IsXG4gIFNDQUxFX1RZUEVTLFxuICBDSEFOTkVMX1NDQUxFUyxcbiAgRklFTERfT1BUUyxcbiAgU0NBTEVfRlVOQyxcbiAgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7RGF0YVZpekNvbG9yc30gZnJvbSAnY29uc3RhbnRzL2N1c3RvbS1jb2xvci1yYW5nZXMnO1xuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHU30gZnJvbSAnLi9sYXllci1mYWN0b3J5JztcblxuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZCwgbm90TnVsbG9yVW5kZWZpbmVkLCBpc1BsYWluT2JqZWN0fSBmcm9tICd1dGlscy91dGlscyc7XG5cbmltcG9ydCB7XG4gIGdldFNhbXBsZURhdGEsXG4gIGdldExhdExuZ0JvdW5kcyxcbiAgbWF5YmVUb0RhdGUsXG4gIGdldFNvcnRpbmdGdW5jdGlvblxufSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuaW1wb3J0IHtcbiAgZ2V0UXVhbnRpbGVEb21haW4sXG4gIGdldE9yZGluYWxEb21haW4sXG4gIGdldExpbmVhckRvbWFpblxufSBmcm9tICd1dGlscy9kYXRhLXNjYWxlLXV0aWxzJztcblxuLyoqXG4gKiBBcHByb3guIG51bWJlciBvZiBwb2ludHMgdG8gc2FtcGxlIGluIGEgbGFyZ2UgZGF0YSBzZXRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmNvbnN0IE1BWF9TQU1QTEVfU0laRSA9IDUwMDA7XG5cbmV4cG9ydCBjb25zdCBPVkVSTEFZX1RZUEUgPSBrZXltaXJyb3Ioe1xuICBkZWNrZ2w6IG51bGwsXG4gIG1hcGJveGdsOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IGxheWVyQ29sb3JzID0gT2JqZWN0LnZhbHVlcyhEYXRhVml6Q29sb3JzKS5tYXAoaGV4VG9SZ2IpO1xuZnVuY3Rpb24qIGdlbmVyYXRlQ29sb3IoKSB7XG4gIGxldCBpbmRleCA9IDA7XG4gIHdoaWxlIChpbmRleCA8IGxheWVyQ29sb3JzLmxlbmd0aCArIDEpIHtcbiAgICBpZiAoaW5kZXggPT09IGxheWVyQ29sb3JzLmxlbmd0aCkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICB5aWVsZCBsYXllckNvbG9yc1tpbmRleCsrXTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sb3JNYWtlciA9IGdlbmVyYXRlQ29sb3IoKTtcbmNvbnN0IGRlZmF1bHRHZXRGaWVsZFZhbHVlID0gKGZpZWxkLCBkKSA9PiBkW2ZpZWxkLnRhYmxlRmllbGRJbmRleCAtIDFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICB0aGlzLmlkID0gcHJvcHMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoNik7XG5cbiAgICAvLyBtZXRhXG4gICAgdGhpcy5tZXRhID0ge307XG5cbiAgICAvLyB2aXNDb25maWdTZXR0aW5nc1xuICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3MgPSB7fTtcblxuICAgIHRoaXMuY29uZmlnID0gdGhpcy5nZXREZWZhdWx0TGF5ZXJDb25maWcoe1xuICAgICAgY29sdW1uczogdGhpcy5nZXRMYXllckNvbHVtbnMoKSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSk7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBEZWZhdWx0TGF5ZXJJY29uO1xuICB9XG5cbiAgZ2V0IG92ZXJsYXlUeXBlKCkge1xuICAgIHJldHVybiBPVkVSTEFZX1RZUEUuZGVja2dsO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0IGlzQWdncmVnYXRlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbJ2xhYmVsJywgJ29wYWNpdHknLCAndGhpY2tuZXNzJywgJ2lzVmlzaWJsZSddO1xuICB9XG5cbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjoge1xuICAgICAgICBwcm9wZXJ0eTogJ2NvbG9yJyxcbiAgICAgICAgZmllbGQ6ICdjb2xvckZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdjb2xvclNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnY29sb3JEb21haW4nLFxuICAgICAgICByYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICAgICAgICBrZXk6ICdjb2xvcicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBwcm9wZXJ0eTogJ3NpemUnLFxuICAgICAgICBmaWVsZDogJ3NpemVGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnc2l6ZVNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc2l6ZURvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnc2l6ZVJhbmdlJyxcbiAgICAgICAga2V5OiAnc2l6ZScsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLnNpemVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogQ29sdW1uIHBhaXJzIG1hcHMgbGF5ZXIgY29sdW1uIHRvIGEgc3BlY2lmaWMgZmllbGQgcGFpcnMsXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBudWxsXG4gICAqL1xuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKlxuICAgKiBEZWZhdWx0IHBvaW50IGNvbHVtbiBwYWlycywgY2FuIGJlIHVzZWQgZm9yIHBvaW50IGJhc2VkIGxheWVyczogcG9pbnQsIGljb24gZXRjLlxuICAgKi9cbiAgZ2V0IGRlZmF1bHRQb2ludENvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsYXQ6IHtwYWlyOiAnbG5nJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmc6IHtwYWlyOiAnbGF0JywgZmllbGRQYWlyS2V5OiAnbG5nJ31cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogRGVmYXVsdCBsaW5rIGNvbHVtbiBwYWlycywgY2FuIGJlIHVzZWQgZm9yIGxpbmsgYmFzZWQgbGF5ZXJzOiBhcmMsIGxpbmUgZXRjXG4gICAqL1xuICBnZXQgZGVmYXVsdExpbmtDb2x1bW5QYWlycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF0MDoge3BhaXI6ICdsbmcwJywgZmllbGRQYWlyS2V5OiAnbGF0J30sXG4gICAgICBsbmcwOiB7cGFpcjogJ2xhdDAnLCBmaWVsZFBhaXJLZXk6ICdsbmcnfSxcbiAgICAgIGxhdDE6IHtwYWlyOiAnbG5nMScsIGZpZWxkUGFpcktleTogJ2xhdCd9LFxuICAgICAgbG5nMToge3BhaXI6ICdsYXQxJywgZmllbGRQYWlyS2V5OiAnbG5nJ31cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIFJlYWN0IGNvbXBvbmVudCBmb3IgdG8gcmVuZGVyIGxheWVyIGluc3RydWN0aW9ucyBpbiBhIG1vZGFsXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gYW4gb2JqZWN0XG4gICAqIEBleGFtcGxlXG4gICAqICByZXR1cm4ge1xuICAgKiAgICBpZDogJ2ljb25JbmZvJyxcbiAgICogICAgdGVtcGxhdGU6IEljb25JbmZvTW9kYWwsXG4gICAqICAgIG1vZGFsUHJvcHM6IHtcbiAgICogICAgICB0aXRsZTogJ0hvdyB0byBkcmF3IGljb25zJ1xuICAgKiAgIH07XG4gICAqIH1cbiAgICovXG4gIGdldCBsYXllckluZm9Nb2RhbCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvKlxuICAgKiBHaXZlbiBhIGRhdGFzZXQsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGxheWVycyBiYXNlZCBvbiBpdFxuICAgKiBhbmQgcmV0dXJuIHRoZSBwcm9wc1xuICAgKiBCeSBkZWZhdWx0LCBubyBsYXllcnMgd2lsbCBiZSBmb3VuZFxuICAgKi9cbiAgc3RhdGljIGZpbmREZWZhdWx0TGF5ZXJQcm9wcyhmaWVsZFBhaXJzLCBkYXRhSWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBhIGFycmF5IG9mIHByZXNldCByZXF1aXJlZCBjb2x1bW4gbmFtZXNcbiAgICogZm91bmQgZmllbGQgdGhhdCBoYXMgdGhlIHNhbWUgbmFtZSB0byBzZXQgYXMgbGF5ZXIgY29sdW1uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IGRlZmF1bHRGaWVsZHNcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gYWxsRmllbGRzXG4gICAqIEByZXR1cm5zIHtvYmplY3RbXSB8IG51bGx9IGFsbCBwb3NzaWJsZSByZXF1aXJlZCBsYXllciBjb2x1bW4gcGFpcnNcbiAgICovXG4gIHN0YXRpYyBmaW5kRGVmYXVsdENvbHVtbkZpZWxkKGRlZmF1bHRGaWVsZHMsIGFsbEZpZWxkcykge1xuICAgIC8vIGZpbmQgYWxsIG1hdGNoZWQgZmllbGRzIGZvciBlYWNoIHJlcXVpcmVkIGNvbFxuICAgIGNvbnN0IHJlcXVpcmVkQ29sdW1ucyA9IE9iamVjdC5rZXlzKGRlZmF1bHRGaWVsZHMpLnJlZHVjZSgocHJldiwga2V5KSA9PiB7XG4gICAgICBjb25zdCByZXF1aXJlZEZpZWxkcyA9IGFsbEZpZWxkcy5maWx0ZXIoXG4gICAgICAgIGYgPT4gZi5uYW1lID09PSBkZWZhdWx0RmllbGRzW2tleV0gfHwgZGVmYXVsdEZpZWxkc1trZXldLmluY2x1ZGVzKGYubmFtZSlcbiAgICAgICk7XG5cbiAgICAgIHByZXZba2V5XSA9IHJlcXVpcmVkRmllbGRzLmxlbmd0aFxuICAgICAgICA/IHJlcXVpcmVkRmllbGRzLm1hcChmID0+ICh7XG4gICAgICAgICAgdmFsdWU6IGYubmFtZSxcbiAgICAgICAgICBmaWVsZElkeDogZi50YWJsZUZpZWxkSW5kZXggLSAxXG4gICAgICAgIH0pKVxuICAgICAgICA6IG51bGw7XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAoIU9iamVjdC52YWx1ZXMocmVxdWlyZWRDb2x1bW5zKS5ldmVyeShCb29sZWFuKSkge1xuICAgICAgLy8gaWYgYW55IGZpZWxkIG1pc3NpbmcsIHJldHVybiBudWxsXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRBbGxQb3NzaWJsZUNvbHVtblBhcmlzKHJlcXVpcmVkQ29sdW1ucyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0QWxsUG9zc2libGVDb2x1bW5QYXJpcyhyZXF1aXJlZENvbHVtbnMpIHtcbiAgICAvLyBmb3IgbXVsdGlwbGUgbWF0Y2hlZCBmaWVsZCBmb3Igb25lIHJlcXVpcmVkIGNvbHVtbiwgcmV0dXJuIG11bHRpcGxlXG4gICAgLy8gY29tYmluYXRpb25zLCBlLiBnLiBpZiBjb2x1bW4gYSBoYXMgMiBtYXRjaGVkLCBjb2x1bW4gYiBoYXMgMyBtYXRjaGVkXG4gICAgLy8gNiBwb3NzaWJsZSBjb2x1bW4gcGFpcnMgd2lsbCBiZSByZXR1cm5lZFxuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZENvbHVtbnMpO1xuICAgIGNvbnN0IHBvaW50ZXJzID0gYWxsS2V5cy5tYXAoKGssIGkpID0+IChpID09PSBhbGxLZXlzLmxlbmd0aCAtIDEgPyAtMSA6IDApKTtcbiAgICBjb25zdCBjb3VudFBlcktleSA9IGFsbEtleXMubWFwKGsgPT4gcmVxdWlyZWRDb2x1bW5zW2tdLmxlbmd0aCk7XG4gICAgY29uc3QgcGFpcnMgPSBbXTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWxvb3AtZnVuYyAqL1xuICAgIHdoaWxlIChpbmNyZW1lbnRQb2ludGVycyhwb2ludGVycywgY291bnRQZXJLZXksIHBvaW50ZXJzLmxlbmd0aCAtIDEpKSB7XG4gICAgICBjb25zdCBuZXdQYWlyID0gcG9pbnRlcnMucmVkdWNlKChwcmV2LCBjdXVyLCBpKSA9PiB7XG4gICAgICAgIHByZXZbYWxsS2V5c1tpXV0gPSByZXF1aXJlZENvbHVtbnNbYWxsS2V5c1tpXV1bY3V1cl07XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwge30pO1xuXG4gICAgICBwYWlycy5wdXNoKG5ld1BhaXIpO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWxvb3AtZnVuYyAqL1xuXG4gICAgLy8gcmVjdXJzaXZlbHkgaW5jcmVtZW50IHBvaW50ZXJzXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50UG9pbnRlcnMocHRzLCBjb3VudHMsIGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPT09IDAgJiYgcHRzWzBdID09PSBjb3VudHNbMF0gLSAxKSB7XG4gICAgICAgIC8vIG5vdGhpbmcgdG8gaW5jcmVtZW50XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHB0c1tpbmRleF0gKyAxIDwgY291bnRzW2luZGV4XSkge1xuICAgICAgICBwdHNbaW5kZXhdID0gcHRzW2luZGV4XSArIDE7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwdHNbaW5kZXhdID0gMDtcbiAgICAgIHJldHVybiBpbmNyZW1lbnRQb2ludGVycyhwdHMsIGNvdW50cywgaW5kZXggLSAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFpcnM7XG4gIH1cblxuICBzdGF0aWMgaGV4VG9SZ2IoYykge1xuICAgIHJldHVybiBoZXhUb1JnYihjKTtcbiAgfVxuXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyA9IHt9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFJZDogcHJvcHMuZGF0YUlkIHx8IG51bGwsXG4gICAgICBsYWJlbDogcHJvcHMubGFiZWwgfHwgJ25ldyBsYXllcicsXG4gICAgICBjb2xvcjogcHJvcHMuY29sb3IgfHwgY29sb3JNYWtlci5uZXh0KCkudmFsdWUsXG4gICAgICBjb2x1bW5zOiBwcm9wcy5jb2x1bW5zIHx8IG51bGwsXG4gICAgICBpc1Zpc2libGU6IHByb3BzLmlzVmlzaWJsZSB8fCBmYWxzZSxcbiAgICAgIGlzQ29uZmlnQWN0aXZlOiBwcm9wcy5pc0NvbmZpZ0FjdGl2ZSB8fCBmYWxzZSxcbiAgICAgIGhpZ2hsaWdodENvbG9yOiBwcm9wcy5oaWdobGlnaHRDb2xvciB8fCBbMjUyLCAyNDIsIDI2LCAyNTVdLFxuXG4gICAgICAvLyBUT0RPOiByZWZhY3RvciB0aGlzIGludG8gc2VwYXJhdGUgdmlzdWFsIENoYW5uZWwgY29uZmlnXG4gICAgICAvLyBjb2xvciBieSBmaWVsZCwgZG9tYWluIGlzIHNldCBieSBmaWx0ZXJzLCBmaWVsZCwgc2NhbGUgdHlwZVxuICAgICAgY29sb3JGaWVsZDogbnVsbCxcbiAgICAgIGNvbG9yRG9tYWluOiBbMCwgMV0sXG4gICAgICBjb2xvclNjYWxlOiAncXVhbnRpbGUnLFxuXG4gICAgICAvLyBjb2xvciBieSBzaXplLCBkb21haW4gaXMgc2V0IGJ5IGZpbHRlcnMsIGZpZWxkLCBzY2FsZSB0eXBlXG4gICAgICBzaXplRG9tYWluOiBbMCwgMV0sXG4gICAgICBzaXplU2NhbGU6ICdsaW5lYXInLFxuICAgICAgc2l6ZUZpZWxkOiBudWxsLFxuXG4gICAgICB2aXNDb25maWc6IHt9LFxuXG4gICAgICB0ZXh0TGFiZWw6IHtcbiAgICAgICAgZmllbGQ6IG51bGwsXG4gICAgICAgIGNvbG9yOiBbMjU1LCAyNTUsIDI1NV0sXG4gICAgICAgIHNpemU6IDUwLFxuICAgICAgICBvZmZzZXQ6IFswLCAwXSxcbiAgICAgICAgYW5jaG9yOiAnbWlkZGxlJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkZXNjcmlwdGlvbiBvZiBhIHZpc3VhbENoYW5uZWwgY29uZmlnXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMge3tsYWJlbDogc3RyaW5nLCBtZWFzdXJlOiAoc3RyaW5nfHN0cmluZyl9fVxuICAgKi9cbiAgZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKGtleSkge1xuICAgIC8vIGUuZy4gbGFiZWw6IENvbG9yLCBtZWFzdXJlOiBWZWhpY2xlIFR5cGVcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IHRoaXMudmlzQ29uZmlnU2V0dGluZ3NbdGhpcy52aXN1YWxDaGFubmVsc1trZXldLnJhbmdlXS5sYWJlbCxcbiAgICAgIG1lYXN1cmU6IHRoaXMuY29uZmlnW3RoaXMudmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF1cbiAgICAgICAgPyB0aGlzLmNvbmZpZ1t0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdLm5hbWVcbiAgICAgICAgOiB0aGlzLnZpc3VhbENoYW5uZWxzW2tleV0uZGVmYXVsdE1lYXN1cmVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGEgZmllbGQgdG8gbGF5ZXIgY29sdW1uLCByZXR1cm4gY29sdW1uIGNvbmZpZ1xuICAgKiBAcGFyYW0ga2V5IC0gQ29sdW1uIEtleVxuICAgKiBAcGFyYW0gZmllbGQgLSBTZWxlY3RlZCBmaWVsZFxuICAgKiBAcmV0dXJucyB7e319IC0gQ29sdW1uIGNvbmZpZ1xuICAgKi9cbiAgYXNzaWduQ29sdW1uKGtleSwgZmllbGQpIHtcbiAgICAvLyBmaWVsZCB2YWx1ZSBjb3VsZCBiZSBudWxsIGZvciBvcHRpb25hbCBjb2x1bW5zXG4gICAgY29uc3QgdXBkYXRlID0gZmllbGRcbiAgICAgID8ge1xuICAgICAgICAgIHZhbHVlOiBmaWVsZC5uYW1lLFxuICAgICAgICAgIGZpZWxkSWR4OiBmaWVsZC50YWJsZUZpZWxkSW5kZXggLSAxXG4gICAgICAgIH1cbiAgICAgIDoge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTF9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uZmlnLmNvbHVtbnMsXG4gICAgICBba2V5XToge1xuICAgICAgICAuLi50aGlzLmNvbmZpZy5jb2x1bW5zW2tleV0sXG4gICAgICAgIC4uLnVwZGF0ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQXNzaWduIGEgZmllbGQgcGFpciB0byBjb2x1bW4gY29uZmlnLCByZXR1cm4gY29sdW1uIGNvbmZpZ1xuICAgKiBAcGFyYW0ga2V5IC0gQ29sdW1uIEtleVxuICAgKiBAcGFyYW0gcGFpciAtIGZpZWxkIFBhaXJcbiAgICogQHJldHVybnMge3t9fSAtIENvbHVtbiBjb25maWdcbiAgICovXG4gIGFzc2lnbkNvbHVtblBhaXJzKGtleSwgcGFpcikge1xuICAgIGlmICghdGhpcy5jb2x1bW5QYWlycyB8fCAhdGhpcy5jb2x1bW5QYWlyc1trZXldKSB7XG4gICAgICAvLyBzaG91bGQgbm90IGVuZCBpbiB0aGlzIHN0YXRlXG4gICAgICByZXR1cm4gdGhpcy5jb25maWcuY29sdW1ucztcbiAgICB9XG5cbiAgICBjb25zdCB7cGFpcjogcGFydG5lcktleSwgZmllbGRQYWlyS2V5fSA9IHRoaXMuY29sdW1uUGFpcnNba2V5XTtcbiAgICBjb25zdCB7ZmllbGRQYWlyS2V5OiBwYXJ0bmVyRmllbGRQYWlyS2V5fSA9IHRoaXMuY29sdW1uUGFpcnNbcGFydG5lcktleV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5jb25maWcuY29sdW1ucyxcbiAgICAgIFtrZXldOiBwYWlyW2ZpZWxkUGFpcktleV0sXG4gICAgICBbcGFydG5lcktleV06IHBhaXJbcGFydG5lckZpZWxkUGFpcktleV1cbiAgICB9O1xuICB9XG5cblx0LyoqXG4gICAqIENhbGN1bGF0ZSBhIHJhZGl1cyB6b29tIG11bHRpcGxpZXIgdG8gcmVuZGVyIHBvaW50cywgc28gdGhleSBhcmUgdmlzaWJsZSBpbiBhbGwgem9vbSBsZXZlbFxuICAgKiBAcGFyYW0gbWFwU3RhdGVcbiAgICogQHBhcmFtIG1hcFN0YXRlLnpvb20gLSBhY3R1YWwgem9vbVxuICAgKiBAcGFyYW0gbWFwU3RhdGUuem9vbU9mZnNldCAtIHpvb21PZmZzZXQgd2hlbiByZW5kZXIgaW4gdGhlIHBsb3QgY29udGFpbmVyIGZvciBleHBvcnQgaW1hZ2VcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldFpvb21GYWN0b3Ioe3pvb20sIHpvb21PZmZzZXQgPSAwfSkge1xuICAgIHJldHVybiBNYXRoLnBvdygyLCBNYXRoLm1heCgxNCAtIHpvb20gKyB6b29tT2Zmc2V0LCAwKSk7XG4gIH1cblxuXHQvKipcbiAgICogQ2FsY3VsYXRlIGEgZWxldmF0aW9uIHpvb20gbXVsdGlwbGllciB0byByZW5kZXIgcG9pbnRzLCBzbyB0aGV5IGFyZSB2aXNpYmxlIGluIGFsbCB6b29tIGxldmVsXG4gICAqIEBwYXJhbSBtYXBTdGF0ZVxuICAgKiBAcGFyYW0gbWFwU3RhdGUuem9vbSAtIGFjdHVhbCB6b29tXG4gICAqIEBwYXJhbSBtYXBTdGF0ZS56b29tT2Zmc2V0IC0gem9vbU9mZnNldCB3aGVuIHJlbmRlciBpbiB0aGUgcGxvdCBjb250YWluZXIgZm9yIGV4cG9ydCBpbWFnZVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0RWxldmF0aW9uWm9vbUZhY3Rvcih7em9vbSwgem9vbU9mZnNldCA9IDB9KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KDIsIE1hdGgubWF4KDggLSB6b29tICsgem9vbU9mZnNldCwgMCkpO1xuICB9XG5cbiAgZm9ybWF0TGF5ZXJEYXRhKGRhdGEsIGFsbERhdGEsIGZpbHRlcmVkSW5kZXgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICByZW5kZXJMYXllcigpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRIb3ZlckRhdGEob2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyBieSBkZWZhdWx0LCBlYWNoIGVudHJ5IG9mIGxheWVyRGF0YSBzaG91bGQgaGF2ZSBhIGRhdGEgcHJvcGVydHkgcG9pbnRzXG4gICAgLy8gdG8gdGhlIG9yaWdpbmFsIGl0ZW0gaW4gdGhlIGFsbERhdGEgYXJyYXlcbiAgICAvLyBlYWNoIGxheWVyIGNhbiBpbXBsZW1lbnQgaXRzIG93biBnZXRIb3ZlckRhdGEgbWV0aG9kXG4gICAgcmV0dXJuIG9iamVjdC5kYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gY2hhbmdlIGxheWVyIHR5cGUsIHRyeSB0byBjb3B5IG92ZXIgbGF5ZXIgY29uZmlncyBhcyBtdWNoIGFzIHBvc3NpYmxlXG4gICAqIEBwYXJhbSBjb25maWdUb0NvcHkgLSBjb25maWcgdG8gY29weSBvdmVyXG4gICAqIEBwYXJhbSB2aXNDb25maWdTZXR0aW5ncyAtIHZpc0NvbmZpZyBzZXR0aW5ncyBvZiBjb25maWcgdG8gY29weVxuICAgKi9cbiAgYXNzaWduQ29uZmlnVG9MYXllcihjb25maWdUb0NvcHksIHZpc0NvbmZpZ1NldHRpbmdzKSB7XG4gICAgLy8gZG9uJ3QgZGVlcCBtZXJnZSB2aXN1YWxDaGFubmVsIGZpZWxkXG4gICAgY29uc3Qgbm90VG9EZWVwTWVyZ2UgPSBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLm1hcCh2ID0+IHYuZmllbGQpO1xuXG4gICAgLy8gZG9uJ3QgZGVlcCBtZXJnZSBjb2xvciByYW5nZSwgcmV2ZXJzZWQ6IGlzIG5vdCBhIGtleSBieSBkZWZhdWx0XG4gICAgbm90VG9EZWVwTWVyZ2UucHVzaCgnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJyk7XG5cbiAgICAvLyBkb24ndCBjb3B5IG92ZXIgZG9tYWluXG4gICAgY29uc3Qgbm90VG9Db3B5ID0gT2JqZWN0LnZhbHVlcyh0aGlzLnZpc3VhbENoYW5uZWxzKS5tYXAodiA9PiB2LmRvbWFpbik7XG5cbiAgICAvLyBpZiByYW5nZSBpcyBmb3IgdGhlIHNhbWUgcHJvcGVydHkgZ3JvdXAgY29weSBpdCwgb3RoZXJ3aXNlLCBub3QgdG8gY29weVxuICAgIE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykuZm9yRWFjaCh2ID0+IHtcbiAgICAgIGlmIChjb25maWdUb0NvcHkudmlzQ29uZmlnW3YucmFuZ2VdICYmIHZpc0NvbmZpZ1NldHRpbmdzW3YucmFuZ2VdLmdyb3VwICE9PSB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW3YucmFuZ2VdLmdyb3VwKSB7XG4gICAgICAgIG5vdFRvQ29weS5wdXNoKHYucmFuZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gZG9uJ3QgY29weSBvdmVyIHZpc3VhbENoYW5uZWwgcmFuZ2VcbiAgICBjb25zdCBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgY29uc3QgY29waWVkID0gdGhpcy5jb3B5TGF5ZXJDb25maWcoY3VycmVudENvbmZpZywgY29uZmlnVG9Db3B5LCB7bm90VG9EZWVwTWVyZ2UsIG5vdFRvQ29weX0pO1xuXG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyhjb3BpZWQpO1xuICAgIC8vIHZhbGlkYXRlIHZpc3VhbENoYW5uZWwgZmllbGQgdHlwZSBhbmQgc2NhbGUgdHlwZXNcbiAgICBPYmplY3Qua2V5cyh0aGlzLnZpc3VhbENoYW5uZWxzKS5mb3JFYWNoKGNoYW5uZWwgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCk7XG4gICAgfSk7XG4gIH1cblxuICAvKlxuICAgKiBSZWN1cnNpdmVseSBjb3B5IGNvbmZpZyBvdmVyIHRvIGFuIGVtcHR5IGxheWVyXG4gICAqIHdoZW4gcmVjZWl2ZWQgc2F2ZWQgY29uZmlnLCBvciBjb3B5IGNvbmZpZyBvdmVyIGZyb20gYSBkaWZmZXJlbnQgbGF5ZXIgdHlwZVxuICAgKiBtYWtlIHN1cmUgdG8gb25seSBjb3B5IG92ZXIgdmFsdWUgdG8gZXhpc3Rpbmcga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdH0gY3VycmVudENvbmZpZyAtIGV4aXN0aW5nIGNvbmZpZyB0byBiZSBvdmVycmlkZVxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnVG9Db3B5IC0gbmV3IENvbmZpZyB0byBjb3B5IG92ZXJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gbm90VG9EZWVwTWVyZ2UgLSBhcnJheSBvZiBwcm9wZXJ0aWVzIHRvIG5vdCB0byBiZSBkZWVwIGNvcGllZFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBub3RUb0NvcHkgLSBhcnJheSBvZiBwcm9wZXJ0aWVzIG5vdCB0byBjb3B5XG4gICAqIEByZXR1cm5zIHtvYmplY3R9IC0gY29waWVkIGNvbmZpZ1xuICAgKi9cbiAgY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWcsIGNvbmZpZ1RvQ29weSwge25vdFRvRGVlcE1lcmdlID0gW10sIG5vdFRvQ29weSA9IFtdfSA9IHt9KSB7XG4gICAgY29uc3QgY29waWVkID0ge307XG4gICAgT2JqZWN0LmtleXMoY3VycmVudENvbmZpZykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpc1BsYWluT2JqZWN0KGN1cnJlbnRDb25maWdba2V5XSkgJiZcbiAgICAgICAgaXNQbGFpbk9iamVjdChjb25maWdUb0NvcHlba2V5XSkgJiZcbiAgICAgICAgIW5vdFRvRGVlcE1lcmdlLmluY2x1ZGVzKGtleSkgJiZcbiAgICAgICAgIW5vdFRvQ29weS5pbmNsdWRlcyhrZXkpXG4gICAgICApIHtcbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgYXNzaWduIG9iamVjdCB2YWx1ZVxuICAgICAgICBjb3BpZWRba2V5XSA9IHRoaXMuY29weUxheWVyQ29uZmlnKGN1cnJlbnRDb25maWdba2V5XSwgY29uZmlnVG9Db3B5W2tleV0sIHtub3RUb0RlZXBNZXJnZSwgbm90VG9Db3B5fSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBub3ROdWxsb3JVbmRlZmluZWQoY29uZmlnVG9Db3B5W2tleV0pICYmXG4gICAgICAgICFub3RUb0NvcHkuaW5jbHVkZXMoa2V5KVxuICAgICAgKSB7XG4gICAgICAgIC8vIGNvcHlcbiAgICAgICAgY29waWVkW2tleV0gPSBjb25maWdUb0NvcHlba2V5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGtlZXAgZXhpc3RpbmdcbiAgICAgICAgY29waWVkW2tleV0gPSBjdXJyZW50Q29uZmlnW2tleV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29waWVkO1xuICB9XG5cbiAgcmVnaXN0ZXJWaXNDb25maWcobGF5ZXJWaXNDb25maWdzKSB7XG4gICAgT2JqZWN0LmtleXMobGF5ZXJWaXNDb25maWdzKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgJiZcbiAgICAgICAgTEFZRVJfVklTX0NPTkZJR1NbbGF5ZXJWaXNDb25maWdzW2l0ZW1dXVxuICAgICAgKSB7XG4gICAgICAgIC8vIGlmIGFzc2lnbmVkIG9uZSBvZiBkZWZhdWx0IExBWUVSX0NPTkZJR1NcbiAgICAgICAgdGhpcy5jb25maWcudmlzQ29uZmlnW2l0ZW1dID1cbiAgICAgICAgICBMQVlFUl9WSVNfQ09ORklHU1tsYXllclZpc0NvbmZpZ3NbaXRlbV1dLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgdGhpcy52aXNDb25maWdTZXR0aW5nc1tpdGVtXSA9IExBWUVSX1ZJU19DT05GSUdTW2xheWVyVmlzQ29uZmlnc1tpdGVtXV07XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBbJ3R5cGUnLCAnZGVmYXVsdFZhbHVlJ10uZXZlcnkocCA9PiBsYXllclZpc0NvbmZpZ3NbaXRlbV1bcF0pXG4gICAgICApIHtcbiAgICAgICAgLy8gaWYgcHJvdmlkZWQgY3VzdG9taXplZCB2aXNDb25maWcsIGFuZCBoYXMgdHlwZSAmJiBkZWZhdWx0VmFsdWVcbiAgICAgICAgLy8gVE9ETzogZnVydGhlciBjaGVjayBpZiBjdXN0b21pemVkIHZpc0NvbmZpZyBpcyB2YWxpZFxuICAgICAgICB0aGlzLmNvbmZpZy52aXNDb25maWdbaXRlbV0gPSBsYXllclZpc0NvbmZpZ3NbaXRlbV0uZGVmYXVsdFZhbHVlO1xuICAgICAgICB0aGlzLnZpc0NvbmZpZ1NldHRpbmdzW2l0ZW1dID0gbGF5ZXJWaXNDb25maWdzW2l0ZW1dO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGF5ZXJDb2x1bW5zKCkge1xuICAgIGNvbnN0IHJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZExheWVyQ29sdW1ucy5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XToge3ZhbHVlOiBudWxsLCBmaWVsZElkeDogLTF9XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbiAgICBjb25zdCBvcHRpb25hbCA9IHRoaXMub3B0aW9uYWxDb2x1bW5zLnJlZHVjZShcbiAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtrZXldOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMSwgb3B0aW9uYWw6IHRydWV9XG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICAgIHJldHVybiB7Li4ucmVxdWlyZWQsIC4uLm9wdGlvbmFsfTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyQ29uZmlnKG5ld0NvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gey4uLnRoaXMuY29uZmlnLCAuLi5uZXdDb25maWd9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdXBkYXRlTGF5ZXJWaXNDb25maWcobmV3VmlzQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcudmlzQ29uZmlnID0gey4uLnRoaXMuY29uZmlnLnZpc0NvbmZpZywgLi4ubmV3VmlzQ29uZmlnfTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBsYXllciBoYXMgYWxsIGNvbHVtbnNcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGxheWVyXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB5ZXMgb3Igbm9cbiAgICovXG4gIGhhc0FsbENvbHVtbnMoKSB7XG4gICAgY29uc3Qge2NvbHVtbnN9ID0gdGhpcy5jb25maWc7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbHVtbnMgJiZcbiAgICAgIE9iamVjdC52YWx1ZXMoY29sdW1ucykuZXZlcnkodiA9PiB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHYub3B0aW9uYWwgfHwgKHYudmFsdWUgJiYgdi5maWVsZElkeCA+IC0xKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgd2hldGhlciBsYXllciBoYXMgZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gbGF5ZXJcbiAgICogQHBhcmFtIHtBcnJheSB8IE9iamVjdH0gbGF5ZXJEYXRhXG4gICAqIEByZXR1cm5zIHtib29sZWFufSB5ZXMgb3Igbm9cbiAgICovXG4gIGhhc0xheWVyRGF0YShsYXllckRhdGEpIHtcbiAgICBpZiAoIWxheWVyRGF0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBCb29sZWFuKGxheWVyRGF0YS5kYXRhICYmIGxheWVyRGF0YS5kYXRhLmxlbmd0aCk7XG4gIH1cblxuICBpc1ZhbGlkVG9TYXZlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGUgJiYgdGhpcy5oYXNBbGxDb2x1bW5zKCk7XG4gIH1cblxuICBzaG91bGRSZW5kZXJMYXllcihkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMudHlwZSAmJlxuICAgICAgdGhpcy5oYXNBbGxDb2x1bW5zKCkgJiZcbiAgICAgIHRoaXMuY29uZmlnLmlzVmlzaWJsZSAmJlxuICAgICAgdGhpcy5oYXNMYXllckRhdGEoZGF0YSlcbiAgICApO1xuICB9XG5cbiAgZ2V0VmlzQ2hhbm5lbFNjYWxlKHNjYWxlLCBkb21haW4sIHJhbmdlLCBmaXhlZCkge1xuICAgIHJldHVybiBTQ0FMRV9GVU5DW2ZpeGVkID8gJ2xpbmVhcicgOiBzY2FsZV0oKVxuICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAucmFuZ2UoZml4ZWQgPyBkb21haW4gOiByYW5nZSk7XG4gIH1cblxuICBnZXRQb2ludHNCb3VuZHMoYWxsRGF0YSwgZ2V0UG9zaXRpb24pIHtcbiAgICAvLyBubyBuZWVkIHRvIGxvb3AgdGhyb3VnaCB0aGUgZW50aXJlIGRhdGFzZXRcbiAgICAvLyBnZXQgYSBzYW1wbGUgb2YgZGF0YSB0byBjYWxjdWxhdGUgYm91bmRzXG4gICAgY29uc3Qgc2FtcGxlRGF0YSA9XG4gICAgICBhbGxEYXRhLmxlbmd0aCA+IE1BWF9TQU1QTEVfU0laRVxuICAgICAgICA/IGdldFNhbXBsZURhdGEoYWxsRGF0YSwgTUFYX1NBTVBMRV9TSVpFKVxuICAgICAgICA6IGFsbERhdGE7XG4gICAgY29uc3QgcG9pbnRzID0gc2FtcGxlRGF0YS5tYXAoZ2V0UG9zaXRpb24pO1xuXG4gICAgY29uc3QgbGF0Qm91bmRzID0gZ2V0TGF0TG5nQm91bmRzKHBvaW50cywgMSwgWy05MCwgOTBdKTtcbiAgICBjb25zdCBsbmdCb3VuZHMgPSBnZXRMYXRMbmdCb3VuZHMocG9pbnRzLCAwLCBbLTE4MCwgMTgwXSk7XG5cbiAgICBpZiAoIWxhdEJvdW5kcyB8fCAhbG5nQm91bmRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gW2xuZ0JvdW5kc1swXSwgbGF0Qm91bmRzWzBdLCBsbmdCb3VuZHNbMV0sIGxhdEJvdW5kc1sxXV07XG4gIH1cblxuICBnZXRMaWdodFNldHRpbmdzRnJvbUJvdW5kcyhib3VuZHMpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShib3VuZHMpICYmIGJvdW5kcy5sZW5ndGggPj0gNFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uREVGQVVMVF9MSUdIVF9TRVRUSU5HUyxcbiAgICAgICAgICBsaWdodHNQb3NpdGlvbjogW1xuICAgICAgICAgICAgLi4uYm91bmRzLnNsaWNlKDAsIDIpLFxuICAgICAgICAgICAgREVGQVVMVF9MSUdIVF9TRVRUSU5HUy5saWdodHNQb3NpdGlvblsyXSxcbiAgICAgICAgICAgIC4uLmJvdW5kcy5zbGljZSgyLCA0KSxcbiAgICAgICAgICAgIERFRkFVTFRfTElHSFRfU0VUVElOR1MubGlnaHRzUG9zaXRpb25bNV1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIDogREVGQVVMVF9MSUdIVF9TRVRUSU5HUztcbiAgfVxuXG4gIGdldEVuY29kZWRDaGFubmVsVmFsdWUoXG4gICAgc2NhbGUsXG4gICAgZGF0YSxcbiAgICBmaWVsZCxcbiAgICBkZWZhdWx0VmFsdWUgPSBOT19WQUxVRV9DT0xPUixcbiAgICBnZXRWYWx1ZSA9IGRlZmF1bHRHZXRGaWVsZFZhbHVlXG4gICkge1xuICAgIGNvbnN0IHt0eXBlfSA9IGZpZWxkO1xuICAgIGNvbnN0IHZhbHVlID0gZ2V0VmFsdWUoZmllbGQsIGRhdGEpO1xuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZTtcbiAgICBpZiAodHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcCkge1xuICAgICAgLy8gc2hvdWxkbid0IG5lZWQgdG8gY29udmVydCBoZXJlXG4gICAgICAvLyBzY2FsZSBGdW5jdGlvbiBzaG91bGQgdGFrZSBjYXJlIG9mIGl0XG4gICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHNjYWxlKG5ldyBEYXRlKHZhbHVlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlID0gc2NhbGUodmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgIGF0dHJpYnV0ZVZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhdHRyaWJ1dGVWYWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZU1ldGEobWV0YSkge1xuICAgIHRoaXMubWV0YSA9IHsuLi50aGlzLm1ldGEsIC4uLm1ldGF9O1xuICB9XG5cbiAgLyoqXG4gICAqIGhlbHBlciBmdW5jdGlvbiB0byB1cGRhdGUgb25lIGxheWVyIGRvbWFpbiB3aGVuIHN0YXRlLmRhdGEgY2hhbmdlZFxuICAgKiBpZiBzdGF0ZS5kYXRhIGNoYW5nZSBpcyBkdWUgb3QgdXBkYXRlIGZpbHRlciwgbmV3RmlsZXIgd2lsbCBiZSBwYXNzZWRcbiAgICogY2FsbGVkIGJ5IHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldFxuICAgKiBAcGFyYW0ge09iamVjdH0gbmV3RmlsdGVyXG4gICAqIEByZXR1cm5zIHtvYmplY3R9IGxheWVyXG4gICAqL1xuICB1cGRhdGVMYXllckRvbWFpbihkYXRhc2V0LCBuZXdGaWx0ZXIpIHtcbiAgICBPYmplY3QudmFsdWVzKHRoaXMudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2goY2hhbm5lbCA9PiB7XG4gICAgICBjb25zdCB7c2NhbGV9ID0gY2hhbm5lbDtcbiAgICAgIGNvbnN0IHNjYWxlVHlwZSA9IHRoaXMuY29uZmlnW3NjYWxlXTtcbiAgICAgIC8vIG9yZGluYWwgZG9tYWluIGlzIGJhc2VkIG9uIGFsbERhdGEsIGlmIG9ubHkgZmlsdGVyIGNoYW5nZWRcbiAgICAgIC8vIG5vIG5lZWQgdG8gdXBkYXRlIG9yZGluYWwgZG9tYWluXG4gICAgICBpZiAoIW5ld0ZpbHRlciB8fCBzY2FsZVR5cGUgIT09IFNDQUxFX1RZUEVTLm9yZGluYWwpIHtcbiAgICAgICAgY29uc3Qge2RvbWFpbn0gPSBjaGFubmVsO1xuICAgICAgICBjb25zdCB1cGRhdGVkRG9tYWluID0gdGhpcy5jYWxjdWxhdGVMYXllckRvbWFpbihkYXRhc2V0LCBjaGFubmVsKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbZG9tYWluXTogdXBkYXRlZERvbWFpbn0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgdmlzdWFsIGNoYW5uZWwgZmllbGQgYW5kIHNjYWxlcyBiYXNlZCBvbiBzdXBwb3J0ZWQgZmllbGQgJiBzY2FsZSB0eXBlXG4gICAqIEBwYXJhbSBjaGFubmVsXG4gICAqL1xuICB2YWxpZGF0ZVZpc3VhbENoYW5uZWwoY2hhbm5lbCkge1xuICAgIHRoaXMudmFsaWRhdGVGaWVsZFR5cGUoY2hhbm5lbCk7XG4gICAgdGhpcy52YWxpZGF0ZVNjYWxlKGNoYW5uZWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGZpZWxkIHR5cGUgYmFzZWQgb24gY2hhbm5lbFNjYWxlVHlwZVxuICAgKi9cbiAgdmFsaWRhdGVGaWVsZFR5cGUoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgY2hhbm5lbFNjYWxlVHlwZSwgc3VwcG9ydGVkRmllbGRUeXBlc30gPSB2aXN1YWxDaGFubmVsO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnW2ZpZWxkXSkge1xuICAgICAgLy8gaWYgZmllbGQgaXMgc2VsZWN0ZWQsIGNoZWNrIGlmIGZpZWxkIHR5cGUgaXMgc3VwcG9ydGVkXG4gICAgICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9IHN1cHBvcnRlZEZpZWxkVHlwZXMgfHwgQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTW2NoYW5uZWxTY2FsZVR5cGVdO1xuXG4gICAgICBpZiAoIWNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzLmluY2x1ZGVzKHRoaXMuY29uZmlnW2ZpZWxkXS50eXBlKSkge1xuICAgICAgICAvLyBmaWVsZCB0eXBlIGlzIG5vdCBzdXBwb3J0ZWQsIHNldCBpdCBiYWNrIHRvIG51bGxcbiAgICAgICAgLy8gc2V0IHNjYWxlIGJhY2sgdG8gZGVmYXVsdFxuICAgICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbZmllbGRdOiBudWxsfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIHNjYWxlIHR5cGUgYmFzZWQgb24gYWdncmVnYXRpb25cbiAgICovXG4gIHZhbGlkYXRlU2NhbGUoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtzY2FsZX0gPSB2aXN1YWxDaGFubmVsO1xuICAgIGlmICghc2NhbGUpIHtcbiAgICAgIC8vIHZpc3VhbENoYW5uZWwgZG9lc24ndCBoYXZlIHNjYWxlXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNjYWxlT3B0aW9ucyA9IHRoaXMuZ2V0U2NhbGVPcHRpb25zKGNoYW5uZWwpO1xuICAgIC8vIGNoZWNrIGlmIGN1cnJlbnQgc2VsZWN0ZWQgc2NhbGUgaXNcbiAgICAvLyBzdXBwb3J0ZWQsIGlmIG5vdCwgY2hhbmdlIHRvIGRlZmF1bHRcbiAgICBpZiAoIXNjYWxlT3B0aW9ucy5pbmNsdWRlcyh0aGlzLmNvbmZpZ1tzY2FsZV0pKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtbc2NhbGVdOiBzY2FsZU9wdGlvbnNbMF19KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IHNjYWxlIG9wdGlvbnMgYmFzZWQgb24gY3VycmVudCBmaWVsZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAqL1xuICBnZXRTY2FsZU9wdGlvbnMoY2hhbm5lbCkge1xuICAgIGNvbnN0IHZpc3VhbENoYW5uZWwgPSB0aGlzLnZpc3VhbENoYW5uZWxzW2NoYW5uZWxdO1xuICAgIGNvbnN0IHtmaWVsZCwgc2NhbGUsIGNoYW5uZWxTY2FsZVR5cGV9ID0gdmlzdWFsQ2hhbm5lbDtcblxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tmaWVsZF0gP1xuICAgICAgRklFTERfT1BUU1t0aGlzLmNvbmZpZ1tmaWVsZF0udHlwZV0uc2NhbGVbY2hhbm5lbFNjYWxlVHlwZV0gOlxuICAgICAgW3RoaXMuZ2V0RGVmYXVsdExheWVyQ29uZmlnKClbc2NhbGVdXTtcbiAgfVxuXG4gIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbChkYXRhc2V0LCBjaGFubmVsKSB7XG4gICAgY29uc3QgdmlzdWFsQ2hhbm5lbCA9IHRoaXMudmlzdWFsQ2hhbm5lbHNbY2hhbm5lbF07XG5cbiAgICB0aGlzLnZhbGlkYXRlVmlzdWFsQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgIC8vIGNhbGN1bGF0ZSBsYXllciBjaGFubmVsIGRvbWFpblxuICAgIGNvbnN0IHVwZGF0ZWREb21haW4gPSB0aGlzLmNhbGN1bGF0ZUxheWVyRG9tYWluKGRhdGFzZXQsIHZpc3VhbENoYW5uZWwpO1xuXG4gICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7W3Zpc3VhbENoYW5uZWwuZG9tYWluXTogdXBkYXRlZERvbWFpbn0pO1xuICB9XG5cbiAgY2FsY3VsYXRlTGF5ZXJEb21haW4oZGF0YXNldCwgdmlzdWFsQ2hhbm5lbCkge1xuICAgIGNvbnN0IHthbGxEYXRhLCBmaWx0ZXJlZEluZGV4Rm9yRG9tYWlufSA9IGRhdGFzZXQ7XG4gICAgY29uc3QgZGVmYXVsdERvbWFpbiA9IFswLCAxXTtcbiAgICBjb25zdCB7c2NhbGV9ID0gdmlzdWFsQ2hhbm5lbDtcbiAgICBjb25zdCBzY2FsZVR5cGUgPSB0aGlzLmNvbmZpZ1tzY2FsZV07XG5cbiAgICBjb25zdCBmaWVsZCA9IHRoaXMuY29uZmlnW3Zpc3VhbENoYW5uZWwuZmllbGRdO1xuICAgIGlmICghZmllbGQpIHtcbiAgICAgIC8vIGlmIGNvbG9yRmllbGQgb3Igc2l6ZUZpZWxkIHdlcmUgc2V0IGJhY2sgdG8gbnVsbFxuICAgICAgcmV0dXJuIGRlZmF1bHREb21haW47XG4gICAgfVxuXG4gICAgaWYgKCFTQ0FMRV9UWVBFU1tzY2FsZVR5cGVdKSB7XG4gICAgICBDb25zb2xlLmVycm9yKGBzY2FsZSB0eXBlICR7c2NhbGVUeXBlfSBub3Qgc3VwcG9ydGVkYCk7XG4gICAgICByZXR1cm4gZGVmYXVsdERvbWFpbjtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiByZWZhY3RvciB0byBhZGQgdmFsdWVBY2Nlc3NvciB0byBmaWVsZFxuICAgIGNvbnN0IGZpZWxkSWR4ID0gZmllbGQudGFibGVGaWVsZEluZGV4IC0gMTtcbiAgICBjb25zdCBpc1RpbWUgPSBmaWVsZC50eXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wO1xuICAgIGNvbnN0IHZhbHVlQWNjZXNzb3IgPSBtYXliZVRvRGF0ZS5iaW5kKFxuICAgICAgbnVsbCxcbiAgICAgIGlzVGltZSxcbiAgICAgIGZpZWxkSWR4LFxuICAgICAgZmllbGQuZm9ybWF0XG4gICAgKTtcbiAgICBjb25zdCBpbmRleFZhbHVlQWNjZXNzb3IgPSBpID0+IHZhbHVlQWNjZXNzb3IoYWxsRGF0YVtpXSk7XG5cbiAgICBjb25zdCBzb3J0RnVuY3Rpb24gPSBnZXRTb3J0aW5nRnVuY3Rpb24oZmllbGQudHlwZSk7XG5cbiAgICBzd2l0Y2ggKHNjYWxlVHlwZSkge1xuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5vcmRpbmFsOlxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5wb2ludDpcbiAgICAgICAgLy8gZG8gbm90IHJlY2FsY3VsYXRlIG9yZGluYWwgZG9tYWluIGJhc2VkIG9uIGZpbHRlcmVkIGRhdGFcbiAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byB1cGRhdGUgb3JkaW5hbCBkb21haW4gZXZlcnkgdGltZVxuICAgICAgICByZXR1cm4gZ2V0T3JkaW5hbERvbWFpbihhbGxEYXRhLCB2YWx1ZUFjY2Vzc29yKTtcblxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5xdWFudGlsZTpcbiAgICAgICAgcmV0dXJuIGdldFF1YW50aWxlRG9tYWluKGZpbHRlcmVkSW5kZXhGb3JEb21haW4sIGluZGV4VmFsdWVBY2Nlc3Nvciwgc29ydEZ1bmN0aW9uKTtcblxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5xdWFudGl6ZTpcbiAgICAgIGNhc2UgU0NBTEVfVFlQRVMubGluZWFyOlxuICAgICAgY2FzZSBTQ0FMRV9UWVBFUy5zcXJ0OlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGdldExpbmVhckRvbWFpbihmaWx0ZXJlZEluZGV4Rm9yRG9tYWluLCBpbmRleFZhbHVlQWNjZXNzb3IpO1xuICAgIH1cbiAgfVxuXG4gIGlzTGF5ZXJIb3ZlcmVkKG9iamVjdEluZm8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgb2JqZWN0SW5mbyAmJlxuICAgICAgb2JqZWN0SW5mby5sYXllciAmJlxuICAgICAgb2JqZWN0SW5mby5waWNrZWQgJiZcbiAgICAgIG9iamVjdEluZm8ubGF5ZXIucHJvcHMuaWQgPT09IHRoaXMuaWRcbiAgICApO1xuICB9XG5cbiAgZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUsIGZpeGVkUmFkaXVzKSB7XG4gICAgY29uc3QgcmFkaXVzQ2hhbm5lbCA9IE9iamVjdC52YWx1ZXModGhpcy52aXN1YWxDaGFubmVscykuZmluZChcbiAgICAgIHZjID0+IHZjLnByb3BlcnR5ID09PSAncmFkaXVzJ1xuICAgICk7XG5cbiAgICBpZiAoIXJhZGl1c0NoYW5uZWwpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkID0gcmFkaXVzQ2hhbm5lbC5maWVsZDtcbiAgICBjb25zdCBmaXhlZCA9XG4gICAgICBmaXhlZFJhZGl1cyA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gdGhpcy5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzXG4gICAgICAgIDogZml4ZWRSYWRpdXM7XG4gICAgY29uc3Qge3JhZGl1c30gPSB0aGlzLmNvbmZpZy52aXNDb25maWc7XG5cbiAgICByZXR1cm4gZml4ZWRcbiAgICAgID8gMVxuICAgICAgOiAodGhpcy5jb25maWdbZmllbGRdID8gMSA6IHJhZGl1cykgKiB0aGlzLmdldFpvb21GYWN0b3IobWFwU3RhdGUpO1xuICB9XG5cbiAgc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSB7XG4gICAgcmV0dXJuIHByb3BzLnNvbWUocCA9PiAhdGhpcy5ub25lTGF5ZXJEYXRhQWZmZWN0aW5nUHJvcHMuaW5jbHVkZXMocCkpO1xuICB9XG59XG4iXX0=