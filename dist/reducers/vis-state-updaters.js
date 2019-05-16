"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.loadFilesErrUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.setVisibleLayersForMapUpdater = exports.toggleSplitMapUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigVisStateUpdater = exports.showDatasetTableUpdater = exports.updateLayerBlendingUpdater = exports.removeDatasetUpdater = exports.reorderLayerUpdater = exports.removeLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.enlargeFilterUpdater = exports.updateAnimationSpeedUpdater = exports.toggleFilterAnimationUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread13 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _window = require("global/window");

var _tasks = _interopRequireWildcard(require("react-palm/tasks"));

var _tasks2 = require("../tasks/tasks");

var _visStateActions = require("../actions/vis-state-actions");

var _actions = require("../actions");

var _interactionUtils = require("../utils/interaction-utils");

var _filterUtils = require("../utils/filter-utils");

var _datasetUtils = require("../utils/dataset-utils");

var _layerUtils = require("../utils/layer-utils/layer-utils");

var _visStateMerger = require("./vis-state-merger");

var _layers = require("../layers");

var _fileUtils = require("../utils/file-utils");

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2["default"])(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2["default"])(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2["default"])(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @type {Object}
 * @property {Array} layers
 * @property {Array} layerData
 * @property {Array} layerToBeMerged
 * @property {Array} layerOrder
 * @property {Array} filters
 * @property {Array} filterToBeMerged
 * @property {Array} datasets
 * @property {string} editingDataset
 * @property {Object} interactionConfig
 * @property {Object} interactionToBeMerged
 * @property {string} layerBlending
 * @property {Object} hoverInfo
 * @property {Object} clicked
 * @property {boolean} fileLoading
 * @property {*} fileLoadingErr
 * @property {Array} splitMaps - a list of objects of layer availabilities and visibilities for each map
 * @public
 */

var INITIAL_VIS_STATE = {
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: (0, _interactionUtils.getDefaultInteraction)(),
  interactionToBeMerged: undefined,
  layerBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  // TODO: not used anywhere, delete it
  fileLoading: false,
  fileLoadingErr: null,
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //     layers: {
    //       layer_id: {
    //         isAvailable: true|false # this is driven by the left hand panel
    //         isVisible: true|false
    //       }
    //     }
    //   }
    // ]
  ],
  // defaults layer classes
  layerClasses: _layers.LayerClasses
};
exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return (0, _objectSpread13["default"])({}, state, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {Object} action.newConfig new config
 * @returns {Object} nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);
  var newLayer = oldLayer.updateLayerConfig(action.newConfig);

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData, {
      sameData: true
    }),
        layerData = _calculateLayerData.layerData,
        layer = _calculateLayerData.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  var newState = (0, _objectSpread13["default"])({}, state, {
    splitMaps: 'isVisible' in action.newConfig ? toggleLayerFromSplitMaps(state, newLayer) : state.splitMaps
  });
  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    idx: idx
  });
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {string} action.newType new type
 * @returns {Object} nextState
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;
  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  } // get a mint layer, with new id and type
  // because deck.gl uses id to match between new and old layer.
  // If type has changed but id is the same, it will break


  var newLayer = new state.layerClasses[newType]();
  newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings);

  if (newLayer.config.dataId) {
    var dataset = state.datasets[newLayer.config.dataId];
    newLayer.updateLayerDomain(dataset);
  }

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  var newState = state; // update splitMap layer id

  if (state.splitMaps) {
    newState = (0, _objectSpread13["default"])({}, state, {
      splitMaps: state.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return (0, _objectSpread13["default"])({}, settings, {
          layers: (0, _objectSpread13["default"])({}, otherLayers, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        });
      })
    });
  }

  return updateStateWithLayerAndData(newState, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {Object} action.newConfig new visual channel config
 * @param {string} action.channel channel to be updated
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;
  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData, {
    sameData: true
  }),
      layerData = _calculateLayerData3.layerData,
      layer = _calculateLayerData3.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.oldLayer layer to be updated
 * @param {Object} action.newVisConfig new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns {Object} nextState
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);
  var newVisConfig = (0, _objectSpread13["default"])({}, oldLayer.config.visConfig, action.newVisConfig);
  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData, {
      sameData: true
    }),
        layerData = _calculateLayerData4.layerData,
        layer = _calculateLayerData4.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.config new config as key value map: `{tooltip: {enabled: true}}`
 * @returns {Object} nextState
 * @public
 */


