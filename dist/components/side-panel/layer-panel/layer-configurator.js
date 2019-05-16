"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AggregationTypeSelector = exports.AggrColorScaleSelector = exports.ChannelByValueSelector = exports.ColorRangeConfig = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.HowToButton = exports["default"] = void 0;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _visConfigByFieldSelector = _interopRequireDefault(require("./vis-config-by-field-selector"));

var _layerColumnConfig = _interopRequireDefault(require("./layer-column-config"));

var _layerTypeSelector = _interopRequireDefault(require("./layer-type-selector"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _sourceDataSelector = _interopRequireDefault(require("../source-data-selector"));

var _visConfigSwitch = _interopRequireDefault(require("./vis-config-switch"));

var _visConfigSlider = _interopRequireDefault(require("./vis-config-slider"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _textLabelPanel = _interopRequireDefault(require("./text-label-panel"));

var _layerFactory = require("../../../layers/layer-factory");

var _utils = require("../../../utils/utils");

var _defaultSettings = require("../../../constants/default-settings");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 12px;\n  top: -4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-top: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigurator = styled.div.attrs({
  className: 'layer-panel__config'
})(_templateObject());
var StyledLayerVisualConfigurator = styled.div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject2());

var LayerConfigurator =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(LayerConfigurator, _Component);

  function LayerConfigurator() {
    (0, _classCallCheck2["default"])(this, LayerConfigurator);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LayerConfigurator).apply(this, arguments));
  }

  (0, _createClass2["default"])(LayerConfigurator, [{
    key: "_renderPointLayerConfig",
    value: function _renderPointLayerConfig(props) {
      return this._renderScatterplotLayerConfig(props);
    }
  }, {
    key: "_renderIconLayerConfig",
    value: function _renderIconLayerConfig(props) {
      return this._renderScatterplotLayerConfig(props);
    }
  }, {
    key: "_renderScatterplotLayerConfig",
    value: function _renderScatterplotLayerConfig(_ref) {
      var layer = _ref.layer,
          visConfiguratorProps = _ref.visConfiguratorProps,
          layerChannelConfigProps = _ref.layerChannelConfigProps,
          layerConfiguratorProps = _ref.layerConfiguratorProps;
      return _react["default"].createElement(StyledLayerVisualConfigurator, null, _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
        collapsible: true
      }), layer.config.colorField ? _react["default"].createElement(ColorRangeConfig, visConfiguratorProps) : _react["default"].createElement(LayerColorSelector, layerConfiguratorProps), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.color
      }, layerChannelConfigProps)), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps)))), layer.type === _defaultSettings.LAYER_TYPES.point ? _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.outline, visConfiguratorProps, {
        collapsible: true
      }), layer.config.strokeColorField ? _react["default"].createElement(ColorRangeConfig, (0, _extends2["default"])({}, visConfiguratorProps, {
        property: "strokeColorRange"
      })) : _react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
        selectedColor: layer.config.visConfig.strokeColor,
        property: "strokeColor"
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.strokeColor
      }, layerChannelConfigProps)), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
        label: false,
        disabled: !layer.config.visConfig.outline
      })))) : null, _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'radius',
        collapsible: true
      }, !layer.config.sizeField ? _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.radius, visConfiguratorProps, {
        label: false,
        disabled: Boolean(layer.config.sizeField)
      })) : _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.radiusRange, visConfiguratorProps, {
        label: false,
        disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.size
      }, layerChannelConfigProps)), layer.config.sizeField ? _react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.fixedRadius, visConfiguratorProps)) : null)), _react["default"].createElement(_textLabelPanel["default"], {
        visConfiguratorProps: visConfiguratorProps,
        layerConfiguratorProps: layerConfiguratorProps,
        textLabel: layer.config.textLabel
      }));
    }
  }, {
    key: "_renderClusterLayerConfig",
    value: function _renderClusterLayerConfig(_ref2) {
      var layer = _ref2.layer,
          visConfiguratorProps = _ref2.visConfiguratorProps,
          layerConfiguratorProps = _ref2.layerConfiguratorProps,
          layerChannelConfigProps = _ref2.layerChannelConfigProps;
      return _react["default"].createElement(StyledLayerVisualConfigurator, null, _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'color',
        collapsible: true
      }, _react["default"].createElement(ColorRangeConfig, visConfiguratorProps), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(AggrColorScaleSelector, layerConfiguratorProps), _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.color
      }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? _react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
        channel: layer.visualChannels.color
      })) : null, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'radius',
        collapsible: true
      }, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps)))));
    }
  }, {
    key: "_renderHeatmapLayerConfig",
    value: function _renderHeatmapLayerConfig(_ref3) {
      var layer = _ref3.layer,
          visConfiguratorProps = _ref3.visConfiguratorProps,
          layerConfiguratorProps = _ref3.layerConfiguratorProps,
          layerChannelConfigProps = _ref3.layerChannelConfigProps;
      return _react["default"].createElement(StyledLayerVisualConfigurator, null, _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'color',
        collapsible: true
      }, _react["default"].createElement(ColorRangeConfig, visConfiguratorProps), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'radius'
      }, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
        label: false
      }))), _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'weight'
      }, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.weight
      }, layerChannelConfigProps))));
    }
  }, {
    key: "_renderGridLayerConfig",
    value: function _renderGridLayerConfig(props) {
      return this._renderAggregationLayerConfig(props);
    }
  }, {
    key: "_renderHexagonLayerConfig",
    value: function _renderHexagonLayerConfig(props) {
      return this._renderAggregationLayerConfig(props);
    }
  }, {
    key: "_renderAggregationLayerConfig",
    value: function _renderAggregationLayerConfig(_ref4) {
      var layer = _ref4.layer,
          visConfiguratorProps = _ref4.visConfiguratorProps,
          layerConfiguratorProps = _ref4.layerConfiguratorProps,
          layerChannelConfigProps = _ref4.layerChannelConfigProps;
      var config = layer.config;
      var enable3d = config.visConfig.enable3d;
      var elevationByDescription = 'When off, height is based on count of points';
      var colorByDescription = 'When off, color is based on count of points';
      return _react["default"].createElement(StyledLayerVisualConfigurator, null, _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'color',
        collapsible: true
      }, _react["default"].createElement(ColorRangeConfig, visConfiguratorProps), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(AggrColorScaleSelector, layerConfiguratorProps), _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.color
      }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? _react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
        descreiption: colorByDescription,
        channel: layer.visualChannels.color
      })) : null, layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'radius',
        collapsible: true
      }, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps)))), layer.visConfigSettings.enable3d ? _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
        collapsible: true
      }), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({}, layerChannelConfigProps, {
        channel: layer.visualChannels.size,
        description: elevationByDescription,
        disabled: !enable3d
      })), layer.visConfigSettings.sizeAggregation.condition(layer.config) ? _react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
        channel: layer.visualChannels.size
      })) : null, layer.visConfigSettings.elevationPercentile.condition(layer.config) ? _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null)) : null);
    } // TODO: Shan move these into layer class

  }, {
    key: "_renderHexagonIdLayerConfig",
    value: function _renderHexagonIdLayerConfig(_ref5) {
      var layer = _ref5.layer,
          visConfiguratorProps = _ref5.visConfiguratorProps,
          layerConfiguratorProps = _ref5.layerConfiguratorProps,
          layerChannelConfigProps = _ref5.layerChannelConfigProps;
      return _react["default"].createElement(StyledLayerVisualConfigurator, null, _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'color',
        collapsible: true
      }, layer.config.colorField ? _react["default"].createElement(ColorRangeConfig, visConfiguratorProps) : _react["default"].createElement(LayerColorSelector, layerConfiguratorProps), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.color
      }, layerChannelConfigProps)), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps)))), _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'coverage',
        collapsible: true
      }, !layer.config.coverageField ? _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps, {
        label: false
      })) : _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, layer.visConfigSettings.coverageRange, visConfiguratorProps, {
        label: false
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.coverage
      }, layerChannelConfigProps)))), _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.enable3d, visConfiguratorProps, {
        collapsible: true
      }), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.elevationRange, visConfiguratorProps, {
        label: false
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.size
      }, layerChannelConfigProps)))));
    }
  }, {
    key: "_renderArcLayerConfig",
    value: function _renderArcLayerConfig(args) {
      return this._renderLineLayerConfig(args);
    }
  }, {
    key: "_renderLineLayerConfig",
    value: function _renderLineLayerConfig(_ref6) {
      var layer = _ref6.layer,
          visConfiguratorProps = _ref6.visConfiguratorProps,
          layerConfiguratorProps = _ref6.layerConfiguratorProps,
          layerChannelConfigProps = _ref6.layerChannelConfigProps;
      return _react["default"].createElement(StyledLayerVisualConfigurator, null, _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'color',
        collapsible: true
      }, layer.config.colorField ? _react["default"].createElement(ColorRangeConfig, visConfiguratorProps) : _react["default"].createElement(ArcLayerColorSelector, {
        layer: layer,
        onChangeConfig: layerConfiguratorProps.onChange,
        onChangeVisConfig: visConfiguratorProps.onChange
      }), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.color
      }, layerChannelConfigProps)), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps)))), _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'stroke',
        collapsible: true
      }, layer.config.sizeField ? _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.strokeWidthRange, visConfiguratorProps, {
        disabled: !layer.config.sizeField,
        label: false
      })) : _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.thickness, visConfiguratorProps, {
        label: false
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.size
      }, layerChannelConfigProps)))));
    }
  }, {
    key: "_renderGeojsonLayerConfig",
    value: function _renderGeojsonLayerConfig(_ref7) {
      var layer = _ref7.layer,
          visConfiguratorProps = _ref7.visConfiguratorProps,
          layerConfiguratorProps = _ref7.layerConfiguratorProps,
          layerChannelConfigProps = _ref7.layerChannelConfigProps;
      var _layer$meta$featureTy = layer.meta.featureTypes,
          featureTypes = _layer$meta$featureTy === void 0 ? {} : _layer$meta$featureTy,
          visConfig = layer.config.visConfig;
      return _react["default"].createElement(StyledLayerVisualConfigurator, null, featureTypes.polygon || featureTypes.point ? _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
        label: "Fill Color",
        collapsible: true
      }), layer.config.colorField ? _react["default"].createElement(ColorRangeConfig, visConfiguratorProps) : _react["default"].createElement(LayerColorSelector, layerConfiguratorProps), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.color
      }, layerChannelConfigProps)), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.opacity, visConfiguratorProps)))) : null, _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
        label: "Stroke Color",
        collapsible: true
      }), layer.config.strokeColorField ? _react["default"].createElement(ColorRangeConfig, (0, _extends2["default"])({}, visConfiguratorProps, {
        property: "strokeColorRange"
      })) : _react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
        selectedColor: layer.config.visConfig.strokeColor,
        property: "strokeColor"
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.strokeColor
      }, layerChannelConfigProps)))), _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? _layerFactory.LAYER_VIS_CONFIGS.stroked : {}, {
        label: "Stroke Width",
        collapsible: true
      }), layer.config.sizeField ? _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.strokeWidthRange, visConfiguratorProps, {
        label: false
      })) : _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.thickness, visConfiguratorProps, {
        label: false
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.size
      }, layerChannelConfigProps)))), featureTypes.polygon && visConfig.filled ? _react["default"].createElement(_layerConfigGroup["default"], (0, _extends2["default"])({}, visConfiguratorProps, _layerFactory.LAYER_VIS_CONFIGS.enable3d, {
        collapsible: true
      }), _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.elevationScale, visConfiguratorProps, {
        label: false
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.height
      }, layerChannelConfigProps)), _react["default"].createElement(_visConfigSwitch["default"], (0, _extends2["default"])({}, visConfiguratorProps, _layerFactory.LAYER_VIS_CONFIGS.wireframe)))) : null, featureTypes.point ? _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'radius',
        collapsible: true
      }, !layer.config.radiusField ? _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.radius, visConfiguratorProps, {
        label: false,
        disabled: Boolean(layer.config.radiusField)
      })) : _react["default"].createElement(_visConfigSlider["default"], (0, _extends2["default"])({}, _layerFactory.LAYER_VIS_CONFIGS.radiusRange, visConfiguratorProps, {
        label: false,
        disabled: !layer.config.radiusField
      })), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, _react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
        channel: layer.visualChannels.radius
      }, layerChannelConfigProps)))) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          layer = _this$props.layer,
          datasets = _this$props.datasets,
          updateLayerConfig = _this$props.updateLayerConfig,
          layerTypeOptions = _this$props.layerTypeOptions,
          updateLayerType = _this$props.updateLayerType;

      var _ref8 = layer.config.dataId ? datasets[layer.config.dataId] : {},
          _ref8$fields = _ref8.fields,
          fields = _ref8$fields === void 0 ? [] : _ref8$fields,
          fieldPairs = _ref8.fieldPairs;

      var config = layer.config;
      var commonConfigProp = {
        layer: layer,
        fields: fields
      };
      var visConfiguratorProps = (0, _objectSpread3["default"])({}, commonConfigProp, {
        onChange: this.props.updateLayerVisConfig
      });
      var layerConfiguratorProps = (0, _objectSpread3["default"])({}, commonConfigProp, {
        onChange: updateLayerConfig
      });
      var layerChannelConfigProps = (0, _objectSpread3["default"])({}, commonConfigProp, {
        onChange: this.props.updateLayerVisualChannelConfig
      });
      var renderTemplate = layer.type && "_render".concat((0, _utils.capitalizeFirstLetter)(layer.type), "LayerConfig");
      return _react["default"].createElement(StyledLayerConfigurator, null, layer.layerInfoModal ? _react["default"].createElement(HowToButton, {
        onClick: function onClick() {
          return _this.props.openModal(layer.layerInfoModal);
        }
      }) : null, _react["default"].createElement(_layerConfigGroup["default"], {
        label: 'basic',
        collapsible: true,
        expanded: !layer.hasAllColumns()
      }, _react["default"].createElement(_layerTypeSelector["default"], {
        layer: layer,
        layerTypeOptions: layerTypeOptions,
        onSelect: updateLayerType
      }), _react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, Object.keys(datasets).length > 1 && _react["default"].createElement(_sourceDataSelector["default"], {
        datasets: datasets,
        id: layer.id,
        disabled: layer.tyep && config.columns,
        dataId: config.dataId,
        onSelect: function onSelect(value) {
          return updateLayerConfig({
            dataId: value
          });
        }
      }), _react["default"].createElement(_layerColumnConfig["default"], {
        layer: layer,
        fields: fields,
        fieldPairs: fieldPairs,
        updateLayerConfig: updateLayerConfig,
        updateLayerType: this.props.updateLayerType
      }))), this[renderTemplate] && this[renderTemplate]({
        layer: layer,
        visConfiguratorProps: visConfiguratorProps,
        layerChannelConfigProps: layerChannelConfigProps,
        layerConfiguratorProps: layerConfiguratorProps
      }));
    }
  }]);
  return LayerConfigurator;
}(_react.Component);
/*
 * Componentize config component into pure functional components
 */


