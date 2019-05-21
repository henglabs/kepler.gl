"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _delete = _interopRequireDefault(require("../icons/delete"));

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 10px;\n  text-overflow: ellipsis;\n  width: 100%;\n  overflow: hidden;\n\n  :hover {\n    overflow: visible;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1px;\n  color: ", ";\n  font-size: 11px;\n  line-height: 20px;\n  margin: 4px 10px 4px 3px;\n  padding: 2px 6px;\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 8px);\n\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required properties
  onClick: _propTypes["default"].func.isRequired,
  removeItem: _propTypes["default"].func.isRequired,
  // optional properties
  selectedItems: _propTypes["default"].arrayOf(_propTypes["default"].any),
  disabled: _propTypes["default"].bool,
  displayOption: _propTypes["default"].func,
  focus: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  inputTheme: _propTypes["default"].string
};
var ChickletButton = styled.div(_templateObject(), function (props) {
  return props.theme.panelActiveBg;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});
var ChickletTag = styled.span(_templateObject2());

var Chicklet = function Chicklet(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      remove = _ref.remove;
  return _react["default"].createElement(ChickletButton, null, _react["default"].createElement(ChickletTag, null, name), _react["default"].createElement(_delete["default"], {
    height: "10px",
    onClick: disabled ? null : remove
  }));
};

var ChickletedInputContainer = styled.div(_templateObject3(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryChickletedInput : props.theme.chickletedInput;
}, function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});

var ChickletedInput = function ChickletedInput(_ref2) {
  var focus = _ref2.focus,
      disabled = _ref2.disabled,
      error = _ref2.error,
      onClick = _ref2.onClick,
      className = _ref2.className,
      _ref2$selectedItems = _ref2.selectedItems,
      selectedItems = _ref2$selectedItems === void 0 ? [] : _ref2$selectedItems,
      _ref2$placeholder = _ref2.placeholder,
      placeholder = _ref2$placeholder === void 0 ? '' : _ref2$placeholder,
      removeItem = _ref2.removeItem,
      _ref2$displayOption = _ref2.displayOption,
      displayOption = _ref2$displayOption === void 0 ? function (d) {
    return d;
  } : _ref2$displayOption,
      inputTheme = _ref2.inputTheme;
  return _react["default"].createElement(ChickletedInputContainer, {
    className: "".concat(className, " chickleted-input"),
    focus: focus,
    disabled: disabled,
    error: error,
    onClick: onClick,
    inputTheme: inputTheme,
    hasPlaceholder: !selectedItems || !selectedItems.length
  }, selectedItems.length > 0 ? selectedItems.map(function (item, i) {
    return _react["default"].createElement(Chicklet, {
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      remove: function remove(e) {
        return removeItem(item, e);
      }
    });
  }) : _react["default"].createElement("span", {
    className: "".concat(className, " chickleted-input__placeholder")
  }, placeholder));
};

