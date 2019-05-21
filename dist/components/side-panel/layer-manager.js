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
          layerTextLabelChange: this.props.layerTextLabelChange,
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
    layerTextLabelChange: _propTypes["default"].func.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTb3J0YWJsZSIsInN0eWxlZCIsImRpdiIsIkxheWVyQmxlbmRpbmdTZWxlY3RvciIsImxheWVyQmxlbmRpbmciLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwiT2JqZWN0Iiwia2V5cyIsIkxBWUVSX0JMRU5ESU5HUyIsIlNvcnRhYmxlU3R5bGVkSXRlbSIsIkFkZERhdGFCdXR0b25GYWN0b3J5IiwiQWRkRGF0YUJ1dHRvbiIsIm9uQ2xpY2siLCJpc0luYWN0aXZlIiwiTGF5ZXJNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJMYXllclBhbmVsRmFjdG9yeSIsIlNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSIsIkxheWVyUGFuZWwiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsIlNvcnRhYmxlSXRlbSIsImxheWVyIiwiU29ydGFibGVDb250YWluZXIiLCJjaGlsZHJlbiIsInByb3BzIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJDbGFzc1NlbGVjdG9yIiwibWFwIiwia2V5IiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJpY29uIiwibGF5ZXJJY29uIiwiYWRkTGF5ZXIiLCJvbGRJbmRleCIsIm5ld0luZGV4IiwidXBkYXRlTGF5ZXJPcmRlciIsImxheWVyT3JkZXIiLCJsYXllcnMiLCJkYXRhc2V0cyIsIm9wZW5Nb2RhbCIsImRlZmF1bHREYXRhc2V0IiwibGF5ZXJUeXBlT3B0aW9ucyIsImxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciIsImxheWVyQWN0aW9ucyIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJsYXllclRleHRMYWJlbENoYW5nZSIsInJlbW92ZUxheWVyIiwicGFuZWxQcm9wcyIsInNob3dEYXRhc2V0VGFibGUiLCJyZW1vdmVEYXRhc2V0Iiwic2hvd0FkZERhdGFNb2RhbCIsIl9oYW5kbGVTb3J0IiwibGF5ZXJJZHgiLCJpbmRleCIsInNvcnREYXRhIiwiaWR4IiwiX2FkZEVtcHR5TmV3TGF5ZXIiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsImFycmF5T2YiLCJhbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG1CQUFwQjs7QUF3Q0EsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtBQUFBLE1BQUVDLGFBQUYsUUFBRUEsYUFBRjtBQUFBLE1BQWlCQyxtQkFBakIsUUFBaUJBLG1CQUFqQjtBQUFBLFNBQzVCLGdDQUFDLG1DQUFELFFBQ0UsZ0NBQUMsNkJBQUQseUJBREYsRUFFRSxnQ0FBQyx3QkFBRDtBQUNFLElBQUEsYUFBYSxFQUFFRCxhQURqQjtBQUVFLElBQUEsT0FBTyxFQUFFRSxNQUFNLENBQUNDLElBQVAsQ0FBWUMsZ0NBQVosQ0FGWDtBQUdFLElBQUEsV0FBVyxFQUFFLEtBSGY7QUFJRSxJQUFBLFVBQVUsRUFBRSxLQUpkO0FBS0UsSUFBQSxRQUFRLEVBQUVIO0FBTFosSUFGRixDQUQ0QjtBQUFBLENBQTlCLEMsQ0FhQTs7O0FBQ0EsSUFBTUksa0JBQWtCLEdBQUdSLE1BQU0sQ0FBQ0MsR0FBVixvQkFBeEI7O0FBSU8sU0FBU1Esb0JBQVQsR0FBZ0M7QUFDckMsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLFFBQUVDLE9BQUYsU0FBRUEsT0FBRjtBQUFBLFFBQVdDLFVBQVgsU0FBV0EsVUFBWDtBQUFBLFdBQ3BCLGdDQUFDLHlCQUFEO0FBQ0UsTUFB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QjtBQVFqQmxCLElBQUFBLDhCQUE4QixFQUFFZ0Isc0JBQVVDLElBQVYsQ0FBZUMsVUFSOUI7QUFTakJqQixJQUFBQSxlQUFlLEVBQUVlLHNCQUFVQyxJQUFWLENBQWVDLFVBVGY7QUFVakJoQixJQUFBQSxvQkFBb0IsRUFBRWMsc0JBQVVDLElBQVYsQ0FBZUMsVUFWcEI7QUFXakJ4QixJQUFBQSxTQUFTLEVBQUVzQixzQkFBVUMsSUFBVixDQUFlQyxVQVhUO0FBWWpCZCxJQUFBQSxXQUFXLEVBQUVZLHNCQUFVQyxJQUFWLENBQWVDLFVBWlg7QUFhakJYLElBQUFBLGFBQWEsRUFBRVMsc0JBQVVDLElBQVYsQ0FBZUMsVUFiYjtBQWNqQlosSUFBQUEsZ0JBQWdCLEVBQUVVLHNCQUFVQyxJQUFWLENBQWVDLFVBZGhCO0FBZWpCNUQsSUFBQUEsbUJBQW1CLEVBQUUwRCxzQkFBVUMsSUFBVixDQUFlQyxVQWZuQjtBQWdCakI1QixJQUFBQSxnQkFBZ0IsRUFBRTBCLHNCQUFVQyxJQUFWLENBQWVDO0FBaEJoQixHQURyQjtBQTZHRDs7ZUFFY25ELG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtzb3J0YWJsZUNvbnRhaW5lciwgc29ydGFibGVFbGVtZW50fSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBhcnJheU1vdmUgZnJvbSAnYXJyYXktbW92ZSc7XG5cbmltcG9ydCBMYXllclBhbmVsRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsJztcbmltcG9ydCBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkgZnJvbSAnLi9zb3VyY2UtZGF0YS1jYXRhbG9nJztcbmltcG9ydCB7QWRkfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge1xuICBQYW5lbExhYmVsLFxuICBTaWRlUGFuZWxEaXZpZGVyLFxuICBTaWRlUGFuZWxTZWN0aW9uLFxuICBCdXR0b25cbn0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge0xBWUVSX0JMRU5ESU5HU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBTdHlsZWRTb3J0YWJsZSA9IHN0eWxlZC5kaXZgXG4gIC51aS1zb3J0YWJsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB9XG5cbiAgICA6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgfVxuICB9XG5cbiAgLnVpLXNvcnRhYmxlLWl0ZW0udWktc29ydGFibGUtZHJhZ2dpbmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxNjg4O1xuICAgIGN1cnNvcjogbW92ZTtcbiAgfVxuXG4gIC51aS1zb3J0YWJsZS1pdGVtLnVpLXNvcnRhYmxlLWRyYWdnaW5nOmhvdmVyIHtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5cbiAgLnVpLXNvcnRhYmxlLXBsYWNlaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnVpLXNvcnRhYmxlLXBsYWNlaG9sZGVyLnZpc2libGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbmA7XG5cbmNvbnN0IExheWVyQmxlbmRpbmdTZWxlY3RvciA9ICh7bGF5ZXJCbGVuZGluZywgdXBkYXRlTGF5ZXJCbGVuZGluZ30pID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPFBhbmVsTGFiZWw+TGF5ZXIgQmxlbmRpbmc8L1BhbmVsTGFiZWw+XG4gICAgPEl0ZW1TZWxlY3RvclxuICAgICAgc2VsZWN0ZWRJdGVtcz17bGF5ZXJCbGVuZGluZ31cbiAgICAgIG9wdGlvbnM9e09iamVjdC5rZXlzKExBWUVSX0JMRU5ESU5HUyl9XG4gICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICBzZWFyY2hhYmxlPXtmYWxzZX1cbiAgICAgIG9uQ2hhbmdlPXt1cGRhdGVMYXllckJsZW5kaW5nfVxuICAgIC8+XG4gIDwvU2lkZVBhbmVsU2VjdGlvbj5cbik7XG5cbi8vIG1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBhbHdheXMgdmlzaWJsZSB3aGlsZSBpcyBiZWluZyBkcmFnZ2VkXG5jb25zdCBTb3J0YWJsZVN0eWxlZEl0ZW0gPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAxMDA7XG5gO1xuXG5leHBvcnQgZnVuY3Rpb24gQWRkRGF0YUJ1dHRvbkZhY3RvcnkoKSB7XG4gIGNvbnN0IEFkZERhdGFCdXR0b24gPSAoe29uQ2xpY2ssIGlzSW5hY3RpdmV9KSA9PiAoXG4gICAgPEJ1dHRvblxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGlzSW5hY3RpdmU9eyFpc0luYWN0aXZlfVxuICAgICAgd2lkdGg9XCIxMDVweFwiXG4gICAgICBzZWNvbmRhcnlcbiAgICA+XG4gICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPkFkZCBEYXRhXG4gICAgPC9CdXR0b24+XG4gICk7XG5cbiAgcmV0dXJuIEFkZERhdGFCdXR0b247XG59XG5cbkxheWVyTWFuYWdlckZhY3RvcnkuZGVwcyA9IFtcbiAgQWRkRGF0YUJ1dHRvbkZhY3RvcnksXG4gIExheWVyUGFuZWxGYWN0b3J5LFxuICBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIExheWVyTWFuYWdlckZhY3RvcnkoQWRkRGF0YUJ1dHRvbiwgTGF5ZXJQYW5lbCwgU291cmNlRGF0YUNhdGFsb2cpIHtcbiAgLy8gQnkgd3JhcHBpbmcgbGF5ZXIgcGFuZWwgdXNpbmcgYSBzb3J0YWJsZSBlbGVtZW50IHdlIGRvbid0IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBkcmFnIGFuZCBkcm9wIGxvZ2ljIGludG8gdGhlIHBhbmVsIGl0c2VsZjtcbiAgLy8gRGV2ZWxvcGVycyBjYW4gcHJvdmlkZSBhbnkgbGF5ZXIgcGFuZWwgaW1wbGVtZW50YXRpb24gYW5kIGl0IHdpbGwgc3RpbGwgYmUgc29ydGFibGVcbiAgY29uc3QgU29ydGFibGVJdGVtID0gc29ydGFibGVFbGVtZW50KCh7bGF5ZXJ9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTb3J0YWJsZVN0eWxlZEl0ZW0+XG4gICAgICAgIDxMYXllclBhbmVsIHsuLi5sYXllcn0gLz5cbiAgICAgIDwvU29ydGFibGVTdHlsZWRJdGVtPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IFNvcnRhYmxlQ29udGFpbmVyID0gc29ydGFibGVDb250YWluZXIoKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4gPGRpdj57Y2hpbGRyZW59PC9kaXY+O1xuICB9KTtcblxuICByZXR1cm4gY2xhc3MgTGF5ZXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgYWRkTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJDbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNvbmZpZ0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBvcGVuTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVMYXllcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHJlbW92ZURhdGFzZXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBzaG93RGF0YXNldFRhYmxlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHVwZGF0ZUxheWVyT3JkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgbGF5ZXJDbGFzc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGF5ZXJDbGFzc2VzO1xuICAgIGxheWVyVHlwZU9wdGlvbnNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllckNsYXNzU2VsZWN0b3IsXG4gICAgICBsYXllckNsYXNzZXMgPT4gT2JqZWN0LmtleXMobGF5ZXJDbGFzc2VzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgbGF5ZXJDbGFzc2VzW2tleV0oKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgIGxhYmVsOiBsYXllci5uYW1lLFxuICAgICAgICAgIGljb246IGxheWVyLmxheWVySWNvblxuICAgICAgICB9O1xuICAgIH0pKTtcblxuICAgIF9hZGRFbXB0eU5ld0xheWVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5hZGRMYXllcigpO1xuICAgIH07XG5cbiAgICBfaGFuZGxlU29ydCA9ICh7b2xkSW5kZXgsIG5ld0luZGV4fSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVMYXllck9yZGVyKGFycmF5TW92ZSh0aGlzLnByb3BzLmxheWVyT3JkZXIsIG9sZEluZGV4LCBuZXdJbmRleCkpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bGF5ZXJzLCBkYXRhc2V0cywgbGF5ZXJPcmRlciwgb3Blbk1vZGFsfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IE9iamVjdC5rZXlzKGRhdGFzZXRzKVswXTtcbiAgICAgIGNvbnN0IGxheWVyVHlwZU9wdGlvbnMgPSB0aGlzLmxheWVyVHlwZU9wdGlvbnNTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3QgbGF5ZXJBY3Rpb25zID0ge1xuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdGhpcy5wcm9wcy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHRoaXMucHJvcHMubGF5ZXJWaXNDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVGV4dExhYmVsQ2hhbmdlOiB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlLFxuICAgICAgICByZW1vdmVMYXllcjogdGhpcy5wcm9wcy5yZW1vdmVMYXllclxuICAgICAgfTtcblxuICAgICAgY29uc3QgcGFuZWxQcm9wcyA9IHtkYXRhc2V0cywgb3Blbk1vZGFsLCBsYXllclR5cGVPcHRpb25zfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFNvcnRhYmxlIGNsYXNzTmFtZT1cImxheWVyLW1hbmFnZXJcIj5cbiAgICAgICAgICA8U291cmNlRGF0YUNhdGFsb2dcbiAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3RoaXMucHJvcHMuc2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgIHJlbW92ZURhdGFzZXQ9e3RoaXMucHJvcHMucmVtb3ZlRGF0YXNldH1cbiAgICAgICAgICAgIHNob3dEZWxldGVEYXRhc2V0XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWRkRGF0YUJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5zaG93QWRkRGF0YU1vZGFsfVxuICAgICAgICAgICAgaXNJbmFjdGl2ZT17IWRlZmF1bHREYXRhc2V0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFNpZGVQYW5lbERpdmlkZXIgLz5cbiAgICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICAgIDxTb3J0YWJsZUNvbnRhaW5lclxuICAgICAgICAgICAgICBvblNvcnRFbmQ9e3RoaXMuX2hhbmRsZVNvcnR9XG4gICAgICAgICAgICAgIGxvY2tBeGlzPVwieVwiXG4gICAgICAgICAgICAgIHVzZURyYWdIYW5kbGU9e3RydWV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsYXllck9yZGVyLm1hcCgobGF5ZXJJZHgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGF5ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAuLi5wYW5lbFByb3BzLFxuICAgICAgICAgICAgICAgICAgLi4ubGF5ZXJBY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgc29ydERhdGE6IGxheWVySWR4LFxuICAgICAgICAgICAgICAgICAga2V5OiBsYXllcnNbbGF5ZXJJZHhdLmlkLFxuICAgICAgICAgICAgICAgICAgaWR4OiBsYXllcklkeCxcbiAgICAgICAgICAgICAgICAgIGxheWVyOiBsYXllcnNbbGF5ZXJJZHhdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNvcnRhYmxlSXRlbVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BsYXllci0ke2xheWVySWR4fWB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvU29ydGFibGVDb250YWluZXI+XG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAge2RlZmF1bHREYXRhc2V0ID8gKFxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuX2FkZEVtcHR5TmV3TGF5ZXJ9IHdpZHRoPVwiMTA1cHhcIj5cbiAgICAgICAgICAgICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPkFkZCBMYXllclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8TGF5ZXJCbGVuZGluZ1NlbGVjdG9yXG4gICAgICAgICAgICBsYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLmxheWVyQmxlbmRpbmd9XG4gICAgICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLnVwZGF0ZUxheWVyQmxlbmRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRTb3J0YWJsZT5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyTWFuYWdlckZhY3Rvcnk7XG4iXX0=