exports["default"] = LayerConfigurator;
(0, _defineProperty2["default"])(LayerConfigurator, "propTypes", {
  layer: _propTypes["default"].object.isRequired,
  datasets: _propTypes["default"].object.isRequired,
  layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  openModal: _propTypes["default"].func.isRequired,
  updateLayerConfig: _propTypes["default"].func.isRequired,
  updateLayerType: _propTypes["default"].func.isRequired,
  updateLayerVisConfig: _propTypes["default"].func.isRequired,
  updateLayerVisualChannelConfig: _propTypes["default"].func.isRequired
});
var StyledHowToButton = styled.div(_templateObject3());

var HowToButton = function HowToButton(_ref9) {
  var onClick = _ref9.onClick;
  return _react["default"].createElement(StyledHowToButton, null, _react["default"].createElement(_styledComponents2.Button, {
    link: true,
    small: true,
    onClick: onClick
  }, "How to"));
};

exports.HowToButton = HowToButton;

var LayerColorSelector = function LayerColorSelector(_ref10) {
  var layer = _ref10.layer,
      onChange = _ref10.onChange,
      label = _ref10.label,
      selectedColor = _ref10.selectedColor,
      _ref10$property = _ref10.property,
      property = _ref10$property === void 0 ? 'color' : _ref10$property;
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: selectedColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChange((0, _defineProperty2["default"])({}, property, rgbValue));
      }
    }]
  }));
};

exports.LayerColorSelector = LayerColorSelector;

var ArcLayerColorSelector = function ArcLayerColorSelector(_ref11) {
  var layer = _ref11.layer,
      onChangeConfig = _ref11.onChangeConfig,
      onChangeVisConfig = _ref11.onChangeVisConfig;
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeConfig({
          color: rgbValue
        });
      },
      label: 'Source'
    }, {
      selectedColor: layer.config.visConfig.targetColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeVisConfig({
          targetColor: rgbValue
        });
      },
      label: 'Target'
    }]
  }));
};

exports.ArcLayerColorSelector = ArcLayerColorSelector;

var ColorRangeConfig = function ColorRangeConfig(_ref12) {
  var layer = _ref12.layer,
      onChange = _ref12.onChange,
      _ref12$property = _ref12.property,
      property = _ref12$property === void 0 ? 'colorRange' : _ref12$property;
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.visConfig[property],
      isRange: true,
      setColor: function setColor(colorRange) {
        return onChange((0, _defineProperty2["default"])({}, property, colorRange));
      }
    }]
  }));
};

exports.ColorRangeConfig = ColorRangeConfig;

var ChannelByValueSelector = function ChannelByValueSelector(_ref13) {
  var layer = _ref13.layer,
      channel = _ref13.channel,
      onChange = _ref13.onChange,
      fields = _ref13.fields,
      description = _ref13.description;
  var channelScaleType = channel.channelScaleType,
      domain = channel.domain,
      field = channel.field,
      key = channel.key,
      property = channel.property,
      range = channel.range,
      scale = channel.scale,
      defaultMeasure = channel.defaultMeasure,
      supportedFieldTypes = channel.supportedFieldTypes;
  var channelSupportedFieldTypes = supportedFieldTypes || _defaultSettings.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
  var supportedFields = fields.filter(function (_ref14) {
    var type = _ref14.type;
    return channelSupportedFieldTypes.includes(type);
  });
  var scaleOptions = layer.getScaleOptions(channel.key);
  var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
  var defaultDescription = "Calculate ".concat(property, " based on selected field");
  return _react["default"].createElement(_visConfigByFieldSelector["default"], {
    channel: channel.key,
    description: description || defaultDescription,
    domain: layer.config[domain],
    fields: supportedFields,
    id: layer.id,
    key: "".concat(key, "-channel-selector"),
    property: property,
    placeholder: defaultMeasure || 'Select a field',
    range: layer.config.visConfig[range],
    scaleOptions: scaleOptions,
    scaleType: scale ? layer.config[scale] : null,
    selectedField: layer.config[field],
    showScale: showScale,
    updateField: function updateField(val) {
      return onChange((0, _defineProperty2["default"])({}, field, val), key);
    },
    updateScale: function updateScale(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  });
};

exports.ChannelByValueSelector = ChannelByValueSelector;

var AggrColorScaleSelector = function AggrColorScaleSelector(_ref15) {
  var layer = _ref15.layer,
      onChange = _ref15.onChange;
  var scaleOptions = layer.getScaleOptions('color');
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? _react["default"].createElement(_dimensionScaleSelector["default"], {
    label: "Color Scale",
    options: scaleOptions,
    scaleType: layer.config.colorScale,
    onSelect: function onSelect(val) {
      return onChange({
        colorScale: val
      }, 'color');
    }
  }) : null;
};

exports.AggrColorScaleSelector = AggrColorScaleSelector;

var AggregationTypeSelector = function AggregationTypeSelector(_ref16) {
  var layer = _ref16.layer,
      channel = _ref16.channel,
      _onChange5 = _ref16.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;
  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig; // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(_styledComponents2.PanelLabel, null, "Aggregate ".concat(selectedField.name, " by")), _react["default"].createElement(_itemSelector["default"], {
    selectedItems: visConfig[aggregation],
    options: aggregationOptions,
    multiSelect: false,
    searchable: false,
    onChange: function onChange(value) {
      return _onChange5({
        visConfig: (0, _objectSpread3["default"])({}, layer.config.visConfig, (0, _defineProperty2["default"])({}, aggregation, value))
      }, channel.key);
    }
  }));
};
/* eslint-enable max-params */


