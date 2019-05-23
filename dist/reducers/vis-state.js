"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.visStateReducerFactory = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

var _reduxActions = require("redux-actions");

var visStateUpdaters = _interopRequireWildcard(require("./vis-state-updaters"));

var _actionHandler;

/**
 * Important: Do not rename `actionHandler` or the assignment pattern of property value.
 * It is used to generate documentation
 */
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_FILTER, visStateUpdaters.addFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_LAYER, visStateUpdaters.addLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ENLARGE_FILTER, visStateUpdaters.enlargeFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].INTERACTION_CONFIG_CHANGE, visStateUpdaters.interactionConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_CLICK, visStateUpdaters.layerClickUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_CONFIG_CHANGE, visStateUpdaters.layerConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_HOVER, visStateUpdaters.layerHoverUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_TYPE_CHANGE, visStateUpdaters.layerTypeChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE, visStateUpdaters.layerVisConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_TEXT_LABEL_CHANGE, visStateUpdaters.layerTextLabelChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE, visStateUpdaters.layerVisualChannelChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES, visStateUpdaters.loadFilesUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES_ERR, visStateUpdaters.loadFilesErrUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].MAP_CLICK, visStateUpdaters.mapClickUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RECEIVE_MAP_CONFIG, visStateUpdaters.receiveMapConfigUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_DATASET, visStateUpdaters.removeDatasetUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_FILTER, visStateUpdaters.removeFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_LAYER, visStateUpdaters.removeLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REORDER_LAYER, visStateUpdaters.reorderLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RESET_MAP_CONFIG, visStateUpdaters.resetMapConfigVisStateUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER, visStateUpdaters.setFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER_PLOT, visStateUpdaters.setFilterPlotUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_VISIBLE_LAYERS_FOR_MAP, visStateUpdaters.setVisibleLayersForMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SHOW_DATASET_TABLE, visStateUpdaters.showDatasetTableUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_FILTER_ANIMATION, visStateUpdaters.toggleFilterAnimationUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED, visStateUpdaters.updateAnimationSpeedUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_LAYER_FOR_MAP, visStateUpdaters.toggleLayerForMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_SPLIT_MAP, visStateUpdaters.toggleSplitMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_LAYER_BLENDING, visStateUpdaters.updateLayerBlendingUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_VIS_DATA, visStateUpdaters.updateVisDataUpdater), _actionHandler); // construct vis-state reducer

var visStateReducerFactory = function visStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reduxActions.handleActions)(actionHandler, (0, _objectSpread2["default"])({}, visStateUpdaters.INITIAL_VIS_STATE, initialState, {
    initialState: initialState
  }));
};

exports.visStateReducerFactory = visStateReducerFactory;

