"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTileData = getTileData;
exports.decodeTile = decodeTile;
exports.vectorTileFeatureToProp = vectorTileFeatureToProp;

var _pbf = _interopRequireDefault(require("pbf"));

var _vectorTile = require("@mapbox/vector-tile");

var _viewportMercatorProject = require("viewport-mercator-project");

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

/* global fetch */
var TILE_SIZE = 512;
var MAP_SOURCE = 'https://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v7';

function getTileData(token, _ref) {
  var x = _ref.x,
      y = _ref.y,
      z = _ref.z;
  var mapSource = "".concat(MAP_SOURCE, "/").concat(z, "/").concat(x, "/").concat(y, ".vector.pbf?access_token=").concat(token);
  return fetch(mapSource).then(function (response) {
    return response.arrayBuffer();
  }).then(function (buffer) {
    return decodeTile(x, y, z, buffer);
  });
}

function decodeTile(x, y, z, arrayBuffer) {
  var tile = new _vectorTile.VectorTile(new _pbf["default"](arrayBuffer));
  var result = [];
  var xProj = x * TILE_SIZE;
  var yProj = y * TILE_SIZE;
  var scale = Math.pow(2, z);
  var projectFunc = project.bind(null, xProj, yProj, scale);
  /* eslint-disable guard-for-in */

  var layerName = "building";
  var vectorTileLayer = tile.layers[layerName];

  if (!vectorTileLayer) {
    return [];
  }

  for (var i = 0; i < vectorTileLayer.length; i++) {
    var vectorTileFeature = vectorTileLayer.feature(i);
    var features = vectorTileFeatureToProp(vectorTileFeature, projectFunc);
    features.forEach(function (f) {
      f.properties.layer = layerName;

      if (f.properties.height) {
        result.push(f);
      }
    });
  }

  return result;
}

function project(x, y, scale, line, extent) {
  var sizeToPixel = extent / TILE_SIZE;

  for (var ii = 0; ii < line.length; ii++) {
    var p = line[ii]; // LNGLAT

    line[ii] = (0, _viewportMercatorProject.worldToLngLat)([x + p[0] / sizeToPixel, y + p[1] / sizeToPixel], scale);
  }
}
/* adapted from @mapbox/vector-tile/lib/vectortilefeature.js for better perf */

/* eslint-disable */


function vectorTileFeatureToProp(vectorTileFeature, project) {
  var coords = getCoordinates(vectorTileFeature);
  var type = _vectorTile.VectorTileFeature.types[vectorTileFeature.type];
  var extent = vectorTileFeature.extent;
  var i;
  var j;
  coords = classifyRings(coords);

  for (i = 0; i < coords.length; i++) {
    for (j = 0; j < coords[i].length; j++) {
      project(coords[i][j], extent);
    }
  }

  return coords.map(function (coordinates) {
    return {
      coordinates: coordinates,
      properties: vectorTileFeature.properties
    };
  });
}

function getCoordinates(vectorTileFeature) {
  var pbf = vectorTileFeature._pbf;
  pbf.pos = vectorTileFeature._geometry;
  var end = pbf.readVarint() + pbf.pos;
  var cmd = 1;
  var length = 0;
  var x = 0;
  var y = 0;
  var lines = [];
  var line;

  while (pbf.pos < end) {
    if (length <= 0) {
      var cmdLen = pbf.readVarint();
      cmd = cmdLen & 0x7;
      length = cmdLen >> 3;
    }

    length--;

    if (cmd === 1 || cmd === 2) {
      x += pbf.readSVarint();
      y += pbf.readSVarint();

      if (cmd === 1) {
        // moveTo
        if (line) lines.push(line);
        line = [];
      }

      line.push([x, y]);
    } else if (cmd === 7) {
      // Workaround for https://github.com/mapbox/mapnik-vector-tile/issues/90
      if (line) {
        line.push(line[0].slice()); // closePolygon
      }
    } else {
      throw new Error("unknown command ".concat(cmd));
    }
  }

  if (line) lines.push(line);
  return lines;
} // classifies an array of rings into polygons with outer rings and holes


