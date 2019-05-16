"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var styled = _interopRequireWildcard(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  line-height: 0;\n  height: ", ";\n  margin-left: ", "px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  display: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function noop() {}

var StyledSwitchInput = styled.label(_templateObject(), function (props) {
  return props.secondary ? props.theme.secondarySwitch : props.theme.inputSwitch;
});
var StyledCheckboxInput = styled.label(_templateObject2(), function (props) {
  return props.theme.inputCheckbox;
});
var HiddenInput = styled.input(_templateObject3());
var StyledCheckbox = styled.div(_templateObject4(), function (props) {
  return props.theme.switchBtnHeight;
}, function (props) {
  return props.theme.switchLabelMargin;
});

var Checkbox =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Checkbox, _Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(_args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      focused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (args) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus(args);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (args) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur(args);
    });
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      var inputProps = (0, _objectSpread2["default"])({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'id', 'onChange', 'value']), {
        type: 'checkbox',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      });
      var labelProps = (0, _objectSpread2["default"])({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'secondary']), {
        htmlFor: this.props.id
      });
      var LabelElement = this.props.type === 'checkbox' ? StyledCheckboxInput : StyledSwitchInput;
      return _react["default"].createElement(StyledCheckbox, {
        className: "kg-checkbox"
      }, _react["default"].createElement(HiddenInput, inputProps), _react["default"].createElement(LabelElement, (0, _extends2["default"])({
        className: "kg-checkbox__label"
      }, labelProps), this.props.label));
    }
  }]);
  return Checkbox;
}(_react.Component);

exports["default"] = Checkbox;
(0, _defineProperty2["default"])(Checkbox, "propTypes", {
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].node,
  value: _propTypes["default"].oneOf([true, false, 'indeterminate']),
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  error: _propTypes["default"].string,
  "switch": _propTypes["default"].bool,
  activeColor: _propTypes["default"].string,
  secondary: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  disabled: false,
  checked: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  label: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jaGVja2JveC5qcyJdLCJuYW1lcyI6WyJub29wIiwiU3R5bGVkU3dpdGNoSW5wdXQiLCJzdHlsZWQiLCJsYWJlbCIsInByb3BzIiwic2Vjb25kYXJ5IiwidGhlbWUiLCJzZWNvbmRhcnlTd2l0Y2giLCJpbnB1dFN3aXRjaCIsIlN0eWxlZENoZWNrYm94SW5wdXQiLCJpbnB1dENoZWNrYm94IiwiSGlkZGVuSW5wdXQiLCJpbnB1dCIsIlN0eWxlZENoZWNrYm94IiwiZGl2Iiwic3dpdGNoQnRuSGVpZ2h0Iiwic3dpdGNoTGFiZWxNYXJnaW4iLCJDaGVja2JveCIsImZvY3VzZWQiLCJhcmdzIiwic2V0U3RhdGUiLCJvbkZvY3VzIiwib25CbHVyIiwiaW5wdXRQcm9wcyIsInR5cGUiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJsYWJlbFByb3BzIiwiaHRtbEZvciIsImlkIiwiTGFiZWxFbGVtZW50IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJ2YWx1ZSIsIm9uZU9mIiwiY2hlY2tlZCIsImJvb2wiLCJkaXNhYmxlZCIsImVycm9yIiwiYWN0aXZlQ29sb3IiLCJmdW5jIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTs7QUFFbEIsSUFBTUMsaUJBQWlCLEdBQUdDLE1BQU0sQ0FBQ0MsS0FBVixvQkFDbkIsVUFBQUMsS0FBSztBQUFBLFNBQ0xBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQkQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGVBQTlCLEdBQWdESCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsV0FEdkQ7QUFBQSxDQURjLENBQXZCO0FB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MUIsUSxrQkFpQkc7QUFDcEJ1QixFQUFBQSxRQUFRLEVBQUUsS0FEVTtBQUVwQkYsRUFBQUEsT0FBTyxFQUFFLEtBRlc7QUFHcEJoQixFQUFBQSxNQUFNLEVBQUV0QixJQUhZO0FBSXBCNEMsRUFBQUEsUUFBUSxFQUFFNUMsSUFKVTtBQUtwQnFCLEVBQUFBLE9BQU8sRUFBRXJCLElBTFc7QUFNcEJHLEVBQUFBLEtBQUssRUFBRTtBQU5hLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuY29uc3QgU3R5bGVkU3dpdGNoSW5wdXQgPSBzdHlsZWQubGFiZWxgXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlTd2l0Y2ggOiBwcm9wcy50aGVtZS5pbnB1dFN3aXRjaH07XG5gO1xuXG5jb25zdCBTdHlsZWRDaGVja2JveElucHV0ID0gc3R5bGVkLmxhYmVsYFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q2hlY2tib3h9XG5gO1xuXG5jb25zdCBIaWRkZW5JbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuYDtcblxuY29uc3QgU3R5bGVkQ2hlY2tib3ggPSBzdHlsZWQuZGl2YFxuICBsaW5lLWhlaWdodDogMDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaEJ0bkhlaWdodH07XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaExhYmVsTWFyZ2lufXB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub25lT2YoW3RydWUsIGZhbHNlLCAnaW5kZXRlcm1pbmF0ZSddKSxcbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzd2l0Y2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGFjdGl2ZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlY29uZGFyeTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgICBvbkJsdXI6IG5vb3AsXG4gICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgb25Gb2N1czogbm9vcCxcbiAgICBsYWJlbDogJydcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBmb2N1c2VkOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gYXJncyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMub25Gb2N1cyhhcmdzKTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gYXJncyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KTtcbiAgICB0aGlzLnByb3BzLm9uQmx1cihhcmdzKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAgICAgIC4uLnBpY2sodGhpcy5wcm9wcywgWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2lkJywgJ29uQ2hhbmdlJywgJ3ZhbHVlJ10pLFxuICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMsXG4gICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1clxuICAgIH07XG5cbiAgICBjb25zdCBsYWJlbFByb3BzID0ge1xuICAgICAgLi4ucGljayh0aGlzLnByb3BzLCBbJ2NoZWNrZWQnLCAnZGlzYWJsZWQnLCAnc2Vjb25kYXJ5J10pLFxuICAgICAgaHRtbEZvcjogdGhpcy5wcm9wcy5pZFxuICAgIH07XG5cbiAgICBjb25zdCBMYWJlbEVsZW1lbnQgPSB0aGlzLnByb3BzLnR5cGUgPT09ICdjaGVja2JveCcgPyBTdHlsZWRDaGVja2JveElucHV0IDogU3R5bGVkU3dpdGNoSW5wdXQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRDaGVja2JveCBjbGFzc05hbWU9XCJrZy1jaGVja2JveFwiPlxuICAgICAgICA8SGlkZGVuSW5wdXQgey4uLmlucHV0UHJvcHN9IC8+XG4gICAgICAgIDxMYWJlbEVsZW1lbnQgY2xhc3NOYW1lPVwia2ctY2hlY2tib3hfX2xhYmVsXCIgey4uLmxhYmVsUHJvcHN9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICA8L0xhYmVsRWxlbWVudD5cbiAgICAgIDwvU3R5bGVkQ2hlY2tib3g+XG4gICAgKTtcbiAgfVxufVxuIl19