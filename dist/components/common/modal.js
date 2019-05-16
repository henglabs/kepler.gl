"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalFooter = exports.ModalTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _icons = require("./icons");

var _styledComponents2 = require("./styled-components");

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  transition: ", ";\n\n  :focus {\n    outline: 0\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  z-index: 10002;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-top: 36px;\n  z-index: 10001;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n  position: relative;\n  z-index: 10003;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  justify-content: flex-end;\n  z-index: 10005;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 60%;\n  max-width: 960px;\n  padding: 24px 24px 40px;\n  position: absolute;\n  top: 92px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n  transition: ", ";\n  min-width: 600px;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin-right: auto;\n  font-size: 12px;\n  color: ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ModalContentWrapper = styled.div(_templateObject(), function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.labelColorLT;
}, function (props) {
  return props.cssStyle || '';
});
var CloseButton = styled.div(_templateObject2(), function (props) {
  return props.theme.titleColorLT;
});
var ModalTitle = styled.div(_templateObject3(), function (props) {
  return props.theme.modalTitleFontSize;
}, function (props) {
  return props.theme.modalTitleColor;
});
exports.ModalTitle = ModalTitle;
var StyledModalFooter = styled.div(_templateObject4());
var ModalContent = styled.div(_templateObject5());
var FooterActionWrapper = styled.div(_templateObject6());
var defaultCancelButton = {
  link: true,
  large: true,
  children: 'Cancel'
};
var defaultConfirmButton = {
  large: true,
  width: '160px',
  children: 'Confirm'
};

var ModalFooter = function ModalFooter(_ref) {
  var cancel = _ref.cancel,
      confirm = _ref.confirm,
      cancelButton = _ref.cancelButton,
      confirmButton = _ref.confirmButton;
  var cancelButtonProps = (0, _objectSpread2["default"])({}, defaultCancelButton, cancelButton);
  var confirmButtonProps = (0, _objectSpread2["default"])({}, defaultConfirmButton, confirmButton);
  return _react["default"].createElement(StyledModalFooter, {
    className: "modal--footer"
  }, _react["default"].createElement(FooterActionWrapper, null, _react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({}, cancelButtonProps, {
    onClick: cancel
  }), cancelButtonProps.children), _react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({}, confirmButtonProps, {
    onClick: confirm
  }), confirmButtonProps.children)));
};

exports.ModalFooter = ModalFooter;

var ModalDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ModalDialog, _Component);

  function ModalDialog() {
    (0, _classCallCheck2["default"])(this, ModalDialog);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ModalDialog).apply(this, arguments));
  }

  (0, _createClass2["default"])(ModalDialog, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({}, props, {
        ariaHideApp: false,
        style: {
          overlay: (0, _objectSpread2["default"])({
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10000,
            overflowY: 'auto',
            position: 'absolute'
          }, props.style)
        }
      }), _react["default"].createElement(ModalContentWrapper, {
        className: "modal--content",
        cssStyle: props.cssStyle,
        footer: props.footer
      }, props.close && _react["default"].createElement(CloseButton, {
        className: "modal--close",
        onClick: props.close
      }, _react["default"].createElement(_icons.Delete, {
        height: "14px"
      })), _react["default"].createElement("div", {
        style: {
          padding: '0px 72px'
        }
      }, props.title && _react["default"].createElement(ModalTitle, {
        className: "modal--title"
      }, props.title), _react["default"].createElement(ModalContent, {
        className: "content"
      }, props.children), props.footer && _react["default"].createElement(ModalFooter, {
        cancel: props.close,
        confirm: props.onConfirm,
        cancelButton: props.cancelButton,
        confirmButton: props.confirmButton
      }))));
    }
  }]);
  return ModalDialog;
}(_react.Component);

