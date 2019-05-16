"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.pointVisConfigs = exports.pointOptionalColumns = exports.pointRequiredColumns = exports.pointLabelResolver = exports.pointLabelAccessor = exports.pointPosResolver = exports.pointPosAccessor = void 0;

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

var _deck = require("deck.gl");

var _baseLayer = _interopRequireDefault(require("../base-layer"));

var _scatterplotBrushingLayer = _interopRequireDefault(require("../../deckgl-layers/scatterplot-brushing-layer/scatterplot-brushing-layer"));

var _colorUtils = require("../../utils/color-utils");

var _pointLayerIcon = _interopRequireDefault(require("./point-layer-icon"));

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
var pointPosAccessor = function pointPosAccessor(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng,
      altitude = _ref.altitude;
  return function (d) {
    return [// lng
    d.data[lng.fieldIdx], // lat
    d.data[lat.fieldIdx], // altitude
    altitude && altitude.fieldIdx > -1 ? d.data[altitude.fieldIdx] : 0];
  };
};

exports.pointPosAccessor = pointPosAccessor;

var pointPosResolver = function pointPosResolver(_ref2) {
  var lat = _ref2.lat,
      lng = _ref2.lng,
      altitude = _ref2.altitude;
  return "".concat(lat.fieldIdx, "-").concat(lng.fieldIdx, "-").concat(altitude ? altitude.fieldIdx : 'z');
};

exports.pointPosResolver = pointPosResolver;

var pointLabelAccessor = function pointLabelAccessor(textLabel) {
  return function (d) {
    return String(d.data[textLabel.field.tableFieldIndex - 1]);
  };
};

exports.pointLabelAccessor = pointLabelAccessor;

var pointLabelResolver = function pointLabelResolver(textLabel) {
  return textLabel.field && textLabel.field.tableFieldIndex;
};

exports.pointLabelResolver = pointLabelResolver;
var pointRequiredColumns = ['lat', 'lng'];
exports.pointRequiredColumns = pointRequiredColumns;
var pointOptionalColumns = ['altitude'];
exports.pointOptionalColumns = pointOptionalColumns;
var pointVisConfigs = {
  radius: 'radius',
  fixedRadius: 'fixedRadius',
  opacity: 'opacity',
  outline: 'outline',
  thickness: 'thickness',
  strokeColor: 'strokeColor',
  colorRange: 'colorRange',
  strokeColorRange: 'strokeColorRange',
  radiusRange: 'radiusRange',
  filled: {
    type: 'boolean',
    label: 'Fill Color',
    defaultValue: true,
    property: 'filled'
  }
};
exports.pointVisConfigs = pointVisConfigs;