var _default = visStateReducerFactory();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUuanMiXSwibmFtZXMiOlsiYWN0aW9uSGFuZGxlciIsIkFjdGlvblR5cGVzIiwiQUREX0ZJTFRFUiIsInZpc1N0YXRlVXBkYXRlcnMiLCJhZGRGaWx0ZXJVcGRhdGVyIiwiQUREX0xBWUVSIiwiYWRkTGF5ZXJVcGRhdGVyIiwiRU5MQVJHRV9GSUxURVIiLCJlbmxhcmdlRmlsdGVyVXBkYXRlciIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJMQVlFUl9DTElDSyIsImxheWVyQ2xpY2tVcGRhdGVyIiwiTEFZRVJfQ09ORklHX0NIQU5HRSIsImxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlciIsIkxBWUVSX0hPVkVSIiwibGF5ZXJIb3ZlclVwZGF0ZXIiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZVVwZGF0ZXIiLCJMQVlFUl9WSVNfQ09ORklHX0NIQU5HRSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlciIsIkxBWUVSX1RFWFRfTEFCRUxfQ0hBTkdFIiwibGF5ZXJUZXh0TGFiZWxDaGFuZ2VVcGRhdGVyIiwiTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFIiwibGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlciIsIkxPQURfRklMRVMiLCJsb2FkRmlsZXNVcGRhdGVyIiwiTE9BRF9GSUxFU19FUlIiLCJsb2FkRmlsZXNFcnJVcGRhdGVyIiwiTUFQX0NMSUNLIiwibWFwQ2xpY2tVcGRhdGVyIiwiUkVDRUlWRV9NQVBfQ09ORklHIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJSRU1PVkVfREFUQVNFVCIsInJlbW92ZURhdGFzZXRVcGRhdGVyIiwiUkVNT1ZFX0ZJTFRFUiIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJSRU1PVkVfTEFZRVIiLCJyZW1vdmVMYXllclVwZGF0ZXIiLCJSRU9SREVSX0xBWUVSIiwicmVvcmRlckxheWVyVXBkYXRlciIsIlJFU0VUX01BUF9DT05GSUciLCJyZXNldE1hcENvbmZpZ1Zpc1N0YXRlVXBkYXRlciIsIlNFVF9GSUxURVIiLCJzZXRGaWx0ZXJVcGRhdGVyIiwiU0VUX0ZJTFRFUl9QTE9UIiwic2V0RmlsdGVyUGxvdFVwZGF0ZXIiLCJTRVRfVklTSUJMRV9MQVlFUlNfRk9SX01BUCIsInNldFZpc2libGVMYXllcnNGb3JNYXBVcGRhdGVyIiwiU0hPV19EQVRBU0VUX1RBQkxFIiwic2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIiLCJUT0dHTEVfRklMVEVSX0FOSU1BVElPTiIsInRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIiLCJVUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCIsInVwZGF0ZUFuaW1hdGlvblNwZWVkVXBkYXRlciIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwidG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyIiwiVE9HR0xFX1NQTElUX01BUCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciIsIlVQREFURV9MQVlFUl9CTEVORElORyIsInVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyIiwiVVBEQVRFX1ZJU19EQVRBIiwidXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJ2aXNTdGF0ZVJlZHVjZXJGYWN0b3J5IiwiaW5pdGlhbFN0YXRlIiwiSU5JVElBTF9WSVNfU1RBVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBSUEsSUFBTUEsYUFBYSwwRUFDaEJDLHdCQUFZQyxVQURJLEVBQ1NDLGdCQUFnQixDQUFDQyxnQkFEMUIsb0RBR2hCSCx3QkFBWUksU0FISSxFQUdRRixnQkFBZ0IsQ0FBQ0csZUFIekIsb0RBS2hCTCx3QkFBWU0sY0FMSSxFQUthSixnQkFBZ0IsQ0FBQ0ssb0JBTDlCLG9EQU9oQlAsd0JBQVlRLHlCQVBJLEVBT3dCTixnQkFBZ0IsQ0FBQ08sOEJBUHpDLG9EQVNoQlQsd0JBQVlVLFdBVEksRUFTVVIsZ0JBQWdCLENBQUNTLGlCQVQzQixvREFXaEJYLHdCQUFZWSxtQkFYSSxFQVdrQlYsZ0JBQWdCLENBQUNXLHdCQVhuQyxvREFhaEJiLHdCQUFZYyxXQWJJLEVBYVVaLGdCQUFnQixDQUFDYSxpQkFiM0Isb0RBZWhCZix3QkFBWWdCLGlCQWZJLEVBZWdCZCxnQkFBZ0IsQ0FBQ2Usc0JBZmpDLG9EQWlCaEJqQix3QkFBWWtCLHVCQWpCSSxFQWlCc0JoQixnQkFBZ0IsQ0FBQ2lCLDJCQWpCdkMsb0RBbUJoQm5CLHdCQUFZb0IsdUJBbkJJLEVBbUJzQmxCLGdCQUFnQixDQUFDbUIsMkJBbkJ2QyxvREFxQmhCckIsd0JBQVlzQiwyQkFyQkksRUFxQjBCcEIsZ0JBQWdCLENBQUNxQiwrQkFyQjNDLG9EQXVCaEJ2Qix3QkFBWXdCLFVBdkJJLEVBdUJTdEIsZ0JBQWdCLENBQUN1QixnQkF2QjFCLG9EQXlCaEJ6Qix3QkFBWTBCLGNBekJJLEVBeUJheEIsZ0JBQWdCLENBQUN5QixtQkF6QjlCLG9EQTJCaEIzQix3QkFBWTRCLFNBM0JJLEVBMkJRMUIsZ0JBQWdCLENBQUMyQixlQTNCekIsb0RBNkJoQjdCLHdCQUFZOEIsa0JBN0JJLEVBNkJpQjVCLGdCQUFnQixDQUFDNkIsdUJBN0JsQyxvREErQmhCL0Isd0JBQVlnQyxjQS9CSSxFQStCYTlCLGdCQUFnQixDQUFDK0Isb0JBL0I5QixvREFpQ2hCakMsd0JBQVlrQyxhQWpDSSxFQWlDWWhDLGdCQUFnQixDQUFDaUMsbUJBakM3QixvREFtQ2hCbkMsd0JBQVlvQyxZQW5DSSxFQW1DV2xDLGdCQUFnQixDQUFDbUMsa0JBbkM1QixvREFxQ2hCckMsd0JBQVlzQyxhQXJDSSxFQXFDWXBDLGdCQUFnQixDQUFDcUMsbUJBckM3QixvREF1Q2hCdkMsd0JBQVl3QyxnQkF2Q0ksRUF1Q2V0QyxnQkFBZ0IsQ0FBQ3VDLDZCQXZDaEMsb0RBeUNoQnpDLHdCQUFZMEMsVUF6Q0ksRUF5Q1N4QyxnQkFBZ0IsQ0FBQ3lDLGdCQXpDMUIsb0RBMkNoQjNDLHdCQUFZNEMsZUEzQ0ksRUEyQ2MxQyxnQkFBZ0IsQ0FBQzJDLG9CQTNDL0Isb0RBNkNoQjdDLHdCQUFZOEMsMEJBN0NJLEVBNkN5QjVDLGdCQUFnQixDQUFDNkMsNkJBN0MxQyxvREErQ2hCL0Msd0JBQVlnRCxrQkEvQ0ksRUErQ2lCOUMsZ0JBQWdCLENBQUMrQyx1QkEvQ2xDLG9EQWlEaEJqRCx3QkFBWWtELHVCQWpESSxFQWlEc0JoRCxnQkFBZ0IsQ0FBQ2lELDRCQWpEdkMsb0RBbURoQm5ELHdCQUFZb0QsNkJBbkRJLEVBbUQ0QmxELGdCQUFnQixDQUFDbUQsMkJBbkQ3QyxvREFxRGhCckQsd0JBQVlzRCxvQkFyREksRUFxRG1CcEQsZ0JBQWdCLENBQUNxRCx3QkFyRHBDLG9EQXVEaEJ2RCx3QkFBWXdELGdCQXZESSxFQXVEZXRELGdCQUFnQixDQUFDdUQscUJBdkRoQyxvREF5RGhCekQsd0JBQVkwRCxxQkF6REksRUF5RG9CeEQsZ0JBQWdCLENBQUN5RCwwQkF6RHJDLG9EQTZEaEIzRCx3QkFBWTRELGVBN0RJLEVBNkRjMUQsZ0JBQWdCLENBQUMyRCxvQkE3RC9CLGtCQUFuQixDLENBZ0VBOztBQUNPLElBQU1DLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUI7QUFBQSxNQUFDQyxZQUFELHVFQUFnQixFQUFoQjtBQUFBLFNBQ3BDLGlDQUFjaEUsYUFBZCxxQ0FDS0csZ0JBQWdCLENBQUM4RCxpQkFEdEIsRUFFS0QsWUFGTDtBQUdFQSxJQUFBQSxZQUFZLEVBQVpBO0FBSEYsS0FEb0M7QUFBQSxDQUEvQjs7OztlQU9RRCxzQkFBc0IsRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyB2aXNTdGF0ZVVwZGF0ZXJzIGZyb20gJy4vdmlzLXN0YXRlLXVwZGF0ZXJzJztcblxuLyoqXG4gKiBJbXBvcnRhbnQ6IERvIG5vdCByZW5hbWUgYGFjdGlvbkhhbmRsZXJgIG9yIHRoZSBhc3NpZ25tZW50IHBhdHRlcm4gb2YgcHJvcGVydHkgdmFsdWUuXG4gKiBJdCBpcyB1c2VkIHRvIGdlbmVyYXRlIGRvY3VtZW50YXRpb25cbiAqL1xuY29uc3QgYWN0aW9uSGFuZGxlciA9IHtcbiAgW0FjdGlvblR5cGVzLkFERF9GSUxURVJdOiB2aXNTdGF0ZVVwZGF0ZXJzLmFkZEZpbHRlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkFERF9MQVlFUl06IHZpc1N0YXRlVXBkYXRlcnMuYWRkTGF5ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5FTkxBUkdFX0ZJTFRFUl06IHZpc1N0YXRlVXBkYXRlcnMuZW5sYXJnZUZpbHRlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0VdOiB2aXNTdGF0ZVVwZGF0ZXJzLmludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfQ0xJQ0tdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxheWVyQ2xpY2tVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX0hPVkVSXTogdmlzU3RhdGVVcGRhdGVycy5sYXllckhvdmVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfVFlQRV9DSEFOR0VdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxheWVyVHlwZUNoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1RFWFRfTEFCRUxfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX1ZJU1VBTF9DSEFOTkVMX0NIQU5HRV06IHZpc1N0YXRlVXBkYXRlcnMubGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTE9BRF9GSUxFU106IHZpc1N0YXRlVXBkYXRlcnMubG9hZEZpbGVzVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19FUlJdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxvYWRGaWxlc0VyclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLk1BUF9DTElDS106IHZpc1N0YXRlVXBkYXRlcnMubWFwQ2xpY2tVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRUNFSVZFX01BUF9DT05GSUddOiB2aXNTdGF0ZVVwZGF0ZXJzLnJlY2VpdmVNYXBDb25maWdVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRU1PVkVfREFUQVNFVF06IHZpc1N0YXRlVXBkYXRlcnMucmVtb3ZlRGF0YXNldFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFTU9WRV9GSUxURVJdOiB2aXNTdGF0ZVVwZGF0ZXJzLnJlbW92ZUZpbHRlclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFTU9WRV9MQVlFUl06IHZpc1N0YXRlVXBkYXRlcnMucmVtb3ZlTGF5ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRU9SREVSX0xBWUVSXTogdmlzU3RhdGVVcGRhdGVycy5yZW9yZGVyTGF5ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5SRVNFVF9NQVBfQ09ORklHXTogdmlzU3RhdGVVcGRhdGVycy5yZXNldE1hcENvbmZpZ1Zpc1N0YXRlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl06IHZpc1N0YXRlVXBkYXRlcnMuc2V0RmlsdGVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9UXTogdmlzU3RhdGVVcGRhdGVycy5zZXRGaWx0ZXJQbG90VXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVBdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNldFZpc2libGVMYXllcnNGb3JNYXBVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TSE9XX0RBVEFTRVRfVEFCTEVdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNob3dEYXRhc2V0VGFibGVVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTl06IHZpc1N0YXRlVXBkYXRlcnMudG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRURdOiB2aXNTdGF0ZVVwZGF0ZXJzLnVwZGF0ZUFuaW1hdGlvblNwZWVkVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVBdOiB2aXNTdGF0ZVVwZGF0ZXJzLnRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuVE9HR0xFX1NQTElUX01BUF06IHZpc1N0YXRlVXBkYXRlcnMudG9nZ2xlU3BsaXRNYXBVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkddOiB2aXNTdGF0ZVVwZGF0ZXJzLnVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyLFxuXG4gIC8vIGN1cnJlbnRseSBub3QgdXNlZFxuICAvLyBidXQgbWF5IGJlIHVzZWZ1bCBpZiB1c2VycyBpbXBvcnQgdmlzIHN0YXRlIHJlZHVjZXJcbiAgW0FjdGlvblR5cGVzLlVQREFURV9WSVNfREFUQV06IHZpc1N0YXRlVXBkYXRlcnMudXBkYXRlVmlzRGF0YVVwZGF0ZXJcbn07XG5cbi8vIGNvbnN0cnVjdCB2aXMtc3RhdGUgcmVkdWNlclxuZXhwb3J0IGNvbnN0IHZpc1N0YXRlUmVkdWNlckZhY3RvcnkgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+XG4gIGhhbmRsZUFjdGlvbnMoYWN0aW9uSGFuZGxlciwge1xuICAgIC4uLnZpc1N0YXRlVXBkYXRlcnMuSU5JVElBTF9WSVNfU1RBVEUsXG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIGluaXRpYWxTdGF0ZVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgdmlzU3RhdGVSZWR1Y2VyRmFjdG9yeSgpO1xuIl19