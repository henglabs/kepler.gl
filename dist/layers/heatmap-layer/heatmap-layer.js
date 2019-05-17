"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.heatmapVisConfigs = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reselect = require("reselect");

var _defaultSettings = require("../../constants/default-settings");

var _colorUtils = require("../../utils/color-utils");

var _mapboxUtils = require("../mapbox-utils");

var _mapboxglLayer = _interopRequireDefault(require("../mapboxgl-layer"));

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
var MAX_ZOOM_LEVEL = 18;
var heatmapVisConfigs = {
  opacity: 'opacity',
  colorRange: 'colorRange',
  radius: 'heatmapRadius'
};
/**
 *
 * @param {Object} colorRange
 * @return {Array} [
 *  0, "rgba(33,102,172,0)",
 *  0.2, "rgb(103,169,207)",
 *  0.4, "rgb(209,229,240)",
 *  0.6, "rgb(253,219,199)",
 *  0.8, "rgb(239,138,98)",
 *  1, "rgb(178,24,43)"
 * ]
 */

exports.heatmapVisConfigs = heatmapVisConfigs;

var heatmapDensity = function heatmapDensity(colorRange) {
  var scaleFunction = _defaultSettings.SCALE_FUNC.quantize;
  var colors = ['#000000'].concat((0, _toConsumableArray2["default"])(colorRange.colors));
  var scale = scaleFunction().domain([0, 1]).range(colors);
  var colorDensity = scale.range().reduce(function (bands, level) {
    var invert = scale.invertExtent(level);
    return [].concat((0, _toConsumableArray2["default"])(bands), [invert[0], // first value in the range
    "rgb(".concat((0, _colorUtils.hexToRgb)(level).join(','), ")") // color
    ]);
  }, []);
  colorDensity[1] = 'rgba(0,0,0,0)';
  return colorDensity;
};

var shouldRebuild = function shouldRebuild(sameData, sameConfig) {
  return !(sameData && sameConfig);
};

