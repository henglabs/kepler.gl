"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.visStateSchema = exports.visStateSchemaV1 = exports.visStateSchemaV0 = exports.propertiesV1 = exports.propertiesV0 = exports.filterPropsV1 = exports.DimensionFieldSchema = exports.filterPropsV0 = exports.layerPropsV1 = exports.layerPropsV0 = exports.dimensionPropsV0 = void 0;

var _objectSpread11 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf14 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _versions = require("./versions");

var _filterUtils = require("../utils/filter-utils");

var _layerFactory = require("../layers/layer-factory");

var _schema = _interopRequireDefault(require("./schema"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _visStateSchema;

/**
 * V0 Schema
 */
var dimensionPropsV0 = ['name', 'type']; // in v0 geojson there is only sizeField
// in v1 geojson
// stroke base on -> sizeField
// height based on -> heightField
// radius based on -> radiusField
// here we make our wiredst guess on which channel sizeField belongs to

exports.dimensionPropsV0 = dimensionPropsV0;

function geojsonSizeFieldV0ToV1(config) {
  var defaultRaiuds = 10;
  var defaultRadiusRange = [0, 50]; // if extruded, sizeField is most likely used for height

  if (config.visConfig.extruded) {
    return 'heightField';
  } // if show stroke enabled, sizeField is most likely used for stroke


  if (config.visConfig.stroked) {
    return 'sizeField';
  } // if radius changed, or radius Range Changed, sizeField is most likely used for radius
  // this is the most unreliable guess, that's why we put it in the end


  if (config.visConfig.radius !== defaultRaiuds || config.visConfig.radiusRange.some(function (d, i) {
    return d !== defaultRadiusRange[i];
  })) {
    return 'radiusField';
  }

  return 'sizeField';
} // convert v0 to v1 layer config


var DimensionFieldSchemaV0 =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(DimensionFieldSchemaV0, _Schema);

  function DimensionFieldSchemaV0() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, DimensionFieldSchemaV0);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf14["default"])(DimensionFieldSchemaV0)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "version", _versions.VERSIONS.v0);
    return _this;
  }

  (0, _createClass2["default"])(DimensionFieldSchemaV0, [{
    key: "save",
    value: function save(field) {
      // should not be called anymore
      return (0, _defineProperty2["default"])({}, this.key, field !== null ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field, parents, accumulated) {
      var _parents$slice = parents.slice(-1),
          _parents$slice2 = (0, _slicedToArray2["default"])(_parents$slice, 1),
          config = _parents$slice2[0];

      var fieldName = this.key;

      if (config.type === 'geojson' && this.key === 'sizeField' && field) {
        fieldName = geojsonSizeFieldV0ToV1(config);
      } // fold into visualChannels to be load by VisualChannelSchemaV1


      return {
        visualChannels: (0, _objectSpread11["default"])({}, accumulated.visualChannels || {}, (0, _defineProperty2["default"])({}, fieldName, field))
      };
    }
  }]);
  return DimensionFieldSchemaV0;
}(_schema["default"]);

var DimensionScaleSchemaV0 =
/*#__PURE__*/
function (_Schema2) {
  (0, _inherits2["default"])(DimensionScaleSchemaV0, _Schema2);

  function DimensionScaleSchemaV0() {
    var _getPrototypeOf3;

    var _this2;

    (0, _classCallCheck2["default"])(this, DimensionScaleSchemaV0);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf3 = (0, _getPrototypeOf14["default"])(DimensionScaleSchemaV0)).call.apply(_getPrototypeOf3, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "version", _versions.VERSIONS.v0);
    return _this2;
  }

  (0, _createClass2["default"])(DimensionScaleSchemaV0, [{
    key: "save",
    value: function save(scale) {
      return (0, _defineProperty2["default"])({}, this.key, scale);
    }
  }, {
    key: "load",
    value: function load(scale, parents, accumulated) {
      var _parents$slice3 = parents.slice(-1),
          _parents$slice4 = (0, _slicedToArray2["default"])(_parents$slice3, 1),
          config = _parents$slice4[0]; // fold into visualChannels to be load by VisualChannelSchemaV1


      if (this.key === 'sizeScale' && config.type === 'geojson') {
        // sizeScale now split into radiusScale, heightScale
        // no user customization, just use default
        return {};
      }

      return {
        visualChannels: (0, _objectSpread11["default"])({}, accumulated.visualChannels || {}, (0, _defineProperty2["default"])({}, this.key, scale))
      };
    }
  }]);
  return DimensionScaleSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config


var LayerConfigSchemaV0 =
/*#__PURE__*/
function (_Schema3) {
  (0, _inherits2["default"])(LayerConfigSchemaV0, _Schema3);

  function LayerConfigSchemaV0() {
    var _getPrototypeOf4;

    var _this3;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaV0);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf4 = (0, _getPrototypeOf14["default"])(LayerConfigSchemaV0)).call.apply(_getPrototypeOf4, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "version", _versions.VERSIONS.v0);
    return _this3;
  }

  (0, _createClass2["default"])(LayerConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key
      return {
        config: (0, _objectSpread11["default"])({}, accumulated.config || {}, (0, _defineProperty2["default"])({}, this.key, saved))
      };
    }
  }]);
  return LayerConfigSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer columns
// only return column value for each column


var LayerColumnsSchemaV0 =
/*#__PURE__*/
function (_Schema4) {
  (0, _inherits2["default"])(LayerColumnsSchemaV0, _Schema4);

  function LayerColumnsSchemaV0() {
    var _getPrototypeOf5;

    var _this4;

    (0, _classCallCheck2["default"])(this, LayerColumnsSchemaV0);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf5 = (0, _getPrototypeOf14["default"])(LayerColumnsSchemaV0)).call.apply(_getPrototypeOf5, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this4), "version", _versions.VERSIONS.v0);
    return _this4;
  }

  (0, _createClass2["default"])(LayerColumnsSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.key, flatten columns
      return {
        config: (0, _objectSpread11["default"])({}, accumulated.config || {}, {
          columns: Object.keys(saved).reduce(function (accu, key) {
            return (0, _objectSpread11["default"])({}, accu, (0, _defineProperty2["default"])({}, key, saved[key].value));
          }, {})
        })
      };
    }
  }]);
  return LayerColumnsSchemaV0;
}(_schema["default"]); // used to convert v0 to v1 layer config.visConfig


var LayerConfigToVisConfigSchemaV0 =
/*#__PURE__*/
function (_Schema5) {
  (0, _inherits2["default"])(LayerConfigToVisConfigSchemaV0, _Schema5);

  function LayerConfigToVisConfigSchemaV0() {
    var _getPrototypeOf6;

    var _this5;

    (0, _classCallCheck2["default"])(this, LayerConfigToVisConfigSchemaV0);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this5 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf6 = (0, _getPrototypeOf14["default"])(LayerConfigToVisConfigSchemaV0)).call.apply(_getPrototypeOf6, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this5), "version", _versions.VERSIONS.v0);
    return _this5;
  }

  (0, _createClass2["default"])(LayerConfigToVisConfigSchemaV0, [{
    key: "load",
    value: function load(saved, parents, accumulated) {
      // fold v0 layer property into config.visConfig
      var accumulatedConfig = accumulated.config || {};
      return {
        config: (0, _objectSpread11["default"])({}, accumulatedConfig, {
          visConfig: (0, _objectSpread11["default"])({}, accumulatedConfig.visConfig || {}, (0, _defineProperty2["default"])({}, this.key, saved))
        })
      };
    }
  }]);
  return LayerConfigToVisConfigSchemaV0;
}(_schema["default"]);

var LayerVisConfigSchemaV0 =
/*#__PURE__*/
function (_Schema6) {
  (0, _inherits2["default"])(LayerVisConfigSchemaV0, _Schema6);

  function LayerVisConfigSchemaV0() {
    var _getPrototypeOf7;

    var _this6;

    (0, _classCallCheck2["default"])(this, LayerVisConfigSchemaV0);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this6 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf7 = (0, _getPrototypeOf14["default"])(LayerVisConfigSchemaV0)).call.apply(_getPrototypeOf7, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "version", _versions.VERSIONS.v0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this6), "key", 'visConfig');
    return _this6;
  }

  (0, _createClass2["default"])(LayerVisConfigSchemaV0, [{
    key: "load",
    value: function load(visConfig, parents, accumulator) {
      var _parents$slice5 = parents.slice(-1),
          _parents$slice6 = (0, _slicedToArray2["default"])(_parents$slice5, 1),
          config = _parents$slice6[0];

      var rename = {
        geojson: {
          extruded: 'enable3d',
          elevationRange: 'heightRange'
        }
      };

      if (config.type in rename) {
        var propToRename = rename[config.type];
        return {
          config: (0, _objectSpread11["default"])({}, accumulator.config || {}, {
            visConfig: Object.keys(visConfig).reduce(function (accu, key) {
              return (0, _objectSpread11["default"])({}, accu, propToRename[key] ? (0, _defineProperty2["default"])({}, propToRename[key], visConfig[key]) : (0, _defineProperty2["default"])({}, key, visConfig[key]));
            }, {})
          })
        };
      }

      return {
        config: (0, _objectSpread11["default"])({}, accumulator.config || {}, {
          visConfig: visConfig
        })
      };
    }
  }]);
  return LayerVisConfigSchemaV0;
}(_schema["default"]);

