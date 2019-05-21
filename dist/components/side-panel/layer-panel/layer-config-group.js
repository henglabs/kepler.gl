"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledConfigGroupHeader = exports.StyledLayerConfigGroup = exports.ConfigGroupCollapsibleHeader = exports.ConfigGroupCollapsibleContent = exports.StyledLayerConfigGroupAction = exports.StyledLayerConfigGroupLabel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _icons = require("../../common/icons");

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    * {\n      pointer-events: none;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  :hover {\n    cursor: pointer;\n    .layer-config-group__label {\n      color: ", ";\n      border-left: 2px solid ", ";\n    }\n\n    .layer-config-group__action {\n      color:  ", ";\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 18px;\n  margin-bottom: 12px;\n\n  &.collapsed {\n    .layer-config-group__header__collapsible {\n      overflow: visible;\n      max-height: 600px;\n    }\n    .layer-config-group__content {\n\n      .layer-config-group__content__collapsible {\n        overflow: hidden;\n        max-height: 0;\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  overflow: hidden;\n  max-height: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  transition: max-height 0.3s ease-out;\n  height: max-content;\n  max-height: 600px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-left: 2px solid ", ";\n  color: ", ";\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 12px;\n  margin-left: -12px;\n  padding-left: 10px;\n  text-transform: capitalize;\n  letter-spacing: 0.2px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledLayerConfigGroupLabel = styled.div(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.textColor;
});
exports.StyledLayerConfigGroupLabel = StyledLayerConfigGroupLabel;
var StyledLayerConfigGroupAction = styled.div(_templateObject2(), function (props) {
  return props.theme.textColor;
});
exports.StyledLayerConfigGroupAction = StyledLayerConfigGroupAction;
var ConfigGroupCollapsibleContent = styled.div.attrs({
  className: 'layer-config-group__content__collapsible'
})(_templateObject3());
exports.ConfigGroupCollapsibleContent = ConfigGroupCollapsibleContent;
var ConfigGroupCollapsibleHeader = styled.div.attrs({
  className: 'layer-config-group__header__collapsible'
})(_templateObject4());
exports.ConfigGroupCollapsibleHeader = ConfigGroupCollapsibleHeader;
var StyledLayerConfigGroup = styled.div(_templateObject5());
exports.StyledLayerConfigGroup = StyledLayerConfigGroup;
var StyledConfigGroupHeader = styled.div(_templateObject6(), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});
exports.StyledConfigGroupHeader = StyledConfigGroupHeader;
var ConfigGroupContent = styled.div(_templateObject7());

var LayerConfigGroup =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(LayerConfigGroup, _Component);

  function LayerConfigGroup() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, LayerConfigGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(LayerConfigGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      collapsed: true
    });
    return _this;
  }

  (0, _createClass2["default"])(LayerConfigGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setCollapseState(this.props.expanded);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this._setCollapseState(nextProps.expanded);
    }
  }, {
    key: "_setCollapseState",
    value: function _setCollapseState(expanded) {
      // if props,expanded, and state collapsed, set collapsed to be false
      if (expanded && this.state.collapsed) {
        this.setState({
          collapsed: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          property = _this$props.property,
          layer = _this$props.layer,
          _onChange2 = _this$props.onChange,
          collapsible = _this$props.collapsible;
      var collapsed = this.state.collapsed;
      return _react["default"].createElement(StyledLayerConfigGroup, {
        className: (0, _classnames["default"])('layer-config-group', {
          collapsed: collapsed
        })
      }, _react["default"].createElement(StyledConfigGroupHeader, {
        className: "layer-config-group__header",
        onClick: function onClick() {
          return _this2.setState({
            collapsed: !_this2.state.collapsed
          });
        }
      }, _react["default"].createElement(StyledLayerConfigGroupLabel, {
        className: "layer-config-group__label"
      }, label), _react["default"].createElement(StyledLayerConfigGroupAction, {
        className: "layer-config-group__action"
      }, property ? _react["default"].createElement(_switch["default"], {
        checked: layer.config.visConfig[property],
        id: "".concat(layer.id, "-").concat(property),
        onChange: function onChange() {
          return _onChange2((0, _defineProperty2["default"])({}, property, !layer.config.visConfig[property]));
        }
      }) : null, collapsible ? _react["default"].createElement(_icons.VertThreeDots, {
        height: "18px"
      }) : null)), _react["default"].createElement(ConfigGroupContent, {
        className: (0, _classnames["default"])('layer-config-group__content', {
          disabled: property && !layer.config.visConfig[property]
        })
      }, children));
    }
  }]);
  return LayerConfigGroup;
}(_react.Component);

exports["default"] = LayerConfigGroup;
(0, _defineProperty2["default"])(LayerConfigGroup, "defaultProps", {
  collapsible: false,
  expanded: false,
  onChange: function onChange() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlnLWdyb3VwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwidGV4dENvbG9yIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiIsIkNvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cCIsIlN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyIiwidGV4dENvbG9ySGwiLCJDb25maWdHcm91cENvbnRlbnQiLCJMYXllckNvbmZpZ0dyb3VwIiwiY29sbGFwc2VkIiwiX3NldENvbGxhcHNlU3RhdGUiLCJleHBhbmRlZCIsIm5leHRQcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJsYWJlbCIsImNoaWxkcmVuIiwicHJvcGVydHkiLCJsYXllciIsIm9uQ2hhbmdlIiwiY29sbGFwc2libGUiLCJjb25maWciLCJ2aXNDb25maWciLCJpZCIsImRpc2FibGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQU1BLDJCQUEyQixHQUFHQyxNQUFNLENBQUNDLEdBQVYsb0JBQ2IsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRFEsRUFFN0IsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFo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QUFFO0FBQUEsaUJBQ1JFLFVBQVEsc0NBQUdGLFFBQUgsRUFBYyxDQUFDQyxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsU0FBYixDQUF1QkwsUUFBdkIsQ0FBZixFQURBO0FBQUE7QUFIWixRQURPLEdBUUwsSUFUTixFQVVHRyxXQUFXLEdBQUcsZ0NBQUMsb0JBQUQ7QUFBZSxRQUFBLE1BQU0sRUFBQztBQUF0QixRQUFILEdBQW9DLElBVmxELENBTkYsQ0FERixFQW9CRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLDRCQUFXLDZCQUFYLEVBQTBDO0FBQ25ESSxVQUFBQSxRQUFRLEVBQUVQLFFBQVEsSUFBSSxDQUFDQyxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsU0FBYixDQUF1QkwsUUFBdkI7QUFENEIsU0FBMUM7QUFEYixTQUtHRCxRQUxILENBcEJGLENBREY7QUE4QkQ7OztFQXJFMkNTLGdCOzs7aUNBQXpCakIsZ0Isa0JBRUc7QUFDcEJZLEVBQUFBLFdBQVcsRUFBRSxLQURPO0FBRXBCVCxFQUFBQSxRQUFRLEVBQUUsS0FGVTtBQUdwQlEsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUU7QUFIRSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XG5pbXBvcnQge1ZlcnRUaHJlZURvdHN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSdcbn0pYFxuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLWNvbmZpZy1ncm91cF9faGVhZGVyX19jb2xsYXBzaWJsZSdcbn0pYFxuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LWhlaWdodDogMDtcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgJi5jb2xsYXBzZWQge1xuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICB9XG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCB7XG5cbiAgICAgIC5sYXllci1jb25maWctZ3JvdXBfX2NvbnRlbnRfX2NvbGxhcHNpYmxlIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRDb25maWdHcm91cEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19sYWJlbCB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cblxuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2FjdGlvbiB7XG4gICAgICBjb2xvcjogICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQ29uZmlnR3JvdXBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllckNvbmZpZ0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9XG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgY29sbGFwc2VkOiB0cnVlXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5fc2V0Q29sbGFwc2VTdGF0ZSh0aGlzLnByb3BzLmV4cGFuZGVkKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5fc2V0Q29sbGFwc2VTdGF0ZShuZXh0UHJvcHMuZXhwYW5kZWQpO1xuICB9XG5cbiAgX3NldENvbGxhcHNlU3RhdGUoZXhwYW5kZWQpIHtcbiAgICAvLyBpZiBwcm9wcyxleHBhbmRlZCwgYW5kIHN0YXRlIGNvbGxhcHNlZCwgc2V0IGNvbGxhcHNlZCB0byBiZSBmYWxzZVxuICAgIGlmIChleHBhbmRlZCAmJiB0aGlzLnN0YXRlLmNvbGxhcHNlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y29sbGFwc2VkOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcHJvcGVydHksXG4gICAgICBsYXllcixcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgY29sbGFwc2libGVcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtjb2xsYXBzZWR9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJDb25maWdHcm91cCBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheWVyLWNvbmZpZy1ncm91cCcsIHtjb2xsYXBzZWR9KX0+XG4gICAgICAgIDxTdHlsZWRDb25maWdHcm91cEhlYWRlciBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2hlYWRlclwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7Y29sbGFwc2VkOiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWR9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwTGFiZWwgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnLWdyb3VwX19sYWJlbFwiPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsPlxuICAgICAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwQWN0aW9uIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9fYWN0aW9uXCI+XG4gICAgICAgICAgICB7cHJvcGVydHkgPyAoXG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX1cbiAgICAgICAgICAgICAgICBpZD17YCR7bGF5ZXIuaWR9LSR7cHJvcGVydHl9YH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT5cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtbcHJvcGVydHldOiAhbGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV19KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAge2NvbGxhcHNpYmxlID8gPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMThweFwiLz4gOiBudWxsfVxuICAgICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbj5cbiAgICAgICAgPC9TdHlsZWRDb25maWdHcm91cEhlYWRlcj5cbiAgICAgICAgPENvbmZpZ0dyb3VwQ29udGVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50Jywge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHByb3BlcnR5ICYmICFsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XVxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0NvbmZpZ0dyb3VwQ29udGVudD5cbiAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cD5cbiAgICApO1xuICB9XG59XG5cbiJdfQ==