"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .layer-group__visibility-toggle {\n    margin-right: 12px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledInteractionPanel = styled.div(_templateObject());
var StyledLayerGroupItem = styled.div(_templateObject2());
var LayerLabel = styled(_styledComponents2.PanelLabelBold)(_templateObject3(), function (props) {
  return props.active ? props.theme.textColor : props.theme.labelColor;
});

function LayerGroupSelectorFactory() {
  var LayerGroupSelector = function LayerGroupSelector(_ref) {
    var layers = _ref.layers,
        editableLayers = _ref.editableLayers,
        onChange = _ref.onChange,
        topLayers = _ref.topLayers;
    return _react["default"].createElement(StyledInteractionPanel, {
      className: "map-style__layer-group__selector"
    }, _react["default"].createElement("div", {
      className: "layer-group__header"
    }, _react["default"].createElement(_styledComponents2.PanelLabel, null, "Map Layers")), _react["default"].createElement(_styledComponents2.PanelContent, {
      className: "map-style__layer-group"
    }, editableLayers.map(function (slug) {
      return _react["default"].createElement(StyledLayerGroupItem, {
        className: "layer-group__select",
        key: slug
      }, _react["default"].createElement(_styledComponents2.PanelLabelWrapper, null, _react["default"].createElement(_panelHeaderAction["default"], {
        className: "layer-group__visibility-toggle",
        id: "".concat(slug, "-toggle"),
        tooltip: layers[slug] ? 'hide' : 'show',
        onClick: function onClick() {
          return onChange({
            visibleLayerGroups: (0, _objectSpread4["default"])({}, layers, (0, _defineProperty2["default"])({}, slug, !layers[slug]))
          });
        },
        IconComponent: layers[slug] ? _icons.EyeSeen : _icons.EyeUnseen,
        active: layers[slug],
        flush: true
      }), _react["default"].createElement(LayerLabel, {
        active: layers[slug]
      }, slug)), _react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "layer-group__bring-top"
      }, _react["default"].createElement(_panelHeaderAction["default"], {
        id: "".concat(slug, "-top"),
        tooltip: "Move to top of data layers",
        disabled: !layers[slug],
        IconComponent: _icons.Upload,
        active: topLayers[slug],
        onClick: function onClick() {
          return onChange({
            topLayerGroups: (0, _objectSpread4["default"])({}, topLayers, (0, _defineProperty2["default"])({}, slug, !topLayers[slug]))
          });
        }
      })));
    })));
  };

  return LayerGroupSelector;
}

