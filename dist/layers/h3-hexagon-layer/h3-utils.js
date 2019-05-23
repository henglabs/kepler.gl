"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVertices = getVertices;
exports.getCentroid = getCentroid;
exports.idToPolygonGeo = idToPolygonGeo;
exports.getCenterHex = getCenterHex;
exports.getH3VerticeTransform = getH3VerticeTransform;
exports.distortCylinderPositions = distortCylinderPositions;
exports.getRadius = getRadius;
exports.getAngle = getAngle;
Object.defineProperty(exports, "h3GetResolution", {
  enumerable: true,
  get: function get() {
    return _h3Js.h3GetResolution;
  }
});

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _h3Js = require("h3-js");

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
// get vertices should return [lon, lat]
function getVertices(_ref) {
  var id = _ref.id;
  // always reverse it
  return (0, _h3Js.h3ToGeoBoundary)(id, true);
} // get centroid should return [lon, lat]


function getCentroid(_ref2) {
  var id = _ref2.id;
  // always reverse it to [lng, lat]
  return (0, _h3Js.h3ToGeo)(id).reverse();
}

function idToPolygonGeo(_ref3, properties) {
  var object = _ref3.object;

  if (!object || !object.id) {
    return null;
  }

  var vertices = getVertices(object);
  return {
    geometry: {
      coordinates: vertices,
      type: 'LineString'
    },
    properties: properties
  };
}

function getCenterHex(_ref4, resolution) {
  var latitude = _ref4.latitude,
      longitude = _ref4.longitude;
  return (0, _h3Js.geoToH3)(latitude, longitude, resolution);
} // H3 hexagon are not perfect hexagon after projection, they are slightly distorted
// Here we calculate the distortion from perfect hexagon to h3 hexagon
// A mathematica proof can be found at
// https://beta.observablehq.com/@heshan0131/h3-hexagon-shape-normalize


function getH3VerticeTransform(rawVertices, centroid) {
  var vertices = revertVertices(rawVertices.map(function (vt) {
    return offset(vt, centroid);
  }));
  var radius = getRadius(vertices[0], vertices[3]);
  var angle = getAngle(vertices[0], vertices[3]); // rotate hexagon vertices, so that v0 - v3 axis parallel with xAxis
  //   2___1
  // 3 /   \ 0
  //   \___/
  //   4   5
  //

  var rotatedVertices = vertices.map(function (vt) {
    return rotate([0, 0], vt, angle);
  }); // vertices of a perfect hexagon

  var normalVertices = getHexagonVertices(radius); // calculate distortion

  return getDistortions(rotatedVertices, normalVertices);
} // Vertices index based on
// https://github.com/uber/luma.gl/blob/master/modules/core/src/geometry/truncated-cone-geometry.js


function distortCylinderPositions(positions, distortions) {
  var primitives = distortions.map(function (_ref5, i) {
    var dr = _ref5.dr,
        da = _ref5.da;
    return getPtOnCircle(dr, da + Math.PI * i / 3);
  }); // close it

  primitives.push(primitives[0]); // starting from the 8th vertice, repeat 4 times, only replace x(0), y(1)

  return positions.map(function (v, i) {
    if (i > 20 && i < 21 * 5 && i % 3 < 2) {
      var row = Math.floor(i / 3);
      var col = i % 3;
      return primitives[row % 7][col];
    }

    return v;
  });
}

function offset(_ref6, _ref7) {
  var _ref8 = (0, _slicedToArray2["default"])(_ref6, 2),
      px = _ref8[0],
      py = _ref8[1];

  var _ref9 = (0, _slicedToArray2["default"])(_ref7, 2),
      x0 = _ref9[0],
      y0 = _ref9[1];

  return [[px - x0], [py - y0]];
}

function rotate(_ref10, _ref11, radians) {
  var _ref12 = (0, _slicedToArray2["default"])(_ref10, 2),
      cx = _ref12[0],
      cy = _ref12[1];

  var _ref13 = (0, _slicedToArray2["default"])(_ref11, 2),
      x = _ref13[0],
      y = _ref13[1];

  var cos = Math.cos(radians);
  var sin = Math.sin(radians);
  var nx = cos * (x - cx) + sin * (y - cy) + cx;
  var ny = cos * (y - cy) - sin * (x - cx) + cy;
  return [nx, ny];
}

