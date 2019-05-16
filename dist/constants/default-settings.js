"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAP_CONFIG_DESCRIPTION = exports.DISCLAIMER = exports.TOKEN_MISUSE_WARNING = exports.DEFAULT_NOTIFICATION_TOPICS = exports.DEFAULT_NOTIFICATION_TYPES = exports.DEFAULT_NOTIFICATION_MESSAGE = exports.DEFAULT_UUID_COUNT = exports.EXPORT_MAP_FORMAT_OPTIONS = exports.EXPORT_MAP_FORMAT = exports.EXPORT_DATA_TYPE_OPTIONS = exports.EXPORT_DATA_TYPE = exports.DEFAULT_EXPORT_IMAGE_NAME = exports.RESOLUTION_OPTIONS = exports.RATIO_OPTIONS = exports.RATIOS = exports.RESOLUTIONS = exports.MAX_DEFAULT_TOOLTIPS = exports.LAYER_BLENDINGS = exports.NO_VALUE_COLOR = exports.DEFAULT_LIGHT_SETTINGS = exports.DEFAULT_TOOLTIP_FIELDS = exports.DEFAULT_LAYER_COLOR = exports.LAYER_TYPES = exports.CHANNEL_SCALE_SUPPORTED_FIELDS = exports.FIELD_OPTS = exports.DEFAULT_AGGREGATION = exports.notSupportAggrOpts = exports.notSupportedScaleOpts = exports.ordinalFieldAggrScaleFunctions = exports.ordinalFieldScaleFunctions = exports.linearFieldAggrScaleFunctions = exports.linearFieldScaleFunctions = exports.AGGREGATION_TYPES = exports.CHANNEL_SCALES = exports.FIELD_DISPLAY_FORMAT = exports.defaultFormat = exports.FILED_TYPE_DISPLAY = exports.FIELD_COLORS = exports.HIGHLIGH_COLOR_3D = exports.ALL_FIELD_TYPES = exports.SCALE_FUNC = exports.SCALE_TYPES = exports.TRIP_ARC_FIELDS = exports.TRIP_POINT_FIELDS = exports.ICON_FIELDS = exports.GEOJSON_FIELDS = exports.DEFAULT_MAP_STYLES = exports.DEFAULT_LAYER_GROUPS = exports.THEME = exports.DIMENSIONS = exports.KEPLER_GL_WEBSITE = exports.KEPLER_GL_VERSION = exports.KEPLER_GL_NAME = exports.EXPORT_MAP_ID = exports.ADD_MAP_STYLE_ID = exports.EXPORT_DATA_ID = exports.EXPORT_IMAGE_ID = exports.ADD_DATA_ID = exports.DELETE_DATA_ID = exports.DATA_TABLE_ID = exports.ICON_PREFIX = exports.CLOUDFRONT = exports.ACTION_PREFIX = void 0;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _keymirror = _interopRequireDefault(require("keymirror"));

var _FILED_TYPE_DISPLAY, _FIELD_DISPLAY_FORMAT, _linearFieldScaleFunc, _CHANNEL_SCALES$color, _CHANNEL_SCALES$sizeA, _linearFieldAggrScale, _ordinalFieldScaleFun, _CHANNEL_SCALES$color2, _ordinalFieldAggrScal, _notSupportedScaleOpt, _notSupportAggrOpts, _DEFAULT_AGGREGATION;

var ACTION_PREFIX = '@@kepler.gl/';
exports.ACTION_PREFIX = ACTION_PREFIX;
var CLOUDFRONT = 'https://d1a3f4spazzrp4.cloudfront.net/kepler.gl';
exports.CLOUDFRONT = CLOUDFRONT;
var ICON_PREFIX = "".concat(CLOUDFRONT, "/geodude"); // Modal Ids

/**
 * Modal id: data table
 * @constant
 * @type {string}
 * @public
 */

exports.ICON_PREFIX = ICON_PREFIX;
var DATA_TABLE_ID = 'dataTable';
/**
 * Modal id: delete dataset confirm dialog
 * @constant
 * @type {string}
 * @public
 */

exports.DATA_TABLE_ID = DATA_TABLE_ID;
var DELETE_DATA_ID = 'deleteData';
/**
 * Modal id: add data modal
 * @constant
 * @type {string}
 * @public
 */

exports.DELETE_DATA_ID = DELETE_DATA_ID;
var ADD_DATA_ID = 'addData';
/**
 * Modal id: export image modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_DATA_ID = ADD_DATA_ID;
var EXPORT_IMAGE_ID = 'exportImage';
/**
 * Modal id: export data modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_IMAGE_ID = EXPORT_IMAGE_ID;
var EXPORT_DATA_ID = 'exportData';
/**
 * Modal id: add custom map style modal
 * @constant
 * @type {string}
 * @public
 */

exports.EXPORT_DATA_ID = EXPORT_DATA_ID;
var ADD_MAP_STYLE_ID = 'addMapStyle';
/**
 * Modal id: export map modal
 * @constant
 * @type {string}
 * @public
 */

exports.ADD_MAP_STYLE_ID = ADD_MAP_STYLE_ID;
var EXPORT_MAP_ID = 'exportMap'; // import {
//   Layers,
//   FilterFunnel,
//   Settings,
//   CursorClick
// } from 'components/common/icons';

exports.EXPORT_MAP_ID = EXPORT_MAP_ID;
var KEPLER_GL_NAME = 'kepler.gl'; // __PACKAGE_VERSION__ is automatically injected by Babel/Webpack during the building process
// Since we are injecting this during the build process with babel
// while developing VERSION is not defined, we capture the exception and return
// an empty string which will allow us to retrieve the latest umd version

exports.KEPLER_GL_NAME = KEPLER_GL_NAME;
var KEPLER_GL_VERSION = "1.0.0-2";
exports.KEPLER_GL_VERSION = KEPLER_GL_VERSION;
var KEPLER_GL_WEBSITE = 'http://kepler.gl/';
exports.KEPLER_GL_WEBSITE = KEPLER_GL_WEBSITE;
var DIMENSIONS = {
  sidePanel: {
    width: 300,
    margin: {
      top: 20,
      left: 20,
      bottom: 30,
      right: 20
    },
    headerHeight: 96
  },
  mapControl: {
    width: 204,
    padding: 12
  }
};
/**
 * Theme name that can be passed to `KeplerGl` `prop.theme`.
 * Available themes are `Theme.light` and `Theme.dark`. Default theme is `Theme.dark`
 * @constant
 * @type {string}
 * @public
 * @example
 * ```js
 * const Map = () => <KeplerGl theme={THEME.light} id="map"/>
 * ```
 */

exports.DIMENSIONS = DIMENSIONS;
var THEME = (0, _keymirror["default"])({
  light: null,
  dark: null
}); // export const PANELS = [
//   {
//     id: 'layer',
//     label: 'Layers',
//     iconComponent: Layers
//   },
//   {
//     id: 'filter',
//     label: 'Filters',
//     iconComponent: FilterFunnel
//   },
//   {
//     id: 'interaction',
//     label: 'Interactions',
//     iconComponent: CursorClick
//   },
//   {
//     id: 'map',
//     label: 'Base map',
//     iconComponent: Settings
//   }
// ];
// MAP STYLES

