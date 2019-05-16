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
      return (0, _defineProperty2["default"])({}, this.key, (0, _objectSpread11["default"])({}, textLabel, {
        field: textLabel.field ? (0, _lodash["default"])(textLabel.field, ['name', 'type']) : null
      }));
    }
  }, {
    key: "load",
    value: function load(textLabel) {
      return {
        textLabel: textLabel
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Zpcy1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsiZGltZW5zaW9uUHJvcHNWMCIsImdlb2pzb25TaXplRmllbGRWMFRvVjEiLCJjb25maWciLCJkZWZhdWx0UmFpdWRzIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwidmlzQ29uZmlnIiwiZXh0cnVkZWQiLCJzdHJva2VkIiwicmFkaXVzIiwicmFkaXVzUmFuZ2UiLCJzb21lIiwiZCIsImkiLCJEaW1lbnNpb25GaWVsZFNjaGVtYVYwIiwiVkVSU0lPTlMiLCJ2MCIsImZpZWxkIiwia2V5Iiwic2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hIiwicGFyZW50cyIsImFjY3VtdWxhdGVkIiwic2xpY2UiLCJmaWVsZE5hbWUiLCJ0eXBlIiwidmlzdWFsQ2hhbm5lbHMiLCJTY2hlbWEiLCJEaW1lbnNpb25TY2FsZVNjaGVtYVYwIiwic2NhbGUiLCJMYXllckNvbmZpZ1NjaGVtYVYwIiwic2F2ZWQiLCJMYXllckNvbHVtbnNTY2hlbWFWMCIsImNvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjdSIsInZhbHVlIiwiTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0ZWRDb25maWciLCJMYXllclZpc0NvbmZpZ1NjaGVtYVYwIiwiYWNjdW11bGF0b3IiLCJyZW5hbWUiLCJnZW9qc29uIiwiZWxldmF0aW9uUmFuZ2UiLCJwcm9wVG9SZW5hbWUiLCJMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIiwibGF5ZXJQcm9wc1YwIiwiaWQiLCJkYXRhSWQiLCJsYWJlbCIsImNvbG9yIiwiaXNWaXNpYmxlIiwiY29sb3JGaWVsZCIsInByb3BlcnRpZXMiLCJjb2xvclNjYWxlIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwiZW5hYmxlM2QiLCJjb2xvckFnZ3JlZ2F0aW9uIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiaXNBZ2dyZWdhdGVkIiwiQ29sdW1uU2NoZW1hVjEiLCJzdGF0ZSIsImNrZXkiLCJUZXh0TGFiZWxTY2hlbWFWMSIsInRleHRMYWJlbCIsInZpc3VhbENoYW5uZWxNb2RpZmljYXRpb25WMSIsInBvaW50IiwidmMiLCJsYXllciIsIm91dGxpbmUiLCJoYXNPd25Qcm9wZXJ0eSIsInN0cm9rZUNvbG9yRmllbGQiLCJzdHJva2VDb2xvclNjYWxlIiwiaXNPbGQiLCJpc1BvaW50IiwicmFkaXVzRmllbGQiLCJMQVlFUl9WSVNfQ09ORklHUyIsImRlZmF1bHRWYWx1ZSIsIlZpc3VhbENoYW5uZWxTY2hlbWFWMSIsIm1vZGlmaWVkIiwidmlzQ29uZmlnTW9kaWZpY2F0aW9uVjEiLCJzdHJva2VDb2xvciIsInN0cm9rZUNvbG9yUmFuZ2UiLCJjb2xvclJhbmdlIiwiZmlsbGVkIiwiVmlzQ29uZmlnU2NoZW1hVjEiLCJsYXllclByb3BzVjEiLCJ2ZXJzaW9uIiwidjEiLCJMYXllclNjaGVtYVYwIiwibGF5ZXJzIiwidmlzU3RhdGUiLCJsYXllck9yZGVyIiwiaW5kZXgiLCJpc1ZhbGlkVG9TYXZlIiwicHVzaCIsIm1hcCIsImxvYWRQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYSIsIkZpbHRlclNjaGVtYVYwIiwiZmlsdGVycyIsImZpbHRlciIsImlzVmFsaWRGaWx0ZXJWYWx1ZSIsImludGVyYWN0aW9uUHJvcHNWMCIsIkludGVyYWN0aW9uU2NoZW1hVjAiLCJpbnRlcmFjdGlvbkNvbmZpZyIsImVuYWJsZWQiLCJCb29sZWFuIiwiSW50ZXJhY3Rpb25TY2hlbWFWMSIsImZpbHRlclByb3BzVjAiLCJuYW1lIiwiZW5sYXJnZWQiLCJEaW1lbnNpb25GaWVsZFNjaGVtYSIsImZpbHRlclByb3BzVjEiLCJwbG90VHlwZSIsInlBeGlzIiwicHJvcGVydGllc1YwIiwibGF5ZXJCbGVuZGluZyIsInByb3BlcnRpZXNWMSIsInNwbGl0TWFwcyIsInZpc1N0YXRlU2NoZW1hVjAiLCJ2aXNTdGF0ZVNjaGVtYVYxIiwidmlzU3RhdGVTY2hlbWEiLCJzYXZlIiwidG9TYXZlIiwi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RSxFQU5lLEVBTVZnQyxnQkFOVSxtQkFBcEIsQyxDQVNQOzs7ZUFDZUMsYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcbmltcG9ydCB7VkVSU0lPTlN9IGZyb20gJy4vdmVyc2lvbnMnO1xuaW1wb3J0IHtpc1ZhbGlkRmlsdGVyVmFsdWV9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCc7XG5cbi8qKlxuICogVjAgU2NoZW1hXG4gKi9cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvblByb3BzVjAgPSBbJ25hbWUnLCAndHlwZSddO1xuXG4vLyBpbiB2MCBnZW9qc29uIHRoZXJlIGlzIG9ubHkgc2l6ZUZpZWxkXG5cbi8vIGluIHYxIGdlb2pzb25cbi8vIHN0cm9rZSBiYXNlIG9uIC0+IHNpemVGaWVsZFxuLy8gaGVpZ2h0IGJhc2VkIG9uIC0+IGhlaWdodEZpZWxkXG4vLyByYWRpdXMgYmFzZWQgb24gLT4gcmFkaXVzRmllbGRcbi8vIGhlcmUgd2UgbWFrZSBvdXIgd2lyZWRzdCBndWVzcyBvbiB3aGljaCBjaGFubmVsIHNpemVGaWVsZCBiZWxvbmdzIHRvXG5mdW5jdGlvbiBnZW9qc29uU2l6ZUZpZWxkVjBUb1YxKGNvbmZpZykge1xuICBjb25zdCBkZWZhdWx0UmFpdWRzID0gMTA7XG4gIGNvbnN0IGRlZmF1bHRSYWRpdXNSYW5nZSA9IFswLCA1MF07XG5cbiAgLy8gaWYgZXh0cnVkZWQsIHNpemVGaWVsZCBpcyBtb3N0IGxpa2VseSB1c2VkIGZvciBoZWlnaHRcbiAgaWYgKGNvbmZpZy52aXNDb25maWcuZXh0cnVkZWQpIHtcbiAgICByZXR1cm4gJ2hlaWdodEZpZWxkJztcbiAgfVxuXG4gIC8vIGlmIHNob3cgc3Ryb2tlIGVuYWJsZWQsIHNpemVGaWVsZCBpcyBtb3N0IGxpa2VseSB1c2VkIGZvciBzdHJva2VcbiAgaWYgKGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xuICAgIHJldHVybiAnc2l6ZUZpZWxkJztcbiAgfVxuXG4gIC8vIGlmIHJhZGl1cyBjaGFuZ2VkLCBvciByYWRpdXMgUmFuZ2UgQ2hhbmdlZCwgc2l6ZUZpZWxkIGlzIG1vc3QgbGlrZWx5IHVzZWQgZm9yIHJhZGl1c1xuICAvLyB0aGlzIGlzIHRoZSBtb3N0IHVucmVsaWFibGUgZ3Vlc3MsIHRoYXQncyB3aHkgd2UgcHV0IGl0IGluIHRoZSBlbmRcbiAgaWYgKFxuICAgIGNvbmZpZy52aXNDb25maWcucmFkaXVzICE9PSBkZWZhdWx0UmFpdWRzIHx8XG4gICAgY29uZmlnLnZpc0NvbmZpZy5yYWRpdXNSYW5nZS5zb21lKChkLCBpKSA9PiBkICE9PSBkZWZhdWx0UmFkaXVzUmFuZ2VbaV0pXG4gICkge1xuICAgIHJldHVybiAncmFkaXVzRmllbGQnO1xuICB9XG5cbiAgcmV0dXJuICdzaXplRmllbGQnO1xufVxuXG4vLyBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZ1xuY2xhc3MgRGltZW5zaW9uRmllbGRTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgc2F2ZShmaWVsZCkge1xuICAgIC8vIHNob3VsZCBub3QgYmUgY2FsbGVkIGFueW1vcmVcbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTpcbiAgICAgICAgZmllbGQgIT09IG51bGxcbiAgICAgICAgICA/IHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGZpZWxkKVt0aGlzLmtleV1cbiAgICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgbG9hZChmaWVsZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGxldCBmaWVsZE5hbWUgPSB0aGlzLmtleTtcbiAgICBpZiAoY29uZmlnLnR5cGUgPT09ICdnZW9qc29uJyAmJiB0aGlzLmtleSA9PT0gJ3NpemVGaWVsZCcgJiYgZmllbGQpIHtcbiAgICAgIGZpZWxkTmFtZSA9IGdlb2pzb25TaXplRmllbGRWMFRvVjEoY29uZmlnKTtcbiAgICB9XG4gICAgLy8gZm9sZCBpbnRvIHZpc3VhbENoYW5uZWxzIHRvIGJlIGxvYWQgYnkgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXG4gICAgcmV0dXJuIHtcbiAgICAgIHZpc3VhbENoYW5uZWxzOiB7XG4gICAgICAgIC4uLihhY2N1bXVsYXRlZC52aXN1YWxDaGFubmVscyB8fCB7fSksXG4gICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuY2xhc3MgRGltZW5zaW9uU2NhbGVTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgc2F2ZShzY2FsZSkge1xuICAgIHJldHVybiB7W3RoaXMua2V5XTogc2NhbGV9O1xuICB9XG4gIGxvYWQoc2NhbGUsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgY29uc3QgW2NvbmZpZ10gPSBwYXJlbnRzLnNsaWNlKC0xKTtcbiAgICAvLyBmb2xkIGludG8gdmlzdWFsQ2hhbm5lbHMgdG8gYmUgbG9hZCBieSBWaXN1YWxDaGFubmVsU2NoZW1hVjFcbiAgICBpZiAodGhpcy5rZXkgPT09ICdzaXplU2NhbGUnICYmIGNvbmZpZy50eXBlID09PSAnZ2VvanNvbicpIHtcbiAgICAgIC8vIHNpemVTY2FsZSBub3cgc3BsaXQgaW50byByYWRpdXNTY2FsZSwgaGVpZ2h0U2NhbGVcbiAgICAgIC8vIG5vIHVzZXIgY3VzdG9taXphdGlvbiwganVzdCB1c2UgZGVmYXVsdFxuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2aXN1YWxDaGFubmVsczoge1xuICAgICAgICAuLi4oYWNjdW11bGF0ZWQudmlzdWFsQ2hhbm5lbHMgfHwge30pLFxuICAgICAgICBbdGhpcy5rZXldOiBzY2FsZVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuLy8gdXNlZCB0byBjb252ZXJ0IHYwIHRvIHYxIGxheWVyIGNvbmZpZ1xuY2xhc3MgTGF5ZXJDb25maWdTY2hlbWFWMCBleHRlbmRzIFNjaGVtYSB7XG4gIHZlcnNpb24gPSBWRVJTSU9OUy52MDtcbiAgbG9hZChzYXZlZCwgcGFyZW50cywgYWNjdW11bGF0ZWQpIHtcbiAgICAvLyBmb2xkIHYwIGxheWVyIHByb3BlcnR5IGludG8gY29uZmlnLmtleVxuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIFt0aGlzLmtleV06IHNhdmVkXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG4vLyB1c2VkIHRvIGNvbnZlcnQgdjAgdG8gdjEgbGF5ZXIgY29sdW1uc1xuLy8gb25seSByZXR1cm4gY29sdW1uIHZhbHVlIGZvciBlYWNoIGNvbHVtblxuY2xhc3MgTGF5ZXJDb2x1bW5zU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy5rZXksIGZsYXR0ZW4gY29sdW1uc1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIGNvbHVtbnM6IE9iamVjdC5rZXlzKHNhdmVkKS5yZWR1Y2UoXG4gICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICBba2V5XTogc2F2ZWRba2V5XS52YWx1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbi8vIHVzZWQgdG8gY29udmVydCB2MCB0byB2MSBsYXllciBjb25maWcudmlzQ29uZmlnXG5jbGFzcyBMYXllckNvbmZpZ1RvVmlzQ29uZmlnU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICB2ZXJzaW9uID0gVkVSU0lPTlMudjA7XG4gIGxvYWQoc2F2ZWQsIHBhcmVudHMsIGFjY3VtdWxhdGVkKSB7XG4gICAgLy8gZm9sZCB2MCBsYXllciBwcm9wZXJ0eSBpbnRvIGNvbmZpZy52aXNDb25maWdcbiAgICBjb25zdCBhY2N1bXVsYXRlZENvbmZpZyA9IGFjY3VtdWxhdGVkLmNvbmZpZyB8fCB7fTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIC4uLmFjY3VtdWxhdGVkQ29uZmlnLFxuICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAuLi4oYWNjdW11bGF0ZWRDb25maWcudmlzQ29uZmlnIHx8IHt9KSxcbiAgICAgICAgICBbdGhpcy5rZXldOiBzYXZlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBMYXllclZpc0NvbmZpZ1NjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBrZXkgPSAndmlzQ29uZmlnJztcblxuICBsb2FkKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0b3IpIHtcbiAgICBjb25zdCBbY29uZmlnXSA9IHBhcmVudHMuc2xpY2UoLTEpO1xuICAgIGNvbnN0IHJlbmFtZSA9IHtcbiAgICAgIGdlb2pzb246IHtcbiAgICAgICAgZXh0cnVkZWQ6ICdlbmFibGUzZCcsXG4gICAgICAgIGVsZXZhdGlvblJhbmdlOiAnaGVpZ2h0UmFuZ2UnXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChjb25maWcudHlwZSBpbiByZW5hbWUpIHtcbiAgICAgIGNvbnN0IHByb3BUb1JlbmFtZSA9IHJlbmFtZVtjb25maWcudHlwZV07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAuLi4oYWNjdW11bGF0b3IuY29uZmlnIHx8IHt9KSxcbiAgICAgICAgICB2aXNDb25maWc6IE9iamVjdC5rZXlzKHZpc0NvbmZpZykucmVkdWNlKFxuICAgICAgICAgICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAgICAgLi4uKHByb3BUb1JlbmFtZVtrZXldXG4gICAgICAgICAgICAgICAgPyB7W3Byb3BUb1JlbmFtZVtrZXldXTogdmlzQ29uZmlnW2tleV19XG4gICAgICAgICAgICAgICAgOiB7W2tleV06IHZpc0NvbmZpZ1trZXldfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAge31cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi4oYWNjdW11bGF0b3IuY29uZmlnIHx8IHt9KSxcbiAgICAgICAgdmlzQ29uZmlnXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAgdmVyc2lvbiA9IFZFUlNJT05TLnYwO1xuICBsb2FkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbi8qKlxuICogVjAgLT4gVjEgQ2hhbmdlc1xuICogLSBsYXllciBpcyBub3cgYSBjbGFzc1xuICogLSBjb25maWcgc2F2ZWQgaW4gYSBjb25maWcgb2JqZWN0XG4gKiAtIGlkLCB0eXBlLCBpc0FnZ3JlZ2F0ZWQgaXMgb3V0c2lkZSBsYXllci5jb25maWdcbiAqIC0gdmlzdWFsQ2hhbm5lbHMgaXMgb3V0c2lkZSBjb25maWcsIGl0IGRlZmluZXMgYXZhaWxhYmxlIHZpc3VhbCBjaGFubmVsIGFuZFxuICogICBwcm9wZXJ0eSBuYW1lcyBmb3IgZmllbGQsIHNjYWxlLCBkb21haW4gYW5kIHJhbmdlIG9mIGVhY2ggdmlzdWFsIGNoYW5lbC5cbiAqIC0gZW5hYmxlM2QsIGNvbG9yQWdncmVnYXRpb24gYW5kIHNpemVBZ2dyZWdhdGlvbiBhcmUgbW92ZWQgaW50byB2aXNDb25maWdcbiAqIC0gR2VvanNvbkxheWVyIC0gYWRkZWQgaGVpZ2h0LCByYWRpdXMgc3BlY2lmaWMgcHJvcGVydGllc1xuICovXG5cbmV4cG9ydCBjb25zdCBsYXllclByb3BzVjAgPSB7XG4gIGlkOiBudWxsLFxuICB0eXBlOiBudWxsLFxuXG4gIC8vIG1vdmUgaW50byBsYXllci5jb25maWdcbiAgZGF0YUlkOiBuZXcgTGF5ZXJDb25maWdTY2hlbWFWMCh7a2V5OiAnZGF0YUlkJ30pLFxuICBsYWJlbDogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2xhYmVsJ30pLFxuICBjb2xvcjogbmV3IExheWVyQ29uZmlnU2NoZW1hVjAoe2tleTogJ2NvbG9yJ30pLFxuICBpc1Zpc2libGU6IG5ldyBMYXllckNvbmZpZ1NjaGVtYVYwKHtrZXk6ICdpc1Zpc2libGUnfSksXG5cbiAgLy8gY29udmVydCB2aXNDb25maWdcbiAgdmlzQ29uZmlnOiBuZXcgTGF5ZXJWaXNDb25maWdTY2hlbWFWMCh7a2V5OiAndmlzQ29uZmlnJ30pLFxuXG4gIC8vIG1vdmUgaW50byBsYXllci5jb25maWdcbiAgLy8gZmxhdHRlblxuICBjb2x1bW5zOiBuZXcgTGF5ZXJDb2x1bW5zU2NoZW1hVjAoKSxcblxuICAvLyBzYXZlIGludG8gdmlzdWFsQ2hhbm5lbHNcbiAgY29sb3JGaWVsZDogbmV3IERpbWVuc2lvbkZpZWxkU2NoZW1hVjAoe1xuICAgIHByb3BlcnRpZXM6IGRpbWVuc2lvblByb3BzVjAsXG4gICAga2V5OiAnY29sb3JGaWVsZCdcbiAgfSksXG4gIGNvbG9yU2NhbGU6IG5ldyBEaW1lbnNpb25TY2FsZVNjaGVtYVYwKHtcbiAgICBrZXk6ICdjb2xvclNjYWxlJ1xuICB9KSxcbiAgc2l6ZUZpZWxkOiBuZXcgRGltZW5zaW9uRmllbGRTY2hlbWFWMCh7XG4gICAgcHJvcGVydGllczogZGltZW5zaW9uUHJvcHNWMCxcbiAgICBrZXk6ICdzaXplRmllbGQnXG4gIH0pLFxuICBzaXplU2NhbGU6IG5ldyBEaW1lbnNpb25TY2FsZVNjaGVtYVYwKHtcbiAgICBrZXk6ICdzaXplU2NhbGUnXG4gIH0pLFxuXG4gIC8vIG1vdmUgaW50byBjb25maWcudmlzQ29uZmlnXG4gIGVuYWJsZTNkOiBuZXcgTGF5ZXJDb25maWdUb1Zpc0NvbmZpZ1NjaGVtYVYwKHtrZXk6ICdlbmFibGUzZCd9KSxcbiAgY29sb3JBZ2dyZWdhdGlvbjogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7XG4gICAga2V5OiAnY29sb3JBZ2dyZWdhdGlvbidcbiAgfSksXG4gIHNpemVBZ2dyZWdhdGlvbjogbmV3IExheWVyQ29uZmlnVG9WaXNDb25maWdTY2hlbWFWMCh7a2V5OiAnc2l6ZUFnZ3JlZ2F0aW9uJ30pLFxuXG4gIC8vIGRlbGV0ZVxuICBpc0FnZ3JlZ2F0ZWQ6IG5ldyBMYXllckNvbmZpZ1NjaGVtYURlbGV0ZVYwKClcbn07XG5cbi8qKlxuICogVjEgU2NoZW1hXG4gKi9cbmNsYXNzIENvbHVtblNjaGVtYVYxIGV4dGVuZHMgU2NoZW1hIHtcbiAgc2F2ZShjb2x1bW5zLCBzdGF0ZSkge1xuICAgIC8vIHN0YXJ0aW5nIGZyb20gdjEsIG9ubHkgc2F2ZSBjb2x1bW4gdmFsdWVcbiAgICAvLyBmaWVsZElkeCB3aWxsIGJlIGNhbGN1bGF0ZWQgZHVyaW5nIG1lcmdlXG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IE9iamVjdC5rZXlzKGNvbHVtbnMpLnJlZHVjZShcbiAgICAgICAgKGFjY3UsIGNrZXkpID0+ICh7XG4gICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICBbY2tleV06IGNvbHVtbnNbY2tleV0udmFsdWVcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQoY29sdW1ucykge1xuICAgIHJldHVybiB7Y29sdW1uc307XG4gIH1cbn1cblxuY2xhc3MgVGV4dExhYmVsU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKHRleHRMYWJlbCkge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB7XG4gICAgICAgIC4uLnRleHRMYWJlbCxcbiAgICAgICAgZmllbGQ6IHRleHRMYWJlbC5maWVsZCA/IHBpY2sodGV4dExhYmVsLmZpZWxkLCBbJ25hbWUnLCAndHlwZSddKSA6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbG9hZCh0ZXh0TGFiZWwpIHtcbiAgICByZXR1cm4ge3RleHRMYWJlbH07XG4gIH1cbn1cblxuY29uc3QgdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxID0ge1xuICBwb2ludDogKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikgPT4ge1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0xKTtcblxuICAgIGlmIChcbiAgICAgIGxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZSAmJlxuICAgICAgdmMuY29sb3JGaWVsZCAmJlxuICAgICAgIXZjLmhhc093blByb3BlcnR5KCdzdHJva2VDb2xvckZpZWxkJylcbiAgICApIHtcbiAgICAgIC8vIHBvaW50IGxheWVyIG5vdyBzdXBwb3J0cyBib3RoIG91dGxpbmUgYW5kIGZpbGxcbiAgICAgIC8vIGZvciBvbGRlciBzY2hlbWEgd2hlcmUgZmlsbGVkIGhhcyBub3QgYmVlbiBhZGRlZCB0byBwb2ludCBsYXllclxuICAgICAgLy8gY29weSBjb2xvckZpZWxkLCBjb2xvclNjYWxlIHRvIHN0cm9rZUNvbG9yRmllbGQsIGFuZCBzdHJva2VDb2xvclNjYWxlXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHJva2VDb2xvckZpZWxkOiB2Yy5jb2xvckZpZWxkLFxuICAgICAgICBzdHJva2VDb2xvclNjYWxlOiB2Yy5jb2xvclNjYWxlLFxuICAgICAgICBjb2xvckZpZWxkOiBudWxsLFxuICAgICAgICBjb2xvclNjYWxlOiAncXVhbnRpbGUnXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH0sXG4gIGdlb2pzb246ICh2YywgcGFyZW50cywgYWNjdW11bGF0b3IpID0+IHtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgY29uc3QgaXNPbGQgPSAhdmMuaGFzT3duUHJvcGVydHkoJ3N0cm9rZUNvbG9yRmllbGQnKTtcbiAgICAvLyBtYWtlIG91ciBiZXN0IGd1ZXNzIGlmIHRoaXMgZ2VvanNvbiBsYXllciBjb250YWlucyBwb2ludFxuICAgIGNvbnN0IGlzUG9pbnQgPVxuICAgICAgdmMucmFkaXVzRmllbGQgfHxcbiAgICAgIGxheWVyLmNvbmZpZy52aXNDb25maWcucmFkaXVzICE9PSBMQVlFUl9WSVNfQ09ORklHUy5yYWRpdXMuZGVmYXVsdFZhbHVlO1xuXG4gICAgaWYgKGlzT2xkICYmICFpc1BvaW50ICYmIGxheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlZCkge1xuICAgICAgLy8gaWYgc3Ryb2tlZCBpcyB0cnVlLCBjb3B5IGNvbG9yIGNvbmZpZyB0byBzdHJva2UgY29sb3IgY29uZmlnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdHJva2VDb2xvckZpZWxkOiB2Yy5jb2xvckZpZWxkLFxuICAgICAgICBzdHJva2VDb2xvclNjYWxlOiB2Yy5jb2xvclNjYWxlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG4gIH1cbn07XG4vKipcbiAqIFYxOiBzYXZlIFtmaWVsZF06IHtuYW1lLCB0eXBlfSwgW3NjYWxlXTogJycgZm9yIGVhY2ggY2hhbm5lbFxuICovXG5jbGFzcyBWaXN1YWxDaGFubmVsU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKHZpc3VhbENoYW5uZWxzLCBwYXJlbnRzKSB7XG4gICAgLy8gb25seSBzYXZlIGZpZWxkIGFuZCBzY2FsZSBvZiBlYWNoIGNoYW5uZWxcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IE9iamVjdC5rZXlzKHZpc3VhbENoYW5uZWxzKS5yZWR1Y2UoXG4gICAgICAgIC8vICBzYXZlIGNoYW5uZWwgdG8gbnVsbCBpZiBkaWRuJ3Qgc2VsZWN0IGFueSBmaWVsZFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uZmllbGRdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF1cbiAgICAgICAgICAgID8gcGljayhsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5maWVsZF0sIFsnbmFtZScsICd0eXBlJ10pXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgW3Zpc3VhbENoYW5uZWxzW2tleV0uc2NhbGVdOiBsYXllci5jb25maWdbdmlzdWFsQ2hhbm5lbHNba2V5XS5zY2FsZV1cbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgfTtcbiAgfVxuICBsb2FkKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcikge1xuICAgIC8vIGZvbGQgY2hhbm5lbHMgaW50byBjb25maWdcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMSk7XG4gICAgY29uc3QgbW9kaWZpZWQgPSB2aXN1YWxDaGFubmVsTW9kaWZpY2F0aW9uVjFbbGF5ZXIudHlwZV1cbiAgICAgID8gdmlzdWFsQ2hhbm5lbE1vZGlmaWNhdGlvblYxW2xheWVyLnR5cGVdKHZjLCBwYXJlbnRzLCBhY2N1bXVsYXRvcilcbiAgICAgIDoge307XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjdW11bGF0b3IsXG4gICAgICBjb25maWc6IHtcbiAgICAgICAgLi4uKGFjY3VtdWxhdG9yLmNvbmZpZyB8fCB7fSksXG4gICAgICAgIC4uLnZjLFxuICAgICAgICAuLi5tb2RpZmllZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbmNvbnN0IHZpc0NvbmZpZ01vZGlmaWNhdGlvblYxID0ge1xuICBwb2ludDogKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpID0+IHtcbiAgICBjb25zdCBtb2RpZmllZCA9IHt9O1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgaXNPbGQgPSAhdmlzQ29uZmlnLmhhc093blByb3BlcnR5KCdmaWxsZWQnKSAmJlxuICAgICF2aXNDb25maWcuc3Ryb2tlQ29sb3IgJiYgIXZpc0NvbmZpZy5zdHJva2VDb2xvclJhbmdlO1xuICAgIGlmIChpc09sZCkge1xuICAgICAgLy8gY29sb3IgY29sb3IgJiBjb2xvciByYW5nZSB0byBzdHJva2UgY29sb3JcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yID0gbGF5ZXIuY29uZmlnLmNvbG9yO1xuICAgICAgbW9kaWZpZWQuc3Ryb2tlQ29sb3JSYW5nZSA9IGNsb25lRGVlcCh2aXNDb25maWcuY29sb3JSYW5nZSk7XG4gICAgICBpZiAodmlzQ29uZmlnLm91dGxpbmUpIHtcbiAgICAgICAgLy8gcG9pbnQgbGF5ZXIgbm93IHN1cHBvcnRzIGJvdGggb3V0bGluZSBhbmQgZmlsbFxuICAgICAgICAvLyBmb3Igb2xkZXIgc2NoZW1hIHdoZXJlIGZpbGxlZCBoYXMgbm90IGJlZW4gYWRkZWQgdG8gcG9pbnQgbGF5ZXJcbiAgICAgICAgLy8gc2V0IGl0IHRvIGZhbHNlXG4gICAgICAgIG1vZGlmaWVkLmZpbGxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2RpZmllZDtcbiAgfSxcbiAgZ2VvanNvbjogKHZpc0NvbmZpZywgcGFyZW50cywgYWNjdW11bGF0ZWQpID0+IHtcbiAgICAvLyBpcyBwb2ludHM/XG4gICAgY29uc3QgbW9kaWZpZWQgPSB7fTtcbiAgICBjb25zdCBbbGF5ZXJdID0gcGFyZW50cy5zbGljZSgtMiwgLTEpO1xuICAgIGNvbnN0IGlzT2xkID0gIWxheWVyLnZpc3VhbENoYW5uZWxzLmhhc093blByb3BlcnR5KCdzdHJva2VDb2xvckZpZWxkJykgJiZcbiAgICAgICF2aXNDb25maWcuc3Ryb2tlQ29sb3IgJiYgIXZpc0NvbmZpZy5zdHJva2VDb2xvclJhbmdlO1xuICAgIC8vIG1ha2Ugb3VyIGJlc3QgZ3Vlc3MgaWYgdGhpcyBnZW9qc29uIGxheWVyIGNvbnRhaW5zIHBvaW50XG4gICAgY29uc3QgaXNQb2ludCA9XG4gICAgICBsYXllci52aXN1YWxDaGFubmVscy5yYWRpdXNGaWVsZCB8fFxuICAgICAgdmlzQ29uZmlnLnJhZGl1cyAhPT0gTEFZRVJfVklTX0NPTkZJR1MucmFkaXVzLmRlZmF1bHRWYWx1ZTtcblxuICAgIGlmIChpc09sZCkge1xuICAgICAgLy8gY29sb3IgY29sb3IgJiBjb2xvciByYW5nZSB0byBzdHJva2UgY29sb3JcbiAgICAgIG1vZGlmaWVkLnN0cm9rZUNvbG9yID0gbGF5ZXIuY29uZmlnLmNvbG9yO1xuICAgICAgbW9kaWZpZWQuc3Ryb2tlQ29sb3JSYW5nZSA9IGNsb25lRGVlcCh2aXNDb25maWcuY29sb3JSYW5nZSk7XG4gICAgICBpZiAoaXNQb2ludCkge1xuICAgICAgICAvLyBpZiBpcyBwb2ludCwgc2V0IHN0cm9rZSB0byBmYWxzZVxuICAgICAgICBtb2RpZmllZC5maWxsZWQgPSB0cnVlO1xuICAgICAgICBtb2RpZmllZC5zdHJva2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZGlmaWVkO1xuICB9XG59O1xuXG5jbGFzcyBWaXNDb25maWdTY2hlbWFWMSBleHRlbmRzIFNjaGVtYSB7XG4gIGtleSA9ICd2aXNDb25maWcnO1xuXG4gIGxvYWQodmlzQ29uZmlnLCBwYXJlbnRzLCBhY2N1bXVsYXRlZCkge1xuICAgIGNvbnN0IFtsYXllcl0gPSBwYXJlbnRzLnNsaWNlKC0yLCAtMSk7XG4gICAgY29uc3QgbW9kaWZpZWQgPSB2aXNDb25maWdNb2RpZmljYXRpb25WMVtsYXllci50eXBlXVxuICAgICAgPyB2aXNDb25maWdNb2RpZmljYXRpb25WMVtsYXllci50eXBlXSh2aXNDb25maWcsIHBhcmVudHMsIGFjY3VtdWxhdGVkKVxuICAgICAgOiB7fTtcblxuICAgIHJldHVybiB7XG4gICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgLi4udmlzQ29uZmlnLFxuICAgICAgICAuLi5tb2RpZmllZFxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxheWVyUHJvcHNWMSA9IHtcbiAgaWQ6IG51bGwsXG4gIHR5cGU6IG51bGwsXG4gIGNvbmZpZzogbmV3IFNjaGVtYSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAga2V5OiAnY29uZmlnJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBkYXRhSWQ6IG51bGwsXG4gICAgICBsYWJlbDogbnVsbCxcbiAgICAgIGNvbG9yOiBudWxsLFxuICAgICAgY29sdW1uczogbmV3IENvbHVtblNjaGVtYVYxKHtcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgICAgIGtleTogJ2NvbHVtbnMnXG4gICAgICB9KSxcbiAgICAgIGlzVmlzaWJsZTogbnVsbCxcbiAgICAgIHZpc0NvbmZpZzogbmV3IFZpc0NvbmZpZ1NjaGVtYVYxKHtcbiAgICAgICAgdmVyc2lvbjogVkVSU0lPTlMudjFcbiAgICAgIH0pLFxuICAgICAgdGV4dExhYmVsOiBuZXcgVGV4dExhYmVsU2NoZW1hVjEoe1xuICAgICAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgICAgICAga2V5OiAndGV4dExhYmVsJ1xuICAgICAgfSlcbiAgICB9XG4gIH0pLFxuICB2aXN1YWxDaGFubmVsczogbmV3IFZpc3VhbENoYW5uZWxTY2hlbWFWMSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAga2V5OiAndmlzdWFsQ2hhbm5lbHMnXG4gIH0pXG59O1xuXG5jbGFzcyBMYXllclNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2xheWVycyc7XG5cbiAgc2F2ZShsYXllcnMsIHBhcmVudHMpIHtcbiAgICBjb25zdCBbdmlzU3RhdGVdID0gcGFyZW50cy5zbGljZSgtMSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgW3RoaXMua2V5XTogdmlzU3RhdGUubGF5ZXJPcmRlci5yZWR1Y2UoKHNhdmVkLCBpbmRleCkgPT4ge1xuICAgICAgICAvLyBzYXZlIGxheWVycyBhY2NvcmRpbmcgdG8gdGhlaXIgcmVuZGVyaW5nIG9yZGVyXG4gICAgICAgIGNvbnN0IGxheWVyID0gbGF5ZXJzW2luZGV4XTtcbiAgICAgICAgaWYgKGxheWVyLmlzVmFsaWRUb1NhdmUoKSkge1xuICAgICAgICAgIHNhdmVkLnB1c2godGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEobGF5ZXIpLmxheWVycyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNhdmVkO1xuICAgICAgfSwgW10pXG4gICAgfTtcbiAgfVxuXG4gIGxvYWQobGF5ZXJzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IGxheWVycy5tYXAoXG4gICAgICAgIGxheWVyID0+IHRoaXMubG9hZFByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGxheWVyLCBsYXllcnMpLmxheWVyc1xuICAgICAgKVxuICAgIH07XG4gIH1cbn1cblxuY2xhc3MgRmlsdGVyU2NoZW1hVjAgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnZmlsdGVycyc7XG4gIHNhdmUoZmlsdGVycykge1xuICAgIHJldHVybiB7XG4gICAgICBmaWx0ZXJzOiBmaWx0ZXJzXG4gICAgICAgIC5maWx0ZXIoaXNWYWxpZEZpbHRlclZhbHVlKVxuICAgICAgICAubWFwKGZpbHRlciA9PiB0aGlzLnNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYShmaWx0ZXIpLmZpbHRlcnMpXG4gICAgfTtcbiAgfVxuICBsb2FkKGZpbHRlcnMpIHtcbiAgICByZXR1cm4ge2ZpbHRlcnN9O1xuICB9XG59XG5cbmNvbnN0IGludGVyYWN0aW9uUHJvcHNWMCA9IFsndG9vbHRpcCcsICdicnVzaCddO1xuXG5jbGFzcyBJbnRlcmFjdGlvblNjaGVtYVYwIGV4dGVuZHMgU2NoZW1hIHtcbiAga2V5ID0gJ2ludGVyYWN0aW9uQ29uZmlnJztcblxuICBzYXZlKGludGVyYWN0aW9uQ29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IHRoaXMucHJvcGVydGllcy5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICAuLi4oaW50ZXJhY3Rpb25Db25maWdba2V5XS5lbmFibGVkXG4gICAgICAgICAgICA/IHtba2V5XTogaW50ZXJhY3Rpb25Db25maWdba2V5XS5jb25maWd9XG4gICAgICAgICAgICA6IHt9KVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9O1xuICB9XG4gIGxvYWQoaW50ZXJhY3Rpb25Db25maWcpIHtcbiAgICAvLyBjb252ZXJ0IHYwIC0+IHYxXG4gICAgLy8gcmV0dXJuIGVuYWJsZWQ6IGZhbHNlIGlmIGRpc2FibGVkLFxuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgLi4ue1xuICAgICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgICAgLi4uKGludGVyYWN0aW9uQ29uZmlnW2tleV0gfHwge30pLFxuICAgICAgICAgICAgICBlbmFibGVkOiBCb29sZWFuKGludGVyYWN0aW9uQ29uZmlnW2tleV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9O1xuICB9XG59XG5cbmNsYXNzIEludGVyYWN0aW9uU2NoZW1hVjEgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnaW50ZXJhY3Rpb25Db25maWcnO1xuXG4gIHNhdmUoaW50ZXJhY3Rpb25Db25maWcpIHtcbiAgICAvLyBzYXZlIGNvbmZpZyBldmVuIGlmIGRpc2FibGVkLFxuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiB0aGlzLnByb3BlcnRpZXMucmVkdWNlKFxuICAgICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgW2tleV06IHtcbiAgICAgICAgICAgIC4uLmludGVyYWN0aW9uQ29uZmlnW2tleV0uY29uZmlnLFxuICAgICAgICAgICAgZW5hYmxlZDogaW50ZXJhY3Rpb25Db25maWdba2V5XS5lbmFibGVkXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9O1xuICB9XG4gIGxvYWQoaW50ZXJhY3Rpb25Db25maWcpIHtcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IGludGVyYWN0aW9uQ29uZmlnfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmlsdGVyUHJvcHNWMCA9IHtcbiAgZGF0YUlkOiBudWxsLFxuICBpZDogbnVsbCxcbiAgbmFtZTogbnVsbCxcbiAgdHlwZTogbnVsbCxcbiAgdmFsdWU6IG51bGwsXG4gIGVubGFyZ2VkOiBudWxsXG59O1xuXG5leHBvcnQgY2xhc3MgRGltZW5zaW9uRmllbGRTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBzYXZlKGZpZWxkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFt0aGlzLmtleV06IGZpZWxkXG4gICAgICAgID8gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZmllbGQpW3RoaXMua2V5XVxuICAgICAgICA6IG51bGxcbiAgICB9O1xuICB9XG5cbiAgbG9hZChmaWVsZCkge1xuICAgIHJldHVybiB7W3RoaXMua2V5XTogZmllbGR9O1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJQcm9wc1YxID0ge1xuICAuLi5maWx0ZXJQcm9wc1YwLFxuICBwbG90VHlwZTogbnVsbCxcbiAgeUF4aXM6IG5ldyBEaW1lbnNpb25GaWVsZFNjaGVtYSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAga2V5OiAneUF4aXMnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICB0eXBlOiBudWxsXG4gICAgfVxuICB9KVxufTtcblxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMCA9IHtcbiAgZmlsdGVyczogbmV3IEZpbHRlclNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgICBwcm9wZXJ0aWVzOiBmaWx0ZXJQcm9wc1YwXG4gIH0pLFxuICBsYXllcnM6IG5ldyBMYXllclNjaGVtYVYwKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MCxcbiAgICBwcm9wZXJ0aWVzOiBsYXllclByb3BzVjBcbiAgfSksXG4gIGludGVyYWN0aW9uQ29uZmlnOiBuZXcgSW50ZXJhY3Rpb25TY2hlbWFWMCh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gICAgcHJvcGVydGllczogaW50ZXJhY3Rpb25Qcm9wc1YwXG4gIH0pLFxuICBsYXllckJsZW5kaW5nOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvcGVydGllc1YxID0ge1xuICBmaWx0ZXJzOiBuZXcgRmlsdGVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IGZpbHRlclByb3BzVjFcbiAgfSksXG4gIGxheWVyczogbmV3IExheWVyU2NoZW1hVjAoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IGxheWVyUHJvcHNWMVxuICB9KSxcbiAgaW50ZXJhY3Rpb25Db25maWc6IG5ldyBJbnRlcmFjdGlvblNjaGVtYVYxKHtcbiAgICB2ZXJzaW9uOiBWRVJTSU9OUy52MSxcbiAgICBwcm9wZXJ0aWVzOiBpbnRlcmFjdGlvblByb3BzVjBcbiAgfSksXG4gIGxheWVyQmxlbmRpbmc6IG51bGwsXG4gIHNwbGl0TWFwczogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlU2NoZW1hVjAgPSBuZXcgU2NoZW1hKHtcbiAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMCxcbiAga2V5OiAndmlzU3RhdGUnXG59KTtcblxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlU2NoZW1hVjEgPSBuZXcgU2NoZW1hKHtcbiAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMSxcbiAga2V5OiAndmlzU3RhdGUnXG59KTtcblxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlU2NoZW1hID0ge1xuICBbVkVSU0lPTlMudjBdOiB7XG4gICAgc2F2ZTogdG9TYXZlID0+IHZpc1N0YXRlU2NoZW1hVjAuc2F2ZSh0b1NhdmUpLFxuICAgIGxvYWQ6IHRvTG9hZCA9PlxuICAgICAgdmlzU3RhdGVTY2hlbWFWMS5sb2FkKHZpc1N0YXRlU2NoZW1hVjAubG9hZCh0b0xvYWQpLnZpc1N0YXRlKVxuICB9LFxuICBbVkVSU0lPTlMudjFdOiB2aXNTdGF0ZVNjaGVtYVYxXG59O1xuXG4vLyB0ZXN0IGxvYWQgdjBcbmV4cG9ydCBkZWZhdWx0IHZpc1N0YXRlU2NoZW1hO1xuIl19