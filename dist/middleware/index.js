"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhanceReduxMiddleware = enhanceReduxMiddleware;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _tasks = require("react-palm/tasks");

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
// Extra helpers for redux
// We are exposing this secause react-palm has no UMD module and
// users need taskMiddleware to initiate their redux middle ware

/**
 * This method is used to enhance redux middleware and provide
 * functionality to support react-palm
 * @param middlewares current redux middlewares
 * @returns {*[]} the original list of middlewares plus the react-palm middleware
 */
function enhanceReduxMiddleware() {
  var middlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return [].concat((0, _toConsumableArray2["default"])(middlewares), [_tasks.taskMiddleware]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWRkbGV3YXJlL2luZGV4LmpzIl0sIm5hbWVzIjpbImVuaGFuY2VSZWR1eE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsInRhc2tNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQXVCQTs7QUF2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7Ozs7OztBQU1PLFNBQVNBLHNCQUFULEdBQWtEO0FBQUEsTUFBbEJDLFdBQWtCLHVFQUFKLEVBQUk7QUFDdkQsdURBQ0tBLFdBREwsSUFFRUMscUJBRkY7QUFJRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIEV4dHJhIGhlbHBlcnMgZm9yIHJlZHV4XG4vLyBXZSBhcmUgZXhwb3NpbmcgdGhpcyBzZWNhdXNlIHJlYWN0LXBhbG0gaGFzIG5vIFVNRCBtb2R1bGUgYW5kXG4vLyB1c2VycyBuZWVkIHRhc2tNaWRkbGV3YXJlIHRvIGluaXRpYXRlIHRoZWlyIHJlZHV4IG1pZGRsZSB3YXJlXG5pbXBvcnQge3Rhc2tNaWRkbGV3YXJlfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIGVuaGFuY2UgcmVkdXggbWlkZGxld2FyZSBhbmQgcHJvdmlkZVxuICogZnVuY3Rpb25hbGl0eSB0byBzdXBwb3J0IHJlYWN0LXBhbG1cbiAqIEBwYXJhbSBtaWRkbGV3YXJlcyBjdXJyZW50IHJlZHV4IG1pZGRsZXdhcmVzXG4gKiBAcmV0dXJucyB7KltdfSB0aGUgb3JpZ2luYWwgbGlzdCBvZiBtaWRkbGV3YXJlcyBwbHVzIHRoZSByZWFjdC1wYWxtIG1pZGRsZXdhcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuaGFuY2VSZWR1eE1pZGRsZXdhcmUobWlkZGxld2FyZXMgPSBbXSkge1xuICByZXR1cm4gW1xuICAgIC4uLm1pZGRsZXdhcmVzLFxuICAgIHRhc2tNaWRkbGV3YXJlXG4gIF07XG59XG4iXX0=