function interactionConfigChangeUpdater(state, action) {
  var config = action.config;
  var interactionConfig = (0, _objectSpread13["default"])({}, state.interactionConfig, (0, _defineProperty2["default"])({}, config.id, config));

  if (config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    Object.keys(interactionConfig).forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = (0, _objectSpread13["default"])({}, interactionConfig[k], {
          enabled: false
        });
      }
    });
  }

  return (0, _objectSpread13["default"])({}, state, {
    interactionConfig: interactionConfig
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx `idx` of filter to be updated
 * @param {string} action.prop `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param {*} action.value new value
 * @returns {Object} nextState
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value;
  var newState = state;
  var newFilter = (0, _objectSpread13["default"])({}, state.filters[idx], (0, _defineProperty2["default"])({}, prop, value));
  var _newFilter = newFilter,
      dataId = _newFilter.dataId;

  if (!dataId) {
    return state;
  }

  var _state$datasets$dataI = state.datasets[dataId],
      fields = _state$datasets$dataI.fields,
      allData = _state$datasets$dataI.allData;

  switch (prop) {
    case 'dataId':
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _filterUtils.getDefaultFilter)(dataId);
      break;

    case 'name':
      // find the field
      var fieldIdx = fields.findIndex(function (f) {
        return f.name === value;
      });
      var field = fields[fieldIdx];

      if (!field.filterProp) {
        // get filter domain from field
        // save filterProps: {domain, steps, value} to field, avoid recalculate
        field = (0, _objectSpread13["default"])({}, field, {
          filterProp: (0, _filterUtils.getFilterProps)(allData, field)
        });
      }

      newFilter = (0, _objectSpread13["default"])({}, newFilter, field.filterProp, {
        name: field.name,
        // can't edit dataId once name is selected
        freeze: true,
        fieldIdx: fieldIdx
      });
      var enlargedFilterIdx = state.filters.findIndex(function (f) {
        return f.enlarged;
      });

      if (enlargedFilterIdx > -1 && enlargedFilterIdx !== idx) {
        // there should be only one enlarged filter
        newFilter.enlarged = false;
      }

      newState = (0, _objectSpread13["default"])({}, state, {
        datasets: (0, _objectSpread13["default"])({}, state.datasets, (0, _defineProperty2["default"])({}, dataId, (0, _objectSpread13["default"])({}, state.datasets[dataId], {
          fields: fields.map(function (d, i) {
            return i === fieldIdx ? field : d;
          })
        })))
      });
      break;

    case 'value':
    default:
      break;
  } // save new filters to newState


  newState = (0, _objectSpread13["default"])({}, newState, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  }); // filter data

  newState = (0, _objectSpread13["default"])({}, newState, {
    datasets: (0, _objectSpread13["default"])({}, newState.datasets, (0, _defineProperty2["default"])({}, dataId, (0, _objectSpread13["default"])({}, newState.datasets[dataId], (0, _filterUtils.filterData)(allData, dataId, newState.filters))))
  });
  newState = updateAllLayerDomainData(newState, dataId, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx
 * @param {Object} action.newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @returns {Object} nextState
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref2) {
  var idx = _ref2.idx,
      newProp = _ref2.newProp;
  var newFilter = (0, _objectSpread13["default"])({}, state.filters[idx], newProp);
  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _filterUtils.getDefaultFilterPlotType)(newFilter);

    if (plotType) {
      newFilter = (0, _objectSpread13["default"])({}, newFilter, (0, _filterUtils.getFilterPlot)((0, _objectSpread13["default"])({}, newFilter, {
        plotType: plotType
      }), state.datasets[newFilter.dataId].allData), {
        plotType: plotType
      });
    }
  }

  return (0, _objectSpread13["default"])({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.dataId dataset `id` this new filter is associated with
 * @returns {Object} nextState
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : (0, _objectSpread13["default"])({}, state, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _filterUtils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx idx of filter
 * @returns {Object} nextState
 * @public
 */


exports.addFilterUpdater = addFilterUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return (0, _objectSpread13["default"])({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? (0, _objectSpread13["default"])({}, f, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx  `idx` of filter
 * @param {Number} action.speed `speed` to change it to. `speed` is a multiplier
 * @returns {Object} nextState
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var updateAnimationSpeedUpdater = function updateAnimationSpeedUpdater(state, action) {
  return (0, _objectSpread13["default"])({}, state, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? (0, _objectSpread13["default"])({}, f, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx index of filter to enlarge
 * @returns {Object} nextState
 * @public
 */


exports.updateAnimationSpeedUpdater = updateAnimationSpeedUpdater;

var enlargeFilterUpdater = function enlargeFilterUpdater(state, action) {
  var isEnlarged = state.filters[action.idx].enlarged;
  return (0, _objectSpread13["default"])({}, state, {
    filters: state.filters.map(function (f, i) {
      f.enlarged = !isEnlarged && i === action.idx;
      return f;
    })
  });
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx index of filter to b e removed
 * @returns {Object} nextState
 * @public
 */


exports.enlargeFilterUpdater = enlargeFilterUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var dataId = state.filters[idx].dataId;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var newState = (0, _objectSpread13["default"])({}, state, {
    datasets: (0, _objectSpread13["default"])({}, state.datasets, (0, _defineProperty2["default"])({}, dataId, (0, _objectSpread13["default"])({}, state.datasets[dataId], (0, _filterUtils.filterData)(state.datasets[dataId].allData, dataId, newFilters)))),
    filters: newFilters
  });
  return updateAllLayerDomainData(newState, dataId);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.props - new layer props
 * @returns {Object} nextState
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var defaultDataset = Object.keys(state.datasets)[0];
  var newLayer = new _layers.Layer((0, _objectSpread13["default"])({
    isVisible: true,
    isConfigActive: true,
    dataId: defaultDataset
  }, action.props));
  return (0, _objectSpread13["default"])({}, state, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [{}]),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(state.layerOrder), [state.layerOrder.length]),
    splitMaps: addNewLayersToSplitMap(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} action.idx index of layer to b e removed
 * @returns {Object} nextState
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

var removeLayerUpdater = function removeLayerUpdater(state, _ref3) {
  var idx = _ref3.idx;
  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = removeLayerFromSplitMaps(state, layerToRemove);
  return (0, _objectSpread13["default"])({}, state, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps
  });
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Array<Number>} action.order an array of layer indexes
 * @returns {Object} nextState
 * @public
 */


exports.removeLayerUpdater = removeLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref4) {
  var order = _ref4.order;
  return (0, _objectSpread13["default"])({}, state, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.key dataset id
 * @returns {Object} nextState
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

var removeDatasetUpdater = function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.key;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var indexes = layers.reduce(function (listOfIndexes, layer, index) {
    if (layer.config.dataId === datasetKey) {
      listOfIndexes.push(index);
    }

    return listOfIndexes;
  }, []); // remove layers and datasets

  var _indexes$reduce = indexes.reduce(function (_ref5, idx) {
    var currentState = _ref5.newState,
        indexCounter = _ref5.indexCounter;
    var currentIndex = idx - indexCounter;
    currentState = removeLayerUpdater(currentState, {
      idx: currentIndex
    });
    indexCounter++;
    return {
      newState: currentState,
      indexCounter: indexCounter
    };
  }, {
    newState: (0, _objectSpread13["default"])({}, state, {
      datasets: newDatasets
    }),
    indexCounter: 0
  }),
      newState = _indexes$reduce.newState; // remove filters


  var filters = state.filters.filter(function (filter) {
    return filter.dataId !== datasetKey;
  }); // update interactionConfig

  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[datasetKey],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [datasetKey].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = (0, _objectSpread13["default"])({}, interactionConfig, {
      tooltip: (0, _objectSpread13["default"])({}, tooltip, {
        config: (0, _objectSpread13["default"])({}, config, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return (0, _objectSpread13["default"])({}, newState, {
    filters: filters,
    interactionConfig: interactionConfig
  });
};
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.mode one of `additive`, `normal` and `subtractive`
 * @returns {Object} nextState
 * @public
 */


exports.removeDatasetUpdater = removeDatasetUpdater;

var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return (0, _objectSpread13["default"])({}, state, {
    layerBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {string} action.dataId dataset id to show in table
 * @returns {Object} nextState
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return (0, _objectSpread13["default"])({}, state, {
    editingDataset: action.dataId
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @returns {Object} nextState
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var resetMapConfigVisStateUpdater = function resetMapConfigVisStateUpdater(state) {
  return (0, _objectSpread13["default"])({}, INITIAL_VIS_STATE, state.initialState, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.payload map config to be propagated
 * @returns {Object} nextState
 * @public
 */


exports.resetMapConfigVisStateUpdater = resetMapConfigVisStateUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, action) {
  if (!action.payload.visState) {
    return state;
  }

  var _action$payload$visSt = action.payload.visState,
      filters = _action$payload$visSt.filters,
      layers = _action$payload$visSt.layers,
      interactionConfig = _action$payload$visSt.interactionConfig,
      layerBlending = _action$payload$visSt.layerBlending,
      splitMaps = _action$payload$visSt.splitMaps; // always reset config when receive a new config

  var resetState = resetMapConfigVisStateUpdater(state);
  var mergedState = (0, _objectSpread13["default"])({}, resetState, {
    splitMaps: splitMaps || [] // maps doesn't require any logic

  });
  mergedState = (0, _visStateMerger.mergeFilters)(mergedState, filters);
  mergedState = (0, _visStateMerger.mergeLayers)(mergedState, layers);
  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionConfig);
  mergedState = (0, _visStateMerger.mergeLayerBlending)(mergedState, layerBlending);
  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.info Object hovered, returned by deck.gl
 * @returns {Object} nextState
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return (0, _objectSpread13["default"])({}, state, {
    hoverInfo: action.info
  });
};
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Object} action.info Object clicked, returned by deck.gl
 * @returns {Object} nextState
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

var layerClickUpdater = function layerClickUpdater(state, action) {
  return (0, _objectSpread13["default"])({}, state, {
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @returns {Object} nextState
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state) {
  return (0, _objectSpread13["default"])({}, state, {
    clicked: null
  });
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number|undefined} action.payload index of the split map
 * @returns {Object} nextState
 * @public
 */


exports.mapClickUpdater = mapClickUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? (0, _objectSpread13["default"])({}, state, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: computeSplitMapLayers(state.layers)
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Set layers to be visible in split map
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Number} mapIndex index of the split map
 * @param {Array<string>} layerIds array of layer ids
 * @returns {Object} nextState
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var setVisibleLayersForMapUpdater = function setVisibleLayersForMapUpdater(state, action) {
  var mapIndex = action.mapIndex,
      layerIds = action.layerIds;

  if (!layerIds) {
    return state;
  }

  var _state$splitMaps = state.splitMaps,
      splitMaps = _state$splitMaps === void 0 ? [] : _state$splitMaps;

  if (splitMaps.length === 0) {
    // we should never get into this state
    // because this action should only be triggered
    // when map view is split
    // but something may have happened
    return state;
  } // need to check if maps is populated otherwise will create


  var _splitMaps$mapIndex = splitMaps[mapIndex],
      map = _splitMaps$mapIndex === void 0 ? {} : _splitMaps$mapIndex;
  var layers = map.layers || []; // we set visibility to true for all layers included in our input list

  var newLayers = (Object.keys(layers) || []).reduce(function (currentLayers, idx) {
    return (0, _objectSpread13["default"])({}, currentLayers, (0, _defineProperty2["default"])({}, idx, (0, _objectSpread13["default"])({}, layers[idx], {
      isVisible: layerIds.includes(idx)
    })));
  }, {});
  var newMaps = (0, _toConsumableArray2["default"])(splitMaps);
  newMaps[mapIndex] = (0, _objectSpread13["default"])({}, splitMaps[mapIndex], {
    layers: newLayers
  });
  return (0, _objectSpread13["default"])({}, state, {
    splitMaps: newMaps
  });
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @param {Object} state
 * @param {Object} action
 * @param {Number} action.mapIndex index of the split map
 * @param {string} action.layerId id of the layer
 * @returns {Object} nextState
 * @public
 */


exports.setVisibleLayersForMapUpdater = setVisibleLayersForMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, action) {
  if (!state.splitMaps[action.mapIndex]) {
    return state;
  }

  var mapSettings = state.splitMaps[action.mapIndex];
  var layers = mapSettings.layers;

  if (!layers || !layers[action.layerId]) {
    return state;
  }

  var layer = layers[action.layerId];
  var newLayer = (0, _objectSpread13["default"])({}, layer, {
    isVisible: !layer.isVisible
  });
  var newLayers = (0, _objectSpread13["default"])({}, layers, (0, _defineProperty2["default"])({}, action.layerId, newLayer));
  var newSplitMaps = (0, _toConsumableArray2["default"])(state.splitMaps);
  newSplitMaps[action.mapIndex] = (0, _objectSpread13["default"])({}, mapSettings, {
    layers: newLayers
  });
  return (0, _objectSpread13["default"])({}, state, {
    splitMaps: newSplitMaps
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Array<Object>|Object} action.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} action.datasets.info -info of a dataset
 * @param {string} action.datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} action.datasets.info.label - A display name of this dataset
 * @param {Object} action.datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} action.datasets.data.fields - ***required** Array of fields,
 * @param {string} action.datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} action.datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 * @param {Object} action.options option object `{centerMap: true}`
 * @param {Object} action.config map config
 * @returns {Object} nextState
 * @public
 */

/* eslint-disable max-statements */


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var datasets = Array.isArray(action.datasets) ? action.datasets : [action.datasets];

  if (action.config) {
    // apply config if passed from action
    state = receiveMapConfigUpdater(state, {
      payload: {
        visState: action.config
      }
    });
  }

  var newDateEntries = datasets.reduce(function (accu, _ref6) {
    var _ref6$info = _ref6.info,
        info = _ref6$info === void 0 ? {} : _ref6$info,
        data = _ref6.data;
    return (0, _objectSpread13["default"])({}, accu, (0, _datasetUtils.createNewDataEntry)({
      info: info,
      data: data
    }, state.datasets) || {});
  }, {});

  if (!Object.keys(newDateEntries).length) {
    return state;
  }

  var stateWithNewData = (0, _objectSpread13["default"])({}, state, {
    datasets: (0, _objectSpread13["default"])({}, state.datasets, newDateEntries)
  }); // previously saved config before data loaded

  var _stateWithNewData$fil = stateWithNewData.filterToBeMerged,
      filterToBeMerged = _stateWithNewData$fil === void 0 ? [] : _stateWithNewData$fil,
      _stateWithNewData$lay = stateWithNewData.layerToBeMerged,
      layerToBeMerged = _stateWithNewData$lay === void 0 ? [] : _stateWithNewData$lay,
      _stateWithNewData$int = stateWithNewData.interactionToBeMerged,
      interactionToBeMerged = _stateWithNewData$int === void 0 ? {} : _stateWithNewData$int; // merge state with saved filters

  var mergedState = (0, _visStateMerger.mergeFilters)(stateWithNewData, filterToBeMerged); // merge state with saved layers

  mergedState = (0, _visStateMerger.mergeLayers)(mergedState, layerToBeMerged);

  if (mergedState.layers.length === state.layers.length) {
    // no layer merged, find defaults
    mergedState = addDefaultLayers(mergedState, newDateEntries);
  }

  if (mergedState.splitMaps.length) {
    var newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId in newDateEntries;
    }); // if map is split, add new layers to splitMaps

    mergedState = (0, _objectSpread13["default"])({}, mergedState, {
      splitMaps: addNewLayersToSplitMap(mergedState.splitMaps, newLayers)
    });
  } // merge state with saved interactions


  mergedState = (0, _visStateMerger.mergeInteractions)(mergedState, interactionToBeMerged); // if no tooltips merged add default tooltips

  Object.keys(newDateEntries).forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDateEntries[dataId]);
    }
  });
  return updateAllLayerDomainData(mergedState, Object.keys(newDateEntries));
};
/* eslint-enable max-statements */


exports.updateVisDataUpdater = updateVisDataUpdater;

function generateLayerMetaForSplitViews(layer) {
  return {
    isAvailable: layer.config.isVisible,
    isVisible: layer.config.isVisible
  };
}
/**
 * This method will compute the default maps custom list
 * based on the current layers status
 * @param {Array<Object>} layers
 * @returns {Array<Object>} split map settings
 */


function computeSplitMapLayers(layers) {
  var mapLayers = layers.reduce(function (newLayers, currentLayer) {
    return (0, _objectSpread13["default"])({}, newLayers, (0, _defineProperty2["default"])({}, currentLayer.id, generateLayerMetaForSplitViews(currentLayer)));
  }, {});
  return [{
    layers: mapLayers
  }, {
    layers: mapLayers
  }];
}
/**
 * Remove an existing layer from split map settings
 * @param {Object} state `visState`
 * @param {Object} layer
 * @returns {Object} Maps of custom layer objects
 */


function removeLayerFromSplitMaps(state, layer) {
  return state.splitMaps.map(function (settings) {
    var layers = settings.layers;
    /* eslint-disable no-unused-vars */

    var _layer$id = layer.id,
        _ = layers[_layer$id],
        newLayers = (0, _objectWithoutProperties2["default"])(layers, [_layer$id].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    return (0, _objectSpread13["default"])({}, settings, {
      layers: newLayers
    });
  });
}
/**
 * Add new layers to both existing maps
 * @param {Object} splitMaps
 * @param {Object|Array<Object>} layers
 * @returns {Array<Object>} new splitMaps
 */


function addNewLayersToSplitMap(splitMaps, layers) {
  var newLayers = Array.isArray(layers) ? layers : [layers];

  if (!splitMaps || !splitMaps.length || !newLayers.length) {
    return splitMaps;
  } // add new layer to both maps,
  //  don't override, if layer.id is already in splitMaps.settings.layers


  return splitMaps.map(function (settings) {
    return (0, _objectSpread13["default"])({}, settings, {
      layers: (0, _objectSpread13["default"])({}, settings.layers, newLayers.reduce(function (accu, newLayer) {
        return newLayer.config.isVisible ? (0, _objectSpread13["default"])({}, accu, (0, _defineProperty2["default"])({}, newLayer.id, settings.layers[newLayer.id] ? settings.layers[newLayer.id] : generateLayerMetaForSplitViews(newLayer))) : accu;
      }, {}))
    });
  });
}
/**
 * Hide an existing layers from custom map layer objects
 * @param {Object} state
 * @param {Object} layer
 * @returns {Object} Maps of custom layer objects
 */


function toggleLayerFromSplitMaps(state, layer) {
  return state.splitMaps.map(function (settings) {
    var layers = settings.layers;
    var newLayers = (0, _objectSpread13["default"])({}, layers, (0, _defineProperty2["default"])({}, layer.id, generateLayerMetaForSplitViews(layer)));
    return (0, _objectSpread13["default"])({}, settings, {
      layers: newLayers
    });
  });
}
/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


function closeSpecificMapAtIndex(state, action) {
  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var metaSettings = state.splitMaps[indexToRetrieve];

  if (!metaSettings || !metaSettings.layers) {
    // if we can't find the meta settings we simply clean up splitMaps and
    // keep global state as it is
    // but why does this ever happen?
    return (0, _objectSpread13["default"])({}, state, {
      splitMaps: []
    });
  }

  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return layer.updateLayerConfig({
      isVisible: metaSettings.layers[layer.id] ? metaSettings.layers[layer.id].isVisible : layer.config.isVisible
    });
  }); // delete map

  return (0, _objectSpread13["default"])({}, state, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {Array<Object>} action.files array of fileblob
 * @returns {Object} nextState
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files;
  var filesToLoad = files.map(function (fileBlob) {
    return (0, _fileUtils.processFileToLoad)(fileBlob);
  }); // reader -> parser -> augment -> receiveVisData

  var loadFileTasks = [_tasks["default"].all(filesToLoad.map(_tasks2.LOAD_FILE_TASK)).bimap(function (results) {
    var data = results.reduce(function (f, c) {
      return {
        // using concat here because the current datasets could be an array or a single item
        datasets: f.datasets.concat(c.datasets),
        // we need to deep merge this thing unless we find a better solution
        // this case will only happen if we allow to load multiple keplergl json files
        config: (0, _objectSpread13["default"])({}, f.config, c.config || {})
      };
    }, {
      datasets: [],
      config: {},
      options: {
        centerMap: true
      }
    });
    return (0, _actions.addDataToMap)(data);
  }, function (error) {
    return (0, _visStateActions.loadFilesErr)(error);
  })];
  return (0, _tasks.withTask)((0, _objectSpread13["default"])({}, state, {
    fileLoading: true
  }), loadFileTasks);
};
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Object} action action
 * @param {*} action.error
 * @returns {Object} nextState
 * @public
 */


exports.loadFilesUpdater = loadFilesUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref7) {
  var error = _ref7.error;
  return (0, _objectSpread13["default"])({}, state, {
    fileLoading: false,
    fileLoadingErr: error
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 * @memberof visStateUpdaters
 * @param {Object} state `visState`
 * @param {Array<string>} datasets
 * @returns {Object} nextState
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

function addDefaultLayers(state, datasets) {
  var defaultLayers = Object.values(datasets).reduce(function (accu, dataset) {
    return [].concat((0, _toConsumableArray2["default"])(accu), (0, _toConsumableArray2["default"])((0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses) || []));
  }, []);
  return (0, _objectSpread13["default"])({}, state, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
    layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
      return state.layers.length + i;
    })), (0, _toConsumableArray2["default"])(state.layerOrder))
  });
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(dataset);
  return (0, _objectSpread13["default"])({}, state, {
    interactionConfig: (0, _objectSpread13["default"])({}, state.interactionConfig, {
      tooltip: (0, _objectSpread13["default"])({}, state.interactionConfig.tooltip, {
        config: {
          // find default fields to show in tooltip
          fieldsToShow: (0, _objectSpread13["default"])({}, state.interactionConfig.tooltip.config.fieldsToShow, tooltipFields)
        }
      })
    })
  });
}
/**
 * Helper function to update layer domains for an array of datsets
 * @param {Object} state
 * @param {Array|Array<string>} dataId dataset id or array of dataset ids
 * @param {Object} newFilter if is called by setFilter, the filter that has changed
 * @returns {Object} nextState
 */


function updateAllLayerDomainData(state, dataId, newFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerDatas = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = newFilter && newFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets[oldLayer.config.dataId], newFilter);

      var _calculateLayerData5 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData5.layerData,
          layer = _calculateLayerData5.layer;

      newLayers.push(layer);
      newLayerDatas.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerDatas.push(state.layerData[i]);
    }
  });
  return (0, _objectSpread13["default"])({}, state, {
    layers: newLayers,
    layerData: newLayerDatas
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy92aXMtc3RhdGUtdXBkYXRlcnMuanMiXSwibmFtZXMiOlsidmlzU3RhdGVVcGRhdGVycyIsIklOSVRJQUxfVklTX1NUQVRFIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibGF5ZXJUb0JlTWVyZ2VkIiwibGF5ZXJPcmRlciIsImZpbHRlcnMiLCJmaWx0ZXJUb0JlTWVyZ2VkIiwiZGF0YXNldHMiLCJlZGl0aW5nRGF0YXNldCIsInVuZGVmaW5lZCIsImludGVyYWN0aW9uQ29uZmlnIiwiaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkIiwibGF5ZXJCbGVuZGluZyIsImhvdmVySW5mbyIsImNsaWNrZWQiLCJmaWxlTG9hZGluZyIsImZpbGVMb2FkaW5nRXJyIiwic3BsaXRNYXBzIiwibGF5ZXJDbGFzc2VzIiwiTGF5ZXJDbGFzc2VzIiwidXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhIiwic3RhdGUiLCJsYXllciIsImlkeCIsIm1hcCIsImx5ciIsImkiLCJkIiwibGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyIiwiYWN0aW9uIiwib2xkTGF5ZXIiLCJmaW5kSW5kZXgiLCJsIiwiaWQiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJuZXdDb25maWciLCJuZXdMYXllciIsInVwZGF0ZUxheWVyQ29uZmlnIiwic2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhIiwib2xkTGF5ZXJEYXRhIiwic2FtZURhdGEiLCJuZXdTdGF0ZSIsInRvZ2dsZUxheWVyRnJvbVNwbGl0TWFwcyIsImxheWVyVHlwZUNoYW5nZVVwZGF0ZXIiLCJuZXdUeXBlIiwib2xkSWQiLCJDb25zb2xlIiwiZXJyb3IiLCJhc3NpZ25Db25maWdUb0xheWVyIiwiY29uZmlnIiwidmlzQ29uZmlnU2V0dGluZ3MiLCJkYXRhSWQiLCJkYXRhc2V0IiwidXBkYXRlTGF5ZXJEb21haW4iLCJzZXR0aW5ncyIsIm9sZExheWVyTWFwIiwib3RoZXJMYXllcnMiLCJsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyIiwiY2hhbm5lbCIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbCIsImxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlciIsIm5ld1Zpc0NvbmZpZyIsInZpc0NvbmZpZyIsImludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiayIsInNldEZpbHRlclVwZGF0ZXIiLCJwcm9wIiwidmFsdWUiLCJuZXdGaWx0ZXIiLCJmaWVsZHMiLCJhbGxEYXRhIiwiZmllbGRJZHgiLCJmIiwibmFtZSIsImZpZWxkIiwiZmlsdGVyUHJvcCIsImZyZWV6ZSIsImVubGFyZ2VkRmlsdGVySWR4IiwiZW5sYXJnZWQiLCJ1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEiLCJzZXRGaWx0ZXJQbG90VXBkYXRlciIsIm5ld1Byb3AiLCJwbG90VHlwZSIsImFkZEZpbHRlclVwZGF0ZXIiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyIiwiaXNBbmltYXRpbmciLCJ1cGRhdGVBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJzcGVlZCIsImVubGFyZ2VGaWx0ZXJVcGRhdGVyIiwiaXNFbmxhcmdlZCIsInJlbW92ZUZpbHRlclVwZGF0ZXIiLCJuZXdGaWx0ZXJzIiwic2xpY2UiLCJsZW5ndGgiLCJhZGRMYXllclVwZGF0ZXIiLCJkZWZhdWx0RGF0YXNldCIsIkxheWVyIiwiaXNWaXNpYmxlIiwiaXNDb25maWdBY3RpdmUiLCJhZGROZXdMYXllcnNUb1NwbGl0TWFwIiwicmVtb3ZlTGF5ZXJVcGRhdGVyIiwibGF5ZXJUb1JlbW92ZSIsIm5ld01hcHMiLCJyZW1vdmVMYXllckZyb21TcGxpdE1hcHMiLCJmaWx0ZXIiLCJwaWQiLCJpc0xheWVySG92ZXJlZCIsInJlb3JkZXJMYXllclVwZGF0ZXIiLCJvcmRlciIsInJlbW92ZURhdGFzZXRVcGRhdGVyIiwiZGF0YXNldEtleSIsImtleSIsIm5ld0RhdGFzZXRzIiwiaW5kZXhlcyIsInJlZHVjZSIsImxpc3RPZkluZGV4ZXMiLCJpbmRleCIsInB1c2giLCJjdXJyZW50U3RhdGUiLCJpbmRleENvdW50ZXIiLCJjdXJyZW50SW5kZXgiLCJ0b29sdGlwIiwiZmllbGRzVG9TaG93IiwidXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIiLCJtb2RlIiwic2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIiLCJyZXNldE1hcENvbmZpZ1Zpc1N0YXRlVXBkYXRlciIsImluaXRpYWxTdGF0ZSIsInJlY2VpdmVNYXBDb25maWdVcGRhdGVyIiwicGF5bG9hZCIsInZpc1N0YXRlIiwicmVzZXRTdGF0ZSIsIm1lcmdlZFN0YXRlIiwibGF5ZXJIb3ZlclVwZGF0ZXIiLCJpbmZvIiwibGF5ZXJDbGlja1VwZGF0ZXIiLCJwaWNrZWQiLCJtYXBDbGlja1VwZGF0ZXIiLCJ0b2dnbGVTcGxpdE1hcFVwZGF0ZXIiLCJjb21wdXRlU3BsaXRNYXBMYXllcnMiLCJjbG9zZVNwZWNpZmljTWFwQXRJbmRleCIsInNldFZpc2libGVMYXllcnNGb3JNYXBVcGRhdGVyIiwibWFwSW5kZXgiLCJsYXllcklkcyIsIm5ld0xheWVycyIsImN1cnJlbnRMYXllcnMiLCJpbmNsdWRlcyIsInRvZ2dsZUxheWVyRm9yTWFwVXBkYXRlciIsIm1hcFNldHRpbmdzIiwibGF5ZXJJZCIsIm5ld1NwbGl0TWFwcyIsInVwZGF0ZVZpc0RhdGFVcGRhdGVyIiwiQXJyYXkiLCJpc0FycmF5IiwibmV3RGF0ZUVudHJpZXMiLCJhY2N1IiwiZGF0YSIsInN0YXRlV2l0aE5ld0RhdGEiLCJhZGREZWZhdWx0TGF5ZXJzIiwidG9vbHRpcEZpZWxkcyIsImFkZERlZmF1bHRUb29sdGlwcyIsImdlbmVyYXRlTGF5ZXJNZXRhRm9yU3BsaXRWaWV3cyIsImlzQXZhaWxhYmxlIiwibWFwTGF5ZXJzIiwiY3VycmVudExheWVyIiwiXyIsImluZGV4VG9SZXRyaWV2ZSIsIm1ldGFTZXR0aW5ncyIsImxvYWRGaWxlc1VwZGF0ZXIiLCJmaWxlcyIsImZpbGVzVG9Mb2FkIiwiZmlsZUJsb2IiLCJsb2FkRmlsZVRhc2tzIiwiVGFzayIsImFsbCIsIkxPQURfRklMRV9UQVNLIiwiYmltYXAiLCJyZXN1bHRzIiwiYyIsImNvbmNhdCIsIm9wdGlvbnMiLCJjZW50ZXJNYXAiLCJsb2FkRmlsZXNFcnJVcGRhdGVyIiwiZGVmYXVsdExheWVycyIsInZhbHVlcyIsImRhdGFJZHMiLCJuZXdMYXllckRhdGFzIiwiZml4ZWREb21haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFHQTs7QUFHQTs7QUFDQTs7QUFHQTs7QUFJQTs7QUFPQTs7QUFFQTs7QUFLQTs7QUFPQTs7QUFDQTs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsSUFBekI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJPLElBQU1DLGlCQUFpQixHQUFHO0FBQy9CO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxFQUZ1QjtBQUcvQkMsRUFBQUEsU0FBUyxFQUFFLEVBSG9CO0FBSS9CQyxFQUFBQSxlQUFlLEVBQUUsRUFKYztBQUsvQkMsRUFBQUEsVUFBVSxFQUFFLEVBTG1CO0FBTy9CO0FBQ0FDLEVBQUFBLE9BQU8sRUFBRSxFQVJzQjtBQVMvQkMsRUFBQUEsZ0JBQWdCLEVBQUUsRUFUYTtBQVcvQjtBQUNBQyxFQUFBQSxRQUFRLEVBQUUsRUFacUI7QUFhL0JDLEVBQUFBLGNBQWMsRUFBRUMsU0FiZTtBQWUvQkMsRUFBQUEsaUJBQWlCLEVBQUUsOENBZlk7QUFnQi9CQyxFQUFBQSxxQkFBcUIsRUFBRUYsU0FoQlE7QUFrQi9CRyxFQUFBQSxhQUFhLEVBQUUsUUFsQmdCO0FBbUIvQkMsRUFBQUEsU0FBUyxFQUFFSixTQW5Cb0I7QUFvQi9CSyxFQUFBQSxPQUFPLEVBQUVMLFNBcEJzQjtBQXNCL0I7QUFDQU0sRUFBQUEsV0FBVyxFQUFFLEtBdkJrQjtBQXdCL0JDLEVBQUFBLGNBQWMs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QndCLENBQWhCLENBQW5CO0FBQ0Q7QUFDRixHQXZCRDtBQXlCQSw2Q0FDS0wsS0FETDtBQUVFcEIsSUFBQUEsTUFBTSxFQUFFbUosU0FGVjtBQUdFbEosSUFBQUEsU0FBUyxFQUFFNEw7QUFIYjtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IFRhc2ssIHtkaXNhYmxlU3RhY2tDYXB0dXJpbmcsIHdpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcblxuLy8gVGFza3NcbmltcG9ydCB7TE9BRF9GSUxFX1RBU0t9IGZyb20gJ3Rhc2tzL3Rhc2tzJztcblxuLy8gQWN0aW9uc1xuaW1wb3J0IHtsb2FkRmlsZXNFcnJ9IGZyb20gJ2FjdGlvbnMvdmlzLXN0YXRlLWFjdGlvbnMnO1xuaW1wb3J0IHthZGREYXRhVG9NYXB9IGZyb20gJ2FjdGlvbnMnO1xuXG4vLyBVdGlsc1xuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdEludGVyYWN0aW9uLFxuICBmaW5kRmllbGRzVG9TaG93XG59IGZyb20gJ3V0aWxzL2ludGVyYWN0aW9uLXV0aWxzJztcbmltcG9ydCB7XG4gIGdldERlZmF1bHRGaWx0ZXIsXG4gIGdldEZpbHRlclByb3BzLFxuICBnZXRGaWx0ZXJQbG90LFxuICBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUsXG4gIGZpbHRlckRhdGFcbn0gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7Y3JlYXRlTmV3RGF0YUVudHJ5fSBmcm9tICd1dGlscy9kYXRhc2V0LXV0aWxzJztcblxuaW1wb3J0IHtcbiAgZmluZERlZmF1bHRMYXllcixcbiAgY2FsY3VsYXRlTGF5ZXJEYXRhXG59IGZyb20gJ3V0aWxzL2xheWVyLXV0aWxzL2xheWVyLXV0aWxzJztcblxuaW1wb3J0IHtcbiAgbWVyZ2VGaWx0ZXJzLFxuICBtZXJnZUxheWVycyxcbiAgbWVyZ2VJbnRlcmFjdGlvbnMsXG4gIG1lcmdlTGF5ZXJCbGVuZGluZ1xufSBmcm9tICcuL3Zpcy1zdGF0ZS1tZXJnZXInO1xuXG5pbXBvcnQge0xheWVyLCBMYXllckNsYXNzZXN9IGZyb20gJ2xheWVycyc7XG5pbXBvcnQge3Byb2Nlc3NGaWxlVG9Mb2FkfSBmcm9tICcvdXRpbHMvZmlsZS11dGlscyc7XG5cbi8vIHJlYWN0LXBhbG1cbi8vIGRpc2FibGUgY2FwdHVyZSBleGNlcHRpb24gZm9yIHJlYWN0LXBhbG0gY2FsbCB0byB3aXRoVGFza1xuZGlzYWJsZVN0YWNrQ2FwdHVyaW5nKCk7XG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGB2aXNTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKlxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7dmlzU3RhdGVVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcbiAqIC8vIFJvb3QgUmVkdWNlclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXG4gKiAgYXBwOiBhcHBSZWR1Y2VyXG4gKiB9KTtcbiAqXG4gKiBjb25zdCBjb21wb3NlZFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICB2aXNTdGF0ZTogdmlzU3RhdGVVcGRhdGVycy5lbmxhcmdlRmlsdGVyVXBkYXRlcihcbiAqICAgICAgICAgICAgICAgc3RhdGUua2VwbGVyR2wuZm9vLnZpc1N0YXRlLFxuICogICAgICAgICAgICAgICB7aWR4OiAwfVxuICogICAgICAgICAgICAgKVxuICogICAgICAgICAgfVxuICogICAgICAgIH1cbiAqICAgICAgfTtcbiAqICB9XG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xuICogfTtcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCB2aXNTdGF0ZVVwZGF0ZXJzID0gbnVsbDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBEZWZhdWx0IGluaXRpYWwgYHZpc1N0YXRlYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBjb25zdGFudFxuICogQHR5cGUge09iamVjdH1cbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGxheWVyc1xuICogQHByb3BlcnR5IHtBcnJheX0gbGF5ZXJEYXRhXG4gKiBAcHJvcGVydHkge0FycmF5fSBsYXllclRvQmVNZXJnZWRcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGxheWVyT3JkZXJcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGZpbHRlcnNcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGZpbHRlclRvQmVNZXJnZWRcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGRhdGFzZXRzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZWRpdGluZ0RhdGFzZXRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBpbnRlcmFjdGlvbkNvbmZpZ1xuICogQHByb3BlcnR5IHtPYmplY3R9IGludGVyYWN0aW9uVG9CZU1lcmdlZFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxheWVyQmxlbmRpbmdcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBob3ZlckluZm9cbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBjbGlja2VkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGZpbGVMb2FkaW5nXG4gKiBAcHJvcGVydHkgeyp9IGZpbGVMb2FkaW5nRXJyXG4gKiBAcHJvcGVydHkge0FycmF5fSBzcGxpdE1hcHMgLSBhIGxpc3Qgb2Ygb2JqZWN0cyBvZiBsYXllciBhdmFpbGFiaWxpdGllcyBhbmQgdmlzaWJpbGl0aWVzIGZvciBlYWNoIG1hcFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgSU5JVElBTF9WSVNfU1RBVEUgPSB7XG4gIC8vIGxheWVyc1xuICBsYXllcnM6IFtdLFxuICBsYXllckRhdGE6IFtdLFxuICBsYXllclRvQmVNZXJnZWQ6IFtdLFxuICBsYXllck9yZGVyOiBbXSxcblxuICAvLyBmaWx0ZXJzXG4gIGZpbHRlcnM6IFtdLFxuICBmaWx0ZXJUb0JlTWVyZ2VkOiBbXSxcblxuICAvLyBhIGNvbGxlY3Rpb24gb2YgbXVsdGlwbGUgZGF0YXNldFxuICBkYXRhc2V0czoge30sXG4gIGVkaXRpbmdEYXRhc2V0OiB1bmRlZmluZWQsXG5cbiAgaW50ZXJhY3Rpb25Db25maWc6IGdldERlZmF1bHRJbnRlcmFjdGlvbigpLFxuICBpbnRlcmFjdGlvblRvQmVNZXJnZWQ6IHVuZGVmaW5lZCxcblxuICBsYXllckJsZW5kaW5nOiAnbm9ybWFsJyxcbiAgaG92ZXJJbmZvOiB1bmRlZmluZWQsXG4gIGNsaWNrZWQ6IHVuZGVmaW5lZCxcblxuICAvLyBUT0RPOiBub3QgdXNlZCBhbnl3aGVyZSwgZGVsZXRlIGl0XG4gIGZpbGVMb2FkaW5nOiBmYWxzZSxcbiAgZmlsZUxvYWRpbmdFcnI6IG51bGwsXG5cbiAgLy8gdGhpcyBpcyB1c2VkIHdoZW4gdXNlciBzcGxpdCBtYXBzXG4gIHNwbGl0TWFwczogW1xuICAgIC8vIHRoaXMgd2lsbCBjb250YWluIGEgbGlzdCBvZiBvYmplY3RzIHRvXG4gICAgLy8gZGVzY3JpYmUgdGhlIHN0YXRlIG9mIGxheWVyIGF2YWlsYWJpbGl0eSBhbmQgdmlzaWJpbGl0eSBmb3IgZWFjaCBtYXBcbiAgICAvLyBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGxheWVyczoge1xuICAgIC8vICAgICAgIGxheWVyX2lkOiB7XG4gICAgLy8gICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZXxmYWxzZSAjIHRoaXMgaXMgZHJpdmVuIGJ5IHRoZSBsZWZ0IGhhbmQgcGFuZWxcbiAgICAvLyAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZXxmYWxzZVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgXSxcblxuICAvLyBkZWZhdWx0cyBsYXllciBjbGFzc2VzXG4gIGxheWVyQ2xhc3NlczogTGF5ZXJDbGFzc2VzXG59O1xuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBzdGF0ZS5sYXllcnMubWFwKChseXIsIGkpID0+IChpID09PSBpZHggPyBsYXllciA6IGx5cikpLFxuICAgIGxheWVyRGF0YTogbGF5ZXJEYXRhXG4gICAgICA/IHN0YXRlLmxheWVyRGF0YS5tYXAoKGQsIGkpID0+IChpID09PSBpZHggPyBsYXllckRhdGEgOiBkKSlcbiAgICAgIDogc3RhdGUubGF5ZXJEYXRhXG4gIH07XG59XG5cbiAvKipcbiAgKiBVcGRhdGUgbGF5ZXIgYmFzZSBjb25maWc6IGRhdGFJZCwgbGFiZWwsIGNvbHVtbiwgaXNWaXNpYmxlXG4gICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5vbGRMYXllciBsYXllciB0byBiZSB1cGRhdGVkXG4gICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5uZXdDb25maWcgbmV3IGNvbmZpZ1xuICAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllcn0gPSBhY3Rpb247XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoYWN0aW9uLm5ld0NvbmZpZyk7XG5cbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbmZpZyhhY3Rpb24ubmV3Q29uZmlnKTtcbiAgaWYgKG5ld0xheWVyLnNob3VsZENhbGN1bGF0ZUxheWVyRGF0YShwcm9wcykpIHtcbiAgICBjb25zdCBvbGRMYXllckRhdGEgPSBzdGF0ZS5sYXllckRhdGFbaWR4XTtcbiAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEoXG4gICAgICBuZXdMYXllcixcbiAgICAgIHN0YXRlLFxuICAgICAgb2xkTGF5ZXJEYXRhLFxuICAgICAge3NhbWVEYXRhOiB0cnVlfVxuICAgICk7XG4gICAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgc3BsaXRNYXBzOlxuICAgICAgJ2lzVmlzaWJsZScgaW4gYWN0aW9uLm5ld0NvbmZpZ1xuICAgICAgICA/IHRvZ2dsZUxheWVyRnJvbVNwbGl0TWFwcyhzdGF0ZSwgbmV3TGF5ZXIpXG4gICAgICAgIDogc3RhdGUuc3BsaXRNYXBzXG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShuZXdTdGF0ZSwge2xheWVyOiBuZXdMYXllciwgaWR4fSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIHR5cGUuIFByZXZpZXdzIGxheWVyIGNvbmZpZyB3aWxsIGJlIGNvcGllZCBpZiBhcHBsaWNhYmxlLlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5vbGRMYXllciBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLm5ld1R5cGUgbmV3IHR5cGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUeXBlQ2hhbmdlVXBkYXRlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIGNvbnN0IHtvbGRMYXllciwgbmV3VHlwZX0gPSBhY3Rpb247XG4gIGNvbnN0IG9sZElkID0gb2xkTGF5ZXIuaWQ7XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRJZCk7XG5cbiAgaWYgKCFzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0pIHtcbiAgICBDb25zb2xlLmVycm9yKGAke25ld1R5cGV9IGlzIG5vdCBhIHZhbGlkIGxheWVyIHR5cGVgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvLyBnZXQgYSBtaW50IGxheWVyLCB3aXRoIG5ldyBpZCBhbmQgdHlwZVxuICAvLyBiZWNhdXNlIGRlY2suZ2wgdXNlcyBpZCB0byBtYXRjaCBiZXR3ZWVuIG5ldyBhbmQgb2xkIGxheWVyLlxuICAvLyBJZiB0eXBlIGhhcyBjaGFuZ2VkIGJ1dCBpZCBpcyB0aGUgc2FtZSwgaXQgd2lsbCBicmVha1xuICBjb25zdCBuZXdMYXllciA9IG5ldyBzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0oKTtcblxuICBuZXdMYXllci5hc3NpZ25Db25maWdUb0xheWVyKG9sZExheWVyLmNvbmZpZywgb2xkTGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MpO1xuXG4gIGlmIChuZXdMYXllci5jb25maWcuZGF0YUlkKSB7XG4gICAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW25ld0xheWVyLmNvbmZpZy5kYXRhSWRdO1xuICAgIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKGRhdGFzZXQpO1xuICB9XG5cbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSk7XG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG5cbiAgLy8gdXBkYXRlIHNwbGl0TWFwIGxheWVyIGlkXG4gIGlmIChzdGF0ZS5zcGxpdE1hcHMpIHtcbiAgICBuZXdTdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3BsaXRNYXBzOiBzdGF0ZS5zcGxpdE1hcHMubWFwKHNldHRpbmdzID0+IHtcbiAgICAgICAgY29uc3Qge1tvbGRJZF06IG9sZExheWVyTWFwLCAuLi5vdGhlckxheWVyc30gPSBzZXR0aW5ncy5sYXllcnM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICAgICAgbGF5ZXJzOiB7XG4gICAgICAgICAgICAuLi5vdGhlckxheWVycyxcbiAgICAgICAgICAgIFtsYXllci5pZF06IG9sZExheWVyTWFwXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShuZXdTdGF0ZSwge2xheWVyRGF0YSwgbGF5ZXIsIGlkeH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB2aXN1YWwgY2hhbm5lbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5vbGRMYXllciBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm5ld0NvbmZpZyBuZXcgdmlzdWFsIGNoYW5uZWwgY29uZmlnXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmNoYW5uZWwgY2hhbm5lbCB0byBiZSB1cGRhdGVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVmlzdWFsQ2hhbm5lbENoYW5nZVVwZGF0ZXIoc3RhdGUsIGFjdGlvbikge1xuICBjb25zdCB7b2xkTGF5ZXIsIG5ld0NvbmZpZywgY2hhbm5lbH0gPSBhY3Rpb247XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tvbGRMYXllci5jb25maWcuZGF0YUlkXTtcblxuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKG5ld0NvbmZpZyk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsKGRhdGFzZXQsIGNoYW5uZWwpO1xuXG4gIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEsIHtcbiAgICBzYW1lRGF0YTogdHJ1ZVxuICB9KTtcblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGB2aXNDb25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm9sZExheWVyIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24ubmV3VmlzQ29uZmlnIG5ldyB2aXNDb25maWcgYXMgYSBrZXkgdmFsdWUgbWFwOiBlLmcuIGB7b3BhY2l0eTogMC44fWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge29sZExheWVyfSA9IGFjdGlvbjtcbiAgY29uc3QgaWR4ID0gc3RhdGUubGF5ZXJzLmZpbmRJbmRleChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhhY3Rpb24ubmV3VmlzQ29uZmlnKTtcblxuICBjb25zdCBuZXdWaXNDb25maWcgPSB7XG4gICAgLi4ub2xkTGF5ZXIuY29uZmlnLnZpc0NvbmZpZyxcbiAgICAuLi5hY3Rpb24ubmV3VmlzQ29uZmlnXG4gIH07XG5cbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbmZpZyh7dmlzQ29uZmlnOiBuZXdWaXNDb25maWd9KTtcblxuICBpZiAobmV3TGF5ZXIuc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSkge1xuICAgIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuICAgIGNvbnN0IHtsYXllckRhdGEsIGxheWVyfSA9IGNhbGN1bGF0ZUxheWVyRGF0YShcbiAgICAgIG5ld0xheWVyLFxuICAgICAgc3RhdGUsXG4gICAgICBvbGRMYXllckRhdGEsXG4gICAgICB7c2FtZURhdGE6IHRydWV9XG4gICAgKTtcbiAgICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXI6IG5ld0xheWVyLCBpZHh9KTtcbn1cblxuLyogZXNsaW50LWVuYWJsZSBtYXgtc3RhdGVtZW50cyAqL1xuXG4vKipcbiAqIFVwZGF0ZSBgaW50ZXJhY3Rpb25Db25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmNvbmZpZyBuZXcgY29uZmlnIGFzIGtleSB2YWx1ZSBtYXA6IGB7dG9vbHRpcDoge2VuYWJsZWQ6IHRydWV9fWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2NvbmZpZ30gPSBhY3Rpb247XG5cbiAgY29uc3QgaW50ZXJhY3Rpb25Db25maWcgPSB7XG4gICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWcsXG4gICAgLi4ue1tjb25maWcuaWRdOiBjb25maWd9XG4gIH07XG5cbiAgaWYgKGNvbmZpZy5lbmFibGVkICYmICFzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZ1tjb25maWcuaWRdLmVuYWJsZWQpIHtcbiAgICAvLyBvbmx5IGVuYWJsZSBvbmUgaW50ZXJhY3Rpb24gYXQgYSB0aW1lXG4gICAgT2JqZWN0LmtleXMoaW50ZXJhY3Rpb25Db25maWcpLmZvckVhY2goayA9PiB7XG4gICAgICBpZiAoayAhPT0gY29uZmlnLmlkKSB7XG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnW2tdID0gey4uLmludGVyYWN0aW9uQ29uZmlnW2tdLCBlbmFibGVkOiBmYWxzZX07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnXG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHggYGlkeGAgb2YgZmlsdGVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ucHJvcCBgcHJvcGAgb2YgZmlsdGVyLCBlLGcsIGBkYXRhSWRgLCBgbmFtZWAsIGB2YWx1ZWBcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uLnZhbHVlIG5ldyB2YWx1ZVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCBhY3Rpb24pIHtcbiAgY29uc3Qge2lkeCwgcHJvcCwgdmFsdWV9ID0gYWN0aW9uO1xuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZTtcbiAgbGV0IG5ld0ZpbHRlciA9IHtcbiAgICAuLi5zdGF0ZS5maWx0ZXJzW2lkeF0sXG4gICAgW3Byb3BdOiB2YWx1ZVxuICB9O1xuXG4gIGNvbnN0IHtkYXRhSWR9ID0gbmV3RmlsdGVyO1xuICBpZiAoIWRhdGFJZCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCB7ZmllbGRzLCBhbGxEYXRhfSA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XG5cbiAgc3dpdGNoIChwcm9wKSB7XG4gICAgY2FzZSAnZGF0YUlkJzpcbiAgICAgIC8vIGlmIHRyeWluZyB0byB1cGRhdGUgZmlsdGVyIGRhdGFJZC4gY3JlYXRlIGFuIGVtcHR5IG5ldyBmaWx0ZXJcbiAgICAgIG5ld0ZpbHRlciA9IGdldERlZmF1bHRGaWx0ZXIoZGF0YUlkKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbmFtZSc6XG4gICAgICAvLyBmaW5kIHRoZSBmaWVsZFxuICAgICAgY29uc3QgZmllbGRJZHggPSBmaWVsZHMuZmluZEluZGV4KGYgPT4gZi5uYW1lID09PSB2YWx1ZSk7XG4gICAgICBsZXQgZmllbGQgPSBmaWVsZHNbZmllbGRJZHhdO1xuXG4gICAgICBpZiAoIWZpZWxkLmZpbHRlclByb3ApIHtcbiAgICAgICAgLy8gZ2V0IGZpbHRlciBkb21haW4gZnJvbSBmaWVsZFxuICAgICAgICAvLyBzYXZlIGZpbHRlclByb3BzOiB7ZG9tYWluLCBzdGVwcywgdmFsdWV9IHRvIGZpZWxkLCBhdm9pZCByZWNhbGN1bGF0ZVxuICAgICAgICBmaWVsZCA9IHtcbiAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICBmaWx0ZXJQcm9wOiBnZXRGaWx0ZXJQcm9wcyhhbGxEYXRhLCBmaWVsZClcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgbmV3RmlsdGVyID0ge1xuICAgICAgICAuLi5uZXdGaWx0ZXIsXG4gICAgICAgIC4uLmZpZWxkLmZpbHRlclByb3AsXG4gICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgIC8vIGNhbid0IGVkaXQgZGF0YUlkIG9uY2UgbmFtZSBpcyBzZWxlY3RlZFxuICAgICAgICBmcmVlemU6IHRydWUsXG4gICAgICAgIGZpZWxkSWR4XG4gICAgICB9O1xuICAgICAgY29uc3QgZW5sYXJnZWRGaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmID0+IGYuZW5sYXJnZWQpO1xuICAgICAgaWYgKGVubGFyZ2VkRmlsdGVySWR4ID4gLTEgJiYgZW5sYXJnZWRGaWx0ZXJJZHggIT09IGlkeCkge1xuICAgICAgICAvLyB0aGVyZSBzaG91bGQgYmUgb25seSBvbmUgZW5sYXJnZWQgZmlsdGVyXG4gICAgICAgIG5ld0ZpbHRlci5lbmxhcmdlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGRhdGFzZXRzOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZGF0YXNldHMsXG4gICAgICAgICAgW2RhdGFJZF06IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmRhdGFzZXRzW2RhdGFJZF0sXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkcy5tYXAoKGQsIGkpID0+IChpID09PSBmaWVsZElkeCA/IGZpZWxkIDogZCkpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndmFsdWUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIHNhdmUgbmV3IGZpbHRlcnMgdG8gbmV3U3RhdGVcbiAgbmV3U3RhdGUgPSB7XG4gICAgLi4ubmV3U3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBpZHggPyBuZXdGaWx0ZXIgOiBmKSlcbiAgfTtcblxuICAvLyBmaWx0ZXIgZGF0YVxuICBuZXdTdGF0ZSA9IHtcbiAgICAuLi5uZXdTdGF0ZSxcbiAgICBkYXRhc2V0czoge1xuICAgICAgLi4ubmV3U3RhdGUuZGF0YXNldHMsXG4gICAgICBbZGF0YUlkXToge1xuICAgICAgICAuLi5uZXdTdGF0ZS5kYXRhc2V0c1tkYXRhSWRdLFxuICAgICAgICAuLi5maWx0ZXJEYXRhKGFsbERhdGEsIGRhdGFJZCwgbmV3U3RhdGUuZmlsdGVycylcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgbmV3U3RhdGUgPSB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobmV3U3RhdGUsIGRhdGFJZCwgbmV3RmlsdGVyKTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogU2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGZpbHRlciBwbG90XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5uZXdQcm9wIGtleSB2YWx1ZSBtYXBwaW5nIG9mIG5ldyBwcm9wIGB7eUF4aXM6ICdoaXN0b2dyYW0nfWBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RmlsdGVyUGxvdFVwZGF0ZXIgPSAoc3RhdGUsIHtpZHgsIG5ld1Byb3B9KSA9PiB7XG4gIGxldCBuZXdGaWx0ZXIgPSB7Li4uc3RhdGUuZmlsdGVyc1tpZHhdLCAuLi5uZXdQcm9wfTtcbiAgY29uc3QgcHJvcCA9IE9iamVjdC5rZXlzKG5ld1Byb3ApWzBdO1xuICBpZiAocHJvcCA9PT0gJ3lBeGlzJykge1xuICAgIGNvbnN0IHBsb3RUeXBlID0gZ2V0RGVmYXVsdEZpbHRlclBsb3RUeXBlKG5ld0ZpbHRlcik7XG5cbiAgICBpZiAocGxvdFR5cGUpIHtcbiAgICAgIG5ld0ZpbHRlciA9IHtcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxuICAgICAgICAuLi5nZXRGaWx0ZXJQbG90KFxuICAgICAgICAgIHsuLi5uZXdGaWx0ZXIsIHBsb3RUeXBlfSxcbiAgICAgICAgICBzdGF0ZS5kYXRhc2V0c1tuZXdGaWx0ZXIuZGF0YUlkXS5hbGxEYXRhXG4gICAgICAgICksXG4gICAgICAgIHBsb3RUeXBlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBpZHggPyBuZXdGaWx0ZXIgOiBmKSlcbiAgfTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5kYXRhSWQgZGF0YXNldCBgaWRgIHRoaXMgbmV3IGZpbHRlciBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYWRkRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PlxuICAhYWN0aW9uLmRhdGFJZFxuICAgID8gc3RhdGVcbiAgICA6IHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlcnM6IFsuLi5zdGF0ZS5maWx0ZXJzLCBnZXREZWZhdWx0RmlsdGVyKGFjdGlvbi5kYXRhSWQpXVxuICAgICAgfTtcblxuLyoqXG4gKiBTdGFydCBhbmQgZW5kIGZpbHRlciBhbmltYXRpb25cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBhY3Rpb24uaWR4IGlkeCBvZiBmaWx0ZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoXG4gICAgKGYsIGkpID0+IChpID09PSBhY3Rpb24uaWR4ID8gey4uLmYsIGlzQW5pbWF0aW5nOiAhZi5pc0FuaW1hdGluZ30gOiBmKVxuICApXG59KTtcblxuLyoqXG4gKiBDaGFuZ2UgZmlsdGVyIGFuaW1hdGlvbiBzcGVlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5pZHggIGBpZHhgIG9mIGZpbHRlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFjdGlvbi5zcGVlZCBgc3BlZWRgIHRvIGNoYW5nZSBpdCB0by4gYHNwZWVkYCBpcyBhIG11bHRpcGxpZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXBkYXRlQW5pbWF0aW9uU3BlZWRVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBmaWx0ZXJzOiBzdGF0ZS5maWx0ZXJzLm1hcChcbiAgICAoZiwgaSkgPT4gKGkgPT09IGFjdGlvbi5pZHggPyB7Li4uZiwgc3BlZWQ6IGFjdGlvbi5zcGVlZH0gOiBmKVxuICApXG59KTtcblxuLyoqXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeCBpbmRleCBvZiBmaWx0ZXIgdG8gZW5sYXJnZVxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBlbmxhcmdlRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGlzRW5sYXJnZWQgPSBzdGF0ZS5maWx0ZXJzW2FjdGlvbi5pZHhdLmVubGFyZ2VkO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IHtcbiAgICAgIGYuZW5sYXJnZWQgPSAhaXNFbmxhcmdlZCAmJiBpID09PSBhY3Rpb24uaWR4O1xuICAgICAgcmV0dXJuIGY7XG4gICAgfSlcbiAgfTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeCBpbmRleCBvZiBmaWx0ZXIgdG8gYiBlIHJlbW92ZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRmlsdGVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtpZHh9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YUlkfSA9IHN0YXRlLmZpbHRlcnNbaWR4XTtcblxuICBjb25zdCBuZXdGaWx0ZXJzID0gW1xuICAgIC4uLnN0YXRlLmZpbHRlcnMuc2xpY2UoMCwgaWR4KSxcbiAgICAuLi5zdGF0ZS5maWx0ZXJzLnNsaWNlKGlkeCArIDEsIHN0YXRlLmZpbHRlcnMubGVuZ3RoKVxuICBdO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGRhdGFzZXRzOiB7XG4gICAgICAuLi5zdGF0ZS5kYXRhc2V0cyxcbiAgICAgIFtkYXRhSWRdOiB7XG4gICAgICAgIC4uLnN0YXRlLmRhdGFzZXRzW2RhdGFJZF0sXG4gICAgICAgIC4uLmZpbHRlckRhdGEoc3RhdGUuZGF0YXNldHNbZGF0YUlkXS5hbGxEYXRhLCBkYXRhSWQsIG5ld0ZpbHRlcnMpXG4gICAgICB9XG4gICAgfSxcbiAgICBmaWx0ZXJzOiBuZXdGaWx0ZXJzXG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShuZXdTdGF0ZSwgZGF0YUlkKTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnByb3BzIC0gbmV3IGxheWVyIHByb3BzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZExheWVyVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IGRlZmF1bHREYXRhc2V0ID0gT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldHMpWzBdO1xuICBjb25zdCBuZXdMYXllciA9IG5ldyBMYXllcih7XG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGlzQ29uZmlnQWN0aXZlOiB0cnVlLFxuICAgIGRhdGFJZDogZGVmYXVsdERhdGFzZXQsXG4gICAgLi4uYWN0aW9uLnByb3BzXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBbLi4uc3RhdGUubGF5ZXJzLCBuZXdMYXllcl0sXG4gICAgbGF5ZXJEYXRhOiBbLi4uc3RhdGUubGF5ZXJEYXRhLCB7fV0sXG4gICAgbGF5ZXJPcmRlcjogWy4uLnN0YXRlLmxheWVyT3JkZXIsIHN0YXRlLmxheWVyT3JkZXIubGVuZ3RoXSxcbiAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAoc3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcilcbiAgfTtcbn07XG5cbi8qKlxuICogcmVtb3ZlIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLmlkeCBpbmRleCBvZiBsYXllciB0byBiIGUgcmVtb3ZlZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVMYXllclVwZGF0ZXIgPSAoc3RhdGUsIHtpZHh9KSA9PiB7XG4gIGNvbnN0IHtsYXllcnMsIGxheWVyRGF0YSwgY2xpY2tlZCwgaG92ZXJJbmZvfSA9IHN0YXRlO1xuICBjb25zdCBsYXllclRvUmVtb3ZlID0gc3RhdGUubGF5ZXJzW2lkeF07XG4gIGNvbnN0IG5ld01hcHMgPSByZW1vdmVMYXllckZyb21TcGxpdE1hcHMoc3RhdGUsIGxheWVyVG9SZW1vdmUpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBbLi4ubGF5ZXJzLnNsaWNlKDAsIGlkeCksIC4uLmxheWVycy5zbGljZShpZHggKyAxLCBsYXllcnMubGVuZ3RoKV0sXG4gICAgbGF5ZXJEYXRhOiBbXG4gICAgICAuLi5sYXllckRhdGEuc2xpY2UoMCwgaWR4KSxcbiAgICAgIC4uLmxheWVyRGF0YS5zbGljZShpZHggKyAxLCBsYXllckRhdGEubGVuZ3RoKVxuICAgIF0sXG4gICAgbGF5ZXJPcmRlcjogc3RhdGUubGF5ZXJPcmRlclxuICAgICAgLmZpbHRlcihpID0+IGkgIT09IGlkeClcbiAgICAgIC5tYXAocGlkID0+IChwaWQgPiBpZHggPyBwaWQgLSAxIDogcGlkKSksXG4gICAgY2xpY2tlZDogbGF5ZXJUb1JlbW92ZS5pc0xheWVySG92ZXJlZChjbGlja2VkKSA/IHVuZGVmaW5lZCA6IGNsaWNrZWQsXG4gICAgaG92ZXJJbmZvOiBsYXllclRvUmVtb3ZlLmlzTGF5ZXJIb3ZlcmVkKGhvdmVySW5mbykgPyB1bmRlZmluZWQgOiBob3ZlckluZm8sXG4gICAgc3BsaXRNYXBzOiBuZXdNYXBzXG4gIH07XG59O1xuXG4vKipcbiAqIFJlb3JkZXIgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXk8TnVtYmVyPn0gYWN0aW9uLm9yZGVyIGFuIGFycmF5IG9mIGxheWVyIGluZGV4ZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVvcmRlckxheWVyVXBkYXRlciA9IChzdGF0ZSwge29yZGVyfSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxheWVyT3JkZXI6IG9yZGVyXG59KTtcblxuLyoqXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5rZXkgZGF0YXNldCBpZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVEYXRhc2V0VXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vIGV4dHJhY3QgZGF0YXNldCBrZXlcbiAgY29uc3Qge2tleTogZGF0YXNldEtleX0gPSBhY3Rpb247XG4gIGNvbnN0IHtkYXRhc2V0c30gPSBzdGF0ZTtcblxuICAvLyBjaGVjayBpZiBkYXRhc2V0IGlzIHByZXNlbnRcbiAgaWYgKCFkYXRhc2V0c1tkYXRhc2V0S2V5XSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gIGNvbnN0IHtcbiAgICBsYXllcnMsXG4gICAgZGF0YXNldHM6IHtbZGF0YXNldEtleV06IGRhdGFzZXQsIC4uLm5ld0RhdGFzZXRzfVxuICB9ID0gc3RhdGU7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICBjb25zdCBpbmRleGVzID0gbGF5ZXJzLnJlZHVjZSgobGlzdE9mSW5kZXhlcywgbGF5ZXIsIGluZGV4KSA9PiB7XG4gICAgaWYgKGxheWVyLmNvbmZpZy5kYXRhSWQgPT09IGRhdGFzZXRLZXkpIHtcbiAgICAgIGxpc3RPZkluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0T2ZJbmRleGVzO1xuICB9LCBbXSk7XG5cbiAgLy8gcmVtb3ZlIGxheWVycyBhbmQgZGF0YXNldHNcbiAgY29uc3Qge25ld1N0YXRlfSA9IGluZGV4ZXMucmVkdWNlKFxuICAgICh7bmV3U3RhdGU6IGN1cnJlbnRTdGF0ZSwgaW5kZXhDb3VudGVyfSwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBpZHggLSBpbmRleENvdW50ZXI7XG4gICAgICBjdXJyZW50U3RhdGUgPSByZW1vdmVMYXllclVwZGF0ZXIoY3VycmVudFN0YXRlLCB7aWR4OiBjdXJyZW50SW5kZXh9KTtcbiAgICAgIGluZGV4Q291bnRlcisrO1xuICAgICAgcmV0dXJuIHtuZXdTdGF0ZTogY3VycmVudFN0YXRlLCBpbmRleENvdW50ZXJ9O1xuICAgIH0sXG4gICAge25ld1N0YXRlOiB7Li4uc3RhdGUsIGRhdGFzZXRzOiBuZXdEYXRhc2V0c30sIGluZGV4Q291bnRlcjogMH1cbiAgKTtcblxuICAvLyByZW1vdmUgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJzID0gc3RhdGUuZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+IGZpbHRlci5kYXRhSWQgIT09IGRhdGFzZXRLZXkpO1xuXG4gIC8vIHVwZGF0ZSBpbnRlcmFjdGlvbkNvbmZpZ1xuICBsZXQge2ludGVyYWN0aW9uQ29uZmlnfSA9IHN0YXRlO1xuICBjb25zdCB7dG9vbHRpcH0gPSBpbnRlcmFjdGlvbkNvbmZpZztcbiAgaWYgKHRvb2x0aXApIHtcbiAgICBjb25zdCB7Y29uZmlnfSA9IHRvb2x0aXA7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7W2RhdGFzZXRLZXldOiBmaWVsZHMsIC4uLmZpZWxkc1RvU2hvd30gPSBjb25maWcuZmllbGRzVG9TaG93O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBpbnRlcmFjdGlvbkNvbmZpZyA9IHtcbiAgICAgIC4uLmludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgdG9vbHRpcDogey4uLnRvb2x0aXAsIGNvbmZpZzogey4uLmNvbmZpZywgZmllbGRzVG9TaG93fX1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsuLi5uZXdTdGF0ZSwgZmlsdGVycywgaW50ZXJhY3Rpb25Db25maWd9O1xufTtcblxuLyoqXG4gKiB1cGRhdGUgbGF5ZXIgYmxlbmRpbmcgbW9kZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbi5tb2RlIG9uZSBvZiBgYWRkaXRpdmVgLCBgbm9ybWFsYCBhbmQgYHN1YnRyYWN0aXZlYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVMYXllckJsZW5kaW5nVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbGF5ZXJCbGVuZGluZzogYWN0aW9uLm1vZGVcbn0pO1xuXG4vKipcbiAqIERpc3BsYXkgZGF0YXNldCB0YWJsZSBpbiBhIG1vZGFsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFJZCBkYXRhc2V0IGlkIHRvIHNob3cgaW4gdGFibGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRpbmdEYXRhc2V0OiBhY3Rpb24uZGF0YUlkXG4gIH07XG59O1xuXG4vKipcbiAqIHJlc2V0IHZpc1N0YXRlIHRvIGluaXRpYWwgU3RhdGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZXNldE1hcENvbmZpZ1Zpc1N0YXRlVXBkYXRlciA9IChzdGF0ZSkgPT4gKHtcbiAgLi4uSU5JVElBTF9WSVNfU1RBVEUsXG4gIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcbiAgaW5pdGlhbFN0YXRlOiBzdGF0ZS5pbml0aWFsU3RhdGVcbn0pO1xuXG4vKipcbiAqIFByb3BhZ2F0ZSBgdmlzU3RhdGVgIHJlZHVjZXIgd2l0aCBhIG5ldyBjb25maWd1cmF0aW9uLiBDdXJyZW50IGNvbmZpZyB3aWxsIGJlIG92ZXJyaWRlLlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5wYXlsb2FkIG1hcCBjb25maWcgdG8gYmUgcHJvcGFnYXRlZFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGlmICghYWN0aW9uLnBheWxvYWQudmlzU3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCB7XG4gICAgZmlsdGVycyxcbiAgICBsYXllcnMsXG4gICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgbGF5ZXJCbGVuZGluZyxcbiAgICBzcGxpdE1hcHNcbiAgfSA9IGFjdGlvbi5wYXlsb2FkLnZpc1N0YXRlO1xuXG4gIC8vIGFsd2F5cyByZXNldCBjb25maWcgd2hlbiByZWNlaXZlIGEgbmV3IGNvbmZpZ1xuICBjb25zdCByZXNldFN0YXRlID0gcmVzZXRNYXBDb25maWdWaXNTdGF0ZVVwZGF0ZXIoc3RhdGUpO1xuICBsZXQgbWVyZ2VkU3RhdGUgPSB7XG4gICAgLi4ucmVzZXRTdGF0ZSxcbiAgICBzcGxpdE1hcHM6IHNwbGl0TWFwcyB8fCBbXSAvLyBtYXBzIGRvZXNuJ3QgcmVxdWlyZSBhbnkgbG9naWNcbiAgfTtcblxuICBtZXJnZWRTdGF0ZSA9IG1lcmdlRmlsdGVycyhtZXJnZWRTdGF0ZSwgZmlsdGVycyk7XG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VMYXllcnMobWVyZ2VkU3RhdGUsIGxheWVycyk7XG4gIG1lcmdlZFN0YXRlID0gbWVyZ2VJbnRlcmFjdGlvbnMobWVyZ2VkU3RhdGUsIGludGVyYWN0aW9uQ29uZmlnKTtcbiAgbWVyZ2VkU3RhdGUgPSBtZXJnZUxheWVyQmxlbmRpbmcobWVyZ2VkU3RhdGUsIGxheWVyQmxlbmRpbmcpO1xuXG4gIHJldHVybiBtZXJnZWRTdGF0ZTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmluZm8gT2JqZWN0IGhvdmVyZWQsIHJldHVybmVkIGJ5IGRlY2suZ2xcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbGF5ZXJIb3ZlclVwZGF0ZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGhvdmVySW5mbzogYWN0aW9uLmluZm9cbn0pO1xuXG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbi5pbmZvIE9iamVjdCBjbGlja2VkLCByZXR1cm5lZCBieSBkZWNrLmdsXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxheWVyQ2xpY2tVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBjbGlja2VkOiBhY3Rpb24uaW5mbyAmJiBhY3Rpb24uaW5mby5waWNrZWQgPyBhY3Rpb24uaW5mbyA6IG51bGxcbn0pO1xuXG4vKipcbiAqIFRyaWdnZXIgbWFwIGNsaWNrIGV2ZW50LCB1bnNlbGVjdCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcENsaWNrVXBkYXRlciA9IChzdGF0ZSkgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGNsaWNrZWQ6IG51bGxcbn0pO1xuXG4vKipcbiAqIFRvZ2dsZSB2aXNpYmlsaXR5IG9mIGEgbGF5ZXIgZm9yIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcnx1bmRlZmluZWR9IGFjdGlvbi5wYXlsb2FkIGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+XG4gIHN0YXRlLnNwbGl0TWFwcyAmJiBzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoID09PSAwXG4gICAgPyB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyBtYXliZSB3ZSBzaG91bGQgdXNlIGFuIGFycmF5IHRvIHN0b3JlIHN0YXRlIGZvciBhIHNpbmdsZSBtYXAgYXMgd2VsbFxuICAgICAgICAvLyBpZiBjdXJyZW50IG1hcHMgbGVuZ3RoIGlzIGVxdWFsIHRvIDAgaXQgbWVhbnMgdGhhdCB3ZSBhcmUgYWJvdXQgdG8gc3BsaXQgdGhlIHZpZXdcbiAgICAgICAgc3BsaXRNYXBzOiBjb21wdXRlU3BsaXRNYXBMYXllcnMoc3RhdGUubGF5ZXJzKVxuICAgICAgfVxuICAgIDogY2xvc2VTcGVjaWZpY01hcEF0SW5kZXgoc3RhdGUsIGFjdGlvbik7XG5cbi8qKlxuICogU2V0IGxheWVycyB0byBiZSB2aXNpYmxlIGluIHNwbGl0IG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IG1hcEluZGV4IGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gbGF5ZXJJZHMgYXJyYXkgb2YgbGF5ZXIgaWRzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFZpc2libGVMYXllcnNGb3JNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3Qge21hcEluZGV4LCBsYXllcklkc30gPSBhY3Rpb247XG4gIGlmICghbGF5ZXJJZHMpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCB7c3BsaXRNYXBzID0gW119ID0gc3RhdGU7XG5cbiAgaWYgKHNwbGl0TWFwcy5sZW5ndGggPT09IDApIHtcbiAgICAvLyB3ZSBzaG91bGQgbmV2ZXIgZ2V0IGludG8gdGhpcyBzdGF0ZVxuICAgIC8vIGJlY2F1c2UgdGhpcyBhY3Rpb24gc2hvdWxkIG9ubHkgYmUgdHJpZ2dlcmVkXG4gICAgLy8gd2hlbiBtYXAgdmlldyBpcyBzcGxpdFxuICAgIC8vIGJ1dCBzb21ldGhpbmcgbWF5IGhhdmUgaGFwcGVuZWRcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvLyBuZWVkIHRvIGNoZWNrIGlmIG1hcHMgaXMgcG9wdWxhdGVkIG90aGVyd2lzZSB3aWxsIGNyZWF0ZVxuICBjb25zdCB7W21hcEluZGV4XTogbWFwID0ge319ID0gc3BsaXRNYXBzO1xuXG4gIGNvbnN0IGxheWVycyA9IG1hcC5sYXllcnMgfHwgW107XG5cbiAgLy8gd2Ugc2V0IHZpc2liaWxpdHkgdG8gdHJ1ZSBmb3IgYWxsIGxheWVycyBpbmNsdWRlZCBpbiBvdXIgaW5wdXQgbGlzdFxuICBjb25zdCBuZXdMYXllcnMgPSAoT2JqZWN0LmtleXMobGF5ZXJzKSB8fCBbXSkucmVkdWNlKChjdXJyZW50TGF5ZXJzLCBpZHgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY3VycmVudExheWVycyxcbiAgICAgIFtpZHhdOiB7XG4gICAgICAgIC4uLmxheWVyc1tpZHhdLFxuICAgICAgICBpc1Zpc2libGU6IGxheWVySWRzLmluY2x1ZGVzKGlkeClcbiAgICAgIH1cbiAgICB9O1xuICB9LCB7fSk7XG5cbiAgY29uc3QgbmV3TWFwcyA9IFsuLi5zcGxpdE1hcHNdO1xuXG4gIG5ld01hcHNbbWFwSW5kZXhdID0ge1xuICAgIC4uLnNwbGl0TWFwc1ttYXBJbmRleF0sXG4gICAgbGF5ZXJzOiBuZXdMYXllcnNcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNwbGl0TWFwczogbmV3TWFwc1xuICB9O1xufTtcblxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gYWN0aW9uLm1hcEluZGV4IGluZGV4IG9mIHRoZSBzcGxpdCBtYXBcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb24ubGF5ZXJJZCBpZCBvZiB0aGUgbGF5ZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgaWYgKCFzdGF0ZS5zcGxpdE1hcHNbYWN0aW9uLm1hcEluZGV4XSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG1hcFNldHRpbmdzID0gc3RhdGUuc3BsaXRNYXBzW2FjdGlvbi5tYXBJbmRleF07XG4gIGNvbnN0IHtsYXllcnN9ID0gbWFwU2V0dGluZ3M7XG4gIGlmICghbGF5ZXJzIHx8ICFsYXllcnNbYWN0aW9uLmxheWVySWRdKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbGF5ZXIgPSBsYXllcnNbYWN0aW9uLmxheWVySWRdO1xuXG4gIGNvbnN0IG5ld0xheWVyID0ge1xuICAgIC4uLmxheWVyLFxuICAgIGlzVmlzaWJsZTogIWxheWVyLmlzVmlzaWJsZVxuICB9O1xuXG4gIGNvbnN0IG5ld0xheWVycyA9IHtcbiAgICAuLi5sYXllcnMsXG4gICAgW2FjdGlvbi5sYXllcklkXTogbmV3TGF5ZXJcbiAgfTtcblxuICBjb25zdCBuZXdTcGxpdE1hcHMgPSBbLi4uc3RhdGUuc3BsaXRNYXBzXTtcbiAgbmV3U3BsaXRNYXBzW2FjdGlvbi5tYXBJbmRleF0gPSB7XG4gICAgLi4ubWFwU2V0dGluZ3MsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnNcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNwbGl0TWFwczogbmV3U3BsaXRNYXBzXG4gIH07XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fE9iamVjdH0gYWN0aW9uLmRhdGFzZXRzIC0gKioqcmVxdWlyZWQqKiBkYXRhc2V0cyBjYW4gYmUgYSBkYXRhc2V0IG9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXG4gKiBFYWNoIGRhdGFzZXQgb2JqZWN0IG5lZWRzIHRvIGhhdmUgYGluZm9gIGFuZCBgZGF0YWAgcHJvcGVydHkuXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmRhdGFzZXRzLmluZm8gLWluZm8gb2YgYSBkYXRhc2V0XG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFzZXRzLmluZm8uaWQgLSBpZCBvZiB0aGlzIGRhdGFzZXQuIElmIGNvbmZpZyBpcyBkZWZpbmVkLCBgaWRgIHNob3VsZCBtYXRjaGVzIHRoZSBgZGF0YUlkYCBpbiBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFzZXRzLmluZm8ubGFiZWwgLSBBIGRpc3BsYXkgbmFtZSBvZiB0aGlzIGRhdGFzZXRcbiAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24uZGF0YXNldHMuZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gYWN0aW9uLmRhdGFzZXRzLmRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXG4gKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uLmRhdGFzZXRzLmRhdGEuZmllbGRzLm5hbWUgLSAqKipyZXF1aXJlZCoqIE5hbWUgb2YgdGhlIGZpZWxkLFxuICogQHBhcmFtIHtBcnJheTxBcnJheT59IGFjdGlvbi5kYXRhc2V0cy5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLm9wdGlvbnMgb3B0aW9uIG9iamVjdCBge2NlbnRlck1hcDogdHJ1ZX1gXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLmNvbmZpZyBtYXAgY29uZmlnXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbWF4LXN0YXRlbWVudHMgKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVWaXNEYXRhVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIC8vIGRhdGFzZXRzIGNhbiBiZSBhIHNpbmdsZSBkYXRhIGVudHJpZXMgb3IgYW4gYXJyYXkgb2YgbXVsdGlwbGUgZGF0YSBlbnRyaWVzXG4gIGNvbnN0IGRhdGFzZXRzID0gQXJyYXkuaXNBcnJheShhY3Rpb24uZGF0YXNldHMpXG4gICAgPyBhY3Rpb24uZGF0YXNldHNcbiAgICA6IFthY3Rpb24uZGF0YXNldHNdO1xuXG4gIGlmIChhY3Rpb24uY29uZmlnKSB7XG4gICAgLy8gYXBwbHkgY29uZmlnIGlmIHBhc3NlZCBmcm9tIGFjdGlvblxuICAgIHN0YXRlID0gcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUsIHtcbiAgICAgIHBheWxvYWQ6IHt2aXNTdGF0ZTogYWN0aW9uLmNvbmZpZ31cbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IG5ld0RhdGVFbnRyaWVzID0gZGF0YXNldHMucmVkdWNlKFxuICAgIChhY2N1LCB7aW5mbyA9IHt9LCBkYXRhfSkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICAuLi4oY3JlYXRlTmV3RGF0YUVudHJ5KHtpbmZvLCBkYXRhfSwgc3RhdGUuZGF0YXNldHMpIHx8IHt9KVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG5cbiAgaWYgKCFPYmplY3Qua2V5cyhuZXdEYXRlRW50cmllcykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3Qgc3RhdGVXaXRoTmV3RGF0YSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBkYXRhc2V0czoge1xuICAgICAgLi4uc3RhdGUuZGF0YXNldHMsXG4gICAgICAuLi5uZXdEYXRlRW50cmllc1xuICAgIH1cbiAgfTtcblxuICAvLyBwcmV2aW91c2x5IHNhdmVkIGNvbmZpZyBiZWZvcmUgZGF0YSBsb2FkZWRcbiAgY29uc3Qge1xuICAgIGZpbHRlclRvQmVNZXJnZWQgPSBbXSxcbiAgICBsYXllclRvQmVNZXJnZWQgPSBbXSxcbiAgICBpbnRlcmFjdGlvblRvQmVNZXJnZWQgPSB7fVxuICB9ID0gc3RhdGVXaXRoTmV3RGF0YTtcblxuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIHNhdmVkIGZpbHRlcnNcbiAgbGV0IG1lcmdlZFN0YXRlID0gbWVyZ2VGaWx0ZXJzKHN0YXRlV2l0aE5ld0RhdGEsIGZpbHRlclRvQmVNZXJnZWQpO1xuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIHNhdmVkIGxheWVyc1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlTGF5ZXJzKG1lcmdlZFN0YXRlLCBsYXllclRvQmVNZXJnZWQpO1xuXG4gIGlmIChtZXJnZWRTdGF0ZS5sYXllcnMubGVuZ3RoID09PSBzdGF0ZS5sYXllcnMubGVuZ3RoKSB7XG4gICAgLy8gbm8gbGF5ZXIgbWVyZ2VkLCBmaW5kIGRlZmF1bHRzXG4gICAgbWVyZ2VkU3RhdGUgPSBhZGREZWZhdWx0TGF5ZXJzKG1lcmdlZFN0YXRlLCBuZXdEYXRlRW50cmllcyk7XG4gIH1cblxuICBpZiAobWVyZ2VkU3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIGNvbnN0IG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLmxheWVycy5maWx0ZXIoXG4gICAgICBsID0+IGwuY29uZmlnLmRhdGFJZCBpbiBuZXdEYXRlRW50cmllc1xuICAgICk7XG4gICAgLy8gaWYgbWFwIGlzIHNwbGl0LCBhZGQgbmV3IGxheWVycyB0byBzcGxpdE1hcHNcbiAgICBtZXJnZWRTdGF0ZSA9IHtcbiAgICAgIC4uLm1lcmdlZFN0YXRlLFxuICAgICAgc3BsaXRNYXBzOiBhZGROZXdMYXllcnNUb1NwbGl0TWFwKG1lcmdlZFN0YXRlLnNwbGl0TWFwcywgbmV3TGF5ZXJzKVxuICAgIH07XG4gIH1cblxuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIHNhdmVkIGludGVyYWN0aW9uc1xuICBtZXJnZWRTdGF0ZSA9IG1lcmdlSW50ZXJhY3Rpb25zKG1lcmdlZFN0YXRlLCBpbnRlcmFjdGlvblRvQmVNZXJnZWQpO1xuXG4gIC8vIGlmIG5vIHRvb2x0aXBzIG1lcmdlZCBhZGQgZGVmYXVsdCB0b29sdGlwc1xuICBPYmplY3Qua2V5cyhuZXdEYXRlRW50cmllcykuZm9yRWFjaChkYXRhSWQgPT4ge1xuICAgIGNvbnN0IHRvb2x0aXBGaWVsZHMgPVxuICAgICAgbWVyZ2VkU3RhdGUuaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF07XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRvb2x0aXBGaWVsZHMpIHx8ICF0b29sdGlwRmllbGRzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkU3RhdGUgPSBhZGREZWZhdWx0VG9vbHRpcHMobWVyZ2VkU3RhdGUsIG5ld0RhdGVFbnRyaWVzW2RhdGFJZF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShtZXJnZWRTdGF0ZSwgT2JqZWN0LmtleXMobmV3RGF0ZUVudHJpZXMpKTtcbn07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1zdGF0ZW1lbnRzICovXG5cbmZ1bmN0aW9uIGdlbmVyYXRlTGF5ZXJNZXRhRm9yU3BsaXRWaWV3cyhsYXllcikge1xuICByZXR1cm4ge1xuICAgIGlzQXZhaWxhYmxlOiBsYXllci5jb25maWcuaXNWaXNpYmxlLFxuICAgIGlzVmlzaWJsZTogbGF5ZXIuY29uZmlnLmlzVmlzaWJsZVxuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgY29tcHV0ZSB0aGUgZGVmYXVsdCBtYXBzIGN1c3RvbSBsaXN0XG4gKiBiYXNlZCBvbiB0aGUgY3VycmVudCBsYXllcnMgc3RhdHVzXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGxheWVyc1xuICogQHJldHVybnMge0FycmF5PE9iamVjdD59IHNwbGl0IG1hcCBzZXR0aW5nc1xuICovXG5mdW5jdGlvbiBjb21wdXRlU3BsaXRNYXBMYXllcnMobGF5ZXJzKSB7XG4gIGNvbnN0IG1hcExheWVycyA9IGxheWVycy5yZWR1Y2UoXG4gICAgKG5ld0xheWVycywgY3VycmVudExheWVyKSA9PiAoe1xuICAgICAgLi4ubmV3TGF5ZXJzLFxuICAgICAgW2N1cnJlbnRMYXllci5pZF06IGdlbmVyYXRlTGF5ZXJNZXRhRm9yU3BsaXRWaWV3cyhjdXJyZW50TGF5ZXIpXG4gICAgfSksXG4gICAge31cbiAgKTtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBsYXllcnM6IG1hcExheWVyc1xuICAgIH0sXG4gICAge1xuICAgICAgbGF5ZXJzOiBtYXBMYXllcnNcbiAgICB9XG4gIF07XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGV4aXN0aW5nIGxheWVyIGZyb20gc3BsaXQgbWFwIHNldHRpbmdzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGxheWVyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBNYXBzIG9mIGN1c3RvbSBsYXllciBvYmplY3RzXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwcyhzdGF0ZSwgbGF5ZXIpIHtcbiAgcmV0dXJuIHN0YXRlLnNwbGl0TWFwcy5tYXAoc2V0dGluZ3MgPT4ge1xuICAgIGNvbnN0IHtsYXllcnN9ID0gc2V0dGluZ3M7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBjb25zdCB7W2xheWVyLmlkXTogXywgLi4ubmV3TGF5ZXJzfSA9IGxheWVycztcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnNldHRpbmdzLFxuICAgICAgbGF5ZXJzOiBuZXdMYXllcnNcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBBZGQgbmV3IGxheWVycyB0byBib3RoIGV4aXN0aW5nIG1hcHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcGxpdE1hcHNcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5PE9iamVjdD59IGxheWVyc1xuICogQHJldHVybnMge0FycmF5PE9iamVjdD59IG5ldyBzcGxpdE1hcHNcbiAqL1xuZnVuY3Rpb24gYWRkTmV3TGF5ZXJzVG9TcGxpdE1hcChzcGxpdE1hcHMsIGxheWVycykge1xuICBjb25zdCBuZXdMYXllcnMgPSBBcnJheS5pc0FycmF5KGxheWVycykgPyBsYXllcnMgOiBbbGF5ZXJzXTtcblxuICBpZiAoIXNwbGl0TWFwcyB8fCAhc3BsaXRNYXBzLmxlbmd0aCB8fCAhbmV3TGF5ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBzcGxpdE1hcHM7XG4gIH1cblxuICAvLyBhZGQgbmV3IGxheWVyIHRvIGJvdGggbWFwcyxcbiAgLy8gIGRvbid0IG92ZXJyaWRlLCBpZiBsYXllci5pZCBpcyBhbHJlYWR5IGluIHNwbGl0TWFwcy5zZXR0aW5ncy5sYXllcnNcbiAgcmV0dXJuIHNwbGl0TWFwcy5tYXAoc2V0dGluZ3MgPT4gKHtcbiAgICAuLi5zZXR0aW5ncyxcbiAgICBsYXllcnM6IHtcbiAgICAgIC4uLnNldHRpbmdzLmxheWVycyxcbiAgICAgIC4uLm5ld0xheWVycy5yZWR1Y2UoXG4gICAgICAgIChhY2N1LCBuZXdMYXllcikgPT5cbiAgICAgICAgICBuZXdMYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgICAgIFtuZXdMYXllci5pZF06IHNldHRpbmdzLmxheWVyc1tuZXdMYXllci5pZF1cbiAgICAgICAgICAgICAgICAgID8gc2V0dGluZ3MubGF5ZXJzW25ld0xheWVyLmlkXVxuICAgICAgICAgICAgICAgICAgOiBnZW5lcmF0ZUxheWVyTWV0YUZvclNwbGl0Vmlld3MobmV3TGF5ZXIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogYWNjdSxcbiAgICAgICAge31cbiAgICAgIClcbiAgICB9XG4gIH0pKTtcbn1cblxuLyoqXG4gKiBIaWRlIGFuIGV4aXN0aW5nIGxheWVycyBmcm9tIGN1c3RvbSBtYXAgbGF5ZXIgb2JqZWN0c1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbGF5ZXJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE1hcHMgb2YgY3VzdG9tIGxheWVyIG9iamVjdHNcbiAqL1xuZnVuY3Rpb24gdG9nZ2xlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLCBsYXllcikge1xuICByZXR1cm4gc3RhdGUuc3BsaXRNYXBzLm1hcChzZXR0aW5ncyA9PiB7XG4gICAgY29uc3Qge2xheWVyc30gPSBzZXR0aW5ncztcbiAgICBjb25zdCBuZXdMYXllcnMgPSB7XG4gICAgICAuLi5sYXllcnMsXG4gICAgICBbbGF5ZXIuaWRdOiBnZW5lcmF0ZUxheWVyTWV0YUZvclNwbGl0Vmlld3MobGF5ZXIpXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5zZXR0aW5ncyxcbiAgICAgIGxheWVyczogbmV3TGF5ZXJzXG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogV2hlbiBhIHVzZXIgY2xpY2tzIG9uIHRoZSBzcGVjaWZpYyBtYXAgY2xvc2luZyBpY29uXG4gKiB0aGUgYXBwbGljYXRpb24gd2lsbCBjbG9zZSB0aGUgc2VsZWN0ZWQgbWFwXG4gKiBhbmQgd2lsbCBtZXJnZSB0aGUgcmVtYWluaW5nIG9uZSB3aXRoIHRoZSBnbG9iYWwgc3RhdGVcbiAqIFRPRE86IGkgdGhpbmsgaW4gdGhlIGZ1dHVyZSB0aGlzIGFjdGlvbiBzaG91bGQgYmUgY2FsbGVkIG1lcmdlIG1hcCBsYXllcnMgd2l0aCBnbG9iYWwgc2V0dGluZ3NcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmZ1bmN0aW9uIGNsb3NlU3BlY2lmaWNNYXBBdEluZGV4KHN0YXRlLCBhY3Rpb24pIHtcbiAgLy8gcmV0cmlldmUgbGF5ZXJzIG1ldGEgZGF0YSBmcm9tIHRoZSByZW1haW5pbmcgbWFwIHRoYXQgd2UgbmVlZCB0byBrZWVwXG4gIGNvbnN0IGluZGV4VG9SZXRyaWV2ZSA9IDEgLSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBtZXRhU2V0dGluZ3MgPSBzdGF0ZS5zcGxpdE1hcHNbaW5kZXhUb1JldHJpZXZlXTtcbiAgaWYgKCFtZXRhU2V0dGluZ3MgfHwgIW1ldGFTZXR0aW5ncy5sYXllcnMpIHtcbiAgICAvLyBpZiB3ZSBjYW4ndCBmaW5kIHRoZSBtZXRhIHNldHRpbmdzIHdlIHNpbXBseSBjbGVhbiB1cCBzcGxpdE1hcHMgYW5kXG4gICAgLy8ga2VlcCBnbG9iYWwgc3RhdGUgYXMgaXQgaXNcbiAgICAvLyBidXQgd2h5IGRvZXMgdGhpcyBldmVyIGhhcHBlbj9cbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHtsYXllcnN9ID0gc3RhdGU7XG5cbiAgLy8gdXBkYXRlIGxheWVyIHZpc2liaWxpdHlcbiAgY29uc3QgbmV3TGF5ZXJzID0gbGF5ZXJzLm1hcChsYXllciA9PlxuICAgIGxheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgIGlzVmlzaWJsZTogbWV0YVNldHRpbmdzLmxheWVyc1tsYXllci5pZF1cbiAgICAgICAgPyBtZXRhU2V0dGluZ3MubGF5ZXJzW2xheWVyLmlkXS5pc1Zpc2libGVcbiAgICAgICAgOiBsYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgfSlcbiAgKTtcblxuICAvLyBkZWxldGUgbWFwXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXG4gICAgc3BsaXRNYXBzOiBbXVxuICB9O1xufVxuXG4vKipcbiAqIFRyaWdnZXIgZmlsZSBsb2FkaW5nIGRpc3BhdGNoIGBhZGREYXRhVG9NYXBgIGlmIHN1Y2NlZWQsIG9yIGBsb2FkRmlsZXNFcnJgIGlmIGZhaWxlZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZSBgdmlzU3RhdGVgXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBhY3Rpb24uZmlsZXMgYXJyYXkgb2YgZmlsZWJsb2JcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzVXBkYXRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHtmaWxlc30gPSBhY3Rpb247XG5cbiAgY29uc3QgZmlsZXNUb0xvYWQgPSBmaWxlcy5tYXAoZmlsZUJsb2IgPT4gcHJvY2Vzc0ZpbGVUb0xvYWQoZmlsZUJsb2IpKTtcblxuICAvLyByZWFkZXIgLT4gcGFyc2VyIC0+IGF1Z21lbnQgLT4gcmVjZWl2ZVZpc0RhdGFcbiAgY29uc3QgbG9hZEZpbGVUYXNrcyA9IFtcbiAgICBUYXNrLmFsbChmaWxlc1RvTG9hZC5tYXAoTE9BRF9GSUxFX1RBU0spKS5iaW1hcChcbiAgICAgIHJlc3VsdHMgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzdWx0cy5yZWR1Y2UoKGYsIGMpID0+ICh7XG4gICAgICAgICAgLy8gdXNpbmcgY29uY2F0IGhlcmUgYmVjYXVzZSB0aGUgY3VycmVudCBkYXRhc2V0cyBjb3VsZCBiZSBhbiBhcnJheSBvciBhIHNpbmdsZSBpdGVtXG4gICAgICAgICAgZGF0YXNldHM6IGYuZGF0YXNldHMuY29uY2F0KGMuZGF0YXNldHMpLFxuICAgICAgICAgIC8vIHdlIG5lZWQgdG8gZGVlcCBtZXJnZSB0aGlzIHRoaW5nIHVubGVzcyB3ZSBmaW5kIGEgYmV0dGVyIHNvbHV0aW9uXG4gICAgICAgICAgLy8gdGhpcyBjYXNlIHdpbGwgb25seSBoYXBwZW4gaWYgd2UgYWxsb3cgdG8gbG9hZCBtdWx0aXBsZSBrZXBsZXJnbCBqc29uIGZpbGVzXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAuLi5mLmNvbmZpZyxcbiAgICAgICAgICAgIC4uLihjLmNvbmZpZyB8fCB7fSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pLCB7ZGF0YXNldHM6IFtdLCBjb25maWc6IHt9LCBvcHRpb25zOiB7Y2VudGVyTWFwOiB0cnVlfX0pO1xuICAgICAgICByZXR1cm4gYWRkRGF0YVRvTWFwKGRhdGEpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IGxvYWRGaWxlc0VycihlcnJvcilcbiAgICApXG4gIF07XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmlsZUxvYWRpbmc6IHRydWVcbiAgICB9LFxuICAgIGxvYWRGaWxlVGFza3NcbiAgKTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsb2FkaW5nIGZpbGUgZXJyb3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEBwYXJhbSB7Kn0gYWN0aW9uLmVycm9yXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRGaWxlc0VyclVwZGF0ZXIgPSAoc3RhdGUsIHtlcnJvcn0pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBmaWxlTG9hZGluZzogZmFsc2UsXG4gIGZpbGVMb2FkaW5nRXJyOiBlcnJvclxufSk7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBBbGwgbGF5ZXIgZG9tYWluIGFuZCBsYXllciBkYXRhIG9mIHN0YXRlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIGB2aXNTdGF0ZWBcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGF0YXNldHNcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGVmYXVsdExheWVycyhzdGF0ZSwgZGF0YXNldHMpIHtcbiAgY29uc3QgZGVmYXVsdExheWVycyA9IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpLnJlZHVjZShcbiAgICAoYWNjdSwgZGF0YXNldCkgPT4gW1xuICAgICAgLi4uYWNjdSxcbiAgICAgIC4uLihmaW5kRGVmYXVsdExheWVyKGRhdGFzZXQsIHN0YXRlLmxheWVyQ2xhc3NlcykgfHwgW10pXG4gICAgXSxcbiAgICBbXVxuICApO1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogWy4uLnN0YXRlLmxheWVycywgLi4uZGVmYXVsdExheWVyc10sXG4gICAgbGF5ZXJPcmRlcjogW1xuICAgICAgLy8gcHV0IG5ldyBsYXllcnMgb24gdG9wIG9mIG9sZCBvbmVzXG4gICAgICAuLi5kZWZhdWx0TGF5ZXJzLm1hcCgoXywgaSkgPT4gc3RhdGUubGF5ZXJzLmxlbmd0aCArIGkpLFxuICAgICAgLi4uc3RhdGUubGF5ZXJPcmRlclxuICAgIF1cbiAgfTtcbn1cblxuLyoqXG4gKiBoZWxwZXIgZnVuY3Rpb24gdG8gZmluZCBkZWZhdWx0IHRvb2x0aXBzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhc2V0XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRUb29sdGlwcyhzdGF0ZSwgZGF0YXNldCkge1xuICBjb25zdCB0b29sdGlwRmllbGRzID0gZmluZEZpZWxkc1RvU2hvdyhkYXRhc2V0KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGludGVyYWN0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcCxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgLy8gZmluZCBkZWZhdWx0IGZpZWxkcyB0byBzaG93IGluIHRvb2x0aXBcbiAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmZpZWxkc1RvU2hvdyxcbiAgICAgICAgICAgIC4uLnRvb2x0aXBGaWVsZHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBsYXllciBkb21haW5zIGZvciBhbiBhcnJheSBvZiBkYXRzZXRzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGVcbiAqIEBwYXJhbSB7QXJyYXl8QXJyYXk8c3RyaW5nPn0gZGF0YUlkIGRhdGFzZXQgaWQgb3IgYXJyYXkgb2YgZGF0YXNldCBpZHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBuZXdGaWx0ZXIgaWYgaXMgY2FsbGVkIGJ5IHNldEZpbHRlciwgdGhlIGZpbHRlciB0aGF0IGhhcyBjaGFuZ2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YShzdGF0ZSwgZGF0YUlkLCBuZXdGaWx0ZXIpIHtcbiAgY29uc3QgZGF0YUlkcyA9IHR5cGVvZiBkYXRhSWQgPT09ICdzdHJpbmcnID8gW2RhdGFJZF0gOiBkYXRhSWQ7XG4gIGNvbnN0IG5ld0xheWVycyA9IFtdO1xuICBjb25zdCBuZXdMYXllckRhdGFzID0gW107XG5cbiAgc3RhdGUubGF5ZXJzLmZvckVhY2goKG9sZExheWVyLCBpKSA9PiB7XG4gICAgaWYgKG9sZExheWVyLmNvbmZpZy5kYXRhSWQgJiYgZGF0YUlkcy5pbmNsdWRlcyhvbGRMYXllci5jb25maWcuZGF0YUlkKSkge1xuICAgICAgLy8gTm8gbmVlZCB0byByZWNhbGN1bGF0ZSBsYXllciBkb21haW4gaWYgZmlsdGVyIGhhcyBmaXhlZCBkb21haW5cbiAgICAgIGNvbnN0IG5ld0xheWVyID1cbiAgICAgICAgbmV3RmlsdGVyICYmIG5ld0ZpbHRlci5maXhlZERvbWFpblxuICAgICAgICAgID8gb2xkTGF5ZXJcbiAgICAgICAgICA6IG9sZExheWVyLnVwZGF0ZUxheWVyRG9tYWluKFxuICAgICAgICAgICAgICBzdGF0ZS5kYXRhc2V0c1tvbGRMYXllci5jb25maWcuZGF0YUlkXSxcbiAgICAgICAgICAgICAgbmV3RmlsdGVyXG4gICAgICAgICAgICApO1xuXG4gICAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEoXG4gICAgICAgIG5ld0xheWVyLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgc3RhdGUubGF5ZXJEYXRhW2ldXG4gICAgICApO1xuXG4gICAgICBuZXdMYXllcnMucHVzaChsYXllcik7XG4gICAgICBuZXdMYXllckRhdGFzLnB1c2gobGF5ZXJEYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGF5ZXJzLnB1c2gob2xkTGF5ZXIpO1xuICAgICAgbmV3TGF5ZXJEYXRhcy5wdXNoKHN0YXRlLmxheWVyRGF0YVtpXSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogbmV3TGF5ZXJzLFxuICAgIGxheWVyRGF0YTogbmV3TGF5ZXJEYXRhc1xuICB9O1xufVxuIl19