"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _d3Format = require("d3-format");

var _moment = _interopRequireDefault(require("moment"));

var _defaultSettings = require("../../constants/default-settings");

var _filterUtils = require("../../utils/filter-utils");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  max-height: 150px;\n  overflow-y: auto;\n\n  svg {\n    text {\n      font-size: 9px;\n      fill: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ROW_H = 10;
var GAP = 4;
var RECT_W = 20;
var StyledLegend = styled.div(_templateObject(), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.textColor;
});

var defaultFormat = function defaultFormat(d) {
  return d;
};

var getTimeLabelFormat = function getTimeLabelFormat(domain) {
  var formatter = (0, _filterUtils.getTimeWidgetHintFormatter)(domain);
  return function (val) {
    return _moment["default"].utc(val).format(formatter);
  };
};

var getNumericLabelFormat = function getNumericLabelFormat(domain) {
  var diff = domain[1] - domain[0];

  if (diff < 10) {
    return (0, _d3Format.format)('.2f');
  }

  return (0, _d3Format.format)('.1f');
};

var getQuantLabelFormat = function getQuantLabelFormat(domain, fieldType) {
  // quant scale can only be assigned to linear Fields: real, timestamp, integer
  return fieldType === _defaultSettings.ALL_FIELD_TYPES.timestamp ? getTimeLabelFormat(domain) : !fieldType ? defaultFormat : getNumericLabelFormat(domain);
};

var getOrdinalLegends = function getOrdinalLegends(scale) {
  var domain = scale.domain();
  return {
    data: domain.map(scale),
    labels: domain
  };
};

var getQuantLegends = function getQuantLegends(scale, labelFormat) {
  var labels = scale.range().map(function (d) {
    var invert = scale.invertExtent(d);
    return "".concat(labelFormat(invert[0]), " to ").concat(labelFormat(invert[1]));
  });
  return {
    data: scale.range(),
    labels: labels
  };
};

var ColorLegend =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ColorLegend, _Component);

  function ColorLegend() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ColorLegend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ColorLegend)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.domain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rangeSelector", function (props) {
      return props.range;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "labelFormatSelector", function (props) {
      return props.labelFormat;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleTypeSelector", function (props) {
      return props.scaleType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldTypeSelector", function (props) {
      return props.fieldType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "legendsSelector", (0, _reselect.createSelector)(_this.domainSelector, _this.rangeSelector, _this.scaleTypeSelector, _this.labelFormatSelector, _this.fieldTypeSelector, function (domain, range, scaleType, labelFormat, fieldType) {
      var scaleFunction = _defaultSettings.SCALE_FUNC[scaleType]; // color scale can only be quantize, quantile or ordinal

      var scale = scaleFunction().domain(domain).range(range);

      if (scaleType === _defaultSettings.SCALE_TYPES.ordinal) {
        return getOrdinalLegends(scale);
      }

      var formatLabel = labelFormat || getQuantLabelFormat(scale.domain(), fieldType);
      return getQuantLegends(scale, formatLabel);
    }));
    return _this;
  }

  (0, _createClass2["default"])(ColorLegend, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          scaleType = _this$props.scaleType,
          domain = _this$props.domain,
          range = _this$props.range,
          _this$props$displayLa = _this$props.displayLabel,
          displayLabel = _this$props$displayLa === void 0 ? true : _this$props$displayLa;

      if (!domain || !range || !scaleType) {
        return null;
      }

      var legends = this.legendsSelector(this.props);
      var height = legends.data.length * (ROW_H + GAP);
      return _react["default"].createElement(StyledLegend, null, _react["default"].createElement("svg", {
        width: width - 24,
        height: height
      }, legends.data.map(function (color, idx) {
        return _react["default"].createElement(LegendRow, {
          key: idx,
          label: legends.labels[idx],
          displayLabel: displayLabel,
          color: color,
          idx: idx
        });
      })));
    }
  }]);
  return ColorLegend;
}(_react.Component);

exports["default"] = ColorLegend;
(0, _defineProperty2["default"])(ColorLegend, "propTypes", {
  width: _propTypes["default"].number.isRequired,
  scaleType: _propTypes["default"].string,
  domain: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]),
  fieldType: _propTypes["default"].string,
  range: _propTypes["default"].arrayOf(_propTypes["default"].string),
  labelFormat: _propTypes["default"].func
});

