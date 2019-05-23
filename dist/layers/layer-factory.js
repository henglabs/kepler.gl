"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_TEXT_LABEL = exports.LAYER_TEXT_CONFIGS = exports.LAYER_VIS_CONFIGS = exports.PROPERTY_GROUPS = void 0;

var _keymirror = _interopRequireDefault(require("keymirror"));

var _defaultSettings = require("../constants/default-settings");

var _colorRanges = require("../constants/color-ranges");

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
var PROPERTY_GROUPS = (0, _keymirror["default"])({
  color: null,
  stroke: null,
  radius: null,
  height: null,
  // for heatmap aggregation
  cell: null,
  precision: null
});
exports.PROPERTY_GROUPS = PROPERTY_GROUPS;
var LAYER_VIS_CONFIGS = {
  thickness: {
    type: 'number',
    defaultValue: 2,
    label: 'Stroke Width',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.stroke,
    property: 'thickness'
  },
  strokeWidthRange: {
    type: 'number',
    defaultValue: [0, 10],
    label: 'Stroke Width Range',
    isRanged: true,
    range: [0, 200],
    step: 0.1,
    group: PROPERTY_GROUPS.stroke,
    property: 'sizeRange'
  },
  // radius is actually radiusScale in deck.gl
  radius: {
    type: 'number',
    defaultValue: 10,
    label: 'Radius',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'radius'
  },
  fixedRadius: {
    defaultValue: false,
    type: 'boolean',
    label: 'Fixed Radius to meter',
    description: 'Map radius to absolute radius in meters, e.g. 5 to 5 meters',
    group: PROPERTY_GROUPS.radius,
    property: 'fixedRadius'
  },
  radiusRange: {
    type: 'number',
    defaultValue: [0, 50],
    isRanged: true,
    range: [0, 500],
    step: 0.1,
    label: 'Radius Range',
    group: PROPERTY_GROUPS.radius,
    property: 'radiusRange'
  },
  clusterRadius: {
    type: 'number',
    label: 'Cluster Size (m)',
    defaultValue: 40,
    isRanged: false,
    range: [1, 500],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'clusterRadius'
  },
  clusterRadiusRange: {
    type: 'number',
    label: 'Radius Range (m)',
    defaultValue: [1, 40],
    isRanged: true,
    range: [1, 150],
    step: 0.1,
    group: PROPERTY_GROUPS.radius,
    property: 'radiusRange'
  },
  opacity: {
    type: 'number',
    defaultValue: 0.8,
    label: 'Opacity',
    isRanged: false,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.color,
    property: 'opacity'
  },
  coverage: {
    type: 'number',
    defaultValue: 1,
    label: 'Coverage',
    isRanged: false,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.cell,
    property: 'coverage'
  },
  // used in point layer
  outline: {
    type: 'boolean',
    defaultValue: false,
    label: 'Outline',
    group: PROPERTY_GROUPS.display,
    property: 'outline'
  },
  colorRange: {
    type: 'color-range-select',
    defaultValue: _colorRanges.DefaultColorRange,
    label: 'Color range',
    group: PROPERTY_GROUPS.color,
    property: 'colorRange'
  },
  strokeColorRange: {
    type: 'color-range-select',
    defaultValue: _colorRanges.DefaultColorRange,
    label: 'Stroke Color range',
    group: PROPERTY_GROUPS.color,
    property: 'strokeColorRange'
  },
  targetColor: {
    type: 'color-select',
    label: 'Target Color',
    defaultValue: null,
    group: PROPERTY_GROUPS.color,
    property: 'targetColor'
  },
  strokeColor: {
    type: 'color-select',
    label: 'Stroke Color',
    defaultValue: null,
    group: PROPERTY_GROUPS.color,
    property: 'strokeColor'
  },
  aggregation: {
    type: 'select',
    defaultValue: _defaultSettings.AGGREGATION_TYPES.average,
    label: 'Color Aggregation',
    // aggregation options are based on color field types
    options: Object.keys(_defaultSettings.AGGREGATION_TYPES),
    group: PROPERTY_GROUPS.color,
    property: 'colorAggregation',
    condition: function condition(config) {
      return config.colorField;
    }
  },
  sizeAggregation: {
    type: 'select',
    defaultValue: _defaultSettings.AGGREGATION_TYPES.average,
    label: 'Height Aggregation',
    // aggregation options are based on color field types
    options: Object.keys(_defaultSettings.AGGREGATION_TYPES),
    group: PROPERTY_GROUPS.height,
    property: 'sizeAggregation',
    condition: function condition(config) {
      return config.sizeField;
    }
  },
  percentile: {
    type: 'number',
    defaultValue: [0, 100],
    label: function label(config) {
      return "Filter by ".concat(config.colorField ? "".concat(config.visConfig.colorAggregation, " ").concat(config.colorField.name) : 'count', " percentile");
    },
    isRanged: true,
    range: [0, 100],
    step: 0.01,
    group: PROPERTY_GROUPS.color,
    property: 'percentile',
    // percentile filter only makes sense with linear aggregation
    condition: function condition(config) {
      return config.colorScale !== 'ordinal';
    }
  },
  elevationPercentile: {
    type: 'number',
    defaultValue: [0, 100],
    label: function label(config) {
      return "Filter by ".concat(config.sizeField ? "".concat(config.visConfig.sizeAggregation, " ").concat(config.sizeField.name) : 'count', " percentile");
    },
    isRanged: true,
    range: [0, 100],
    step: 0.01,
    group: PROPERTY_GROUPS.height,
    property: 'elevationPercentile',
    // percentile filter only makes sense with linear aggregation
    condition: function condition(config) {
      return config.visConfig.enable3d && (config.colorField || config.sizeField);
    }
  },
  resolution: {
    type: 'number',
    defaultValue: 8,
    label: 'Resolution range',
    isRanged: false,
    range: [0, 13],
    step: 1,
    group: PROPERTY_GROUPS.cell,
    property: 'resolution'
  },
  worldUnitSize: {
    type: 'number',
    defaultValue: 1,
    label: 'World Unit Size',
    isRanged: false,
    range: [0, 500],
    step: 0.0001,
    group: PROPERTY_GROUPS.cell,
    property: 'worldUnitSize'
  },
  elevationScale: {
    type: 'number',
    defaultValue: 5,
    label: 'Elevation Scale',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.height,
    property: 'elevationScale'
  },
  elevationRange: {
    type: 'number',
    defaultValue: [0, 500],
    label: 'Height Scale',
    isRanged: true,
    range: [0, 1000],
    step: 0.01,
    group: PROPERTY_GROUPS.height,
    property: 'sizeRange'
  },
  coverageRange: {
    type: 'number',
    defaultValue: [0, 1],
    label: 'Coverage Range',
    isRanged: true,
    range: [0, 1],
    step: 0.01,
    group: PROPERTY_GROUPS.radius,
    property: 'coverageRange'
  },
  // hi precision is deprecated by deck.gl
  'hi-precision': {
    type: 'boolean',
    defaultValue: false,
    label: 'High Precision Rendering',
    group: PROPERTY_GROUPS.precision,
    property: 'hi-precision',
    description: 'High precision will result in slower performance'
  },
  enable3d: {
    type: 'boolean',
    defaultValue: false,
    label: 'Height',
    group: PROPERTY_GROUPS.height,
    property: 'enable3d',
    description: 'Click button at top right of the map to switch to 3d view'
  },
  stroked: {
    type: 'boolean',
    label: 'Stroke',
    defaultValue: true,
    group: PROPERTY_GROUPS.display,
    property: 'stroked'
  },
  filled: {
    type: 'boolean',
    label: 'Fill',
    defaultValue: false,
    group: PROPERTY_GROUPS.display,
    property: 'filled'
  },
  extruded: {
    type: 'boolean',
    defaultValue: false,
    label: 'Enable Polygon Height',
    group: PROPERTY_GROUPS.display,
    property: 'extruded'
  },
  wireframe: {
    type: 'boolean',
    defaultValue: false,
    label: 'Show Wireframe',
    group: PROPERTY_GROUPS.display,
    property: 'wireframe'
  },
  // used for heatmap
  weight: {
    type: 'number',
    defaultValue: 1,
    label: 'Weight Intensity',
    isRanged: false,
    range: [0.01, 500],
    step: 0.01,
    group: PROPERTY_GROUPS.cell,
    property: 'weight',
    condition: function condition(config) {
      return config.weightField;
    }
  },
  heatmapRadius: {
    type: 'number',
    defaultValue: 20,
    label: 'Radius',
    isRanged: false,
    range: [0, 100],
    step: 0.1,
    group: PROPERTY_GROUPS.cell,
    property: 'radius'
  }
};
exports.LAYER_VIS_CONFIGS = LAYER_VIS_CONFIGS;
var LAYER_TEXT_CONFIGS = {
  fontSize: {
    type: 'number',
    range: [1, 100],
    value0: 1,
    step: 1,
    isRanged: false,
    label: 'Font size',
    showInput: true
  },
  textAnchor: {
    type: 'select',
    options: ['start', 'middle', 'end'],
    multiSelect: false,
    searchable: false
  },
  textAlignment: {
    type: 'select',
    options: ['top', 'center', 'bottom'],
    multiSelect: false,
    searchable: false
  }
};
exports.LAYER_TEXT_CONFIGS = LAYER_TEXT_CONFIGS;
var DEFAULT_TEXT_LABEL = {
  field: null,
  color: [255, 255, 255],
  size: 18,
  offset: [0, 0],
  anchor: 'start',
  alignment: 'center'
};
exports.DEFAULT_TEXT_LABEL = DEFAULT_TEXT_LABEL;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sYXllcnMvbGF5ZXItZmFjdG9yeS5qcyJdLCJuYW1lcyI6WyJQUk9QRVJUWV9HUk9VUFMiLCJjb2xvciIsInN0cm9rZSIsInJhZGl1cyIsImhlaWdodCIsImNlbGwiLCJwcmVjaXNpb24iLCJMQVlFUl9WSVNfQ09ORklHUyIsInRoaWNrbmVzcyIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJsYWJlbCIsImlzUmFuZ2VkIiwicmFuZ2UiLCJzdGVwIiwiZ3JvdXAiLCJwcm9wZXJ0eSIsInN0cm9rZVdpZHRoUmFuZ2UiLCJmaXhlZFJhZGl1cyIsImRlc2NyaXB0aW9uIiwicmFkaXVzUmFuZ2UiLCJjbHVzdGVyUmFkaXVzIiwiY2x1c3RlclJhZGl1c1JhbmdlIiwib3BhY2l0eSIsImNvdmVyYWdlIiwib3V0bGluZSIsImRpc3BsYXkiLCJjb2xvclJhbmdlIiwiRGVmYXVsdENvbG9yUmFuZ2UiLCJzdHJva2VDb2xvclJhbmdlIiwidGFyZ2V0Q29sb3IiLCJzdHJva2VDb2xvciIsImFnZ3JlZ2F0aW9uIiwiQUdHUkVHQVRJT05fVFlQRVMiLCJhdmVyYWdlIiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJjb25kaXRpb24iLCJjb25maWciLCJjb2xvckZpZWxkIiwic2l6ZUFnZ3JlZ2F0aW9uIiwic2l6ZUZpZWxkIiwicGVyY2VudGlsZSIsInZpc0NvbmZpZyIsImNvbG9yQWdncmVnYXRpb24iLCJuYW1lIiwiY29sb3JTY2FsZSIsImVsZXZhdGlvblBlcmNlbnRpbGUiLCJlbmFibGUzZCIsInJlc29sdXRpb24iLCJ3b3JsZFVuaXRTaXplIiwiZWxldmF0aW9uU2NhbGUiLCJlbGV2YXRpb25SYW5nZSIsImNvdmVyYWdlUmFuZ2UiLCJzdHJva2VkIiwiZmlsbGVkIiwiZXh0cnVkZWQiLCJ3aXJlZnJhbWUiLCJ3ZWlnaHQiLCJ3ZWlnaHRGaWVsZCIsImhlYXRtYXBSYWRpdXMiLCJMQVlFUl9URVhUX0NPTkZJR1MiLCJmb250U2l6ZSIsInZhbHVlMCIsInNob3dJbnB1dCIsInRleHRBbmNob3IiLCJtdWx0aVNlbGVjdCIsInNlYXJjaGFibGUiLCJ0ZXh0QWxpZ25tZW50IiwiREVGQVVMVF9URVhUX0xBQkVMIiwiZmllbGQiLCJzaXplIiwib2Zmc2V0IiwiYW5jaG9yIiwiYWxpZ25tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7O0FBRUE7O0FBQ0E7O0FBdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT08sSUFBTUEsZUFBZSxHQUFHLDJCQUFVO0FBQ3ZDQyxFQUFBQSxLQUFLLEVBQUUsSUFEZ0M7QUFFdkNDLEVBQUFBLE1BQU0sRUFBRSxJQUYrQjtBQUd2Q0MsRUFBQUEsTUFBTSxFQUFFLElBSCtCO0FBSXZDQyxFQUFBQSxNQUFNLEVBQUUsSUFKK0I7QUFNdkM7QUFDQUMsRUFBQUEsSUFBSSxFQUFFLElBUGlDO0FBUXZDQyxFQUFBQSxTQUFTLEVBQUU7QUFSNEIsQ0FBVixDQUF4Qjs7QUFXQSxJQUFNQyxpQkFBaUIsR0FBRztBQUMvQkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLElBQUksRUFBRSxRQURHO0FBRVRDLElBQUFBLFlBQVksRUFBRSxDQUZMO0FBR1RDLElBQUFBLEtBQUssRUFBRSxjQUhFO0FBSVRDLElBQUFBLFFBQVEsRUFBRSxLQUpEO0FBS1RDLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBTEU7QUFNVEMsSUFBQUEsSUFBSSxFQUFFLEdBTkc7QUFPVEMsSUFBQUEsS0FBSyxFQUFFZixlQUFlLENBQUNFLE1BUGQ7QUFRVGMsSUFBQUEsUUFBUSxFQUFFO0FBUkQsR0FEb0I7QUFXL0JDLEVBQUFBLGdCQUFnQixFQUFFO0FBQ2hCUixJQUFBQSxJQUFJLEVBQUUsUUFEVTtBQUVoQkMsSUFBQUEsWUFBWSxFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FGRTtBQUdoQkMsSUFB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QUksRUFBRSxRQURFO0FBRVJJLElBQUFBLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBRkM7QUFHUm1ELElBQUFBLE1BQU0sRUFBRSxDQUhBO0FBSVJsRCxJQUFBQSxJQUFJLEVBQUUsQ0FKRTtBQUtSRixJQUFBQSxRQUFRLEVBQUUsS0FMRjtBQU1SRCxJQUFBQSxLQUFLLEVBQUUsV0FOQztBQU9Sc0QsSUFBQUEsU0FBUyxFQUFFO0FBUEgsR0FEc0I7QUFVaENDLEVBQUFBLFVBQVUsRUFBRTtBQUNWekQsSUFBQUEsSUFBSSxFQUFFLFFBREk7QUFFVjBCLElBQUFBLE9BQU8sRUFBRSxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLEtBQXBCLENBRkM7QUFHVmdDLElBQUFBLFdBQVcsRUFBRSxLQUhIO0FBSVZDLElBQUFBLFVBQVUsRUFBRTtBQUpGLEdBVm9CO0FBZ0JoQ0MsRUFBQUEsYUFBYSxFQUFFO0FBQ2I1RCxJQUFBQSxJQUFJLEVBQUUsUUFETztBQUViMEIsSUFBQUEsT0FBTyxFQUFFLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsUUFBbEIsQ0FGSTtBQUdiZ0MsSUFBQUEsV0FBVyxFQUFFLEtBSEE7QUFJYkMsSUFBQUEsVUFBVSxFQUFFO0FBSkM7QUFoQmlCLENBQTNCOztBQXdCQSxJQUFNRSxrQkFBa0IsR0FBRztBQUNoQ0MsRUFBQUEsS0FBSyxFQUFFLElBRHlCO0FBRWhDdEUsRUFBQUEsS0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBRnlCO0FBR2hDdUUsRUFBQUEsSUFBSSxFQUFFLEVBSDBCO0FBSWhDQyxFQUFBQSxNQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUp3QjtBQUtoQ0MsRUFBQUEsTUFBTSxFQUFFLE9BTHdCO0FBTWhDQyxFQUFBQSxTQUFTLEVBQUU7QUFOcUIsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQga2V5TWlycm9yIGZyb20gJ2tleW1pcnJvcic7XG5cbmltcG9ydCB7QUdHUkVHQVRJT05fVFlQRVN9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7RGVmYXVsdENvbG9yUmFuZ2V9IGZyb20gJ2NvbnN0YW50cy9jb2xvci1yYW5nZXMnO1xuXG5leHBvcnQgY29uc3QgUFJPUEVSVFlfR1JPVVBTID0ga2V5TWlycm9yKHtcbiAgY29sb3I6IG51bGwsXG4gIHN0cm9rZTogbnVsbCxcbiAgcmFkaXVzOiBudWxsLFxuICBoZWlnaHQ6IG51bGwsXG5cbiAgLy8gZm9yIGhlYXRtYXAgYWdncmVnYXRpb25cbiAgY2VsbDogbnVsbCxcbiAgcHJlY2lzaW9uOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IExBWUVSX1ZJU19DT05GSUdTID0ge1xuICB0aGlja25lc3M6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDIsXG4gICAgbGFiZWw6ICdTdHJva2UgV2lkdGgnLFxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcbiAgICByYW5nZTogWzAsIDEwMF0sXG4gICAgc3RlcDogMC4xLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuc3Ryb2tlLFxuICAgIHByb3BlcnR5OiAndGhpY2tuZXNzJ1xuICB9LFxuICBzdHJva2VXaWR0aFJhbmdlOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiBbMCwgMTBdLFxuICAgIGxhYmVsOiAnU3Ryb2tlIFdpZHRoIFJhbmdlJyxcbiAgICBpc1JhbmdlZDogdHJ1ZSxcbiAgICByYW5nZTogWzAsIDIwMF0sXG4gICAgc3RlcDogMC4xLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuc3Ryb2tlLFxuICAgIHByb3BlcnR5OiAnc2l6ZVJhbmdlJ1xuICB9LFxuICAvLyByYWRpdXMgaXMgYWN0dWFsbHkgcmFkaXVzU2NhbGUgaW4gZGVjay5nbFxuICByYWRpdXM6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDEwLFxuICAgIGxhYmVsOiAnUmFkaXVzJyxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgcmFuZ2U6IFswLCAxMDBdLFxuICAgIHN0ZXA6IDAuMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLnJhZGl1cyxcbiAgICBwcm9wZXJ0eTogJ3JhZGl1cydcbiAgfSxcbiAgZml4ZWRSYWRpdXM6IHtcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBsYWJlbDogJ0ZpeGVkIFJhZGl1cyB0byBtZXRlcicsXG4gICAgZGVzY3JpcHRpb246ICdNYXAgcmFkaXVzIHRvIGFic29sdXRlIHJhZGl1cyBpbiBtZXRlcnMsIGUuZy4gNSB0byA1IG1ldGVycycsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5yYWRpdXMsXG4gICAgcHJvcGVydHk6ICdmaXhlZFJhZGl1cydcbiAgfSxcbiAgcmFkaXVzUmFuZ2U6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IFswLCA1MF0sXG4gICAgaXNSYW5nZWQ6IHRydWUsXG4gICAgcmFuZ2U6IFswLCA1MDBdLFxuICAgIHN0ZXA6IDAuMSxcbiAgICBsYWJlbDogJ1JhZGl1cyBSYW5nZScsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5yYWRpdXMsXG4gICAgcHJvcGVydHk6ICdyYWRpdXNSYW5nZSdcbiAgfSxcbiAgY2x1c3RlclJhZGl1czoge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGxhYmVsOiAnQ2x1c3RlciBTaXplIChtKScsXG4gICAgZGVmYXVsdFZhbHVlOiA0MCxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgcmFuZ2U6IFsxLCA1MDBdLFxuICAgIHN0ZXA6IDAuMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLnJhZGl1cyxcbiAgICBwcm9wZXJ0eTogJ2NsdXN0ZXJSYWRpdXMnXG4gIH0sXG4gIGNsdXN0ZXJSYWRpdXNSYW5nZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGxhYmVsOiAnUmFkaXVzIFJhbmdlIChtKScsXG4gICAgZGVmYXVsdFZhbHVlOiBbMSwgNDBdLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHJhbmdlOiBbMSwgMTUwXSxcbiAgICBzdGVwOiAwLjEsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5yYWRpdXMsXG4gICAgcHJvcGVydHk6ICdyYWRpdXNSYW5nZSdcbiAgfSxcbiAgb3BhY2l0eToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogMC44LFxuICAgIGxhYmVsOiAnT3BhY2l0eScsXG4gICAgaXNSYW5nZWQ6IGZhbHNlLFxuICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNvbG9yLFxuICAgIHByb3BlcnR5OiAnb3BhY2l0eSdcbiAgfSxcbiAgY292ZXJhZ2U6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDEsXG4gICAgbGFiZWw6ICdDb3ZlcmFnZScsXG4gICAgaXNSYW5nZWQ6IGZhbHNlLFxuICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNlbGwsXG4gICAgcHJvcGVydHk6ICdjb3ZlcmFnZSdcbiAgfSxcbiAgLy8gdXNlZCBpbiBwb2ludCBsYXllclxuICBvdXRsaW5lOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgbGFiZWw6ICdPdXRsaW5lJyxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmRpc3BsYXksXG4gICAgcHJvcGVydHk6ICdvdXRsaW5lJ1xuICB9LFxuICBjb2xvclJhbmdlOiB7XG4gICAgdHlwZTogJ2NvbG9yLXJhbmdlLXNlbGVjdCcsXG4gICAgZGVmYXVsdFZhbHVlOiBEZWZhdWx0Q29sb3JSYW5nZSxcbiAgICBsYWJlbDogJ0NvbG9yIHJhbmdlJyxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNvbG9yLFxuICAgIHByb3BlcnR5OiAnY29sb3JSYW5nZSdcbiAgfSxcbiAgc3Ryb2tlQ29sb3JSYW5nZToge1xuICAgIHR5cGU6ICdjb2xvci1yYW5nZS1zZWxlY3QnLFxuICAgIGRlZmF1bHRWYWx1ZTogRGVmYXVsdENvbG9yUmFuZ2UsXG4gICAgbGFiZWw6ICdTdHJva2UgQ29sb3IgcmFuZ2UnLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuY29sb3IsXG4gICAgcHJvcGVydHk6ICdzdHJva2VDb2xvclJhbmdlJ1xuICB9LFxuICB0YXJnZXRDb2xvcjoge1xuICAgIHR5cGU6ICdjb2xvci1zZWxlY3QnLFxuICAgIGxhYmVsOiAnVGFyZ2V0IENvbG9yJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5jb2xvcixcbiAgICBwcm9wZXJ0eTogJ3RhcmdldENvbG9yJ1xuICB9LFxuICBzdHJva2VDb2xvcjoge1xuICAgIHR5cGU6ICdjb2xvci1zZWxlY3QnLFxuICAgIGxhYmVsOiAnU3Ryb2tlIENvbG9yJyxcbiAgICBkZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5jb2xvcixcbiAgICBwcm9wZXJ0eTogJ3N0cm9rZUNvbG9yJ1xuICB9LFxuICBhZ2dyZWdhdGlvbjoge1xuICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgIGRlZmF1bHRWYWx1ZTogQUdHUkVHQVRJT05fVFlQRVMuYXZlcmFnZSxcbiAgICBsYWJlbDogJ0NvbG9yIEFnZ3JlZ2F0aW9uJyxcbiAgICAvLyBhZ2dyZWdhdGlvbiBvcHRpb25zIGFyZSBiYXNlZCBvbiBjb2xvciBmaWVsZCB0eXBlc1xuICAgIG9wdGlvbnM6IE9iamVjdC5rZXlzKEFHR1JFR0FUSU9OX1RZUEVTKSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNvbG9yLFxuICAgIHByb3BlcnR5OiAnY29sb3JBZ2dyZWdhdGlvbicsXG4gICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLmNvbG9yRmllbGRcbiAgfSxcbiAgc2l6ZUFnZ3JlZ2F0aW9uOiB7XG4gICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgZGVmYXVsdFZhbHVlOiBBR0dSRUdBVElPTl9UWVBFUy5hdmVyYWdlLFxuICAgIGxhYmVsOiAnSGVpZ2h0IEFnZ3JlZ2F0aW9uJyxcbiAgICAvLyBhZ2dyZWdhdGlvbiBvcHRpb25zIGFyZSBiYXNlZCBvbiBjb2xvciBmaWVsZCB0eXBlc1xuICAgIG9wdGlvbnM6IE9iamVjdC5rZXlzKEFHR1JFR0FUSU9OX1RZUEVTKSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmhlaWdodCxcbiAgICBwcm9wZXJ0eTogJ3NpemVBZ2dyZWdhdGlvbicsXG4gICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnNpemVGaWVsZFxuICB9LFxuICBwZXJjZW50aWxlOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiBbMCwgMTAwXSxcbiAgICBsYWJlbDogY29uZmlnID0+XG4gICAgICBgRmlsdGVyIGJ5ICR7XG4gICAgICAgIGNvbmZpZy5jb2xvckZpZWxkXG4gICAgICAgICAgPyBgJHtjb25maWcudmlzQ29uZmlnLmNvbG9yQWdncmVnYXRpb259ICR7Y29uZmlnLmNvbG9yRmllbGQubmFtZX1gXG4gICAgICAgICAgOiAnY291bnQnXG4gICAgICB9IHBlcmNlbnRpbGVgLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHJhbmdlOiBbMCwgMTAwXSxcbiAgICBzdGVwOiAwLjAxLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuY29sb3IsXG4gICAgcHJvcGVydHk6ICdwZXJjZW50aWxlJyxcblxuICAgIC8vIHBlcmNlbnRpbGUgZmlsdGVyIG9ubHkgbWFrZXMgc2Vuc2Ugd2l0aCBsaW5lYXIgYWdncmVnYXRpb25cbiAgICBjb25kaXRpb246IGNvbmZpZyA9PiBjb25maWcuY29sb3JTY2FsZSAhPT0gJ29yZGluYWwnXG4gIH0sXG4gIGVsZXZhdGlvblBlcmNlbnRpbGU6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IFswLCAxMDBdLFxuICAgIGxhYmVsOiBjb25maWcgPT5cbiAgICAgIGBGaWx0ZXIgYnkgJHtcbiAgICAgICAgY29uZmlnLnNpemVGaWVsZFxuICAgICAgICAgID8gYCR7Y29uZmlnLnZpc0NvbmZpZy5zaXplQWdncmVnYXRpb259ICR7Y29uZmlnLnNpemVGaWVsZC5uYW1lfWBcbiAgICAgICAgICA6ICdjb3VudCdcbiAgICAgIH0gcGVyY2VudGlsZWAsXG4gICAgaXNSYW5nZWQ6IHRydWUsXG4gICAgcmFuZ2U6IFswLCAxMDBdLFxuICAgIHN0ZXA6IDAuMDEsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5oZWlnaHQsXG4gICAgcHJvcGVydHk6ICdlbGV2YXRpb25QZXJjZW50aWxlJyxcbiAgICAvLyBwZXJjZW50aWxlIGZpbHRlciBvbmx5IG1ha2VzIHNlbnNlIHdpdGggbGluZWFyIGFnZ3JlZ2F0aW9uXG4gICAgY29uZGl0aW9uOiBjb25maWcgPT4gY29uZmlnLnZpc0NvbmZpZy5lbmFibGUzZCAmJiAoY29uZmlnLmNvbG9yRmllbGQgfHwgY29uZmlnLnNpemVGaWVsZClcbiAgfSxcbiAgcmVzb2x1dGlvbjoge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogOCxcbiAgICBsYWJlbDogJ1Jlc29sdXRpb24gcmFuZ2UnLFxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcbiAgICByYW5nZTogWzAsIDEzXSxcbiAgICBzdGVwOiAxLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuY2VsbCxcbiAgICBwcm9wZXJ0eTogJ3Jlc29sdXRpb24nXG4gIH0sXG4gIHdvcmxkVW5pdFNpemU6IHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0VmFsdWU6IDEsXG4gICAgbGFiZWw6ICdXb3JsZCBVbml0IFNpemUnLFxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcbiAgICByYW5nZTogWzAsIDUwMF0sXG4gICAgc3RlcDogMC4wMDAxLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuY2VsbCxcbiAgICBwcm9wZXJ0eTogJ3dvcmxkVW5pdFNpemUnXG4gIH0sXG4gIGVsZXZhdGlvblNjYWxlOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiA1LFxuICAgIGxhYmVsOiAnRWxldmF0aW9uIFNjYWxlJyxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgcmFuZ2U6IFswLCAxMDBdLFxuICAgIHN0ZXA6IDAuMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmhlaWdodCxcbiAgICBwcm9wZXJ0eTogJ2VsZXZhdGlvblNjYWxlJ1xuICB9LFxuICBlbGV2YXRpb25SYW5nZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogWzAsIDUwMF0sXG4gICAgbGFiZWw6ICdIZWlnaHQgU2NhbGUnLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHJhbmdlOiBbMCwgMTAwMF0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmhlaWdodCxcbiAgICBwcm9wZXJ0eTogJ3NpemVSYW5nZSdcbiAgfSxcbiAgY292ZXJhZ2VSYW5nZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogWzAsIDFdLFxuICAgIGxhYmVsOiAnQ292ZXJhZ2UgUmFuZ2UnLFxuICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLnJhZGl1cyxcbiAgICBwcm9wZXJ0eTogJ2NvdmVyYWdlUmFuZ2UnXG4gIH0sXG4gIC8vIGhpIHByZWNpc2lvbiBpcyBkZXByZWNhdGVkIGJ5IGRlY2suZ2xcbiAgJ2hpLXByZWNpc2lvbic6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBsYWJlbDogJ0hpZ2ggUHJlY2lzaW9uIFJlbmRlcmluZycsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5wcmVjaXNpb24sXG4gICAgcHJvcGVydHk6ICdoaS1wcmVjaXNpb24nLFxuICAgIGRlc2NyaXB0aW9uOiAnSGlnaCBwcmVjaXNpb24gd2lsbCByZXN1bHQgaW4gc2xvd2VyIHBlcmZvcm1hbmNlJ1xuICB9LFxuICBlbmFibGUzZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGxhYmVsOiAnSGVpZ2h0JyxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmhlaWdodCxcbiAgICBwcm9wZXJ0eTogJ2VuYWJsZTNkJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NsaWNrIGJ1dHRvbiBhdCB0b3AgcmlnaHQgb2YgdGhlIG1hcCB0byBzd2l0Y2ggdG8gM2QgdmlldydcbiAgfSxcbiAgc3Ryb2tlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBsYWJlbDogJ1N0cm9rZScsXG4gICAgZGVmYXVsdFZhbHVlOiB0cnVlLFxuICAgIGdyb3VwOiBQUk9QRVJUWV9HUk9VUFMuZGlzcGxheSxcbiAgICBwcm9wZXJ0eTogJ3N0cm9rZWQnXG4gIH0sXG4gIGZpbGxlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBsYWJlbDogJ0ZpbGwnLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5kaXNwbGF5LFxuICAgIHByb3BlcnR5OiAnZmlsbGVkJ1xuICB9LFxuICBleHRydWRlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0VmFsdWU6IGZhbHNlLFxuICAgIGxhYmVsOiAnRW5hYmxlIFBvbHlnb24gSGVpZ2h0JyxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmRpc3BsYXksXG4gICAgcHJvcGVydHk6ICdleHRydWRlZCdcbiAgfSxcbiAgd2lyZWZyYW1lOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgbGFiZWw6ICdTaG93IFdpcmVmcmFtZScsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5kaXNwbGF5LFxuICAgIHByb3BlcnR5OiAnd2lyZWZyYW1lJ1xuICB9LFxuICAvLyB1c2VkIGZvciBoZWF0bWFwXG4gIHdlaWdodDoge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIGRlZmF1bHRWYWx1ZTogMSxcbiAgICBsYWJlbDogJ1dlaWdodCBJbnRlbnNpdHknLFxuICAgIGlzUmFuZ2VkOiBmYWxzZSxcbiAgICByYW5nZTogWzAuMDEsIDUwMF0sXG4gICAgc3RlcDogMC4wMSxcbiAgICBncm91cDogUFJPUEVSVFlfR1JPVVBTLmNlbGwsXG4gICAgcHJvcGVydHk6ICd3ZWlnaHQnLFxuICAgIGNvbmRpdGlvbjogY29uZmlnID0+IGNvbmZpZy53ZWlnaHRGaWVsZFxuICB9LFxuICBoZWF0bWFwUmFkaXVzOiB7XG4gICAgdHlwZTogJ251bWJlcicsXG4gICAgZGVmYXVsdFZhbHVlOiAyMCxcbiAgICBsYWJlbDogJ1JhZGl1cycsXG4gICAgaXNSYW5nZWQ6IGZhbHNlLFxuICAgIHJhbmdlOiBbMCwgMTAwXSxcbiAgICBzdGVwOiAwLjEsXG4gICAgZ3JvdXA6IFBST1BFUlRZX0dST1VQUy5jZWxsLFxuICAgIHByb3BlcnR5OiAncmFkaXVzJ1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgTEFZRVJfVEVYVF9DT05GSUdTID0ge1xuICBmb250U2l6ZToge1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIHJhbmdlOiBbMSwgMTAwXSxcbiAgICB2YWx1ZTA6IDEsXG4gICAgc3RlcDogMSxcbiAgICBpc1JhbmdlZDogZmFsc2UsXG4gICAgbGFiZWw6ICdGb250IHNpemUnLFxuICAgIHNob3dJbnB1dDogdHJ1ZVxuICB9LFxuICB0ZXh0QW5jaG9yOiB7XG4gICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgb3B0aW9uczogWydzdGFydCcsICdtaWRkbGUnLCAnZW5kJ10sXG4gICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IGZhbHNlXG4gIH0sXG4gIHRleHRBbGlnbm1lbnQ6IHtcbiAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICBvcHRpb25zOiBbJ3RvcCcsICdjZW50ZXInLCAnYm90dG9tJ10sXG4gICAgbXVsdGlTZWxlY3Q6IGZhbHNlLFxuICAgIHNlYXJjaGFibGU6IGZhbHNlXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RFWFRfTEFCRUwgPSB7XG4gIGZpZWxkOiBudWxsLFxuICBjb2xvcjogWzI1NSwgMjU1LCAyNTVdLFxuICBzaXplOiAxOCxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIGFuY2hvcjogJ3N0YXJ0JyxcbiAgYWxpZ25tZW50OiAnY2VudGVyJ1xufTtcbiJdfQ==