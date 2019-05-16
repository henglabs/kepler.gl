"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.hexagonVisConfigs = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _deck = require("deck.gl");

var _aggregationLayer = _interopRequireDefault(require("../aggregation-layer"));

var _enhancedHexagonLayer = _interopRequireDefault(require("../../deckgl-layers/hexagon-layer/enhanced-hexagon-layer"));

var _hexagonUtils = require("./hexagon-utils");

var _dataUtils = require("../../utils/data-utils");

var _defaultSettings = require("../../constants/default-settings");

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
var hexagonVisConfigs = {
  opacity: 'opacity',
  worldUnitSize: 'worldUnitSize',
  resolution: 'resolution',
  colorRange: 'colorRange',
  coverage: 'coverage',
  sizeRange: 'elevationRange',
  percentile: 'percentile',
  elevationPercentile: 'elevationPercentile',
  elevationScale: 'elevationScale',
  colorAggregation: 'aggregation',
  sizeAggregation: 'sizeAggregation',
  enable3d: 'enable3d'
};
exports.hexagonVisConfigs = hexagonVisConfigs;

var HexagonLayer =
/*#__PURE__*/
function (_AggregationLayer) {
  (0, _inherits2["default"])(HexagonLayer, _AggregationLayer);

  function HexagonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HexagonLayer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(HexagonLayer).call(this, props));

    _this.registerVisConfig(hexagonVisConfigs);

    _this.visConfigSettings.worldUnitSize.label = 'Hexagon Radius (km)';
    return _this;
  }

  (0, _createClass2["default"])(HexagonLayer, [{
    key: "renderLayer",
    value: function renderLayer(_ref) {
      var data = _ref.data,
          idx = _ref.idx,
          objectHovered = _ref.objectHovered,
          mapState = _ref.mapState,
          interaction = _ref.interaction,
          layerCallbacks = _ref.layerCallbacks,
          layerInteraction = _ref.layerInteraction;
      var zoomFactor = this.getZoomFactor(mapState);
      var eleZoomFactor = this.getElevationZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var radius = visConfig.worldUnitSize * 1000;
      return [new _enhancedHexagonLayer["default"]((0, _objectSpread2["default"])({}, data, layerInteraction, {
        id: this.id,
        idx: idx,
        // highlight
        autoHighlight: visConfig.enable3d,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        radius: radius,
        coverage: visConfig.coverage,
        // color
        colorRange: this.getColorRange(visConfig.colorRange),
        colorScale: this.config.colorScale,
        opacity: visConfig.opacity,
        upperPercentile: visConfig.percentile[1],
        lowerPercentile: visConfig.percentile[0],
        // parameters
        parameters: {
          depthTest: Boolean(visConfig.enable3d || mapState.dragRotate)
        },
        // elevation
        extruded: visConfig.enable3d,
        elevationScale: visConfig.elevationScale * eleZoomFactor,
        elevationLowerPercentile: visConfig.elevationPercentile[0],
        elevationUpperPercentile: visConfig.elevationPercentile[1],
        // render
        pickable: true,
        lightSettings: this.meta.lightSettings,
        // callbacks
        onSetColorDomain: layerCallbacks.onSetLayerDomain
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !visConfig.enable3d ? [new _deck.GeoJsonLayer((0, _objectSpread2["default"])({}, layerInteraction, {
        id: "".concat(this.id, "-hovered"),
        data: [(0, _hexagonUtils.hexagonToPolygonGeo)(objectHovered, {}, radius * visConfig.coverage, mapState)],
        getLineColor: this.config.highlightColor,
        lineWidthScale: (0, _dataUtils.clamp)([1, 100], radius * 0.1 * zoomFactor)
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'hexagon';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Hexbin';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return null;
    }
  }]);
  return HexagonLayer;
}(_aggregationLayer["default"]);

exports["default"] = HexagonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGV4YWdvbi1sYXllci9oZXhhZ29uLWxheWVyLmpzIl0sIm5hbWVzIjpbImhleGFnb25WaXNDb25maWdzIiwib3BhY2l0eSIsIndvcmxkVW5pdFNpemUiLCJyZXNvbHV0aW9uIiwiY29sb3JSYW5nZSIsImNvdmVyYWdlIiwic2l6ZVJhbmdlIiwicGVyY2VudGlsZSIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJlbGV2YXRpb25TY2FsZSIsImNvbG9yQWdncmVnYXRpb24iLCJzaXplQWdncmVnYXRpb24iLCJlbmFibGUzZCIsIkhleGFnb25MYXllciIsInByb3BzIiwicmVnaXN0ZXJWaXNDb25maWciLCJ2aXNDb25maWdTZXR0aW5ncyIsImxhYmVsIiwiZGF0YSIsImlkeCIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uIiwibGF5ZXJDYWxsYmFja3MiLCJsYXllckludGVyYWN0aW9uIiwiem9vbUZhY3RvciIsImdldFpvb21GYWN0b3IiLCJlbGVab29tRmFjdG9yIiwiZ2V0RWxldmF0aW9uWm9vbUZhY3RvciIsInZpc0NvbmZpZyIsImNvbmZpZyIsInJhZGl1cyIsIkVuaGFuY2VkSGV4YWdvbkxheWVyIiwiaWQiLCJhdXRvSGlnaGxpZ2h0IiwiaGlnaGxpZ2h0Q29sb3IiLCJISUdITElHSF9DT0xPUl8zRCIsImdldENvbG9yUmFuZ2UiLCJjb2xvclNjYWxlIiwidXBwZXJQZXJjZW50aWxlIiwibG93ZXJQZXJjZW50aWxlIiwicGFyYW1ldGVycyIsImRlcHRoVGVzdCIsIkJvb2xlYW4iLCJkcmFnUm90YXRlIiwiZXh0cnVkZWQiLCJlbGV2YXRpb25Mb3dlclBlcmNlbnRpbGUiLCJlbGV2YXRpb25VcHBlclBlcmNlbnRpbGUiLCJwaWNrYWJsZSIsImxpZ2h0U2V0dGluZ3MiLCJtZXRhIiwib25TZXRDb2xvckRvbWFpbiIsIm9uU2V0TGF5ZXJEb21haW4iLCJpc0xheWVySG92ZXJlZCIsIkdlb0pzb25M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Q0Q7OztFQWxCdUNnQyw0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7R2VvSnNvbkxheWVyfSBmcm9tICdkZWNrLmdsJztcbmltcG9ydCBBZ2dyZWdhdGlvbkxheWVyIGZyb20gJy4uL2FnZ3JlZ2F0aW9uLWxheWVyJztcbmltcG9ydCBFbmhhbmNlZEhleGFnb25MYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL2hleGFnb24tbGF5ZXIvZW5oYW5jZWQtaGV4YWdvbi1sYXllcic7XG5pbXBvcnQge2hleGFnb25Ub1BvbHlnb25HZW99IGZyb20gJy4vaGV4YWdvbi11dGlscyc7XG5pbXBvcnQge2NsYW1wfSBmcm9tICd1dGlscy9kYXRhLXV0aWxzJztcbmltcG9ydCB7SElHSExJR0hfQ09MT1JfM0R9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuZXhwb3J0IGNvbnN0IGhleGFnb25WaXNDb25maWdzID0ge1xuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIHdvcmxkVW5pdFNpemU6ICd3b3JsZFVuaXRTaXplJyxcbiAgcmVzb2x1dGlvbjogJ3Jlc29sdXRpb24nLFxuICBjb2xvclJhbmdlOiAnY29sb3JSYW5nZScsXG4gIGNvdmVyYWdlOiAnY292ZXJhZ2UnLFxuICBzaXplUmFuZ2U6ICdlbGV2YXRpb25SYW5nZScsXG4gIHBlcmNlbnRpbGU6ICdwZXJjZW50aWxlJyxcbiAgZWxldmF0aW9uUGVyY2VudGlsZTogJ2VsZXZhdGlvblBlcmNlbnRpbGUnLFxuICBlbGV2YXRpb25TY2FsZTogJ2VsZXZhdGlvblNjYWxlJyxcbiAgY29sb3JBZ2dyZWdhdGlvbjogJ2FnZ3JlZ2F0aW9uJyxcbiAgc2l6ZUFnZ3JlZ2F0aW9uOiAnc2l6ZUFnZ3JlZ2F0aW9uJyxcbiAgZW5hYmxlM2Q6ICdlbmFibGUzZCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhleGFnb25MYXllciBleHRlbmRzIEFnZ3JlZ2F0aW9uTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcoaGV4YWdvblZpc0NvbmZpZ3MpO1xuICAgIHRoaXMudmlzQ29uZmlnU2V0dGluZ3Mud29ybGRVbml0U2l6ZS5sYWJlbCA9ICdIZXhhZ29uIFJhZGl1cyAoa20pJztcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaGV4YWdvbic7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ0hleGJpbic7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVuZGVyTGF5ZXIoe1xuICAgIGRhdGEsXG4gICAgaWR4LFxuICAgIG9iamVjdEhvdmVyZWQsXG4gICAgbWFwU3RhdGUsXG4gICAgaW50ZXJhY3Rpb24sXG4gICAgbGF5ZXJDYWxsYmFja3MsXG4gICAgbGF5ZXJJbnRlcmFjdGlvblxuICB9KSB7XG4gICAgY29uc3Qgem9vbUZhY3RvciA9IHRoaXMuZ2V0Wm9vbUZhY3RvcihtYXBTdGF0ZSk7XG4gICAgY29uc3QgZWxlWm9vbUZhY3RvciA9IHRoaXMuZ2V0RWxldmF0aW9uWm9vbUZhY3RvcihtYXBTdGF0ZSk7XG4gICAgY29uc3Qge3Zpc0NvbmZpZ30gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCByYWRpdXMgPSB2aXNDb25maWcud29ybGRVbml0U2l6ZSAqIDEwMDA7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEVuaGFuY2VkSGV4YWdvbkxheWVyKHtcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgLi4ubGF5ZXJJbnRlcmFjdGlvbixcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIGlkeCxcblxuICAgICAgICAvLyBoaWdobGlnaHRcbiAgICAgICAgYXV0b0hpZ2hsaWdodDogdmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBoaWdobGlnaHRDb2xvcjogSElHSExJR0hfQ09MT1JfM0QsXG5cbiAgICAgICAgcmFkaXVzLFxuICAgICAgICBjb3ZlcmFnZTogdmlzQ29uZmlnLmNvdmVyYWdlLFxuXG4gICAgICAgIC8vIGNvbG9yXG4gICAgICAgIGNvbG9yUmFuZ2U6IHRoaXMuZ2V0Q29sb3JSYW5nZSh2aXNDb25maWcuY29sb3JSYW5nZSksXG4gICAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLmNvbG9yU2NhbGUsXG4gICAgICAgIG9wYWNpdHk6IHZpc0NvbmZpZy5vcGFjaXR5LFxuICAgICAgICB1cHBlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5wZXJjZW50aWxlWzFdLFxuICAgICAgICBsb3dlclBlcmNlbnRpbGU6IHZpc0NvbmZpZy5wZXJjZW50aWxlWzBdLFxuXG4gICAgICAgIC8vIHBhcmFtZXRlcnNcbiAgICAgICAgcGFyYW1ldGVyczoge2RlcHRoVGVzdDogQm9vbGVhbih2aXNDb25maWcuZW5hYmxlM2QgfHwgbWFwU3RhdGUuZHJhZ1JvdGF0ZSl9LFxuXG4gICAgICAgIC8vIGVsZXZhdGlvblxuICAgICAgICBleHRydWRlZDogdmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICBlbGV2YXRpb25TY2FsZTogdmlzQ29uZmlnLmVsZXZhdGlvblNjYWxlICogZWxlWm9vbUZhY3RvcixcbiAgICAgICAgZWxldmF0aW9uTG93ZXJQZXJjZW50aWxlOiB2aXNDb25maWcuZWxldmF0aW9uUGVyY2VudGlsZVswXSxcbiAgICAgICAgZWxldmF0aW9uVXBwZXJQZXJjZW50aWxlOiB2aXNDb25maWcuZWxldmF0aW9uUGVyY2VudGlsZVsxXSxcblxuICAgICAgICAvLyByZW5kZXJcbiAgICAgICAgcGlja2FibGU6IHRydWUsXG4gICAgICAgIGxpZ2h0U2V0dGluZ3M6IHRoaXMubWV0YS5saWdodFNldHRpbmdzLFxuICAgICAgICAvLyBjYWxsYmFja3NcbiAgICAgICAgb25TZXRDb2xvckRvbWFpbjogbGF5ZXJDYWxsYmFja3Mub25TZXRMYXllckRvbWFpblxuICAgICAgfSksXG5cbiAgICAgIC8vIHJlbmRlciBhbiBvdXRsaW5lIG9mIGVhY2ggaGV4YWdvbiBpZiBub3QgZXh0cnVkZWRcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpICYmICF2aXNDb25maWcuZW5hYmxlM2RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgR2VvSnNvbkxheWVyKHtcbiAgICAgICAgICAgICAgLi4ubGF5ZXJJbnRlcmFjdGlvbixcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWhvdmVyZWRgLFxuICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgaGV4YWdvblRvUG9seWdvbkdlbyhcbiAgICAgICAgICAgICAgICAgIG9iamVjdEhvdmVyZWQsXG4gICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgIHJhZGl1cyAqIHZpc0NvbmZpZy5jb3ZlcmFnZSxcbiAgICAgICAgICAgICAgICAgIG1hcFN0YXRlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBsaW5lV2lkdGhTY2FsZTogY2xhbXAoWzEsIDEwMF0sIHJhZGl1cyAqIDAuMSAqIHpvb21GYWN0b3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSlcbiAgICBdO1xuICB9XG59XG4iXX0=