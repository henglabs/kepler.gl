"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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

var _colorUtils = require("../../../utils/color-utils");

var _singleColorPalette = _interopRequireDefault(require("./single-color-palette"));

var _colorRangeSelector = _interopRequireDefault(require("./color-range-selector"));

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _styledComponents2 = require("../../common/styled-components");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n\n  .color-select__input-group {\n    flex-grow: 1;\n  }\n  .color-select__input-group:nth-child(2) {\n    margin-left: 12px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  height: ", ";\n\n  .color-selector__selector__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 32px;\n  height: 18px;\n  border-radius: 1px;\n  background-color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ColorBlock = styled.div(_templateObject(), function (props) {
  return "rgb(".concat(props.color.slice(0, 3).join(','), ")");
});
var ColorSelectorInput = styled.div(_templateObject2(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.theme.input;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputPlaceholderColor;
});
var InputBoxContainer = styled.div(_templateObject3());

var ColorSelector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ColorSelector, _Component);

  function ColorSelector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ColorSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ColorSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      editing: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      if (_this.state.editing !== false) {
        _this.setState({
          editing: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelectColor", function (color, e) {
      e.stopPropagation();

      if (_this.props.colorSets[_this.state.editing]) {
        _this.props.colorSets[_this.state.editing].setColor(color);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDropdown", function (e, i) {
      e.stopPropagation();
      e.preventDefault();

      _this.setState({
        editing: i
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          colorSets = _this$props.colorSets,
          disabled = _this$props.disabled,
          inputTheme = _this$props.inputTheme;
      var editing = this.state.editing;
      var currentEditing = colorSets[editing] && (0, _typeof2["default"])(colorSets[editing]) === 'object';
      return _react["default"].createElement("div", {
        className: "color-selector"
      }, _react["default"].createElement(InputBoxContainer, null, colorSets.map(function (cSet, i) {
        return _react["default"].createElement("div", {
          className: "color-select__input-group",
          key: i
        }, _react["default"].createElement(ColorSelectorInput, {
          className: "color-selector__selector",
          active: editing === i,
          disabled: disabled,
          inputTheme: inputTheme,
          onMouseDown: function onMouseDown(e) {
            return _this2._showDropdown(e, i);
          }
        }, cSet.isRange ? _react["default"].createElement(_colorPalette["default"], {
          colors: cSet.selectedColor.colors
        }) : _react["default"].createElement(ColorBlock, {
          className: "color-selector__selector__block",
          color: cSet.selectedColor
        }), cSet.label ? _react["default"].createElement("div", {
          className: "color-selector__selector__label"
        }, cSet.label) : null));
      })), currentEditing ? _react["default"].createElement(_styledComponents2.StyledPanelDropdown, {
        className: "color-selector__dropdown"
      }, colorSets[editing].isRange ? _react["default"].createElement(_colorRangeSelector["default"], {
        selectedColorRange: colorSets[editing].selectedColor,
        onSelectColorRange: this._onSelectColor
      }) : _react["default"].createElement(_singleColorPalette["default"], {
        selectedColor: (0, _colorUtils.rgbToHex)(colorSets[editing].selectedColor),
        onSelectColor: this._onSelectColor
      })) : null);
    }
  }]);
  return ColorSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ColorSelector, "propTypes", {
  colorSets: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    selectedColor: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].any), _propTypes["default"].object]),
    setColor: _propTypes["default"].func.isRequired,
    isRange: _propTypes["default"].bool,
    label: _propTypes["default"].string
  })),
  inputTheme: _propTypes["default"].string,
  disabled: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(ColorSelector, "defaultProps", {
  colorSets: []
});
;

