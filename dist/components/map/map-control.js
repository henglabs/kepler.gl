"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MapControl = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var styled = _interopRequireWildcard(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _mapLayerSelector = _interopRequireDefault(require("../common/map-layer-selector"));

var _logo = _interopRequireDefault(require("../common/logo"));

var _mapLegend = _interopRequireDefault(require("./map-legend"));

var _icons = require("../common/icons");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 32px;\n  padding: 6px 12px;\n  font-size: 11px;\n  color: ", ";\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", " max-height: 500px;\n  min-height: 100px;\n  overflow: auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 18px;\n  border: 0;\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  height: 36px;\n  justify-content: center;\n  margin: 0;\n  outline: none;\n  padding: 0;\n  transition: ", ";\n  width: 36px;\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 4px 0;\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  right: 0;\n  width: ", "px;\n  padding: ", "px;\n  z-index: 1;\n  top: ", "px;\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledMapControl = styled.div(_templateObject(), function (props) {
  return props.theme.mapControl.width;
}, function (props) {
  return props.theme.mapControl.padding;
}, function (props) {
  return props.top;
});
var StyledMapControlAction = styled.div(_templateObject2());
var StyledMapControlButton = styled.div(_templateObject3(), function (props) {
  return props.active ? props.theme.secondaryBtnActBgd : props.theme.secondaryBtnBgd;
}, function (props) {
  return props.active ? props.theme.secondaryBtnActColor : props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.secondaryBtnActBgd;
}, function (props) {
  return props.theme.secondaryBtnActColor;
});
var StyledMapControlPanel = styled.div(_templateObject4(), function (props) {
  return props.theme.mapPanelBackgroundColor;
});
var StyledMapControlPanelContent = styled.div(_templateObject5(), function (props) {
  return props.theme.dropdownScrollBar;
});
var StyledMapControlPanelHeader = styled.div(_templateObject6(), function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.titleTextColor;
});
/**
 * Generates all layers available for the current map
 * TODO: this may be moved into map-container or map-control or even at the reducer level
 * @param layers
 * @param mapLayers
 * @returns {[id, label, isVisible]}
 */

var layerSelector = function layerSelector(layers, mapLayers) {
  var availableItems = Object.keys(layers).reduce(function (availableLayers, currentLayerId) {
    // is available ? if yes add to available list
    var currentLayer = layers[currentLayerId]; // if maplayers exists we need to make sure currentlayer
    // is contained in mapLayers in order to add onto availableLayers
    // otherwise we add all layers

    var layerConfig = mapLayers ? mapLayers[currentLayer.id] : currentLayer.config;
    var mustBeAdded = mapLayers && mapLayers[currentLayer.id] ? mapLayers[currentLayer.id].isAvailable : layerConfig.isVisible;
    return mustBeAdded ? [].concat((0, _toConsumableArray2["default"])(availableLayers), [{
      id: currentLayer.id,
      name: currentLayer.config.label,
      isVisible: mapLayers && mapLayers[currentLayer.id] ? mapLayers[currentLayer.id].isVisible : layerConfig.isVisible,
      layer: currentLayer
    }]) : availableLayers;
  }, []);
  return availableItems;
};

