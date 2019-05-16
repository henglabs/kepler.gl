"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Scale = require("d3-scale");

var _moment = _interopRequireDefault(require("moment"));

var _d3Array = require("d3-array");

var _reselect = require("reselect");

var _reactVis = require("react-vis");

var styled = _interopRequireWildcard(require("styled-components"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _filterUtils = require("../../utils/filter-utils");

var _base = require("../../styles/base");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #d3d8e0;\n  border-radius: 2px;\n  color: ", ";\n  font-size: 9px;\n  margin: 4px;\n  padding: 3px 6px;\n  pointer-events: none;\n  user-select: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .rv-xy-plot__inner path {\n    fill: none;\n    stroke-width: 1.5;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var chartMargin = {
  top: 18,
  bottom: 0,
  left: 0,
  right: 0
};
var chartH = 52;
var containerH = 78;
var histogramStyle = {
  highlightW: 0.7,
  unHighlightedW: 0.4,
  highlightedColor: _base.theme.activeColor,
  unHighlightedColor: _base.theme.sliderBarColor
};

var RangePlot =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(RangePlot, _Component);

  function RangePlot() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, RangePlot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(RangePlot)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      hoveredDP: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.lineChart && props.lineChart.xDomain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hintFormatter", (0, _reselect.createSelector)(_this.domainSelector, function (domain) {
      return (0, _filterUtils.getTimeWidgetHintFormatter)(domain);
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onMouseMove", function (hoveredDP) {
      _this.setState({
        hoveredDP: hoveredDP
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(RangePlot, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onBrush = _this$props.onBrush,
          range = _this$props.range,
          value = _this$props.value,
          width = _this$props.width,
          plotType = _this$props.plotType,
          lineChart = _this$props.lineChart,
          histogram = _this$props.histogram;
      var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];

      var brushComponent = _react["default"].createElement(_rangeBrush["default"], {
        domain: domain,
        onBrush: onBrush,
        range: range,
        value: value,
        width: width
      });

      return _react["default"].createElement("div", {
        style: {
          height: "".concat(containerH, "px"),
          position: 'relative'
        }
      }, plotType === 'lineChart' ? _react["default"].createElement(LineChart, {
        hoveredDP: this.state.hoveredDP,
        width: width,
        height: containerH,
        margin: chartMargin,
        children: brushComponent,
        onMouseMove: this.onMouseMove,
        yDomain: lineChart.yDomain,
        hintFormat: this.hintFormatter(this.props),
        data: lineChart.series
      }) : _react["default"].createElement(Histogram, {
        width: width,
        height: chartH,
        value: value,
        margin: chartMargin,
        histogram: histogram,
        brushComponent: brushComponent
      }));
    }
  }]);
  return RangePlot;
}(_react.Component);

exports["default"] = RangePlot;
(0, _defineProperty2["default"])(RangePlot, "propTypes", {
  value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  histogram: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    x0: _propTypes["default"].number,
    x1: _propTypes["default"].number
  })),
  lineChart: _propTypes["default"].object,
  plotType: _propTypes["default"].string,
  isEnlarged: _propTypes["default"].bool,
  onBlur: _propTypes["default"].func,
  width: _propTypes["default"].number.isRequired
});

var Histogram = function Histogram(_ref) {
  var width = _ref.width,
      height = _ref.height,
      margin = _ref.margin,
      histogram = _ref.histogram,
      value = _ref.value,
      brushComponent = _ref.brushComponent;
  var domain = [histogram[0].x0, histogram[histogram.length - 1].x1];
  var barWidth = width / histogram.length;
  var x = (0, _d3Scale.scaleLinear)().domain(domain).range([0, width]);
  var y = (0, _d3Scale.scaleLinear)().domain([0, (0, _d3Array.max)(histogram, function (d) {
    return d.count;
  })]).range([0, height]);
  return _react["default"].createElement("svg", {
    width: width,
    height: height,
    style: {
      marginTop: "".concat(margin.top, "px")
    }
  }, _react["default"].createElement("g", {
    className: "histogram-bars"
  }, histogram.map(function (bar) {
    var inRange = bar.x0 >= value[0] && bar.x1 <= value[1];
    var fill = inRange ? histogramStyle.highlightedColor : histogramStyle.unHighlightedColor;
    var wRatio = inRange ? histogramStyle.highlightW : histogramStyle.unHighlightedW;
    return _react["default"].createElement("rect", {
      key: bar.x0,
      fill: fill,
      height: y(bar.count),
      width: barWidth * wRatio,
      x: x(bar.x0) + barWidth * (1 - wRatio) / 2,
      rx: 1,
      ry: 1,
      y: height - y(bar.count)
    });
  })), brushComponent);
};