var LayerConfigSchemaDeleteV0 =
/*#__PURE__*/
function (_Schema7) {
  (0, _inherits2["default"])(LayerConfigSchemaDeleteV0, _Schema7);

  function LayerConfigSchemaDeleteV0() {
    var _getPrototypeOf8;

    var _this7;

    (0, _classCallCheck2["default"])(this, LayerConfigSchemaDeleteV0);

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    _this7 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf8 = (0, _getPrototypeOf14["default"])(LayerConfigSchemaDeleteV0)).call.apply(_getPrototypeOf8, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this7), "version", _versions.VERSIONS.v0);
    return _this7;
  }

  (0, _createClass2["default"])(LayerConfigSchemaDeleteV0, [{
    key: "load",
    value: function load(value) {
      return {};
    }
  }]);
  return LayerConfigSchemaDeleteV0;
}(_schema["default"]);
/**
 * V0 -> V1 Changes
 * - layer is now a class
 * - config saved in a config object
 * - id, type, isAggregated is outside layer.config
 * - visualChannels is outside config, it defines available visual channel and
 *   property names for field, scale, domain and range of each visual chanel.
 * - enable3d, colorAggregation and sizeAggregation are moved into visConfig
 * - GeojsonLayer - added height, radius specific properties
 */


var layerPropsV0 = {
  id: null,
  type: null,
  // move into layer.config
  dataId: new LayerConfigSchemaV0({
    key: 'dataId'
  }),
  label: new LayerConfigSchemaV0({
    key: 'label'
  }),
  color: new LayerConfigSchemaV0({
    key: 'color'
  }),
  isVisible: new LayerConfigSchemaV0({
    key: 'isVisible'
  }),
  // convert visConfig
  visConfig: new LayerVisConfigSchemaV0({
    key: 'visConfig'
  }),
  // move into layer.config
  // flatten
  columns: new LayerColumnsSchemaV0(),
  // save into visualChannels
  colorField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'colorField'
  }),
  colorScale: new DimensionScaleSchemaV0({
    key: 'colorScale'
  }),
  sizeField: new DimensionFieldSchemaV0({
    properties: dimensionPropsV0,
    key: 'sizeField'
  }),
  sizeScale: new DimensionScaleSchemaV0({
    key: 'sizeScale'
  }),
  // move into config.visConfig
  enable3d: new LayerConfigToVisConfigSchemaV0({
    key: 'enable3d'
  }),
  colorAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'colorAggregation'
  }),
  sizeAggregation: new LayerConfigToVisConfigSchemaV0({
    key: 'sizeAggregation'
  }),
  // delete
  isAggregated: new LayerConfigSchemaDeleteV0()
};
/**
 * V1 Schema
 */

exports.layerPropsV0 = layerPropsV0;

var ColumnSchemaV1 =
/*#__PURE__*/
function (_Schema8) {
  (0, _inherits2["default"])(ColumnSchemaV1, _Schema8);

  function ColumnSchemaV1() {
    (0, _classCallCheck2["default"])(this, ColumnSchemaV1);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf14["default"])(ColumnSchemaV1).apply(this, arguments));
  }

  (0, _createClass2["default"])(ColumnSchemaV1, [{
    key: "save",
    value: function save(columns, state) {
      // starting from v1, only save column value
      // fieldIdx will be calculated during merge
      return (0, _defineProperty2["default"])({}, this.key, Object.keys(columns).reduce(function (accu, ckey) {
        return (0, _objectSpread11["default"])({}, accu, (0, _defineProperty2["default"])({}, ckey, columns[ckey].value));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(columns) {
      return {
        columns: columns
      };
    }
  }]);
  return ColumnSchemaV1;
}(_schema["default"]);

var TextLabelSchemaV1 =
/*#__PURE__*/
function (_Schema9) {
  (0, _inherits2["default"])(TextLabelSchemaV1, _Schema9);

  function TextLabelSchemaV1() {
    (0, _classCallCheck2["default"])(this, TextLabelSchemaV1);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf14["default"])(TextLabelSchemaV1).apply(this, arguments));
  }

  (0, _createClass2["default"])(TextLabelSchemaV1, [{
    key: "save",
    value: function save(textLabel) {
      return (0, _defineProperty2["default"])({}, this.key, textLabel.map(function (tl) {
        return (0, _objectSpread11["default"])({}, tl, {
          field: tl.field ? (0, _lodash["default"])(tl.field, ['name', 'type']) : null
        });
      }));
    }
  }, {
    key: "load",
    value: function load(textLabel) {
      return {
        textLabel: Array.isArray(textLabel) ? textLabel : [textLabel]
      };
    }
  }]);
  return TextLabelSchemaV1;
}(_schema["default"]);

var visualChannelModificationV1 = {
  point: function point(vc, parents, accumulator) {
    var _parents$slice7 = parents.slice(-1),
        _parents$slice8 = (0, _slicedToArray2["default"])(_parents$slice7, 1),
        layer = _parents$slice8[0];

    if (layer.config.visConfig.outline && vc.colorField && !vc.hasOwnProperty('strokeColorField')) {
      // point layer now supports both outline and fill
      // for older schema where filled has not been added to point layer
      // copy colorField, colorScale to strokeColorField, and strokeColorScale
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale,
        colorField: null,
        colorScale: 'quantile'
      };
    }

    return {};
  },
  geojson: function geojson(vc, parents, accumulator) {
    var _parents$slice9 = parents.slice(-1),
        _parents$slice10 = (0, _slicedToArray2["default"])(_parents$slice9, 1),
        layer = _parents$slice10[0];

    var isOld = !vc.hasOwnProperty('strokeColorField'); // make our best guess if this geojson layer contains point

    var isPoint = vc.radiusField || layer.config.visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld && !isPoint && layer.config.visConfig.stroked) {
      // if stroked is true, copy color config to stroke color config
      return {
        strokeColorField: vc.colorField,
        strokeColorScale: vc.colorScale
      };
    }

    return {};
  }
};
/**
 * V1: save [field]: {name, type}, [scale]: '' for each channel
 */

