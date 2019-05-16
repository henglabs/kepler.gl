"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.updateLayerBlending = updateLayerBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.updateVisData = updateVisData;
exports.toggleAnimation = toggleAnimation;
exports.updateAnimationSpeed = updateAnimationSpeed;
exports.enlargeFilter = enlargeFilter;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setVisibleLayersForMap = setVisibleLayersForMap;
exports.setFilterPlot = setFilterPlot;
exports.loadFiles = loadFiles;
exports.loadFilesErr = loadFilesErr;

var _actionTypes = _interopRequireDefault(require("../constants/action-types"));

// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// vis-state-reducer

/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {Object} newConfig - new config
 * @returns {{type: ActionTypes.LAYER_CONFIG_CHANGE, oldLayer: oldLayer, newConfig: newConfig}}
 * @public
 */
function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {string} newType - new type
 * @returns {{type: ActionTypes.LAYER_TYPE_CHANGE, oldLayer: oldLayer, newType: newType}}
 * @public
 */


function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes["default"].LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}
/**
 * Update layer visual channel
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {Object} newConfig - new visual channel config
 * @param {string} channel - channel to be updated
 * @returns {{type: ActionTypes.LAYER_VISUAL_CHANNEL_CHANGE, oldLayer: oldLayer, newConfig: newConfig, channel: channel}}
 * @public
 */


function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}
/**
 * Update layer `visConfig`
 * @memberof visStateActions
 * @param {Object} oldLayer - layer to be updated
 * @param {Object} newVisConfig - new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns {{type: ActionTypes.LAYER_VIS_CONFIG_CHANGE, oldLayer: oldLayer, newVisConfig: newVisConfig}}
 * @public
 */


function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}
/**
 * Update layer blending mode
 * @memberof visStateActions
 * @param {string} mode one of `additive`, `normal` and `subtractive`
 * @returns {{type: ActionTypes.UPDATE_LAYER_BLENDING, mode: mode}}
 * @public
 */


function updateLayerBlending(mode) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_BLENDING,
    mode: mode
  };
}
/**
 * Update `interactionConfig`
 * @memberof visStateActions
 * @param {Object} config - new config as key value map: `{tooltip: {enabled: true}}`
 * @returns {{type: ActionTypes.INTERACTION_CONFIG_CHANGE, config: config}}
 * @public
 */


function interactionConfigChange(config) {
  return {
    type: _actionTypes["default"].INTERACTION_CONFIG_CHANGE,
    config: config
  };
}
/**
 * Update filter property
 * @memberof visStateActions
 * @param {Number} idx -`idx` of filter to be updated
 * @param {string} prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param {*} value - new value
 * @returns {{type: ActionTypes.SET_FILTER, idx: idx, prop: prop, value: value}}
 * @public
 */


function setFilter(idx, prop, value) {
  return {
    type: _actionTypes["default"].SET_FILTER,
    idx: idx,
    prop: prop,
    value: value
  };
}
/**
 * Add a new filter
 * @memberof visStateActions
 * @param {string} dataId - dataset `id` this new filter is associated with
 * @returns {{type: ActionTypes.ADD_FILTER, dataId: dataId}}
 * @public
 */


function addFilter(dataId) {
  return {
    type: _actionTypes["default"].ADD_FILTER,
    dataId: dataId
  };
}
/**
 * Add a new layer
 * @memberof visStateActions
 * @param {Object} props - new layer props
 * @returns {{type: ActionTypes.ADD_LAYER, props: props}}
 * @public
 */


function addLayer(props) {
  return {
    type: _actionTypes["default"].ADD_LAYER,
    props: props
  };
}
/**
 * Reorder layer, order is an array of layer indexes, index 0 will be the one at the bottom
 * @memberof visStateActions
 * @param {Array<Number>} order an array of layer indexes
 * @returns {{type: ActionTypes.REORDER_LAYER, order: order}}
 * @public
 * @example
 *
 * // bring `layers[1]` below `layers[0]`, the sequence layers will be rendered is `1`, `0`, `2`, `3`.
 * // `1` will be at the bottom, `3` will be at the top.
 * this.props.dispatch(reorderLayer([1, 0, 2, 3]));
 */


function reorderLayer(order) {
  return {
    type: _actionTypes["default"].REORDER_LAYER,
    order: order
  };
}
/**
 * Remove a filter from `visState.filters`, once a filter is removed, data will be re-filtered and layer will be updated
 * @memberof visStateActions
 * @param {Number} idx idx of filter to be removed
 * @returns {{type: ActionTypes.REMOVE_FILTER, idx: idx}}
 * @public
 */


function removeFilter(idx) {
  return {
    type: _actionTypes["default"].REMOVE_FILTER,
    idx: idx
  };
}
/**
 * Remove a layer
 * @memberof visStateActions
 * @param {Number} idx idx of layer to be removed
 * @returns {{type: ActionTypes.REMOVE_LAYER, idx: idx}}
 * @public
 */


function removeLayer(idx) {
  return {
    type: _actionTypes["default"].REMOVE_LAYER,
    idx: idx
  };
}
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateActions
 * @param {string} key dataset id
 * @returns {{type: ActionTypes.REMOVE_DATASET, key: key}}
 * @public
 */


function removeDataset(key) {
  return {
    type: _actionTypes["default"].REMOVE_DATASET,
    key: key
  };
}
/**
 * Display dataset table in a modal
 * @memberof visStateActions
 * @param {string} dataId dataset id to show in table
 * @returns {{type: ActionTypes.SHOW_DATASET_TABLE, dataId: dataId}}
 * @public
 */


function showDatasetTable(dataId) {
  return {
    type: _actionTypes["default"].SHOW_DATASET_TABLE,
    dataId: dataId
  };
}
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateActions
 * @param {Array<Object>|Object} datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} datasets.info -info of a dataset
 * @param {string} datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} datasets.info.label - A display name of this dataset
 * @param {Object} datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} datasets.data.fields - ***required** Array of fields,
 * @param {string} datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`

 * @param {Object} options
 * @param {boolean} options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param {boolean} options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {Object} config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @returns {{type: ActionTypes.UPDATE_VIS_DATA, datasets: datasets, options: options, config: config}}
 * @public
 */


function updateVisData(datasets, options, config) {
  return {
    type: _actionTypes["default"].UPDATE_VIS_DATA,
    datasets: datasets,
    options: options,
    config: config
  };
}
/**
 * Start and end filter animation
 * @memberof visStateActions
 * @param {Number} idx - idx of filter
 * @returns {{type: ActionTypes.TOGGLE_FILTER_ANIMATION, idx: idx}}
 * @public
 */


function toggleAnimation(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}
/**
 * Change filter animation speed
 * @memberof visStateActions
 * @param {Number} idx -  `idx` of filter
 * @param {Number} speed - `speed` to change it to. `speed` is a multiplier
 * @returns {{type: ActionTypes.UPDATE_FILTER_ANIMATION_SPEED, idx: idx, speed: speed}}
 * @public
 */


function updateAnimationSpeed(idx, speed) {
  return {
    type: _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED,
    idx: idx,
    speed: speed
  };
}
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateActions
 * @param {Number} idx - index of filter to enlarge
 * @returns {{type: ActionTypes.ENLARGE_FILTER, idx: idx}}
 * @public
 */


function enlargeFilter(idx) {
  return {
    type: _actionTypes["default"].ENLARGE_FILTER,
    idx: idx
  };
}
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateActions
 * @param {Object} info - Object hovered, returned by deck.gl
 * @returns {{type: ActionTypes.LAYER_HOVER, info: info}}
 * @public
 */


function onLayerHover(info) {
  return {
    type: _actionTypes["default"].LAYER_HOVER,
    info: info
  };
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateActions
 * @param {Object} info - Object clicked, returned by deck.gl
 * @returns {{type: ActionTypes.LAYER_CLICK, info: info}}
 * @public
 */


function onLayerClick(info) {
  return {
    type: _actionTypes["default"].LAYER_CLICK,
    info: info
  };
}
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateActions
 * @returns {{type: ActionTypes.MAP_CLICK}}
 * @public
 */


function onMapClick() {
  return {
    type: _actionTypes["default"].MAP_CLICK
  };
}
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateActions
 * @param {Number} mapIndex - index of the split map
 * @param {string} layerId - id of the layer
 * @returns {{type: ActionTypes.TOGGLE_LAYER_FOR_MAP, mapIndex: *, layerId: *}}
 * @public
 */


function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}
/**
 * Set layers to be visible in split map
 * @memberof visStateActions
 * @param {Number} mapIndex - index of the split map
 * @param {Array<string>} layerIds - array of layer ids
 * @returns {{type: ActionTypes.SET_VISIBLE_LAYERS_FOR_MAP, layerIndex: *, mapIndex: *}}
 * @public
 */


function setVisibleLayersForMap(mapIndex, layerIds) {
  return {
    type: _actionTypes["default"].SET_VISIBLE_LAYERS_FOR_MAP,
    mapIndex: mapIndex,
    layerIds: layerIds
  };
}
/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param {Number} idx
 * @param {Object} newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @returns {{type: ActionTypes.SET_FILTER_PLOT, idx: *, newProp: *}}
 * @public
 */


function setFilterPlot(idx, newProp) {
  return {
    type: _actionTypes["default"].SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp
  };
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateActions
 * @param {Array<Object>} files array of fileblob
 * @returns {{type: ActionTypes.LOAD_FILES, files: *}}
 * @public
 */


function loadFiles(files) {
  return {
    type: _actionTypes["default"].LOAD_FILES,
    files: files
  };
}
/**
 * Trigger loading file error
 * @memberof visStateActions
 * @param {*} error
 * @returns {{type: ActionTypes.LOAD_FILES_ERR, error: *}}
 * @public
 */


function loadFilesErr(error) {
  return {
    type: _actionTypes["default"].LOAD_FILES_ERR,
    error: error
  };
}
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by `visState` reducer.
 * They manage how data is processed, filtered and displayed on the map by operates on layers,
 * filters and interaction settings.
 *
 * @public
 */

/* eslint-disable no-unused-vars */


var visStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImxheWVyQ29uZmlnQ2hhbmdlIiwib2xkTGF5ZXIiLCJuZXdDb25maWciLCJ0eXBlIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9DT05GSUdfQ0hBTkdFIiwibGF5ZXJUeXBlQ2hhbmdlIiwibmV3VHlwZSIsIkxBWUVSX1RZUEVfQ0hBTkdFIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwiY2hhbm5lbCIsIkxBWUVSX1ZJU1VBTF9DSEFOTkVMX0NIQU5HRSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwibmV3VmlzQ29uZmlnIiwiTEFZRVJfVklTX0NPTkZJR19DSEFOR0UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwibW9kZSIsIlVQREFURV9MQVlFUl9CTEVORElORyIsImludGVyYWN0aW9uQ29uZmlnQ2hhbmdlIiwiY29uZmlnIiwiSU5URVJBQ1RJT05fQ09ORklHX0NIQU5HRSIsInNldEZpbHRlciIsImlkeCIsInByb3AiLCJ2YWx1ZSIsIlNFVF9GSUxURVIiLCJhZGRGaWx0ZXIiLCJkYXRhSWQiLCJBRERfRklMVEVSIiwiYWRkTGF5ZXIiLCJwcm9wcyIsIkFERF9MQVlFUiIsInJlb3JkZXJMYXllciIsIm9yZGVyIiwiUkVPUkRFUl9MQVlFUiIsInJlbW92ZUZpbHRlciIsIlJFTU9WRV9GSUxURVIiLCJyZW1vdmVMYXllciIsIlJFTU9WRV9MQVlFUiIsInJlbW92ZURhdGFzZXQiLCJrZXkiLCJSRU1PVkVfREFUQVNFVCIsInNob3dEYXRhc2V0VGFibGUiLCJTSE9XX0RBVEFTRVRfVEFCTEUiLCJ1cGRhdGVWaXNEYXRhIiwiZGF0YXNldHMiLCJvcHRpb25zIiwiVVBEQVRFX1ZJU19EQVRBIiwidG9nZ2xlQW5pbWF0aW9uIiwiVE9HR0xFX0ZJTFRFUl9BTklNQVRJT04iLCJ1cGRhdGVBbmltYXRpb25TcGVlZCIsInNwZWVkIiwiVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQiLCJlbmxhcmdlRmlsdGVyIiwiRU5MQVJHRV9GSUxURVIiLCJvbkxheWVySG92ZXIiLCJpbmZvIiwiTEFZRVJfSE9WRVIiLCJvbkxheWVyQ2xpY2siLCJMQVlFUl9DTElDSyIsIm9uTWFwQ2xpY2siLCJNQVBfQ0xJQ0siLCJ0b2dnbGVMYXllckZvck1hcCIsIm1hcEluZGV4IiwibGF5ZXJJZCIsIlRPR0dMRV9MQVlFUl9GT1JfTUFQIiwic2V0VmlzaWJsZUxheWVyc0Zvck1hcCIsImxheWVySWRzIiwiU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAiLCJzZXRGaWx0ZXJQbG90IiwibmV3UHJvcCIsIlNFVF9GSUxURVJfUExPVCIsImxvYWRGaWxlcyIsImZpbGVzIiwiTE9BRF9GSUxFUyIsImxvYWRGaWxlc0VyciIsImVycm9yIiwiTE9BRF9GSUxFU19FUlIiLCJ2aXNTdGF0ZUFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0E7Ozs7Ozs7O0FBUU8sU0FBU0EsaUJBQVQsQ0FBMkJDLFFBQTNCLEVBQXFDQyxTQUFyQyxFQUFnRDtBQUNyRCxTQUFPO0FBQ0xDLElBQUFBLElBQUksRUFBRUMsd0JBQVlDLG1CQURiO0FBRUxKLElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMQyxJQUFBQSxTQUFTLEVBQVRBO0FBSEssR0FBUDtBQUtEO0FBRUQ7Ozs7Ozs7Ozs7QUFRTyxTQUFTSSxlQUFULENBQXlCTCxRQUF6QixFQUFtQ00sT0FBbkMsRUFBNEM7QUFDakQsU0FBTztBQUNMSixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZSSxpQkFEYjtBQUVMUCxJQUFBQSxRQUFRLEVBQVJBLFFBRks7QUFHTE0sSUFBQUEsT0FBTyxFQUFQQTtBQUhLLEdBQVA7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RUFBNkI7QUFDbEMsU0FBTztBQUNMekUsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWXlFLGNBRGI7QUFFTEQsSUFBQUEsS0FBSyxFQUFMQTtBQUZLLEdBQVA7QUFJRDtBQUVEOzs7O0FBR0E7Ozs7Ozs7O0FBT0E7OztBQUNBLElBQU1FLGVBQWUsR0FBRyxJQUF4QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gdmlzLXN0YXRlLXJlZHVjZXJcbmltcG9ydCBBY3Rpb25UeXBlcyBmcm9tICdjb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3Q29uZmlnIC0gbmV3IGNvbmZpZ1xuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFLCBvbGRMYXllcjogb2xkTGF5ZXIsIG5ld0NvbmZpZzogbmV3Q29uZmlnfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29uZmlnQ2hhbmdlKG9sZExheWVyLCBuZXdDb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdUeXBlIC0gbmV3IHR5cGVcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVFlQRV9DSEFOR0UsIG9sZExheWVyOiBvbGRMYXllciwgbmV3VHlwZTogbmV3VHlwZX19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclR5cGVDaGFuZ2Uob2xkTGF5ZXIsIG5ld1R5cGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9UWVBFX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdUeXBlXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIHZpc3VhbCBjaGFubmVsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3Q29uZmlnIC0gbmV3IHZpc3VhbCBjaGFubmVsIGNvbmZpZ1xuICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWwgLSBjaGFubmVsIHRvIGJlIHVwZGF0ZWRcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFLCBvbGRMYXllcjogb2xkTGF5ZXIsIG5ld0NvbmZpZzogbmV3Q29uZmlnLCBjaGFubmVsOiBjaGFubmVsfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3Q29uZmlnLCBjaGFubmVsKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZyxcbiAgICBjaGFubmVsXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGB2aXNDb25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gbmV3VmlzQ29uZmlnIC0gbmV3IHZpc0NvbmZpZyBhcyBhIGtleSB2YWx1ZSBtYXA6IGUuZy4gYHtvcGFjaXR5OiAwLjh9YFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9WSVNfQ09ORklHX0NIQU5HRSwgb2xkTGF5ZXI6IG9sZExheWVyLCBuZXdWaXNDb25maWc6IG5ld1Zpc0NvbmZpZ319XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc0NvbmZpZ0NoYW5nZShvbGRMYXllciwgbmV3VmlzQ29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTX0NPTkZJR19DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3VmlzQ29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGJsZW5kaW5nIG1vZGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlIG9uZSBvZiBgYWRkaXRpdmVgLCBgbm9ybWFsYCBhbmQgYHN1YnRyYWN0aXZlYFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkcsIG1vZGU6IG1vZGV9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTGF5ZXJCbGVuZGluZyhtb2RlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0xBWUVSX0JMRU5ESU5HLFxuICAgIG1vZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgYGludGVyYWN0aW9uQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyAtIG5ldyBjb25maWcgYXMga2V5IHZhbHVlIG1hcDogYHt0b29sdGlwOiB7ZW5hYmxlZDogdHJ1ZX19YFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5JTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFLCBjb25maWc6IGNvbmZpZ319XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZShjb25maWcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFVwZGF0ZSBmaWx0ZXIgcHJvcGVydHlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggLWBpZHhgIG9mIGZpbHRlciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcCAtIGBwcm9wYCBvZiBmaWx0ZXIsIGUsZywgYGRhdGFJZGAsIGBuYW1lYCwgYHZhbHVlYFxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIG5ldyB2YWx1ZVxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSLCBpZHg6IGlkeCwgcHJvcDogcHJvcCwgdmFsdWU6IHZhbHVlfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlcihpZHgsIHByb3AsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUixcbiAgICBpZHgsXG4gICAgcHJvcCxcbiAgICB2YWx1ZVxuICB9O1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhSWQgLSBkYXRhc2V0IGBpZGAgdGhpcyBuZXcgZmlsdGVyIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5BRERfRklMVEVSLCBkYXRhSWQ6IGRhdGFJZH19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRGaWx0ZXIoZGF0YUlkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQUREX0ZJTFRFUixcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wcyAtIG5ldyBsYXllciBwcm9wc1xuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5BRERfTEFZRVIsIHByb3BzOiBwcm9wc319XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMYXllcihwcm9wcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFERF9MQVlFUixcbiAgICBwcm9wc1xuICB9O1xufVxuXG4vKipcbiAqIFJlb3JkZXIgbGF5ZXIsIG9yZGVyIGlzIGFuIGFycmF5IG9mIGxheWVyIGluZGV4ZXMsIGluZGV4IDAgd2lsbCBiZSB0aGUgb25lIGF0IHRoZSBib3R0b21cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gb3JkZXIgYW4gYXJyYXkgb2YgbGF5ZXIgaW5kZXhlc1xuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5SRU9SREVSX0xBWUVSLCBvcmRlcjogb3JkZXJ9fVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBicmluZyBgbGF5ZXJzWzFdYCBiZWxvdyBgbGF5ZXJzWzBdYCwgdGhlIHNlcXVlbmNlIGxheWVycyB3aWxsIGJlIHJlbmRlcmVkIGlzIGAxYCwgYDBgLCBgMmAsIGAzYC5cbiAqIC8vIGAxYCB3aWxsIGJlIGF0IHRoZSBib3R0b20sIGAzYCB3aWxsIGJlIGF0IHRoZSB0b3AuXG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHJlb3JkZXJMYXllcihbMSwgMCwgMiwgM10pKTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlb3JkZXJMYXllcihvcmRlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFT1JERVJfTEFZRVIsXG4gICAgb3JkZXJcbiAgfTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgYSBmaWx0ZXIgZnJvbSBgdmlzU3RhdGUuZmlsdGVyc2AsIG9uY2UgYSBmaWx0ZXIgaXMgcmVtb3ZlZCwgZGF0YSB3aWxsIGJlIHJlLWZpbHRlcmVkIGFuZCBsYXllciB3aWxsIGJlIHVwZGF0ZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggaWR4IG9mIGZpbHRlciB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9GSUxURVIsIGlkeDogaWR4fX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZpbHRlcihpZHgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfRklMVEVSLFxuICAgIGlkeFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IGlkeCBvZiBsYXllciB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9MQVlFUiwgaWR4OiBpZHh9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTGF5ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0xBWUVSLFxuICAgIGlkeFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZSBhIGRhdGFzZXQgYW5kIGFsbCBsYXllcnMsIGZpbHRlcnMsIHRvb2x0aXAgY29uZmlncyB0aGF0IGJhc2VkIG9uIGl0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IGRhdGFzZXQgaWRcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0RBVEFTRVQsIGtleToga2V5fX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURhdGFzZXQoa2V5KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0RBVEFTRVQsXG4gICAga2V5XG4gIH07XG59XG5cbi8qKlxuICogRGlzcGxheSBkYXRhc2V0IHRhYmxlIGluIGEgbW9kYWxcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhSWQgZGF0YXNldCBpZCB0byBzaG93IGluIHRhYmxlXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlNIT1dfREFUQVNFVF9UQUJMRSwgZGF0YUlkOiBkYXRhSWR9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGFzZXRUYWJsZShkYXRhSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TSE9XX0RBVEFTRVRfVEFCTEUsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbi8qKlxuICogQWRkIG5ldyBkYXRhc2V0IHRvIGB2aXNTdGF0ZWAsIHdpdGggb3B0aW9uIHRvIGxvYWQgYSBtYXAgY29uZmlnIGFsb25nIHdpdGggdGhlIGRhdGFzZXRzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD58T2JqZWN0fSBkYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFzZXRzLmluZm8gLWluZm8gb2YgYSBkYXRhc2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YXNldHMuaW5mby5pZCAtIGlkIG9mIHRoaXMgZGF0YXNldC4gSWYgY29uZmlnIGlzIGRlZmluZWQsIGBpZGAgc2hvdWxkIG1hdGNoZXMgdGhlIGBkYXRhSWRgIGluIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhc2V0cy5pbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldHMuZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZGF0YXNldHMuZGF0YS5maWVsZHMgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIGZpZWxkcyxcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhc2V0cy5kYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBkYXRhc2V0cy5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXG5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY2VudGVyTWFwIGBkZWZhdWx0OiB0cnVlYCBpZiBgY2VudGVyTWFwYCBpcyBzZXQgdG8gYHRydWVgIGtlcGxlci5nbCB3aWxsXG4gKiBwbGFjZSB0aGUgbWFwIHZpZXcgd2l0aGluIHRoZSBkYXRhIHBvaW50cyBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucmVhZE9ubHkgYGRlZmF1bHQ6IGZhbHNlYCBpZiBgcmVhZE9ubHlgIGlzIHNldCB0byBgdHJ1ZWBcbiAqIHRoZSBsZWZ0IHNldHRpbmcgcGFuZWwgd2lsbCBiZSBoaWRkZW5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgdGhpcyBvYmplY3Qgd2lsbCBjb250YWluIHRoZSBmdWxsIGtlcGxlci5nbCBpbnN0YW5jZSBjb25maWd1cmF0aW9uIHttYXBTdGF0ZSwgbWFwU3R5bGUsIHZpc1N0YXRlfVxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfVklTX0RBVEEsIGRhdGFzZXRzOiBkYXRhc2V0cywgb3B0aW9uczogb3B0aW9ucywgY29uZmlnOiBjb25maWd9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVmlzRGF0YShkYXRhc2V0cywgb3B0aW9ucywgY29uZmlnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBLFxuICAgIGRhdGFzZXRzLFxuICAgIG9wdGlvbnMsXG4gICAgY29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gaWR4IG9mIGZpbHRlclxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0FOSU1BVElPTiwgaWR4OiBpZHh9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQW5pbWF0aW9uKGlkeCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OLFxuICAgIGlkeFxuICB9O1xufVxuXG4vKipcbiAqIENoYW5nZSBmaWx0ZXIgYW5pbWF0aW9uIHNwZWVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gIGBpZHhgIG9mIGZpbHRlclxuICogQHBhcmFtIHtOdW1iZXJ9IHNwZWVkIC0gYHNwZWVkYCB0byBjaGFuZ2UgaXQgdG8uIGBzcGVlZGAgaXMgYSBtdWx0aXBsaWVyXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLlVQREFURV9GSUxURVJfQU5JTUFUSU9OX1NQRUVELCBpZHg6IGlkeCwgc3BlZWQ6IHNwZWVkfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGlvblNwZWVkKGlkeCwgc3BlZWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCxcbiAgICBpZHgsXG4gICAgc3BlZWRcbiAgfTtcbn1cblxuLyoqXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IC0gaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuRU5MQVJHRV9GSUxURVIsIGlkeDogaWR4fX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVubGFyZ2VGaWx0ZXIoaWR4KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuRU5MQVJHRV9GSUxURVIsXG4gICAgaWR4XG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIE9iamVjdCBob3ZlcmVkLCByZXR1cm5lZCBieSBkZWNrLmdsXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0hPVkVSLCBpbmZvOiBpbmZvfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJIb3ZlcihpbmZvKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVIsXG4gICAgaW5mb1xuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBPYmplY3QgY2xpY2tlZCwgcmV0dXJuZWQgYnkgZGVjay5nbFxuICogQHJldHVybnMge3t0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9DTElDSywgaW5mbzogaW5mb319XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkxheWVyQ2xpY2soaW5mbykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NMSUNLLFxuICAgIGluZm9cbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIG1hcCBjbGljayBldmVudCwgdW5zZWxlY3QgY2xpY2tlZCBvYmplY3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTUFQX0NMSUNLfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTWFwQ2xpY2soKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTUFQX0NMSUNLXG4gIH07XG59XG5cbi8qKlxuICogVG9nZ2xlIHZpc2liaWxpdHkgb2YgYSBsYXllciBpbiBhIHNwbGl0IG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IG1hcEluZGV4IC0gaW5kZXggb2YgdGhlIHNwbGl0IG1hcFxuICogQHBhcmFtIHtzdHJpbmd9IGxheWVySWQgLSBpZCBvZiB0aGUgbGF5ZXJcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVAsIG1hcEluZGV4OiAqLCBsYXllcklkOiAqfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUxheWVyRm9yTWFwKG1hcEluZGV4LCBsYXllcklkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVAsXG4gICAgbWFwSW5kZXgsXG4gICAgbGF5ZXJJZFxuICB9O1xufVxuXG4vKipcbiAqIFNldCBsYXllcnMgdG8gYmUgdmlzaWJsZSBpbiBzcGxpdCBtYXBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXBJbmRleCAtIGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbGF5ZXJJZHMgLSBhcnJheSBvZiBsYXllciBpZHNcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAsIGxheWVySW5kZXg6ICosIG1hcEluZGV4OiAqfX1cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldFZpc2libGVMYXllcnNGb3JNYXAobWFwSW5kZXgsIGxheWVySWRzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1ZJU0lCTEVfTEFZRVJTX0ZPUl9NQVAsXG4gICAgbWFwSW5kZXgsXG4gICAgbGF5ZXJJZHNcbiAgfTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHByb3BlcnR5IG9mIGEgZmlsdGVyIHBsb3RcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHhcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdQcm9wIGtleSB2YWx1ZSBtYXBwaW5nIG9mIG5ldyBwcm9wIGB7eUF4aXM6ICdoaXN0b2dyYW0nfWBcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9QTE9ULCBpZHg6ICosIG5ld1Byb3A6ICp9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyUGxvdChpZHgsIG5ld1Byb3ApIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1BMT1QsXG4gICAgaWR4LFxuICAgIG5ld1Byb3BcbiAgfTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyIGZpbGUgbG9hZGluZyBkaXNwYXRjaCBgYWRkRGF0YVRvTWFwYCBpZiBzdWNjZWVkLCBvciBgbG9hZEZpbGVzRXJyYCBpZiBmYWlsZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gZmlsZXMgYXJyYXkgb2YgZmlsZWJsb2JcbiAqIEByZXR1cm5zIHt7dHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFUywgZmlsZXM6ICp9fVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZpbGVzKGZpbGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFUyxcbiAgICBmaWxlc1xuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgbG9hZGluZyBmaWxlIGVycm9yXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0geyp9IGVycm9yXG4gKiBAcmV0dXJucyB7e3R5cGU6IEFjdGlvblR5cGVzLkxPQURfRklMRVNfRVJSLCBlcnJvcjogKn19XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNFcnIoZXJyb3IpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX0VSUixcbiAgICBlcnJvclxuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZGVjbGFyYXRpb24gaXMgbmVlZGVkIHRvIGdyb3VwIGFjdGlvbnMgaW4gZG9jc1xuICovXG4vKipcbiAqIEFjdGlvbnMgaGFuZGxlZCBtb3N0bHkgYnkgYHZpc1N0YXRlYCByZWR1Y2VyLlxuICogVGhleSBtYW5hZ2UgaG93IGRhdGEgaXMgcHJvY2Vzc2VkLCBmaWx0ZXJlZCBhbmQgZGlzcGxheWVkIG9uIHRoZSBtYXAgYnkgb3BlcmF0ZXMgb24gbGF5ZXJzLFxuICogZmlsdGVycyBhbmQgaW50ZXJhY3Rpb24gc2V0dGluZ3MuXG4gKlxuICogQHB1YmxpY1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgdmlzU3RhdGVBY3Rpb25zID0gbnVsbDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiJdfQ==