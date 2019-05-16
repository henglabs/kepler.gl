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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 1px;\n  color: ", ";\n  font-size: 11px;\n  line-height: 20px;\n  margin: 3px 10px 3px 3px;\n  padding: 4px 6px;\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 8px);\n\n  :hover {\n    color: ", ";\n  }\n"]);

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
  placeholder: _propTypes["default"].string
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
  return props.theme.chickletedInput;
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
  } : _ref2$displayOption;
  return _react["default"].createElement(ChickletedInputContainer, {
    className: "".concat(className, " chickleted-input"),
    focus: focus,
    disabled: disabled,
    error: error,
    onClick: onClick
  }, selectedItems.length > 0 ? selectedItems.map(function (item, i) {
    return _react["default"].createElement(Chicklet, {
      disabled: disabled,
      key: "".concat(displayOption(item), "_").concat(i),
      name: displayOption(item),
      remove: function remove(e) {
        return removeItem(item, e);
      }
    });
  }) : placeholder);
};

ChickletedInput.propTypes = propTypes;
var _default = ChickletedInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2NoaWNrbGV0ZWQtaW5wdXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25DbGljayIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwicmVtb3ZlSXRlbSIsInNlbGVjdGVkSXRlbXMiLCJhcnJheU9mIiwiYW55IiwiZGlzYWJsZWQiLCJib29sIiwiZGlzcGxheU9wdGlvbiIsImZvY3VzIiwiZXJyb3IiLCJwbGFjZWhvbGRlciIsInN0cmluZyIsIkNoaWNrbGV0QnV0dG9uIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQWN0aXZlQmciLCJ0ZXh0Q29sb3IiLCJ0ZXh0Q29sb3JIbCIsIkNoaWNrbGV0VGFnIiwic3BhbiIsIkNoaWNrbGV0IiwibmFtZSIsInJlbW92ZSIsIkNoaWNrbGV0ZWRJbnB1dENvbnRhaW5lciIsImNoaWNrbGV0ZWRJbnB1dCIsIkNoaWNrbGV0ZWRJbnB1dCIsImNsYXNzTmFtZSIsImQiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaSIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHO0FBQ2hCO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRUMsc0JBQVVDLElBQVYsQ0FBZUMsVUFGUjtBQUdoQkMsRUFBQUEsVUFBVSxFQUFFSCxzQkFBVUMsSUFBVixDQUFlQyxVQUhYO0FBS2hCO0FBQ0FFLEVBQUFBLGFBQWEsRUFBRUosc0JBQVVLLE9BQVYsQ0FBa0JMLHNCQUFVTSxHQUE1QixDQU5DO0FBT2hCQyxFQUFBQSxRQUFRLEVBQUVQLHNCQUFVUSxJQVBKO0FBUWhCQyxFQUFBQSxhQUFhLEVBQUVULHNCQUFVQyxJQVJUO0FBU2hCUyxFQUFBQSxLQUFLLEVBQUVWLHNCQUFVUSxJQVREO0FB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ZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRGVsZXRlIGZyb20gJy4uL2ljb25zL2RlbGV0ZSc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLy8gcmVxdWlyZWQgcHJvcGVydGllc1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW1vdmVJdGVtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8vIG9wdGlvbmFsIHByb3BlcnRpZXNcbiAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuY29uc3QgQ2hpY2tsZXRCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQWN0aXZlQmd9O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogM3B4IDEwcHggM3B4IDNweDtcbiAgcGFkZGluZzogNHB4IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA4cHgpO1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICB9XG5gO1xuXG5jb25zdCBDaGlja2xldFRhZyA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICA6aG92ZXIge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5gO1xuXG5jb25zdCBDaGlja2xldCA9ICh7ZGlzYWJsZWQsIG5hbWUsIHJlbW92ZX0pID0+IChcbiAgPENoaWNrbGV0QnV0dG9uPlxuICAgIDxDaGlja2xldFRhZz57bmFtZX08L0NoaWNrbGV0VGFnPlxuICAgIDxEZWxldGUgaGVpZ2h0PVwiMTBweFwiIG9uQ2xpY2s9e2Rpc2FibGVkID8gbnVsbCA6IHJlbW92ZX0gLz5cbiAgPC9DaGlja2xldEJ1dHRvbj5cbik7XG5cbmNvbnN0IENoaWNrbGV0ZWRJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2hpY2tsZXRlZElucHV0fVxuYDtcblxuY29uc3QgQ2hpY2tsZXRlZElucHV0ID0gKHtcbiAgZm9jdXMsXG4gIGRpc2FibGVkLFxuICBlcnJvcixcbiAgb25DbGljayxcbiAgY2xhc3NOYW1lLFxuICBzZWxlY3RlZEl0ZW1zID0gW10sXG4gIHBsYWNlaG9sZGVyID0gJycsXG4gIHJlbW92ZUl0ZW0sXG4gIGRpc3BsYXlPcHRpb24gPSBkID0+IGRcbn0pID0+IChcbiAgPENoaWNrbGV0ZWRJbnB1dENvbnRhaW5lclxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjaGlja2xldGVkLWlucHV0YH1cbiAgICBmb2N1cz17Zm9jdXN9XG4gICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgIGVycm9yPXtlcnJvcn1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICA+XG4gICAge3NlbGVjdGVkSXRlbXMubGVuZ3RoID4gMFxuICAgICAgPyBzZWxlY3RlZEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxDaGlja2xldFxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAga2V5PXtgJHtkaXNwbGF5T3B0aW9uKGl0ZW0pfV8ke2l9YH1cbiAgICAgICAgICAgIG5hbWU9e2Rpc3BsYXlPcHRpb24oaXRlbSl9XG4gICAgICAgICAgICByZW1vdmU9e2UgPT4gcmVtb3ZlSXRlbShpdGVtLCBlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKVxuICAgICAgOiBwbGFjZWhvbGRlcn1cbiAgPC9DaGlja2xldGVkSW5wdXRDb250YWluZXI+XG4pO1xuXG5DaGlja2xldGVkSW5wdXQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBDaGlja2xldGVkSW5wdXQ7XG4iXX0=