var _default = (0, _reactOnclickoutside["default"])(ColorSelector);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvY29sb3Itc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiQ29sb3JCbG9jayIsInN0eWxlZCIsImRpdiIsInByb3BzIiwiY29sb3IiLCJzbGljZSIsImpvaW4iLCJDb2xvclNlbGVjdG9ySW5wdXQiLCJpbnB1dFRoZW1lIiwidGhlbWUiLCJzZWNvbmRhcnlJbnB1dCIsImlucHV0IiwiaW5wdXRCb3hIZWlnaHQiLCJpbnB1dFBsYWNlaG9sZGVyQ29sb3IiLCJJbnB1dEJveENvbnRhaW5lciIsIkNvbG9yU2VsZWN0b3IiLCJlZGl0aW5nIiwiZSIsInN0YXRlIiwic2V0U3RhdGUiLCJzdG9wUHJvcGFnYXRpb24iLCJjb2xvclNldHMiLCJzZXRDb2xvciIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVkIiwiY3VycmVudEVkaXRpbmciLCJtYXAiLCJjU2V0IiwiX3Nob3dEcm9wZG93biIsImlzUmFuZ2UiLCJzZWxlY3RlZENvbG9yIiwiY29sb3JzIiwibGFiZWwiLCJfb25TZWxlY3RDb2xvciIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsIm9uZU9mVHlwZSIsImFueSIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxNQUFNLENBQUNDLEdBQVYsb0JBSU0sVUFBQUMsS0FBSztBQUFBLHVCQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixFQUF3QkMsSUFBeEIsQ0FBNkIsR0FBN0IsQ0FBWDtB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RGY3QixhLGtCQWNrQjtBQUNwQk0sRUFBQUEsU0FBUyxFQUFFO0FBRFMsQztBQTZFdkI7O2VBRWMscUNBQWVOLGFBQWYsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge3JnYlRvSGV4fSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQgU2luZ2xlQ29sb3JQYWxldHRlIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9sYXllci1wYW5lbC9zaW5nbGUtY29sb3ItcGFsZXR0ZSc7XG5pbXBvcnQgQ29sb3JSYW5nZVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9sYXllci1wYW5lbC9jb2xvci1yYW5nZS1zZWxlY3Rvcic7XG5pbXBvcnQgQ29sb3JQYWxldHRlIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9sYXllci1wYW5lbC9jb2xvci1wYWxldHRlJztcbmltcG9ydCB7U3R5bGVkUGFuZWxEcm9wZG93bn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcblxuY29uc3QgQ29sb3JCbG9jayA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBgcmdiKCR7cHJvcHMuY29sb3Iuc2xpY2UoMCwgMykuam9pbignLCcpfSlgfTtcbmA7XG5cbmNvbnN0IENvbG9yU2VsZWN0b3JJbnB1dCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pbnB1dFRoZW1lID09PSAnc2Vjb25kYXJ5J1xuICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dFxuICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dH07XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodH07XG5cbiAgLmNvbG9yLXNlbGVjdG9yX19zZWxlY3Rvcl9fbGFiZWwge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQbGFjZWhvbGRlckNvbG9yfTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLmNvbG9yLXNlbGVjdF9faW5wdXQtZ3JvdXAge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuY29sb3Itc2VsZWN0X19pbnB1dC1ncm91cDpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG5gO1xuXG5jbGFzcyBDb2xvclNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb2xvclNldHM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgc2VsZWN0ZWRDb2xvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICAgICAgc2V0Q29sb3I6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIGlzUmFuZ2U6IFByb3BUeXBlcy5ib29sLFxuICAgICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgfSlcbiAgICApLFxuICAgIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xvclNldHM6IFtdXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgZWRpdGluZzogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVDbGlja091dHNpZGUgPSBlID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5lZGl0aW5nICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZzogZmFsc2V9KTtcbiAgICB9XG4gIH07XG5cbiAgX29uU2VsZWN0Q29sb3IgPSAoY29sb3IsIGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLnByb3BzLmNvbG9yU2V0c1t0aGlzLnN0YXRlLmVkaXRpbmddKSB7XG4gICAgICB0aGlzLnByb3BzLmNvbG9yU2V0c1t0aGlzLnN0YXRlLmVkaXRpbmddLnNldENvbG9yKGNvbG9yKTtcbiAgICB9XG4gIH07XG5cbiAgX3Nob3dEcm9wZG93biA9IChlLCBpKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZWRpdGluZzogaX0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y29sb3JTZXRzLCBkaXNhYmxlZCwgaW5wdXRUaGVtZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtlZGl0aW5nfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgY3VycmVudEVkaXRpbmcgPVxuICAgICAgY29sb3JTZXRzW2VkaXRpbmddICYmIHR5cGVvZiBjb2xvclNldHNbZWRpdGluZ10gPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc2VsZWN0b3JcIj5cbiAgICAgICAgPElucHV0Qm94Q29udGFpbmVyPlxuICAgICAgICAgIHtjb2xvclNldHMubWFwKChjU2V0LCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNlbGVjdF9faW5wdXQtZ3JvdXBcIiBrZXk9e2l9PlxuXG4gICAgICAgICAgICAgIDxDb2xvclNlbGVjdG9ySW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xvci1zZWxlY3Rvcl9fc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgIGFjdGl2ZT17ZWRpdGluZyA9PT0gaX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgaW5wdXRUaGVtZT17aW5wdXRUaGVtZX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB0aGlzLl9zaG93RHJvcGRvd24oZSwgaSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y1NldC5pc1JhbmdlID8gKFxuICAgICAgICAgICAgICAgICAgPENvbG9yUGFsZXR0ZSBjb2xvcnM9e2NTZXQuc2VsZWN0ZWRDb2xvci5jb2xvcnN9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxDb2xvckJsb2NrXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLXNlbGVjdG9yX19zZWxlY3Rvcl9fYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y1NldC5zZWxlY3RlZENvbG9yfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtjU2V0LmxhYmVsID8gPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zZWxlY3Rvcl9fc2VsZWN0b3JfX2xhYmVsXCI+e2NTZXQubGFiZWx9PC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgPC9Db2xvclNlbGVjdG9ySW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9JbnB1dEJveENvbnRhaW5lcj5cbiAgICAgICAge2N1cnJlbnRFZGl0aW5nID8gKFxuICAgICAgICAgIDxTdHlsZWRQYW5lbERyb3Bkb3duIGNsYXNzTmFtZT1cImNvbG9yLXNlbGVjdG9yX19kcm9wZG93blwiPlxuICAgICAgICAgICAge2NvbG9yU2V0c1tlZGl0aW5nXS5pc1JhbmdlID8gKFxuICAgICAgICAgICAgICA8Q29sb3JSYW5nZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclJhbmdlPXtjb2xvclNldHNbZWRpdGluZ10uc2VsZWN0ZWRDb2xvcn1cbiAgICAgICAgICAgICAgICBvblNlbGVjdENvbG9yUmFuZ2U9e3RoaXMuX29uU2VsZWN0Q29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8U2luZ2xlQ29sb3JQYWxldHRlXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcj17cmdiVG9IZXgoY29sb3JTZXRzW2VkaXRpbmddLnNlbGVjdGVkQ29sb3IpfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0Q29sb3I9e3RoaXMuX29uU2VsZWN0Q29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU3R5bGVkUGFuZWxEcm9wZG93bj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbkNsaWNrT3V0c2lkZShDb2xvclNlbGVjdG9yKTtcbiJdfQ==