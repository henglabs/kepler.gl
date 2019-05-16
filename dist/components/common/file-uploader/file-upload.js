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

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  bottom: 0;\n  padding: 10px 30px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .filter-upload__input {\n    visibility: hidden;\n    height: 0;\n    position: absolute;\n  }\n\n  .file-drop {\n    position: relative;\n  }\n\n  .file-upload__message {\n    color: ", ";\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-bottom: 60px;\n\n  .file-type-row {\n    margin-bottom: 26px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  height: 36px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: white;\n  border-radius: 4px;\n  border-style: dashed;\n  border-width: 1px;\n  border-color: ", ";\n  height: 414px;\n  padding-top: 60px;\n  text-align: center;\n  width: 100%;\n\n  .file-upload-or {\n    color: ", ";\n    padding-right: 4px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  color: ", ";\n"]);

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
var WarningMsg = styled.span(_templateObject(), function (props) {
  return props.theme.errorColor;
});
var PositiveMsg = styled.span(_templateObject2(), function (props) {
  return props.theme.primaryBtnActBgd;
});
var StyledFileDrop = styled.div(_templateObject3(), function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
});
var MsgWrapper = styled.div(_templateObject4(), function (props) {
  return props.theme.modalTitleColor;
});
var StyledDragNDropIcon = styled.div(_templateObject5(), fileIconColor);
var StyledFileUpload = styled.div(_templateObject6(), function (props) {
  return props.theme.textColorLT;
});
var StyledMessage = styled.div(_templateObject7());
var StyledDisclaimer = styled(StyledMessage)(_templateObject8());

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
      }, _react["default"].createElement("div", {
        className: "file-upload__message"
      }, CONFIG_UPLOAD_MESSAGE), _react["default"].createElement(StyledFileDrop, {
        dragOver: dragOver
      }, _react["default"].createElement("div", {
        style: {
          opacity: dragOver ? 0.5 : 1
        }
      }, _react["default"].createElement(StyledDragNDropIcon, null, _react["default"].createElement("div", {
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
      })), _react["default"].createElement("div", null, this._renderMessage())), !files.length ? _react["default"].createElement("div", null, _react["default"].createElement(MsgWrapper, null, MESSAGE), _react["default"].createElement("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLmpzIl0sIm5hbWVzIjpbIkZpbGVEcm9wIiwiZG9jdW1lbnQiLCJyZXF1aXJlIiwiZGVmYXVsdFZhbGlkRmlsZUV4dCIsIk1FU1NBR0UiLCJDSFJPTUVfTVNHIiwiRElTQ0xBSU1FUiIsIkNPTkZJR19VUExPQURfTUVTU0FHRSIsImZpbGVJY29uQ29sb3IiLCJXYXJuaW5nTXNnIiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwiUG9zaXRpdmVNc2ciLCJwcmltYXJ5QnRuQWN0QmdkIiwiU3R5bGVkRmlsZURyb3AiLCJkaXYiLCJzdWJ0ZXh0Q29sb3JMVCIsImxpbmtCdG5Db2xvciIsIk1zZ1dyYXBwZXIiLCJtb2RhbFRpdGxlQ29sb3IiLCJTdHlsZWREcmFnTkRyb3BJY29uIiwiU3R5bGVkRmlsZVVwbG9hZCIsInRleHRDb2xvckxUIiwiU3R5bGVkTWVzc2FnZSIsIlN0eWxlZERpc2NsYWltZXIiLCJGaWxlVXBsb2FkIiwiZHJhZ092ZXIiLCJmaWxlcyIsImVycm9yRmlsZXMiLCJmaWxlbmFtZSIsInZhbGlkRmlsZUV4dCIsImZpbGVFeHQiLCJmaW5kIiwiZXh0IiwiZW5kc1dpdGgiLCJCb29sZWFuIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5leHRTdGF0ZSIsImkiLCJsZW5ndGgiLCJmaWxlIiwiX2lzVmFsaWRGaWxlVHlwZSIsIm5hbWUiLCJwdXNoIiwic2V0U3RhdGUiLCJvbkZpbGVVcGxvYWQiLCJuZXdTdGF0ZSIsInN0YXRlIiwiam9pbiIsIm1hcCIsImYiLCJjbXAiLCJmcmFtZSIsIl9vbkNoYW5nZSIsIl90b2dnbGVEcmFnU3RhdGUiLCJfaGFuZGxlRmlsZUlucHV0Iiwib3BhY2l0eSIsIl9yZW5kZXJNZXNzYWdlIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJh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QyxJQUFWLENBQWVDLFVBRFo7QUFFakJoQyxFQUFBQSxZQUFZLEVBQUU4QixzQkFBVUcsT0FBVixDQUFrQkgsc0JBQVVJLE1BQTVCO0FBRkcsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBVcGxvYWRCdXR0b24gZnJvbSAnLi91cGxvYWQtYnV0dG9uJztcbmltcG9ydCB7RmlsZVR5cGUsIERyYWdORHJvcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2xvYWRpbmctc3Bpbm5lcic7XG5pbXBvcnQge2lzQ2hyb21lfSBmcm9tICd1dGlscy91dGlscyc7XG5cbmNvbnN0IEZpbGVEcm9wID1cbiAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IHJlcXVpcmUoJ3JlYWN0LWZpbGUtZHJvcCcpIDogbnVsbDtcblxuLy8gRmlsZS50eXBlIGlzIG5vdCByZWxpYWJsZSBpZiB0aGUgT1MgZG9lcyBub3QgaGF2ZSBhXG4vLyByZWdpc3RlcmVkIG1hcHBpbmcgZm9yIHRoZSBleHRlbnNpb24uXG4vLyBOT1RFOiBTaGFwZWZpbGVzIG11c3QgYmUgaW4gYSBjb21wcmVzc2VkIGZvcm1hdCBzaW5jZVxuLy8gaXQgcmVxdWlyZXMgbXVsdGlwbGUgZmlsZXMgdG8gYmUgcHJlc2VudC5cbmNvbnN0IGRlZmF1bHRWYWxpZEZpbGVFeHQgPSBbXG4gICdjc3YnLFxuICAvLyAndGFyLmd6JyxcbiAgLy8gJ3RneicsXG4gIC8vICd6aXAnLFxuICAvLyAnZ3B4JyxcbiAgLy8gJ2ttbCcsXG4gICdqc29uJyxcbiAgJ2dlb2pzb24nXG5dO1xuXG5jb25zdCBNRVNTQUdFID0gJyBEcmFnICYgRHJvcCBZb3VyIEZpbGUocykgSGVyZSc7XG5jb25zdCBDSFJPTUVfTVNHID1cbiAgJypDaHJvbWUgdXNlcjogTGltaXQgZmlsZSBzaXplIHRvIDI1MG1iLCBpZiBuZWVkIHRvIHVwbG9hZCBsYXJnZXIgZmlsZSwgdHJ5IFNhZmFyaSc7XG5jb25zdCBESVNDTEFJTUVSID0gJypLZXBsZXIuZ2wgaXMgYSBjbGllbnQtc2lkZSBhcHBsaWNhdGlvbiB3aXRoIG5vIHNlcnZlciBiYWNrZW5kLiBEYXRhIGxpdmVzIG9ubHkgb24geW91ciBtYWNoaW5lL2Jyb3dzZXIuICcgK1xuICAnTm8gaW5mb3JtYXRpb24gb3IgbWFwIGRhdGEgaXMgc2VudCB0byBhbnkgc2VydmVyLic7XG5jb25zdCBDT05GSUdfVVBMT0FEX01FU1NBR0UgPSAnVXBsb2FkIGRhdGEgZmlsZXMgb3IgdXBsb2FkIGEgc2F2ZWQgbWFwIHZpYSBwcmV2aW91c2x5IGV4cG9ydGVkIHNpbmdsZSBKc29uIG9mIGJvdGggY29uZmlnIGFuZCBkYXRhJztcblxuY29uc3QgZmlsZUljb25Db2xvciA9ICcjRDNEOEUwJztcblxuY29uc3QgV2FybmluZ01zZyA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbmA7XG5cbmNvbnN0IFBvc2l0aXZlTXNnID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RCZ2R9O1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZURyb3AgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVH07XG4gIGhlaWdodDogNDE0cHg7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5maWxlLXVwbG9hZC1vciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cbmA7XG5cbmNvbnN0IE1zZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlQ29sb3J9O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMzZweDtcbmA7XG5cbmNvbnN0IFN0eWxlZERyYWdORHJvcEljb24gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtmaWxlSWNvbkNvbG9yfTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuICAuZmlsZS10eXBlLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRmlsZVVwbG9hZCA9IHN0eWxlZC5kaXZgXG4gIC5maWx0ZXItdXBsb2FkX19pbnB1dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAuZmlsZS1kcm9wIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuZmlsZS11cGxvYWRfX21lc3NhZ2Uge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU3R5bGVkRGlzY2xhaW1lciA9IHN0eWxlZChTdHlsZWRNZXNzYWdlKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbGlkRmlsZUV4dDogZGVmYXVsdFZhbGlkRmlsZUV4dFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25GaWxlVXBsb2FkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRmlsZUV4dDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBkcmFnT3ZlcjogZmFsc2UsXG4gICAgZmlsZXM6IFtdLFxuICAgIGVycm9yRmlsZXM6IFtdXG4gIH07XG5cbiAgX2lzVmFsaWRGaWxlVHlwZSA9IGZpbGVuYW1lID0+IHtcbiAgICBjb25zdCB7dmFsaWRGaWxlRXh0fSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmlsZUV4dCA9IHZhbGlkRmlsZUV4dC5maW5kKGV4dCA9PiBmaWxlbmFtZS5lbmRzV2l0aChleHQpKTtcblxuICAgIHJldHVybiBCb29sZWFuKGZpbGVFeHQpO1xuICB9O1xuXG4gIF9oYW5kbGVGaWxlSW5wdXQgPSAoZmlsZXMsIGUpID0+IHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7ZmlsZXM6IFtdLCBlcnJvckZpbGVzOiBbXSwgZHJhZ092ZXI6IGZhbHNlfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XG5cbiAgICAgIGlmIChmaWxlICYmIHRoaXMuX2lzVmFsaWRGaWxlVHlwZShmaWxlLm5hbWUpKSB7XG4gICAgICAgIG5leHRTdGF0ZS5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dFN0YXRlLmVycm9yRmlsZXMucHVzaChmaWxlLm5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICBuZXh0U3RhdGUsXG4gICAgICAoKSA9PlxuICAgICAgICBuZXh0U3RhdGUuZmlsZXMubGVuZ3RoID8gdGhpcy5wcm9wcy5vbkZpbGVVcGxvYWQobmV4dFN0YXRlLmZpbGVzKSA6IG51bGxcbiAgICApO1xuICB9O1xuXG4gIF90b2dnbGVEcmFnU3RhdGUgPSBuZXdTdGF0ZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ092ZXI6IG5ld1N0YXRlfSk7XG4gIH07XG5cbiAgX3JlbmRlck1lc3NhZ2UoKSB7XG4gICAgY29uc3Qge2Vycm9yRmlsZXMsIGZpbGVzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoZXJyb3JGaWxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXYXJuaW5nTXNnPlxuICAgICAgICAgIHtgRmlsZSAke2Vycm9yRmlsZXMuam9pbignLCAnKX0gaXMgbm90IHN1cHBvcnRlZC5gfVxuICAgICAgICA8L1dhcm5pbmdNc2c+XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghZmlsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZE1lc3NhZ2UgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRlcl9fbWVzc2FnZVwiPlxuICAgICAgICA8ZGl2PlVwbG9hZGluZy4uLjwvZGl2PlxuICAgICAgICA8UG9zaXRpdmVNc2c+XG4gICAgICAgICAge2Ake2ZpbGVzLm1hcChmID0+IGYubmFtZSkuam9pbignIGFuZCAnKX0uLi5gfVxuICAgICAgICA8L1Bvc2l0aXZlTXNnPlxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgc2l6ZT17MjB9IC8+XG4gICAgICA8L1N0eWxlZE1lc3NhZ2U+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZHJhZ092ZXIsIGZpbGVzfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge3ZhbGlkRmlsZUV4dH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkRmlsZVVwbG9hZFxuICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZGVyXCJcbiAgICAgICAgcmVmPXtjbXAgPT4gKHRoaXMuZnJhbWUgPSBjbXApfVxuICAgICAgPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItdXBsb2FkX19pbnB1dFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAge0ZpbGVEcm9wID8gKFxuICAgICAgICAgIDxGaWxlRHJvcFxuICAgICAgICAgICAgZnJhbWU9e3RoaXMuZnJhbWV9XG4gICAgICAgICAgICB0YXJnZXRBbHdheXNWaXNpYmxlXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXsoKSA9PiB0aGlzLl90b2dnbGVEcmFnU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICBvbkRyYWdMZWF2ZT17KCkgPT4gdGhpcy5fdG9nZ2xlRHJhZ1N0YXRlKGZhbHNlKX1cbiAgICAgICAgICAgIG9uRHJvcD17dGhpcy5faGFuZGxlRmlsZUlucHV0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRfX21lc3NhZ2VcIj57Q09ORklHX1VQTE9BRF9NRVNTQUdFfTwvZGl2PlxuICAgICAgICAgICAgPFN0eWxlZEZpbGVEcm9wIGRyYWdPdmVyPXtkcmFnT3Zlcn0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tvcGFjaXR5OiBkcmFnT3ZlciA/IDAuNSA6IDF9fT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRHJhZ05Ecm9wSWNvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS10eXBlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7dmFsaWRGaWxlRXh0Lm1hcChleHQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGaWxlVHlwZSBrZXk9e2V4dH0gZXh0PXtleHR9IGhlaWdodD1cIjUwcHhcIiBmb250U2l6ZT1cIjlweFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxEcmFnTkRyb3AgaGVpZ2h0PVwiNDRweFwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWREcmFnTkRyb3BJY29uPlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuX3JlbmRlck1lc3NhZ2UoKX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHshZmlsZXMubGVuZ3RoID8gPGRpdj5cbiAgICAgICAgICAgICAgICA8TXNnV3JhcHBlcj57TUVTU0FHRX08L01zZ1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtb3JcIj5vcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8VXBsb2FkQnV0dG9uIG9uVXBsb2FkPXt0aGlzLl9oYW5kbGVGaWxlSW5wdXR9PlxuICAgICAgICAgICAgICAgICAgYnJvd3NlIHlvdXIgZmlsZXNcbiAgICAgICAgICAgICAgICA8L1VwbG9hZEJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+IDogbnVsbH1cbiAgICAgICAgICAgICAgPFN0eWxlZERpc2NsYWltZXI+e0RJU0NMQUlNRVJ9PC9TdHlsZWREaXNjbGFpbWVyPlxuICAgICAgICAgICAgPC9TdHlsZWRGaWxlRHJvcD5cbiAgICAgICAgICA8L0ZpbGVEcm9wPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8V2FybmluZ01zZz57aXNDaHJvbWUoKSA/IENIUk9NRV9NU0cgOiAnJ308L1dhcm5pbmdNc2c+XG4gICAgICA8L1N0eWxlZEZpbGVVcGxvYWQ+XG4gICAgKTtcbiAgfVxufVxuIl19