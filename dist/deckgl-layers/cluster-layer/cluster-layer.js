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
        clusters: null,
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

      if (clusters !== null && clusters.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNrZ2wtbGF5ZXJzL2NsdXN0ZXItbGF5ZXIvY2x1c3Rlci1sYXllci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmFkaXVzIiwiTEFZRVJfVklTX0NPTkZJR1MiLCJjbHVzdGVyUmFkaXVzIiwiZGVmYXVsdFZhbHVlIiwiZGVmYXVsdFJhZGl1c1JhbmdlIiwiY2x1c3RlclJhZGl1c1JhbmdlIiwiZGVmYXVsdFByb3BzIiwiY29sb3JEb21haW4iLCJjb2xvclJhbmdlIiwiRGVmYXVsdENvbG9yUmFuZ2UiLCJjb2xvclNjYWxlIiwiU0NBTEVfVFlQRVMiLCJxdWFudGl6ZSIsInJhZGl1c1JhbmdlIiwibG93ZXJQZXJjZW50aWxlIiwidXBwZXJQZXJjZW50aWxlIiwiZ2V0UG9zaXRpb24iLCJ4IiwicG9zaXRpb24iLCJnZXRDb2xvclZhbHVlIiwicG9pbnRzIiwibGVuZ3RoIiwiZ2V0UmFkaXVzVmFsdWUiLCJjZWxsIiwicHJvcGVydGllcyIsInBvaW50X2NvdW50IiwiZnA2NCIsIkNsdXN0ZXJMYXllciIsInN0YXRlIiwiY2x1c3RlcnMiLCJnZW9KU09OIiwiY2hhbmdlRmxhZ3MiLCJzb21ldGhpbmdDaGFuZ2VkIiwiY29udGV4dCIsIm9sZFByb3BzIiwicHJvcHMiLCJkYXRhQ2hhbmdlZCIsIm5lZWRzUmVQcm9qZWN0UG9pbnRzIiwicHJvY2Vzc0dlb0pTT04iLCJnZXRDbHVzdGVycyIsImdldENvbG9yVmFsdWVEb21haW4iLCJuZWVkc1JlY2x1c3RlclBvaW50cyIsIm5lZWRzUmVjYWxjdWxhdGVTY2FsZUZ1bmN0aW9uIiwiTWF0aCIsInJvdW5kIiwiem9vbSIsImRhdGEiLCJzZXRTdGF0ZSIsInZpZXdwb3J0IiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJoZWlnaHQiLCJ3aWR0aCIsImJib3giLCJnZW9WaWV3cG9ydCIsImJvdW5kcyIsIm9uU2V0Q29sb3JEb21haW4iLCJyYWRpdXNEb21haW4iLCJjb2xvclZhbHVlcyIsIm1hcCIsImQiLCJpZGVudGl0eSIsIm9yZGluYWwiLCJxdWFudGlsZSIsImFzY2VuZGluZyIsImdldENvbG9yIiwiZ2V0UmFkaXVzIiwiY29sb3JTY2FsZUZ1bmMiLCJjdiIsImNvbG9yIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJyYWRpdXNTY2FsZUZ1bmMiLCJpbmZvIiwiaXNQaWNrZWQiLCJwaWNrZWQiLCJpbmRleCIsIm9iamVjdCIsImNsdXN0ZXIiLCJjb2xvclZhbHVlIiwicmFkaXVzIiwiX29uR2V0U3VibGF5ZXJSYWRpdXMiLCJnZW9tZXRyeSIsImNvb3JkaW5hdGVzIiwiQm9vbGVhbiIsImlkIiwicmFkaXVzU2NhbGUiLCJvcGFjaXR5IiwicGlja2FibGUiLCJhdXRvSGlnaGxpZ2h0IiwiaGlnaGxpZ2h0Q29sb3IiLCJTY2F0dGVycGxvdExheWVyIiwiYmluZCIsIl9vbkdldFN1YmxheWVyQ29sb3IiLCJ1cGRhdGVUcmlnZ2VycyIsImdldFVwZGF0ZVRyaWdnZXJzIiwiQ29tcG9zaXRlTGF5ZXIiLCJsYXllck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUF2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEyQkEsSUFBTUEsYUFBYSxHQUFHQyxnQ0FBa0JDLGFBQWxCLENBQWdDQyxZQUF0RDtBQUNBLElBQU1DLGtCQUFrQixHQUFHSCxnQ0FBa0JJLGtCQUFsQixDQUFxQ0YsWUFBaEU7QUFFQSxJQUFNRyxZQUFZLEdBQUc7QUFDbkJKLEVBQUFBLGFBQWEsRUFBRUYsYUFESTtBQUVuQk8sRUFBQUEsV0FBVyxFQUFFLElBRk07QUFHbkJDLEVBQUFBLFVBQVUsRUFBRUMsOEJBSE87QUFJbkJDLEVBQUFBLFVBQVUsRUFBRUMsNkJBQVlDLFFBSkw7QUFLbkJDLEVB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QU1HQyxRQU5ILGdCQU1HQSxRQU5IO0FBQUEsVUFNYUMsYUFOYixnQkFNYUEsYUFOYjtBQUFBLFVBTTRCQyxjQU41QixnQkFNNEJBLGNBTjVCLEVBUWI7O0FBQ0EsYUFBTyxJQUFJQyxzQkFBSixDQUFxQjtBQUMxQk4sUUFBQUEsRUFBRSxZQUFLQSxFQUFMLGFBRHdCO0FBRTFCdkMsUUFBQUEsSUFBSSxFQUFFLEtBQUtsQixLQUFMLENBQVdDLFFBRlM7QUFHMUJ5RCxRQUFBQSxXQUFXLEVBQVhBLFdBSDBCO0FBSTFCNUQsUUFBQUEsSUFBSSxFQUFKQSxJQUowQjtBQUsxQjZELFFBQUFBLE9BQU8sRUFBUEEsT0FMMEI7QUFNMUJDLFFBQUFBLFFBQVEsRUFBUkEsUUFOMEI7QUFPMUJDLFFBQUFBLGFBQWEsRUFBYkEsYUFQMEI7QUFRMUJDLFFBQUFBLGNBQWMsRUFBZEEsY0FSMEI7QUFTMUIxRSxRQUFBQSxXQUFXLEVBQUUscUJBQUE0QyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ3NCLFFBQUYsQ0FBV0MsV0FBZjtBQUFBLFNBVFk7QUFVMUJqQixRQUFBQSxTQUFTLEVBQUUsS0FBS2Usb0JBQUwsQ0FBMEJXLElBQTFCLENBQStCLElBQS9CLENBVmU7QUFXMUIzQixRQUFBQSxRQUFRLEVBQUUsS0FBSzRCLG1CQUFMLENBQXlCRCxJQUF6QixDQUE4QixJQUE5QixDQVhnQjtBQVkxQkUsUUFBQUEsY0FBYyxFQUFFLEtBQUtDLGlCQUFMO0FBWlUsT0FBckIsQ0FBUDtBQWNEOzs7RUE5TXVDQyxvQjs7O0FBaU4xQ3JFLFlBQVksQ0FBQ3NFLFNBQWIsR0FBeUIsY0FBekI7QUFDQXRFLFlBQVksQ0FBQ3JCLFlBQWIsR0FBNEJBLFlBQTVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtDb21wb3NpdGVMYXllciwgU2NhdHRlcnBsb3RMYXllcn0gZnJvbSAnZGVjay5nbCc7XG5pbXBvcnQgZ2VvVmlld3BvcnQgZnJvbSAnQG1hcGJveC9nZW8tdmlld3BvcnQnO1xuaW1wb3J0IHthc2NlbmRpbmcsIG1heH0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHtcbiAgZ2V0UXVhbnRpbGVEb21haW4sXG4gIGdldE9yZGluYWxEb21haW4sXG4gIGdldExpbmVhckRvbWFpblxufSBmcm9tICd1dGlscy9kYXRhLXNjYWxlLXV0aWxzJztcbmltcG9ydCB7XG4gIGdldENvbG9yU2NhbGVGdW5jdGlvbixcbiAgZ2V0UmFkaXVzU2NhbGVGdW5jdGlvbixcbiAgbmVlZHNSZWNhbGN1bGF0ZVJhZGl1c1JhbmdlLFxuICBuZWVkc1JlY2FsY3VsYXRlQ29sb3JEb21haW4sXG4gIG5lZWRSZUNhbGN1bGF0ZVNjYWxlRnVuY3Rpb25cbn0gZnJvbSAnLi4vbGF5ZXItdXRpbHMvdXRpbHMnO1xuaW1wb3J0IHtEZWZhdWx0Q29sb3JSYW5nZX0gZnJvbSAnY29uc3RhbnRzL2NvbG9yLXJhbmdlcyc7XG5pbXBvcnQge0xBWUVSX1ZJU19DT05GSUdTfSBmcm9tICdsYXllcnMvbGF5ZXItZmFjdG9yeSc7XG5pbXBvcnQge1NDQUxFX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmltcG9ydCB7XG4gIGNsZWFyQ2x1c3RlcmVyQ2FjaGUsXG4gIGNsdXN0ZXJzQXRab29tLFxuICBnZXRHZW9KU09OXG59IGZyb20gJy4uL2xheWVyLXV0aWxzL2NsdXN0ZXItdXRpbHMnO1xuXG5jb25zdCBkZWZhdWx0UmFkaXVzID0gTEFZRVJfVklTX0NPTkZJR1MuY2x1c3RlclJhZGl1cy5kZWZhdWx0VmFsdWU7XG5jb25zdCBkZWZhdWx0UmFkaXVzUmFuZ2UgPSBMQVlFUl9WSVNfQ09ORklHUy5jbHVzdGVyUmFkaXVzUmFuZ2UuZGVmYXVsdFZhbHVlO1xuXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIGNsdXN0ZXJSYWRpdXM6IGRlZmF1bHRSYWRpdXMsXG4gIGNvbG9yRG9tYWluOiBudWxsLFxuICBjb2xvclJhbmdlOiBEZWZhdWx0Q29sb3JSYW5nZSxcbiAgY29sb3JTY2FsZTogU0NBTEVfVFlQRVMucXVhbnRpemUsXG4gIHJhZGl1c1JhbmdlOiBkZWZhdWx0UmFkaXVzUmFuZ2UsXG5cbiAgLy8gbWF5YmUgbGF0ZXIuLi5cbiAgbG93ZXJQZXJjZW50aWxlOiAwLFxuICB1cHBlclBlcmNlbnRpbGU6IDEwMCxcblxuICBnZXRQb3NpdGlvbjogeCA9PiB4LnBvc2l0aW9uLFxuXG4gIC8vIGlmIHdhbnQgdG8gaGF2ZSBjb2xvciBiYXNlZCBvbiBjdXN0b21pemVkIGFnZ3JlZ2F0b3IsIGluc3RlYWQgb2YgY291bnRcbiAgZ2V0Q29sb3JWYWx1ZTogcG9pbnRzID0+IHBvaW50cy5sZW5ndGgsXG5cbiAgLy8gIGlmIHdhbnQgdG8gaGF2ZSByYWRpdXMgYmFzZWQgb24gY3VzdG9taXplZCBhZ2dyZWdhdG9yLCBpbnN0ZWFkIG9mIGNvdW50XG4gIGdldFJhZGl1c1ZhbHVlOiBjZWxsID0+IGNlbGwucHJvcGVydGllcy5wb2ludF9jb3VudCxcbiAgZnA2NDogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsdXN0ZXJMYXllciBleHRlbmRzIENvbXBvc2l0ZUxheWVyIHtcbiAgaW5pdGlhbGl6ZVN0YXRlKCkge1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjbHVzdGVyczogbnVsbCxcbiAgICAgIGdlb0pTT046IG51bGxcbiAgICB9O1xuICB9XG5cbiAgc2hvdWxkVXBkYXRlU3RhdGUoe2NoYW5nZUZsYWdzfSkge1xuICAgIHJldHVybiBjaGFuZ2VGbGFncy5zb21ldGhpbmdDaGFuZ2VkO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoe2NvbnRleHQsIG9sZFByb3BzLCBwcm9wcywgY2hhbmdlRmxhZ3N9KSB7XG4gICAgaWYgKGNoYW5nZUZsYWdzLmRhdGFDaGFuZ2VkIHx8IHRoaXMubmVlZHNSZVByb2plY3RQb2ludHMob2xkUHJvcHMsIHByb3BzKSkge1xuICAgICAgLy8gcHJvamVjdCBkYXRhIGludG8gY2x1c3RlcnMsIGFuZCBnZXQgY2x1c3RlcmVkIGRhdGFcbiAgICAgIHRoaXMucHJvY2Vzc0dlb0pTT04oKTtcbiAgICAgIHRoaXMuZ2V0Q2x1c3RlcnMoKTtcblxuICAgICAgLy8gdGhpcyBuZWVkcyBjbHVzdGVyZWQgZGF0YSB0byBiZSBzZXRcbiAgICAgIHRoaXMuZ2V0Q29sb3JWYWx1ZURvbWFpbigpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uZWVkc1JlY2x1c3RlclBvaW50cyhvbGRQcm9wcywgcHJvcHMpKSB7XG4gICAgICB0aGlzLmdldENsdXN0ZXJzKCk7XG4gICAgICB0aGlzLmdldENvbG9yVmFsdWVEb21haW4oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVlZHNSZWNhbGN1bGF0ZVNjYWxlRnVuY3Rpb24ob2xkUHJvcHMsIHByb3BzKSkge1xuICAgICAgdGhpcy5nZXRDb2xvclZhbHVlRG9tYWluKCk7XG4gICAgfVxuICB9XG5cbiAgbmVlZHNSZVByb2plY3RQb2ludHMob2xkUHJvcHMsIHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG9sZFByb3BzLmNsdXN0ZXJSYWRpdXMgIT09IHByb3BzLmNsdXN0ZXJSYWRpdXMgfHxcbiAgICAgIG9sZFByb3BzLmdldFBvc2l0aW9uICE9PSBwcm9wcy5nZXRQb3NpdGlvblxuICAgICk7XG4gIH1cblxuICBuZWVkc1JlY2x1c3RlclBvaW50cyhvbGRQcm9wcywgcHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgTWF0aC5yb3VuZChvbGRQcm9wcy56b29tKSAhPT0gTWF0aC5yb3VuZChwcm9wcy56b29tKVxuICAgICk7XG4gIH1cblxuICBuZWVkc1JlY2FsY3VsYXRlU2NhbGVGdW5jdGlvbihvbGRQcm9wcywgcHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgbmVlZHNSZWNhbGN1bGF0ZUNvbG9yRG9tYWluKG9sZFByb3BzLCBwcm9wcykgfHxcbiAgICAgIG5lZWRSZUNhbGN1bGF0ZVNjYWxlRnVuY3Rpb24ob2xkUHJvcHMsIHByb3BzKSB8fFxuICAgICAgbmVlZHNSZWNhbGN1bGF0ZVJhZGl1c1JhbmdlKG9sZFByb3BzLCBwcm9wcykgfHxcbiAgICAgIG9sZFByb3BzLmdldENvbG9yVmFsdWUgIT09IHByb3BzLmdldENvbG9yVmFsdWVcbiAgICApO1xuICB9XG5cbiAgcHJvY2Vzc0dlb0pTT04oKSB7XG4gICAgY29uc3Qge2RhdGEsIGdldFBvc2l0aW9ufSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Z2VvSlNPTjogZ2V0R2VvSlNPTihkYXRhLCBnZXRQb3NpdGlvbil9KTtcbiAgICBjbGVhckNsdXN0ZXJlckNhY2hlKCk7XG4gIH1cblxuICBnZXRDbHVzdGVycygpIHtcbiAgICBjb25zdCB7Z2VvSlNPTn0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtjbHVzdGVyUmFkaXVzfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgdmlld3BvcnQsXG4gICAgICB2aWV3cG9ydDoge2xvbmdpdHVkZSwgbGF0aXR1ZGUsIGhlaWdodCwgd2lkdGh9XG4gICAgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIC8vIHpvb20gbmVlZHMgdG8gYmUgYW4gaW50ZWdlciBmb3IgdGhlIGRpZmZlcmVudCBtYXAgdXRpbHMuIEFsc28gaGVscHMgd2l0aCBjYWNoZSBrZXkuXG4gICAgY29uc3Qgem9vbSA9IE1hdGgucm91bmQodmlld3BvcnQuem9vbSk7XG4gICAgY29uc3QgYmJveCA9IGdlb1ZpZXdwb3J0LmJvdW5kcyhbbG9uZ2l0dWRlLCBsYXRpdHVkZV0sIHpvb20sIFtcbiAgICAgIHdpZHRoLFxuICAgICAgaGVpZ2h0XG4gICAgXSk7XG5cbiAgICBjb25zdCBjbHVzdGVycyA9IGNsdXN0ZXJzQXRab29tKHtiYm94LCBjbHVzdGVyUmFkaXVzLCBnZW9KU09OLCB6b29tfSk7XG5cbiAgICBpZiAoY2x1c3RlcnMgIT09IG51bGwgJiYgY2x1c3RlcnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjbHVzdGVyc30pO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0Q29sb3JWYWx1ZURvbWFpbigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvclNjYWxlLFxuICAgICAgZ2V0Q29sb3JWYWx1ZSxcbiAgICAgIGdldFJhZGl1c1ZhbHVlLFxuICAgICAgb25TZXRDb2xvckRvbWFpblxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtjbHVzdGVyc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgcmFkaXVzRG9tYWluID0gWzAsIG1heChjbHVzdGVycywgZ2V0UmFkaXVzVmFsdWUpXTtcblxuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0gY2x1c3RlcnMubWFwKGQgPT4gZ2V0Q29sb3JWYWx1ZShkLnByb3BlcnRpZXMucG9pbnRzKSk7XG5cbiAgICBjb25zdCBpZGVudGl0eSA9IGQgPT4gZDtcblxuICAgIGNvbnN0IGNvbG9yRG9tYWluID1cbiAgICAgIGNvbG9yU2NhbGUgPT09IFNDQUxFX1RZUEVTLm9yZGluYWxcbiAgICAgICAgPyBnZXRPcmRpbmFsRG9tYWluKGNvbG9yVmFsdWVzLCBpZGVudGl0eSlcbiAgICAgICAgOiBjb2xvclNjYWxlID09PSBTQ0FMRV9UWVBFUy5xdWFudGlsZVxuICAgICAgICAgID8gZ2V0UXVhbnRpbGVEb21haW4oY29sb3JWYWx1ZXMsIGlkZW50aXR5LCBhc2NlbmRpbmcpXG4gICAgICAgICAgOiBnZXRMaW5lYXJEb21haW4oY29sb3JWYWx1ZXMsIGlkZW50aXR5KTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY29sb3JEb21haW4sXG4gICAgICByYWRpdXNEb21haW5cbiAgICB9KTtcblxuICAgIGdldENvbG9yU2NhbGVGdW5jdGlvbih0aGlzKTtcbiAgICBnZXRSYWRpdXNTY2FsZUZ1bmN0aW9uKHRoaXMpO1xuXG4gICAgb25TZXRDb2xvckRvbWFpbihjb2xvckRvbWFpbik7XG4gIH1cblxuICBnZXRVcGRhdGVUcmlnZ2VycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Q29sb3I6IHtcbiAgICAgICAgY29sb3JSYW5nZTogdGhpcy5wcm9wcy5jb2xvclJhbmdlLFxuICAgICAgICBjb2xvckRvbWFpbjogdGhpcy5wcm9wcy5jb2xvckRvbWFpbixcbiAgICAgICAgZ2V0Q29sb3JWYWx1ZTogdGhpcy5wcm9wcy5nZXRDb2xvclZhbHVlLFxuICAgICAgICBjb2xvclNjYWxlOiB0aGlzLnByb3BzLmNvbG9yU2NhbGUsXG4gICAgICAgIGxvd2VyUGVyY2VudGlsZTogdGhpcy5wcm9wcy5sb3dlclBlcmNlbnRpbGUsXG4gICAgICAgIHVwcGVyUGVyY2VudGlsZTogdGhpcy5wcm9wcy51cHBlclBlcmNlbnRpbGVcbiAgICAgIH0sXG4gICAgICBnZXRSYWRpdXM6IHtcbiAgICAgICAgcmFkaXVzUmFuZ2U6IHRoaXMucHJvcHMucmFkaXVzUmFuZ2UsXG4gICAgICAgIHJhZGl1c0RvbWFpbjogdGhpcy5wcm9wcy5yYWRpdXNEb21haW4sXG4gICAgICAgIGdldFJhZGl1c1ZhbHVlOiB0aGlzLnByb3BzLmdldFJhZGl1c1ZhbHVlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qXG4gICAqIG92ZXJyaWRlIGRlZmF1bHQgbGF5ZXIgbWV0aG9kIHRvIGNhbGN1bGF0ZSBjZWxsIGNvbG9yIGJhc2VkIG9uIGNvbG9yIHNjYWxlIGZ1bmN0aW9uXG4gICAqL1xuICBfb25HZXRTdWJsYXllckNvbG9yKGNlbGwpIHtcbiAgICBjb25zdCB7Z2V0Q29sb3JWYWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtjb2xvclNjYWxlRnVuYywgY29sb3JEb21haW59ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGN2ID0gZ2V0Q29sb3JWYWx1ZShjZWxsLnByb3BlcnRpZXMucG9pbnRzKTtcblxuICAgIC8vIGlmIGNlbGwgdmFsdWUgaXMgb3V0c2lkZSBkb21haW4sIHNldCBhbHBoYSB0byAwXG4gICAgY29uc3QgY29sb3IgPVxuICAgICAgY3YgPj0gY29sb3JEb21haW5bMF0gJiYgY3YgPD0gY29sb3JEb21haW5bY29sb3JEb21haW4ubGVuZ3RoIC0gMV1cbiAgICAgICAgPyBjb2xvclNjYWxlRnVuYyhjdilcbiAgICAgICAgOiBbMCwgMCwgMCwgMF07XG5cbiAgICAvLyBhZGQgZmluYWwgYWxwaGEgdG8gY29sb3JcbiAgICBjb2xvclszXSA9IE51bWJlci5pc0Zpbml0ZShjb2xvclszXSkgPyBjb2xvclszXSA6IDI1NTtcblxuICAgIHJldHVybiBjb2xvcjtcbiAgfVxuXG4gIF9vbkdldFN1YmxheWVyUmFkaXVzKGNlbGwpIHtcbiAgICBjb25zdCB7Z2V0UmFkaXVzVmFsdWV9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7cmFkaXVzU2NhbGVGdW5jfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIHJhZGl1c1NjYWxlRnVuYyhnZXRSYWRpdXNWYWx1ZShjZWxsKSk7XG4gIH1cblxuICBnZXRQaWNraW5nSW5mbyh7aW5mb30pIHtcbiAgICBjb25zdCB7Y2x1c3RlcnN9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpc1BpY2tlZCA9IGluZm8ucGlja2VkICYmIGluZm8uaW5kZXggPiAtMTtcblxuICAgIGxldCBvYmplY3QgPSBudWxsO1xuICAgIGlmIChpc1BpY2tlZCkge1xuICAgICAgLy8gYWRkIGNsdXN0ZXIgY29sb3JWYWx1ZSB0byBvYmplY3RcbiAgICAgIGNvbnN0IGNsdXN0ZXIgPSBjbHVzdGVyc1tpbmZvLmluZGV4XTtcbiAgICAgIGNvbnN0IGNvbG9yVmFsdWUgPSB0aGlzLnByb3BzLmdldENvbG9yVmFsdWUoY2x1c3Rlci5wcm9wZXJ0aWVzLnBvaW50cyk7XG5cbiAgICAgIG9iamVjdCA9IHtcbiAgICAgICAgLi4uY2x1c3Rlci5wcm9wZXJ0aWVzLFxuICAgICAgICBjb2xvclZhbHVlLFxuICAgICAgICByYWRpdXM6IHRoaXMuX29uR2V0U3VibGF5ZXJSYWRpdXMoY2x1c3RlciksXG4gICAgICAgIHBvc2l0aW9uOiBjbHVzdGVyLmdlb21ldHJ5LmNvb3JkaW5hdGVzXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5pbmZvLFxuICAgICAgcGlja2VkOiBCb29sZWFuKG9iamVjdCksXG4gICAgICAvLyBvdmVycmlkZSBvYmplY3Qgd2l0aCBwaWNrZWQgY2x1c3RlciBwcm9wZXJ0eVxuICAgICAgb2JqZWN0XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlckxheWVycygpIHtcbiAgICAvLyBmb3Igc3ViY2xhc3NpbmcsIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVyblxuICAgIC8vIGN1c3RvbWl6ZWQgc3ViIGxheWVyIHByb3BzXG4gICAgY29uc3Qge2lkLCByYWRpdXNTY2FsZSwgZnA2NH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gYmFzZSBsYXllciBwcm9wc1xuICAgIGNvbnN0IHtvcGFjaXR5LCBwaWNrYWJsZSwgYXV0b0hpZ2hsaWdodCwgaGlnaGxpZ2h0Q29sb3J9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIHJldHVybiBwcm9wcyB0byB0aGUgc3VibGF5ZXIgY29uc3RydWN0b3JcbiAgICByZXR1cm4gbmV3IFNjYXR0ZXJwbG90TGF5ZXIoe1xuICAgICAgaWQ6IGAke2lkfS1jbHVzdGVyYCxcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUuY2x1c3RlcnMsXG4gICAgICByYWRpdXNTY2FsZSxcbiAgICAgIGZwNjQsXG4gICAgICBvcGFjaXR5LFxuICAgICAgcGlja2FibGUsXG4gICAgICBhdXRvSGlnaGxpZ2h0LFxuICAgICAgaGlnaGxpZ2h0Q29sb3IsXG4gICAgICBnZXRQb3NpdGlvbjogZCA9PiBkLmdlb21ldHJ5LmNvb3JkaW5hdGVzLFxuICAgICAgZ2V0UmFkaXVzOiB0aGlzLl9vbkdldFN1YmxheWVyUmFkaXVzLmJpbmQodGhpcyksXG4gICAgICBnZXRDb2xvcjogdGhpcy5fb25HZXRTdWJsYXllckNvbG9yLmJpbmQodGhpcyksXG4gICAgICB1cGRhdGVUcmlnZ2VyczogdGhpcy5nZXRVcGRhdGVUcmlnZ2VycygpXG4gICAgfSk7XG4gIH1cbn1cblxuQ2x1c3RlckxheWVyLmxheWVyTmFtZSA9ICdDbHVzdGVyTGF5ZXInO1xuQ2x1c3RlckxheWVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbiJdfQ==