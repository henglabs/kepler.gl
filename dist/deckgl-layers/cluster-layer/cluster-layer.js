"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _deck = require("deck.gl");

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

var _d3Array = require("d3-array");

var _dataScaleUtils = require("../../utils/data-scale-utils");

var _utils = require("../layer-utils/utils");

var _colorRanges = require("../../constants/color-ranges");

var _layerFactory = require("../../layers/layer-factory");

var _defaultSettings = require("../../constants/default-settings");

var _clusterUtils = require("../layer-utils/cluster-utils");

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
var defaultRadius = _layerFactory.LAYER_VIS_CONFIGS.clusterRadius.defaultValue;
var defaultRadiusRange = _layerFactory.LAYER_VIS_CONFIGS.clusterRadiusRange.defaultValue;
var defaultProps = {
  clusterRadius: defaultRadius,
  colorDomain: null,
  colorRange: _colorRanges.DefaultColorRange,
  colorScale: _defaultSettings.SCALE_TYPES.quantize,
  radiusRange: defaultRadiusRange,
  // maybe later...
  lowerPercentile: 0,
  upperPercentile: 100,
  getPosition: function getPosition(x) {
    return x.position;
  },
  // if want to have color based on customized aggregator, instead of count
  getColorValue: function getColorValue(points) {
    return points.length;
  },
  //  if want to have radius based on customized aggregator, instead of count
  getRadiusValue: function getRadiusValue(cell) {
    return cell.properties.point_count;
  },
  fp64: false
};