var PointLayer =
/*#__PURE__*/
function (_Layer) {
  (0, _inherits2["default"])(PointLayer, _Layer);

  function PointLayer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PointLayer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PointLayer).call(this, props));

    _this.registerVisConfig(pointVisConfigs);

    _this.getPosition = (0, _lodash["default"])(pointPosAccessor, pointPosResolver);
    _this.getText = (0, _lodash["default"])(pointLabelAccessor, pointLabelResolver);
    return _this;
  }

  (0, _createClass2["default"])(PointLayer, [{
    key: "getPositionAccessor",
    value: function getPositionAccessor() {
      return this.getPosition(this.config.columns);
    }
  }, {
    key: "getDefaultLayerConfig",
    value: function getDefaultLayerConfig() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _objectSpread2["default"])({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "getDefaultLayerConfig", this).call(this, props), {
        // add stroke color visual channel
        strokeColorField: null,
        strokeColorDomain: [0, 1],
        strokeColorScale: 'quantile'
      });
    } // TODO: fix complexity

    /* eslint-disable complexity */

  }, {
    key: "formatLayerData",
    value: function formatLayerData(_, allData, filteredIndex, oldLayerData) {
      var _this2 = this;

      var opt = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var _this$config = this.config,
          colorScale = _this$config.colorScale,
          colorDomain = _this$config.colorDomain,
          colorField = _this$config.colorField,
          strokeColorField = _this$config.strokeColorField,
          strokeColorScale = _this$config.strokeColorScale,
          strokeColorDomain = _this$config.strokeColorDomain,
          color = _this$config.color,
          sizeField = _this$config.sizeField,
          sizeScale = _this$config.sizeScale,
          sizeDomain = _this$config.sizeDomain,
          textLabel = _this$config.textLabel,
          _this$config$visConfi = _this$config.visConfig,
          radiusRange = _this$config$visConfi.radiusRange,
          fixedRadius = _this$config$visConfi.fixedRadius,
          colorRange = _this$config$visConfi.colorRange,
          strokeColorRange = _this$config$visConfi.strokeColorRange,
          strokeColor = _this$config$visConfi.strokeColor; // fill color

      var cScale = colorField && this.getVisChannelScale(colorScale, colorDomain, colorRange.colors.map(_colorUtils.hexToRgb)); // stroke color

      var scScale = strokeColorField && this.getVisChannelScale(strokeColorScale, strokeColorDomain, strokeColorRange.colors.map(_colorUtils.hexToRgb)); // point radius

      var rScale = sizeField && this.getVisChannelScale(sizeScale, sizeDomain, radiusRange, fixedRadius);
      var getPosition = this.getPositionAccessor();

      if (!oldLayerData || oldLayerData.getPosition !== getPosition) {
        this.updateLayerMeta(allData, getPosition);
      }

      var data;

      if (oldLayerData && oldLayerData.data && opt.sameData && oldLayerData.getPosition === getPosition) {
        data = oldLayerData.data;
      } else {
        data = filteredIndex.reduce(function (accu, index) {
          var pos = getPosition({
            data: allData[index]
          }); // if doesn't have point lat or lng, do not add the point
          // deck.gl can't handle position = null

          if (!pos.every(Number.isFinite)) {
            return accu;
          }

          accu.push({
            data: allData[index]
          });
          return accu;
        }, []);
      } // get all distinct characters in the text labels


      var getText = this.getText(textLabel);
      var labelCharacterSet;

      if (oldLayerData && oldLayerData.labelCharacterSet && opt.sameData && oldLayerData.getText === getText) {
        labelCharacterSet = oldLayerData.labelCharacterSet;
      } else {
        var textLabels = textLabel.field ? data.map(getText) : [];
        labelCharacterSet = (0, _lodash2["default"])(textLabels.join(''));
      }

      var getRadius = rScale ? function (d) {
        return _this2.getEncodedChannelValue(rScale, d.data, sizeField);
      } : 1;
      var getFillColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getLineColor = scScale ? function (d) {
        return _this2.getEncodedChannelValue(scScale, d.data, strokeColorField);
      } : strokeColor || color;
      return {
        data: data,
        labelCharacterSet: labelCharacterSet,
        getPosition: getPosition,
        getFillColor: getFillColor,
        getLineColor: getLineColor,
        getRadius: getRadius,
        getText: getText
      };
    }
    /* eslint-enable complexity */

  }, {
    key: "updateLayerMeta",
    value: function updateLayerMeta(allData) {
      var getPosition = this.getPositionAccessor();
      var bounds = this.getPointsBounds(allData, function (d) {
        return getPosition({
          data: d
        });
      });
      this.updateMeta({
        bounds: bounds
      });
    }
  }, {
    key: "renderLayer",
    value: function renderLayer(_ref3) {
      var _this3 = this;

      var data = _ref3.data,
          idx = _ref3.idx,
          layerInteraction = _ref3.layerInteraction,
          objectHovered = _ref3.objectHovered,
          mapState = _ref3.mapState,
          interactionConfig = _ref3.interactionConfig;
      var enableBrushing = interactionConfig.brush.enabled;
      var layerProps = (0, _objectSpread2["default"])({
        // TODO: support setting stroke and fill simultaneously
        stroked: this.config.visConfig.outline,
        filled: this.config.visConfig.filled,
        radiusMinPixels: 1,
        lineWidthMinPixels: this.config.visConfig.thickness,
        radiusScale: this.getRadiusScaleByZoom(mapState)
      }, this.config.visConfig.fixedRadius ? {} : {
        radiusMaxPixels: 500
      });
      var interaction = {
        autoHighlight: !enableBrushing,
        enableBrushing: enableBrushing,
        brushRadius: interactionConfig.brush.config.size * 1000,
        highlightColor: this.config.highlightColor
      };
      return [new _scatterplotBrushingLayer["default"]((0, _objectSpread2["default"])({}, layerProps, layerInteraction, data, interaction, {
        idx: idx,
        id: this.id,
        opacity: this.config.visConfig.opacity,
        pickable: true,
        parameters: {
          // circles will be flat on the map when the altitude column is not used
          depthTest: this.config.columns.altitude.fieldIdx > -1
        },
        updateTriggers: {
          getPosition: {
            columns: this.config.columns
          },
          getRadius: {
            sizeField: this.config.sizeField,
            radiusRange: this.config.visConfig.radiusRange,
            fixedRadius: this.config.visConfig.fixedRadius,
            sizeScale: this.config.sizeScale
          },
          getFillColor: {
            color: this.config.color,
            colorField: this.config.colorField,
            colorRange: this.config.visConfig.colorRange,
            colorScale: this.config.colorScale
          },
          getLineColor: {
            color: this.config.visConfig.strokeColor,
            colorField: this.config.strokeColorField,
            colorRange: this.config.visConfig.strokeColorRange,
            colorScale: this.config.strokeColorScale
          },
          getText: {
            textLabel: this.config.textLabel
          }
        }
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _scatterplotBrushingLayer["default"]((0, _objectSpread2["default"])({}, layerProps, {
        id: "".concat(this.id, "-hovered"),
        data: [objectHovered.object],
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        getRadius: data.getRadius,
        getPosition: data.getPosition,
        pickable: false
      }))] : []), (0, _toConsumableArray2["default"])(this.config.textLabel.field ? [new _deck.TextLayer((0, _objectSpread2["default"])({}, layerInteraction, {
        id: "".concat(this.id, "-label"),
        data: data.data,
        getPosition: data.getPosition,
        getPixelOffset: this.config.textLabel.offset,
        getSize: this.config.textLabel.size,
        getTextAnchor: this.config.textLabel.anchor,
        getText: data.getText,
        getColor: function getColor(d) {
          return _this3.config.textLabel.color;
        },
        parameters: {
          // text will always show on top of all layers
          depthTest: false
        },
        characterSet: data.labelCharacterSet,
        updateTriggers: {
          getPosition: data.getPosition,
          getPixelOffset: this.config.textLabel.offset,
          getText: this.config.textLabel.field,
          getTextAnchor: this.config.textLabel.anchor,
          getSize: this.config.textLabel.size,
          getColor: this.config.textLabel.color
        }
      }))] : []));
    }
  }, {
    key: "type",
    get: function get() {
      return 'point';
    }
  }, {
    key: "isAggregated",
    get: function get() {
      return false;
    }
  }, {
    key: "layerIcon",
    get: function get() {
      return _pointLayerIcon["default"];
    }
  }, {
    key: "requiredLayerColumns",
    get: function get() {
      return pointRequiredColumns;
    }
  }, {
    key: "optionalColumns",
    get: function get() {
      return pointOptionalColumns;
    }
  }, {
    key: "columnPairs",
    get: function get() {
      return this.defaultPointColumnPairs;
    }
  }, {
    key: "noneLayerDataAffectingProps",
    get: function get() {
      return [].concat((0, _toConsumableArray2["default"])((0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "noneLayerDataAffectingProps", this)), ['radius']);
    }
  }, {
    key: "visualChannels",
    get: function get() {
      return (0, _objectSpread2["default"])({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "visualChannels", this), {
        strokeColor: {
          property: 'strokeColor',
          field: 'strokeColorField',
          scale: 'strokeColorScale',
          domain: 'strokeColorDomain',
          range: 'strokeColorRange',
          key: 'strokeColor',
          channelScaleType: _defaultSettings.CHANNEL_SCALES.color
        },
        size: (0, _objectSpread2["default"])({}, (0, _get2["default"])((0, _getPrototypeOf2["default"])(PointLayer.prototype), "visualChannels", this).size, {
          range: 'radiusRange',
          property: 'radius',
          channelScaleType: 'radius'
        })
      });
    }
  }], [{
    key: "findDefaultLayerProps",
    value: function findDefaultLayerProps(_ref4) {
      var _ref4$fieldPairs = _ref4.fieldPairs,
          fieldPairs = _ref4$fieldPairs === void 0 ? [] : _ref4$fieldPairs;
      var props = []; // Make layer for each pair

      fieldPairs.forEach(function (pair) {
        // find fields for tableFieldIndex
        var latField = pair.pair.lat;
        var lngField = pair.pair.lng;
        var layerName = pair.defaultName;
        var prop = {
          label: layerName.length ? layerName : 'Point'
        }; // default layer color for begintrip and dropoff point

        if (latField.value in _defaultSettings.DEFAULT_LAYER_COLOR) {
          prop.color = (0, _colorUtils.hexToRgb)(_defaultSettings.DEFAULT_LAYER_COLOR[latField.value]);
        } // set the first layer to be visible


        if (props.length === 0) {
          prop.isVisible = true;
        }

        prop.columns = {
          lat: latField,
          lng: lngField,
          altitude: {
            value: null,
            fieldIdx: -1,
            optional: true
          }
        };
        props.push(prop);
      });
      return props;
    }
  }]);
  return PointLayer;
}(_baseLayer["default"]);

