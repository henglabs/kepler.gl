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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJQYW5lbFRpdGxlRmFjdG9yeSIsInRpdGxlVGV4dENvbG9yIiwiU2lkZVBhbmVsRmFjdG9yeSIsImRlcHMiLCJTaWRlYmFyRmFjdG9yeSIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIkxheWVyTWFuYWdlckZhY3RvcnkiLCJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsIkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkiLCJNYXBNYW5hZ2VyRmFjdG9yeSIsIlNpZGViYXIiLCJQYW5lbEhlYWRlciIsIlBhbmVsVG9nZ2xlIiwiUGFuZWxUaXRsZSIsIkxheWVyTWFuYWdlciIsIkZpbHRlck1hbmFnZXIiLCJJbnRlcmFjdGlvbk1hbmFnZXIiLCJNYXBNYW5hZ2VyIiwidWlTdGF0ZUFjdGlvbnMiLCJ0b2dnbGVTaWRlUGFuZWwiLCJ1aVN0YXRlIiwiYWN0aXZlU2lkZVBhbmVsIiwiZGF0YUlkIiwidmlzU3RhdGVBY3Rpb25zIiwic2hvd0RhdGFzZXRUYWJsZSIsInRvZ2dsZU1vZGFsIiwiREFUQV9UQUJMRV9JRCIsIkFERF9EQVRBX0lEIiwiQUREX01BUF9TVFlMRV9JRCIsImtleSIsIm9wZW5EZWxldGVNb2RhbCIsIkVYUE9SVF9JTUFHRV9JRCIsIkVYUE9SVF9EQVRBX0lEIiwiRVhQT1JUX01BUF9JRCIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwiZGF0YXNldHMiLCJmaWx0ZXJzIiwibGF5ZXJzIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImxheWVyT3JkZXIiLCJpbnRlcmFjdGlvbkNvbmZpZyIsIm1hcFN0eWxlQWN0aW9ucyIsImlzT3BlbiIsIkJvb2xlYW4iLCJsYXllck1hbmFnZXJBY3Rpb25zIiwiYWRkTGF5ZXIiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsImxheWVyVHlwZUNoYW5nZSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwidXBkYXRlTGF5ZXJCbGVuZGluZyIsInVwZGF0ZUxheWVyT3JkZXIiLCJyZW9yZGVyTGF5ZXIiLCJfc2hvd0RhdGFzZXRUYWJsZSIsInNob3dBZGREYXRhTW9kYWwiLCJfc2hvd0FkZERhdGFNb2RhbCIsInJlbW92ZUxheWVyIiwicmVtb3ZlRGF0YXNldCIsIl9yZW1vdmVEYXRhc2V0IiwiZmlsdGVyTWFuYWdlckFjdGlvbnMiLCJhZGRGaWx0ZXIiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJlbmxhcmdlRmlsdGVyIiwiaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyIsIm9uQ29uZmlnQ2hhbmdlIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UiLCJtYXBNYW5hZ2VyQWN0aW9ucyIsImFkZE1hcFN0eWxlVXJsIiwibWFwQ29uZmlnQ2hhbmdlIiwib25TdHlsZUNoYW5nZSIsIm1hcFN0eWxlQ2hhbmdlIiwib25CdWlsZGluZ0NoYW5nZSIsIm1hcEJ1aWxkaW5nQ2hhbmdlIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJfc2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJ3aWR0aCIsIl9vbk9wZW5PckNsb3NlIiwiX29uRXhwb3J0SW1hZ2UiLCJfb25FeHBvcnREYXRhIiwidmlzaWJsZURyb3Bkb3duIiwic2hvd0V4cG9ydERyb3Bkb3duIiwiaGlkZUV4cG9ydERyb3Bkb3duIiwiX29uRXhwb3J0TWFwIiwib25TYXZlTWFwIiwiUEFORUxTIiwiZmluZCIsImlkIiwibGFiZWwiLCJtYXBTdHlsZSIsIlB1cmVDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwiYW55IiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsInN0cmluZyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7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aUQsaUJBRE47QUFFRSxVQUFBLFFBQVEsRUFBRSxLQUFLMUUsS0FBTCxDQUFXZ0c7QUFGdkIsV0E5QkosQ0FERixDQXRCRixDQURGLENBREY7QUFpRUQ7QUF4S0g7QUFBQTtBQUFBLElBQStCQyxvQkFBL0IseURBQ3FCO0FBQ2pCeEQsSUFBQUEsT0FBTyxFQUFFeUQsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixFQUFpQ0MsVUFEekI7QUFFakJ2RCxJQUFBQSxpQkFBaUIsRUFBRW9ELHNCQUFVSSxNQUFWLENBQWlCRCxVQUZuQjtBQUdqQjFELElBQUFBLGFBQWEsRUFBRXVELHNCQUFVSyxNQUFWLENBQWlCRixVQUhmO0FBSWpCM0QsSUFBQUEsTUFBTSxFQUFFd0Qsc0JBQVVDLE9BQVYsQ0FBa0JELHNCQUFVRSxHQUE1QixFQUFpQ0MsVUFKeEI7QUFLakJ6RCxJQUFBQSxZQUFZLEVBQUVzRCxzQkFBVUksTUFBVixDQUFpQkQsVUFMZDtBQU1qQkwsSUFBQUEsUUFBUSxFQUFFRSxzQkFBVUksTUFBVixDQUFpQkQsVUFOVjtBQU9qQmxCLElBQUFBLEtBQUssRUFBRWUsc0JBQVVNLE1BQVYsQ0FBaUJILFVBUFA7QUFRakI3RCxJQUFBQSxRQUFRLEVBQUUwRCxzQkFBVUksTUFBVixDQUFpQkQsVUFSVjtBQVNqQjFFLElBQUFBLGVBQWUsRUFBRXVFLHNCQUFVSSxNQUFWLENBQWlCRCxVQVRqQjtBQVVqQnRELElBQUFBLGVBQWUsRUFBRW1ELHNCQUFVSSxNQUFWLENBQWlCRDtBQVZqQixHQURyQjtBQTBLRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge1B1cmVDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgU2lkZWJhckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3NpZGUtYmFyJztcbmltcG9ydCBQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlcic7XG5pbXBvcnQgTGF5ZXJNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbGF5ZXItbWFuYWdlcic7XG5pbXBvcnQgRmlsdGVyTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2ZpbHRlci1tYW5hZ2VyJztcbmltcG9ydCBJbnRlcmFjdGlvbk1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9pbnRlcmFjdGlvbi1tYW5hZ2VyJztcbmltcG9ydCBNYXBNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvbWFwLW1hbmFnZXInO1xuaW1wb3J0IFBhbmVsVG9nZ2xlRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtdG9nZ2xlJztcblxuaW1wb3J0IHtcbiAgQUREX0RBVEFfSUQsXG4gIEFERF9NQVBfU1RZTEVfSUQsXG4gIERBVEFfVEFCTEVfSUQsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9NQVBfSUQsXG4gIFBBTkVMU1xufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFNpZGVQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbFNjcm9sbEJhcn07XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZzogMTZweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxUaXRsZUZhY3RvcnkgPSAoKSA9PiBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZVRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbmA7XG5cblNpZGVQYW5lbEZhY3RvcnkuZGVwcyA9IFtcbiAgU2lkZWJhckZhY3RvcnksXG4gIFBhbmVsSGVhZGVyRmFjdG9yeSxcbiAgUGFuZWxUb2dnbGVGYWN0b3J5LFxuICBQYW5lbFRpdGxlRmFjdG9yeSxcbiAgTGF5ZXJNYW5hZ2VyRmFjdG9yeSxcbiAgRmlsdGVyTWFuYWdlckZhY3RvcnksXG4gIEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnksXG4gIE1hcE1hbmFnZXJGYWN0b3J5XG5dO1xuXG4vKipcbiAqXG4gKiBWZXJ0aWNhbCBzaWRlYmFyIGNvbnRhaW5pbmcgaW5wdXQgY29tcG9uZW50cyBmb3IgdGhlIHJlbmRlcmluZyBsYXllcnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZVBhbmVsRmFjdG9yeShcbiAgU2lkZWJhcixcbiAgUGFuZWxIZWFkZXIsXG4gIFBhbmVsVG9nZ2xlLFxuICBQYW5lbFRpdGxlLFxuICBMYXllck1hbmFnZXIsXG4gIEZpbHRlck1hbmFnZXIsXG4gIEludGVyYWN0aW9uTWFuYWdlcixcbiAgTWFwTWFuYWdlclxuKSB7XG5cbiAgcmV0dXJuIGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgaW50ZXJhY3Rpb25Db25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQmxlbmRpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGxheWVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICAvKiBjb21wb25lbnQgcHJpdmF0ZSBmdW5jdGlvbnMgKi9cbiAgICBfb25PcGVuT3JDbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlU2lkZVBhbmVsKFxuICAgICAgICB0aGlzLnByb3BzLnVpU3RhdGUuYWN0aXZlU2lkZVBhbmVsID8gbnVsbCA6ICdsYXllcidcbiAgICAgICk7XG4gICAgfTtcblxuICAgIF9zaG93RGF0YXNldFRhYmxlID0gZGF0YUlkID0+IHtcbiAgICAgIC8vIHRoaXMgd2lsbCBvcGVuIGRhdGEgdGFibGUgbW9kYWxcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNob3dEYXRhc2V0VGFibGUoZGF0YUlkKTtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoREFUQV9UQUJMRV9JRCk7XG4gICAgfTtcblxuICAgIF9zaG93QWRkRGF0YU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChBRERfREFUQV9JRCk7XG4gICAgfTtcblxuICAgIF9zaG93QWRkTWFwU3R5bGVNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoQUREX01BUF9TVFlMRV9JRCk7XG4gICAgfTtcblxuICAgIF9yZW1vdmVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIC8vIHRoaXMgd2lsbCBzaG93IHRoZSBtb2RhbCBkaWFsb2cgdG8gY29uZmlybSBkZWxldGlvblxuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5vcGVuRGVsZXRlTW9kYWwoa2V5KTtcbiAgICB9O1xuXG4gICAgX29uRXhwb3J0SW1hZ2UgPSAoKSA9PiB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEVYUE9SVF9JTUFHRV9JRCk7XG5cbiAgICBfb25FeHBvcnREYXRhID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfREFUQV9JRCk7XG5cbiAgICBfb25FeHBvcnRNYXAgPSAoKSA9PiB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEVYUE9SVF9NQVBfSUQpO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllckJsZW5kaW5nLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIHVpU3RhdGUsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCB7YWN0aXZlU2lkZVBhbmVsfSA9IHVpU3RhdGU7XG4gICAgICBjb25zdCBpc09wZW4gPSBCb29sZWFuKGFjdGl2ZVNpZGVQYW5lbCk7XG5cbiAgICAgIGNvbnN0IGxheWVyTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZExheWVyOiB2aXNTdGF0ZUFjdGlvbnMuYWRkTGF5ZXIsXG4gICAgICAgIGxheWVyQ29uZmlnQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJDb25maWdDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTpcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJUeXBlQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJUeXBlQ2hhbmdlLFxuICAgICAgICBsYXllclZpc0NvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzQ29uZmlnQ2hhbmdlLFxuICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nOiB2aXNTdGF0ZUFjdGlvbnMudXBkYXRlTGF5ZXJCbGVuZGluZyxcbiAgICAgICAgdXBkYXRlTGF5ZXJPcmRlcjogdmlzU3RhdGVBY3Rpb25zLnJlb3JkZXJMYXllcixcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZTogdGhpcy5fc2hvd0RhdGFzZXRUYWJsZSxcbiAgICAgICAgc2hvd0FkZERhdGFNb2RhbDogdGhpcy5fc2hvd0FkZERhdGFNb2RhbCxcbiAgICAgICAgcmVtb3ZlTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW1vdmVMYXllcixcbiAgICAgICAgcmVtb3ZlRGF0YXNldDogdGhpcy5fcmVtb3ZlRGF0YXNldFxuICAgICAgfTtcblxuICAgICAgY29uc3QgZmlsdGVyTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZEZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmFkZEZpbHRlcixcbiAgICAgICAgcmVtb3ZlRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRmlsdGVyLFxuICAgICAgICBzZXRGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5zZXRGaWx0ZXIsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU6IHRoaXMuX3Nob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWw6IHRoaXMuX3Nob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHRvZ2dsZUFuaW1hdGlvbjogdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUFuaW1hdGlvbixcbiAgICAgICAgZW5sYXJnZUZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLmVubGFyZ2VGaWx0ZXJcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGludGVyYWN0aW9uTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIG9uQ29uZmlnQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMuaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1hcE1hbmFnZXJBY3Rpb25zID0ge1xuICAgICAgICBhZGRNYXBTdHlsZVVybDogbWFwU3R5bGVBY3Rpb25zLmFkZE1hcFN0eWxlVXJsLFxuICAgICAgICBvbkNvbmZpZ0NoYW5nZTogbWFwU3R5bGVBY3Rpb25zLm1hcENvbmZpZ0NoYW5nZSxcbiAgICAgICAgb25TdHlsZUNoYW5nZTogbWFwU3R5bGVBY3Rpb25zLm1hcFN0eWxlQ2hhbmdlLFxuICAgICAgICBvbkJ1aWxkaW5nQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwQnVpbGRpbmdDaGFuZ2UsXG4gICAgICAgIHNob3dBZGRNYXBTdHlsZU1vZGFsOiB0aGlzLl9zaG93QWRkTWFwU3R5bGVNb2RhbFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8U2lkZWJhclxuICAgICAgICAgICAgd2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgICAgIG1pbmlmaWVkV2lkdGg9ezB9XG4gICAgICAgICAgICBvbk9wZW5PckNsb3NlPXt0aGlzLl9vbk9wZW5PckNsb3NlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlclxuICAgICAgICAgICAgICBhcHBOYW1lPXthcHBOYW1lfVxuICAgICAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9ufVxuICAgICAgICAgICAgICBvbkV4cG9ydEltYWdlPXt0aGlzLl9vbkV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICBvbkV4cG9ydERhdGE9e3RoaXMuX29uRXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgdmlzaWJsZURyb3Bkb3duPXt1aVN0YXRlLnZpc2libGVEcm9wZG93bn1cbiAgICAgICAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duPXt1aVN0YXRlQWN0aW9ucy5zaG93RXhwb3J0RHJvcGRvd259XG4gICAgICAgICAgICAgIGhpZGVFeHBvcnREcm9wZG93bj17dWlTdGF0ZUFjdGlvbnMuaGlkZUV4cG9ydERyb3Bkb3dufVxuICAgICAgICAgICAgICBvbkV4cG9ydE1hcD17dGhpcy5fb25FeHBvcnRNYXB9XG4gICAgICAgICAgICAgIG9uU2F2ZU1hcD17dGhpcy5wcm9wcy5vblNhdmVNYXB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFBhbmVsVG9nZ2xlXG4gICAgICAgICAgICAgIHBhbmVscz17UEFORUxTfVxuICAgICAgICAgICAgICBhY3RpdmVQYW5lbD17YWN0aXZlU2lkZVBhbmVsfVxuICAgICAgICAgICAgICB0b2dnbGVQYW5lbD17dWlTdGF0ZUFjdGlvbnMudG9nZ2xlU2lkZVBhbmVsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxTaWRlUGFuZWxDb250ZW50IGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UGFuZWxUaXRsZSBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19jb250ZW50X190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgeyhQQU5FTFMuZmluZCgoe2lkfSkgPT4gaWQgPT09IGFjdGl2ZVNpZGVQYW5lbCkgfHwge30pLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvUGFuZWxUaXRsZT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbGF5ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxMYXllck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmxheWVyTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQ2xhc3Nlcz17bGF5ZXJDbGFzc2VzfVxuICAgICAgICAgICAgICAgICAgICBsYXllck9yZGVyPXtsYXllck9yZGVyfVxuICAgICAgICAgICAgICAgICAgICBsYXllckJsZW5kaW5nPXtsYXllckJsZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICBvcGVuTW9kYWw9e3VpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdmaWx0ZXInICYmIChcbiAgICAgICAgICAgICAgICAgIDxGaWx0ZXJNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5maWx0ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdpbnRlcmFjdGlvbicgJiYgKFxuICAgICAgICAgICAgICAgICAgPEludGVyYWN0aW9uTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZz17aW50ZXJhY3Rpb25Db25maWd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ21hcCcgJiYgKFxuICAgICAgICAgICAgICAgICAgPE1hcE1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLm1hcE1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBtYXBTdHlsZT17dGhpcy5wcm9wcy5tYXBTdHlsZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1NpZGVQYW5lbENvbnRlbnQ+XG4gICAgICAgICAgPC9TaWRlYmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuIl19