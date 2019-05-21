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

var _mediaBreakpoints = require("../../styles/media-breakpoints");

var _mapboxUtils = require("../../utils/map-style-utils/mapbox-utils");

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 4px;\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.18);\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: unset;\n    .preview-title {\n      margin-top: 0px;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 32px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 116px;\n  flex-shrink: 0;\n\n  .preview-title {\n    font-weight: 500;\n    font-size: 10px;\n    padding: 8px 0px;\n  }\n\n  .preview-title.error {\n    color: ", ";\n  }\n\n  ", ";\n\n  ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n\n  .modal-section-title {\n    font-weight: 500;\n  }\n  .modal-section-subtitle {\n    color: ", ";\n  }\n\n  input {\n    margin-top: 8px;\n  }\n\n  ", ";\n  ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 0;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 12px;\n\n  .modal-section:first-child {\n    margin-top: 24px;\n    ", ";\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

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
var InstructionPanel = styled.div(_templateObject(), _mediaBreakpoints.media.palm(_templateObject2()));
var StyledModalSection = styled.div(_templateObject3(), function (props) {
  return props.theme.subtextColorLT;
}, _mediaBreakpoints.media.portable(_templateObject4()), _mediaBreakpoints.media.palm(_templateObject5()));
var PreviewMap = styled.div(_templateObject6(), function (props) {
  return props.theme.errorColor;
}, _mediaBreakpoints.media.portable(_templateObject7()), _mediaBreakpoints.media.palm(_templateObject8()));
var StyledPreviewImage = styled.div(_templateObject9(), function (props) {
  return props.theme.modalImagePlaceHolder;
}, MapW, MapH);
var InlineLink = styled.a(_templateObject10());

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
      }, _react["default"].createElement(_styledComponents2.StyledModalContent, null, _react["default"].createElement(InstructionPanel, null, _react["default"].createElement(StyledModalSection, {
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
      })), _react["default"].createElement(StyledModalSection, {
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
      })), _react["default"].createElement(StyledModalSection, {
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
      }, inputStyle.error ? ErrorMsg.styleError : inputStyle.style && inputStyle.style.name || ''), _react["default"].createElement(StyledPreviewImage, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9hZGQtbWFwLXN0eWxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbIk1hcEgiLCJNYXBXIiwiRXJyb3JNc2ciLCJzdHlsZUVycm9yIiwiSW5zdHJ1Y3Rpb25QYW5lbCIsInN0eWxlZCIsImRpdiIsIm1lZGlhIiwicGFsbSIsIlN0eWxlZE1vZGFsU2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJzdWJ0ZXh0Q29sb3JMVCIsInBvcnRhYmxlIiwiUHJldmlld01hcCIsImVycm9yQ29sb3IiLCJTdHlsZWRQcmV2aWV3SW1hZ2UiLCJtb2RhbEltYWdlUGxhY2VIb2xkZXIiLCJJbmxpbmVMaW5rIiwiYSIsIkFkZE1hcFN0eWxlTW9kYWwiLCJyZVJlbmRlcktleSIsInN0eWxlIiwibG9hZEN1c3RvbU1hcFN0eWxlIiwiZXJyb3IiLCJtYXBSZWYiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiZGF0YVVyaSIsInRvRGF0YVVSTCIsImljb24iLCJuZXh0UHJvcHMiLCJpbnB1dFN0eWxlIiwiYWNjZXNzVG9rZW4iLCJzZXRTdGF0ZSIsInN0YXRlIiwibWFwIiwiZ2V0TWFwIiwiX21hcCIsIm9uIiwiZ2V0U3R5bGUiLCJsb2FkTWFwU3R5bGVKc29uIiwiaXNTdHlsZUxvYWRlZCIsImxvYWRNYXBTdHlsZUljb24iLCJsb2FkTWFvU3R5bGVFcnJvciIsIm1hcFN0YXRlIiwibWFwUHJvcHMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsInRyYW5zZm9ybVJlcXVlc3QiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0TWFwU3R5bGUiLCJ1cmwiLCJsYWJlbCIsIm5hbWUiLCJpc1ZhbGlkIiwiZWwiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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VjtBQVFFLFFBQUEsUUFBUSxFQUFFZ0MsVUFBVSxDQUFDcUI7QUFSdkIsU0FERixDQUhKLENBSkYsQ0ExQ0YsQ0FERixDQURGO0FBb0VEOzs7RUE3STRCSyxnQjs7aUNBQXpCdEMsZ0IsZUFDZTtBQUNqQnlCLEVBQUFBLFFBQVEsRUFBRWMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFakJULEVBQUFBLGFBQWEsRUFBRU8sc0JBQVVHLElBQVYsQ0FBZUQsVUFGYjtBQUdqQnRDLEVBQUFBLGtCQUFrQixFQUFFb0Msc0JBQVVHLElBQVYsQ0FBZUQsVUFIbEI7QUFJakI3QixFQUFBQSxVQUFVLEVBQUUyQixzQkFBVUMsTUFBVixDQUFpQkM7QUFKWixDOztBQStJckIsSUFBTUUsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQjtBQUFBLFNBQU0zQyxnQkFBTjtBQUFBLENBQWhDOztlQUNlMkMsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTWFwYm94R0xNYXAgZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCB7ZmluZERPTU5vZGV9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge1N0eWxlZE1vZGFsQ29udGVudCwgSW5wdXRMaWdodCwgU3R5bGVkTWFwQ29udGFpbmVyfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xuXG4vLyBVdGlsc1xuaW1wb3J0IHt0cmFuc2Zvcm1SZXF1ZXN0fSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LXV0aWxzJztcblxuY29uc3QgTWFwSCA9IDE5MDtcbmNvbnN0IE1hcFcgPSAyNjQ7XG5jb25zdCBFcnJvck1zZyA9IHtcbiAgc3R5bGVFcnJvciA6ICdGYWlsZWQgdG8gbG9hZCBtYXAgc3R5bGUsIG1ha2Ugc3VyZSBpdCBpcyBwdWJsaXNoZWQuIEZvciBwcml2YXRlIHN0eWxlLCBwYXN0ZSBpbiB5b3VyIGFjY2VzcyB0b2tlbi4nXG59O1xuXG5jb25zdCBJbnN0cnVjdGlvblBhbmVsID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcblxuICAubW9kYWwtc2VjdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAke21lZGlhLnBhbG1gXG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGB9O1xuICB9XG5cbiAgaW5wdXQge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRNb2RhbFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5tb2RhbC1zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5tb2RhbC1zZWN0aW9uLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVH07XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBgfTtcbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgUHJldmlld01hcCA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTE2cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gIC5wcmV2aWV3LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICB9XG5cbiAgLnByZXZpZXctdGl0bGUuZXJyb3Ige1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICB9XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgYH07XG5cbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICAucHJldmlldy10aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuICBgfTtcbmA7XG5cbmNvbnN0IFN0eWxlZFByZXZpZXdJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxJbWFnZVBsYWNlSG9sZGVyfTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjE4KTtcbiAgd2lkdGg6ICR7TWFwV31weDtcbiAgaGVpZ2h0OiAke01hcEh9cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAucHJldmlldy1pbWFnZS1wbGFjZWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Utc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xuICB9XG5gO1xuXG5jb25zdCBJbmxpbmVMaW5rID0gc3R5bGVkLmFgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmNsYXNzIEFkZE1hcFN0eWxlTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1hcFN0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgaW5wdXRNYXBTdHlsZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBsb2FkQ3VzdG9tTWFwU3R5bGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgaW5wdXRTdHlsZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgcmVSZW5kZXJLZXk6IDBcbiAgfTtcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmlucHV0U3R5bGUuYWNjZXNzVG9rZW4gIT09IG5leHRQcm9wcy5pbnB1dFN0eWxlLmFjY2Vzc1Rva2VuKSB7XG4gICAgICAvLyB0b2tlIGhhcyBjaGFuZ2VkXG4gICAgICAvLyBSZWFjdE1hcEdsIGRvZXNuJ3QgcmUtY3JlYXRlIG1hcCB3aGVuIHRva2VuIGhhcyBjaGFuZ2VkXG4gICAgICAvLyBoZXJlIHdlIGZvcmNlIHRoZSBtYXAgdG8gdXBkYXRlXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcmVSZW5kZXJLZXk6IHRoaXMuc3RhdGUucmVSZW5kZXJLZXkgKyAxXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgbWFwID0gdGhpcy5tYXBSZWYgJiYgdGhpcy5tYXBSZWYuZ2V0TWFwKCk7XG4gICAgaWYgKG1hcCAmJiB0aGlzLl9tYXAgIT09IG1hcCkge1xuICAgICAgdGhpcy5fbWFwID0gbWFwO1xuXG4gICAgICBtYXAub24oJ3N0eWxlLmxvYWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gbWFwLmdldFN0eWxlKCk7XG4gICAgICAgIHRoaXMubG9hZE1hcFN0eWxlSnNvbihzdHlsZSk7XG4gICAgICB9KTtcblxuICAgICAgbWFwLm9uKCdyZW5kZXInLCAoKSA9PiB7XG4gICAgICAgIGlmIChtYXAuaXNTdHlsZUxvYWRlZCgpKSB7XG4gICAgICAgICAgdGhpcy5sb2FkTWFwU3R5bGVJY29uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBtYXAub24oJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmxvYWRNYW9TdHlsZUVycm9yKCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGxvYWRNYXBTdHlsZUpzb24gPSAoc3R5bGUpID0+IHtcbiAgICB0aGlzLnByb3BzLmxvYWRDdXN0b21NYXBTdHlsZSh7c3R5bGUsIGVycm9yOiBmYWxzZX0pO1xuICB9O1xuXG4gIGxvYWRNYXBTdHlsZUljb24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMubWFwUmVmKSB7XG4gICAgICBjb25zdCBjYW52YXMgPSBmaW5kRE9NTm9kZSh0aGlzLm1hcFJlZikucXVlcnlTZWxlY3RvcignLm1hcGJveGdsLWNhbnZhcycpO1xuICAgICAgY29uc3QgZGF0YVVyaSA9IGNhbnZhcy50b0RhdGFVUkwoKTtcbiAgICAgIHRoaXMucHJvcHMubG9hZEN1c3RvbU1hcFN0eWxlKHtcbiAgICAgICAgaWNvbjogZGF0YVVyaVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGxvYWRNYW9TdHlsZUVycm9yID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMubG9hZEN1c3RvbU1hcFN0eWxlKHtlcnJvcjogdHJ1ZX0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7aW5wdXRTdHlsZSwgbWFwU3RhdGV9ID0gdGhpcy5wcm9wcztcblxuICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAuLi5tYXBTdGF0ZSxcbiAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IGlucHV0U3R5bGUuYWNjZXNzVG9rZW4gfHwgdGhpcy5wcm9wcy5tYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICB0cmFuc2Zvcm1SZXF1ZXN0XG4gIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGQtbWFwLXN0eWxlLW1vZGFsXCI+XG4gICAgICAgIDxTdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgPEluc3RydWN0aW9uUGFuZWw+XG4gICAgICAgICAgICA8U3R5bGVkTW9kYWxTZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+MS4gUHVibGlzaCB5b3VyIHN0eWxlIGF0IG1hcGJveCBvciBwcm92aWRlIGFjY2VzcyB0b2tlbjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBtYXAgc3R5bGUgYXRcbiAgICAgICAgICAgICAgICA8SW5saW5lTGluayB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9zdHVkaW8vc3R5bGVzL1wiPiBtYXBib3g8L0lubGluZUxpbms+IGFuZFxuICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2hlbHAvc3R1ZGlvLW1hbnVhbC1wdWJsaXNoL1wiPiBwdWJsaXNoPC9JbmxpbmVMaW5rPiBpdC5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIFRvIHVzZSBwcml2YXRlIHN0eWxlLCBwYXN0ZSB5b3VyXG4gICAgICAgICAgICAgICAgPElubGluZUxpbmsgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9ob3ctYWNjZXNzLXRva2Vucy13b3JrL1wiPiBhY2Nlc3MgdG9rZW48L0lubGluZUxpbms+IGhlcmUuICprZXBsZXIuZ2wgaXMgYSBjbGllbnQtc2lkZSBhcHBsaWNhdGlvbiwgZGF0YSBzdGF5cyBpbiB5b3VyIGJyb3dzZXIuLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0U3R5bGUuYWNjZXNzVG9rZW4gfHwgJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4gdGhpcy5wcm9wcy5pbnB1dE1hcFN0eWxlKHsuLi5pbnB1dFN0eWxlLCBhY2Nlc3NUb2tlbjogdmFsdWV9KX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gcGsuYWJjZGVmZy54eHh4eHhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG4gICAgICAgICAgICA8U3R5bGVkTW9kYWxTZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+Mi4gUGFzdGUgc3R5bGUgdXJsPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIFdoYXQgaXMgYVxuICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2hlbHAvc3R1ZGlvLW1hbnVhbC1wdWJsaXNoLyNzdHlsZS11cmxcIj4gc3R5bGUgVVJMPC9JbmxpbmVMaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0U3R5bGUudXJsIHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldDoge3ZhbHVlfX0pID0+IHRoaXMucHJvcHMuaW5wdXRNYXBTdHlsZSh7Li4uaW5wdXRTdHlsZSwgdXJsOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGF2aXovYWJjZGVmZ2hpamtsbW5vcHFcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG4gICAgICAgICAgICA8U3R5bGVkTW9kYWxTZWN0aW9uIGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+My4gTmFtZSB5b3VyIHN0eWxlPC9kaXY+XG4gICAgICAgICAgICAgIDxJbnB1dExpZ2h0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFN0eWxlLmxhYmVsIHx8ICcnfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldDoge3ZhbHVlfX0pID0+IHRoaXMucHJvcHMuaW5wdXRNYXBTdHlsZSh7Li4uaW5wdXRTdHlsZSwgbGFiZWw6IHZhbHVlfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICAgICAgICA8L0luc3RydWN0aW9uUGFuZWw+XG4gICAgICAgICAgPFByZXZpZXdNYXA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncHJldmlldy10aXRsZScsIHtlcnJvcjogaW5wdXRTdHlsZS5lcnJvcn0pfT5cbiAgICAgICAgICAgICAge2lucHV0U3R5bGUuZXJyb3IgPyBFcnJvck1zZy5zdHlsZUVycm9yIDpcbiAgICAgICAgICAgICAgICAoaW5wdXRTdHlsZS5zdHlsZSAmJiBpbnB1dFN0eWxlLnN0eWxlLm5hbWUpIHx8ICcnfTwvZGl2PlxuICAgICAgICAgICAgPFN0eWxlZFByZXZpZXdJbWFnZSBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCI+XG4gICAgICAgICAgICAgIHshaW5wdXRTdHlsZS5pc1ZhbGlkID9cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiLz4gOlxuICAgICAgICAgICAgICAgIDxTdHlsZWRNYXBDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8TWFwYm94R0xNYXBcbiAgICAgICAgICAgICAgICAgICAgey4uLm1hcFByb3BzfVxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFJlZiA9IGVsO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3RoaXMuc3RhdGUucmVSZW5kZXJLZXl9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtNYXBXfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e01hcEh9XG4gICAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPXtpbnB1dFN0eWxlLnVybH0vPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1N0eWxlZFByZXZpZXdJbWFnZT5cbiAgICAgICAgICA8L1ByZXZpZXdNYXA+XG4gICAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSA9ICgpID0+IEFkZE1hcFN0eWxlTW9kYWw7XG5leHBvcnQgZGVmYXVsdCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeTtcbiJdfQ==