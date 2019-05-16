"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledConfigGroupHeader = exports.StyledLayerConfigGroup = exports.ConfigGroupCollapsibleContent = exports.StyledLayerConfigGroupAction = exports.StyledLayerConfigGroupLabel = void 0;

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

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    * {\n      pointer-events: none;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  :hover {\n    cursor: pointer;\n    .layer-config-group__label {\n      color: ", ";\n      border-left: 2px solid ", ";\n    }\n\n    .layer-config-group__action {\n      color:  ", ";\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 18px;\n  margin-bottom: 12px;\n\n  &.collapsed {\n    .layer-config-group__content {\n\n      .layer-config-group__content__collapsible {\n        /* display: none; */\n        /* flex: 0; */\n        overflow: hidden;\n        max-height: 0;\n      }\n    }\n  }\n"]);

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
var StyledLayerConfigGroup = styled.div(_templateObject4());
exports.StyledLayerConfigGroup = StyledLayerConfigGroup;
var StyledConfigGroupHeader = styled.div(_templateObject5(), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});
exports.StyledConfigGroupHeader = StyledConfigGroupHeader;
var ConfigGroupContent = styled.div(_templateObject6());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29uZmlnLWdyb3VwLmpzIl0sIm5hbWVzIjpbIlN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwidGV4dENvbG9yIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiIsIkNvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJTdHlsZWRMYXllckNvbmZpZ0dyb3VwIiwiU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXIiLCJ0ZXh0Q29sb3JIbCIsIkNvbmZpZ0dyb3VwQ29udGVudCIsIkxheWVyQ29uZmlnR3JvdXAiLCJjb2xsYXBzZWQiLCJfc2V0Q29sbGFwc2VTdGF0ZSIsImV4cGFuZGVkIiwibmV4dFByb3BzIiwic3RhdGUiLCJzZXRTdGF0ZSIsImxhYmVsIiwiY2hpbGRyZW4iLCJwcm9wZXJ0eSIsImxheWVyIiwib25DaGFuZ2UiLCJjb2xsYXBzaWJsZSIsImNvbmZpZyIsInZpc0NvbmZpZyIsImlkIiwiZGlzYWJsZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSwyQkFBMkIsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUNiLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQURRLEVBRTdCLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBaEI7QUFBQSxDQUZ3QixDQUFqQzs7QUFZQSxJQUFNQyw0QkFBNEIsR0FB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QUFBZSxRQUFBLE1BQU0sRUFBQztBQUF0QixRQUFILEdBQW9DLElBVmxELENBTkYsQ0FERixFQW9CRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLDRCQUFXLDZCQUFYLEVBQTBDO0FBQ25ESSxVQUFBQSxRQUFRLEVBQUVQLFFBQVEsSUFBSSxDQUFDQyxLQUFLLENBQUNHLE1BQU4sQ0FBYUMsU0FBYixDQUF1QkwsUUFBdkI7QUFENEIsU0FBMUM7QUFEYixTQUtHRCxRQUxILENBcEJGLENBREY7QUE4QkQ7OztFQXJFMkNTLGdCOzs7aUNBQXpCakIsZ0Isa0JBRUc7QUFDcEJZLEVBQUFBLFdBQVcsRUFBRSxLQURPO0FBRXBCVCxFQUFBQSxRQUFRLEVBQUUsS0FGVTtBQUdwQlEsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUU7QUFIRSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XG5pbXBvcnQge1ZlcnRUaHJlZURvdHN9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSdcbn0pYFxuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjNzIGVhc2Utb3V0O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYXllckNvbmZpZ0dyb3VwID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gICYuY29sbGFwc2VkIHtcbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50IHtcblxuICAgICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudF9fY29sbGFwc2libGUge1xuICAgICAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xuICAgICAgICAvKiBmbGV4OiAwOyAqL1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2xhYmVsIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuXG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fYWN0aW9uIHtcbiAgICAgIGNvbG9yOiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBDb25maWdHcm91cENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAmLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgKiB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyQ29uZmlnR3JvdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgIGV4cGFuZGVkOiBmYWxzZSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBjb2xsYXBzZWQ6IHRydWVcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9zZXRDb2xsYXBzZVN0YXRlKHRoaXMucHJvcHMuZXhwYW5kZWQpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICB0aGlzLl9zZXRDb2xsYXBzZVN0YXRlKG5leHRQcm9wcy5leHBhbmRlZCk7XG4gIH1cblxuICBfc2V0Q29sbGFwc2VTdGF0ZShleHBhbmRlZCkge1xuICAgIC8vIGlmIHByb3BzLGV4cGFuZGVkLCBhbmQgc3RhdGUgY29sbGFwc2VkLCBzZXQgY29sbGFwc2VkIHRvIGJlIGZhbHNlXG4gICAgaWYgKGV4cGFuZGVkICYmIHRoaXMuc3RhdGUuY29sbGFwc2VkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjb2xsYXBzZWQ6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGxhYmVsLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBwcm9wZXJ0eSxcbiAgICAgIGxheWVyLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBjb2xsYXBzaWJsZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge2NvbGxhcHNlZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwJywge2NvbGxhcHNlZH0pfT5cbiAgICAgICAgPFN0eWxlZENvbmZpZ0dyb3VwSGVhZGVyIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9faGVhZGVyXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtjb2xsYXBzZWQ6ICF0aGlzLnN0YXRlLmNvbGxhcHNlZH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPFN0eWxlZExheWVyQ29uZmlnR3JvdXBMYWJlbCBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2xhYmVsXCI+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9TdHlsZWRMYXllckNvbmZpZ0dyb3VwTGFiZWw+XG4gICAgICAgICAgPFN0eWxlZExheWVyQ29uZmlnR3JvdXBBY3Rpb24gY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnLWdyb3VwX19hY3Rpb25cIj5cbiAgICAgICAgICAgIHtwcm9wZXJ0eSA/IChcbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2xheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldfVxuICAgICAgICAgICAgICAgIGlkPXtgJHtsYXllci5pZH0tJHtwcm9wZXJ0eX1gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2Uoe1twcm9wZXJ0eV06ICFsYXllci5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7Y29sbGFwc2libGUgPyA8VmVydFRocmVlRG90cyBoZWlnaHQ9XCIxOHB4XCIvPiA6IG51bGx9XG4gICAgICAgICAgPC9TdHlsZWRMYXllckNvbmZpZ0dyb3VwQWN0aW9uPlxuICAgICAgICA8L1N0eWxlZENvbmZpZ0dyb3VwSGVhZGVyPlxuICAgICAgICA8Q29uZmlnR3JvdXBDb250ZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdsYXllci1jb25maWctZ3JvdXBfX2NvbnRlbnQnLCB7XG4gICAgICAgICAgICBkaXNhYmxlZDogcHJvcGVydHkgJiYgIWxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ29uZmlnR3JvdXBDb250ZW50PlxuICAgICAgPC9TdHlsZWRMYXllckNvbmZpZ0dyb3VwPlxuICAgICk7XG4gIH1cbn1cblxuIl19