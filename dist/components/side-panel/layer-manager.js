"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddDataButtonFactory = AddDataButtonFactory;
exports["default"] = void 0;

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

var _reactSortableHoc = require("react-sortable-hoc");

var styled = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _arrayMove = _interopRequireDefault(require("array-move"));

var _layerPanel = _interopRequireDefault(require("./layer-panel/layer-panel"));

var _sourceDataCatalog = _interopRequireDefault(require("./source-data-catalog"));

var _icons = require("../common/icons");

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents2 = require("../common/styled-components");

var _defaultSettings = require("../../constants/default-settings");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 100;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .ui-sortable {\n    display: block;\n    position: relative;\n    overflow: visible;\n    user-select: none;\n\n    :before {\n      content: ' ';\n      display: table;\n    }\n\n    :after {\n      content: ' ';\n      display: table;\n    }\n  }\n\n  .ui-sortable-item.ui-sortable-dragging {\n    position: absolute;\n    z-index: 1688;\n    cursor: move;\n  }\n\n  .ui-sortable-item.ui-sortable-dragging:hover {\n    cursor: move;\n    opacity: 0.5;\n  }\n\n  .ui-sortable-placeholder {\n    display: none;\n  }\n\n  .ui-sortable-placeholder.visible {\n    display: block;\n    opacity: 0;\n    z-index: -1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSortable = styled.div(_templateObject());

var LayerBlendingSelector = function LayerBlendingSelector(_ref) {
  var layerBlending = _ref.layerBlending,
      updateLayerBlending = _ref.updateLayerBlending;
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(_styledComponents2.PanelLabel, null, "Layer Blending"), _react["default"].createElement(_itemSelector["default"], {
    selectedItems: layerBlending,
    options: Object.keys(_defaultSettings.LAYER_BLENDINGS),
    multiSelect: false,
    searchable: false,
    onChange: updateLayerBlending
  }));
}; // make sure the element is always visible while is being dragged


var SortableStyledItem = styled.div(_templateObject2());

function AddDataButtonFactory() {
  var AddDataButton = function AddDataButton(_ref2) {
    var onClick = _ref2.onClick,
        isInactive = _ref2.isInactive;
    return _react["default"].createElement(_styledComponents2.Button, {
      onClick: onClick,
      isInactive: !isInactive,
      width: "105px",
      secondary: true
    }, _react["default"].createElement(_icons.Add, {
      height: "12px"
    }), "Add Data");
  };

  return AddDataButton;
}

LayerManagerFactory.deps = [AddDataButtonFactory, _layerPanel["default"], _sourceDataCatalog["default"]];

