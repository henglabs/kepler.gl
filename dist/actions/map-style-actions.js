"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadCustomMapStyle = exports.mapStyleChange = exports.loadMapStyleErr = exports.loadMapStyles = exports.requestMapStyles = exports.mapConfigChange = exports.inputMapStyle = exports.addCustomMapStyle = void 0;

var _reduxActions = require("redux-actions");

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

/**
 * Add map style from user input to reducer and set it to current style
 * This action is called when user click confirm after putting in a valid style url in the custom map style dialog.
 * It should not be called from outside kepler.gl without a valid `inputStyle` in the `mapStyle` reducer.
 * param {void}
 * @memberof mapStyleActions
 * @public
 */
var addCustomMapStyle = (0, _reduxActions.createAction)(_actionTypes["default"].ADD_CUSTOM_MAP_STYLE);
/**
 * Input a custom map style object
 * @memberof mapStyleActions
 * @param {Object} inputStyle
 * @param {string} inputStyle.url - style url e.g. `'mapbox://styles/heshan/xxxxxyyyyzzz'`
 * @param {string} inputStyle.id - style url e.g. `'custom_style_1'`
 * @param {Object} inputStyle.style - actual mapbox style json
 * @param {string} inputStyle.name - style name
 * @param {Object} inputStyle.layerGroups - layer groups that can be used to set map layer visibility
 * @param {Object} inputStyle.icon - icon image data url
 * @public
 */

exports.addCustomMapStyle = addCustomMapStyle;
var inputMapStyle = (0, _reduxActions.createAction)(_actionTypes["default"].INPUT_MAP_STYLE, function (inputStyle) {
  return inputStyle;
});
/**
 * Update `visibleLayerGroups`to change layer group visibility
 * @memberof mapStyleActions
 * @param {Object} mapStyle new config `{visibleLayerGroups: {label: false, road: true, background: true}}`
 * @public
 */

exports.inputMapStyle = inputMapStyle;
var mapConfigChange = (0, _reduxActions.createAction)(_actionTypes["default"].MAP_CONFIG_CHANGE, function (mapStyle) {
  return mapStyle;
});
/**
 * Request map style style object based on style.url.
 * @memberof mapStyleActions
 * @param {Array<Object>} mapStyles
 * @public
 */

exports.mapConfigChange = mapConfigChange;
var requestMapStyles = (0, _reduxActions.createAction)(_actionTypes["default"].REQUEST_MAP_STYLES, function (mapStyles) {
  return mapStyles;
});
/**
 * Callback when load map style success
 * @memberof mapStyleActions
 * @param {Object} newStyles a `{[id]: style}` mapping
 * @public
 */

exports.requestMapStyles = requestMapStyles;
var loadMapStyles = (0, _reduxActions.createAction)(_actionTypes["default"].LOAD_MAP_STYLES, function (newStyles) {
  return newStyles;
});
/**
 * Callback when load map style error
 * @memberof mapStyleActions
 * @param {*} error
 * @public
 */

exports.loadMapStyles = loadMapStyles;
var loadMapStyleErr = (0, _reduxActions.createAction)(_actionTypes["default"].LOAD_MAP_STYLE_ERR, function (error) {
  return error;
});
/**
 * Change to another map style. The selected style should already been loaded into `mapStyle.mapStyles`
 * @memberof mapStyleActions
 * @param {string} styleType the style to change to
 * @public
 */

exports.loadMapStyleErr = loadMapStyleErr;
var mapStyleChange = (0, _reduxActions.createAction)(_actionTypes["default"].MAP_STYLE_CHANGE, function (styleType) {
  return styleType;
});
/**
 * Callback when a custom map style object is received
 * @memberof mapStyleActions
 * @param {Object} customMapStyle
 * @param {string} customMapStyle.icon
 * @param {Object} customMapStyle.style
 * @param {*} customMapStyle.error
 * @public
 */

