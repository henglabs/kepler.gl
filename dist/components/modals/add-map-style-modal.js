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

var _classnames = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _reactDom = require("react-dom");

var _styledComponents2 = require("../common/styled-components");

var _mapboxUtils = require("../../utils/map-style-utils/mapbox-utils");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 116px;\n  flex-shrink: 0;\n  width: ", "px;\n\n  .preview-title {\n    font-weight: 500;\n    font-size: 10px;\n    padding: 8px 0px;\n  }\n\n  .preview-title.error {\n    color: ", ";\n  }\n\n  .preview-image {\n    background: ", ";\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.18);\n    width: ", "px;\n    height: ", "px;\n    position: relative;\n  }\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 12px;\n  .modal-section {\n    margin-bottom: 32px;\n  }\n  .modal-section:first-child {\n    margin-top: 24px;\n  }\n\n  .modal-section {\n    .modal-section-title {\n      font-weight: 500;\n    }\n    .modal-section-subtitle {\n      color: ", ";\n    }\n\n    input {\n      margin-top: 8px;\n    }\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var MapH = 190;
var MapW = 264;
var ErrorMsg = {
  styleError: 'Failed to load map style, make sure it is published. For private style, paste in your access token.'
};
var InstructionPanel = styled.div(_templateObject(), function (props) {
  return props.theme.subtextColorLT;
});
var PreviewMap = styled.div(_templateObject2(), MapW, function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.modalImagePlaceHolder;
}, MapW, MapH);
var InlineLink = styled.a(_templateObject3());

var AddMapStyleModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(AddMapStyleModal, _Component);

  function AddMapStyleModal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, AddMapStyleModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AddMapStyleModal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      reRenderKey: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleJson", function (style) {
      _this.props.loadCustomMapStyle({
        style: style,
        error: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleIcon", function () {
      if (_this.mapRef) {
        var canvas = (0, _reactDom.findDOMNode)(_this.mapRef).querySelector('.mapboxgl-canvas');
        var dataUri = canvas.toDataURL();

        _this.props.loadCustomMapStyle({
          icon: dataUri
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMaoStyleError", function () {
      _this.props.loadCustomMapStyle({
        error: true
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(AddMapStyleModal, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.inputStyle.accessToken !== nextProps.inputStyle.accessToken) {
        // toke has changed
        // ReactMapGl doesn't re-create map when token has changed
        // here we force the map to update
        this.setState({
          reRenderKey: this.state.reRenderKey + 1
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this2 = this;

      var map = this.mapRef && this.mapRef.getMap();

      if (map && this._map !== map) {
        this._map = map;
        map.on('style.load', function () {
          var style = map.getStyle();

          _this2.loadMapStyleJson(style);
        });
        map.on('render', function () {
          if (map.isStyleLoaded()) {
            _this2.loadMapStyleIcon();
          }
        });
        map.on('error', function () {
          _this2.loadMaoStyleError();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          inputStyle = _this$props.inputStyle,
          mapState = _this$props.mapState;
      var mapProps = (0, _objectSpread2["default"])({}, mapState, {
        preserveDrawingBuffer: true,
        mapboxApiAccessToken: inputStyle.accessToken || this.props.mapboxApiAccessToken,
        transformRequest: _mapboxUtils.transformRequest
      });
      return _react["default"].createElement("div", {
        className: "add-map-style-modal"
      }, _react["default"].createElement(_styledComponents2.StyledModalContent, null, _react["default"].createElement(InstructionPanel, null, _react["default"].createElement("div", {
        className: "modal-section"
      }, _react["default"].createElement("div", {
        className: "modal-section-title"
      }, "1. Publish your style at mapbox or provide access token"), _react["default"].createElement("div", {
        className: "modal-section-subtitle"
      }, "You can create your own map style at", _react["default"].createElement(InlineLink, {
        target: "_blank",
        href: "https://www.mapbox.com/studio/styles/"
      }, " mapbox"), " and", _react["default"].createElement(InlineLink, {
        target: "_blank",
        href: "https://www.mapbox.com/help/studio-manual-publish/"
      }, " publish"), " it."), _react["default"].createElement("div", {
        className: "modal-section-subtitle"
      }, "To use private style, paste your", _react["default"].createElement(InlineLink, {
        target: "_blank",
        href: "https://www.mapbox.com/help/how-access-tokens-work/"
      }, " access token"), " here. *kepler.gl is a client-side application, data stays in your browser.."), _react["default"].createElement(_styledComponents2.InputLight, {
        type: "text",
        value: inputStyle.accessToken || '',
        onChange: function onChange(_ref) {
          var value = _ref.target.value;
          return _this3.props.inputMapStyle((0, _objectSpread2["default"])({}, inputStyle, {
            accessToken: value
          }));
        },
        placeholder: "e.g. pk.abcdefg.xxxxxx"
      })), _react["default"].createElement("div", {
        className: "modal-section"
      }, _react["default"].createElement("div", {
        className: "modal-section-title"
      }, "2. Paste style url"), _react["default"].createElement("div", {
        className: "modal-section-subtitle"
      }, "What is a", _react["default"].createElement(InlineLink, {
        target: "_blank",
        href: "https://www.mapbox.com/help/studio-manual-publish/#style-url"
      }, " style URL")), _react["default"].createElement(_styledComponents2.InputLight, {
        type: "text",
        value: inputStyle.url || '',
        onChange: function onChange(_ref2) {
          var value = _ref2.target.value;
          return _this3.props.inputMapStyle((0, _objectSpread2["default"])({}, inputStyle, {
            url: value
          }));
        },
        placeholder: "e.g. mapbox://styles/uberdataviz/abcdefghijklmnopq"
      })), _react["default"].createElement("div", {
        className: "modal-section"
      }, _react["default"].createElement("div", {
        className: "modal-section-title"
      }, "3. Name your style"), _react["default"].createElement(_styledComponents2.InputLight, {
        type: "text",
        value: inputStyle.label || '',
        onChange: function onChange(_ref3) {
          var value = _ref3.target.value;
          return _this3.props.inputMapStyle((0, _objectSpread2["default"])({}, inputStyle, {
            label: value
          }));
        }
      }))), _react["default"].createElement(PreviewMap, null, _react["default"].createElement("div", {
        className: (0, _classnames["default"])('preview-title', {
          error: inputStyle.error
        })
      }, inputStyle.error ? ErrorMsg.styleError : inputStyle.style && inputStyle.style.name || ''), _react["default"].createElement("div", {
        className: "preview-image"
      }, !inputStyle.isValid ? _react["default"].createElement("div", {
        className: "preview-image-spinner"
      }) : _react["default"].createElement(_styledComponents2.StyledMapContainer, null, _react["default"].createElement(_reactMapGl["default"], (0, _extends2["default"])({}, mapProps, {
        ref: function ref(el) {
          _this3.mapRef = el;
        },
        key: this.state.reRenderKey,
        width: MapW,
        height: MapH,
        mapStyle: inputStyle.url
      })))))));
    }
  }]);
  return AddMapStyleModal;
}(_react.Component);

(0, _defineProperty2["default"])(AddMapStyleModal, "propTypes", {
  mapState: _propTypes["default"].object.isRequired,
  inputMapStyle: _propTypes["default"].func.isRequired,
  loadCustomMapStyle: _propTypes["default"].func.isRequired,
  inputStyle: _propTypes["default"].object.isRequired
});

var AddMapStyleModalFactory = function AddMapStyleModalFactory() {
  return AddMapStyleModal;
};

var _default = AddMapStyleModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbIk1hcEgiLCJNYXBXIiwiRXJyb3JNc2ciLCJzdHlsZUVycm9yIiwiSW5zdHJ1Y3Rpb25QYW5lbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzdWJ0ZXh0Q29sb3JMVCIsIlByZXZpZXdNYXAiLCJlcnJvckNvbG9yIiwibW9kYWxJbWFnZVBsYWNlSG9sZGVyIiwiSW5saW5lTGluayIsImEiLCJBZGRNYXBTdHlsZU1vZGFsIiwicmVSZW5kZXJLZXkiLCJzdHlsZSIsImxvYWRDdXN0b21NYXBTdHlsZSIsImVycm9yIiwibWFwUmVmIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImRhdGFVcmkiLCJ0b0RhdGFVUkwiLCJpY29uIiwibmV4dFByb3BzIiwiaW5wdXRTdHlsZSIsImFjY2Vzc1Rva2VuIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1hcCIsImdldE1hcCIsIl9tYXAiLCJvbiIsImdldFN0eWxlIiwibG9hZE1hcFN0eWxlSnNvbiIsImlzU3R5bGVMb2FkZWQiLCJsb2FkTWFwU3R5bGVJY29uIiwibG9hZE1hb1N0eWxlRXJyb3IiLCJtYXBTdGF0ZSIsIm1hcFByb3BzIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwidmFsdWUiLCJ0YXJnZXQiLCJpbnB1dE1hcFN0eWxlIiwidXJsIiwibGFiZWwiLCJuYW1lIiwiaXNWYWxpZCIsImVsIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7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Q2UyQyx1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNYXBib3hHTE1hcCBmcm9tICdyZWFjdC1tYXAtZ2wnO1xuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7U3R5bGVkTW9kYWxDb250ZW50LCBJbnB1dExpZ2h0LCBTdHlsZWRNYXBDb250YWluZXJ9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gVXRpbHNcbmltcG9ydCB7dHJhbnNmb3JtUmVxdWVzdH0gZnJvbSAndXRpbHMvbWFwLXN0eWxlLXV0aWxzL21hcGJveC11dGlscyc7XG5cbmNvbnN0IE1hcEggPSAxOTA7XG5jb25zdCBNYXBXID0gMjY0O1xuY29uc3QgRXJyb3JNc2cgPSB7XG4gIHN0eWxlRXJyb3IgOiAnRmFpbGVkIHRvIGxvYWQgbWFwIHN0eWxlLCBtYWtlIHN1cmUgaXQgaXMgcHVibGlzaGVkLiBGb3IgcHJpdmF0ZSBzdHlsZSwgcGFzdGUgaW4geW91ciBhY2Nlc3MgdG9rZW4uJ1xufTtcblxuY29uc3QgSW5zdHJ1Y3Rpb25QYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmb250LXNpemU6IDEycHg7XG4gIC5tb2RhbC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB9XG4gIC5tb2RhbC1zZWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICB9XG5cbiAgLm1vZGFsLXNlY3Rpb24ge1xuICAgIC5tb2RhbC1zZWN0aW9uLXRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIC5tb2RhbC1zZWN0aW9uLXN1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBQcmV2aWV3TWFwID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMTZweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAke01hcFd9cHg7XG5cbiAgLnByZXZpZXctdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gIH1cblxuICAucHJldmlldy10aXRsZS5lcnJvciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XG4gIH1cblxuICAucHJldmlldy1pbWFnZSB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbEltYWdlUGxhY2VIb2xkZXJ9O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjE4KTtcbiAgICB3aWR0aDogJHtNYXBXfXB4O1xuICAgIGhlaWdodDogJHtNYXBIfXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAucHJldmlldy1pbWFnZS1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMjVweCk7XG4gIH1cbmA7XG5cbmNvbnN0IElubGluZUxpbmsgPSBzdHlsZWQuYWBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY2xhc3MgQWRkTWFwU3R5bGVNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWFwU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBpbnB1dE1hcFN0eWxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGxvYWRDdXN0b21NYXBTdHlsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbnB1dFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICByZVJlbmRlcktleTogMFxuICB9O1xuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiAhPT0gbmV4dFByb3BzLmlucHV0U3R5bGUuYWNjZXNzVG9rZW4pIHtcbiAgICAgIC8vIHRva2UgaGFzIGNoYW5nZWRcbiAgICAgIC8vIFJlYWN0TWFwR2wgZG9lc24ndCByZS1jcmVhdGUgbWFwIHdoZW4gdG9rZW4gaGFzIGNoYW5nZWRcbiAgICAgIC8vIGhlcmUgd2UgZm9yY2UgdGhlIG1hcCB0byB1cGRhdGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZVJlbmRlcktleTogdGhpcy5zdGF0ZS5yZVJlbmRlcktleSArIDFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBtYXAgPSB0aGlzLm1hcFJlZiAmJiB0aGlzLm1hcFJlZi5nZXRNYXAoKTtcbiAgICBpZiAobWFwICYmIHRoaXMuX21hcCAhPT0gbWFwKSB7XG4gICAgICB0aGlzLl9tYXAgPSBtYXA7XG5cbiAgICAgIG1hcC5vbignc3R5bGUubG9hZCcsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBtYXAuZ2V0U3R5bGUoKTtcbiAgICAgICAgdGhpcy5sb2FkTWFwU3R5bGVKc29uKHN0eWxlKTtcbiAgICAgIH0pO1xuXG4gICAgICBtYXAub24oJ3JlbmRlcicsICgpID0+IHtcbiAgICAgICAgaWYgKG1hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgICB0aGlzLmxvYWRNYXBTdHlsZUljb24oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG1hcC5vbignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9hZE1hb1N0eWxlRXJyb3IoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbG9hZE1hcFN0eWxlSnNvbiA9IChzdHlsZSkgPT4ge1xuICAgIHRoaXMucHJvcHMubG9hZEN1c3RvbU1hcFN0eWxlKHtzdHlsZSwgZXJyb3I6IGZhbHNlfSk7XG4gIH07XG5cbiAgbG9hZE1hcFN0eWxlSWNvbiA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5tYXBSZWYpIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGZpbmRET01Ob2RlKHRoaXMubWFwUmVmKS5xdWVyeVNlbGVjdG9yKCcubWFwYm94Z2wtY2FudmFzJyk7XG4gICAgICBjb25zdCBkYXRhVXJpID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICAgICAgdGhpcy5wcm9wcy5sb2FkQ3VzdG9tTWFwU3R5bGUoe1xuICAgICAgICBpY29uOiBkYXRhVXJpXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgbG9hZE1hb1N0eWxlRXJyb3IgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5sb2FkQ3VzdG9tTWFwU3R5bGUoe2Vycm9yOiB0cnVlfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtpbnB1dFN0eWxlLCBtYXBTdGF0ZX0gPSB0aGlzLnByb3BzO1xuXG4gIGNvbnN0IG1hcFByb3BzID0ge1xuICAgIC4uLm1hcFN0YXRlLFxuICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiB8fCB0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgIHRyYW5zZm9ybVJlcXVlc3RcbiAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC1tYXAtc3R5bGUtbW9kYWxcIj5cbiAgICAgICAgPFN0eWxlZE1vZGFsQ29udGVudD5cbiAgICAgICAgICA8SW5zdHJ1Y3Rpb25QYW5lbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj4xLiBQdWJsaXNoIHlvdXIgc3R5bGUgYXQgbWFwYm94IG9yIHByb3ZpZGUgYWNjZXNzIHRva2VuPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIFlvdSBjYW4gY3JlYXRlIHlvdXIgb3duIG1hcCBzdHlsZSBhdFxuICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL3N0dWRpby9zdHlsZXMvXCI+IG1hcGJveDwvSW5saW5lTGluaz4gYW5kXG4gICAgICAgICAgICAgICAgPElubGluZUxpbmsgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9zdHVkaW8tbWFudWFsLXB1Ymxpc2gvXCI+IHB1Ymxpc2g8L0lubGluZUxpbms+IGl0LlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgVG8gdXNlIHByaXZhdGUgc3R5bGUsIHBhc3RlIHlvdXJcbiAgICAgICAgICAgICAgICA8SW5saW5lTGluayB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9oZWxwL2hvdy1hY2Nlc3MtdG9rZW5zLXdvcmsvXCI+IGFjY2VzcyB0b2tlbjwvSW5saW5lTGluaz4gaGVyZS4gKmtlcGxlci5nbCBpcyBhIGNsaWVudC1zaWRlIGFwcGxpY2F0aW9uLCBkYXRhIHN0YXlzIGluIHlvdXIgYnJvd3Nlci4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8SW5wdXRMaWdodFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiB8fCAnJ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB0aGlzLnByb3BzLmlucHV0TWFwU3R5bGUoey4uLmlucHV0U3R5bGUsIGFjY2Vzc1Rva2VuOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBway5hYmNkZWZnLnh4eHh4eFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj4yLiBQYXN0ZSBzdHlsZSB1cmw8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgV2hhdCBpcyBhXG4gICAgICAgICAgICAgICAgPElubGluZUxpbmsgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9zdHVkaW8tbWFudWFsLXB1Ymxpc2gvI3N0eWxlLXVybFwiPiBzdHlsZSBVUkw8L0lubGluZUxpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8SW5wdXRMaWdodFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRTdHlsZS51cmwgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4gdGhpcy5wcm9wcy5pbnB1dE1hcFN0eWxlKHsuLi5pbnB1dFN0eWxlLCB1cmw6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIG1hcGJveDovL3N0eWxlcy91YmVyZGF0YXZpei9hYmNkZWZnaGlqa2xtbm9wcVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj4zLiBOYW1lIHlvdXIgc3R5bGU8L2Rpdj5cbiAgICAgICAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0U3R5bGUubGFiZWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4gdGhpcy5wcm9wcy5pbnB1dE1hcFN0eWxlKHsuLi5pbnB1dFN0eWxlLCBsYWJlbDogdmFsdWV9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvSW5zdHJ1Y3Rpb25QYW5lbD5cbiAgICAgICAgICA8UHJldmlld01hcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwcmV2aWV3LXRpdGxlJywge2Vycm9yOiBpbnB1dFN0eWxlLmVycm9yfSl9PlxuICAgICAgICAgICAgICB7aW5wdXRTdHlsZS5lcnJvciA/IEVycm9yTXNnLnN0eWxlRXJyb3IgOlxuICAgICAgICAgICAgICAgIChpbnB1dFN0eWxlLnN0eWxlICYmIGlucHV0U3R5bGUuc3R5bGUubmFtZSkgfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIj5cbiAgICAgICAgICAgICAgeyFpbnB1dFN0eWxlLmlzVmFsaWQgP1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZS1zcGlubmVyXCIvPiA6XG4gICAgICAgICAgICAgICAgPFN0eWxlZE1hcENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxNYXBib3hHTE1hcFxuICAgICAgICAgICAgICAgICAgICB7Li4ubWFwUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFwUmVmID0gZWw7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5zdGF0ZS5yZVJlbmRlcktleX1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e01hcFd9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17TWFwSH1cbiAgICAgICAgICAgICAgICAgICAgbWFwU3R5bGU9e2lucHV0U3R5bGUudXJsfS8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvUHJldmlld01hcD5cbiAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5ID0gKCkgPT4gQWRkTWFwU3R5bGVNb2RhbDtcbmV4cG9ydCBkZWZhdWx0IEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5O1xuIl19