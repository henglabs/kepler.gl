"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../../common/icons");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _styledComponents2 = require("../../common/styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 48px;\n  margin-bottom: 5px;\n  opacity: 1;\n  position: relative;\n  transition: opacity 0.05s ease-in, height 0.25s ease-out;\n\n  &.collapsed {\n    height: 0;\n    margin-bottom: 0;\n    opacity: 0;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n\n  .map-title-block img {\n    margin-right: 12px;\n  }\n\n  .map-preview {\n    border-radius: 3px;\n    height: 30px;\n    width: 40px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapDropdown = styled(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
});

function MapStyleSelectorFactory() {
  var MapStyleSelector = function MapStyleSelector(_ref) {
    var mapStyle = _ref.mapStyle,
        onChange = _ref.onChange,
        toggleActive = _ref.toggleActive,
        isSelecting = _ref.isSelecting;
    return _react["default"].createElement("div", null, _react["default"].createElement(_styledComponents2.PanelLabel, null, "Map style"), Object.keys(mapStyle.mapStyles).map(function (op) {
      return _react["default"].createElement(StyledMapDropdown, {
        className: (0, _classnames["default"])('map-dropdown-option', {
          collapsed: !isSelecting && mapStyle.styleType !== op
        }),
        key: op,
        onClick: isSelecting ? function () {
          return onChange(op);
        } : toggleActive
      }, _react["default"].createElement(_styledComponents2.PanelHeaderContent, {
        className: "map-title-block"
      }, _react["default"].createElement("img", {
        className: "map-preview",
        src: mapStyle.mapStyles[op].icon
      }), _react["default"].createElement(_styledComponents2.PanelHeaderTitle, {
        className: "map-preview-name"
      }, mapStyle.mapStyles[op].label)), !isSelecting ? _react["default"].createElement(_panelHeaderAction["default"], {
        className: "map-dropdown-option__enable-config",
        id: "map-enable-config",
        IconComponent: _icons.ArrowDown,
        tooltip: 'Select Base Map Style',
        onClick: toggleActive
      }) : null);
    }));
  };

  return MapStyleSelector;
}

