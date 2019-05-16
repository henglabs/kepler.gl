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

var _d3Scale = require("d3-scale");

var _d3Selection = require("d3-selection");

var _d3Axis = require("d3-axis");

var _reselect = require("reselect");

var styled = _interopRequireWildcard(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  .axis text {\n    font-size: 9px;\n    fill: ", ";\n  }\n\n  .axis line,\n  .axis path {\n    fill: none;\n    stroke: ", ";\n    shape-rendering: crispEdges;\n    stroke-width: 2;\n  }\n\n  .axis .domain {\n    display: none;\n  }\n\n  .value {\n    fill: ", ";\n    font-size: 10px;\n\n    &.start {\n      text-anchor: start;\n    }\n\n    &.end {\n      text-anchor: end;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TimeSliderContainer = styled.svg(_templateObject(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return props.theme.textColor;
});
var height = 30;

var TimeSliderMarker =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(TimeSliderMarker, _Component);

  function TimeSliderMarker() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, TimeSliderMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TimeSliderMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.domain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "widthSelector", function (props) {
      return props.width;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleSelector", (0, _reselect.createSelector)(_this.domainSelector, _this.widthSelector, function (domain, width) {
      return Array.isArray(domain) ? (0, _d3Scale.scaleUtc)().domain(domain).range([0, width]) : null;
    }));
    return _this;
  }

  (0, _createClass2["default"])(TimeSliderMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._updateAxis(this.scaleSelector(this.props));
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.scaleSelector(this.props) !== this.scaleSelector(nextProps)) {
        this._updateAxis(this.scaleSelector(nextProps));
      }
    }
  }, {
    key: "_updateAxis",
    value: function _updateAxis(scale) {
      if (!scale) {
        return;
      }

      var xAxis = (0, _d3Axis.axisBottom)(scale).ticks(4).tickSize(8).tickPadding(6);
      var svg = (0, _d3Selection.select)(this.svgContainer);
      svg.select('.x.axis').call(xAxis).selectAll('text');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(TimeSliderContainer, {
        className: "time-slider-marker",
        width: this.props.width,
        height: height,
        ref: function ref(comp) {
          _this2.svgContainer = comp;
        }
      }, _react["default"].createElement("g", {
        className: "x axis",
        transform: "translate(0, 0)"
      }));
    }
  }]);
  return TimeSliderMarker;
}(_react.Component);

