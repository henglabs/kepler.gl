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

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _rangePlot = _interopRequireDefault(require("./range-plot"));

var _slider = _interopRequireDefault(require("./slider/slider"));

var _styledComponents2 = require("./styled-components");

var _dataUtils = require("../../utils/data-utils");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 6px;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", "px;\n  width: ", "px;\n  padding: 4px 6px;\n  margin-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderInput = styled(_styledComponents2.Input)(_templateObject(), function (props) {
  return props.theme.sliderInputHeight;
}, function (props) {
  return props.theme.sliderInputWidth;
}, function (props) {
  return props.flush ? 0 : 24;
});
var SliderWrapper = styled.div(_templateObject2());
var RangeInputWrapper = styled.div(_templateObject3());

var RangeSlider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(RangeSlider, _Component);

  function RangeSlider() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, RangeSlider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(RangeSlider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value0: 0,
      value1: 1,
      width: 288
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setValueFromProps", function (props) {
      var value0 = props.value0,
          value1 = props.value1;

      if (!isNaN(value0) && !isNaN(value1)) {
        _this.setState({
          value0: value0,
          value1: value1
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal0InRange", function (val) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          range = _this$props.range;
      return Boolean(val >= range[0] && val <= value1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isVal1InRange", function (val) {
      var _this$props2 = _this.props,
          range = _this$props2.range,
          value0 = _this$props2.value0;
      return Boolean(val <= range[1] && val >= value0);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_roundValToStep", function (val) {
      var _this$props3 = _this.props,
          range = _this$props3.range,
          step = _this$props3.step;
      return (0, _dataUtils.roundValToStep)(range[0], step, val);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal1", function (val) {
      var _this$props4 = _this.props,
          value0 = _this$props4.value0,
          onChange = _this$props4.onChange;
      val = Number(val);

      if (_this._isVal1InRange(val)) {
        onChange([value0, _this._roundValToStep(val)]);
        return true;
      }

      return false;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal0", function (val) {
      var _this$props5 = _this.props,
          value1 = _this$props5.value1,
          onChange = _this$props5.onChange;
      val = Number(val);

      if (_this._isVal0InRange(val)) {
        onChange([_this._roundValToStep(val), value1]);
        return true;
      }

      return false;
    });
    return _this;
  }

  (0, _createClass2["default"])(RangeSlider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setValueFromProps(this.props);

      this._resize();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this._setValueFromProps(nextProps);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._resize();
    }
  }, {
    key: "_resize",
    value: function _resize() {
      var width = this.sliderContainer.offsetWidth;

      if (width !== this.state.width) {
        this.setState({
          width: width
        });
      }
    }
  }, {
    key: "_renderInput",
    value: function _renderInput(key) {
      var _this2 = this;

      var setRange = key === 'value0' ? this._setRangeVal0 : this._setRangeVal1;

      var update = function update(e) {
        if (!setRange(e.target.value)) {
          _this2.setState((0, _defineProperty2["default"])({}, key, _this2.state[key]));
        }
      };

      return _react["default"].createElement(SliderInput, {
        className: "kg-range-slider__input",
        type: "number",
        ref: function ref(comp) {
          _this2["input-".concat(key)] = comp;
        },
        id: "slider-input-".concat(key),
        key: key,
        value: this.state[key],
        onChange: function onChange(e) {
          _this2.setState((0, _defineProperty2["default"])({}, key, e.target.value));
        },
        onKeyPress: function onKeyPress(e) {
          if (e.key === 'Enter') {
            update(e);

            _this2["input-".concat(key)].blur();
          }
        },
        onBlur: update,
        flush: key === 'value0',
        secondary: this.props.inputTheme === 'secondary'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          isRanged = _this$props6.isRanged,
          showInput = _this$props6.showInput,
          histogram = _this$props6.histogram,
          lineChart = _this$props6.lineChart,
          plotType = _this$props6.plotType,
          isEnlarged = _this$props6.isEnlarged,
          range = _this$props6.range,
          onChange = _this$props6.onChange,
          value0 = _this$props6.value0,
          value1 = _this$props6.value1,
          sliderHandleWidth = _this$props6.sliderHandleWidth,
          step = _this$props6.step;
      var height = isRanged && showInput ? '16px' : '24px';
      var width = this.state.width;
      var plotWidth = width - sliderHandleWidth;
      return _react["default"].createElement("div", {
        className: "kg-range-slider",
        style: {
          width: '100%',
          padding: "0 ".concat(sliderHandleWidth / 2, "px")
        },
        ref: function ref(comp) {
          _this3.sliderContainer = comp;
        }
      }, histogram && histogram.length ? _react["default"].createElement(_rangePlot["default"], {
        histogram: histogram,
        lineChart: lineChart,
        plotType: plotType,
        isEnlarged: isEnlarged,
        onBrush: function onBrush(val0, val1) {
          onChange([_this3._roundValToStep(val0), _this3._roundValToStep(val1)]);
        },
        range: range,
        value: [value0, value1],
        width: plotWidth
      }) : null, _react["default"].createElement(SliderWrapper, {
        style: {
          height: height
        },
        className: "kg-range-slider__slider"
      }, this.props.xAxis ? _react["default"].createElement(this.props.xAxis, {
        width: plotWidth,
        domain: range
      }) : null, _react["default"].createElement(_slider["default"], {
        showValues: false,
        isRanged: isRanged,
        minValue: range[0],
        maxValue: range[1],
        value0: value0,
        value1: value1,
        step: step,
        handleWidth: sliderHandleWidth,
        onSlider0Change: this._setRangeVal0,
        onSlider1Change: this._setRangeVal1,
        onSliderBarChange: function onSliderBarChange(val0, val1) {
          onChange([val0, val1]);
        },
        enableBarDrag: true
      }), !isRanged && showInput ? this._renderInput('value1') : null), isRanged && showInput ? _react["default"].createElement(RangeInputWrapper, {
        className: "range-slider__input-group"
      }, this._renderInput('value0'), this._renderInput('value1')) : null);
    }
  }]);
  return RangeSlider;
}(_react.Component);

