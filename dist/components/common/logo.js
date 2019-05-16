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

var _defaultSettings = require("../../constants/default-settings");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 3px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: flex-start;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 10px;\n  color: ", ";\n  letter-spacing: 0.83px;\n  line-height: 14px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .logo__link {\n    color: ", ";\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin-left: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LogoTitle = styled.div(_templateObject());
var LogoName = styled.div(_templateObject2(), function (props) {
  return props.theme.activeColor;
});
var LogoVersion = styled.div(_templateObject3(), function (props) {
  return props.theme.subtextColor;
});
var LogoWrapper = styled.div(_templateObject4());
var LogoSvgWrapper = styled.div(_templateObject5());

var LogoSvg = function LogoSvg() {
  return _react["default"].createElement("svg", {
    className: "side-panel-logo__logo",
    width: "22px",
    height: "15px",
    viewBox: "0 0 22 15"
  }, _react["default"].createElement("g", {
    transform: "translate(11, -3) rotate(45.000000)"
  }, _react["default"].createElement("rect", {
    fill: "#535C6C",
    x: "0",
    y: "5",
    width: "10",
    height: "10"
  }), _react["default"].createElement("rect", {
    fill: "#1FBAD6",
    x: "5",
    y: "0",
    width: "10",
    height: "10"
  })));
};

var KeplerGlLogo = function KeplerGlLogo(_ref) {
  var _ref$appName = _ref.appName,
      appName = _ref$appName === void 0 ? _defaultSettings.KEPLER_GL_NAME : _ref$appName,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? _defaultSettings.KEPLER_GL_VERSION : _ref$version;
  return _react["default"].createElement(LogoWrapper, {
    className: "side-panel-logo"
  }, _react["default"].createElement(LogoSvgWrapper, null, _react["default"].createElement(LogoSvg, null)), _react["default"].createElement(LogoTitle, {
    className: "logo__title"
  }, _react["default"].createElement(LogoName, {
    className: "logo__name"
  }, _react["default"].createElement("a", {
    className: "logo__link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: _defaultSettings.KEPLER_GL_WEBSITE
  }, appName)), version ? _react["default"].createElement(LogoVersion, {
    className: "logo__version"
  }, version) : null));
};

KeplerGlLogo.defaultProps = {
  appName: _propTypes["default"].string,
  version: _propTypes["default"].string
};
var _default = KeplerGlLogo;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2dvLmpzIl0sIm5hbWVzIjpbIkxvZ29UaXRsZSIsInN0eWxlZCIsImRpdiIsIkxvZ29OYW1lIiwicHJvcHMiLCJ0aGVtZSIsImFjdGl2ZUNvbG9yIiwiTG9nb1ZlcnNpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMb2dvV3JhcHBlciIsIkxvZ29TdmdXcmFwcGVyIiwiTG9nb1N2ZyIsIktlcGxlckdsTG9nbyIsImFwcE5hbWUiLCJLRVBMRVJfR0xfTkFNRSIsInZlcnNpb24iLCJLRVBMRVJfR0xfVkVSU0lPTiIsIktFUExFUl9HTF9XRUJTSVRFIiwiZGVmYXVsdFByb3BzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQVYsbUJBQWY7QUFLQSxJQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0MsR0FBVixxQkFFRCxVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FGSixDQUFkO0FBUUEsSUFBTUMsV0FBVyxHQUFHTixNQUFNLENBQUNDLEdBQVYscUJBRU4sVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxZQUFoQjtBQUFBLENBRkMsQ0FBakI7QUFPQSxJQUFNQyxXQUFXLEdBQUdSLE1BQU0sQ0FBQ0MsR0FBVixvQkFBakI7QUFLQSxJQUFNUSxjQUFjLEdBQUdULE1BQU0sQ0FBQ0MsR0FBVixvQkFBcEI7O0FBSUEsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQ0UsSUFBQSxTQUFTLEVBQUMsdUJBRFo7QUFFRSxJQUFBLEtBQUssRUFBQyxNQUZSO0FBR0UsSUFBQSxNQUFNLEVBQUMsTUFIVDtBQUlFLElBQUEsT0FBTyxFQUFDO0FBSlYsS0FNRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsS0FDRTtBQUFNLElBQUEsSUFBSSxFQUFDLFNBQVg7QUFBcUIsSUFBQSxDQUFDLEVBQUMsR0FBdkI7QUFBMkIsSUFBQSxDQUFDLEVBQUMsR0FBN0I7QUFBaUMsSUFBQSxLQUFLLEVBQUMsSUFBdkM7QUFBNEMsSUFBQSxNQUFNLEVBQUM7QUFBbkQsSUFERixFQUVFO0FBQU0sSUFBQSxJQUFJLEVBQUMsU0FBWDtBQUFxQixJQUFBLENBQUMsRUFBQyxHQUF2QjtBQUEyQixJQUFBLENBQUMsRUFBQyxHQUE3QjtBQUFpQyxJQUFBLEtBQUssRUFBQyxJQUF2QztBQUE0QyxJQUFBLE1BQU0sRUFBQztBQUFuRCxJQUZGLENBTkYsQ0FEYztBQUFBLENBQWhCOztBQWNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsMEJBQUVDLE9BQUY7QUFBQSxNQUFFQSxPQUFGLDZCQUFZQywrQkFBWjtBQUFBLDBCQUE0QkMsT0FBNUI7QUFBQSxNQUE0QkEsT0FBNUIsNkJBQXNDQyxrQ0FBdEM7QUFBQSxTQUNuQixnQ0FBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUM7QUFBdkIsS0FDRSxnQ0FBQyxjQUFELFFBQ0UsZ0NBQUMsT0FBRCxPQURGLENBREYsRUFJRSxnQ0FBQyxTQUFEO0FBQVcsSUFBQSxTQUFTLEVBQUM7QUFBckIsS0FDRSxnQ0FBQyxRQUFEO0FBQVUsSUFBQSxTQUFTLEVBQUM7QUFBcEIsS0FDRTtBQUFHLElBQUEsU0FBUyxFQUFDLFlBQWI7QUFBMEIsSUFBQSxNQUFNLEVBQUMsUUFBakM7QUFBMEMsSUFBQSxHQUFHLEVBQUMscUJBQTlDO0FBQW9FLElBQUEsSUFBSSxFQUFFQztBQUExRSxLQUE4RkosT0FBOUYsQ0FERixDQURGLEVBSUdFLE9BQU8sR0FBRyxnQ0FBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUM7QUFBdkIsS0FBd0NBLE9BQXhDLENBQUgsR0FBb0UsSUFKOUUsQ0FKRixDQURtQjtBQUFBLENBQXJCOztBQWNBSCxZQUFZLENBQUNNLFlBQWIsR0FBNEI7QUFDMUJMLEVBQUFBLE9BQU8sRUFBRU0sc0JBQVVDLE1BRE87QUFFMUJMLEVBQUFBLE9BQU8sRUFBRUksc0JBQVVDO0FBRk8sQ0FBNUI7ZUFLZVIsWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7S0VQTEVSX0dMX05BTUUsIEtFUExFUl9HTF9WRVJTSU9OLCBLRVBMRVJfR0xfV0VCU0lURX0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBMb2dvVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG5gO1xuXG5jb25zdCBMb2dvTmFtZSA9IHN0eWxlZC5kaXZgXG4gIC5sb2dvX19saW5rIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3RpdmVDb2xvcn07XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMTdweDtcbiAgfVxuYDtcbmNvbnN0IExvZ29WZXJzaW9uID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICBsZXR0ZXItc3BhY2luZzogMC44M3B4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbmA7XG5cbmNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5gO1xuXG5jb25zdCBMb2dvU3ZnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDNweDtcbmA7XG5cbmNvbnN0IExvZ29TdmcgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29fX2xvZ29cIlxuICAgIHdpZHRoPVwiMjJweFwiXG4gICAgaGVpZ2h0PVwiMTVweFwiXG4gICAgdmlld0JveD1cIjAgMCAyMiAxNVwiXG4gID5cbiAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTEsIC0zKSByb3RhdGUoNDUuMDAwMDAwKVwiPlxuICAgICAgPHJlY3QgZmlsbD1cIiM1MzVDNkNcIiB4PVwiMFwiIHk9XCI1XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICAgIDxyZWN0IGZpbGw9XCIjMUZCQUQ2XCIgeD1cIjVcIiB5PVwiMFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IEtlcGxlckdsTG9nbyA9ICh7YXBwTmFtZSA9IEtFUExFUl9HTF9OQU1FLCB2ZXJzaW9uID0gS0VQTEVSX0dMX1ZFUlNJT059KSA9PiAoXG4gIDxMb2dvV3JhcHBlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29cIj5cbiAgICA8TG9nb1N2Z1dyYXBwZXI+XG4gICAgICA8TG9nb1N2ZyAvPlxuICAgIDwvTG9nb1N2Z1dyYXBwZXI+XG4gICAgPExvZ29UaXRsZSBjbGFzc05hbWU9XCJsb2dvX190aXRsZVwiPlxuICAgICAgPExvZ29OYW1lIGNsYXNzTmFtZT1cImxvZ29fX25hbWVcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb19fbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtLRVBMRVJfR0xfV0VCU0lURX0+e2FwcE5hbWV9PC9hPlxuICAgICAgPC9Mb2dvTmFtZT5cbiAgICAgIHt2ZXJzaW9uID8gPExvZ29WZXJzaW9uIGNsYXNzTmFtZT1cImxvZ29fX3ZlcnNpb25cIj57dmVyc2lvbn08L0xvZ29WZXJzaW9uPiA6IG51bGx9XG4gICAgPC9Mb2dvVGl0bGU+XG4gIDwvTG9nb1dyYXBwZXI+XG4pO1xuXG5LZXBsZXJHbExvZ28uZGVmYXVsdFByb3BzID0ge1xuICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJzaW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbExvZ287XG4iXX0=