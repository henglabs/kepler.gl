"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNotificationUpdater = exports.addNotificationUpdater = exports.setExportMapFormat = exports.setUserMapboxAccessTokenUpdater = exports.setExportDataUpdater = exports.setExportFilteredUpdater = exports.setExportDataTypeUpdater = exports.setExportSelectedDatasetUpdater = exports.cleanupExportImage = exports.setExportImageDataUri = exports.startExportingImage = exports.setResolutionUpdater = exports.setRatioUpdater = exports.toggleLegendUpdater = exports.openDeleteModalUpdater = exports.toggleMapControlUpdater = exports.hideExportDropdownUpdater = exports.showExportDropdownUpdater = exports.toggleModalUpdater = exports.toggleSidePanelUpdater = exports.INITIAL_UI_STATE = exports.DEFAULT_EXPORT_MAP = exports.DEFAULT_EXPORT_JSON = exports.DEFAULT_EXPORT_HTML = exports.DEFAULT_NOTIFICATIONS = exports.DEFAULT_EXPORT_DATA = exports.DEFAULT_EXPORT_IMAGE = exports.DEFAULT_MAP_CONTROLS = exports.DEFAULT_MODAL = exports.DEFAULT_ACTIVE_SIDE_PANEL = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _defaultSettings = require("../constants/default-settings");

var _notificationsUtils = require("../utils/notifications-utils");

var _DEFAULT_EXPORT_MAP;

var DEFAULT_ACTIVE_SIDE_PANEL = 'layer';
exports.DEFAULT_ACTIVE_SIDE_PANEL = DEFAULT_ACTIVE_SIDE_PANEL;
var DEFAULT_MODAL = _defaultSettings.ADD_DATA_ID;
/**
 * Updaters for `uiState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {uiStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             uiState: uiStateUpdaters.toggleSidePanelUpdater(
 *               uiState, {payload: null}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */

exports.DEFAULT_MODAL = DEFAULT_MODAL;
var uiStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * A list of map control visibility and whether is it active.
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {Object} visibleLayers Default: `{show: true, active: false}`
 * @property {Object} mapLegend Default: `{show: true, active: false}`
 * @property {Object} toggle3d Default: `{show: true}`
 * @property {Object} splitMap Default: `{show: true}`
 * @public
 */

var DEFAULT_MAP_CONTROLS = {
  visibleLayers: {
    show: true,
    active: false
  },
  mapLegend: {
    show: true,
    active: false
  },
  toggle3d: {
    show: true
  },
  splitMap: {
    show: true
  }
};
/**
 * Default image export config
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {string} ratio Default: `'SCREEN'`,
 * @property {string} resolution Default: `'ONE_X'`,
 * @property {boolean} legend Default: `false`,
 * @property {string} imageDataUri Default: `''`,
 * @property {boolean} exporting Default: `false`
 * @public
 */

exports.DEFAULT_MAP_CONTROLS = DEFAULT_MAP_CONTROLS;
var DEFAULT_EXPORT_IMAGE = {
  // user options
  ratio: _defaultSettings.RATIOS.SCREEN,
  resolution: _defaultSettings.RESOLUTIONS.ONE_X,
  legend: false,
  // exporting state
  imageDataUri: '',
  exporting: false
};
/**
 * Default initial `exportData` settings
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {string} selectedDataset Default: `''`,
 * @property {string} dataType Default: `'csv'`,
 * @property {boolean} filtered Default: `true`,
 * @property {boolean} config deprecated
 * @property {boolean} data used in modal config export. Default: `false`
 * @public
 */

exports.DEFAULT_EXPORT_IMAGE = DEFAULT_EXPORT_IMAGE;
var DEFAULT_EXPORT_DATA = {
  selectedDataset: '',
  dataType: _defaultSettings.EXPORT_DATA_TYPE.CSV,
  filtered: true
};
/**
 * @constant
 * @type {Array}
 */

exports.DEFAULT_EXPORT_DATA = DEFAULT_EXPORT_DATA;
var DEFAULT_NOTIFICATIONS = [];
/**
 * @constant
 * @type {Object}
 * @property {string} exportMapboxAccessToken - Default: null, this is used when we provide a default mapbox token for users to take advantage of
 * @property {string} userMapboxToken - Default: '', mapbox token provided by user through input field
 * @public
 */

exports.DEFAULT_NOTIFICATIONS = DEFAULT_NOTIFICATIONS;
var DEFAULT_EXPORT_HTML = {
  exportMapboxAccessToken: null,
  userMapboxToken: ''
};
exports.DEFAULT_EXPORT_HTML = DEFAULT_EXPORT_HTML;
var DEFAULT_EXPORT_JSON = {
  hasData: true
};
exports.DEFAULT_EXPORT_JSON = DEFAULT_EXPORT_JSON;
var DEFAULT_EXPORT_MAP = (_DEFAULT_EXPORT_MAP = {}, (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMAT.HTML, DEFAULT_EXPORT_HTML), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _defaultSettings.EXPORT_MAP_FORMAT.JSON, DEFAULT_EXPORT_JSON), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, "format", _defaultSettings.EXPORT_MAP_FORMAT.HTML), _DEFAULT_EXPORT_MAP);
/**
 * Default initial `uiState`
 * @memberof uiStateUpdaters
 * @constant
 * @type {Object}
 * @property {boolean} readOnly Default: `false`
 * @property {string} activeSidePanel Default: `'layer'`
 * @property {string|null} currentModal Default: `'addData'`
 * @property {string|null} datasetKeyToRemove Default: `null`
 * @property {string|null} visibleDropdown Default: `null`
 * @property {Object} exportImage Default: [`DEFAULT_EXPORT_IMAGE`](#default_export_image)
 * @property {Object} exportData Default: [`DEFAULT_EXPORT_DATA`](#default_export_data)
 * @property {Object} mapControls Default: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @public
 */

exports.DEFAULT_EXPORT_MAP = DEFAULT_EXPORT_MAP;
var INITIAL_UI_STATE = {
  readOnly: false,
  activeSidePanel: DEFAULT_ACTIVE_SIDE_PANEL,
  currentModal: DEFAULT_MODAL,
  datasetKeyToRemove: null,
  visibleDropdown: null,
  // export image modal ui
  exportImage: DEFAULT_EXPORT_IMAGE,
  // export data modal ui
  exportData: DEFAULT_EXPORT_DATA,
  // html export
  exportMap: DEFAULT_EXPORT_MAP,
  // map control panels
  mapControls: DEFAULT_MAP_CONTROLS,
  // ui notifications
  notifications: DEFAULT_NOTIFICATIONS
};
/* Updaters */

/**
 * Toggle active side panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string|null} action.payload id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`. close side panel if `null`
 * @returns {Object} nextState
 * @public
 */

exports.INITIAL_UI_STATE = INITIAL_UI_STATE;

var toggleSidePanelUpdater = function toggleSidePanelUpdater(state, _ref) {
  var id = _ref.payload;

  if (id === state.activeSidePanel) {
    return state;
  }

  return (0, _objectSpread5["default"])({}, state, {
    activeSidePanel: id
  });
};
/**
 * Show and hide modal dialog
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string|null} action.payload id of modal to be shown, null to hide modals. One of:
 *
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @returns {Object} nextState
 * @public
 */


exports.toggleSidePanelUpdater = toggleSidePanelUpdater;

var toggleModalUpdater = function toggleModalUpdater(state, _ref2) {
  var id = _ref2.payload;
  return (0, _objectSpread5["default"])({}, state, {
    currentModal: id
  });
};
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload id of the dropdown
 * @returns {Object} nextState
 * @public
 */


exports.toggleModalUpdater = toggleModalUpdater;

var showExportDropdownUpdater = function showExportDropdownUpdater(state, _ref3) {
  var id = _ref3.payload;
  return (0, _objectSpread5["default"])({}, state, {
    visibleDropdown: id
  });
};
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.showExportDropdownUpdater = showExportDropdownUpdater;

var hideExportDropdownUpdater = function hideExportDropdownUpdater(state) {
  return (0, _objectSpread5["default"])({}, state, {
    visibleDropdown: null
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action action
 * @param {string} action.payload map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @returns {Object} nextState
 * @public
 */


exports.hideExportDropdownUpdater = hideExportDropdownUpdater;

var toggleMapControlUpdater = function toggleMapControlUpdater(state, _ref4) {
  var panelId = _ref4.payload;
  return (0, _objectSpread5["default"])({}, state, {
    mapControls: (0, _objectSpread5["default"])({}, state.mapControls, (0, _defineProperty2["default"])({}, panelId, (0, _objectSpread5["default"])({}, state.mapControls[panelId], {
      active: !state.mapControls[panelId].active
    })))
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload dataset id
 * @returns {Object} nextState
 * @public
 */


exports.toggleMapControlUpdater = toggleMapControlUpdater;

var openDeleteModalUpdater = function openDeleteModalUpdater(state, _ref5) {
  var datasetKeyToRemove = _ref5.payload;
  return (0, _objectSpread5["default"])({}, state, {
    currentModal: _defaultSettings.DELETE_DATA_ID,
    datasetKeyToRemove: datasetKeyToRemove
  });
};
/**
 * Set `exportImage.legend` to `true` or `false`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.openDeleteModalUpdater = openDeleteModalUpdater;

var toggleLegendUpdater = function toggleLegendUpdater(state) {
  return (0, _objectSpread5["default"])({}, state, {
    exportImage: (0, _objectSpread5["default"])({}, state.exportImage, {
      legend: !state.exportImage.legend
    })
  });
};
/**
 * Set `exportImage.ratio`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload one of `'SCREEN'`, `'FOUR_BY_THREE'` and `'SIXTEEN_BY_NINE'`
 * @returns {Object} nextState
 * @public
 */


exports.toggleLegendUpdater = toggleLegendUpdater;

var setRatioUpdater = function setRatioUpdater(state, _ref6) {
  var payload = _ref6.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportImage: (0, _objectSpread5["default"])({}, state.exportImage, {
      ratio: payload.ratio
    })
  });
};
/**
 * Set `exportImage.resolution`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload one of `'ONE_X'`, `'TWO_X'`
 * @returns {Object} nextState
 * @public
 */


exports.setRatioUpdater = setRatioUpdater;

var setResolutionUpdater = function setResolutionUpdater(state, _ref7) {
  var payload = _ref7.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportImage: (0, _objectSpread5["default"])({}, state.exportImage, {
      resolution: payload.resolution
    })
  });
};
/**
 * Set `exportImage.exporting` to `true`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.setResolutionUpdater = setResolutionUpdater;

var startExportingImage = function startExportingImage(state) {
  return (0, _objectSpread5["default"])({}, state, {
    exportImage: (0, _objectSpread5["default"])({}, state.exportImage, {
      exporting: true,
      imageDataUri: ''
    })
  });
};
/**
 * Set `exportImage.setExportImageDataUri` to a image dataUri
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload export image data uri
 * @returns {Object} nextState
 * @public
 */


exports.startExportingImage = startExportingImage;

var setExportImageDataUri = function setExportImageDataUri(state, _ref8) {
  var dataUri = _ref8.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportImage: (0, _objectSpread5["default"])({}, state.exportImage, {
      exporting: false,
      imageDataUri: dataUri
    })
  });
};
/**
 * Delete cached export image
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.setExportImageDataUri = setExportImageDataUri;

var cleanupExportImage = function cleanupExportImage(state) {
  return (0, _objectSpread5["default"])({}, state, {
    exportImage: (0, _objectSpread5["default"])({}, state.exportImage, {
      exporting: false,
      imageDataUri: ''
    })
  });
};
/**
 * Set selected dataset for export
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload dataset id
 * @returns {Object} nextState
 * @public
 */