exports["default"] = RangeSlider;
(0, _defineProperty2["default"])(RangeSlider, "propTypes", {
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  value0: _propTypes["default"].number.isRequired,
  value1: _propTypes["default"].number.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  histogram: _propTypes["default"].arrayOf(_propTypes["default"].any),
  isRanged: _propTypes["default"].bool,
  isEnlarged: _propTypes["default"].bool,
  showInput: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  step: _propTypes["default"].number,
  sliderHandleWidth: _propTypes["default"].number,
  xAxis: _propTypes["default"].func
});
(0, _defineProperty2["default"])(RangeSlider, "defaultProps", {
  isEnlarged: false,
  isRanged: true,
  showInput: true,
  sliderHandleWidth: 12,
  onChange: function onChange() {}
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1zbGlkZXIuanMiXSwibmFtZXMiOlsiU2xpZGVySW5wdXQiLCJzdHlsZWQiLCJJbnB1dCIsInByb3BzIiwidGhlbWUiLCJzbGlkZXJJbnB1dEhlaWdodCIsInNsaWRlcklucHV0V2lkdGgiLCJmbHVzaCIsIlNsaWRlcldyYXBwZXIiLCJkaXYiLCJSYW5nZUlucHV0V3JhcHBlciIsIlJhbmdlU2xpZGVyIiwidmFsdWUwIiwidmFsdWUxIiwid2lkdGgiLCJpc05hTiIsInNldFN0YXRlIiwidmFsIiwicmFuZ2UiLCJCb29sZWFuIiwic3RlcCIsIm9uQ2hhbmdlIiwiTnVtYmVyIiwiX2lzVmFsMUluUmFuZ2UiLCJfcm91bmRWYWxUb1N0ZXAiLCJfaXNWYWwwSW5SYW5nZSIsIl9zZXRWYWx1ZUZyb21Qcm9wcyIsIl9yZXNpemUiLCJuZXh0UHJvcHMiLCJzbGlkZXJDb250YWluZXIiLCJvZmZzZXRXaWR0aCIsInN0YXRlIiwia2V5Iiwic2V0UmFuZ2UiLCJfc2V0UmFuZ2VWYWwwIiwiX3NldFJhbmdlVmFsMSIsInVwZGF0ZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbXAiLCJibHVyIiwiaW5wdXRUaGVtZSIsImlzUmFuZ2VkIiwic2hvd0lucHV0IiwiaGlzdG9ncmFtIiwibGluZUNoYXJ0IiwicGxvdFR5cGUiLCJpc0VubGFyZ2VkIiwic2xpZGVySGFuZGxlV2lkdGgiLCJoZWlnaHQiLCJwbG90V2lkdGgiLCJwYWRkaW5nIiwibGVuZ3RoIiwidmFsMCIsInZhbDEiLCJ4QXhpcyIsIl9yZW5kZXJJbnB1dCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImFueSIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7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Q0FEc0IsRUFFdEIsS0FBS0EsWUFBTCxDQUFrQixRQUFsQixDQUZzQixDQUF4QixHQUdzQixJQS9DekIsQ0FERjtBQW1ERDs7O0VBdk1zQ0MsZ0I7OztpQ0FBcEIvQyxXLGVBQ0E7QUFDakJPLEVBQUFBLEtBQUssRUFBRXlDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsRUFBb0NDLFVBRDFCO0FBRWpCbEQsRUFBQUEsTUFBTSxFQUFFK0Msc0JBQVVFLE1BQVYsQ0FBaUJDLFVBRlI7QUFHakJqRCxFQUFBQSxNQUFNLEVBQUU4QyxzQkFBVUUsTUFBVixDQUFpQkMsVUFIUjtBQUlqQnpDLEVBQUFBLFFBQVEsRUFBRXNDLHNCQUFVSSxJQUFWLENBQWVELFVBSlI7QUFLakJqQixFQUFBQSxTQUFTLEVBQUVjLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUssR0FBNUIsQ0FMTTtBQU1qQnJCLEVBQUFBLFFBQVEsRUFBRWdCLHNCQUFVTSxJQU5IO0FBT2pCakIsRUFBQUEsVUFBVSxFQUFFVyxzQkFBVU0sSUFQTDtBQVFqQnJCLEVBQUFBLFNBQVMsRUFBRWUsc0JBQVVNLElBUko7QUFTakJ2QixFQUFBQSxVQUFVLEVBQUVpQixzQkFBVU8sTUFUTDtBQVVqQjlDLEVBQUFBLElBQUksRUFBRXVDLHNCQUFVRSxNQVZDO0FBV2pCWixFQUFBQSxpQkFBaUIsRUFBRVUsc0JBQVVFLE1BWFo7QUFZakJMLEVBQUFBLEtBQUssRUFBRUcsc0JBQVVJO0FBWkEsQztpQ0FEQXBELFcsa0JBZ0JHO0FBQ3BCcUMsRUFBQUEsVUFBVSxFQUFFLEtBRFE7QUFFcEJMLEVBQUFBLFFBQVEsRUFBRSxJQUZVO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUUsSUFIUztBQUlwQkssRUFBQUEsaUJBQWlCLEVBQUUsRUFKQztBQUtwQjVCLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFO0FBTEUsQztBQXdMdkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgUmFuZ2VQbG90IGZyb20gJy4vcmFuZ2UtcGxvdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0IHtJbnB1dH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge3JvdW5kVmFsVG9TdGVwfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcblxuY29uc3QgU2xpZGVySW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVySW5wdXRIZWlnaHR9cHg7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlcklucHV0V2lkdGh9cHg7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLmZsdXNoID8gMCA6IDI0fXB4O1xuYDtcblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFJhbmdlSW5wdXRXcmFwcGVyID1zdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhbmdlU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICByYW5nZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWx1ZTE6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBoaXN0b2dyYW06IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGlzUmFuZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0VubGFyZ2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93SW5wdXQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RlcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB4QXhpczogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzRW5sYXJnZWQ6IGZhbHNlLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHNob3dJbnB1dDogdHJ1ZSxcbiAgICBzbGlkZXJIYW5kbGVXaWR0aDogMTIsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9XG4gIH07XG5cbiAgc3RhdGUgPSB7dmFsdWUwOiAwLCB2YWx1ZTE6IDEsIHdpZHRoOiAyODh9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3NldFZhbHVlRnJvbVByb3BzKHRoaXMucHJvcHMpO1xuICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLl9zZXRWYWx1ZUZyb21Qcm9wcyhuZXh0UHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuX3Jlc2l6ZSgpO1xuICB9XG5cbiAgX3NldFZhbHVlRnJvbVByb3BzID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTAsIHZhbHVlMX0gPSBwcm9wcztcblxuICAgIGlmICghaXNOYU4odmFsdWUwKSAmJiAhaXNOYU4odmFsdWUxKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWUwLCB2YWx1ZTF9KTtcbiAgICB9XG4gIH07XG5cbiAgX2lzVmFsMEluUmFuZ2UgPSB2YWwgPT4ge1xuICAgIGNvbnN0IHt2YWx1ZTEsIHJhbmdlfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gQm9vbGVhbih2YWwgPj0gcmFuZ2VbMF0gJiYgdmFsIDw9IHZhbHVlMSk7XG4gIH07XG5cbiAgX2lzVmFsMUluUmFuZ2UgPSB2YWwgPT4ge1xuICAgIGNvbnN0IHtyYW5nZSwgdmFsdWUwfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gQm9vbGVhbih2YWwgPD0gcmFuZ2VbMV0gJiYgdmFsID49IHZhbHVlMCk7XG4gIH07XG5cbiAgX3JvdW5kVmFsVG9TdGVwID0gdmFsID0+IHtcbiAgICBjb25zdCB7cmFuZ2UsIHN0ZXB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiByb3VuZFZhbFRvU3RlcChyYW5nZVswXSwgc3RlcCwgdmFsKTtcbiAgfTtcblxuICBfc2V0UmFuZ2VWYWwxID0gdmFsID0+IHtcbiAgICBjb25zdCB7dmFsdWUwLCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIHZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgaWYgKHRoaXMuX2lzVmFsMUluUmFuZ2UodmFsKSkge1xuICAgICAgb25DaGFuZ2UoW3ZhbHVlMCwgdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsKV0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfc2V0UmFuZ2VWYWwwID0gdmFsID0+IHtcbiAgICBjb25zdCB7dmFsdWUxLCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzO1xuICAgIHZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgaWYgKHRoaXMuX2lzVmFsMEluUmFuZ2UodmFsKSkge1xuICAgICAgb25DaGFuZ2UoW3RoaXMuX3JvdW5kVmFsVG9TdGVwKHZhbCksIHZhbHVlMV0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBfcmVzaXplKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zbGlkZXJDb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgIH1cbiAgfVxuXG4gIF9yZW5kZXJJbnB1dChrZXkpIHtcbiAgICBjb25zdCBzZXRSYW5nZSA9IGtleSA9PT0gJ3ZhbHVlMCcgPyB0aGlzLl9zZXRSYW5nZVZhbDAgOiB0aGlzLl9zZXRSYW5nZVZhbDE7XG4gICAgY29uc3QgdXBkYXRlID0gZSA9PiB7XG4gICAgICBpZiAoIXNldFJhbmdlKGUudGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtba2V5XTogdGhpcy5zdGF0ZVtrZXldfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2xpZGVySW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19pbnB1dFwiXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICByZWY9e2NvbXAgPT4ge1xuICAgICAgICAgIHRoaXNbYGlucHV0LSR7a2V5fWBdID0gY29tcDtcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2BzbGlkZXItaW5wdXQtJHtrZXl9YH1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlW2tleV19XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtba2V5XTogZS50YXJnZXQudmFsdWV9KTtcbiAgICAgICAgfX1cbiAgICAgICAgb25LZXlQcmVzcz17ZSA9PiB7XG4gICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICB1cGRhdGUoZSk7XG4gICAgICAgICAgICB0aGlzW2BpbnB1dC0ke2tleX1gXS5ibHVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgICBvbkJsdXI9e3VwZGF0ZX1cbiAgICAgICAgZmx1c2g9e2tleSA9PT0gJ3ZhbHVlMCd9XG4gICAgICAgIHNlY29uZGFyeT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lID09PSAnc2Vjb25kYXJ5J31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpc1JhbmdlZCxcbiAgICAgIHNob3dJbnB1dCxcbiAgICAgIGhpc3RvZ3JhbSxcbiAgICAgIGxpbmVDaGFydCxcbiAgICAgIHBsb3RUeXBlLFxuICAgICAgaXNFbmxhcmdlZCxcbiAgICAgIHJhbmdlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICB2YWx1ZTAsXG4gICAgICB2YWx1ZTEsXG4gICAgICBzbGlkZXJIYW5kbGVXaWR0aCxcbiAgICAgIHN0ZXBcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGhlaWdodCA9IGlzUmFuZ2VkICYmIHNob3dJbnB1dCA/ICcxNnB4JyA6ICcyNHB4JztcbiAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBwbG90V2lkdGggPSAgd2lkdGggLSBzbGlkZXJIYW5kbGVXaWR0aDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImtnLXJhbmdlLXNsaWRlclwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgcGFkZGluZzogYDAgJHtzbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHhgfX1cbiAgICAgICAgcmVmPXtjb21wID0+IHtcbiAgICAgICAgICB0aGlzLnNsaWRlckNvbnRhaW5lciA9IGNvbXA7XG4gICAgICAgIH19PlxuICAgICAgICB7aGlzdG9ncmFtICYmIGhpc3RvZ3JhbS5sZW5ndGggPyAoXG4gICAgICAgICAgPFJhbmdlUGxvdFxuICAgICAgICAgICAgaGlzdG9ncmFtPXtoaXN0b2dyYW19XG4gICAgICAgICAgICBsaW5lQ2hhcnQ9e2xpbmVDaGFydH1cbiAgICAgICAgICAgIHBsb3RUeXBlPXtwbG90VHlwZX1cbiAgICAgICAgICAgIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9XG4gICAgICAgICAgICBvbkJydXNoPXsodmFsMCwgdmFsMSkgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZShbXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsMCksXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsMSlcbiAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e1t2YWx1ZTAsIHZhbHVlMV19XG4gICAgICAgICAgICB3aWR0aD17cGxvdFdpZHRofVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U2xpZGVyV3JhcHBlclxuICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0fX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX3NsaWRlclwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLnhBeGlzID8gPHRoaXMucHJvcHMueEF4aXMgd2lkdGg9e3Bsb3RXaWR0aH0gZG9tYWluPXtyYW5nZX0vPiA6IG51bGx9XG4gICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgc2hvd1ZhbHVlcz17ZmFsc2V9XG4gICAgICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgICAgICBtaW5WYWx1ZT17cmFuZ2VbMF19XG4gICAgICAgICAgICBtYXhWYWx1ZT17cmFuZ2VbMV19XG4gICAgICAgICAgICB2YWx1ZTA9e3ZhbHVlMH1cbiAgICAgICAgICAgIHZhbHVlMT17dmFsdWUxfVxuICAgICAgICAgICAgc3RlcD17c3RlcH1cbiAgICAgICAgICAgIGhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cbiAgICAgICAgICAgIG9uU2xpZGVyMENoYW5nZT17dGhpcy5fc2V0UmFuZ2VWYWwwfVxuICAgICAgICAgICAgb25TbGlkZXIxQ2hhbmdlPXt0aGlzLl9zZXRSYW5nZVZhbDF9XG4gICAgICAgICAgICBvblNsaWRlckJhckNoYW5nZT17KHZhbDAsIHZhbDEpID0+IHtcbiAgICAgICAgICAgICAgb25DaGFuZ2UoW3ZhbDAsIHZhbDFdKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBlbmFibGVCYXJEcmFnXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IWlzUmFuZ2VkICYmIHNob3dJbnB1dCA/IHRoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTEnKSA6IG51bGx9XG4gICAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICAgICAge2lzUmFuZ2VkICYmIHNob3dJbnB1dCA/IDxSYW5nZUlucHV0V3JhcHBlciBjbGFzc05hbWU9XCJyYW5nZS1zbGlkZXJfX2lucHV0LWdyb3VwXCI+XG4gICAgICAgICAge3RoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTAnKX1cbiAgICAgICAgICB7dGhpcy5fcmVuZGVySW5wdXQoJ3ZhbHVlMScpfVxuICAgICAgICA8L1JhbmdlSW5wdXRXcmFwcGVyPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuIl19