"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFileHandler = getFileHandler;
exports.getFileType = getFileType;
exports.loadCsv = loadCsv;
exports.isKeplerGlMap = isKeplerGlMap;
exports.determineJsonProcess = determineJsonProcess;
exports.loadJSON = loadJSON;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _window = require("global/window");

var _dataProcessor = require("./data-processor");

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
var FILE_HANDLERS = {
  csv: loadCsv,
  json: loadJSON
};

function getFileHandler(fileBlob) {
  var type = getFileType(fileBlob.name);
  return FILE_HANDLERS[type];
}

function getFileType(filename) {
  if (filename.endsWith('csv')) {
    return 'csv';
  } else if (filename.endsWith('json') || filename.endsWith('geojson')) {
    // Read GeoJson from browser
    return 'json';
  } // Wait to add other file type handler


  return 'other';
}

function readCSVFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();

    fileReader.onload = function (_ref) {
      var result = _ref.target.result;
      resolve(result);
    };

    fileReader.readAsText(fileBlob);
  });
}

function loadCsv(fileBlob) {
  var processor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataProcessor.processCsvData;
  return readCSVFile(fileBlob).then(function (rawData) {
    return rawData ? processor(rawData) : null;
  });
}

function readJSONFile(fileBlob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new _window.FileReader();

    fileReader.onload = function (_ref2) {
      var result = _ref2.target.result;

      try {
        var json = JSON.parse(result);
        resolve(json);
      } catch (err) {
        resolve(null);
      }
    };

    fileReader.readAsText(fileBlob);
  });
}

function isKeplerGlMap(json) {
  return (0, _typeof2["default"])(json) === 'object' && json.datasets && json.config && json.info && json.info.app === 'kepler.gl';
}

function determineJsonProcess(jsonData, defaultProcessor) {
  if (isKeplerGlMap(jsonData)) {
    return _dataProcessor.processKeplerglJSON;
  }

  return defaultProcessor;
}