function getDistance(pt0, pt1) {
  var dx = pt0[0] - pt1[0];
  var dy = pt0[1] - pt1[1];
  var dxy = Math.sqrt(dx * dx + dy * dy);
  return dxy;
}

function getRadius(pt0, pt3) {
  var dxy = getDistance(pt0, pt3);
  return dxy / 2;
}

function getAngle(pt0, pt3) {
  var dx = pt0[0] - pt3[0];
  var dy = pt0[1] - pt3[1];
  var dxy = Math.sqrt(dx * dx + dy * dy); // Calculate angle that the perpendicular hexagon vertex axis is tilted

  var angle = Math.acos(dx / dxy) * Math.sign(dy);
  return angle;
}

function getPtOnCircle(radius, angle) {
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
}

function getHexagonVertices(r) {
  var ang60 = Math.PI / 3;
  var pts = [];

  for (var i = 0; i < 6; i++) {
    pts.push(getPtOnCircle(r, ang60 * i));
  }

  return pts;
}

function revertVertices(verts) {
  // reverting verts from clock (h3) to counter clock wise (luma cylinder)
  var seq = [0, 5, 4, 3, 2, 1];
  return seq.map(function (s) {
    return verts[s];
  });
}

function getDistortions(vts, origs) {
  // 0 and 3 should be the guide
  var ct = [0, 0];
  var distortions = [];

  for (var i = 0; i < 6; i++) {
    var vt = vts[i];
    var org = origs[i];
    var r = getRadius(org, ct);
    var dr = getRadius(vt, ct) / r;
    var da = Math.atan2(vt[1], vt[0]) - Math.atan2(org[1], org[0]);
    distortions.push({
      dr: dr,
      da: da
    });
  }

  return distortions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaDMtaGV4YWdvbi1sYXllci9oMy11dGlscy5qcyJdLCJuYW1lcyI6WyJnZXRWZXJ0aWNlcyIsImlkIiwiZ2V0Q2VudHJvaWQiLCJyZXZlcnNlIiwiaWRUb1BvbHlnb25HZW8iLCJwcm9wZXJ0aWVzIiwib2JqZWN0IiwidmVydGljZXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwidHlwZSIsImdldENlbnRlckhleCIsInJlc29sdXRpb24iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImdldEgzVmVydGljZVRyYW5zZm9ybSIsInJhd1ZlcnRpY2VzIiwiY2VudHJvaWQiLCJyZXZlcnRWZXJ0aWNlcyIsIm1hcCIsInZ0Iiwib2Zmc2V0IiwicmFkaXVzIiwiZ2V0UmFkaXVzIiwiYW5nbGUiLCJnZXRBbmdsZSIsInJvdGF0ZWRWZXJ0aWNlcyIsInJvdGF0ZSIsIm5vcm1hbFZlcnRpY2VzIiwiZ2V0SGV4YWdvblZlcnRpY2VzIiwiZ2V0RGlzdG9ydGlvbnMiLCJkaXN0b3J0Q3lsaW5kZXJQb3NpdGlvbnMiLCJwb3NpdGlvbnMiLCJkaXN0b3J0aW9ucyIsInByaW1pdGl2ZXMiLCJpIiwiZHIiLCJkYSIsImdldFB0T25DaXJjbGUiLCJNYXRoIiwiUEkiLCJwdXNoIiwidiIsInJvdyIsImZsb29yIiwiY29sIiwicHgiLCJweSIsIngwIiwieTAiLCJyYWRpYW5zIiwiY3giLCJjeSIsIngiLCJ5IiwiY29zIiwic2luIiwibngiLCJueSIsImdldERpc3RhbmNlIiwicHQwIiwicHQxIiwiZHgiLCJkeSIsImR4eSIsInNxcnQiLCJwdDMiLCJhY29zIiwic2lnbiIsInIiLCJhbmc2MCIsInB0cyIsInZlcnRzIiwic2VxIiwicyIsInZ0cyIsIm9yaWdzIiwiY3QiLCJvcmciLCJhdGFuMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFYO0FBQ0EsTUFBTTVDLFdBQVcsR0FBRyxFQUFwQjs7QUFFQSxPQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUIsUUFBTWYsRUFBRSxHQUFHdUQsR0FBRyxDQUFDeEMsQ0FBRCxDQUFkO0FBQ0EsUUFBTTJDLEdBQUcsR0FBR0YsS0FBSyxDQUFDekMsQ0FBRCxDQUFqQjtBQUVBLFFBQU1rQyxDQUFDLEdBQUc5QyxTQUFTLENBQUN1RCxHQUFELEVBQU1ELEVBQU4sQ0FBbkI7QUFDQSxRQUFNekMsRUFBRSxHQUFHYixTQUFTLENBQUNILEVBQUQsRUFBS3lELEVBQUwsQ0FBVCxHQUFvQlIsQ0FBL0I7QUFFQSxRQUFNaEMsRUFBRSxHQUFHRSxJQUFJLENBQUN3QyxLQUFMLENBQVczRCxFQUFFLENBQUMsQ0FBRCxDQUFiLEVBQWtCQSxFQUFFLENBQUMsQ0FBRCxDQUFwQixJQUEyQm1CLElBQUksQ0FBQ3dDLEtBQUwsQ0FBV0QsR0FBRyxDQUFDLENBQUQsQ0FBZCxFQUFtQkEsR0FBRyxDQUFDLENBQUQsQ0FBdEIsQ0FBdEM7QUFFQTdDLElBQUFBLFdBQVcsQ0FBQ1EsSUFBWixDQUFpQjtBQUFDTCxNQUFBQSxFQUFFLEVBQUZBLEVBQUQ7QUFBS0MsTUFBQUEsRUFBRSxFQUFGQTtBQUFMLEtBQWpCO0FBQ0Q7O0FBRUQsU0FBT0osV0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtoM0dldFJlc29sdXRpb24sIGgzVG9HZW8sIGgzVG9HZW9Cb3VuZGFyeSwgZ2VvVG9IM30gZnJvbSAnaDMtanMnO1xuZXhwb3J0IHtoM0dldFJlc29sdXRpb259O1xuXG4vLyBnZXQgdmVydGljZXMgc2hvdWxkIHJldHVybiBbbG9uLCBsYXRdXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmVydGljZXMoe2lkfSkge1xuICAvLyBhbHdheXMgcmV2ZXJzZSBpdFxuICByZXR1cm4gaDNUb0dlb0JvdW5kYXJ5KGlkLCB0cnVlKTtcbn1cblxuLy8gZ2V0IGNlbnRyb2lkIHNob3VsZCByZXR1cm4gW2xvbiwgbGF0XVxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbnRyb2lkKHtpZH0pIHtcbiAgLy8gYWx3YXlzIHJldmVyc2UgaXQgdG8gW2xuZywgbGF0XVxuICByZXR1cm4gaDNUb0dlbyhpZCkucmV2ZXJzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWRUb1BvbHlnb25HZW8oe29iamVjdH0sIHByb3BlcnRpZXMpIHtcbiAgaWYgKCFvYmplY3QgfHwgIW9iamVjdC5pZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgdmVydGljZXMgPSBnZXRWZXJ0aWNlcyhvYmplY3QpO1xuXG4gIHJldHVybiB7XG4gICAgZ2VvbWV0cnk6IHtcbiAgICAgIGNvb3JkaW5hdGVzOiB2ZXJ0aWNlcyxcbiAgICAgIHR5cGU6ICdMaW5lU3RyaW5nJ1xuICAgIH0sXG4gICAgcHJvcGVydGllc1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VudGVySGV4KHtsYXRpdHVkZSwgbG9uZ2l0dWRlfSwgcmVzb2x1dGlvbikge1xuICByZXR1cm4gZ2VvVG9IMyhsYXRpdHVkZSwgbG9uZ2l0dWRlLCByZXNvbHV0aW9uKTtcbn1cblxuLy8gSDMgaGV4YWdvbiBhcmUgbm90IHBlcmZlY3QgaGV4YWdvbiBhZnRlciBwcm9qZWN0aW9uLCB0aGV5IGFyZSBzbGlnaHRseSBkaXN0b3J0ZWRcbi8vIEhlcmUgd2UgY2FsY3VsYXRlIHRoZSBkaXN0b3J0aW9uIGZyb20gcGVyZmVjdCBoZXhhZ29uIHRvIGgzIGhleGFnb25cbi8vIEEgbWF0aGVtYXRpY2EgcHJvb2YgY2FuIGJlIGZvdW5kIGF0XG4vLyBodHRwczovL2JldGEub2JzZXJ2YWJsZWhxLmNvbS9AaGVzaGFuMDEzMS9oMy1oZXhhZ29uLXNoYXBlLW5vcm1hbGl6ZVxuZXhwb3J0IGZ1bmN0aW9uIGdldEgzVmVydGljZVRyYW5zZm9ybShyYXdWZXJ0aWNlcywgY2VudHJvaWQpIHtcbiAgY29uc3QgdmVydGljZXMgPSByZXZlcnRWZXJ0aWNlcyhyYXdWZXJ0aWNlcy5tYXAodnQgPT4gb2Zmc2V0KHZ0LCBjZW50cm9pZCkpKTtcbiAgY29uc3QgcmFkaXVzID0gZ2V0UmFkaXVzKHZlcnRpY2VzWzBdLCB2ZXJ0aWNlc1szXSk7XG5cbiAgY29uc3QgYW5nbGUgPSBnZXRBbmdsZSh2ZXJ0aWNlc1swXSwgdmVydGljZXNbM10pXG5cbiAgLy8gcm90YXRlIGhleGFnb24gdmVydGljZXMsIHNvIHRoYXQgdjAgLSB2MyBheGlzIHBhcmFsbGVsIHdpdGggeEF4aXNcbiAgLy8gICAyX19fMVxuICAvLyAzIC8gICBcXCAwXG4gIC8vICAgXFxfX18vXG4gIC8vICAgNCAgIDVcbiAgLy9cbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKHZ0ID0+IHJvdGF0ZShbMCwgMF0sIHZ0LCBhbmdsZSkpO1xuXG4gIC8vIHZlcnRpY2VzIG9mIGEgcGVyZmVjdCBoZXhhZ29uXG4gIGNvbnN0IG5vcm1hbFZlcnRpY2VzID0gZ2V0SGV4YWdvblZlcnRpY2VzKHJhZGl1cyk7XG5cbiAgLy8gY2FsY3VsYXRlIGRpc3RvcnRpb25cbiAgcmV0dXJuIGdldERpc3RvcnRpb25zKHJvdGF0ZWRWZXJ0aWNlcywgbm9ybWFsVmVydGljZXMpXG59XG5cbi8vIFZlcnRpY2VzIGluZGV4IGJhc2VkIG9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdWJlci9sdW1hLmdsL2Jsb2IvbWFzdGVyL21vZHVsZXMvY29yZS9zcmMvZ2VvbWV0cnkvdHJ1bmNhdGVkLWNvbmUtZ2VvbWV0cnkuanNcbmV4cG9ydCBmdW5jdGlvbiBkaXN0b3J0Q3lsaW5kZXJQb3NpdGlvbnMocG9zaXRpb25zLCBkaXN0b3J0aW9ucykge1xuXG4gIGNvbnN0IHByaW1pdGl2ZXMgPSBkaXN0b3J0aW9ucy5tYXAoKHtkciwgZGF9LCBpKSA9PlxuICAgIGdldFB0T25DaXJjbGUoZHIsIGRhICsgTWF0aC5QSSAqIGkgLyAzKSk7XG4gIC8vIGNsb3NlIGl0XG4gIHByaW1pdGl2ZXMucHVzaChwcmltaXRpdmVzWzBdKTtcblxuICAvLyBzdGFydGluZyBmcm9tIHRoZSA4dGggdmVydGljZSwgcmVwZWF0IDQgdGltZXMsIG9ubHkgcmVwbGFjZSB4KDApLCB5KDEpXG4gIHJldHVybiBwb3NpdGlvbnMubWFwKCh2LCBpKSA9PiB7XG4gICAgaWYgKGkgPiAyMCAmJiBpIDwgMjEgKiA1ICYmIGkgJSAzIDwgMikge1xuICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gMyk7XG4gICAgICBjb25zdCBjb2wgPSBpICUgMztcbiAgICAgIHJldHVybiBwcmltaXRpdmVzW3JvdyAlIDddW2NvbF07XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0KFtweCwgcHldLCBbeDAsIHkwXSkge1xuICByZXR1cm4gW1tweCAtIHgwXSwgW3B5IC0geTBdXTtcbn1cblxuZnVuY3Rpb24gcm90YXRlKFtjeCwgY3ldLCBbeCwgeV0sIHJhZGlhbnMpIHtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MocmFkaWFucyk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKHJhZGlhbnMpO1xuICBjb25zdCBueCA9IChjb3MgKiAoeCAtIGN4KSkgKyAoc2luICogKHkgLSBjeSkpICsgY3g7XG4gIGNvbnN0IG55ID0gKGNvcyAqICh5IC0gY3kpKSAtIChzaW4gKiAoeCAtIGN4KSkgKyBjeTtcblxuICByZXR1cm4gW254LCBueV07XG59XG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlKHB0MCwgcHQxKSB7XG4gIGNvbnN0IGR4ID0gcHQwWzBdIC0gcHQxWzBdO1xuICBjb25zdCBkeSA9IHB0MFsxXSAtIHB0MVsxXTtcbiAgY29uc3QgZHh5ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgcmV0dXJuIGR4eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhZGl1cyhwdDAsIHB0Mykge1xuICBjb25zdCBkeHkgPSBnZXREaXN0YW5jZShwdDAsIHB0Myk7XG4gIHJldHVybiBkeHkgLyAyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUocHQwLCBwdDMpIHtcbiAgY29uc3QgZHggPSBwdDBbMF0gLSBwdDNbMF07XG4gIGNvbnN0IGR5ID0gcHQwWzFdIC0gcHQzWzFdO1xuICBjb25zdCBkeHkgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG4gIC8vIENhbGN1bGF0ZSBhbmdsZSB0aGF0IHRoZSBwZXJwZW5kaWN1bGFyIGhleGFnb24gdmVydGV4IGF4aXMgaXMgdGlsdGVkXG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hY29zKGR4IC8gZHh5KSAqIE1hdGguc2lnbihkeSk7XG4gIHJldHVybiBhbmdsZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHRPbkNpcmNsZShyYWRpdXMsIGFuZ2xlKSB7XG4gIHJldHVybiBbcmFkaXVzICogIE1hdGguY29zKGFuZ2xlKSwgcmFkaXVzICogIE1hdGguc2luKGFuZ2xlKV07XG59XG5cbmZ1bmN0aW9uIGdldEhleGFnb25WZXJ0aWNlcyhyKSB7XG4gIGNvbnN0IGFuZzYwID0gTWF0aC5QSSAvIDM7XG4gIGNvbnN0IHB0cyA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgcHRzLnB1c2goZ2V0UHRPbkNpcmNsZShyLCBhbmc2MCAqIGkpKVxuICB9XG5cbiAgcmV0dXJuIHB0cztcbn1cblxuZnVuY3Rpb24gcmV2ZXJ0VmVydGljZXModmVydHMpIHtcbiAgLy8gcmV2ZXJ0aW5nIHZlcnRzIGZyb20gY2xvY2sgKGgzKSB0byBjb3VudGVyIGNsb2NrIHdpc2UgKGx1bWEgY3lsaW5kZXIpXG4gIGNvbnN0IHNlcSA9IFswLCA1LCA0LCAzLCAyLCAxXTtcbiAgcmV0dXJuIHNlcS5tYXAocyA9PiB2ZXJ0c1tzXSk7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RvcnRpb25zKHZ0cywgb3JpZ3MpIHtcbiAgLy8gMCBhbmQgMyBzaG91bGQgYmUgdGhlIGd1aWRlXG4gIGNvbnN0IGN0ID0gWzAsIDBdO1xuICBjb25zdCBkaXN0b3J0aW9ucyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgdnQgPSB2dHNbaV07XG4gICAgY29uc3Qgb3JnID0gb3JpZ3NbaV07XG5cbiAgICBjb25zdCByID0gZ2V0UmFkaXVzKG9yZywgY3QpO1xuICAgIGNvbnN0IGRyID0gZ2V0UmFkaXVzKHZ0LCBjdCkgLyByXG5cbiAgICBjb25zdCBkYSA9IE1hdGguYXRhbjIodnRbMV0sIHZ0WzBdKSAtIE1hdGguYXRhbjIob3JnWzFdLCBvcmdbMF0pO1xuXG4gICAgZGlzdG9ydGlvbnMucHVzaCh7ZHIsIGRhfSk7XG4gIH1cblxuICByZXR1cm4gZGlzdG9ydGlvbnM7XG59XG4iXX0=