function LayerManagerFactory(AddDataButton, LayerPanel, SourceDataCatalog) {
  var _class, _temp;

  // By wrapping layer panel using a sortable element we don't have to implement the drag and drop logic into the panel itself;
  // Developers can provide any layer panel implementation and it will still be sortable
  var SortableItem = (0, _reactSortableHoc.sortableElement)(function (_ref3) {
    var layer = _ref3.layer;
    return _react["default"].createElement(SortableStyledItem, null, _react["default"].createElement(LayerPanel, layer));
  });
  var SortableContainer = (0, _reactSortableHoc.sortableContainer)(function (_ref4) {
    var children = _ref4.children;
    return _react["default"].createElement("div", null, children);
  });
  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(LayerManager, _Component);

    function LayerManager() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, LayerManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(LayerManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerClassSelector", function (props) {
        return props.layerClasses;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerTypeOptionsSelector", (0, _reselect.createSelector)(_this.layerClassSelector, function (layerClasses) {
        return Object.keys(layerClasses).map(function (key) {
          var layer = new layerClasses[key]();
          return {
            id: key,
            label: layer.name,
            icon: layer.layerIcon
          };
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_addEmptyNewLayer", function () {
        _this.props.addLayer();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSort", function (_ref5) {
        var oldIndex = _ref5.oldIndex,
            newIndex = _ref5.newIndex;

        _this.props.updateLayerOrder((0, _arrayMove["default"])(_this.props.layerOrder, oldIndex, newIndex));
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerManager, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            layers = _this$props.layers,
            datasets = _this$props.datasets,
            layerOrder = _this$props.layerOrder,
            openModal = _this$props.openModal;
        var defaultDataset = Object.keys(datasets)[0];
        var layerTypeOptions = this.layerTypeOptionsSelector(this.props);
        var layerActions = {
          layerConfigChange: this.props.layerConfigChange,
          layerVisualChannelConfigChange: this.props.layerVisualChannelConfigChange,
          layerTypeChange: this.props.layerTypeChange,
          layerVisConfigChange: this.props.layerVisConfigChange,
          removeLayer: this.props.removeLayer
        };
        var panelProps = {
          datasets: datasets,
          openModal: openModal,
          layerTypeOptions: layerTypeOptions
        };
        return _react["default"].createElement(StyledSortable, {
          className: "layer-manager"
        }, _react["default"].createElement(SourceDataCatalog, {
          datasets: datasets,
          showDatasetTable: this.props.showDatasetTable,
          removeDataset: this.props.removeDataset,
          showDeleteDataset: true
        }), _react["default"].createElement(AddDataButton, {
          onClick: this.props.showAddDataModal,
          isInactive: !defaultDataset
        }), _react["default"].createElement(_styledComponents2.SidePanelDivider, null), _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(SortableContainer, {
          onSortEnd: this._handleSort,
          lockAxis: "y",
          useDragHandle: true
        }, layerOrder.map(function (layerIdx, index) {
          var layer = (0, _objectSpread2["default"])({}, panelProps, layerActions, {
            sortData: layerIdx,
            key: layers[layerIdx].id,
            idx: layerIdx,
            layer: layers[layerIdx]
          });
          return _react["default"].createElement(SortableItem, {
            key: "layer-".concat(layerIdx),
            index: index,
            layer: layer
          });
        }))), _react["default"].createElement(_styledComponents2.SidePanelSection, null, defaultDataset ? _react["default"].createElement(_styledComponents2.Button, {
          onClick: this._addEmptyNewLayer,
          width: "105px"
        }, _react["default"].createElement(_icons.Add, {
          height: "12px"
        }), "Add Layer") : null), _react["default"].createElement(LayerBlendingSelector, {
          layerBlending: this.props.layerBlending,
          updateLayerBlending: this.props.updateLayerBlending
        }));
      }
    }]);
    return LayerManager;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    addLayer: _propTypes["default"].func.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerConfigChange: _propTypes["default"].func.isRequired,
    layerVisualChannelConfigChange: _propTypes["default"].func.isRequired,
    layerTypeChange: _propTypes["default"].func.isRequired,
    layerVisConfigChange: _propTypes["default"].func.isRequired,
    openModal: _propTypes["default"].func.isRequired,
    removeLayer: _propTypes["default"].func.isRequired,
    removeDataset: _propTypes["default"].func.isRequired,
    showDatasetTable: _propTypes["default"].func.isRequired,
    updateLayerBlending: _propTypes["default"].func.isRequired,
    updateLayerOrder: _propTypes["default"].func.isRequired
  }), _temp;
}

