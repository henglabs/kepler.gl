"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _switch = _interopRequireDefault(require("./switch"));

var _utils = require("../../utils/utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 12px;\n\n  .map-layer-selector__item {\n    margin: 12px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  // Required
  layers: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  onMapToggleLayer: _propTypes["default"].func.isRequired
};
var MapLayerSelect = styled.div(_templateObject());

var MapLayerSelector = function MapLayerSelector(_ref) {
  var layers = _ref.layers,
      onMapToggleLayer = _ref.onMapToggleLayer;
  return _react["default"].createElement(MapLayerSelect, {
    className: "map-layer-selector"
  }, layers.map(function (layer, index) {
    return _react["default"].createElement("div", {
      key: layer.id,
      className: "map-layer-selector__item"
    }, _react["default"].createElement(_switch["default"], {
      checked: layer.isVisible,
      id: "".concat(layer.id, "-toggle-").concat((0, _utils.generateHashId)(4)),
      label: layer.name,
      onChange: function onChange(e) {
        e.preventDefault();
        onMapToggleLayer(layer.id);
      }
    }));
  }));
};

MapLayerSelector.propTypes = propTypes;
var _default = MapLayerSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9tYXAtbGF5ZXItc2VsZWN0b3IuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwibGF5ZXJzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJvbk1hcFRvZ2dsZUxheWVyIiwiZnVuYyIsIk1hcExheWVyU2VsZWN0Iiwic3R5bGVkIiwiZGl2IiwiTWFwTGF5ZXJTZWxlY3RvciIsIm1hcCIsImxheWVyIiwiaW5kZXgiLCJpZCIsImlzVmlzaWJsZSIsIm5hbWUiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBRztBQUNoQjtBQUNBQyxFQUFBQSxNQUFNLEVBQUVDLHNCQUFVQyxPQUFWLENBQWtCRCxzQkFBVUUsTUFBNUIsRUFBb0NDLFVBRjVCO0FBR2hCQyxFQUFBQSxnQkFBZ0IsRUFBRUosc0JBQVVLLElBQVYsQ0FBZUY7QUFIakIsQ0FBbEI7QUFNQSxJQUFNRyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBcEI7O0FBUUEsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUVWLE1BQUYsUUFBRUEsTUFBRjtBQUFBLE1BQVVLLGdCQUFWLFFBQVVBLGdCQUFWO0FBQUEsU0FDdkIsZ0NBQUMsY0FBRDtBQUFnQixJQUFBLFNBQVMsRUFBQztBQUExQixLQUNHTCxNQUFNLENBQUNXLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxXQUNWO0FBQUssTUFBQSxHQUFHLEVBQUVELEtBQUssQ0FBQ0UsRUFBaEI7QUFBb0IsTUFBQSxTQUFTLEVBQUM7QUFBOUIsT0FDRSxnQ0FBQyxrQkFBRDtBQUNFLE1BQUEsT0FBTyxFQUFFRixLQUFLLENBQUNHLFNBRGpCO0FBRUUsTUFBQSxFQUFFLFlBQUtILEtBQUssQ0FBQ0UsRUFBWCxxQkFBd0IsMkJBQWUsQ0FBZixDQUF4QixDQUZKO0FBR0UsTUFBQSxLQUFLLEVBQUVGLEtBQUssQ0FBQ0ksSUFIZjtBQUlFLE1BQUEsUUFBUSxFQUFFLGtCQUFBQyxDQUFDLEVBQUk7QUFDYkEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FiLFFBQUFBLGdCQUFnQixDQUFDTyxLQUFLLENBQUNFLEVBQVAsQ0FBaEI7QUFDRDtBQVBILE1BREYsQ0FEVTtBQUFBLEdBQVgsQ0FESCxDQUR1QjtBQUFBLENBQXpCOztBQWtCQUosZ0JBQWdCLENBQUNYLFNBQWpCLEdBQTZCQSxTQUE3QjtlQUVlVyxnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnY29tcG9uZW50cy9jb21tb24vc3dpdGNoJztcbmltcG9ydCB7Z2VuZXJhdGVIYXNoSWR9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWxzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvLyBSZXF1aXJlZFxuICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXG4gIG9uTWFwVG9nZ2xlTGF5ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IE1hcExheWVyU2VsZWN0ID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTJweDtcblxuICAubWFwLWxheWVyLXNlbGVjdG9yX19pdGVtIHtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgfVxuYDtcblxuY29uc3QgTWFwTGF5ZXJTZWxlY3RvciA9ICh7bGF5ZXJzLCBvbk1hcFRvZ2dsZUxheWVyfSkgPT4gKFxuICA8TWFwTGF5ZXJTZWxlY3QgY2xhc3NOYW1lPVwibWFwLWxheWVyLXNlbGVjdG9yXCI+XG4gICAge2xheWVycy5tYXAoKGxheWVyLCBpbmRleCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2xheWVyLmlkfSBjbGFzc05hbWU9XCJtYXAtbGF5ZXItc2VsZWN0b3JfX2l0ZW1cIj5cbiAgICAgICAgPFN3aXRjaFxuICAgICAgICAgIGNoZWNrZWQ9e2xheWVyLmlzVmlzaWJsZX1cbiAgICAgICAgICBpZD17YCR7bGF5ZXIuaWR9LXRvZ2dsZS0ke2dlbmVyYXRlSGFzaElkKDQpfWB9XG4gICAgICAgICAgbGFiZWw9e2xheWVyLm5hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb25NYXBUb2dnbGVMYXllcihsYXllci5pZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICkpfVxuICA8L01hcExheWVyU2VsZWN0PlxuKTtcblxuTWFwTGF5ZXJTZWxlY3Rvci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcExheWVyU2VsZWN0b3I7XG4iXX0=