var MapControl =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(MapControl, _Component);

  function MapControl() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, MapControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(MapControl)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (state) {
      return state.layers;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapLayersSelector", function (state) {
      return state.mapLayers;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initialDataSelector", (0, _reselect.createSelector)(_this.layerSelector, _this.mapLayersSelector, layerSelector));
    return _this;
  }

  (0, _createClass2["default"])(MapControl, [{
    key: "render",
    value: function render() {
      var items = this.initialDataSelector(this.props);

      if (!items) {
        return null;
      }

      var _this$props = this.props,
          dragRotate = _this$props.dragRotate,
          isSplit = _this$props.isSplit,
          isExport = _this$props.isExport,
          mapIndex = _this$props.mapIndex,
          mapControls = _this$props.mapControls,
          onTogglePerspective = _this$props.onTogglePerspective,
          onToggleSplitMap = _this$props.onToggleSplitMap,
          onMapToggleLayer = _this$props.onMapToggleLayer,
          onToggleMapControl = _this$props.onToggleMapControl,
          scale = _this$props.scale;
      var _mapControls$visibleL = mapControls.visibleLayers,
          visibleLayers = _mapControls$visibleL === void 0 ? {} : _mapControls$visibleL,
          _mapControls$mapLegen = mapControls.mapLegend,
          mapLegend = _mapControls$mapLegen === void 0 ? {} : _mapControls$mapLegen,
          _mapControls$toggle3d = mapControls.toggle3d,
          toggle3d = _mapControls$toggle3d === void 0 ? {} : _mapControls$toggle3d,
          _mapControls$splitMap = mapControls.splitMap,
          splitMap = _mapControls$splitMap === void 0 ? {} : _mapControls$splitMap;
      return _react["default"].createElement(StyledMapControl, {
        className: "map-control"
      }, splitMap.show ? _react["default"].createElement(ActionPanel, {
        key: 0
      }, _react["default"].createElement(StyledMapControlButton, {
        active: isSplit,
        onClick: function onClick(e) {
          e.preventDefault();
          onToggleSplitMap(isSplit ? mapIndex : undefined);
        },
        key: "split-".concat(isSplit),
        className: "map-control-button split-map",
        "data-tip": true,
        "data-for": "action-toggle"
      }, isSplit ? _react["default"].createElement(_icons.Delete, {
        height: "18px"
      }) : _react["default"].createElement(_icons.Split, {
        height: "18px"
      }), _react["default"].createElement(MapLegendTooltip, {
        id: "action-toggle",
        message: isSplit ? 'Close current panel' : 'Switch to dual map view'
      }))) : null, isSplit && visibleLayers.show ? _react["default"].createElement(ActionPanel, {
        key: 1
      }, _react["default"].createElement(LayerSelectorPanel, {
        items: items,
        onMapToggleLayer: onMapToggleLayer,
        isActive: visibleLayers.active,
        toggleMenuPanel: function toggleMenuPanel() {
          return onToggleMapControl('visibleLayers');
        }
      })) : null, toggle3d.show ? _react["default"].createElement(ActionPanel, {
        key: 2
      }, _react["default"].createElement(StyledMapControlButton, {
        onClick: function onClick(e) {
          e.preventDefault();
          onTogglePerspective();
        },
        active: dragRotate,
        "data-tip": true,
        "data-for": "action-3d"
      }, _react["default"].createElement(_icons.Cube3d, {
        height: "22px"
      }), _react["default"].createElement(MapLegendTooltip, {
        id: "action-3d",
        message: dragRotate ? 'Disable 3D Map' : '3D Map'
      }))) : null, mapLegend.show ? _react["default"].createElement(ActionPanel, {
        key: 3
      }, _react["default"].createElement(MapLegendPanel, {
        items: items,
        scale: scale,
        isExport: isExport,
        onMapToggleLayer: onMapToggleLayer,
        isActive: mapLegend.active,
        toggleMenuPanel: function toggleMenuPanel() {
          return onToggleMapControl('mapLegend');
        }
      })) : null);
    }
  }]);
  return MapControl;
}(_react.Component);

exports.MapControl = MapControl;
(0, _defineProperty2["default"])(MapControl, "propTypes", {
  datasets: _propTypes["default"].object.isRequired,
  dragRotate: _propTypes["default"].bool.isRequired,
  isSplit: _propTypes["default"].bool.isRequired,
  layers: _propTypes["default"].arrayOf(_propTypes["default"].object),
  mapIndex: _propTypes["default"].number.isRequired,
  mapControls: _propTypes["default"].object.isRequired,
  onTogglePerspective: _propTypes["default"].func.isRequired,
  onToggleSplitMap: _propTypes["default"].func.isRequired,
  onToggleMapControl: _propTypes["default"].func.isRequired,
  onMapToggleLayer: _propTypes["default"].func.isRequired,
  top: _propTypes["default"].number.isRequired,
  // optional
  scale: _propTypes["default"].number,
  mapLayers: _propTypes["default"].object
});
(0, _defineProperty2["default"])(MapControl, "defaultProps", {
  isSplit: false,
  top: 0
});

var MapControlPanel = function MapControlPanel(_ref) {
  var children = _ref.children,
      header = _ref.header,
      onClick = _ref.onClick,
      _ref$scale = _ref.scale,
      scale = _ref$scale === void 0 ? 1 : _ref$scale,
      isExport = _ref.isExport;
  return _react["default"].createElement(StyledMapControlPanel, {
    style: {
      transform: "scale(".concat(scale, ") translate(calc(-").concat(25 * (scale - 1), "% - ").concat(10 * scale, "px), calc(").concat(25 * (scale - 1), "% + ").concat(10 * scale, "px))")
    }
  }, _react["default"].createElement(StyledMapControlPanelHeader, {
    style: {
      position: 'relative'
    }
  }, isExport ? _react["default"].createElement(_logo["default"], {
    version: false,
    appName: "kepler.gl"
  }) : _react["default"].createElement("span", {
    style: {
      verticalAlign: 'middle'
    }
  }, header), isExport ? null : _react["default"].createElement(_styledComponents2.IconRoundSmall, null, _react["default"].createElement(_icons.Close, {
    height: "16px",
    onClick: onClick
  }))), _react["default"].createElement(StyledMapControlPanelContent, null, children));
};