var VisualChannelSchemaV1 =
/*#__PURE__*/
function (_Schema10) {
  (0, _inherits2["default"])(VisualChannelSchemaV1, _Schema10);

  function VisualChannelSchemaV1() {
    (0, _classCallCheck2["default"])(this, VisualChannelSchemaV1);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf14["default"])(VisualChannelSchemaV1).apply(this, arguments));
  }

  (0, _createClass2["default"])(VisualChannelSchemaV1, [{
    key: "save",
    value: function save(visualChannels, parents) {
      // only save field and scale of each channel
      var _parents$slice11 = parents.slice(-1),
          _parents$slice12 = (0, _slicedToArray2["default"])(_parents$slice11, 1),
          layer = _parents$slice12[0];

      return (0, _defineProperty2["default"])({}, this.key, Object.keys(visualChannels).reduce( //  save channel to null if didn't select any field
      function (accu, key) {
        var _objectSpread8;

        return (0, _objectSpread11["default"])({}, accu, (_objectSpread8 = {}, (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].field, layer.config[visualChannels[key].field] ? (0, _lodash["default"])(layer.config[visualChannels[key].field], ['name', 'type']) : null), (0, _defineProperty2["default"])(_objectSpread8, visualChannels[key].scale, layer.config[visualChannels[key].scale]), _objectSpread8));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(vc, parents, accumulator) {
      // fold channels into config
      var _parents$slice13 = parents.slice(-1),
          _parents$slice14 = (0, _slicedToArray2["default"])(_parents$slice13, 1),
          layer = _parents$slice14[0];

      var modified = visualChannelModificationV1[layer.type] ? visualChannelModificationV1[layer.type](vc, parents, accumulator) : {};
      return (0, _objectSpread11["default"])({}, accumulator, {
        config: (0, _objectSpread11["default"])({}, accumulator.config || {}, vc, modified)
      });
    }
  }]);
  return VisualChannelSchemaV1;
}(_schema["default"]);

var visConfigModificationV1 = {
  point: function point(visConfig, parents, accumulated) {
    var modified = {};

    var _parents$slice15 = parents.slice(-2, -1),
        _parents$slice16 = (0, _slicedToArray2["default"])(_parents$slice15, 1),
        layer = _parents$slice16[0];

    var isOld = !visConfig.hasOwnProperty('filled') && !visConfig.strokeColor && !visConfig.strokeColorRange;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (visConfig.outline) {
        // point layer now supports both outline and fill
        // for older schema where filled has not been added to point layer
        // set it to false
        modified.filled = false;
      }
    }

    return modified;
  },
  geojson: function geojson(visConfig, parents, accumulated) {
    // is points?
    var modified = {};

    var _parents$slice17 = parents.slice(-2, -1),
        _parents$slice18 = (0, _slicedToArray2["default"])(_parents$slice17, 1),
        layer = _parents$slice18[0];

    var isOld = !layer.visualChannels.hasOwnProperty('strokeColorField') && !visConfig.strokeColor && !visConfig.strokeColorRange; // make our best guess if this geojson layer contains point

    var isPoint = layer.visualChannels.radiusField || visConfig.radius !== _layerFactory.LAYER_VIS_CONFIGS.radius.defaultValue;

    if (isOld) {
      // color color & color range to stroke color
      modified.strokeColor = layer.config.color;
      modified.strokeColorRange = (0, _lodash2["default"])(visConfig.colorRange);

      if (isPoint) {
        // if is point, set stroke to false
        modified.filled = true;
        modified.stroked = false;
      }
    }

    return modified;
  }
};

var VisConfigSchemaV1 =
/*#__PURE__*/
function (_Schema11) {
  (0, _inherits2["default"])(VisConfigSchemaV1, _Schema11);

  function VisConfigSchemaV1() {
    var _getPrototypeOf9;

    var _this8;

    (0, _classCallCheck2["default"])(this, VisConfigSchemaV1);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this8 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf9 = (0, _getPrototypeOf14["default"])(VisConfigSchemaV1)).call.apply(_getPrototypeOf9, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this8), "key", 'visConfig');
    return _this8;
  }

  (0, _createClass2["default"])(VisConfigSchemaV1, [{
    key: "load",
    value: function load(visConfig, parents, accumulated) {
      var _parents$slice19 = parents.slice(-2, -1),
          _parents$slice20 = (0, _slicedToArray2["default"])(_parents$slice19, 1),
          layer = _parents$slice20[0];

      var modified = visConfigModificationV1[layer.type] ? visConfigModificationV1[layer.type](visConfig, parents, accumulated) : {};
      return {
        visConfig: (0, _objectSpread11["default"])({}, visConfig, modified)
      };
    }
  }]);
  return VisConfigSchemaV1;
}(_schema["default"]);

var layerPropsV1 = {
  id: null,
  type: null,
  config: new _schema["default"]({
    version: _versions.VERSIONS.v1,
    key: 'config',
    properties: {
      dataId: null,
      label: null,
      color: null,
      columns: new ColumnSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'columns'
      }),
      isVisible: null,
      visConfig: new VisConfigSchemaV1({
        version: _versions.VERSIONS.v1
      }),
      textLabel: new TextLabelSchemaV1({
        version: _versions.VERSIONS.v1,
        key: 'textLabel'
      })
    }
  }),
  visualChannels: new VisualChannelSchemaV1({
    version: _versions.VERSIONS.v1,
    key: 'visualChannels'
  })
};
exports.layerPropsV1 = layerPropsV1;

var LayerSchemaV0 =
/*#__PURE__*/
function (_Schema12) {
  (0, _inherits2["default"])(LayerSchemaV0, _Schema12);

  function LayerSchemaV0() {
    var _getPrototypeOf10;

    var _this9;

    (0, _classCallCheck2["default"])(this, LayerSchemaV0);

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    _this9 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf10 = (0, _getPrototypeOf14["default"])(LayerSchemaV0)).call.apply(_getPrototypeOf10, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this9), "key", 'layers');
    return _this9;
  }

  (0, _createClass2["default"])(LayerSchemaV0, [{
    key: "save",
    value: function save(layers, parents) {
      var _this10 = this;

      var _parents$slice21 = parents.slice(-1),
          _parents$slice22 = (0, _slicedToArray2["default"])(_parents$slice21, 1),
          visState = _parents$slice22[0];

      return (0, _defineProperty2["default"])({}, this.key, visState.layerOrder.reduce(function (saved, index) {
        // save layers according to their rendering order
        var layer = layers[index];

        if (layer.isValidToSave()) {
          saved.push(_this10.savePropertiesOrApplySchema(layer).layers);
        }

        return saved;
      }, []));
    }
  }, {
    key: "load",
    value: function load(layers) {
      var _this11 = this;

      return (0, _defineProperty2["default"])({}, this.key, layers.map(function (layer) {
        return _this11.loadPropertiesOrApplySchema(layer, layers).layers;
      }));
    }
  }]);
  return LayerSchemaV0;
}(_schema["default"]);

var FilterSchemaV0 =
/*#__PURE__*/
function (_Schema13) {
  (0, _inherits2["default"])(FilterSchemaV0, _Schema13);

  function FilterSchemaV0() {
    var _getPrototypeOf11;

    var _this12;

    (0, _classCallCheck2["default"])(this, FilterSchemaV0);

    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    _this12 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf11 = (0, _getPrototypeOf14["default"])(FilterSchemaV0)).call.apply(_getPrototypeOf11, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this12), "key", 'filters');
    return _this12;
  }

  (0, _createClass2["default"])(FilterSchemaV0, [{
    key: "save",
    value: function save(filters) {
      var _this13 = this;

      return {
        filters: filters.filter(_filterUtils.isValidFilterValue).map(function (filter) {
          return _this13.savePropertiesOrApplySchema(filter).filters;
        })
      };
    }
  }, {
    key: "load",
    value: function load(filters) {
      return {
        filters: filters
      };
    }
  }]);
  return FilterSchemaV0;
}(_schema["default"]);

var interactionPropsV0 = ['tooltip', 'brush'];

var InteractionSchemaV0 =
/*#__PURE__*/
function (_Schema14) {
  (0, _inherits2["default"])(InteractionSchemaV0, _Schema14);

  function InteractionSchemaV0() {
    var _getPrototypeOf12;

    var _this14;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV0);

    for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      args[_key11] = arguments[_key11];
    }

    _this14 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf12 = (0, _getPrototypeOf14["default"])(InteractionSchemaV0)).call.apply(_getPrototypeOf12, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this14), "key", 'interactionConfig');
    return _this14;
  }

  (0, _createClass2["default"])(InteractionSchemaV0, [{
    key: "save",
    value: function save(interactionConfig) {
      return (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return (0, _objectSpread11["default"])({}, accu, interactionConfig[key].enabled ? (0, _defineProperty2["default"])({}, key, interactionConfig[key].config) : {});
      }, {}));
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      // convert v0 -> v1
      // return enabled: false if disabled,
      return (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return (0, _objectSpread11["default"])({}, accu, (0, _defineProperty2["default"])({}, key, (0, _objectSpread11["default"])({}, interactionConfig[key] || {}, {
          enabled: Boolean(interactionConfig[key])
        })));
      }, {}));
    }
  }]);
  return InteractionSchemaV0;
}(_schema["default"]);

var InteractionSchemaV1 =
/*#__PURE__*/
function (_Schema15) {
  (0, _inherits2["default"])(InteractionSchemaV1, _Schema15);

  function InteractionSchemaV1() {
    var _getPrototypeOf13;

    var _this15;

    (0, _classCallCheck2["default"])(this, InteractionSchemaV1);

    for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      args[_key12] = arguments[_key12];
    }

    _this15 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf13 = (0, _getPrototypeOf14["default"])(InteractionSchemaV1)).call.apply(_getPrototypeOf13, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this15), "key", 'interactionConfig');
    return _this15;
  }

  (0, _createClass2["default"])(InteractionSchemaV1, [{
    key: "save",
    value: function save(interactionConfig) {
      // save config even if disabled,
      return (0, _defineProperty2["default"])({}, this.key, this.properties.reduce(function (accu, key) {
        return (0, _objectSpread11["default"])({}, accu, (0, _defineProperty2["default"])({}, key, (0, _objectSpread11["default"])({}, interactionConfig[key].config, {
          enabled: interactionConfig[key].enabled
        })));
      }, {}));
    }
  }, {
    key: "load",
    value: function load(interactionConfig) {
      return (0, _defineProperty2["default"])({}, this.key, interactionConfig);
    }
  }]);
  return InteractionSchemaV1;
}(_schema["default"]);

