"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _layerConfigurator = _interopRequireDefault(require("./layer-configurator"));

var _layerPanelHeader = _interopRequireDefault(require("./layer-panel-header"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n  z-index: 1000;\n\n  &.dragging {\n    cursor: move;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PanelWrapper = styled.div(_templateObject());

function LayerPanelFactory() {
  var LayerPanel =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(LayerPanel, _Component);

    function LayerPanel() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, LayerPanel);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(LayerPanel)).call.apply(_getPrototypeOf2, [this].concat(_args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerConfig", function (newProp) {
        _this.props.layerConfigChange(_this.props.layer, newProp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerType", function (newType) {
        _this.props.layerTypeChange(_this.props.layer, newType);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisConfig", function (newVisConfig) {
        _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerTextLabel", function () {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_this$props = _this.props).layerTextLabelChange.apply(_this$props, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisualChannelConfig", function (newConfig, channel, scaleKey) {
        _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel, scaleKey);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateLayerLabel", function (_ref) {
        var value = _ref.target.value;

        _this.updateLayerConfig({
          label: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleVisibility", function (e) {
        e.stopPropagation();
        var isVisible = !_this.props.layer.config.isVisible;

        _this.updateLayerConfig({
          isVisible: isVisible
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleEnableConfig", function (e) {
        e.stopPropagation();
        var isConfigActive = _this.props.layer.config.isConfigActive;

        _this.updateLayerConfig({
          isConfigActive: !isConfigActive
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeLayer", function (e) {
        e.stopPropagation();

        _this.props.removeLayer(_this.props.idx);
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerPanel, [{
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            layer = _this$props2.layer,
            idx = _this$props2.idx,
            datasets = _this$props2.datasets,
            layerTypeOptions = _this$props2.layerTypeOptions;
        var config = layer.config;
        var isConfigActive = config.isConfigActive;
        return _react["default"].createElement(PanelWrapper, {
          active: isConfigActive,
          className: "layer-panel ".concat(this.props.className),
          style: this.props.style,
          onMouseDown: this.props.onMouseDown,
          onTouchStart: this.props.onTouchStart
        }, _react["default"].createElement(_layerPanelHeader["default"], {
          isConfigActive: isConfigActive,
          id: layer.id,
          idx: idx,
          isVisible: config.isVisible,
          label: config.label,
          labelRCGColorValues: datasets[config.dataId].color,
          layerType: layer.name,
          onToggleEnableConfig: this._toggleEnableConfig,
          onToggleVisibility: this._toggleVisibility,
          onUpdateLayerLabel: this._updateLayerLabel,
          onRemoveLayer: this._removeLayer
        }), isConfigActive && _react["default"].createElement(_layerConfigurator["default"], {
          layer: layer,
          datasets: datasets,
          layerTypeOptions: layerTypeOptions,
          openModal: this.props.openModal,
          updateLayerConfig: this.updateLayerConfig,
          updateLayerVisualChannelConfig: this.updateLayerVisualChannelConfig,
          updateLayerType: this.updateLayerType,
          updateLayerTextLabel: this.updateLayerTextLabel,
          updateLayerVisConfig: this.updateLayerVisConfig
        }));
      }
    }]);
    return LayerPanel;
  }(_react.Component);

  (0, _defineProperty2["default"])(LayerPanel, "propTypes", {
    layer: _propTypes["default"].object.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    idx: _propTypes["default"].number.isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    onCloseConfig: _propTypes["default"].func,
    layerTypeOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layerVisConfigChange: _propTypes["default"].func,
    layerVisualChannelConfigChange: _propTypes["default"].func
  });
  return LayerPanel;
}

var _default = LayerPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwuanMiXSwibmFtZXMiOlsiUGFuZWxXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGF5ZXJQYW5lbEZhY3RvcnkiLCJMYXllclBhbmVsIiwibmV3UHJvcCIsInByb3BzIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllciIsIm5ld1R5cGUiLCJsYXllclR5cGVDaGFuZ2UiLCJuZXdWaXNDb25maWciLCJsYXllclZpc0NvbmZpZ0NoYW5nZSIsImFyZ3MiLCJsYXllclRleHRMYWJlbENoYW5nZSIsIm5ld0NvbmZpZyIsImNoYW5uZWwiLCJzY2FsZUtleSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlTGF5ZXJDb25maWciLCJsYWJlbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJjb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyIiwiaWR4IiwiZGF0YXNldHMiLCJsYXllclR5cGVPcHRpb25zIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbk1vdXNlRG93biIsIm9uVG91Y2hTdGFydCIsImlkIiwiZGF0YUlkIiwiY29sb3IiLCJuYW1lIiwiX3RvZ2dsZUVuYWJsZUNvbmZpZyIsIl90b2dnbGVWaXNpYmlsaXR5IiwiX3VwZGF0ZUxheWVyTGFiZWwiLCJfcmVtb3ZlTGF5ZXIiLCJvcGVuTW9kYWwiLCJ1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWciLCJ1cGRhdGVMYXllclR5cGUiLCJ1cGRhdGVMYXllclRleHRMYWJlbCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiLCJvbkNsb3NlQ29uZmlnIiwiYXJyYXlPZiIsImFueSJdLCJtYXBwaW5ncyI6Ijs7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ZUFQeEI7QUFRRSxVQUFBLG9CQUFvQixFQUFFLEtBQUtDLG9CQVI3QjtBQVNFLFVBQUEsb0JBQW9CLEVBQUUsS0FBS0M7QUFUN0IsVUFyQkosQ0FERjtBQW9DRDtBQXpHd0I7QUFBQTtBQUFBLElBRUZDLGdCQUZFOztBQUFBLG1DQUVyQjdDLFVBRnFCLGVBR047QUFDakJJLElBQUFBLEtBQUssRUFBRTBDLHNCQUFVQyxNQUFWLENBQWlCQyxVQURQO0FBRWpCdEIsSUFBQUEsUUFBUSxFQUFFb0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlY7QUFHakJ2QixJQUFBQSxHQUFHLEVBQUVxQixzQkFBVUcsTUFBVixDQUFpQkQsVUFITDtBQUlqQjdDLElBQUFBLGlCQUFpQixFQUFFMkMsc0JBQVVJLElBQVYsQ0FBZUYsVUFKakI7QUFLakIxQyxJQUFBQSxlQUFlLEVBQUV3QyxzQkFBVUksSUFBVixDQUFlRixVQUxmO0FBTWpCUixJQUFBQSxTQUFTLEVBQUVNLHNCQUFVSSxJQUFWLENBQWVGLFVBTlQ7QUFPakJ4QixJQUFBQSxXQUFXLEVBQUVzQixzQkFBVUksSUFBVixDQUFlRixVQVBYO0FBUWpCRyxJQUFBQSxhQUFhLEVBQUVMLHNCQUFVSSxJQVJSO0FBVWpCdkIsSUFBQUEsZ0JBQWdCLEVBQUVtQixzQkFBVU0sT0FBVixDQUFrQk4sc0JBQVVPLEdBQTVCLENBVkQ7QUFXakI3QyxJQUFBQSxvQkFBb0IsRUFBRXNDLHNCQUFVSSxJQVhmO0FBWWpCcEMsSUFBQUEsOEJBQThCLEVBQUVnQyxzQkFBVUk7QUFaekIsR0FITTtBQTRHM0IsU0FBT2xELFVBQVA7QUFDRDs7ZUFFY0QsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTGF5ZXJDb25maWd1cmF0b3IgZnJvbSAnLi9sYXllci1jb25maWd1cmF0b3InO1xuaW1wb3J0IExheWVyUGFuZWxIZWFkZXIgZnJvbSAnLi9sYXllci1wYW5lbC1oZWFkZXInO1xuXG5jb25zdCBQYW5lbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB6LWluZGV4OiAxMDAwO1xuXG4gICYuZHJhZ2dpbmcge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuYDtcblxuZnVuY3Rpb24gTGF5ZXJQYW5lbEZhY3RvcnkoKSB7XG5cbiAgY2xhc3MgTGF5ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgaWR4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVHlwZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG9wZW5Nb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgb25DbG9zZUNvbmZpZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAgIGxheWVyVHlwZU9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllckNvbmZpZyA9IG5ld1Byb3AgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllckNvbmZpZ0NoYW5nZSh0aGlzLnByb3BzLmxheWVyLCBuZXdQcm9wKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJUeXBlID0gbmV3VHlwZSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxheWVyVHlwZUNoYW5nZSh0aGlzLnByb3BzLmxheWVyLCBuZXdUeXBlKTtcbiAgICB9O1xuXG4gICAgdXBkYXRlTGF5ZXJWaXNDb25maWcgPSBuZXdWaXNDb25maWcgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclZpc0NvbmZpZ0NoYW5nZSh0aGlzLnByb3BzLmxheWVyLCBuZXdWaXNDb25maWcpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclRleHRMYWJlbCA9ICguLi5hcmdzKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWcgPSAobmV3Q29uZmlnLCBjaGFubmVsLCBzY2FsZUtleSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UoXG4gICAgICAgIHRoaXMucHJvcHMubGF5ZXIsXG4gICAgICAgIG5ld0NvbmZpZyxcbiAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgc2NhbGVLZXlcbiAgICAgICk7XG4gICAgfTtcblxuICAgIF91cGRhdGVMYXllckxhYmVsID0gKHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtsYWJlbDogdmFsdWV9KTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZVZpc2liaWxpdHkgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCBpc1Zpc2libGUgPSAhdGhpcy5wcm9wcy5sYXllci5jb25maWcuaXNWaXNpYmxlO1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7aXNWaXNpYmxlfSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVFbmFibGVDb25maWcgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjb25zdCB7bGF5ZXI6IHtjb25maWc6IHtpc0NvbmZpZ0FjdGl2ZX19fSA9IHRoaXMucHJvcHM7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtpc0NvbmZpZ0FjdGl2ZTogIWlzQ29uZmlnQWN0aXZlfSk7XG4gICAgfTtcblxuICAgIF9yZW1vdmVMYXllciA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlTGF5ZXIodGhpcy5wcm9wcy5pZHgpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bGF5ZXIsIGlkeCwgZGF0YXNldHMsIGxheWVyVHlwZU9wdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtjb25maWd9ID0gbGF5ZXI7XG4gICAgICBjb25zdCB7aXNDb25maWdBY3RpdmV9ID0gY29uZmlnO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFuZWxXcmFwcGVyXG4gICAgICAgICAgYWN0aXZlPXtpc0NvbmZpZ0FjdGl2ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BsYXllci1wYW5lbCAke3RoaXMucHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICAgICAgb25Nb3VzZURvd249e3RoaXMucHJvcHMub25Nb3VzZURvd259XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLnByb3BzLm9uVG91Y2hTdGFydH1cbiAgICAgICAgPlxuICAgICAgICAgIDxMYXllclBhbmVsSGVhZGVyXG4gICAgICAgICAgICBpc0NvbmZpZ0FjdGl2ZT17aXNDb25maWdBY3RpdmV9XG4gICAgICAgICAgICBpZD17bGF5ZXIuaWR9XG4gICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgIGlzVmlzaWJsZT17Y29uZmlnLmlzVmlzaWJsZX1cbiAgICAgICAgICAgIGxhYmVsPXtjb25maWcubGFiZWx9XG4gICAgICAgICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtkYXRhc2V0c1tjb25maWcuZGF0YUlkXS5jb2xvcn1cbiAgICAgICAgICAgIGxheWVyVHlwZT17bGF5ZXIubmFtZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlRW5hYmxlQ29uZmlnPXt0aGlzLl90b2dnbGVFbmFibGVDb25maWd9XG4gICAgICAgICAgICBvblRvZ2dsZVZpc2liaWxpdHk9e3RoaXMuX3RvZ2dsZVZpc2liaWxpdHl9XG4gICAgICAgICAgICBvblVwZGF0ZUxheWVyTGFiZWw9e3RoaXMuX3VwZGF0ZUxheWVyTGFiZWx9XG4gICAgICAgICAgICBvblJlbW92ZUxheWVyPXt0aGlzLl9yZW1vdmVMYXllcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtpc0NvbmZpZ0FjdGl2ZSAmJiAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWd1cmF0b3JcbiAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgIGxheWVyVHlwZU9wdGlvbnM9e2xheWVyVHlwZU9wdGlvbnN9XG4gICAgICAgICAgICAgIG9wZW5Nb2RhbD17dGhpcy5wcm9wcy5vcGVuTW9kYWx9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyQ29uZmlnPXt0aGlzLnVwZGF0ZUxheWVyQ29uZmlnfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWc9e3RoaXMudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllclR5cGU9e3RoaXMudXBkYXRlTGF5ZXJUeXBlfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllclRleHRMYWJlbD17dGhpcy51cGRhdGVMYXllclRleHRMYWJlbH1cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJWaXNDb25maWc9e3RoaXMudXBkYXRlTGF5ZXJWaXNDb25maWd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvUGFuZWxXcmFwcGVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTGF5ZXJQYW5lbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJQYW5lbEZhY3Rvcnk7XG4iXX0=