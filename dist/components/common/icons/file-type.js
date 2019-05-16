"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _index = require("./index");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  position: relative;\n  color: currentColor;\n  height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: currentColor;\n  border-radius: 1px;\n  display: inline-block;\n  padding: 0 4px;\n  position: absolute;\n  top: 45%;\n  left: 10%;\n\n  .text {\n    color: white;\n    font-size: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FileNameTag = styled.div(_templateObject(), function (props) {
  return props.fontSize;
});
var FileTypeIconWrapper = styled.div(_templateObject2(), function (props) {
  return props.height;
});

var FileTypeIcon = function FileTypeIcon(_ref) {
  var ext = _ref.ext,
      height = _ref.height,
      fontSize = _ref.fontSize;
  return _react["default"].createElement(FileTypeIconWrapper, {
    height: height
  }, _react["default"].createElement(_index.File, {
    height: height
  }), _react["default"].createElement(FileNameTag, {
    fontSize: fontSize
  }, _react["default"].createElement("div", {
    className: "text"
  }, ext)));
};

var _default = FileTypeIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pY29ucy9maWxlLXR5cGUuanMiXSwibmFtZXMiOlsiRmlsZU5hbWVUYWciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImZvbnRTaXplIiwiRmlsZVR5cGVJY29uV3JhcHBlciIsImhlaWdodCIsIkZpbGVUeXBlSWNvbiIsImV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQVdBLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLFFBQVY7QUFBQSxDQVhMLENBQWpCO0FBZUEsSUFBTUMsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0MsR0FBVixxQkFJYixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRyxNQUFWO0FBQUEsQ0FKUSxDQUF6Qjs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUVDLEdBQUYsUUFBRUEsR0FBRjtBQUFBLE1BQU9GLE1BQVAsUUFBT0EsTUFBUDtBQUFBLE1BQWVGLFFBQWYsUUFBZUEsUUFBZjtBQUFBLFNBQ25CLGdDQUFDLG1CQUFEO0FBQXFCLElBQUEsTUFBTSxFQUFFRTtBQUE3QixLQUNFLGdDQUFDLFdBQUQ7QUFBTSxJQUFBLE1BQU0sRUFBRUE7QUFBZCxJQURGLEVBRUUsZ0NBQUMsV0FBRDtBQUFhLElBQUEsUUFBUSxFQUFFRjtBQUF2QixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUF1QkksR0FBdkIsQ0FERixDQUZGLENBRG1CO0FBQUEsQ0FBckI7O2VBU2VELFkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtGaWxlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IEZpbGVOYW1lVGFnID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMCA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDEwJTtcblxuICAudGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5mb250U2l6ZX07XG4gIH1cbmA7XG5cbmNvbnN0IEZpbGVUeXBlSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLmhlaWdodH07XG5gO1xuXG5jb25zdCBGaWxlVHlwZUljb24gPSAoe2V4dCwgaGVpZ2h0LCBmb250U2l6ZX0pID0+IChcbiAgPEZpbGVUeXBlSWNvbldyYXBwZXIgaGVpZ2h0PXtoZWlnaHR9PlxuICAgIDxGaWxlIGhlaWdodD17aGVpZ2h0fSAvPlxuICAgIDxGaWxlTmFtZVRhZyBmb250U2l6ZT17Zm9udFNpemV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2V4dH08L2Rpdj5cbiAgICA8L0ZpbGVOYW1lVGFnPlxuICA8L0ZpbGVUeXBlSWNvbldyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlVHlwZUljb247XG4iXX0=