exports["default"] = TimeSliderMarker;
(0, _defineProperty2["default"])(TimeSliderMarker, "propTypes", {
  domain: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  width: _propTypes["default"].number.isRequired
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi90aW1lLXNsaWRlci1tYXJrZXIuanMiXSwibmFtZXMiOlsiVGltZVNsaWRlckNvbnRhaW5lciIsInN0eWxlZCIsInN2ZyIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3IiLCJzbGlkZXJCYXJCZ2QiLCJoZWlnaHQiLCJUaW1lU2xpZGVyTWFya2VyIiwiZG9tYWluIiwid2lkdGgiLCJkb21haW5TZWxlY3RvciIsIndpZHRoU2VsZWN0b3IiLCJBcnJheSIsImlzQXJyYXkiLCJyYW5nZSIsIl91cGRhdGVBeGlzIiwic2NhbGVTZWxlY3RvciIsIm5leHRQcm9wcyIsInNjYWxlIiwieEF4aXMiLCJ0aWNrcyIsInRpY2tTaXplIiwidGlja1BhZGRpbmciLCJzdmdDb250YWluZXIiLCJzZWxlY3QiLCJjYWxsIiwic2VsZWN0QWxsIiwiY29tcCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixHQUFHQyxNQUFNLENBQUNDLEdBQVYsb0JBTWIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBTlEsRUFZWCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFlBQWhCO0FBQUEsQ0FaTSxFQXNCYixVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0F0QlEsQ0FBekI7QUFtQ0EsSUFBTUUsTUFBTSxHQUFHLEVBQWY7O0lBRXFCQyxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7dUdBZ0JGLFVBQUFMLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNNLE1BQVY7QUFBQSxLO3NHQUNOLFVBQUFOLEtBQUs7QUFBQSxhQUFJQSxLQUFLLENBQUNPLEtBQVY7QUFBQSxLO3NHQUNMLDhCQUNkLE1BQUtDLGNBRFMsRUFFZCxNQUFLQyxhQUZTLEVBR2QsVUFBQ0gsTUFBRCxFQUFTQyxLQUFUO0FBQUEsYUFDRUcsS0FBSyxDQUFDQyxPQUFOLENBQWNMLE1BQWQsSUFDSSx5QkFDR0EsTUFESCxDQUNVQSxNQURWLEVBRUdNLEtBRkgsQ0FFUyxDQUFDLENBQUQsRUFBSUwsS0FBSixDQUZULENBREosR0FJSSxJQUxOO0FBQUEsS0FIYyxDOzs7Ozs7d0NBWkk7QUFDbEIsV0FBS00sV0FBTCxDQUFpQixLQUFLQyxhQUFMLENBQW1CLEtBQUtkLEtBQXhCLENBQWpCO0FBQ0Q7Ozs4Q0FFeUJlLFMsRUFBVztBQUNuQyxVQUFJLEtBQUtELGFBQUwsQ0FBbUIsS0FBS2QsS0FBeEIsTUFBbUMsS0FBS2MsYUFBTCxDQUFtQkMsU0FBbkIsQ0FBdkMsRUFBc0U7QUFDcEUsYUFBS0YsV0FBTCxDQUFpQixLQUFLQyxhQUFMLENBQW1CQyxTQUFuQixDQUFqQjtBQUNEO0FBQ0Y7OztnQ0FlV0MsSyxFQUFPO0FBQ2pCLFVBQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1Y7QUFDRDs7QUFDRCxVQUFNQyxLQUFLLEdBQUcsd0JBQVdELEtBQVgsRUFDWEUsS0FEVyxDQUNMLENBREssRUFFWEMsUUFGVyxDQUVGLENBRkUsRUFHWEMsV0FIVyxDQUdDLENBSEQsQ0FBZDtBQUtBLFVBQU1yQixHQUFHLEdBQUcseUJBQU8sS0FBS3NCLFlBQVosQ0FBWjtBQUVBdEIsTUFBQUEsR0FBRyxDQUNBdUIsTUFESCxDQUNVLFNBRFYsRUFFR0MsSUFGSCxDQUVRTixLQUZSLEVBR0dPLFNBSEgsQ0FHYSxNQUhiO0FBSUQ7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVFLFFBQUEsS0FBSyxFQUFFLEtBQUt4QixLQUFMLENBQVdPLEtBRnBCO0FBR0UsUUFBQSxNQUFNLEVBQUVILE1BSFY7QUFJRSxRQUFBLEdBQUcsRUFBRSxhQUFBcUIsSUFBSSxFQUFJO0FBQ1gsVUFBQSxNQUFJLENBQUNKLFlBQUwsR0FBb0JJLElBQXBCO0FBQ0Q7QUFOSCxTQVFFO0FBQUcsUUFBQSxTQUFTLEVBQUMsUUFBYjtBQUFzQixRQUFBLFNBQVMsRUFBQztBQUFoQyxRQVJGLENBREY7QUFZRDs7O0VBM0QyQ0MsZ0I7OztpQ0FBekJyQixnQixlQUNBO0FBQ2pCQyxFQUFBQSxNQUFNLEVBQUVxQixzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLEdBQTVCLEVBQWlDQyxVQUR4QjtBQUVqQnZCLEVBQUFBLEtBQUssRUFBRW9CLHNCQUFVSSxNQUFWLENBQWlCRDtBQUZQLEM7QUEyRHBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtzY2FsZVV0Y30gZnJvbSAnZDMtc2NhbGUnO1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge2F4aXNCb3R0b219IGZyb20gJ2QzLWF4aXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgVGltZVNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5zdmdgXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgLmF4aXMgdGV4dCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLmF4aXMgbGluZSxcbiAgLmF4aXMgcGF0aCB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFyQmdkfTtcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XG4gICAgc3Ryb2tlLXdpZHRoOiAyO1xuICB9XG5cbiAgLmF4aXMgLmRvbWFpbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC52YWx1ZSB7XG4gICAgZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcblxuICAgICYuc3RhcnQge1xuICAgICAgdGV4dC1hbmNob3I6IHN0YXJ0O1xuICAgIH1cblxuICAgICYuZW5kIHtcbiAgICAgIHRleHQtYW5jaG9yOiBlbmQ7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBoZWlnaHQgPSAzMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVNsaWRlck1hcmtlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZG9tYWluOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl91cGRhdGVBeGlzKHRoaXMuc2NhbGVTZWxlY3Rvcih0aGlzLnByb3BzKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnNjYWxlU2VsZWN0b3IodGhpcy5wcm9wcykgIT09IHRoaXMuc2NhbGVTZWxlY3RvcihuZXh0UHJvcHMpKSB7XG4gICAgICB0aGlzLl91cGRhdGVBeGlzKHRoaXMuc2NhbGVTZWxlY3RvcihuZXh0UHJvcHMpKTtcbiAgICB9XG4gIH1cblxuICBkb21haW5TZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmRvbWFpbjtcbiAgd2lkdGhTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLndpZHRoO1xuICBzY2FsZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5kb21haW5TZWxlY3RvcixcbiAgICB0aGlzLndpZHRoU2VsZWN0b3IsXG4gICAgKGRvbWFpbiwgd2lkdGgpID0+XG4gICAgICBBcnJheS5pc0FycmF5KGRvbWFpbilcbiAgICAgICAgPyBzY2FsZVV0YygpXG4gICAgICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKVxuICAgICAgICA6IG51bGxcbiAgKTtcblxuICBfdXBkYXRlQXhpcyhzY2FsZSkge1xuICAgIGlmICghc2NhbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeEF4aXMgPSBheGlzQm90dG9tKHNjYWxlKVxuICAgICAgLnRpY2tzKDQpXG4gICAgICAudGlja1NpemUoOClcbiAgICAgIC50aWNrUGFkZGluZyg2KTtcblxuICAgIGNvbnN0IHN2ZyA9IHNlbGVjdCh0aGlzLnN2Z0NvbnRhaW5lcik7XG5cbiAgICBzdmdcbiAgICAgIC5zZWxlY3QoJy54LmF4aXMnKVxuICAgICAgLmNhbGwoeEF4aXMpXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0Jyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUaW1lU2xpZGVyQ29udGFpbmVyXG4gICAgICAgIGNsYXNzTmFtZT1cInRpbWUtc2xpZGVyLW1hcmtlclwiXG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgcmVmPXtjb21wID0+IHtcbiAgICAgICAgICB0aGlzLnN2Z0NvbnRhaW5lciA9IGNvbXA7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxnIGNsYXNzTmFtZT1cInggYXhpc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLCAwKVwiIC8+XG4gICAgICA8L1RpbWVTbGlkZXJDb250YWluZXI+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==