var HeatmapLayer =
/*#__PURE__*/
function (_MapboxGLLayer) {
  (0, _inherits2["default"])(HeatmapLayer, _MapboxGLLayer);

  function HeatmapLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, HeatmapLayer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(HeatmapLayer).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isSameData", function (_ref, config) {
      var allData = _ref.allData,
          filteredIndex = _ref.filteredIndex,
          oldLayerData = _ref.oldLayerData,
          _ref$opt = _ref.opt,
          opt = _ref$opt === void 0 ? {} : _ref$opt;
      return Boolean(oldLayerData && oldLayerData.columns === config.columns && opt.sameData);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isSameConfig", function (_ref2) {
      var oldLayerData = _ref2.oldLayerData,
          config = _ref2.config;
      // columns must use the same filedIdx
      // this is a fast way to compare columns object
      var columns = config.columns,
          weightField = config.weightField;

      if (!oldLayerData) {
        return false;
      }

      var sameColumns = columns === oldLayerData.columns;
      var sameWeightField = weightField === oldLayerData.weightField;
      return sameColumns && sameWeightField;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasetSelector", function (config) {
      return config.dataId;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isVisibleSelector", function (config) {
      return config.isVisible;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "visConfigSelector", function (config) {
      return config.visConfig;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "weightFieldSelector", function (config) {
      return config.weightField ? config.weightField.name : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "weightDomainSelector", function (config) {
      return config.weightDomain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "computeHeatmapConfiguration", (0, _reselect.createSelector)(_this.datasetSelector, _this.isVisibleSelector, _this.visConfigSelector, _this.weightFieldSelector, _this.weightDomainSelector, function (datasetId, isVisible, visConfig, weightField, weightDomain) {
      var layer = {
        type: 'heatmap',
        id: _this.id,
        source: datasetId,
        layout: {
          visibility: isVisible ? 'visible' : 'none'
        },
        maxzoom: MAX_ZOOM_LEVEL,
        paint: {
          'heatmap-weight': weightField ? ['interpolate', ['linear'], ['get', weightField], weightDomain[0], 0, weightDomain[1], 1] : 1,
          'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, MAX_ZOOM_LEVEL, 3],
          'heatmap-color': ['interpolate', ['linear'], ['heatmap-density']].concat((0, _toConsumableArray2["default"])(heatmapDensity(visConfig.colorRange))),
          'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, MAX_ZOOM_LEVEL, visConfig.radius // radius
          ],
          'heatmap-opacity': visConfig.opacity
        }
      };
      return layer;
    }));

    _this.registerVisConfig(heatmapVisConfigs);

    return _this;
  }

  (0, _createClass2["default"])(HeatmapLayer, [{
    key: "getVisualChannelDescription",
    value: function getVisualChannelDescription(channel) {
      return channel === 'color' ? {
        label: 'color',
        measure: 'Density'
      } : {
        label: 'weight',
        measure: this.config.weightField ? this.config.weightField.name : 'Density'
      };
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      // mapbox heatmap layer color is always based on density
      // no need to set colorField, colorDomain and colorScale

      /* eslint-disable no-unused-vars */
      var _get$call$weightField = (0, _objectSpread2["default"])({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(HeatmapLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        weightField: null,
        weightDomain: [0, 1],
        weightScale: 'linear'
      }),
          colorField = _get$call$weightField.colorField,
          colorDomain = _get$call$weightField.colorDomain,
          colorScale = _get$call$weightField.colorScale,
          layerConfig = (0, _objectWithoutProperties2["default"])(_get$call$weightField, ["colorField", "colorDomain", "colorScale"]);
      /* eslint-enable no-unused-vars */


      return layerConfig;
    }
  }, {
    key: "formatLayerData",
    value: function formatLayerData(_, allData, filteredIndex, oldLayerData) {
      var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var options = {
        allData: allData,
        filteredIndex: filteredIndex,
        oldLayerData: oldLayerData,
        opt: opt,
        config: this.config
      };
      var weightField = this.config.weightField;
      var isSameData = this.isSameData(options, this.config);
      var isSameConfig = this.isSameConfig(options);
      var data = !shouldRebuild(isSameData, isSameConfig) ? null : (0, _mapboxUtils.geojsonFromPoints)(allData, filteredIndex, this.config.columns, weightField ? [weightField] : []);
      var newConfig = this.computeHeatmapConfiguration(this.config);
      newConfig.id = this.id;
      return {
        columns: this.config.columns,
        config: newConfig,
        data: data,
        weightField: weightField
      };
    }
  }, {
    key: "type",
    get: function get() {
      return 'heatmap';
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return {
        weight: {
          property: 'weight',
          field: 'weightField',
          scale: 'weightScale',
          domain: 'weightDomain',
          key: 'weight',
          // supportedFieldTypes can be determined by channelScaleType
          // or specified here
          defaultMeasure: 'density',
          supportedFieldTypes: [_defaultSettings.ALL_FIELD_TYPES.real, _defaultSettings.ALL_FIELD_TYPES.integer],
          channelScaleType: _defaultSettings.CHANNEL_SCALES.size
        }
      };
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return null;
    }
  }]);
  return HeatmapLayer;
}(_mapboxglLayer["default"]);

var _default = HeatmapLayer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaGVhdG1hcC1sYXllci9oZWF0bWFwLWxheWVyLmpzIl0sIm5hbWVzIjpbIk1BWF9aT09NX0xFVkVMIiwiaGVhdG1hcFZpc0NvbmZpZ3MiLCJvcGFjaXR5IiwiY29sb3JSYW5nZSIsInJhZGl1cyIsImhlYXRtYXBEZW5zaXR5Iiwic2NhbGVGdW5jdGlvbiIsIlNDQUxFX0ZVTkMiLCJxdWFudGl6ZSIsImNvbG9ycyIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJjb2xvckRlbnNpdHkiLCJyZWR1Y2UiLCJiYW5kcyIsImxldmVsIiwiaW52ZXJ0IiwiaW52ZXJ0RXh0ZW50Iiwiam9pbiIsInNob3VsZFJlYnVpbGQiLCJzYW1lRGF0YSIsInNhbWVDb25maWciLCJIZWF0bWFwTGF5ZXIiLCJwcm9wcyIsImNvbmZpZyIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4Iiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiQm9vbGVhbiIsImNvbHVtbnMiLCJ3ZWlnaHRGaWVsZCIsInNhbWVDb2x1bW5zIiwic2FtZVdlaWdodEZpZWxkIiwiZGF0YUlkIiwiaXNWaXNpYmxlIiwidmlzQ29uZmlnIiwibmFtZSIsIndlaWdodERvbWFpbiIsImRhdGFzZXRTZWxlY3RvciIsImlzVmlzaWJsZVNlbGVjdG9yIiwidmlzQ29uZmlnU2VsZWN0b3IiLCJ3ZWlnaHRGaWVsZFNlbGVjdG9yIiwid2VpZ2h0RG9tYWluU2VsZWN0b3IiLCJkYXRhc2V0SWQiLCJsYXllciIsInR5cGUiLCJpZCIsInNvdXJjZSIsImxheW91dCIsInZpc2liaWxpdHkiLCJtYXh6b29tIiwicGFpbnQiLCJyZWdpc3RlclZpc0NvbmZpZyIsImNoYW5uZWwiLCJsYWJlbCIsIm1lYXN1cmUiLCJ3ZWlnaHRTY2FsZSIsImNvbG9yRmllbGQiLCJjb2xvckRvbWFpbiIsImNvbG9yU2NhbGUiLCJsYXllckNvbmZpZyIsIl8iLCJvcHRpb25zIiwiaXNTYW1lRGF0YSIsImlzU2FtZUNvbmZpZyIsImRhdGEiLCJuZXdDb25maWciLCJjb21wdXRlSGVhdG1hcENvbmZpZ3VyYXRpb24iLCJ3ZWlnaHQiLCJwcm9wZXJ0eSIsImZpZWxkIiwia2V5IiwiZGVmYXVsdE1lYXN1cmUiLCJzdXBwb3J0ZWRGaWVsZFR5cGVzIiwiQUxMX0ZJRUxEX1RZUEVTIiwicmVhbCIsImludGVnZXIiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJzaXplIiwiTWFwYm94R0xMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQSxJQUFNQSxjQUFjLEdBQUcsRUFBdkI7QUFFTyxJQUFNQyxpQkFBaUIsR0FBRztBQUMvQkMsRUFBQUEsT0FBTyxFQUFFLFNBRHNCO0FBRS9CQyxFQUFBQSxVQUFVLEVBQUUsWUFGbUI7QUFHL0JDLEVBQUFBLE1BQU0sRUFBRTtBQUh1QixDQUExQjtBQU1QOzs7Ozs7Ozs7Ozs7Ozs7QUFZQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNGLFVBQUQsRUFBZ0I7QUFDckMsTUFBTUcsYUFBYSxHQUFHQyw0QkFBV0MsUUFBakM7QUFFQSxNQUFNQyxNQUFNLElBQUksU0FBSiw2Q0FBa0JOLFVBQVUsQ0FBQ00sTUFBN0IsRUFBWjtBQUVBLE1BQU1DLEtBQUssR0FBR0osYUFBYSxHQUN4QkssTUFEVyxDQUNKLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FESSxFQUVYQyxLQUZXLENBRUxILE1BRkssQ0FBZDtBQUlBLE1BQU1JLFlBQVksR0FBR0gsS0FBSyxDQUFDRSxLQUFOLEdBQWNFLE1BQWQsQ0FBcUIsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQzFELFFBQU1DLE1BQU0sR0FBR1AsS0FBSyxD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REYsRUFFRUMsYUFGRixFQUdFLEtBQUtGLE1BQUwsQ0FBWU0sT0FIZCxFQUlFQyxXQUFXLEdBQUcsQ0FBQ0EsV0FBRCxDQUFILEdBQW1CLEVBSmhDLENBRkY7QUFTQSxVQUFNb0MsU0FBUyxHQUFHLEtBQUtDLDJCQUFMLENBQWlDLEtBQUs1QyxNQUF0QyxDQUFsQjtBQUNBMkMsTUFBQUEsU0FBUyxDQUFDcEIsRUFBVixHQUFlLEtBQUtBLEVBQXBCO0FBRUEsYUFBTztBQUNMakIsUUFBQUEsT0FBTyxFQUFFLEtBQUtOLE1BQUwsQ0FBWU0sT0FEaEI7QUFFTE4sUUFBQUEsTUFBTSxFQUFFMkMsU0FGSDtBQUdMRCxRQUFBQSxJQUFJLEVBQUpBLElBSEs7QUFJTG5DLFFBQUFBLFdBQVcsRUFBWEE7QUFKSyxPQUFQO0FBTUQ7Ozt3QkFyS1U7QUFDVCxhQUFPLFNBQVA7QUFDRDs7O3dCQUVvQjtBQUNuQixhQUFPO0FBQ0xzQyxRQUFBQSxNQUFNLEVBQUU7QUFDTkMsVUFBQUEsUUFBUSxFQUFFLFFBREo7QUFFTkMsVUFBQUEsS0FBSyxFQUFFLGFBRkQ7QUFHTjlELFVBQUFBLEtBQUssRUFBRSxhQUhEO0FBSU5DLFVBQUFBLE1BQU0sRUFBRSxjQUpGO0FBS044RCxVQUFBQSxHQUFHLEVBQUUsUUFMQztBQU1OO0FBQ0E7QUFDQUMsVUFBQUEsY0FBYyxFQUFFLFNBUlY7QUFTTkMsVUFBQUEsbUJBQW1CLEVBQUUsQ0FBQ0MsaUNBQWdCQyxJQUFqQixFQUF1QkQsaUNBQWdCRSxPQUF2QyxDQVRmO0FBVU5DLFVBQUFBLGdCQUFnQixFQUFFQyxnQ0FBZUM7QUFWM0I7QUFESCxPQUFQO0FBY0Q7Ozt3QkFFZTtBQUNkLGFBQU8sSUFBUDtBQUNEOzs7RUE3QndCQyx5Qjs7ZUE4S1ozRCxZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtDSEFOTkVMX1NDQUxFUywgU0NBTEVfRlVOQywgQUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQge2dlb2pzb25Gcm9tUG9pbnRzfSBmcm9tICcuLi9tYXBib3gtdXRpbHMnO1xuaW1wb3J0IE1hcGJveEdMTGF5ZXIgZnJvbSAnLi4vbWFwYm94Z2wtbGF5ZXInO1xuXG5jb25zdCBNQVhfWk9PTV9MRVZFTCA9IDE4O1xuXG5leHBvcnQgY29uc3QgaGVhdG1hcFZpc0NvbmZpZ3MgPSB7XG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICByYWRpdXM6ICdoZWF0bWFwUmFkaXVzJ1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbG9yUmFuZ2VcbiAqIEByZXR1cm4ge0FycmF5fSBbXG4gKiAgMCwgXCJyZ2JhKDMzLDEwMiwxNzIsMClcIixcbiAqICAwLjIsIFwicmdiKDEwMywxNjksMjA3KVwiLFxuICogIDAuNCwgXCJyZ2IoMjA5LDIyOSwyNDApXCIsXG4gKiAgMC42LCBcInJnYigyNTMsMjE5LDE5OSlcIixcbiAqICAwLjgsIFwicmdiKDIzOSwxMzgsOTgpXCIsXG4gKiAgMSwgXCJyZ2IoMTc4LDI0LDQzKVwiXG4gKiBdXG4gKi9cbmNvbnN0IGhlYXRtYXBEZW5zaXR5ID0gKGNvbG9yUmFuZ2UpID0+IHtcbiAgY29uc3Qgc2NhbGVGdW5jdGlvbiA9IFNDQUxFX0ZVTkMucXVhbnRpemU7XG5cbiAgY29uc3QgY29sb3JzID0gWycjMDAwMDAwJywgLi4uY29sb3JSYW5nZS5jb2xvcnNdO1xuXG4gIGNvbnN0IHNjYWxlID0gc2NhbGVGdW5jdGlvbigpXG4gICAgLmRvbWFpbihbMCwgMV0pXG4gICAgLnJhbmdlKGNvbG9ycyk7XG5cbiAgY29uc3QgY29sb3JEZW5zaXR5ID0gc2NhbGUucmFuZ2UoKS5yZWR1Y2UoKGJhbmRzLCBsZXZlbCkgPT4ge1xuICAgIGNvbnN0IGludmVydCA9IHNjYWxlLmludmVydEV4dGVudChsZXZlbCk7XG4gICAgcmV0dXJuIFtcbiAgICAgIC4uLmJhbmRzLFxuICAgICAgaW52ZXJ0WzBdLCAvLyBmaXJzdCB2YWx1ZSBpbiB0aGUgcmFuZ2VcbiAgICAgIGByZ2IoJHtoZXhUb1JnYihsZXZlbCkuam9pbignLCcpfSlgIC8vIGNvbG9yXG4gICAgXVxuICB9LCBbXSk7XG4gIGNvbG9yRGVuc2l0eVsxXSA9ICdyZ2JhKDAsMCwwLDApJztcbiAgcmV0dXJuIGNvbG9yRGVuc2l0eTtcbn07XG5cbmNvbnN0IHNob3VsZFJlYnVpbGQgPSAoc2FtZURhdGEsIHNhbWVDb25maWcpID0+ICEoc2FtZURhdGEgJiYgc2FtZUNvbmZpZyk7XG5cbmNsYXNzIEhlYXRtYXBMYXllciBleHRlbmRzIE1hcGJveEdMTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGhlYXRtYXBWaXNDb25maWdzKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnaGVhdG1hcCc7XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlaWdodDoge1xuICAgICAgICBwcm9wZXJ0eTogJ3dlaWdodCcsXG4gICAgICAgIGZpZWxkOiAnd2VpZ2h0RmllbGQnLFxuICAgICAgICBzY2FsZTogJ3dlaWdodFNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnd2VpZ2h0RG9tYWluJyxcbiAgICAgICAga2V5OiAnd2VpZ2h0JyxcbiAgICAgICAgLy8gc3VwcG9ydGVkRmllbGRUeXBlcyBjYW4gYmUgZGV0ZXJtaW5lZCBieSBjaGFubmVsU2NhbGVUeXBlXG4gICAgICAgIC8vIG9yIHNwZWNpZmllZCBoZXJlXG4gICAgICAgIGRlZmF1bHRNZWFzdXJlOiAnZGVuc2l0eScsXG4gICAgICAgIHN1cHBvcnRlZEZpZWxkVHlwZXM6IFtBTExfRklFTERfVFlQRVMucmVhbCwgQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5zaXplXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRWaXN1YWxDaGFubmVsRGVzY3JpcHRpb24oY2hhbm5lbCkge1xuICAgIHJldHVybiBjaGFubmVsID09PSAnY29sb3InID8ge1xuICAgICAgbGFiZWw6ICdjb2xvcicsXG4gICAgICBtZWFzdXJlOiAnRGVuc2l0eSdcbiAgICB9IDoge1xuICAgICAgbGFiZWw6ICd3ZWlnaHQnLFxuICAgICAgbWVhc3VyZTogdGhpcy5jb25maWcud2VpZ2h0RmllbGQgPyB0aGlzLmNvbmZpZy53ZWlnaHRGaWVsZC5uYW1lIDogJ0RlbnNpdHknXG4gICAgfVxuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcblxuICAgIC8vIG1hcGJveCBoZWF0bWFwIGxheWVyIGNvbG9yIGlzIGFsd2F5cyBiYXNlZCBvbiBkZW5zaXR5XG4gICAgLy8gbm8gbmVlZCB0byBzZXQgY29sb3JGaWVsZCwgY29sb3JEb21haW4gYW5kIGNvbG9yU2NhbGVcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIGNvbnN0IHtjb2xvckZpZWxkLCBjb2xvckRvbWFpbiwgY29sb3JTY2FsZSwgLi4ubGF5ZXJDb25maWd9ID0ge1xuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcblxuICAgICAgd2VpZ2h0RmllbGQ6IG51bGwsXG4gICAgICB3ZWlnaHREb21haW46IFswLCAxXSxcbiAgICAgIHdlaWdodFNjYWxlOiAnbGluZWFyJ1xuICAgIH07XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4gICAgcmV0dXJuIGxheWVyQ29uZmlnO1xuICB9XG5cbiAgaXNTYW1lRGF0YSA9ICh7YWxsRGF0YSwgZmlsdGVyZWRJbmRleCwgb2xkTGF5ZXJEYXRhLCBvcHQgPSB7fX0sIGNvbmZpZykgPT4ge1xuICAgIHJldHVybiBCb29sZWFuKG9sZExheWVyRGF0YSAmJiBvbGRMYXllckRhdGEuY29sdW1ucyA9PT0gY29uZmlnLmNvbHVtbnMgJiZcbiAgICAgIG9wdC5zYW1lRGF0YVxuICAgICk7XG4gIH07XG5cbiAgaXNTYW1lQ29uZmlnID0gKHtvbGRMYXllckRhdGEsIGNvbmZpZ30pID0+IHtcbiAgICAvLyBjb2x1bW5zIG11c3QgdXNlIHRoZSBzYW1lIGZpbGVkSWR4XG4gICAgLy8gdGhpcyBpcyBhIGZhc3Qgd2F5IHRvIGNvbXBhcmUgY29sdW1ucyBvYmplY3RcbiAgICBjb25zdCB7XG4gICAgICBjb2x1bW5zLFxuICAgICAgd2VpZ2h0RmllbGRcbiAgICB9ID0gY29uZmlnO1xuXG4gICAgaWYgKCFvbGRMYXllckRhdGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBzYW1lQ29sdW1ucyA9IGNvbHVtbnMgPT09IG9sZExheWVyRGF0YS5jb2x1bW5zO1xuICAgIGNvbnN0IHNhbWVXZWlnaHRGaWVsZCA9IHdlaWdodEZpZWxkID09PSBvbGRMYXllckRhdGEud2VpZ2h0RmllbGQ7XG4gICAgcmV0dXJuIHNhbWVDb2x1bW5zICYmIHNhbWVXZWlnaHRGaWVsZDtcbiAgfTtcblxuICBkYXRhc2V0U2VsZWN0b3IgPSBjb25maWcgPT4gY29uZmlnLmRhdGFJZDtcbiAgaXNWaXNpYmxlU2VsZWN0b3IgPSBjb25maWcgPT4gY29uZmlnLmlzVmlzaWJsZTtcbiAgdmlzQ29uZmlnU2VsZWN0b3IgPSBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZztcbiAgd2VpZ2h0RmllbGRTZWxlY3RvciA9IGNvbmZpZyA9PiBjb25maWcud2VpZ2h0RmllbGQgPyBjb25maWcud2VpZ2h0RmllbGQubmFtZSA6IG51bGw7XG4gIHdlaWdodERvbWFpblNlbGVjdG9yID0gY29uZmlnID0+IGNvbmZpZy53ZWlnaHREb21haW47XG5cbiAgY29tcHV0ZUhlYXRtYXBDb25maWd1cmF0aW9uID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5kYXRhc2V0U2VsZWN0b3IsXG4gICAgdGhpcy5pc1Zpc2libGVTZWxlY3RvcixcbiAgICB0aGlzLnZpc0NvbmZpZ1NlbGVjdG9yLFxuICAgIHRoaXMud2VpZ2h0RmllbGRTZWxlY3RvcixcbiAgICB0aGlzLndlaWdodERvbWFpblNlbGVjdG9yLFxuXG4gICAgKGRhdGFzZXRJZCwgaXNWaXNpYmxlLCB2aXNDb25maWcsIHdlaWdodEZpZWxkLCB3ZWlnaHREb21haW4pID0+IHtcblxuICAgICAgY29uc3QgbGF5ZXIgPSB7XG4gICAgICAgIHR5cGU6ICdoZWF0bWFwJyxcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHNvdXJjZTogZGF0YXNldElkLFxuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBpc1Zpc2libGUgPyAndmlzaWJsZScgOiAnbm9uZSdcbiAgICAgICAgfSxcbiAgICAgICAgbWF4em9vbTogTUFYX1pPT01fTEVWRUwsXG4gICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgJ2hlYXRtYXAtd2VpZ2h0Jzogd2VpZ2h0RmllbGQgPyBbXG4gICAgICAgICAgICAnaW50ZXJwb2xhdGUnLFxuICAgICAgICAgICAgWydsaW5lYXInXSxcbiAgICAgICAgICAgIFsnZ2V0Jywgd2VpZ2h0RmllbGRdLFxuICAgICAgICAgICAgd2VpZ2h0RG9tYWluWzBdLCAwLFxuICAgICAgICAgICAgd2VpZ2h0RG9tYWluWzFdLCAxXG4gICAgICAgICAgXSA6IDEsXG4gICAgICAgICAgJ2hlYXRtYXAtaW50ZW5zaXR5JzogW1xuICAgICAgICAgICAgJ2ludGVycG9sYXRlJyxcbiAgICAgICAgICAgIFsnbGluZWFyJ10sXG4gICAgICAgICAgICBbJ3pvb20nXSxcbiAgICAgICAgICAgIDAsIDEsXG4gICAgICAgICAgICBNQVhfWk9PTV9MRVZFTCwgM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgJ2hlYXRtYXAtY29sb3InOiBbXG4gICAgICAgICAgICAnaW50ZXJwb2xhdGUnLFxuICAgICAgICAgICAgWydsaW5lYXInXSxcbiAgICAgICAgICAgIFsnaGVhdG1hcC1kZW5zaXR5J10sXG4gICAgICAgICAgICAuLi5oZWF0bWFwRGVuc2l0eSh2aXNDb25maWcuY29sb3JSYW5nZSlcbiAgICAgICAgICBdLFxuICAgICAgICAgICdoZWF0bWFwLXJhZGl1cyc6IFtcbiAgICAgICAgICAgICdpbnRlcnBvbGF0ZScsXG4gICAgICAgICAgICBbJ2xpbmVhciddLFxuICAgICAgICAgICAgWyd6b29tJ10sXG4gICAgICAgICAgICAwLCAyLFxuICAgICAgICAgICAgTUFYX1pPT01fTEVWRUwsIHZpc0NvbmZpZy5yYWRpdXMgLy8gcmFkaXVzXG4gICAgICAgICAgXSxcbiAgICAgICAgICAnaGVhdG1hcC1vcGFjaXR5JzogdmlzQ29uZmlnLm9wYWNpdHlcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGxheWVyO1xuICAgIH1cbiAgKTtcblxuICBmb3JtYXRMYXllckRhdGEoXywgYWxsRGF0YSwgZmlsdGVyZWRJbmRleCwgb2xkTGF5ZXJEYXRhLCBvcHQgPSB7fSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICBhbGxEYXRhLFxuICAgICAgZmlsdGVyZWRJbmRleCxcbiAgICAgIG9sZExheWVyRGF0YSxcbiAgICAgIG9wdCxcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWdcbiAgICB9O1xuXG4gICAgY29uc3Qge3dlaWdodEZpZWxkfSA9IHRoaXMuY29uZmlnO1xuICAgIGNvbnN0IGlzU2FtZURhdGEgPSB0aGlzLmlzU2FtZURhdGEob3B0aW9ucywgdGhpcy5jb25maWcpO1xuICAgIGNvbnN0IGlzU2FtZUNvbmZpZyA9IHRoaXMuaXNTYW1lQ29uZmlnKG9wdGlvbnMpO1xuXG4gICAgY29uc3QgZGF0YSA9ICFzaG91bGRSZWJ1aWxkKGlzU2FtZURhdGEsIGlzU2FtZUNvbmZpZykgP1xuICAgICAgbnVsbCA6XG4gICAgICBnZW9qc29uRnJvbVBvaW50cyhcbiAgICAgICAgYWxsRGF0YSxcbiAgICAgICAgZmlsdGVyZWRJbmRleCxcbiAgICAgICAgdGhpcy5jb25maWcuY29sdW1ucyxcbiAgICAgICAgd2VpZ2h0RmllbGQgPyBbd2VpZ2h0RmllbGRdIDogW11cbiAgICAgICk7XG5cbiAgICBjb25zdCBuZXdDb25maWcgPSB0aGlzLmNvbXB1dGVIZWF0bWFwQ29uZmlndXJhdGlvbih0aGlzLmNvbmZpZyk7XG4gICAgbmV3Q29uZmlnLmlkID0gdGhpcy5pZDtcblxuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZy5jb2x1bW5zLFxuICAgICAgY29uZmlnOiBuZXdDb25maWcsXG4gICAgICBkYXRhLFxuICAgICAgd2VpZ2h0RmllbGRcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYXRtYXBMYXllcjtcbiJdfQ==