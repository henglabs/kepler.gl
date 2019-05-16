"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.featureResolver = exports.featureAccessor = exports.geoJsonRequiredColumns = exports.geojsonVisConfigs = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _baseLayer = _interopRequireWildcard(require("../base-layer"));

var _deck = require("deck.gl");

var _colorUtils = require("../../utils/color-utils");

var _geojsonUtils = require("./geojson-utils");

var _geojsonLayerIcon = _interopRequireDefault(require("./geojson-layer-icon"));

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
var geojsonVisConfigs = {
  opacity: 'opacity',
  thickness: {
    type: 'number',
    defaultValue: 0.5,
    label: 'Stroke Width',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: 'stroke',
    property: 'thickness'
  },
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radius: 'radius',
  sizeRange: 'strokeWidthRange',
  radiusRange: 'radiusRange',
  heightRange: 'elevationRange',
  elevationScale: 'elevationScale',
  stroked: 'stroked',
  filled: 'filled',
  enable3d: 'enable3d',
  wireframe: 'wireframe'
};
exports.geojsonVisConfigs = geojsonVisConfigs;
var geoJsonRequiredColumns = ['geojson'];
exports.geoJsonRequiredColumns = geoJsonRequiredColumns;

var featureAccessor = function featureAccessor(_ref) {
  var geojson = _ref.geojson;
  return function (d) {
    return d[geojson.fieldIdx];
  };
};

exports.featureAccessor = featureAccessor;

var featureResolver = function featureResolver(_ref2) {
  var geojson = _ref2.geojson;
  return geojson.fieldIdx;
};

exports.featureResolver = featureResolver;

