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

var _classnames = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _icons = require("../../common/icons");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  z-index: 1000;\n\n  :hover {\n    cursor: move;\n    opacity: 1;\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n\n  .layer__title__type {\n    color: ", ";\n    font-size: 10px;\n    line-height: 12px;\n    letter-spacing: 0.37px;\n    text-transform: capitalize;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__remove-layer {\n    opacity: 0;\n  }\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .layer__drag-handle {\n      opacity: 1;\n    }\n\n    .layer__remove-layer {\n      opacity: 1;\n    }\n\n    .layer__enable-config {\n      color: white\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // required
  id: _propTypes["default"].string.isRequired,
  isDragNDropEnabled: _propTypes["default"].bool,
  isVisible: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string.isRequired,
  onToggleVisibility: _propTypes["default"].func.isRequired,
  // optional
  className: _propTypes["default"].string,
  idx: _propTypes["default"].number,
  isConfigActive: _propTypes["default"].bool,
  labelRCGColorValues: _propTypes["default"].arrayOf(_propTypes["default"].number),
  onUpdateLayerLabel: _propTypes["default"].func,
  onRemoveLayer: _propTypes["default"].func
};
var defaultProps = {
  isDragNDropEnabled: true,
  showRemoveLayer: true
};
var StyledLayerPanelHeader = styled(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
});
var HeaderLabelSection = styled.div(_templateObject2(), function (props) {
  return props.theme.textColor;
});
var HeaderActionSection = styled.div(_templateObject3());
var LayerTitleSection = styled.div(_templateObject4(), function (props) {
  return props.theme.subtextColor;
});
var StyledDragHandle = styled.div(_templateObject5(), function (props) {
  return props.theme.textColorHl;
});
var DragHandle = (0, _reactSortableHoc.sortableHandle)(function (_ref) {
  var className = _ref.className,
      children = _ref.children;
  return _react["default"].createElement(StyledDragHandle, {
    classname: className
  }, children);
});

var LayerPanelHeader = function LayerPanelHeader(_ref2) {
  var className = _ref2.className,
      idx = _ref2.idx,
      isConfigActive = _ref2.isConfigActive,
      isDragNDropEnabled = _ref2.isDragNDropEnabled,
      isVisible = _ref2.isVisible,
      label = _ref2.label,
      layerId = _ref2.layerId,
      layerType = _ref2.layerType,
      labelRCGColorValues = _ref2.labelRCGColorValues,
      onToggleVisibility = _ref2.onToggleVisibility,
      onUpdateLayerLabel = _ref2.onUpdateLayerLabel,
      onToggleEnableConfig = _ref2.onToggleEnableConfig,
      onRemoveLayer = _ref2.onRemoveLayer,
      showRemoveLayer = _ref2.showRemoveLayer;
  return _react["default"].createElement(StyledLayerPanelHeader, {
    className: (0, _classnames["default"])('layer-panel__header', {
      'sort--handle': !isConfigActive
    }),
    active: isConfigActive,
    labelRCGColorValues: labelRCGColorValues,
    onClick: onToggleEnableConfig
  }, _react["default"].createElement(HeaderLabelSection, {
    className: "layer-panel__header__content"
  }, isDragNDropEnabled && _react["default"].createElement(DragHandle, {
    className: "layer__drag-handle"
  }, _react["default"].createElement(_icons.VertDots, {
    height: "20px"
  })), _react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__visibility-toggle",
    id: layerId,
    tooltip: isVisible ? 'hide layer' : 'show layer',
    onClick: onToggleVisibility,
    IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen,
    active: isVisible,
    flush: true
  }), _react["default"].createElement(LayerTitleSection, {
    className: "layer__title"
  }, _react["default"].createElement("div", null, _react["default"].createElement(LayerLabelEditor, {
    label: label,
    onEdit: onUpdateLayerLabel
  }), _react["default"].createElement("div", {
    className: "layer__title__type"
  }, layerType)))), _react["default"].createElement(HeaderActionSection, {
    className: "layer-panel__header__actions"
  }, showRemoveLayer ? _react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__remove-layer",
    id: layerId,
    tooltip: 'Remove layer',
    onClick: onRemoveLayer,
    tooltipType: "error",
    IconComponent: _icons.Trash
  }) : null, _react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__enable-config",
    id: layerId,
    tooltip: 'Layer settings',
    onClick: onToggleEnableConfig,
    IconComponent: _icons.ArrowDown
  })));
};