var _default = MapStyleSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1zdHlsZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBEcm9wZG93biIsInN0eWxlZCIsIlN0eWxlZFBhbmVsSGVhZGVyIiwicHJvcHMiLCJ0aGVtZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkiLCJNYXBTdHlsZVNlbGVjdG9yIiwibWFwU3R5bGUiLCJvbkNoYW5nZSIsInRvZ2dsZUFjdGl2ZSIsImlzU2VsZWN0aW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcFN0eWxlcyIsIm1hcCIsIm9wIiwiY29sbGFwc2VkIiwic3R5bGVUeXBlIiwiaWNvbiIsImxhYmVsIiwiQXJyb3dEb3duIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFPQSxJQUFNQSxpQkFBaUIsR0FBR0MsTUFBTSxDQUFDQyxvQ0FBRCxDQUFULG9CQWVDLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsb0JBQWhCO0FBQUEsQ0FmTixDQUF2Qjs7QUE2QkEsU0FBU0MsdUJBQVQsR0FBbUM7QUFDakMsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQUVDLFFBQUYsUUFBRUEsUUFBRjtBQUFBLFFBQVlDLFFBQVosUUFBWUEsUUFBWjtBQUFBLFFBQXNCQyxZQUF0QixRQUFzQkEsWUFBdEI7QUFBQSxRQUFvQ0MsV0FBcEMsUUFBb0NBLFdBQXBDO0FBQUEsV0FDdkIsNkNBQ0UsZ0NBQUMsNkJBQUQsb0JBREYsRUFFR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlMLFFBQVEsQ0FBQ00sU0FBckIsRUFBZ0NDLEdBQWhDLENBQW9DLFVBQUFDLEVBQUU7QUFBQSxhQUNyQyxnQ0FBQyxpQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFLDRCQUFXLHFCQUFYLEVBQWtDO0FBQzNDQyxVQUFBQSxTQUFTLEVBQUUsQ0FBQ04sV0FBRCxJQUFnQkgsUUFBUSxDQUFDVSxTQUFULEtBQXVCRjtBQURQLFNBQWxDLENBRGI7QUFJRSxRQUFBLEdBQUcsRUFBRUEsRUFKUDtBQUtFLFFBQUEsT0FBTyxFQUFFTCxXQUFXLEdBQUc7QUFBQSxpQkFBTUYsUUFBUSxDQUFDTyxFQUFELENBQWQ7QUFBQSxTQUFILEdBQXdCTjtBQUw5QyxTQU9FLGdDQUFDLHFDQUFEO0FBQW9CLFFBQUEsU0FBUyxFQUFDO0FBQTlCLFNBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQyxhQUFmO0FBQTZCLFFBQUEsR0FBRyxFQUFFRixRQUFRLENBQUNNLFNBQVQsQ0FBbUJFLEVBQW5CLEVBQXVCRztBQUF6RCxRQURGLEVBRUUsZ0NBQUMsbUNBQUQ7QUFBa0IsUUFBQSxTQUFTLEVBQUM7QUFBNUIsU0FDR1gsUUFBUSxDQUFDTSxTQUFULENBQW1CRSxFQUFuQixFQUF1QkksS0FEMUIsQ0FGRixDQVBGLEVBYUcsQ0FBQ1QsV0FBRCxHQUNDLGdDQUFDLDZCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUMsb0NBRFo7QUFFRSxRQUFBLEVBQUUsRUFBQyxtQkFGTDtBQUdFLFFBQUEsYUFBYSxFQUFFVSxnQkFIakI7QUFJRSxRQUFBLE9BQU8sRUFBRSx1QkFKWDtBQUtFLFFBQUEsT0FBTyxFQUFFWDtBQUxYLFFBREQsR0FRRyxJQXJCTixDQURxQztBQUFBLEtBQXRDLENBRkgsQ0FEdUI7QUFBQSxHQUF6Qjs7QUErQkEsU0FBT0gsZ0JBQVA7QUFDRDs7ZUFFY0QsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0Fycm93RG93bn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcblxuaW1wb3J0IHtcbiAgUGFuZWxMYWJlbCxcbiAgUGFuZWxIZWFkZXJUaXRsZSxcbiAgUGFuZWxIZWFkZXJDb250ZW50LFxuICBTdHlsZWRQYW5lbEhlYWRlclxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZE1hcERyb3Bkb3duID0gc3R5bGVkKFN0eWxlZFBhbmVsSGVhZGVyKWBcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjA1cyBlYXNlLWluLCBoZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XG5cbiAgJi5jb2xsYXBzZWQge1xuICAgIGhlaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgfVxuXG4gIC5tYXAtdGl0bGUtYmxvY2sgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cblxuICAubWFwLXByZXZpZXcge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5KCkge1xuICBjb25zdCBNYXBTdHlsZVNlbGVjdG9yID0gKHttYXBTdHlsZSwgb25DaGFuZ2UsIHRvZ2dsZUFjdGl2ZSwgaXNTZWxlY3Rpbmd9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxQYW5lbExhYmVsPk1hcCBzdHlsZTwvUGFuZWxMYWJlbD5cbiAgICAgIHtPYmplY3Qua2V5cyhtYXBTdHlsZS5tYXBTdHlsZXMpLm1hcChvcCA9PiAoXG4gICAgICAgIDxTdHlsZWRNYXBEcm9wZG93blxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbWFwLWRyb3Bkb3duLW9wdGlvbicsIHtcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIWlzU2VsZWN0aW5nICYmIG1hcFN0eWxlLnN0eWxlVHlwZSAhPT0gb3BcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBrZXk9e29wfVxuICAgICAgICAgIG9uQ2xpY2s9e2lzU2VsZWN0aW5nID8gKCkgPT4gb25DaGFuZ2Uob3ApIDogdG9nZ2xlQWN0aXZlfVxuICAgICAgICA+XG4gICAgICAgICAgPFBhbmVsSGVhZGVyQ29udGVudCBjbGFzc05hbWU9XCJtYXAtdGl0bGUtYmxvY2tcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWFwLXByZXZpZXdcIiBzcmM9e21hcFN0eWxlLm1hcFN0eWxlc1tvcF0uaWNvbn0gLz5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlclRpdGxlIGNsYXNzTmFtZT1cIm1hcC1wcmV2aWV3LW5hbWVcIj5cbiAgICAgICAgICAgICAge21hcFN0eWxlLm1hcFN0eWxlc1tvcF0ubGFiZWx9XG4gICAgICAgICAgICA8L1BhbmVsSGVhZGVyVGl0bGU+XG4gICAgICAgICAgPC9QYW5lbEhlYWRlckNvbnRlbnQ+XG4gICAgICAgICAgeyFpc1NlbGVjdGluZyA/IChcbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXAtZHJvcGRvd24tb3B0aW9uX19lbmFibGUtY29uZmlnXCJcbiAgICAgICAgICAgICAgaWQ9XCJtYXAtZW5hYmxlLWNvbmZpZ1wiXG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e0Fycm93RG93bn1cbiAgICAgICAgICAgICAgdG9vbHRpcD17J1NlbGVjdCBCYXNlIE1hcCBTdHlsZSd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUFjdGl2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkTWFwRHJvcGRvd24+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gTWFwU3R5bGVTZWxlY3Rvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwU3R5bGVTZWxlY3RvckZhY3Rvcnk7XG4iXX0=