var LineChartWrapper = styled.div(_templateObject());

var LineChart = function LineChart(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      yDomain = _ref2.yDomain,
      hintFormat = _ref2.hintFormat,
      hoveredDP = _ref2.hoveredDP,
      margin = _ref2.margin,
      color = _ref2.color,
      data = _ref2.data,
      onMouseMove = _ref2.onMouseMove,
      children = _ref2.children;
  var brushData = [{
    x: data[0].x,
    y: yDomain[1],
    customComponent: function customComponent() {
      return children;
    }
  }];
  return _react["default"].createElement(LineChartWrapper, null, _react["default"].createElement(_reactVis.XYPlot, {
    width: width,
    height: height,
    margin: (0, _objectSpread2["default"])({}, margin, {
      bottom: 12
    })
  }, _react["default"].createElement(_reactVis.LineSeries, {
    strokeWidth: 2,
    color: color,
    data: data,
    onNearestX: onMouseMove
  }), _react["default"].createElement(_reactVis.MarkSeries, {
    data: hoveredDP ? [hoveredDP] : [],
    color: color,
    size: 3
  }), _react["default"].createElement(_reactVis.CustomSVGSeries, {
    data: brushData
  }), hoveredDP ? _react["default"].createElement(_reactVis.Hint, {
    value: hoveredDP
  }, _react["default"].createElement(HintContent, (0, _extends2["default"])({}, hoveredDP, {
    format: function format(val) {
      return _moment["default"].utc(val).format(hintFormat);
    }
  }))) : null));
};

var StyledHint = styled.div(_templateObject2(), function (props) {
  return props.theme.textColorLT;
});