exports["default"] = PointLayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInBvaW50UG9zUmVzb2x2ZXIiLCJwb2ludExhYmVsQWNjZXNzb3IiLCJ0ZXh0TGFiZWwiLCJTdHJpbmciLCJmaWVsZCIsInRhYmxlRmllbGRJbmRleCIsInBvaW50TGFiZWxSZXNvbHZlciIsInBvaW50UmVxdWlyZWRDb2x1bW5zIiwicG9pbnRPcHRpb25hbENvbHVtbnMiLCJwb2ludFZpc0NvbmZpZ3MiLCJyYWRpdXMiLCJmaXhlZFJhZGl1cyIsIm9wYWNpdHkiLCJvdXRsaW5lIiwidGhpY2tuZXNzIiwic3Ryb2tlQ29sb3IiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInJhZGl1c1JhbmdlIiwiZmlsbGVkIiwidHlwZSIsImxhYmVsIiwiZGVmYXVsdFZhbHVlIiwicHJvcGVydHkiLCJQb2ludExheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsImdldFBvc2l0aW9uIiwiZ2V0VGV4dCIsImNvbmZpZyIsImNvbHVtbnMiLCJzdHJva2VDb2xvckZpZWxkIiwic3Ryb2tlQ29sb3JEb21haW4iLCJzdHJva2VDb2xvclNjYWxlIiwiXyIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4Iiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsIm1hcCIsImhleFRvUmdiIiwic2NTY2FsZSIsInJTY2FsZSIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJ1cGRhdGVMYXllck1ldGEiLCJzYW1lRGF0YSIsInJlZHVjZSIsImFjY3UiLCJpbmRleCIsInBvcyIsImV2ZXJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJwdXNoIiwibGFiZWxDaGFyYWN0ZXJTZXQiLCJ0ZXh0TGFiZWxzIiwiam9pbiIsImdldFJhZGl1cyIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJnZXRMaW5lQ29sb3IiLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJ1cGRhdGVNZXRhIiwiaWR4IiwibGF5ZXJJbnRlcmFjdGlvbiIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlQnJ1c2hpbmciLCJicnVzaCIsImVuYWJsZWQiLCJsYXllclByb3BzIiwic3Ryb2tlZCIsInJhZGl1c01pblBpeGVscyIsImxpbmVXaWR0aE1pblBpeGVscyIsInJhZGl1c1NjYWxlIiwiZ2V0UmFkaXVzU2NhbGVCeVpvb20iLCJyYWRpdXNNYXhQaXhlbHMiLCJpbnRlcmFjdGlvbiIsImF1dG9IaWdobGlnaHQiLCJicnVzaFJhZGl1cyIsInNpemUiLCJoaWdobGlnaHRDb2xvciIsIlNjYXR0ZXJwbG90QnJ1c2hpbmdMYXllciIsImlkIiwicGlja2FibGUiLCJwYXJhbWV0ZXJzIiwiZGVwdGhUZXN0IiwidXBkYXRlVHJpZ2dlcnMiLCJpc0xheWVySG92ZXJlZCIsIm9iamVjdCIsIlRleHRMYXllciIsImdldFBpeGVsT2Zmc2V0Iiwib2Zmc2V0IiwiZ2V0U2l6ZSIsImdldFRleHRBbmNob3IiLCJhbmNob3IiLCJnZXRDb2xvciIsImNoYXJhY3RlclNldCIsIlBvaW50TGF5ZXJJY29uIiwiZGVmYXVsdFBvaW50Q29sdW1uUGFpcnMiLCJzY2FsZSIsImRvbWFpbiIsInJhbmdlIiwia2V5IiwiY2hhbm5lbFNjYWxlVHlwZSIsIkNIQU5ORUxfU0NBTEVTIiwiZmllbGRQYWlycyIsImZvckVhY2giLCJwYWlyIiwibGF0RmllbGQiLCJsbmdGaWVsZCIsImxheWVyTmFtZSIsImRlZmF1bHROYW1lIiwicHJvcCIsImxlbmd0aCIsInZhbHVlIiwiREVGQVVMVF9MQVlFUl9DT0xPUiIsImlzVmlzaWJsZSIsIm9wdGlvbmFsIiwiTGF5ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWU8sSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLE1BQU9DLEdBQVAsUUFBT0EsR0FBUDtBQUFBLE1BQVlDLFFBQVosUUFBWUEsUUFBWjtBQUFBLFNBQTBCLFVBQUFDLENBQUM7QUFBQSxXQUFJLENBQzdEO0FBQ0FBLElBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPSCxHQUFHLENBQUNJLFFBQVgsQ0FGNkQsRUFHN0Q7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9KLEdBQUcsQ0FBQ0ssUUFBWCxDQUo2RCxFQUs3RDtBQUNBSCxJQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0csUUFBVCxHQUFvQixDQUFDLENBQWpDLEdBQXFDRixDQUFDLENBQUNDLElBQUYsQ0FBT0YsUUFBUSxDQUFDRyxRQUFoQixDQUFyQyxHQUFpRSxDQU5KLENBQUo7QUFBQSxHQUEzQjtBQUFBLENBQXpCOzs7O0FBU0EsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUVOLEdBQUYsU0FBRUEsR0FBRjtBQUFBLE1BQU9DLEdBQVAsU0FBT0EsR0FBUDtBQUFBLE1BQVlDLFFBQVosU0FBWUEsUUFBWjtBQUFBLG1CQUMzQkYsR0FBRyxDQUFDSyxRQUR1QixjQUNYSixHQUFHLENBQUNJLFFBRE8sY0FDS0gsUUFBUSxHQUFHQSxRQUFRLENBQUNHLFFBQVosR0FBdUIs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QUFtQkgsU0FBbkIsR0FBK0I7QUFEM0IsU0FBYixDQU55QixDQVV6Qjs7QUFDQSxZQUFJRixRQUFRLENBQUNNLEtBQVQsSUFBa0JDLG9DQUF0QixFQUEyQztBQUN6Q0gsVUFBQUEsSUFBSSxDQUFDcEYsS0FBTCxHQUFhLDBCQUFTdUYscUNBQW9CUCxRQUFRLENBQUNNLEtBQTdCLENBQVQsQ0FBYjtBQUNELFNBYndCLENBZXpCOzs7QUFDQSxZQUFJdkcsS0FBSyxDQUFDc0csTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QkQsVUFBQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBRURKLFFBQUFBLElBQUksQ0FBQ2hHLE9BQUwsR0FBZTtBQUNicEMsVUFBQUEsR0FBRyxFQUFFZ0ksUUFEUTtBQUViL0gsVUFBQUEsR0FBRyxFQUFFZ0ksUUFGUTtBQUdiL0gsVUFBQUEsUUFBUSxFQUFFO0FBQUNvSSxZQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjakksWUFBQUEsUUFBUSxFQUFFLENBQUMsQ0FBekI7QUFBNEJvSSxZQUFBQSxRQUFRLEVBQUU7QUFBdEM7QUFIRyxTQUFmO0FBTUExRyxRQUFBQSxLQUFLLENBQUN1QyxJQUFOLENBQVc4RCxJQUFYO0FBQ0QsT0EzQkQ7QUE2QkEsYUFBT3JHLEtBQVA7QUFDRDs7O0VBL0ZxQzJHLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IHtUZXh0TGF5ZXJ9IGZyb20gJ2RlY2suZ2wnO1xuXG5pbXBvcnQgTGF5ZXIgZnJvbSAnLi4vYmFzZS1sYXllcic7XG5pbXBvcnQgU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyIGZyb20gJ2RlY2tnbC1sYXllcnMvc2NhdHRlcnBsb3QtYnJ1c2hpbmctbGF5ZXIvc2NhdHRlcnBsb3QtYnJ1c2hpbmctbGF5ZXInO1xuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuaW1wb3J0IFBvaW50TGF5ZXJJY29uIGZyb20gJy4vcG9pbnQtbGF5ZXItaWNvbic7XG5pbXBvcnQge0RFRkFVTFRfTEFZRVJfQ09MT1IsIENIQU5ORUxfU0NBTEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmV4cG9ydCBjb25zdCBwb2ludFBvc0FjY2Vzc29yID0gKHtsYXQsIGxuZywgYWx0aXR1ZGV9KSA9PiBkID0+IFtcbiAgLy8gbG5nXG4gIGQuZGF0YVtsbmcuZmllbGRJZHhdLFxuICAvLyBsYXRcbiAgZC5kYXRhW2xhdC5maWVsZElkeF0sXG4gIC8vIGFsdGl0dWRlXG4gIGFsdGl0dWRlICYmIGFsdGl0dWRlLmZpZWxkSWR4ID4gLTEgPyBkLmRhdGFbYWx0aXR1ZGUuZmllbGRJZHhdIDogMFxuXTtcblxuZXhwb3J0IGNvbnN0IHBvaW50UG9zUmVzb2x2ZXIgPSAoe2xhdCwgbG5nLCBhbHRpdHVkZX0pID0+XG4gIGAke2xhdC5maWVsZElkeH0tJHtsbmcuZmllbGRJZHh9LSR7YWx0aXR1ZGUgPyBhbHRpdHVkZS5maWVsZElkeCA6ICd6J31gO1xuXG5leHBvcnQgY29uc3QgcG9pbnRMYWJlbEFjY2Vzc29yID0gdGV4dExhYmVsID0+IGQgPT5cbiAgU3RyaW5nKGQuZGF0YVt0ZXh0TGFiZWwuZmllbGQudGFibGVGaWVsZEluZGV4IC0gMV0pO1xuZXhwb3J0IGNvbnN0IHBvaW50TGFiZWxSZXNvbHZlciA9IHRleHRMYWJlbCA9PlxuICB0ZXh0TGFiZWwuZmllbGQgJiYgdGV4dExhYmVsLmZpZWxkLnRhYmxlRmllbGRJbmRleDtcblxuZXhwb3J0IGNvbnN0IHBvaW50UmVxdWlyZWRDb2x1bW5zID0gWydsYXQnLCAnbG5nJ107XG5leHBvcnQgY29uc3QgcG9pbnRPcHRpb25hbENvbHVtbnMgPSBbJ2FsdGl0dWRlJ107XG5cbmV4cG9ydCBjb25zdCBwb2ludFZpc0NvbmZpZ3MgPSB7XG4gIHJhZGl1czogJ3JhZGl1cycsXG4gIGZpeGVkUmFkaXVzOiAnZml4ZWRSYWRpdXMnLFxuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIG91dGxpbmU6ICdvdXRsaW5lJyxcbiAgdGhpY2tuZXNzOiAndGhpY2tuZXNzJyxcbiAgc3Ryb2tlQ29sb3I6ICdzdHJva2VDb2xvcicsXG4gIGNvbG9yUmFuZ2U6ICdjb2xvclJhbmdlJyxcbiAgc3Ryb2tlQ29sb3JSYW5nZTogJ3N0cm9rZUNvbG9yUmFuZ2UnLFxuICByYWRpdXNSYW5nZTogJ3JhZGl1c1JhbmdlJyxcbiAgZmlsbGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGxhYmVsOiAnRmlsbCBDb2xvcicsXG4gICAgZGVmYXVsdFZhbHVlOiB0cnVlLFxuICAgIHByb3BlcnR5OiAnZmlsbGVkJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludExheWVyIGV4dGVuZHMgTGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVnaXN0ZXJWaXNDb25maWcocG9pbnRWaXNDb25maWdzKTtcbiAgICB0aGlzLmdldFBvc2l0aW9uID0gbWVtb2l6ZShwb2ludFBvc0FjY2Vzc29yLCBwb2ludFBvc1Jlc29sdmVyKTtcbiAgICB0aGlzLmdldFRleHQgPSBtZW1vaXplKHBvaW50TGFiZWxBY2Nlc3NvciwgcG9pbnRMYWJlbFJlc29sdmVyKTtcbiAgfVxuXG4gIGdldCB0eXBlKCkge1xuICAgIHJldHVybiAncG9pbnQnO1xuICB9XG5cbiAgZ2V0IGlzQWdncmVnYXRlZCgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXQgbGF5ZXJJY29uKCkge1xuICAgIHJldHVybiBQb2ludExheWVySWNvbjtcbiAgfVxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHBvaW50UmVxdWlyZWRDb2x1bW5zO1xuICB9XG5cbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcbiAgICByZXR1cm4gcG9pbnRPcHRpb25hbENvbHVtbnM7XG4gIH1cblxuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBvaW50Q29sdW1uUGFpcnM7XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbLi4uc3VwZXIubm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzLCAncmFkaXVzJ107XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxuICAgICAgc3Ryb2tlQ29sb3I6IHtcbiAgICAgICAgcHJvcGVydHk6ICdzdHJva2VDb2xvcicsXG4gICAgICAgIGZpZWxkOiAnc3Ryb2tlQ29sb3JGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnc3Ryb2tlQ29sb3JTY2FsZScsXG4gICAgICAgIGRvbWFpbjogJ3N0cm9rZUNvbG9yRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcbiAgICAgICAga2V5OiAnc3Ryb2tlQ29sb3InLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5jb2xvclxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSxcbiAgICAgICAgcmFuZ2U6ICdyYWRpdXNSYW5nZScsXG4gICAgICAgIHByb3BlcnR5OiAncmFkaXVzJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogJ3JhZGl1cydcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0UG9zaXRpb25BY2Nlc3NvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkUGFpcnMgPSBbXX0pIHtcbiAgICBjb25zdCBwcm9wcyA9IFtdO1xuXG4gICAgLy8gTWFrZSBsYXllciBmb3IgZWFjaCBwYWlyXG4gICAgZmllbGRQYWlycy5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgLy8gZmluZCBmaWVsZHMgZm9yIHRhYmxlRmllbGRJbmRleFxuICAgICAgY29uc3QgbGF0RmllbGQgPSBwYWlyLnBhaXIubGF0O1xuICAgICAgY29uc3QgbG5nRmllbGQgPSBwYWlyLnBhaXIubG5nO1xuICAgICAgY29uc3QgbGF5ZXJOYW1lID0gcGFpci5kZWZhdWx0TmFtZTtcblxuICAgICAgY29uc3QgcHJvcCA9IHtcbiAgICAgICAgbGFiZWw6IGxheWVyTmFtZS5sZW5ndGggPyBsYXllck5hbWUgOiAnUG9pbnQnXG4gICAgICB9O1xuXG4gICAgICAvLyBkZWZhdWx0IGxheWVyIGNvbG9yIGZvciBiZWdpbnRyaXAgYW5kIGRyb3BvZmYgcG9pbnRcbiAgICAgIGlmIChsYXRGaWVsZC52YWx1ZSBpbiBERUZBVUxUX0xBWUVSX0NPTE9SKSB7XG4gICAgICAgIHByb3AuY29sb3IgPSBoZXhUb1JnYihERUZBVUxUX0xBWUVSX0NPTE9SW2xhdEZpZWxkLnZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZmlyc3QgbGF5ZXIgdG8gYmUgdmlzaWJsZVxuICAgICAgaWYgKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwcm9wLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AuY29sdW1ucyA9IHtcbiAgICAgICAgbGF0OiBsYXRGaWVsZCxcbiAgICAgICAgbG5nOiBsbmdGaWVsZCxcbiAgICAgICAgYWx0aXR1ZGU6IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xLCBvcHRpb25hbDogdHJ1ZX1cbiAgICAgIH07XG5cbiAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcHM7XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxuXG4gICAgICAvLyBhZGQgc3Ryb2tlIGNvbG9yIHZpc3VhbCBjaGFubmVsXG4gICAgICBzdHJva2VDb2xvckZpZWxkOiBudWxsLFxuICAgICAgc3Ryb2tlQ29sb3JEb21haW46IFswLCAxXSxcbiAgICAgIHN0cm9rZUNvbG9yU2NhbGU6ICdxdWFudGlsZSdcbiAgICB9O1xuICB9XG5cbiAgLy8gVE9ETzogZml4IGNvbXBsZXhpdHlcbiAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICBmb3JtYXRMYXllckRhdGEoXywgYWxsRGF0YSwgZmlsdGVyZWRJbmRleCwgb2xkTGF5ZXJEYXRhLCBvcHQgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yU2NhbGUsXG4gICAgICBjb2xvckRvbWFpbixcbiAgICAgIGNvbG9yRmllbGQsXG4gICAgICBzdHJva2VDb2xvckZpZWxkLFxuICAgICAgc3Ryb2tlQ29sb3JTY2FsZSxcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluLFxuICAgICAgY29sb3IsXG4gICAgICBzaXplRmllbGQsXG4gICAgICBzaXplU2NhbGUsXG4gICAgICBzaXplRG9tYWluLFxuICAgICAgdGV4dExhYmVsLFxuICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgIHJhZGl1c1JhbmdlLFxuICAgICAgICBmaXhlZFJhZGl1cyxcbiAgICAgICAgY29sb3JSYW5nZSxcbiAgICAgICAgc3Ryb2tlQ29sb3JSYW5nZSxcbiAgICAgICAgc3Ryb2tlQ29sb3JcbiAgICAgIH1cbiAgICB9ID0gdGhpcy5jb25maWc7XG5cbiAgICAvLyBmaWxsIGNvbG9yXG4gICAgY29uc3QgY1NjYWxlID1cbiAgICAgIGNvbG9yRmllbGQgJiZcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxuICAgICAgICBjb2xvclNjYWxlLFxuICAgICAgICBjb2xvckRvbWFpbixcbiAgICAgICAgY29sb3JSYW5nZS5jb2xvcnMubWFwKGhleFRvUmdiKVxuICAgICAgKTtcblxuICAgIC8vIHN0cm9rZSBjb2xvclxuICAgIGNvbnN0IHNjU2NhbGUgPVxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoXG4gICAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXG4gICAgICAgIHN0cm9rZUNvbG9yRG9tYWluLFxuICAgICAgICBzdHJva2VDb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpXG4gICAgICApO1xuXG4gICAgLy8gcG9pbnQgcmFkaXVzXG4gICAgY29uc3QgclNjYWxlID1cbiAgICAgIHNpemVGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoc2l6ZVNjYWxlLCBzaXplRG9tYWluLCByYWRpdXNSYW5nZSwgZml4ZWRSYWRpdXMpO1xuXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcblxuICAgIGlmICghb2xkTGF5ZXJEYXRhIHx8IG9sZExheWVyRGF0YS5nZXRQb3NpdGlvbiAhPT0gZ2V0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YTtcbiAgICBpZiAoXG4gICAgICBvbGRMYXllckRhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5kYXRhICYmXG4gICAgICBvcHQuc2FtZURhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5nZXRQb3NpdGlvbiA9PT0gZ2V0UG9zaXRpb25cbiAgICApIHtcbiAgICAgIGRhdGEgPSBvbGRMYXllckRhdGEuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGZpbHRlcmVkSW5kZXgucmVkdWNlKChhY2N1LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcblxuICAgICAgICAvLyBpZiBkb2Vzbid0IGhhdmUgcG9pbnQgbGF0IG9yIGxuZywgZG8gbm90IGFkZCB0aGUgcG9pbnRcbiAgICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICAgIGlmICghcG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gYWNjdTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjY3UucHVzaCh7XG4gICAgICAgICAgZGF0YTogYWxsRGF0YVtpbmRleF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjY3U7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFsbCBkaXN0aW5jdCBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0IGxhYmVsc1xuICAgIGNvbnN0IGdldFRleHQgPSB0aGlzLmdldFRleHQodGV4dExhYmVsKTtcbiAgICBsZXQgbGFiZWxDaGFyYWN0ZXJTZXQ7XG4gICAgaWYgKFxuICAgICAgb2xkTGF5ZXJEYXRhICYmXG4gICAgICBvbGRMYXllckRhdGEubGFiZWxDaGFyYWN0ZXJTZXQgJiZcbiAgICAgIG9wdC5zYW1lRGF0YSAmJlxuICAgICAgb2xkTGF5ZXJEYXRhLmdldFRleHQgPT09IGdldFRleHRcbiAgICApIHtcbiAgICAgIGxhYmVsQ2hhcmFjdGVyU2V0ID0gb2xkTGF5ZXJEYXRhLmxhYmVsQ2hhcmFjdGVyU2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0TGFiZWxzID0gdGV4dExhYmVsLmZpZWxkID8gZGF0YS5tYXAoZ2V0VGV4dCkgOiBbXTtcbiAgICAgIGxhYmVsQ2hhcmFjdGVyU2V0ID0gdW5pcSh0ZXh0TGFiZWxzLmpvaW4oJycpKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRSYWRpdXMgPSByU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoclNjYWxlLCBkLmRhdGEsIHNpemVGaWVsZClcbiAgICAgIDogMTtcblxuICAgIGNvbnN0IGdldEZpbGxDb2xvciA9IGNTY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShjU2NhbGUsIGQuZGF0YSwgY29sb3JGaWVsZClcbiAgICAgIDogY29sb3I7XG5cbiAgICBjb25zdCBnZXRMaW5lQ29sb3IgPSBzY1NjYWxlXG4gICAgICA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKHNjU2NhbGUsIGQuZGF0YSwgc3Ryb2tlQ29sb3JGaWVsZClcbiAgICAgIDogc3Ryb2tlQ29sb3IgfHwgY29sb3I7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBsYWJlbENoYXJhY3RlclNldCxcbiAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgZ2V0RmlsbENvbG9yLFxuICAgICAgZ2V0TGluZUNvbG9yLFxuICAgICAgZ2V0UmFkaXVzLFxuICAgICAgZ2V0VGV4dFxuICAgIH07XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpIHtcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4gZ2V0UG9zaXRpb24oe2RhdGE6IGR9KSk7XG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIHJlbmRlckxheWVyKHtcbiAgICBkYXRhLFxuICAgIGlkeCxcbiAgICBsYXllckludGVyYWN0aW9uLFxuICAgIG9iamVjdEhvdmVyZWQsXG4gICAgbWFwU3RhdGUsXG4gICAgaW50ZXJhY3Rpb25Db25maWdcbiAgfSkge1xuICAgIGNvbnN0IGVuYWJsZUJydXNoaW5nID0gaW50ZXJhY3Rpb25Db25maWcuYnJ1c2guZW5hYmxlZDtcblxuICAgIGNvbnN0IGxheWVyUHJvcHMgPSB7XG4gICAgICAvLyBUT0RPOiBzdXBwb3J0IHNldHRpbmcgc3Ryb2tlIGFuZCBmaWxsIHNpbXVsdGFuZW91c2x5XG4gICAgICBzdHJva2VkOiB0aGlzLmNvbmZpZy52aXNDb25maWcub3V0bGluZSxcbiAgICAgIGZpbGxlZDogdGhpcy5jb25maWcudmlzQ29uZmlnLmZpbGxlZCxcbiAgICAgIHJhZGl1c01pblBpeGVsczogMSxcbiAgICAgIGxpbmVXaWR0aE1pblBpeGVsczogdGhpcy5jb25maWcudmlzQ29uZmlnLnRoaWNrbmVzcyxcbiAgICAgIHJhZGl1c1NjYWxlOiB0aGlzLmdldFJhZGl1c1NjYWxlQnlab29tKG1hcFN0YXRlKSxcbiAgICAgIC4uLih0aGlzLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXMgPyB7fSA6IHtyYWRpdXNNYXhQaXhlbHM6IDUwMH0pXG4gICAgfTtcblxuICAgIGNvbnN0IGludGVyYWN0aW9uID0ge1xuICAgICAgYXV0b0hpZ2hsaWdodDogIWVuYWJsZUJydXNoaW5nLFxuICAgICAgZW5hYmxlQnJ1c2hpbmcsXG4gICAgICBicnVzaFJhZGl1czogaW50ZXJhY3Rpb25Db25maWcuYnJ1c2guY29uZmlnLnNpemUgKiAxMDAwLFxuICAgICAgaGlnaGxpZ2h0Q29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyKHtcbiAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgLi4ubGF5ZXJJbnRlcmFjdGlvbixcbiAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgLi4uaW50ZXJhY3Rpb24sXG5cbiAgICAgICAgaWR4LFxuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgb3BhY2l0eTogdGhpcy5jb25maWcudmlzQ29uZmlnLm9wYWNpdHksXG4gICAgICAgIHBpY2thYmxlOiB0cnVlLFxuICAgICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgLy8gY2lyY2xlcyB3aWxsIGJlIGZsYXQgb24gdGhlIG1hcCB3aGVuIHRoZSBhbHRpdHVkZSBjb2x1bW4gaXMgbm90IHVzZWRcbiAgICAgICAgICBkZXB0aFRlc3Q6IHRoaXMuY29uZmlnLmNvbHVtbnMuYWx0aXR1ZGUuZmllbGRJZHggPiAtMVxuICAgICAgICB9LFxuXG4gICAgICAgIHVwZGF0ZVRyaWdnZXJzOiB7XG4gICAgICAgICAgZ2V0UG9zaXRpb246IHtcbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY29uZmlnLmNvbHVtbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFJhZGl1czoge1xuICAgICAgICAgICAgc2l6ZUZpZWxkOiB0aGlzLmNvbmZpZy5zaXplRmllbGQsXG4gICAgICAgICAgICByYWRpdXNSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnJhZGl1c1JhbmdlLFxuICAgICAgICAgICAgZml4ZWRSYWRpdXM6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyxcbiAgICAgICAgICAgIHNpemVTY2FsZTogdGhpcy5jb25maWcuc2l6ZVNjYWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRGaWxsQ29sb3I6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgICAgICAgIGNvbG9yRmllbGQ6IHRoaXMuY29uZmlnLmNvbG9yRmllbGQsXG4gICAgICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuY29sb3JSYW5nZSxcbiAgICAgICAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLmNvbG9yU2NhbGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldExpbmVDb2xvcjoge1xuICAgICAgICAgICAgY29sb3I6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcixcbiAgICAgICAgICAgIGNvbG9yRmllbGQ6IHRoaXMuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQsXG4gICAgICAgICAgICBjb2xvclJhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3JSYW5nZSxcbiAgICAgICAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLnN0cm9rZUNvbG9yU2NhbGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldFRleHQ6IHtcbiAgICAgICAgICAgIHRleHRMYWJlbDogdGhpcy5jb25maWcudGV4dExhYmVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIC8vIGhvdmVyIGxheWVyXG4gICAgICAuLi4odGhpcy5pc0xheWVySG92ZXJlZChvYmplY3RIb3ZlcmVkKVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIG5ldyBTY2F0dGVycGxvdEJydXNoaW5nTGF5ZXIoe1xuICAgICAgICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAgICAgICBpZDogYCR7dGhpcy5pZH0taG92ZXJlZGAsXG4gICAgICAgICAgICAgIGRhdGE6IFtvYmplY3RIb3ZlcmVkLm9iamVjdF0sXG4gICAgICAgICAgICAgIGdldExpbmVDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGdldEZpbGxDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3IsXG4gICAgICAgICAgICAgIGdldFJhZGl1czogZGF0YS5nZXRSYWRpdXMsXG4gICAgICAgICAgICAgIGdldFBvc2l0aW9uOiBkYXRhLmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgICBwaWNrYWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKSxcbiAgICAgIC8vIHRleHQgbGFiZWwgbGF5ZXJcbiAgICAgIC4uLih0aGlzLmNvbmZpZy50ZXh0TGFiZWwuZmllbGRcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgVGV4dExheWVyKHtcbiAgICAgICAgICAgICAgLi4ubGF5ZXJJbnRlcmFjdGlvbixcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWxhYmVsYCxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxuICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgZ2V0UGl4ZWxPZmZzZXQ6IHRoaXMuY29uZmlnLnRleHRMYWJlbC5vZmZzZXQsXG4gICAgICAgICAgICAgIGdldFNpemU6IHRoaXMuY29uZmlnLnRleHRMYWJlbC5zaXplLFxuICAgICAgICAgICAgICBnZXRUZXh0QW5jaG9yOiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuYW5jaG9yLFxuICAgICAgICAgICAgICBnZXRUZXh0OiBkYXRhLmdldFRleHQsXG4gICAgICAgICAgICAgIGdldENvbG9yOiBkID0+IHRoaXMuY29uZmlnLnRleHRMYWJlbC5jb2xvcixcbiAgICAgICAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgICAgIC8vIHRleHQgd2lsbCBhbHdheXMgc2hvdyBvbiB0b3Agb2YgYWxsIGxheWVyc1xuICAgICAgICAgICAgICAgIGRlcHRoVGVzdDogZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2hhcmFjdGVyU2V0OiBkYXRhLmxhYmVsQ2hhcmFjdGVyU2V0LFxuICAgICAgICAgICAgICB1cGRhdGVUcmlnZ2Vyczoge1xuICAgICAgICAgICAgICAgIGdldFBvc2l0aW9uOiBkYXRhLmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIGdldFBpeGVsT2Zmc2V0OiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwub2Zmc2V0LFxuICAgICAgICAgICAgICAgIGdldFRleHQ6IHRoaXMuY29uZmlnLnRleHRMYWJlbC5maWVsZCxcbiAgICAgICAgICAgICAgICBnZXRUZXh0QW5jaG9yOiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuYW5jaG9yLFxuICAgICAgICAgICAgICAgIGdldFNpemU6IHRoaXMuY29uZmlnLnRleHRMYWJlbC5zaXplLFxuICAgICAgICAgICAgICAgIGdldENvbG9yOiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuY29sb3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW10pXG4gICAgXTtcbiAgfVxufVxuIl19