var ClusterLayer =
/*#__PURE__*/
function (_CompositeLayer) {
  (0, _inherits2["default"])(ClusterLayer, _CompositeLayer);

  function ClusterLayer() {
    (0, _classCallCheck2["default"])(this, ClusterLayer);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ClusterLayer).apply(this, arguments));
  }

  (0, _createClass2["default"])(ClusterLayer, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        clusters: [],
        geoJSON: null
      };
    }
  }, {
    key: "shouldUpdateState",
    value: function shouldUpdateState(_ref) {
      var changeFlags = _ref.changeFlags;
      return changeFlags.somethingChanged;
    }
  }, {
    key: "updateState",
    value: function updateState(_ref2) {
      var context = _ref2.context,
          oldProps = _ref2.oldProps,
          props = _ref2.props,
          changeFlags = _ref2.changeFlags;

      if (changeFlags.dataChanged || this.needsReProjectPoints(oldProps, props)) {
        // project data into clusters, and get clustered data
        this.processGeoJSON();
        this.getClusters(); // this needs clustered data to be set

        this.getColorValueDomain();
      } else if (this.needsReclusterPoints(oldProps, props)) {
        this.getClusters();
        this.getColorValueDomain();
      } else if (this.needsRecalculateScaleFunction(oldProps, props)) {
        this.getColorValueDomain();
      }
    }
  }, {
    key: "needsReProjectPoints",
    value: function needsReProjectPoints(oldProps, props) {
      return oldProps.clusterRadius !== props.clusterRadius || oldProps.getPosition !== props.getPosition;
    }
  }, {
    key: "needsReclusterPoints",
    value: function needsReclusterPoints(oldProps, props) {
      return Math.round(oldProps.zoom) !== Math.round(props.zoom);
    }
  }, {
    key: "needsRecalculateScaleFunction",
    value: function needsRecalculateScaleFunction(oldProps, props) {
      return (0, _utils.needsRecalculateColorDomain)(oldProps, props) || (0, _utils.needReCalculateScaleFunction)(oldProps, props) || (0, _utils.needsRecalculateRadiusRange)(oldProps, props) || oldProps.getColorValue !== props.getColorValue;
    }
  }, {
    key: "processGeoJSON",
    value: function processGeoJSON() {
      var _this$props = this.props,
          data = _this$props.data,
          getPosition = _this$props.getPosition;
      this.setState({
        geoJSON: (0, _clusterUtils.getGeoJSON)(data, getPosition)
      });
      (0, _clusterUtils.clearClustererCache)();
    }
  }, {
    key: "getClusters",
    value: function getClusters() {
      var geoJSON = this.state.geoJSON;
      var clusterRadius = this.props.clusterRadius;
      var _this$context = this.context,
          viewport = _this$context.viewport,
          _this$context$viewpor = _this$context.viewport,
          longitude = _this$context$viewpor.longitude,
          latitude = _this$context$viewpor.latitude,
          height = _this$context$viewpor.height,
          width = _this$context$viewpor.width; // zoom needs to be an integer for the different map utils. Also helps with cache key.

      var zoom = Math.round(viewport.zoom);

      var bbox = _geoViewport["default"].bounds([longitude, latitude], zoom, [width, height]);

      var clusters = (0, _clusterUtils.clustersAtZoom)({
        bbox: bbox,
        clusterRadius: clusterRadius,
        geoJSON: geoJSON,
        zoom: zoom
      });

      if (clusters.length) {
        this.setState({
          clusters: clusters
        });
      }
    }
  }, {
    key: "getColorValueDomain",
    value: function getColorValueDomain() {
      var _this$props2 = this.props,
          colorScale = _this$props2.colorScale,
          getColorValue = _this$props2.getColorValue,
          getRadiusValue = _this$props2.getRadiusValue,
          onSetColorDomain = _this$props2.onSetColorDomain;
      var clusters = this.state.clusters;
      var radiusDomain = [0, (0, _d3Array.max)(clusters, getRadiusValue)];
      var colorValues = clusters.map(function (d) {
        return getColorValue(d.properties.points);
      });

      var identity = function identity(d) {
        return d;
      };

      var colorDomain = colorScale === _defaultSettings.SCALE_TYPES.ordinal ? (0, _dataScaleUtils.getOrdinalDomain)(colorValues, identity) : colorScale === _defaultSettings.SCALE_TYPES.quantile ? (0, _dataScaleUtils.getQuantileDomain)(colorValues, identity, _d3Array.ascending) : (0, _dataScaleUtils.getLinearDomain)(colorValues, identity);
      this.setState({
        colorDomain: colorDomain,
        radiusDomain: radiusDomain
      });
      (0, _utils.getColorScaleFunction)(this);
      (0, _utils.getRadiusScaleFunction)(this);
      onSetColorDomain(colorDomain);
    }
  }, {
    key: "getUpdateTriggers",
    value: function getUpdateTriggers() {
      return {
        getColor: {
          colorRange: this.props.colorRange,
          colorDomain: this.props.colorDomain,
          getColorValue: this.props.getColorValue,
          colorScale: this.props.colorScale,
          lowerPercentile: this.props.lowerPercentile,
          upperPercentile: this.props.upperPercentile
        },
        getRadius: {
          radiusRange: this.props.radiusRange,
          radiusDomain: this.props.radiusDomain,
          getRadiusValue: this.props.getRadiusValue
        }
      };
    }
    /*
     * override default layer method to calculate cell color based on color scale function
     */

  }, {
    key: "_onGetSublayerColor",
    value: function _onGetSublayerColor(cell) {
      var getColorValue = this.props.getColorValue;
      var _this$state = this.state,
          colorScaleFunc = _this$state.colorScaleFunc,
          colorDomain = _this$state.colorDomain;
      var cv = getColorValue(cell.properties.points); // if cell value is outside domain, set alpha to 0

      var color = cv >= colorDomain[0] && cv <= colorDomain[colorDomain.length - 1] ? colorScaleFunc(cv) : [0, 0, 0, 0]; // add final alpha to color

      color[3] = Number.isFinite(color[3]) ? color[3] : 255;
      return color;
    }
  }, {
    key: "_onGetSublayerRadius",
    value: function _onGetSublayerRadius(cell) {
      var getRadiusValue = this.props.getRadiusValue;
      var radiusScaleFunc = this.state.radiusScaleFunc;
      return radiusScaleFunc(getRadiusValue(cell));
    }
  }, {
    key: "getPickingInfo",
    value: function getPickingInfo(_ref3) {
      var info = _ref3.info;
      var clusters = this.state.clusters;
      var isPicked = info.picked && info.index > -1;
      var object = null;

      if (isPicked) {
        // add cluster colorValue to object
        var cluster = clusters[info.index];
        var colorValue = this.props.getColorValue(cluster.properties.points);
        object = (0, _objectSpread2["default"])({}, cluster.properties, {
          colorValue: colorValue,
          radius: this._onGetSublayerRadius(cluster),
          position: cluster.geometry.coordinates
        });
      }

      return (0, _objectSpread2["default"])({}, info, {
        picked: Boolean(object),
        // override object with picked cluster property
        object: object
      });
    }
  }, {
    key: "renderLayers",
    value: function renderLayers() {
      // for subclassing, override this method to return
      // customized sub layer props
      var _this$props3 = this.props,
          id = _this$props3.id,
          radiusScale = _this$props3.radiusScale,
          fp64 = _this$props3.fp64; // base layer props

      var _this$props4 = this.props,
          opacity = _this$props4.opacity,
          pickable = _this$props4.pickable,
          autoHighlight = _this$props4.autoHighlight,
          highlightColor = _this$props4.highlightColor; // return props to the sublayer constructor

      return new _deck.ScatterplotLayer({
        id: "".concat(id, "-cluster"),
        data: this.state.clusters,
        radiusScale: radiusScale,
        fp64: fp64,
        opacity: opacity,
        pickable: pickable,
        autoHighlight: autoHighlight,
        highlightColor: highlightColor,
        getPosition: function getPosition(d) {
          return d.geometry.coordinates;
        },
        getRadius: this._onGetSublayerRadius.bind(this),
        getColor: this._onGetSublayerColor.bind(this),
        updateTriggers: this.getUpdateTriggers()
      });
    }
  }]);
  return ClusterLayer;
}(_deck.CompositeLayer);

