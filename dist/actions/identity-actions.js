"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameEntry = exports.deleteEntry = exports.registerEntry = void 0;

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
 *
 * Add a new kepler.gl instance in `keplerGlReducer`. This action is called under-the-hood when a `KeplerGl` component is **mounted** to the dom.
 * Note that if you dispatch actions such as adding data to a kepler.gl instance before the React component is mounted, the action will not be
 * performed. Instance reducer can only handle actions when it is instantiated.
 * @memberof rootActions
 * @param {Object} payload
 * @param {string} payload.id - ***required** The id of the instance
 * @param {boolean} payload.mint - Whether to use a fresh empty state, when `mint: true` it will *always* load a fresh state when the component is re-mounted.
 * When `mint: false` it will register with existing instance state under the same `id`, when the component is unmounted then mounted again. Default: `true`
 * @param {string} payload.mapboxApiAccessToken - mapboxApiAccessToken to be saved in `map-style` reducer.
 * @public
 */
var registerEntry = (0, _reduxActions.createAction)(_actionTypes["default"].REGISTER_ENTRY, function (_ref) {
  var id = _ref.id,
      mint = _ref.mint,
      mapboxApiAccessToken = _ref.mapboxApiAccessToken;
  return {
    id: id,
    mint: mint,
    mapboxApiAccessToken: mapboxApiAccessToken
  };
});
/**
 *
 * Delete an instance from `keplerGlReducer`. This action is called under-the-hood when a `KeplerGl` component is **un-mounted** to the dom.
 * If `mint` is set to be `true` in the component prop, the instance state will be deleted from the root reducer. Otherwise, the root reducer will keep
 * the instance state and later transfer it to a newly mounted component with the same `id`
 * @memberof rootActions
 * @param {string} id - the id of the instance to be deleted
 * @public
 */

exports.registerEntry = registerEntry;
var deleteEntry = (0, _reduxActions.createAction)(_actionTypes["default"].DELETE_ENTRY, function (id) {
  return id;
});
/**
 *
 * Rename an instance in the root reducer, keep its entire state
 *
 * @memberof rootActions
 * @param {string} oldId - ***required** old id
 * @param {string} newId - ***required** new id
 * @public
 */