exports.cleanupExportImage = cleanupExportImage;

var setExportSelectedDatasetUpdater = function setExportSelectedDatasetUpdater(state, _ref9) {
  var dataset = _ref9.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportData: (0, _objectSpread5["default"])({}, state.exportData, {
      selectedDataset: dataset
    })
  });
};
/**
 * Set data format for exporting data
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {string} action.payload one of `'text/csv'`
 * @returns {Object} nextState
 * @public
 */


exports.setExportSelectedDatasetUpdater = setExportSelectedDatasetUpdater;

var setExportDataTypeUpdater = function setExportDataTypeUpdater(state, _ref10) {
  var dataType = _ref10.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportData: (0, _objectSpread5["default"])({}, state.exportData, {
      dataType: dataType
    })
  });
};
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {boolean} action.payload
 * @returns {Object} nextState
 * @public
 */


exports.setExportDataTypeUpdater = setExportDataTypeUpdater;

var setExportFilteredUpdater = function setExportFilteredUpdater(state, _ref11) {
  var filtered = _ref11.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportData: (0, _objectSpread5["default"])({}, state.exportData, {
      filtered: filtered
    })
  });
};
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @returns {Object} nextState
 * @public
 */


exports.setExportFilteredUpdater = setExportFilteredUpdater;

var setExportDataUpdater = function setExportDataUpdater(state) {
  return (0, _objectSpread5["default"])({}, state, {
    exportMap: (0, _objectSpread5["default"])({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMAT.JSON, (0, _objectSpread5["default"])({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMAT.JSON], {
      hasData: !state.exportMap[_defaultSettings.EXPORT_MAP_FORMAT.JSON].hasData
    })))
  });
};
/**
 * whether to export a mapbox access to HTML single page
 * @param {Object} state - `uiState`
 * @param {Object} action
 * @param {string} action.payload
 * @returns {Object} nextState
 * @public
 */


exports.setExportDataUpdater = setExportDataUpdater;

var setUserMapboxAccessTokenUpdater = function setUserMapboxAccessTokenUpdater(state, _ref12) {
  var userMapboxToken = _ref12.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportMap: (0, _objectSpread5["default"])({}, state.exportMap, (0, _defineProperty2["default"])({}, _defaultSettings.EXPORT_MAP_FORMAT.HTML, (0, _objectSpread5["default"])({}, state.exportMap[_defaultSettings.EXPORT_MAP_FORMAT.HTML], {
      userMapboxToken: userMapboxToken
    })))
  });
};

exports.setUserMapboxAccessTokenUpdater = setUserMapboxAccessTokenUpdater;

var setExportMapFormat = function setExportMapFormat(state, _ref13) {
  var format = _ref13.payload;
  return (0, _objectSpread5["default"])({}, state, {
    exportMap: (0, _objectSpread5["default"])({}, state.exportMap, {
      format: format
    })
  });
};
/**
* Add a notification to be displayed
* @memberof uiStateUpdaters
* @param {Object} state `uiState`
* @param {Object} action
* @param {Object} action.payload
* @returns {Object} nextState
* @public
*/


exports.setExportMapFormat = setExportMapFormat;

var addNotificationUpdater = function addNotificationUpdater(state, _ref14) {
  var payload = _ref14.payload;
  return (0, _objectSpread5["default"])({}, state, {
    notifications: [].concat((0, _toConsumableArray2["default"])(state.notifications || []), [(0, _notificationsUtils.createNotification)(payload)])
  });
};
/**
 * Remove a notification
 * @memberof uiStateUpdaters
 * @param {Object} state `uiState`
 * @param {Object} action
 * @param {String} action.payload id of the notification to be removed
 * @returns {Object} nextState
 */


exports.addNotificationUpdater = addNotificationUpdater;

var removeNotificationUpdater = function removeNotificationUpdater(state, _ref15) {
  var id = _ref15.payload;
  return (0, _objectSpread5["default"])({}, state, {
    notifications: state.notifications.filter(function (n) {
      return n.id !== id;
    })
  });
};

exports.removeNotificationUpdater = removeNotificationUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy91aS1zdGF0ZS11cGRhdGVycy5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMIiwiREVGQVVMVF9NT0RBTCIsIkFERF9EQVRBX0lEIiwidWlTdGF0ZVVwZGF0ZXJzIiwiREVGQVVMVF9NQVBfQ09OVFJPTFMiLCJ2aXNpYmxlTGF5ZXJzIiwic2hvdyIsImFjdGl2ZSIsIm1hcExlZ2VuZCIsInRvZ2dsZTNkIiwic3BsaXRNYXAiLCJERUZBVUxUX0VYUE9SVF9JTUFHRSIsInJhdGlvIiwiUkFUSU9TIiwiU0NSRUVOIiwicmVzb2x1dGlvbiIsIlJFU09MVVRJT05TIiwiT05FX1giLCJsZWdlbmQiLCJpbWFnZURhdGFVcmkiLCJleHBvcnRpbmciLCJERUZBVUxUX0VYUE9SVF9EQVRBIiwic2VsZWN0ZWREYXRhc2V0IiwiZGF0YVR5cGUiLCJFWFBPUlRfREFUQV9UWVBFIiwiQ1NWIiwiZmlsdGVyZWQiLCJERUZBVUxUX05PVElGSUNBVElPTlMiLCJERUZBVUxUX0VYUE9SVF9IVE1MIiwiZXhwb3J0TWFwYm94QWNjZXNzVG9rZW4iLCJ1c2VyTWFwYm94VG9rZW4iLCJERUZBVUxUX0VYUE9SVF9KU09OIiwiaGFzRGF0YSIsIkRFRkFVTFRfRVhQT1JUX01BUCIsIkVYUE9SVF9NQVBfRk9STUFUIiwiSFRNTCIsIkpTT04iLCJJTklUSUFMX1VJX1NUQVRFIiwicmVhZE9ubHkiLCJhY3RpdmVTaWRlUGFuZWwiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJ2aXNpYmxlRHJvcGRvd24iLCJleHBvcnRJbWFnZSIsImV4cG9ydERhdGEiLCJleHBvcnRNYXAiLCJtYXBDb250cm9scyIsIm5vdGlmaWNhdGlvbnMiLCJ0b2dnbGVTaWRlUGFuZWxVcGRhdGVyIiwic3RhdGUiLCJpZCIsInBheWxvYWQiLCJ0b2dnbGVNb2RhbFVwZGF0ZXIiLCJzaG93RXhwb3J0RHJvcGRvd25VcGRhdGVyIiwiaGlkZUV4cG9ydERyb3Bkb3duVXBkYXRlciIsInRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyIiwicGFuZWxJZCIsIm9wZW5EZWxldGVNb2RhbFVwZGF0ZXIiLCJERUxFVEVfREFUQV9JRCIsInRvZ2dsZUxlZ2VuZFVwZGF0ZXIiLCJzZXRSYXRpb1VwZGF0ZXIiLCJzZXRSZXNvbHV0aW9uVXBkYXRlciIsInN0YXJ0RXhwb3J0aW5nSW1hZ2UiLCJzZXRFeHBvcnRJbWFnZURhdGFVcmkiLCJkYXRhVXJpIiwiY2xlYW51cEV4cG9ydEltYWdlIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0VXBkYXRlciIsImRhdGFzZXQiLCJzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIiLCJzZXRFeHBvcnRGaWx0ZXJlZFVwZGF0ZXIiLCJzZXRFeHBvcnREYXRhVXBkYXRlciIsInNldFVzZXJNYXBib3hBY2Nlc3NUb2tlblVwZGF0ZXIiLCJzZXRFeHBvcnRNYXBGb3JtYXQiLCJmb3JtYXQiLCJhZGROb3RpZmljYXRpb25VcGRhdGVyIiwicmVtb3ZlTm90aWZpY2F0aW9uVXBkYXRlciIsImZpbHRlciIsIm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFRQTs7OztBQUVPLElBQU1BLHlCQUF5QixHQUFHLE9BQWxDOztBQUNBLElBQU1DLGFBQWEsR0FBR0MsNEJBQXRCO0FBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7OztBQUNDLElBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNEOztBQUVBOzs7Ozs7Ozs7Ozs7QUFXTyxJQUFNQyxvQkFBb0IsR0FBRztBQUNsQ0MsRUFBQUEsYUFBYSxFQUFFO0FBQ2JDLElBQUFBLElBQUksRUFBRSxJQURPO0FBRWJDLElBQUFBLE1BQU0sRUFBRTtBQUZLLEdBRG1CO0FBS2xDQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEYsSUFBQUEsSUFBSSxFQUFFLElBREc7QUFFVEMsSUFBQUEsTUFBTSxFQUFFO0FBRkMsR0FMdUI7QUFTbENFLEVBQUFBLFFBQVEsRUFB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OlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtcbiAgREVMRVRFX0RBVEFfSUQsXG4gIEFERF9EQVRBX0lELFxuICBFWFBPUlRfREFUQV9UWVBFLFxuICBSQVRJT1MsXG4gIFJFU09MVVRJT05TLFxuICBFWFBPUlRfTUFQX0ZPUk1BVFxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge2NyZWF0ZU5vdGlmaWNhdGlvbn0gZnJvbSAndXRpbHMvbm90aWZpY2F0aW9ucy11dGlscyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMID0gJ2xheWVyJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PREFMID0gQUREX0RBVEFfSUQ7XG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGB1aVN0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXG4gKiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcbiAqXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHt1aVN0YXRlVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICAvLyBjbGljayBidXR0b24gdG8gY2xvc2Ugc2lkZSBwYW5lbFxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcbiAqICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAuLi5zdGF0ZSxcbiAqICAgICAgICBrZXBsZXJHbDoge1xuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXG4gKiAgICAgICAgICBmb286IHtcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcbiAqICAgICAgICAgICAgIHVpU3RhdGU6IHVpU3RhdGVVcGRhdGVycy50b2dnbGVTaWRlUGFuZWxVcGRhdGVyKFxuICogICAgICAgICAgICAgICB1aVN0YXRlLCB7cGF5bG9hZDogbnVsbH1cbiAqICAgICAgICAgICAgIClcbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuIGNvbnN0IHVpU3RhdGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8qKlxuICogQSBsaXN0IG9mIG1hcCBjb250cm9sIHZpc2liaWxpdHkgYW5kIHdoZXRoZXIgaXMgaXQgYWN0aXZlLlxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtPYmplY3R9IHZpc2libGVMYXllcnMgRGVmYXVsdDogYHtzaG93OiB0cnVlLCBhY3RpdmU6IGZhbHNlfWBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBtYXBMZWdlbmQgRGVmYXVsdDogYHtzaG93OiB0cnVlLCBhY3RpdmU6IGZhbHNlfWBcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSB0b2dnbGUzZCBEZWZhdWx0OiBge3Nob3c6IHRydWV9YFxuICogQHByb3BlcnR5IHtPYmplY3R9IHNwbGl0TWFwIERlZmF1bHQ6IGB7c2hvdzogdHJ1ZX1gXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUF9DT05UUk9MUyA9IHtcbiAgdmlzaWJsZUxheWVyczoge1xuICAgIHNob3c6IHRydWUsXG4gICAgYWN0aXZlOiBmYWxzZVxuICB9LFxuICBtYXBMZWdlbmQ6IHtcbiAgICBzaG93OiB0cnVlLFxuICAgIGFjdGl2ZTogZmFsc2VcbiAgfSxcbiAgdG9nZ2xlM2Q6IHtcbiAgICBzaG93OiB0cnVlXG4gIH0sXG4gIHNwbGl0TWFwOiB7XG4gICAgc2hvdzogdHJ1ZVxuICB9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgaW1hZ2UgZXhwb3J0IGNvbmZpZ1xuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJhdGlvIERlZmF1bHQ6IGAnU0NSRUVOJ2AsXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcmVzb2x1dGlvbiBEZWZhdWx0OiBgJ09ORV9YJ2AsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGxlZ2VuZCBEZWZhdWx0OiBgZmFsc2VgLFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGltYWdlRGF0YVVyaSBEZWZhdWx0OiBgJydgLFxuICogQHByb3BlcnR5IHtib29sZWFufSBleHBvcnRpbmcgRGVmYXVsdDogYGZhbHNlYFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfSU1BR0UgPSB7XG4gIC8vIHVzZXIgb3B0aW9uc1xuICByYXRpbzogUkFUSU9TLlNDUkVFTixcbiAgcmVzb2x1dGlvbjogUkVTT0xVVElPTlMuT05FX1gsXG4gIGxlZ2VuZDogZmFsc2UsXG4gIC8vIGV4cG9ydGluZyBzdGF0ZVxuICBpbWFnZURhdGFVcmk6ICcnLFxuICBleHBvcnRpbmc6IGZhbHNlXG59O1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgZXhwb3J0RGF0YWAgc2V0dGluZ3NcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBjb25zdGFudFxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzZWxlY3RlZERhdGFzZXQgRGVmYXVsdDogYCcnYCxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXRhVHlwZSBEZWZhdWx0OiBgJ2NzdidgLFxuICogQHByb3BlcnR5IHtib29sZWFufSBmaWx0ZXJlZCBEZWZhdWx0OiBgdHJ1ZWAsXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNvbmZpZyBkZXByZWNhdGVkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRhdGEgdXNlZCBpbiBtb2RhbCBjb25maWcgZXhwb3J0LiBEZWZhdWx0OiBgZmFsc2VgXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYUE9SVF9EQVRBID0ge1xuICBzZWxlY3RlZERhdGFzZXQ6ICcnLFxuICBkYXRhVHlwZTogRVhQT1JUX0RBVEFfVFlQRS5DU1YsXG4gIGZpbHRlcmVkOiB0cnVlXG59O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQHR5cGUge0FycmF5fVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05TID0gW107XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIC0gRGVmYXVsdDogbnVsbCwgdGhpcyBpcyB1c2VkIHdoZW4gd2UgcHJvdmlkZSBhIGRlZmF1bHQgbWFwYm94IHRva2VuIGZvciB1c2VycyB0byB0YWtlIGFkdmFudGFnZSBvZlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHVzZXJNYXBib3hUb2tlbiAtIERlZmF1bHQ6ICcnLCBtYXBib3ggdG9rZW4gcHJvdmlkZWQgYnkgdXNlciB0aHJvdWdoIGlucHV0IGZpZWxkXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYUE9SVF9IVE1MID0ge1xuICBleHBvcnRNYXBib3hBY2Nlc3NUb2tlbjogbnVsbCxcbiAgdXNlck1hcGJveFRva2VuOiAnJ1xufTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0pTT04gPSB7XG4gIGhhc0RhdGE6IHRydWVcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYUE9SVF9NQVAgPSB7XG4gIFtFWFBPUlRfTUFQX0ZPUk1BVC5IVE1MXTogREVGQVVMVF9FWFBPUlRfSFRNTCxcbiAgW0VYUE9SVF9NQVBfRk9STUFULkpTT05dOiBERUZBVUxUX0VYUE9SVF9KU09OLFxuICBmb3JtYXQ6IEVYUE9SVF9NQVBfRk9STUFULkhUTUxcbn07XG5cbi8qKlxuICogRGVmYXVsdCBpbml0aWFsIGB1aVN0YXRlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtib29sZWFufSByZWFkT25seSBEZWZhdWx0OiBgZmFsc2VgXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYWN0aXZlU2lkZVBhbmVsIERlZmF1bHQ6IGAnbGF5ZXInYFxuICogQHByb3BlcnR5IHtzdHJpbmd8bnVsbH0gY3VycmVudE1vZGFsIERlZmF1bHQ6IGAnYWRkRGF0YSdgXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSBkYXRhc2V0S2V5VG9SZW1vdmUgRGVmYXVsdDogYG51bGxgXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudWxsfSB2aXNpYmxlRHJvcGRvd24gRGVmYXVsdDogYG51bGxgXG4gKiBAcHJvcGVydHkge09iamVjdH0gZXhwb3J0SW1hZ2UgRGVmYXVsdDogW2BERUZBVUxUX0VYUE9SVF9JTUFHRWBdKCNkZWZhdWx0X2V4cG9ydF9pbWFnZSlcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBleHBvcnREYXRhIERlZmF1bHQ6IFtgREVGQVVMVF9FWFBPUlRfREFUQWBdKCNkZWZhdWx0X2V4cG9ydF9kYXRhKVxuICogQHByb3BlcnR5IHtPYmplY3R9IG1hcENvbnRyb2xzIERlZmF1bHQ6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBJTklUSUFMX1VJX1NUQVRFID0ge1xuICByZWFkT25seTogZmFsc2UsXG4gIGFjdGl2ZVNpZGVQYW5lbDogREVGQVVMVF9BQ1RJVkVfU0lERV9QQU5FTCxcbiAgY3VycmVudE1vZGFsOiBERUZBVUxUX01PREFMLFxuICBkYXRhc2V0S2V5VG9SZW1vdmU6IG51bGwsXG4gIHZpc2libGVEcm9wZG93bjogbnVsbCxcbiAgLy8gZXhwb3J0IGltYWdlIG1vZGFsIHVpXG4gIGV4cG9ydEltYWdlOiBERUZBVUxUX0VYUE9SVF9JTUFHRSxcbiAgLy8gZXhwb3J0IGRhdGEgbW9kYWwgdWlcbiAgZXhwb3J0RGF0YTogREVGQVVMVF9FWFBPUlRfREFUQSxcbiAgLy8gaHRtbCBleHBvcnRcbiAgZXhwb3J0TWFwOiBERUZBVUxUX0VYUE9SVF9NQVAsXG4gIC8vIG1hcCBjb250cm9sIHBhbmVsc1xuICBtYXBDb250cm9sczogREVGQVVMVF9NQVBfQ09OVFJPTFMsXG4gIC8vIHVpIG5vdGlmaWNhdGlvbnNcbiAgbm90aWZpY2F0aW9uczogREVGQVVMVF9OT1RJRklDQVRJT05TXG59O1xuXG4vKiBVcGRhdGVycyAqL1xuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGFjdGlvbi5wYXlsb2FkIGlkIG9mIHNpZGUgcGFuZWwgdG8gYmUgc2hvd24sIG9uZSBvZiBgbGF5ZXJgLCBgZmlsdGVyYCwgYGludGVyYWN0aW9uYCwgYG1hcGAuIGNsb3NlIHNpZGUgcGFuZWwgaWYgYG51bGxgXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+IHtcbiAgaWYgKGlkID09PSBzdGF0ZS5hY3RpdmVTaWRlUGFuZWwpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGFjdGl2ZVNpZGVQYW5lbDogaWRcbiAgfTtcbn07XG5cbi8qKlxuICogU2hvdyBhbmQgaGlkZSBtb2RhbCBkaWFsb2dcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IGFjdGlvbi5wYXlsb2FkIGlkIG9mIG1vZGFsIHRvIGJlIHNob3duLCBudWxsIHRvIGhpZGUgbW9kYWxzLiBPbmUgb2Y6XG4gKlxuICogIC0gW2BEQVRBX1RBQkxFX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZGF0YV90YWJsZV9pZClcbiAqICAtIFtgREVMRVRFX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNkZWxldGVfZGF0YV9pZClcbiAqICAtIFtgQUREX0RBVEFfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNhZGRfZGF0YV9pZClcbiAqICAtIFtgRVhQT1JUX0lNQUdFX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZXhwb3J0X2ltYWdlX2lkKVxuICogIC0gW2BFWFBPUlRfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2V4cG9ydF9kYXRhX2lkKVxuICogIC0gW2BBRERfTUFQX1NUWUxFX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjYWRkX21hcF9zdHlsZV9pZClcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTW9kYWxVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogaWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgY3VycmVudE1vZGFsOiBpZFxufSk7XG5cbi8qKlxuICogSGlkZSBhbmQgc2hvdyBzaWRlIHBhbmVsIGhlYWRlciBkcm9wZG93biwgYWN0aXZhdGVkIGJ5IGNsaWNraW5nIHRoZSBzaGFyZSBsaW5rIG9uIHRvcCBvZiB0aGUgc2lkZSBwYW5lbFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIGlkIG9mIHRoZSBkcm9wZG93blxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzaG93RXhwb3J0RHJvcGRvd25VcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogaWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgdmlzaWJsZURyb3Bkb3duOiBpZFxufSk7XG5cbi8qKlxuICogSGlkZSBzaWRlIHBhbmVsIGhlYWRlciBkcm9wZG93biwgYWN0aXZhdGVkIGJ5IGNsaWNraW5nIHRoZSBzaGFyZSBsaW5rIG9uIHRvcCBvZiB0aGUgc2lkZSBwYW5lbFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBoaWRlRXhwb3J0RHJvcGRvd25VcGRhdGVyID0gKHN0YXRlKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgdmlzaWJsZURyb3Bkb3duOiBudWxsXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyID0gKHN0YXRlLCB7cGF5bG9hZDogcGFuZWxJZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBtYXBDb250cm9sczoge1xuICAgIC4uLnN0YXRlLm1hcENvbnRyb2xzLFxuICAgIFtwYW5lbElkXToge1xuICAgICAgLi4uc3RhdGUubWFwQ29udHJvbHNbcGFuZWxJZF0sXG4gICAgICBhY3RpdmU6ICFzdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXS5hY3RpdmVcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIFRvZ2dsZSBhY3RpdmUgbWFwIGNvbnRyb2wgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZCBkYXRhc2V0IGlkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG9wZW5EZWxldGVNb2RhbFVwZGF0ZXIgPSAoXG4gIHN0YXRlLFxuICB7cGF5bG9hZDogZGF0YXNldEtleVRvUmVtb3ZlfVxuKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgY3VycmVudE1vZGFsOiBERUxFVEVfREFUQV9JRCxcbiAgZGF0YXNldEtleVRvUmVtb3ZlXG59KTtcblxuLyoqXG4gKiBTZXQgYGV4cG9ydEltYWdlLmxlZ2VuZGAgdG8gYHRydWVgIG9yIGBmYWxzZWBcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGVnZW5kVXBkYXRlciA9IHN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRJbWFnZToge1xuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxuICAgIGxlZ2VuZDogIXN0YXRlLmV4cG9ydEltYWdlLmxlZ2VuZFxuICB9XG59KTtcblxuLyoqXG4gKiBTZXQgYGV4cG9ydEltYWdlLnJhdGlvYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIG9uZSBvZiBgJ1NDUkVFTidgLCBgJ0ZPVVJfQllfVEhSRUUnYCBhbmQgYCdTSVhURUVOX0JZX05JTkUnYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRSYXRpb1VwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydEltYWdlOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0SW1hZ2UsXG4gICAgcmF0aW86IHBheWxvYWQucmF0aW9cbiAgfVxufSk7XG5cbi8qKlxuICogU2V0IGBleHBvcnRJbWFnZS5yZXNvbHV0aW9uYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIG9uZSBvZiBgJ09ORV9YJ2AsIGAnVFdPX1gnYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRSZXNvbHV0aW9uVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICByZXNvbHV0aW9uOiBwYXlsb2FkLnJlc29sdXRpb25cbiAgfVxufSk7XG5cbi8qKlxuICogU2V0IGBleHBvcnRJbWFnZS5leHBvcnRpbmdgIHRvIGB0cnVlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzdGFydEV4cG9ydGluZ0ltYWdlID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydEltYWdlOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0SW1hZ2UsXG4gICAgZXhwb3J0aW5nOiB0cnVlLFxuICAgIGltYWdlRGF0YVVyaTogJydcbiAgfVxufSk7XG5cbi8qKlxuICogU2V0IGBleHBvcnRJbWFnZS5zZXRFeHBvcnRJbWFnZURhdGFVcmlgIHRvIGEgaW1hZ2UgZGF0YVVyaVxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkIGV4cG9ydCBpbWFnZSBkYXRhIHVyaVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRJbWFnZURhdGFVcmkgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhVXJpfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydEltYWdlOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0SW1hZ2UsXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcbiAgICBpbWFnZURhdGFVcmk6IGRhdGFVcmlcbiAgfVxufSk7XG5cbi8qKlxuICogRGVsZXRlIGNhY2hlZCBleHBvcnQgaW1hZ2VcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgY2xlYW51cEV4cG9ydEltYWdlID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydEltYWdlOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0SW1hZ2UsXG4gICAgZXhwb3J0aW5nOiBmYWxzZSxcbiAgICBpbWFnZURhdGFVcmk6ICcnXG4gIH1cbn0pO1xuXG4vKipcbiAqIFNldCBzZWxlY3RlZCBkYXRhc2V0IGZvciBleHBvcnRcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucGF5bG9hZCBkYXRhc2V0IGlkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydFNlbGVjdGVkRGF0YXNldFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhc2V0fSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydERhdGE6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnREYXRhLFxuICAgIHNlbGVjdGVkRGF0YXNldDogZGF0YXNldFxuICB9XG59KTtcblxuLyoqXG4gKiBTZXQgZGF0YSBmb3JtYXQgZm9yIGV4cG9ydGluZyBkYXRhXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLnBheWxvYWQgb25lIG9mIGAndGV4dC9jc3YnYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBkYXRhVHlwZX0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnREYXRhOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcbiAgICBkYXRhVHlwZVxuICB9XG59KTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGV4cG9ydCBmaWx0ZXJlZCBkYXRhLCBgdHJ1ZWAgb3IgYGZhbHNlYFxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtib29sZWFufSBhY3Rpb24ucGF5bG9hZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRGaWx0ZXJlZFVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBmaWx0ZXJlZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnREYXRhOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcbiAgICBmaWx0ZXJlZFxuICB9XG59KTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGluY2x1ZGluZyBkYXRhIGluIG1hcCBjb25maWcsIHRvZ2dsZSBiZXR3ZWVuIGB0cnVlYCBvciBgZmFsc2VgXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydERhdGFVcGRhdGVyID0gc3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydE1hcDoge1xuICAgIC4uLnN0YXRlLmV4cG9ydE1hcCxcbiAgICBbRVhQT1JUX01BUF9GT1JNQVQuSlNPTl06IHtcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVC5KU09OXSxcbiAgICAgIGhhc0RhdGE6ICFzdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVQuSlNPTl0uaGFzRGF0YVxuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogd2hldGhlciB0byBleHBvcnQgYSBtYXBib3ggYWNjZXNzIHRvIEhUTUwgc2luZ2xlIHBhZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSAtIGB1aVN0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5wYXlsb2FkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFVzZXJNYXBib3hBY2Nlc3NUb2tlblVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiB1c2VyTWFwYm94VG9rZW59KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0TWFwOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxuICAgIFtFWFBPUlRfTUFQX0ZPUk1BVC5IVE1MXToge1xuICAgICAgLi4uc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFULkhUTUxdLFxuICAgICAgdXNlck1hcGJveFRva2VuXG4gICAgfVxuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHNldEV4cG9ydE1hcEZvcm1hdCA9IChzdGF0ZSwge3BheWxvYWQ6IGZvcm1hdH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRNYXA6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXG4gICAgZm9ybWF0XG4gIH1cbn0pO1xuXG4vKipcbiogQWRkIGEgbm90aWZpY2F0aW9uIHRvIGJlIGRpc3BsYXllZFxuKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4qIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdWlTdGF0ZWBcbiogQHBhcmFtIHtPYmplY3R9IGFjdGlvblxuKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWRcbiogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4qIEBwdWJsaWNcbiovXG5leHBvcnQgY29uc3QgYWRkTm90aWZpY2F0aW9uVXBkYXRlciA9IChzdGF0ZSwge3BheWxvYWR9KSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbm90aWZpY2F0aW9uczogW1xuICAgIC4uLihzdGF0ZS5ub3RpZmljYXRpb25zIHx8IFtdKSxcbiAgICBjcmVhdGVOb3RpZmljYXRpb24ocGF5bG9hZClcbiAgXVxufSk7XG5cbi8qKlxuICogUmVtb3ZlIGEgbm90aWZpY2F0aW9uXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uLnBheWxvYWQgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGlmaWNhdGlvblVwZGF0ZXIgPSAoc3RhdGUsIHtwYXlsb2FkOiBpZH0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBub3RpZmljYXRpb25zOiBzdGF0ZS5ub3RpZmljYXRpb25zLmZpbHRlcihuID0+IG4uaWQgIT09IGlkKVxufSk7XG4iXX0=