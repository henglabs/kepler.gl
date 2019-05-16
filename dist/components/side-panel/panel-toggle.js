"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  margin-right: 12px;\n  padding-bottom: 6px;\n  width: 30px;\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  panels: _propTypes["default"].arrayOf(_propTypes["default"].object),
  activePanel: _propTypes["default"].string,
  togglePanel: _propTypes["default"].func
};
var PanelHeaderBottom = styled.div.attrs({
  className: 'side-side-panel__header__bottom'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});
var PanelTab = styled.div.attrs({
  className: 'side-panel__tab'
})(_templateObject2(), function (props) {
  return props.active ? props.theme.subtextColorActive : 'transparent';
}, function (props) {
  return props.active ? props.theme.subtextColorActive : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelToggleFactory = function PanelToggleFactory() {
  var PanelToggle = function PanelToggle(_ref) {
    var panels = _ref.panels,
        activePanel = _ref.activePanel,
        togglePanel = _ref.togglePanel;
    return _react["default"].createElement(PanelHeaderBottom, null, panels.map(function (panel) {
      return _react["default"].createElement(PanelTab, {
        key: panel.id,
        "data-tip": true,
        "data-for": "".concat(panel.id, "-nav"),
        active: activePanel === panel.id,
        onClick: function onClick() {
          return togglePanel(panel.id);
        }
      }, _react["default"].createElement(panel.iconComponent, {
        height: "20px"
      }), _react["default"].createElement(_styledComponents2.Tooltip, {
        id: "".concat(panel.id, "-nav"),
        effect: "solid",
        delayShow: 500,
        place: "bottom"
      }, _react["default"].createElement("span", null, panel.label || panel.id)));
    }));
  };

  PanelToggle.propTypes = propTypes;
  return PanelToggle;
};

var _default = PanelToggleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsInBhbmVscyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJhY3RpdmVQYW5lbCIsInN0cmluZyIsInRvZ2dsZVBhbmVsIiwiZnVuYyIsIlBhbmVsSGVhZGVyQm90dG9tIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJQYW5lbFRhYiIsImFjdGl2ZSIsInN1YnRleHRDb2xvckFjdGl2ZSIsInN1YnRleHRDb2xvciIsInRleHRDb2xvckhsIiwiUGFuZWxUb2dnbGVGYWN0b3J5IiwiUGFuZWxUb2dnbGUiLCJtYXAiLCJwYW5lbCIsImlkIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLE1BQU0sRUFBRUMsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxNQUE1QixDQURRO0FBRWhCQyxFQUFBQSxXQUFXLEVBQUVILHNCQUFVSSxNQUZQO0FBR2hCQyxFQUFBQSxXQUFXLEVBQUVMLHNCQUFVTTtBQUhQLENBQWxCO0FBTUEsSUFBTUMsaUJBQWlCLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3pDQyxFQUFBQSxTQUFTLEVBQUU7QUFEOEIsQ0FBakIsQ0FBSCxvQkFHRCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGlCQUFoQjtBQUFBLENBSEosQ0FBdkI7QUFTQSxJQUFNQyxRQUFRLEdBQUdQLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ2hDQyxFQUFBQSxTQUFTLEVBQUU7QUFEcUIsQ0FBakIsQ0FBSCxxQkFNVyxVQUFBQyxLQUFLO0FBQUEsU0FDNUJBLEtBQUssQ0FBQ0ksTUFBTixHQUFlSixLQUFLLENBQUNDLEtBQU4sQ0FBWUksa0JBQTNCLEdBQWdELGFBRHBCO0FBQUEsQ0FOaEIsRUFRSCxVQUFBTCxLQUFLO0FBQUEsU0FDZEEsS0FBSyxDQUFDSSxNQUFOLEdBQWVKLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxrQkFBM0IsR0FBZ0RMLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxZQUQ5QztBQUFBLENBUkYsRUFrQkQsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxXQUFoQjtBQUFBLENBbEJKLENBQWQ7O0FBc0JBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFFBQUV0QixNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVSSxXQUFWLFFBQVVBLFdBQVY7QUFBQSxRQUF1QkUsV0FBdkIsUUFBdUJBLFdBQXZCO0FBQUEsV0FDbEIsZ0NBQUMsaUJBQUQsUUFDR04sTUFBTSxDQUFDdUIsR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSxhQUNmLGdDQUFDLFFBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsS0FBSyxDQUFDQyxFQURiO0FBRUUsd0JBRkY7QUFHRSw4QkFBYUQsS0FBSyxDQUFDQyxFQUFuQixTQUhGO0FBSUUsUUFBQSxNQUFNLEVBQUVyQixXQUFXLEtBQUtvQixLQUFLLENBQUNDLEVBSmhDO0FBS0UsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTW5CLFdBQVcsQ0FBQ2tCLEtBQUssQ0FBQ0MsRUFBUCxDQUFqQjtBQUFBO0FBTFgsU0FPRSxnQ0FBQyxLQUFELENBQU8sYUFBUDtBQUFxQixRQUFBLE1BQU0sRUFBQztBQUE1QixRQVBGLEVBUUUsZ0NBQUMsMEJBQUQ7QUFDRSxRQUFBLEVBQUUsWUFBS0QsS0FBSyxDQUFDQyxFQUFYLFNBREo7QUFFRSxRQUFBLE1BQU0sRUFBQyxPQUZUO0FBR0UsUUFBQSxTQUFTLEVBQUUsR0FIYjtBQUlFLFFBQUEsS0FBSyxFQUFDO0FBSlIsU0FNRSw4Q0FBT0QsS0FBSyxDQUFDRSxLQUFOLElBQWVGLEtBQUssQ0FBQ0MsRUFBNUIsQ0FORixDQVJGLENBRGU7QUFBQSxLQUFoQixDQURILENBRGtCO0FBQUEsR0FBcEI7O0FBd0JBSCxFQUFBQSxXQUFXLENBQUN2QixTQUFaLEdBQXdCQSxTQUF4QjtBQUNBLFNBQU91QixXQUFQO0FBQ0QsQ0EzQkQ7O2VBNkJlRCxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHBhbmVsczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIGFjdGl2ZVBhbmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVQYW5lbDogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmNvbnN0IFBhbmVsSGVhZGVyQm90dG9tID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtc2lkZS1wYW5lbF9faGVhZGVyX19ib3R0b20nXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxIZWFkZXJCZ307XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMzBweDtcbmA7XG5cbmNvbnN0IFBhbmVsVGFiID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX3RhYidcbn0pYFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICR7cHJvcHMgPT5cbiAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlIDogJ3RyYW5zcGFyZW50J307XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckFjdGl2ZSA6IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIHdpZHRoOiAzMHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuY29uc3QgUGFuZWxUb2dnbGVGYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBQYW5lbFRvZ2dsZSA9ICh7cGFuZWxzLCBhY3RpdmVQYW5lbCwgdG9nZ2xlUGFuZWx9KSA9PiAoXG4gICAgPFBhbmVsSGVhZGVyQm90dG9tPlxuICAgICAge3BhbmVscy5tYXAocGFuZWwgPT4gKFxuICAgICAgICA8UGFuZWxUYWJcbiAgICAgICAgICBrZXk9e3BhbmVsLmlkfVxuICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgZGF0YS1mb3I9e2Ake3BhbmVsLmlkfS1uYXZgfVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlUGFuZWwgPT09IHBhbmVsLmlkfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVBhbmVsKHBhbmVsLmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxwYW5lbC5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBpZD17YCR7cGFuZWwuaWR9LW5hdmB9XG4gICAgICAgICAgICBlZmZlY3Q9XCJzb2xpZFwiXG4gICAgICAgICAgICBkZWxheVNob3c9ezUwMH1cbiAgICAgICAgICAgIHBsYWNlPVwiYm90dG9tXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57cGFuZWwubGFiZWwgfHwgcGFuZWwuaWR9PC9zcGFuPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9QYW5lbFRhYj5cbiAgICAgICkpfVxuICAgIDwvUGFuZWxIZWFkZXJCb3R0b20+XG4gICk7XG5cbiAgUGFuZWxUb2dnbGUucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuICByZXR1cm4gUGFuZWxUb2dnbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsVG9nZ2xlRmFjdG9yeTtcbiJdfQ==