var _default = LayerGroupSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbWFwLXN0eWxlLXBhbmVsL21hcC1sYXllci1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkTGF5ZXJHcm91cEl0ZW0iLCJMYXllckxhYmVsIiwiUGFuZWxMYWJlbEJvbGQiLCJwcm9wcyIsImFjdGl2ZSIsInRoZW1lIiwidGV4dENvbG9yIiwibGFiZWxDb2xvciIsIkxheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkiLCJMYXllckdyb3VwU2VsZWN0b3IiLCJsYXllcnMiLCJlZGl0YWJsZUxheWVycyIsIm9uQ2hhbmdlIiwidG9wTGF5ZXJzIiwibWFwIiwic2x1ZyIsInZpc2libGVMYXllckdyb3VwcyIsIkV5ZVNlZW4iLCJFeWVVbnNlZW4iLCJVcGxvYWQiLCJ0b3BMYXllckdyb3VwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUEsSUFBTUEsc0JBQXNCLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBNUI7QUFJQSxJQUFNQyxvQkFBb0IsR0FBR0YsTUFBTSxDQUFDQyxHQUFWLG9CQUExQjtBQWNBLElBQU1FLFVBQVUsR0FBR0gsTUFBTSxDQUFDSSxpQ0FBRCxDQUFULHFCQUNMLFVBQUFDLEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNDLE1BQU4sR0FBZUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQTNCLEdBQXVDSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsVUFEdkM7QUFBQSxDQURBLENBQWhCOztBQUtBLFNBQVNDLHlCQUFULEdBQXFDO0FBQ25DLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxRQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVQyxjQUFWLFFBQVVBLGNBQVY7QUFBQSxRQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsUUFBb0NDLFNBQXBDLFFBQW9DQSxTQUFwQztBQUFBLFdBQ3pCLGdDQUFDLHNCQUFEO0FBQXdCLE1BQUEsU0FBUyxFQUFDO0FBQWxDLE9BQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0UsZ0NBQUMsNkJBQUQscUJBREYsQ0FERixFQUlFLGdDQUFDLCtCQUFEO0FBQWMsTUFBQSxTQUFTLEVBQUM7QUFBeEIsT0FDR0YsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUFDLElBQUk7QUFBQSxhQUN0QixnQ0FBQyxvQkFBRDtBQUFzQixRQUFBLFNBQVMsRUFBQyxxQkFBaEM7QUFBc0QsUUFBQSxHQUFHLEVBQUVBO0FBQTNELFNBQ0UsZ0NBQUMsb0NBQUQsUUFDRSxnQ0FBQyw2QkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFDLGdDQURaO0FBRUUsUUFBQSxFQUFFLFlBQUtBLElBQUwsWUFGSjtBQUdFLFFBQUEsT0FBTyxFQUFFTCxNQUFNLENBQUNLLElBQUQsQ0FBTixHQUFlLE1BQWYsR0FBd0IsTUFIbkM7QUFJRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUNQSCxRQUFRLENBQUM7QUFDUEksWUFBQUEsa0JBQWtCLHFDQUNiTixNQURhLHVDQUVmSyxJQUZlLEVBRVIsQ0FBQ0wsTUFBTSxDQUFDSyxJQUFELENBRkM7QUFEWCxXQUFELENBREQ7QUFBQSxTQUpYO0FBWUUsUUFBQSxhQUFhLEVBQUVMLE1BQU0sQ0FBQ0ssSUFBRCxDQUFOLEdBQWVFLGNBQWYsR0FBeUJDLGdCQVoxQztBQWFFLFFBQUEsTUFBTSxFQUFFUixNQUFNLENBQUNLLElBQUQsQ0FiaEI7QUFjRSxRQUFBLEtBQUs7QUFkUCxRQURGLEVBaUJFLGdDQUFDLFVBQUQ7QUFBWSxRQUFBLE1BQU0sRUFBRUwsTUFBTSxDQUFDSyxJQUFEO0FBQTFCLFNBQW1DQSxJQUFuQyxDQWpCRixDQURGLEVBb0JFLGdDQUFDLGdDQUFEO0FBQWUsUUFBQSxTQUFTLEVBQUM7QUFBekIsU0FDRSxnQ0FBQyw2QkFBRDtBQUNFLFFBQUEsRUFBRSxZQUFLQSxJQUFMLFNBREo7QUFFRSxRQUFBLE9BQU8sRUFBQyw0QkFGVjtBQUdFLFFBQUEsUUFBUSxFQUFFLENBQUNMLE1BQU0sQ0FBQ0ssSUFBRCxDQUhuQjtBQUlFLFFBQUEsYUFBYSxFQUFFSSxhQUpqQjtBQUtFLFFBQUEsTUFBTSxFQUFFTixTQUFTLENBQUNFLElBQUQsQ0FMbkI7QUFNRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUNQSCxRQUFRLENBQUM7QUFDUFEsWUFBQUEsY0FBYyxxQ0FDVFAsU0FEUyx1Q0FFWEUsSUFGVyxFQUVKLENBQUNGLFNBQVMsQ0FBQ0UsSUFBRCxDQUZOO0FBRFAsV0FBRCxDQUREO0FBQUE7QUFOWCxRQURGLENBcEJGLENBRHNCO0FBQUEsS0FBdkIsQ0FESCxDQUpGLENBRHlCO0FBQUEsR0FBM0I7O0FBa0RBLFNBQU9OLGtCQUFQO0FBQ0Q7O2VBRWNELHlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb24gZnJvbSAnY29tcG9uZW50cy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci1hY3Rpb24nO1xuaW1wb3J0IHtFeWVTZWVuLCBFeWVVbnNlZW4sIFVwbG9hZH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5pbXBvcnQge1xuICBQYW5lbExhYmVsLFxuICBQYW5lbENvbnRlbnQsXG4gIFBhbmVsTGFiZWxCb2xkLFxuICBQYW5lbExhYmVsV3JhcHBlcixcbiAgQ2VudGVyRmxleGJveFxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN0eWxlZEludGVyYWN0aW9uUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZExheWVyR3JvdXBJdGVtID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5sYXllci1ncm91cF9fdmlzaWJpbGl0eS10b2dnbGUge1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuYDtcblxuY29uc3QgTGF5ZXJMYWJlbCA9IHN0eWxlZChQYW5lbExhYmVsQm9sZClgXG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9yIDogcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG5gO1xuXG5mdW5jdGlvbiBMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5KCkge1xuICBjb25zdCBMYXllckdyb3VwU2VsZWN0b3IgPSAoe2xheWVycywgZWRpdGFibGVMYXllcnMsIG9uQ2hhbmdlLCB0b3BMYXllcnN9KSA9PiAoXG4gICAgPFN0eWxlZEludGVyYWN0aW9uUGFuZWwgY2xhc3NOYW1lPVwibWFwLXN0eWxlX19sYXllci1ncm91cF9fc2VsZWN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXItZ3JvdXBfX2hlYWRlclwiPlxuICAgICAgICA8UGFuZWxMYWJlbD5NYXAgTGF5ZXJzPC9QYW5lbExhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGFuZWxDb250ZW50IGNsYXNzTmFtZT1cIm1hcC1zdHlsZV9fbGF5ZXItZ3JvdXBcIj5cbiAgICAgICAge2VkaXRhYmxlTGF5ZXJzLm1hcChzbHVnID0+IChcbiAgICAgICAgICA8U3R5bGVkTGF5ZXJHcm91cEl0ZW0gY2xhc3NOYW1lPVwibGF5ZXItZ3JvdXBfX3NlbGVjdFwiIGtleT17c2x1Z30+XG4gICAgICAgICAgICA8UGFuZWxMYWJlbFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxheWVyLWdyb3VwX192aXNpYmlsaXR5LXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgaWQ9e2Ake3NsdWd9LXRvZ2dsZWB9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17bGF5ZXJzW3NsdWddID8gJ2hpZGUnIDogJ3Nob3cnfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIHZpc2libGVMYXllckdyb3Vwczoge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmxheWVycyxcbiAgICAgICAgICAgICAgICAgICAgICBbc2x1Z106ICFsYXllcnNbc2x1Z11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17bGF5ZXJzW3NsdWddID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2xheWVyc1tzbHVnXX1cbiAgICAgICAgICAgICAgICBmbHVzaFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8TGF5ZXJMYWJlbCBhY3RpdmU9e2xheWVyc1tzbHVnXX0+e3NsdWd9PC9MYXllckxhYmVsPlxuICAgICAgICAgICAgPC9QYW5lbExhYmVsV3JhcHBlcj5cbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImxheWVyLWdyb3VwX19icmluZy10b3BcIj5cbiAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgICAgaWQ9e2Ake3NsdWd9LXRvcGB9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cIk1vdmUgdG8gdG9wIG9mIGRhdGEgbGF5ZXJzXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyc1tzbHVnXX1cbiAgICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtVcGxvYWR9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXt0b3BMYXllcnNbc2x1Z119XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wTGF5ZXJHcm91cHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi50b3BMYXllcnMsXG4gICAgICAgICAgICAgICAgICAgICAgW3NsdWddOiAhdG9wTGF5ZXJzW3NsdWddXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgICAgIDwvU3R5bGVkTGF5ZXJHcm91cEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9QYW5lbENvbnRlbnQ+XG4gICAgPC9TdHlsZWRJbnRlcmFjdGlvblBhbmVsPlxuICApO1xuXG4gIHJldHVybiBMYXllckdyb3VwU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyR3JvdXBTZWxlY3RvckZhY3Rvcnk7XG4iXX0=