var HintContent = function HintContent(_ref3) {
  var x = _ref3.x,
      y = _ref3.y,
      format = _ref3.format;
  return _react["default"].createElement(StyledHint, null, _react["default"].createElement("div", {
    className: "hint--x"
  }, format(x)), _react["default"].createElement("div", {
    className: "row"
  }, y));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1wbG90LmpzIl0sIm5hbWVzIjpbImNoYXJ0TWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiY2hhcnRIIiwiY29udGFpbmVySCIsImhpc3RvZ3JhbVN0eWxlIiwiaGlnaGxpZ2h0VyIsInVuSGlnaGxpZ2h0ZWRXIiwiaGlnaGxpZ2h0ZWRDb2xvciIsInRoZW1lIiwiYWN0aXZlQ29sb3IiLCJ1bkhpZ2hsaWdodGVkQ29sb3IiLCJzbGlkZXJCYXJDb2xvciIsIlJhbmdlUGxvdCIsImhvdmVyZWREUCIsInByb3BzIiwibGluZUNoYXJ0IiwieERvbWFpbiIsImRvbWFpblNlbGVjdG9yIiwiZG9tYWluIiwic2V0U3RhdGUiLCJvbkJydXNoIiwicmFuZ2UiLCJ2YWx1ZSIsIndpZHRoIiwicGxvdFR5cGUiLCJoaXN0b2dyYW0iLCJ4MCIsImxlbmd0aCIsIngxIiwiYnJ1c2hDb21wb25lbnQiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInN0YXRlIiwib25Nb3VzZU1vdmUiLCJ5RG9tYWluIiwiaGludEZvcm1hdHRlciIsInNlcmllcyIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic2hhcGUiLCJvYmplY3QiLCJzdHJpbmciLCJpc0VubGFyZ2VkIiwiYm9vbCIsIm9uQmx1ciIsImZ1bmMiLCJIaXN0b2dyYW0iLCJtYXJnaW4iLCJiYXJXaWR0aCIsIngiLCJ5IiwiZCIsImNvdW50IiwibWFyZ2luVG9wIiwibWFwIiwiYmFyIiwiaW5SYW5nZSIsImZpbGwiLCJ3UmF0aW8iLCJMaW5lQ2hhcnRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGluZUNoYXJ0IiwiaGludEZvcm1hdCIsImNvbG9yIiwiZGF0YSIsImNoaWxkcmVuIiwiYnJ1c2hEYXRhIiwiY3VzdG9tQ29tcG9uZW50IiwidmFsIiwibW9tZW50IiwidXRjIiwiZm9ybWF0Iiwi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QSxDQUFoQjs7QUFVQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUUxQixDQUFGLFNBQUVBLENBQUY7QUFBQSxNQUFLQyxDQUFMLFNBQUtBLENBQUw7QUFBQSxNQUFRc0IsTUFBUixTQUFRQSxNQUFSO0FBQUEsU0FDbEIsZ0NBQUMsVUFBRCxRQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUEwQkEsTUFBTSxDQUFDdkIsQ0FBRCxDQUFoQyxDQURGLEVBRUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXNCQyxDQUF0QixDQUZGLENBRGtCO0FBQUEsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge3NjYWxlTGluZWFyfSBmcm9tICdkMy1zY2FsZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQge21heH0gZnJvbSAnZDMtYXJyYXknO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHtMaW5lU2VyaWVzLCBYWVBsb3QsIEN1c3RvbVNWR1NlcmllcywgSGludCwgTWFya1Nlcmllc30gZnJvbSAncmVhY3QtdmlzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmFuZ2VCcnVzaCBmcm9tICcuL3JhbmdlLWJydXNoJztcbmltcG9ydCB7Z2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXJ9IGZyb20gJ3V0aWxzL2ZpbHRlci11dGlscyc7XG5pbXBvcnQge3RoZW1lfSBmcm9tICdzdHlsZXMvYmFzZSc7XG5cbmNvbnN0IGNoYXJ0TWFyZ2luID0ge3RvcDogMTgsIGJvdHRvbTogMCwgbGVmdDogMCwgcmlnaHQ6IDB9O1xuY29uc3QgY2hhcnRIID0gNTI7XG5jb25zdCBjb250YWluZXJIID0gNzg7XG5jb25zdCBoaXN0b2dyYW1TdHlsZSA9IHtcbiAgaGlnaGxpZ2h0VzogMC43LFxuICB1bkhpZ2hsaWdodGVkVzogMC40LFxuICBoaWdobGlnaHRlZENvbG9yOiB0aGVtZS5hY3RpdmVDb2xvcixcbiAgdW5IaWdobGlnaHRlZENvbG9yOiB0aGVtZS5zbGlkZXJCYXJDb2xvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VQbG90IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlcikuaXNSZXF1aXJlZCxcbiAgICBoaXN0b2dyYW06IFByb3BUeXBlcy5hcnJheU9mKFxuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgeDA6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHgxOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICB9KVxuICAgICksXG4gICAgbGluZUNoYXJ0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBsb3RUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGlzRW5sYXJnZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGhvdmVyZWREUDogbnVsbFxuICB9O1xuXG4gIGRvbWFpblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGluZUNoYXJ0ICYmIHByb3BzLmxpbmVDaGFydC54RG9tYWluO1xuICBoaW50Rm9ybWF0dGVyID0gY3JlYXRlU2VsZWN0b3IodGhpcy5kb21haW5TZWxlY3RvciwgZG9tYWluID0+XG4gICAgZ2V0VGltZVdpZGdldEhpbnRGb3JtYXR0ZXIoZG9tYWluKVxuICApO1xuXG4gIG9uTW91c2VNb3ZlID0gaG92ZXJlZERQID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtob3ZlcmVkRFB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb25CcnVzaCxcbiAgICAgIHJhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICB3aWR0aCxcbiAgICAgIHBsb3RUeXBlLFxuICAgICAgbGluZUNoYXJ0LFxuICAgICAgaGlzdG9ncmFtXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZG9tYWluID0gW2hpc3RvZ3JhbVswXS54MCwgaGlzdG9ncmFtW2hpc3RvZ3JhbS5sZW5ndGggLSAxXS54MV07XG5cbiAgICBjb25zdCBicnVzaENvbXBvbmVudCA9IChcbiAgICAgIDxSYW5nZUJydXNoXG4gICAgICAgIGRvbWFpbj17ZG9tYWlufVxuICAgICAgICBvbkJydXNoPXtvbkJydXNofVxuICAgICAgICByYW5nZT17cmFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgLz5cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IGAke2NvbnRhaW5lckh9cHhgLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwbG90VHlwZSA9PT0gJ2xpbmVDaGFydCcgPyAoXG4gICAgICAgICAgPExpbmVDaGFydFxuICAgICAgICAgICAgaG92ZXJlZERQPXt0aGlzLnN0YXRlLmhvdmVyZWREUH1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17Y29udGFpbmVySH1cbiAgICAgICAgICAgIG1hcmdpbj17Y2hhcnRNYXJnaW59XG4gICAgICAgICAgICBjaGlsZHJlbj17YnJ1c2hDb21wb25lbnR9XG4gICAgICAgICAgICBvbk1vdXNlTW92ZT17dGhpcy5vbk1vdXNlTW92ZX1cbiAgICAgICAgICAgIHlEb21haW49e2xpbmVDaGFydC55RG9tYWlufVxuICAgICAgICAgICAgaGludEZvcm1hdD17dGhpcy5oaW50Rm9ybWF0dGVyKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgZGF0YT17bGluZUNoYXJ0LnNlcmllc31cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxIaXN0b2dyYW1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17Y2hhcnRIfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgbWFyZ2luPXtjaGFydE1hcmdpbn1cbiAgICAgICAgICAgIGhpc3RvZ3JhbT17aGlzdG9ncmFtfVxuICAgICAgICAgICAgYnJ1c2hDb21wb25lbnQ9e2JydXNoQ29tcG9uZW50fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IEhpc3RvZ3JhbSA9ICh7XG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG1hcmdpbixcbiAgaGlzdG9ncmFtLFxuICB2YWx1ZSxcbiAgYnJ1c2hDb21wb25lbnRcbn0pID0+IHtcbiAgY29uc3QgZG9tYWluID0gW2hpc3RvZ3JhbVswXS54MCwgaGlzdG9ncmFtW2hpc3RvZ3JhbS5sZW5ndGggLSAxXS54MV07XG4gIGNvbnN0IGJhcldpZHRoID0gd2lkdGggLyBoaXN0b2dyYW0ubGVuZ3RoO1xuXG4gIGNvbnN0IHggPSBzY2FsZUxpbmVhcigpXG4gICAgLmRvbWFpbihkb21haW4pXG4gICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gIGNvbnN0IHkgPSBzY2FsZUxpbmVhcigpXG4gICAgLmRvbWFpbihbMCwgbWF4KGhpc3RvZ3JhbSwgZCA9PiBkLmNvdW50KV0pXG4gICAgLnJhbmdlKFswLCBoZWlnaHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gc3R5bGU9e3ttYXJnaW5Ub3A6IGAke21hcmdpbi50b3B9cHhgfX0+XG4gICAgICA8ZyBjbGFzc05hbWU9XCJoaXN0b2dyYW0tYmFyc1wiPlxuICAgICAgICB7aGlzdG9ncmFtLm1hcChiYXIgPT4ge1xuICAgICAgICAgIGNvbnN0IGluUmFuZ2UgPSBiYXIueDAgPj0gdmFsdWVbMF0gJiYgYmFyLngxIDw9IHZhbHVlWzFdO1xuICAgICAgICAgIGNvbnN0IGZpbGwgPSBpblJhbmdlID8gaGlzdG9ncmFtU3R5bGUuaGlnaGxpZ2h0ZWRDb2xvciA6IGhpc3RvZ3JhbVN0eWxlLnVuSGlnaGxpZ2h0ZWRDb2xvcjtcbiAgICAgICAgICBjb25zdCB3UmF0aW8gPSBpblJhbmdlID8gaGlzdG9ncmFtU3R5bGUuaGlnaGxpZ2h0VyA6IGhpc3RvZ3JhbVN0eWxlLnVuSGlnaGxpZ2h0ZWRXO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIGtleT17YmFyLngwfVxuICAgICAgICAgICAgICBmaWxsPXtmaWxsfVxuICAgICAgICAgICAgICBoZWlnaHQ9e3koYmFyLmNvdW50KX1cbiAgICAgICAgICAgICAgd2lkdGg9e2JhcldpZHRoICogd1JhdGlvfVxuICAgICAgICAgICAgICB4PXt4KGJhci54MCkgKyBiYXJXaWR0aCAqICgxIC0gd1JhdGlvKSAvIDJ9XG4gICAgICAgICAgICAgIHJ4PXsxfVxuICAgICAgICAgICAgICByeT17MX1cbiAgICAgICAgICAgICAgeT17aGVpZ2h0IC0geShiYXIuY291bnQpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZz5cbiAgICAgIHticnVzaENvbXBvbmVudH1cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmNvbnN0IExpbmVDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAucnYteHktcGxvdF9faW5uZXIgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2Utd2lkdGg6IDEuNTtcbiAgfVxuYDtcblxuY29uc3QgTGluZUNoYXJ0ID0gKHtcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgeURvbWFpbixcbiAgaGludEZvcm1hdCxcbiAgaG92ZXJlZERQLFxuICBtYXJnaW4sXG4gIGNvbG9yLFxuICBkYXRhLFxuICBvbk1vdXNlTW92ZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgYnJ1c2hEYXRhID0gW1xuICAgIHt4OiBkYXRhWzBdLngsIHk6IHlEb21haW5bMV0sIGN1c3RvbUNvbXBvbmVudDogKCkgPT4gY2hpbGRyZW59XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TGluZUNoYXJ0V3JhcHBlcj5cbiAgICAgIDxYWVBsb3Qgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gbWFyZ2luPXt7Li4ubWFyZ2luLCBib3R0b206IDEyfX0+XG4gICAgICAgIDxMaW5lU2VyaWVzXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgb25OZWFyZXN0WD17b25Nb3VzZU1vdmV9XG4gICAgICAgIC8+XG4gICAgICAgIDxNYXJrU2VyaWVzXG4gICAgICAgICAgZGF0YT17aG92ZXJlZERQID8gW2hvdmVyZWREUF0gOiBbXX1cbiAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgc2l6ZT17M31cbiAgICAgICAgLz5cbiAgICAgICAgPEN1c3RvbVNWR1NlcmllcyBkYXRhPXticnVzaERhdGF9IC8+XG4gICAgICAgIHtob3ZlcmVkRFAgPyAoXG4gICAgICAgICAgPEhpbnQgdmFsdWU9e2hvdmVyZWREUH0+XG4gICAgICAgICAgICA8SGludENvbnRlbnRcbiAgICAgICAgICAgICAgey4uLmhvdmVyZWREUH1cbiAgICAgICAgICAgICAgZm9ybWF0PXt2YWwgPT4gbW9tZW50LnV0Yyh2YWwpLmZvcm1hdChoaW50Rm9ybWF0KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9IaW50PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvWFlQbG90PlxuICAgIDwvTGluZUNoYXJ0V3JhcHBlcj5cbiAgKTtcbn07XG5cbmNvbnN0IFN0eWxlZEhpbnQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkOGUwO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZm9udC1zaXplOiA5cHg7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5gO1xuY29uc3QgSGludENvbnRlbnQgPSAoe3gsIHksIGZvcm1hdH0pID0+IChcbiAgPFN0eWxlZEhpbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaW50LS14XCI+e2Zvcm1hdCh4KX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPnt5fTwvZGl2PlxuICA8L1N0eWxlZEhpbnQ+XG4pO1xuIl19