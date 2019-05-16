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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: ", "px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var HeaderActionWrapper = styled.div(_templateObject(), function (props) {
  return props.flush ? 0 : 8;
}, function (props) {
  return props.active ? props.theme.panelHeaderIconActive : props.theme.panelHeaderIcon;
}, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
}); // Need to use react class to access props.component

var PanelHeaderAction =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(PanelHeaderAction, _Component);

  function PanelHeaderAction() {
    (0, _classCallCheck2["default"])(this, PanelHeaderAction);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PanelHeaderAction).apply(this, arguments));
  }

  (0, _createClass2["default"])(PanelHeaderAction, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          tooltip = _this$props.tooltip,
          id = _this$props.id,
          active = _this$props.active,
          flush = _this$props.flush,
          hoverColor = _this$props.hoverColor,
          tooltipType = _this$props.tooltipType,
          disabled = _this$props.disabled,
          className = _this$props.className;
      return _react["default"].createElement(HeaderActionWrapper, {
        className: (0, _classnames2["default"])('panel--header__action', (0, _defineProperty2["default"])({
          disabled: disabled
        }, className, className)),
        active: active,
        hoverColor: hoverColor,
        flush: flush
      }, _react["default"].createElement(this.props.IconComponent, {
        "data-tip": true,
        "data-for": "".concat(tooltip, "_").concat(id),
        height: "18px",
        onClick: onClick
      }), tooltip ? _react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(tooltip, "_").concat(id),
        effect: "solid",
        delayShow: 500,
        type: tooltipType
      }, _react["default"].createElement("span", null, tooltip)) : null);
    }
  }]);
  return PanelHeaderAction;
}(_react.Component);