var LayerLabelEditor = function LayerLabelEditor(_ref3) {
  var label = _ref3.label,
      onEdit = _ref3.onEdit;
  return _react["default"].createElement(_styledComponents2.InlineInput, {
    type: "text",
    className: "layer__title__editor",
    value: label,
    onClick: function onClick(e) {
      e.stopPropagation();
    },
    onChange: onEdit,
    id: "input-layer-label"
  });
};

LayerPanelHeader.propTypes = propTypes;
LayerPanelHeader.defaultProps = defaultProps;
var _default = LayerPanelHeader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsImlkIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImlzRHJhZ05Ecm9wRW5hYmxlZCIsImJvb2wiLCJpc1Zpc2libGUiLCJsYWJlbCIsIm9uVG9nZ2xlVmlzaWJpbGl0eSIsImZ1bmMiLCJjbGFzc05hbWUiLCJpZHgiLCJudW1iZXIiLCJpc0NvbmZpZ0FjdGl2ZSIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJhcnJheU9mIiwib25VcGRhdGVMYXllckxhYmVsIiwib25SZW1vdmVMYXllciIsImRlZmF1bHRQcm9wcyIsInNob3dSZW1vdmVMYXllciIsIlN0eWxlZExheWVyUGFuZWxIZWFkZXIiLCJzdHlsZWQiLCJTdHlsZWRQYW5lbEhlYWRlciIsInByb3BzIiwidGhlbWUiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsIkhlYWRlckxhYmVsU2VjdGlvbiIsImRpdiIsInRleHRDb2xvciIsIkhlYWRlckFjdGlvblNlY3Rpb24iLCJMYXllclRpdGxlU2VjdGlvbiIsInN1YnRleHRDb2xvciIsIlN0eWxlZERyYWdIYW5kbGUiLCJ0ZXh0Q29sb3JIbCIsIkRyYWdIYW5kbGUiLCJjaGlsZHJlbiIsIkxheWVyUGFuZWxIZWFkZXIiLCJsYXllcklkIiwibGF5ZXJUeXBlIiwib25Ub2dnbGVFbmFibGVDb25maWciLCJFeWVTZWVuIiwiRXllVW5zZWVuIiwiVHJhc2giLCJBcnJvd0Rvd24iLCJMYXllckxhYmVsRWRpdG9yIiwib25FZGl0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLE9BQU8sRUFBRXBCLGFBSlg7QUFLRSxJQUFBLFdBQVcsRUFBQyxPQUxkO0FBTUUsSUFBQSxhQUFhLEVBQUV5QjtBQU5qQixJQURjLEdBU1osSUFWTixFQVdFLGdDQUFDLDZCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsc0JBRFo7QUFFRSxJQUFBLEVBQUUsRUFBRUwsT0FGTjtBQUdFLElBQUEsT0FBTyxFQUFFLGdCQUhYO0FBSUUsSUFBQSxPQUFPLEVBQUVFLG9CQUpYO0FBS0UsSUFBQSxhQUFhLEVBQUVJO0FBTGpCLElBWEYsQ0E5QkYsQ0FoQnVCO0FBQUEsQ0FBekI7O0FBb0VBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFckMsS0FBRixTQUFFQSxLQUFGO0FBQUEsTUFBU3NDLE1BQVQsU0FBU0EsTUFBVDtBQUFBLFNBQ3ZCLGdDQUFDLDhCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUMsTUFEUDtBQUVFLElBQUEsU0FBUyxFQUFDLHNCQUZaO0FBR0UsSUFBQSxLQUFLLEVBQUV0QyxLQUhUO0FBSUUsSUFBQSxPQUFPLEVBQUUsaUJBQUF1QyxDQUFDLEVBQUk7QUFDWkEsTUFBQUEsQ0FBQyxDQUFDQyxlQUFGO0FBQ0QsS0FOSDtBQU9FLElBQUEsUUFBUSxFQUFFRixNQVBaO0FBUUUsSUFBQSxFQUFFLEVBQUM7QUFSTCxJQUR1QjtBQUFBLENBQXpCOztBQWFBVCxnQkFBZ0IsQ0FBQ3JDLFNBQWpCLEdBQTZCQSxTQUE3QjtBQUNBcUMsZ0JBQWdCLENBQUNsQixZQUFqQixHQUFnQ0EsWUFBaEM7ZUFFZWtCLGdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge3NvcnRhYmxlSGFuZGxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCB7XG4gIEV5ZVNlZW4sXG4gIEV5ZVVuc2VlbixcbiAgVmVydERvdHMsXG4gIEFycm93RG93bixcbiAgVHJhc2hcbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuXG5pbXBvcnQge0lubGluZUlucHV0LCBTdHlsZWRQYW5lbEhlYWRlcn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8vIHJlcXVpcmVkXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlzRHJhZ05Ecm9wRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGlzVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVWaXNpYmlsaXR5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXG4gIC8vIG9wdGlvbmFsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWR4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpc0NvbmZpZ0FjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsUkNHQ29sb3JWYWx1ZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxuICBvblVwZGF0ZUxheWVyTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlbW92ZUxheWVyOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBpc0RyYWdORHJvcEVuYWJsZWQ6IHRydWUsXG4gIHNob3dSZW1vdmVMYXllcjogdHJ1ZVxufTtcblxuY29uc3QgU3R5bGVkTGF5ZXJQYW5lbEhlYWRlciA9IHN0eWxlZChTdHlsZWRQYW5lbEhlYWRlcilgXG4gIC5sYXllcl9fcmVtb3ZlLWxheWVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuXG4gICAgLmxheWVyX19kcmFnLWhhbmRsZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5sYXllcl9fcmVtb3ZlLWxheWVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmxheWVyX19lbmFibGUtY29uZmlnIHtcbiAgICAgIGNvbG9yOiB3aGl0ZVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyTGFiZWxTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbmA7XG5cbmNvbnN0IEhlYWRlckFjdGlvblNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgTGF5ZXJUaXRsZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMTJweDtcblxuICAubGF5ZXJfX3RpdGxlX190eXBlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zN3B4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnSGFuZGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTAwMDtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuY29uc3QgRHJhZ0hhbmRsZSA9IHNvcnRhYmxlSGFuZGxlKCh7Y2xhc3NOYW1lLCBjaGlsZHJlbn0pID0+XG4gIDxTdHlsZWREcmFnSGFuZGxlIGNsYXNzbmFtZT17Y2xhc3NOYW1lfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkRHJhZ0hhbmRsZT5cbik7XG5cbmNvbnN0IExheWVyUGFuZWxIZWFkZXIgPSAoe1xuICBjbGFzc05hbWUsXG4gIGlkeCxcbiAgaXNDb25maWdBY3RpdmUsXG4gIGlzRHJhZ05Ecm9wRW5hYmxlZCxcbiAgaXNWaXNpYmxlLFxuICBsYWJlbCxcbiAgbGF5ZXJJZCxcbiAgbGF5ZXJUeXBlLFxuICBsYWJlbFJDR0NvbG9yVmFsdWVzLFxuICBvblRvZ2dsZVZpc2liaWxpdHksXG4gIG9uVXBkYXRlTGF5ZXJMYWJlbCxcbiAgb25Ub2dnbGVFbmFibGVDb25maWcsXG4gIG9uUmVtb3ZlTGF5ZXIsXG4gIHNob3dSZW1vdmVMYXllclxufSkgPT4gKFxuICA8U3R5bGVkTGF5ZXJQYW5lbEhlYWRlclxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItcGFuZWxfX2hlYWRlcicsIHtcbiAgICAgICdzb3J0LS1oYW5kbGUnOiAhaXNDb25maWdBY3RpdmVcbiAgICB9KX1cbiAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxuICAgIGxhYmVsUkNHQ29sb3JWYWx1ZXM9e2xhYmVsUkNHQ29sb3JWYWx1ZXN9XG4gICAgb25DbGljaz17b25Ub2dnbGVFbmFibGVDb25maWd9XG4gID5cbiAgICA8SGVhZGVyTGFiZWxTZWN0aW9uIGNsYXNzTmFtZT1cImxheWVyLXBhbmVsX19oZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgIHtpc0RyYWdORHJvcEVuYWJsZWQgJiYgKFxuICAgICAgICA8RHJhZ0hhbmRsZSBjbGFzc05hbWU9XCJsYXllcl9fZHJhZy1oYW5kbGVcIj5cbiAgICAgICAgICA8VmVydERvdHMgaGVpZ2h0PVwiMjBweFwiIC8+XG4gICAgICAgIDwvRHJhZ0hhbmRsZT5cbiAgICAgICl9XG4gICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX3Zpc2liaWxpdHktdG9nZ2xlXCJcbiAgICAgICAgaWQ9e2xheWVySWR9XG4gICAgICAgIHRvb2x0aXA9e2lzVmlzaWJsZSA/ICdoaWRlIGxheWVyJyA6ICdzaG93IGxheWVyJ31cbiAgICAgICAgb25DbGljaz17b25Ub2dnbGVWaXNpYmlsaXR5fVxuICAgICAgICBJY29uQ29tcG9uZW50PXtpc1Zpc2libGUgPyBFeWVTZWVuIDogRXllVW5zZWVufVxuICAgICAgICBhY3RpdmU9e2lzVmlzaWJsZX1cbiAgICAgICAgZmx1c2hcbiAgICAgIC8+XG4gICAgICA8TGF5ZXJUaXRsZVNlY3Rpb24gY2xhc3NOYW1lPVwibGF5ZXJfX3RpdGxlXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExheWVyTGFiZWxFZGl0b3IgbGFiZWw9e2xhYmVsfSBvbkVkaXQ9e29uVXBkYXRlTGF5ZXJMYWJlbH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyX190aXRsZV9fdHlwZVwiPntsYXllclR5cGV9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXllclRpdGxlU2VjdGlvbj5cbiAgICA8L0hlYWRlckxhYmVsU2VjdGlvbj5cbiAgICA8SGVhZGVyQWN0aW9uU2VjdGlvbiBjbGFzc05hbWU9XCJsYXllci1wYW5lbF9faGVhZGVyX19hY3Rpb25zXCI+XG4gICAgICB7c2hvd1JlbW92ZUxheWVyID8gKFxuICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICBjbGFzc05hbWU9XCJsYXllcl9fcmVtb3ZlLWxheWVyXCJcbiAgICAgICAgICBpZD17bGF5ZXJJZH1cbiAgICAgICAgICB0b29sdGlwPXsnUmVtb3ZlIGxheWVyJ31cbiAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZUxheWVyfVxuICAgICAgICAgIHRvb2x0aXBUeXBlPVwiZXJyb3JcIlxuICAgICAgICAgIEljb25Db21wb25lbnQ9e1RyYXNofVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX2VuYWJsZS1jb25maWdcIlxuICAgICAgICBpZD17bGF5ZXJJZH1cbiAgICAgICAgdG9vbHRpcD17J0xheWVyIHNldHRpbmdzJ31cbiAgICAgICAgb25DbGljaz17b25Ub2dnbGVFbmFibGVDb25maWd9XG4gICAgICAgIEljb25Db21wb25lbnQ9e0Fycm93RG93bn1cbiAgICAgIC8+XG4gICAgPC9IZWFkZXJBY3Rpb25TZWN0aW9uPlxuICA8L1N0eWxlZExheWVyUGFuZWxIZWFkZXI+XG4pO1xuXG5jb25zdCBMYXllckxhYmVsRWRpdG9yID0gKHtsYWJlbCwgb25FZGl0fSkgPT4gKFxuICA8SW5saW5lSW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgY2xhc3NOYW1lPVwibGF5ZXJfX3RpdGxlX19lZGl0b3JcIlxuICAgIHZhbHVlPXtsYWJlbH1cbiAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfX1cbiAgICBvbkNoYW5nZT17b25FZGl0fVxuICAgIGlkPVwiaW5wdXQtbGF5ZXItbGFiZWxcIlxuICAvPlxuKTtcblxuTGF5ZXJQYW5lbEhlYWRlci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5MYXllclBhbmVsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJQYW5lbEhlYWRlcjtcbiJdfQ==