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
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_FILTER, visStateUpdaters.addFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ADD_LAYER, visStateUpdaters.addLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].ENLARGE_FILTER, visStateUpdaters.enlargeFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].INTERACTION_CONFIG_CHANGE, visStateUpdaters.interactionConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_CLICK, visStateUpdaters.layerClickUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_CONFIG_CHANGE, visStateUpdaters.layerConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_HOVER, visStateUpdaters.layerHoverUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_TYPE_CHANGE, visStateUpdaters.layerTypeChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE, visStateUpdaters.layerVisConfigChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE, visStateUpdaters.layerVisualChannelChangeUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES, visStateUpdaters.loadFilesUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].LOAD_FILES_ERR, visStateUpdaters.loadFilesErrUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].MAP_CLICK, visStateUpdaters.mapClickUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RECEIVE_MAP_CONFIG, visStateUpdaters.receiveMapConfigUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_DATASET, visStateUpdaters.removeDatasetUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_FILTER, visStateUpdaters.removeFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REMOVE_LAYER, visStateUpdaters.removeLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].REORDER_LAYER, visStateUpdaters.reorderLayerUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].RESET_MAP_CONFIG, visStateUpdaters.resetMapConfigVisStateUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER, visStateUpdaters.setFilterUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_FILTER_PLOT, visStateUpdaters.setFilterPlotUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SET_VISIBLE_LAYERS_FOR_MAP, visStateUpdaters.setVisibleLayersForMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].SHOW_DATASET_TABLE, visStateUpdaters.showDatasetTableUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_FILTER_ANIMATION, visStateUpdaters.toggleFilterAnimationUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED, visStateUpdaters.updateAnimationSpeedUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_LAYER_FOR_MAP, visStateUpdaters.toggleLayerForMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].TOGGLE_SPLIT_MAP, visStateUpdaters.toggleSplitMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_LAYER_BLENDING, visStateUpdaters.updateLayerBlendingUpdater), (0, _defineProperty2["default"])(_actionHandler, _actionTypes["default"].UPDATE_VIS_DATA, visStateUpdaters.updateVisDataUpdater), _actionHandler); // construct vis-state reducer

var visStateReducerFactory = function visStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _reduxActions.handleActions)(actionHandler, (0, _objectSpread2["default"])({}, visStateUpdaters.INITIAL_VIS_STATE, initialState, {
    initialState: initialState
  }));
};

exports.visStateReducerFactory = visStateReducerFactory;