exports["default"] = PanelHeaderAction;
(0, _defineProperty2["default"])(PanelHeaderAction, "propTypes", {
  id: _propTypes["default"].string,
  flush: _propTypes["default"].bool,
  tooltip: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  active: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  hoverColor: _propTypes["default"].string,
  className: _propTypes["default"].string,
  tooltipType: _propTypes["default"].string
});
(0, _defineProperty2["default"])(PanelHeaderAction, "defaultProps", {
  onClick: function onClick() {},
  hoverColor: null,
  active: false
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLWFjdGlvbi5qcyJdLCJuYW1lcyI6WyJIZWFkZXJBY3Rpb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJmbHVzaCIsImFjdGl2ZSIsInRoZW1lIiwicGFuZWxIZWFkZXJJY29uQWN0aXZlIiwicGFuZWxIZWFkZXJJY29uIiwiaG92ZXJDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJvbkNsaWNrIiwidG9vbHRpcCIsImlkIiwidG9vbHRpcFR5cGUiLCJkaXNhYmxlZCIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUNSLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFkLEdBQWtCLENBQXZCO0FBQUEsQ0FERyxFQUlkLFVBQUFELEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNFLE1BQU4sR0FDSUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLHFCQURoQixHQUVJSixLQUFLLENBQUNHLEtBQU4sQ0FBWUUsZUFISjtBQUFBLENBSlMsRUFXWixVQUFBTCxLQUFLO0FBQUEsU0FDWkEsS0FBSyxDQUFDTSxVQUFOLEdBQ0lOLEtBQUssQ0FBQ0csS0FBTixDQUFZSCxLQUFLLENBQUNNLFVBQWxCLENBREosR0FFSU4sS0FBSyxDQUFDRyxLQUFOLENBQVlJLFdBSEo7QUFBQSxDQVhPLENBQXpCLEMsQ0F1QkE7O0lBQ3FCQyxpQjs7Ozs7Ozs7Ozs7OzZCQW1CVjtBQUFBLHdCQVdILEtBQUtSLEtBWEY7QUFBQSxVQUVMUyxPQUZLLGVBRUxBLE9BRks7QUFBQSxVQUdMQyxPQUhLLGVBR0xBLE9BSEs7QUFBQSxVQUlMQyxFQUpLLGVBSUxBLEVBSks7QUFBQSxVQUtMVCxNQUxLLGVBS0xBLE1BTEs7QUFBQSxVQU1MRCxLQU5LLGVBTUxBLEtBTks7QUFBQSxVQU9MSyxVQVBLLGVBT0xBLFVBUEs7QUFBQSxVQVFMTSxXQVJLLGVBUUxBLFdBUks7QUFBQSxVQVNMQyxRQVRLLGVBU0xBLFFBVEs7QUFBQSxVQVVMQyxTQVZLLGVBVUxBLFNBVks7QUFZUCxhQUNFLGdDQUFDLG1CQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNkJBQVcsdUJBQVg7QUFBcUNELFVBQUFBLFFBQVEsRUFBUkE7QUFBckMsV0FBZ0RDLFNBQWhELEVBQTREQSxTQUE1RCxFQURiO0FBRUUsUUFBQSxNQUFNLEVBQUVaLE1BRlY7QUFHRSxRQUFBLFVBQVUsRUFBRUksVUFIZDtBQUlFLFFBQUEsS0FBSyxFQUFFTDtBQUpULFNBTUUscUNBQU0sS0FBTixDQUFZLGFBQVo7QUFDRSx3QkFERjtBQUVFLDhCQUFhUyxPQUFiLGNBQXdCQyxFQUF4QixDQUZGO0FBR0UsUUFBQSxNQUFNLEVBQUMsTUFIVDtBQUlFLFFBQUEsT0FBTyxFQUFFRjtBQUpYLFFBTkYsRUFZR0MsT0FBTyxHQUNOLGdDQUFDLDBCQUFEO0FBQ0UsUUFBQSxFQUFFLFlBQUtBLE9BQUwsY0FBZ0JDLEVBQWhCLENBREo7QUFFRSxRQUFBLE1BQU0sRUFBQyxPQUZUO0FBR0UsUUFBQSxTQUFTLEVBQUUsR0FIYjtBQUlFLFFBQUEsSUFBSSxFQUFFQztBQUpSLFNBTUUsOENBQU9GLE9BQVAsQ0FORixDQURNLEdBU0osSUFyQk4sQ0FERjtBQXlCRDs7O0VBeEQ0Q0ssZ0I7OztpQ0FBMUJQLGlCLGVBQ0E7QUFDakJHLEVBQUFBLEVBQUUsRUFBRUssc0JBQVVDLE1BREc7QUFFakJoQixFQUFBQSxLQUFLLEVBQUVlLHNCQUFVRSxJQUZBO0FBR2pCUixFQUFBQSxPQUFPLEVBQUVNLHNCQUFVQyxNQUhGO0FBSWpCUixFQUFBQSxPQUFPLEVBQUVPLHNCQUFVRyxJQUpGO0FBS2pCakIsRUFBQUEsTUFBTSxFQUFFYyxzQkFBVUUsSUFMRDtBQU1qQkwsRUFBQUEsUUFBUSxFQUFFRyxzQkFBVUUsSUFOSDtBQU9qQlosRUFBQUEsVUFBVSxFQUFFVSxzQkFBVUMsTUFQTDtBQVFqQkgsRUFBQUEsU0FBUyxFQUFFRSxzQkFBVUMsTUFSSjtBQVNqQkwsRUFBQUEsV0FBVyxFQUFFSSxzQkFBVUM7QUFUTixDO2lDQURBVCxpQixrQkFhRztBQUNwQkMsRUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FERztBQUVwQkgsRUFBQUEsVUFBVSxFQUFFLElBRlE7QUFHcEJKLEVBQUFBLE1BQU0sRUFBRTtBQUhZLEM7QUE0Q3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IEhlYWRlckFjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiAocHJvcHMuZmx1c2ggPyAwIDogOCl9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbkFjdGl2ZVxuICAgICAgOiBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb259O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5ob3ZlckNvbG9yXG4gICAgICAgID8gcHJvcHMudGhlbWVbcHJvcHMuaG92ZXJDb2xvcl1cbiAgICAgICAgOiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbmA7XG5cbi8vIE5lZWQgdG8gdXNlIHJlYWN0IGNsYXNzIHRvIGFjY2VzcyBwcm9wcy5jb21wb25lbnRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsSGVhZGVyQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmbHVzaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBob3ZlckNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0b29sdGlwVHlwZTogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbGljazogKCkgPT4ge30sXG4gICAgaG92ZXJDb2xvcjogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uQ2xpY2ssXG4gICAgICB0b29sdGlwLFxuICAgICAgaWQsXG4gICAgICBhY3RpdmUsXG4gICAgICBmbHVzaCxcbiAgICAgIGhvdmVyQ29sb3IsXG4gICAgICB0b29sdGlwVHlwZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgY2xhc3NOYW1lXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIZWFkZXJBY3Rpb25XcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygncGFuZWwtLWhlYWRlcl9fYWN0aW9uJywge2Rpc2FibGVkLCBbY2xhc3NOYW1lXTogY2xhc3NOYW1lfSl9XG4gICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICBob3ZlckNvbG9yPXtob3ZlckNvbG9yfVxuICAgICAgICBmbHVzaD17Zmx1c2h9XG4gICAgICA+XG4gICAgICAgIDx0aGlzLnByb3BzLkljb25Db21wb25lbnRcbiAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgIGRhdGEtZm9yPXtgJHt0b29sdGlwfV8ke2lkfWB9XG4gICAgICAgICAgaGVpZ2h0PVwiMThweFwiXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgLz5cbiAgICAgICAge3Rvb2x0aXAgPyAoXG4gICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgIGlkPXtgJHt0b29sdGlwfV8ke2lkfWB9XG4gICAgICAgICAgICBlZmZlY3Q9XCJzb2xpZFwiXG4gICAgICAgICAgICBkZWxheVNob3c9ezUwMH1cbiAgICAgICAgICAgIHR5cGU9e3Rvb2x0aXBUeXBlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPnt0b29sdGlwfTwvc3Bhbj5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9IZWFkZXJBY3Rpb25XcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iXX0=