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

var _defaultSettings = require("../../constants/default-settings");

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
    _this.getText = [(0, _lodash["default"])(pointLabelAccessor, pointLabelResolver)];
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


      var getRadius = rScale ? function (d) {
        return _this2.getEncodedChannelValue(rScale, d.data, sizeField);
      } : 1;
      var getFillColor = cScale ? function (d) {
        return _this2.getEncodedChannelValue(cScale, d.data, colorField);
      } : color;
      var getLineColor = scScale ? function (d) {
        return _this2.getEncodedChannelValue(scScale, d.data, strokeColorField);
      } : strokeColor || color; // TODO: this should be cleaned up in the gpu-data-filter branch

      var textLabels = textLabel.map(function (tl, i) {
        if (!tl.field) {
          // if no field selected,
          return {
            getText: null,
            characterSet: []
          };
        }

        if (!_this2.getText[i]) {
          _this2.getText[i] = (0, _lodash["default"])(pointLabelAccessor, pointLabelResolver);
        }

        var getText = _this2.getText[i](tl);

        var characterSet;

        if (oldLayerData && Array.isArray(oldLayerData.textLabels) && oldLayerData.textLabels[i] && opt.sameData && oldLayerData.textLabels[i].getText === getText) {
          characterSet = oldLayerData.textLabels[i].characterSet;
        } else {
          var allLabels = tl.field ? data.map(getText) : [];
          characterSet = (0, _lodash2["default"])(allLabels.join(''));
        }

        return {
          characterSet: characterSet,
          getText: getText
        };
      });
      return {
        data: data,
        getPosition: getPosition,
        getFillColor: getFillColor,
        getLineColor: getLineColor,
        getRadius: getRadius,
        textLabels: textLabels
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
    key: "getTextOffset",
    value: function getTextOffset(config, radiusScale, getRadius, mapState) {
      var distanceScale = (0, _viewportMercatorProject.getDistanceScales)(mapState);
      var xMult = config.anchor === 'middle' ? 0 : config.anchor === 'start' ? 1 : -1;
      var yMult = config.alignment === 'center' ? 0 : config.alignment === 'bottom' ? 1 : -1;
      var sizeOffset = config.alignment === 'center' ? 0 : config.alignment === 'bottom' ? config.size : config.size;
      var pixelRadius = radiusScale * distanceScale.pixelsPerMeter[0];
      var padding = 20;
      return typeof getRadius === 'function' ? function (d) {
        return [xMult * (getRadius(d) * pixelRadius + padding), yMult * (getRadius(d) * pixelRadius + padding + sizeOffset)];
      } : [xMult * (getRadius * pixelRadius + padding), yMult * (getRadius * pixelRadius + padding + sizeOffset)];
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
      var radiusScale = this.getRadiusScaleByZoom(mapState);
      var layerProps = (0, _objectSpread2["default"])({
        // TODO: support setting stroke and fill simultaneously
        stroked: this.config.visConfig.outline,
        filled: this.config.visConfig.filled,
        radiusMinPixels: 1,
        lineWidthMinPixels: this.config.visConfig.thickness,
        radiusScale: radiusScale
      }, this.config.visConfig.fixedRadius ? {} : {
        radiusMaxPixels: 500
      });
      var interaction = {
        autoHighlight: !enableBrushing,
        enableBrushing: enableBrushing,
        brushRadius: interactionConfig.brush.config.size * 1000,
        highlightColor: this.config.highlightColor
      };
      var textLabel = this.config.textLabel;
      var updateTriggers = {
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
        }
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
        updateTriggers: updateTriggers
      }))].concat((0, _toConsumableArray2["default"])(this.isLayerHovered(objectHovered) ? [new _scatterplotBrushingLayer["default"]((0, _objectSpread2["default"])({}, layerProps, {
        id: "".concat(this.id, "-hovered"),
        data: [objectHovered.object],
        getLineColor: this.config.highlightColor,
        getFillColor: this.config.highlightColor,
        getRadius: data.getRadius,
        getPosition: data.getPosition,
        pickable: false
      }))] : []), (0, _toConsumableArray2["default"])(data.textLabels.reduce(function (accu, d, i) {
        if (d.getText) {
          accu.push(new _deck.TextLayer((0, _objectSpread2["default"])({}, layerInteraction, {
            id: "".concat(_this3.id, "-label-").concat(textLabel[i].field.name),
            data: data.data,
            getPosition: data.getPosition,
            getText: d.getText,
            characterSet: d.characterSet,
            getPixelOffset: _this3.getTextOffset(textLabel[i], radiusScale, data.getRadius, mapState),
            getSize: 1,
            sizeScale: textLabel[i].size,
            getTextAnchor: textLabel[i].anchor,
            getAlignmentBaseline: textLabel[i].alignment,
            getColor: textLabel[i].color,
            parameters: {
              // text will always show on top of all layers
              depthTest: false
            },
            updateTriggers: {
              getPosition: _this3.config.columns,
              getText: textLabel[i].field.name,
              getPixelOffset: (0, _objectSpread2["default"])({}, updateTriggers.getRadius, {
                mapState: mapState,
                anchor: textLabel[i].anchor,
                alignment: textLabel[i].alignment
              }),
              getTextAnchor: textLabel[i].anchor,
              getAlignmentBaseline: textLabel[i].alignment,
              getColor: textLabel[i].color
            }
          })));
        }

        return accu;
      }, [])));
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
      return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInBvaW50UG9zUmVzb2x2ZXIiLCJwb2ludExhYmVsQWNjZXNzb3IiLCJ0ZXh0TGFiZWwiLCJTdHJpbmciLCJmaWVsZCIsInRhYmxlRmllbGRJbmRleCIsInBvaW50TGFiZWxSZXNvbHZlciIsInBvaW50UmVxdWlyZWRDb2x1bW5zIiwicG9pbnRPcHRpb25hbENvbHVtbnMiLCJwb2ludFZpc0NvbmZpZ3MiLCJyYWRpdXMiLCJmaXhlZFJhZGl1cyIsIm9wYWNpdHkiLCJvdXRsaW5lIiwidGhpY2tuZXNzIiwic3Ryb2tlQ29sb3IiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInJhZGl1c1JhbmdlIiwiZmlsbGVkIiwidHlwZSIsImxhYmVsIiwiZGVmYXVsdFZhbHVlIiwicHJvcGVydHkiLCJQb2ludExheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsImdldFBvc2l0aW9uIiwiZ2V0VGV4dCIsImNvbmZpZyIsImNvbHVtbnMiLCJzdHJva2VDb2xvckZpZWxkIiwic3Ryb2tlQ29sb3JEb21haW4iLCJzdHJva2VDb2xvclNjYWxlIiwiXyIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4Iiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsIm1hcCIsImhleFRvUmdiIiwic2NTY2FsZSIsInJTY2FsZSIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJ1cGRhdGVMYXllck1ldGEiLCJzYW1lRGF0YSIsInJlZHVjZSIsImFjY3UiLCJpbmRleCIsInBvcyIsImV2ZXJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJwdXNoIiwiZ2V0UmFkaXVzIiwiZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZSIsImdldEZpbGxDb2xvciIsImdldExpbmVDb2xvciIsInRleHRMYWJlbHMiLCJ0bCIsImkiLCJjaGFyYWN0ZXJTZXQiLCJBcnJheSIsImlzQXJyYXkiLCJhbGxMYWJlbHMiLCJqb2luIiwiYm91bmRzIiwiZ2V0UG9pbnRzQm91bmRzIiwidXBkYXRlTWV0YSIsInJhZGl1c1NjYWxlIiwibWFwU3RhdGUiLCJkaXN0YW5jZVNjYWxlIiwieE11bHQiLCJhbmNob3IiLCJ5TXVsdCIsImFsaWdubWVudCIsInNpemVPZmZzZXQiLCJzaXplIiwicGl4ZWxSYWRpdXMiLCJwaXhlbHNQZXJNZXRlciIsInBhZGRpbmciLCJpZHgiLCJsYXllckludGVyYWN0aW9uIiwib2JqZWN0SG92ZXJlZCIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlQnJ1c2hpbmciLCJicnVzaCIsImVuYWJsZWQiLCJnZXRSYWRpdXNTY2FsZUJ5Wm9vbSIsImxheWVyUHJvcHMiLCJzdHJva2VkIiwicmFkaXVzTWluUGl4ZWxzIiwibGluZVdpZHRoTWluUGl4ZWxzIiwicmFkaXVzTWF4UGl4ZWxzIiwiaW50ZXJhY3Rpb24iLCJhdXRvSGlnaGxpZ2h0IiwiYnJ1c2hSYWRpdXMiLCJoaWdobGlnaHRDb2xvciIsInVwZGF0ZVRyaWdnZXJzIiwiU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyIiwiaWQiLCJwaWNrYWJsZSIsInBhcmFtZXRlcnMiLCJkZXB0aFRlc3QiLCJpc0xheWVySG92ZXJlZCIsIm9iamVjdCIsIlRleHRMYXllciIsIm5hbWUiLCJnZXRQaXhlbE9mZnNldCIsImdldFRleHRPZmZzZXQiLCJnZXRTaXplIiwiZ2V0VGV4dEFuY2hvciIsImdldEFsaWdubWVudEJhc2VsaW5lIiwiZ2V0Q29sb3IiLCJkZWZhdWx0UG9pbnRDb2x1bW5QYWlycyIsInNjYWxlIiwiZG9tYWluIiwicmFuZ2UiLCJrZXkiLCJjaGFubmVsU2NhbGVUeXBlIiwiQ0hBTk5FTF9TQ0FMRVMiLCJmaWVsZFBhaXJzIiwiZm9yRWFjaCIsInBhaXIiLCJsYXRGaWVsZCIsImxuZ0ZpZWxkIiwibGF5ZXJOYW1lIiwiZGVmYXVsdE5hbWUiLCJwcm9wIiwibGVuZ3RoIiwidmFsdWUiLCJERUZBVUxUX0xBWUVSX0NPTE9SIiwiaXNWaXNpYmxlIiwib3B0aW9uYWwiLCJMYXllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUE1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFZTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRUMsR0FBRixRQUFFQSxHQUFGO0FBQUEsTUFBT0MsR0FBUCxRQUFPQSxHQUFQO0FBQUEsTUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FBMEIsVUFBQUMsQ0FBQztBQUFBLFdBQUksQ0FDN0Q7QUFDQUEsSUFBQUEsQ0FBQyxDQUFDQyxJQUFGLENBQU9ILEdBQUcsQ0FBQ0ksUUFBWCxDQUY2RCxFQUc3RDtBQUNBRixJQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FBT0osR0FBRyxDQUFDSyxRQUFYLENBSjZELEVBSzdEO0FBQ0FILElBQUFBLFFBQVEsSUFBSUEsUUFBUSxDQUFDRyxRQUFULEdBQW9CLENBQUMsQ0FBakMsR0FBcUNGLENBQUMsQ0FBQ0MsSUFBRixDQUFPRixRQUFRLENBQUNHLFFBQWhCLENBQXJDLEdBQWlFLENBTkosQ0FBSjtBQUFBLEdBQTNCO0FBQUEsQ0FBekI7Ozs7QUFTQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRU4sR0FBRixTQUFFQSxHQUFGO0FBQUEsTUFBT0MsR0FBUCxTQUFPQSxHQUFQO0FBQUEsTUFBWUMsUUFBWixTQUFZQSxRQUFaO0FBQUEsbUJBQzNCRixHQUFHLENBQUNLLFFBRHVCLGNBQ1hKLEdBQUcsQ0FBQ0ksUUFETyxjQUNLSCxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0csUUFBWixHQUF1QixHQURwQztBQUFBLENBQXpCOzs7O0FBR0EsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFBQyxTQUFTO0FBQUEsU0FBSSxVQUFBTCxDQUFDO0FBQUEsV0FDOUNNLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDQyxJQUFGLENBQU9JLFNBQVMsQ0FBQ0UsS0FBVixDQUFnQkMsZUFBaEIsR0FBa0MsQ0FBekMsQ0FBRCxDQUR3QztBQUFBLEdBQUw7QUFBQSxDQUFwQzs7OztBQUVBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUosU0FBUztBQUFBLFNBQ3pDQSxTQUFTLENBQUNFLEtBQVYsSUFBbUJGLFNBQVMsQ0FBQ0UsS0FBVixDQUFnQkMsZUFETTtBQUFBLENBQXBDOzs7QUFHQSxJQUFNRSxvQkFBb0IsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQTdCOztBQUNBLElBQU1DLG9CQUFvQixHQUFHLENBQUMsVUFBRCxDQUE3Qjs7QUFFQSxJQUFNQyxlQUFlLEdBQUc7QUFDN0JDLEVBQUFBLE1BQU0sRUFBRSxRQURxQjtBQUU3QkMsRUFBQUEsV0FBVyxFQUFFLGFBRmdCO0FBRzdCQyxFQUFBQSxPQUFPLEVBQUUsU0FIb0I7QUFJN0JDLEVBQUFBLE9BQU8sRUFBRSxTQUpvQjtBQUs3QkMsRUFBQUEsU0FBUyxFQUFFLFdBTGtCO0FBTTdCQyxFQUFBQSxXQUFXLEVBQUUsYUFOZ0I7QUFPN0JDLEVBQUFBLFVBQVUsRUFBRSxZQVBpQjtBQVE3QkMsRUFBQUEsZ0JBQWdCLEVBQUUsa0JBUlc7QUFTN0JDLEVBQUFBLFdBQVcsRUFBRSxhQVRnQjtBQVU3QkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLElBQUksRUFBRSxTQURBO0FBRU5DLElBQUFBLEtBQUssRUFBRSxZQUZEO0FBR05DLElBQUFBLFlBQVksRUFBRSxJQUhSO0FBSU5DLElBQUFBLFFBQVEsRUFBRTtBQUpKO0FBVnFCLENBQXhCOzs7SUFrQmNDLFU7Ozs7O0FBQ25CLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsc0hBQU1BLEtBQU47O0FBRUEsVUFBS0MsaUJBQUwsQ0FBdUJqQixlQUF2Qjs7QUFDQSxVQUFLa0IsV0FBTCxHQUFtQix3QkFBUWxDLGdCQUFSLEVBQTBCTyxnQkFBMUIsQ0FBbkI7QUFDQSxVQUFLNEIsT0FBTCxHQUFlLENBQUMsd0JBQVEzQixrQkFBUixFQUE0Qkssa0JBQTVCLENBQUQsQ0FBZjtBQUxpQjtBQU1sQjs7OzswQ0FrRHFCO0FBQ3BCLGFBQU8sS0FBS3FCLFdBQUwsQ0FBaUIsS0FBS0UsTUFBTCxDQUFZQyxPQUE3QixDQUFQO0FBQ0Q7Ozs0Q0FzQ2lDO0FBQUEsVUFBWkwsS0FBWSx1RUFBSixFQUFJO0FBQ2hDLHdLQUNpQ0EsS0FEakM7QUFHRTtBQUNBTSxRQUFBQSxnQkFBZ0IsRUFBRSxJQUpwQjtBQUtFQyxRQUFBQSxpQkFBaUIsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTHJCO0FBTUVDLFFBQUFBLGdCQUFnQixFQUFFO0FBTnBCO0FBUUQsSyxDQUVEOztBQUNBOzs7O29DQUNnQkMsQyxFQUFHQyxPLEVBQVNDLGEsRUFBZUMsWSxFQUF3QjtBQUFBOztBQUFBLFVBQVZDLEdBQVUsdUVBQUosRUFBSTtBQUFBLHlCQW9CN0QsS0FBS1QsTUFwQndEO0FBQUEsVUFFL0RVLFVBRitELGdCQUUvREEsVUFGK0Q7QUFBQSxVQUcvREMsV0FIK0QsZ0JBRy9EQSxXQUgrRDtBQUFBLFVBSS9EQyxVQUorRCxnQkFJL0RBLFVBSitEO0FBQUEsVUFLL0RWLGdCQUwrRCxnQkFLL0RBLGdCQUwrRDtBQUFBLFVBTS9ERSxnQkFOK0QsZ0JBTS9EQSxnQkFOK0Q7QUFBQSxVQU8vREQsaUJBUCtELGdCQU8vREEsaUJBUCtEO0FBQUEsVUFRL0RVLEtBUitELGdCQVEvREEsS0FSK0Q7QUFBQSxVQVMvREMsU0FUK0QsZ0JBUy9EQSxTQVQrRDtBQUFBLFVBVS9EQyxTQVYrRCxnQkFVL0RBLFNBVitEO0FBQUEsVUFXL0RDLFVBWCtELGdCQVcvREEsVUFYK0Q7QUFBQSxVQVkvRDNDLFNBWitELGdCQVkvREEsU0FaK0Q7QUFBQSwrQ0FhL0Q0QyxTQWIrRDtBQUFBLFVBYzdENUIsV0FkNkQseUJBYzdEQSxXQWQ2RDtBQUFBLFVBZTdEUCxXQWY2RCx5QkFlN0RBLFdBZjZEO0FBQUEsVUFnQjdESyxVQWhCNkQseUJBZ0I3REEsVUFoQjZEO0FBQUEsVUFpQjdEQyxnQkFqQjZELHlCQWlCN0RBLGdCQWpCNkQ7QUFBQSxVQWtCN0RGLFdBbEI2RCx5QkFrQjdEQSxXQWxCNkQsRUFzQmpFOztBQUNBLFVBQU1nQyxNQUFNLEdBQ1ZOLFVBQVUsSUFDVixLQUFLTyxrQkFBTCxDQUNFVCxVQURGLEVBRUVDLFdBRkYsRUFHRXhCLFVBQVUsQ0FBQ2lDLE1BQVgsQ0FBa0JDLEdBQWxCLENBQXNCQyxvQkFBdEIsQ0FIRixDQUZGLENBdkJpRSxDQStCakU7O0FBQ0EsVUFBTUMsT0FBTyxHQUNYckIsZ0JBQWdCLElBQ2hCLEtBQUtpQixrQkFBTCxDQUNFZixnQkFERixFQUVFRCxpQkFGRixFQUdFZixnQkFBZ0IsQ0FBQ2dDLE1BQWpCLENBQXdCQyxHQUF4QixDQUE0QkMsb0JBQTVCLENBSEYsQ0FGRixDQWhDaUUsQ0F3Q2pFOztBQUNBLFVBQU1FLE1BQU0sR0FDVlYsU0FBUyxJQUNULEtBQUtLLGtCQUFMLENBQXdCSixTQUF4QixFQUFtQ0MsVUFBbkMsRUFBK0MzQixXQUEvQyxFQUE0RFAsV0FBNUQsQ0FGRjtBQUlBLFVBQU1nQixXQUFXLEdBQUcsS0FBSzJCLG1CQUFMLEVBQXBCOztBQUVBLFVBQUksQ0FBQ2pCLFlBQUQsSUFBaUJBLFlBQVksQ0FBQ1YsV0FBYixLQUE2QkEsV0FBbEQsRUFBK0Q7QUFDN0QsYUFBSzRCLGVBQUwsQ0FBcUJwQixPQUFyQixFQUE4QlIsV0FBOUI7QUFDRDs7QUFFRCxVQUFJN0IsSUFBSjs7QUFDQSxVQUNFdUMsWUFBWSxJQUNaQSxZQUFZLENBQUN2QyxJQURiLElBRUF3QyxHQUFHLENBQUNrQixRQUZKLElBR0FuQixZQUFZLENBQUNWLFdBQWIsS0FBNkJBLFdBSi9CLEVBS0U7QUFDQTdCLFFBQUFBLElBQUksR0FBR3VDLFlBQVksQ0FBQ3ZDLElBQXBCO0FBQ0QsT0FQRCxNQU9PO0FBQ0xBLFFBQUFBLElBQUksR0FBR3NDLGFBQWEsQ0FBQ3FCLE1BQWQsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzNDLGNBQU1DLEdBQUcsR0FBR2pDLFdBQVcsQ0FBQztBQUFDN0IsWUFBQUEsSUFBSSxFQUFFcUMsT0FBTyxDQUFDd0IsS0FBRDtBQUFkLFdBQUQsQ0FBdkIsQ0FEMkMsQ0FHM0M7QUFDQTs7QUFDQSxjQUFJLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxNQUFNLENBQUNDLFFBQWpCLENBQUwsRUFBaUM7QUFDL0IsbUJBQU9MLElBQVA7QUFDRDs7QUFFREEsVUFBQUEsSUFBSSxDQUFDTSxJQUFMLENBQVU7QUFDUmxFLFlBQUFBLElBQUksRUFBRXFDLE9BQU8sQ0FBQ3dCLEtBQUQ7QUFETCxXQUFWO0FBSUEsaUJBQU9ELElBQVA7QUFDRCxTQWRNLEVBY0osRUFkSSxDQUFQO0FBZUQsT0EzRWdFLENBNkVqRTs7O0FBQ0EsVUFBTU8sU0FBUyxHQUFHWixNQUFNLEdBQ3BCLFVBQUF4RCxDQUFDO0FBQUEsZUFBSSxNQUFJLENBQUNxRSxzQkFBTCxDQUE0QmIsTUFBNUIsRUFBb0N4RCxDQUFDLENBQUNDLElBQXRDLEVBQTRDNkMsU0FBNUMsQ0FBSjtBQUFBLE9BRG1CLEdBRXBCLENBRko7QUFJQSxVQUFNd0IsWUFBWSxHQUFHcEIsTUFBTSxHQUN2QixVQUFBbEQsQ0FBQztBQUFBLGVBQUksTUFBSSxDQUFDcUUsc0JBQUwsQ0FBNEJuQixNQUE1QixFQUFvQ2xELENBQUMsQ0FBQ0MsSUFBdEMsRUFBNEMyQyxVQUE1QyxDQUFKO0FBQUEsT0FEc0IsR0FFdkJDLEtBRko7QUFJQSxVQUFNMEIsWUFBWSxHQUFHaEIsT0FBTyxHQUN4QixVQUFBdkQsQ0FBQztBQUFBLGVBQUksTUFBSSxDQUFDcUUsc0JBQUwsQ0FBNEJkLE9BQTVCLEVBQXFDdkQsQ0FBQyxDQUFDQyxJQUF2QyxFQUE2Q2lDLGdCQUE3QyxDQUFKO0FBQUEsT0FEdUIsR0FFeEJoQixXQUFXLElBQUkyQixLQUZuQixDQXRGaUUsQ0EwRmpFOztBQUNBLFVBQU0yQixVQUFVLEdBQUduRSxTQUFTLENBQUNnRCxHQUFWLENBQWMsVUFBQ29CLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQzFDLFlBQUksQ0FBQ0QsRUFBRSxDQUFDbEUsS0FBUixFQUFlO0FBQ2I7QUFDQSxpQkFBTztBQUNMd0IsWUFBQUEsT0FBTyxFQUFFLElBREo7QUFFTDRDLFlBQUFBLFlBQVksRUFBRTtBQUZULFdBQVA7QUFJRDs7QUFDRCxZQUFJLENBQUMsTUFBSSxDQUFDNUMsT0FBTCxDQUFhMkMsQ0FBYixDQUFMLEVBQXNCO0FBQ3BCLFVBQUEsTUFBSSxDQUFDM0MsT0FBTCxDQUFhMkMsQ0FBYixJQUFrQix3QkFBUXRFLGtCQUFSLEVBQTRCSyxrQkFBNUIsQ0FBbEI7QUFDRDs7QUFFRCxZQUFNc0IsT0FBTyxHQUFHLE1BQUksQ0FBQ0EsT0FBTCxDQUFhMkMsQ0FBYixFQUFnQkQsRUFBaEIsQ0FBaEI7O0FBQ0EsWUFBSUUsWUFBSjs7QUFFQSxZQUNFbkMsWUFBWSxJQUNab0MsS0FBSyxDQUFDQyxPQUFOLENBQWNyQyxZQUFZLENBQUNnQyxVQUEzQixDQURBLElBRUFoQyxZQUFZLENBQUNnQyxVQUFiLENBQXdCRSxDQUF4QixDQUZBLElBR0FqQyxHQUFHLENBQUNrQixRQUhKLElBSUFuQixZQUFZLENBQUNnQyxVQUFiLENBQXdCRSxDQUF4QixFQUEyQjNDLE9BQTNCLEtBQXVDQSxPQUx6QyxFQU1FO0FBQ0E0QyxVQUFBQSxZQUFZLEdBQUduQyxZQUFZLENBQUNnQyxVQUFiLENBQXdCRSxDQUF4QixFQUEyQkMsWUFBMUM7QUFDRCxTQVJELE1BUU87QUFDTCxjQUFNRyxTQUFTLEdBQUdMLEVBQUUsQ0FBQ2xFLEtBQUgsR0FBV04sSUFBSSxDQUFDb0QsR0FBTCxDQUFTdEIsT0FBVCxDQUFYLEdBQStCLEVBQWpEO0FBQ0E0QyxVQUFBQSxZQUFZLEdBQUcseUJBQUtHLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLEVBQWYsQ0FBTCxDQUFmO0FBQ0Q7O0FBRUQsZUFBTztBQUNMSixVQUFBQSxZQUFZLEVBQVpBLFlBREs7QUFFTDVDLFVBQUFBLE9BQU8sRUFBUEE7QUFGSyxTQUFQO0FBSUQsT0FoQ2tCLENBQW5CO0FBa0NBLGFBQU87QUFDTDlCLFFBQUFBLElBQUksRUFBSkEsSUFESztBQUVMNkIsUUFBQUEsV0FBVyxFQUFYQSxXQUZLO0FBR0x3QyxRQUFBQSxZQUFZLEVBQVpBLFlBSEs7QUFJTEMsUUFBQUEsWUFBWSxFQUFaQSxZQUpLO0FBS0xILFFBQUFBLFNBQVMsRUFBVEEsU0FMSztBQU1MSSxRQUFBQSxVQUFVLEVBQVZBO0FBTkssT0FBUDtBQVFEO0FBQ0Q7Ozs7b0NBRWdCbEMsTyxFQUFTO0FBQ3ZCLFVBQU1SLFdBQVcsR0FBRyxLQUFLMkIsbUJBQUwsRUFBcEI7QUFDQSxVQUFNdUIsTUFBTSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUIzQyxPQUFyQixFQUE4QixVQUFBdEMsQ0FBQztBQUFBLGVBQUk4QixXQUFXLENBQUM7QUFBQzdCLFVBQUFBLElBQUksRUFBRUQ7QUFBUCxTQUFELENBQWY7QUFBQSxPQUEvQixDQUFmO0FBQ0EsV0FBS2tGLFVBQUwsQ0FBZ0I7QUFBQ0YsUUFBQUEsTUFBTSxFQUFOQTtBQUFELE9BQWhCO0FBQ0Q7OztrQ0FFYWhELE0sRUFBUW1ELFcsRUFBYWYsUyxFQUFXZ0IsUSxFQUFVO0FBQ3RELFVBQU1DLGFBQWEsR0FBRyxnREFBa0JELFFBQWxCLENBQXRCO0FBQ0EsVUFBTUUsS0FBSyxHQUNUdEQsTUFBTSxDQUFDdUQsTUFBUCxLQUFrQixRQUFsQixHQUE2QixDQUE3QixHQUFpQ3ZELE1BQU0sQ0FBQ3VELE1BQVAsS0FBa0IsT0FBbEIsR0FBNEIsQ0FBNUIsR0FBZ0MsQ0FBQyxDQURwRTtBQUVBLFVBQU1DLEtBQUssR0FDVHhELE1BQU0sQ0FBQ3lELFNBQVAsS0FBcUIsUUFBckIsR0FDSSxDQURKLEdBRUl6RCxNQUFNLENBQUN5RCxTQUFQLEtBQXFCLFFBQXJCLEdBQ0EsQ0FEQSxHQUVBLENBQUMsQ0FMUDtBQU9BLFVBQU1DLFVBQVUsR0FDZDFELE1BQU0sQ0FBQ3lELFNBQVAsS0FBcUIsUUFBckIsR0FDSSxDQURKLEdBRUl6RCxNQUFNLENBQUN5RCxTQUFQLEtBQXFCLFFBQXJCLEdBQ0F6RCxNQUFNLENBQUMyRCxJQURQLEdBRUEzRCxNQUFNLENBQUMyRCxJQUxiO0FBT0EsVUFBTUMsV0FBVyxHQUFHVCxXQUFXLEdBQUdFLGFBQWEsQ0FBQ1EsY0FBZCxDQUE2QixDQUE3QixDQUFsQztBQUNBLFVBQU1DLE9BQU8sR0FBRyxFQUFoQjtBQUVBLGFBQU8sT0FBTzFCLFNBQVAsS0FBcUIsVUFBckIsR0FDSCxVQUFBcEUsQ0FBQztBQUFBLGVBQUksQ0FDSHNGLEtBQUssSUFBSWxCLFNBQVMsQ0FBQ3BFLENBQUQsQ0FBVCxHQUFlNEYsV0FBZixHQUE2QkUsT0FBakMsQ0FERixFQUVITixLQUFLLElBQUlwQixTQUFTLENBQUNwRSxDQUFELENBQVQsR0FBZTRGLFdBQWYsR0FBNkJFLE9BQTdCLEdBQXVDSixVQUEzQyxDQUZGLENBQUo7QUFBQSxPQURFLEdBS0gsQ0FDRUosS0FBSyxJQUFJbEIsU0FBUyxHQUFHd0IsV0FBWixHQUEwQkUsT0FBOUIsQ0FEUCxFQUVFTixLQUFLLElBQUlwQixTQUFTLEdBQUd3QixXQUFaLEdBQTBCRSxPQUExQixHQUFvQ0osVUFBeEMsQ0FGUCxDQUxKO0FBU0Q7Ozt1Q0FTRTtBQUFBOztBQUFBLFVBTkR6RixJQU1DLFNBTkRBLElBTUM7QUFBQSxVQUxEOEYsR0FLQyxTQUxEQSxHQUtDO0FBQUEsVUFKREMsZ0JBSUMsU0FKREEsZ0JBSUM7QUFBQSxVQUhEQyxhQUdDLFNBSERBLGFBR0M7QUFBQSxVQUZEYixRQUVDLFNBRkRBLFFBRUM7QUFBQSxVQUREYyxpQkFDQyxTQUREQSxpQkFDQztBQUNELFVBQU1DLGNBQWMsR0FBR0QsaUJBQWlCLENBQUNFLEtBQWxCLENBQXdCQyxPQUEvQztBQUNBLFVBQU1sQixXQUFXLEdBQUcsS0FBS21CLG9CQUFMLENBQTBCbEIsUUFBMUIsQ0FBcEI7QUFFQSxVQUFNbUIsVUFBVTtBQUNkO0FBQ0FDLFFBQUFBLE9BQU8sRUFBRSxLQUFLeEUsTUFBTCxDQUFZaUIsU0FBWixDQUFzQmpDLE9BRmpCO0FBR2RNLFFBQUFBLE1BQU0sRUFBRSxLQUFLVSxNQUFMLENBQVlpQixTQUFaLENBQXNCM0IsTUFIaEI7QUFJZG1GLFFBQUFBLGVBQWUsRUFBRSxDQUpIO0FBS2RDLFFBQUFBLGtCQUFrQixFQUFFLEtBQUsxRSxNQUFMLENBQVlpQixTQUFaLENBQXNCaEMsU0FMNUI7QUFNZGtFLFFBQUFBLFdBQVcsRUFBWEE7QUFOYyxTQU9WLEtBQUtuRCxNQUFMLENBQVlpQixTQUFaLENBQXNCbkMsV0FBdEIsR0FBb0MsRUFBcEMsR0FBeUM7QUFBQzZGLFFBQUFBLGVBQWUsRUFBRTtBQUFsQixPQVAvQixDQUFoQjtBQVVBLFVBQU1DLFdBQVcsR0FBRztBQUNsQkMsUUFBQUEsYUFBYSxFQUFFLENBQUNWLGNBREU7QUFFbEJBLFFBQUFBLGNBQWMsRUFBZEEsY0FGa0I7QUFHbEJXLFFBQUFBLFdBQVcsRUFBRVosaUJBQWlCLENBQUNFLEtBQWxCLENBQXdCcEUsTUFBeEIsQ0FBK0IyRCxJQUEvQixHQUFzQyxJQUhqQztBQUlsQm9CLFFBQUFBLGNBQWMsRUFBRSxLQUFLL0UsTUFBTCxDQUFZK0U7QUFKVixPQUFwQjtBQWRDLFVBcUJNMUcsU0FyQk4sR0FxQm1CLEtBQUsyQixNQXJCeEIsQ0FxQk0zQixTQXJCTjtBQXNCRCxVQUFNMkcsY0FBYyxHQUFHO0FBQ3JCbEYsUUFBQUEsV0FBVyxFQUFFO0FBQ1hHLFVBQUFBLE9BQU8sRUFBRSxLQUFLRCxNQUFMLENBQVlDO0FBRFYsU0FEUTtBQUlyQm1DLFFBQUFBLFNBQVMsRUFBRTtBQUNUdEIsVUFBQUEsU0FBUyxFQUFFLEtBQUtkLE1BQUwsQ0FBWWMsU0FEZDtBQUVUekIsVUFBQUEsV0FBVyxFQUFFLEtBQUtXLE1BQUwsQ0FBWWlCLFNBQVosQ0FBc0I1QixXQUYxQjtBQUdUUCxVQUFBQSxXQUFXLEVBQUUsS0FBS2tCLE1BQUwsQ0FBWWlCLFNBQVosQ0FBc0JuQyxXQUgxQjtBQUlUaUMsVUFBQUEsU0FBUyxFQUFFLEtBQUtmLE1BQUwsQ0FBWWU7QUFKZCxTQUpVO0FBVXJCdUIsUUFBQUEsWUFBWSxFQUFFO0FBQ1p6QixVQUFBQSxLQUFLLEVBQUUsS0FBS2IsTUFBTCxDQUFZYSxLQURQO0FBRVpELFVBQUFBLFVBQVUsRUFBRSxLQUFLWixNQUFMLENBQVlZLFVBRlo7QUFHWnpCLFVBQUFBLFVBQVUsRUFBRSxLQUFLYSxNQUFMLENBQVlpQixTQUFaLENBQXNCOUIsVUFIdEI7QUFJWnVCLFVBQUFBLFVBQVUsRUFBRSxLQUFLVixNQUFMLENBQVlVO0FBSlosU0FWTztBQWdCckI2QixRQUFBQSxZQUFZLEVBQUU7QUFDWjFCLFVBQUFBLEtBQUssRUFBRSxLQUFLYixNQUFMLENBQVlpQixTQUFaLENBQXNCL0IsV0FEakI7QUFFWjBCLFVBQUFBLFVBQVUsRUFBRSxLQUFLWixNQUFMLENBQVlFLGdCQUZaO0FBR1pmLFVBQUFBLFVBQVUsRUFBRSxLQUFLYSxNQUFMLENBQVlpQixTQUFaLENBQXNCN0IsZ0JBSHRCO0FBSVpzQixVQUFBQSxVQUFVLEVBQUUsS0FBS1YsTUFBTCxDQUFZSTtBQUpaO0FBaEJPLE9BQXZCO0FBd0JBLGNBQ0UsSUFBSTZFLG9DQUFKLG9DQUNLVixVQURMLEVBRUtQLGdCQUZMLEVBR0svRixJQUhMLEVBSUsyRyxXQUpMO0FBS0ViLFFBQUFBLEdBQUcsRUFBSEEsR0FMRjtBQU1FbUIsUUFBQUEsRUFBRSxFQUFFLEtBQUtBLEVBTlg7QUFPRW5HLFFBQUFBLE9BQU8sRUFBRSxLQUFLaUIsTUFBTCxDQUFZaUIsU0FBWixDQUFzQmxDLE9BUGpDO0FBUUVvRyxRQUFBQSxRQUFRLEVBQUUsSUFSWjtBQVNFQyxRQUFBQSxVQUFVLEVBQUU7QUFDVjtBQUNBQyxVQUFBQSxTQUFTLEVBQUUsS0FBS3JGLE1BQUwsQ0FBWUMsT0FBWixDQUFvQmxDLFFBQXBCLENBQTZCRyxRQUE3QixHQUF3QyxDQUFDO0FBRjFDLFNBVGQ7QUFhRThHLFFBQUFBLGNBQWMsRUFBZEE7QUFiRixTQURGLDZDQWlCTSxLQUFLTSxjQUFMLENBQW9CckIsYUFBcEIsSUFDQSxDQUNFLElBQUlnQixvQ0FBSixvQ0FDS1YsVUFETDtBQUVFVyxRQUFBQSxFQUFFLFlBQUssS0FBS0EsRUFBVixhQUZKO0FBR0VqSCxRQUFBQSxJQUFJLEVBQUUsQ0FBQ2dHLGFBQWEsQ0FBQ3NCLE1BQWYsQ0FIUjtBQUlFaEQsUUFBQUEsWUFBWSxFQUFFLEtBQUt2QyxNQUFMLENBQVkrRSxjQUo1QjtBQUtFekMsUUFBQUEsWUFBWSxFQUFFLEtBQUt0QyxNQUFMLENBQVkrRSxjQUw1QjtBQU1FM0MsUUFBQUEsU0FBUyxFQUFFbkUsSUFBSSxDQUFDbUUsU0FObEI7QUFPRXRDLFFBQUFBLFdBQVcsRUFBRTdCLElBQUksQ0FBQzZCLFdBUHBCO0FBUUVxRixRQUFBQSxRQUFRLEVBQUU7QUFSWixTQURGLENBREEsR0FhQSxFQTlCTix1Q0FnQ0tsSCxJQUFJLENBQUN1RSxVQUFMLENBQWdCWixNQUFoQixDQUF1QixVQUFDQyxJQUFELEVBQU83RCxDQUFQLEVBQVUwRSxDQUFWLEVBQWdCO0FBQ3hDLFlBQUkxRSxDQUFDLENBQUMrQixPQUFOLEVBQWU7QUFDYjhCLFVBQUFBLElBQUksQ0FBQ00sSUFBTCxDQUNFLElBQUlxRCxlQUFKLG9DQUNLeEIsZ0JBREw7QUFFRWtCLFlBQUFBLEVBQUUsWUFBSyxNQUFJLENBQUNBLEVBQVYsb0JBQXNCN0csU0FBUyxDQUFDcUUsQ0FBRCxDQUFULENBQWFuRSxLQUFiLENBQW1Ca0gsSUFBekMsQ0FGSjtBQUdFeEgsWUFBQUEsSUFBSSxFQUFFQSxJQUFJLENBQUNBLElBSGI7QUFJRTZCLFlBQUFBLFdBQVcsRUFBRTdCLElBQUksQ0FBQzZCLFdBSnBCO0FBS0VDLFlBQUFBLE9BQU8sRUFBRS9CLENBQUMsQ0FBQytCLE9BTGI7QUFNRTRDLFlBQUFBLFlBQVksRUFBRTNFLENBQUMsQ0FBQzJFLFlBTmxCO0FBT0UrQyxZQUFBQSxjQUFjLEVBQUUsTUFBSSxDQUFDQyxhQUFMLENBQ2R0SCxTQUFTLENBQUNxRSxDQUFELENBREssRUFFZFMsV0FGYyxFQUdkbEYsSUFBSSxDQUFDbUUsU0FIUyxFQUlkZ0IsUUFKYyxDQVBsQjtBQWFFd0MsWUFBQUEsT0FBTyxFQUFFLENBYlg7QUFjRTdFLFlBQUFBLFNBQVMsRUFBRTFDLFNBQVMsQ0FBQ3FFLENBQUQsQ0FBVCxDQUFhaUIsSUFkMUI7QUFlRWtDLFlBQUFBLGFBQWEsRUFBRXhILFNBQVMsQ0FBQ3FFLENBQUQsQ0FBVCxDQUFhYSxNQWY5QjtBQWdCRXVDLFlBQUFBLG9CQUFvQixFQUFFekgsU0FBUyxDQUFDcUUsQ0FBRCxDQUFULENBQWFlLFNBaEJyQztBQWlCRXNDLFlBQUFBLFFBQVEsRUFBRTFILFNBQVMsQ0FBQ3FFLENBQUQsQ0FBVCxDQUFhN0IsS0FqQnpCO0FBa0JFdUUsWUFBQUEsVUFBVSxFQUFFO0FBQ1Y7QUFDQUMsY0FBQUEsU0FBUyxFQUFFO0FBRkQsYUFsQmQ7QUFzQkVMLFlBQUFBLGNBQWMsRUFBRTtBQUNkbEYsY0FBQUEsV0FBVyxFQUFFLE1BQUksQ0FBQ0UsTUFBTCxDQUFZQyxPQURYO0FBRWRGLGNBQUFBLE9BQU8sRUFBRTFCLFNBQVMsQ0FBQ3FFLENBQUQsQ0FBVCxDQUFhbkUsS0FBYixDQUFtQmtILElBRmQ7QUFHZEMsY0FBQUEsY0FBYyxxQ0FDVFYsY0FBYyxDQUFDNUMsU0FETjtBQUVaZ0IsZ0JBQUFBLFFBQVEsRUFBUkEsUUFGWTtBQUdaRyxnQkFBQUEsTUFBTSxFQUFFbEYsU0FBUyxDQUFDcUUsQ0FBRCxDQUFULENBQWFhLE1BSFQ7QUFJWkUsZ0JBQUFBLFNBQVMsRUFBRXBGLFNBQVMsQ0FBQ3FFLENBQUQsQ0FBVCxDQUFhZTtBQUpaLGdCQUhBO0FBU2RvQyxjQUFBQSxhQUFhLEVBQUV4SCxTQUFTLENBQUNxRSxDQUFELENBQVQsQ0FBYWEsTUFUZDtBQVVkdUMsY0FBQUEsb0JBQW9CLEVBQUV6SCxTQUFTLENBQUNxRSxDQUFELENBQVQsQ0FBYWUsU0FWckI7QUFXZHNDLGNBQUFBLFFBQVEsRUFBRTFILFNBQVMsQ0FBQ3FFLENBQUQsQ0FBVCxDQUFhN0I7QUFYVDtBQXRCbEIsYUFERjtBQXNDRDs7QUFDRCxlQUFPZ0IsSUFBUDtBQUNELE9BMUNFLEVBMENBLEVBMUNBLENBaENMO0FBNEVEOzs7d0JBcFpVO0FBQ1QsYUFBTyxPQUFQO0FBQ0Q7Ozt3QkFFa0I7QUFDakIsYUFBTyxLQUFQO0FBQ0Q7Ozt3QkFFZTtBQUNkLGFBQU8sSUFBUDtBQUNEOzs7d0JBQzBCO0FBQ3pCLGFBQU9uRCxvQkFBUDtBQUNEOzs7d0JBRXFCO0FBQ3BCLGFBQU9DLG9CQUFQO0FBQ0Q7Ozt3QkFFaUI7QUFDaEIsYUFBTyxLQUFLcUgsdUJBQVo7QUFDRDs7O3dCQUVpQztBQUNoQyxpTEFBOEMsUUFBOUM7QUFDRDs7O3dCQUVvQjtBQUNuQjtBQUVFOUcsUUFBQUEsV0FBVyxFQUFFO0FBQ1hRLFVBQUFBLFFBQVEsRUFBRSxhQURDO0FBRVhuQixVQUFBQSxLQUFLLEVBQUUsa0JBRkk7QUFHWDBILFVBQUFBLEtBQUssRUFBRSxrQkFISTtBQUlYQyxVQUFBQSxNQUFNLEVBQUUsbUJBSkc7QUFLWEMsVUFBQUEsS0FBSyxFQUFFLGtCQUxJO0FBTVhDLFVBQUFBLEdBQUcsRUFBRSxhQU5NO0FBT1hDLFVBQUFBLGdCQUFnQixFQUFFQyxnQ0FBZXpGO0FBUHRCLFNBRmY7QUFXRThDLFFBQUFBLElBQUkscUNBQ0Msc0dBQXFCQSxJQUR0QjtBQUVGd0MsVUFBQUEsS0FBSyxFQUFFLGFBRkw7QUFHRnpHLFVBQUFBLFFBQVEsRUFBRSxRQUhSO0FBSUYyRyxVQUFBQSxnQkFBZ0IsRUFBRTtBQUpoQjtBQVhOO0FBa0JEOzs7aURBTStDO0FBQUEsbUNBQWxCRSxVQUFrQjtBQUFBLFVBQWxCQSxVQUFrQixpQ0FBTCxFQUFLO0FBQzlDLFVBQU0zRyxLQUFLLEdBQUcsRUFBZCxDQUQ4QyxDQUc5Qzs7QUFDQTJHLE1BQUFBLFVBQVUsQ0FBQ0MsT0FBWCxDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDekI7QUFDQSxZQUFNQyxRQUFRLEdBQUdELElBQUksQ0FBQ0EsSUFBTCxDQUFVNUksR0FBM0I7QUFDQSxZQUFNOEksUUFBUSxHQUFHRixJQUFJLENBQUNBLElBQUwsQ0FBVTNJLEdBQTNCO0FBQ0EsWUFBTThJLFNBQVMsR0FBR0gsSUFBSSxDQUFDSSxXQUF2QjtBQUVBLFlBQU1DLElBQUksR0FBRztBQUNYdEgsVUFBQUEsS0FBSyxFQUFFb0gsU0FBUyxDQUFDRyxNQUFWLEdBQW1CSCxTQUFuQixHQUErQjtBQUQzQixTQUFiLENBTnlCLENBVXpCOztBQUNBLFlBQUlGLFFBQVEsQ0FBQ00sS0FBVCxJQUFrQkMsb0NBQXRCLEVBQTJDO0FBQ3pDSCxVQUFBQSxJQUFJLENBQUNqRyxLQUFMLEdBQWEsMEJBQVNvRyxxQ0FBb0JQLFFBQVEsQ0FBQ00sS0FBN0IsQ0FBVCxDQUFiO0FBQ0QsU0Fid0IsQ0FlekI7OztBQUNBLFlBQUlwSCxLQUFLLENBQUNtSCxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRCxVQUFBQSxJQUFJLENBQUNJLFNBQUwsR0FBaUIsSUFBakI7QUFDRDs7QUFFREosUUFBQUEsSUFBSSxDQUFDN0csT0FBTCxHQUFlO0FBQ2JwQyxVQUFBQSxHQUFHLEVBQUU2SSxRQURRO0FBRWI1SSxVQUFBQSxHQUFHLEVBQUU2SSxRQUZRO0FBR2I1SSxVQUFBQSxRQUFRLEVBQUU7QUFBQ2lKLFlBQUFBLEtBQUssRUFBRSxJQUFSO0FBQWM5SSxZQUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUF6QjtBQUE0QmlKLFlBQUFBLFFBQVEsRUFBRTtBQUF0QztBQUhHLFNBQWY7QUFNQXZILFFBQUFBLEtBQUssQ0FBQ3VDLElBQU4sQ0FBVzJFLElBQVg7QUFDRCxPQTNCRDtBQTZCQSxhQUFPbEgsS0FBUDtBQUNEOzs7RUEvRnFDd0gscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdsb2Rhc2gubWVtb2l6ZSc7XG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XG5pbXBvcnQge1RleHRMYXllcn0gZnJvbSAnZGVjay5nbCc7XG5cbmltcG9ydCBMYXllciBmcm9tICcuLi9iYXNlLWxheWVyJztcbmltcG9ydCBTY2F0dGVycGxvdEJydXNoaW5nTGF5ZXIgZnJvbSAnZGVja2dsLWxheWVycy9zY2F0dGVycGxvdC1icnVzaGluZy1sYXllci9zY2F0dGVycGxvdC1icnVzaGluZy1sYXllcic7XG5pbXBvcnQge2hleFRvUmdifSBmcm9tICd1dGlscy9jb2xvci11dGlscyc7XG5pbXBvcnQge0RFRkFVTFRfTEFZRVJfQ09MT1IsIENIQU5ORUxfU0NBTEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge2dldERpc3RhbmNlU2NhbGVzfSBmcm9tICd2aWV3cG9ydC1tZXJjYXRvci1wcm9qZWN0JztcblxuZXhwb3J0IGNvbnN0IHBvaW50UG9zQWNjZXNzb3IgPSAoe2xhdCwgbG5nLCBhbHRpdHVkZX0pID0+IGQgPT4gW1xuICAvLyBsbmdcbiAgZC5kYXRhW2xuZy5maWVsZElkeF0sXG4gIC8vIGxhdFxuICBkLmRhdGFbbGF0LmZpZWxkSWR4XSxcbiAgLy8gYWx0aXR1ZGVcbiAgYWx0aXR1ZGUgJiYgYWx0aXR1ZGUuZmllbGRJZHggPiAtMSA/IGQuZGF0YVthbHRpdHVkZS5maWVsZElkeF0gOiAwXG5dO1xuXG5leHBvcnQgY29uc3QgcG9pbnRQb3NSZXNvbHZlciA9ICh7bGF0LCBsbmcsIGFsdGl0dWRlfSkgPT5cbiAgYCR7bGF0LmZpZWxkSWR4fS0ke2xuZy5maWVsZElkeH0tJHthbHRpdHVkZSA/IGFsdGl0dWRlLmZpZWxkSWR4IDogJ3onfWA7XG5cbmV4cG9ydCBjb25zdCBwb2ludExhYmVsQWNjZXNzb3IgPSB0ZXh0TGFiZWwgPT4gZCA9PlxuICBTdHJpbmcoZC5kYXRhW3RleHRMYWJlbC5maWVsZC50YWJsZUZpZWxkSW5kZXggLSAxXSk7XG5leHBvcnQgY29uc3QgcG9pbnRMYWJlbFJlc29sdmVyID0gdGV4dExhYmVsID0+XG4gIHRleHRMYWJlbC5maWVsZCAmJiB0ZXh0TGFiZWwuZmllbGQudGFibGVGaWVsZEluZGV4O1xuXG5leHBvcnQgY29uc3QgcG9pbnRSZXF1aXJlZENvbHVtbnMgPSBbJ2xhdCcsICdsbmcnXTtcbmV4cG9ydCBjb25zdCBwb2ludE9wdGlvbmFsQ29sdW1ucyA9IFsnYWx0aXR1ZGUnXTtcblxuZXhwb3J0IGNvbnN0IHBvaW50VmlzQ29uZmlncyA9IHtcbiAgcmFkaXVzOiAncmFkaXVzJyxcbiAgZml4ZWRSYWRpdXM6ICdmaXhlZFJhZGl1cycsXG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgb3V0bGluZTogJ291dGxpbmUnLFxuICB0aGlja25lc3M6ICd0aGlja25lc3MnLFxuICBzdHJva2VDb2xvcjogJ3N0cm9rZUNvbG9yJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBzdHJva2VDb2xvclJhbmdlOiAnc3Ryb2tlQ29sb3JSYW5nZScsXG4gIHJhZGl1c1JhbmdlOiAncmFkaXVzUmFuZ2UnLFxuICBmaWxsZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgbGFiZWw6ICdGaWxsIENvbG9yJyxcbiAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgcHJvcGVydHk6ICdmaWxsZWQnXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50TGF5ZXIgZXh0ZW5kcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWdpc3RlclZpc0NvbmZpZyhwb2ludFZpc0NvbmZpZ3MpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBtZW1vaXplKHBvaW50UG9zQWNjZXNzb3IsIHBvaW50UG9zUmVzb2x2ZXIpO1xuICAgIHRoaXMuZ2V0VGV4dCA9IFttZW1vaXplKHBvaW50TGFiZWxBY2Nlc3NvciwgcG9pbnRMYWJlbFJlc29sdmVyKV07XG4gIH1cblxuICBnZXQgdHlwZSgpIHtcbiAgICByZXR1cm4gJ3BvaW50JztcbiAgfVxuXG4gIGdldCBpc0FnZ3JlZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZ2V0IGxheWVySWNvbigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXQgcmVxdWlyZWRMYXllckNvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHBvaW50UmVxdWlyZWRDb2x1bW5zO1xuICB9XG5cbiAgZ2V0IG9wdGlvbmFsQ29sdW1ucygpIHtcbiAgICByZXR1cm4gcG9pbnRPcHRpb25hbENvbHVtbnM7XG4gIH1cblxuICBnZXQgY29sdW1uUGFpcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFBvaW50Q29sdW1uUGFpcnM7XG4gIH1cblxuICBnZXQgbm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzKCkge1xuICAgIHJldHVybiBbLi4uc3VwZXIubm9uZUxheWVyRGF0YUFmZmVjdGluZ1Byb3BzLCAncmFkaXVzJ107XG4gIH1cblxuICBnZXQgdmlzdWFsQ2hhbm5lbHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLFxuICAgICAgc3Ryb2tlQ29sb3I6IHtcbiAgICAgICAgcHJvcGVydHk6ICdzdHJva2VDb2xvcicsXG4gICAgICAgIGZpZWxkOiAnc3Ryb2tlQ29sb3JGaWVsZCcsXG4gICAgICAgIHNjYWxlOiAnc3Ryb2tlQ29sb3JTY2FsZScsXG4gICAgICAgIGRvbWFpbjogJ3N0cm9rZUNvbG9yRG9tYWluJyxcbiAgICAgICAgcmFuZ2U6ICdzdHJva2VDb2xvclJhbmdlJyxcbiAgICAgICAga2V5OiAnc3Ryb2tlQ29sb3InLFxuICAgICAgICBjaGFubmVsU2NhbGVUeXBlOiBDSEFOTkVMX1NDQUxFUy5jb2xvclxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgLi4uc3VwZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSxcbiAgICAgICAgcmFuZ2U6ICdyYWRpdXNSYW5nZScsXG4gICAgICAgIHByb3BlcnR5OiAncmFkaXVzJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogJ3JhZGl1cydcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0UG9zaXRpb25BY2Nlc3NvcigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQb3NpdGlvbih0aGlzLmNvbmZpZy5jb2x1bW5zKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kRGVmYXVsdExheWVyUHJvcHMoe2ZpZWxkUGFpcnMgPSBbXX0pIHtcbiAgICBjb25zdCBwcm9wcyA9IFtdO1xuXG4gICAgLy8gTWFrZSBsYXllciBmb3IgZWFjaCBwYWlyXG4gICAgZmllbGRQYWlycy5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgLy8gZmluZCBmaWVsZHMgZm9yIHRhYmxlRmllbGRJbmRleFxuICAgICAgY29uc3QgbGF0RmllbGQgPSBwYWlyLnBhaXIubGF0O1xuICAgICAgY29uc3QgbG5nRmllbGQgPSBwYWlyLnBhaXIubG5nO1xuICAgICAgY29uc3QgbGF5ZXJOYW1lID0gcGFpci5kZWZhdWx0TmFtZTtcblxuICAgICAgY29uc3QgcHJvcCA9IHtcbiAgICAgICAgbGFiZWw6IGxheWVyTmFtZS5sZW5ndGggPyBsYXllck5hbWUgOiAnUG9pbnQnXG4gICAgICB9O1xuXG4gICAgICAvLyBkZWZhdWx0IGxheWVyIGNvbG9yIGZvciBiZWdpbnRyaXAgYW5kIGRyb3BvZmYgcG9pbnRcbiAgICAgIGlmIChsYXRGaWVsZC52YWx1ZSBpbiBERUZBVUxUX0xBWUVSX0NPTE9SKSB7XG4gICAgICAgIHByb3AuY29sb3IgPSBoZXhUb1JnYihERUZBVUxUX0xBWUVSX0NPTE9SW2xhdEZpZWxkLnZhbHVlXSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB0aGUgZmlyc3QgbGF5ZXIgdG8gYmUgdmlzaWJsZVxuICAgICAgaWYgKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwcm9wLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHByb3AuY29sdW1ucyA9IHtcbiAgICAgICAgbGF0OiBsYXRGaWVsZCxcbiAgICAgICAgbG5nOiBsbmdGaWVsZCxcbiAgICAgICAgYWx0aXR1ZGU6IHt2YWx1ZTogbnVsbCwgZmllbGRJZHg6IC0xLCBvcHRpb25hbDogdHJ1ZX1cbiAgICAgIH07XG5cbiAgICAgIHByb3BzLnB1c2gocHJvcCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcHM7XG4gIH1cblxuICBnZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMgPSB7fSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci5nZXREZWZhdWx0TGF5ZXJDb25maWcocHJvcHMpLFxuXG4gICAgICAvLyBhZGQgc3Ryb2tlIGNvbG9yIHZpc3VhbCBjaGFubmVsXG4gICAgICBzdHJva2VDb2xvckZpZWxkOiBudWxsLFxuICAgICAgc3Ryb2tlQ29sb3JEb21haW46IFswLCAxXSxcbiAgICAgIHN0cm9rZUNvbG9yU2NhbGU6ICdxdWFudGlsZSdcbiAgICB9O1xuICB9XG5cbiAgLy8gVE9ETzogZml4IGNvbXBsZXhpdHlcbiAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICBmb3JtYXRMYXllckRhdGEoXywgYWxsRGF0YSwgZmlsdGVyZWRJbmRleCwgb2xkTGF5ZXJEYXRhLCBvcHQgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvbG9yU2NhbGUsXG4gICAgICBjb2xvckRvbWFpbixcbiAgICAgIGNvbG9yRmllbGQsXG4gICAgICBzdHJva2VDb2xvckZpZWxkLFxuICAgICAgc3Ryb2tlQ29sb3JTY2FsZSxcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluLFxuICAgICAgY29sb3IsXG4gICAgICBzaXplRmllbGQsXG4gICAgICBzaXplU2NhbGUsXG4gICAgICBzaXplRG9tYWluLFxuICAgICAgdGV4dExhYmVsLFxuICAgICAgdmlzQ29uZmlnOiB7XG4gICAgICAgIHJhZGl1c1JhbmdlLFxuICAgICAgICBmaXhlZFJhZGl1cyxcbiAgICAgICAgY29sb3JSYW5nZSxcbiAgICAgICAgc3Ryb2tlQ29sb3JSYW5nZSxcbiAgICAgICAgc3Ryb2tlQ29sb3JcbiAgICAgIH1cbiAgICB9ID0gdGhpcy5jb25maWc7XG5cbiAgICAvLyBmaWxsIGNvbG9yXG4gICAgY29uc3QgY1NjYWxlID1cbiAgICAgIGNvbG9yRmllbGQgJiZcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxuICAgICAgICBjb2xvclNjYWxlLFxuICAgICAgICBjb2xvckRvbWFpbixcbiAgICAgICAgY29sb3JSYW5nZS5jb2xvcnMubWFwKGhleFRvUmdiKVxuICAgICAgKTtcblxuICAgIC8vIHN0cm9rZSBjb2xvclxuICAgIGNvbnN0IHNjU2NhbGUgPVxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoXG4gICAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXG4gICAgICAgIHN0cm9rZUNvbG9yRG9tYWluLFxuICAgICAgICBzdHJva2VDb2xvclJhbmdlLmNvbG9ycy5tYXAoaGV4VG9SZ2IpXG4gICAgICApO1xuXG4gICAgLy8gcG9pbnQgcmFkaXVzXG4gICAgY29uc3QgclNjYWxlID1cbiAgICAgIHNpemVGaWVsZCAmJlxuICAgICAgdGhpcy5nZXRWaXNDaGFubmVsU2NhbGUoc2l6ZVNjYWxlLCBzaXplRG9tYWluLCByYWRpdXNSYW5nZSwgZml4ZWRSYWRpdXMpO1xuXG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcblxuICAgIGlmICghb2xkTGF5ZXJEYXRhIHx8IG9sZExheWVyRGF0YS5nZXRQb3NpdGlvbiAhPT0gZ2V0UG9zaXRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEsIGdldFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YTtcbiAgICBpZiAoXG4gICAgICBvbGRMYXllckRhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5kYXRhICYmXG4gICAgICBvcHQuc2FtZURhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5nZXRQb3NpdGlvbiA9PT0gZ2V0UG9zaXRpb25cbiAgICApIHtcbiAgICAgIGRhdGEgPSBvbGRMYXllckRhdGEuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGZpbHRlcmVkSW5kZXgucmVkdWNlKChhY2N1LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwb3MgPSBnZXRQb3NpdGlvbih7ZGF0YTogYWxsRGF0YVtpbmRleF19KTtcblxuICAgICAgICAvLyBpZiBkb2Vzbid0IGhhdmUgcG9pbnQgbGF0IG9yIGxuZywgZG8gbm90IGFkZCB0aGUgcG9pbnRcbiAgICAgICAgLy8gZGVjay5nbCBjYW4ndCBoYW5kbGUgcG9zaXRpb24gPSBudWxsXG4gICAgICAgIGlmICghcG9zLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gYWNjdTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjY3UucHVzaCh7XG4gICAgICAgICAgZGF0YTogYWxsRGF0YVtpbmRleF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFjY3U7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IGFsbCBkaXN0aW5jdCBjaGFyYWN0ZXJzIGluIHRoZSB0ZXh0IGxhYmVsc1xuICAgIGNvbnN0IGdldFJhZGl1cyA9IHJTY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShyU2NhbGUsIGQuZGF0YSwgc2l6ZUZpZWxkKVxuICAgICAgOiAxO1xuXG4gICAgY29uc3QgZ2V0RmlsbENvbG9yID0gY1NjYWxlXG4gICAgICA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKGNTY2FsZSwgZC5kYXRhLCBjb2xvckZpZWxkKVxuICAgICAgOiBjb2xvcjtcblxuICAgIGNvbnN0IGdldExpbmVDb2xvciA9IHNjU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoc2NTY2FsZSwgZC5kYXRhLCBzdHJva2VDb2xvckZpZWxkKVxuICAgICAgOiBzdHJva2VDb2xvciB8fCBjb2xvcjtcblxuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIGNsZWFuZWQgdXAgaW4gdGhlIGdwdS1kYXRhLWZpbHRlciBicmFuY2hcbiAgICBjb25zdCB0ZXh0TGFiZWxzID0gdGV4dExhYmVsLm1hcCgodGwsIGkpID0+IHtcbiAgICAgIGlmICghdGwuZmllbGQpIHtcbiAgICAgICAgLy8gaWYgbm8gZmllbGQgc2VsZWN0ZWQsXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZ2V0VGV4dDogbnVsbCxcbiAgICAgICAgICBjaGFyYWN0ZXJTZXQ6IFtdXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuZ2V0VGV4dFtpXSkge1xuICAgICAgICB0aGlzLmdldFRleHRbaV0gPSBtZW1vaXplKHBvaW50TGFiZWxBY2Nlc3NvciwgcG9pbnRMYWJlbFJlc29sdmVyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZ2V0VGV4dCA9IHRoaXMuZ2V0VGV4dFtpXSh0bCk7XG4gICAgICBsZXQgY2hhcmFjdGVyU2V0O1xuXG4gICAgICBpZiAoXG4gICAgICAgIG9sZExheWVyRGF0YSAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KG9sZExheWVyRGF0YS50ZXh0TGFiZWxzKSAmJlxuICAgICAgICBvbGRMYXllckRhdGEudGV4dExhYmVsc1tpXSAmJlxuICAgICAgICBvcHQuc2FtZURhdGEgJiZcbiAgICAgICAgb2xkTGF5ZXJEYXRhLnRleHRMYWJlbHNbaV0uZ2V0VGV4dCA9PT0gZ2V0VGV4dFxuICAgICAgKSB7XG4gICAgICAgIGNoYXJhY3RlclNldCA9IG9sZExheWVyRGF0YS50ZXh0TGFiZWxzW2ldLmNoYXJhY3RlclNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFsbExhYmVscyA9IHRsLmZpZWxkID8gZGF0YS5tYXAoZ2V0VGV4dCkgOiBbXTtcbiAgICAgICAgY2hhcmFjdGVyU2V0ID0gdW5pcShhbGxMYWJlbHMuam9pbignJykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjaGFyYWN0ZXJTZXQsXG4gICAgICAgIGdldFRleHRcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGF0YSxcbiAgICAgIGdldFBvc2l0aW9uLFxuICAgICAgZ2V0RmlsbENvbG9yLFxuICAgICAgZ2V0TGluZUNvbG9yLFxuICAgICAgZ2V0UmFkaXVzLFxuICAgICAgdGV4dExhYmVsc1xuICAgIH07XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgdXBkYXRlTGF5ZXJNZXRhKGFsbERhdGEpIHtcbiAgICBjb25zdCBnZXRQb3NpdGlvbiA9IHRoaXMuZ2V0UG9zaXRpb25BY2Nlc3NvcigpO1xuICAgIGNvbnN0IGJvdW5kcyA9IHRoaXMuZ2V0UG9pbnRzQm91bmRzKGFsbERhdGEsIGQgPT4gZ2V0UG9zaXRpb24oe2RhdGE6IGR9KSk7XG4gICAgdGhpcy51cGRhdGVNZXRhKHtib3VuZHN9KTtcbiAgfVxuXG4gIGdldFRleHRPZmZzZXQoY29uZmlnLCByYWRpdXNTY2FsZSwgZ2V0UmFkaXVzLCBtYXBTdGF0ZSkge1xuICAgIGNvbnN0IGRpc3RhbmNlU2NhbGUgPSBnZXREaXN0YW5jZVNjYWxlcyhtYXBTdGF0ZSk7XG4gICAgY29uc3QgeE11bHQgPVxuICAgICAgY29uZmlnLmFuY2hvciA9PT0gJ21pZGRsZScgPyAwIDogY29uZmlnLmFuY2hvciA9PT0gJ3N0YXJ0JyA/IDEgOiAtMTtcbiAgICBjb25zdCB5TXVsdCA9XG4gICAgICBjb25maWcuYWxpZ25tZW50ID09PSAnY2VudGVyJ1xuICAgICAgICA/IDBcbiAgICAgICAgOiBjb25maWcuYWxpZ25tZW50ID09PSAnYm90dG9tJ1xuICAgICAgICA/IDFcbiAgICAgICAgOiAtMTtcblxuICAgIGNvbnN0IHNpemVPZmZzZXQgPVxuICAgICAgY29uZmlnLmFsaWdubWVudCA9PT0gJ2NlbnRlcidcbiAgICAgICAgPyAwXG4gICAgICAgIDogY29uZmlnLmFsaWdubWVudCA9PT0gJ2JvdHRvbSdcbiAgICAgICAgPyBjb25maWcuc2l6ZVxuICAgICAgICA6IGNvbmZpZy5zaXplO1xuXG4gICAgY29uc3QgcGl4ZWxSYWRpdXMgPSByYWRpdXNTY2FsZSAqIGRpc3RhbmNlU2NhbGUucGl4ZWxzUGVyTWV0ZXJbMF07XG4gICAgY29uc3QgcGFkZGluZyA9IDIwO1xuXG4gICAgcmV0dXJuIHR5cGVvZiBnZXRSYWRpdXMgPT09ICdmdW5jdGlvbidcbiAgICAgID8gZCA9PiBbXG4gICAgICAgICAgeE11bHQgKiAoZ2V0UmFkaXVzKGQpICogcGl4ZWxSYWRpdXMgKyBwYWRkaW5nKSxcbiAgICAgICAgICB5TXVsdCAqIChnZXRSYWRpdXMoZCkgKiBwaXhlbFJhZGl1cyArIHBhZGRpbmcgKyBzaXplT2Zmc2V0KVxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICB4TXVsdCAqIChnZXRSYWRpdXMgKiBwaXhlbFJhZGl1cyArIHBhZGRpbmcpLFxuICAgICAgICAgIHlNdWx0ICogKGdldFJhZGl1cyAqIHBpeGVsUmFkaXVzICsgcGFkZGluZyArIHNpemVPZmZzZXQpXG4gICAgICAgIF07XG4gIH1cblxuICByZW5kZXJMYXllcih7XG4gICAgZGF0YSxcbiAgICBpZHgsXG4gICAgbGF5ZXJJbnRlcmFjdGlvbixcbiAgICBvYmplY3RIb3ZlcmVkLFxuICAgIG1hcFN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnXG4gIH0pIHtcbiAgICBjb25zdCBlbmFibGVCcnVzaGluZyA9IGludGVyYWN0aW9uQ29uZmlnLmJydXNoLmVuYWJsZWQ7XG4gICAgY29uc3QgcmFkaXVzU2NhbGUgPSB0aGlzLmdldFJhZGl1c1NjYWxlQnlab29tKG1hcFN0YXRlKTtcblxuICAgIGNvbnN0IGxheWVyUHJvcHMgPSB7XG4gICAgICAvLyBUT0RPOiBzdXBwb3J0IHNldHRpbmcgc3Ryb2tlIGFuZCBmaWxsIHNpbXVsdGFuZW91c2x5XG4gICAgICBzdHJva2VkOiB0aGlzLmNvbmZpZy52aXNDb25maWcub3V0bGluZSxcbiAgICAgIGZpbGxlZDogdGhpcy5jb25maWcudmlzQ29uZmlnLmZpbGxlZCxcbiAgICAgIHJhZGl1c01pblBpeGVsczogMSxcbiAgICAgIGxpbmVXaWR0aE1pblBpeGVsczogdGhpcy5jb25maWcudmlzQ29uZmlnLnRoaWNrbmVzcyxcbiAgICAgIHJhZGl1c1NjYWxlLFxuICAgICAgLi4uKHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maXhlZFJhZGl1cyA/IHt9IDoge3JhZGl1c01heFBpeGVsczogNTAwfSlcbiAgICB9O1xuXG4gICAgY29uc3QgaW50ZXJhY3Rpb24gPSB7XG4gICAgICBhdXRvSGlnaGxpZ2h0OiAhZW5hYmxlQnJ1c2hpbmcsXG4gICAgICBlbmFibGVCcnVzaGluZyxcbiAgICAgIGJydXNoUmFkaXVzOiBpbnRlcmFjdGlvbkNvbmZpZy5icnVzaC5jb25maWcuc2l6ZSAqIDEwMDAsXG4gICAgICBoaWdobGlnaHRDb2xvcjogdGhpcy5jb25maWcuaGlnaGxpZ2h0Q29sb3JcbiAgICB9O1xuXG4gICAgY29uc3Qge3RleHRMYWJlbH0gPSB0aGlzLmNvbmZpZztcbiAgICBjb25zdCB1cGRhdGVUcmlnZ2VycyA9IHtcbiAgICAgIGdldFBvc2l0aW9uOiB7XG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY29uZmlnLmNvbHVtbnNcbiAgICAgIH0sXG4gICAgICBnZXRSYWRpdXM6IHtcbiAgICAgICAgc2l6ZUZpZWxkOiB0aGlzLmNvbmZpZy5zaXplRmllbGQsXG4gICAgICAgIHJhZGl1c1JhbmdlOiB0aGlzLmNvbmZpZy52aXNDb25maWcucmFkaXVzUmFuZ2UsXG4gICAgICAgIGZpeGVkUmFkaXVzOiB0aGlzLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXMsXG4gICAgICAgIHNpemVTY2FsZTogdGhpcy5jb25maWcuc2l6ZVNjYWxlXG4gICAgICB9LFxuICAgICAgZ2V0RmlsbENvbG9yOiB7XG4gICAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy5jb2xvcixcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuY29sb3JGaWVsZCxcbiAgICAgICAgY29sb3JSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLmNvbG9yUmFuZ2UsXG4gICAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLmNvbG9yU2NhbGVcbiAgICAgIH0sXG4gICAgICBnZXRMaW5lQ29sb3I6IHtcbiAgICAgICAgY29sb3I6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5zdHJva2VDb2xvcixcbiAgICAgICAgY29sb3JGaWVsZDogdGhpcy5jb25maWcuc3Ryb2tlQ29sb3JGaWVsZCxcbiAgICAgICAgY29sb3JSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2UsXG4gICAgICAgIGNvbG9yU2NhbGU6IHRoaXMuY29uZmlnLnN0cm9rZUNvbG9yU2NhbGVcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBTY2F0dGVycGxvdEJydXNoaW5nTGF5ZXIoe1xuICAgICAgICAuLi5sYXllclByb3BzLFxuICAgICAgICAuLi5sYXllckludGVyYWN0aW9uLFxuICAgICAgICAuLi5kYXRhLFxuICAgICAgICAuLi5pbnRlcmFjdGlvbixcbiAgICAgICAgaWR4LFxuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgb3BhY2l0eTogdGhpcy5jb25maWcudmlzQ29uZmlnLm9wYWNpdHksXG4gICAgICAgIHBpY2thYmxlOiB0cnVlLFxuICAgICAgICBwYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgLy8gY2lyY2xlcyB3aWxsIGJlIGZsYXQgb24gdGhlIG1hcCB3aGVuIHRoZSBhbHRpdHVkZSBjb2x1bW4gaXMgbm90IHVzZWRcbiAgICAgICAgICBkZXB0aFRlc3Q6IHRoaXMuY29uZmlnLmNvbHVtbnMuYWx0aXR1ZGUuZmllbGRJZHggPiAtMVxuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVUcmlnZ2Vyc1xuICAgICAgfSksXG4gICAgICAvLyBob3ZlciBsYXllclxuICAgICAgLi4uKHRoaXMuaXNMYXllckhvdmVyZWQob2JqZWN0SG92ZXJlZClcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyKHtcbiAgICAgICAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWhvdmVyZWRgLFxuICAgICAgICAgICAgICBkYXRhOiBbb2JqZWN0SG92ZXJlZC5vYmplY3RdLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgcGlja2FibGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSksXG4gICAgICAvLyB0ZXh0IGxhYmVsIGxheWVyXG4gICAgICAuLi5kYXRhLnRleHRMYWJlbHMucmVkdWNlKChhY2N1LCBkLCBpKSA9PiB7XG4gICAgICAgIGlmIChkLmdldFRleHQpIHtcbiAgICAgICAgICBhY2N1LnB1c2goXG4gICAgICAgICAgICBuZXcgVGV4dExheWVyKHtcbiAgICAgICAgICAgICAgLi4ubGF5ZXJJbnRlcmFjdGlvbixcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWxhYmVsLSR7dGV4dExhYmVsW2ldLmZpZWxkLm5hbWV9YCxcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxuICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgZ2V0VGV4dDogZC5nZXRUZXh0LFxuICAgICAgICAgICAgICBjaGFyYWN0ZXJTZXQ6IGQuY2hhcmFjdGVyU2V0LFxuICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDogdGhpcy5nZXRUZXh0T2Zmc2V0KFxuICAgICAgICAgICAgICAgIHRleHRMYWJlbFtpXSxcbiAgICAgICAgICAgICAgICByYWRpdXNTY2FsZSxcbiAgICAgICAgICAgICAgICBkYXRhLmdldFJhZGl1cyxcbiAgICAgICAgICAgICAgICBtYXBTdGF0ZVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBnZXRTaXplOiAxLFxuICAgICAgICAgICAgICBzaXplU2NhbGU6IHRleHRMYWJlbFtpXS5zaXplLFxuICAgICAgICAgICAgICBnZXRUZXh0QW5jaG9yOiB0ZXh0TGFiZWxbaV0uYW5jaG9yLFxuICAgICAgICAgICAgICBnZXRBbGlnbm1lbnRCYXNlbGluZTogdGV4dExhYmVsW2ldLmFsaWdubWVudCxcbiAgICAgICAgICAgICAgZ2V0Q29sb3I6IHRleHRMYWJlbFtpXS5jb2xvcixcbiAgICAgICAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgICAgICAgIC8vIHRleHQgd2lsbCBhbHdheXMgc2hvdyBvbiB0b3Agb2YgYWxsIGxheWVyc1xuICAgICAgICAgICAgICAgIGRlcHRoVGVzdDogZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogdGhpcy5jb25maWcuY29sdW1ucyxcbiAgICAgICAgICAgICAgICBnZXRUZXh0OiB0ZXh0TGFiZWxbaV0uZmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDoge1xuICAgICAgICAgICAgICAgICAgLi4udXBkYXRlVHJpZ2dlcnMuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgICAgICAgICAgICBhbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgICAgICBhbGlnbm1lbnQ6IHRleHRMYWJlbFtpXS5hbGlnbm1lbnRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdldFRleHRBbmNob3I6IHRleHRMYWJlbFtpXS5hbmNob3IsXG4gICAgICAgICAgICAgICAgZ2V0QWxpZ25tZW50QmFzZWxpbmU6IHRleHRMYWJlbFtpXS5hbGlnbm1lbnQsXG4gICAgICAgICAgICAgICAgZ2V0Q29sb3I6IHRleHRMYWJlbFtpXS5jb2xvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjY3U7XG4gICAgICB9LCBbXSlcbiAgICBdO1xuICB9XG59XG4iXX0=