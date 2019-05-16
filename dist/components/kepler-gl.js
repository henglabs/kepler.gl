"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _window = require("global/window");

var _redux = require("redux");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _keplerglConnect = require("../connect/keplergl-connect");

var VisStateActions = _interopRequireWildcard(require("../actions/vis-state-actions"));

var MapStateActions = _interopRequireWildcard(require("../actions/map-state-actions"));

var MapStyleActions = _interopRequireWildcard(require("../actions/map-style-actions"));

var UIStateActions = _interopRequireWildcard(require("../actions/ui-state-actions"));

var _defaultSettings = require("../constants/default-settings");

var _sidePanel = _interopRequireDefault(require("./side-panel"));

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _bottomWidget = _interopRequireDefault(require("./bottom-widget"));

var _modalContainer = _interopRequireDefault(require("./modal-container"));

var _plotContainer = _interopRequireDefault(require("./plot-container"));

var _notificationPanel = _interopRequireDefault(require("./notification-panel"));

var _utils = require("../utils/utils");

var _base = require("../styles/base");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ff-clan-web-pro, 'Helvetica Neue', Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.71429;\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// Maybe we should think about exporting this or creating a variable
// as part of the base.js theme
var GlobalStyle = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.labelColor;
});

KeplerGlFactory.deps = [_bottomWidget["default"], _mapContainer["default"], _modalContainer["default"], _sidePanel["default"], _plotContainer["default"], _notificationPanel["default"]];

function KeplerGlFactory(BottomWidget, MapContainer, ModalWrapper, SidePanel, PlotContainer, NotificationPanel) {
  var KeplerGL =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(KeplerGL, _Component);

    function KeplerGL() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, KeplerGL);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(KeplerGL)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
        return props.theme;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableThemeSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
        return (0, _typeof2["default"])(theme) === 'object' ? (0, _objectSpread2["default"])({}, _base.theme, theme) : theme === _defaultSettings.THEME.light ? _base.themeLT : theme;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_loadMapStyle", function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles); // add id to custom map styles if not given

        var customStyles = (_this.props.mapStyles || []).map(function (ms) {
          return (0, _objectSpread2["default"])({}, ms, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });
        var allStyles = [].concat((0, _toConsumableArray2["default"])(customStyles), (0, _toConsumableArray2["default"])(defaultStyles)).reduce(function (accu, style) {
          var hasStyleObject = style.style && (0, _typeof2["default"])(style.style) === 'object';
          accu[hasStyleObject ? 'toLoad' : 'toRequest'][style.id] = style;
          return accu;
        }, {
          toLoad: {},
          toRequest: {}
        });

        _this.props.mapStyleActions.loadMapStyles(allStyles.toLoad);

        _this.props.mapStyleActions.requestMapStyles(allStyles.toRequest);
      });
      return _this;
    }

    (0, _createClass2["default"])(KeplerGL, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this._loadMapStyle(this.props.mapStyles);

        this._handleResize(this.props);
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if ( // if dimension props has changed
        this.props.height !== nextProps.height || this.props.width !== nextProps.width || // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        nextProps.height !== this.props.mapState.height) {
          this._handleResize(nextProps);
        }
      }
      /* selector */

    }, {
      key: "_handleResize",
      value: function _handleResize(_ref) {
        var width = _ref.width,
            height = _ref.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');

          return;
        }

        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            id = _this$props.id,
            appName = _this$props.appName,
            version = _this$props.version,
            onSaveMap = _this$props.onSaveMap,
            onViewStateChange = _this$props.onViewStateChange,
            width = _this$props.width,
            height = _this$props.height,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            getMapboxRef = _this$props.getMapboxRef,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            visStateActions = _this$props.visStateActions,
            mapStateActions = _this$props.mapStateActions,
            mapStyleActions = _this$props.mapStyleActions,
            uiStateActions = _this$props.uiStateActions;
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked;
        var notificationPanelFields = {
          removeNotification: uiStateActions.removeNotification,
          notifications: uiState.notifications
        };
        var sideFields = {
          appName: appName,
          version: version,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: this.props.sidePanelWidth
        };
        var mapFields = {
          datasets: datasets,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapState: mapState,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          toggleMapControl: uiStateActions.toggleMapControl,
          onViewStateChange: onViewStateChange,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions
        };
        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);
        var mapContainers = !isSplit ? [_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: isSplit ? splitMaps[0].layers : null,
          getMapboxRef: getMapboxRef
        }))] : splitMaps.map(function (settings, index) {
          return _react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers,
            getMapboxRef: getMapboxRef
          }));
        });
        var isExporting = uiState.currentModal === _defaultSettings.EXPORT_IMAGE_ID;
        var theme = this.availableThemeSelector(this.props);
        return _react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, _react["default"].createElement(GlobalStyle, {
          style: {
            position: 'relative',
            width: "".concat(width, "px"),
            height: "".concat(height, "px")
          },
          className: "kepler-gl",
          id: "kepler-gl__".concat(id),
          ref: function ref(node) {
            _this2.root = node;
          }
        }, _react["default"].createElement(NotificationPanel, notificationPanelFields), !uiState.readOnly && _react["default"].createElement(SidePanel, sideFields), _react["default"].createElement("div", {
          className: "maps",
          style: {
            display: 'flex'
          }
        }, mapContainers), isExporting && _react["default"].createElement(PlotContainer, {
          width: width,
          height: height,
          exportImageSetting: uiState.exportImage,
          mapFields: mapFields,
          startExportingImage: uiStateActions.startExportingImage,
          setExportImageDataUri: uiStateActions.setExportImageDataUri
        }), _react["default"].createElement(BottomWidget, {
          filters: filters,
          datasets: datasets,
          uiState: uiState,
          visStateActions: visStateActions,
          sidePanelWidth: uiState.readOnly ? 0 : this.props.sidePanelWidth + _defaultSettings.DIMENSIONS.sidePanel.margin.left,
          containerW: containerW
        }), _react["default"].createElement(ModalWrapper, {
          mapStyle: mapStyle,
          visState: visState,
          mapState: mapState,
          uiState: uiState,
          mapboxApiAccessToken: mapboxApiAccessToken,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          mapStyleActions: mapStyleActions,
          rootNode: this.root,
          containerW: containerW,
          containerH: mapState.height
        })));
      }
    }]);
    return KeplerGL;
  }(_react.Component);

  (0, _defineProperty2["default"])(KeplerGL, "defaultProps", {
    mapStyles: [],
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION,
    sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width,
    theme: {}
  });
  return (0, _keplerglConnect.connect)(mapStateToProps, makeMapDispatchToProps)((0, _styledComponents.withTheme)(KeplerGL));
}

function mapStateToProps(state, props) {
  return (0, _objectSpread2["default"])({}, props, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState
  });
}

var defaultUserActions = {};

var getDispatch = function getDispatch(dispatch) {
  return dispatch;
};

var getUserActions = function getUserActions(dispatch, props) {
  return props.actions || defaultUserActions;
};