exports.THEME = THEME;
var DEFAULT_LAYER_GROUPS = [{
  slug: 'label',
  filter: function filter(_ref) {
    var id = _ref.id;
    return id.match(/(?=(label|place-|poi-))/);
  },
  defaultVisibility: true
}, {
  slug: 'road',
  filter: function filter(_ref2) {
    var id = _ref2.id;
    return id.match(/(?=(road|railway|tunnel|street|bridge))(?!.*label)/);
  },
  defaultVisibility: true
}, {
  slug: 'border',
  filter: function filter(_ref3) {
    var id = _ref3.id;
    return id.match(/border|boundaries/);
  },
  defaultVisibility: false
}, {
  slug: 'building',
  filter: function filter(_ref4) {
    var id = _ref4.id;
    return id.match(/building/);
  },
  defaultVisibility: true
}, {
  slug: 'water',
  filter: function filter(_ref5) {
    var id = _ref5.id;
    return id.match(/(?=(water|stream|ferry))/);
  },
  defaultVisibility: true
}, {
  slug: 'land',
  filter: function filter(_ref6) {
    var id = _ref6.id;
    return id.match(/(?=(parks|landcover|industrial|sand|hillshade))/);
  },
  defaultVisibility: true
}, {
  slug: '3d building',
  filter: function filter() {
    return false;
  },
  defaultVisibility: false
}];
exports.DEFAULT_LAYER_GROUPS = DEFAULT_LAYER_GROUPS;
var DEFAULT_MAP_STYLES = [{
  id: 'dark',
  label: 'Dark',
  url: 'mapbox://styles/uberdata/cjoqbbf6l9k302sl96tyvka09',
  icon: "".concat(ICON_PREFIX, "/UBER_DARK_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'light',
  label: 'Light',
  url: 'mapbox://styles/uberdata/cjoqb9j339k1f2sl9t5ic5bn4',
  icon: "".concat(ICON_PREFIX, "/UBER_LIGHT_V2.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted',
  label: 'Muted Light',
  url: 'mapbox://styles/uberdata/cjfyl03kp1tul2smf5v2tbdd4',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_LIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}, {
  id: 'muted_night',
  label: 'Muted Night',
  url: 'mapbox://styles/uberdata/cjfxhlikmaj1b2soyzevnywgs',
  icon: "".concat(ICON_PREFIX, "/UBER_MUTED_NIGHT.png"),
  layerGroups: DEFAULT_LAYER_GROUPS
}];
exports.DEFAULT_MAP_STYLES = DEFAULT_MAP_STYLES;
var GEOJSON_FIELDS = {
  geojson: ['_geojson', 'all_points', 'geojson']
};
exports.GEOJSON_FIELDS = GEOJSON_FIELDS;
var ICON_FIELDS = {
  icon: ['icon']
};
exports.ICON_FIELDS = ICON_FIELDS;
var TRIP_POINT_FIELDS = [['lat', 'lng'], ['lat', 'lon'], ['latitude', 'longitude']];
exports.TRIP_POINT_FIELDS = TRIP_POINT_FIELDS;
var TRIP_ARC_FIELDS = {
  lat0: 'begintrip',
  lng0: 'begintrip',
  lat1: 'dropoff',
  lng1: 'dropoff'
};
exports.TRIP_ARC_FIELDS = TRIP_ARC_FIELDS;
var SCALE_TYPES = (0, _keymirror["default"])({
  ordinal: null,
  quantile: null,
  quantize: null,
  linear: null,
  // for radius
  sqrt: null,
  // ordinal domain to linear range
  point: null
});
exports.SCALE_TYPES = SCALE_TYPES;
var SCALE_FUNC = {
  linear: require('d3-scale').scaleLinear,
  quantize: require('d3-scale').scaleQuantize,
  quantile: require('d3-scale').scaleQuantile,
  ordinal: require('d3-scale').scaleOrdinal,
  sqrt: require('d3-scale').scaleSqrt,
  point: require('d3-scale').scalePoint
};
exports.SCALE_FUNC = SCALE_FUNC;
var ALL_FIELD_TYPES = (0, _keymirror["default"])({
  "boolean": null,
  date: null,
  geojson: null,
  integer: null,
  real: null,
  string: null,
  timestamp: null,
  point: null
});
exports.ALL_FIELD_TYPES = ALL_FIELD_TYPES;
var ORANGE = '248, 194, 28';
var PINK = '231, 189, 194';
var PURPLE = '160, 106, 206';
var BLUE = '140, 210, 205';
var BLUE2 = '106, 160, 206';
var BLUE3 = '0, 172, 237';
var GREEN = '106, 160, 56';
var RED = '237, 88, 106';
var HIGHLIGH_COLOR_3D = [255, 255, 255, 60];
exports.HIGHLIGH_COLOR_3D = HIGHLIGH_COLOR_3D;
var FIELD_COLORS = {
  "default": RED
};
exports.FIELD_COLORS = FIELD_COLORS;
var FILED_TYPE_DISPLAY = (_FILED_TYPE_DISPLAY = {}, (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES["boolean"], {
  label: 'bool',
  color: PINK
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.date, {
  label: 'date',
  color: PURPLE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.geojson, {
  label: 'geo',
  color: BLUE2
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.integer, {
  label: 'int',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.real, {
  label: 'float',
  color: ORANGE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.string, {
  label: 'string',
  color: BLUE
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.timestamp, {
  label: 'time',
  color: GREEN
}), (0, _defineProperty2["default"])(_FILED_TYPE_DISPLAY, ALL_FIELD_TYPES.point, {
  label: 'point',
  color: BLUE3
}), _FILED_TYPE_DISPLAY);
exports.FILED_TYPE_DISPLAY = FILED_TYPE_DISPLAY;

var defaultFormat = function defaultFormat(d) {
  return d;
};

exports.defaultFormat = defaultFormat;
var FIELD_DISPLAY_FORMAT = (_FIELD_DISPLAY_FORMAT = {}, (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, ALL_FIELD_TYPES.string, defaultFormat), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, ALL_FIELD_TYPES.timestamp, defaultFormat), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, ALL_FIELD_TYPES.integer, defaultFormat), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, ALL_FIELD_TYPES["boolean"], function (d) {
  return String(d);
}), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, ALL_FIELD_TYPES.date, defaultFormat), (0, _defineProperty2["default"])(_FIELD_DISPLAY_FORMAT, ALL_FIELD_TYPES.geojson, defaultFormat), _FIELD_DISPLAY_FORMAT);
exports.FIELD_DISPLAY_FORMAT = FIELD_DISPLAY_FORMAT;
var CHANNEL_SCALES = (0, _keymirror["default"])({
  color: null,
  radius: null,
  size: null,
  colorAggr: null,
  sizeAggr: null
});
exports.CHANNEL_SCALES = CHANNEL_SCALES;
var AGGREGATION_TYPES = {
  // default
  count: 'count',
  // linear
  average: 'average',
  maximum: 'maximum',
  minimum: 'minimum',
  median: 'median',
  sum: 'sum',
  // ordinal
  mode: 'mode',
  countUnique: 'count unique'
};
exports.AGGREGATION_TYPES = AGGREGATION_TYPES;
var linearFieldScaleFunctions = (_linearFieldScaleFunc = {}, (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.color, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.radius, [SCALE_TYPES.sqrt]), (0, _defineProperty2["default"])(_linearFieldScaleFunc, CHANNEL_SCALES.size, [SCALE_TYPES.linear]), _linearFieldScaleFunc);
exports.linearFieldScaleFunctions = linearFieldScaleFunctions;
var linearFieldAggrScaleFunctions = (_linearFieldAggrScale = {}, (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.average, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.maximum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.minimum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.median, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color, AGGREGATION_TYPES.sum, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color)), (0, _defineProperty2["default"])(_linearFieldAggrScale, CHANNEL_SCALES.sizeAggr, (_CHANNEL_SCALES$sizeA = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.average, [SCALE_TYPES.linear]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.maximum, [SCALE_TYPES.linear]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.minimum, [SCALE_TYPES.linear]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.median, [SCALE_TYPES.linear]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$sizeA, AGGREGATION_TYPES.sum, [SCALE_TYPES.linear]), _CHANNEL_SCALES$sizeA)), _linearFieldAggrScale);
exports.linearFieldAggrScaleFunctions = linearFieldAggrScaleFunctions;
var ordinalFieldScaleFunctions = (_ordinalFieldScaleFun = {}, (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.color, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.radius, [SCALE_TYPES.point]), (0, _defineProperty2["default"])(_ordinalFieldScaleFun, CHANNEL_SCALES.size, [SCALE_TYPES.point]), _ordinalFieldScaleFun);
exports.ordinalFieldScaleFunctions = ordinalFieldScaleFunctions;
var ordinalFieldAggrScaleFunctions = (_ordinalFieldAggrScal = {}, (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.colorAggr, (_CHANNEL_SCALES$color2 = {}, (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.mode, [SCALE_TYPES.ordinal]), (0, _defineProperty2["default"])(_CHANNEL_SCALES$color2, AGGREGATION_TYPES.countUnique, [SCALE_TYPES.quantize, SCALE_TYPES.quantile]), _CHANNEL_SCALES$color2)), (0, _defineProperty2["default"])(_ordinalFieldAggrScal, CHANNEL_SCALES.sizeAggr, {}), _ordinalFieldAggrScal);
exports.ordinalFieldAggrScaleFunctions = ordinalFieldAggrScaleFunctions;
var notSupportedScaleOpts = (_notSupportedScaleOpt = {}, (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.color, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.radius, []), (0, _defineProperty2["default"])(_notSupportedScaleOpt, CHANNEL_SCALES.size, []), _notSupportedScaleOpt);
exports.notSupportedScaleOpts = notSupportedScaleOpts;
var notSupportAggrOpts = (_notSupportAggrOpts = {}, (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.colorAggr, {}), (0, _defineProperty2["default"])(_notSupportAggrOpts, CHANNEL_SCALES.sizeAggr, {}), _notSupportAggrOpts);
/**
 * Default aggregation are based on ocunt
 */

exports.notSupportAggrOpts = notSupportAggrOpts;
var DEFAULT_AGGREGATION = (_DEFAULT_AGGREGATION = {}, (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.colorAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.quantize, SCALE_TYPES.quantile])), (0, _defineProperty2["default"])(_DEFAULT_AGGREGATION, CHANNEL_SCALES.sizeAggr, (0, _defineProperty2["default"])({}, AGGREGATION_TYPES.count, [SCALE_TYPES.linear])), _DEFAULT_AGGREGATION);
/**
 * Define what type of scale operation is allowed on each type of fields
 */