exports.deleteEntry = deleteEntry;
var renameEntry = (0, _reduxActions.createAction)(_actionTypes["default"].RENAME_ENTRY, function (oldId, newId) {
  return {
    oldId: oldId,
    newId: newId
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Root actions managers adding and removing instances in root reducer.
 * Under-the-hood, when a `KeplerGl` component is mounted or unmounted,
 * it will automatically calls these actions to add itself to the root reducer.
 * However, sometimes the data is ready before the component is registered in the reducer,
 * in this case, you can manually call these actions or the corresponding updater to add it to the reducer.
 *
 * @public
 */

/* eslint-disable no-unused-vars */

exports.renameEntry = renameEntry;
var rootActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2lkZW50aXR5LWFjdGlvbnMuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJFbnRyeSIsIkFjdGlvblR5cGVzIiwiUkVHSVNURVJfRU5UUlkiLCJpZCIsIm1pbnQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImRlbGV0ZUVudHJ5IiwiREVMRVRFX0VOVFJZIiwicmVuYW1lRW50cnkiLCJSRU5BTUVfRU5UUlkiLCJvbGRJZCIsIm5ld0lkIiwicm9vdEFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7Ozs7Ozs7Ozs7Ozs7QUFhTyxJQUFNQSxhQUFhLEdBQUcsZ0NBQzNCQyx3QkFBWUMsY0FEZSxFQUUzQjtBQUFBLE1BQUVDLEVBQUYsUUFBRUEsRUFBRjtBQUFBLE1BQU1DLElBQU4sUUFBTUEsSUFBTjtBQUFBLE1BQVlDLG9CQUFaLFFBQVlBLG9CQUFaO0FBQUEsU0FBdUM7QUFBQ0YsSUFBQUEsRUFBRSxFQUFGQSxFQUFEO0FBQUtDLElBQUFBLElBQUksRUFBSkEsSUFBTDtBQUFXQyxJQUFBQSxvQkFBb0IsRUFBcEJBO0FBQVgsR0FBdkM7QUFBQSxDQUYyQixDQUF0QjtBQUtQOzs7Ozs7Ozs7OztBQVNPLElBQU1DLFdBQVcsR0FBRyxnQ0FDekJMLHdCQUFZTSxZQURhLEVBRXpCLFVBQUFKLEVBQUU7QUFBQSxTQUFJQSxFQUFKO0FBQUEsQ0FGdUIsQ0FBcEI7QUFLUDs7Ozs7Ozs7Ozs7QUFTTyxJQUFNSyxXQUFXLEdBQUcsZ0NBQ3pCUCx3QkFBWVEsWUFEYSxFQUV6QixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxTQUFtQjtBQUFDRCxJQUFBQSxLQUFLLEVBQUxBLEtBQUQ7QUFBUUMsSUFBQUEsS0FBSyxFQUFMQTtBQUFSLEdBQW5CO0FBQUEsQ0FGeUIsQ0FBcEI7QUFLUDs7OztBQUdBOzs7Ozs7Ozs7O0FBU0E7OztBQUNBLElBQU1DLFdBQVcsR0FBRyxJQUFwQjtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ3JlZHV4LWFjdGlvbnMnO1xuaW1wb3J0IEFjdGlvblR5cGVzIGZyb20gJ2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG4vKipcbiAqXG4gKiBBZGQgYSBuZXcga2VwbGVyLmdsIGluc3RhbmNlIGluIGBrZXBsZXJHbFJlZHVjZXJgLiBUaGlzIGFjdGlvbiBpcyBjYWxsZWQgdW5kZXItdGhlLWhvb2Qgd2hlbiBhIGBLZXBsZXJHbGAgY29tcG9uZW50IGlzICoqbW91bnRlZCoqIHRvIHRoZSBkb20uXG4gKiBOb3RlIHRoYXQgaWYgeW91IGRpc3BhdGNoIGFjdGlvbnMgc3VjaCBhcyBhZGRpbmcgZGF0YSB0byBhIGtlcGxlci5nbCBpbnN0YW5jZSBiZWZvcmUgdGhlIFJlYWN0IGNvbXBvbmVudCBpcyBtb3VudGVkLCB0aGUgYWN0aW9uIHdpbGwgbm90IGJlXG4gKiBwZXJmb3JtZWQuIEluc3RhbmNlIHJlZHVjZXIgY2FuIG9ubHkgaGFuZGxlIGFjdGlvbnMgd2hlbiBpdCBpcyBpbnN0YW50aWF0ZWQuXG4gKiBAbWVtYmVyb2Ygcm9vdEFjdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXlsb2FkXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZC5pZCAtICoqKnJlcXVpcmVkKiogVGhlIGlkIG9mIHRoZSBpbnN0YW5jZVxuICogQHBhcmFtIHtib29sZWFufSBwYXlsb2FkLm1pbnQgLSBXaGV0aGVyIHRvIHVzZSBhIGZyZXNoIGVtcHR5IHN0YXRlLCB3aGVuIGBtaW50OiB0cnVlYCBpdCB3aWxsICphbHdheXMqIGxvYWQgYSBmcmVzaCBzdGF0ZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgcmUtbW91bnRlZC5cbiAqIFdoZW4gYG1pbnQ6IGZhbHNlYCBpdCB3aWxsIHJlZ2lzdGVyIHdpdGggZXhpc3RpbmcgaW5zdGFuY2Ugc3RhdGUgdW5kZXIgdGhlIHNhbWUgYGlkYCwgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCB0aGVuIG1vdW50ZWQgYWdhaW4uIERlZmF1bHQ6IGB0cnVlYFxuICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQubWFwYm94QXBpQWNjZXNzVG9rZW4gLSBtYXBib3hBcGlBY2Nlc3NUb2tlbiB0byBiZSBzYXZlZCBpbiBgbWFwLXN0eWxlYCByZWR1Y2VyLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJFbnRyeSA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuUkVHSVNURVJfRU5UUlksXG4gICh7aWQsIG1pbnQsIG1hcGJveEFwaUFjY2Vzc1Rva2VufSkgPT4gKHtpZCwgbWludCwgbWFwYm94QXBpQWNjZXNzVG9rZW59KVxuKTtcblxuLyoqXG4gKlxuICogRGVsZXRlIGFuIGluc3RhbmNlIGZyb20gYGtlcGxlckdsUmVkdWNlcmAuIFRoaXMgYWN0aW9uIGlzIGNhbGxlZCB1bmRlci10aGUtaG9vZCB3aGVuIGEgYEtlcGxlckdsYCBjb21wb25lbnQgaXMgKip1bi1tb3VudGVkKiogdG8gdGhlIGRvbS5cbiAqIElmIGBtaW50YCBpcyBzZXQgdG8gYmUgYHRydWVgIGluIHRoZSBjb21wb25lbnQgcHJvcCwgdGhlIGluc3RhbmNlIHN0YXRlIHdpbGwgYmUgZGVsZXRlZCBmcm9tIHRoZSByb290IHJlZHVjZXIuIE90aGVyd2lzZSwgdGhlIHJvb3QgcmVkdWNlciB3aWxsIGtlZXBcbiAqIHRoZSBpbnN0YW5jZSBzdGF0ZSBhbmQgbGF0ZXIgdHJhbnNmZXIgaXQgdG8gYSBuZXdseSBtb3VudGVkIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIGBpZGBcbiAqIEBtZW1iZXJvZiByb290QWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIGlkIG9mIHRoZSBpbnN0YW5jZSB0byBiZSBkZWxldGVkXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBkZWxldGVFbnRyeSA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuREVMRVRFX0VOVFJZLFxuICBpZCA9PiBpZFxuKTtcblxuLyoqXG4gKlxuICogUmVuYW1lIGFuIGluc3RhbmNlIGluIHRoZSByb290IHJlZHVjZXIsIGtlZXAgaXRzIGVudGlyZSBzdGF0ZVxuICpcbiAqIEBtZW1iZXJvZiByb290QWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9sZElkIC0gKioqcmVxdWlyZWQqKiBvbGQgaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdJZCAtICoqKnJlcXVpcmVkKiogbmV3IGlkXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW5hbWVFbnRyeSA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuUkVOQU1FX0VOVFJZLFxuICAob2xkSWQsIG5ld0lkKSA9PiAoe29sZElkLCBuZXdJZH0pXG4pO1xuXG4vKipcbiAqIFRoaXMgZGVjbGFyYXRpb24gaXMgbmVlZGVkIHRvIGdyb3VwIGFjdGlvbnMgaW4gZG9jc1xuICovXG4vKipcbiAqIFJvb3QgYWN0aW9ucyBtYW5hZ2VycyBhZGRpbmcgYW5kIHJlbW92aW5nIGluc3RhbmNlcyBpbiByb290IHJlZHVjZXIuXG4gKiBVbmRlci10aGUtaG9vZCwgd2hlbiBhIGBLZXBsZXJHbGAgY29tcG9uZW50IGlzIG1vdW50ZWQgb3IgdW5tb3VudGVkLFxuICogaXQgd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGxzIHRoZXNlIGFjdGlvbnMgdG8gYWRkIGl0c2VsZiB0byB0aGUgcm9vdCByZWR1Y2VyLlxuICogSG93ZXZlciwgc29tZXRpbWVzIHRoZSBkYXRhIGlzIHJlYWR5IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgaW4gdGhlIHJlZHVjZXIsXG4gKiBpbiB0aGlzIGNhc2UsIHlvdSBjYW4gbWFudWFsbHkgY2FsbCB0aGVzZSBhY3Rpb25zIG9yIHRoZSBjb3JyZXNwb25kaW5nIHVwZGF0ZXIgdG8gYWRkIGl0IHRvIHRoZSByZWR1Y2VyLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IHJvb3RBY3Rpb25zID0gbnVsbFxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuIl19