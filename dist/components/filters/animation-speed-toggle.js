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

var _slider = _interopRequireDefault(require("../common/slider/slider"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 96px;\n  bottom: 10px;\n  width: 40px;\n  padding-left: 18px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  width: 20px;\n  height: 120px;\n  flex-direction: column;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SliderWrapper = styled.div(_templateObject());
var VerticalSliderContainer = styled.div(_templateObject2());

var AnimationSpeedToggle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AnimationSpeedToggle, _Component);

  function AnimationSpeedToggle() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, AnimationSpeedToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AnimationSpeedToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      _this.props.onHide();
    });
    return _this;
  }

  (0, _createClass2["default"])(AnimationSpeedToggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          updateAnimationSpeed = _this$props.updateAnimationSpeed,
          speed = _this$props.speed;
      return _react["default"].createElement(VerticalSliderContainer, null, _react["default"].createElement(SliderWrapper, null, _react["default"].createElement(_slider["default"], {
        minValue: 0,
        maxValue: 10,
        step: 0.1,
        value1: speed,
        onSlider1Change: updateAnimationSpeed,
        isRanged: false,
        vertical: true,
        showTooltip: true
      })));
    }
  }]);
  return AnimationSpeedToggle;
}(_react.Component);

var _default = (0, _reactOnclickoutside["default"])(AnimationSpeedToggle);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvYW5pbWF0aW9uLXNwZWVkLXRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJTbGlkZXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiVmVydGljYWxTbGlkZXJDb250YWluZXIiLCJBbmltYXRpb25TcGVlZFRvZ2dsZSIsImUiLCJwcm9wcyIsIm9uSGlkZSIsInVwZGF0ZUFuaW1hdGlvblNwZWVkIiwic3BlZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUFuQjtBQVFBLElBQU1DLHVCQUF1QixHQUFHRixNQUFNLENBQUNDLEdBQVYsb0JBQTdCOztJQVFNRSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MkdBQ2lCLFVBQUFDLENBQUMsRUFBSTtBQUN4QixZQUFLQyxLQUFMLENBQVdDLE1BQVg7QUFDRCxLOzs7Ozs7NkJBRVE7QUFBQSx3QkFDK0IsS0FBS0QsS0FEcEM7QUFBQSxVQUNBRSxvQkFEQSxlQUNBQSxvQkFEQTtBQUFBLFVBQ3NCQyxLQUR0QixlQUNzQkEsS0FEdEI7QUFFUCxhQUNFLGdDQUFDLHVCQUFELFFBQ0UsZ0NBQUMsYUFBRCxRQUNFLGdDQUFDLGtCQUFEO0FBQ0UsUUFBQSxRQUFRLEVBQUUsQ0FEWjtBQUVFLFFBQUEsUUFBUSxFQUFFLEVBRlo7QUFHRSxRQUFBLElBQUksRUFBRSxHQUhSO0FBSUUsUUFBQSxNQUFNLEVBQUVBLEtBSlY7QUFLRSxRQUFBLGVBQWUsRUFBRUQsb0JBTG5CO0FBTUUsUUFBQSxRQUFRLEVBQUUsS0FOWjtBQU9FLFFBQUEsUUFBUSxNQVBWO0FBUUUsUUFBQSxXQUFXO0FBUmIsUUFERixDQURGLENBREY7QUFnQkQ7OztFQXZCZ0NFLGdCOztlQTBCcEIscUNBQWVOLG9CQUFmLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3NsaWRlci9zbGlkZXInO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWZXJ0aWNhbFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDk2cHg7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbmA7XG5cbmNsYXNzIEFuaW1hdGlvblNwZWVkVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3VwZGF0ZUFuaW1hdGlvblNwZWVkLCBzcGVlZH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8VmVydGljYWxTbGlkZXJDb250YWluZXI+XG4gICAgICAgIDxTbGlkZXJXcmFwcGVyPlxuICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgIG1pblZhbHVlPXswfVxuICAgICAgICAgICAgbWF4VmFsdWU9ezEwfVxuICAgICAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICAgICAgdmFsdWUxPXtzcGVlZH1cbiAgICAgICAgICAgIG9uU2xpZGVyMUNoYW5nZT17dXBkYXRlQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgICAgICBpc1JhbmdlZD17ZmFsc2V9XG4gICAgICAgICAgICB2ZXJ0aWNhbFxuICAgICAgICAgICAgc2hvd1Rvb2x0aXBcbiAgICAgICAgICAvPlxuICAgICAgICA8L1NsaWRlcldyYXBwZXI+XG4gICAgICA8L1ZlcnRpY2FsU2xpZGVyQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGUoQW5pbWF0aW9uU3BlZWRUb2dnbGUpO1xuIl19