exports.AggregationTypeSelector = AggregationTypeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsIkxheWVyQ29uZmlndXJhdG9yIiwicHJvcHMiLCJfcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyIsImxheWVyIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImNvbmZpZyIsImNvbG9yRmllbGQiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwiTEFZRVJfVklTX0NPTkZJR1MiLCJvcGFjaXR5IiwidHlwZSIsIkxBWUVSX1RZUEVTIiwicG9pbnQiLCJvdXRsaW5lIiwic3Ryb2tlQ29sb3JGaWVsZCIsInZpc0NvbmZpZyIsInN0cm9rZUNvbG9yIiwidGhpY2tuZXNzIiwic2l6ZUZpZWxkIiwicmFkaXVzIiwiQm9vbGVhbiIsInJhZGl1c1JhbmdlIiwiZml4ZWRSYWRpdXMiLCJzaXplIiwidGV4dExhYmVsIiwiY29sb3JBZ2dyZWdhdGlvbiIsImNvbmRpdGlvbiIsImNsdXN0ZXJSYWRpdXMiLCJ3ZWlnaHQiLCJfcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyIsImVuYWJsZTNkIiwiZWxldmF0aW9uQnlEZXNjcmlwdGlvbiIsImNvbG9yQnlEZXNjcmlwdGlvbiIsInBlcmNlbnRpbGUiLCJ3b3JsZFVuaXRTaXplIiwiY292ZXJhZ2UiLCJlbGV2YXRpb25TY2FsZSIsInNpemVBZ2dyZWdhdGlvbiIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJjb3ZlcmFnZUZpZWxkIiwiY292ZXJhZ2VSYW5nZSIsImVsZXZhdGlvblJhbmdlIiwiYXJncyIsIl9yZW5kZXJMaW5lTGF5ZXJDb25maWciLCJvbkNoYW5nZSIsInN0cm9rZVdpZHRoUmFuZ2UiLCJtZXRhIiwiZmVhdHVyZVR5cGVzIiwicG9seWdvbiIsInN0cm9rZWQiLCJoZWlnaHQiLCJ3aXJlZnJhbWUiLCJyYWRpdXNGaWVsZCIsImRhdGFzZXRzIiwidXBkYXRlTGF5ZXJDb25maWciLCJsYXllclR5cGVPcHRpb25zIiwidXBkYXRlTGF5ZXJUeXBlIiwiZGF0YUlkIiwiZmllbGRzIiwiZmllbGRQYWlycyIsImNvbW1vbkNvbmZpZ1Byb3AiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZyIsInJlbmRlclRlbXBsYXRlIiwibGF5ZXJJbmZvTW9kYWwiLCJvcGVuTW9kYWwiLCJoYXNBbGxDb2x1bW5zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImlkIiwidHllcCIsImNvbHVtbnMiLCJ2YWx1ZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwiYW55IiwiZnVuYyIsIlN0eWxlZEhvd1RvQnV0dG9uIiwiSG93VG9CdXR0b24iLCJvbkNsaWNrIiwiTGF5ZXJDb2xvclNlbGVjdG9yIiwibGFiZWwiLCJzZWxlY3RlZENvbG9yIiwicHJvcGVydHkiLCJzZXRDb2xvciIsInJnYlZhbHVlIiwiQXJjTGF5ZXJDb2xvclNlbGVjdG9yIiwib25DaGFuZ2VDb25maWciLCJvbkNoYW5nZVZpc0NvbmZpZyIsInRhcmdldENvbG9yIiwiQ29sb3JSYW5nZUNvbmZpZyIsImlzUmFuZ2UiLCJjb2xvclJhbmdlIiwiQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvciIsImNoYW5uZWwiLCJkZXNjcmlwdGlvbiIsImNoYW5uZWxTY2FsZVR5cGUiLCJkb21haW4iLCJmaWVsZCIsImtleSIsInJhbmdlIiwic2NhbGUiLCJkZWZhdWx0TWVhc3VyZSIsInN1cHBvcnRlZEZpZWxkVHlwZXMiLCJjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyIsIkNIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUyIsInN1cHBvcnRlZEZpZWxkcyIsImZpbHRlciIsImluY2x1ZGVzIiwic2NhbGVPcHRpb25zIiwiZ2V0U2NhbGVPcHRpb25zIiwic2hvd1NjYWxlIiwiaXNBZ2dyZWdhdGVkIiwiZGVmYXVsdERlc2NyaXB0aW9uIiwidmFsIiwiQWdnckNvbG9yU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsImNvbG9yU2NhbGUiLCJBZ2dyZWdhdGlvblR5cGVTZWxlY3RvciIsImFnZ3JlZ2F0aW9uIiwic2VsZWN0ZWRGaWVsZCIsImFnZ3JlZ2F0aW9uT3B0aW9ucyIsImdldEFnZ3JlZ2F0aW9uT3B0aW9ucyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOztBQUNBOztBQUNBOztBQUVBOztBQUtBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLElBQU1BLHVCQUF1QixHQUFHQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMvQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRG9DLENBQWpCLENBQUgsbUJBQTdCO0FBT0EsSUFBTUMsNkJBQTZCLEdBQUdKLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3JEQyxFQUFBQSxTQUFTLEVBQUU7QUFEMEMsQ0FBakIsQ0FBSCxvQkFBbkM7O0lBTXFCRSxpQjs7Ozs7Ozs7Ozs7OzRDQVlLQyxLLEVBQU87QUFDN0IsYUFBTyxLQUFLQyw2QkFBTCxDQUFtQ0QsS0FBbkMsQ0FBUDtBQUNEOzs7MkNBRXNCQSxLLEVBQU87QUFDNUIsYUFBTyxLQUFLQyw2QkFBTCxDQUFtQ0QsS0FBbkMsQ0FBUDtBQUNEOzs7d0RBT0U7QUFBQSxVQUpE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b0csT0FBdUIsVUFBdkJBLE9BQXVCO0FBQUEsTUFBZHRELFVBQWMsVUFBZEEsUUFBYztBQUFBLE1BQzlEMEQsS0FEOEQsR0FDbkNKLE9BRG1DLENBQzlESSxLQUQ4RDtBQUFBLE1BQ3ZEc0IsV0FEdUQsR0FDbkMxQixPQURtQyxDQUN2RDBCLFdBRHVEO0FBQUEsTUFDMUNyQixHQUQwQyxHQUNuQ0wsT0FEbUMsQ0FDMUNLLEdBRDBDO0FBRXJFLE1BQU1zQixhQUFhLEdBQUcvSCxLQUFLLENBQUNNLE1BQU4sQ0FBYWtHLEtBQWIsQ0FBdEI7QUFGcUUsTUFHOUR2RixTQUg4RCxHQUdqRGpCLEtBQUssQ0FBQ00sTUFIMkMsQ0FHOURXLFNBSDhELEVBS3JFOztBQUNBLE1BQU0rRyxrQkFBa0IsR0FBR2hJLEtBQUssQ0FBQ2lJLHFCQUFOLENBQTRCeEIsR0FBNUIsQ0FBM0I7QUFFQSxTQUNFLGdDQUFDLG1DQUFELFFBQ0UsZ0NBQUMsNkJBQUQsNEJBQTBCc0IsYUFBYSxDQUFDRyxJQUF4QyxTQURGLEVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRWpILFNBQVMsQ0FBQzZHLFdBQUQsQ0FEMUI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsa0JBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUUsS0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFBckQsS0FBSztBQUFBLGFBQ2I3QixVQUFRLENBQ047QUFDRTdCLFFBQUFBLFNBQVMscUNBQ0pqQixLQUFLLENBQUNNLE1BQU4sQ0FBYVcsU0FEVCx1Q0FFTjZHLFdBRk0sRUFFUW5ELEtBRlI7QUFEWCxPQURNLEVBT055QixPQUFPLENBQUNLLEdBUEYsQ0FESztBQUFBO0FBTGpCLElBRkYsQ0FERjtBQXNCRCxDQTlCTTtBQStCUCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgUGFuZWxMYWJlbCxcbiAgU2lkZVBhbmVsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5cbmltcG9ydCBWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IgZnJvbSAnLi92aXMtY29uZmlnLWJ5LWZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckNvbHVtbkNvbmZpZyBmcm9tICcuL2xheWVyLWNvbHVtbi1jb25maWcnO1xuaW1wb3J0IExheWVyVHlwZVNlbGVjdG9yIGZyb20gJy4vbGF5ZXItdHlwZS1zZWxlY3Rvcic7XG5pbXBvcnQgRGltZW5zaW9uU2NhbGVTZWxlY3RvciBmcm9tICcuL2RpbWVuc2lvbi1zY2FsZS1zZWxlY3Rvcic7XG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tICcuL2NvbG9yLXNlbGVjdG9yJztcbmltcG9ydCBTb3VyY2VEYXRhU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3NvdXJjZS1kYXRhLXNlbGVjdG9yJztcbmltcG9ydCBWaXNDb25maWdTd2l0Y2ggZnJvbSAnLi92aXMtY29uZmlnLXN3aXRjaCc7XG5pbXBvcnQgVmlzQ29uZmlnU2xpZGVyIGZyb20gJy4vdmlzLWNvbmZpZy1zbGlkZXInO1xuaW1wb3J0IExheWVyQ29uZmlnR3JvdXAsIHtcbiAgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnRcbn0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xuaW1wb3J0IFRleHRMYWJlbFBhbmVsIGZyb20gJy4vdGV4dC1sYWJlbC1wYW5lbCc7XG5cbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcblxuaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgTEFZRVJfVFlQRVMsXG4gIENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFN0eWxlZExheWVyQ29uZmlndXJhdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWcnXG59KWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZ19fdmlzdWFsQy1jb25maWcnXG59KWBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyQ29uZmlndXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbGF5ZXJUeXBlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlTGF5ZXJDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlTGF5ZXJUeXBlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIF9yZW5kZXJQb2ludExheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcocHJvcHMpO1xuICB9XG5cbiAgX3JlbmRlckljb25MYXllckNvbmZpZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHByb3BzKTtcbiAgfVxuXG4gIF9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHtcbiAgICBsYXllcixcbiAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcbiAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzXG4gIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICB7LyogRmlsbCBDb2xvciAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxuICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICA+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5vcGFjaXR5fVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7Lyogb3V0bGluZSBjb2xvciAqL31cbiAgICAgICAge2xheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLnBvaW50ID8gKFxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3V0bGluZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8Q29sb3JSYW5nZUNvbmZpZ1xuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcudmlzQ29uZmlnLm91dGxpbmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydyYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICB7IWxheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXN9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcuc2l6ZUZpZWxkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLnJhZGl1c1JhbmdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICFsYXllci5jb25maWcuc2l6ZUZpZWxkIHx8IGxheWVyLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaFxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5maXhlZFJhZGl1c31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIHRleHQgbGFiZWwgKi99XG4gICAgICAgIDxUZXh0TGFiZWxQYW5lbFxuICAgICAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzPXt2aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzPXtsYXllckNvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgIHRleHRMYWJlbD17bGF5ZXIuY29uZmlnLnRleHRMYWJlbH1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgKTtcbiAgfVxuXG4gIF9yZW5kZXJDbHVzdGVyTGF5ZXJDb25maWcoe1xuICAgIGxheWVyLFxuICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8QWdnckNvbG9yU2NhbGVTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb24uY29uZGl0aW9uKFxuICAgICAgICAgICAgICBsYXllci5jb25maWdcbiAgICAgICAgICAgICkgPyAoXG4gICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIENsdXN0ZXIgUmFkaXVzICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jbHVzdGVyUmFkaXVzfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckhlYXRtYXBMYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9PlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICB7LyogV2VpZ2h0ICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3dlaWdodCd9PlxuICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy53ZWlnaHR9XG4gICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckdyaWRMYXllckNvbmZpZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHByb3BzKTtcbiAgfVxuXG4gIF9yZW5kZXJIZXhhZ29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyhwcm9wcyk7XG4gIH1cblxuICBfcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcbiAgICBjb25zdCB7XG4gICAgICB2aXNDb25maWc6IHtlbmFibGUzZH1cbiAgICB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGVsZXZhdGlvbkJ5RGVzY3JpcHRpb24gPVxuICAgICAgJ1doZW4gb2ZmLCBoZWlnaHQgaXMgYmFzZWQgb24gY291bnQgb2YgcG9pbnRzJztcbiAgICBjb25zdCBjb2xvckJ5RGVzY3JpcHRpb24gPSAnV2hlbiBvZmYsIGNvbG9yIGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Q29sb3JSYW5nZUNvbmZpZyB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPEFnZ3JDb2xvclNjYWxlU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihcbiAgICAgICAgICAgICAgbGF5ZXIuY29uZmlnXG4gICAgICAgICAgICApID8gKFxuICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgZGVzY3JlaXB0aW9uPXtjb2xvckJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlICYmXG4gICAgICAgICAgICBsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7LyogQ2VsbCBzaXplICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53b3JsZFVuaXRTaXplfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZCA/IChcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWxldmF0aW9uQnlEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZTNkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihcbiAgICAgICAgICAgICAgICBsYXllci5jb25maWdcbiAgICAgICAgICAgICAgKSA/IChcbiAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplQWdncmVnYXRpb259XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZS5jb25kaXRpb24oXG4gICAgICAgICAgICAgICAgbGF5ZXIuY29uZmlnXG4gICAgICAgICAgICAgICkgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblBlcmNlbnRpbGV9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICk7XG4gIH1cblxuICAvLyBUT0RPOiBTaGFuIG1vdmUgdGhlc2UgaW50byBsYXllciBjbGFzc1xuICBfcmVuZGVySGV4YWdvbklkTGF5ZXJDb25maWcoe1xuICAgIGxheWVyLFxuICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1Mub3BhY2l0eX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIENvdmVyYWdlICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvdmVyYWdlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgeyFsYXllci5jb25maWcuY292ZXJhZ2VGaWVsZCA/IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlUmFuZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvdmVyYWdlfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7LyogaGVpZ2h0ICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbmFibGUzZH1cbiAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbGV2YXRpb25SYW5nZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckFyY0xheWVyQ29uZmlnKGFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyTGluZUxheWVyQ29uZmlnKGFyZ3MpO1xuICB9XG5cbiAgX3JlbmRlckxpbmVMYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QXJjTGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDb25maWc9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlVmlzQ29uZmlnPXt2aXNDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLm9wYWNpdHl9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgIHsvKiB0aGlja25lc3MgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnc3Ryb2tlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5zdHJva2VXaWR0aFJhbmdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZH1cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgKTtcbiAgfVxuXG4gIF9yZW5kZXJHZW9qc29uTGF5ZXJDb25maWcoe1xuICAgIGxheWVyLFxuICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1ldGE6IHtmZWF0dXJlVHlwZXMgPSB7fX0sXG4gICAgICBjb25maWc6IHt2aXNDb25maWd9XG4gICAgfSA9IGxheWVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIEZpbGwgQ29sb3IgKi99XG4gICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiB8fCBmZWF0dXJlVHlwZXMucG9pbnQgPyAoXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cIkZpbGwgQ29sb3JcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5vcGFjaXR5fVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7Lyogc3Ryb2tlIGNvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkfVxuICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICBsYWJlbD1cIlN0cm9rZSBDb2xvclwiXG4gICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgPlxuICAgICAgICAgIHtsYXllci5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclJhbmdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3JcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgey4uLihmZWF0dXJlVHlwZXMucG9seWdvbiA/IExBWUVSX1ZJU19DT05GSUdTLnN0cm9rZWQgOiB7fSl9XG4gICAgICAgICAgbGFiZWw9XCJTdHJva2UgV2lkdGhcIlxuICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgID5cbiAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLnN0cm9rZVdpZHRoUmFuZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvbHlnb24gJiYgdmlzQ29uZmlnLmZpbGxlZCA/IChcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLmVuYWJsZTNkfVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLndpcmVmcmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncmFkaXVzJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcucmFkaXVzRmllbGQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxheWVyLFxuICAgICAgZGF0YXNldHMsXG4gICAgICB1cGRhdGVMYXllckNvbmZpZyxcbiAgICAgIGxheWVyVHlwZU9wdGlvbnMsXG4gICAgICB1cGRhdGVMYXllclR5cGVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZmllbGRzID0gW10sIGZpZWxkUGFpcnN9ID0gbGF5ZXIuY29uZmlnLmRhdGFJZFxuICAgICAgPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXVxuICAgICAgOiB7fTtcbiAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xuXG4gICAgY29uc3QgY29tbW9uQ29uZmlnUHJvcCA9IHtcbiAgICAgIGxheWVyLFxuICAgICAgZmllbGRzXG4gICAgfTtcblxuICAgIGNvbnN0IHZpc0NvbmZpZ3VyYXRvclByb3BzID0ge1xuICAgICAgLi4uY29tbW9uQ29uZmlnUHJvcCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLnVwZGF0ZUxheWVyVmlzQ29uZmlnXG4gICAgfTtcblxuICAgIGNvbnN0IGxheWVyQ29uZmlndXJhdG9yUHJvcHMgPSB7XG4gICAgICAuLi5jb21tb25Db25maWdQcm9wLFxuICAgICAgb25DaGFuZ2U6IHVwZGF0ZUxheWVyQ29uZmlnXG4gICAgfTtcblxuICAgIGNvbnN0IGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzID0ge1xuICAgICAgLi4uY29tbW9uQ29uZmlnUHJvcCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUZW1wbGF0ZSA9XG4gICAgICBsYXllci50eXBlICYmIGBfcmVuZGVyJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGF5ZXIudHlwZSl9TGF5ZXJDb25maWdgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ3VyYXRvcj5cbiAgICAgICAge2xheWVyLmxheWVySW5mb01vZGFsID8gKFxuICAgICAgICAgIDxIb3dUb0J1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuTW9kYWwobGF5ZXIubGF5ZXJJbmZvTW9kYWwpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIGxhYmVsPXsnYmFzaWMnfVxuICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgZXhwYW5kZWQ9eyFsYXllci5oYXNBbGxDb2x1bW5zKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8TGF5ZXJUeXBlU2VsZWN0b3JcbiAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgIGxheWVyVHlwZU9wdGlvbnM9e2xheWVyVHlwZU9wdGlvbnN9XG4gICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGFzZXRzKS5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPFNvdXJjZURhdGFTZWxlY3RvclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBpZD17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xheWVyLnR5ZXAgJiYgY29uZmlnLmNvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtjb25maWcuZGF0YUlkfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2YWx1ZSA9PiB1cGRhdGVMYXllckNvbmZpZyh7ZGF0YUlkOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxMYXllckNvbHVtbkNvbmZpZ1xuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVHlwZT17dGhpcy5wcm9wcy51cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAge3RoaXNbcmVuZGVyVGVtcGxhdGVdICYmXG4gICAgICAgICAgdGhpc1tyZW5kZXJUZW1wbGF0ZV0oe1xuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgICAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzLFxuICAgICAgICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xuICAgICAgICAgIH0pfVxuICAgICAgPC9TdHlsZWRMYXllckNvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG59XG5cbi8qXG4gKiBDb21wb25lbnRpemUgY29uZmlnIGNvbXBvbmVudCBpbnRvIHB1cmUgZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gKi9cblxuY29uc3QgU3R5bGVkSG93VG9CdXR0b24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IC00cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSG93VG9CdXR0b24gPSAoe29uQ2xpY2t9KSA9PiAoXG4gIDxTdHlsZWRIb3dUb0J1dHRvbj5cbiAgICA8QnV0dG9uIGxpbmsgc21hbGwgb25DbGljaz17b25DbGlja30+XG4gICAgICBIb3cgdG9cbiAgICA8L0J1dHRvbj5cbiAgPC9TdHlsZWRIb3dUb0J1dHRvbj5cbik7XG5cbmV4cG9ydCBjb25zdCBMYXllckNvbG9yU2VsZWN0b3IgPSAoe1xuICBsYXllcixcbiAgb25DaGFuZ2UsXG4gIGxhYmVsLFxuICBzZWxlY3RlZENvbG9yLFxuICBwcm9wZXJ0eSA9ICdjb2xvcidcbn0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogc2VsZWN0ZWRDb2xvciB8fCBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiByZ2JWYWx1ZX0pXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFyY0xheWVyQ29sb3JTZWxlY3RvciA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZUNvbmZpZyxcbiAgb25DaGFuZ2VWaXNDb25maWdcbn0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZUNvbmZpZyh7Y29sb3I6IHJnYlZhbHVlfSksXG4gICAgICAgICAgbGFiZWw6ICdTb3VyY2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOlxuICAgICAgICAgICAgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy50YXJnZXRDb2xvciB8fCBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlVmlzQ29uZmlnKHt0YXJnZXRDb2xvcjogcmdiVmFsdWV9KSxcbiAgICAgICAgICBsYWJlbDogJ1RhcmdldCdcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgQ29sb3JSYW5nZUNvbmZpZyA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZSxcbiAgcHJvcGVydHkgPSAnY29sb3JSYW5nZSdcbn0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV0sXG4gICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICBzZXRDb2xvcjogY29sb3JSYW5nZSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogY29sb3JSYW5nZX0pXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IENoYW5uZWxCeVZhbHVlU2VsZWN0b3IgPSAoe1xuICBsYXllcixcbiAgY2hhbm5lbCxcbiAgb25DaGFuZ2UsXG4gIGZpZWxkcyxcbiAgZGVzY3JpcHRpb25cbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGNoYW5uZWxTY2FsZVR5cGUsXG4gICAgZG9tYWluLFxuICAgIGZpZWxkLFxuICAgIGtleSxcbiAgICBwcm9wZXJ0eSxcbiAgICByYW5nZSxcbiAgICBzY2FsZSxcbiAgICBkZWZhdWx0TWVhc3VyZSxcbiAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzXG4gIH0gPSBjaGFubmVsO1xuICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XG4gICAgc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XG4gIGNvbnN0IHN1cHBvcnRlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKHt0eXBlfSkgPT5cbiAgICBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcy5pbmNsdWRlcyh0eXBlKVxuICApO1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbC5rZXkpO1xuICBjb25zdCBzaG93U2NhbGUgPVxuICAgICFsYXllci5pc0FnZ3JlZ2F0ZWQgJiYgbGF5ZXIuY29uZmlnW3NjYWxlXSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMTtcbiAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gYENhbGN1bGF0ZSAke3Byb3BlcnR5fSBiYXNlZCBvbiBzZWxlY3RlZCBmaWVsZGA7XG5cbiAgcmV0dXJuIChcbiAgICA8VmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yXG4gICAgICBjaGFubmVsPXtjaGFubmVsLmtleX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb259XG4gICAgICBkb21haW49e2xheWVyLmNvbmZpZ1tkb21haW5dfVxuICAgICAgZmllbGRzPXtzdXBwb3J0ZWRGaWVsZHN9XG4gICAgICBpZD17bGF5ZXIuaWR9XG4gICAgICBrZXk9e2Ake2tleX0tY2hhbm5lbC1zZWxlY3RvcmB9XG4gICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lYXN1cmUgfHwgJ1NlbGVjdCBhIGZpZWxkJ31cbiAgICAgIHJhbmdlPXtsYXllci5jb25maWcudmlzQ29uZmlnW3JhbmdlXX1cbiAgICAgIHNjYWxlT3B0aW9ucz17c2NhbGVPcHRpb25zfVxuICAgICAgc2NhbGVUeXBlPXtzY2FsZSA/IGxheWVyLmNvbmZpZ1tzY2FsZV0gOiBudWxsfVxuICAgICAgc2VsZWN0ZWRGaWVsZD17bGF5ZXIuY29uZmlnW2ZpZWxkXX1cbiAgICAgIHNob3dTY2FsZT17c2hvd1NjYWxlfVxuICAgICAgdXBkYXRlRmllbGQ9e3ZhbCA9PiBvbkNoYW5nZSh7W2ZpZWxkXTogdmFsfSwga2V5KX1cbiAgICAgIHVwZGF0ZVNjYWxlPXt2YWwgPT4gb25DaGFuZ2Uoe1tzY2FsZV06IHZhbH0sIGtleSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBBZ2dyQ29sb3JTY2FsZVNlbGVjdG9yID0gKHtsYXllciwgb25DaGFuZ2V9KSA9PiB7XG4gIGNvbnN0IHNjYWxlT3B0aW9ucyA9IGxheWVyLmdldFNjYWxlT3B0aW9ucygnY29sb3InKTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2NhbGVPcHRpb25zKSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMSA/IChcbiAgICA8RGltZW5zaW9uU2NhbGVTZWxlY3RvclxuICAgICAgbGFiZWw9XCJDb2xvciBTY2FsZVwiXG4gICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICBzY2FsZVR5cGU9e2xheWVyLmNvbmZpZy5jb2xvclNjYWxlfVxuICAgICAgb25TZWxlY3Q9e3ZhbCA9PiBvbkNoYW5nZSh7Y29sb3JTY2FsZTogdmFsfSwgJ2NvbG9yJyl9XG4gICAgLz5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgQWdncmVnYXRpb25UeXBlU2VsZWN0b3IgPSAoe2xheWVyLCBjaGFubmVsLCBvbkNoYW5nZX0pID0+IHtcbiAgY29uc3Qge2ZpZWxkLCBhZ2dyZWdhdGlvbiwga2V5fSA9IGNoYW5uZWw7XG4gIGNvbnN0IHNlbGVjdGVkRmllbGQgPSBsYXllci5jb25maWdbZmllbGRdO1xuICBjb25zdCB7dmlzQ29uZmlnfSA9IGxheWVyLmNvbmZpZztcblxuICAvLyBhZ2dyZWdhdGlvbiBzaG91bGQgb25seSBiZSBzZWxlY3RhYmxlIHdoZW4gZmllbGQgaXMgc2VsZWN0ZWRcbiAgY29uc3QgYWdncmVnYXRpb25PcHRpb25zID0gbGF5ZXIuZ2V0QWdncmVnYXRpb25PcHRpb25zKGtleSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgIDxQYW5lbExhYmVsPntgQWdncmVnYXRlICR7c2VsZWN0ZWRGaWVsZC5uYW1lfSBieWB9PC9QYW5lbExhYmVsPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXt2aXNDb25maWdbYWdncmVnYXRpb25dfVxuICAgICAgICBvcHRpb25zPXthZ2dyZWdhdGlvbk9wdGlvbnN9XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAgICAgICAuLi5sYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgICAgICAgICAgICAgIFthZ2dyZWdhdGlvbl06IHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFubmVsLmtleVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICk7XG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG4iXX0=