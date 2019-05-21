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
        fields: visConfiguratorProps.fields,
        updateLayerTextLabel: this.props.updateLayerTextLabel,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlndXJhdG9yLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlndXJhdG9yIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciIsIkxheWVyQ29uZmlndXJhdG9yIiwicHJvcHMiLCJfcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyIsImxheWVyIiwidmlzQ29uZmlndXJhdG9yUHJvcHMiLCJsYXllckNoYW5uZWxDb25maWdQcm9wcyIsImxheWVyQ29uZmlndXJhdG9yUHJvcHMiLCJ2aXNDb25maWdTZXR0aW5ncyIsImZpbGxlZCIsImNvbmZpZyIsImNvbG9yRmllbGQiLCJ2aXN1YWxDaGFubmVscyIsImNvbG9yIiwiTEFZRVJfVklTX0NPTkZJR1MiLCJvcGFjaXR5IiwidHlwZSIsIkxBWUVSX1RZUEVTIiwicG9pbnQiLCJvdXRsaW5lIiwic3Ryb2tlQ29sb3JGaWVsZCIsInZpc0NvbmZpZyIsInN0cm9rZUNvbG9yIiwidGhpY2tuZXNzIiwic2l6ZUZpZWxkIiwicmFkaXVzIiwiQm9vbGVhbiIsInJhZGl1c1JhbmdlIiwiZml4ZWRSYWRpdXMiLCJzaXplIiwiZmllbGRzIiwidXBkYXRlTGF5ZXJUZXh0TGFiZWwiLCJ0ZXh0TGFiZWwiLCJjb2xvckFnZ3JlZ2F0aW9uIiwiY29uZGl0aW9uIiwiY2x1c3RlclJhZGl1cyIsIndlaWdodCIsIl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnIiwiZW5hYmxlM2QiLCJlbGV2YXRpb25CeURlc2NyaXB0aW9uIiwiY29sb3JCeURlc2NyaXB0aW9uIiwicGVyY2VudGlsZSIsIndvcmxkVW5pdFNpemUiLCJjb3ZlcmFnZSIsImVsZXZhdGlvblNjYWxlIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImNvdmVyYWdlRmllbGQiLCJjb3ZlcmFnZVJhbmdlIiwiZWxldmF0aW9uUmFuZ2UiLCJhcmdzIiwiX3JlbmRlckxpbmVMYXllckNvbmZpZyIsIm9uQ2hhbmdlIiwic3Ryb2tlV2lkdGhSYW5nZSIsIm1ldGEiLCJmZWF0dXJlVHlwZXMiLCJwb2x5Z29uIiwic3Ryb2tlZCIsImhlaWdodCIsIndpcmVmcmFtZSIsInJhZGl1c0ZpZWxkIiwiZGF0YXNldHMiLCJ1cGRhdGVMYXllckNvbmZpZyIsImxheWVyVHlwZU9wdGlvbnMiLCJ1cGRhdGVMYXllclR5cGUiLCJkYXRhSWQiLCJmaWVsZFBhaXJzIiwiY29tbW9uQ29uZmlnUHJvcCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnIiwicmVuZGVyVGVtcGxhdGUiLCJsYXllckluZm9Nb2RhbCIsIm9wZW5Nb2RhbCIsImhhc0FsbENvbHVtbnMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaWQiLCJ0eWVwIiwiY29sdW1ucyIsInZhbHVlIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiU3R5bGVkSG93VG9CdXR0b24iLCJIb3dUb0J1dHRvbiIsIm9uQ2xpY2siLCJMYXllckNvbG9yU2VsZWN0b3IiLCJsYWJlbCIsInNlbGVjdGVkQ29sb3IiLCJwcm9wZXJ0eSIsInNldENvbG9yIiwicmdiVmFsdWUiLCJBcmNMYXllckNvbG9yU2VsZWN0b3IiLCJvbkNoYW5nZUNvbmZpZyIsIm9uQ2hhbmdlVmlzQ29uZmlnIiwidGFyZ2V0Q29sb3IiLCJDb2xvclJhbmdlQ29uZmlnIiwiaXNSYW5nZSIsImNvbG9yUmFuZ2UiLCJDaGFubmVsQnlWYWx1ZVNlbGVjdG9yIiwiY2hhbm5lbCIsImRlc2NyaXB0aW9uIiwiY2hhbm5lbFNjYWxlVHlwZSIsImRvbWFpbiIsImZpZWxkIiwia2V5IiwicmFuZ2UiLCJzY2FsZSIsImRlZmF1bHRNZWFzdXJlIiwic3VwcG9ydGVkRmllbGRUeXBlcyIsImNoYW5uZWxTdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwic3VwcG9ydGVkRmllbGRzIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzY2FsZU9wdGlvbnMiLCJnZXRTY2FsZU9wdGlvbnMiLCJzaG93U2NhbGUiLCJpc0FnZ3JlZ2F0ZWQiLCJkZWZhdWx0RGVzY3JpcHRpb24iLCJ2YWwiLCJBZ2dyQ29sb3JTY2FsZVNlbGVjdG9yIiwiQXJyYXkiLCJpc0FycmF5IiwiY29sb3JTY2FsZSIsIkFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yIiwiYWdncmVnYXRpb24iLCJzZWxlY3RlZEZpZWxkIiwiYWdncmVnYXRpb25PcHRpb25zIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBS0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTUEsdUJBQXVCLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQy9DQyxFQUFBQSxTQUFTLEVBQUU7QUFEb0MsQ0FBakIsQ0FBSCxtQkFBN0I7QUFPQSxJQUFNQyw2QkFBNkIsR0FBR0osTUFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDckRDLEVBQUFBLFNBQVMsRUFBRTtBQUQwQyxDQUFqQixDQUFILG9CQUFuQzs7SUFNcUJFLGlCOzs7Ozs7Ozs7Ozs7NENBWUtDLEssRUFBTztBQUM3QixhQUFPLEtBQUtDLDZCQUFMLENBQW1DRCxLQUFuQyxDQUFQO0FBQ0Q7OzsyQ0FFc0JBLEssRUFBTztBQUM1QixhQUFPLEtBQUtDLDZCQUFMLENBQW1DRCxLQUFuQyxDQUFQ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Z2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgUGFuZWxMYWJlbCxcbiAgU2lkZVBhbmVsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5cbmltcG9ydCBWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IgZnJvbSAnLi92aXMtY29uZmlnLWJ5LWZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckNvbHVtbkNvbmZpZyBmcm9tICcuL2xheWVyLWNvbHVtbi1jb25maWcnO1xuaW1wb3J0IExheWVyVHlwZVNlbGVjdG9yIGZyb20gJy4vbGF5ZXItdHlwZS1zZWxlY3Rvcic7XG5pbXBvcnQgRGltZW5zaW9uU2NhbGVTZWxlY3RvciBmcm9tICcuL2RpbWVuc2lvbi1zY2FsZS1zZWxlY3Rvcic7XG5pbXBvcnQgQ29sb3JTZWxlY3RvciBmcm9tICcuL2NvbG9yLXNlbGVjdG9yJztcbmltcG9ydCBTb3VyY2VEYXRhU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3NvdXJjZS1kYXRhLXNlbGVjdG9yJztcbmltcG9ydCBWaXNDb25maWdTd2l0Y2ggZnJvbSAnLi92aXMtY29uZmlnLXN3aXRjaCc7XG5pbXBvcnQgVmlzQ29uZmlnU2xpZGVyIGZyb20gJy4vdmlzLWNvbmZpZy1zbGlkZXInO1xuaW1wb3J0IExheWVyQ29uZmlnR3JvdXAsIHtcbiAgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnRcbn0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xuaW1wb3J0IFRleHRMYWJlbFBhbmVsIGZyb20gJy4vdGV4dC1sYWJlbC1wYW5lbCc7XG5cbmltcG9ydCB7TEFZRVJfVklTX0NPTkZJR1N9IGZyb20gJ2xheWVycy9sYXllci1mYWN0b3J5JztcblxuaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHtcbiAgTEFZRVJfVFlQRVMsXG4gIENIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFN0eWxlZExheWVyQ29uZmlndXJhdG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19jb25maWcnXG59KWBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuYDtcblxuY29uc3QgU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3IgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWxfX2NvbmZpZ19fdmlzdWFsQy1jb25maWcnXG59KWBcbiAgbWFyZ2luLXRvcDogMTJweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyQ29uZmlndXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbGF5ZXJUeXBlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlTGF5ZXJDb25maWc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdXBkYXRlTGF5ZXJUeXBlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUxheWVyVmlzQ29uZmlnOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIF9yZW5kZXJQb2ludExheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcocHJvcHMpO1xuICB9XG5cbiAgX3JlbmRlckljb25MYXllckNvbmZpZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHByb3BzKTtcbiAgfVxuXG4gIF9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHtcbiAgICBsYXllcixcbiAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wcyxcbiAgICBsYXllckNvbmZpZ3VyYXRvclByb3BzXG4gIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICB7LyogRmlsbCBDb2xvciAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZmlsbGVkfVxuICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICA+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5vcGFjaXR5fVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7Lyogb3V0bGluZSBjb2xvciAqL31cbiAgICAgICAge2xheWVyLnR5cGUgPT09IExBWUVSX1RZUEVTLnBvaW50ID8gKFxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3V0bGluZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8Q29sb3JSYW5nZUNvbmZpZ1xuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllci5jb25maWcudmlzQ29uZmlnLm91dGxpbmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydyYWRpdXMnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICB7IWxheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXN9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcuc2l6ZUZpZWxkKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLnJhZGl1c1JhbmdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICFsYXllci5jb25maWcuc2l6ZUZpZWxkIHx8IGxheWVyLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaFxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5maXhlZFJhZGl1c31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIHRleHQgbGFiZWwgKi99XG4gICAgICAgIDxUZXh0TGFiZWxQYW5lbFxuICAgICAgICAgIGZpZWxkcz17dmlzQ29uZmlndXJhdG9yUHJvcHMuZmllbGRzfVxuICAgICAgICAgIHVwZGF0ZUxheWVyVGV4dExhYmVsPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyVGV4dExhYmVsfVxuICAgICAgICAgIHRleHRMYWJlbD17bGF5ZXIuY29uZmlnLnRleHRMYWJlbH1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgKTtcbiAgfVxuXG4gIF9yZW5kZXJDbHVzdGVyTGF5ZXJDb25maWcoe1xuICAgIGxheWVyLFxuICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8QWdnckNvbG9yU2NhbGVTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb24uY29uZGl0aW9uKFxuICAgICAgICAgICAgICBsYXllci5jb25maWdcbiAgICAgICAgICAgICkgPyAoXG4gICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIENsdXN0ZXIgUmFkaXVzICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jbHVzdGVyUmFkaXVzfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzUmFuZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckhlYXRtYXBMYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9PlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICB7LyogV2VpZ2h0ICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3dlaWdodCd9PlxuICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy53ZWlnaHR9XG4gICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckdyaWRMYXllckNvbmZpZyhwcm9wcykge1xuICAgIHJldHVybiB0aGlzLl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHByb3BzKTtcbiAgfVxuXG4gIF9yZW5kZXJIZXhhZ29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyhwcm9wcyk7XG4gIH1cblxuICBfcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcbiAgICBjb25zdCB7XG4gICAgICB2aXNDb25maWc6IHtlbmFibGUzZH1cbiAgICB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGVsZXZhdGlvbkJ5RGVzY3JpcHRpb24gPVxuICAgICAgJ1doZW4gb2ZmLCBoZWlnaHQgaXMgYmFzZWQgb24gY291bnQgb2YgcG9pbnRzJztcbiAgICBjb25zdCBjb2xvckJ5RGVzY3JpcHRpb24gPSAnV2hlbiBvZmYsIGNvbG9yIGlzIGJhc2VkIG9uIGNvdW50IG9mIHBvaW50cyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICA8Q29sb3JSYW5nZUNvbmZpZyB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPEFnZ3JDb2xvclNjYWxlU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihcbiAgICAgICAgICAgICAgbGF5ZXIuY29uZmlnXG4gICAgICAgICAgICApID8gKFxuICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgZGVzY3JlaXB0aW9uPXtjb2xvckJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlICYmXG4gICAgICAgICAgICBsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGV9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7LyogQ2VsbCBzaXplICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J3JhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53b3JsZFVuaXRTaXplfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZCA/IChcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZTNkfVxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZWxldmF0aW9uQnlEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZTNkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihcbiAgICAgICAgICAgICAgICBsYXllci5jb25maWdcbiAgICAgICAgICAgICAgKSA/IChcbiAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplQWdncmVnYXRpb259XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uUGVyY2VudGlsZS5jb25kaXRpb24oXG4gICAgICAgICAgICAgICAgbGF5ZXIuY29uZmlnXG4gICAgICAgICAgICAgICkgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblBlcmNlbnRpbGV9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICk7XG4gIH1cblxuICAvLyBUT0RPOiBTaGFuIG1vdmUgdGhlc2UgaW50byBsYXllciBjbGFzc1xuICBfcmVuZGVySGV4YWdvbklkTGF5ZXJDb25maWcoe1xuICAgIGxheWVyLFxuICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgfSkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydjb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1Mub3BhY2l0eX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIENvdmVyYWdlICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvdmVyYWdlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgeyFsYXllci5jb25maWcuY292ZXJhZ2VGaWVsZCA/IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvdmVyYWdlUmFuZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvdmVyYWdlfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7LyogaGVpZ2h0ICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbmFibGUzZH1cbiAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgPlxuICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbGV2YXRpb25SYW5nZX1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNpemV9XG4gICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgX3JlbmRlckFyY0xheWVyQ29uZmlnKGFyZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyTGluZUxheWVyQ29uZmlnKGFyZ3MpO1xuICB9XG5cbiAgX3JlbmRlckxpbmVMYXllckNvbmZpZyh7XG4gICAgbGF5ZXIsXG4gICAgdmlzQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2NvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgPENvbG9yUmFuZ2VDb25maWcgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QXJjTGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2VDb25maWc9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlVmlzQ29uZmlnPXt2aXNDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLm9wYWNpdHl9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgIHsvKiB0aGlja25lc3MgKi99XG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnc3Ryb2tlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5zdHJva2VXaWR0aFJhbmdlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZH1cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgKTtcbiAgfVxuXG4gIF9yZW5kZXJHZW9qc29uTGF5ZXJDb25maWcoe1xuICAgIGxheWVyLFxuICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHNcbiAgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1ldGE6IHtmZWF0dXJlVHlwZXMgPSB7fX0sXG4gICAgICBjb25maWc6IHt2aXNDb25maWd9XG4gICAgfSA9IGxheWVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgey8qIEZpbGwgQ29sb3IgKi99XG4gICAgICAgIHtmZWF0dXJlVHlwZXMucG9seWdvbiB8fCBmZWF0dXJlVHlwZXMucG9pbnQgPyAoXG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cIkZpbGwgQ29sb3JcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5vcGFjaXR5fVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7Lyogc3Ryb2tlIGNvbG9yICovfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkfVxuICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICBsYWJlbD1cIlN0cm9rZSBDb2xvclwiXG4gICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgPlxuICAgICAgICAgIHtsYXllci5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgIDxDb2xvclJhbmdlQ29uZmlnXG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclJhbmdlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3JcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cbiAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgey4uLihmZWF0dXJlVHlwZXMucG9seWdvbiA/IExBWUVSX1ZJU19DT05GSUdTLnN0cm9rZWQgOiB7fSl9XG4gICAgICAgICAgbGFiZWw9XCJTdHJva2UgV2lkdGhcIlxuICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgID5cbiAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLnN0cm9rZVdpZHRoUmFuZ2V9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4uTEFZRVJfVklTX0NPTkZJR1MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvbHlnb24gJiYgdmlzQ29uZmlnLmZpbGxlZCA/IChcbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLmVuYWJsZTNkfVxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLkxBWUVSX1ZJU19DT05GSUdTLndpcmVmcmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICB7ZmVhdHVyZVR5cGVzLnBvaW50ID8gKFxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncmFkaXVzJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17Qm9vbGVhbihsYXllci5jb25maWcucmFkaXVzRmllbGQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9WSVNfQ09ORklHUy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5yYWRpdXN9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxheWVyLFxuICAgICAgZGF0YXNldHMsXG4gICAgICB1cGRhdGVMYXllckNvbmZpZyxcbiAgICAgIGxheWVyVHlwZU9wdGlvbnMsXG4gICAgICB1cGRhdGVMYXllclR5cGVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZmllbGRzID0gW10sIGZpZWxkUGFpcnN9ID0gbGF5ZXIuY29uZmlnLmRhdGFJZFxuICAgICAgPyBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXVxuICAgICAgOiB7fTtcbiAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xuXG4gICAgY29uc3QgY29tbW9uQ29uZmlnUHJvcCA9IHtcbiAgICAgIGxheWVyLFxuICAgICAgZmllbGRzXG4gICAgfTtcblxuICAgIGNvbnN0IHZpc0NvbmZpZ3VyYXRvclByb3BzID0ge1xuICAgICAgLi4uY29tbW9uQ29uZmlnUHJvcCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLnVwZGF0ZUxheWVyVmlzQ29uZmlnXG4gICAgfTtcblxuICAgIGNvbnN0IGxheWVyQ29uZmlndXJhdG9yUHJvcHMgPSB7XG4gICAgICAuLi5jb21tb25Db25maWdQcm9wLFxuICAgICAgb25DaGFuZ2U6IHVwZGF0ZUxheWVyQ29uZmlnXG4gICAgfTtcblxuICAgIGNvbnN0IGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzID0ge1xuICAgICAgLi4uY29tbW9uQ29uZmlnUHJvcCxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLnByb3BzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ1xuICAgIH07XG5cbiAgICBjb25zdCByZW5kZXJUZW1wbGF0ZSA9XG4gICAgICBsYXllci50eXBlICYmIGBfcmVuZGVyJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGF5ZXIudHlwZSl9TGF5ZXJDb25maWdgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ3VyYXRvcj5cbiAgICAgICAge2xheWVyLmxheWVySW5mb01vZGFsID8gKFxuICAgICAgICAgIDxIb3dUb0J1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vcGVuTW9kYWwobGF5ZXIubGF5ZXJJbmZvTW9kYWwpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgIGxhYmVsPXsnYmFzaWMnfVxuICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgZXhwYW5kZWQ9eyFsYXllci5oYXNBbGxDb2x1bW5zKCl9XG4gICAgICAgID5cbiAgICAgICAgICA8TGF5ZXJUeXBlU2VsZWN0b3JcbiAgICAgICAgICAgIGxheWVyPXtsYXllcn1cbiAgICAgICAgICAgIGxheWVyVHlwZU9wdGlvbnM9e2xheWVyVHlwZU9wdGlvbnN9XG4gICAgICAgICAgICBvblNlbGVjdD17dXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGRhdGFzZXRzKS5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgICAgPFNvdXJjZURhdGFTZWxlY3RvclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBpZD17bGF5ZXIuaWR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xheWVyLnR5ZXAgJiYgY29uZmlnLmNvbHVtbnN9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtjb25maWcuZGF0YUlkfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt2YWx1ZSA9PiB1cGRhdGVMYXllckNvbmZpZyh7ZGF0YUlkOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxMYXllckNvbHVtbkNvbmZpZ1xuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICAgICAgICBmaWVsZFBhaXJzPXtmaWVsZFBhaXJzfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVHlwZT17dGhpcy5wcm9wcy51cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAge3RoaXNbcmVuZGVyVGVtcGxhdGVdICYmXG4gICAgICAgICAgdGhpc1tyZW5kZXJUZW1wbGF0ZV0oe1xuICAgICAgICAgICAgbGF5ZXIsXG4gICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgICAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzLFxuICAgICAgICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xuICAgICAgICAgIH0pfVxuICAgICAgPC9TdHlsZWRMYXllckNvbmZpZ3VyYXRvcj5cbiAgICApO1xuICB9XG59XG5cbi8qXG4gKiBDb21wb25lbnRpemUgY29uZmlnIGNvbXBvbmVudCBpbnRvIHB1cmUgZnVuY3Rpb25hbCBjb21wb25lbnRzXG4gKi9cblxuY29uc3QgU3R5bGVkSG93VG9CdXR0b24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMnB4O1xuICB0b3A6IC00cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgSG93VG9CdXR0b24gPSAoe29uQ2xpY2t9KSA9PiAoXG4gIDxTdHlsZWRIb3dUb0J1dHRvbj5cbiAgICA8QnV0dG9uIGxpbmsgc21hbGwgb25DbGljaz17b25DbGlja30+XG4gICAgICBIb3cgdG9cbiAgICA8L0J1dHRvbj5cbiAgPC9TdHlsZWRIb3dUb0J1dHRvbj5cbik7XG5cbmV4cG9ydCBjb25zdCBMYXllckNvbG9yU2VsZWN0b3IgPSAoe1xuICBsYXllcixcbiAgb25DaGFuZ2UsXG4gIGxhYmVsLFxuICBzZWxlY3RlZENvbG9yLFxuICBwcm9wZXJ0eSA9ICdjb2xvcidcbn0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogc2VsZWN0ZWRDb2xvciB8fCBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiByZ2JWYWx1ZX0pXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IEFyY0xheWVyQ29sb3JTZWxlY3RvciA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZUNvbmZpZyxcbiAgb25DaGFuZ2VWaXNDb25maWdcbn0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiByZ2JWYWx1ZSA9PiBvbkNoYW5nZUNvbmZpZyh7Y29sb3I6IHJnYlZhbHVlfSksXG4gICAgICAgICAgbGFiZWw6ICdTb3VyY2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOlxuICAgICAgICAgICAgbGF5ZXIuY29uZmlnLnZpc0NvbmZpZy50YXJnZXRDb2xvciB8fCBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IHJnYlZhbHVlID0+IG9uQ2hhbmdlVmlzQ29uZmlnKHt0YXJnZXRDb2xvcjogcmdiVmFsdWV9KSxcbiAgICAgICAgICBsYWJlbDogJ1RhcmdldCdcbiAgICAgICAgfVxuICAgICAgXX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgQ29sb3JSYW5nZUNvbmZpZyA9ICh7XG4gIGxheWVyLFxuICBvbkNoYW5nZSxcbiAgcHJvcGVydHkgPSAnY29sb3JSYW5nZSdcbn0pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV0sXG4gICAgICAgICAgaXNSYW5nZTogdHJ1ZSxcbiAgICAgICAgICBzZXRDb2xvcjogY29sb3JSYW5nZSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogY29sb3JSYW5nZX0pXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuZXhwb3J0IGNvbnN0IENoYW5uZWxCeVZhbHVlU2VsZWN0b3IgPSAoe1xuICBsYXllcixcbiAgY2hhbm5lbCxcbiAgb25DaGFuZ2UsXG4gIGZpZWxkcyxcbiAgZGVzY3JpcHRpb25cbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGNoYW5uZWxTY2FsZVR5cGUsXG4gICAgZG9tYWluLFxuICAgIGZpZWxkLFxuICAgIGtleSxcbiAgICBwcm9wZXJ0eSxcbiAgICByYW5nZSxcbiAgICBzY2FsZSxcbiAgICBkZWZhdWx0TWVhc3VyZSxcbiAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzXG4gIH0gPSBjaGFubmVsO1xuICBjb25zdCBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcyA9XG4gICAgc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XG4gIGNvbnN0IHN1cHBvcnRlZEZpZWxkcyA9IGZpZWxkcy5maWx0ZXIoKHt0eXBlfSkgPT5cbiAgICBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcy5pbmNsdWRlcyh0eXBlKVxuICApO1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoY2hhbm5lbC5rZXkpO1xuICBjb25zdCBzaG93U2NhbGUgPVxuICAgICFsYXllci5pc0FnZ3JlZ2F0ZWQgJiYgbGF5ZXIuY29uZmlnW3NjYWxlXSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMTtcbiAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gYENhbGN1bGF0ZSAke3Byb3BlcnR5fSBiYXNlZCBvbiBzZWxlY3RlZCBmaWVsZGA7XG5cbiAgcmV0dXJuIChcbiAgICA8VmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yXG4gICAgICBjaGFubmVsPXtjaGFubmVsLmtleX1cbiAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb259XG4gICAgICBkb21haW49e2xheWVyLmNvbmZpZ1tkb21haW5dfVxuICAgICAgZmllbGRzPXtzdXBwb3J0ZWRGaWVsZHN9XG4gICAgICBpZD17bGF5ZXIuaWR9XG4gICAgICBrZXk9e2Ake2tleX0tY2hhbm5lbC1zZWxlY3RvcmB9XG4gICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lYXN1cmUgfHwgJ1NlbGVjdCBhIGZpZWxkJ31cbiAgICAgIHJhbmdlPXtsYXllci5jb25maWcudmlzQ29uZmlnW3JhbmdlXX1cbiAgICAgIHNjYWxlT3B0aW9ucz17c2NhbGVPcHRpb25zfVxuICAgICAgc2NhbGVUeXBlPXtzY2FsZSA/IGxheWVyLmNvbmZpZ1tzY2FsZV0gOiBudWxsfVxuICAgICAgc2VsZWN0ZWRGaWVsZD17bGF5ZXIuY29uZmlnW2ZpZWxkXX1cbiAgICAgIHNob3dTY2FsZT17c2hvd1NjYWxlfVxuICAgICAgdXBkYXRlRmllbGQ9e3ZhbCA9PiBvbkNoYW5nZSh7W2ZpZWxkXTogdmFsfSwga2V5KX1cbiAgICAgIHVwZGF0ZVNjYWxlPXt2YWwgPT4gb25DaGFuZ2Uoe1tzY2FsZV06IHZhbH0sIGtleSl9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBBZ2dyQ29sb3JTY2FsZVNlbGVjdG9yID0gKHtsYXllciwgb25DaGFuZ2V9KSA9PiB7XG4gIGNvbnN0IHNjYWxlT3B0aW9ucyA9IGxheWVyLmdldFNjYWxlT3B0aW9ucygnY29sb3InKTtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc2NhbGVPcHRpb25zKSAmJiBzY2FsZU9wdGlvbnMubGVuZ3RoID4gMSA/IChcbiAgICA8RGltZW5zaW9uU2NhbGVTZWxlY3RvclxuICAgICAgbGFiZWw9XCJDb2xvciBTY2FsZVwiXG4gICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICBzY2FsZVR5cGU9e2xheWVyLmNvbmZpZy5jb2xvclNjYWxlfVxuICAgICAgb25TZWxlY3Q9e3ZhbCA9PiBvbkNoYW5nZSh7Y29sb3JTY2FsZTogdmFsfSwgJ2NvbG9yJyl9XG4gICAgLz5cbiAgKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgQWdncmVnYXRpb25UeXBlU2VsZWN0b3IgPSAoe2xheWVyLCBjaGFubmVsLCBvbkNoYW5nZX0pID0+IHtcbiAgY29uc3Qge2ZpZWxkLCBhZ2dyZWdhdGlvbiwga2V5fSA9IGNoYW5uZWw7XG4gIGNvbnN0IHNlbGVjdGVkRmllbGQgPSBsYXllci5jb25maWdbZmllbGRdO1xuICBjb25zdCB7dmlzQ29uZmlnfSA9IGxheWVyLmNvbmZpZztcblxuICAvLyBhZ2dyZWdhdGlvbiBzaG91bGQgb25seSBiZSBzZWxlY3RhYmxlIHdoZW4gZmllbGQgaXMgc2VsZWN0ZWRcbiAgY29uc3QgYWdncmVnYXRpb25PcHRpb25zID0gbGF5ZXIuZ2V0QWdncmVnYXRpb25PcHRpb25zKGtleSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgIDxQYW5lbExhYmVsPntgQWdncmVnYXRlICR7c2VsZWN0ZWRGaWVsZC5uYW1lfSBieWB9PC9QYW5lbExhYmVsPlxuICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICBzZWxlY3RlZEl0ZW1zPXt2aXNDb25maWdbYWdncmVnYXRpb25dfVxuICAgICAgICBvcHRpb25zPXthZ2dyZWdhdGlvbk9wdGlvbnN9XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAgICAgICAuLi5sYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgICAgICAgICAgICAgIFthZ2dyZWdhdGlvbl06IHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFubmVsLmtleVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICk7XG59O1xuLyogZXNsaW50LWVuYWJsZSBtYXgtcGFyYW1zICovXG4iXX0=