(0, _defineProperty2["default"])(ModalDialog, "propTypes", {
  footer: _propTypes["default"].bool,
  close: _propTypes["default"].func.isRequired,
  onConfirm: _propTypes["default"].func,
  onCancel: _propTypes["default"].func,
  confirmButton: _propTypes["default"].object,
  confirmButtonLabel: _propTypes["default"].string,
  cancelButton: _propTypes["default"].object,
  cancelButtonLabel: _propTypes["default"].string,
  cssStyle: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(ModalDialog, "defaultProps", {
  footer: false,
  close: function close() {},
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {},
  cancelButton: defaultCancelButton,
  confirmButton: defaultConfirmButton,
  cssStyle: []
});
var StyledModal = styled(ModalDialog)(_templateObject7(), function (props) {
  return props.theme.transition;
});
var _default = StyledModal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJsYWJlbENvbG9yTFQiLCJjc3NTdHlsZSIsIkNsb3NlQnV0dG9uIiwidGl0bGVDb2xvckxUIiwiTW9kYWxUaXRsZSIsIm1vZGFsVGl0bGVGb250U2l6ZSIsIm1vZGFsVGl0bGVDb2xvciIsIlN0eWxlZE1vZGFsRm9vdGVyIiwiTW9kYWxDb250ZW50IiwiRm9vdGVyQWN0aW9uV3JhcHBlciIsImRlZmF1bHRDYW5jZWxCdXR0b24iLCJsaW5rIiwibGFyZ2UiLCJjaGlsZHJlbiIsImRlZmF1bHRDb25maXJtQnV0dG9uIiwid2lkdGgiLCJNb2RhbEZvb3RlciIsImNhbmNlbCIsImNvbmZpcm0iLCJjYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uUHJvcHMiLCJjb25maXJtQnV0dG9uUHJvcHMiLCJNb2RhbERpYWxvZyIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6SW5kZXgiLCJvdmVyZmxvd1kiLCJwb3NpdGlvbiIsInN0eWxlIiwiZm9vdGVyIiwiY2xvc2UiLCJwYWRkaW5nIiwidGl0bGUiLCJvbkNvbmZpcm0iLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvbkNhbmNlbCIsIm9iamVjdCIsImNvbmZpcm1CdXR0b25MYWJlbCIsInN0cmluZyIsImNhbmNlbEJ1dHRvbkxhYmVsIiwiYXJyYXlPZiIsImFueSIsIlN0eWxlZE1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TWpCQyxFQUFBQSxrQkFBa0IsRUFBRU4sc0JBQVVPLE1BTmI7QUFPakJ4QixFQUFBQSxZQUFZLEVBQUVpQixzQkFBVUssTUFQUDtBQVFqQkcsRUFBQUEsaUJBQWlCLEVBQUVSLHNCQUFVTyxNQVJaO0FBU2pCMUMsRUFBQUEsUUFBUSxFQUFFbUMsc0JBQVVTLE9BQVYsQ0FBa0JULHNCQUFVVSxHQUE1QjtBQVRPLEM7aUNBRGZ2QixXLGtCQWFrQjtBQUNwQk8sRUFBQUEsTUFBTSxFQUFFLEtBRFk7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxpQkFBTSxDQUFFLENBRks7QUFHcEJHLEVBQUFBLFNBQVMsRUFBRSxxQkFBTSxDQUFFLENBSEM7QUFJcEJNLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBSkU7QUFLcEJyQixFQUFBQSxZQUFZLEVBQUVULG1CQUxNO0FBTXBCVSxFQUFBQSxhQUFhLEVBQUVOLG9CQU5LO0FBT3BCYixFQUFBQSxRQUFRLEVBQUU7QUFQVSxDO0FBMER4QixJQUFNOEMsV0FBVyxHQUFHcEQsTUFBTSxDQUFDNEIsV0FBRCxDQUFULHFCQU1ELFVBQUExQixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FOSixDQUFqQjtlQWFlZ0QsVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQge0RlbGV0ZX0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgTW9kYWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA2MCU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIHBhZGRpbmc6IDI0cHggMjRweCA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTJweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIG1pbi13aWR0aDogNjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yTFR9O1xuICAke3Byb3BzID0+IHByb3BzLmNzc1N0eWxlIHx8ICcnfTtcbmA7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgei1pbmRleDogMTAwMDU7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVGb250U2l6ZX07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDM7XG5gO1xuXG5jb25zdCBTdHlsZWRNb2RhbEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xuICB6LWluZGV4OiAxMDAwMTtcbmA7XG5cbmNvbnN0IE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDI7XG5gO1xuXG5jb25zdCBGb290ZXJBY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IGRlZmF1bHRDYW5jZWxCdXR0b24gPSB7XG4gIGxpbms6IHRydWUsXG4gIGxhcmdlOiB0cnVlLFxuICBjaGlsZHJlbjogJ0NhbmNlbCdcbn07XG5cbmNvbnN0IGRlZmF1bHRDb25maXJtQnV0dG9uID0ge1xuICBsYXJnZTogdHJ1ZSxcbiAgd2lkdGg6ICcxNjBweCcsXG4gIGNoaWxkcmVuOiAnQ29uZmlybSdcbn07XG5cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9ICh7XG4gIGNhbmNlbCxcbiAgY29uZmlybSxcbiAgY2FuY2VsQnV0dG9uLFxuICBjb25maXJtQnV0dG9uXG59KSA9PiB7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvblByb3BzID0gey4uLmRlZmF1bHRDYW5jZWxCdXR0b24sIC4uLmNhbmNlbEJ1dHRvbn07XG4gIGNvbnN0IGNvbmZpcm1CdXR0b25Qcm9wcyA9IHsuLi5kZWZhdWx0Q29uZmlybUJ1dHRvbiwgLi4uY29uZmlybUJ1dHRvbn07XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZE1vZGFsRm9vdGVyIGNsYXNzTmFtZT1cIm1vZGFsLS1mb290ZXJcIj5cbiAgICAgIDxGb290ZXJBY3Rpb25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHsuLi5jYW5jZWxCdXR0b25Qcm9wc30gb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICB7Y2FuY2VsQnV0dG9uUHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHsuLi5jb25maXJtQnV0dG9uUHJvcHN9IG9uQ2xpY2s9e2NvbmZpcm19PlxuICAgICAgICAgIHtjb25maXJtQnV0dG9uUHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb290ZXJBY3Rpb25XcmFwcGVyPlxuICAgIDwvU3R5bGVkTW9kYWxGb290ZXI+XG4gICk7XG59O1xuXG5jbGFzcyBNb2RhbERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb25maXJtQnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbmZpcm1CdXR0b25MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYW5jZWxCdXR0b246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2FuY2VsQnV0dG9uTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3NzU3R5bGU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb290ZXI6IGZhbHNlLFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBvbkNvbmZpcm06ICgpID0+IHt9LFxuICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICBjYW5jZWxCdXR0b246IGRlZmF1bHRDYW5jZWxCdXR0b24sXG4gICAgY29uZmlybUJ1dHRvbjogZGVmYXVsdENvbmZpcm1CdXR0b24sXG4gICAgY3NzU3R5bGU6IFtdXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgICAgIHpJbmRleDogMTAwMDAsXG4gICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgLy8gaW4gY2FzZSB3ZSB3YW50IHRvIG92ZXJyaWRlIHRoZSBtb2RhbCBkaWFsb2cgc3R5bGVcbiAgICAgICAgICAgIC4uLnByb3BzLnN0eWxlXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TW9kYWxDb250ZW50V3JhcHBlclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsLS1jb250ZW50XCJcbiAgICAgICAgICBjc3NTdHlsZT17cHJvcHMuY3NzU3R5bGV9XG4gICAgICAgICAgZm9vdGVyPXtwcm9wcy5mb290ZXJ9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvcHMuY2xvc2UgJiYgKFxuICAgICAgICAgICAgPENsb3NlQnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLS1jbG9zZVwiIG9uQ2xpY2s9e3Byb3BzLmNsb3NlfT5cbiAgICAgICAgICAgICAgPERlbGV0ZSBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgIDwvQ2xvc2VCdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzBweCA3MnB4J319PlxuICAgICAgICAgICAge3Byb3BzLnRpdGxlICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsVGl0bGUgY2xhc3NOYW1lPVwibW9kYWwtLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvTW9kYWxUaXRsZT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8TW9kYWxDb250ZW50IGNsYXNzTmFtZT1cImNvbnRlbnRcIj57cHJvcHMuY2hpbGRyZW59PC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICB7cHJvcHMuZm9vdGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyXG4gICAgICAgICAgICAgICAgY2FuY2VsPXtwcm9wcy5jbG9zZX1cbiAgICAgICAgICAgICAgICBjb25maXJtPXtwcm9wcy5vbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uPXtwcm9wcy5jYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbj17cHJvcHMuY29uZmlybUJ1dHRvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9Nb2RhbENvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkKE1vZGFsRGlhbG9nKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IDBcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVkTW9kYWw7XG4iXX0=