function makeGetActionCreators() {
  return (0, _reselect.createSelector)([getDispatch, getUserActions], function (dispatch, userActions) {
    var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions].map(function (actions) {
      return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
    }),
        _map2 = (0, _slicedToArray2["default"])(_map, 4),
        visStateActions = _map2[0],
        mapStateActions = _map2[1],
        mapStyleActions = _map2[2],
        uiStateActions = _map2[3];

    return {
      visStateActions: visStateActions,
      mapStateActions: mapStateActions,
      mapStyleActions: mapStyleActions,
      uiStateActions: uiStateActions,
      dispatch: dispatch
    };
  });
}

function makeMapDispatchToProps() {
  var getActionCreators = makeGetActionCreators();

  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var groupedActionCreators = getActionCreators(dispatch, ownProps);
    return (0, _objectSpread2["default"])({}, groupedActionCreators, {
      dispatch: dispatch
    });
  };

  return mapDispatchToProps;
}
/**
 * Override default kepler.gl actions with user defined actions using the same key
 */


function mergeActions(actions, userActions) {
  var overrides = {};

  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return (0, _objectSpread2["default"])({}, actions, overrides);
}

var _default = KeplerGlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwiS2VwbGVyR2xGYWN0b3J5IiwiZGVwcyIsIkJvdHRvbVdpZGdldEZhY3RvcnkiLCJNYXBDb250YWluZXJGYWN0b3J5IiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiU2lkZVBhbmVsRmFjdG9yeSIsIlBsb3RDb250YWluZXJGYWN0b3J5IiwiTm90aWZpY2F0aW9uUGFuZWxGYWN0b3J5IiwiQm90dG9tV2lkZ2V0IiwiTWFwQ29udGFpbmVyIiwiTW9kYWxXcmFwcGVyIiwiU2lkZVBhbmVsIiwiUGxvdENvbnRhaW5lciIsIk5vdGlmaWNhdGlvblBhbmVsIiwiS2VwbGVyR0wiLCJ0aGVtZVNlbGVjdG9yIiwiYmFzaWNUaGVtZSIsIlRIRU1FIiwibGlnaHQiLCJ0aGVtZUxUIiwiZGVmYXVsdFN0eWxlcyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcFN0eWxlIiwibWFwU3R5bGVzIiwiY3VzdG9tU3R5bGVzIiwibWFwIiwibXMiLCJpZCIsImFsbFN0eWxlcyIsInJlZHVjZSIsImFjY3UiLCJzdHlsZSIsImhhc1N0eWxlT2JqZWN0IiwidG9Mb2FkIiwidG9SZXF1ZXN0IiwibWFwU3R5bGVBY3Rpb25zIiwibG9hZE1hcFN0eWxlcyIsInJlcXVlc3RNYXBTdHlsZXMiLCJfbG9hZE1hcFN0eWxlIiwiX2hhbmRsZVJlc2l6ZSIsIm5leHRQcm9wcyIsImhlaWdodCIsIndpZHRoIiwibWFwU3RhdGUiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsIkNvbnNvbGUiLCJ3YXJuIiwibWFwU3RhdGVBY3Rpb25zIiwidXBkYXRlTWFwIiwiaXNTcGxpdCIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwib25TYXZlTWFwIiwib25WaWV3U3RhdGVDaGFuZ2UiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImdldE1hcGJveFJlZiIsInVpU3RhdGUiLCJ2aXNTdGF0ZSIsInZpc1N0YXRlQWN0aW9ucyIsInVpU3RhdGVBY3Rpb25zIiwiZmlsdGVycyIsImxheWVycyIsInNwbGl0TWFwcyIsImxheWVyT3JkZXIiLCJsYXllckJsZW5kaW5nIiwibGF5ZXJDbGFzc2VzIiwiaW50ZXJhY3Rpb25Db25maWciLCJkYXRhc2V0cyIsImxheWVyRGF0YSIsImhvdmVySW5mbyIsImNsaWNrZWQiLCJub3RpZmljYXRpb25QYW5lbEZpZWxkcyIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJzaWRlRmllbGRzIiwic2lkZVBhbmVsV2lkdGgiLCJtYXBGaWVsZHMiLCJtYXBDb250cm9scyIsInRvZ2dsZU1hcENvbnRyb2wiLCJsZW5ndGgiLCJjb250YWluZXJXIiwibWFwQ29udGFpbmVycyIsInNldHRpbmdzIiwiaW5kZXgiLCJpc0V4cG9ydGluZyIsImN1cnJlbnRNb2RhbCIsIkVYUE9SVF9JTUFHRV9JRCIsImF2YWlsYWJsZVRoZW1lU2VsZWN0b3IiLCJwb3NpdGlvbiIsIm5vZGUiLCJyb290IiwicmVhZE9ubHkiLCJkaXNwbGF5IiwiZXhwb3J0SW1hZ2UiLCJzdGFydEV4cG9ydGluZ0ltYWdlIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpIiwiRElNRU5TSU9OUyIsInNpZGVQYW5lbCIsIm1hcmdpbiIsImxlZnQiLCJDb21wb25lbnQiLCJLRVBMRVJfR0xfTkFNRSIsIktFUExFUl9HTF9WRVJTSU9OIiwibWFwU3RhdGVUb1Byb3BzIiwibWFrZU1hcERpc3BhdGNoVG9Qcm9wcyIsInN0YXRlIiwiZGVmYXVsdFVzZXJBY3Rpb25zIiwiZ2V0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImdldFVzZXJBY3Rpb25zIiwiYWN0aW9ucyIsIm1ha2VHZXRBY3Rpb25DcmVhdG9ycyIsInVzZXJBY3Rpb25zIiwiVmlzU3RhdGVBY3Rpb25zIiwiTWFwU3RhdGVBY3Rpb25zIiwiTWFwU3R5bGVBY3Rpb25zIiwiVUlTdGF0ZUFjdGlvbnMiLCJtZXJnZUFjdGlvbnMiLCJnZXRBY3Rpb25DcmVhdG9ycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm93blByb3BzIiwiZ3JvdXBlZEFjdGlvbkNyZWF0b3JzIiwib3ZlcnJpZGVzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQSxJQUFNQSxXQUFXLEdBQUdDLDZCQUFPQyxHQUFWLG9CQXlCSixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0F6QkQsQ0FBakI7O0FBNkJBQyxlQUFlLENBQUNDLElBQWhCLEdBQXVCLENBQ3JCQyx3QkFEcUIsRUFFckJDLHdCQUZxQixFQUdyQkMsMEJBSHFCLEVBSXJCQyxxQkFKcUIsRUFLckJDLHlCQUxxQixFQU1yQkMsNkJBTnFCLENBQXZCOztBQVNBLFNBQVNQLGVBQVQsQ0FDRVEsWUFERixFQUVFQyxZQUZGLEVBR0VDLFlBSEYsRUFJRUMsU0FKRixFQUtFQyxhQUxGLEVBTUVDLGlCQU5GLEVBT0U7QUFBQSxNQUNNQyxRQUROO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsd0dBK0JrQixVQUFBakIsS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ0MsS0FBVjtBQUFBLE9BL0J2QjtBQUFBLGlIQWdDMkIsOEJBQ3ZCLE1BQUtpQixhQURrQixFQUV2QixVQUFBakIsS0FBSztBQUFBLGVBQUkseUJBQU9BLEtBQVAsTUFBaUIsUUFBakIsc0NBQ0prQixXQURJLEVBRUpsQixLQUZJLElBR0pBLEtBQUssS0FBS21CLHVCQUFNQyxLQUFoQixHQUF3QkMsYUFBeEIsR0FBa0NyQixLQUhsQztBQUFBLE9BRmtCLENBaEMzQjtBQUFBLHdHQW1Ea0IsWUFBTTtBQUNwQixZQUFNc0IsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxNQUFLekIsS0FBTCxDQUFXMEIsUUFBWCxDQUFvQkMsU0FBbEMsQ0FBdEIsQ0FEb0IsQ0FFcEI7O0FBQ0EsWUFBTUMsWUFBWSxHQUFHLENBQUMsTUFBSzVCLEtBQUwsQ0FBVzJCLFNBQVgsSUFBd0IsRUFBekIsRUFBNkJFLEdBQTdCLENBQWlDLFVBQUFDLEVBQUU7QUFBQSxvREFDbkRBLEVBRG1EO0FBRXREQyxZQUFBQSxFQUFFLEVBQUVELEVBQUUsQ0FBQ0MsRUFBSCxJQUFTO0FBRnlDO0FBQUEsU0FBbkMsQ0FBckI7QUFLQSxZQUFNQyxTQUFTLEdBQUcsOENBQUlKLFlBQUosdUNBQXFCTCxhQUFyQixHQUFvQ1UsTUFBcEMsQ0FBMkMsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzFFLGNBQU1DLGNBQWMsR0FBR0QsS0FBSyxDQUFDQSxLQUFOLElBQWUseUJBQU9BLEtBQUssQ0FBQ0EsS0FBYixNQUF1QixRQUE3RDtBQUNBRCxVQUFBQSxJQUFJLENBQUNFLGNBQWMsR0FBRyxRQUFILEdBQWMsV0FBN0IsQ0FBSixDQUE4Q0QsS0FBSyxDQUFDSixFQUFwRCxJQUEwREksS0FBMUQ7QUFFQSxpQkFBT0QsSUFBUDtBQUNELFNBTGUsRUFLYjtBQUFDRyxVQUFBQSxNQUFNLEVBQUUsRUFBVDtBQUFhQyxVQUFBQSxTQUFTLEVBQUU7QUFBeEIsU0FMYSxDQUFsQjs7QUFRQSxjQUFLdEMsS0FBTCxDQUFXdUMsZUFBWCxDQUEyQkMsYUFBM0IsQ0FBeUNSLFNBQVMsQ0FBQ0ssTUFBbkQ7O0FBQ0EsY0FBS3JDLEtBQUwsQ0FBV3VDLGVBQVgsQ0FBMkJFLGdCQUEzQixDQUE0Q1QsU0FBUyxDQUFDTSxTQUF0RDtBQUNELE9BckVIO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkNBWXVCO0FBQ25CLGFBQUtJLGFBQUwsQ0FBbUIsS0FBSzFDLEtBQUwsQ0FBVzJCLFNBQTlCOztBQUNBLGFBQUtnQixhQUFMLENBQW1CLEtBQUszQyxLQUF4QjtBQUNEO0FBZkg7QUFBQTtBQUFBLGdEQWlCNEI0QyxTQWpCNUIsRUFpQnVDO0FBQ25DLGFBQ0U7QUFDQSxhQUFLNUMsS0FBTCxDQUFXNkMsTUFBWCxLQUFzQkQsU0FBUyxDQUFDQyxNQUFoQyxJQUNBLEtBQUs3QyxLQUFMLENBQVc4QyxLQUFYLEtBQXFCRixTQUFTLENBQUNFLEtBRC9CLElBRUE7QUFDQTtBQUNBRixRQUFBQSxTQUFTLENBQUNDLE1BQVYsS0FBcUIsS0FBSzdDLEtBQUwsQ0FBVytDLFFBQVgsQ0FBb0JGLE1BTjNDLEVBT0U7QUFDQSxlQUFLRixhQUFMLENBQW1CQyxTQUFuQjtBQUNEO0FBQ0Y7QUFFRDs7QUE5QkY7QUFBQTtBQUFBLDBDQXdDaUM7QUFBQSxZQUFoQkUsS0FBZ0IsUUFBaEJBLEtBQWdCO0FBQUEsWUFBVEQsTUFBUyxRQUFUQSxNQUFTOztBQUM3QixZQUFJLENBQUNHLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkgsS0FBaEIsQ0FBRCxJQUEyQixDQUFDRSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JKLE1BQWhCLENBQWhDLEVBQXlEO0FBQ3ZESywwQkFBUUMsSUFBUixDQUFhLDhCQUFiOztBQUNBO0FBQ0Q7O0FBQ0QsYUFBS25ELEtBQUwsQ0FBV29ELGVBQVgsQ0FBMkJDLFNBQTNCLENBQXFDO0FBQ25DUCxVQUFBQSxLQUFLLEVBQUVBLEtBQUssSUFBSSxJQUFJRSxNQUFNLENBQUMsS0FBS2hELEtBQUwsQ0FBVytDLFFBQVgsQ0FBb0JPLE9BQXJCLENBQWQsQ0FEdUI7QUFFbkNULFVBQUFBLE1BQU0sRUFBTkE7QUFGbUMsU0FBckM7QUFJRDtBQWpESDtBQUFBO0FBQUEsK0JBdUVXO0FBQUE7O0FBQUEsMEJBd0JILEtBQUs3QyxLQXhCRjtBQUFBLFlBR0wrQixFQUhLLGVBR0xBLEVBSEs7QUFBQSxZQUlMd0IsT0FKSyxlQUlMQSxPQUpLO0FBQUEsWUFLTEMsT0FMSyxlQUtMQSxPQUxLO0FBQUEsWUFNTEMsU0FOSyxlQU1MQSxTQU5LO0FBQUEsWUFPTEMsaUJBUEssZUFPTEEsaUJBUEs7QUFBQSxZQVFMWixLQVJLLGVBUUxBLEtBUks7QUFBQSxZQVNMRCxNQVRLLGVBU0xBLE1BVEs7QUFBQSxZQVVMYyxvQkFWSyxlQVVMQSxvQkFWSztBQUFBLFlBV0xDLFlBWEssZUFXTEEsWUFYSztBQUFBLFlBY0xsQyxRQWRLLGVBY0xBLFFBZEs7QUFBQSxZQWVMcUIsUUFmSyxlQWVMQSxRQWZLO0FBQUEsWUFnQkxjLE9BaEJLLGVBZ0JMQSxPQWhCSztBQUFBLFlBaUJMQyxRQWpCSyxlQWlCTEEsUUFqQks7QUFBQSxZQW9CTEMsZUFwQkssZUFvQkxBLGVBcEJLO0FBQUEsWUFxQkxYLGVBckJLLGVBcUJMQSxlQXJCSztBQUFBLFlBc0JMYixlQXRCSyxlQXNCTEEsZUF0Qks7QUFBQSxZQXVCTHlCLGNBdkJLLGVBdUJMQSxjQXZCSztBQUFBLFlBMkJMQyxPQTNCSyxHQXNDSEgsUUF0Q0csQ0EyQkxHLE9BM0JLO0FBQUEsWUE0QkxDLE1BNUJLLEdBc0NISixRQXRDRyxDQTRCTEksTUE1Qks7QUFBQSxZQTZCTEMsU0E3QkssR0FzQ0hMLFFBdENHLENBNkJMSyxTQTdCSztBQUFBLFlBOEJMQyxVQTlCSyxHQXNDSE4sUUF0Q0csQ0E4QkxNLFVBOUJLO0FBQUEsWUErQkxDLGFBL0JLLEdBc0NIUCxRQXRDRyxDQStCTE8sYUEvQks7QUFBQSxZQWdDTEMsWUFoQ0ssR0FzQ0hSLFFBdENHLENBZ0NMUSxZQWhDSztBQUFBLFlBaUNMQyxpQkFqQ0ssR0FzQ0hULFFBdENHLENBaUNMUyxpQkFqQ0s7QUFBQSxZQWtDTEMsUUFsQ0ssR0FzQ0hWLFFBdENHLENBa0NMVSxRQWxDSztBQUFBLFlBbUNMQyxTQW5DSyxHQXNDSFgsUUF0Q0csQ0FtQ0xXLFNBbkNLO0FBQUEsWUFvQ0xDLFNBcENLLEdBc0NIWixRQXRDRyxDQW9DTFksU0FwQ0s7QUFBQSxZQXFDTEMsT0FyQ0ssR0FzQ0hiLFFBdENHLENBcUNMYSxPQXJDSztBQXdDUCxZQUFNQyx1QkFBdUIsR0FBRztBQUM5QkMsVUFBQUEsa0JBQWtCLEVBQUViLGNBQWMsQ0FBQ2Esa0JBREw7QUFFOUJDLFVBQUFBLGFBQWEsRUFBRWpCLE9BQU8sQ0FBQ2lCO0FBRk8sU0FBaEM7QUFLQSxZQUFNQyxVQUFVLEdBQUc7QUFDakJ4QixVQUFBQSxPQUFPLEVBQVBBLE9BRGlCO0FBRWpCQyxVQUFBQSxPQUFPLEVBQVBBLE9BRmlCO0FBR2pCZ0IsVUFBQUEsUUFBUSxFQUFSQSxRQUhpQjtBQUlqQlAsVUFBQUEsT0FBTyxFQUFQQSxPQUppQjtBQUtqQkMsVUFBQUEsTUFBTSxFQUFOQSxNQUxpQjtBQU1qQkUsVUFBQUEsVUFBVSxFQUFWQSxVQU5pQjtBQU9qQkUsVUFBQUEsWUFBWSxFQUFaQSxZQVBpQjtBQVFqQkMsVUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFSaUI7QUFTakI3QyxVQUFBQSxRQUFRLEVBQVJBLFFBVGlCO0FBVWpCMkMsVUFBQUEsYUFBYSxFQUFiQSxhQVZpQjtBQVdqQlosVUFBQUEsU0FBUyxFQUFUQSxTQVhpQjtBQVlqQkksVUFBQUEsT0FBTyxFQUFQQSxPQVppQjtBQWFqQnRCLFVBQUFBLGVBQWUsRUFBZkEsZUFiaUI7QUFjakJ3QixVQUFBQSxlQUFlLEVBQWZBLGVBZGlCO0FBZWpCQyxVQUFBQSxjQUFjLEVBQWRBLGNBZmlCO0FBZ0JqQmxCLFVBQUFBLEtBQUssRUFBRSxLQUFLOUMsS0FBTCxDQUFXZ0Y7QUFoQkQsU0FBbkI7QUFtQkEsWUFBTUMsU0FBUyxHQUFHO0FBQ2hCVCxVQUFBQSxRQUFRLEVBQVJBLFFBRGdCO0FBRWhCYixVQUFBQSxvQkFBb0IsRUFBcEJBLG9CQUZnQjtBQUdoQlosVUFBQUEsUUFBUSxFQUFSQSxRQUhnQjtBQUloQnJCLFVBQUFBLFFBQVEsRUFBUkEsUUFKZ0I7QUFLaEJ3RCxVQUFBQSxXQUFXLEVBQUVyQixPQUFPLENBQUNxQixXQUxMO0FBTWhCaEIsVUFBQUEsTUFBTSxFQUFOQSxNQU5nQjtBQU9oQkUsVUFBQUEsVUFBVSxFQUFWQSxVQVBnQjtBQVFoQkssVUFBQUEsU0FBUyxFQUFUQSxTQVJnQjtBQVNoQkosVUFBQUEsYUFBYSxFQUFiQSxhQVRnQjtBQVVoQkUsVUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFWZ0I7QUFXaEJHLFVBQUFBLFNBQVMsRUFBVEEsU0FYZ0I7QUFZaEJDLFVBQUFBLE9BQU8sRUFBUEEsT0FaZ0I7QUFhaEJRLFVBQUFBLGdCQUFnQixFQUFFbkIsY0FBYyxDQUFDbUIsZ0JBYmpCO0FBY2hCekIsVUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFkZ0I7QUFlaEJNLFVBQUFBLGNBQWMsRUFBZEEsY0FmZ0I7QUFnQmhCRCxVQUFBQSxlQUFlLEVBQWZBLGVBaEJnQjtBQWlCaEJYLFVBQUFBLGVBQWUsRUFBZkE7QUFqQmdCLFNBQWxCO0FBb0JBLFlBQU1FLE9BQU8sR0FBR2EsU0FBUyxJQUFJQSxTQUFTLENBQUNpQixNQUFWLEdBQW1CLENBQWhEO0FBQ0EsWUFBTUMsVUFBVSxHQUFHdEMsUUFBUSxDQUFDRCxLQUFULElBQWtCRSxNQUFNLENBQUNNLE9BQUQsQ0FBTixHQUFrQixDQUFwQyxDQUFuQjtBQUVBLFlBQU1nQyxhQUFhLEdBQUcsQ0FBQ2hDLE9BQUQsR0FDbEIsQ0FDRSxnQ0FBQyxZQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUUsQ0FEUDtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBRlQsV0FHTTJCLFNBSE47QUFJRSxVQUFBLFNBQVMsRUFBRTNCLE9BQU8sR0FBR2EsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRCxNQUFoQixHQUF5QixJQUo3QztBQUtFLFVBQUEsWUFBWSxFQUFFTjtBQUxoQixXQURGLENBRGtCLEdBVWxCTyxTQUFTLENBQUN0QyxHQUFWLENBQWMsVUFBQzBELFFBQUQsRUFBV0MsS0FBWDtBQUFBLGlCQUNaLGdDQUFDLFlBQUQ7QUFDRSxZQUFBLEdBQUcsRUFBRUEsS0FEUDtBQUVFLFlBQUEsS0FBSyxFQUFFQTtBQUZULGFBR01QLFNBSE47QUFJRSxZQUFBLFNBQVMsRUFBRWQsU0FBUyxDQUFDcUIsS0FBRCxDQUFULENBQWlCdEIsTUFKOUI7QUFLRSxZQUFBLFlBQVksRUFBRU47QUFMaEIsYUFEWTtBQUFBLFNBQWQsQ0FWSjtBQW9CQSxZQUFNNkIsV0FBVyxHQUFHNUIsT0FBTyxDQUFDNkIsWUFBUixLQUF5QkMsZ0NBQTdDO0FBRUEsWUFBTTFGLEtBQUssR0FBRyxLQUFLMkYsc0JBQUwsQ0FBNEIsS0FBSzVGLEtBQWpDLENBQWQ7QUFFQSxlQUNFLGdDQUFDLCtCQUFEO0FBQWUsVUFBQSxLQUFLLEVBQUVDO0FBQXRCLFdBQ0UsZ0NBQUMsV0FBRDtBQUNFLFVBQUEsS0FBSyxFQUFFO0FBQ0w0RixZQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVML0MsWUFBQUEsS0FBSyxZQUFLQSxLQUFMLE9BRkE7QUFHTEQsWUFBQUEsTUFBTSxZQUFLQSxNQUFMO0FBSEQsV0FEVDtBQU1FLFVBQUEsU0FBUyxFQUFDLFdBTlo7QUFPRSxVQUFBLEVBQUUsdUJBQWdCZCxFQUFoQixDQVBKO0FBUUUsVUFBQSxHQUFHLEVBQUUsYUFBQStELElBQUksRUFBSTtBQUNYLFlBQUEsTUFBSSxDQUFDQyxJQUFMLEdBQVlELElBQVo7QUFDRDtBQVZILFdBWUUsZ0NBQUMsaUJBQUQsRUFBdUJsQix1QkFBdkIsQ0FaRixFQWFHLENBQUNmLE9BQU8sQ0FBQ21DLFFBQVQsSUFBcUIsZ0NBQUMsU0FBRCxFQUFlakIsVUFBZixDQWJ4QixFQWNFO0FBQUssVUFBQSxTQUFTLEVBQUMsTUFBZjtBQUFzQixVQUFBLEtBQUssRUFBRTtBQUFDa0IsWUFBQUEsT0FBTyxFQUFFO0FBQVY7QUFBN0IsV0FDR1gsYUFESCxDQWRGLEVBaUJHRyxXQUFXLElBQ1YsZ0NBQUMsYUFBRDtBQUNFLFVBQUEsS0FBSyxFQUFFM0MsS0FEVDtBQUVFLFVBQUEsTUFBTSxFQUFFRCxNQUZWO0FBR0UsVUFBQSxrQkFBa0IsRUFBRWdCLE9BQU8sQ0FBQ3FDLFdBSDlCO0FBSUUsVUFBQSxTQUFTLEVBQUVqQixTQUpiO0FBS0UsVUFBQSxtQkFBbUIsRUFBRWpCLGNBQWMsQ0FBQ21DLG1CQUx0QztBQU1FLFVBQUEscUJBQXFCLEVBQUVuQyxjQUFjLENBQUNvQztBQU54QyxVQWxCSixFQTJCRSxnQ0FBQyxZQUFEO0FBQ0UsVUFBQSxPQUFPLEVBQUVuQyxPQURYO0FBRUUsVUFBQSxRQUFRLEVBQUVPLFFBRlo7QUFHRSxVQUFBLE9BQU8sRUFBRVgsT0FIWDtBQUlFLFVBQUEsZUFBZSxFQUFFRSxlQUpuQjtBQUtFLFVBQUEsY0FBYyxFQUNaRixPQUFPLENBQUNtQyxRQUFSLEdBQW1CLENBQW5CLEdBQXVCLEtBQUtoRyxLQUFMLENBQVdnRixjQUFYLEdBQTRCcUIsNEJBQVdDLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCQyxJQU5uRjtBQVFFLFVBQUEsVUFBVSxFQUFFbkI7QUFSZCxVQTNCRixFQXFDRSxnQ0FBQyxZQUFEO0FBQ0UsVUFBQSxRQUFRLEVBQUUzRCxRQURaO0FBRUUsVUFBQSxRQUFRLEVBQUVvQyxRQUZaO0FBR0UsVUFBQSxRQUFRLEVBQUVmLFFBSFo7QUFJRSxVQUFBLE9BQU8sRUFBRWMsT0FKWDtBQUtFLFVBQUEsb0JBQW9CLEVBQUVGLG9CQUx4QjtBQU1FLFVBQUEsZUFBZSxFQUFFSSxlQU5uQjtBQU9FLFVBQUEsY0FBYyxFQUFFQyxjQVBsQjtBQVFFLFVBQUEsZUFBZSxFQUFFekIsZUFSbkI7QUFTRSxVQUFBLFFBQVEsRUFBRSxLQUFLd0QsSUFUakI7QUFVRSxVQUFBLFVBQVUsRUFBRVYsVUFWZDtBQVdFLFVBQUEsVUFBVSxFQUFFdEMsUUFBUSxDQUFDRjtBQVh2QixVQXJDRixDQURGLENBREY7QUF1REQ7QUE3T0g7QUFBQTtBQUFBLElBQ3VCNEQsZ0JBRHZCOztBQUFBLG1DQUNNeEYsUUFETixrQkFFd0I7QUFDcEJVLElBQUFBLFNBQVMsRUFBRSxFQURTO0FBRXBCbUIsSUFBQUEsS0FBSyxFQUFFLEdBRmE7QUFHcEJELElBQUFBLE1BQU0sRUFBRSxHQUhZO0FBSXBCVSxJQUFBQSxPQUFPLEVBQUVtRCwrQkFKVztBQUtwQmxELElBQUFBLE9BQU8sRUFBRW1ELGtDQUxXO0FBTXBCM0IsSUFBQUEsY0FBYyxFQUFFcUIsNEJBQVdDLFNBQVgsQ0FBcUJ4RCxLQU5qQjtBQU9wQjdDLElBQUFBLEtBQUssRUFBRTtBQVBhLEdBRnhCO0FBZ1BBLFNBQU8sOEJBQWdCMkcsZUFBaEIsRUFBaUNDLHNCQUFqQyxFQUF5RCxpQ0FBVTVGLFFBQVYsQ0FBekQsQ0FBUDtBQUNEOztBQUVELFNBQVMyRixlQUFULENBQXlCRSxLQUF6QixFQUFnQzlHLEtBQWhDLEVBQXVDO0FBQ3JDLDRDQUNLQSxLQURMO0FBRUU4RCxJQUFBQSxRQUFRLEVBQUVnRCxLQUFLLENBQUNoRCxRQUZsQjtBQUdFcEMsSUFBQUEsUUFBUSxFQUFFb0YsS0FBSyxDQUFDcEYsUUFIbEI7QUFJRXFCLElBQUFBLFFBQVEsRUFBRStELEtBQUssQ0FBQy9ELFFBSmxCO0FBS0VjLElBQUFBLE9BQU8sRUFBRWlELEtBQUssQ0FBQ2pEO0FBTGpCO0FBT0Q7O0FBRUQsSUFBTWtELGtCQUFrQixHQUFHLEVBQTNCOztBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLFFBQUQ7QUFBQSxTQUFjQSxRQUFkO0FBQUEsQ0FBcEI7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDRCxRQUFELEVBQVdqSCxLQUFYO0FBQUEsU0FBcUJBLEtBQUssQ0FBQ21ILE9BQU4sSUFBaUJKLGtCQUF0QztBQUFBLENBQXZCOztBQUVBLFNBQVNLLHFCQUFULEdBQWlDO0FBQy9CLFNBQU8sOEJBQ0wsQ0FBQ0osV0FBRCxFQUFjRSxjQUFkLENBREssRUFFTCxVQUFDRCxRQUFELEVBQVdJLFdBQVgsRUFBMkI7QUFBQSxlQU1yQixDQUNGQyxlQURFLEVBRUZDLGVBRkUsRUFHRkMsZUFIRSxFQUlGQyxjQUpFLEVBS0Y1RixHQUxFLENBS0UsVUFBQXNGLE9BQU87QUFBQSxhQUNYLCtCQUFtQk8sWUFBWSxDQUFDUCxPQUFELEVBQVVFLFdBQVYsQ0FBL0IsRUFBdURKLFFBQXZELENBRFc7QUFBQSxLQUxULENBTnFCO0FBQUE7QUFBQSxRQUV2QmxELGVBRnVCO0FBQUEsUUFHdkJYLGVBSHVCO0FBQUEsUUFJdkJiLGVBSnVCO0FBQUEsUUFLdkJ5QixjQUx1Qjs7QUFlekIsV0FBTztBQUNMRCxNQUFBQSxlQUFlLEVBQWZBLGVBREs7QUFFTFgsTUFBQUEsZUFBZSxFQUFmQSxlQUZLO0FBR0xiLE1BQUFBLGVBQWUsRUFBZkEsZUFISztBQUlMeUIsTUFBQUEsY0FBYyxFQUFkQSxjQUpLO0FBS0xpRCxNQUFBQSxRQUFRLEVBQVJBO0FBTEssS0FBUDtBQU9ELEdBeEJJLENBQVA7QUEwQkQ7O0FBRUQsU0FBU0osc0JBQVQsR0FBa0M7QUFDaEMsTUFBTWMsaUJBQWlCLEdBQUdQLHFCQUFxQixFQUEvQzs7QUFDQSxNQUFNUSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNYLFFBQUQsRUFBV1ksUUFBWCxFQUF3QjtBQUNqRCxRQUFNQyxxQkFBcUIsR0FBR0gsaUJBQWlCLENBQUNWLFFBQUQsRUFBV1ksUUFBWCxDQUEvQztBQUVBLDhDQUNLQyxxQkFETDtBQUVFYixNQUFBQSxRQUFRLEVBQVJBO0FBRkY7QUFJRCxHQVBEOztBQVNBLFNBQU9XLGtCQUFQO0FBQ0Q7QUFFRDs7Ozs7QUFHQSxTQUFTRixZQUFULENBQXNCUCxPQUF0QixFQUErQkUsV0FBL0IsRUFBNEM7QUFDMUMsTUFBTVUsU0FBUyxHQUFHLEVBQWxCOztBQUNBLE9BQUssSUFBTUMsR0FBWCxJQUFrQlgsV0FBbEIsRUFBK0I7QUFDN0IsUUFBSUEsV0FBVyxDQUFDWSxjQUFaLENBQTJCRCxHQUEzQixLQUFtQ2IsT0FBTyxDQUFDYyxjQUFSLENBQXVCRCxHQUF2QixDQUF2QyxFQUFvRTtBQUNsRUQsTUFBQUEsU0FBUyxDQUFDQyxHQUFELENBQVQsR0FBaUJYLFdBQVcsQ0FBQ1csR0FBRCxDQUE1QjtBQUNEO0FBQ0Y7O0FBRUQsNENBQVdiLE9BQVgsRUFBdUJZLFNBQXZCO0FBQ0Q7O2VBRWM1SCxlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHN0eWxlZCwge1RoZW1lUHJvdmlkZXIsIHdpdGhUaGVtZX0gIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7Y29ubmVjdCBhcyBrZXBsZXJHbENvbm5lY3R9IGZyb20gJ2Nvbm5lY3Qva2VwbGVyZ2wtY29ubmVjdCc7XG5cbmltcG9ydCAqIGFzIFZpc1N0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL3Zpcy1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0YXRlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdGF0ZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIE1hcFN0eWxlQWN0aW9ucyBmcm9tICdhY3Rpb25zL21hcC1zdHlsZS1hY3Rpb25zJztcbmltcG9ydCAqIGFzIFVJU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvdWktc3RhdGUtYWN0aW9ucyc7XG5cbmltcG9ydCB7RVhQT1JUX0lNQUdFX0lELCBESU1FTlNJT05TLFxuICBLRVBMRVJfR0xfTkFNRSwgS0VQTEVSX0dMX1ZFUlNJT04sIFRIRU1FfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmltcG9ydCBTaWRlUGFuZWxGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbCc7XG5pbXBvcnQgTWFwQ29udGFpbmVyRmFjdG9yeSBmcm9tICcuL21hcC1jb250YWluZXInO1xuaW1wb3J0IEJvdHRvbVdpZGdldEZhY3RvcnkgZnJvbSAnLi9ib3R0b20td2lkZ2V0JztcbmltcG9ydCBNb2RhbENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IFBsb3RDb250YWluZXJGYWN0b3J5IGZyb20gJy4vcGxvdC1jb250YWluZXInO1xuaW1wb3J0IE5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeSBmcm9tICcuL25vdGlmaWNhdGlvbi1wYW5lbCc7XG5cbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWR9IGZyb20gJ3V0aWxzL3V0aWxzJztcblxuaW1wb3J0IHt0aGVtZSBhcyBiYXNpY1RoZW1lLCB0aGVtZUxUfSBmcm9tICdzdHlsZXMvYmFzZSc7XG5cbi8vIE1heWJlIHdlIHNob3VsZCB0aGluayBhYm91dCBleHBvcnRpbmcgdGhpcyBvciBjcmVhdGluZyBhIHZhcmlhYmxlXG4vLyBhcyBwYXJ0IG9mIHRoZSBiYXNlLmpzIHRoZW1lXG5jb25zdCBHbG9iYWxTdHlsZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtZmFtaWx5OiBmZi1jbGFuLXdlYi1wcm8sICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xuICBsaW5lLWhlaWdodDogMS43MTQyOTtcblxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgfVxuYDtcblxuS2VwbGVyR2xGYWN0b3J5LmRlcHMgPSBbXG4gIEJvdHRvbVdpZGdldEZhY3RvcnksXG4gIE1hcENvbnRhaW5lckZhY3RvcnksXG4gIE1vZGFsQ29udGFpbmVyRmFjdG9yeSxcbiAgU2lkZVBhbmVsRmFjdG9yeSxcbiAgUGxvdENvbnRhaW5lckZhY3RvcnksXG4gIE5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gS2VwbGVyR2xGYWN0b3J5KFxuICBCb3R0b21XaWRnZXQsXG4gIE1hcENvbnRhaW5lcixcbiAgTW9kYWxXcmFwcGVyLFxuICBTaWRlUGFuZWwsXG4gIFBsb3RDb250YWluZXIsXG4gIE5vdGlmaWNhdGlvblBhbmVsXG4pIHtcbiAgY2xhc3MgS2VwbGVyR0wgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBtYXBTdHlsZXM6IFtdLFxuICAgICAgd2lkdGg6IDgwMCxcbiAgICAgIGhlaWdodDogODAwLFxuICAgICAgYXBwTmFtZTogS0VQTEVSX0dMX05BTUUsXG4gICAgICB2ZXJzaW9uOiBLRVBMRVJfR0xfVkVSU0lPTixcbiAgICAgIHNpZGVQYW5lbFdpZHRoOiBESU1FTlNJT05TLnNpZGVQYW5lbC53aWR0aCxcbiAgICAgIHRoZW1lOiB7fVxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLl9sb2FkTWFwU3R5bGUodGhpcy5wcm9wcy5tYXBTdHlsZXMpO1xuICAgICAgdGhpcy5faGFuZGxlUmVzaXplKHRoaXMucHJvcHMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIGlmIGRpbWVuc2lvbiBwcm9wcyBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLnByb3BzLmhlaWdodCAhPT0gbmV4dFByb3BzLmhlaWdodCB8fFxuICAgICAgICB0aGlzLnByb3BzLndpZHRoICE9PSBuZXh0UHJvcHMud2lkdGggfHxcbiAgICAgICAgLy8gcmVhY3QtbWFwLWdsIHdpbGwgZGlzcGF0Y2ggdXBkYXRlVmlld3BvcnQgYWZ0ZXIgdGhpcy5faGFuZGxlUmVzaXplIGlzIGNhbGxlZFxuICAgICAgICAvLyBoZXJlIHdlIGNoZWNrIGlmIHRoaXMucHJvcHMubWFwU3RhdGUuaGVpZ2h0IGlzIHN5bmMgd2l0aCBwcm9wcy5oZWlnaHRcbiAgICAgICAgbmV4dFByb3BzLmhlaWdodCAhPT0gdGhpcy5wcm9wcy5tYXBTdGF0ZS5oZWlnaHRcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9oYW5kbGVSZXNpemUobmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBzZWxlY3RvciAqL1xuICAgIHRoZW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy50aGVtZTtcbiAgICBhdmFpbGFibGVUaGVtZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLnRoZW1lU2VsZWN0b3IsXG4gICAgICB0aGVtZSA9PiB0eXBlb2YgdGhlbWUgPT09ICdvYmplY3QnID8gKHtcbiAgICAgICAgLi4uYmFzaWNUaGVtZSxcbiAgICAgICAgLi4udGhlbWVcbiAgICAgIH0pIDogdGhlbWUgPT09IFRIRU1FLmxpZ2h0ID8gdGhlbWVMVCA6IHRoZW1lXG4gICAgKTtcblxuICAgIF9oYW5kbGVSZXNpemUoe3dpZHRoLCBoZWlnaHR9KSB7XG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh3aWR0aCkgfHwgIU51bWJlci5pc0Zpbml0ZShoZWlnaHQpKSB7XG4gICAgICAgIENvbnNvbGUud2Fybignd2lkdGggYW5kIGhlaWdodCBpcyByZXF1aXJlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAoe1xuICAgICAgICB3aWR0aDogd2lkdGggLyAoMSArIE51bWJlcih0aGlzLnByb3BzLm1hcFN0YXRlLmlzU3BsaXQpKSxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfbG9hZE1hcFN0eWxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdFN0eWxlcyA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5tYXBTdHlsZS5tYXBTdHlsZXMpO1xuICAgICAgLy8gYWRkIGlkIHRvIGN1c3RvbSBtYXAgc3R5bGVzIGlmIG5vdCBnaXZlblxuICAgICAgY29uc3QgY3VzdG9tU3R5bGVzID0gKHRoaXMucHJvcHMubWFwU3R5bGVzIHx8IFtdKS5tYXAobXMgPT4gKHtcbiAgICAgICAgLi4ubXMsXG4gICAgICAgIGlkOiBtcy5pZCB8fCBnZW5lcmF0ZUhhc2hJZCgpXG4gICAgICB9KSk7XG5cbiAgICAgIGNvbnN0IGFsbFN0eWxlcyA9IFsuLi5jdXN0b21TdHlsZXMsIC4uLmRlZmF1bHRTdHlsZXNdLnJlZHVjZSgoYWNjdSwgc3R5bGUpID0+IHtcbiAgICAgICAgICBjb25zdCBoYXNTdHlsZU9iamVjdCA9IHN0eWxlLnN0eWxlICYmIHR5cGVvZiBzdHlsZS5zdHlsZSA9PT0gJ29iamVjdCc7XG4gICAgICAgICAgYWNjdVtoYXNTdHlsZU9iamVjdCA/ICd0b0xvYWQnIDogJ3RvUmVxdWVzdCddW3N0eWxlLmlkXSA9IHN0eWxlO1xuXG4gICAgICAgICAgcmV0dXJuIGFjY3U7XG4gICAgICAgIH0sIHt0b0xvYWQ6IHt9LCB0b1JlcXVlc3Q6IHt9fVxuICAgICAgKTtcblxuICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMubG9hZE1hcFN0eWxlcyhhbGxTdHlsZXMudG9Mb2FkKTtcbiAgICAgIHRoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLnJlcXVlc3RNYXBTdHlsZXMoYWxsU3R5bGVzLnRvUmVxdWVzdCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgLy8gcHJvcHNcbiAgICAgICAgaWQsXG4gICAgICAgIGFwcE5hbWUsXG4gICAgICAgIHZlcnNpb24sXG4gICAgICAgIG9uU2F2ZU1hcCxcbiAgICAgICAgb25WaWV3U3RhdGVDaGFuZ2UsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBnZXRNYXBib3hSZWYsXG5cbiAgICAgICAgLy8gcmVkdXggc3RhdGVcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcblxuICAgICAgICAvLyBhY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9uc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBzcGxpdE1hcHMsIC8vIHRoaXMgd2lsbCBzdG9yZSBzdXBwb3J0IGZvciBzcGxpdCBtYXAgdmlldyBpcyBuZWNlc3NhcnlcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGxheWVyRGF0YSxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkXG4gICAgICB9ID0gdmlzU3RhdGU7XG5cbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvblBhbmVsRmllbGRzID0ge1xuICAgICAgICByZW1vdmVOb3RpZmljYXRpb246IHVpU3RhdGVBY3Rpb25zLnJlbW92ZU5vdGlmaWNhdGlvbixcbiAgICAgICAgbm90aWZpY2F0aW9uczogdWlTdGF0ZS5ub3RpZmljYXRpb25zXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzaWRlRmllbGRzID0ge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHdpZHRoOiB0aGlzLnByb3BzLnNpZGVQYW5lbFdpZHRoXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBtYXBGaWVsZHMgPSB7XG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBtYXBDb250cm9sczogdWlTdGF0ZS5tYXBDb250cm9scyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllckRhdGEsXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBob3ZlckluZm8sXG4gICAgICAgIGNsaWNrZWQsXG4gICAgICAgIHRvZ2dsZU1hcENvbnRyb2w6IHVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1hcENvbnRyb2wsXG4gICAgICAgIG9uVmlld1N0YXRlQ2hhbmdlLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdGF0ZUFjdGlvbnNcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XG4gICAgICBjb25zdCBjb250YWluZXJXID0gbWFwU3RhdGUud2lkdGggKiAoTnVtYmVyKGlzU3BsaXQpICsgMSk7XG5cbiAgICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgICBpbmRleD17MH1cbiAgICAgICAgICAgICAgey4uLm1hcEZpZWxkc31cbiAgICAgICAgICAgICAgbWFwTGF5ZXJzPXtpc1NwbGl0ID8gc3BsaXRNYXBzWzBdLmxheWVycyA6IG51bGx9XG4gICAgICAgICAgICAgIGdldE1hcGJveFJlZj17Z2V0TWFwYm94UmVmfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICBdXG4gICAgICAgIDogc3BsaXRNYXBzLm1hcCgoc2V0dGluZ3MsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TWFwQ29udGFpbmVyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgey4uLm1hcEZpZWxkc31cbiAgICAgICAgICAgICAgbWFwTGF5ZXJzPXtzcGxpdE1hcHNbaW5kZXhdLmxheWVyc31cbiAgICAgICAgICAgICAgZ2V0TWFwYm94UmVmPXtnZXRNYXBib3hSZWZ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpO1xuXG4gICAgICBjb25zdCBpc0V4cG9ydGluZyA9IHVpU3RhdGUuY3VycmVudE1vZGFsID09PSBFWFBPUlRfSU1BR0VfSUQ7XG5cbiAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy5hdmFpbGFibGVUaGVtZVNlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxHbG9iYWxTdHlsZVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtlcGxlci1nbFwiXG4gICAgICAgICAgICBpZD17YGtlcGxlci1nbF9fJHtpZH1gfVxuICAgICAgICAgICAgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5yb290ID0gbm9kZTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblBhbmVsIHsuLi5ub3RpZmljYXRpb25QYW5lbEZpZWxkc30gLz5cbiAgICAgICAgICAgIHshdWlTdGF0ZS5yZWFkT25seSAmJiA8U2lkZVBhbmVsIHsuLi5zaWRlRmllbGRzfSAvPn1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwc1wiIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgICAgIHttYXBDb250YWluZXJzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aXNFeHBvcnRpbmcgJiZcbiAgICAgICAgICAgICAgPFBsb3RDb250YWluZXJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2VTZXR0aW5nPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG1hcEZpZWxkcz17bWFwRmllbGRzfVxuICAgICAgICAgICAgICAgIHN0YXJ0RXhwb3J0aW5nSW1hZ2U9e3VpU3RhdGVBY3Rpb25zLnN0YXJ0RXhwb3J0aW5nSW1hZ2V9XG4gICAgICAgICAgICAgICAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZURhdGFVcml9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8Qm90dG9tV2lkZ2V0XG4gICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgdWlTdGF0ZT17dWlTdGF0ZX1cbiAgICAgICAgICAgICAgdmlzU3RhdGVBY3Rpb25zPXt2aXNTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgIHNpZGVQYW5lbFdpZHRoPXtcbiAgICAgICAgICAgICAgICB1aVN0YXRlLnJlYWRPbmx5ID8gMCA6IHRoaXMucHJvcHMuc2lkZVBhbmVsV2lkdGggKyBESU1FTlNJT05TLnNpZGVQYW5lbC5tYXJnaW4ubGVmdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1vZGFsV3JhcHBlclxuICAgICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGV9XG4gICAgICAgICAgICAgIHZpc1N0YXRlPXt2aXNTdGF0ZX1cbiAgICAgICAgICAgICAgbWFwU3RhdGU9e21hcFN0YXRlfVxuICAgICAgICAgICAgICB1aVN0YXRlPXt1aVN0YXRlfVxuICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17bWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICB1aVN0YXRlQWN0aW9ucz17dWlTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgIG1hcFN0eWxlQWN0aW9ucz17bWFwU3R5bGVBY3Rpb25zfVxuICAgICAgICAgICAgICByb290Tm9kZT17dGhpcy5yb290fVxuICAgICAgICAgICAgICBjb250YWluZXJXPXtjb250YWluZXJXfVxuICAgICAgICAgICAgICBjb250YWluZXJIPXttYXBTdGF0ZS5oZWlnaHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR2xvYmFsU3R5bGU+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGtlcGxlckdsQ29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1ha2VNYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhUaGVtZShLZXBsZXJHTCkpO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvcHMsXG4gICAgdmlzU3RhdGU6IHN0YXRlLnZpc1N0YXRlLFxuICAgIG1hcFN0eWxlOiBzdGF0ZS5tYXBTdHlsZSxcbiAgICBtYXBTdGF0ZTogc3RhdGUubWFwU3RhdGUsXG4gICAgdWlTdGF0ZTogc3RhdGUudWlTdGF0ZVxuICB9O1xufVxuXG5jb25zdCBkZWZhdWx0VXNlckFjdGlvbnMgPSB7fTtcbmNvbnN0IGdldERpc3BhdGNoID0gKGRpc3BhdGNoKSA9PiBkaXNwYXRjaFxuY29uc3QgZ2V0VXNlckFjdGlvbnMgPSAoZGlzcGF0Y2gsIHByb3BzKSA9PiBwcm9wcy5hY3Rpb25zIHx8IGRlZmF1bHRVc2VyQWN0aW9ucztcblxuZnVuY3Rpb24gbWFrZUdldEFjdGlvbkNyZWF0b3JzKCkge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgW2dldERpc3BhdGNoLCBnZXRVc2VyQWN0aW9uc10sXG4gICAgKGRpc3BhdGNoLCB1c2VyQWN0aW9ucykgPT4ge1xuICAgICAgY29uc3QgW1xuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgICB1aVN0YXRlQWN0aW9uc1xuICAgICAgXSA9IFtcbiAgICAgICAgVmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBNYXBTdGF0ZUFjdGlvbnMsXG4gICAgICAgIE1hcFN0eWxlQWN0aW9ucyxcbiAgICAgICAgVUlTdGF0ZUFjdGlvbnNcbiAgICAgIF0ubWFwKGFjdGlvbnMgPT5cbiAgICAgICAgYmluZEFjdGlvbkNyZWF0b3JzKG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucyksIGRpc3BhdGNoKVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIGRpc3BhdGNoXG4gICAgICB9O1xuICAgIH1cbiAgKTtcbn1cblxuZnVuY3Rpb24gbWFrZU1hcERpc3BhdGNoVG9Qcm9wcygpIHtcbiAgY29uc3QgZ2V0QWN0aW9uQ3JlYXRvcnMgPSBtYWtlR2V0QWN0aW9uQ3JlYXRvcnMoKTtcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGdyb3VwZWRBY3Rpb25DcmVhdG9ycyA9IGdldEFjdGlvbkNyZWF0b3JzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZ3JvdXBlZEFjdGlvbkNyZWF0b3JzLFxuICAgICAgZGlzcGF0Y2hcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcztcbn1cblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IGtlcGxlci5nbCBhY3Rpb25zIHdpdGggdXNlciBkZWZpbmVkIGFjdGlvbnMgdXNpbmcgdGhlIHNhbWUga2V5XG4gKi9cbmZ1bmN0aW9uIG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucykge1xuICBjb25zdCBvdmVycmlkZXMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdXNlckFjdGlvbnMpIHtcbiAgICBpZiAodXNlckFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG92ZXJyaWRlc1trZXldID0gdXNlckFjdGlvbnNba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gey4uLmFjdGlvbnMsIC4uLm92ZXJyaWRlc307XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtlcGxlckdsRmFjdG9yeTtcbiJdfQ==