var filterPropsV0 = {
  dataId: null,
  id: null,
  name: null,
  type: null,
  value: null,
  enlarged: null
};
exports.filterPropsV0 = filterPropsV0;

var DimensionFieldSchema =
/*#__PURE__*/
function (_Schema16) {
  (0, _inherits2["default"])(DimensionFieldSchema, _Schema16);

  function DimensionFieldSchema() {
    (0, _classCallCheck2["default"])(this, DimensionFieldSchema);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf14["default"])(DimensionFieldSchema).apply(this, arguments));
  }

  (0, _createClass2["default"])(DimensionFieldSchema, [{
    key: "save",
    value: function save(field) {
      return (0, _defineProperty2["default"])({}, this.key, field ? this.savePropertiesOrApplySchema(field)[this.key] : null);
    }
  }, {
    key: "load",
    value: function load(field) {
      return (0, _defineProperty2["default"])({}, this.key, field);
    }
  }]);
  return DimensionFieldSchema;
}(_schema["default"]);

exports.DimensionFieldSchema = DimensionFieldSchema;
var filterPropsV1 = (0, _objectSpread11["default"])({}, filterPropsV0, {
  plotType: null,
  yAxis: new DimensionFieldSchema({
    version: _versions.VERSIONS.v1,
    key: 'yAxis',
    properties: {
      name: null,
      type: null
    }
  })
});
exports.filterPropsV1 = filterPropsV1;
var propertiesV0 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: filterPropsV0
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: layerPropsV0
  }),
  interactionConfig: new InteractionSchemaV0({
    version: _versions.VERSIONS.v0,
    properties: interactionPropsV0
  }),
  layerBlending: null
};
exports.propertiesV0 = propertiesV0;
var propertiesV1 = {
  filters: new FilterSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: filterPropsV1
  }),
  layers: new LayerSchemaV0({
    version: _versions.VERSIONS.v1,
    properties: layerPropsV1
  }),
  interactionConfig: new InteractionSchemaV1({
    version: _versions.VERSIONS.v1,
    properties: interactionPropsV0
  }),
  layerBlending: null,
  splitMaps: null
};
exports.propertiesV1 = propertiesV1;
var visStateSchemaV0 = new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'visState'
});
exports.visStateSchemaV0 = visStateSchemaV0;
var visStateSchemaV1 = new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'visState'
});
exports.visStateSchemaV1 = visStateSchemaV1;
var visStateSchema = (_visStateSchema = {}, (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v0, {
  save: function save(toSave) {
    return visStateSchemaV0.save(toSave);
  },
  load: function load(toLoad) {
    return visStateSchemaV1.load(visStateSchemaV0.load(toLoad).visState);
  }
}), (0, _defineProperty2["default"])(_visStateSchema, _versions.VERSIONS.v1, visStateSchemaV1), _visStateSchema); // test load v0