var MapLegendPanel = function MapLegendPanel(_ref2) {
  var items = _ref2.items,
      isActive = _ref2.isActive,
      scale = _ref2.scale,
      toggleMenuPanel = _ref2.toggleMenuPanel,
      isExport = _ref2.isExport;
  return !isActive ? _react["default"].createElement(StyledMapControlButton, {
    key: 2,
    "data-tip": true,
    "data-for": "show-legend",
    className: "map-control-button show-legend",
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenuPanel();
    }
  }, _react["default"].createElement(_icons.Legend, {
    height: "22px"
  }), _react["default"].createElement(MapLegendTooltip, {
    id: "show-legend",
    message: 'show legend'
  })) : _react["default"].createElement(MapControlPanel, {
    scale: scale,
    header: 'Layer Legend',
    onClick: toggleMenuPanel,
    isExport: isExport
  }, _react["default"].createElement(_mapLegend["default"], {
    layers: items.filter(function (item) {
      return item.isVisible;
    }).map(function (item) {
      return item.layer;
    })
  }));
};

var LayerSelectorPanel = function LayerSelectorPanel(_ref3) {
  var items = _ref3.items,
      onMapToggleLayer = _ref3.onMapToggleLayer,
      isActive = _ref3.isActive,
      toggleMenuPanel = _ref3.toggleMenuPanel;
  return !isActive ? _react["default"].createElement(StyledMapControlButton, {
    key: 1,
    onClick: function onClick(e) {
      e.preventDefault();
      toggleMenuPanel();
    },
    className: "map-control-button toggle-layer",
    "data-tip": true,
    "data-for": "toggle-layer"
  }, _react["default"].createElement(_icons.Layers, {
    height: "22px"
  }), _react["default"].createElement(MapLegendTooltip, {
    id: "toggle-layer",
    message: isActive ? 'Hide layer panel' : 'Show layer panel'
  })) : _react["default"].createElement(MapControlPanel, {
    header: "Visible layers",
    onClick: toggleMenuPanel
  }, _react["default"].createElement(_mapLayerSelector["default"], {
    layers: items,
    onMapToggleLayer: onMapToggleLayer
  }));
};

var ActionPanel = function ActionPanel(_ref4) {
  var children = _ref4.children;
  return _react["default"].createElement(StyledMapControlAction, null, children);
};

var MapLegendTooltip = function MapLegendTooltip(_ref5) {
  var id = _ref5.id,
      message = _ref5.message;
  return _react["default"].createElement(_styledComponents2.Tooltip, {
    id: id,
    place: "left",
    effect: "solid"
  }, _react["default"].createElement("span", null, message));
};

var MapControlFactory = function MapControlFactory() {
  return MapControl;
};

var _default = MapControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21hcC9tYXAtY29udHJvbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRNYXBDb250cm9sIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsIm1hcENvbnRyb2wiLCJ3aWR0aCIsInBhZGRpbmciLCJ0b3AiLCJTdHlsZWRNYXBDb250cm9sQWN0aW9uIiwiU3R5bGVkTWFwQ29udHJvbEJ1dHRvbiIsImFjdGl2ZSIsInNlY29uZGFyeUJ0bkFjdEJnZCIsInNlY29uZGFyeUJ0bkJnZCIsInNlY29uZGFyeUJ0bkFjdENvbG9yIiwic2Vjb25kYXJ5QnRuQ29sb3IiLCJ0cmFuc2l0aW9uIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsIiwibWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50IiwiZHJvcGRvd25TY3JvbGxCYXIiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXIiLCJtYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvciIsInRpdGxlVGV4dENvbG9yIiwibGF5ZXJTZWxlY3RvciIsImxheWVycyIsIm1hcExheWVycyIsImF2YWlsYWJsZUl0ZW1zIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImF2YWlsYWJsZUxheWVycyIsImN1cnJlbnRMYXllcklkIiwiY3VycmVudExheWVyIiwibGF5ZXJDb25maWciLCJpZCIsImNvbmZpZyIsIm11c3RCZUFkZGVkIiwiaXNBdmFpbGFibGUiLCJpc1Zpc2libGUiLCJuYW1lIiwibGFiZWwiLCJsYXllciIsIk1hcENvbnRyb2wiLCJzdGF0ZSIsIm1hcExheWVyc1NlbGVjdG9yIiwiaXRlbXMiLCJpbml0aWFsRGF0YVNlbGVjdG9yIiwiZHJhZ1JvdGF0ZSIsImlzU3BsaXQiLCJpc0V4cG9ydCIsIm1hcEluZGV4IiwibWFwQ29udHJvbHMiLCJvblRvZ2dsZVBlcnNwZWN0aXZlIiwib25Ub2dnbGVTcGxpdE1hcCIsIm9uTWFwVG9nZ2xlTGF5ZXIiLCJvblRvZ2dsZU1hcENvbnRyb2wiLCJzY2FsZSIsInZpc2libGVMYXllcnMiLCJtYXBMZWdlbmQiLCJ0b2dnbGUzZCIsInNwbGl0TWFwIiwic2hvdyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCIsImRhdGFzZXRzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhcnJheU9mIiwibnVtYmVyIiwiZnVuYyIsIk1hcENvbnRyb2xQYW5lbCIsImNoaWxkcmVuIiwiaGVhZGVyIiwib25DbGljayIsInRyYW5zZm9ybSIsInBvc2l0aW9uIiwidmVydGljYWxBbGlnbiIsIk1hcExlZ2VuZFBhbmVsIiwiaXNBY3RpdmUiLCJ0b2dnbGVNZW51UGFuZWwiLCJmaWx0ZXIiLCJpdGVtIiwibWFwIiwiTGF5ZXJTZWxlY3RvclBhbmVsIiwiQWN0aW9uUGFuZWwiLCJNYXBMZWdlbmRUb29sdGlwIiwibWVzc2FnZSIsIk1hcENvbnRyb2xGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxJQUFNQSxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUVYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBWixDQUF1QkMsS0FBM0I7QUFBQSxDQUZNLEVBR1QsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFaLENBQXVCRSxPQUEzQjtBQUFBLENBSEksRUFLYixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSyxHQUFWO0FBQUEsQ0FMUSxDQUF0QjtBQVNBLElBQU1DLHNCQUFzQixHQUFHUixNQUFNLENB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QyxlQUFEO0FBQWlCLElBQUEsTUFBTSxFQUFDLGdCQUF4QjtBQUF5QyxJQUFBLE9BQU8sRUFBRUM7QUFBbEQsS0FDRSxnQ0FBQyw0QkFBRDtBQUFrQixJQUFBLE1BQU0sRUFBRXRDLEtBQTFCO0FBQWlDLElBQUEsZ0JBQWdCLEVBQUVTO0FBQW5ELElBREYsQ0F4QnVCO0FBQUEsQ0FBM0I7O0FBNkJBLElBQU1rQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUViLFFBQUYsU0FBRUEsUUFBRjtBQUFBLFNBQ2xCLGdDQUFDLHNCQUFELFFBQXlCQSxRQUF6QixDQURrQjtBQUFBLENBQXBCOztBQUlBLElBQU1jLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFdkQsRUFBRixTQUFFQSxFQUFGO0FBQUEsTUFBTXdELE9BQU4sU0FBTUEsT0FBTjtBQUFBLFNBQ3ZCLGdDQUFDLDBCQUFEO0FBQVMsSUFBQSxFQUFFLEVBQUV4RCxFQUFiO0FBQWlCLElBQUEsS0FBSyxFQUFDLE1BQXZCO0FBQThCLElBQUEsTUFBTSxFQUFDO0FBQXJDLEtBQ0UsOENBQU93RCxPQUFQLENBREYsQ0FEdUI7QUFBQSxDQUF6Qjs7QUFNQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CO0FBQUEsU0FBTWpELFVBQU47QUFBQSxDQUExQjs7ZUFFZWlELGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtUb29sdGlwLCBJY29uUm91bmRTbWFsbH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IE1hcExheWVyU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbWFwLWxheWVyLXNlbGVjdG9yJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQgTWFwTGVnZW5kIGZyb20gJy4vbWFwLWxlZ2VuZCc7XG5pbXBvcnQge1xuICBDbG9zZSxcbiAgU3BsaXQsXG4gIExlZ2VuZCxcbiAgQ3ViZTNkLFxuICBEZWxldGUsXG4gIExheWVyc1xufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2wgPSBzdHlsZWQuZGl2YFxuICByaWdodDogMDtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwQ29udHJvbC53aWR0aH1weDtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBDb250cm9sLnBhZGRpbmd9cHg7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogJHtwcm9wcyA9PiBwcm9wcy50b3B9cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkFjdEJnZFxuICAgICAgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5BY3RDb2xvclxuICAgICAgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5Db2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuICB3aWR0aDogMzZweDtcblxuICA6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkFjdEJnZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQWN0Q29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRNYXBDb250cm9sUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcFBhbmVsQmFja2dyb3VuZENvbG9yfTtcbiAgZmxleC1ncm93OiAxO1xuICB6LWluZGV4OiAxO1xuICBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93blNjcm9sbEJhcn0gbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tYXBQYW5lbEhlYWRlckJhY2tncm91bmRDb2xvcn07XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuXG4gIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG5gO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhbGwgbGF5ZXJzIGF2YWlsYWJsZSBmb3IgdGhlIGN1cnJlbnQgbWFwXG4gKiBUT0RPOiB0aGlzIG1heSBiZSBtb3ZlZCBpbnRvIG1hcC1jb250YWluZXIgb3IgbWFwLWNvbnRyb2wgb3IgZXZlbiBhdCB0aGUgcmVkdWNlciBsZXZlbFxuICogQHBhcmFtIGxheWVyc1xuICogQHBhcmFtIG1hcExheWVyc1xuICogQHJldHVybnMge1tpZCwgbGFiZWwsIGlzVmlzaWJsZV19XG4gKi9cbmNvbnN0IGxheWVyU2VsZWN0b3IgPSAobGF5ZXJzLCBtYXBMYXllcnMpID0+IHtcbiAgY29uc3QgYXZhaWxhYmxlSXRlbXMgPSBPYmplY3Qua2V5cyhsYXllcnMpLnJlZHVjZShcbiAgICAoYXZhaWxhYmxlTGF5ZXJzLCBjdXJyZW50TGF5ZXJJZCkgPT4ge1xuICAgICAgLy8gaXMgYXZhaWxhYmxlID8gaWYgeWVzIGFkZCB0byBhdmFpbGFibGUgbGlzdFxuICAgICAgY29uc3QgY3VycmVudExheWVyID0gbGF5ZXJzW2N1cnJlbnRMYXllcklkXTtcbiAgICAgIC8vIGlmIG1hcGxheWVycyBleGlzdHMgd2UgbmVlZCB0byBtYWtlIHN1cmUgY3VycmVudGxheWVyXG4gICAgICAvLyBpcyBjb250YWluZWQgaW4gbWFwTGF5ZXJzIGluIG9yZGVyIHRvIGFkZCBvbnRvIGF2YWlsYWJsZUxheWVyc1xuICAgICAgLy8gb3RoZXJ3aXNlIHdlIGFkZCBhbGwgbGF5ZXJzXG5cbiAgICAgIGNvbnN0IGxheWVyQ29uZmlnID0gbWFwTGF5ZXJzXG4gICAgICAgID8gbWFwTGF5ZXJzW2N1cnJlbnRMYXllci5pZF1cbiAgICAgICAgOiBjdXJyZW50TGF5ZXIuY29uZmlnO1xuXG4gICAgICBjb25zdCBtdXN0QmVBZGRlZCA9XG4gICAgICAgIG1hcExheWVycyAmJiBtYXBMYXllcnNbY3VycmVudExheWVyLmlkXVxuICAgICAgICAgID8gbWFwTGF5ZXJzW2N1cnJlbnRMYXllci5pZF0uaXNBdmFpbGFibGVcbiAgICAgICAgICA6IGxheWVyQ29uZmlnLmlzVmlzaWJsZTtcblxuICAgICAgcmV0dXJuIG11c3RCZUFkZGVkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgLi4uYXZhaWxhYmxlTGF5ZXJzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpZDogY3VycmVudExheWVyLmlkLFxuICAgICAgICAgICAgICBuYW1lOiBjdXJyZW50TGF5ZXIuY29uZmlnLmxhYmVsLFxuICAgICAgICAgICAgICBpc1Zpc2libGU6XG4gICAgICAgICAgICAgICAgbWFwTGF5ZXJzICYmIG1hcExheWVyc1tjdXJyZW50TGF5ZXIuaWRdXG4gICAgICAgICAgICAgICAgICA/IG1hcExheWVyc1tjdXJyZW50TGF5ZXIuaWRdLmlzVmlzaWJsZVxuICAgICAgICAgICAgICAgICAgOiBsYXllckNvbmZpZy5pc1Zpc2libGUsXG4gICAgICAgICAgICAgIGxheWVyOiBjdXJyZW50TGF5ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIDogYXZhaWxhYmxlTGF5ZXJzO1xuICAgIH0sXG4gICAgW11cbiAgKTtcblxuICByZXR1cm4gYXZhaWxhYmxlSXRlbXM7XG59O1xuXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkcmFnUm90YXRlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGlzU3BsaXQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgbGF5ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBtYXBJbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIG1hcENvbnRyb2xzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25Ub2dnbGVQZXJzcGVjdGl2ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRvZ2dsZVNwbGl0TWFwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uVG9nZ2xlTWFwQ29udHJvbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbk1hcFRvZ2dsZUxheWVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRvcDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuXG4gICAgLy8gb3B0aW9uYWxcbiAgICBzY2FsZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtYXBMYXllcnM6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGlzU3BsaXQ6IGZhbHNlLFxuICAgIHRvcDogMFxuICB9O1xuXG4gIGxheWVyU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5sYXllcnM7XG4gIG1hcExheWVyc1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUubWFwTGF5ZXJzO1xuXG4gIGluaXRpYWxEYXRhU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICB0aGlzLmxheWVyU2VsZWN0b3IsXG4gICAgdGhpcy5tYXBMYXllcnNTZWxlY3RvcixcbiAgICBsYXllclNlbGVjdG9yXG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pbml0aWFsRGF0YVNlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgaWYgKCFpdGVtcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgZHJhZ1JvdGF0ZSxcbiAgICAgIGlzU3BsaXQsXG4gICAgICBpc0V4cG9ydCxcbiAgICAgIG1hcEluZGV4LFxuICAgICAgbWFwQ29udHJvbHMsXG4gICAgICBvblRvZ2dsZVBlcnNwZWN0aXZlLFxuICAgICAgb25Ub2dnbGVTcGxpdE1hcCxcbiAgICAgIG9uTWFwVG9nZ2xlTGF5ZXIsXG4gICAgICBvblRvZ2dsZU1hcENvbnRyb2wsXG4gICAgICBzY2FsZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3Qge1xuICAgICAgdmlzaWJsZUxheWVycyA9IHt9LFxuICAgICAgbWFwTGVnZW5kID0ge30sXG4gICAgICB0b2dnbGUzZCA9IHt9LFxuICAgICAgc3BsaXRNYXAgPSB7fVxuICAgIH0gPSBtYXBDb250cm9scztcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTWFwQ29udHJvbCBjbGFzc05hbWU9XCJtYXAtY29udHJvbFwiPlxuICAgICAgICB7LyogU3BsaXQgTWFwICovfVxuICAgICAgICB7c3BsaXRNYXAuc2hvdyA/IChcbiAgICAgICAgICA8QWN0aW9uUGFuZWwga2V5PXswfT5cbiAgICAgICAgICAgIDxTdHlsZWRNYXBDb250cm9sQnV0dG9uXG4gICAgICAgICAgICAgIGFjdGl2ZT17aXNTcGxpdH1cbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXAoaXNTcGxpdCA/IG1hcEluZGV4IDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtgc3BsaXQtJHtpc1NwbGl0fWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLWJ1dHRvbiBzcGxpdC1tYXBcIlxuICAgICAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgICAgICBkYXRhLWZvcj1cImFjdGlvbi10b2dnbGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aXNTcGxpdCA/IDxEZWxldGUgaGVpZ2h0PVwiMThweFwiIC8+IDogPFNwbGl0IGhlaWdodD1cIjE4cHhcIiAvPn1cbiAgICAgICAgICAgICAgPE1hcExlZ2VuZFRvb2x0aXBcbiAgICAgICAgICAgICAgICBpZD1cImFjdGlvbi10b2dnbGVcIlxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgICAgICAgICAgaXNTcGxpdCA/ICdDbG9zZSBjdXJyZW50IHBhbmVsJyA6ICdTd2l0Y2ggdG8gZHVhbCBtYXAgdmlldydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1N0eWxlZE1hcENvbnRyb2xCdXR0b24+XG4gICAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgey8qIE1hcCBMYXllcnMgKi99XG4gICAgICAgIHtpc1NwbGl0ICYmIHZpc2libGVMYXllcnMuc2hvdyA/IChcbiAgICAgICAgICA8QWN0aW9uUGFuZWwga2V5PXsxfT5cbiAgICAgICAgICAgIDxMYXllclNlbGVjdG9yUGFuZWxcbiAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICBvbk1hcFRvZ2dsZUxheWVyPXtvbk1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17dmlzaWJsZUxheWVycy5hY3RpdmV9XG4gICAgICAgICAgICAgIHRvZ2dsZU1lbnVQYW5lbD17KCkgPT4gb25Ub2dnbGVNYXBDb250cm9sKCd2aXNpYmxlTGF5ZXJzJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHsvKiAzRCBNYXAgKi99XG4gICAgICAgIHt0b2dnbGUzZC5zaG93ID8gKFxuICAgICAgICAgIDxBY3Rpb25QYW5lbCBrZXk9ezJ9PlxuICAgICAgICAgICAgPFN0eWxlZE1hcENvbnRyb2xCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmUoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWN0aXZlPXtkcmFnUm90YXRlfVxuICAgICAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgICAgICBkYXRhLWZvcj1cImFjdGlvbi0zZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDdWJlM2QgaGVpZ2h0PVwiMjJweFwiIC8+XG4gICAgICAgICAgICAgIHsvKiBObyBpY29uIHNpbmNlIHdlIGFyZSBpbmplY3RpbmcgdGhyb3VnaCBjc3MgLnRocmVlRC1tYXAgY2xhc3MqL31cbiAgICAgICAgICAgICAgPE1hcExlZ2VuZFRvb2x0aXBcbiAgICAgICAgICAgICAgICBpZD1cImFjdGlvbi0zZFwiXG4gICAgICAgICAgICAgICAgbWVzc2FnZT17ZHJhZ1JvdGF0ZSA/ICdEaXNhYmxlIDNEIE1hcCcgOiAnM0QgTWFwJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU3R5bGVkTWFwQ29udHJvbEJ1dHRvbj5cbiAgICAgICAgICA8L0FjdGlvblBhbmVsPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7LyogTWFwIExlZ2VuZCAqL31cbiAgICAgICAge21hcExlZ2VuZC5zaG93ID8gKFxuICAgICAgICAgIDxBY3Rpb25QYW5lbCBrZXk9ezN9PlxuICAgICAgICAgICAgPE1hcExlZ2VuZFBhbmVsXG4gICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgc2NhbGU9e3NjYWxlfVxuICAgICAgICAgICAgICBpc0V4cG9ydD17aXNFeHBvcnR9XG4gICAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9XG4gICAgICAgICAgICAgIGlzQWN0aXZlPXttYXBMZWdlbmQuYWN0aXZlfVxuICAgICAgICAgICAgICB0b2dnbGVNZW51UGFuZWw9eygpID0+IG9uVG9nZ2xlTWFwQ29udHJvbCgnbWFwTGVnZW5kJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdHlsZWRNYXBDb250cm9sPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTWFwQ29udHJvbFBhbmVsID0gKHtjaGlsZHJlbiwgaGVhZGVyLCBvbkNsaWNrLCBzY2FsZSA9IDEsIGlzRXhwb3J0fSkgPT4gKFxuICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsXG4gICAgc3R5bGU9e3tcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KSB0cmFuc2xhdGUoY2FsYygtJHsyNSAqIChzY2FsZSAtIDEpfSUgLSAkezEwICpcbiAgICAgICAgc2NhbGV9cHgpLCBjYWxjKCR7MjUgKiAoc2NhbGUgLSAxKX0lICsgJHsxMCAqIHNjYWxlfXB4KSlgXG4gICAgfX1cbiAgPlxuICAgIDxTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXIgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAge2lzRXhwb3J0ID8gKFxuICAgICAgICA8S2VwbGVyR2xMb2dvIHZlcnNpb249e2ZhbHNlfSBhcHBOYW1lPVwia2VwbGVyLmdsXCIvPlxuICAgICAgKSA6IChcbiAgICAgICAgPHNwYW4gc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319PntoZWFkZXJ9PC9zcGFuPlxuICAgICAgKX1cbiAgICAgIHtpc0V4cG9ydCA/IG51bGwgOiAoXG4gICAgICAgIDxJY29uUm91bmRTbWFsbD5cbiAgICAgICAgICA8Q2xvc2UgaGVpZ2h0PVwiMTZweFwiIG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4gICAgICAgIDwvSWNvblJvdW5kU21hbGw+XG4gICAgICApfVxuICAgIDwvU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyPlxuICAgIDxTdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50PntjaGlsZHJlbn08L1N0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQ+XG4gIDwvU3R5bGVkTWFwQ29udHJvbFBhbmVsPlxuKTtcblxuY29uc3QgTWFwTGVnZW5kUGFuZWwgPSAoe2l0ZW1zLCBpc0FjdGl2ZSwgc2NhbGUsIHRvZ2dsZU1lbnVQYW5lbCwgaXNFeHBvcnR9KSA9PlxuICAhaXNBY3RpdmUgPyAoXG4gICAgPFN0eWxlZE1hcENvbnRyb2xCdXR0b25cbiAgICAgIGtleT17Mn1cbiAgICAgIGRhdGEtdGlwXG4gICAgICBkYXRhLWZvcj1cInNob3ctbGVnZW5kXCJcbiAgICAgIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLWJ1dHRvbiBzaG93LWxlZ2VuZFwiXG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVNZW51UGFuZWwoKTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPExlZ2VuZCBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgIDxNYXBMZWdlbmRUb29sdGlwIGlkPVwic2hvdy1sZWdlbmRcIiBtZXNzYWdlPXsnc2hvdyBsZWdlbmQnfSAvPlxuICAgIDwvU3R5bGVkTWFwQ29udHJvbEJ1dHRvbj5cbiAgKSA6IChcbiAgICA8TWFwQ29udHJvbFBhbmVsXG4gICAgICBzY2FsZT17c2NhbGV9XG4gICAgICBoZWFkZXI9eydMYXllciBMZWdlbmQnfVxuICAgICAgb25DbGljaz17dG9nZ2xlTWVudVBhbmVsfVxuICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgID5cbiAgICAgIDxNYXBMZWdlbmRcbiAgICAgICAgbGF5ZXJzPXtpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlzVmlzaWJsZSkubWFwKGl0ZW0gPT4gaXRlbS5sYXllcil9XG4gICAgICAvPlxuICAgIDwvTWFwQ29udHJvbFBhbmVsPlxuICApO1xuXG5jb25zdCBMYXllclNlbGVjdG9yUGFuZWwgPSAoe1xuICBpdGVtcyxcbiAgb25NYXBUb2dnbGVMYXllcixcbiAgaXNBY3RpdmUsXG4gIHRvZ2dsZU1lbnVQYW5lbFxufSkgPT5cbiAgIWlzQWN0aXZlID8gKFxuICAgIDxTdHlsZWRNYXBDb250cm9sQnV0dG9uXG4gICAgICBrZXk9ezF9XG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0b2dnbGVNZW51UGFuZWwoKTtcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9XCJtYXAtY29udHJvbC1idXR0b24gdG9nZ2xlLWxheWVyXCJcbiAgICAgIGRhdGEtdGlwXG4gICAgICBkYXRhLWZvcj1cInRvZ2dsZS1sYXllclwiXG4gICAgPlxuICAgICAgPExheWVycyBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgIDxNYXBMZWdlbmRUb29sdGlwXG4gICAgICAgIGlkPVwidG9nZ2xlLWxheWVyXCJcbiAgICAgICAgbWVzc2FnZT17aXNBY3RpdmUgPyAnSGlkZSBsYXllciBwYW5lbCcgOiAnU2hvdyBsYXllciBwYW5lbCd9XG4gICAgICAvPlxuICAgIDwvU3R5bGVkTWFwQ29udHJvbEJ1dHRvbj5cbiAgKSA6IChcbiAgICA8TWFwQ29udHJvbFBhbmVsIGhlYWRlcj1cIlZpc2libGUgbGF5ZXJzXCIgb25DbGljaz17dG9nZ2xlTWVudVBhbmVsfT5cbiAgICAgIDxNYXBMYXllclNlbGVjdG9yIGxheWVycz17aXRlbXN9IG9uTWFwVG9nZ2xlTGF5ZXI9e29uTWFwVG9nZ2xlTGF5ZXJ9IC8+XG4gICAgPC9NYXBDb250cm9sUGFuZWw+XG4gICk7XG5cbmNvbnN0IEFjdGlvblBhbmVsID0gKHtjaGlsZHJlbn0pID0+IChcbiAgPFN0eWxlZE1hcENvbnRyb2xBY3Rpb24+e2NoaWxkcmVufTwvU3R5bGVkTWFwQ29udHJvbEFjdGlvbj5cbik7XG5cbmNvbnN0IE1hcExlZ2VuZFRvb2x0aXAgPSAoe2lkLCBtZXNzYWdlfSkgPT4gKFxuICA8VG9vbHRpcCBpZD17aWR9IHBsYWNlPVwibGVmdFwiIGVmZmVjdD1cInNvbGlkXCI+XG4gICAgPHNwYW4+e21lc3NhZ2V9PC9zcGFuPlxuICA8L1Rvb2x0aXA+XG4pO1xuXG5jb25zdCBNYXBDb250cm9sRmFjdG9yeSA9ICgpID0+IE1hcENvbnRyb2w7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRyb2xGYWN0b3J5O1xuIl19