ChickletedInput.propTypes = propTypes;
var _default = ChickletedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwicmVtb3ZlSXRlbSIsInNlbGVjdGVkSXRlbXMiLCJhcnJheU9mIiwiYW55IiwiZGlzYWJsZWQiLCJib29sIiwiZGlzcGxheU9wdGlvbiIsImZvY3VzIiwiZXJyb3IiLCJwbGFjZWhvbGRlciIsInN0cmluZyIsImlucHV0VGhlbWUiLCJDaGlja2xldEJ1dHRvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJwYW5lbEFjdGl2ZUJnIiwidGV4dENvbG9yIiwidGV4dENvbG9ySGwiLCJDaGlja2xldFRhZyIsInNwYW4iLCJDaGlja2xldCIsIm5hbWUiLCJyZW1vdmUiLCJDaGlja2xldGVkSW5wdXRDb250YWluZXIiLCJzZWNvbmRhcnlDaGlja2xldGVkSW5wdXQiLCJjaGlja2xldGVkSW5wdXQiLCJoYXNQbGFjZWhvbGRlciIsInNlbGVjdENvbG9yUGxhY2VIb2xkZXIiLCJzZWxlY3RDb2xvciIsIkNoaWNrbGV0ZWRJbnB1dCIsImNsYXNzTmFtZSIsImQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDLElBQVYsQ0FBZUMsVUFGUjtBQUdoQkMsRUFBQUEsVUFBVSxFQUFFSCxzQkFBVUMsSUFBVixDQUFlQyxVQUhYO0FBS2hCO0FBQ0FFLEVBQUFBLGFBQWEsRUFBRUosc0JBQVVLLE9BQVYsQ0FBa0JMLHNCQUFVTSxHQUE1QixDQU5DO0FBT2hCQyxFQUFBQSxR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QXZCLEdBQ0dqQyxhQUFhLENBQUNrQyxHQUFkLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLFdBQ2hCLGdDQUFDLFFBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRWpDLFFBRFo7QUFFRSxNQUFBLEdBQUcsWUFBS0UsYUFBYSxDQUFDOEIsSUFBRCxDQUFsQixjQUE0QkMsQ0FBNUIsQ0FGTDtBQUdFLE1BQUEsSUFBSSxFQUFFL0IsYUFBYSxDQUFDOEIsSUFBRCxDQUhyQjtBQUlFLE1BQUEsTUFBTSxFQUFFLGdCQUFBRSxDQUFDO0FBQUEsZUFBSXRDLFVBQVUsQ0FBQ29DLElBQUQsRUFBT0UsQ0FBUCxDQUFkO0FBQUE7QUFKWCxNQURnQjtBQUFBLEdBQWxCLENBREgsR0FTRztBQUFNLElBQUEsU0FBUyxZQUFLTixTQUFMO0FBQWYsS0FBZ0V2QixXQUFoRSxDQWxCTixDQVpzQjtBQUFBLENBQXhCOztBQWtDQXNCLGVBQWUsQ0FBQ3BDLFNBQWhCLEdBQTRCQSxTQUE1QjtlQUVlb0MsZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IERlbGV0ZSBmcm9tICcuLi9pY29ucy9kZWxldGUnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8vIHJlcXVpcmVkIHByb3BlcnRpZXNcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlSXRlbTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvLyBvcHRpb25hbCBwcm9wZXJ0aWVzXG4gIHNlbGVjdGVkSXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc3BsYXlPcHRpb246IFByb3BUeXBlcy5mdW5jLFxuICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0VGhlbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmNvbnN0IENoaWNrbGV0QnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEFjdGl2ZUJnfTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDRweCAxMHB4IDRweCAzcHg7XG4gIHBhZGRpbmc6IDJweCA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuY29uc3QgQ2hpY2tsZXRUYWcgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgOmhvdmVyIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgQ2hpY2tsZXQgPSAoe2Rpc2FibGVkLCBuYW1lLCByZW1vdmV9KSA9PiAoXG4gIDxDaGlja2xldEJ1dHRvbj5cbiAgICA8Q2hpY2tsZXRUYWc+e25hbWV9PC9DaGlja2xldFRhZz5cbiAgICA8RGVsZXRlIGhlaWdodD1cIjEwcHhcIiBvbkNsaWNrPXtkaXNhYmxlZCA/IG51bGwgOiByZW1vdmV9IC8+XG4gIDwvQ2hpY2tsZXRCdXR0b24+XG4pO1xuXG5jb25zdCBDaGlja2xldGVkSW5wdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknID9cbiAgICBwcm9wcy50aGVtZS5zZWNvbmRhcnlDaGlja2xldGVkSW5wdXQgOiBwcm9wcy50aGVtZS5jaGlja2xldGVkSW5wdXR9XG5cbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5oYXNQbGFjZWhvbGRlclxuICAgICAgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvclBsYWNlSG9sZGVyXG4gICAgICA6IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNvbnN0IENoaWNrbGV0ZWRJbnB1dCA9ICh7XG4gIGZvY3VzLFxuICBkaXNhYmxlZCxcbiAgZXJyb3IsXG4gIG9uQ2xpY2ssXG4gIGNsYXNzTmFtZSxcbiAgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuICBwbGFjZWhvbGRlciA9ICcnLFxuICByZW1vdmVJdGVtLFxuICBkaXNwbGF5T3B0aW9uID0gZCA9PiBkLFxuICBpbnB1dFRoZW1lXG59KSA9PiAoXG4gIDxDaGlja2xldGVkSW5wdXRDb250YWluZXJcbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY2hpY2tsZXRlZC1pbnB1dGB9XG4gICAgZm9jdXM9e2ZvY3VzfVxuICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICBlcnJvcj17ZXJyb3J9XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBpbnB1dFRoZW1lPXtpbnB1dFRoZW1lfVxuICAgIGhhc1BsYWNlaG9sZGVyPXshc2VsZWN0ZWRJdGVtcyB8fCAhc2VsZWN0ZWRJdGVtcy5sZW5ndGh9XG4gID5cbiAgICB7c2VsZWN0ZWRJdGVtcy5sZW5ndGggPiAwXG4gICAgICA/IHNlbGVjdGVkSXRlbXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgPENoaWNrbGV0XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBrZXk9e2Ake2Rpc3BsYXlPcHRpb24oaXRlbSl9XyR7aX1gfVxuICAgICAgICAgICAgbmFtZT17ZGlzcGxheU9wdGlvbihpdGVtKX1cbiAgICAgICAgICAgIHJlbW92ZT17ZSA9PiByZW1vdmVJdGVtKGl0ZW0sIGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgICA6IDxzcGFuIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjaGlja2xldGVkLWlucHV0X19wbGFjZWhvbGRlcmB9PntwbGFjZWhvbGRlcn08L3NwYW4+fVxuICA8L0NoaWNrbGV0ZWRJbnB1dENvbnRhaW5lcj5cbik7XG5cbkNoaWNrbGV0ZWRJbnB1dC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IENoaWNrbGV0ZWRJbnB1dDtcbiJdfQ==