exports["default"] = ClusterLayer;
ClusterLayer.layerName = 'ClusterLayer';
ClusterLayer.defaultProps = defaultProps;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2NsdXN0ZXItbGF5ZXIvY2x1c3Rlci1sYXllci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmFkaXVzIiwiTEFZRVJfVklTX0NPTkZJR1MiLCJjbHVzdGVyUmFkaXVzIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1c1JhbmdlIiwiZGVmYXVsdFByb3BzIiwiY29sb3JEb21haW4iLCJjb2xvclJhbmdlIiwiRGVmYXVsdENvbG9yUmFuZ2UiLCJjb2xvclNjYWxlIiwiU0NBTEVfVFlQRVMiLCJxdWFudGl6ZSIsInJhZGl1c1JhbmdlIiwibG93ZXJQZXJjZW50aWxlIiwidXBwZXJQZXJjZW50aWxlIiwiZ2V0UG9zaXRpb24iLCJ4IiwicG9zaXRpb24iLCJnZXRDb2xvclZhbHVlIiwicG9pbnRzIiwibGVuZ3RoIiwiZ2V0UmFkaXVzVmFsdWUiLCJjZWxsIiwicHJvcGVydGllcyIsInBvaW50X2NvdW50IiwiZnA2NCIsIkNsdXN0ZXJMYXllciIsInN0YXRlIiwiY2x1c3RlcnMiLCJnZW9KU09OIiwiY2hhbmdlRmxhZ3MiLCJzb21ldGhpbmdDaGFuZ2VkIiwiY29udGV4dCIsIm9sZFByb3BzIiwicHJvcHMiLCJkYXRhQ2hhbmdlZCIsIm5lZWRzUmVQcm9qZWN0UG9pbnRzIiwicHJvY2Vzc0dlb0pTT04iLCJnZXRDbHVzdGVycyIsImdldENvbG9yVmFsdWVEb21haW4iLCJuZWVkc1JlY2x1c3RlclBvaW50cyIsIm5lZWRzUmVjYWxjdWxhdGVTY2FsZUZ1bmN0aW9uIiwiTWF0aCIsInJvdW5kIiwiem9vbSIsImRhdGEiLCJzZXRTdGF0ZSIsInZpZXdwb3J0IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJoZWlnaHQiLCJ3aWR0aCIsImJib3giLCJnZW9WaWV3cG9ydCIsImJvdW5kcyIsIm9uU2V0Q29sb3JEb21haW4iLCJyYWRpdXNEb21haW4iLCJjb2xvclZhbHVlcyIsIm1hcCIsImQiLCJpZGVudGl0eSIsIm9yZGluYWwiLCJxdWFudGlsZSIsImFzY2VuZGluZyIsImdldENvbG9yIiwiZ2V0UmFkaXVzIiwiY29sb3JTY2FsZUZ1bmMiLCJjdiIsImNvbG9yIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJyYWRpdXNTY2FsZUZ1bmMiLCJpbmZvIiwiaXNQaWNrZWQiLCJwaWNrZWQiLCJpbmRleCIsIm9iamVjdCIsImNsdXN0ZXIiLCJjb2xvclZhbHVlIiwicmFkaXVzIiwiX29uR2V0U3VibGF5ZXJSYWRpdXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiQm9vbGVhbiIsImlkIiwicmFkaXVzU2NhbGUiLCJvcGFjaXR5IiwicGlja2FibGUiLCJhdXRvSGlnaGxpZ2h0IiwiaGlnaGxpZ2h0Q29sb3IiLCJTY2F0dGVycGxvdExheWVyIiwiYmluZCIsIl9vbkdldFN1YmxheWVyQ29sb3IiLCJ1cGRhdGVUcmlnZ2VycyIsImdldFVwZGF0ZVRyaWdnZXJzIiwiQ29tcG9zaXRlTGF5ZXIiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUF2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEyQkEsSUFBTUEsYUFBYSxHQUFHQyxnQ0FBa0JDLGFBQWxCLENBQWdDQyxZQUF0RDtBQUNBLElBQU1DLGtCQUFrQixHQUFHSCxnQ0FBa0JJLGtCQUFsQixDQUFxQ0YsWUFBaEU7QUFFQSxJQUFNRyxZQUFZLEdBQUc7QUFDbkJKLEVBQUFBLGFBQWEsRUFBRUYsYUFESTtBQUVuQk8sRUFBQUEsV0FBVyxFQUFFLElBRk07QUFHbkJDLEVBQUFBLFVBQVUsRUFBRUMsOEJBSE87QUFJbkJDLEVBQUFBLFVBQVUsRUFBRUMsNkJBQVlDLFFBSkw7QUFLbkJDLEVB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QUFBLFVBTWFDLGFBTmIsZ0JBTWFBLGFBTmI7QUFBQSxVQU00QkMsY0FONUIsZ0JBTTRCQSxjQU41QixFQVFiOztBQUNBLGFBQU8sSUFBSUMsc0JBQUosQ0FBcUI7QUFDMUJOLFFBQUFBLEVBQUUsWUFBS0EsRUFBTCxhQUR3QjtBQUUxQnZDLFFBQUFBLElBQUksRUFBRSxLQUFLbEIsS0FBTCxDQUFXQyxRQUZTO0FBRzFCeUQsUUFBQUEsV0FBVyxFQUFYQSxXQUgwQjtBQUkxQjVELFFBQUFBLElBQUksRUFBSkEsSUFKMEI7QUFLMUI2RCxRQUFBQSxPQUFPLEVBQVBBLE9BTDBCO0FBTTFCQyxRQUFBQSxRQUFRLEVBQVJBLFFBTjBCO0FBTzFCQyxRQUFBQSxhQUFhLEVBQWJBLGFBUDBCO0FBUTFCQyxRQUFBQSxjQUFjLEVBQWRBLGNBUjBCO0FBUzFCMUUsUUFBQUEsV0FBVyxFQUFFLHFCQUFBNEMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNzQixRQUFGLENBQVdDLFdBQWY7QUFBQSxTQVRZO0FBVTFCakIsUUFBQUEsU0FBUyxFQUFFLEtBQUtlLG9CQUFMLENBQTBCVyxJQUExQixDQUErQixJQUEvQixDQVZlO0FBVzFCM0IsUUFBQUEsUUFBUSxFQUFFLEtBQUs0QixtQkFBTCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBOUIsQ0FYZ0I7QUFZMUJFLFFBQUFBLGNBQWMsRUFBRSxLQUFLQyxpQkFBTDtBQVpVLE9BQXJCLENBQVA7QUFjRDs7O0VBOU11Q0Msb0I7OztBQWlOMUNyRSxZQUFZLENBQUNzRSxTQUFiLEdBQXlCLGNBQXpCO0FBQ0F0RSxZQUFZLENBQUNyQixZQUFiLEdBQTRCQSxZQUE1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Q29tcG9zaXRlTGF5ZXIsIFNjYXR0ZXJwbG90TGF5ZXJ9IGZyb20gJ2RlY2suZ2wnO1xuaW1wb3J0IGdlb1ZpZXdwb3J0IGZyb20gJ0BtYXBib3gvZ2VvLXZpZXdwb3J0JztcbmltcG9ydCB7YXNjZW5kaW5nLCBtYXh9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7XG4gIGdldFF1YW50aWxlRG9tYWluLFxuICBnZXRPcmRpbmFsRG9tYWluLFxuICBnZXRMaW5lYXJEb21haW5cbn0gZnJvbSAndXRpbHMvZGF0YS1zY2FsZS11dGlscyc7XG5pbXBvcnQge1xuICBnZXRDb2xvclNjYWxlRnVuY3Rpb24sXG4gIGdldFJhZGl1c1NjYWxlRnVuY3Rpb24sXG4gIG5lZWRzUmVjYWxjdWxhdGVSYWRpdXNSYW5nZSxcbiAgbmVlZHNSZWNhbGN1bGF0ZUNvbG9yRG9tYWluLFxuICBuZWVkUmVDYWxjdWxhdGVTY2FsZUZ1bmN0aW9uXG59IGZyb20gJy4uL2xheWVyLXV0aWxzL3V0aWxzJztcbmltcG9ydCB7RGVmYXVsdENvbG9yUmFuZ2V9IGZyb20gJ2NvbnN0YW50cy9jb2xvci1yYW5nZXMnO1xuaW1wb3J0IHtMQVlFUl9WSVNfQ09ORklHU30gZnJvbSAnbGF5ZXJzL2xheWVyLWZhY3RvcnknO1xuaW1wb3J0IHtTQ0FMRV9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1xuICBjbGVhckNsdXN0ZXJlckNhY2hlLFxuICBjbHVzdGVyc0F0Wm9vbSxcbiAgZ2V0R2VvSlNPTlxufSBmcm9tICcuLi9sYXllci11dGlscy9jbHVzdGVyLXV0aWxzJztcblxuY29uc3QgZGVmYXVsdFJhZGl1cyA9IExBWUVSX1ZJU19DT05GSUdTLmNsdXN0ZXJSYWRpdXMuZGVmYXVsdFZhbHVlO1xuY29uc3QgZGVmYXVsdFJhZGl1c1JhbmdlID0gTEFZRVJfVklTX0NPTkZJR1MuY2x1c3RlclJhZGl1c1JhbmdlLmRlZmF1bHRWYWx1ZTtcblxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBjbHVzdGVyUmFkaXVzOiBkZWZhdWx0UmFkaXVzLFxuICBjb2xvckRvbWFpbjogbnVsbCxcbiAgY29sb3JSYW5nZTogRGVmYXVsdENvbG9yUmFuZ2UsXG4gIGNvbG9yU2NhbGU6IFNDQUxFX1RZUEVTLnF1YW50aXplLFxuICByYWRpdXNSYW5nZTogZGVmYXVsdFJhZGl1c1JhbmdlLFxuXG4gIC8vIG1heWJlIGxhdGVyLi4uXG4gIGxvd2VyUGVyY2VudGlsZTogMCxcbiAgdXBwZXJQZXJjZW50aWxlOiAxMDAsXG5cbiAgZ2V0UG9zaXRpb246IHggPT4geC5wb3NpdGlvbixcblxuICAvLyBpZiB3YW50IHRvIGhhdmUgY29sb3IgYmFzZWQgb24gY3VzdG9taXplZCBhZ2dyZWdhdG9yLCBpbnN0ZWFkIG9mIGNvdW50XG4gIGdldENvbG9yVmFsdWU6IHBvaW50cyA9PiBwb2ludHMubGVuZ3RoLFxuXG4gIC8vICBpZiB3YW50IHRvIGhhdmUgcmFkaXVzIGJhc2VkIG9uIGN1c3RvbWl6ZWQgYWdncmVnYXRvciwgaW5zdGVhZCBvZiBjb3VudFxuICBnZXRSYWRpdXNWYWx1ZTogY2VsbCA9PiBjZWxsLnByb3BlcnRpZXMucG9pbnRfY291bnQsXG4gIGZwNjQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbHVzdGVyTGF5ZXIgZXh0ZW5kcyBDb21wb3NpdGVMYXllciB7XG4gIGluaXRpYWxpemVTdGF0ZSgpIHtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2x1c3RlcnM6IFtdLFxuICAgICAgZ2VvSlNPTjogbnVsbFxuICAgIH07XG4gIH1cblxuICBzaG91bGRVcGRhdGVTdGF0ZSh7Y2hhbmdlRmxhZ3N9KSB7XG4gICAgcmV0dXJuIGNoYW5nZUZsYWdzLnNvbWV0aGluZ0NoYW5nZWQ7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSh7Y29udGV4dCwgb2xkUHJvcHMsIHByb3BzLCBjaGFuZ2VGbGFnc30pIHtcbiAgICBpZiAoY2hhbmdlRmxhZ3MuZGF0YUNoYW5nZWQgfHwgdGhpcy5uZWVkc1JlUHJvamVjdFBvaW50cyhvbGRQcm9wcywgcHJvcHMpKSB7XG4gICAgICAvLyBwcm9qZWN0IGRhdGEgaW50byBjbHVzdGVycywgYW5kIGdldCBjbHVzdGVyZWQgZGF0YVxuICAgICAgdGhpcy5wcm9jZXNzR2VvSlNPTigpO1xuICAgICAgdGhpcy5nZXRDbHVzdGVycygpO1xuXG4gICAgICAvLyB0aGlzIG5lZWRzIGNsdXN0ZXJlZCBkYXRhIHRvIGJlIHNldFxuICAgICAgdGhpcy5nZXRDb2xvclZhbHVlRG9tYWluKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm5lZWRzUmVjbHVzdGVyUG9pbnRzKG9sZFByb3BzLCBwcm9wcykpIHtcbiAgICAgIHRoaXMuZ2V0Q2x1c3RlcnMoKTtcbiAgICAgIHRoaXMuZ2V0Q29sb3JWYWx1ZURvbWFpbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWVkc1JlY2FsY3VsYXRlU2NhbGVGdW5jdGlvbihvbGRQcm9wcywgcHJvcHMpKSB7XG4gICAgICB0aGlzLmdldENvbG9yVmFsdWVEb21haW4oKTtcbiAgICB9XG4gIH1cblxuICBuZWVkc1JlUHJvamVjdFBvaW50cyhvbGRQcm9wcywgcHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgb2xkUHJvcHMuY2x1c3RlclJhZGl1cyAhPT0gcHJvcHMuY2x1c3RlclJhZGl1cyB8fFxuICAgICAgb2xkUHJvcHMuZ2V0UG9zaXRpb24gIT09IHByb3BzLmdldFBvc2l0aW9uXG4gICAgKTtcbiAgfVxuXG4gIG5lZWRzUmVjbHVzdGVyUG9pbnRzKG9sZFByb3BzLCBwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICBNYXRoLnJvdW5kKG9sZFByb3BzLnpvb20pICE9PSBNYXRoLnJvdW5kKHByb3BzLnpvb20pXG4gICAgKTtcbiAgfVxuXG4gIG5lZWRzUmVjYWxjdWxhdGVTY2FsZUZ1bmN0aW9uKG9sZFByb3BzLCBwcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICBuZWVkc1JlY2FsY3VsYXRlQ29sb3JEb21haW4ob2xkUHJvcHMsIHByb3BzKSB8fFxuICAgICAgbmVlZFJlQ2FsY3VsYXRlU2NhbGVGdW5jdGlvbihvbGRQcm9wcywgcHJvcHMpIHx8XG4gICAgICBuZWVkc1JlY2FsY3VsYXRlUmFkaXVzUmFuZ2Uob2xkUHJvcHMsIHByb3BzKSB8fFxuICAgICAgb2xkUHJvcHMuZ2V0Q29sb3JWYWx1ZSAhPT0gcHJvcHMuZ2V0Q29sb3JWYWx1ZVxuICAgICk7XG4gIH1cblxuICBwcm9jZXNzR2VvSlNPTigpIHtcbiAgICBjb25zdCB7ZGF0YSwgZ2V0UG9zaXRpb259ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHtnZW9KU09OOiBnZXRHZW9KU09OKGRhdGEsIGdldFBvc2l0aW9uKX0pO1xuICAgIGNsZWFyQ2x1c3RlcmVyQ2FjaGUoKTtcbiAgfVxuXG4gIGdldENsdXN0ZXJzKCkge1xuICAgIGNvbnN0IHtnZW9KU09OfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge2NsdXN0ZXJSYWRpdXN9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICB2aWV3cG9ydCxcbiAgICAgIHZpZXdwb3J0OiB7bG9uZ2l0dWRlLCBsYXRpdHVkZSwgaGVpZ2h0LCB3aWR0aH1cbiAgICB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgLy8gem9vbSBuZWVkcyB0byBiZSBhbiBpbnRlZ2VyIGZvciB0aGUgZGlmZmVyZW50IG1hcCB1dGlscy4gQWxzbyBoZWxwcyB3aXRoIGNhY2hlIGtleS5cbiAgICBjb25zdCB6b29tID0gTWF0aC5yb3VuZCh2aWV3cG9ydC56b29tKTtcbiAgICBjb25zdCBiYm94ID0gZ2VvVmlld3BvcnQuYm91bmRzKFtsb25naXR1ZGUsIGxhdGl0dWRlXSwgem9vbSwgW1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICBdKTtcblxuICAgIGNvbnN0IGNsdXN0ZXJzID0gY2x1c3RlcnNBdFpvb20oe2Jib3gsIGNsdXN0ZXJSYWRpdXMsIGdlb0pTT04sIHpvb219KTtcblxuICAgIGlmIChjbHVzdGVycy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NsdXN0ZXJzfSk7XG4gICAgfVxuXG4gIH1cblxuICBnZXRDb2xvclZhbHVlRG9tYWluKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yU2NhbGUsXG4gICAgICBnZXRDb2xvclZhbHVlLFxuICAgICAgZ2V0UmFkaXVzVmFsdWUsXG4gICAgICBvblNldENvbG9yRG9tYWluXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2NsdXN0ZXJzfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCByYWRpdXNEb21haW4gPSBbMCwgbWF4KGNsdXN0ZXJzLCBnZXRSYWRpdXNWYWx1ZSldO1xuXG4gICAgY29uc3QgY29sb3JWYWx1ZXMgPSBjbHVzdGVycy5tYXAoZCA9PiBnZXRDb2xvclZhbHVlKGQucHJvcGVydGllcy5wb2ludHMpKTtcblxuICAgIGNvbnN0IGlkZW50aXR5ID0gZCA9PiBkO1xuXG4gICAgY29uc3QgY29sb3JEb21haW4gPVxuICAgICAgY29sb3JTY2FsZSA9PT0gU0NBTEVfVFlQRVMub3JkaW5hbFxuICAgICAgICA/IGdldE9yZGluYWxEb21haW4oY29sb3JWYWx1ZXMsIGlkZW50aXR5KVxuICAgICAgICA6IGNvbG9yU2NhbGUgPT09IFNDQUxFX1RZUEVTLnF1YW50aWxlXG4gICAgICAgICAgPyBnZXRRdWFudGlsZURvbWFpbihjb2xvclZhbHVlcywgaWRlbnRpdHksIGFzY2VuZGluZylcbiAgICAgICAgICA6IGdldExpbmVhckRvbWFpbihjb2xvclZhbHVlcywgaWRlbnRpdHkpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xvckRvbWFpbixcbiAgICAgIHJhZGl1c0RvbWFpblxuICAgIH0pO1xuXG4gICAgZ2V0Q29sb3JTY2FsZUZ1bmN0aW9uKHRoaXMpO1xuICAgIGdldFJhZGl1c1NjYWxlRnVuY3Rpb24odGhpcyk7XG5cbiAgICBvblNldENvbG9yRG9tYWluKGNvbG9yRG9tYWluKTtcbiAgfVxuXG4gIGdldFVwZGF0ZVRyaWdnZXJzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRDb2xvcjoge1xuICAgICAgICBjb2xvclJhbmdlOiB0aGlzLnByb3BzLmNvbG9yUmFuZ2UsXG4gICAgICAgIGNvbG9yRG9tYWluOiB0aGlzLnByb3BzLmNvbG9yRG9tYWluLFxuICAgICAgICBnZXRDb2xvclZhbHVlOiB0aGlzLnByb3BzLmdldENvbG9yVmFsdWUsXG4gICAgICAgIGNvbG9yU2NhbGU6IHRoaXMucHJvcHMuY29sb3JTY2FsZSxcbiAgICAgICAgbG93ZXJQZXJjZW50aWxlOiB0aGlzLnByb3BzLmxvd2VyUGVyY2VudGlsZSxcbiAgICAgICAgdXBwZXJQZXJjZW50aWxlOiB0aGlzLnByb3BzLnVwcGVyUGVyY2VudGlsZVxuICAgICAgfSxcbiAgICAgIGdldFJhZGl1czoge1xuICAgICAgICByYWRpdXNSYW5nZTogdGhpcy5wcm9wcy5yYWRpdXNSYW5nZSxcbiAgICAgICAgcmFkaXVzRG9tYWluOiB0aGlzLnByb3BzLnJhZGl1c0RvbWFpbixcbiAgICAgICAgZ2V0UmFkaXVzVmFsdWU6IHRoaXMucHJvcHMuZ2V0UmFkaXVzVmFsdWVcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLypcbiAgICogb3ZlcnJpZGUgZGVmYXVsdCBsYXllciBtZXRob2QgdG8gY2FsY3VsYXRlIGNlbGwgY29sb3IgYmFzZWQgb24gY29sb3Igc2NhbGUgZnVuY3Rpb25cbiAgICovXG4gIF9vbkdldFN1YmxheWVyQ29sb3IoY2VsbCkge1xuICAgIGNvbnN0IHtnZXRDb2xvclZhbHVlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2NvbG9yU2NhbGVGdW5jLCBjb2xvckRvbWFpbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgY3YgPSBnZXRDb2xvclZhbHVlKGNlbGwucHJvcGVydGllcy5wb2ludHMpO1xuXG4gICAgLy8gaWYgY2VsbCB2YWx1ZSBpcyBvdXRzaWRlIGRvbWFpbiwgc2V0IGFscGhhIHRvIDBcbiAgICBjb25zdCBjb2xvciA9XG4gICAgICBjdiA+PSBjb2xvckRvbWFpblswXSAmJiBjdiA8PSBjb2xvckRvbWFpbltjb2xvckRvbWFpbi5sZW5ndGggLSAxXVxuICAgICAgICA/IGNvbG9yU2NhbGVGdW5jKGN2KVxuICAgICAgICA6IFswLCAwLCAwLCAwXTtcblxuICAgIC8vIGFkZCBmaW5hbCBhbHBoYSB0byBjb2xvclxuICAgIGNvbG9yWzNdID0gTnVtYmVyLmlzRmluaXRlKGNvbG9yWzNdKSA/IGNvbG9yWzNdIDogMjU1O1xuXG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgX29uR2V0U3VibGF5ZXJSYWRpdXMoY2VsbCkge1xuICAgIGNvbnN0IHtnZXRSYWRpdXNWYWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtyYWRpdXNTY2FsZUZ1bmN9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gcmFkaXVzU2NhbGVGdW5jKGdldFJhZGl1c1ZhbHVlKGNlbGwpKTtcbiAgfVxuXG4gIGdldFBpY2tpbmdJbmZvKHtpbmZvfSkge1xuICAgIGNvbnN0IHtjbHVzdGVyc30gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlzUGlja2VkID0gaW5mby5waWNrZWQgJiYgaW5mby5pbmRleCA+IC0xO1xuXG4gICAgbGV0IG9iamVjdCA9IG51bGw7XG4gICAgaWYgKGlzUGlja2VkKSB7XG4gICAgICAvLyBhZGQgY2x1c3RlciBjb2xvclZhbHVlIHRvIG9iamVjdFxuICAgICAgY29uc3QgY2x1c3RlciA9IGNsdXN0ZXJzW2luZm8uaW5kZXhdO1xuICAgICAgY29uc3QgY29sb3JWYWx1ZSA9IHRoaXMucHJvcHMuZ2V0Q29sb3JWYWx1ZShjbHVzdGVyLnByb3BlcnRpZXMucG9pbnRzKTtcblxuICAgICAgb2JqZWN0ID0ge1xuICAgICAgICAuLi5jbHVzdGVyLnByb3BlcnRpZXMsXG4gICAgICAgIGNvbG9yVmFsdWUsXG4gICAgICAgIHJhZGl1czogdGhpcy5fb25HZXRTdWJsYXllclJhZGl1cyhjbHVzdGVyKSxcbiAgICAgICAgcG9zaXRpb246IGNsdXN0ZXIuZ2VvbWV0cnkuY29vcmRpbmF0ZXNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmluZm8sXG4gICAgICBwaWNrZWQ6IEJvb2xlYW4ob2JqZWN0KSxcbiAgICAgIC8vIG92ZXJyaWRlIG9iamVjdCB3aXRoIHBpY2tlZCBjbHVzdGVyIHByb3BlcnR5XG4gICAgICBvYmplY3RcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyTGF5ZXJzKCkge1xuICAgIC8vIGZvciBzdWJjbGFzc2luZywgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcmV0dXJuXG4gICAgLy8gY3VzdG9taXplZCBzdWIgbGF5ZXIgcHJvcHNcbiAgICBjb25zdCB7aWQsIHJhZGl1c1NjYWxlLCBmcDY0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyBiYXNlIGxheWVyIHByb3BzXG4gICAgY29uc3Qge29wYWNpdHksIHBpY2thYmxlLCBhdXRvSGlnaGxpZ2h0LCBoaWdobGlnaHRDb2xvcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gcmV0dXJuIHByb3BzIHRvIHRoZSBzdWJsYXllciBjb25zdHJ1Y3RvclxuICAgIHJldHVybiBuZXcgU2NhdHRlcnBsb3RMYXllcih7XG4gICAgICBpZDogYCR7aWR9LWNsdXN0ZXJgLFxuICAgICAgZGF0YTogdGhpcy5zdGF0ZS5jbHVzdGVycyxcbiAgICAgIHJhZGl1c1NjYWxlLFxuICAgICAgZnA2NCxcbiAgICAgIG9wYWNpdHksXG4gICAgICBwaWNrYWJsZSxcbiAgICAgIGF1dG9IaWdobGlnaHQsXG4gICAgICBoaWdobGlnaHRDb2xvcixcbiAgICAgIGdldFBvc2l0aW9uOiBkID0+IGQuZ2VvbWV0cnkuY29vcmRpbmF0ZXMsXG4gICAgICBnZXRSYWRpdXM6IHRoaXMuX29uR2V0U3VibGF5ZXJSYWRpdXMuYmluZCh0aGlzKSxcbiAgICAgIGdldENvbG9yOiB0aGlzLl9vbkdldFN1YmxheWVyQ29sb3IuYmluZCh0aGlzKSxcbiAgICAgIHVwZGF0ZVRyaWdnZXJzOiB0aGlzLmdldFVwZGF0ZVRyaWdnZXJzKClcbiAgICB9KTtcbiAgfVxufVxuXG5DbHVzdGVyTGF5ZXIubGF5ZXJOYW1lID0gJ0NsdXN0ZXJMYXllcic7XG5DbHVzdGVyTGF5ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19