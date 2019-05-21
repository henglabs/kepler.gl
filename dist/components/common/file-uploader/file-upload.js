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

var _uploadButton = _interopRequireDefault(require("./upload-button"));

var _icons = require("../icons");

var _loadingSpinner = _interopRequireDefault(require("../loading-spinner"));

var _utils = require("../../../utils/utils");

var _mediaBreakpoints = require("../../../styles/media-breakpoints");

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 auto;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n  ", ";\n  ", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .filter-upload__input {\n    visibility: hidden;\n    height: 0;\n    position: absolute;\n  }\n\n  .file-drop {\n    position: relative;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 24px;\n  ", ";\n  ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-bottom: 48px;\n  \n  ", ";\n  ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  height: 36px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 16px 4px 0;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: white;\n  border-radius: 4px;\n  border-style: dashed;\n  border-width: 1px;\n  border-color: ", ";\n  text-align: center;\n  width: 100%;\n  padding: 48px 8px 0;\n\n  .file-upload-or {\n    color: ", ";\n    padding-right: 4px;\n  }\n  \n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 12px;\n  \n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FileDrop = typeof document !== 'undefined' ? require('react-file-drop') : null; // File.type is not reliable if the OS does not have a
// registered mapping for the extension.
// NOTE: Shapefiles must be in a compressed format since
// it requires multiple files to be present.

var defaultValidFileExt = ['csv', // 'tar.gz',
// 'tgz',
// 'zip',
// 'gpx',
// 'kml',
'json', 'geojson'];
var MESSAGE = ' Drag & Drop Your File(s) Here';
var CHROME_MSG = '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari';
var DISCLAIMER = '*Kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.';
var CONFIG_UPLOAD_MESSAGE = 'Upload data files or upload a saved map via previously exported single Json of both config and data';
var fileIconColor = '#D3D8E0';
var StyledUploadMessage = styled.div(_templateObject(), function (props) {
  return props.theme.textColorLT;
}, _mediaBreakpoints.media.portable(_templateObject2()));
var WarningMsg = styled.span(_templateObject3(), function (props) {
  return props.theme.errorColor;
});
var PositiveMsg = styled.span(_templateObject4(), function (props) {
  return props.theme.primaryBtnActBgd;
});
var StyledFileDrop = styled.div(_templateObject5(), function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
}, _mediaBreakpoints.media.portable(_templateObject6()));
var MsgWrapper = styled.div(_templateObject7(), function (props) {
  return props.theme.modalTitleColor;
});
var StyledDragNDropIcon = styled.div(_templateObject8(), fileIconColor, _mediaBreakpoints.media.portable(_templateObject9()), _mediaBreakpoints.media.palm(_templateObject10()));
var StyledFileTypeFow = styled.div(_templateObject11(), _mediaBreakpoints.media.portable(_templateObject12()), _mediaBreakpoints.media.palm(_templateObject13()));
var StyledFileUpload = styled.div(_templateObject14());
var StyledMessage = styled.div(_templateObject15());
var StyledDragFileWrapper = styled.div(_templateObject16(), _mediaBreakpoints.media.portable(_templateObject17()), _mediaBreakpoints.media.portable(_templateObject18()));
var StyledDisclaimer = styled(StyledMessage)(_templateObject19());

