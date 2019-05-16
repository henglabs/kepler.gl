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

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  color: ", ";\n  font-size: 12px;\n  text-decoration: underline;\n\n  :hover {\n    cursor: pointer;\n    font-weight: 500;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = styled.div(_templateObject(), function (props) {
  return props.theme.textColorLT;
});
/*
Inspired by https://github.com/okonet/react-dropzone/blob/master/src/index.js
*/

var UploadButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(UploadButton, _Component);

  function UploadButton() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, UploadButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(UploadButton)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onClick", function () {
      _this._fileInput.value = null;

      _this._fileInput.click();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (_ref) {
      var files = _ref.target.files;

      if (!files) {
        return;
      }

      _this.props.onUpload(files);
    });
    return _this;
  }

  (0, _createClass2["default"])(UploadButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(Wrapper, null, _react["default"].createElement("input", {
        type: "file",
        ref: function ref(_ref2) {
          _this2._fileInput = _ref2;
        },
        style: {
          display: 'none'
        },
        onChange: this._onChange
      }), _react["default"].createElement("span", {
        onClick: this._onClick
      }, this.props.children));
    }
  }]);
  return UploadButton;
}(_react.Component);

exports["default"] = UploadButton;
(0, _defineProperty2["default"])(UploadButton, "propTypes", {
  onUpload: _propTypes["default"].func.isRequired
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL3VwbG9hZC1idXR0b24uanMiXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIlVwbG9hZEJ1dHRvbiIsIl9maWxlSW5wdXQiLCJ2YWx1ZSIsImNsaWNrIiwiZmlsZXMiLCJ0YXJnZXQiLCJvblVwbG9hZCIsInJlZiIsImRpc3BsYXkiLCJfb25DaGFuZ2UiLCJfb25DbGljayIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxNQUFNLENBQUNDLEdBQVYsb0JBRUYsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRkgsQ0FBYjtBQVdBOzs7O0lBR3FCQyxZOzs7Ozs7Ozs7Ozs7Ozs7OztpR0FLUixZQUFNO0FBQ2YsWUFBS0MsVUFBTCxDQUFnQkMsS0FBaEIsR0FBd0IsSUFBeEI7O0FBQ0EsWUFBS0QsVUFBTCxDQUFnQkUsS0FBaEI7QUFDRCxLO2tHQUVXLGdCQUF1QjtBQUFBLFVBQVpDLEtBQVksUUFBckJDLE1BQXFCLENBQVpELEtBQVk7O0FBQ2pDLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Y7QUFDRDs7QUFFRCxZQUFLUCxLQUFMLENBQVdTLFFBQVgsQ0FBb0JGLEtBQXBCO0FBQ0QsSzs7Ozs7OzZCQUVRO0FBQUE7O0FBQ1AsYUFDRSxnQ0FBQyxPQUFELFFBQ0U7QUFDRSxRQUFBLElBQUksRUFBQyxNQURQO0FBRUUsUUFBQSxHQUFHLEVBQUUsYUFBQUcsS0FBRyxFQUFJO0FBQUMsVUFBQSxNQUFJLENBQUNOLFVBQUwsR0FBa0JNLEtBQWxCO0FBQXNCLFNBRnJDO0FBR0UsUUFBQSxLQUFLLEVBQUU7QUFBQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQVYsU0FIVDtBQUlFLFFBQUEsUUFBUSxFQUFFLEtBQUtDO0FBSmpCLFFBREYsRUFPRTtBQUFNLFFBQUEsT0FBTyxFQUFFLEtBQUtDO0FBQXBCLFNBQStCLEtBQUtiLEtBQUwsQ0FBV2MsUUFBMUMsQ0FQRixDQURGO0FBV0Q7OztFQTlCdUNDLGdCOzs7aUNBQXJCWixZLGVBQ0E7QUFDakJNLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVDLElBQVYsQ0FBZUM7QUFEUixDO0FBOEJwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5gO1xuLypcbkluc3BpcmVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9va29uZXQvcmVhY3QtZHJvcHpvbmUvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LmpzXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBvblVwbG9hZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIF9vbkNsaWNrID0gKCkgPT4ge1xuICAgIHRoaXMuX2ZpbGVJbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5fZmlsZUlucHV0LmNsaWNrKCk7XG4gIH07XG5cbiAgX29uQ2hhbmdlID0gKHt0YXJnZXQ6IHtmaWxlc319KSA9PiB7XG4gICAgaWYgKCFmaWxlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25VcGxvYWQoZmlsZXMpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICByZWY9e3JlZiA9PiB7dGhpcy5fZmlsZUlucHV0ID0gcmVmfX1cbiAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLl9vbkNsaWNrfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L3NwYW4+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==