var GeoJsonLayer =
/*#__PURE__*/
function (_Layer) {
  (0, _inherits2["default"])(GeoJsonLayer, _Layer);

  function GeoJsonLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoJsonLayer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(GeoJsonLayer).call(this, props));
    _this.dataToFeature = {};

    _this.registerVisConfig(geojsonVisConfigs);

    _this.getFeature = (0, _lodash["default"])(featureAccessor, featureResolver);
    return _this;
  }

  (0, _createClass2["default"])(GeoJsonLayer, [{
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getFeature(this.config.columns);
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _objectSpread2["default"])({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        // add height visual channel
        heightField: null,
        heightDomain: [0, 1],
        heightScale: 'linear',
        // add radius visual channel
        radiusField: null,
        radiusDomain: [0, 1],
        radiusScale: 'linear',
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    }
  }, {
    key: "getHoverData",
    value: function getHoverData(object, allData) {
      // index of allData is saved to feature.properties
      return allData[object.properties.index];
    } // TODO: fix complexity

    /* eslint-disable complexity */

  }, {
    key: "formatLayerData",
    value: function formatLayerData(_, allData, filteredIndex, oldLayerData) {
      var _this2 = this;

      var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorField = _this$config.colorField,
          colorDomain = _this$config.colorDomain,
          strokeColorField = _this$config.strokeColorField,
          strokeColorScale = _this$config.strokeColorScale,
          strokeColorDomain = _this$config.strokeColorDomain,
          color = _this$config.color,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          sizeField = _this$config.sizeField,
          heightField = _this$config.heightField,
          heightDomain = _this$config.heightDomain,
          heightScale = _this$config.heightScale,
          radiusField = _this$config.radiusField,
          radiusDomain = _this$config.radiusDomain,
          radiusScale = _this$config.radiusScale,
          visConfig = _this$config.visConfig;
      var enable3d = visConfig.enable3d,
          stroked = visConfig.stroked,
          colorRange = visConfig.colorRange,
          heightRange = visConfig.heightRange,
          sizeRange = visConfig.sizeRange,
          radiusRange = visConfig.radiusRange,
          strokeColorRange = visConfig.strokeColorRange,
          strokeColor = visConfig.strokeColor;
      var getFeature = this.getPositionAccessor(this.config.column); // geojson feature are object, if doesn't exists
      // create it and save to layer

      if (!oldLayerData || oldLayerData.getFeature !== getFeature) {
        this.updateLayerMeta(allData, getFeature);
      }

      var geojsonData;

      if (oldLayerData && oldLayerData.data && opt.sameData && oldLayerData.getFeature === getFeature) {
        // no need to create a new array of data
        // use updateTriggers to selectively re-calculate attributes
        geojsonData = oldLayerData.data;
      } else {
        // filteredIndex is a reference of index in allData which can map to feature
        geojsonData = filteredIndex.map(function (i) {
          return _this2.dataToFeature[i];
        }).filter(function (d) {
          return d;
        });
      } // fill color


      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // stroke color

      var scScale = strokeColorField && this.getVisChannelScale(strokeColorScale, strokeColorDomain, strokeColorRange.colors.map(_colorUtils.hexToRgb)); // calculate stroke scale - if stroked = true

      var sScale = sizeField && stroked && this.getVisChannelScale(sizeScale, sizeDomain, sizeRange); // calculate elevation scale - if extruded = true

      var eScale = heightField && enable3d && this.getVisChannelScale(heightScale, heightDomain, heightRange); // point radius

      var rScale = radiusField && this.getVisChannelScale(radiusScale, radiusDomain, radiusRange);
      return {
        data: geojsonData,
        getFeature: getFeature,
        getFillColor: function getFillColor(d) {
          return cScale ? _this2.getEncodedChannelValue(cScale, allData[d.properties.index], colorField) : d.properties.fillColor || color;
        },
        getLineColor: function getLineColor(d) {
          return scScale ? _this2.getEncodedChannelValue(scScale, allData[d.properties.index], strokeColorField) : d.properties.lineColor || strokeColor || color;
        },
        getLineWidth: function getLineWidth(d) {
          return sScale ? _this2.getEncodedChannelValue(sScale, allData[d.properties.index], sizeField, 0) : d.properties.lineWidth || 1;
        },
        getElevation: function getElevation(d) {
          return eScale ? _this2.getEncodedChannelValue(eScale, allData[d.properties.index], heightField, 0) : d.properties.elevation || 500;
        },
        getRadius: function getRadius(d) {
          return rScale ? _this2.getEncodedChannelValue(rScale, allData[d.properties.index], radiusField, 0) : d.properties.radius || 1;
        }
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getFeature = this.getPositionAccessor();
      this.dataToFeature = (0, _geojsonUtils.getGeojsonDataMaps)(allData, getFeature); // calculate layer meta

      var allFeatures = Object.values(this.dataToFeature); // get bounds from features

      var bounds = (0, _geojsonUtils.getGeojsonBounds)(allFeatures); // get lightSettings from points

      var lightSettings = this.getLightSettingsFromBounds(bounds); // if any of the feature has properties.radius set to be true

      var fixedRadius = Boolean(allFeatures.find(function (d) {
        return d && d.properties && d.properties.radius;
      })); // keep a record of what type of geometry the collection has

      var featureTypes = allFeatures.reduce(function (accu, f) {
        var geoType = (0, _geojsonUtils.featureToDeckGlGeoType)(f && f.geometry && f.geometry.type);

        if (geoType) {
          accu[geoType] = true;
        }

        return accu;
      }, {});
      this.updateMeta({
        bounds: bounds,
        lightSettings: lightSettings,
        fixedRadius: fixedRadius,
        featureTypes: featureTypes
      });
    }
  }, {
    key: "setInitialLayerConfig",
    value: function setInitialLayerConfig(allData) {
      this.updateLayerMeta(allData);
      var featureTypes = this.meta.featureTypes; // default settings is stroke: true, filled: false

      if (featureTypes && featureTypes.polygon) {
        // set both fill and stroke to true
        return this.updateLayerVisConfig({
          filled: true,
          stroked: true,
          strokeColor: _baseLayer.colorMaker.next().value
        });
      } else if (featureTypes && featureTypes.point) {
        // set fill to true if detect point
        return this.updateLayerVisConfig({
          filled: true,
          stroked: false
        });
      }

      return this;
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(_ref3) {
      var data = _ref3.data,
          idx = _ref3.idx,
          objectHovered = _ref3.objectHovered,
          mapState = _ref3.mapState,
          interactionConfig = _ref3.interactionConfig;
      var _this$meta = this.meta,
          lightSettings = _this$meta.lightSettings,
          fixedRadius = _this$meta.fixedRadius;
      var radiusScale = this.getRadiusScaleByZoom(mapState, fixedRadius);
      var zoomFactor = this.getZoomFactor(mapState);
      var visConfig = this.config.visConfig;
      var layerProps = {
        // multiplier applied just so it being consistent with previously saved maps
        lineWidthScale: visConfig.thickness * zoomFactor * 8,
        lineWidthMinPixels: 1,
        elevationScale: visConfig.elevationScale,
        pointRadiusScale: radiusScale,
        lineMiterLimit: 4
      };
      var updateTriggers = {
        getElevation: {
          heightField: this.config.heightField,
          heightScale: this.config.heightScale,
          heightRange: visConfig.heightRange
        },
        getFillColor: {
          color: this.config.color,
          colorField: this.config.colorField,
          colorRange: visConfig.colorRange,
          colorScale: this.config.colorScale
        },
        getLineColor: {
          color: visConfig.strokeColor,
          colorField: this.config.strokeColorField,
          colorRange: visConfig.strokeColorRange,
          colorScale: this.config.strokeColorScale
        },
        getLineWidth: {
          sizeField: this.config.sizeField,
          sizeRange: visConfig.sizeRange
        },
        getRadius: {
          radiusField: this.config.radiusField,
          radiusRange: visConfig.radiusRange
        }
      };
      return [new _deck.GeoJsonLayer((0, _objectSpread2["default"])({}, layerProps, {
        id: this.id,
        idx: idx,
        data: data.data,
        getFillColor: data.getFillColor,
        getLineColor: data.getLineColor,
        getLineWidth: data.getLineWidth,
        getRadius: data.getRadius,
        getElevation: data.getElevation,
        // highlight
        pickable: true,
        highlightColor: _defaultSettings.HIGHLIGH_COLOR_3D,
        autoHighlight: visConfig.enable3d,
        // parameters
        parameters: {
          depthTest: Boolean(visConfig.enable3d || mapState.dragRotate)
        },
        opacity: visConfig.opacity,
        stroked: visConfig.stroked,
        filled: visConfig.filled,
        extruded: visConfig.enable3d,
        wireframe: visConfig.wireframe,
        lineMiterLimit: 2,
        rounded: true,
        lightSettings: lightSettings,
        updateTriggers: updateTriggers
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) && !visConfig.enable3d ? [new _deck.GeoJsonLayer((0, _objectSpread2["default"])({}, layerProps, {
        id: "".concat(this.id, "-hovered"),
        data: [objectHovered.object],
        getLineWidth: data.getLineWidth,
        getRadius: data.getRadius,
        getElevation: data.getElevation,
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        updateTriggers: updateTriggers,
        stroked: true,
        pickable: false,
        filled: false
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'geojson';
    }
  }, {
    key: "name",
    get: function get() {
      return 'Polygon';
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _geojsonLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return geoJsonRequiredColumns;
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return (0, _objectSpread2["default"])({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "visualChannels", this), {
        strokeColor: {
          property: 'strokeColor',
          field: 'strokeColorField',
          scale: 'strokeColorScale',
          domain: 'strokeColorDomain',
          range: 'strokeColorRange',
          key: 'strokeColor',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: (0, _objectSpread2["default"])({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(GeoJsonLayer.prototype), "visualChannels", this).size, {
          property: 'stroke',
          condition: function condition(config) {
            return config.visConfig.stroked;
          }
        }),
        height: {
          property: 'height',
          field: 'heightField',
          scale: 'heightScale',
          domain: 'heightDomain',
          range: 'heightRange',
          key: 'height',
          channelScaleType: 'size',
          condition: function condition(config) {
            return config.visConfig.enable3d;
          }
        },
        radius: {
          property: 'radius',
          field: 'radiusField',
          scale: 'radiusScale',
          domain: 'radiusDomain',
          range: 'radiusRange',
          key: 'radius',
          channelScaleType: 'radius'
        }
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4) {
      var _this3 = this;

      var label = _ref4.label,
          fields = _ref4.fields;
      var geojsonColumns = fields.filter(function (f) {
        return f.type === 'geojson';
      }).map(function (f) {
        return f.name;
      });
      var defaultColumns = {
        geojson: (0, _lodash2["default"])([].concat((0, _toConsumableArray2["default"])(_defaultSettings.GEOJSON_FIELDS.geojson), (0, _toConsumableArray2["default"])(geojsonColumns)))
      };
      var foundColumns = this.findDefaultColumnField(defaultColumns, fields);

      if (!foundColumns || !foundColumns.length) {
        return [];
      }

      return foundColumns.map(function (columns) {
        return {
          label: typeof label === 'string' && label.replace(/\.[^/.]+$/, '') || _this3.type,
          columns: columns,
          isVisible: true
        };
      });
    }
  }]);
  return GeoJsonLayer;
}(_baseLayer["default"]);

exports["default"] = GeoJsonLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvZ2VvanNvbi1sYXllci9nZW9qc29uLWxheWVyLmpzIl0sIm5hbWVzIjpbImdlb2pzb25WaXNDb25maWdzIiwib3BhY2l0eSIsInRoaWNrbmVzcyIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJsYWJlbCIsImlzUmFuZ2VkIiwicmFuZ2UiLCJzdGVwIiwiZ3JvdXAiLCJwcm9wZXJ0eSIsInN0cm9rZUNvbG9yIiwiY29sb3JSYW5nZSIsInN0cm9rZUNvbG9yUmFuZ2UiLCJyYWRpdXMiLCJzaXplUmFuZ2UiLCJyYWRpdXNSYW5nZSIsImhlaWdodFJhbmdlIiwiZWxldmF0aW9uU2NhbGUiLCJzdHJva2VkIiwiZmlsbGVkIiwiZW5hYmxlM2QiLCJ3aXJlZnJhbWUiLCJnZW9Kc29uUmVxdWlyZWRDb2x1bW5zIiwiZmVhdHVyZUFjY2Vzc29yIiwiZ2VvanNvbiIsImQiLCJmaWVsZElkeCIsImZlYXR1cmVSZXNvbHZlciIsIkdlb0pzb25MYXllciIsInByb3BzIiwiZGF0YVRvRmVhdHVyZSIsInJlZ2lzdGVyVmlzQ29uZmlnIiwiZ2V0RmVhdHVyZSIsImNvbmZpZyIsImNvbHVtbnMiLCJoZWlnaHRGaWVsZCIsImhlaWdodERvbWFpbiIsImhlaWdodFNjYWxlIiwicmFkaXVzRmllbGQiLCJyYWRpdXNEb21haW4iLCJyYWRpdXNTY2FsZSIsInN0cm9rZUNvbG9yRmllbGQiLCJzdHJva2VDb2xvckRvbWFpbiIsInN0cm9rZUNvbG9yU2NhbGUiLCJvYmplY3QiLCJhbGxEYXRhIiwicHJvcGVydGllcyIsImluZGV4IiwiXyIsImZpbHRlcmVkSW5kZXgiLCJvbGRMYXllckRhdGEiLCJvcHQiLCJjb2xvclNjYWxlIiwiY29sb3JGaWVsZCIsImNvbG9yRG9tYWluIiwiY29sb3IiLCJzaXplU2NhbGUiLCJzaXplRG9tYWluIiwic2l6ZUZpZWxkIiwidmlzQ29uZmlnIiwiZ2V0UG9zaXRpb25BY2Nlc3NvciIsImNvbHVtbiIsInVwZGF0ZUxheWVyTWV0YSIsImdlb2pzb25EYXRhIiwiZGF0YSIsInNhbWVEYXRhIiwibWFwIiwiaSIsImZpbHRlciIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsImhleFRvUmdiIiwic2NTY2FsZSIsInNTY2FsZSIsImVTY2FsZSIsInJTY2FsZSIsImdldEZpbGxDb2xvciIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJmaWxsQ29sb3IiLCJnZXRMaW5lQ29sb3IiLCJsaW5lQ29sb3IiLCJnZXRMaW5lV2lkdGgiLCJsaW5lV2lkdGgiLCJnZXRFbGV2YXRpb24iLCJlbGV2YXRpb24iLCJnZXRSYWRpdXMiLCJhbGxGZWF0dXJlcyIsIk9iamVjdCIsInZhbHVlcyIsImJvdW5kcyIsImxpZ2h0U2V0dGluZ3MiLCJnZXRMaWdodFNldHRpbmdzRnJvbUJvdW5kcyIsImZpeGVkUmFkaXVzIiwiQm9vbGVhbiIsImZpbmQiLCJmZWF0dXJlVHlwZXMiLCJyZWR1Y2UiLCJhY2N1IiwiZiIsImdlb1R5cGUiLCJnZW9tZXRyeSIsInVwZGF0ZU1ldGEiLCJtZXRhIiwicG9seWdvbiIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwiY29sb3JNYWtlciIsIm5leHQiLCJ2YWx1ZSIsInBvaW50IiwiaWR4Iiwib2JqZWN0SG92ZXJlZCIsIm1hcFN0YXRlIiwiaW50ZXJhY3Rpb25Db25maWciLCJnZXRSYWRpdXNTY2FsZUJ5Wm9vbSIsInpvb21GYWN0b3IiLCJnZXRab29tRmFjdG9yIiwibGF5ZXJQcm9wcyIsImxpbmVXaWR0aFNjYWxlIiwibGluZVdpZHRoTWluUGl4ZWxzIiwicG9pbnRSYWRpdXNTY2FsZSIsImxpbmVNaXRlckxpbWl0IiwidXBkYXRlVHJpZ2dlcnMiLCJEZWNrR0xHZW9Kc29uTGF5ZXIiLCJpZCIsInBpY2thYmxlIiwiaGlnaGxpZ2h0Q29sb3IiLCJISUdITElHSF9DT0xPUl8zRCIsImF1dG9IaWdobGlnaHQiLCJwYXJhbWV0ZXJzIiwiZGVwdGhUZXN0IiwiZHJhZ1JvdGF0ZSIsImV4dHJ1ZGVkIiwicm91bmRlZCIsImlzTGF5ZXJIb3ZlcmVkIiwiR2VvanNvbkxheWVySWNvbiIsImZpZWxkIiwic2NhbGUiLCJkb21haW4iLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJzaXplIiwiY29uZGl0aW9uIiwiaGVpZ2h0IiwiZmllbGRzIiwiZ2VvanNvbkNvbHVtbnMiLCJuYW1lIiwiZGVmYXVsdENvbHVtbnMiLCJHRU9KU09OX0ZJRUxEUyIsImZvdW5kQ29sdW1ucyIsImZpbmREZWZhdWx0Q29sdW1uRmllbGQiLCJsZW5ndGgiLCJyZXBsYWNlIiwiaXNWaXNpYmxlIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQk8sSUFBTUEsaUJBQWlCLEdBQUc7QUFDL0JDLEVBQUFBLE9BQU8sRUFBRSxTQURzQjtBQUUvQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRSxRQURHO0FBRVRDLElBQUFBLFlBQVksRUFBRSxHQUZMO0FBR1RDLElBQUFBLEtBQUssRUFBRSxjQUhFO0FBSVRDLElBQUFBLFFBQVEsRUFBRSxLQUpEO0FBS1RDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBTEU7QUFNVEMsSUFBQUEsSUFBSSxFQUFFLEdBTkc7QUFPVEMsSUFBQUEsS0FBSyxFQUFFLFFBUEU7QUFRVEMsSUFBQUEsUUFBUSxFQUFFO0FBUkQsR0FGb0I7QUFZL0JDLEVBQUFBLFdBQVcsRUFBRSxhQVprQjtBQWEvQkMsRUFBQUEsVUFBVSxFQUFFLFlBYm1CO0FBYy9CQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFkYTtBQWUvQkMsRUFBQUEsTUFBTSxFQUFF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YixDQUFpQixVQUFBaEMsT0FBTztBQUFBLGVBQUs7QUFDbEM5QixVQUFBQSxLQUFLLEVBQUUsT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUE2QkEsS0FBSyxDQUFDcUosT0FBTixDQUFjLFdBQWQsRUFBMkIsRUFBM0IsQ0FBN0IsSUFBK0QsTUFBSSxDQUFDdkosSUFEekM7QUFFbENnQyxVQUFBQSxPQUFPLEVBQVBBLE9BRmtDO0FBR2xDd0gsVUFBQUEsU0FBUyxFQUFFO0FBSHVCLFNBQUw7QUFBQSxPQUF4QixDQUFQO0FBS0Q7OztFQXZGdUNDLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuXG5pbXBvcnQgTGF5ZXIsIHtjb2xvck1ha2VyfSBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCB7R2VvSnNvbkxheWVyIGFzIERlY2tHTEdlb0pzb25MYXllcn0gZnJvbSAnZGVjay5nbCc7XG5cbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7XG4gIGdldEdlb2pzb25EYXRhTWFwcyxcbiAgZ2V0R2VvanNvbkJvdW5kcyxcbiAgZmVhdHVyZVRvRGVja0dsR2VvVHlwZVxufSBmcm9tICcuL2dlb2pzb24tdXRpbHMnO1xuaW1wb3J0IEdlb2pzb25MYXllckljb24gZnJvbSAnLi9nZW9qc29uLWxheWVyLWljb24nO1xuaW1wb3J0IHtHRU9KU09OX0ZJRUxEUywgSElHSExJR0hfQ09MT1JfM0QsIENIQU5ORUxfU0NBTEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmV4cG9ydCBjb25zdCBnZW9qc29uVmlzQ29uZmlncyA9IHtcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICB0aGlja25lc3M6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDAuNSxcbiAgICBsYWJlbDogJ1N0cm9rZSBXaWR0aCcsXG4gICAgaXNSYW5nZWQ6IGZhbHNlLFxuICAgIHJhbmdlOiBbMCwgMTAwXSxcbiAgICBzdGVwOiAwLjEsXG4gICAgZ3JvdXA6ICdzdHJva2UnLFxuICAgIHByb3BlcnR5OiAndGhpY2tuZXNzJ1xuICB9LFxuICBzdHJva2VDb2xvcjogJ3N0cm9rZUNvbG9yJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBzdHJva2VDb2xvclJhbmdlOiAnc3Ryb2tlQ29sb3JSYW5nZScsXG4gIHJhZGl1czogJ3JhZGl1cycsXG5cbiAgc2l6ZVJhbmdlOiAnc3Ryb2tlV2lkdGhSYW5nZScsXG4gIHJhZGl1c1JhbmdlOiAncmFkaXVzUmFuZ2UnLFxuICBoZWlnaHRSYW5nZTogJ2VsZXZhdGlvblJhbmdlJyxcbiAgZWxldmF0aW9uU2NhbGU6ICdlbGV2YXRpb25TY2FsZScsXG4gIHN0cm9rZWQ6ICdzdHJva2VkJyxcbiAgZmlsbGVkOiAnZmlsbGVkJyxcbiAgZW5hYmxlM2Q6ICdlbmFibGUzZCcsXG4gIHdpcmVmcmFtZTogJ3dpcmVmcmFtZSdcbn07XG5cbmV4cG9ydCBjb25zdCBnZW9Kc29uUmVxdWlyZWRDb2x1bW5zID0gWydnZW9qc29uJ107XG5leHBvcnQgY29uc3QgZmVhdHVyZUFjY2Vzc29yID0gKHtnZW9qc29ufSkgPT4gZCA9PiBkW2dlb2pzb24uZmllbGRJZHhdO1xuZXhwb3J0IGNvbnN0IGZlYXR1cmVSZXNvbHZlciA9ICh7Z2VvanNvbn0pID0+IGdlb2pzb24uZmllbGRJZHg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlb0pzb25MYXllciBleHRlbmRzIExheWVyIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmRhdGFUb0ZlYXR1cmUgPSB7fTtcbiAgICB0aGlzLnJlZ2lzdGVyVmlzQ29uZmlnKGdlb2pzb25WaXNDb25maWdzKTtcbiAgICB0aGlzLmdldEZlYXR1cmUgPSBtZW1vaXplKGZlYXR1cmVBY2Nlc3NvciwgZmVhdHVyZVJlc29sdmVyKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAnZ2VvanNvbic7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gJ1BvbHlnb24nO1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gR2VvanNvbkxheWVySWNvbjtcbiAgfVxuXG4gIGdldCByZXF1aXJlZExheWVyQ29sdW1ucygpIHtcbiAgICByZXR1cm4gZ2VvSnNvblJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCB2aXN1YWxDaGFubmVscygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMsXG4gICAgICBzdHJva2VDb2xvcjoge1xuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgZmllbGQ6ICdzdHJva2VDb2xvckZpZWxkJyxcbiAgICAgICAgc2NhbGU6ICdzdHJva2VDb2xvclNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnc3Ryb2tlQ29sb3JEb21haW4nLFxuICAgICAgICByYW5nZTogJ3N0cm9rZUNvbG9yUmFuZ2UnLFxuICAgICAgICBrZXk6ICdzdHJva2VDb2xvcicsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6IENIQU5ORUxfU0NBTEVTLmNvbG9yXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscy5zaXplLFxuICAgICAgICBwcm9wZXJ0eTogJ3N0cm9rZScsXG4gICAgICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy52aXNDb25maWcuc3Ryb2tlZFxuICAgICAgfSxcbiAgICAgIGhlaWdodDoge1xuICAgICAgICBwcm9wZXJ0eTogJ2hlaWdodCcsXG4gICAgICAgIGZpZWxkOiAnaGVpZ2h0RmllbGQnLFxuICAgICAgICBzY2FsZTogJ2hlaWdodFNjYWxlJyxcbiAgICAgICAgZG9tYWluOiAnaGVpZ2h0RG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdoZWlnaHRSYW5nZScsXG4gICAgICAgIGtleTogJ2hlaWdodCcsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6ICdzaXplJyxcbiAgICAgICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5lbmFibGUzZFxuICAgICAgfSxcbiAgICAgIHJhZGl1czoge1xuICAgICAgICBwcm9wZXJ0eTogJ3JhZGl1cycsXG4gICAgICAgIGZpZWxkOiAncmFkaXVzRmllbGQnLFxuICAgICAgICBzY2FsZTogJ3JhZGl1c1NjYWxlJyxcbiAgICAgICAgZG9tYWluOiAncmFkaXVzRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdyYWRpdXNSYW5nZScsXG4gICAgICAgIGtleTogJ3JhZGl1cycsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6ICdyYWRpdXMnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uQWNjZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmVhdHVyZSh0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2xhYmVsLCBmaWVsZHN9KSB7XG4gICAgY29uc3QgZ2VvanNvbkNvbHVtbnMgPSBmaWVsZHNcbiAgICAgIC5maWx0ZXIoZiA9PiBmLnR5cGUgPT09ICdnZW9qc29uJylcbiAgICAgIC5tYXAoZiA9PiBmLm5hbWUpO1xuXG4gICAgY29uc3QgZGVmYXVsdENvbHVtbnMgPSB7XG4gICAgICBnZW9qc29uOiB1bmlxKFsuLi5HRU9KU09OX0ZJRUxEUy5nZW9qc29uLCAuLi5nZW9qc29uQ29sdW1uc10pXG4gICAgfTtcblxuICAgIGNvbnN0IGZvdW5kQ29sdW1ucyA9IHRoaXMuZmluZERlZmF1bHRDb2x1bW5GaWVsZChkZWZhdWx0Q29sdW1ucywgZmllbGRzKTtcbiAgICBpZiAoIWZvdW5kQ29sdW1ucyB8fCAhZm91bmRDb2x1bW5zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZENvbHVtbnMubWFwKGNvbHVtbnMgPT4gKHtcbiAgICAgIGxhYmVsOiB0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnICYmIGxhYmVsLnJlcGxhY2UoL1xcLlteLy5dKyQvLCAnJykgfHwgdGhpcy50eXBlLFxuICAgICAgY29sdW1ucyxcbiAgICAgIGlzVmlzaWJsZTogdHJ1ZVxuICAgIH0pKTtcbiAgfVxuXG4gIGdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyA9IHt9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRMYXllckNvbmZpZyhwcm9wcyksXG5cbiAgICAgIC8vIGFkZCBoZWlnaHQgdmlzdWFsIGNoYW5uZWxcbiAgICAgIGhlaWdodEZpZWxkOiBudWxsLFxuICAgICAgaGVpZ2h0RG9tYWluOiBbMCwgMV0sXG4gICAgICBoZWlnaHRTY2FsZTogJ2xpbmVhcicsXG5cbiAgICAgIC8vIGFkZCByYWRpdXMgdmlzdWFsIGNoYW5uZWxcbiAgICAgIHJhZGl1c0ZpZWxkOiBudWxsLFxuICAgICAgcmFkaXVzRG9tYWluOiBbMCwgMV0sXG4gICAgICByYWRpdXNTY2FsZTogJ2xpbmVhcicsXG5cbiAgICAgIC8vIGFkZCBzdHJva2UgY29sb3IgdmlzdWFsIGNoYW5uZWxcbiAgICAgIHN0cm9rZUNvbG9yRmllbGQ6IG51bGwsXG4gICAgICBzdHJva2VDb2xvckRvbWFpbjogWzAsIDFdLFxuICAgICAgc3Ryb2tlQ29sb3JTY2FsZTogJ3F1YW50aWxlJ1xuICAgIH07XG4gIH1cblxuICBnZXRIb3ZlckRhdGEob2JqZWN0LCBhbGxEYXRhKSB7XG4gICAgLy8gaW5kZXggb2YgYWxsRGF0YSBpcyBzYXZlZCB0byBmZWF0dXJlLnByb3BlcnRpZXNcbiAgICByZXR1cm4gYWxsRGF0YVtvYmplY3QucHJvcGVydGllcy5pbmRleF07XG4gIH1cblxuICAvLyBUT0RPOiBmaXggY29tcGxleGl0eVxuICAvKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG4gIGZvcm1hdExheWVyRGF0YShfLCBhbGxEYXRhLCBmaWx0ZXJlZEluZGV4LCBvbGRMYXllckRhdGEsIG9wdCA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgY29sb3JTY2FsZSxcbiAgICAgIGNvbG9yRmllbGQsXG4gICAgICBjb2xvckRvbWFpbixcbiAgICAgIHN0cm9rZUNvbG9yRmllbGQsXG4gICAgICBzdHJva2VDb2xvclNjYWxlLFxuICAgICAgc3Ryb2tlQ29sb3JEb21haW4sXG4gICAgICBjb2xvcixcbiAgICAgIHNpemVTY2FsZSxcbiAgICAgIHNpemVEb21haW4sXG4gICAgICBzaXplRmllbGQsXG4gICAgICBoZWlnaHRGaWVsZCxcbiAgICAgIGhlaWdodERvbWFpbixcbiAgICAgIGhlaWdodFNjYWxlLFxuICAgICAgcmFkaXVzRmllbGQsXG4gICAgICByYWRpdXNEb21haW4sXG4gICAgICByYWRpdXNTY2FsZSxcbiAgICAgIHZpc0NvbmZpZ1xuICAgIH0gPSB0aGlzLmNvbmZpZztcblxuICAgIGNvbnN0IHtcbiAgICAgIGVuYWJsZTNkLFxuICAgICAgc3Ryb2tlZCxcbiAgICAgIGNvbG9yUmFuZ2UsXG4gICAgICBoZWlnaHRSYW5nZSxcbiAgICAgIHNpemVSYW5nZSxcbiAgICAgIHJhZGl1c1JhbmdlLFxuICAgICAgc3Ryb2tlQ29sb3JSYW5nZSxcbiAgICAgIHN0cm9rZUNvbG9yXG4gICAgfSA9IHZpc0NvbmZpZztcblxuICAgIGNvbnN0IGdldEZlYXR1cmUgPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IodGhpcy5jb25maWcuY29sdW1uKTtcblxuICAgIC8vIGdlb2pzb24gZmVhdHVyZSBhcmUgb2JqZWN0LCBpZiBkb2Vzbid0IGV4aXN0c1xuICAgIC8vIGNyZWF0ZSBpdCBhbmQgc2F2ZSB0byBsYXllclxuICAgIGlmICghb2xkTGF5ZXJEYXRhIHx8IG9sZExheWVyRGF0YS5nZXRGZWF0dXJlICE9PSBnZXRGZWF0dXJlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRGZWF0dXJlKTtcbiAgICB9XG5cbiAgICBsZXQgZ2VvanNvbkRhdGE7XG5cbiAgICBpZiAoXG4gICAgICBvbGRMYXllckRhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5kYXRhICYmXG4gICAgICBvcHQuc2FtZURhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5nZXRGZWF0dXJlID09PSBnZXRGZWF0dXJlXG4gICAgKSB7XG4gICAgICAvLyBubyBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBhcnJheSBvZiBkYXRhXG4gICAgICAvLyB1c2UgdXBkYXRlVHJpZ2dlcnMgdG8gc2VsZWN0aXZlbHkgcmUtY2FsY3VsYXRlIGF0dHJpYnV0ZXNcbiAgICAgIGdlb2pzb25EYXRhID0gb2xkTGF5ZXJEYXRhLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGZpbHRlcmVkSW5kZXggaXMgYSByZWZlcmVuY2Ugb2YgaW5kZXggaW4gYWxsRGF0YSB3aGljaCBjYW4gbWFwIHRvIGZlYXR1cmVcbiAgICAgIGdlb2pzb25EYXRhID0gZmlsdGVyZWRJbmRleFxuICAgICAgICAubWFwKGkgPT4gdGhpcy5kYXRhVG9GZWF0dXJlW2ldKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZCk7XG4gICAgfVxuXG4gICAgLy8gZmlsbCBjb2xvclxuICAgIGNvbnN0IGNTY2FsZSA9XG4gICAgICBjb2xvckZpZWxkICYmXG4gICAgICB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShcbiAgICAgICAgY29sb3JTY2FsZSxcbiAgICAgICAgY29sb3JEb21haW4sXG4gICAgICAgIGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYilcbiAgICAgICk7XG5cbiAgICAvLyBzdHJva2UgY29sb3JcbiAgICBjb25zdCBzY1NjYWxlID1cbiAgICAgIHN0cm9rZUNvbG9yRmllbGQgJiZcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxuICAgICAgICBzdHJva2VDb2xvclNjYWxlLFxuICAgICAgICBzdHJva2VDb2xvckRvbWFpbixcbiAgICAgICAgc3Ryb2tlQ29sb3JSYW5nZS5jb2xvcnMubWFwKGhleFRvUmdiKVxuICAgICAgKTtcbiAgICAvLyBjYWxjdWxhdGUgc3Ryb2tlIHNjYWxlIC0gaWYgc3Ryb2tlZCA9IHRydWVcbiAgICBjb25zdCBzU2NhbGUgPVxuICAgICAgc2l6ZUZpZWxkICYmXG4gICAgICBzdHJva2VkICYmXG4gICAgICB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShzaXplU2NhbGUsIHNpemVEb21haW4sIHNpemVSYW5nZSk7XG5cbiAgICAvLyBjYWxjdWxhdGUgZWxldmF0aW9uIHNjYWxlIC0gaWYgZXh0cnVkZWQgPSB0cnVlXG4gICAgY29uc3QgZVNjYWxlID1cbiAgICAgIGhlaWdodEZpZWxkICYmXG4gICAgICBlbmFibGUzZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoaGVpZ2h0U2NhbGUsIGhlaWdodERvbWFpbiwgaGVpZ2h0UmFuZ2UpO1xuXG4gICAgLy8gcG9pbnQgcmFkaXVzXG4gICAgY29uc3QgclNjYWxlID1cbiAgICAgIHJhZGl1c0ZpZWxkICYmXG4gICAgICB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShyYWRpdXNTY2FsZSwgcmFkaXVzRG9tYWluLCByYWRpdXNSYW5nZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogZ2VvanNvbkRhdGEsXG4gICAgICBnZXRGZWF0dXJlLFxuICAgICAgZ2V0RmlsbENvbG9yOiBkID0+XG4gICAgICAgIGNTY2FsZVxuICAgICAgICAgID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKFxuICAgICAgICAgICAgICBjU2NhbGUsXG4gICAgICAgICAgICAgIGFsbERhdGFbZC5wcm9wZXJ0aWVzLmluZGV4XSxcbiAgICAgICAgICAgICAgY29sb3JGaWVsZFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZC5wcm9wZXJ0aWVzLmZpbGxDb2xvciB8fCBjb2xvcixcbiAgICAgIGdldExpbmVDb2xvcjogZCA9PlxuICAgICAgICBzY1NjYWxlXG4gICAgICAgICAgPyB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoXG4gICAgICAgICAgICAgIHNjU2NhbGUsXG4gICAgICAgICAgICAgIGFsbERhdGFbZC5wcm9wZXJ0aWVzLmluZGV4XSxcbiAgICAgICAgICAgICAgc3Ryb2tlQ29sb3JGaWVsZFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZC5wcm9wZXJ0aWVzLmxpbmVDb2xvciB8fCBzdHJva2VDb2xvciB8fCBjb2xvcixcbiAgICAgIGdldExpbmVXaWR0aDogZCA9PlxuICAgICAgICBzU2NhbGVcbiAgICAgICAgICA/IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShcbiAgICAgICAgICAgICAgc1NjYWxlLFxuICAgICAgICAgICAgICBhbGxEYXRhW2QucHJvcGVydGllcy5pbmRleF0sXG4gICAgICAgICAgICAgIHNpemVGaWVsZCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZC5wcm9wZXJ0aWVzLmxpbmVXaWR0aCB8fCAxLFxuICAgICAgZ2V0RWxldmF0aW9uOiBkID0+XG4gICAgICAgIGVTY2FsZVxuICAgICAgICAgID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKFxuICAgICAgICAgICAgICBlU2NhbGUsXG4gICAgICAgICAgICAgIGFsbERhdGFbZC5wcm9wZXJ0aWVzLmluZGV4XSxcbiAgICAgICAgICAgICAgaGVpZ2h0RmllbGQsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGQucHJvcGVydGllcy5lbGV2YXRpb24gfHwgNTAwLFxuICAgICAgZ2V0UmFkaXVzOiBkID0+XG4gICAgICAgIHJTY2FsZVxuICAgICAgICAgID8gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKFxuICAgICAgICAgICAgICByU2NhbGUsXG4gICAgICAgICAgICAgIGFsbERhdGFbZC5wcm9wZXJ0aWVzLmluZGV4XSxcbiAgICAgICAgICAgICAgcmFkaXVzRmllbGQsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGQucHJvcGVydGllcy5yYWRpdXMgfHwgMVxuICAgIH07XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpIHtcbiAgICBjb25zdCBnZXRGZWF0dXJlID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XG4gICAgdGhpcy5kYXRhVG9GZWF0dXJlID0gZ2V0R2VvanNvbkRhdGFNYXBzKGFsbERhdGEsIGdldEZlYXR1cmUpO1xuXG4gICAgLy8gY2FsY3VsYXRlIGxheWVyIG1ldGFcbiAgICBjb25zdCBhbGxGZWF0dXJlcyA9IE9iamVjdC52YWx1ZXModGhpcy5kYXRhVG9GZWF0dXJlKTtcblxuICAgIC8vIGdldCBib3VuZHMgZnJvbSBmZWF0dXJlc1xuICAgIGNvbnN0IGJvdW5kcyA9IGdldEdlb2pzb25Cb3VuZHMoYWxsRmVhdHVyZXMpO1xuXG4gICAgLy8gZ2V0IGxpZ2h0U2V0dGluZ3MgZnJvbSBwb2ludHNcbiAgICBjb25zdCBsaWdodFNldHRpbmdzID0gdGhpcy5nZXRMaWdodFNldHRpbmdzRnJvbUJvdW5kcyhib3VuZHMpO1xuXG4gICAgLy8gaWYgYW55IG9mIHRoZSBmZWF0dXJlIGhhcyBwcm9wZXJ0aWVzLnJhZGl1cyBzZXQgdG8gYmUgdHJ1ZVxuICAgIGNvbnN0IGZpeGVkUmFkaXVzID0gQm9vbGVhbihcbiAgICAgIGFsbEZlYXR1cmVzLmZpbmQoZCA9PiBkICYmIGQucHJvcGVydGllcyAmJiBkLnByb3BlcnRpZXMucmFkaXVzKVxuICAgICk7XG5cbiAgICAvLyBrZWVwIGEgcmVjb3JkIG9mIHdoYXQgdHlwZSBvZiBnZW9tZXRyeSB0aGUgY29sbGVjdGlvbiBoYXNcbiAgICBjb25zdCBmZWF0dXJlVHlwZXMgPSBhbGxGZWF0dXJlcy5yZWR1Y2UoKGFjY3UsIGYpID0+IHtcbiAgICAgIGNvbnN0IGdlb1R5cGUgPSBmZWF0dXJlVG9EZWNrR2xHZW9UeXBlKFxuICAgICAgICBmICYmIGYuZ2VvbWV0cnkgJiYgZi5nZW9tZXRyeS50eXBlXG4gICAgICApO1xuXG4gICAgICBpZiAoZ2VvVHlwZSkge1xuICAgICAgICBhY2N1W2dlb1R5cGVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH0sIHt9KTtcblxuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzLCBsaWdodFNldHRpbmdzLCBmaXhlZFJhZGl1cywgZmVhdHVyZVR5cGVzfSk7XG4gIH1cblxuICBzZXRJbml0aWFsTGF5ZXJDb25maWcoYWxsRGF0YSkge1xuICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpO1xuICAgIGNvbnN0IHtmZWF0dXJlVHlwZXN9ID0gdGhpcy5tZXRhO1xuICAgIC8vIGRlZmF1bHQgc2V0dGluZ3MgaXMgc3Ryb2tlOiB0cnVlLCBmaWxsZWQ6IGZhbHNlXG4gICAgaWYgKGZlYXR1cmVUeXBlcyAmJiBmZWF0dXJlVHlwZXMucG9seWdvbikge1xuICAgICAgLy8gc2V0IGJvdGggZmlsbCBhbmQgc3Ryb2tlIHRvIHRydWVcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnKHtcbiAgICAgICAgZmlsbGVkOiB0cnVlLFxuICAgICAgICBzdHJva2VkOiB0cnVlLFxuICAgICAgICBzdHJva2VDb2xvcjogY29sb3JNYWtlci5uZXh0KCkudmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZmVhdHVyZVR5cGVzICYmIGZlYXR1cmVUeXBlcy5wb2ludCkge1xuICAgICAgLy8gc2V0IGZpbGwgdG8gdHJ1ZSBpZiBkZXRlY3QgcG9pbnRcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUxheWVyVmlzQ29uZmlnKHtmaWxsZWQ6IHRydWUsIHN0cm9rZWQ6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJMYXllcih7XG4gICAgZGF0YSxcbiAgICBpZHgsXG4gICAgb2JqZWN0SG92ZXJlZCxcbiAgICBtYXBTdGF0ZSxcbiAgICBpbnRlcmFjdGlvbkNvbmZpZ1xuICB9KSB7XG4gICAgY29uc3Qge2xpZ2h0U2V0dGluZ3MsIGZpeGVkUmFkaXVzfSA9IHRoaXMubWV0YTtcbiAgICBjb25zdCByYWRpdXNTY2FsZSA9IHRoaXMuZ2V0UmFkaXVzU2NhbGVCeVpvb20obWFwU3RhdGUsIGZpeGVkUmFkaXVzKTtcbiAgICBjb25zdCB6b29tRmFjdG9yID0gdGhpcy5nZXRab29tRmFjdG9yKG1hcFN0YXRlKTtcbiAgICBjb25zdCB7dmlzQ29uZmlnfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgY29uc3QgbGF5ZXJQcm9wcyA9IHtcbiAgICAgIC8vIG11bHRpcGxpZXIgYXBwbGllZCBqdXN0IHNvIGl0IGJlaW5nIGNvbnNpc3RlbnQgd2l0aCBwcmV2aW91c2x5IHNhdmVkIG1hcHNcbiAgICAgIGxpbmVXaWR0aFNjYWxlOiB2aXNDb25maWcudGhpY2tuZXNzICogem9vbUZhY3RvciAqIDgsXG4gICAgICBsaW5lV2lkdGhNaW5QaXhlbHM6IDEsXG4gICAgICBlbGV2YXRpb25TY2FsZTogdmlzQ29uZmlnLmVsZXZhdGlvblNjYWxlLFxuICAgICAgcG9pbnRSYWRpdXNTY2FsZTogcmFkaXVzU2NhbGUsXG4gICAgICBsaW5lTWl0ZXJMaW1pdDogNFxuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcbiAgICAgIGdldEVsZXZhdGlvbjoge1xuICAgICAgICBoZWlnaHRGaWVsZDogdGhpcy5jb25maWcuaGVpZ2h0RmllbGQsXG4gICAgICAgIGhlaWdodFNjYWxlOiB0aGlzLmNvbmZpZy5oZWlnaHRTY2FsZSxcbiAgICAgICAgaGVpZ2h0UmFuZ2U6IHZpc0NvbmZpZy5oZWlnaHRSYW5nZVxuICAgICAgfSxcbiAgICAgIGdldEZpbGxDb2xvcjoge1xuICAgICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3IsXG4gICAgICAgIGNvbG9yRmllbGQ6IHRoaXMuY29uZmlnLmNvbG9yRmllbGQsXG4gICAgICAgIGNvbG9yUmFuZ2U6IHZpc0NvbmZpZy5jb2xvclJhbmdlLFxuICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5jb2xvclNjYWxlXG4gICAgICB9LFxuICAgICAgZ2V0TGluZUNvbG9yOiB7XG4gICAgICAgIGNvbG9yOiB2aXNDb25maWcuc3Ryb2tlQ29sb3IsXG4gICAgICAgIGNvbG9yRmllbGQ6IHRoaXMuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQsXG4gICAgICAgIGNvbG9yUmFuZ2U6IHZpc0NvbmZpZy5zdHJva2VDb2xvclJhbmdlLFxuICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5zdHJva2VDb2xvclNjYWxlXG4gICAgICB9LFxuICAgICAgZ2V0TGluZVdpZHRoOiB7XG4gICAgICAgIHNpemVGaWVsZDogdGhpcy5jb25maWcuc2l6ZUZpZWxkLFxuICAgICAgICBzaXplUmFuZ2U6IHZpc0NvbmZpZy5zaXplUmFuZ2VcbiAgICAgIH0sXG4gICAgICBnZXRSYWRpdXM6IHtcbiAgICAgICAgcmFkaXVzRmllbGQ6IHRoaXMuY29uZmlnLnJhZGl1c0ZpZWxkLFxuICAgICAgICByYWRpdXNSYW5nZTogdmlzQ29uZmlnLnJhZGl1c1JhbmdlXG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgRGVja0dMR2VvSnNvbkxheWVyKHtcbiAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIGlkeCxcbiAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxuICAgICAgICBnZXRGaWxsQ29sb3I6IGRhdGEuZ2V0RmlsbENvbG9yLFxuICAgICAgICBnZXRMaW5lQ29sb3I6IGRhdGEuZ2V0TGluZUNvbG9yLFxuICAgICAgICBnZXRMaW5lV2lkdGg6IGRhdGEuZ2V0TGluZVdpZHRoLFxuICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICBnZXRFbGV2YXRpb246IGRhdGEuZ2V0RWxldmF0aW9uLFxuICAgICAgICAvLyBoaWdobGlnaHRcbiAgICAgICAgcGlja2FibGU6IHRydWUsXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiBISUdITElHSF9DT0xPUl8zRCxcbiAgICAgICAgYXV0b0hpZ2hsaWdodDogdmlzQ29uZmlnLmVuYWJsZTNkLFxuICAgICAgICAvLyBwYXJhbWV0ZXJzXG4gICAgICAgIHBhcmFtZXRlcnM6IHtkZXB0aFRlc3Q6IEJvb2xlYW4odmlzQ29uZmlnLmVuYWJsZTNkIHx8IG1hcFN0YXRlLmRyYWdSb3RhdGUpfSxcbiAgICAgICAgb3BhY2l0eTogdmlzQ29uZmlnLm9wYWNpdHksXG4gICAgICAgIHN0cm9rZWQ6IHZpc0NvbmZpZy5zdHJva2VkLFxuICAgICAgICBmaWxsZWQ6IHZpc0NvbmZpZy5maWxsZWQsXG4gICAgICAgIGV4dHJ1ZGVkOiB2aXNDb25maWcuZW5hYmxlM2QsXG4gICAgICAgIHdpcmVmcmFtZTogdmlzQ29uZmlnLndpcmVmcmFtZSxcbiAgICAgICAgbGluZU1pdGVyTGltaXQ6IDIsXG4gICAgICAgIHJvdW5kZWQ6IHRydWUsXG4gICAgICAgIGxpZ2h0U2V0dGluZ3MsXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzXG4gICAgICB9KSxcbiAgICAgIC4uLih0aGlzLmlzTGF5ZXJIb3ZlcmVkKG9iamVjdEhvdmVyZWQpICYmICF2aXNDb25maWcuZW5hYmxlM2RcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgRGVja0dMR2VvSnNvbkxheWVyKHtcbiAgICAgICAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWhvdmVyZWRgLFxuICAgICAgICAgICAgICBkYXRhOiBbb2JqZWN0SG92ZXJlZC5vYmplY3RdLFxuICAgICAgICAgICAgICBnZXRMaW5lV2lkdGg6IGRhdGEuZ2V0TGluZVdpZHRoLFxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICBnZXRFbGV2YXRpb246IGRhdGEuZ2V0RWxldmF0aW9uLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICB1cGRhdGVUcmlnZ2VycyxcbiAgICAgICAgICAgICAgc3Ryb2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgcGlja2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBmaWxsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSlcbiAgICBdO1xuICB9XG59XG4iXX0=