exports.DEFAULT_AGGREGATION = DEFAULT_AGGREGATION;
var FIELD_OPTS = {
  string: {
    type: 'categorical',
    scale: (0, _objectSpread3["default"])({}, ordinalFieldScaleFunctions, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  real: {
    type: 'numerical',
    scale: (0, _objectSpread3["default"])({}, linearFieldScaleFunctions, linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  timestamp: {
    type: 'time',
    scale: (0, _objectSpread3["default"])({}, linearFieldScaleFunctions, notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  integer: {
    type: 'numerical',
    scale: (0, _objectSpread3["default"])({}, linearFieldScaleFunctions, linearFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  "boolean": {
    type: 'boolean',
    scale: (0, _objectSpread3["default"])({}, ordinalFieldScaleFunctions, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  date: {
    scale: (0, _objectSpread3["default"])({}, ordinalFieldScaleFunctions, ordinalFieldAggrScaleFunctions),
    format: {
      legend: function legend(d) {
        return d;
      }
    }
  },
  geojson: {
    type: 'geometry',
    scale: (0, _objectSpread3["default"])({}, notSupportedScaleOpts, notSupportAggrOpts),
    format: {
      legend: function legend(d) {
        return '...';
      }
    }
  }
};
exports.FIELD_OPTS = FIELD_OPTS;
var CHANNEL_SCALE_SUPPORTED_FIELDS = Object.keys(CHANNEL_SCALES).reduce(function (accu, key) {
  return (0, _objectSpread3["default"])({}, accu, (0, _defineProperty2["default"])({}, key, Object.keys(FIELD_OPTS).filter(function (ft) {
    return Object.keys(FIELD_OPTS[ft].scale[key]).length;
  })));
}, {}); // TODO: shan delete use of LAYER_TYPES

exports.CHANNEL_SCALE_SUPPORTED_FIELDS = CHANNEL_SCALE_SUPPORTED_FIELDS;
var LAYER_TYPES = (0, _keymirror["default"])({
  point: null,
  arc: null,
  cluster: null,
  line: null,
  grid: null,
  geojson: null,
  icon: null,
  heatmap: null,
  hexagon: null
});
exports.LAYER_TYPES = LAYER_TYPES;
var DEFAULT_LAYER_COLOR = {
  tripArc: '#9226C6',
  begintrip_lat: '#1E96BE',
  dropoff_lat: '#FF991F',
  request_lat: '#52A353'
}; // let user pass in default tooltip fields

exports.DEFAULT_LAYER_COLOR = DEFAULT_LAYER_COLOR;
var DEFAULT_TOOLTIP_FIELDS = [];
exports.DEFAULT_TOOLTIP_FIELDS = DEFAULT_TOOLTIP_FIELDS;
var DEFAULT_LIGHT_SETTINGS = {
  lightsPosition: [-122.45, 37.66, 8000, -122.0, 38.0, 8000],
  ambientRatio: 0.4,
  diffuseRatio: 0.6,
  specularRatio: 0.3,
  lightsStrength: [0.9, 0.0, 0.8, 0.0],
  numberOfLights: 2
};
exports.DEFAULT_LIGHT_SETTINGS = DEFAULT_LIGHT_SETTINGS;
var NO_VALUE_COLOR = [147, 147, 147];
exports.NO_VALUE_COLOR = NO_VALUE_COLOR;
var LAYER_BLENDINGS = {
  additive: {
    blendFunc: ['SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: 'FUNC_ADD'
  },
  normal: {
    // reference to
    // https://limnu.com/webgl-blending-youre-probably-wrong/
    blendFunc: ['SRC_ALPHA', 'ONE_MINUS_SRC_ALPHA', 'ONE', 'ONE_MINUS_SRC_ALPHA'],
    blendEquation: ['FUNC_ADD', 'FUNC_ADD']
  },
  subtractive: {
    blendFunc: ['ONE', 'ONE_MINUS_DST_COLOR', 'SRC_ALPHA', 'DST_ALPHA'],
    blendEquation: ['FUNC_SUBTRACT', 'FUNC_ADD']
  }
};
exports.LAYER_BLENDINGS = LAYER_BLENDINGS;
var MAX_DEFAULT_TOOLTIPS = 5;
exports.MAX_DEFAULT_TOOLTIPS = MAX_DEFAULT_TOOLTIPS;
var RESOLUTIONS = (0, _keymirror["default"])({
  ONE_X: null,
  TWO_X: null
});
exports.RESOLUTIONS = RESOLUTIONS;
var RATIOS = (0, _keymirror["default"])({
  SCREEN: null,
  FOUR_BY_THREE: null,
  SIXTEEN_BY_NINE: null
});
exports.RATIOS = RATIOS;
var RATIO_OPTIONS = [{
  id: RATIOS.SCREEN,
  label: 'Original Screen',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: RATIOS.FOUR_BY_THREE,
  label: '4:3',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.75)
    };
  }
}, {
  id: RATIOS.SIXTEEN_BY_NINE,
  label: '16:9',
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: Math.round(screenW * 0.5625)
    };
  }
}];
exports.RATIO_OPTIONS = RATIO_OPTIONS;
var RESOLUTION_OPTIONS = [{
  id: RESOLUTIONS.ONE_X,
  label: '1x',
  available: true,
  scale: 1,
  zoomOffset: Math.log2(1),
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW,
      height: screenH
    };
  }
}, {
  id: RESOLUTIONS.TWO_X,
  label: '2x',
  available: true,
  scale: 2,
  zoomOffset: Math.log2(2),
  getSize: function getSize(screenW, screenH) {
    return {
      width: screenW * 2,
      height: screenH * 2
    };
  }
}];
exports.RESOLUTION_OPTIONS = RESOLUTION_OPTIONS;
var DEFAULT_EXPORT_IMAGE_NAME = 'kepler-gl.png';
exports.DEFAULT_EXPORT_IMAGE_NAME = DEFAULT_EXPORT_IMAGE_NAME;
var EXPORT_DATA_TYPE = (0, _keymirror["default"])({
  CSV: null // SHAPEFILE: null,
  // JSON: null,
  // GEOJSON: null,
  // TOPOJSON: null

});
exports.EXPORT_DATA_TYPE = EXPORT_DATA_TYPE;
var EXPORT_DATA_TYPE_OPTIONS = [{
  id: EXPORT_DATA_TYPE.CSV,
  label: EXPORT_DATA_TYPE.CSV.toLowerCase(),
  available: true // {
  //   id: EXPORT_DATA_TYPE.SHAPEFILE,
  //   label: 'shapefile',
  //   available: false
  // },
  // {
  //   id: EXPORT_DATA_TYPE.JSON,
  //   label: 'json',
  //   available: false
  // },
  // {
  //   id: EXPORT_DATA_TYPE.GEOJSON,
  //   label: 'geojson',
  //   available: false
  // },
  // {
  //   id: EXPORT_DATA_TYPE.TOPOJSON,
  //   label: 'topojson',
  //   available: false
  // }

}]; // Export map types

exports.EXPORT_DATA_TYPE_OPTIONS = EXPORT_DATA_TYPE_OPTIONS;
var EXPORT_MAP_FORMAT = (0, _keymirror["default"])({
  HTML: null,
  JSON: null
}); // Export map options

exports.EXPORT_MAP_FORMAT = EXPORT_MAP_FORMAT;
var EXPORT_MAP_FORMAT_OPTIONS = Object.entries(EXPORT_MAP_FORMAT).map(function (entry) {
  return {
    id: entry[0],
    label: entry[1].toLowerCase(),
    available: true
  };
});
exports.EXPORT_MAP_FORMAT_OPTIONS = EXPORT_MAP_FORMAT_OPTIONS;
var DEFAULT_UUID_COUNT = 6;
exports.DEFAULT_UUID_COUNT = DEFAULT_UUID_COUNT;
var DEFAULT_NOTIFICATION_MESSAGE = 'MESSAGE_NOT_PROVIDED';
exports.DEFAULT_NOTIFICATION_MESSAGE = DEFAULT_NOTIFICATION_MESSAGE;
var DEFAULT_NOTIFICATION_TYPES = (0, _keymirror["default"])({
  info: null,
  error: null,
  warning: null,
  success: null
});
exports.DEFAULT_NOTIFICATION_TYPES = DEFAULT_NOTIFICATION_TYPES;
var DEFAULT_NOTIFICATION_TOPICS = (0, _keymirror["default"])({
  global: null,
  file: null
});
exports.DEFAULT_NOTIFICATION_TOPICS = DEFAULT_NOTIFICATION_TOPICS;
var TOKEN_MISUSE_WARNING = '* If you do not provide your own token, the map may fail to display at any time when we replace ours to avoid misuse. ';
exports.TOKEN_MISUSE_WARNING = TOKEN_MISUSE_WARNING;
var DISCLAIMER = 'You can change the Mapbox token later using the following instructions: ';
exports.DISCLAIMER = DISCLAIMER;
var MAP_CONFIG_DESCRIPTION = 'Map config will be included in the Json file. If you are using kepler.gl in your own app. You can copy this config and pass it to ';
exports.MAP_CONFIG_DESCRIPTION = MAP_CONFIG_DESCRIPTION;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJBQ1RJT05fUFJFRklYIiwiQ0xPVURGUk9OVCIsIklDT05fUFJFRklYIiwiREFUQV9UQUJMRV9JRCIsIkRFTEVURV9EQVRBX0lEIiwiQUREX0RBVEFfSUQiLCJFWFBPUlRfSU1BR0VfSUQiLCJFWFBPUlRfREFUQV9JRCIsIkFERF9NQVBfU1RZTEVfSUQiLCJFWFBPUlRfTUFQX0lEIiwiS0VQTEVSX0dMX05BTUUiLCJLRVBMRVJfR0xfVkVSU0lPTiIsIktFUExFUl9HTF9XRUJTSVRFIiwiRElNRU5TSU9OUyIsInNpZGVQYW5lbCIsIndpZHRoIiwibWFyZ2luIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiaGVhZGVySGVpZ2h0IiwibWFwQ29udHJvbCIsInBhZGRpbmciLCJUSEVNRSIsImxpZ2h0IiwiZGFyayIsIkRFRkFVTFRfTEFZRVJfR1JPVVBTIiwic2x1ZyIsImZpbHRlciIsImlkIiwibWF0Y2giLCJkZWZhdWx0VmlzaWJpbGl0eSIsIkRFRkFVTFRfTUFQX1NUWUxFUyIsImxhYmVsIiwidXJsIiwiaWNvbiIsImxheWVyR3JvdXBzIiwiR0VPSlNPTl9GSUVMRFMiLCJnZW9qc29uIiwiSUNPTl9GSUVMRFMiLCJUUklQX1BPSU5UX0ZJRUxEUyIsIlRSSVBfQVJDX0ZJRUxEUyIsImxhdDAiLCJsbmcwIiwibGF0MSIsImxuZzEiLCJTQ0FMRV9UWVBFUyIsIm9yZGluYWwiLCJxdWFudGlsZSIsInF1YW50aXplIiwibGluZWFyIiwic3FydCIsInBvaW50IiwiU0NBTEVfRlVOQyIsInJlcXVpcmUiLCJzY2FsZUxpbmVhciIsInNjYWxlUXVhbnRpemUiLCJzY2FsZVF1YW50aWxlIiwic2NhbGVPcmRpbmFsIiwic2NhbGVTcXJ0Iiwic2NhbGVQb2ludCIsIkFMTF9GSUVMRF9UWVBFUyIsImRhdGUiLCJpbnRlZ2VyIiwicmVhbCIsInN0cmluZyIsInRpbWVzdGFtcCIsIk9SQU5HRSIsIlBJTksiLCJQVVJQTEUiLCJCTFVFIiwiQkxVRTIiLCJCTFVFMyIsIkdSRUVOIiwiUkVEIiwiSElHSExJR0hfQ09MT1JfM0QiLCJGSUVMRF9DT0xPUlMiLCJGSUxFRF9UWVBFX0RJU1BMQVkiLCJjb2xvciIsImRlZmF1bHRGb3JtYXQiLCJkIiwiRklFTERfRElTUExBWV9GT1JNQVQiLCJTdHJpbmciLCJDSEFOTkVMX1NDQUxFUyIsInJhZGl1cyIsInNpemUiLCJjb2xvckFnZ3IiLCJzaXplQWdnciIsIkFHR1JFR0FUSU9OX1RZUEVTIiwiY291bnQiLCJhdmVyYWdlIiwibWF4aW11bSIsIm1pbmltdW0iLCJtZWRpYW4iLCJzdW0iLCJtb2RlIiwiY291bnRVbmlxdWUiLCJsaW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zIiwibGluZWFyRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnMiLCJvcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyIsIm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9ucyIsIm5vdFN1cHBvcnRlZFNjYWxlT3B0cyIsIm5vdFN1cHBvcnRBZ2dyT3B0cyIsIkRFRkFVTFRfQUdHUkVHQVRJT04iLCJGSUVMRF9PUFRTIiwidHlwZSIsInNjYWxlIiwiZm9ybWF0IiwibGVnZW5kIiwiQ0hBTk5FTF9TQ0FMRV9TVVBQT1JURURfRklFTERTIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjY3UiLCJrZXkiLCJmdCIsImxlbmd0aCIsIkxBWUVSX1RZUEVTIiwiYXJjIiwiY2x1c3RlciIsImxpbmUiLCJncmlkIiwiaGVhdG1hcCIsImhleGFnb24iLCJERUZBVUxUX0xBWUVSX0NPTE9SIiwidHJpcEFyYyIsImJlZ2ludHJpcF9sYXQiLCJkcm9wb2ZmX2xhdCIsInJlcXVlc3RfbGF0IiwiREVGQVVMVF9UT09MVElQX0ZJRUxEUyIsIkRFRkFVTFRfTElHSFRfU0VUVElOR1MiLCJsaWdodHNQb3NpdGlvbiIsImFtYmllbnRSYXRpbyIsImRpZmZ1c2VSYXRpbyIsInNwZWN1bGFyUmF0aW8iLCJsaWdodHNTdHJlbmd0aCIsIm51bWJlck9mTGlnaHRzIiwiTk9fVkFMVUVfQ09MT1IiLCJMQVlFUl9CTEVORElOR1MiLCJhZGRpdGl2ZSIsImJsZW5kRnVuYyIsImJsZW5kRXF1YXRpb24iLCJub3JtYWwiLCJzdWJ0cmFjdGl2ZSIsIk1BWF9ERUZBVUxUX1RPT0xUSVBTIiwiUkVTT0xVVElPTlMiLCJPTkVfWCIsIlRXT19YIiwiUkFUSU9TIiwiU0NSRUVOIiwiRk9VUl9CWV9USFJFRSIsIlNJWFRFRU5fQllfTklORSIsIlJBVElPX09QVElPTlMiLCJnZXRTaXplIiwic2NyZWVuVyIsInNjcmVlbkgiLCJoZWlnaHQiLCJNYXRoIiwicm91bmQiLCJSRVNPTFVUSU9OX09QVElPTlMiLCJhdmFpbGFibGUiLCJ6b29tT2Zmc2V0IiwibG9nMiIsIkRFRkFVTFRfRVhQT1JUX0lNQUdFX05BTUUiLCJFWFBPUlRfREFUQV9UWVBFIiwiQ1NWIiwiRVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TIiwidG9Mb3dlckNhc2UiLCJFWFBPUlRfTUFQX0ZPUk1BVCIsIkhUTUwiLCJKU09OIiwiRVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsIkRFRkFVTFRfVVVJRF9DT1VOVCIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX01FU1NBR0UiLCJERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyIsImluZm8iLCJlcnJvciIsIndhcm5pbmciLCJzdWNjZXNzIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTIiwiZ2xvYmFsIiwiZmlsZSIsIlRPS0VOX01JU1VTRV9XQVJOSU5HIiwiRElTQ0xBSU1FUiIsIk1BUF9DT05GSUdfREVTQ1JJUFRJT04iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7QUFFTyxJQUFNQSxhQUFhLEdBQUcsY0FBdEI7O0FBQ0EsSUFBTUMsVUFBVSxHQUFHLGlEQUFuQjs7QUFDQSxJQUFNQyxXQUFXLGFBQU1ELFVBQU4sYUFBakIsQyxDQUVQOztB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LDRCQUE0QixHQUFHLHNCQUFyQzs7QUFFQSxJQUFNQywwQkFBMEIsR0FBRywyQkFBVTtBQUNsREMsRUFBQUEsSUFBSSxFQUFFLElBRDRDO0FBRWxEQyxFQUFBQSxLQUFLLEVBQUUsSUFGMkM7QUFHbERDLEVBQUFBLE9BQU8sRUFBRSxJQUh5QztBQUlsREMsRUFBQUEsT0FBTyxFQUFFO0FBSnlDLENBQVYsQ0FBbkM7O0FBT0EsSUFBTUMsMkJBQTJCLEdBQUcsMkJBQVU7QUFDbkRDLEVBQUFBLE1BQU0sRUFBRSxJQUQyQztBQUVuREMsRUFBQUEsSUFBSSxFQUFFO0FBRjZDLENBQVYsQ0FBcEM7O0FBS0EsSUFBTUMsb0JBQW9CLEdBQUcsd0hBQTdCOztBQUNBLElBQU1DLFVBQVUsR0FBRywwRUFBbkI7O0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsb0lBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IGtleU1pcnJvciBmcm9tICdrZXltaXJyb3InO1xuXG5leHBvcnQgY29uc3QgQUNUSU9OX1BSRUZJWCA9ICdAQGtlcGxlci5nbC8nO1xuZXhwb3J0IGNvbnN0IENMT1VERlJPTlQgPSAnaHR0cHM6Ly9kMWEzZjRzcGF6enJwNC5jbG91ZGZyb250Lm5ldC9rZXBsZXIuZ2wnO1xuZXhwb3J0IGNvbnN0IElDT05fUFJFRklYID0gYCR7Q0xPVURGUk9OVH0vZ2VvZHVkZWA7XG5cbi8vIE1vZGFsIElkc1xuLyoqXG4gKiBNb2RhbCBpZDogZGF0YSB0YWJsZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREFUQV9UQUJMRV9JRCA9ICdkYXRhVGFibGUnO1xuLyoqXG4gKiBNb2RhbCBpZDogZGVsZXRlIGRhdGFzZXQgY29uZmlybSBkaWFsb2dcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFTEVURV9EQVRBX0lEID0gJ2RlbGV0ZURhdGEnO1xuLyoqXG4gKiBNb2RhbCBpZDogYWRkIGRhdGEgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEFERF9EQVRBX0lEID0gJ2FkZERhdGEnO1xuLyoqXG4gKiBNb2RhbCBpZDogZXhwb3J0IGltYWdlIG1vZGFsXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBFWFBPUlRfSU1BR0VfSUQgPSAnZXhwb3J0SW1hZ2UnO1xuLyoqXG4gKiBNb2RhbCBpZDogZXhwb3J0IGRhdGEgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRBX0lEID0gJ2V4cG9ydERhdGEnO1xuLyoqXG4gKiBNb2RhbCBpZDogYWRkIGN1c3RvbSBtYXAgc3R5bGUgbW9kYWxcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEFERF9NQVBfU1RZTEVfSUQgPSAnYWRkTWFwU3R5bGUnO1xuLyoqXG4gKiBNb2RhbCBpZDogZXhwb3J0IG1hcCBtb2RhbFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgRVhQT1JUX01BUF9JRCA9ICdleHBvcnRNYXAnO1xuXG4vLyBpbXBvcnQge1xuLy8gICBMYXllcnMsXG4vLyAgIEZpbHRlckZ1bm5lbCxcbi8vICAgU2V0dGluZ3MsXG4vLyAgIEN1cnNvckNsaWNrXG4vLyB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuZXhwb3J0IGNvbnN0IEtFUExFUl9HTF9OQU1FID0gJ2tlcGxlci5nbCc7XG5cbi8vIF9fUEFDS0FHRV9WRVJTSU9OX18gaXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBieSBCYWJlbC9XZWJwYWNrIGR1cmluZyB0aGUgYnVpbGRpbmcgcHJvY2Vzc1xuLy8gU2luY2Ugd2UgYXJlIGluamVjdGluZyB0aGlzIGR1cmluZyB0aGUgYnVpbGQgcHJvY2VzcyB3aXRoIGJhYmVsXG4vLyB3aGlsZSBkZXZlbG9waW5nIFZFUlNJT04gaXMgbm90IGRlZmluZWQsIHdlIGNhcHR1cmUgdGhlIGV4Y2VwdGlvbiBhbmQgcmV0dXJuXG4vLyBhbiBlbXB0eSBzdHJpbmcgd2hpY2ggd2lsbCBhbGxvdyB1cyB0byByZXRyaWV2ZSB0aGUgbGF0ZXN0IHVtZCB2ZXJzaW9uXG5leHBvcnQgY29uc3QgS0VQTEVSX0dMX1ZFUlNJT04gPSBcIl9fUEFDS0FHRV9WRVJTSU9OX19cIjtcbmV4cG9ydCBjb25zdCBLRVBMRVJfR0xfV0VCU0lURSA9ICdodHRwOi8va2VwbGVyLmdsLyc7XG5cbmV4cG9ydCBjb25zdCBESU1FTlNJT05TID0ge1xuICBzaWRlUGFuZWw6IHtcbiAgICB3aWR0aDogMzAwLFxuICAgIG1hcmdpbjoge3RvcDogMjAsIGxlZnQ6IDIwLCBib3R0b206IDMwLCByaWdodDogMjB9LFxuICAgIGhlYWRlckhlaWdodDogOTZcbiAgfSxcbiAgbWFwQ29udHJvbDoge1xuICAgIHdpZHRoOiAyMDQsXG4gICAgcGFkZGluZzogMTJcbiAgfVxufTtcblxuLyoqXG4gKiBUaGVtZSBuYW1lIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBgS2VwbGVyR2xgIGBwcm9wLnRoZW1lYC5cbiAqIEF2YWlsYWJsZSB0aGVtZXMgYXJlIGBUaGVtZS5saWdodGAgYW5kIGBUaGVtZS5kYXJrYC4gRGVmYXVsdCB0aGVtZSBpcyBgVGhlbWUuZGFya2BcbiAqIEBjb25zdGFudFxuICogQHR5cGUge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogY29uc3QgTWFwID0gKCkgPT4gPEtlcGxlckdsIHRoZW1lPXtUSEVNRS5saWdodH0gaWQ9XCJtYXBcIi8+XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IFRIRU1FID0ga2V5TWlycm9yKHtcbiAgbGlnaHQ6IG51bGwsXG4gIGRhcms6IG51bGxcbn0pO1xuXG4vLyBleHBvcnQgY29uc3QgUEFORUxTID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6ICdsYXllcicsXG4vLyAgICAgbGFiZWw6ICdMYXllcnMnLFxuLy8gICAgIGljb25Db21wb25lbnQ6IExheWVyc1xuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6ICdmaWx0ZXInLFxuLy8gICAgIGxhYmVsOiAnRmlsdGVycycsXG4vLyAgICAgaWNvbkNvbXBvbmVudDogRmlsdGVyRnVubmVsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogJ2ludGVyYWN0aW9uJyxcbi8vICAgICBsYWJlbDogJ0ludGVyYWN0aW9ucycsXG4vLyAgICAgaWNvbkNvbXBvbmVudDogQ3Vyc29yQ2xpY2tcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnbWFwJyxcbi8vICAgICBsYWJlbDogJ0Jhc2UgbWFwJyxcbi8vICAgICBpY29uQ29tcG9uZW50OiBTZXR0aW5nc1xuLy8gICB9XG4vLyBdO1xuXG4vLyBNQVAgU1RZTEVTXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0xBWUVSX0dST1VQUyA9IFtcbiAge1xuICAgIHNsdWc6ICdsYWJlbCcsXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goLyg/PShsYWJlbHxwbGFjZS18cG9pLSkpLyksXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IHRydWVcbiAgfSxcbiAge1xuICAgIHNsdWc6ICdyb2FkJyxcbiAgICBmaWx0ZXI6ICh7aWR9KSA9PiBpZC5tYXRjaCgvKD89KHJvYWR8cmFpbHdheXx0dW5uZWx8c3RyZWV0fGJyaWRnZSkpKD8hLipsYWJlbCkvKSxcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2x1ZzogJ2JvcmRlcicsXG4gICAgZmlsdGVyOiAoe2lkfSkgPT4gaWQubWF0Y2goL2JvcmRlcnxib3VuZGFyaWVzLyksXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBzbHVnOiAnYnVpbGRpbmcnLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC9idWlsZGluZy8pLFxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzbHVnOiAnd2F0ZXInLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC8oPz0od2F0ZXJ8c3RyZWFtfGZlcnJ5KSkvKSxcbiAgICBkZWZhdWx0VmlzaWJpbGl0eTogdHJ1ZVxuICB9LFxuICB7XG4gICAgc2x1ZzogJ2xhbmQnLFxuICAgIGZpbHRlcjogKHtpZH0pID0+IGlkLm1hdGNoKC8oPz0ocGFya3N8bGFuZGNvdmVyfGluZHVzdHJpYWx8c2FuZHxoaWxsc2hhZGUpKS8pLFxuICAgIGRlZmF1bHRWaXNpYmlsaXR5OiB0cnVlXG4gIH0sXG4gIHtcbiAgICBzbHVnOiAnM2QgYnVpbGRpbmcnLFxuICAgIGZpbHRlcjogKCkgPT4gZmFsc2UsXG4gICAgZGVmYXVsdFZpc2liaWxpdHk6IGZhbHNlXG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BUF9TVFlMRVMgPSBbXG4gIHtcbiAgICBpZDogJ2RhcmsnLFxuICAgIGxhYmVsOiAnRGFyaycsXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2Nqb3FiYmY2bDlrMzAyc2w5NnR5dmthMDknLFxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX0RBUktfVjIucG5nYCxcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcbiAgfSxcbiAge1xuICAgIGlkOiAnbGlnaHQnLFxuICAgIGxhYmVsOiAnTGlnaHQnLFxuICAgIHVybDogJ21hcGJveDovL3N0eWxlcy91YmVyZGF0YS9jam9xYjlqMzM5azFmMnNsOXQ1aWM1Ym40JyxcbiAgICBpY29uOiBgJHtJQ09OX1BSRUZJWH0vVUJFUl9MSUdIVF9WMi5wbmdgLFxuICAgIGxheWVyR3JvdXBzOiBERUZBVUxUX0xBWUVSX0dST1VQU1xuICB9LFxuICB7XG4gICAgaWQ6ICdtdXRlZCcsXG4gICAgbGFiZWw6ICdNdXRlZCBMaWdodCcsXG4gICAgdXJsOiAnbWFwYm94Oi8vc3R5bGVzL3ViZXJkYXRhL2NqZnlsMDNrcDF0dWwyc21mNXYydGJkZDQnLFxuICAgIGljb246IGAke0lDT05fUFJFRklYfS9VQkVSX01VVEVEX0xJR0hULnBuZ2AsXG4gICAgbGF5ZXJHcm91cHM6IERFRkFVTFRfTEFZRVJfR1JPVVBTXG4gIH0sXG4gIHtcbiAgICBpZDogJ211dGVkX25pZ2h0JyxcbiAgICBsYWJlbDogJ011dGVkIE5pZ2h0JyxcbiAgICB1cmw6ICdtYXBib3g6Ly9zdHlsZXMvdWJlcmRhdGEvY2pmeGhsaWttYWoxYjJzb3l6ZXZueXdncycsXG4gICAgaWNvbjogYCR7SUNPTl9QUkVGSVh9L1VCRVJfTVVURURfTklHSFQucG5nYCxcbiAgICBsYXllckdyb3VwczogREVGQVVMVF9MQVlFUl9HUk9VUFNcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IEdFT0pTT05fRklFTERTID0ge1xuICBnZW9qc29uOiBbJ19nZW9qc29uJywgJ2FsbF9wb2ludHMnLCAnZ2VvanNvbiddXG59O1xuXG5leHBvcnQgY29uc3QgSUNPTl9GSUVMRFMgPSB7XG4gIGljb246IFsnaWNvbiddXG59O1xuXG5leHBvcnQgY29uc3QgVFJJUF9QT0lOVF9GSUVMRFMgPSBbXG4gIFsnbGF0JywgJ2xuZyddLFxuICBbJ2xhdCcsICdsb24nXSxcbiAgWydsYXRpdHVkZScsICdsb25naXR1ZGUnXVxuXTtcblxuZXhwb3J0IGNvbnN0IFRSSVBfQVJDX0ZJRUxEUyA9IHtcbiAgbGF0MDogJ2JlZ2ludHJpcCcsXG4gIGxuZzA6ICdiZWdpbnRyaXAnLFxuICBsYXQxOiAnZHJvcG9mZicsXG4gIGxuZzE6ICdkcm9wb2ZmJ1xufTtcblxuZXhwb3J0IGNvbnN0IFNDQUxFX1RZUEVTID0ga2V5TWlycm9yKHtcbiAgb3JkaW5hbDogbnVsbCxcbiAgcXVhbnRpbGU6IG51bGwsXG4gIHF1YW50aXplOiBudWxsLFxuICBsaW5lYXI6IG51bGwsXG5cbiAgLy8gZm9yIHJhZGl1c1xuICBzcXJ0OiBudWxsLFxuICAvLyBvcmRpbmFsIGRvbWFpbiB0byBsaW5lYXIgcmFuZ2VcbiAgcG9pbnQ6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgU0NBTEVfRlVOQyA9IHtcbiAgbGluZWFyOiByZXF1aXJlKCdkMy1zY2FsZScpLnNjYWxlTGluZWFyLFxuICBxdWFudGl6ZTogcmVxdWlyZSgnZDMtc2NhbGUnKS5zY2FsZVF1YW50aXplLFxuICBxdWFudGlsZTogcmVxdWlyZSgnZDMtc2NhbGUnKS5zY2FsZVF1YW50aWxlLFxuICBvcmRpbmFsOiByZXF1aXJlKCdkMy1zY2FsZScpLnNjYWxlT3JkaW5hbCxcbiAgc3FydDogcmVxdWlyZSgnZDMtc2NhbGUnKS5zY2FsZVNxcnQsXG4gIHBvaW50OiByZXF1aXJlKCdkMy1zY2FsZScpLnNjYWxlUG9pbnRcbn07XG5cbmV4cG9ydCBjb25zdCBBTExfRklFTERfVFlQRVMgPSBrZXlNaXJyb3Ioe1xuICBib29sZWFuOiBudWxsLFxuICBkYXRlOiBudWxsLFxuICBnZW9qc29uOiBudWxsLFxuICBpbnRlZ2VyOiBudWxsLFxuICByZWFsOiBudWxsLFxuICBzdHJpbmc6IG51bGwsXG4gIHRpbWVzdGFtcDogbnVsbCxcbiAgcG9pbnQ6IG51bGxcbn0pO1xuXG5jb25zdCBPUkFOR0UgPSAnMjQ4LCAxOTQsIDI4JztcbmNvbnN0IFBJTksgPSAnMjMxLCAxODksIDE5NCc7XG5jb25zdCBQVVJQTEUgPSAnMTYwLCAxMDYsIDIwNic7XG5jb25zdCBCTFVFID0gJzE0MCwgMjEwLCAyMDUnO1xuY29uc3QgQkxVRTIgPSAnMTA2LCAxNjAsIDIwNic7XG5jb25zdCBCTFVFMyA9ICcwLCAxNzIsIDIzNyc7XG5jb25zdCBHUkVFTiA9ICcxMDYsIDE2MCwgNTYnO1xuY29uc3QgUkVEID0gJzIzNywgODgsIDEwNic7XG5cbmV4cG9ydCBjb25zdCBISUdITElHSF9DT0xPUl8zRCA9IFsyNTUsIDI1NSwgMjU1LCA2MF07XG5cbmV4cG9ydCBjb25zdCBGSUVMRF9DT0xPUlMgPSB7XG4gIGRlZmF1bHQ6IFJFRFxufTtcblxuZXhwb3J0IGNvbnN0IEZJTEVEX1RZUEVfRElTUExBWSA9IHtcbiAgW0FMTF9GSUVMRF9UWVBFUy5ib29sZWFuXToge1xuICAgIGxhYmVsOiAnYm9vbCcsXG4gICAgY29sb3I6IFBJTktcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5kYXRlXToge1xuICAgIGxhYmVsOiAnZGF0ZScsXG4gICAgY29sb3I6IFBVUlBMRVxuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLmdlb2pzb25dOiB7XG4gICAgbGFiZWw6ICdnZW8nLFxuICAgIGNvbG9yOiBCTFVFMlxuICB9LFxuICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiB7XG4gICAgbGFiZWw6ICdpbnQnLFxuICAgIGNvbG9yOiBPUkFOR0VcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXToge1xuICAgIGxhYmVsOiAnZmxvYXQnLFxuICAgIGNvbG9yOiBPUkFOR0VcbiAgfSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5zdHJpbmddOiB7XG4gICAgbGFiZWw6ICdzdHJpbmcnLFxuICAgIGNvbG9yOiBCTFVFXG4gIH0sXG4gIFtBTExfRklFTERfVFlQRVMudGltZXN0YW1wXToge1xuICAgIGxhYmVsOiAndGltZScsXG4gICAgY29sb3I6IEdSRUVOXG4gIH0sXG4gIC8vIGZpZWxkIHBhaXJzXG4gIFtBTExfRklFTERfVFlQRVMucG9pbnRdOiB7XG4gICAgbGFiZWw6ICdwb2ludCcsXG4gICAgY29sb3I6IEJMVUUzXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0Rm9ybWF0ID0gZCA9PiBkO1xuXG5leHBvcnQgY29uc3QgRklFTERfRElTUExBWV9GT1JNQVQgPSB7XG4gIFtBTExfRklFTERfVFlQRVMuc3RyaW5nXTogZGVmYXVsdEZvcm1hdCxcbiAgW0FMTF9GSUVMRF9UWVBFUy50aW1lc3RhbXBdOiBkZWZhdWx0Rm9ybWF0LFxuICBbQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJdOiBkZWZhdWx0Rm9ybWF0LFxuICBbQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW5dOiBkID0+IFN0cmluZyhkKSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5kYXRlXTogZGVmYXVsdEZvcm1hdCxcbiAgW0FMTF9GSUVMRF9UWVBFUy5nZW9qc29uXTogZGVmYXVsdEZvcm1hdFxufTtcblxuZXhwb3J0IGNvbnN0IENIQU5ORUxfU0NBTEVTID0ga2V5TWlycm9yKHtcbiAgY29sb3I6IG51bGwsXG4gIHJhZGl1czogbnVsbCxcbiAgc2l6ZTogbnVsbCxcbiAgY29sb3JBZ2dyOiBudWxsLFxuICBzaXplQWdncjogbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBBR0dSRUdBVElPTl9UWVBFUyA9IHtcbiAgLy8gZGVmYXVsdFxuICBjb3VudDogJ2NvdW50JyxcbiAgLy8gbGluZWFyXG4gIGF2ZXJhZ2U6ICdhdmVyYWdlJyxcbiAgbWF4aW11bTogJ21heGltdW0nLFxuICBtaW5pbXVtOiAnbWluaW11bScsXG4gIG1lZGlhbjogJ21lZGlhbicsXG4gIHN1bTogJ3N1bScsXG4gIC8vIG9yZGluYWxcbiAgbW9kZTogJ21vZGUnLFxuICBjb3VudFVuaXF1ZTogJ2NvdW50IHVuaXF1ZSdcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5lYXJGaWVsZFNjYWxlRnVuY3Rpb25zID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JdOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgW0NIQU5ORUxfU0NBTEVTLnJhZGl1c106IFtTQ0FMRV9UWVBFUy5zcXJ0XSxcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVdOiBbU0NBTEVfVFlQRVMubGluZWFyXVxufTtcblxuZXhwb3J0IGNvbnN0IGxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge1xuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5hdmVyYWdlXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV0sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1heGltdW1dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWluaW11bV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5tZWRpYW5dOiBbU0NBTEVfVFlQRVMucXVhbnRpemUsIFNDQUxFX1RZUEVTLnF1YW50aWxlXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuc3VtXTogW1NDQUxFX1RZUEVTLnF1YW50aXplLCBTQ0FMRV9UWVBFUy5xdWFudGlsZV1cbiAgfSxcblxuICBbQ0hBTk5FTF9TQ0FMRVMuc2l6ZUFnZ3JdOiB7XG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLmF2ZXJhZ2VdOiBbU0NBTEVfVFlQRVMubGluZWFyXSxcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMubWF4aW11bV06IFtTQ0FMRV9UWVBFUy5saW5lYXJdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5taW5pbXVtXTogW1NDQUxFX1RZUEVTLmxpbmVhcl0sXG4gICAgW0FHR1JFR0FUSU9OX1RZUEVTLm1lZGlhbl06IFtTQ0FMRV9UWVBFUy5saW5lYXJdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5zdW1dOiBbU0NBTEVfVFlQRVMubGluZWFyXVxuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgb3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMgPSB7XG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvcl06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsXSxcbiAgW0NIQU5ORUxfU0NBTEVTLnJhZGl1c106IFtTQ0FMRV9UWVBFUy5wb2ludF0sXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplXTogW1NDQUxFX1RZUEVTLnBvaW50XVxufTtcblxuZXhwb3J0IGNvbnN0IG9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9ucyA9IHtcbiAgLy8gW0NIQU5ORUxfU0NBTEVTLmNvbG9yQWdncl06IFtTQ0FMRV9UWVBFUy5vcmRpbmFsLCBTQ0FMRV9UWVBFUy5saW5lYXJdLFxuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge1xuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5tb2RlXTogW1NDQUxFX1RZUEVTLm9yZGluYWxdLFxuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5jb3VudFVuaXF1ZV06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXG4gIH0sXG5cbiAgLy8gQ3VycmVudGx5IGRvZXNuJ3Qgc3VwcG9ydCB5ZXRcbiAgW0NIQU5ORUxfU0NBTEVTLnNpemVBZ2dyXToge31cbn07XG5cbmV4cG9ydCBjb25zdCBub3RTdXBwb3J0ZWRTY2FsZU9wdHMgPSB7XG4gIFtDSEFOTkVMX1NDQUxFUy5jb2xvcl06IFtdLFxuICBbQ0hBTk5FTF9TQ0FMRVMucmFkaXVzXTogW10sXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplXTogW11cbn07XG5cbmV4cG9ydCBjb25zdCAgbm90U3VwcG9ydEFnZ3JPcHRzID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge30sXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplQWdncl06IHt9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgYWdncmVnYXRpb24gYXJlIGJhc2VkIG9uIG9jdW50XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FHR1JFR0FUSU9OID0ge1xuICBbQ0hBTk5FTF9TQ0FMRVMuY29sb3JBZ2dyXToge1xuICAgIFtBR0dSRUdBVElPTl9UWVBFUy5jb3VudF06IFtTQ0FMRV9UWVBFUy5xdWFudGl6ZSwgU0NBTEVfVFlQRVMucXVhbnRpbGVdXG4gIH0sXG4gIFtDSEFOTkVMX1NDQUxFUy5zaXplQWdncl06IHtcbiAgICBbQUdHUkVHQVRJT05fVFlQRVMuY291bnRdOiBbU0NBTEVfVFlQRVMubGluZWFyXVxuICB9XG59O1xuXG4vKipcbiAqIERlZmluZSB3aGF0IHR5cGUgb2Ygc2NhbGUgb3BlcmF0aW9uIGlzIGFsbG93ZWQgb24gZWFjaCB0eXBlIG9mIGZpZWxkc1xuICovXG5leHBvcnQgY29uc3QgRklFTERfT1BUUyA9IHtcbiAgc3RyaW5nOiB7XG4gICAgdHlwZTogJ2NhdGVnb3JpY2FsJyxcbiAgICBzY2FsZToge1xuICAgICAgLi4ub3JkaW5hbEZpZWxkU2NhbGVGdW5jdGlvbnMsXG4gICAgICAuLi5vcmRpbmFsRmllbGRBZ2dyU2NhbGVGdW5jdGlvbnNcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgbGVnZW5kOiBkID0+IGRcbiAgICB9XG4gIH0sXG4gIHJlYWw6IHtcbiAgICB0eXBlOiAnbnVtZXJpY2FsJyxcbiAgICBzY2FsZToge1xuICAgICAgLi4ubGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLmxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zXG4gICAgfSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIGxlZ2VuZDogZCA9PiBkXG4gICAgfVxuICB9LFxuICB0aW1lc3RhbXA6IHtcbiAgICB0eXBlOiAndGltZScsXG4gICAgc2NhbGU6IHtcbiAgICAgIC4uLmxpbmVhckZpZWxkU2NhbGVGdW5jdGlvbnMsXG4gICAgICAuLi5ub3RTdXBwb3J0QWdnck9wdHNcbiAgICB9LFxuICAgIGZvcm1hdDoge1xuICAgICAgbGVnZW5kOiBkID0+IGRcbiAgICB9XG4gIH0sXG4gIGludGVnZXI6IHtcbiAgICB0eXBlOiAnbnVtZXJpY2FsJyxcbiAgICBzY2FsZToge1xuICAgICAgLi4ubGluZWFyRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLmxpbmVhckZpZWxkQWdnclNjYWxlRnVuY3Rpb25zXG4gICAgfSxcbiAgICBmb3JtYXQ6IHtcbiAgICAgIGxlZ2VuZDogZCA9PiBkXG4gICAgfVxuICB9LFxuICBib29sZWFuOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIHNjYWxlOiB7XG4gICAgICAuLi5vcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZFxuICAgIH1cbiAgfSxcbiAgZGF0ZToge1xuICAgIHNjYWxlOiB7XG4gICAgICAuLi5vcmRpbmFsRmllbGRTY2FsZUZ1bmN0aW9ucyxcbiAgICAgIC4uLm9yZGluYWxGaWVsZEFnZ3JTY2FsZUZ1bmN0aW9uc1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gZFxuICAgIH1cbiAgfSxcbiAgZ2VvanNvbjoge1xuICAgIHR5cGU6ICdnZW9tZXRyeScsXG4gICAgc2NhbGU6IHtcbiAgICAgIC4uLm5vdFN1cHBvcnRlZFNjYWxlT3B0cyxcbiAgICAgIC4uLm5vdFN1cHBvcnRBZ2dyT3B0c1xuICAgIH0sXG4gICAgZm9ybWF0OiB7XG4gICAgICBsZWdlbmQ6IGQgPT4gJy4uLidcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMgPSBPYmplY3Qua2V5cyhcbiAgQ0hBTk5FTF9TQ0FMRVNcbikucmVkdWNlKFxuICAoYWNjdSwga2V5KSA9PiAoe1xuICAgIC4uLmFjY3UsXG4gICAgW2tleV06IE9iamVjdC5rZXlzKEZJRUxEX09QVFMpLmZpbHRlcihcbiAgICAgIGZ0ID0+IE9iamVjdC5rZXlzKEZJRUxEX09QVFNbZnRdLnNjYWxlW2tleV0pLmxlbmd0aFxuICAgIClcbiAgfSksXG4gIHt9XG4pO1xuXG4vLyBUT0RPOiBzaGFuIGRlbGV0ZSB1c2Ugb2YgTEFZRVJfVFlQRVNcbmV4cG9ydCBjb25zdCBMQVlFUl9UWVBFUyA9IGtleU1pcnJvcih7XG4gIHBvaW50OiBudWxsLFxuICBhcmM6IG51bGwsXG4gIGNsdXN0ZXI6IG51bGwsXG4gIGxpbmU6IG51bGwsXG4gIGdyaWQ6IG51bGwsXG4gIGdlb2pzb246IG51bGwsXG4gIGljb246IG51bGwsXG4gIGhlYXRtYXA6IG51bGwsXG4gIGhleGFnb246IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MQVlFUl9DT0xPUiA9IHtcbiAgdHJpcEFyYzogJyM5MjI2QzYnLFxuICBiZWdpbnRyaXBfbGF0OiAnIzFFOTZCRScsXG4gIGRyb3BvZmZfbGF0OiAnI0ZGOTkxRicsXG4gIHJlcXVlc3RfbGF0OiAnIzUyQTM1Mydcbn07XG5cbi8vIGxldCB1c2VyIHBhc3MgaW4gZGVmYXVsdCB0b29sdGlwIGZpZWxkc1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTFRJUF9GSUVMRFMgPSBbXTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTElHSFRfU0VUVElOR1MgPSB7XG4gIGxpZ2h0c1Bvc2l0aW9uOiBbLTEyMi40NSwgMzcuNjYsIDgwMDAsIC0xMjIuMCwgMzguMCwgODAwMF0sXG4gIGFtYmllbnRSYXRpbzogMC40LFxuICBkaWZmdXNlUmF0aW86IDAuNixcbiAgc3BlY3VsYXJSYXRpbzogMC4zLFxuICBsaWdodHNTdHJlbmd0aDogWzAuOSwgMC4wLCAwLjgsIDAuMF0sXG4gIG51bWJlck9mTGlnaHRzOiAyXG59O1xuXG5leHBvcnQgY29uc3QgTk9fVkFMVUVfQ09MT1IgPSBbMTQ3LCAxNDcsIDE0N107XG5cbmV4cG9ydCBjb25zdCBMQVlFUl9CTEVORElOR1MgPSB7XG4gIGFkZGl0aXZlOiB7XG4gICAgYmxlbmRGdW5jOiBbJ1NSQ19BTFBIQScsICdEU1RfQUxQSEEnXSxcbiAgICBibGVuZEVxdWF0aW9uOiAnRlVOQ19BREQnXG4gIH0sXG4gIG5vcm1hbDoge1xuICAgIC8vIHJlZmVyZW5jZSB0b1xuICAgIC8vIGh0dHBzOi8vbGltbnUuY29tL3dlYmdsLWJsZW5kaW5nLXlvdXJlLXByb2JhYmx5LXdyb25nL1xuICAgIGJsZW5kRnVuYzogW1xuICAgICAgJ1NSQ19BTFBIQScsXG4gICAgICAnT05FX01JTlVTX1NSQ19BTFBIQScsXG4gICAgICAnT05FJyxcbiAgICAgICdPTkVfTUlOVVNfU1JDX0FMUEhBJ1xuICAgIF0sXG4gICAgYmxlbmRFcXVhdGlvbjogWydGVU5DX0FERCcsICdGVU5DX0FERCddXG4gIH0sXG4gIHN1YnRyYWN0aXZlOiB7XG4gICAgYmxlbmRGdW5jOiBbJ09ORScsICdPTkVfTUlOVVNfRFNUX0NPTE9SJywgJ1NSQ19BTFBIQScsICdEU1RfQUxQSEEnXSxcbiAgICBibGVuZEVxdWF0aW9uOiBbJ0ZVTkNfU1VCVFJBQ1QnLCAnRlVOQ19BREQnXVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgTUFYX0RFRkFVTFRfVE9PTFRJUFMgPSA1O1xuXG5leHBvcnQgY29uc3QgUkVTT0xVVElPTlMgPSBrZXlNaXJyb3Ioe1xuICBPTkVfWDogbnVsbCxcbiAgVFdPX1g6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgUkFUSU9TID0ga2V5TWlycm9yKHtcbiAgU0NSRUVOOiBudWxsLFxuICBGT1VSX0JZX1RIUkVFOiBudWxsLFxuICBTSVhURUVOX0JZX05JTkU6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgUkFUSU9fT1BUSU9OUyA9IFt7XG4gIGlkOiBSQVRJT1MuU0NSRUVOLFxuICBsYWJlbDogJ09yaWdpbmFsIFNjcmVlbicsXG4gIGdldFNpemU6IChzY3JlZW5XLCBzY3JlZW5IKSA9PiAoe3dpZHRoOiBzY3JlZW5XLCBoZWlnaHQ6IHNjcmVlbkh9KVxufSwge1xuICBpZDogUkFUSU9TLkZPVVJfQllfVEhSRUUsXG4gIGxhYmVsOiAnNDozJyxcbiAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7d2lkdGg6IHNjcmVlblcsIGhlaWdodDogTWF0aC5yb3VuZChzY3JlZW5XICogMC43NSl9KVxufSwge1xuICBpZDogUkFUSU9TLlNJWFRFRU5fQllfTklORSxcbiAgbGFiZWw6ICcxNjo5JyxcbiAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7d2lkdGg6IHNjcmVlblcsIGhlaWdodDogTWF0aC5yb3VuZChzY3JlZW5XICogMC41NjI1KX0pXG59XTtcblxuZXhwb3J0IGNvbnN0IFJFU09MVVRJT05fT1BUSU9OUyA9IFt7XG4gIGlkOiBSRVNPTFVUSU9OUy5PTkVfWCxcbiAgbGFiZWw6ICcxeCcsXG4gIGF2YWlsYWJsZTogdHJ1ZSxcbiAgc2NhbGU6IDEsXG4gIHpvb21PZmZzZXQ6IE1hdGgubG9nMigxKSxcbiAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7XG4gICAgd2lkdGg6IHNjcmVlblcsXG4gICAgaGVpZ2h0OiBzY3JlZW5IXG4gIH0pXG59LCB7XG4gIGlkOiBSRVNPTFVUSU9OUy5UV09fWCxcbiAgbGFiZWw6ICcyeCcsXG4gIGF2YWlsYWJsZTogdHJ1ZSxcbiAgc2NhbGU6IDIsXG4gIHpvb21PZmZzZXQ6IE1hdGgubG9nMigyKSxcbiAgZ2V0U2l6ZTogKHNjcmVlblcsIHNjcmVlbkgpID0+ICh7XG4gICAgd2lkdGg6IHNjcmVlblcgKiAyLFxuICAgIGhlaWdodDogc2NyZWVuSCAqIDJcbiAgfSlcbn1dO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfSU1BR0VfTkFNRSA9ICdrZXBsZXItZ2wucG5nJztcblxuZXhwb3J0IGNvbnN0IEVYUE9SVF9EQVRBX1RZUEUgPSBrZXlNaXJyb3Ioe1xuICBDU1Y6IG51bGxcbiAgLy8gU0hBUEVGSUxFOiBudWxsLFxuICAvLyBKU09OOiBudWxsLFxuICAvLyBHRU9KU09OOiBudWxsLFxuICAvLyBUT1BPSlNPTjogbnVsbFxufSk7XG5cbmV4cG9ydCBjb25zdCBFWFBPUlRfREFUQV9UWVBFX09QVElPTlMgPSBbXG4gIHtcbiAgICBpZDogRVhQT1JUX0RBVEFfVFlQRS5DU1YsXG4gICAgbGFiZWw6IEVYUE9SVF9EQVRBX1RZUEUuQ1NWLnRvTG93ZXJDYXNlKCksXG4gICAgYXZhaWxhYmxlOiB0cnVlXG4gIH1cbiAgLy8ge1xuICAvLyAgIGlkOiBFWFBPUlRfREFUQV9UWVBFLlNIQVBFRklMRSxcbiAgLy8gICBsYWJlbDogJ3NoYXBlZmlsZScsXG4gIC8vICAgYXZhaWxhYmxlOiBmYWxzZVxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgaWQ6IEVYUE9SVF9EQVRBX1RZUEUuSlNPTixcbiAgLy8gICBsYWJlbDogJ2pzb24nLFxuICAvLyAgIGF2YWlsYWJsZTogZmFsc2VcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGlkOiBFWFBPUlRfREFUQV9UWVBFLkdFT0pTT04sXG4gIC8vICAgbGFiZWw6ICdnZW9qc29uJyxcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogRVhQT1JUX0RBVEFfVFlQRS5UT1BPSlNPTixcbiAgLy8gICBsYWJlbDogJ3RvcG9qc29uJyxcbiAgLy8gICBhdmFpbGFibGU6IGZhbHNlXG4gIC8vIH1cbl07XG5cbi8vIEV4cG9ydCBtYXAgdHlwZXNcbmV4cG9ydCBjb25zdCBFWFBPUlRfTUFQX0ZPUk1BVCA9IGtleU1pcnJvcih7XG4gIEhUTUw6IG51bGwsXG4gIEpTT046IG51bGxcbn0pO1xuXG4vLyBFeHBvcnQgbWFwIG9wdGlvbnNcbmV4cG9ydCBjb25zdCBFWFBPUlRfTUFQX0ZPUk1BVF9PUFRJT05TID0gT2JqZWN0LmVudHJpZXMoRVhQT1JUX01BUF9GT1JNQVQpXG4gIC5tYXAoZW50cnkgPT4gKHtcbiAgICBpZDogZW50cnlbMF0sXG4gICAgbGFiZWw6IGVudHJ5WzFdLnRvTG93ZXJDYXNlKCksXG4gICAgYXZhaWxhYmxlOiB0cnVlXG4gIH0pKTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVVVJRF9DT1VOVCA9IDY7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX05PVElGSUNBVElPTl9NRVNTQUdFID0gJ01FU1NBR0VfTk9UX1BST1ZJREVEJztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEVTID0ga2V5TWlycm9yKHtcbiAgaW5mbzogbnVsbCxcbiAgZXJyb3I6IG51bGwsXG4gIHdhcm5pbmc6IG51bGwsXG4gIHN1Y2Nlc3M6IG51bGxcbn0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTID0ga2V5TWlycm9yKHtcbiAgZ2xvYmFsOiBudWxsLFxuICBmaWxlOiBudWxsXG59KTtcblxuZXhwb3J0IGNvbnN0IFRPS0VOX01JU1VTRV9XQVJOSU5HID0gJyogSWYgeW91IGRvIG5vdCBwcm92aWRlIHlvdXIgb3duIHRva2VuLCB0aGUgbWFwIG1heSBmYWlsIHRvIGRpc3BsYXkgYXQgYW55IHRpbWUgd2hlbiB3ZSByZXBsYWNlIG91cnMgdG8gYXZvaWQgbWlzdXNlLiAnO1xuZXhwb3J0IGNvbnN0IERJU0NMQUlNRVIgPSAnWW91IGNhbiBjaGFuZ2UgdGhlIE1hcGJveCB0b2tlbiBsYXRlciB1c2luZyB0aGUgZm9sbG93aW5nIGluc3RydWN0aW9uczogJztcbmV4cG9ydCBjb25zdCBNQVBfQ09ORklHX0RFU0NSSVBUSU9OID0gJ01hcCBjb25maWcgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgSnNvbiBmaWxlLiBJZiB5b3UgYXJlIHVzaW5nIGtlcGxlci5nbCBpbiB5b3VyIG93biBhcHAuIFlvdSBjYW4gY29weSB0aGlzIGNvbmZpZyBhbmQgcGFzcyBpdCB0byAnO1xuIl19