var FileUpload =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FileUpload, _Component);

  function FileUpload() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, FileUpload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FileUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      dragOver: false,
      files: [],
      errorFiles: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isValidFileType", function (filename) {
      var validFileExt = _this.props.validFileExt;
      var fileExt = validFileExt.find(function (ext) {
        return filename.endsWith(ext);
      });
      return Boolean(fileExt);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFileInput", function (files, e) {
      if (e) {
        e.stopPropagation();
      }

      var nextState = {
        files: [],
        errorFiles: [],
        dragOver: false
      };

      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file && _this._isValidFileType(file.name)) {
          nextState.files.push(file);
        } else {
          nextState.errorFiles.push(file.name);
        }
      }

      _this.setState(nextState, function () {
        return nextState.files.length ? _this.props.onFileUpload(nextState.files) : null;
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleDragState", function (newState) {
      _this.setState({
        dragOver: newState
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(FileUpload, [{
    key: "_renderMessage",
    value: function _renderMessage() {
      var _this$state = this.state,
          errorFiles = _this$state.errorFiles,
          files = _this$state.files;

      if (errorFiles.length) {
        return _react["default"].createElement(WarningMsg, null, "File ".concat(errorFiles.join(', '), " is not supported."));
      }

      if (!files.length) {
        return null;
      }

      return _react["default"].createElement(StyledMessage, {
        className: "file-uploader__message"
      }, _react["default"].createElement("div", null, "Uploading..."), _react["default"].createElement(PositiveMsg, null, "".concat(files.map(function (f) {
        return f.name;
      }).join(' and '), "...")), _react["default"].createElement(_loadingSpinner["default"], {
        size: 20
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          dragOver = _this$state2.dragOver,
          files = _this$state2.files;
      var validFileExt = this.props.validFileExt;
      return _react["default"].createElement(StyledFileUpload, {
        className: "file-uploader",
        ref: function ref(cmp) {
          return _this2.frame = cmp;
        }
      }, _react["default"].createElement("input", {
        className: "filter-upload__input",
        type: "file",
        onChange: this._onChange
      }), FileDrop ? _react["default"].createElement(FileDrop, {
        frame: this.frame,
        targetAlwaysVisible: true,
        onDragOver: function onDragOver() {
          return _this2._toggleDragState(true);
        },
        onDragLeave: function onDragLeave() {
          return _this2._toggleDragState(false);
        },
        onDrop: this._handleFileInput
      }, _react["default"].createElement(StyledUploadMessage, {
        className: "file-upload__message"
      }, CONFIG_UPLOAD_MESSAGE), _react["default"].createElement(StyledFileDrop, {
        dragOver: dragOver
      }, _react["default"].createElement("div", {
        style: {
          opacity: dragOver ? 0.5 : 1
        }
      }, _react["default"].createElement(StyledDragNDropIcon, null, _react["default"].createElement(StyledFileTypeFow, {
        className: "file-type-row"
      }, validFileExt.map(function (ext) {
        return _react["default"].createElement(_icons.FileType, {
          key: ext,
          ext: ext,
          height: "50px",
          fontSize: "9px"
        });
      })), _react["default"].createElement(_icons.DragNDrop, {
        height: "44px"
      })), _react["default"].createElement("div", null, this._renderMessage())), !files.length ? _react["default"].createElement(StyledDragFileWrapper, null, _react["default"].createElement(MsgWrapper, null, MESSAGE), _react["default"].createElement("span", {
        className: "file-upload-or"
      }, "or"), _react["default"].createElement(_uploadButton["default"], {
        onUpload: this._handleFileInput
      }, "browse your files")) : null, _react["default"].createElement(StyledDisclaimer, null, DISCLAIMER))) : null, _react["default"].createElement(WarningMsg, null, (0, _utils.isChrome)() ? CHROME_MSG : ''));
    }
  }]);
  return FileUpload;
}(_react.Component);

exports["default"] = FileUpload;
(0, _defineProperty2["default"])(FileUpload, "defaultProps", {
  validFileExt: defaultValidFileExt
});
(0, _defineProperty2["default"])(FileUpload, "propTypes", {
  onFileUpload: _propTypes["default"].func.isRequired,
  validFileExt: _propTypes["default"].arrayOf(_propTypes["default"].string)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLmpzIl0sIm5hbWVzIjpbIkZpbGVEcm9wIiwiZG9jdW1lbnQiLCJyZXF1aXJlIiwiZGVmYXVsdFZhbGlkRmlsZUV4dCIsIk1FU1NBR0UiLCJDSFJPTUVfTVNHIiwiRElTQ0xBSU1FUiIsIkNPTkZJR19VUExPQURfTUVTU0FHRSIsImZpbGVJY29uQ29sb3IiLCJTdHlsZWRVcGxvYWRNZXNzYWdlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckxUIiwibWVkaWEiLCJwb3J0YWJsZSIsIldhcm5pbmdNc2ciLCJzcGFuIiwiZXJyb3JDb2xvciIsIlBvc2l0aXZlTXNnIiwicHJpbWFyeUJ0bkFjdEJnZCIsIlN0eWxlZEZpbGVEcm9wIiwic3VidGV4dENvbG9yTFQiLCJsaW5rQnRuQ29sb3IiLCJNc2dXcmFwcGVyIiwibW9kYWxUaXRsZUNvbG9yIiwiU3R5bGVkRHJhZ05Ecm9wSWNvbiIsInBhbG0iLCJTdHlsZWRGaWxlVHlwZUZvdyIsIlN0eWxlZEZpbGVVcGxvYWQiLCJTdHlsZWRNZXNzYWdlIiwiU3R5bGVkRHJhZ0ZpbGVXcmFwcGVyIiwiU3R5bGVkRGlzY2xhaW1lciIsIkZpbGVVcGxvYWQiLCJkcmFnT3ZlciIsImZpbGVzIiwiZXJyb3JGaWxlcyIsImZpbGVuYW1lIiwidmFsaWRGaWxlRXh0IiwiZmlsZUV4dCIsImZpbmQiLCJleHQiLCJlbmRzV2l0aCIsIkJvb2xlYW4iLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwibmV4dFN0YXRlIiwiaSIsImxlbmd0aCIsImZpbGUiLCJfaXNWYWxpZEZpbGVUeXBlIiwibmFtZSIsInB1c2giLCJzZXRTdGF0ZSIsIm9uRmlsZVVwbG9hZCIsIm5ld1N0YXRlIiwic3RhdGUiLCJqb2luIiwibWFwIiwiZiIsImNtcCIsImZyYW1lIiwiX29uQ2hhbmdlIiwiX3RvZ2dsZURyYWdTdGF0ZSIsIl9oYW5kbGVGaWxlSW5wdXQiLCJvcGFjaXR5IiwiX3JlbmRlck1lc3NhZ2UiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUNaLE9BQU9DLFFBQVAsS0FBb0IsV0FBcEIsR0FBa0NDLE9BQU8sQ0FBQyxpQkFBRCxDQUF6QyxHQUErRCxJQURqRSxDLENBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsQ0FDMUIsS0FEMEIsRUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BUDBCLEVBUTFCLFNBUjBCLENBQTVCO0FBV0EsSUFBTUMsT0FBTyxHQUFHLGdDQUFoQjtBQUNBLElBQU1DLFVBQVUsR0FDZCxtRkFERjtBQUVBLElBQU1DLFVBQVUsR0FBRyw4R0FDakIsbURBREY7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxxR0FBOUI7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBdEI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUNkLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQURTLEVBS3JCQyx3QkFBTUMsUUFMZSxxQkFBekI7QUFVQSxJQUFNQyxVQUFVLEdBQUdQLE1BQU0sQ0FBQ1EsSUFBVixx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UUFBUSxFQUFDO0FBQXJELFVBRG1CO0FBQUEsT0FBcEIsQ0FESCxDQURGLEVBTUUsZ0NBQUMsZ0JBQUQ7QUFBVyxRQUFBLE1BQU0sRUFBQztBQUFsQixRQU5GLENBREYsRUFTRSw2Q0FBTSxLQUFLeUIsY0FBTCxFQUFOLENBVEYsQ0FERixFQVlHLENBQUMvQixLQUFLLENBQUNhLE1BQVAsR0FDRyxnQ0FBQyxxQkFBRCxRQUNFLGdDQUFDLFVBQUQsUUFBYTdDLE9BQWIsQ0FERixFQUVFO0FBQU0sUUFBQSxTQUFTLEVBQUM7QUFBaEIsY0FGRixFQUdFLGdDQUFDLHdCQUFEO0FBQWMsUUFBQSxRQUFRLEVBQUUsS0FBSzZEO0FBQTdCLDZCQUhGLENBREgsR0FRRyxJQXBCTixFQXFCRSxnQ0FBQyxnQkFBRCxRQUFtQjNELFVBQW5CLENBckJGLENBUkYsQ0FETyxHQWlDTCxJQTFDTixFQTRDRSxnQ0FBQyxVQUFELFFBQWEseUJBQWFELFVBQWIsR0FBMEIsRUFBdkMsQ0E1Q0YsQ0FERjtBQWdERDs7O0VBL0hxQytELGdCOzs7aUNBQW5CbEMsVSxrQkFDRztBQUNwQkssRUFBQUEsWUFBWSxFQUFFcEM7QUFETSxDO2lDQURIK0IsVSxlQUtBO0FBQ2pCcUIsRUFBQUEsWUFBWSxFQUFFYyxzQkFBVUMsSUFBVixDQUFlQyxVQURaO0FBRWpCaEMsRUFBQUEsWUFBWSxFQUFFOEIsc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVSSxNQUE1QjtBQUZHLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgVXBsb2FkQnV0dG9uIGZyb20gJy4vdXBsb2FkLWJ1dHRvbic7XG5pbXBvcnQge0ZpbGVUeXBlLCBEcmFnTkRyb3B9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nLXNwaW5uZXInO1xuaW1wb3J0IHtpc0Nocm9tZX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuLy8gQnJlYWtwb2ludHNcbmltcG9ydCB7bWVkaWF9IGZyb20gJ3N0eWxlcy9tZWRpYS1icmVha3BvaW50cyc7XG5cbmNvbnN0IEZpbGVEcm9wID1cbiAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJ3JlYWN0LWZpbGUtZHJvcCcpIDogbnVsbDtcblxuLy8gRmlsZS50eXBlIGlzIG5vdCByZWxpYWJsZSBpZiB0aGUgT1MgZG9lcyBub3QgaGF2ZSBhXG4vLyByZWdpc3RlcmVkIG1hcHBpbmcgZm9yIHRoZSBleHRlbnNpb24uXG4vLyBOT1RFOiBTaGFwZWZpbGVzIG11c3QgYmUgaW4gYSBjb21wcmVzc2VkIGZvcm1hdCBzaW5jZVxuLy8gaXQgcmVxdWlyZXMgbXVsdGlwbGUgZmlsZXMgdG8gYmUgcHJlc2VudC5cbmNvbnN0IGRlZmF1bHRWYWxpZEZpbGVFeHQgPSBbXG4gICdjc3YnLFxuICAvLyAndGFyLmd6JyxcbiAgLy8gJ3RneicsXG4gIC8vICd6aXAnLFxuICAvLyAnZ3B4JyxcbiAgLy8gJ2ttbCcsXG4gICdqc29uJyxcbiAgJ2dlb2pzb24nXG5dO1xuXG5jb25zdCBNRVNTQUdFID0gJyBEcmFnICYgRHJvcCBZb3VyIEZpbGUocykgSGVyZSc7XG5jb25zdCBDSFJPTUVfTVNHID1cbiAgJypDaHJvbWUgdXNlcjogTGltaXQgZmlsZSBzaXplIHRvIDI1MG1iLCBpZiBuZWVkIHRvIHVwbG9hZCBsYXJnZXIgZmlsZSwgdHJ5IFNhZmFyaSc7XG5jb25zdCBESVNDTEFJTUVSID0gJypLZXBsZXIuZ2wgaXMgYSBjbGllbnQtc2lkZSBhcHBsaWNhdGlvbiB3aXRoIG5vIHNlcnZlciBiYWNrZW5kLiBEYXRhIGxpdmVzIG9ubHkgb24geW91ciBtYWNoaW5lL2Jyb3dzZXIuICcgK1xuICAnTm8gaW5mb3JtYXRpb24gb3IgbWFwIGRhdGEgaXMgc2VudCB0byBhbnkgc2VydmVyLic7XG5jb25zdCBDT05GSUdfVVBMT0FEX01FU1NBR0UgPSAnVXBsb2FkIGRhdGEgZmlsZXMgb3IgdXBsb2FkIGEgc2F2ZWQgbWFwIHZpYSBwcmV2aW91c2x5IGV4cG9ydGVkIHNpbmdsZSBKc29uIG9mIGJvdGggY29uZmlnIGFuZCBkYXRhJztcblxuY29uc3QgZmlsZUljb25Db2xvciA9ICcjRDNEOEUwJztcblxuY29uc3QgU3R5bGVkVXBsb2FkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBcbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBmb250LXNpemU6IDEycHg7XG4gIGB9XG5gO1xuXG5jb25zdCBXYXJuaW5nTXNnID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuYDtcblxuY29uc3QgUG9zaXRpdmVNc2cgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkFjdEJnZH07XG5gO1xuXG5jb25zdCBTdHlsZWRGaWxlRHJvcCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDhweCA4cHggMDtcblxuICAuZmlsZS11cGxvYWQtb3Ige1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmtCdG5Db2xvcn07XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICB9XG4gIFxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmc6IDE2cHggNHB4IDA7XG4gIGB9O1xuYDtcblxuY29uc3QgTXNnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVDb2xvcn07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAzNnB4O1xuYDtcblxuY29uc3QgU3R5bGVkRHJhZ05Ecm9wSWNvbiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke2ZpbGVJY29uQ29sb3J9O1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBcbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBgfTtcbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRGaWxlVHlwZUZvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYH07XG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZVVwbG9hZCA9IHN0eWxlZC5kaXZgXG4gIC5maWx0ZXItdXBsb2FkX19pbnB1dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuZmlsZS1kcm9wIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFN0eWxlZERyYWdGaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYH07XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYH1cbmA7XG5cbmNvbnN0IFN0eWxlZERpc2NsYWltZXIgPSBzdHlsZWQoU3R5bGVkTWVzc2FnZSlgXG4gIG1hcmdpbjogMCBhdXRvO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZVVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdmFsaWRGaWxlRXh0OiBkZWZhdWx0VmFsaWRGaWxlRXh0XG4gIH07XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvbkZpbGVVcGxvYWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgdmFsaWRGaWxlRXh0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGRyYWdPdmVyOiBmYWxzZSxcbiAgICBmaWxlczogW10sXG4gICAgZXJyb3JGaWxlczogW11cbiAgfTtcblxuICBfaXNWYWxpZEZpbGVUeXBlID0gZmlsZW5hbWUgPT4ge1xuICAgIGNvbnN0IHt2YWxpZEZpbGVFeHR9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBmaWxlRXh0ID0gdmFsaWRGaWxlRXh0LmZpbmQoZXh0ID0+IGZpbGVuYW1lLmVuZHNXaXRoKGV4dCkpO1xuXG4gICAgcmV0dXJuIEJvb2xlYW4oZmlsZUV4dCk7XG4gIH07XG5cbiAgX2hhbmRsZUZpbGVJbnB1dCA9IChmaWxlcywgZSkgPT4ge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtmaWxlczogW10sIGVycm9yRmlsZXM6IFtdLCBkcmFnT3ZlcjogZmFsc2V9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcblxuICAgICAgaWYgKGZpbGUgJiYgdGhpcy5faXNWYWxpZEZpbGVUeXBlKGZpbGUubmFtZSkpIHtcbiAgICAgICAgbmV4dFN0YXRlLmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUuZXJyb3JGaWxlcy5wdXNoKGZpbGUubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIG5leHRTdGF0ZSxcbiAgICAgICgpID0+XG4gICAgICAgIG5leHRTdGF0ZS5maWxlcy5sZW5ndGggPyB0aGlzLnByb3BzLm9uRmlsZVVwbG9hZChuZXh0U3RhdGUuZmlsZXMpIDogbnVsbFxuICAgICk7XG4gIH07XG5cbiAgX3RvZ2dsZURyYWdTdGF0ZSA9IG5ld1N0YXRlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnT3ZlcjogbmV3U3RhdGV9KTtcbiAgfTtcblxuICBfcmVuZGVyTWVzc2FnZSgpIHtcbiAgICBjb25zdCB7ZXJyb3JGaWxlcywgZmlsZXN9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChlcnJvckZpbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdhcm5pbmdNc2c+XG4gICAgICAgICAge2BGaWxlICR7ZXJyb3JGaWxlcy5qb2luKCcsICcpfSBpcyBub3Qgc3VwcG9ydGVkLmB9XG4gICAgICAgIDwvV2FybmluZ01zZz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTWVzc2FnZSBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZGVyX19tZXNzYWdlXCI+XG4gICAgICAgIDxkaXY+VXBsb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIDxQb3NpdGl2ZU1zZz5cbiAgICAgICAgICB7YCR7ZmlsZXMubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcgYW5kICcpfS4uLmB9XG4gICAgICAgIDwvUG9zaXRpdmVNc2c+XG4gICAgICAgIDxMb2FkaW5nU3Bpbm5lciBzaXplPXsyMH0gLz5cbiAgICAgIDwvU3R5bGVkTWVzc2FnZT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkcmFnT3ZlciwgZmlsZXN9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7dmFsaWRGaWxlRXh0fSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRGaWxlVXBsb2FkXG4gICAgICAgIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkZXJcIlxuICAgICAgICByZWY9e2NtcCA9PiAodGhpcy5mcmFtZSA9IGNtcCl9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci11cGxvYWRfX2lucHV0XCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICB7RmlsZURyb3AgPyAoXG4gICAgICAgICAgPEZpbGVEcm9wXG4gICAgICAgICAgICBmcmFtZT17dGhpcy5mcmFtZX1cbiAgICAgICAgICAgIHRhcmdldEFsd2F5c1Zpc2libGVcbiAgICAgICAgICAgIG9uRHJhZ092ZXI9eygpID0+IHRoaXMuX3RvZ2dsZURyYWdTdGF0ZSh0cnVlKX1cbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiB0aGlzLl90b2dnbGVEcmFnU3RhdGUoZmFsc2UpfVxuICAgICAgICAgICAgb25Ecm9wPXt0aGlzLl9oYW5kbGVGaWxlSW5wdXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN0eWxlZFVwbG9hZE1lc3NhZ2UgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRfX21lc3NhZ2VcIj57Q09ORklHX1VQTE9BRF9NRVNTQUdFfTwvU3R5bGVkVXBsb2FkTWVzc2FnZT5cbiAgICAgICAgICAgIDxTdHlsZWRGaWxlRHJvcCBkcmFnT3Zlcj17ZHJhZ092ZXJ9PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7b3BhY2l0eTogZHJhZ092ZXIgPyAwLjUgOiAxfX0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZERyYWdORHJvcEljb24+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkRmlsZVR5cGVGb3cgY2xhc3NOYW1lPVwiZmlsZS10eXBlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7dmFsaWRGaWxlRXh0Lm1hcChleHQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGaWxlVHlwZSBrZXk9e2V4dH0gZXh0PXtleHR9IGhlaWdodD1cIjUwcHhcIiBmb250U2l6ZT1cIjlweFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEZpbGVUeXBlRm93PlxuICAgICAgICAgICAgICAgICAgPERyYWdORHJvcCBoZWlnaHQ9XCI0NHB4XCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZERyYWdORHJvcEljb24+XG4gICAgICAgICAgICAgICAgPGRpdj57dGhpcy5fcmVuZGVyTWVzc2FnZSgpfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgeyFmaWxlcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkRHJhZ0ZpbGVXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8TXNnV3JhcHBlcj57TUVTU0FHRX08L01zZ1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkLW9yXCI+b3I8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRCdXR0b24gb25VcGxvYWQ9e3RoaXMuX2hhbmRsZUZpbGVJbnB1dH0+XG4gICAgICAgICAgICAgICAgICAgICAgYnJvd3NlIHlvdXIgZmlsZXNcbiAgICAgICAgICAgICAgICAgICAgPC9VcGxvYWRCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZERyYWdGaWxlV3JhcHBlcj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxTdHlsZWREaXNjbGFpbWVyPntESVNDTEFJTUVSfTwvU3R5bGVkRGlzY2xhaW1lcj5cbiAgICAgICAgICAgIDwvU3R5bGVkRmlsZURyb3A+XG4gICAgICAgICAgPC9GaWxlRHJvcD5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPFdhcm5pbmdNc2c+e2lzQ2hyb21lKCkgPyBDSFJPTUVfTVNHIDogJyd9PC9XYXJuaW5nTXNnPlxuICAgICAgPC9TdHlsZWRGaWxlVXBsb2FkPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==