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

var _d3Array = require("d3-array");

var styled = _interopRequireWildcard(require("styled-components"));

var _colorUtils = require("../../../utils/color-utils");

var _colorPalette = require("../../../constants/color-palette");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  height: ", ";\n  border-width: 1px;\n  border-style: solid;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 12px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var propTypes = {
  onSelectColor: _propTypes["default"].func.isRequired,
  // hex value
  selectedColor: _propTypes["default"].string.isRequired
};
var PALETTE_HEIGHT = '8px';
var ROWS = 16;
var StyledColorPalette = styled.div(_templateObject());
var StyledColorColumn = styled.div(_templateObject2());
var StyledColorBlock = styled.div(_templateObject3(), PALETTE_HEIGHT);

var SingleColorPalette = function SingleColorPalette(_ref) {
  var selectedColor = _ref.selectedColor,
      onSelectColor = _ref.onSelectColor;
  return _react["default"].createElement(StyledColorPalette, {
    className: "single-color-palette"
  }, _colorPalette.Themes.map(function (theme, col) {
    return _react["default"].createElement(StyledColorColumn, {
      key: theme
    }, (0, _d3Array.range)(1, ROWS + 1, 1).map(function (key, i) {
      return _react["default"].createElement(StyledColorBlock, {
        style: {
          backgroundColor: _colorPalette.ColorsByTheme[theme][String(key)],
          borderColor: selectedColor === _colorPalette.ColorsByTheme[theme][String(key)].toUpperCase() ? 'white' : _colorPalette.ColorsByTheme[theme][String(key)]
        },
        key: "".concat(theme, "_").concat(key),
        selected: selectedColor === _colorPalette.ColorsByTheme[theme][String(key)].toUpperCase(),
        onClick: function onClick(e) {
          return onSelectColor((0, _colorUtils.hexToRgb)(_colorPalette.ColorsByTheme[theme][String(key)]), e);
        }
      });
    }));
  }));
};

