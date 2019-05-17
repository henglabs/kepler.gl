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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvcG9pbnQtbGF5ZXIvcG9pbnQtbGF5ZXIuanMiXSwibmFtZXMiOlsicG9pbnRQb3NBY2Nlc3NvciIsImxhdCIsImxuZyIsImFsdGl0dWRlIiwiZCIsImRhdGEiLCJmaWVsZElkeCIsInBvaW50UG9zUmVzb2x2ZXIiLCJwb2ludExhYmVsQWNjZXNzb3IiLCJ0ZXh0TGFiZWwiLCJTdHJpbmciLCJmaWVsZCIsInRhYmxlRmllbGRJbmRleCIsInBvaW50TGFiZWxSZXNvbHZlciIsInBvaW50UmVxdWlyZWRDb2x1bW5zIiwicG9pbnRPcHRpb25hbENvbHVtbnMiLCJwb2ludFZpc0NvbmZpZ3MiLCJyYWRpdXMiLCJmaXhlZFJhZGl1cyIsIm9wYWNpdHkiLCJvdXRsaW5lIiwidGhpY2tuZXNzIiwic3Ryb2tlQ29sb3IiLCJjb2xvclJhbmdlIiwic3Ryb2tlQ29sb3JSYW5nZSIsInJhZGl1c1JhbmdlIiwiZmlsbGVkIiwidHlwZSIsImxhYmVsIiwiZGVmYXVsdFZhbHVlIiwicHJvcGVydHkiLCJQb2ludExheWVyIiwicHJvcHMiLCJyZWdpc3RlclZpc0NvbmZpZyIsImdldFBvc2l0aW9uIiwiZ2V0VGV4dCIsImNvbmZpZyIsImNvbHVtbnMiLCJzdHJva2VDb2xvckZpZWxkIiwic3Ryb2tlQ29sb3JEb21haW4iLCJzdHJva2VDb2xvclNjYWxlIiwiXyIsImFsbERhdGEiLCJmaWx0ZXJlZEluZGV4Iiwib2xkTGF5ZXJEYXRhIiwib3B0IiwiY29sb3JTY2FsZSIsImNvbG9yRG9tYWluIiwiY29sb3JGaWVsZCIsImNvbG9yIiwic2l6ZUZpZWxkIiwic2l6ZVNjYWxlIiwic2l6ZURvbWFpbiIsInZpc0NvbmZpZyIsImNTY2FsZSIsImdldFZpc0NoYW5uZWxTY2FsZSIsImNvbG9ycyIsIm1hcCIsImhleFRvUmdiIiwic2NTY2FsZSIsInJTY2FsZSIsImdldFBvc2l0aW9uQWNjZXNzb3IiLCJ1cGRhdGVMYXllck1ldGEiLCJzYW1lRGF0YSIsInJlZHVjZSIsImFjY3UiLCJpbmRleCIsInBvcyIsImV2ZXJ5IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJwdXNoIiwibGFiZWxDaGFyYWN0ZXJTZXQiLCJ0ZXh0TGFiZWxzIiwiam9pbiIsImdldFJhZGl1cyIsImdldEVuY29kZWRDaGFubmVsVmFsdWUiLCJnZXRGaWxsQ29sb3IiLCJnZXRMaW5lQ29sb3IiLCJib3VuZHMiLCJnZXRQb2ludHNCb3VuZHMiLCJ1cGRhdGVNZXRhIiwiaWR4IiwibGF5ZXJJbnRlcmFjdGlvbiIsIm9iamVjdEhvdmVyZWQiLCJtYXBTdGF0ZSIsImludGVyYWN0aW9uQ29uZmlnIiwiZW5hYmxlQnJ1c2hpbmciLCJicnVzaCIsImVuYWJsZWQiLCJsYXllclByb3BzIiwic3Ryb2tlZCIsInJhZGl1c01pblBpeGVscyIsImxpbmVXaWR0aE1pblBpeGVscyIsInJhZGl1c1NjYWxlIiwiZ2V0UmFkaXVzU2NhbGVCeVpvb20iLCJyYWRpdXNNYXhQaXhlbHMiLCJpbnRlcmFjdGlvbiIsImF1dG9IaWdobGlnaHQiLCJicnVzaFJhZGl1cyIsInNpemUiLCJoaWdobGlnaHRDb2xvciIsIlNjYXR0ZXJwbG90QnJ1c2hpbmdMYXllciIsImlkIiwicGlja2FibGUiLCJwYXJhbWV0ZXJzIiwiZGVwdGhUZXN0IiwidXBkYXRlVHJpZ2dlcnMiLCJpc0xheWVySG92ZXJlZCIsIm9iamVjdCIsIlRleHRMYXllciIsImdldFBpeGVsT2Zmc2V0Iiwib2Zmc2V0IiwiZ2V0U2l6ZSIsImdldFRleHRBbmNob3IiLCJhbmNob3IiLCJnZXRDb2xvciIsImNoYXJhY3RlclNldCIsImRlZmF1bHRQb2ludENvbHVtblBhaXJzIiwic2NhbGUiLCJkb21haW4iLCJyYW5nZSIsImtleSIsImNoYW5uZWxTY2FsZVR5cGUiLCJDSEFOTkVMX1NDQUxFUyIsImZpZWxkUGFpcnMiLCJmb3JFYWNoIiwicGFpciIsImxhdEZpZWxkIiwibG5nRmllbGQiLCJsYXllck5hbWUiLCJkZWZhdWx0TmFtZSIsInByb3AiLCJsZW5ndGgiLCJ2YWx1ZSIsIkRFRkFVTFRfTEFZRVJfQ09MT1IiLCJpc1Zpc2libGUiLCJvcHRpb25hbCIsIkxheWVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQTNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFQyxHQUFGLFFBQUVBLEdBQUY7QUFBQSxNQUFPQyxHQUFQLFFBQU9BLEdBQVA7QUFBQSxNQUFZQyxRQUFaLFFBQVlBLFFBQVo7QUFBQSxTQUEwQixVQUFBQyxDQUFDO0FBQUEsV0FBSSxDQUM3RDtBQUNBQSxJQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FBT0gsR0FBRyxDQUFDSSxRQUFYLENBRjZELEVBRzdEO0FBQ0FGLElBQUFBLENBQUMsQ0FBQ0MsSUFBRixDQUFPSixHQUFHLENBQUNLLFFBQVgsQ0FKNkQsRUFLN0Q7QUFDQUgsSUFBQUEsUUFBUSxJQUFJQSxRQUFRLENBQUNHLFFBQVQsR0FBb0IsQ0FBQyxDQUFqQyxHQUFxQ0YsQ0FBQyxDQUFDQyxJQUFGLENBQU9GLFFBQVEsQ0FBQ0csUUFBaEIsQ0FBckMsR0FBaUUsQ0FOSixDQUFKO0FBQUEsR0FBM0I7QUFBQSxDQUF6Qjs7OztBQVNBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFTixHQUFGLFNBQUVBLEdBQUY7QUFBQSxNQUFPQyxHQUFQLFNBQU9BLEdBQVA7QUFBQSxNQUFZQyxRQUFaLFNBQVlBLFFBQVo7QUFBQSxtQkFDM0JGLEdBQUcsQ0FBQ0ssUUFEdUIsY0FDWEosR0FBRyxDQUFDSSxRQURPLGNBQ0tILFFBQVEsR0FBR0EsUUFBUSxDQUFDRyxRQUFaLEdBQXVCLEdBRHBDO0FBQUEsQ0FBekI7Ozs7QUFH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QWIsQ0FOeUIsQ0FVekI7O0FBQ0EsWUFBSUYsUUFBUSxDQUFDTSxLQUFULElBQWtCQyxvQ0FBdEIsRUFBMkM7QUFDekNILFVBQUFBLElBQUksQ0FBQ25GLEtBQUwsR0FBYSwwQkFBU3NGLHFDQUFvQlAsUUFBUSxDQUFDTSxLQUE3QixDQUFULENBQWI7QUFDRCxTQWJ3QixDQWV6Qjs7O0FBQ0EsWUFBSXRHLEtBQUssQ0FBQ3FHLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJELFVBQUFBLElBQUksQ0FBQ0ksU0FBTCxHQUFpQixJQUFqQjtBQUNEOztBQUVESixRQUFBQSxJQUFJLENBQUMvRixPQUFMLEdBQWU7QUFDYnBDLFVBQUFBLEdBQUcsRUFBRStILFFBRFE7QUFFYjlILFVBQUFBLEdBQUcsRUFBRStILFFBRlE7QUFHYjlILFVBQUFBLFFBQVEsRUFBRTtBQUFDbUksWUFBQUEsS0FBSyxFQUFFLElBQVI7QUFBY2hJLFlBQUFBLFFBQVEsRUFBRSxDQUFDLENBQXpCO0FBQTRCbUksWUFBQUEsUUFBUSxFQUFFO0FBQXRDO0FBSEcsU0FBZjtBQU1BekcsUUFBQUEsS0FBSyxDQUFDdUMsSUFBTixDQUFXNkQsSUFBWDtBQUNELE9BM0JEO0FBNkJBLGFBQU9wRyxLQUFQO0FBQ0Q7OztFQS9GcUMwRyxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC5tZW1vaXplJztcbmltcG9ydCB1bmlxIGZyb20gJ2xvZGFzaC51bmlxJztcbmltcG9ydCB7VGV4dExheWVyfSBmcm9tICdkZWNrLmdsJztcblxuaW1wb3J0IExheWVyIGZyb20gJy4uL2Jhc2UtbGF5ZXInO1xuaW1wb3J0IFNjYXR0ZXJwbG90QnJ1c2hpbmdMYXllciBmcm9tICdkZWNrZ2wtbGF5ZXJzL3NjYXR0ZXJwbG90LWJydXNoaW5nLWxheWVyL3NjYXR0ZXJwbG90LWJydXNoaW5nLWxheWVyJztcbmltcG9ydCB7aGV4VG9SZ2J9IGZyb20gJ3V0aWxzL2NvbG9yLXV0aWxzJztcbmltcG9ydCB7REVGQVVMVF9MQVlFUl9DT0xPUiwgQ0hBTk5FTF9TQ0FMRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuZXhwb3J0IGNvbnN0IHBvaW50UG9zQWNjZXNzb3IgPSAoe2xhdCwgbG5nLCBhbHRpdHVkZX0pID0+IGQgPT4gW1xuICAvLyBsbmdcbiAgZC5kYXRhW2xuZy5maWVsZElkeF0sXG4gIC8vIGxhdFxuICBkLmRhdGFbbGF0LmZpZWxkSWR4XSxcbiAgLy8gYWx0aXR1ZGVcbiAgYWx0aXR1ZGUgJiYgYWx0aXR1ZGUuZmllbGRJZHggPiAtMSA/IGQuZGF0YVthbHRpdHVkZS5maWVsZElkeF0gOiAwXG5dO1xuXG5leHBvcnQgY29uc3QgcG9pbnRQb3NSZXNvbHZlciA9ICh7bGF0LCBsbmcsIGFsdGl0dWRlfSkgPT5cbiAgYCR7bGF0LmZpZWxkSWR4fS0ke2xuZy5maWVsZElkeH0tJHthbHRpdHVkZSA/IGFsdGl0dWRlLmZpZWxkSWR4IDogJ3onfWA7XG5cbmV4cG9ydCBjb25zdCBwb2ludExhYmVsQWNjZXNzb3IgPSB0ZXh0TGFiZWwgPT4gZCA9PlxuICBTdHJpbmcoZC5kYXRhW3RleHRMYWJlbC5maWVsZC50YWJsZUZpZWxkSW5kZXggLSAxXSk7XG5leHBvcnQgY29uc3QgcG9pbnRMYWJlbFJlc29sdmVyID0gdGV4dExhYmVsID0+XG4gIHRleHRMYWJlbC5maWVsZCAmJiB0ZXh0TGFiZWwuZmllbGQudGFibGVGaWVsZEluZGV4O1xuXG5leHBvcnQgY29uc3QgcG9pbnRSZXF1aXJlZENvbHVtbnMgPSBbJ2xhdCcsICdsbmcnXTtcbmV4cG9ydCBjb25zdCBwb2ludE9wdGlvbmFsQ29sdW1ucyA9IFsnYWx0aXR1ZGUnXTtcblxuZXhwb3J0IGNvbnN0IHBvaW50VmlzQ29uZmlncyA9IHtcbiAgcmFkaXVzOiAncmFkaXVzJyxcbiAgZml4ZWRSYWRpdXM6ICdmaXhlZFJhZGl1cycsXG4gIG9wYWNpdHk6ICdvcGFjaXR5JyxcbiAgb3V0bGluZTogJ291dGxpbmUnLFxuICB0aGlja25lc3M6ICd0aGlja25lc3MnLFxuICBzdHJva2VDb2xvcjogJ3N0cm9rZUNvbG9yJyxcbiAgY29sb3JSYW5nZTogJ2NvbG9yUmFuZ2UnLFxuICBzdHJva2VDb2xvclJhbmdlOiAnc3Ryb2tlQ29sb3JSYW5nZScsXG4gIHJhZGl1c1JhbmdlOiAncmFkaXVzUmFuZ2UnLFxuICBmaWxsZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgbGFiZWw6ICdGaWxsIENvbG9yJyxcbiAgICBkZWZhdWx0VmFsdWU6IHRydWUsXG4gICAgcHJvcGVydHk6ICdmaWxsZWQnXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50TGF5ZXIgZXh0ZW5kcyBMYXllciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWdpc3RlclZpc0NvbmZpZyhwb2ludFZpc0NvbmZpZ3MpO1xuICAgIHRoaXMuZ2V0UG9zaXRpb24gPSBtZW1vaXplKHBvaW50UG9zQWNjZXNzb3IsIHBvaW50UG9zUmVzb2x2ZXIpO1xuICAgIHRoaXMuZ2V0VGV4dCA9IG1lbW9pemUocG9pbnRMYWJlbEFjY2Vzc29yLCBwb2ludExhYmVsUmVzb2x2ZXIpO1xuICB9XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuICdwb2ludCc7XG4gIH1cblxuICBnZXQgaXNBZ2dyZWdhdGVkKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldCBsYXllckljb24oKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZ2V0IHJlcXVpcmVkTGF5ZXJDb2x1bW5zKCkge1xuICAgIHJldHVybiBwb2ludFJlcXVpcmVkQ29sdW1ucztcbiAgfVxuXG4gIGdldCBvcHRpb25hbENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHBvaW50T3B0aW9uYWxDb2x1bW5zO1xuICB9XG5cbiAgZ2V0IGNvbHVtblBhaXJzKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmF1bHRQb2ludENvbHVtblBhaXJzO1xuICB9XG5cbiAgZ2V0IG5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcygpIHtcbiAgICByZXR1cm4gWy4uLnN1cGVyLm5vbmVMYXllckRhdGFBZmZlY3RpbmdQcm9wcywgJ3JhZGl1cyddO1xuICB9XG5cbiAgZ2V0IHZpc3VhbENoYW5uZWxzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdXBlci52aXN1YWxDaGFubmVscyxcbiAgICAgIHN0cm9rZUNvbG9yOiB7XG4gICAgICAgIHByb3BlcnR5OiAnc3Ryb2tlQ29sb3InLFxuICAgICAgICBmaWVsZDogJ3N0cm9rZUNvbG9yRmllbGQnLFxuICAgICAgICBzY2FsZTogJ3N0cm9rZUNvbG9yU2NhbGUnLFxuICAgICAgICBkb21haW46ICdzdHJva2VDb2xvckRvbWFpbicsXG4gICAgICAgIHJhbmdlOiAnc3Ryb2tlQ29sb3JSYW5nZScsXG4gICAgICAgIGtleTogJ3N0cm9rZUNvbG9yJyxcbiAgICAgICAgY2hhbm5lbFNjYWxlVHlwZTogQ0hBTk5FTF9TQ0FMRVMuY29sb3JcbiAgICAgIH0sXG4gICAgICBzaXplOiB7XG4gICAgICAgIC4uLnN1cGVyLnZpc3VhbENoYW5uZWxzLnNpemUsXG4gICAgICAgIHJhbmdlOiAncmFkaXVzUmFuZ2UnLFxuICAgICAgICBwcm9wZXJ0eTogJ3JhZGl1cycsXG4gICAgICAgIGNoYW5uZWxTY2FsZVR5cGU6ICdyYWRpdXMnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uQWNjZXNzb3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UG9zaXRpb24odGhpcy5jb25maWcuY29sdW1ucyk7XG4gIH1cblxuICBzdGF0aWMgZmluZERlZmF1bHRMYXllclByb3BzKHtmaWVsZFBhaXJzID0gW119KSB7XG4gICAgY29uc3QgcHJvcHMgPSBbXTtcblxuICAgIC8vIE1ha2UgbGF5ZXIgZm9yIGVhY2ggcGFpclxuICAgIGZpZWxkUGFpcnMuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgIC8vIGZpbmQgZmllbGRzIGZvciB0YWJsZUZpZWxkSW5kZXhcbiAgICAgIGNvbnN0IGxhdEZpZWxkID0gcGFpci5wYWlyLmxhdDtcbiAgICAgIGNvbnN0IGxuZ0ZpZWxkID0gcGFpci5wYWlyLmxuZztcbiAgICAgIGNvbnN0IGxheWVyTmFtZSA9IHBhaXIuZGVmYXVsdE5hbWU7XG5cbiAgICAgIGNvbnN0IHByb3AgPSB7XG4gICAgICAgIGxhYmVsOiBsYXllck5hbWUubGVuZ3RoID8gbGF5ZXJOYW1lIDogJ1BvaW50J1xuICAgICAgfTtcblxuICAgICAgLy8gZGVmYXVsdCBsYXllciBjb2xvciBmb3IgYmVnaW50cmlwIGFuZCBkcm9wb2ZmIHBvaW50XG4gICAgICBpZiAobGF0RmllbGQudmFsdWUgaW4gREVGQVVMVF9MQVlFUl9DT0xPUikge1xuICAgICAgICBwcm9wLmNvbG9yID0gaGV4VG9SZ2IoREVGQVVMVF9MQVlFUl9DT0xPUltsYXRGaWVsZC52YWx1ZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdGhlIGZpcnN0IGxheWVyIHRvIGJlIHZpc2libGVcbiAgICAgIGlmIChwcm9wcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcHJvcC5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wLmNvbHVtbnMgPSB7XG4gICAgICAgIGxhdDogbGF0RmllbGQsXG4gICAgICAgIGxuZzogbG5nRmllbGQsXG4gICAgICAgIGFsdGl0dWRlOiB7dmFsdWU6IG51bGwsIGZpZWxkSWR4OiAtMSwgb3B0aW9uYWw6IHRydWV9XG4gICAgICB9O1xuXG4gICAgICBwcm9wcy5wdXNoKHByb3ApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzID0ge30pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdExheWVyQ29uZmlnKHByb3BzKSxcblxuICAgICAgLy8gYWRkIHN0cm9rZSBjb2xvciB2aXN1YWwgY2hhbm5lbFxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZDogbnVsbCxcbiAgICAgIHN0cm9rZUNvbG9yRG9tYWluOiBbMCwgMV0sXG4gICAgICBzdHJva2VDb2xvclNjYWxlOiAncXVhbnRpbGUnXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRPRE86IGZpeCBjb21wbGV4aXR5XG4gIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbiAgZm9ybWF0TGF5ZXJEYXRhKF8sIGFsbERhdGEsIGZpbHRlcmVkSW5kZXgsIG9sZExheWVyRGF0YSwgb3B0ID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBjb2xvclNjYWxlLFxuICAgICAgY29sb3JEb21haW4sXG4gICAgICBjb2xvckZpZWxkLFxuICAgICAgc3Ryb2tlQ29sb3JGaWVsZCxcbiAgICAgIHN0cm9rZUNvbG9yU2NhbGUsXG4gICAgICBzdHJva2VDb2xvckRvbWFpbixcbiAgICAgIGNvbG9yLFxuICAgICAgc2l6ZUZpZWxkLFxuICAgICAgc2l6ZVNjYWxlLFxuICAgICAgc2l6ZURvbWFpbixcbiAgICAgIHRleHRMYWJlbCxcbiAgICAgIHZpc0NvbmZpZzoge1xuICAgICAgICByYWRpdXNSYW5nZSxcbiAgICAgICAgZml4ZWRSYWRpdXMsXG4gICAgICAgIGNvbG9yUmFuZ2UsXG4gICAgICAgIHN0cm9rZUNvbG9yUmFuZ2UsXG4gICAgICAgIHN0cm9rZUNvbG9yXG4gICAgICB9XG4gICAgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgLy8gZmlsbCBjb2xvclxuICAgIGNvbnN0IGNTY2FsZSA9XG4gICAgICBjb2xvckZpZWxkICYmXG4gICAgICB0aGlzLmdldFZpc0NoYW5uZWxTY2FsZShcbiAgICAgICAgY29sb3JTY2FsZSxcbiAgICAgICAgY29sb3JEb21haW4sXG4gICAgICAgIGNvbG9yUmFuZ2UuY29sb3JzLm1hcChoZXhUb1JnYilcbiAgICAgICk7XG5cbiAgICAvLyBzdHJva2UgY29sb3JcbiAgICBjb25zdCBzY1NjYWxlID1cbiAgICAgIHN0cm9rZUNvbG9yRmllbGQgJiZcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKFxuICAgICAgICBzdHJva2VDb2xvclNjYWxlLFxuICAgICAgICBzdHJva2VDb2xvckRvbWFpbixcbiAgICAgICAgc3Ryb2tlQ29sb3JSYW5nZS5jb2xvcnMubWFwKGhleFRvUmdiKVxuICAgICAgKTtcblxuICAgIC8vIHBvaW50IHJhZGl1c1xuICAgIGNvbnN0IHJTY2FsZSA9XG4gICAgICBzaXplRmllbGQgJiZcbiAgICAgIHRoaXMuZ2V0VmlzQ2hhbm5lbFNjYWxlKHNpemVTY2FsZSwgc2l6ZURvbWFpbiwgcmFkaXVzUmFuZ2UsIGZpeGVkUmFkaXVzKTtcblxuICAgIGNvbnN0IGdldFBvc2l0aW9uID0gdGhpcy5nZXRQb3NpdGlvbkFjY2Vzc29yKCk7XG5cbiAgICBpZiAoIW9sZExheWVyRGF0YSB8fCBvbGRMYXllckRhdGEuZ2V0UG9zaXRpb24gIT09IGdldFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyTWV0YShhbGxEYXRhLCBnZXRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgbGV0IGRhdGE7XG4gICAgaWYgKFxuICAgICAgb2xkTGF5ZXJEYXRhICYmXG4gICAgICBvbGRMYXllckRhdGEuZGF0YSAmJlxuICAgICAgb3B0LnNhbWVEYXRhICYmXG4gICAgICBvbGRMYXllckRhdGEuZ2V0UG9zaXRpb24gPT09IGdldFBvc2l0aW9uXG4gICAgKSB7XG4gICAgICBkYXRhID0gb2xkTGF5ZXJEYXRhLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBmaWx0ZXJlZEluZGV4LnJlZHVjZSgoYWNjdSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcG9zID0gZ2V0UG9zaXRpb24oe2RhdGE6IGFsbERhdGFbaW5kZXhdfSk7XG5cbiAgICAgICAgLy8gaWYgZG9lc24ndCBoYXZlIHBvaW50IGxhdCBvciBsbmcsIGRvIG5vdCBhZGQgdGhlIHBvaW50XG4gICAgICAgIC8vIGRlY2suZ2wgY2FuJ3QgaGFuZGxlIHBvc2l0aW9uID0gbnVsbFxuICAgICAgICBpZiAoIXBvcy5ldmVyeShOdW1iZXIuaXNGaW5pdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY3U7XG4gICAgICAgIH1cblxuICAgICAgICBhY2N1LnB1c2goe1xuICAgICAgICAgIGRhdGE6IGFsbERhdGFbaW5kZXhdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhY2N1O1xuICAgICAgfSwgW10pO1xuICAgIH1cblxuICAgIC8vIGdldCBhbGwgZGlzdGluY3QgY2hhcmFjdGVycyBpbiB0aGUgdGV4dCBsYWJlbHNcbiAgICBjb25zdCBnZXRUZXh0ID0gdGhpcy5nZXRUZXh0KHRleHRMYWJlbCk7XG4gICAgbGV0IGxhYmVsQ2hhcmFjdGVyU2V0O1xuICAgIGlmIChcbiAgICAgIG9sZExheWVyRGF0YSAmJlxuICAgICAgb2xkTGF5ZXJEYXRhLmxhYmVsQ2hhcmFjdGVyU2V0ICYmXG4gICAgICBvcHQuc2FtZURhdGEgJiZcbiAgICAgIG9sZExheWVyRGF0YS5nZXRUZXh0ID09PSBnZXRUZXh0XG4gICAgKSB7XG4gICAgICBsYWJlbENoYXJhY3RlclNldCA9IG9sZExheWVyRGF0YS5sYWJlbENoYXJhY3RlclNldDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dExhYmVscyA9IHRleHRMYWJlbC5maWVsZCA/IGRhdGEubWFwKGdldFRleHQpIDogW107XG4gICAgICBsYWJlbENoYXJhY3RlclNldCA9IHVuaXEodGV4dExhYmVscy5qb2luKCcnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UmFkaXVzID0gclNjYWxlXG4gICAgICA/IGQgPT4gdGhpcy5nZXRFbmNvZGVkQ2hhbm5lbFZhbHVlKHJTY2FsZSwgZC5kYXRhLCBzaXplRmllbGQpXG4gICAgICA6IDE7XG5cbiAgICBjb25zdCBnZXRGaWxsQ29sb3IgPSBjU2NhbGVcbiAgICAgID8gZCA9PiB0aGlzLmdldEVuY29kZWRDaGFubmVsVmFsdWUoY1NjYWxlLCBkLmRhdGEsIGNvbG9yRmllbGQpXG4gICAgICA6IGNvbG9yO1xuXG4gICAgY29uc3QgZ2V0TGluZUNvbG9yID0gc2NTY2FsZVxuICAgICAgPyBkID0+IHRoaXMuZ2V0RW5jb2RlZENoYW5uZWxWYWx1ZShzY1NjYWxlLCBkLmRhdGEsIHN0cm9rZUNvbG9yRmllbGQpXG4gICAgICA6IHN0cm9rZUNvbG9yIHx8IGNvbG9yO1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhLFxuICAgICAgbGFiZWxDaGFyYWN0ZXJTZXQsXG4gICAgICBnZXRQb3NpdGlvbixcbiAgICAgIGdldEZpbGxDb2xvcixcbiAgICAgIGdldExpbmVDb2xvcixcbiAgICAgIGdldFJhZGl1cyxcbiAgICAgIGdldFRleHRcbiAgICB9O1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgY29tcGxleGl0eSAqL1xuXG4gIHVwZGF0ZUxheWVyTWV0YShhbGxEYXRhKSB7XG4gICAgY29uc3QgZ2V0UG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uQWNjZXNzb3IoKTtcbiAgICBjb25zdCBib3VuZHMgPSB0aGlzLmdldFBvaW50c0JvdW5kcyhhbGxEYXRhLCBkID0+IGdldFBvc2l0aW9uKHtkYXRhOiBkfSkpO1xuICAgIHRoaXMudXBkYXRlTWV0YSh7Ym91bmRzfSk7XG4gIH1cblxuICByZW5kZXJMYXllcih7XG4gICAgZGF0YSxcbiAgICBpZHgsXG4gICAgbGF5ZXJJbnRlcmFjdGlvbixcbiAgICBvYmplY3RIb3ZlcmVkLFxuICAgIG1hcFN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnXG4gIH0pIHtcbiAgICBjb25zdCBlbmFibGVCcnVzaGluZyA9IGludGVyYWN0aW9uQ29uZmlnLmJydXNoLmVuYWJsZWQ7XG5cbiAgICBjb25zdCBsYXllclByb3BzID0ge1xuICAgICAgLy8gVE9ETzogc3VwcG9ydCBzZXR0aW5nIHN0cm9rZSBhbmQgZmlsbCBzaW11bHRhbmVvdXNseVxuICAgICAgc3Ryb2tlZDogdGhpcy5jb25maWcudmlzQ29uZmlnLm91dGxpbmUsXG4gICAgICBmaWxsZWQ6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5maWxsZWQsXG4gICAgICByYWRpdXNNaW5QaXhlbHM6IDEsXG4gICAgICBsaW5lV2lkdGhNaW5QaXhlbHM6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy50aGlja25lc3MsXG4gICAgICByYWRpdXNTY2FsZTogdGhpcy5nZXRSYWRpdXNTY2FsZUJ5Wm9vbShtYXBTdGF0ZSksXG4gICAgICAuLi4odGhpcy5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzID8ge30gOiB7cmFkaXVzTWF4UGl4ZWxzOiA1MDB9KVxuICAgIH07XG5cbiAgICBjb25zdCBpbnRlcmFjdGlvbiA9IHtcbiAgICAgIGF1dG9IaWdobGlnaHQ6ICFlbmFibGVCcnVzaGluZyxcbiAgICAgIGVuYWJsZUJydXNoaW5nLFxuICAgICAgYnJ1c2hSYWRpdXM6IGludGVyYWN0aW9uQ29uZmlnLmJydXNoLmNvbmZpZy5zaXplICogMTAwMCxcbiAgICAgIGhpZ2hsaWdodENvbG9yOiB0aGlzLmNvbmZpZy5oaWdobGlnaHRDb2xvclxuICAgIH07XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IFNjYXR0ZXJwbG90QnJ1c2hpbmdMYXllcih7XG4gICAgICAgIC4uLmxheWVyUHJvcHMsXG4gICAgICAgIC4uLmxheWVySW50ZXJhY3Rpb24sXG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIC4uLmludGVyYWN0aW9uLFxuXG4gICAgICAgIGlkeCxcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIG9wYWNpdHk6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5vcGFjaXR5LFxuICAgICAgICBwaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgcGFyYW1ldGVyczoge1xuICAgICAgICAgIC8vIGNpcmNsZXMgd2lsbCBiZSBmbGF0IG9uIHRoZSBtYXAgd2hlbiB0aGUgYWx0aXR1ZGUgY29sdW1uIGlzIG5vdCB1c2VkXG4gICAgICAgICAgZGVwdGhUZXN0OiB0aGlzLmNvbmZpZy5jb2x1bW5zLmFsdGl0dWRlLmZpZWxkSWR4ID4gLTFcbiAgICAgICAgfSxcblxuICAgICAgICB1cGRhdGVUcmlnZ2Vyczoge1xuICAgICAgICAgIGdldFBvc2l0aW9uOiB7XG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZy5jb2x1bW5zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRSYWRpdXM6IHtcbiAgICAgICAgICAgIHNpemVGaWVsZDogdGhpcy5jb25maWcuc2l6ZUZpZWxkLFxuICAgICAgICAgICAgcmFkaXVzUmFuZ2U6IHRoaXMuY29uZmlnLnZpc0NvbmZpZy5yYWRpdXNSYW5nZSxcbiAgICAgICAgICAgIGZpeGVkUmFkaXVzOiB0aGlzLmNvbmZpZy52aXNDb25maWcuZml4ZWRSYWRpdXMsXG4gICAgICAgICAgICBzaXplU2NhbGU6IHRoaXMuY29uZmlnLnNpemVTY2FsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZ2V0RmlsbENvbG9yOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb25maWcuY29sb3IsXG4gICAgICAgICAgICBjb2xvckZpZWxkOiB0aGlzLmNvbmZpZy5jb2xvckZpZWxkLFxuICAgICAgICAgICAgY29sb3JSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLmNvbG9yUmFuZ2UsXG4gICAgICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5jb2xvclNjYWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRMaW5lQ29sb3I6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgICBjb2xvckZpZWxkOiB0aGlzLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkLFxuICAgICAgICAgICAgY29sb3JSYW5nZTogdGhpcy5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yUmFuZ2UsXG4gICAgICAgICAgICBjb2xvclNjYWxlOiB0aGlzLmNvbmZpZy5zdHJva2VDb2xvclNjYWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXRUZXh0OiB7XG4gICAgICAgICAgICB0ZXh0TGFiZWw6IHRoaXMuY29uZmlnLnRleHRMYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAvLyBob3ZlciBsYXllclxuICAgICAgLi4uKHRoaXMuaXNMYXllckhvdmVyZWQob2JqZWN0SG92ZXJlZClcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBuZXcgU2NhdHRlcnBsb3RCcnVzaGluZ0xheWVyKHtcbiAgICAgICAgICAgICAgLi4ubGF5ZXJQcm9wcyxcbiAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuaWR9LWhvdmVyZWRgLFxuICAgICAgICAgICAgICBkYXRhOiBbb2JqZWN0SG92ZXJlZC5vYmplY3RdLFxuICAgICAgICAgICAgICBnZXRMaW5lQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRGaWxsQ29sb3I6IHRoaXMuY29uZmlnLmhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICBnZXRSYWRpdXM6IGRhdGEuZ2V0UmFkaXVzLFxuICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgcGlja2FibGU6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXSksXG4gICAgICAvLyB0ZXh0IGxhYmVsIGxheWVyXG4gICAgICAuLi4odGhpcy5jb25maWcudGV4dExhYmVsLmZpZWxkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgbmV3IFRleHRMYXllcih7XG4gICAgICAgICAgICAgIC4uLmxheWVySW50ZXJhY3Rpb24sXG4gICAgICAgICAgICAgIGlkOiBgJHt0aGlzLmlkfS1sYWJlbGAsXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEuZGF0YSxcbiAgICAgICAgICAgICAgZ2V0UG9zaXRpb246IGRhdGEuZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICAgIGdldFBpeGVsT2Zmc2V0OiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwub2Zmc2V0LFxuICAgICAgICAgICAgICBnZXRTaXplOiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuc2l6ZSxcbiAgICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGhpcy5jb25maWcudGV4dExhYmVsLmFuY2hvcixcbiAgICAgICAgICAgICAgZ2V0VGV4dDogZGF0YS5nZXRUZXh0LFxuICAgICAgICAgICAgICBnZXRDb2xvcjogZCA9PiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuY29sb3IsXG4gICAgICAgICAgICAgIHBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0IHdpbGwgYWx3YXlzIHNob3cgb24gdG9wIG9mIGFsbCBsYXllcnNcbiAgICAgICAgICAgICAgICBkZXB0aFRlc3Q6IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNoYXJhY3RlclNldDogZGF0YS5sYWJlbENoYXJhY3RlclNldCxcbiAgICAgICAgICAgICAgdXBkYXRlVHJpZ2dlcnM6IHtcbiAgICAgICAgICAgICAgICBnZXRQb3NpdGlvbjogZGF0YS5nZXRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBnZXRQaXhlbE9mZnNldDogdGhpcy5jb25maWcudGV4dExhYmVsLm9mZnNldCxcbiAgICAgICAgICAgICAgICBnZXRUZXh0OiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuZmllbGQsXG4gICAgICAgICAgICAgICAgZ2V0VGV4dEFuY2hvcjogdGhpcy5jb25maWcudGV4dExhYmVsLmFuY2hvcixcbiAgICAgICAgICAgICAgICBnZXRTaXplOiB0aGlzLmNvbmZpZy50ZXh0TGFiZWwuc2l6ZSxcbiAgICAgICAgICAgICAgICBnZXRDb2xvcjogdGhpcy5jb25maWcudGV4dExhYmVsLmNvbG9yXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdKVxuICAgIF07XG4gIH1cbn1cbiJdfQ==