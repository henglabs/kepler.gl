"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

var _sliderHandle = _interopRequireDefault(require("./slider-handle"));

var _sliderBarHandle = _interopRequireDefault(require("./slider-bar-handle"));

var _dataUtils = require("../../../utils/data-utils");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-top: ", "px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-bottom: 12px;\n  background-color: ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function noop() {}

var StyledRangeSlider = styled.div(_templateObject(), function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return "".concat(props.vertical ? 'height' : 'width', ": 100%");
});
var SliderWrapper = styled.div(_templateObject2(), function (props) {
  return props.isRanged ? 0 : 10;
});

var Slider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", undefined);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_saveRef", function (ref) {
      _this.ref = ref;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          minValue = _this$props.minValue;
      return Boolean(val >= minValue && val <= value1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
      var _this$props2 = _this.props,
          maxValue = _this$props2.maxValue,
          value0 = _this$props2.value0;
      return Boolean(val <= maxValue && val >= value0);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide0Listener", function (x) {
      var val = _this._getValue(_this.props.value0, x);

      if (_this._isVal0InRange(val)) {
        _this.props.onSlider0Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide1Listener", function (x) {
      var val = _this._getValue(_this.props.value1, x);

      if (_this._isVal1InRange(val)) {
        _this.props.onSlider1Change(val);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderBarListener", function (x) {
      var val0 = _this._getValue(_this.props.value0, x);

      var val1 = _this._getValue(_this.props.value1, x);

      if (_this._isVal1InRange(val1) && _this._isVal0InRange(val0)) {
        _this.props.onSliderBarChange(val0, val1);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft0", function (w, l, num) {
      return w === 0 ? "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)") : "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft1", function (w, l) {
      return _this.props.isRanged && w === 0 ? "".concat(l, "%") : "calc(".concat(l + w, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "_getBaseDistance",
    value: function _getBaseDistance() {
      return this.props.vertical ? this.ref.offsetHeight : this.ref.offsetWidth;
    }
  }, {
    key: "_getValDelta",
    value: function _getValDelta(x) {
      var percent = x / this._getBaseDistance();

      var maxDelta = this.props.maxValue - this.props.minValue;
      return percent * maxDelta;
    }
  }, {
    key: "_getValue",
    value: function _getValue(val, offset) {
      var delta = this._getValDelta(offset);

      var rawValue = this.props.vertical ? val - delta : val + delta;
      return this._roundValToStep(rawValue);
    }
  }, {
    key: "_roundValToStep",
    value: function _roundValToStep(val) {
      var _this$props3 = this.props,
          minValue = _this$props3.minValue,
          step = _this$props3.step;
      return (0, _dataUtils.roundValToStep)(minValue, step, val);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          classSet = _this$props4.classSet,
          isRanged = _this$props4.isRanged,
          maxValue = _this$props4.maxValue,
          minValue = _this$props4.minValue,
          value1 = _this$props4.value1,
          vertical = _this$props4.vertical,
          sliderHandleWidth = _this$props4.sliderHandleWidth,
          showTooltip = _this$props4.showTooltip;
      var value0 = !isRanged && minValue > 0 ? minValue : this.props.value0;
      var currValDelta = value1 - value0;
      var maxDelta = maxValue - minValue;
      var width = currValDelta / maxDelta * 100;
      var v0Left = (value0 - minValue) / maxDelta * 100;
      return _react["default"].createElement(SliderWrapper, {
        className: (0, _classnames["default"])('kg-slider', (0, _objectSpread2["default"])({}, classSet)),
        ref: this._saveRef,
        isRanged: isRanged,
        vertical: vertical
      }, _react["default"].createElement(StyledRangeSlider, {
        className: "kg-range-slider",
        vertical: vertical
      }, _react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft0(width, v0Left),
        valueListener: this.slide0Listener,
        sliderHandleWidth: sliderHandleWidth,
        display: isRanged,
        vertical: vertical,
        showTooltip: showTooltip
      }), _react["default"].createElement(_sliderHandle["default"], {
        className: "kg-range-slider__handle",
        left: this.calcHandleLeft1(width, v0Left),
        valueListener: this.slide1Listener,
        sliderHandleWidth: sliderHandleWidth,
        vertical: vertical,
        value: value1,
        showTooltip: showTooltip
      }), _react["default"].createElement(_sliderBarHandle["default"], {
        width: width,
        v0Left: v0Left,
        enableBarDrag: this.props.enableBarDrag,
        sliderBarListener: this.sliderBarListener,
        vertical: vertical
      })));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
(0, _defineProperty2["default"])(Slider, "propTypes", {
  title: _propTypes["default"].string,
  isRanged: _propTypes["default"].bool,
  value0: _propTypes["default"].number,
  value1: _propTypes["default"].number,
  minValue: _propTypes["default"].number,
  maxValue: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  onSlider0Change: _propTypes["default"].func,
  onInput0Change: _propTypes["default"].func,
  onSlider1Change: _propTypes["default"].func,
  onInput1Change: _propTypes["default"].func,
  onSliderBarChange: _propTypes["default"].func,
  step: _propTypes["default"].number,
  enableBarDrag: _propTypes["default"].bool,
  showTooltip: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Slider, "defaultProps", {
  title: '',
  isRanged: true,
  value0: 0,
  value1: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  sliderHandleWidth: 12,
  enableBarDrag: false,
  onSlider0Change: noop,
  onInput0Change: noop,
  onSlider1Change: noop,
  onInput1Change: noop,
  onSliderBarChange: noop,
  disabled: false,
  vertical: false,
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLmpzIl0sIm5hbWVzIjpbIm5vb3AiLCJTdHlsZWRSYW5nZVNsaWRlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJCYXJCZ2QiLCJ2ZXJ0aWNhbCIsInNsaWRlckJhckhlaWdodCIsIlNsaWRlcldyYXBwZXIiLCJpc1JhbmdlZCIsIlNsaWRlciIsInVuZGVmaW5lZCIsInJlZiIsInZhbCIsInZhbHVlMSIsIm1pblZhbHVlIiwiQm9vbGVhbiIsIm1heFZhbHVlIiwidmFsdWUwIiwieCIsIl9nZXRWYWx1ZSIsIl9pc1ZhbDBJblJhbmdlIiwib25TbGlkZXIwQ2hhbmdlIiwiX2lzVmFsMUluUmFuZ2UiLCJvblNsaWRlcjFDaGFuZ2UiLCJ2YWwwIiwidmFsMSIsIm9uU2xpZGVyQmFyQ2hhbmdlIiwidyIsImwiLCJudW0iLCJzbGlkZXJIYW5kbGVXaWR0aCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwicGVyY2VudCIsIl9nZXRCYXNlRGlzdGFuY2UiLCJtYXhEZWx0YSIsIm9mZnNldCIsImRlbHRhIiwiX2dldFZhbERlbHRhIiwicmF3VmFsdWUiLCJfcm91bmRWYWxUb1N0ZXAiLCJzdGVwIiwiY2xhc3NTZXQiLCJzaG93VG9vbHRpcCIsImN1cnJWYWxEZWx0YSIsIndpZHRoIiwidjBMZWZ0IiwiX3NhdmVSZWYiLCJjYWxjSGFuZGxlTGVmdDAiLCJzbGlkZTBMaXN0ZW5lciIsImNhbGNIYW5kbGVMZWZ0MSIsInNsaWRlMUxpc3RlbmVyIiwiZW5hYmxlQmFyRHJhZyIsInNsaWRlckJhckxpc3RlbmVyIiwiQ29tcG9uZW50IiwidGl0bGUiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsIm9uSW5wdXQwQ2hhbmdlIiwib25JbnB1dDFDaGFuZ2UiLCJkaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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dCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IFNsaWRlckhhbmRsZSBmcm9tICcuL3NsaWRlci1oYW5kbGUnO1xuaW1wb3J0IFNsaWRlckJhckhhbmRsZSBmcm9tICcuL3NsaWRlci1iYXItaGFuZGxlJztcbmltcG9ydCB7cm91bmRWYWxUb1N0ZXB9IGZyb20gJ3V0aWxzL2RhdGEtdXRpbHMnO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuY29uc3QgU3R5bGVkUmFuZ2VTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFyQmdkfTtcbiAgJHtwcm9wcyA9PlxuICAgIGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgJHtwcm9wcyA9PiBgJHtwcm9wcy52ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJ306IDEwMCVgfTtcbmA7XG5cbmNvbnN0IFNsaWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gKHByb3BzLmlzUmFuZ2VkID8gMCA6IDEwKX1weDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNSYW5nZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHZhbHVlMDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTE6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWluVmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWF4VmFsdWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25TbGlkZXIwQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbklucHV0MENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TbGlkZXIxQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbklucHV0MUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TbGlkZXJCYXJDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN0ZXA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZW5hYmxlQmFyRHJhZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1Rvb2x0aXA6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZTogJycsXG4gICAgaXNSYW5nZWQ6IHRydWUsXG4gICAgdmFsdWUwOiAwLFxuICAgIHZhbHVlMTogMTAwLFxuICAgIG1pblZhbHVlOiAwLFxuICAgIG1heFZhbHVlOiAxMDAsXG4gICAgc3RlcDogMSxcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgZW5hYmxlQmFyRHJhZzogZmFsc2UsXG4gICAgb25TbGlkZXIwQ2hhbmdlOiBub29wLFxuICAgIG9uSW5wdXQwQ2hhbmdlOiBub29wLFxuICAgIG9uU2xpZGVyMUNoYW5nZTogbm9vcCxcbiAgICBvbklucHV0MUNoYW5nZTogbm9vcCxcbiAgICBvblNsaWRlckJhckNoYW5nZTogbm9vcCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdmVydGljYWw6IGZhbHNlLFxuICAgIHNob3dUb29sdGlwOiBmYWxzZVxuICB9O1xuXG4gIHJlZiA9IHVuZGVmaW5lZDtcblxuICBfc2F2ZVJlZiA9IHJlZiA9PiB7XG4gICAgdGhpcy5yZWYgPSByZWY7XG4gIH07XG5cbiAgX2dldEJhc2VEaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy52ZXJ0aWNhbCA/IHRoaXMucmVmLm9mZnNldEhlaWdodCA6IHRoaXMucmVmLm9mZnNldFdpZHRoO1xuICB9XG5cbiAgX2dldFZhbERlbHRhKHgpIHtcbiAgICBjb25zdCBwZXJjZW50ID0geCAvIHRoaXMuX2dldEJhc2VEaXN0YW5jZSgpO1xuICAgIGNvbnN0IG1heERlbHRhID0gdGhpcy5wcm9wcy5tYXhWYWx1ZSAtIHRoaXMucHJvcHMubWluVmFsdWU7XG4gICAgcmV0dXJuIHBlcmNlbnQgKiBtYXhEZWx0YTtcbiAgfVxuXG4gIF9nZXRWYWx1ZSh2YWwsIG9mZnNldCkge1xuICAgIGNvbnN0IGRlbHRhID0gdGhpcy5fZ2V0VmFsRGVsdGEob2Zmc2V0KTtcbiAgICBjb25zdCByYXdWYWx1ZSA9ICB0aGlzLnByb3BzLnZlcnRpY2FsID8gdmFsIC0gZGVsdGEgOiB2YWwgKyBkZWx0YTtcblxuICAgIHJldHVybiB0aGlzLl9yb3VuZFZhbFRvU3RlcChyYXdWYWx1ZSk7XG4gIH1cblxuICBfaXNWYWwwSW5SYW5nZSA9IHZhbCA9PiB7XG4gICAgY29uc3Qge3ZhbHVlMSwgbWluVmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gQm9vbGVhbih2YWwgPj0gbWluVmFsdWUgJiYgdmFsIDw9IHZhbHVlMSk7XG4gIH07XG5cbiAgX2lzVmFsMUluUmFuZ2UgPSB2YWwgPT4ge1xuICAgIGNvbnN0IHttYXhWYWx1ZSwgdmFsdWUwfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIEJvb2xlYW4odmFsIDw9IG1heFZhbHVlICYmIHZhbCA+PSB2YWx1ZTApO1xuICB9O1xuXG4gIF9yb3VuZFZhbFRvU3RlcCh2YWwpIHtcbiAgICBjb25zdCB7bWluVmFsdWUsIHN0ZXB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gcm91bmRWYWxUb1N0ZXAobWluVmFsdWUsIHN0ZXAsIHZhbCk7XG4gIH1cblxuICBzbGlkZTBMaXN0ZW5lciA9IHggPT4ge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2dldFZhbHVlKHRoaXMucHJvcHMudmFsdWUwLCB4KTtcbiAgICBpZiAodGhpcy5faXNWYWwwSW5SYW5nZSh2YWwpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2xpZGVyMENoYW5nZSh2YWwpO1xuICAgIH1cbiAgfTtcblxuICBzbGlkZTFMaXN0ZW5lciA9IHggPT4ge1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuX2dldFZhbHVlKHRoaXMucHJvcHMudmFsdWUxLCB4KTtcbiAgICBpZiAodGhpcy5faXNWYWwxSW5SYW5nZSh2YWwpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2xpZGVyMUNoYW5nZSh2YWwpO1xuICAgIH1cbiAgfTtcblxuICBzbGlkZXJCYXJMaXN0ZW5lciA9IHggPT4ge1xuICAgIGNvbnN0IHZhbDAgPSB0aGlzLl9nZXRWYWx1ZSh0aGlzLnByb3BzLnZhbHVlMCwgeCk7XG4gICAgY29uc3QgdmFsMSA9IHRoaXMuX2dldFZhbHVlKHRoaXMucHJvcHMudmFsdWUxLCB4KTtcbiAgICBpZiAodGhpcy5faXNWYWwxSW5SYW5nZSh2YWwxKSAmJiB0aGlzLl9pc1ZhbDBJblJhbmdlKHZhbDApKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2xpZGVyQmFyQ2hhbmdlKHZhbDAsIHZhbDEpO1xuICAgIH1cbiAgfTtcblxuICBjYWxjSGFuZGxlTGVmdDAgPSAodywgbCwgbnVtKSA9PiB7XG4gICAgcmV0dXJuIHcgPT09IDBcbiAgICAgID8gYGNhbGMoJHtsfSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWBcbiAgICAgIDogYGNhbGMoJHtsfSUgLSAke3RoaXMucHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLyAyfXB4KWA7XG4gIH07XG5cbiAgY2FsY0hhbmRsZUxlZnQxID0gKHcsIGwpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1JhbmdlZCAmJiB3ID09PSAwXG4gICAgICA/IGAke2x9JWBcbiAgICAgIDogYGNhbGMoJHtsICsgd30lIC0gJHt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRoIC8gMn1weClgO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc1NldCxcbiAgICAgIGlzUmFuZ2VkLFxuICAgICAgbWF4VmFsdWUsXG4gICAgICBtaW5WYWx1ZSxcbiAgICAgIHZhbHVlMSxcbiAgICAgIHZlcnRpY2FsLFxuICAgICAgc2xpZGVySGFuZGxlV2lkdGgsXG4gICAgICBzaG93VG9vbHRpcFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbHVlMCA9ICFpc1JhbmdlZCAmJiBtaW5WYWx1ZSA+IDAgPyBtaW5WYWx1ZSA6IHRoaXMucHJvcHMudmFsdWUwO1xuICAgIGNvbnN0IGN1cnJWYWxEZWx0YSA9IHZhbHVlMSAtIHZhbHVlMDtcbiAgICBjb25zdCBtYXhEZWx0YSA9IG1heFZhbHVlIC0gbWluVmFsdWU7XG4gICAgY29uc3Qgd2lkdGggPSAoY3VyclZhbERlbHRhIC8gbWF4RGVsdGEpICogMTAwO1xuICAgIGNvbnN0IHYwTGVmdCA9ICgodmFsdWUwIC0gbWluVmFsdWUpIC8gbWF4RGVsdGEpICogMTAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXJXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctc2xpZGVyJywgey4uLmNsYXNzU2V0fSl9XG4gICAgICAgIHJlZj17dGhpcy5fc2F2ZVJlZn1cbiAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICA+XG4gICAgICAgIDxTdHlsZWRSYW5nZVNsaWRlciBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJcIiB2ZXJ0aWNhbD17dmVydGljYWx9PlxuICAgICAgICAgIDxTbGlkZXJIYW5kbGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlcl9faGFuZGxlXCJcbiAgICAgICAgICAgIGxlZnQ9e3RoaXMuY2FsY0hhbmRsZUxlZnQwKHdpZHRoLCB2MExlZnQpfVxuICAgICAgICAgICAgdmFsdWVMaXN0ZW5lcj17dGhpcy5zbGlkZTBMaXN0ZW5lcn1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cbiAgICAgICAgICAgIGRpc3BsYXk9e2lzUmFuZ2VkfVxuICAgICAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxuICAgICAgICAgICAgc2hvd1Rvb2x0aXA9e3Nob3dUb29sdGlwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNsaWRlckhhbmRsZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19oYW5kbGVcIlxuICAgICAgICAgICAgbGVmdD17dGhpcy5jYWxjSGFuZGxlTGVmdDEod2lkdGgsIHYwTGVmdCl9XG4gICAgICAgICAgICB2YWx1ZUxpc3RlbmVyPXt0aGlzLnNsaWRlMUxpc3RlbmVyfVxuICAgICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlMX1cbiAgICAgICAgICAgIHNob3dUb29sdGlwPXtzaG93VG9vbHRpcH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTbGlkZXJCYXJIYW5kbGVcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIHYwTGVmdD17djBMZWZ0fVxuICAgICAgICAgICAgZW5hYmxlQmFyRHJhZz17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnfVxuICAgICAgICAgICAgc2xpZGVyQmFyTGlzdGVuZXI9e3RoaXMuc2xpZGVyQmFyTGlzdGVuZXJ9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRSYW5nZVNsaWRlcj5cbiAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iXX0=