var _default = visStateReducerFactory();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUuanMiXSwibmFtZXMiOlsiYWN0aW9uSGFuZGxlciIsIkFjdGlvblR5cGVzIiwiQUREX0ZJTFRFUiIsInZpc1N0YXRlVXBkYXRlcnMiLCJhZGRGaWx0ZXJVcGRhdGVyIiwiQUREX0xBWUVSIiwiYWRkTGF5ZXJVcGRhdGVyIiwiRU5MQVJHRV9GSUxURVIiLCJlbmxhcmdlRmlsdGVyVXBkYXRlciIsIklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJMQVlFUl9DTElDSyIsImxheWVyQ2xpY2tVcGRhdGVyIiwiTEFZRVJfQ09ORklHX0NIQU5HRSIsImxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlciIsIkxBWUVSX0hPVkVSIiwibGF5ZXJIb3ZlclVwZGF0ZXIiLCJMQVlFUl9UWVBFX0NIQU5HRSIsImxheWVyVHlwZUNoYW5nZVVwZGF0ZXIiLCJMQVlFUl9WSVNfQ09ORklHX0NIQU5HRSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlciIsIkxBWUVSX1ZJU1VBTF9DSEFOTkVMX0NIQU5HRSIsImxheWVyVmlzdWFsQ2hhbm5lbENoYW5nZVVwZGF0ZXIiLCJMT0FEX0ZJTEVTIiwibG9hZEZpbGVzVXBkYXRlciIsIkxPQURfRklMRVNfRVJSIiwibG9hZEZpbGVzRXJyVXBkYXRlciIsIk1BUF9DTElDSyIsIm1hcENsaWNrVXBkYXRlciIsIlJFQ0VJVkVfTUFQX0NPTkZJRyIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwiUkVNT1ZFX0RBVEFTRVQiLCJyZW1vdmVEYXRhc2V0VXBkYXRlciIsIlJFTU9WRV9GSUxURVIiLCJyZW1vdmVGaWx0ZXJVcGRhdGVyIiwiUkVNT1ZFX0xBWUVSIiwicmVtb3ZlTGF5ZXJVcGRhdGVyIiwiUkVPUkRFUl9MQVlFUiIsInJlb3JkZXJMYXllclVwZGF0ZXIiLCJSRVNFVF9NQVBfQ09ORklHIiwicmVzZXRNYXBDb25maWdWaXNTdGF0ZVVwZGF0ZXIiLCJTRVRfRklMVEVSIiwic2V0RmlsdGVyVXBkYXRlciIsIlNFVF9GSUxURVJfUExPVCIsInNldEZpbHRlclBsb3RVcGRhdGVyIiwiU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAiLCJzZXRWaXNpYmxlTGF5ZXJzRm9yTWFwVXBkYXRlciIsIlNIT1dfREFUQVNFVF9UQUJMRSIsInNob3dEYXRhc2V0VGFibGVVcGRhdGVyIiwiVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04iLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyIiwiVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQiLCJ1cGRhdGVBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJUT0dHTEVfTEFZRVJfRk9SX01BUCIsInRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlciIsIlRPR0dMRV9TUExJVF9NQVAiLCJ0b2dnbGVTcGxpdE1hcFVwZGF0ZXIiLCJVUERBVEVfTEFZRVJfQkxFTkRJTkciLCJ1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlciIsIlVQREFURV9WSVNfREFUQSIsInVwZGF0ZVZpc0RhdGFVcGRhdGVyIiwidmlzU3RhdGVSZWR1Y2VyRmFjdG9yeSIsImluaXRpYWxTdGF0ZSIsIklOSVRJQUxfVklTX1NUQVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7OztBQUlBLElBQU1BLGFBQWEsMEVBQ2hCQyx3QkFBWUMsVUFESSxFQUNTQyxnQkFBZ0IsQ0FBQ0MsZ0JBRDFCLG9EQUdoQkgsd0JBQVlJLFNBSEksRUFHUUYsZ0JBQWdCLENBQUNHLGVBSHpCLG9EQUtoQkwsd0JBQVlNLGNBTEksRUFLYUosZ0JBQWdCLENBQUNLLG9CQUw5QixvREFPaEJQLHdCQUFZUSx5QkFQSSxFQU93Qk4sZ0JBQWdCLENBQUNPLDhCQVB6QyxvREFTaEJULHdCQUFZVSxXQVRJLEVBU1VSLGdCQUFnQixDQUFDUyxpQkFUM0Isb0RBV2hCWCx3QkFBWVksbUJBWEksRUFXa0JWLGdCQUFnQixDQUFDVyx3QkFYbkMsb0RBYWhCYix3QkFBWWMsV0FiSSxFQWFVWixnQkFBZ0IsQ0FBQ2EsaUJBYjNCLG9EQWVoQmYsd0JBQVlnQixpQkFmSSxFQWVnQmQsZ0JBQWdCLENBQUNlLHNCQWZqQyxvREFpQmhCakIsd0JBQVlrQix1QkFqQkksRUFpQnNCaEIsZ0JBQWdCLENBQUNpQiwyQkFqQnZDLG9EQW1CaEJuQix3QkFBWW9CLDJCQW5CSSxFQW1CMEJsQixnQkFBZ0IsQ0FBQ21CLCtCQW5CM0Msb0RBcUJoQnJCLHdCQUFZc0IsVUFyQkksRUFxQlNwQixnQkFBZ0IsQ0FBQ3FCLGdCQXJCMUIsb0RBdUJoQnZCLHdCQUFZd0IsY0F2QkksRUF1QmF0QixnQkFBZ0IsQ0FBQ3VCLG1CQXZCOUIsb0RBeUJoQnpCLHdCQUFZMEIsU0F6QkksRUF5QlF4QixnQkFBZ0IsQ0FBQ3lCLGVBekJ6QixvREEyQmhCM0Isd0JBQVk0QixrQkEzQkksRUEyQmlCMUIsZ0JBQWdCLENBQUMyQix1QkEzQmxDLG9EQTZCaEI3Qix3QkFBWThCLGNBN0JJLEVBNkJhNUIsZ0JBQWdCLENBQUM2QixvQkE3QjlCLG9EQStCaEIvQix3QkFBWWdDLGFBL0JJLEVBK0JZOUIsZ0JBQWdCLENBQUMrQixtQkEvQjdCLG9EQWlDaEJqQyx3QkFBWWtDLFlBakNJLEVBaUNXaEMsZ0JBQWdCLENBQUNpQyxrQkFqQzVCLG9EQW1DaEJuQyx3QkFBWW9DLGFBbkNJLEVBbUNZbEMsZ0JBQWdCLENBQUNtQyxtQkFuQzdCLG9EQXFDaEJyQyx3QkFBWXNDLGdCQXJDSSxFQXFDZXBDLGdCQUFnQixDQUFDcUMsNkJBckNoQyxvREF1Q2hCdkMsd0JBQVl3QyxVQXZDSSxFQXVDU3RDLGdCQUFnQixDQUFDdUMsZ0JBdkMxQixvREF5Q2hCekMsd0JBQVkwQyxlQXpDSSxFQXlDY3hDLGdCQUFnQixDQUFDeUMsb0JBekMvQixvREEyQ2hCM0Msd0JBQVk0QywwQkEzQ0ksRUEyQ3lCMUMsZ0JBQWdCLENBQUMyQyw2QkEzQzFDLG9EQTZDaEI3Qyx3QkFBWThDLGtCQTdDSSxFQTZDaUI1QyxnQkFBZ0IsQ0FBQzZDLHVCQTdDbEMsb0RBK0NoQi9DLHdCQUFZZ0QsdUJBL0NJLEVBK0NzQjlDLGdCQUFnQixDQUFDK0MsNEJBL0N2QyxvREFpRGhCakQsd0JBQVlrRCw2QkFqREksRUFpRDRCaEQsZ0JBQWdCLENBQUNpRCwyQkFqRDdDLG9EQW1EaEJuRCx3QkFBWW9ELG9CQW5ESSxFQW1EbUJsRCxnQkFBZ0IsQ0FBQ21ELHdCQW5EcEMsb0RBcURoQnJELHdCQUFZc0QsZ0JBckRJLEVBcURlcEQsZ0JBQWdCLENBQUNxRCxxQkFyRGhDLG9EQXVEaEJ2RCx3QkFBWXdELHFCQXZESSxFQXVEb0J0RCxnQkFBZ0IsQ0FBQ3VELDBCQXZEckMsb0RBMkRoQnpELHdCQUFZMEQsZUEzREksRUEyRGN4RCxnQkFBZ0IsQ0FBQ3lELG9CQTNEL0Isa0JBQW5CLEMsQ0E4REE7O0FBQ08sSUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLE1BQUNDLFlBQUQsdUVBQWdCLEVBQWhCO0FBQUEsU0FDcEMsaUNBQWM5RCxhQUFkLHFDQUNLRyxnQkFBZ0IsQ0FBQzRELGlCQUR0QixFQUVLRCxZQUZMO0FBR0VBLElBQUFBLFlBQVksRUFBWkE7QUFIRixLQURvQztBQUFBLENBQS9COzs7O2VBT1FELHNCQUFzQixFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHtoYW5kbGVBY3Rpb25zfSBmcm9tICdyZWR1eC1hY3Rpb25zJztcbmltcG9ydCAqIGFzIHZpc1N0YXRlVXBkYXRlcnMgZnJvbSAnLi92aXMtc3RhdGUtdXBkYXRlcnMnO1xuXG4vKipcbiAqIEltcG9ydGFudDogRG8gbm90IHJlbmFtZSBgYWN0aW9uSGFuZGxlcmAgb3IgdGhlIGFzc2lnbm1lbnQgcGF0dGVybiBvZiBwcm9wZXJ0eSB2YWx1ZS5cbiAqIEl0IGlzIHVzZWQgdG8gZ2VuZXJhdGUgZG9jdW1lbnRhdGlvblxuICovXG5jb25zdCBhY3Rpb25IYW5kbGVyID0ge1xuICBbQWN0aW9uVHlwZXMuQUREX0ZJTFRFUl06IHZpc1N0YXRlVXBkYXRlcnMuYWRkRmlsdGVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuQUREX0xBWUVSXTogdmlzU3RhdGVVcGRhdGVycy5hZGRMYXllclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkVOTEFSR0VfRklMVEVSXTogdmlzU3RhdGVVcGRhdGVycy5lbmxhcmdlRmlsdGVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRV06IHZpc1N0YXRlVXBkYXRlcnMuaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MQVlFUl9DTElDS106IHZpc1N0YXRlVXBkYXRlcnMubGF5ZXJDbGlja1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLkxBWUVSX0NPTkZJR19DSEFOR0VdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVJdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxheWVySG92ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MQVlFUl9UWVBFX0NIQU5HRV06IHZpc1N0YXRlVXBkYXRlcnMubGF5ZXJUeXBlQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0VdOiB2aXNTdGF0ZVVwZGF0ZXJzLmxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFXTogdmlzU3RhdGVVcGRhdGVycy5sYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTXTogdmlzU3RhdGVVcGRhdGVycy5sb2FkRmlsZXNVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUl06IHZpc1N0YXRlVXBkYXRlcnMubG9hZEZpbGVzRXJyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuTUFQX0NMSUNLXTogdmlzU3RhdGVVcGRhdGVycy5tYXBDbGlja1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJR106IHZpc1N0YXRlVXBkYXRlcnMucmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFTU9WRV9EQVRBU0VUXTogdmlzU3RhdGVVcGRhdGVycy5yZW1vdmVEYXRhc2V0VXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuUkVNT1ZFX0ZJTFRFUl06IHZpc1N0YXRlVXBkYXRlcnMucmVtb3ZlRmlsdGVyVXBkYXRlcixcblxuICBbQWN0aW9uVHlwZXMuUkVNT1ZFX0xBWUVSXTogdmlzU3RhdGVVcGRhdGVycy5yZW1vdmVMYXllclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFT1JERVJfTEFZRVJdOiB2aXNTdGF0ZVVwZGF0ZXJzLnJlb3JkZXJMYXllclVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlJFU0VUX01BUF9DT05GSUddOiB2aXNTdGF0ZVVwZGF0ZXJzLnJlc2V0TWFwQ29uZmlnVmlzU3RhdGVVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfRklMVEVSXTogdmlzU3RhdGVVcGRhdGVycy5zZXRGaWx0ZXJVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1BMT1RdOiB2aXNTdGF0ZVVwZGF0ZXJzLnNldEZpbHRlclBsb3RVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5TRVRfVklTSUJMRV9MQVlFUlNfRk9SX01BUF06IHZpc1N0YXRlVXBkYXRlcnMuc2V0VmlzaWJsZUxheWVyc0Zvck1hcFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlNIT1dfREFUQVNFVF9UQUJMRV06IHZpc1N0YXRlVXBkYXRlcnMuc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OXTogdmlzU3RhdGVVcGRhdGVycy50b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5VUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRF06IHZpc1N0YXRlVXBkYXRlcnMudXBkYXRlQW5pbWF0aW9uU3BlZWRVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfRk9SX01BUF06IHZpc1N0YXRlVXBkYXRlcnMudG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyLFxuXG4gIFtBY3Rpb25UeXBlcy5UT0dHTEVfU1BMSVRfTUFQXTogdmlzU3RhdGVVcGRhdGVycy50b2dnbGVTcGxpdE1hcFVwZGF0ZXIsXG5cbiAgW0FjdGlvblR5cGVzLlVQREFURV9MQVlFUl9CTEVORElOR106IHZpc1N0YXRlVXBkYXRlcnMudXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIsXG5cbiAgLy8gY3VycmVudGx5IG5vdCB1c2VkXG4gIC8vIGJ1dCBtYXkgYmUgdXNlZnVsIGlmIHVzZXJzIGltcG9ydCB2aXMgc3RhdGUgcmVkdWNlclxuICBbQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBXTogdmlzU3RhdGVVcGRhdGVycy51cGRhdGVWaXNEYXRhVXBkYXRlclxufTtcblxuLy8gY29uc3RydWN0IHZpcy1zdGF0ZSByZWR1Y2VyXG5leHBvcnQgY29uc3QgdmlzU3RhdGVSZWR1Y2VyRmFjdG9yeSA9IChpbml0aWFsU3RhdGUgPSB7fSkgPT5cbiAgaGFuZGxlQWN0aW9ucyhhY3Rpb25IYW5kbGVyLCB7XG4gICAgLi4udmlzU3RhdGVVcGRhdGVycy5JTklUSUFMX1ZJU19TVEFURSxcbiAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgaW5pdGlhbFN0YXRlXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCB2aXNTdGF0ZVJlZHVjZXJGYWN0b3J5KCk7XG4iXX0=