var _default = LayerManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTb3J0YWJsZSIsInN0eWxlZCIsImRpdiIsIkxheWVyQmxlbmRpbmdTZWxlY3RvciIsImxheWVyQmxlbmRpbmciLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwiT2JqZWN0Iiwia2V5cyIsIkxBWUVSX0JMRU5ESU5HUyIsIlNvcnRhYmxlU3R5bGVkSXRlbSIsIkFkZERhdGFCdXR0b25GYWN0b3J5IiwiQWRkRGF0YUJ1dHRvbiIsIm9uQ2xpY2siLCJpc0luYWN0aXZlIiwiTGF5ZXJNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJMYXllclBhbmVsRmFjdG9yeSIsIlNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSIsIkxheWVyUGFuZWwiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsIlNvcnRhYmxlSXRlbSIsImxheWVyIiwiU29ydGFibGVDb250YWluZXIiLCJjaGlsZHJlbiIsInByb3BzIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJDbGFzc1NlbGVjdG9yIiwibWFwIiwia2V5IiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJpY29uIiwibGF5ZXJJY29uIiwiYWRkTGF5ZXIiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwidXBkYXRlTGF5ZXJPcmRlciIsImxheWVyT3JkZXIiLCJsYXllcnMiLCJkYXRhc2V0cyIsIm9wZW5Nb2RhbCIsImRlZmF1bHREYXRhc2V0IiwibGF5ZXJUeXBlT3B0aW9ucyIsImxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciIsImxheWVyQWN0aW9ucyIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJyZW1vdmVMYXllciIsInBhbmVsUHJvcHMiLCJzaG93RGF0YXNldFRhYmxlIiwicmVtb3ZlRGF0YXNldCIsInNob3dBZGREYXRhTW9kYWwiLCJfaGFuZGxlU29ydCIsImxheWVySWR4IiwiaW5kZXgiLCJzb3J0RGF0YSIsImlkeCIsIl9hZGRFbXB0eU5ld0xheWVyIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJzdHJpbmciLCJhcnJheU9mIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBcEI7O0FBd0NBLElBQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0I7QUFBQSxNQUFFQyxhQUFGLFFBQUVBLGFBQUY7QUFBQSxNQUFpQkMsbUJBQWpCLFFBQWlCQSxtQkFBakI7QUFBQSxTQUM1QixnQ0FBQyxtQ0FBRCxRQUNFLGdDQUFDLDZCQUFELHlCQURGLEVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRUQsYUFEakI7QUFFRSxJQUFBLE9BQU8sRUFBRUUsTUFBTSxDQUFDQyxJQUFQLENBQVlDLGdDQUFaLENBRlg7QUFHRSxJQUFBLFdBQVcsRUFBRSxLQUhmO0FBSUUsSUFBQSxVQUFVLEVBQUUsS0FKZDtBQUtFLElBQUEsUUFBUSxFQUFFSDtBQUxaLElBRkYsQ0FENEI7QUFBQSxDQUE5QixDLENBYUE7OztBQUNBLElBQU1JLGtCQUFrQixHQUFHUixNQUFNLENBQUNDLEdBQVYsb0JBQXhCOztBQUlPLFNBQVNRLG9CQUFULEdBQWdDO0FBQ3JDLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxRQUFFQyxPQUFGLFNBQUVBLE9BQUY7QUFBQSxRQUFXQyxVQUFYLFNBQVdBLFVBQVg7QUFBQSxXQUNwQixnQ0FBQyx5QkFBRDtBQUNFLE1BQUEsT0FBTyxFQUFFRCxPQURYO0FBRUUsTUFBQSxVQUFVLEVBQUUsQ0FBQ0MsVUFGZjtBQUdFLE1BQUEsS0FBSyxFQUFDLE9BSFI7QUFJRSxNQUFBLFNBQVM7QUFKWCxPQU1FLGdDQUFDLFVBQUQ7QUFBSyxNQUFBLE1BQU0sRUFBQztBQUFaLE1BTkYsYUFEb0I7QUFBQSxHQUF0Qjs7QUFXQSxTQUFPRixhQUFQO0FBQ0Q7O0FBRURHLG1CQUFtQixDQUFDQyxJQUFwQixHQUEyQixDQUN6Qkwsb0JBRHlCLEVBRXpCTSxzQkFGeUIsRUFHekJDLDZCQUh5QixDQUEzQjs7QUFNQSxTQUFTSCxtQkFBVCxDQUE2QkgsYUFBN0IsRUFBNENPLFVBQTVDLEVBQXdEQyxpQkFBeEQsRUFBMkU7QUFBQTs7QUFDekU7QUFDQTtBQUNBLE1BQU1DLFlBQVksR0FBRyx1Q0FBZ0IsaUJBQWE7QUFBQSxRQUFYQyxLQUFXLFNBQVhBLEtBQVc7QUFDaEQsV0FDRSxnQ0FBQyxrQkFBRCxRQUNFLGdDQUFDLFVBQUQsRUFBZ0JBLEtBQWhCLENBREYsQ0FERjtBQUtELEdBTm9CLENBQXJCO0FBUUEsTUFBTUMsaUJBQWlCLEdBQUcseUNBQWtCLGlCQUFnQjtBQUFBLFFBQWRDLFFBQWMsU0FBZEEsUUFBYztBQUMxRCxXQUFPLDZDQUFNQSxRQUFOLENBQVA7QUFDRCxHQUZ5QixDQUExQjtBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNkdBbUJ1QixVQUFBQyxLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDQyxZQUFWO0FBQUEsT0FuQjVCO0FBQUEsbUhBb0I2Qiw4QkFDekIsTUFBS0Msa0JBRG9CLEVBRXpCLFVBQUFELFlBQVk7QUFBQSxlQUFJbkIsTUFBTSxDQUFDQyxJQUFQLENBQVlrQixZQUFaLEVBQTBCRSxHQUExQixDQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDbkQsY0FBTVAsS0FBSyxHQUFHLElBQUlJLFlBQVksQ0FBQ0csR0FBRCxDQUFoQixFQUFkO0FBQ0EsaUJBQU87QUFDTEMsWUFBQUEsRUFBRSxFQUFFRCxHQURDO0FBRUxFLFlBQUFBLEtBQUssRUFBRVQsS0FBSyxDQUFDVSxJQUZSO0FBR0xDLFlBQUFBLElBQUksRUFBRVgsS0FBSyxDQUFDWTtBQUhQLFdBQVA7QUFLSCxTQVBpQixDQUFKO0FBQUEsT0FGYSxDQXBCN0I7QUFBQSw0R0ErQnNCLFlBQU07QUFDeEIsY0FBS1QsS0FBTCxDQUFXVSxRQUFYO0FBQ0QsT0FqQ0g7QUFBQSxzR0FtQ2dCLGlCQUEwQjtBQUFBLFlBQXhCQyxRQUF3QixTQUF4QkEsUUFBd0I7QUFBQSxZQUFkQyxRQUFjLFNBQWRBLFFBQWM7O0FBQ3RDLGNBQUtaLEtBQUwsQ0FBV2EsZ0JBQVgsQ0FBNEIsMkJBQVUsTUFBS2IsS0FBTCxDQUFXYyxVQUFyQixFQUFpQ0gsUUFBakMsRUFBMkNDLFFBQTNDLENBQTVCO0FBQ0QsT0FyQ0g7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkF1Q1c7QUFBQSwwQkFDMkMsS0FBS1osS0FEaEQ7QUFBQSxZQUNBZSxNQURBLGVBQ0FBLE1BREE7QUFBQSxZQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFBQSxZQUNrQkYsVUFEbEIsZUFDa0JBLFVBRGxCO0FBQUEsWUFDOEJHLFNBRDlCLGVBQzhCQSxTQUQ5QjtBQUVQLFlBQU1DLGNBQWMsR0FBR3BDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZaUMsUUFBWixFQUFzQixDQUF0QixDQUF2QjtBQUNBLFlBQU1HLGdCQUFnQixHQUFHLEtBQUtDLHdCQUFMLENBQThCLEtBQUtwQixLQUFuQyxDQUF6QjtBQUVBLFlBQU1xQixZQUFZLEdBQUc7QUFDbkJDLFVBQUFBLGlCQUFpQixFQUFFLEtBQUt0QixLQUFMLENBQVdzQixpQkFEWDtBQUVuQkMsVUFBQUEsOEJBQThCLEVBQUUsS0FBS3ZCLEtBQUwsQ0FBV3VCLDhCQUZ4QjtBQUduQkMsVUFBQUEsZUFBZSxFQUFFLEtBQUt4QixLQUFMLENBQVd3QixlQUhUO0FBSW5CQyxVQUFBQSxvQkFBb0IsRUFBRSxLQUFLekIsS0FBTCxDQUFXeUIsb0JBSmQ7QUFLbkJDLFVBQUFBLFdBQVcsRUFBRSxLQUFLMUIsS0FBTCxDQUFXMEI7QUFMTCxTQUFyQjtBQVFBLFlBQU1DLFVBQVUsR0FBRztBQUFDWCxVQUFBQSxRQUFRLEVBQVJBLFFBQUQ7QUFBV0MsVUFBQUEsU0FBUyxFQUFUQSxTQUFYO0FBQXNCRSxVQUFBQSxnQkFBZ0IsRUFBaEJBO0FBQXRCLFNBQW5CO0FBRUEsZUFDRSxnQ0FBQyxjQUFEO0FBQWdCLFVBQUEsU0FBUyxFQUFDO0FBQTFCLFdBQ0UsZ0NBQUMsaUJBQUQ7QUFDRSxVQUFBLFFBQVEsRUFBRUgsUUFEWjtBQUVFLFVBQUEsZ0JBQWdCLEVBQUUsS0FBS2hCLEtBQUwsQ0FBVzRCLGdCQUYvQjtBQUdFLFVBQUEsYUFBYSxFQUFFLEtBQUs1QixLQUFMLENBQVc2QixhQUg1QjtBQUlFLFVBQUEsaUJBQWlCO0FBSm5CLFVBREYsRUFPRSxnQ0FBQyxhQUFEO0FBQ0UsVUFBQSxPQUFPLEVBQUUsS0FBSzdCLEtBQUwsQ0FBVzhCLGdCQUR0QjtBQUVFLFVBQUEsVUFBVSxFQUFFLENBQUNaO0FBRmYsVUFQRixFQVdFLGdDQUFDLG1DQUFELE9BWEYsRUFZRSxnQ0FBQyxtQ0FBRCxRQUNFLGdDQUFDLGlCQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUUsS0FBS2EsV0FEbEI7QUFFRSxVQUFBLFFBQVEsRUFBQyxHQUZYO0FBR0UsVUFBQSxhQUFhLEVBQUU7QUFIakIsV0FLR2pCLFVBQVUsQ0FBQ1gsR0FBWCxDQUFlLFVBQUM2QixRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDbkMsY0FBTXBDLEtBQUssc0NBQ044QixVQURNLEVBRU5OLFlBRk07QUFHVGEsWUFBQUEsUUFBUSxFQUFFRixRQUhEO0FBSVQ1QixZQUFBQSxHQUFHLEVBQUVXLE1BQU0sQ0FBQ2lCLFFBQUQsQ0FBTixDQUFpQjNCLEVBSmI7QUFLVDhCLFlBQUFBLEdBQUcsRUFBRUgsUUFMSTtBQU1UbkMsWUFBQUEsS0FBSyxFQUFFa0IsTUFBTSxDQUFDaUIsUUFBRDtBQU5KLFlBQVg7QUFRQSxpQkFDRSxnQ0FBQyxZQUFEO0FBQ0UsWUFBQSxHQUFHLGtCQUFXQSxRQUFYLENBREw7QUFFRSxZQUFBLEtBQUssRUFBRUMsS0FGVDtBQUdFLFlBQUEsS0FBSyxFQUFFcEM7QUFIVCxZQURGO0FBT0QsU0FoQkEsQ0FMSCxDQURGLENBWkYsRUFxQ0UsZ0NBQUMsbUNBQUQsUUFDR3FCLGNBQWMsR0FDYixnQ0FBQyx5QkFBRDtBQUFRLFVBQUEsT0FBTyxFQUFFLEtBQUtrQixpQkFBdEI7QUFBeUMsVUFBQSxLQUFLLEVBQUM7QUFBL0MsV0FDRSxnQ0FBQyxVQUFEO0FBQUssVUFBQSxNQUFNLEVBQUM7QUFBWixVQURGLGNBRGEsR0FJWCxJQUxOLENBckNGLEVBNENFLGdDQUFDLHFCQUFEO0FBQ0UsVUFBQSxhQUFhLEVBQUUsS0FBS3BDLEtBQUwsQ0FBV3BCLGFBRDVCO0FBRUUsVUFBQSxtQkFBbUIsRUFBRSxLQUFLb0IsS0FBTCxDQUFXbkI7QUFGbEMsVUE1Q0YsQ0FERjtBQW1ERDtBQXpHSDtBQUFBO0FBQUEsSUFBa0N3RCxnQkFBbEMseURBQ3FCO0FBQ2pCM0IsSUFBQUEsUUFBUSxFQUFFNEIsc0JBQVVDLElBQVYsQ0FBZUMsVUFEUjtBQUVqQnhCLElBQUFBLFFBQVEsRUFBRXNCLHNCQUFVRyxNQUFWLENBQWlCRCxVQUZWO0FBR2pCNUQsSUFBQUEsYUFBYSxFQUFFMEQsc0JBQVVJLE1BQVYsQ0FBaUJGLFVBSGY7QUFJakJ2QyxJQUFBQSxZQUFZLEVBQUVxQyxzQkFBVUcsTUFBVixDQUFpQkQsVUFKZDtBQUtqQnpCLElBQUFBLE1BQU0sRUFBRXVCLHNCQUFVSyxPQUFWLENBQWtCTCxzQkFBVU0sR0FBNUIsRUFBaUNKLFVBTHhCO0FBTWpCbEIsSUFBQUEsaUJBQWlCLEVBQUVnQixzQkFBVUMsSUFBVixDQUFlQyxVQU5qQjtBQU9qQmpCLElBQUFBLDhCQUE4QixFQUFFZSxzQkFBVUMsSUFBVixDQUFlQyxVQVA5QjtBQVFqQmhCLElBQUFBLGVBQWUsRUFBRWMsc0JBQVVDLElBQVYsQ0FBZUMsVUFSZjtBQVNqQmYsSUFBQUEsb0JBQW9CLEVBQUVhLHNCQUFVQyxJQUFWLENBQWVDLFVBVHBCO0FBVWpCdkIsSUFBQUEsU0FBUyxFQUFFcUIsc0JBQVVDLElBQVYsQ0FBZUMsVUFWVDtBQVdqQmQsSUFBQUEsV0FBVyxFQUFFWSxzQkFBVUMsSUFBVixDQUFlQyxVQVhYO0FBWWpCWCxJQUFBQSxhQUFhLEVBQUVTLHNCQUFVQyxJQUFWLENBQWVDLFVBWmI7QUFhakJaLElBQUFBLGdCQUFnQixFQUFFVSxzQkFBVUMsSUFBVixDQUFlQyxVQWJoQjtBQWNqQjNELElBQUFBLG1CQUFtQixFQUFFeUQsc0JBQVVDLElBQVYsQ0FBZUMsVUFkbkI7QUFlakIzQixJQUFBQSxnQkFBZ0IsRUFBRXlCLHNCQUFVQyxJQUFWLENBQWVDO0FBZmhCLEdBRHJCO0FBMkdEOztlQUVjbEQsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3NvcnRhYmxlQ29udGFpbmVyLCBzb3J0YWJsZUVsZW1lbnR9IGZyb20gJ3JlYWN0LXNvcnRhYmxlLWhvYyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IGFycmF5TW92ZSBmcm9tICdhcnJheS1tb3ZlJztcblxuaW1wb3J0IExheWVyUGFuZWxGYWN0b3J5IGZyb20gJy4vbGF5ZXItcGFuZWwvbGF5ZXItcGFuZWwnO1xuaW1wb3J0IFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSBmcm9tICcuL3NvdXJjZS1kYXRhLWNhdGFsb2cnO1xuaW1wb3J0IHtBZGR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnY29tcG9uZW50cy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7XG4gIFBhbmVsTGFiZWwsXG4gIFNpZGVQYW5lbERpdmlkZXIsXG4gIFNpZGVQYW5lbFNlY3Rpb24sXG4gIEJ1dHRvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7TEFZRVJfQkxFTkRJTkdTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFN0eWxlZFNvcnRhYmxlID0gc3R5bGVkLmRpdmBcbiAgLnVpLXNvcnRhYmxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICA6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIH1cblxuICAgIDphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB9XG4gIH1cblxuICAudWktc29ydGFibGUtaXRlbS51aS1zb3J0YWJsZS1kcmFnZ2luZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDE2ODg7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG5cbiAgLnVpLXNvcnRhYmxlLWl0ZW0udWktc29ydGFibGUtZHJhZ2dpbmc6aG92ZXIge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAudWktc29ydGFibGUtcGxhY2Vob2xkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudWktc29ydGFibGUtcGxhY2Vob2xkZXIudmlzaWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3BhY2l0eTogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuYDtcblxuY29uc3QgTGF5ZXJCbGVuZGluZ1NlbGVjdG9yID0gKHtsYXllckJsZW5kaW5nLCB1cGRhdGVMYXllckJsZW5kaW5nfSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8UGFuZWxMYWJlbD5MYXllciBCbGVuZGluZzwvUGFuZWxMYWJlbD5cbiAgICA8SXRlbVNlbGVjdG9yXG4gICAgICBzZWxlY3RlZEl0ZW1zPXtsYXllckJsZW5kaW5nfVxuICAgICAgb3B0aW9ucz17T2JqZWN0LmtleXMoTEFZRVJfQkxFTkRJTkdTKX1cbiAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgb25DaGFuZ2U9e3VwZGF0ZUxheWVyQmxlbmRpbmd9XG4gICAgLz5cbiAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuKTtcblxuLy8gbWFrZSBzdXJlIHRoZSBlbGVtZW50IGlzIGFsd2F5cyB2aXNpYmxlIHdoaWxlIGlzIGJlaW5nIGRyYWdnZWRcbmNvbnN0IFNvcnRhYmxlU3R5bGVkSXRlbSA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDEwMDtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBBZGREYXRhQnV0dG9uRmFjdG9yeSgpIHtcbiAgY29uc3QgQWRkRGF0YUJ1dHRvbiA9ICh7b25DbGljaywgaXNJbmFjdGl2ZX0pID0+IChcbiAgICA8QnV0dG9uXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgaXNJbmFjdGl2ZT17IWlzSW5hY3RpdmV9XG4gICAgICB3aWR0aD1cIjEwNXB4XCJcbiAgICAgIHNlY29uZGFyeVxuICAgID5cbiAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+QWRkIERhdGFcbiAgICA8L0J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gQWRkRGF0YUJ1dHRvbjtcbn1cblxuTGF5ZXJNYW5hZ2VyRmFjdG9yeS5kZXBzID0gW1xuICBBZGREYXRhQnV0dG9uRmFjdG9yeSxcbiAgTGF5ZXJQYW5lbEZhY3RvcnksXG4gIFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gTGF5ZXJNYW5hZ2VyRmFjdG9yeShBZGREYXRhQnV0dG9uLCBMYXllclBhbmVsLCBTb3VyY2VEYXRhQ2F0YWxvZykge1xuICAvLyBCeSB3cmFwcGluZyBsYXllciBwYW5lbCB1c2luZyBhIHNvcnRhYmxlIGVsZW1lbnQgd2UgZG9uJ3QgaGF2ZSB0byBpbXBsZW1lbnQgdGhlIGRyYWcgYW5kIGRyb3AgbG9naWMgaW50byB0aGUgcGFuZWwgaXRzZWxmO1xuICAvLyBEZXZlbG9wZXJzIGNhbiBwcm92aWRlIGFueSBsYXllciBwYW5lbCBpbXBsZW1lbnRhdGlvbiBhbmQgaXQgd2lsbCBzdGlsbCBiZSBzb3J0YWJsZVxuICBjb25zdCBTb3J0YWJsZUl0ZW0gPSBzb3J0YWJsZUVsZW1lbnQoKHtsYXllcn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlU3R5bGVkSXRlbT5cbiAgICAgICAgPExheWVyUGFuZWwgey4uLmxheWVyfSAvPlxuICAgICAgPC9Tb3J0YWJsZVN0eWxlZEl0ZW0+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgU29ydGFibGVDb250YWluZXIgPSBzb3J0YWJsZUNvbnRhaW5lcigoe2NoaWxkcmVufSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PntjaGlsZHJlbn08L2Rpdj47XG4gIH0pO1xuXG4gIHJldHVybiBjbGFzcyBMYXllck1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBhZGRMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGRhdGFzZXRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZURhdGFzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzaG93RGF0YXNldFRhYmxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyT3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgbGF5ZXJDbGFzc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJDbGFzc2VzO1xuICAgIGxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllckNsYXNzU2VsZWN0b3IsXG4gICAgICBsYXllckNsYXNzZXMgPT4gT2JqZWN0LmtleXMobGF5ZXJDbGFzc2VzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgbGF5ZXJDbGFzc2VzW2tleV0oKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIGxhYmVsOiBsYXllci5uYW1lLFxuICAgICAgICAgIGljb246IGxheWVyLmxheWVySWNvblxuICAgICAgICB9O1xuICAgIH0pKTtcblxuICAgIF9hZGRFbXB0eU5ld0xheWVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5hZGRMYXllcigpO1xuICAgIH07XG5cbiAgICBfaGFuZGxlU29ydCA9ICh7b2xkSW5kZXgsIG5ld0luZGV4fSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVMYXllck9yZGVyKGFycmF5TW92ZSh0aGlzLnByb3BzLmxheWVyT3JkZXIsIG9sZEluZGV4LCBuZXdJbmRleCkpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bGF5ZXJzLCBkYXRhc2V0cywgbGF5ZXJPcmRlciwgb3Blbk1vZGFsfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKVswXTtcbiAgICAgIGNvbnN0IGxheWVyVHlwZU9wdGlvbnMgPSB0aGlzLmxheWVyVHlwZU9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3QgbGF5ZXJBY3Rpb25zID0ge1xuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UsXG4gICAgICAgIHJlbW92ZUxheWVyOiB0aGlzLnByb3BzLnJlbW92ZUxheWVyXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBwYW5lbFByb3BzID0ge2RhdGFzZXRzLCBvcGVuTW9kYWwsIGxheWVyVHlwZU9wdGlvbnN9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkU29ydGFibGUgY2xhc3NOYW1lPVwibGF5ZXItbWFuYWdlclwiPlxuICAgICAgICAgIDxTb3VyY2VEYXRhQ2F0YWxvZ1xuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17dGhpcy5wcm9wcy5zaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgcmVtb3ZlRGF0YXNldD17dGhpcy5wcm9wcy5yZW1vdmVEYXRhc2V0fVxuICAgICAgICAgICAgc2hvd0RlbGV0ZURhdGFzZXRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBZGREYXRhQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLnNob3dBZGREYXRhTW9kYWx9XG4gICAgICAgICAgICBpc0luYWN0aXZlPXshZGVmYXVsdERhdGFzZXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2lkZVBhbmVsRGl2aWRlciAvPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgPFNvcnRhYmxlQ29udGFpbmVyXG4gICAgICAgICAgICAgIG9uU29ydEVuZD17dGhpcy5faGFuZGxlU29ydH1cbiAgICAgICAgICAgICAgbG9ja0F4aXM9XCJ5XCJcbiAgICAgICAgICAgICAgdXNlRHJhZ0hhbmRsZT17dHJ1ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2xheWVyT3JkZXIubWFwKChsYXllcklkeCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXllciA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhbmVsUHJvcHMsXG4gICAgICAgICAgICAgICAgICAuLi5sYXllckFjdGlvbnMsXG4gICAgICAgICAgICAgICAgICBzb3J0RGF0YTogbGF5ZXJJZHgsXG4gICAgICAgICAgICAgICAgICBrZXk6IGxheWVyc1tsYXllcklkeF0uaWQsXG4gICAgICAgICAgICAgICAgICBpZHg6IGxheWVySWR4LFxuICAgICAgICAgICAgICAgICAgbGF5ZXI6IGxheWVyc1tsYXllcklkeF1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U29ydGFibGVJdGVtXG4gICAgICAgICAgICAgICAgICAgIGtleT17YGxheWVyLSR7bGF5ZXJJZHh9YH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9Tb3J0YWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICB7ZGVmYXVsdERhdGFzZXQgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5fYWRkRW1wdHlOZXdMYXllcn0gd2lkdGg9XCIxMDVweFwiPlxuICAgICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+QWRkIExheWVyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxMYXllckJsZW5kaW5nU2VsZWN0b3JcbiAgICAgICAgICAgIGxheWVyQmxlbmRpbmc9e3RoaXMucHJvcHMubGF5ZXJCbGVuZGluZ31cbiAgICAgICAgICAgIHVwZGF0ZUxheWVyQmxlbmRpbmc9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJCbGVuZGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L1N0eWxlZFNvcnRhYmxlPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJNYW5hZ2VyRmFjdG9yeTtcbiJdfQ==