SingleColorPalette.propTypes = propTypes;
var _default = SingleColorPalette;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvc2luZ2xlLWNvbG9yLXBhbGV0dGUuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwib25TZWxlY3RDb2xvciIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic2VsZWN0ZWRDb2xvciIsInN0cmluZyIsIlBBTEVUVEVfSEVJR0hUIiwiUk9XUyIsIlN0eWxlZENvbG9yUGFsZXR0ZSIsInN0eWxlZCIsImRpdiIsIlN0eWxlZENvbG9yQ29sdW1uIiwiU3R5bGVkQ29sb3JCbG9jayIsIlNpbmdsZUNvbG9yUGFsZXR0ZSIsIlRoZW1lcyIsIm1hcCIsInRoZW1lIiwiY29sIiwia2V5IiwiaSIsImJhY2tncm91bmRDb2xvciIsIkNvbG9yc0J5VGhlbWUiLCJTdHJpbmciLCJib3JkZXJDb2xvciIsInRvVXBwZXJDYXNlIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLGFBQWEsRUFBRUMsc0JBQVVDLElBQVYsQ0FBZUMsVUFEZDtBQUVoQjtBQUNBQyxFQUFBQSxhQUFhLEVBQUVILHNCQUFVSSxNQUFWLENBQWlCRjtBQUhoQixDQUFsQjtBQU1BLElBQU1HLGNBQWMsR0FBRyxLQUF2QjtBQUNBLElBQU1DLElBQUksR0FBRyxFQUFiO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBeEI7QUFXQSxJQUFNQyxpQkFBaUIsR0FBR0YsTUFBTSxDQUFDQyxHQUFWLG9CQUF2QjtBQU9BLElBQU1FLGdCQUFnQixHQUFHSCxNQUFNLENBQUNDLEdBQVYscUJBRVZKLGNBRlUsQ0FBdEI7O0FBT0EsSUFBTU8sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUVULGFBQUYsUUFBRUEsYUFBRjtBQUFBLE1BQWlCSixhQUFqQixRQUFpQkEsYUFBakI7QUFBQSxTQUN6QixnQ0FBQyxrQkFBRDtBQUFvQixJQUFBLFNBQVMsRUFBQztBQUE5QixLQUNHYyxxQkFBT0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUjtBQUFBLFdBQ1YsZ0NBQUMsaUJBQUQ7QUFBbUIsTUFBQSxHQUFHLEVBQUVEO0FBQXhCLE9BQ0csb0JBQU0sQ0FBTixFQUFTVCxJQUFJLEdBQUcsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0JRLEdBQXRCLENBQTBCLFVBQUNHLEdBQUQsRUFBTUMsQ0FBTjtBQUFBLGFBQ3pCLGdDQUFDLGdCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUU7QUFDTEMsVUFBQUEsZUFBZSxFQUFFQyw0QkFBY0wsS0FBZCxFQUFxQk0sTUFBTSxDQUFDSixHQUFELENBQTNCLENBRFo7QUFFTEssVUFBQUEsV0FBVyxFQUNUbkIsYUFBYSxLQUNiaUIsNEJBQWNMLEtBQWQsRUFBcUJNLE1BQU0sQ0FBQ0osR0FBRCxDQUEzQixFQUFrQ00sV0FBbEMsRUFEQSxHQUVJLE9BRkosR0FHSUgsNEJBQWNMLEtBQWQsRUFBcUJNLE1BQU0sQ0FBQ0osR0FBRCxDQUEzQjtBQU5ELFNBRFQ7QUFTRSxRQUFBLEdBQUcsWUFBS0YsS0FBTCxjQUFjRSxHQUFkLENBVEw7QUFVRSxRQUFBLFFBQVEsRUFDTmQsYUFBYSxLQUFLaUIsNEJBQWNMLEtBQWQsRUFBcUJNLE1BQU0sQ0FBQ0osR0FBRCxDQUEzQixFQUFrQ00sV0FBbEMsRUFYdEI7QUFhRSxRQUFBLE9BQU8sRUFBRSxpQkFBQUMsQ0FBQztBQUFBLGlCQUNSekIsYUFBYSxDQUFDLDBCQUFTcUIsNEJBQWNMLEtBQWQsRUFBcUJNLE1BQU0sQ0FBQ0osR0FBRCxDQUEzQixDQUFULENBQUQsRUFBOENPLENBQTlDLENBREw7QUFBQTtBQWJaLFFBRHlCO0FBQUEsS0FBMUIsQ0FESCxDQURVO0FBQUEsR0FBWCxDQURILENBRHlCO0FBQUEsQ0FBM0I7O0FBNEJBWixrQkFBa0IsQ0FBQ2QsU0FBbkIsR0FBK0JBLFNBQS9CO2VBRWVjLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3JhbmdlfSBmcm9tICdkMy1hcnJheSc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtoZXhUb1JnYn0gZnJvbSAndXRpbHMvY29sb3ItdXRpbHMnO1xuXG5pbXBvcnQge0NvbG9yc0J5VGhlbWUsIFRoZW1lc30gZnJvbSAnY29uc3RhbnRzL2NvbG9yLXBhbGV0dGUnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIG9uU2VsZWN0Q29sb3I6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8vIGhleCB2YWx1ZVxuICBzZWxlY3RlZENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IFBBTEVUVEVfSEVJR0hUID0gJzhweCc7XG5jb25zdCBST1dTID0gMTY7XG5cbmNvbnN0IFN0eWxlZENvbG9yUGFsZXR0ZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTJweDtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQ29sb3JDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IFN0eWxlZENvbG9yQmxvY2sgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6IDE7XG4gIGhlaWdodDogJHtQQUxFVFRFX0hFSUdIVH07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuYDtcblxuY29uc3QgU2luZ2xlQ29sb3JQYWxldHRlID0gKHtzZWxlY3RlZENvbG9yLCBvblNlbGVjdENvbG9yfSkgPT4gKFxuICA8U3R5bGVkQ29sb3JQYWxldHRlIGNsYXNzTmFtZT1cInNpbmdsZS1jb2xvci1wYWxldHRlXCI+XG4gICAge1RoZW1lcy5tYXAoKHRoZW1lLCBjb2wpID0+IChcbiAgICAgIDxTdHlsZWRDb2xvckNvbHVtbiBrZXk9e3RoZW1lfT5cbiAgICAgICAge3JhbmdlKDEsIFJPV1MgKyAxLCAxKS5tYXAoKGtleSwgaSkgPT4gKFxuICAgICAgICAgIDxTdHlsZWRDb2xvckJsb2NrXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENvbG9yc0J5VGhlbWVbdGhlbWVdW1N0cmluZyhrZXkpXSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvciA9PT1cbiAgICAgICAgICAgICAgICBDb2xvcnNCeVRoZW1lW3RoZW1lXVtTdHJpbmcoa2V5KV0udG9VcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgPyAnd2hpdGUnXG4gICAgICAgICAgICAgICAgICA6IENvbG9yc0J5VGhlbWVbdGhlbWVdW1N0cmluZyhrZXkpXVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGtleT17YCR7dGhlbWV9XyR7a2V5fWB9XG4gICAgICAgICAgICBzZWxlY3RlZD17XG4gICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3IgPT09IENvbG9yc0J5VGhlbWVbdGhlbWVdW1N0cmluZyhrZXkpXS50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+XG4gICAgICAgICAgICAgIG9uU2VsZWN0Q29sb3IoaGV4VG9SZ2IoQ29sb3JzQnlUaGVtZVt0aGVtZV1bU3RyaW5nKGtleSldKSwgZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvU3R5bGVkQ29sb3JDb2x1bW4+XG4gICAgKSl9XG4gIDwvU3R5bGVkQ29sb3JQYWxldHRlPlxuKTtcblxuU2luZ2xlQ29sb3JQYWxldHRlLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ29sb3JQYWxldHRlO1xuIl19