var LegendRow = function LegendRow(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      displayLabel = _ref.displayLabel,
      color = _ref.color,
      idx = _ref.idx;
  return _react["default"].createElement("g", {
    transform: "translate(0, ".concat(idx * (ROW_H + GAP), ")")
  }, _react["default"].createElement("rect", {
    width: RECT_W,
    height: ROW_H,
    style: {
      fill: color
    }
  }), _react["default"].createElement("text", {
    x: RECT_W + 8,
    y: ROW_H - 1
  }, displayLabel ? label.toString() : ''));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9jb2xvci1sZWdlbmQuanMiXSwibmFtZXMiOlsiUk9XX0giLCJHQVAiLCJSRUNUX1ciLCJTdHlsZWRMZWdlbmQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsU2Nyb2xsQmFyIiwidGV4dENvbG9yIiwiZGVmYXVsdEZvcm1hdCIsImQiLCJnZXRUaW1lTGFiZWxGb3JtYXQiLCJkb21haW4iLCJmb3JtYXR0ZXIiLCJ2YWwiLCJtb21lbnQiLCJ1dGMiLCJmb3JtYXQiLCJnZXROdW1lcmljTGFiZWxGb3JtYXQiLCJkaWZmIiwiZ2V0UXVhbnRMYWJlbEZvcm1hdCIsImZpZWxkVHlwZSIsIkFMTF9GSUVMRF9UWVBFUyIsInRpbWVzdGFtcCIsImdldE9yZGluYWxMZWdlbmRzIiwic2NhbGUiLCJkYXRhIiwibWFwIiwibGFiZWxzIiwiZ2V0UXVhbnRMZWdlbmRzIiwibGFiZWxGb3JtYXQiLCJyYW5nZSIsImludmVydCIsImludmVydEV4dGVudCIsIkNvbG9yTGVnZW5kIiwic2NhbGVUeXBlIiwiZG9tYWluU2VsZWN0b3IiLCJyYW5nZVNlbGVjdG9yIiwic2NhbGVUeXBlU2VsZWN0b3IiLCJsYWJlbEZvcm1hdFNlbGVjdG9yIiwiZmllbGRUeXBlU2VsZWN0b3IiLCJzY2FsZUZ1bmN0aW9uIiwiU0NBTEVfRlVOQyIsIlNDQUxFX1RZUEVTIiwib3JkaW5hbCIsImZvcm1hdExhYmVsIiwid2lkdGgiLCJkaXNwbGF5TGFiZWwiLCJsZWdlbmRzIiwibGVnZW5kc1NlbGVjdG9yIiwiaGVpZ2h0IiwibGVuZ3RoIiwiY29sb3IiLCJpZHgiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwib25lT2ZUeXBlIiwiYXJyYXkiLCJvYmplY3QiLCJhcnJheU9mIiwiZnVuYyIsIkxlZ2VuZFJvdyIsImxhYmVsIiwiZmlsbCIsInRvU3RyaW5nIl0sIm1h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QUxVO0FBTWpCNUIsRUFBQUEsV0FBVyxFQUFFeUIsc0JBQVVRO0FBTk4sQzs7QUFtRXJCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsd0JBQUVDLEtBQUY7QUFBQSxNQUFFQSxLQUFGLDJCQUFVLEVBQVY7QUFBQSxNQUFjbEIsWUFBZCxRQUFjQSxZQUFkO0FBQUEsTUFBNEJLLEtBQTVCLFFBQTRCQSxLQUE1QjtBQUFBLE1BQW1DQyxHQUFuQyxRQUFtQ0EsR0FBbkM7QUFBQSxTQUNoQjtBQUFHLElBQUEsU0FBUyx5QkFBa0JBLEdBQUcsSUFBSXRELEtBQUssR0FBR0MsR0FBWixDQUFyQjtBQUFaLEtBQ0U7QUFBTSxJQUFBLEtBQUssRUFBRUMsTUFBYjtBQUFxQixJQUFBLE1BQU0sRUFBRUYsS0FBN0I7QUFBb0MsSUFBQSxLQUFLLEVBQUU7QUFBQ21FLE1BQUFBLElBQUksRUFBRWQ7QUFBUDtBQUEzQyxJQURGLEVBRUU7QUFBTSxJQUFBLENBQUMsRUFBRW5ELE1BQU0sR0FBRyxDQUFsQjtBQUFxQixJQUFBLENBQUMsRUFBRUYsS0FBSyxHQUFHO0FBQWhDLEtBQ0dnRCxZQUFZLEdBQUdrQixLQUFLLENBQUNFLFFBQU4sRUFBSCxHQUFzQixFQURyQyxDQUZGLENBRGdCO0FBQUEsQ0FBbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtmb3JtYXR9IGZyb20gJ2QzLWZvcm1hdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge1xuICBTQ0FMRV9UWVBFUyxcbiAgU0NBTEVfRlVOQyxcbiAgQUxMX0ZJRUxEX1RZUEVTXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcbmltcG9ydCB7Z2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5cbmNvbnN0IFJPV19IID0gMTA7XG5jb25zdCBHQVAgPSA0O1xuY29uc3QgUkVDVF9XID0gMjA7XG5cbmNvbnN0IFN0eWxlZExlZ2VuZCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFyfTtcblxuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBzdmcge1xuICAgIHRleHQge1xuICAgICAgZm9udC1zaXplOiA5cHg7XG4gICAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBkZWZhdWx0Rm9ybWF0ID0gZCA9PiBkO1xuXG5jb25zdCBnZXRUaW1lTGFiZWxGb3JtYXQgPSBkb21haW4gPT4ge1xuICBjb25zdCBmb3JtYXR0ZXIgPSBnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlcihkb21haW4pO1xuICByZXR1cm4gdmFsID0+IG1vbWVudC51dGModmFsKS5mb3JtYXQoZm9ybWF0dGVyKTtcbn07XG5cbmNvbnN0IGdldE51bWVyaWNMYWJlbEZvcm1hdCA9IGRvbWFpbiA9PiB7XG4gIGNvbnN0IGRpZmYgPSBkb21haW5bMV0gLSBkb21haW5bMF07XG5cbiAgaWYgKGRpZmYgPCAxMCkge1xuICAgIHJldHVybiBmb3JtYXQoJy4yZicpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdCgnLjFmJyk7XG59O1xuXG5jb25zdCBnZXRRdWFudExhYmVsRm9ybWF0ID0gKGRvbWFpbiwgZmllbGRUeXBlKSA9PiB7XG4gIC8vIHF1YW50IHNjYWxlIGNhbiBvbmx5IGJlIGFzc2lnbmVkIHRvIGxpbmVhciBGaWVsZHM6IHJlYWwsIHRpbWVzdGFtcCwgaW50ZWdlclxuICByZXR1cm4gZmllbGRUeXBlID09PSBBTExfRklFTERfVFlQRVMudGltZXN0YW1wXG4gICAgPyBnZXRUaW1lTGFiZWxGb3JtYXQoZG9tYWluKVxuICAgIDogIWZpZWxkVHlwZSA/IGRlZmF1bHRGb3JtYXQgOiBnZXROdW1lcmljTGFiZWxGb3JtYXQoZG9tYWluKTtcbn07XG5cbmNvbnN0IGdldE9yZGluYWxMZWdlbmRzID0gc2NhbGUgPT4ge1xuICBjb25zdCBkb21haW4gPSBzY2FsZS5kb21haW4oKTtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBkb21haW4ubWFwKHNjYWxlKSxcbiAgICBsYWJlbHM6IGRvbWFpblxuICB9O1xufTtcblxuY29uc3QgZ2V0UXVhbnRMZWdlbmRzID0gKHNjYWxlLCBsYWJlbEZvcm1hdCkgPT4ge1xuICBjb25zdCBsYWJlbHMgPSBzY2FsZS5yYW5nZSgpLm1hcChkID0+IHtcbiAgICBjb25zdCBpbnZlcnQgPSBzY2FsZS5pbnZlcnRFeHRlbnQoZCk7XG4gICAgcmV0dXJuIGAke2xhYmVsRm9ybWF0KGludmVydFswXSl9IHRvICR7bGFiZWxGb3JtYXQoaW52ZXJ0WzFdKX1gO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IHNjYWxlLnJhbmdlKCksXG4gICAgbGFiZWxzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvckxlZ2VuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBzY2FsZVR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZG9tYWluOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBmaWVsZFR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmFuZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICAgIGxhYmVsRm9ybWF0OiBQcm9wVHlwZXMuZnVuY1xuICB9O1xuXG4gIGRvbWFpblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZG9tYWluO1xuICByYW5nZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMucmFuZ2U7XG4gIGxhYmVsRm9ybWF0U2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5sYWJlbEZvcm1hdDtcbiAgc2NhbGVUeXBlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5zY2FsZVR5cGU7XG4gIGZpZWxkVHlwZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRUeXBlO1xuXG4gIGxlZ2VuZHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHRoaXMuZG9tYWluU2VsZWN0b3IsXG4gICAgdGhpcy5yYW5nZVNlbGVjdG9yLFxuICAgIHRoaXMuc2NhbGVUeXBlU2VsZWN0b3IsXG4gICAgdGhpcy5sYWJlbEZvcm1hdFNlbGVjdG9yLFxuICAgIHRoaXMuZmllbGRUeXBlU2VsZWN0b3IsXG4gICAgKGRvbWFpbiwgcmFuZ2UsIHNjYWxlVHlwZSwgbGFiZWxGb3JtYXQsIGZpZWxkVHlwZSkgPT4ge1xuICAgICAgY29uc3Qgc2NhbGVGdW5jdGlvbiA9IFNDQUxFX0ZVTkNbc2NhbGVUeXBlXTtcbiAgICAgIC8vIGNvbG9yIHNjYWxlIGNhbiBvbmx5IGJlIHF1YW50aXplLCBxdWFudGlsZSBvciBvcmRpbmFsXG4gICAgICBjb25zdCBzY2FsZSA9IHNjYWxlRnVuY3Rpb24oKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKHJhbmdlKTtcblxuICAgICAgaWYgKHNjYWxlVHlwZSA9PT0gU0NBTEVfVFlQRVMub3JkaW5hbCkge1xuICAgICAgICByZXR1cm4gZ2V0T3JkaW5hbExlZ2VuZHMoc2NhbGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXRMYWJlbCA9XG4gICAgICAgIGxhYmVsRm9ybWF0IHx8IGdldFF1YW50TGFiZWxGb3JtYXQoc2NhbGUuZG9tYWluKCksIGZpZWxkVHlwZSk7XG5cbiAgICAgIHJldHVybiBnZXRRdWFudExlZ2VuZHMoc2NhbGUsIGZvcm1hdExhYmVsKTtcbiAgICB9XG4gICk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt3aWR0aCwgc2NhbGVUeXBlLCBkb21haW4sIHJhbmdlLCBkaXNwbGF5TGFiZWwgPSB0cnVlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRvbWFpbiB8fCAhcmFuZ2UgfHwgIXNjYWxlVHlwZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgbGVnZW5kcyA9IHRoaXMubGVnZW5kc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgIGNvbnN0IGhlaWdodCA9IGxlZ2VuZHMuZGF0YS5sZW5ndGggKiAoUk9XX0ggKyBHQVApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMZWdlbmQ+XG4gICAgICAgIDxzdmcgd2lkdGg9e3dpZHRoIC0gMjR9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgICB7bGVnZW5kcy5kYXRhLm1hcCgoY29sb3IsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPExlZ2VuZFJvd1xuICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgbGFiZWw9e2xlZ2VuZHMubGFiZWxzW2lkeF19XG4gICAgICAgICAgICAgIGRpc3BsYXlMYWJlbD17ZGlzcGxheUxhYmVsfVxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L1N0eWxlZExlZ2VuZD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IExlZ2VuZFJvdyA9ICh7bGFiZWwgPSAnJywgZGlzcGxheUxhYmVsLCBjb2xvciwgaWR4fSkgPT4gKFxuICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwgJHtpZHggKiAoUk9XX0ggKyBHQVApfSlgfT5cbiAgICA8cmVjdCB3aWR0aD17UkVDVF9XfSBoZWlnaHQ9e1JPV19IfSBzdHlsZT17e2ZpbGw6IGNvbG9yfX0gLz5cbiAgICA8dGV4dCB4PXtSRUNUX1cgKyA4fSB5PXtST1dfSCAtIDF9PlxuICAgICAge2Rpc3BsYXlMYWJlbCA/IGxhYmVsLnRvU3RyaW5nKCkgOiAnJ31cbiAgICA8L3RleHQ+XG4gIDwvZz5cbik7XG4iXX0=