function classifyRings(rings) {
  var len = rings.length;
  if (len <= 1) return [rings];
  var polygons = [];
  var polygon;
  var ccw;

  for (var i = 0; i < len; i++) {
    var area = signedArea(rings[i]);

    if (area === 0) {
      continue;
    }

    if (ccw === undefined) {
      ccw = area < 0;
    }

    if (ccw === area < 0) {
      if (polygon) {
        polygons.push(polygon);
      }

      polygon = [rings[i]];
    } else {
      polygon.push(rings[i]);
    }
  }

  if (polygon) {
    polygons.push(polygon);
  }

  return polygons;
}

function signedArea(ring) {
  var sum = 0;

  for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
    p1 = ring[i];
    p2 = ring[j];
    sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);
  }

  return sum;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzLzNkLWJ1aWxkaW5nLWxheWVyLzNkLWJ1aWxkaW5nLXV0aWxzLmpzIl0sIm5hbWVzIjpbIlRJTEVfU0laRSIsIk1BUF9TT1VSQ0UiLCJnZXRUaWxlRGF0YSIsInRva2VuIiwieCIsInkiLCJ6IiwibWFwU291cmNlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJhcnJheUJ1ZmZlciIsImJ1ZmZlciIsImRlY29kZVRpbGUiLCJ0aWxlIiwiVmVjdG9yVGlsZSIsIlByb3RvYnVmIiwicmVzdWx0IiwieFByb2oiLCJ5UHJvaiIsInNjYWxlIiwiTWF0aCIsInBvdyIsInByb2plY3RGdW5jIiwicHJvamVjdCIsImJpbmQiLCJsYXllck5hbWUiLCJ2ZWN0b3JUaWxlTGF5ZXIiLCJsYXllcnMiLCJpIiwibGVuZ3RoIiwidmVjdG9yVGlsZUZlYXR1cmUiLCJmZWF0dXJlIiwiZmVhdHVyZXMiLCJ2ZWN0b3JUaWxlRmVhdHVyZVRvUHJvcCIsImZvckVhY2giLCJmIiwicHJvcGVydGllcyIsImxheWVyIiwiaGVpZ2h0IiwicHVzaCIsImxpbmUiLCJleHRlbnQiLCJzaXplVG9QaXhlbCIsImlpIiwicCIsImNvb3JkcyIsImdldENvb3JkaW5hdGVzIiwidHlwZSIsIlZlY3RvclRpbGVGZWF0dXJlIiwidHlwZXMiLCJqIiwiY2xhc3NpZnlSaW5ncyIsIm1hcCIsImNvb3JkaW5hdGVzIiwicGJmIiwiX3BiZiIsInBvcyIsIl9nZW9tZXRyeSIsImVuZCIsInJlYWRWYXJpbnQiLCJjbWQiLCJsaW5lcyIsImNtZExlbiIsInJlYWRTVmFyaW50Iiwic2xpY2UiLCJFcnJvciIsInJpbmdzIiwibGVuIiwicG9seWdvbnMiLCJwb2x5Z29uIiwiY2N3IiwiYXJlYSIsInNpZ25lZEFyZWEiLCJ1bmRlZmluZWQiLCJyaW5nIiwic3VtIiwicDEiLCJwMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBdEJB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WEQsUUFBQUEsUUFBUSxDQUFDN0IsSUFBVCxDQUFjOEIsT0FBZDtBQUNEOztBQUNEQSxNQUFBQSxPQUFPLEdBQUcsQ0FBQ0gsS0FBSyxDQUFDdEMsQ0FBRCxDQUFOLENBQVY7QUFDRCxLQUxELE1BS087QUFDTHlDLE1BQUFBLE9BQU8sQ0FBQzlCLElBQVIsQ0FBYTJCLEtBQUssQ0FBQ3RDLENBQUQsQ0FBbEI7QUFDRDtBQUNGOztBQUNELE1BQUl5QyxPQUFKLEVBQWE7QUFDWEQsSUFBQUEsUUFBUSxDQUFDN0IsSUFBVCxDQUFjOEIsT0FBZDtBQUNEOztBQUVELFNBQU9ELFFBQVA7QUFDRDs7QUFFRCxTQUFTSSxVQUFULENBQW9CRSxJQUFwQixFQUEwQjtBQUN4QixNQUFJQyxHQUFHLEdBQUcsQ0FBVjs7QUFDQSxPQUFLLElBQUkvQyxDQUFDLEdBQUcsQ0FBUixFQUFXdUMsR0FBRyxHQUFHTyxJQUFJLENBQUM3QyxNQUF0QixFQUE4QnFCLENBQUMsR0FBR2lCLEdBQUcsR0FBRyxDQUF4QyxFQUEyQ1MsRUFBM0MsRUFBK0NDLEVBQXBELEVBQXdEakQsQ0FBQyxHQUFHdUMsR0FBNUQsRUFBaUVqQixDQUFDLEdBQUd0QixDQUFDLEVBQXRFLEVBQTBFO0FBQ3hFZ0QsSUFBQUEsRUFBRSxHQUFHRixJQUFJLENBQUM5QyxDQUFELENBQVQ7QUFDQWlELElBQUFBLEVBQUUsR0FBR0gsSUFBSSxDQUFDeEIsQ0FBRCxDQUFUO0FBQ0F5QixJQUFBQSxHQUFHLElBQUksQ0FBQ0UsRUFBRSxDQUFDLENBQUQsQ0FBRixHQUFRRCxFQUFFLENBQUMsQ0FBRCxDQUFYLEtBQW1CQSxFQUFFLENBQUMsQ0FBRCxDQUFGLEdBQVFDLEVBQUUsQ0FBQyxDQUFELENBQTdCLENBQVA7QUFDRDs7QUFDRCxTQUFPRixHQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUHJvdG9idWYgZnJvbSAncGJmJztcbmltcG9ydCB7VmVjdG9yVGlsZSwgVmVjdG9yVGlsZUZlYXR1cmV9IGZyb20gJ0BtYXBib3gvdmVjdG9yLXRpbGUnO1xuaW1wb3J0IHt3b3JsZFRvTG5nTGF0fSBmcm9tICd2aWV3cG9ydC1tZXJjYXRvci1wcm9qZWN0JztcblxuLyogZ2xvYmFsIGZldGNoICovXG5jb25zdCBUSUxFX1NJWkUgPSA1MTI7XG5jb25zdCBNQVBfU09VUkNFID0gJ2h0dHBzOi8vYS50aWxlcy5tYXBib3guY29tL3Y0L21hcGJveC5tYXBib3gtc3RyZWV0cy12Nyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaWxlRGF0YSh0b2tlbiwge3gsIHksIHp9KSB7XG4gIGNvbnN0IG1hcFNvdXJjZSA9IGAke01BUF9TT1VSQ0V9LyR7en0vJHt4fS8ke3l9LnZlY3Rvci5wYmY/YWNjZXNzX3Rva2VuPSR7dG9rZW59YDtcblxuICByZXR1cm4gZmV0Y2gobWFwU291cmNlKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpXG4gICAgLnRoZW4oYnVmZmVyID0+IGRlY29kZVRpbGUoeCwgeSwgeiwgYnVmZmVyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVUaWxlKHgsIHksIHosIGFycmF5QnVmZmVyKSB7XG4gIGNvbnN0IHRpbGUgPSBuZXcgVmVjdG9yVGlsZShuZXcgUHJvdG9idWYoYXJyYXlCdWZmZXIpKTtcblxuICBjb25zdCByZXN1bHQgPSBbXTtcbiAgY29uc3QgeFByb2ogPSB4ICogVElMRV9TSVpFO1xuICBjb25zdCB5UHJvaiA9IHkgKiBUSUxFX1NJWkU7XG4gIGNvbnN0IHNjYWxlID0gTWF0aC5wb3coMiwgeik7XG5cbiAgY29uc3QgcHJvamVjdEZ1bmMgPSBwcm9qZWN0LmJpbmQobnVsbCwgeFByb2osIHlQcm9qLCBzY2FsZSk7XG5cbiAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG4gIGNvbnN0IGxheWVyTmFtZSA9IFwiYnVpbGRpbmdcIjtcbiAgY29uc3QgdmVjdG9yVGlsZUxheWVyID0gdGlsZS5sYXllcnNbbGF5ZXJOYW1lXTtcbiAgaWYgKCF2ZWN0b3JUaWxlTGF5ZXIpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2ZWN0b3JUaWxlTGF5ZXIubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB2ZWN0b3JUaWxlRmVhdHVyZSA9IHZlY3RvclRpbGVMYXllci5mZWF0dXJlKGkpO1xuICAgIGNvbnN0IGZlYXR1cmVzID0gdmVjdG9yVGlsZUZlYXR1cmVUb1Byb3AodmVjdG9yVGlsZUZlYXR1cmUsIHByb2plY3RGdW5jKTtcbiAgICBmZWF0dXJlcy5mb3JFYWNoKGYgPT4ge1xuICAgICAgZi5wcm9wZXJ0aWVzLmxheWVyID0gbGF5ZXJOYW1lO1xuICAgICAgaWYgKGYucHJvcGVydGllcy5oZWlnaHQpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcHJvamVjdCh4LCB5LCBzY2FsZSwgbGluZSwgZXh0ZW50KSB7XG4gIGNvbnN0IHNpemVUb1BpeGVsID0gZXh0ZW50IC8gVElMRV9TSVpFO1xuXG4gIGZvciAobGV0IGlpID0gMDsgaWkgPCBsaW5lLmxlbmd0aDsgaWkrKykge1xuICAgIGNvbnN0IHAgPSBsaW5lW2lpXTtcbiAgICAvLyBMTkdMQVRcbiAgICBsaW5lW2lpXSA9IHdvcmxkVG9MbmdMYXQoW3ggKyBwWzBdIC8gc2l6ZVRvUGl4ZWwsIHkgKyBwWzFdIC8gc2l6ZVRvUGl4ZWxdLCBzY2FsZSk7XG4gIH1cbn1cblxuLyogYWRhcHRlZCBmcm9tIEBtYXBib3gvdmVjdG9yLXRpbGUvbGliL3ZlY3RvcnRpbGVmZWF0dXJlLmpzIGZvciBiZXR0ZXIgcGVyZiAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBmdW5jdGlvbiB2ZWN0b3JUaWxlRmVhdHVyZVRvUHJvcCh2ZWN0b3JUaWxlRmVhdHVyZSwgcHJvamVjdCkge1xuICBsZXQgY29vcmRzID0gZ2V0Q29vcmRpbmF0ZXModmVjdG9yVGlsZUZlYXR1cmUpO1xuICBjb25zdCB0eXBlID0gVmVjdG9yVGlsZUZlYXR1cmUudHlwZXNbdmVjdG9yVGlsZUZlYXR1cmUudHlwZV07XG4gIGNvbnN0IGV4dGVudCA9IHZlY3RvclRpbGVGZWF0dXJlLmV4dGVudDtcbiAgbGV0IGk7XG4gIGxldCBqO1xuXG4gIGNvb3JkcyA9IGNsYXNzaWZ5UmluZ3MoY29vcmRzKTtcbiAgZm9yIChpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAoaiA9IDA7IGogPCBjb29yZHNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgIHByb2plY3QoY29vcmRzW2ldW2pdLCBleHRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZHMubWFwKGNvb3JkaW5hdGVzID0+ICh7XG4gICAgY29vcmRpbmF0ZXMsXG4gICAgcHJvcGVydGllczogdmVjdG9yVGlsZUZlYXR1cmUucHJvcGVydGllc1xuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKHZlY3RvclRpbGVGZWF0dXJlKSB7XG4gIGNvbnN0IHBiZiA9IHZlY3RvclRpbGVGZWF0dXJlLl9wYmY7XG4gIHBiZi5wb3MgPSB2ZWN0b3JUaWxlRmVhdHVyZS5fZ2VvbWV0cnk7XG5cbiAgY29uc3QgZW5kID0gcGJmLnJlYWRWYXJpbnQoKSArIHBiZi5wb3M7XG4gIGxldCBjbWQgPSAxO1xuICBsZXQgbGVuZ3RoID0gMDtcbiAgbGV0IHggPSAwO1xuICBsZXQgeSA9IDA7XG5cbiAgY29uc3QgbGluZXMgPSBbXTtcbiAgbGV0IGxpbmU7XG5cbiAgd2hpbGUgKHBiZi5wb3MgPCBlbmQpIHtcbiAgICBpZiAobGVuZ3RoIDw9IDApIHtcbiAgICAgIGNvbnN0IGNtZExlbiA9IHBiZi5yZWFkVmFyaW50KCk7XG4gICAgICBjbWQgPSBjbWRMZW4gJiAweDc7XG4gICAgICBsZW5ndGggPSBjbWRMZW4gPj4gMztcbiAgICB9XG5cbiAgICBsZW5ndGgtLTtcblxuICAgIGlmIChjbWQgPT09IDEgfHwgY21kID09PSAyKSB7XG4gICAgICB4ICs9IHBiZi5yZWFkU1ZhcmludCgpO1xuICAgICAgeSArPSBwYmYucmVhZFNWYXJpbnQoKTtcblxuICAgICAgaWYgKGNtZCA9PT0gMSkge1xuICAgICAgICAvLyBtb3ZlVG9cbiAgICAgICAgaWYgKGxpbmUpIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgIGxpbmUgPSBbXTtcbiAgICAgIH1cblxuICAgICAgbGluZS5wdXNoKFt4LCB5XSk7XG4gICAgfSBlbHNlIGlmIChjbWQgPT09IDcpIHtcbiAgICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXBib3gvbWFwbmlrLXZlY3Rvci10aWxlL2lzc3Vlcy85MFxuICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgbGluZS5wdXNoKGxpbmVbMF0uc2xpY2UoKSk7IC8vIGNsb3NlUG9seWdvblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gY29tbWFuZCAke2NtZH1gKTtcbiAgICB9XG4gIH1cblxuICBpZiAobGluZSkgbGluZXMucHVzaChsaW5lKTtcblxuICByZXR1cm4gbGluZXM7XG59XG5cbi8vIGNsYXNzaWZpZXMgYW4gYXJyYXkgb2YgcmluZ3MgaW50byBwb2x5Z29ucyB3aXRoIG91dGVyIHJpbmdzIGFuZCBob2xlc1xuXG5mdW5jdGlvbiBjbGFzc2lmeVJpbmdzKHJpbmdzKSB7XG4gIGNvbnN0IGxlbiA9IHJpbmdzLmxlbmd0aDtcblxuICBpZiAobGVuIDw9IDEpIHJldHVybiBbcmluZ3NdO1xuXG4gIGNvbnN0IHBvbHlnb25zID0gW107XG4gIGxldCBwb2x5Z29uO1xuICBsZXQgY2N3O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBhcmVhID0gc2lnbmVkQXJlYShyaW5nc1tpXSk7XG4gICAgaWYgKGFyZWEgPT09IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjY3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY2N3ID0gYXJlYSA8IDA7XG4gICAgfVxuXG4gICAgaWYgKGNjdyA9PT0gYXJlYSA8IDApIHtcbiAgICAgIGlmIChwb2x5Z29uKSB7XG4gICAgICAgIHBvbHlnb25zLnB1c2gocG9seWdvbik7XG4gICAgICB9XG4gICAgICBwb2x5Z29uID0gW3JpbmdzW2ldXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9seWdvbi5wdXNoKHJpbmdzW2ldKTtcbiAgICB9XG4gIH1cbiAgaWYgKHBvbHlnb24pIHtcbiAgICBwb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuICB9XG5cbiAgcmV0dXJuIHBvbHlnb25zO1xufVxuXG5mdW5jdGlvbiBzaWduZWRBcmVhKHJpbmcpIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSByaW5nLmxlbmd0aCwgaiA9IGxlbiAtIDEsIHAxLCBwMjsgaSA8IGxlbjsgaiA9IGkrKykge1xuICAgIHAxID0gcmluZ1tpXTtcbiAgICBwMiA9IHJpbmdbal07XG4gICAgc3VtICs9IChwMlswXSAtIHAxWzBdKSAqIChwMVsxXSArIHAyWzFdKTtcbiAgfVxuICByZXR1cm4gc3VtO1xufVxuIl19