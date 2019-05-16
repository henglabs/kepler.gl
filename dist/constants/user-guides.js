"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAPBOX_ACCESS_TOKEN = exports.GITHUB_ADD_DATA_TO_MAP = exports.GITHUB_EXPORT_HTML_MAP = void 0;
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
var GITHUB_EXPORT_HTML_MAP = 'https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/k-save-and-export.md#2save-and-export-current-map';
exports.GITHUB_EXPORT_HTML_MAP = GITHUB_EXPORT_HTML_MAP;
var GITHUB_ADD_DATA_TO_MAP = 'https://github.com/keplergl/kepler.gl/blob/master/docs/api-reference/actions/actions.md#adddatatomap';
exports.GITHUB_ADD_DATA_TO_MAP = GITHUB_ADD_DATA_TO_MAP;
var MAPBOX_ACCESS_TOKEN = 'https://docs.mapbox.com/help/how-mapbox-works/access-tokens/';
exports.MAPBOX_ACCESS_TOKEN = MAPBOX_ACCESS_TOKEN;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvdXNlci1ndWlkZXMuanMiXSwibmFtZXMiOlsiR0lUSFVCX0VYUE9SVF9IVE1MX01BUCIsIkdJVEhVQl9BRERfREFUQV9UT19NQVAiLCJNQVBCT1hfQUNDRVNTX1RPS0VOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLHNCQUFzQixHQUFHLHNIQUEvQjs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxzR0FBL0I7O0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsOERBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuZXhwb3J0IGNvbnN0IEdJVEhVQl9FWFBPUlRfSFRNTF9NQVAgPSAnaHR0cHM6Ly9naXRodWIuY29tL2tlcGxlcmdsL2tlcGxlci5nbC9ibG9iL21hc3Rlci9kb2NzL3VzZXItZ3VpZGVzL2stc2F2ZS1hbmQtZXhwb3J0Lm1kIzJzYXZlLWFuZC1leHBvcnQtY3VycmVudC1tYXAnO1xuZXhwb3J0IGNvbnN0IEdJVEhVQl9BRERfREFUQV9UT19NQVAgPSAnaHR0cHM6Ly9naXRodWIuY29tL2tlcGxlcmdsL2tlcGxlci5nbC9ibG9iL21hc3Rlci9kb2NzL2FwaS1yZWZlcmVuY2UvYWN0aW9ucy9hY3Rpb25zLm1kI2FkZGRhdGF0b21hcCc7XG5leHBvcnQgY29uc3QgTUFQQk9YX0FDQ0VTU19UT0tFTiA9ICdodHRwczovL2RvY3MubWFwYm94LmNvbS9oZWxwL2hvdy1tYXBib3gtd29ya3MvYWNjZXNzLXRva2Vucy8nO1xuIl19