exports.mapStyleChange = mapStyleChange;
var loadCustomMapStyle = (0, _reduxActions.createAction)(_actionTypes["default"].LOAD_CUSTOM_MAP_STYLE, function (customMapStyle) {
  return customMapStyle;
});
/**
 * Actions handled mostly by  `mapStyle` reducer.
 * They manage the display of base map, such as loading and receiving base map styles,
 * hiding and showing map layers, user input of custom map style url.
 *
 * @public
 */

/* eslint-disable no-unused-vars */

exports.loadCustomMapStyle = loadCustomMapStyle;
var mapStyleActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImFkZEN1c3RvbU1hcFN0eWxlIiwiQWN0aW9uVHlwZXMiLCJBRERfQ1VTVE9NX01BUF9TVFlMRSIsImlucHV0TWFwU3R5bGUiLCJJTlBVVF9NQVBfU1RZTEUiLCJpbnB1dFN0eWxlIiwibWFwQ29uZmlnQ2hhbmdlIiwiTUFQX0NPTkZJR19DSEFOR0UiLCJtYXBTdHlsZSIsInJlcXVlc3RNYXBTdHlsZXMiLCJSRVFVRVNUX01BUF9TVFlMRVMiLCJtYXBTdHlsZXMiLCJsb2FkTWFwU3R5bGVzIiwiTE9BRF9NQVBfU1RZTEVTIiwibmV3U3R5bGVzIiwibG9hZE1hcFN0eWxlRXJyIiwiTE9BRF9NQVBfU1RZTEVfRVJSIiwiZXJyb3IiLCJtYXBTdHlsZUNoYW5nZSIsIk1BUF9TVFlMRV9DSEFOR0UiLCJzdHlsZVR5cGUiLCJsb2FkQ3VzdG9tTWFwU3R5bGUiLCJMT0FEX0NVU1RPTV9NQVBfU1RZTEUiLCJjdXN0b21NYXBTdHlsZSIsIm1hcFN0eWxlQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQTs7Ozs7Ozs7QUFRTyxJQUFNQSxpQkFBaUIsR0FBRyxnQ0FDL0JDLHdCQUFZQyxvQkFEbUIsQ0FBMUI7QUFJUDs7Ozs7Ozs7Ozs7Ozs7QUFZTyxJQUFNQyxhQUFhLEdBQUcsZ0NBQzNCRix3QkFBWUcsZUFEZSxFQUUzQixVQUFBQyxVQUFVO0FBQUEsU0FBSUEsVUFBSjtBQUFBLENBRmlCLENBQXRCO0FBS1A7Ozs7Ozs7O0FBTU8sSUFBTUMsZUFBZSxHQUFHLGdDQUM3Qkwsd0JBQVlNLGlCQURpQixFQUU3QixVQUFBQyxRQUFRO0FBQUEsU0FBSUEsUUFBSjtBQUFBLENBRnFCLENBQXhCO0FBS1A7Ozs7Ozs7O0FBTU8sSUFBTUMsZ0JBQWdCLEdBQUcsZ0NBQzlCUix3QkFBWVMsa0JBRGtCLEVBRTlCLFVBQUFDLFNBQVM7QUFBQSxTQUFJQSxTQUFKO0FBQUEsQ0FGcUIsQ0FBekI7QUFJUDs7Ozs7Ozs7QUFNTyxJQUFNQyxhQUFhLEdBQUcsZ0NBQzNCWCx3QkFBWVksZUFEZSxFQUUzQixVQUFBQyxTQUFTO0FBQUEsU0FBSUEsU0FBSjtBQUFBLENBRmtCLENBQXRCO0FBS1A7Ozs7Ozs7O0FBTU8sSUFBTUMsZUFBZSxHQUFHLGdDQUM3QmQsd0JBQVllLGtCQURpQixFQUU3QixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSjtBQUFBLENBRndCLENBQXhCO0FBS1A7Ozs7Ozs7O0FBTU8sSUFBTUMsY0FBYyxHQUFHLGdDQUM1QmpCLHdCQUFZa0IsZ0JBRGdCLEVBRTVCLFVBQUFDLFNBQVM7QUFBQSxTQUFJQSxTQUFKO0FBQUEsQ0FGbUIsQ0FBdkI7QUFLUDs7Ozs7Ozs7Ozs7QUFTTyxJQUFNQyxrQkFBa0IsR0FBRyxnQ0FDaENwQix3QkFBWXFCLHFCQURvQixFQUVoQyxVQUFBQyxjQUFjO0FBQUEsU0FBSUEsY0FBSjtBQUFBLENBRmtCLENBQTNCO0FBS1A7Ozs7Ozs7O0FBT0E7OztBQUNBLElBQU1DLGVBQWUsR0FBRyxJQUF4QjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG4vKipcbiAqIEFkZCBtYXAgc3R5bGUgZnJvbSB1c2VyIGlucHV0IHRvIHJlZHVjZXIgYW5kIHNldCBpdCB0byBjdXJyZW50IHN0eWxlXG4gKiBUaGlzIGFjdGlvbiBpcyBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrIGNvbmZpcm0gYWZ0ZXIgcHV0dGluZyBpbiBhIHZhbGlkIHN0eWxlIHVybCBpbiB0aGUgY3VzdG9tIG1hcCBzdHlsZSBkaWFsb2cuXG4gKiBJdCBzaG91bGQgbm90IGJlIGNhbGxlZCBmcm9tIG91dHNpZGUga2VwbGVyLmdsIHdpdGhvdXQgYSB2YWxpZCBgaW5wdXRTdHlsZWAgaW4gdGhlIGBtYXBTdHlsZWAgcmVkdWNlci5cbiAqIHBhcmFtIHt2b2lkfVxuICogQG1lbWJlcm9mIG1hcFN0eWxlQWN0aW9uc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tTWFwU3R5bGUgPSBjcmVhdGVBY3Rpb24oXG4gIEFjdGlvblR5cGVzLkFERF9DVVNUT01fTUFQX1NUWUxFLFxuKTtcblxuLyoqXG4gKiBJbnB1dCBhIGN1c3RvbSBtYXAgc3R5bGUgb2JqZWN0XG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gaW5wdXRTdHlsZVxuICogQHBhcmFtIHtzdHJpbmd9IGlucHV0U3R5bGUudXJsIC0gc3R5bGUgdXJsIGUuZy4gYCdtYXBib3g6Ly9zdHlsZXMvaGVzaGFuL3h4eHh4eXl5eXp6eidgXG4gKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRTdHlsZS5pZCAtIHN0eWxlIHVybCBlLmcuIGAnY3VzdG9tX3N0eWxlXzEnYFxuICogQHBhcmFtIHtPYmplY3R9IGlucHV0U3R5bGUuc3R5bGUgLSBhY3R1YWwgbWFwYm94IHN0eWxlIGpzb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFN0eWxlLm5hbWUgLSBzdHlsZSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gaW5wdXRTdHlsZS5sYXllckdyb3VwcyAtIGxheWVyIGdyb3VwcyB0aGF0IGNhbiBiZSB1c2VkIHRvIHNldCBtYXAgbGF5ZXIgdmlzaWJpbGl0eVxuICogQHBhcmFtIHtPYmplY3R9IGlucHV0U3R5bGUuaWNvbiAtIGljb24gaW1hZ2UgZGF0YSB1cmxcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGlucHV0TWFwU3R5bGUgPSBjcmVhdGVBY3Rpb24oXG4gIEFjdGlvblR5cGVzLklOUFVUX01BUF9TVFlMRSxcbiAgaW5wdXRTdHlsZSA9PiBpbnB1dFN0eWxlXG4pO1xuXG4vKipcbiAqIFVwZGF0ZSBgdmlzaWJsZUxheWVyR3JvdXBzYHRvIGNoYW5nZSBsYXllciBncm91cCB2aXNpYmlsaXR5XG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwU3R5bGUgbmV3IGNvbmZpZyBge3Zpc2libGVMYXllckdyb3Vwczoge2xhYmVsOiBmYWxzZSwgcm9hZDogdHJ1ZSwgYmFja2dyb3VuZDogdHJ1ZX19YFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbWFwQ29uZmlnQ2hhbmdlID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5NQVBfQ09ORklHX0NIQU5HRSxcbiAgbWFwU3R5bGUgPT4gbWFwU3R5bGVcbik7XG5cbi8qKlxuICogUmVxdWVzdCBtYXAgc3R5bGUgc3R5bGUgb2JqZWN0IGJhc2VkIG9uIHN0eWxlLnVybC5cbiAqIEBtZW1iZXJvZiBtYXBTdHlsZUFjdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gbWFwU3R5bGVzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1ZXN0TWFwU3R5bGVzID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5SRVFVRVNUX01BUF9TVFlMRVMsXG4gIG1hcFN0eWxlcyA9PiBtYXBTdHlsZXNcbik7XG4vKipcbiAqIENhbGxiYWNrIHdoZW4gbG9hZCBtYXAgc3R5bGUgc3VjY2Vzc1xuICogQG1lbWJlcm9mIG1hcFN0eWxlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG5ld1N0eWxlcyBhIGB7W2lkXTogc3R5bGV9YCBtYXBwaW5nXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkTWFwU3R5bGVzID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5MT0FEX01BUF9TVFlMRVMsXG4gIG5ld1N0eWxlcyA9PiBuZXdTdHlsZXNcbik7XG5cbi8qKlxuICogQ2FsbGJhY2sgd2hlbiBsb2FkIG1hcCBzdHlsZSBlcnJvclxuICogQG1lbWJlcm9mIG1hcFN0eWxlQWN0aW9uc1xuICogQHBhcmFtIHsqfSBlcnJvclxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZE1hcFN0eWxlRXJyID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5MT0FEX01BUF9TVFlMRV9FUlIsXG4gIGVycm9yID0+IGVycm9yXG4pO1xuXG4vKipcbiAqIENoYW5nZSB0byBhbm90aGVyIG1hcCBzdHlsZS4gVGhlIHNlbGVjdGVkIHN0eWxlIHNob3VsZCBhbHJlYWR5IGJlZW4gbG9hZGVkIGludG8gYG1hcFN0eWxlLm1hcFN0eWxlc2BcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZUFjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHlsZVR5cGUgdGhlIHN0eWxlIHRvIGNoYW5nZSB0b1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbWFwU3R5bGVDaGFuZ2UgPSBjcmVhdGVBY3Rpb24oXG4gIEFjdGlvblR5cGVzLk1BUF9TVFlMRV9DSEFOR0UsXG4gIHN0eWxlVHlwZSA9PiBzdHlsZVR5cGVcbik7XG5cbi8qKlxuICogQ2FsbGJhY2sgd2hlbiBhIGN1c3RvbSBtYXAgc3R5bGUgb2JqZWN0IGlzIHJlY2VpdmVkXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gY3VzdG9tTWFwU3R5bGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBjdXN0b21NYXBTdHlsZS5pY29uXG4gKiBAcGFyYW0ge09iamVjdH0gY3VzdG9tTWFwU3R5bGUuc3R5bGVcbiAqIEBwYXJhbSB7Kn0gY3VzdG9tTWFwU3R5bGUuZXJyb3JcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRDdXN0b21NYXBTdHlsZSA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuTE9BRF9DVVNUT01fTUFQX1NUWUxFLFxuICBjdXN0b21NYXBTdHlsZSA9PiBjdXN0b21NYXBTdHlsZVxuKTtcblxuLyoqXG4gKiBBY3Rpb25zIGhhbmRsZWQgbW9zdGx5IGJ5ICBgbWFwU3R5bGVgIHJlZHVjZXIuXG4gKiBUaGV5IG1hbmFnZSB0aGUgZGlzcGxheSBvZiBiYXNlIG1hcCwgc3VjaCBhcyBsb2FkaW5nIGFuZCByZWNlaXZpbmcgYmFzZSBtYXAgc3R5bGVzLFxuICogaGlkaW5nIGFuZCBzaG93aW5nIG1hcCBsYXllcnMsIHVzZXIgaW5wdXQgb2YgY3VzdG9tIG1hcCBzdHlsZSB1cmwuXG4gKlxuICogQHB1YmxpY1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgbWFwU3R5bGVBY3Rpb25zID0gbnVsbFxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuIl19