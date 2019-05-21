"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SidePanelFactory;
exports.PanelTitleFactory = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var styled = _interopRequireWildcard(require("styled-components"));

var _sideBar = _interopRequireDefault(require("./side-panel/side-bar"));

var _panelHeader = _interopRequireDefault(require("./side-panel/panel-header"));

var _layerManager = _interopRequireDefault(require("./side-panel/layer-manager"));

var _filterManager = _interopRequireDefault(require("./side-panel/filter-manager"));

var _interactionManager = _interopRequireDefault(require("./side-panel/interaction-manager"));

var _mapManager = _interopRequireDefault(require("./side-panel/map-manager"));

var _panelToggle = _interopRequireDefault(require("./side-panel/panel-toggle"));

var _defaultSettings = require("../constants/default-settings");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SidePanelContent = styled.div(_templateObject(), function (props) {
  return props.theme.sidePanelScrollBar;
});

var PanelTitleFactory = function PanelTitleFactory() {
  return styled.div(_templateObject2(), function (props) {
    return props.theme.titleTextColor;
  });
};

exports.PanelTitleFactory = PanelTitleFactory;
SidePanelFactory.deps = [_sideBar["default"], _panelHeader["default"], _panelToggle["default"], PanelTitleFactory, _layerManager["default"], _filterManager["default"], _interactionManager["default"], _mapManager["default"]];
/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */

function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    (0, _inherits2["default"])(SidePanel, _PureComponent);

    function SidePanel() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, SidePanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(SidePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDatasetTable", function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);

        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddDataModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showAddMapStyleModal", function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeDataset", function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportImage", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportData", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportMap", function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_MAP_ID);
      });
      return _this;
    }

    (0, _createClass2["default"])(SidePanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            version = _this$props.version,
            datasets = _this$props.datasets,
            filters = _this$props.filters,
            layers = _this$props.layers,
            layerBlending = _this$props.layerBlending,
            layerClasses = _this$props.layerClasses,
            uiState = _this$props.uiState,
            layerOrder = _this$props.layerOrder,
            interactionConfig = _this$props.interactionConfig,
            visStateActions = _this$props.visStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions;
        var activeSidePanel = uiState.activeSidePanel;
        var isOpen = Boolean(activeSidePanel);
        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerTextLabelChange: visStateActions.layerTextLabelChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset
        };
        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleAnimation,
          enlargeFilter: visStateActions.enlargeFilter
        };
        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };
        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          showAddMapStyleModal: this._showAddMapStyleModal
        };
        return _react["default"].createElement("div", null, _react["default"].createElement(Sidebar, {
          width: this.props.width,
          isOpen: isOpen,
          minifiedWidth: 0,
          onOpenOrClose: this._onOpenOrClose
        }, _react["default"].createElement(PanelHeader, {
          appName: appName,
          version: version,
          onExportImage: this._onExportImage,
          onExportData: this._onExportData,
          visibleDropdown: uiState.visibleDropdown,
          showExportDropdown: uiStateActions.showExportDropdown,
          hideExportDropdown: uiStateActions.hideExportDropdown,
          onExportMap: this._onExportMap,
          onSaveMap: this.props.onSaveMap
        }), _react["default"].createElement(PanelToggle, {
          panels: _defaultSettings.PANELS,
          activePanel: activeSidePanel,
          togglePanel: uiStateActions.toggleSidePanel
        }), _react["default"].createElement(SidePanelContent, {
          className: "side-panel__content"
        }, _react["default"].createElement("div", null, _react["default"].createElement(PanelTitle, {
          className: "side-panel__content__title"
        }, (_defaultSettings.PANELS.find(function (_ref) {
          var id = _ref.id;
          return id === activeSidePanel;
        }) || {}).label), activeSidePanel === 'layer' && _react["default"].createElement(LayerManager, (0, _extends2["default"])({}, layerManagerActions, {
          datasets: datasets,
          layers: layers,
          layerClasses: layerClasses,
          layerOrder: layerOrder,
          layerBlending: layerBlending,
          openModal: uiStateActions.toggleModal
        })), activeSidePanel === 'filter' && _react["default"].createElement(FilterManager, (0, _extends2["default"])({}, filterManagerActions, {
          datasets: datasets,
          filters: filters
        })), activeSidePanel === 'interaction' && _react["default"].createElement(InteractionManager, (0, _extends2["default"])({}, interactionManagerActions, {
          datasets: datasets,
          interactionConfig: interactionConfig
        })), activeSidePanel === 'map' && _react["default"].createElement(MapManager, (0, _extends2["default"])({}, mapManagerActions, {
          mapStyle: this.props.mapStyle
        }))))));
      }
    }]);
    return SidePanel;
  }(_react.PureComponent), (0, _defineProperty2["default"])(_class, "propTypes", {
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    interactionConfig: _propTypes["default"].object.isRequired,
    layerBlending: _propTypes["default"].string.isRequired,
    layers: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    layerClasses: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    width: _propTypes["default"].number.isRequired,
    datasets: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired
  }), _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJQYW5lbFRpdGxlRmFjdG9yeSIsInRpdGxlVGV4dENvbG9yIiwiU2lkZVBhbmVsRmFjdG9yeSIsImRlcHMiLCJTaWRlYmFyRmFjdG9yeSIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIkxheWVyTWFuYWdlckZhY3RvcnkiLCJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsIkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkiLCJNYXBNYW5hZ2VyRmFjdG9yeSIsIlNpZGViYXIiLCJQYW5lbEhlYWRlciIsIlBhbmVsVG9nZ2xlIiwiUGFuZWxUaXRsZSIsIkxheWVyTWFuYWdlciIsIkZpbHRlck1hbmFnZXIiLCJJbnRlcmFjdGlvbk1hbmFnZXIiLCJNYXBNYW5hZ2VyIiwidWlTdGF0ZUFjdGlvbnMiLCJ0b2dnbGVTaWRlUGFuZWwiLCJ1aVN0YXRlIiwiYWN0aXZlU2lkZVBhbmVsIiwiZGF0YUlkIiwidmlzU3RhdGVBY3Rpb25zIiwic2hvd0RhdGFzZXRUYWJsZSIsInRvZ2dsZU1vZGFsIiwiREFUQV9UQUJMRV9JRCIsIkFERF9EQVRBX0lEIiwiQUREX01BUF9TVFlMRV9JRCIsImtleSIsIm9wZW5EZWxldGVNb2RhbCIsIkVYUE9SVF9JTUFHRV9JRCIsIkVYUE9SVF9EQVRBX0lEIiwiRVhQT1JUX01BUF9JRCIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwiZGF0YXNldHMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImxheWVyT3JkZXIiLCJpbnRlcmFjdGlvbkNvbmZpZyIsIm1hcFN0eWxlQWN0aW9ucyIsImlzT3BlbiIsIkJvb2xlYW4iLCJsYXllck1hbmFnZXJBY3Rpb25zIiwiYWRkTGF5ZXIiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJPcmRlciIsInJlb3JkZXJMYXllciIsIl9zaG93RGF0YXNldFRhYmxlIiwic2hvd0FkZERhdGFNb2RhbCIsIl9zaG93QWRkRGF0YU1vZGFsIiwicmVtb3ZlTGF5ZXIiLCJyZW1vdmVEYXRhc2V0IiwiX3JlbW92ZURhdGFzZXQiLCJmaWx0ZXJNYW5hZ2VyQWN0aW9ucyIsImFkZEZpbHRlciIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsInRvZ2dsZUFuaW1hdGlvbiIsImVubGFyZ2VGaWx0ZXIiLCJpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zIiwib25Db25maWdDaGFuZ2UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsIm1hcE1hbmFnZXJBY3Rpb25zIiwiYWRkTWFwU3R5bGVVcmwiLCJtYXBDb25maWdDaGFuZ2UiLCJvblN0eWxlQ2hhbmdlIiwibWFwU3R5bGVDaGFuZ2UiLCJvbkJ1aWxkaW5nQ2hhbmdlIiwibWFwQnVpbGRpbmdDaGFuZ2UiLCJzaG93QWRkTWFwU3R5bGVNb2RhbCIsIl9zaG93QWRkTWFwU3R5bGVNb2RhbCIsIndpZHRoIiwiX29uT3Blbk9yQ2xvc2UiLCJfb25FeHBvcnRJbWFnZSIsIl9vbkV4cG9ydERhdGEiLCJ2aXNpYmxlRHJvcGRvd24iLCJzaG93RXhwb3J0RHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJfb25FeHBvcnRNYXAiLCJvblNhdmVNYXAiLCJQQU5FTFMiLCJmaW5kIiwiaWQiLCJsYWJlbCIsIm1hcFN0eWxlIiwiUHVyZUNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwibnVtYmVyIl0sIm1hcHBp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QkFBaUIsRUFBRU07QUFIckIsV0F2QkosRUE2QkdyQixlQUFlLEtBQUssS0FBcEIsSUFDQyxnQ0FBQyxVQUFELGdDQUNNa0QsaUJBRE47QUFFRSxVQUFBLFFBQVEsRUFBRSxLQUFLM0UsS0FBTCxDQUFXaUc7QUFGdkIsV0E5QkosQ0FERixDQXRCRixDQURGLENBREY7QUFpRUQ7QUF4S0g7QUFBQTtBQUFBLElBQStCQyxvQkFBL0IseURBQ3FCO0FBQ2pCekQsSUFBQUEsT0FBTyxFQUFFMEQsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixFQUFpQ0MsVUFEekI7QUFFakJ4RCxJQUFBQSxpQkFBaUIsRUFBRXFELHNCQUFVSSxNQUFWLENBQWlCRCxVQUZuQjtBQUdqQjNELElBQUFBLGFBQWEsRUFBRXdELHNCQUFVSyxNQUFWLENBQWlCRixVQUhmO0FBSWpCNUQsSUFBQUEsTUFBTSxFQUFFeUQsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixFQUFpQ0MsVUFKeEI7QUFLakIxRCxJQUFBQSxZQUFZLEVBQUV1RCxzQkFBVUksTUFBVixDQUFpQkQsVUFMZDtBQU1qQkwsSUFBQUEsUUFBUSxFQUFFRSxzQkFBVUksTUFBVixDQUFpQkQsVUFOVjtBQU9qQmxCLElBQUFBLEtBQUssRUFBRWUsc0JBQVVNLE1BQVYsQ0FBaUJILFVBUFA7QUFRakI5RCxJQUFBQSxRQUFRLEVBQUUyRCxzQkFBVUksTUFBVixDQUFpQkQsVUFSVjtBQVNqQjNFLElBQUFBLGVBQWUsRUFBRXdFLHNCQUFVSSxNQUFWLENBQWlCRCxVQVRqQjtBQVVqQnZELElBQUFBLGVBQWUsRUFBRW9ELHNCQUFVSSxNQUFWLENBQWlCRDtBQVZqQixHQURyQjtBQTBLRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2lkZWJhckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtYmFyJztcbmltcG9ydCBQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlcic7XG5pbXBvcnQgTGF5ZXJNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQgRmlsdGVyTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2ZpbHRlci1tYW5hZ2VyJztcbmltcG9ydCBJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9pbnRlcmFjdGlvbi1tYW5hZ2VyJztcbmltcG9ydCBNYXBNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXInO1xuaW1wb3J0IFBhbmVsVG9nZ2xlRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlJztcblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIEFERF9NQVBfU1RZTEVfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9NQVBfSUQsXG4gIFBBTkVMU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFNpZGVQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFNjcm9sbEJhcn07XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTZweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxUaXRsZUZhY3RvcnkgPSAoKSA9PiBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbmA7XG5cblNpZGVQYW5lbEZhY3RvcnkuZGVwcyA9IFtcbiAgU2lkZWJhckZhY3RvcnksXG4gIFBhbmVsSGVhZGVyRmFjdG9yeSxcbiAgUGFuZWxUb2dnbGVGYWN0b3J5LFxuICBQYW5lbFRpdGxlRmFjdG9yeSxcbiAgTGF5ZXJNYW5hZ2VyRmFjdG9yeSxcbiAgRmlsdGVyTWFuYWdlckZhY3RvcnksXG4gIEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnksXG4gIE1hcE1hbmFnZXJGYWN0b3J5XG5dO1xuXG4vKipcbiAqXG4gKiBWZXJ0aWNhbCBzaWRlYmFyIGNvbnRhaW5pbmcgaW5wdXQgY29tcG9uZW50cyBmb3IgdGhlIHJlbmRlcmluZyBsYXllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZVBhbmVsRmFjdG9yeShcbiAgU2lkZWJhcixcbiAgUGFuZWxIZWFkZXIsXG4gIFBhbmVsVG9nZ2xlLFxuICBQYW5lbFRpdGxlLFxuICBMYXllck1hbmFnZXIsXG4gIEZpbHRlck1hbmFnZXIsXG4gIEludGVyYWN0aW9uTWFuYWdlcixcbiAgTWFwTWFuYWdlclxuKSB7XG5cbiAgcmV0dXJuIGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG4gICAgLyogY29tcG9uZW50IHByaXZhdGUgZnVuY3Rpb25zICovXG4gICAgX29uT3Blbk9yQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZVNpZGVQYW5lbChcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlLmFjdGl2ZVNpZGVQYW5lbCA/IG51bGwgOiAnbGF5ZXInXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfc2hvd0RhdGFzZXRUYWJsZSA9IGRhdGFJZCA9PiB7XG4gICAgICAvLyB0aGlzIHdpbGwgb3BlbiBkYXRhIHRhYmxlIG1vZGFsXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlKGRhdGFJZCk7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKERBVEFfVEFCTEVfSUQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZERhdGFNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoQUREX0RBVEFfSUQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZE1hcFN0eWxlTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9NQVBfU1RZTEVfSUQpO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlRGF0YXNldCA9IGtleSA9PiB7XG4gICAgICAvLyB0aGlzIHdpbGwgc2hvdyB0aGUgbW9kYWwgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMub3BlbkRlbGV0ZU1vZGFsKGtleSk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEltYWdlID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfSU1BR0VfSUQpO1xuXG4gICAgX29uRXhwb3J0RGF0YSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0RBVEFfSUQpO1xuXG4gICAgX29uRXhwb3J0TWFwID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfTUFQX0lEKTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge2FjdGl2ZVNpZGVQYW5lbH0gPSB1aVN0YXRlO1xuICAgICAgY29uc3QgaXNPcGVuID0gQm9vbGVhbihhY3RpdmVTaWRlUGFuZWwpO1xuXG4gICAgICBjb25zdCBsYXllck1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRMYXllcjogdmlzU3RhdGVBY3Rpb25zLmFkZExheWVyLFxuICAgICAgICBsYXllckNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllclRleHRMYWJlbENoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVGV4dExhYmVsQ2hhbmdlLFxuICAgICAgICBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2U6XG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVHlwZUNoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXNDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclZpc0NvbmZpZ0NoYW5nZSxcbiAgICAgICAgdXBkYXRlTGF5ZXJCbGVuZGluZzogdmlzU3RhdGVBY3Rpb25zLnVwZGF0ZUxheWVyQmxlbmRpbmcsXG4gICAgICAgIHVwZGF0ZUxheWVyT3JkZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW9yZGVyTGF5ZXIsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWw6IHRoaXMuX3Nob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHJlbW92ZUxheWVyOiB2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlTGF5ZXIsXG4gICAgICAgIHJlbW92ZURhdGFzZXQ6IHRoaXMuX3JlbW92ZURhdGFzZXRcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZpbHRlck1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRGaWx0ZXIsXG4gICAgICAgIHJlbW92ZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLnJlbW92ZUZpbHRlcixcbiAgICAgICAgc2V0RmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuc2V0RmlsdGVyLFxuICAgICAgICBzaG93RGF0YXNldFRhYmxlOiB0aGlzLl9zaG93RGF0YXNldFRhYmxlLFxuICAgICAgICBzaG93QWRkRGF0YU1vZGFsOiB0aGlzLl9zaG93QWRkRGF0YU1vZGFsLFxuICAgICAgICB0b2dnbGVBbmltYXRpb246IHZpc1N0YXRlQWN0aW9ucy50b2dnbGVBbmltYXRpb24sXG4gICAgICAgIGVubGFyZ2VGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5lbmxhcmdlRmlsdGVyXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBvbkNvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTWFwU3R5bGVVcmw6IG1hcFN0eWxlQWN0aW9ucy5hZGRNYXBTdHlsZVVybCxcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBDb25maWdDaGFuZ2UsXG4gICAgICAgIG9uU3R5bGVDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBTdHlsZUNoYW5nZSxcbiAgICAgICAgb25CdWlsZGluZ0NoYW5nZTogbWFwU3R5bGVBY3Rpb25zLm1hcEJ1aWxkaW5nQ2hhbmdlLFxuICAgICAgICBzaG93QWRkTWFwU3R5bGVNb2RhbDogdGhpcy5fc2hvd0FkZE1hcFN0eWxlTW9kYWxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFNpZGViYXJcbiAgICAgICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICBtaW5pZmllZFdpZHRoPXswfVxuICAgICAgICAgICAgb25PcGVuT3JDbG9zZT17dGhpcy5fb25PcGVuT3JDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJcbiAgICAgICAgICAgICAgYXBwTmFtZT17YXBwTmFtZX1cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgICAgb25FeHBvcnRJbWFnZT17dGhpcy5fb25FeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgb25FeHBvcnREYXRhPXt0aGlzLl9vbkV4cG9ydERhdGF9XG4gICAgICAgICAgICAgIHZpc2libGVEcm9wZG93bj17dWlTdGF0ZS52aXNpYmxlRHJvcGRvd259XG4gICAgICAgICAgICAgIHNob3dFeHBvcnREcm9wZG93bj17dWlTdGF0ZUFjdGlvbnMuc2hvd0V4cG9ydERyb3Bkb3dufVxuICAgICAgICAgICAgICBoaWRlRXhwb3J0RHJvcGRvd249e3VpU3RhdGVBY3Rpb25zLmhpZGVFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgb25FeHBvcnRNYXA9e3RoaXMuX29uRXhwb3J0TWFwfVxuICAgICAgICAgICAgICBvblNhdmVNYXA9e3RoaXMucHJvcHMub25TYXZlTWFwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQYW5lbFRvZ2dsZVxuICAgICAgICAgICAgICBwYW5lbHM9e1BBTkVMU31cbiAgICAgICAgICAgICAgYWN0aXZlUGFuZWw9e2FjdGl2ZVNpZGVQYW5lbH1cbiAgICAgICAgICAgICAgdG9nZ2xlUGFuZWw9e3VpU3RhdGVBY3Rpb25zLnRvZ2dsZVNpZGVQYW5lbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8U2lkZVBhbmVsQ29udGVudCBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBhbmVsVGl0bGUgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fY29udGVudF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHsoUEFORUxTLmZpbmQoKHtpZH0pID0+IGlkID09PSBhY3RpdmVTaWRlUGFuZWwpIHx8IHt9KS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1BhbmVsVGl0bGU+XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ2xheWVyJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8TGF5ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllck1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgICAgICAgICBsYXllckNsYXNzZXM9e2xheWVyQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJPcmRlcj17bGF5ZXJPcmRlcn1cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJCbGVuZGluZz17bGF5ZXJCbGVuZGluZ31cbiAgICAgICAgICAgICAgICAgICAgb3Blbk1vZGFsPXt1aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnZmlsdGVyJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8RmlsdGVyTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4uZmlsdGVyTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnaW50ZXJhY3Rpb24nICYmIChcbiAgICAgICAgICAgICAgICAgIDxJbnRlcmFjdGlvbk1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Db25maWc9e2ludGVyYWN0aW9uQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdtYXAnICYmIChcbiAgICAgICAgICAgICAgICAgIDxNYXBNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5tYXBNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgbWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9TaWRlUGFuZWxDb250ZW50PlxuICAgICAgICAgIDwvU2lkZWJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==