exports.visStateSchema = visStateSchema;
var _default = visStateSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Zpcy1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiZGltZW5zaW9uUHJvcHNWMCIsImdlb2pzb25TaXplRmllbGRWMFRvVjEiLCJjb25maWciLCJkZWZhdWx0UmFpdWRzIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwidmlzQ29uZmlnIiwiZXh0cnVkZWQiLCJzdHJva2VkIiwicmFkaXVzIiwicmFkaXVzUmFuZ2UiLCJzb21lIiwiZCIsImkiLCJEaW1lbnNpb25GaWVsZFNjaGVtYVYwIiwiVkVSU0lPTlMiLCJ2MCIsImZpZWxkIiwia2V5Iiwic2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwicGFyZW50cyIsImFjY3VtdWxhdGVkIiwic2xpY2UiLCJmaWVsZE5hbWUiLCJ0eXBlIiwidmlzdWFsQ2hhbm5lbHMiLCJTY2hlbWEiLCJEaW1lbnNpb25TY2FsZVNjaGVtYVYwIiwic2NhbGUiLCJMYXllckNvbmZpZ1NjaGVtYVYwIiwic2F2ZWQiLCJMYXllckNvbHVtbnNTY2hlbWFWMCIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsInZhbHVlIiwiTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0ZWRDb25maWciLCJMYXllclZpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0b3IiLCJyZW5hbWUiLCJnZW9qc29uIiwiZWxldmF0aW9uUmFuZ2UiLCJwcm9wVG9SZW5hbWUiLCJMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIiwibGF5ZXJQcm9wc1YwIiwiaWQiLCJkYXRhSWQiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiY29sb3JGaWVsZCIsInByb3BlcnRpZXMiLCJjb2xvclNjYWxlIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiZW5hYmxlM2QiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaXNBZ2dyZWdhdGVkIiwiQ29sdW1uU2NoZW1hVjEiLCJzdGF0ZSIsImNrZXkiLCJUZXh0TGFiZWxTY2hlbWFWMSIsInRleHRMYWJlbCIsIm1hcCIsInRsIiwiQXJyYXkiLCJpc0FycmF5IiwidmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxIiwicG9pbnQiLCJ2YyIsImxheWVyIiwib3V0bGluZSIsImhhc093blByb3BlcnR5Iiwic3Ryb2tlQ29sb3JGaWVsZCIsInN0cm9rZUNvbG9yU2NhbGUiLCJpc09sZCIsImlzUG9pbnQiLCJyYWRpdXNGaWVsZCIsIkxBWUVSX1ZJU19DT05GSUdTIiwiZGVmYXVsdFZhbHVlIiwiVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIiwibW9kaWZpZWQiLCJ2aXNDb25maWdNb2RpZmljYXRpb25WMSIsInN0cm9rZUNvbG9yIiwic3Ryb2tlQ29sb3JSYW5nZSIsImNvbG9yUmFuZ2UiLCJmaWxsZWQiLCJWaXNDb25maWdTY2hlbWFWMSIsImxheWVyUHJvcHNWMSIsInZlcnNpb24iLCJ2MSIsIkxheWVyU2NoZW1hVjAiLCJsYXllcnMiLCJ2aXNTdGF0ZSIsImxheWVyT3JkZXIiLCJpbmRleCIsImlzVmFsaWRUb1NhdmUiLCJwdXNoIiwibG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwiRmlsdGVyU2NoZW1hVjAiLCJmaWx0ZXJzIiwiZmlsdGVyIiwiaXNWYWxpZEZpbHRlclZhbHVlIiwiaW50ZXJhY3Rpb25Qcm9wc1YwIiwiSW50ZXJhY3Rpb25TY2hlbWFWMCIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlZCIsIkJvb2xlYW4iLCJJbnRlcmFjdGlvblNjaGVtYVYxIiwiZmlsdGVyUHJvcHNWMCIsIm5hbWUiLCJlbmxhcmdlZCIsIkRpbWVuc2lvbkZpZWxkU2NoZW1hIiwiZmlsdGVyUHJvcHNWMSIsInBsb3RUeXBlIiwieUF4aXMiLCJwcm9wZXJ0aWVzVjAiLCJsYXllckJsZW5kaW5nIiwicHJvcGVydGllc1YxIiwic3BsaXRNYXBzIiwidmlzU3RhdGVTY2hlbWFWMCIsInZpc1N0YXRlU2NoZW1hVjEiLCJ2aXNTdGF0ZVNj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QUEsSUFBSSxFQUFFLGNBQUFDLE1BQU07QUFBQSxXQUNWTCxnQkFBZ0IsQ0FBQ0ksSUFBakIsQ0FBc0JMLGdCQUFnQixDQUFDSyxJQUFqQixDQUFzQkMsTUFBdEIsRUFBOEJqQyxRQUFwRCxDQURVO0FBQUE7QUFGQyxDQURVLHFEQU14QmxGLG1CQUFTK0UsRUFOZSxFQU1WK0IsZ0JBTlUsbUJBQXBCLEMsQ0FTUDs7O2VBQ2VDLGMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgcGljayBmcm9tICdsb2Rhc2gucGljayc7XG5pbXBvcnQge1ZFUlNJT05TfSBmcm9tICcuL3ZlcnNpb25zJztcbmltcG9ydCB7aXNWYWxpZEZpbHRlclZhbHVlfSBmcm9tICd1dGlscy9maWx0ZXItdXRpbHMnO1xuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHU30gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xuaW1wb3J0IFNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgY2xvbmVEZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xuXG4vKipcbiAqIFYwIFNjaGVtYVxuICovXG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb25Qcm9wc1YwID0gWyduYW1lJywgJ3R5cGUnXTtcblxuLy8gaW4gdjAgZ2VvanNvbiB0aGVyZSBpcyBvbmx5IHNpemVGaWVsZFxuXG4vLyBpbiB2MSBnZW9qc29uXG4vLyBzdHJva2UgYmFzZSBvbiAtPiBzaXplRmllbGRcbi8vIGhlaWdodCBiYXNlZCBvbiAtPiBoZWlnaHRGaWVsZFxuLy8gcmFkaXVzIGJhc2VkIG9uIC0+IHJhZGl1c0ZpZWxkXG4vLyBoZXJlIHdlIG1ha2Ugb3VyIHdpcmVkc3QgZ3Vlc3Mgb24gd2hpY2ggY2hhbm5lbCBzaXplRmllbGQgYmVsb25ncyB0b1xuZnVuY3Rpb24gZ2VvanNvblNpemVGaWVsZFYwVG9WMShjb25maWcpIHtcbiAgY29uc3QgZGVmYXVsdFJhaXVkcyA9IDEwO1xuICBjb25zdCBkZWZhdWx0UmFkaXVzUmFuZ2UgPSBbMCwgNTBdO1xuXG4gIC8vIGlmIGV4dHJ1ZGVkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3IgaGVpZ2h0XG4gIGlmIChjb25maWcudmlzQ29uZmlnLmV4dHJ1ZGVkKSB7XG4gICAgcmV0dXJuICdoZWlnaHRGaWVsZCc7XG4gIH1cblxuICAvLyBpZiBzaG93IHN0cm9rZSBlbmFibGVkLCBzaXplRmllbGQgaXMgbW9zdCBsaWtlbHkgdXNlZCBmb3Igc3Ryb2tlXG4gIGlmIChjb25maWcudmlzQ29uZmlnLnN0cm9rZWQpIHtcbiAgICByZXR1cm4gJ3NpemVGaWVsZCc7XG4gIH1cblxuICAvLyBpZiByYWRpdXMgY2hhbmdlZCwgb3IgcmFkaXVzIFJhbmdlIENoYW5nZWQsIHNpemVGaWVsZCBpcyBtb3N0IGxpa2VseSB1c2VkIGZvciByYWRpdXNcbiAgLy8gdGhpcyBpcyB0aGUgbW9zdCB1bnJlbGlhYmxlIGd1ZXNzLCB0aGF0J3Mgd2h5IHdlIHB1dCBpdCBpbiB0aGUgZW5kXG4gIGlmIChcbiAgICBjb25maWcudmlzQ29uZmlnLnJhZGl1cyAhPT0gZGVmYXVsdFJhaXVkcyB8fFxuICAgIGNvbmZpZy52aXNDb25maWcucmFkaXVzUmFuZ2Uuc29tZSgoZCwgaSkgPT4gZCAhPT0gZGVmYXVsdFJhZGl1c1JhbmdlW2ldKVxuICApIHtcbiAgICByZXR1cm4gJ3JhZGl1c0ZpZWxkJztcbiAgfVxuXG4gIHJldHVybiAnc2l6ZUZpZWxkJztcbn1cblxuLy8gY29udmVydCB2MCB0byB2MSBsYXllciBjb25maWdcbmNsYXNzIERpbWVuc2lvbkZpZWxkU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIHNhdmUoZmllbGQpIHtcbiAgICAvLyBzaG91bGQgbm90IGJlIGNhbGxlZCBhbnltb3JlXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06XG4gICAgICAgIGZpZWxkICE9PSBudWxsXG4gICAgICAgICAgPyB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWVsZClbdGhpcy5rZXldXG4gICAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQoZmllbGQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgY29uc3QgW2NvbmZpZ10gPSBwYXJlbnRzLnNsaWNlKC0xKTtcbiAgICBsZXQgZmllbGROYW1lID0gdGhpcy5rZXk7XG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnZ2VvanNvbicgJiYgdGhpcy5rZXkgPT09ICdzaXplRmllbGQnICYmIGZpZWxkKSB7XG4gICAgICBmaWVsZE5hbWUgPSBnZW9qc29uU2l6ZUZpZWxkVjBUb1YxKGNvbmZpZyk7XG4gICAgfVxuICAgIC8vIGZvbGQgaW50byB2aXN1YWxDaGFubmVscyB0byBiZSBsb2FkIGJ5IFZpc3VhbENoYW5uZWxTY2hlbWFWMVxuICAgIHJldHVybiB7XG4gICAgICB2aXN1YWxDaGFubmVsczoge1xuICAgICAgICAuLi4oYWNjdW11bGF0ZWQudmlzdWFsQ2hhbm5lbHMgfHwge30pLFxuICAgICAgICBbZmllbGROYW1lXTogZmllbGRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIERpbWVuc2lvblNjYWxlU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIHNhdmUoc2NhbGUpIHtcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IHNjYWxlfTtcbiAgfVxuICBsb2FkKHNjYWxlLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIGNvbnN0IFtjb25maWddID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgLy8gZm9sZCBpbnRvIHZpc3VhbENoYW5uZWxzIHRvIGJlIGxvYWQgYnkgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXG4gICAgaWYgKHRoaXMua2V5ID09PSAnc2l6ZVNjYWxlJyAmJiBjb25maWcudHlwZSA9PT0gJ2dlb2pzb24nKSB7XG4gICAgICAvLyBzaXplU2NhbGUgbm93IHNwbGl0IGludG8gcmFkaXVzU2NhbGUsIGhlaWdodFNjYWxlXG4gICAgICAvLyBubyB1c2VyIGN1c3RvbWl6YXRpb24sIGp1c3QgdXNlIGRlZmF1bHRcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzdWFsQ2hhbm5lbHM6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLnZpc3VhbENoYW5uZWxzIHx8IHt9KSxcbiAgICAgICAgW3RoaXMua2V5XTogc2NhbGVcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbi8vIHVzZWQgdG8gY29udmVydCB2MCB0byB2MSBsYXllciBjb25maWdcbmNsYXNzIExheWVyQ29uZmlnU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy5rZXlcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC5jb25maWcgfHwge30pLFxuICAgICAgICBbdGhpcy5rZXldOiBzYXZlZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbHVtbnNcbi8vIG9ubHkgcmV0dXJuIGNvbHVtbiB2YWx1ZSBmb3IgZWFjaCBjb2x1bW5cbmNsYXNzIExheWVyQ29sdW1uc1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBsb2FkKHNhdmVkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIC8vIGZvbGQgdjAgbGF5ZXIgcHJvcGVydHkgaW50byBjb25maWcua2V5LCBmbGF0dGVuIGNvbHVtbnNcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC5jb25maWcgfHwge30pLFxuICAgICAgICBjb2x1bW5zOiBPYmplY3Qua2V5cyhzYXZlZCkucmVkdWNlKFxuICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgW2tleV06IHNhdmVkW2tleV0udmFsdWVcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7fVxuICAgICAgICApXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG4vLyB1c2VkIHRvIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29uZmlnLnZpc0NvbmZpZ1xuY2xhc3MgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBsb2FkKHNhdmVkLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIC8vIGZvbGQgdjAgbGF5ZXIgcHJvcGVydHkgaW50byBjb25maWcudmlzQ29uZmlnXG4gICAgY29uc3QgYWNjdW11bGF0ZWRDb25maWcgPSBhY2N1bXVsYXRlZC5jb25maWcgfHwge307XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi5hY2N1bXVsYXRlZENvbmZpZyxcbiAgICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgICAgLi4uKGFjY3VtdWxhdGVkQ29uZmlnLnZpc0NvbmZpZyB8fCB7fSksXG4gICAgICAgICAgW3RoaXMua2V5XTogc2F2ZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuY2xhc3MgTGF5ZXJWaXNDb25maWdTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAga2V5ID0gJ3Zpc0NvbmZpZyc7XG5cbiAgbG9hZCh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSB7XG4gICAgY29uc3QgW2NvbmZpZ10gPSBwYXJlbnRzLnNsaWNlKC0xKTtcbiAgICBjb25zdCByZW5hbWUgPSB7XG4gICAgICBnZW9qc29uOiB7XG4gICAgICAgIGV4dHJ1ZGVkOiAnZW5hYmxlM2QnLFxuICAgICAgICBlbGV2YXRpb25SYW5nZTogJ2hlaWdodFJhbmdlJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoY29uZmlnLnR5cGUgaW4gcmVuYW1lKSB7XG4gICAgICBjb25zdCBwcm9wVG9SZW5hbWUgPSByZW5hbWVbY29uZmlnLnR5cGVdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgICAgdmlzQ29uZmlnOiBPYmplY3Qua2V5cyh2aXNDb25maWcpLnJlZHVjZShcbiAgICAgICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICAgIC4uLihwcm9wVG9SZW5hbWVba2V5XVxuICAgICAgICAgICAgICAgID8ge1twcm9wVG9SZW5hbWVba2V5XV06IHZpc0NvbmZpZ1trZXldfVxuICAgICAgICAgICAgICAgIDoge1trZXldOiB2aXNDb25maWdba2V5XX0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHt9XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIHZpc0NvbmZpZ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuY2xhc3MgTGF5ZXJDb25maWdTY2hlbWFEZWxldGVWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgbG9hZCh2YWx1ZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG4vKipcbiAqIFYwIC0+IFYxIENoYW5nZXNcbiAqIC0gbGF5ZXIgaXMgbm93IGEgY2xhc3NcbiAqIC0gY29uZmlnIHNhdmVkIGluIGEgY29uZmlnIG9iamVjdFxuICogLSBpZCwgdHlwZSwgaXNBZ2dyZWdhdGVkIGlzIG91dHNpZGUgbGF5ZXIuY29uZmlnXG4gKiAtIHZpc3VhbENoYW5uZWxzIGlzIG91dHNpZGUgY29uZmlnLCBpdCBkZWZpbmVzIGF2YWlsYWJsZSB2aXN1YWwgY2hhbm5lbCBhbmRcbiAqICAgcHJvcGVydHkgbmFtZXMgZm9yIGZpZWxkLCBzY2FsZSwgZG9tYWluIGFuZCByYW5nZSBvZiBlYWNoIHZpc3VhbCBjaGFuZWwuXG4gKiAtIGVuYWJsZTNkLCBjb2xvckFnZ3JlZ2F0aW9uIGFuZCBzaXplQWdncmVnYXRpb24gYXJlIG1vdmVkIGludG8gdmlzQ29uZmlnXG4gKiAtIEdlb2pzb25MYXllciAtIGFkZGVkIGhlaWdodCwgcmFkaXVzIHNwZWNpZmljIHByb3BlcnRpZXNcbiAqL1xuXG5leHBvcnQgY29uc3QgbGF5ZXJQcm9wc1YwID0ge1xuICBpZDogbnVsbCxcbiAgdHlwZTogbnVsbCxcblxuICAvLyBtb3ZlIGludG8gbGF5ZXIuY29uZmlnXG4gIGRhdGFJZDogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2RhdGFJZCd9KSxcbiAgbGFiZWw6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdsYWJlbCd9KSxcbiAgY29sb3I6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdjb2xvcid9KSxcbiAgaXNWaXNpYmxlOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnaXNWaXNpYmxlJ30pLFxuXG4gIC8vIGNvbnZlcnQgdmlzQ29uZmlnXG4gIHZpc0NvbmZpZzogbmV3IExheWVyVmlzQ29uZmlnU2NoZW1hVjAoe2tleTogJ3Zpc0NvbmZpZyd9KSxcblxuICAvLyBtb3ZlIGludG8gbGF5ZXIuY29uZmlnXG4gIC8vIGZsYXR0ZW5cbiAgY29sdW1uczogbmV3IExheWVyQ29sdW1uc1NjaGVtYVYwKCksXG5cbiAgLy8gc2F2ZSBpbnRvIHZpc3VhbENoYW5uZWxzXG4gIGNvbG9yRmllbGQ6IG5ldyBEaW1lbnNpb25GaWVsZFNjaGVtYVYwKHtcbiAgICBwcm9wZXJ0aWVzOiBkaW1lbnNpb25Qcm9wc1YwLFxuICAgIGtleTogJ2NvbG9yRmllbGQnXG4gIH0pLFxuICBjb2xvclNjYWxlOiBuZXcgRGltZW5zaW9uU2NhbGVTY2hlbWFWMCh7XG4gICAga2V5OiAnY29sb3JTY2FsZSdcbiAgfSksXG4gIHNpemVGaWVsZDogbmV3IERpbWVuc2lvbkZpZWxkU2NoZW1hVjAoe1xuICAgIHByb3BlcnRpZXM6IGRpbWVuc2lvblByb3BzVjAsXG4gICAga2V5OiAnc2l6ZUZpZWxkJ1xuICB9KSxcbiAgc2l6ZVNjYWxlOiBuZXcgRGltZW5zaW9uU2NhbGVTY2hlbWFWMCh7XG4gICAga2V5OiAnc2l6ZVNjYWxlJ1xuICB9KSxcblxuICAvLyBtb3ZlIGludG8gY29uZmlnLnZpc0NvbmZpZ1xuICBlbmFibGUzZDogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7a2V5OiAnZW5hYmxlM2QnfSksXG4gIGNvbG9yQWdncmVnYXRpb246IG5ldyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAoe1xuICAgIGtleTogJ2NvbG9yQWdncmVnYXRpb24nXG4gIH0pLFxuICBzaXplQWdncmVnYXRpb246IG5ldyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAoe2tleTogJ3NpemVBZ2dyZWdhdGlvbid9KSxcblxuICAvLyBkZWxldGVcbiAgaXNBZ2dyZWdhdGVkOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFEZWxldGVWMCgpXG59O1xuXG4vKipcbiAqIFYxIFNjaGVtYVxuICovXG5jbGFzcyBDb2x1bW5TY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XG4gIHNhdmUoY29sdW1ucywgc3RhdGUpIHtcbiAgICAvLyBzdGFydGluZyBmcm9tIHYxLCBvbmx5IHNhdmUgY29sdW1uIHZhbHVlXG4gICAgLy8gZmllbGRJZHggd2lsbCBiZSBjYWxjdWxhdGVkIGR1cmluZyBtZXJnZVxuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiBPYmplY3Qua2V5cyhjb2x1bW5zKS5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBja2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW2NrZXldOiBjb2x1bW5zW2NrZXldLnZhbHVlXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH07XG4gIH1cblxuICBsb2FkKGNvbHVtbnMpIHtcbiAgICByZXR1cm4ge2NvbHVtbnN9O1xuICB9XG59XG5cbmNsYXNzIFRleHRMYWJlbFNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcbiAgc2F2ZSh0ZXh0TGFiZWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogdGV4dExhYmVsLm1hcCh0bCA9PiAoe1xuICAgICAgICAuLi50bCxcbiAgICAgICAgZmllbGQ6IHRsLmZpZWxkID8gcGljayh0bC5maWVsZCwgWyduYW1lJywgJ3R5cGUnXSkgOiBudWxsXG4gICAgICB9KSlcbiAgICB9O1xuICB9XG5cbiAgbG9hZCh0ZXh0TGFiZWwpIHtcbiAgICByZXR1cm4ge3RleHRMYWJlbDogQXJyYXkuaXNBcnJheSh0ZXh0TGFiZWwpID8gdGV4dExhYmVsIDogW3RleHRMYWJlbF19O1xuICB9XG59XG5cbmNvbnN0IHZpc3VhbENoYW5uZWxNb2RpZmljYXRpb25WMSA9IHtcbiAgcG9pbnQ6ICh2YywgcGFyZW50cywgYWNjdW11bGF0b3IpID0+IHtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG5cbiAgICBpZiAoXG4gICAgICBsYXllci5jb25maWcudmlzQ29uZmlnLm91dGxpbmUgJiZcbiAgICAgIHZjLmNvbG9yRmllbGQgJiZcbiAgICAgICF2Yy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpXG4gICAgKSB7XG4gICAgICAvLyBwb2ludCBsYXllciBub3cgc3VwcG9ydHMgYm90aCBvdXRsaW5lIGFuZCBmaWxsXG4gICAgICAvLyBmb3Igb2xkZXIgc2NoZW1hIHdoZXJlIGZpbGxlZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gcG9pbnQgbGF5ZXJcbiAgICAgIC8vIGNvcHkgY29sb3JGaWVsZCwgY29sb3JTY2FsZSB0byBzdHJva2VDb2xvckZpZWxkLCBhbmQgc3Ryb2tlQ29sb3JTY2FsZVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogdmMuY29sb3JGaWVsZCxcbiAgICAgICAgc3Ryb2tlQ29sb3JTY2FsZTogdmMuY29sb3JTY2FsZSxcbiAgICAgICAgY29sb3JGaWVsZDogbnVsbCxcbiAgICAgICAgY29sb3JTY2FsZTogJ3F1YW50aWxlJ1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBnZW9qc29uOiAodmMsIHBhcmVudHMsIGFjY3VtdWxhdG9yKSA9PiB7XG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGNvbnN0IGlzT2xkID0gIXZjLmhhc093blByb3BlcnR5KCdzdHJva2VDb2xvckZpZWxkJyk7XG4gICAgLy8gbWFrZSBvdXIgYmVzdCBndWVzcyBpZiB0aGlzIGdlb2pzb24gbGF5ZXIgY29udGFpbnMgcG9pbnRcbiAgICBjb25zdCBpc1BvaW50ID1cbiAgICAgIHZjLnJhZGl1c0ZpZWxkIHx8XG4gICAgICBsYXllci5jb25maWcudmlzQ29uZmlnLnJhZGl1cyAhPT0gTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzLmRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChpc09sZCAmJiAhaXNQb2ludCAmJiBsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZWQpIHtcbiAgICAgIC8vIGlmIHN0cm9rZWQgaXMgdHJ1ZSwgY29weSBjb2xvciBjb25maWcgdG8gc3Ryb2tlIGNvbG9yIGNvbmZpZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogdmMuY29sb3JGaWVsZCxcbiAgICAgICAgc3Ryb2tlQ29sb3JTY2FsZTogdmMuY29sb3JTY2FsZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG59O1xuLyoqXG4gKiBWMTogc2F2ZSBbZmllbGRdOiB7bmFtZSwgdHlwZX0sIFtzY2FsZV06ICcnIGZvciBlYWNoIGNoYW5uZWxcbiAqL1xuY2xhc3MgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcbiAgc2F2ZSh2aXN1YWxDaGFubmVscywgcGFyZW50cykge1xuICAgIC8vIG9ubHkgc2F2ZSBmaWVsZCBhbmQgc2NhbGUgb2YgZWFjaCBjaGFubmVsXG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiBPYmplY3Qua2V5cyh2aXN1YWxDaGFubmVscykucmVkdWNlKFxuICAgICAgICAvLyAgc2F2ZSBjaGFubmVsIHRvIG51bGwgaWYgZGlkbid0IHNlbGVjdCBhbnkgZmllbGRcbiAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgIFt2aXN1YWxDaGFubmVsc1trZXldLmZpZWxkXTogbGF5ZXIuY29uZmlnW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdXG4gICAgICAgICAgICA/IHBpY2sobGF5ZXIuY29uZmlnW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdLCBbJ25hbWUnLCAndHlwZSddKVxuICAgICAgICAgICAgOiBudWxsLFxuICAgICAgICAgIFt2aXN1YWxDaGFubmVsc1trZXldLnNjYWxlXTogbGF5ZXIuY29uZmlnW3Zpc3VhbENoYW5uZWxzW2tleV0uc2NhbGVdXG4gICAgICAgIH0pLFxuICAgICAgICB7fVxuICAgICAgKVxuICAgIH07XG4gIH1cbiAgbG9hZCh2YywgcGFyZW50cywgYWNjdW11bGF0b3IpIHtcbiAgICAvLyBmb2xkIGNoYW5uZWxzIGludG8gY29uZmlnXG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGNvbnN0IG1vZGlmaWVkID0gdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdXG4gICAgICA/IHZpc3VhbENoYW5uZWxNb2RpZmljYXRpb25WMVtsYXllci50eXBlXSh2YywgcGFyZW50cywgYWNjdW11bGF0b3IpXG4gICAgICA6IHt9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmFjY3VtdWxhdG9yLFxuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRvci5jb25maWcgfHwge30pLFxuICAgICAgICAuLi52YyxcbiAgICAgICAgLi4ubW9kaWZpZWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5jb25zdCB2aXNDb25maWdNb2RpZmljYXRpb25WMSA9IHtcbiAgcG9pbnQ6ICh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSA9PiB7XG4gICAgY29uc3QgbW9kaWZpZWQgPSB7fTtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xuICAgIGNvbnN0IGlzT2xkID0gIXZpc0NvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnZmlsbGVkJykgJiZcbiAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yICYmICF2aXNDb25maWcuc3Ryb2tlQ29sb3JSYW5nZTtcbiAgICBpZiAoaXNPbGQpIHtcbiAgICAgIC8vIGNvbG9yIGNvbG9yICYgY29sb3IgcmFuZ2UgdG8gc3Ryb2tlIGNvbG9yXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvciA9IGxheWVyLmNvbmZpZy5jb2xvcjtcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yUmFuZ2UgPSBjbG9uZURlZXAodmlzQ29uZmlnLmNvbG9yUmFuZ2UpO1xuICAgICAgaWYgKHZpc0NvbmZpZy5vdXRsaW5lKSB7XG4gICAgICAgIC8vIHBvaW50IGxheWVyIG5vdyBzdXBwb3J0cyBib3RoIG91dGxpbmUgYW5kIGZpbGxcbiAgICAgICAgLy8gZm9yIG9sZGVyIHNjaGVtYSB3aGVyZSBmaWxsZWQgaGFzIG5vdCBiZWVuIGFkZGVkIHRvIHBvaW50IGxheWVyXG4gICAgICAgIC8vIHNldCBpdCB0byBmYWxzZVxuICAgICAgICBtb2RpZmllZC5maWxsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW9kaWZpZWQ7XG4gIH0sXG4gIGdlb2pzb246ICh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSA9PiB7XG4gICAgLy8gaXMgcG9pbnRzP1xuICAgIGNvbnN0IG1vZGlmaWVkID0ge307XG4gICAgY29uc3QgW2xheWVyXSA9IHBhcmVudHMuc2xpY2UoLTIsIC0xKTtcbiAgICBjb25zdCBpc09sZCA9ICFsYXllci52aXN1YWxDaGFubmVscy5oYXNPd25Qcm9wZXJ0eSgnc3Ryb2tlQ29sb3JGaWVsZCcpICYmXG4gICAgICAhdmlzQ29uZmlnLnN0cm9rZUNvbG9yICYmICF2aXNDb25maWcuc3Ryb2tlQ29sb3JSYW5nZTtcbiAgICAvLyBtYWtlIG91ciBiZXN0IGd1ZXNzIGlmIHRoaXMgZ2VvanNvbiBsYXllciBjb250YWlucyBwb2ludFxuICAgIGNvbnN0IGlzUG9pbnQgPVxuICAgICAgbGF5ZXIudmlzdWFsQ2hhbm5lbHMucmFkaXVzRmllbGQgfHxcbiAgICAgIHZpc0NvbmZpZy5yYWRpdXMgIT09IExBWUVSX1ZJU19DT05GSUdTLnJhZGl1cy5kZWZhdWx0VmFsdWU7XG5cbiAgICBpZiAoaXNPbGQpIHtcbiAgICAgIC8vIGNvbG9yIGNvbG9yICYgY29sb3IgcmFuZ2UgdG8gc3Ryb2tlIGNvbG9yXG4gICAgICBtb2RpZmllZC5zdHJva2VDb2xvciA9IGxheWVyLmNvbmZpZy5jb2xvcjtcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yUmFuZ2UgPSBjbG9uZURlZXAodmlzQ29uZmlnLmNvbG9yUmFuZ2UpO1xuICAgICAgaWYgKGlzUG9pbnQpIHtcbiAgICAgICAgLy8gaWYgaXMgcG9pbnQsIHNldCBzdHJva2UgdG8gZmFsc2VcbiAgICAgICAgbW9kaWZpZWQuZmlsbGVkID0gdHJ1ZTtcbiAgICAgICAgbW9kaWZpZWQuc3Ryb2tlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2RpZmllZDtcbiAgfVxufTtcblxuY2xhc3MgVmlzQ29uZmlnU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAndmlzQ29uZmlnJztcblxuICBsb2FkKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xuICAgIGNvbnN0IG1vZGlmaWVkID0gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzQ29uZmlnTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV0odmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZClcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgIC4uLnZpc0NvbmZpZyxcbiAgICAgICAgLi4ubW9kaWZpZWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsYXllclByb3BzVjEgPSB7XG4gIGlkOiBudWxsLFxuICB0eXBlOiBudWxsLFxuICBjb25maWc6IG5ldyBTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ2NvbmZpZycsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgZGF0YUlkOiBudWxsLFxuICAgICAgbGFiZWw6IG51bGwsXG4gICAgICBjb2xvcjogbnVsbCxcbiAgICAgIGNvbHVtbnM6IG5ldyBDb2x1bW5TY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgICAgICBrZXk6ICdjb2x1bW5zJ1xuICAgICAgfSksXG4gICAgICBpc1Zpc2libGU6IG51bGwsXG4gICAgICB2aXNDb25maWc6IG5ldyBWaXNDb25maWdTY2hlbWFWMSh7XG4gICAgICAgIHZlcnNpb246IFZFUlNJT05TLnYxXG4gICAgICB9KSxcbiAgICAgIHRleHRMYWJlbDogbmV3IFRleHRMYWJlbFNjaGVtYVYxKHtcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgICAgIGtleTogJ3RleHRMYWJlbCdcbiAgICAgIH0pXG4gICAgfVxuICB9KSxcbiAgdmlzdWFsQ2hhbm5lbHM6IG5ldyBWaXN1YWxDaGFubmVsU2NoZW1hVjEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3Zpc3VhbENoYW5uZWxzJ1xuICB9KVxufTtcblxuY2xhc3MgTGF5ZXJTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIGtleSA9ICdsYXllcnMnO1xuXG4gIHNhdmUobGF5ZXJzLCBwYXJlbnRzKSB7XG4gICAgY29uc3QgW3Zpc1N0YXRlXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHZpc1N0YXRlLmxheWVyT3JkZXIucmVkdWNlKChzYXZlZCwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8gc2F2ZSBsYXllcnMgYWNjb3JkaW5nIHRvIHRoZWlyIHJlbmRlcmluZyBvcmRlclxuICAgICAgICBjb25zdCBsYXllciA9IGxheWVyc1tpbmRleF07XG4gICAgICAgIGlmIChsYXllci5pc1ZhbGlkVG9TYXZlKCkpIHtcbiAgICAgICAgICBzYXZlZC5wdXNoKHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGxheWVyKS5sYXllcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzYXZlZDtcbiAgICAgIH0sIFtdKVxuICAgIH07XG4gIH1cblxuICBsb2FkKGxheWVycykge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiBsYXllcnMubWFwKFxuICAgICAgICBsYXllciA9PiB0aGlzLmxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShsYXllciwgbGF5ZXJzKS5sYXllcnNcbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIEZpbHRlclNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ZpbHRlcnMnO1xuICBzYXZlKGZpbHRlcnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmlsdGVyczogZmlsdGVyc1xuICAgICAgICAuZmlsdGVyKGlzVmFsaWRGaWx0ZXJWYWx1ZSlcbiAgICAgICAgLm1hcChmaWx0ZXIgPT4gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZmlsdGVyKS5maWx0ZXJzKVxuICAgIH07XG4gIH1cbiAgbG9hZChmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIHtmaWx0ZXJzfTtcbiAgfVxufVxuXG5jb25zdCBpbnRlcmFjdGlvblByb3BzVjAgPSBbJ3Rvb2x0aXAnLCAnYnJ1c2gnXTtcblxuY2xhc3MgSW50ZXJhY3Rpb25TY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIGtleSA9ICdpbnRlcmFjdGlvbkNvbmZpZyc7XG5cbiAgc2F2ZShpbnRlcmFjdGlvbkNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgLi4uKGludGVyYWN0aW9uQ29uZmlnW2tleV0uZW5hYmxlZFxuICAgICAgICAgICAgPyB7W2tleV06IGludGVyYWN0aW9uQ29uZmlnW2tleV0uY29uZmlnfVxuICAgICAgICAgICAgOiB7fSlcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuICBsb2FkKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgLy8gY29udmVydCB2MCAtPiB2MVxuICAgIC8vIHJldHVybiBlbmFibGVkOiBmYWxzZSBpZiBkaXNhYmxlZCxcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogdGhpcy5wcm9wZXJ0aWVzLnJlZHVjZShcbiAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgIC4uLntcbiAgICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICAgIC4uLihpbnRlcmFjdGlvbkNvbmZpZ1trZXldIHx8IHt9KSxcbiAgICAgICAgICAgICAgZW5hYmxlZDogQm9vbGVhbihpbnRlcmFjdGlvbkNvbmZpZ1trZXldKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBJbnRlcmFjdGlvblNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcblxuICBzYXZlKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgLy8gc2F2ZSBjb25maWcgZXZlbiBpZiBkaXNhYmxlZCxcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogdGhpcy5wcm9wZXJ0aWVzLnJlZHVjZShcbiAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgIFtrZXldOiB7XG4gICAgICAgICAgICAuLi5pbnRlcmFjdGlvbkNvbmZpZ1trZXldLmNvbmZpZyxcbiAgICAgICAgICAgIGVuYWJsZWQ6IGludGVyYWN0aW9uQ29uZmlnW2tleV0uZW5hYmxlZFxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuICBsb2FkKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgcmV0dXJuIHtbdGhpcy5rZXldOiBpbnRlcmFjdGlvbkNvbmZpZ307XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlclByb3BzVjAgPSB7XG4gIGRhdGFJZDogbnVsbCxcbiAgaWQ6IG51bGwsXG4gIG5hbWU6IG51bGwsXG4gIHR5cGU6IG51bGwsXG4gIHZhbHVlOiBudWxsLFxuICBlbmxhcmdlZDogbnVsbFxufTtcblxuZXhwb3J0IGNsYXNzIERpbWVuc2lvbkZpZWxkU2NoZW1hIGV4dGVuZHMgU2NoZW1hIHtcbiAgc2F2ZShmaWVsZCkge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiBmaWVsZFxuICAgICAgICA/IHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGZpZWxkKVt0aGlzLmtleV1cbiAgICAgICAgOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQoZmllbGQpIHtcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IGZpZWxkfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyUHJvcHNWMSA9IHtcbiAgLi4uZmlsdGVyUHJvcHNWMCxcbiAgcGxvdFR5cGU6IG51bGwsXG4gIHlBeGlzOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIGtleTogJ3lBeGlzJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBuYW1lOiBudWxsLFxuICAgICAgdHlwZTogbnVsbFxuICAgIH1cbiAgfSlcbn07XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzVjAgPSB7XG4gIGZpbHRlcnM6IG5ldyBGaWx0ZXJTY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gICAgcHJvcGVydGllczogZmlsdGVyUHJvcHNWMFxuICB9KSxcbiAgbGF5ZXJzOiBuZXcgTGF5ZXJTY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gICAgcHJvcGVydGllczogbGF5ZXJQcm9wc1YwXG4gIH0pLFxuICBpbnRlcmFjdGlvbkNvbmZpZzogbmV3IEludGVyYWN0aW9uU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IGludGVyYWN0aW9uUHJvcHNWMFxuICB9KSxcbiAgbGF5ZXJCbGVuZGluZzogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMSA9IHtcbiAgZmlsdGVyczogbmV3IEZpbHRlclNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgICBwcm9wZXJ0aWVzOiBmaWx0ZXJQcm9wc1YxXG4gIH0pLFxuICBsYXllcnM6IG5ldyBMYXllclNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgICBwcm9wZXJ0aWVzOiBsYXllclByb3BzVjFcbiAgfSksXG4gIGludGVyYWN0aW9uQ29uZmlnOiBuZXcgSW50ZXJhY3Rpb25TY2hlbWFWMSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogaW50ZXJhY3Rpb25Qcm9wc1YwXG4gIH0pLFxuICBsYXllckJsZW5kaW5nOiBudWxsLFxuICBzcGxpdE1hcHM6IG51bGxcbn07XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYVYwID0gbmV3IFNjaGVtYSh7XG4gIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjAsXG4gIGtleTogJ3Zpc1N0YXRlJ1xufSk7XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYVYxID0gbmV3IFNjaGVtYSh7XG4gIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzVjEsXG4gIGtleTogJ3Zpc1N0YXRlJ1xufSk7XG5cbmV4cG9ydCBjb25zdCB2aXNTdGF0ZVNjaGVtYSA9IHtcbiAgW1ZFUlNJT05TLnYwXToge1xuICAgIHNhdmU6IHRvU2F2ZSA9PiB2aXNTdGF0ZVNjaGVtYVYwLnNhdmUodG9TYXZlKSxcbiAgICBsb2FkOiB0b0xvYWQgPT5cbiAgICAgIHZpc1N0YXRlU2NoZW1hVjEubG9hZCh2aXNTdGF0ZVNjaGVtYVYwLmxvYWQodG9Mb2FkKS52aXNTdGF0ZSlcbiAgfSxcbiAgW1ZFUlNJT05TLnYxXTogdmlzU3RhdGVTY2hlbWFWMVxufTtcblxuLy8gdGVzdCBsb2FkIHYwXG5leHBvcnQgZGVmYXVsdCB2aXNTdGF0ZVNjaGVtYTtcbiJdfQ==