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

var _mediaBreakpoints = require("../../styles/media-breakpoints");

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 0;\n    padding-right: 0;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 24px;\n    padding-right: 24px; \n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 0;\n  left: 0;\n  z-index: 10000;\n  transition: ", ";\n  padding-left: 40px;\n  padding-right: 40px; \n\n  ", ";\n  \n  ", ";\n\n  :focus {\n    outline: 0\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  justify-content: flex-end;\n  z-index: 10005;\n  position: absolute;\n  top: 24px;\n  right: 24px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 16px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 24px;  \n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-top: 24px;\n  ", ";\n  \n  ", ";\n  z-index: 10001;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n  position: relative;\n  z-index: 10003;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  z-index: 10002;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 12px 36px 24px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow-y: scroll;\n  max-width: 960px;\n  max-height: 70vh;\n  padding: 24px 72px 40px;\n  position: relative;\n  top: 92px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n  transition: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  color: ", ";\n  ", ";\n  ", "\n"]);

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
}, _mediaBreakpoints.media.portable(_templateObject2()));
var ModalContent = styled.div(_templateObject3());
var ModalTitle = styled.div(_templateObject4(), function (props) {
  return props.theme.modalTitleFontSize;
}, function (props) {
  return props.theme.modalTitleColor;
});
exports.ModalTitle = ModalTitle;
var StyledModalFooter = styled.div(_templateObject5(), _mediaBreakpoints.media.portable(_templateObject6()), _mediaBreakpoints.media.palm(_templateObject7()));
var CloseButton = styled.div(_templateObject8(), function (props) {
  return props.theme.titleColorLT;
});
var FooterActionWrapper = styled.div(_templateObject9());
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
      return _react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({
        className: this.props.className
      }, props, {
        ariaHideApp: false,
        style: {
          overlay: (0, _objectSpread2["default"])({
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 10000
          }, props.style)
        }
      }), _react["default"].createElement(ModalContentWrapper, {
        className: "modal--wrapper",
        cssStyle: props.cssStyle,
        footer: props.footer
      }, props.close && _react["default"].createElement(CloseButton, {
        className: "modal--close",
        onClick: props.close
      }, _react["default"].createElement(_icons.Delete, {
        height: "14px"
      })), _react["default"].createElement("div", null, props.title && _react["default"].createElement(ModalTitle, {
        className: "modal--title"
      }, props.title), _react["default"].createElement(ModalContent, {
        className: "modal--body"
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
var StyledModal = styled(ModalDialog)(_templateObject10(), function (props) {
  return props.theme.transition;
}, _mediaBreakpoints.media.portable(_templateObject11()), _mediaBreakpoints.media.palm(_templateObject12()));
var _default = StyledModal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tb2RhbC5qcyJdLCJuYW1lcyI6WyJNb2RhbENvbnRlbnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRyYW5zaXRpb24iLCJsYWJlbENvbG9yTFQiLCJjc3NTdHlsZSIsIm1lZGlhIiwicG9ydGFibGUiLCJNb2RhbENvbnRlbnQiLCJNb2RhbFRpdGxlIiwibW9kYWxUaXRsZUZvbnRTaXplIiwibW9kYWxUaXRsZUNvbG9yIiwiU3R5bGVkTW9kYWxGb290ZXIiLCJwYWxtIiwiQ2xvc2VCdXR0b24iLCJ0aXRsZUNvbG9yTFQiLCJGb290ZXJBY3Rpb25XcmFwcGVyIiwiZGVmYXVsdENhbmNlbEJ1dHRvbiIsImxpbmsiLCJsYXJnZSIsImNoaWxkcmVuIiwiZGVmYXVsdENvbmZpcm1CdXR0b24iLCJ3aWR0aCIsIk1vZGFsRm9vdGVyIiwiY2FuY2VsIiwiY29uZmlybSIsImNhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b25Qcm9wcyIsImNvbmZpcm1CdXR0b25Qcm9wcyIsIk1vZGFsRGlhbG9nIiwiY2xhc3NOYW1lIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsInN0eWxlIiwiZm9vdGVyIiwiY2xvc2UiLCJ0aXRsZSIsIm9uQ29uZmlybSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImJvb2wiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9uQ2FuY2VsIiwib2JqZWN0IiwiY29uZmlybUJ1dHRvbkxhYmVsIiwic3RyaW5nIiwiY2FuY2VsQnV0dG9uTGFiZWwiLCJhcnJheU9mIiwiYW55IiwiU3R5bGVkTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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UUFBUSxFQUFFSixzQkFBVUUsSUFKSDtBQUtqQmhCLEVBQUFBLGFBQWEsRUFBRWMsc0JBQVVLLE1BTFI7QUFNakJDLEVBQUFBLGtCQUFrQixFQUFFTixzQkFBVU8sTUFOYjtBQU9qQnRCLEVBQUFBLFlBQVksRUFBRWUsc0JBQVVLLE1BUFA7QUFRakJHLEVBQUFBLGlCQUFpQixFQUFFUixzQkFBVU8sTUFSWjtBQVNqQjNDLEVBQUFBLFFBQVEsRUFBRW9DLHNCQUFVUyxPQUFWLENBQWtCVCxzQkFBVVUsR0FBNUI7QUFUTyxDO2lDQURmckIsVyxrQkFha0I7QUFDcEJNLEVBQUFBLE1BQU0sRUFBRSxLQURZO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsaUJBQU0sQ0FBRSxDQUZLO0FBR3BCRSxFQUFBQSxTQUFTLEVBQUUscUJBQU0sQ0FBRSxDQUhDO0FBSXBCTSxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUpFO0FBS3BCbkIsRUFBQUEsWUFBWSxFQUFFVCxtQkFMTTtBQU1wQlUsRUFBQUEsYUFBYSxFQUFFTixvQkFOSztBQU9wQmhCLEVBQUFBLFFBQVEsRUFBRTtBQVBVLEM7QUF5RHhCLElBQU0rQyxXQUFXLEdBQUdyRCxNQUFNLENBQUMrQixXQUFELENBQVQsc0JBSUQsVUFBQTdCLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQUpKLEVBUWJHLHdCQUFNQyxRQVJPLHVCQWFiRCx3QkFBTU8sSUFiTyxzQkFBakI7ZUF1QmV1QyxXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB7RGVsZXRlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzJztcblxuY29uc3QgTW9kYWxDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgcGFkZGluZzogMjRweCA3MnB4IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA5MnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yTFR9O1xuICAke3Byb3BzID0+IHByb3BzLmNzc1N0eWxlIHx8ICcnfTtcbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBwYWRkaW5nOiAxMnB4IDM2cHggMjRweDtcbiAgYH1cbmA7XG5cbmNvbnN0IE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDI7XG5gO1xuXG5leHBvcnQgY29uc3QgTW9kYWxUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlRm9udFNpemV9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlQ29sb3J9O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDAzO1xuYDtcblxuY29uc3QgU3R5bGVkTW9kYWxGb290ZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBwYWRkaW5nLXRvcDogMjRweDsgIFxuICBgfTtcbiAgXG4gICR7bWVkaWEucGFsbWBcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgYH07XG4gIHotaW5kZXg6IDEwMDAxO1xuYDtcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB6LWluZGV4OiAxMDAwNTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIHJpZ2h0OiAyNHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXJBY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IGRlZmF1bHRDYW5jZWxCdXR0b24gPSB7XG4gIGxpbms6IHRydWUsXG4gIGxhcmdlOiB0cnVlLFxuICBjaGlsZHJlbjogJ0NhbmNlbCdcbn07XG5cbmNvbnN0IGRlZmF1bHRDb25maXJtQnV0dG9uID0ge1xuICBsYXJnZTogdHJ1ZSxcbiAgd2lkdGg6ICcxNjBweCcsXG4gIGNoaWxkcmVuOiAnQ29uZmlybSdcbn07XG5cbmV4cG9ydCBjb25zdCBNb2RhbEZvb3RlciA9ICh7XG4gIGNhbmNlbCxcbiAgY29uZmlybSxcbiAgY2FuY2VsQnV0dG9uLFxuICBjb25maXJtQnV0dG9uXG59KSA9PiB7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvblByb3BzID0gey4uLmRlZmF1bHRDYW5jZWxCdXR0b24sIC4uLmNhbmNlbEJ1dHRvbn07XG4gIGNvbnN0IGNvbmZpcm1CdXR0b25Qcm9wcyA9IHsuLi5kZWZhdWx0Q29uZmlybUJ1dHRvbiwgLi4uY29uZmlybUJ1dHRvbn07XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZE1vZGFsRm9vdGVyIGNsYXNzTmFtZT1cIm1vZGFsLS1mb290ZXJcIj5cbiAgICAgIDxGb290ZXJBY3Rpb25XcmFwcGVyPlxuICAgICAgICA8QnV0dG9uIHsuLi5jYW5jZWxCdXR0b25Qcm9wc30gb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICB7Y2FuY2VsQnV0dG9uUHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHsuLi5jb25maXJtQnV0dG9uUHJvcHN9IG9uQ2xpY2s9e2NvbmZpcm19PlxuICAgICAgICAgIHtjb25maXJtQnV0dG9uUHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb290ZXJBY3Rpb25XcmFwcGVyPlxuICAgIDwvU3R5bGVkTW9kYWxGb290ZXI+XG4gICk7XG59O1xuXG5jbGFzcyBNb2RhbERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9vdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb25maXJtQnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNvbmZpcm1CdXR0b25MYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjYW5jZWxCdXR0b246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2FuY2VsQnV0dG9uTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3NzU3R5bGU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb290ZXI6IGZhbHNlLFxuICAgIGNsb3NlOiAoKSA9PiB7fSxcbiAgICBvbkNvbmZpcm06ICgpID0+IHt9LFxuICAgIG9uQ2FuY2VsOiAoKSA9PiB7fSxcbiAgICBjYW5jZWxCdXR0b246IGRlZmF1bHRDYW5jZWxCdXR0b24sXG4gICAgY29uZmlybUJ1dHRvbjogZGVmYXVsdENvbmZpcm1CdXR0b24sXG4gICAgY3NzU3R5bGU6IFtdXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtwcm9wc30gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBhcmlhSGlkZUFwcD17ZmFsc2V9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgICAgICAgIHpJbmRleDogMTAwMDAsXG4gICAgICAgICAgICAvLyBpbiBjYXNlIHdlIHdhbnQgdG8gb3ZlcnJpZGUgdGhlIG1vZGFsIGRpYWxvZyBzdHlsZVxuICAgICAgICAgICAgLi4ucHJvcHMuc3R5bGVcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxNb2RhbENvbnRlbnRXcmFwcGVyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtLXdyYXBwZXJcIlxuICAgICAgICAgIGNzc1N0eWxlPXtwcm9wcy5jc3NTdHlsZX1cbiAgICAgICAgICBmb290ZXI9e3Byb3BzLmZvb3Rlcn1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcm9wcy5jbG9zZSAmJiAoXG4gICAgICAgICAgICA8Q2xvc2VCdXR0b24gY2xhc3NOYW1lPVwibW9kYWwtLWNsb3NlXCIgb25DbGljaz17cHJvcHMuY2xvc2V9PlxuICAgICAgICAgICAgICA8RGVsZXRlIGhlaWdodD1cIjE0cHhcIiAvPlxuICAgICAgICAgICAgPC9DbG9zZUJ1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgKFxuICAgICAgICAgICAgICA8TW9kYWxUaXRsZSBjbGFzc05hbWU9XCJtb2RhbC0tdGl0bGVcIj57cHJvcHMudGl0bGV9PC9Nb2RhbFRpdGxlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxNb2RhbENvbnRlbnQgY2xhc3NOYW1lPVwibW9kYWwtLWJvZHlcIj57cHJvcHMuY2hpbGRyZW59PC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICB7cHJvcHMuZm9vdGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyXG4gICAgICAgICAgICAgICAgY2FuY2VsPXtwcm9wcy5jbG9zZX1cbiAgICAgICAgICAgICAgICBjb25maXJtPXtwcm9wcy5vbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uPXtwcm9wcy5jYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbj17cHJvcHMuY29uZmlybUJ1dHRvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9Nb2RhbENvbnRlbnRXcmFwcGVyPlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkKE1vZGFsRGlhbG9nKWBcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwMDtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4OyBcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4OyBcbiAgYH07XG4gIFxuICAke21lZGlhLnBhbG1gXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGB9O1xuXG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogMFxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRNb2RhbDtcbiJdfQ==