function loadJSON(fileBlob) {
  var processor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dataProcessor.processGeojson;
  return readJSONFile(fileBlob).then(function (rawData) {
    return rawData ? determineJsonProcess(rawData, processor)(rawData) : null;
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzb3JzL2ZpbGUtaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJGSUxFX0hBTkRMRVJTIiwiY3N2IiwibG9hZENzdiIsImpzb24iLCJsb2FkSlNPTiIsImdldEZpbGVIYW5kbGVyIiwiZmlsZUJsb2IiLCJ0eXBlIiwiZ2V0RmlsZVR5cGUiLCJuYW1lIiwiZmlsZW5hbWUiLCJlbmRzV2l0aCIsInJlYWRDU1ZGaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsInJlc3VsdCIsInRhcmdldCIsInJlYWRBc1RleHQiLCJwcm9jZXNzb3IiLCJwcm9jZXNzQ3N2RGF0YSIsInRoZW4iLCJyYXdEYXRhIiwicmVhZEpTT05GaWxlIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwiaXNLZXBsZXJHbE1hcCIsImRhdGFzZXRzIiwiY29uZmlnIiwiaW5mbyIsImFwcCIsImRldGVybWluZUpzb25Qcm9jZXNzIiwianNvbkRhdGEiLCJkZWZhdWx0UHJvY2Vzc29yIiwicHJvY2Vzc0tlcGxlcmdsSlNPTiIsInByb2Nlc3NHZW9qc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLGFBQWEsR0FBRztBQUNwQkMsRUFBQUEsR0FBRyxFQUFFQyxPQURlO0FBRXBCQyxFQUFBQSxJQUFJLEVBQUVDO0FBRmMsQ0FBdEI7O0FBS08sU0FBU0MsY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0M7QUFDdkMsTUFBTUMsSUFBSSxHQUFHQyxXQUFXLENBQUNGLFFBQVEsQ0FBQ0csSUFBVixDQUF4QjtBQUNBLFNBQU9ULGFBQWEsQ0FBQ08sSUFBRCxDQUFwQjtBQUNEOztBQUVNLFNBQVNDLFdB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QUlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtGaWxlUmVhZGVyfSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7cHJvY2Vzc0NzdkRhdGEsIHByb2Nlc3NHZW9qc29uLCBwcm9jZXNzS2VwbGVyZ2xKU09OfSBmcm9tICcuL2RhdGEtcHJvY2Vzc29yJztcblxuY29uc3QgRklMRV9IQU5ETEVSUyA9IHtcbiAgY3N2OiBsb2FkQ3N2LFxuICBqc29uOiBsb2FkSlNPTlxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVIYW5kbGVyKGZpbGVCbG9iKSB7XG4gIGNvbnN0IHR5cGUgPSBnZXRGaWxlVHlwZShmaWxlQmxvYi5uYW1lKTtcbiAgcmV0dXJuIEZJTEVfSEFORExFUlNbdHlwZV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlVHlwZShmaWxlbmFtZSkge1xuICBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoJ2NzdicpKSB7XG4gICAgcmV0dXJuICdjc3YnO1xuICB9XG5cbiAgZWxzZSBpZiAoZmlsZW5hbWUuZW5kc1dpdGgoJ2pzb24nKSB8fCBmaWxlbmFtZS5lbmRzV2l0aCgnZ2VvanNvbicpKSB7XG4gICAgLy8gUmVhZCBHZW9Kc29uIGZyb20gYnJvd3NlclxuICAgIHJldHVybiAnanNvbic7XG4gIH1cblxuICAvLyBXYWl0IHRvIGFkZCBvdGhlciBmaWxlIHR5cGUgaGFuZGxlclxuICByZXR1cm4gJ290aGVyJztcbn1cblxuZnVuY3Rpb24gcmVhZENTVkZpbGUoZmlsZUJsb2IpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBmaWxlUmVhZGVyLm9ubG9hZCA9ICh7dGFyZ2V0OiB7cmVzdWx0fX0pID0+IHtcbiAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICB9O1xuXG4gICAgZmlsZVJlYWRlci5yZWFkQXNUZXh0KGZpbGVCbG9iKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ3N2KGZpbGVCbG9iLCBwcm9jZXNzb3IgPSBwcm9jZXNzQ3N2RGF0YSkge1xuICByZXR1cm4gcmVhZENTVkZpbGUoZmlsZUJsb2IpLnRoZW4oXG4gICAgcmF3RGF0YSA9PiAocmF3RGF0YSA/IHByb2Nlc3NvcihyYXdEYXRhKSA6IG51bGwpXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlYWRKU09ORmlsZShmaWxlQmxvYikge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGZpbGVSZWFkZXIub25sb2FkID0gKHt0YXJnZXQ6IHtyZXN1bHR9fSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaWxlUmVhZGVyLnJlYWRBc1RleHQoZmlsZUJsb2IpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzS2VwbGVyR2xNYXAoanNvbikge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiBqc29uID09PSAnb2JqZWN0JyAmJlxuICAgIGpzb24uZGF0YXNldHMgJiZcbiAgICBqc29uLmNvbmZpZyAmJlxuICAgIGpzb24uaW5mbyAmJlxuICAgIGpzb24uaW5mby5hcHAgPT09ICdrZXBsZXIuZ2wnXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVKc29uUHJvY2Vzcyhqc29uRGF0YSwgZGVmYXVsdFByb2Nlc3Nvcikge1xuICBpZiAoaXNLZXBsZXJHbE1hcChqc29uRGF0YSkpIHtcbiAgICByZXR1cm4gcHJvY2Vzc0tlcGxlcmdsSlNPTjtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvY2Vzc29yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZEpTT04oZmlsZUJsb2IsIHByb2Nlc3NvciA9IHByb2Nlc3NHZW9qc29uKSB7XG4gIHJldHVybiByZWFkSlNPTkZpbGUoZmlsZUJsb2IpLnRoZW4oXG4gICAgcmF3RGF0YSA9PlxuICAgICAgcmF3RGF0YSA/IGRldGVybWluZUpzb25Qcm9jZXNzKHJhd0RhdGEsIHByb2Nlc3NvcikocmF3RGF0YSkgOiBudWxsXG4gICk7XG59XG4iXX0=