"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlotContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var styled = _interopRequireWildcard(require("styled-components"));

var _reactMapGl = require("react-map-gl");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _window = _interopRequireDefault(require("global/window"));

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _exportImageUtils = require("../utils/export-image-utils");

var _mapboxGlStyleEditor = require("../utils/map-style-utils/mapbox-gl-style-editor");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  exportImageSetting: _propTypes["default"].object.isRequired,
  mapFields: _propTypes["default"].object.isRequired
};
PlotContainerFactory.deps = [_mapContainer["default"]];
var StyledPlotContainer = styled.div(_templateObject());

function PlotContainerFactory(MapContainer) {
  var PlotContainer =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(PlotContainer, _Component);

    function PlotContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, PlotContainer);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PlotContainer).call(this, _props));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleSelector", function (props) {
        return props.mapFields.mapStyle;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resolutionSelector", function (props) {
        return props.exportImageSetting.resolution;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaledMapStyleSelector", (0, _reselect.createSelector)(_this.mapStyleSelector, _this.resolutionSelector, function (mapStyle, resolution) {
        return (0, _objectSpread2["default"])({}, mapStyle, {
          bottomMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.bottomMapStyle, resolution),
          topMapStyle: (0, _mapboxGlStyleEditor.scaleMapStyleByResolution)(mapStyle.topMapStyle, resolution)
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapRender", function (map) {
        if (map.isStyleLoaded()) {
          _this._retrieveNewScreenshot();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_retrieveNewScreenshot", function () {
        if (_this.plottingAreaRef) {
          // setting windowDevicePixelRatio to 1
          // so that large mapbox base map will load in full
          var savedDevicePixelRatio = _window["default"].devicePixelRatio;
          _window["default"].devicePixelRatio = 1;

          _this.props.startExportingImage();

          (0, _exportImageUtils.convertToPng)(_this.plottingAreaRef).then(function (dataUri) {
            _this.props.setExportImageDataUri(dataUri);

            _window["default"].devicePixelRatio = savedDevicePixelRatio;
          });
        }
      });
      _this._onMapRender = (0, _lodash["default"])(_this._onMapRender, 500);
      return _this;
    }

    (0, _createClass2["default"])(PlotContainer, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        this.props.startExportingImage();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(newProps) {
        var _this2 = this;

        // re-fetch the new screenshot only when ratio legend or resolution changes
        var checks = ['ratio', 'resolution', 'legend'];
        var shouldRetrieveScreenshot = checks.some(function (item) {
          return _this2.props.exportImageSetting[item] !== newProps.exportImageSetting[item];
        });

        if (shouldRetrieveScreenshot) {
          this._retrieveNewScreenshot();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props = this.props,
            width = _this$props.width,
            height = _this$props.height,
            exportImageSetting = _this$props.exportImageSetting,
            mapFields = _this$props.mapFields;
        var ratio = exportImageSetting.ratio,
            resolution = exportImageSetting.resolution,
            legend = exportImageSetting.legend;
        var exportImageSize = (0, _exportImageUtils.calculateExportImageSize)({
          width: width,
          height: height,
          ratio: ratio,
          resolution: resolution
        });
        var mapProps = (0, _objectSpread2["default"])({}, mapFields, {
          mapStyle: this.scaledMapStyleSelector(this.props),
          // override viewport based on export settings
          mapState: (0, _objectSpread2["default"])({}, mapFields.mapState, exportImageSize, {
            zoom: mapFields.mapState.zoom + exportImageSize.zoomOffset
          }),
          mapControls: {
            // override map legend visibility
            mapLegend: {
              show: legend,
              active: true
            }
          },
          MapComponent: _reactMapGl.StaticMap
        });
        return _react["default"].createElement(StyledPlotContainer, {
          style: {
            position: 'absolute',
            top: -9999,
            left: -9999
          }
        }, _react["default"].createElement("div", {
          ref: function ref(element) {
            _this3.plottingAreaRef = element;
          },
          style: {
            width: exportImageSize.width,
            height: exportImageSize.height
          }
        }, _react["default"].createElement(MapContainer, (0, _extends2["default"])({
          index: 0,
          onMapRender: this._onMapRender,
          isExport: true
        }, mapProps))));
      }
    }]);
    return PlotContainer;
  }(_react.Component);

  PlotContainer.propsTypes = propTypes;
  return PlotContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3Bsb3QtY29udGFpbmVyLmpzIl0sIm5hbWVzIjpbInByb3BUeXBlcyIsIndpZHRoIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImhlaWdodCIsImV4cG9ydEltYWdlU2V0dGluZyIsIm9iamVjdCIsIm1hcEZpZWxkcyIsIlBsb3RDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJTdHlsZWRQbG90Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTWFwQ29udGFpbmVyIiwiUGxvdENvbnRhaW5lciIsInByb3BzIiwibWFwU3R5bGUiLCJyZXNvbHV0aW9uIiwibWFwU3R5bGVTZWxlY3RvciIsInJlc29sdXRpb25TZWxlY3RvciIsImJvdHRvbU1hcFN0eWxlIiwidG9wTWFwU3R5bGUiLCJtYXAiLCJpc1N0eWxlTG9hZGVkIiwiX3JldHJpZXZlTmV3U2NyZWVuc2hvdCIsInBsb3R0aW5nQXJlYVJlZiIsInNhdmVkRGV2aWNlUGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzdGFydEV4cG9ydGluZ0ltYWdlIiwidGhlbiIsImRhdGFVcmkiLCJzZXRFeHBvcnRJbWFnZURhdGFVcmkiLCJfb25NYXBSZW5kZXIiLCJuZXdQcm9wcyIsImNoZWNrcyIsInNob3VsZFJldHJpZXZlU2NyZWVuc2hvdCIsInNvbWUiLCJpdGVtIiwicmF0aW8iLCJsZWdlbmQiLCJleHBvcnRJbWFnZVNpemUiLCJtYXBQcm9wcyIsInNjYWxlZE1hcFN0eWxlU2VsZWN0b3IiLCJtYXBTdGF0ZSIsInpvb20iLCJ6b29tT2Zmc2V0IiwibWFwQ29udHJvbHMiLCJtYXBMZWdlbmQiLCJzaG93IiwiYWN0aXZlIiwiTWFwQ29tcG9uZW50IiwiU3RhdGljTWFwIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiZWxlbWVudCIsIkNvbXBvbmVudCIsInByb3BzVHlwZXMiXSwibWFwcGluZ3Mi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SyxFQUFFO0FBQUNDLFlBQUFBLFFBQVEsRUFBRSxVQUFYO0FBQXVCQyxZQUFBQSxHQUFHLEVBQUUsQ0FBQyxJQUE3QjtBQUFtQ0MsWUFBQUEsSUFBSSxFQUFFLENBQUM7QUFBMUM7QUFEVCxXQUdFO0FBQ0UsVUFBQSxHQUFHLEVBQUUsYUFBQUMsT0FBTyxFQUFJO0FBQ2QsWUFBQSxNQUFJLENBQUMvQixlQUFMLEdBQXVCK0IsT0FBdkI7QUFDRCxXQUhIO0FBSUUsVUFBQSxLQUFLLEVBQUU7QUFDTHpELFlBQUFBLEtBQUssRUFBRTBDLGVBQWUsQ0FBQzFDLEtBRGxCO0FBRUxJLFlBQUFBLE1BQU0sRUFBRXNDLGVBQWUsQ0FBQ3RDO0FBRm5CO0FBSlQsV0FTRSxnQ0FBQyxZQUFEO0FBQ0UsVUFBQSxLQUFLLEVBQUUsQ0FEVDtBQUVFLFVBQUEsV0FBVyxFQUFFLEtBQUs4QixZQUZwQjtBQUdFLFVBQUEsUUFBUTtBQUhWLFdBSU1TLFFBSk4sRUFURixDQUhGLENBREY7QUFzQkQ7QUFoSHNEO0FBQUE7QUFBQSxJQUM3QmUsZ0JBRDZCOztBQW1IekQzQyxFQUFBQSxhQUFhLENBQUM0QyxVQUFkLEdBQTJCNUQsU0FBM0I7QUFDQSxTQUFPZ0IsYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdGF0aWNNYXB9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbmltcG9ydCBNYXBDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRhaW5lcic7XG5pbXBvcnQge2NhbGN1bGF0ZUV4cG9ydEltYWdlU2l6ZSwgY29udmVydFRvUG5nfSBmcm9tICd1dGlscy9leHBvcnQtaW1hZ2UtdXRpbHMnO1xuaW1wb3J0IHtzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9ufSBmcm9tICd1dGlscy9tYXAtc3R5bGUtdXRpbHMvbWFwYm94LWdsLXN0eWxlLWVkaXRvcic7XG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBleHBvcnRJbWFnZVNldHRpbmc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbWFwRmllbGRzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cblBsb3RDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwQ29udGFpbmVyRmFjdG9yeV07XG5cbmNvbnN0IFN0eWxlZFBsb3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAubWFwYm94Z2wtY3RybC1ib3R0b20tbGVmdCxcbiAgLm1hcGJveGdsLWN0cmwtYm90dG9tLXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbG90Q29udGFpbmVyRmFjdG9yeShNYXBDb250YWluZXIpIHtcbiAgY2xhc3MgUGxvdENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgIHRoaXMuX29uTWFwUmVuZGVyID0gZGVib3VuY2UodGhpcy5fb25NYXBSZW5kZXIsIDUwMCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5zdGFydEV4cG9ydGluZ0ltYWdlKCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgLy8gcmUtZmV0Y2ggdGhlIG5ldyBzY3JlZW5zaG90IG9ubHkgd2hlbiByYXRpbyBsZWdlbmQgb3IgcmVzb2x1dGlvbiBjaGFuZ2VzXG4gICAgICBjb25zdCBjaGVja3MgPSBbJ3JhdGlvJywgJ3Jlc29sdXRpb24nLCAnbGVnZW5kJ107XG4gICAgICBjb25zdCBzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QgPSBjaGVja3Muc29tZShcbiAgICAgICAgaXRlbSA9PlxuICAgICAgICAgIHRoaXMucHJvcHMuZXhwb3J0SW1hZ2VTZXR0aW5nW2l0ZW1dICE9PVxuICAgICAgICAgIG5ld1Byb3BzLmV4cG9ydEltYWdlU2V0dGluZ1tpdGVtXVxuICAgICAgKTtcbiAgICAgIGlmIChzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QpIHtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFwU3R5bGVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLm1hcEZpZWxkcy5tYXBTdHlsZTtcbiAgICByZXNvbHV0aW9uU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5leHBvcnRJbWFnZVNldHRpbmcucmVzb2x1dGlvbjtcbiAgICBzY2FsZWRNYXBTdHlsZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLm1hcFN0eWxlU2VsZWN0b3IsXG4gICAgICB0aGlzLnJlc29sdXRpb25TZWxlY3RvcixcbiAgICAgIChtYXBTdHlsZSwgcmVzb2x1dGlvbikgPT4gKHtcbiAgICAgICAgLi4ubWFwU3R5bGUsXG4gICAgICAgIGJvdHRvbU1hcFN0eWxlOiBzY2FsZU1hcFN0eWxlQnlSZXNvbHV0aW9uKFxuICAgICAgICAgIG1hcFN0eWxlLmJvdHRvbU1hcFN0eWxlLFxuICAgICAgICAgIHJlc29sdXRpb25cbiAgICAgICAgKSxcbiAgICAgICAgdG9wTWFwU3R5bGU6IHNjYWxlTWFwU3R5bGVCeVJlc29sdXRpb24obWFwU3R5bGUudG9wTWFwU3R5bGUsIHJlc29sdXRpb24pXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBfb25NYXBSZW5kZXIgPSBtYXAgPT4ge1xuICAgICAgaWYgKG1hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9yZXRyaWV2ZU5ld1NjcmVlbnNob3QgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wbG90dGluZ0FyZWFSZWYpIHtcbiAgICAgIC8vIHNldHRpbmcgd2luZG93RGV2aWNlUGl4ZWxSYXRpbyB0byAxXG4gICAgICAvLyBzbyB0aGF0IGxhcmdlIG1hcGJveCBiYXNlIG1hcCB3aWxsIGxvYWQgaW4gZnVsbFxuICAgICAgICBjb25zdCBzYXZlZERldmljZVBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPSAxO1xuXG4gICAgICAgIHRoaXMucHJvcHMuc3RhcnRFeHBvcnRpbmdJbWFnZSgpO1xuICAgICAgICBjb252ZXJ0VG9QbmcodGhpcy5wbG90dGluZ0FyZWFSZWYpLnRoZW4oZGF0YVVyaSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5zZXRFeHBvcnRJbWFnZURhdGFVcmkoZGF0YVVyaSk7XG4gICAgICAgICAgd2luZG93LmRldmljZVBpeGVsUmF0aW8gPSBzYXZlZERldmljZVBpeGVsUmF0aW87XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7d2lkdGgsIGhlaWdodCwgZXhwb3J0SW1hZ2VTZXR0aW5nLCBtYXBGaWVsZHN9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtyYXRpbywgcmVzb2x1dGlvbiwgbGVnZW5kfSA9IGV4cG9ydEltYWdlU2V0dGluZztcbiAgICAgIGNvbnN0IGV4cG9ydEltYWdlU2l6ZSA9IGNhbGN1bGF0ZUV4cG9ydEltYWdlU2l6ZSh7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHJhdGlvLFxuICAgICAgICByZXNvbHV0aW9uXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbWFwUHJvcHMgPSB7XG4gICAgICAgIC4uLm1hcEZpZWxkcyxcbiAgICAgICAgbWFwU3R5bGU6IHRoaXMuc2NhbGVkTWFwU3R5bGVTZWxlY3Rvcih0aGlzLnByb3BzKSxcblxuICAgICAgICAvLyBvdmVycmlkZSB2aWV3cG9ydCBiYXNlZCBvbiBleHBvcnQgc2V0dGluZ3NcbiAgICAgICAgbWFwU3RhdGU6IHtcbiAgICAgICAgICAuLi5tYXBGaWVsZHMubWFwU3RhdGUsXG4gICAgICAgICAgLi4uZXhwb3J0SW1hZ2VTaXplLFxuICAgICAgICAgIHpvb206IG1hcEZpZWxkcy5tYXBTdGF0ZS56b29tICsgZXhwb3J0SW1hZ2VTaXplLnpvb21PZmZzZXRcbiAgICAgICAgfSxcbiAgICAgICAgbWFwQ29udHJvbHM6IHtcbiAgICAgICAgICAvLyBvdmVycmlkZSBtYXAgbGVnZW5kIHZpc2liaWxpdHlcbiAgICAgICAgICBtYXBMZWdlbmQ6IHtcbiAgICAgICAgICAgIHNob3c6IGxlZ2VuZCxcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgTWFwQ29tcG9uZW50OiBTdGF0aWNNYXBcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRQbG90Q29udGFpbmVyXG4gICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAtOTk5OSwgbGVmdDogLTk5OTl9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wbG90dGluZ0FyZWFSZWYgPSBlbGVtZW50O1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBleHBvcnRJbWFnZVNpemUud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogZXhwb3J0SW1hZ2VTaXplLmhlaWdodFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWFwQ29udGFpbmVyXG4gICAgICAgICAgICAgIGluZGV4PXswfVxuICAgICAgICAgICAgICBvbk1hcFJlbmRlcj17dGhpcy5fb25NYXBSZW5kZXJ9XG4gICAgICAgICAgICAgIGlzRXhwb3J0XG4gICAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU3R5bGVkUGxvdENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgUGxvdENvbnRhaW5lci5wcm9wc1R5cGVzID0gcHJvcFR5cGVzO1xuICByZXR1cm4gUGxvdENvbnRhaW5lcjtcbn1cbiJdfQ==