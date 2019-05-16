"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TimeWidget = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _fieldSelector = _interopRequireDefault(require("../common/field-selector"));

var _styledComponents2 = require("../common/styled-components");

var _timeRangeFilter = _interopRequireDefault(require("./time-range-filter"));

var _icons = require("../common/icons");

var _animationSpeedToggle = _interopRequireDefault(require("./animation-speed-toggle"));

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 0;\n  color: ", ";\n  margin-right: 10px;\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n  .bottom-widget__icon.speed {\n    margin-right: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 1px solid\n    ", ";\n  color: ", ";\n  display: inline-block;\n  font-size: 12px;\n  height: 24px;\n  margin-right: 4px;\n  text-align: center;\n  width: 24px;\n  line-height: 24px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-right: 76px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: ", "px;\n  color: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n\n    .item-selector__dropdown {\n      background: transparent;\n      padding: 4px 10px 4px 4px;\n      border-color: transparent;\n\n      :active,\n      :focus,\n      &.focus,\n      &.active {\n        background: transparent;\n        border-color: transparent;\n      }\n    }\n\n    .item-selector__dropdown:hover {\n      background: transparent;\n      border-color: transparent;\n\n      .item-selector__dropdown__value {\n        color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  width: ", "px;\n\n  .bottom-widget--inner {\n    background-color: ", ";\n    padding: 6px ", "px 10px ", "px;\n    position: relative;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var innerPdSide = 32;
var WidgetContainer = styled.div(_templateObject(), function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.sidePanelBg;
}, innerPdSide, innerPdSide);
var TopSectionWrapper = styled.div(_templateObject2(), innerPdSide * 2, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
});
/* eslint-disable no-unused-vars */

var Tabs = styled.div(_templateObject3());
var Tab = styled.div(_templateObject4(), function (props) {
  return props.active ? props.theme.textColorHl : 'transparent';
}, function (props) {
  return props.active ? props.theme.textColorHl : props.theme.labelColor;
});
/* eslint-enable no-unused-vars */

var StyledTitle = styled(_styledComponents2.CenterFlexbox)(_templateObject5(), function (props) {
  return props.theme.textColor;
});

var TimeWidget =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(TimeWidget, _Component);

  function TimeWidget() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, TimeWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TimeWidget)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showSpeedControl: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSpeedControl", function () {
      _this.setState({
        showSpeedControl: !_this.state.showSpeedControl
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldSelector", function (props) {
      return props.fields;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "yAxisFieldsSelector", (0, _reselect.createSelector)(_this.fieldSelector, function (fields) {
      return fields.filter(function (f) {
        return f.type === 'integer' || f.type === 'real';
      });
    }));
    return _this;
  }

  (0, _createClass2["default"])(TimeWidget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          enlargedIdx = _this$props.enlargedIdx,
          enlargeFilter = _this$props.enlargeFilter,
          filter = _this$props.filter,
          isAnyFilterAnimating = _this$props.isAnyFilterAnimating,
          _setFilter = _this$props.setFilter,
          setFilterPlot = _this$props.setFilterPlot,
          _toggleAnimation = _this$props.toggleAnimation,
          _updateAnimationSpeed = _this$props.updateAnimationSpeed,
          width = _this$props.width;
      var showSpeedControl = this.state.showSpeedControl;
      return _react["default"].createElement(WidgetContainer, {
        width: width
      }, _react["default"].createElement("div", {
        className: "bottom-widget--inner"
      }, _react["default"].createElement(TopSectionWrapper, null, _react["default"].createElement(StyledTitle, {
        className: "bottom-widget__field"
      }, _react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "bottom-widget__icon"
      }, _react["default"].createElement(_icons.Clock, {
        height: "15px"
      })), _react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), _react["default"].createElement(StyledTitle, {
        className: "bottom-widget__y-axis"
      }, _react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "bottom-widget__icon"
      }, _react["default"].createElement(_icons.LineChart, {
        height: "15px"
      })), _react["default"].createElement("div", {
        className: "bottom-widget__field-select"
      }, _react["default"].createElement(_fieldSelector["default"], {
        fields: this.yAxisFieldsSelector(this.props),
        placement: "top",
        id: "selected-time-widget-field",
        value: filter.yAxis ? filter.yAxis.name : null,
        onSelect: function onSelect(value) {
          return setFilterPlot(enlargedIdx, {
            yAxis: value
          });
        },
        inputTheme: "secondary",
        placeholder: "Y Axis",
        erasable: true,
        showToken: false
      }))), _react["default"].createElement(StyledTitle, {
        className: "bottom-widget__speed"
      }, _react["default"].createElement(_styledComponents2.Button, {
        link: true,
        width: "80px",
        onClick: this._toggleSpeedControl
      }, _react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "bottom-widget__icon speed"
      }, _react["default"].createElement(_icons.Rocket, {
        height: "15px"
      })), _react["default"].createElement("div", {
        style: {
          visibility: !showSpeedControl ? 'visible' : 'hidden',
          display: 'inline-block',
          width: '27px'
        }
      }, filter.speed, "x")), showSpeedControl ? _react["default"].createElement(_animationSpeedToggle["default"], {
        onHide: this._toggleSpeedControl,
        updateAnimationSpeed: function updateAnimationSpeed(speed) {
          return _updateAnimationSpeed(enlargedIdx, speed);
        },
        speed: filter.speed
      }) : null), _react["default"].createElement(_styledComponents2.CenterFlexbox, null, _react["default"].createElement(_styledComponents2.IconRoundSmall, null, _react["default"].createElement(_icons.Close, {
        height: "12px",
        onClick: function onClick() {
          return enlargeFilter(enlargedIdx);
        }
      })))), _react["default"].createElement(_timeRangeFilter["default"], {
        filter: filter,
        setFilter: function setFilter(value) {
          return _setFilter(enlargedIdx, 'value', value);
        },
        isAnyFilterAnimating: isAnyFilterAnimating,
        updateAnimationSpeed: function updateAnimationSpeed(speed) {
          return _updateAnimationSpeed(enlargedIdx, speed);
        },
        toggleAnimation: function toggleAnimation() {
          return _toggleAnimation(enlargedIdx);
        }
      })));
    }
  }]);
  return TimeWidget;
}(_react.Component);

exports.TimeWidget = TimeWidget;

var TimeWidgetFactory = function TimeWidgetFactory() {
  return TimeWidget;
};

var _default = TimeWidgetFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpbHRlcnMvdGltZS13aWRnZXQuanMiXSwibmFtZXMiOlsiaW5uZXJQZFNpZGUiLCJXaWRnZXRDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJzaWRlUGFuZWxCZyIsIlRvcFNlY3Rpb25XcmFwcGVyIiwibGFiZWxDb2xvciIsImhvdmVyQ29sb3IiLCJ0ZXh0Q29sb3JIbCIsIlRhYnMiLCJUYWIiLCJhY3RpdmUiLCJTdHlsZWRUaXRsZSIsIkNlbnRlckZsZXhib3giLCJ0ZXh0Q29sb3IiLCJUaW1lV2lkZ2V0Iiwic2hvd1NwZWVkQ29udHJvbCIsInNldFN0YXRlIiwic3RhdGUiLCJmaWVsZHMiLCJmaWVsZFNlbGVjdG9yIiwiZmlsdGVyIiwiZiIsInR5cGUiLCJlbmxhcmdlZElkeCIsImVubGFyZ2VGaWx0ZXIiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsInNldEZpbHRlciIsInNldEZpbHRlclBsb3QiLCJ0b2dnbGVBbmltYXRpb24iLCJ1cGRhdGVBbmltYXRpb25TcGVlZCIsIm5hbWUiLCJ5QXhpc0ZpZWxkc1NlbGVjdG9yIiwieUF4aXMiLCJ2YWx1ZSIsIl90b2dnbGVTcGVlZENvbnRyb2wiLCJ2aXNpYmlsaXR5IiwiZGlzcGxheSIsInNwZWVkIiwiQ29tcG9uZW50IiwiVGltZVdpZGdldEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxFQUFwQjtBQUVBLElBQU1DLGVBQWUsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUVK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O0FBQUE7QUFBOUIsUUFERixDQURGLENBekNGLENBREYsRUFnREUsZ0NBQUMsMkJBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRUgsTUFEVjtBQUVFLFFBQUEsU0FBUyxFQUFFLG1CQUFBYSxLQUFLO0FBQUEsaUJBQUlQLFVBQVMsQ0FBQ0gsV0FBRCxFQUFjLE9BQWQsRUFBdUJVLEtBQXZCLENBQWI7QUFBQSxTQUZsQjtBQUdFLFFBQUEsb0JBQW9CLEVBQUVSLG9CQUh4QjtBQUlFLFFBQUEsb0JBQW9CLEVBQUUsOEJBQUNZLEtBQUQ7QUFBQSxpQkFBV1IscUJBQW9CLENBQUNOLFdBQUQsRUFBY2MsS0FBZCxDQUEvQjtBQUFBLFNBSnhCO0FBS0UsUUFBQSxlQUFlLEVBQUU7QUFBQSxpQkFBTVQsZ0JBQWUsQ0FBQ0wsV0FBRCxDQUFyQjtBQUFBO0FBTG5CLFFBaERGLENBREYsQ0FERjtBQTRERDs7O0VBeEY2QmUsZ0I7Ozs7QUEyRmhDLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUFNekIsVUFBTjtBQUFBLENBQTFCOztlQUNleUIsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCB7QnV0dG9uLCBTZWxlY3RUZXh0Qm9sZCwgSWNvblJvdW5kU21hbGwsIENlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBUaW1lUmFuZ2VGaWx0ZXIgZnJvbSAnY29tcG9uZW50cy9maWx0ZXJzL3RpbWUtcmFuZ2UtZmlsdGVyJztcbmltcG9ydCB7Q2xvc2UsIENsb2NrLCBMaW5lQ2hhcnQsIFJvY2tldH0gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IEFuaW1hdGlvblNwZWVkVG9nZ2xlIGZyb20gJy4vYW5pbWF0aW9uLXNwZWVkLXRvZ2dsZSc7XG5cbmNvbnN0IGlubmVyUGRTaWRlID0gMzI7XG5cbmNvbnN0IFdpZGdldENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5yaWdodH1weDtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5ib3R0b219cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuXG4gIC5ib3R0b20td2lkZ2V0LS1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxCZ307XG4gICAgcGFkZGluZzogNnB4ICR7aW5uZXJQZFNpZGV9cHggMTBweCAke2lubmVyUGRTaWRlfXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuY29uc3QgVG9wU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6ICR7aW5uZXJQZFNpZGUgKiAyfXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcblxuICAuYm90dG9tLXdpZGdldF9feS1heGlzIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAuYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0IHtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgcGFkZGluZzogNHB4IDEwcHggNHB4IDRweDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIDphY3RpdmUsXG4gICAgICA6Zm9jdXMsXG4gICAgICAmLmZvY3VzLFxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd246aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd25fX3ZhbHVlIHtcbiAgICAgICAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMuaG92ZXJDb2xvclxuICAgICAgICAgID8gcHJvcHMudGhlbWVbcHJvcHMuaG92ZXJDb2xvcl1cbiAgICAgICAgICA6IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5jb25zdCBUYWJzID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1yaWdodDogNzZweDtcbmA7XG5cbmNvbnN0IFRhYiA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZFxuICAgICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogJ3RyYW5zcGFyZW50Jyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbCA6IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbmNvbnN0IFN0eWxlZFRpdGxlID0gc3R5bGVkKENlbnRlckZsZXhib3gpYFxuICBmbGV4LWdyb3c6IDA7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAuYm90dG9tLXdpZGdldF9faWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIH1cbiAgLmJvdHRvbS13aWRnZXRfX2ljb24uc3BlZWQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFRpbWVXaWRnZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzaG93U3BlZWRDb250cm9sOiBmYWxzZVxuICB9O1xuXG4gIF90b2dnbGVTcGVlZENvbnRyb2wgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1NwZWVkQ29udHJvbDogIXRoaXMuc3RhdGUuc2hvd1NwZWVkQ29udHJvbH0pXG4gIH07XG5cbiAgZmllbGRTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkcztcbiAgeUF4aXNGaWVsZHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRTZWxlY3RvciwgZmllbGRzID0+XG4gICAgZmllbGRzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gJ2ludGVnZXInIHx8IGYudHlwZSA9PT0gJ3JlYWwnKVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmxhcmdlZElkeCxcbiAgICAgIGVubGFyZ2VGaWx0ZXIsXG4gICAgICBmaWx0ZXIsXG4gICAgICBpc0FueUZpbHRlckFuaW1hdGluZyxcbiAgICAgIHNldEZpbHRlcixcbiAgICAgIHNldEZpbHRlclBsb3QsXG4gICAgICB0b2dnbGVBbmltYXRpb24sXG4gICAgICB1cGRhdGVBbmltYXRpb25TcGVlZCxcbiAgICAgIHdpZHRoXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7c2hvd1NwZWVkQ29udHJvbH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8V2lkZ2V0Q29udGFpbmVyIHdpZHRoPXt3aWR0aH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldC0taW5uZXJcIj5cbiAgICAgICAgICA8VG9wU2VjdGlvbldyYXBwZXI+XG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgPENlbnRlckZsZXhib3ggY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9faWNvblwiPlxuICAgICAgICAgICAgICAgIDxDbG9jayBoZWlnaHQ9XCIxNXB4XCIvPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICAgIDxTZWxlY3RUZXh0Qm9sZD57ZmlsdGVyLm5hbWV9PC9TZWxlY3RUZXh0Qm9sZD5cbiAgICAgICAgICAgIDwvU3R5bGVkVGl0bGU+XG4gICAgICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9feS1heGlzXCI+XG4gICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cbiAgICAgICAgICAgICAgICA8TGluZUNoYXJ0IGhlaWdodD1cIjE1cHhcIi8+XG4gICAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19maWVsZC1zZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgZmllbGRzPXt0aGlzLnlBeGlzRmllbGRzU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJzZWxlY3RlZC10aW1lLXdpZGdldC1maWVsZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZmlsdGVyLnlBeGlzID8gZmlsdGVyLnlBeGlzLm5hbWUgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbHVlID0+IHNldEZpbHRlclBsb3QoZW5sYXJnZWRJZHgsIHt5QXhpczogdmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZIEF4aXNcIlxuICAgICAgICAgICAgICAgICAgZXJhc2FibGVcbiAgICAgICAgICAgICAgICAgIHNob3dUb2tlbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1N0eWxlZFRpdGxlPlxuICAgICAgICAgICAgPFN0eWxlZFRpdGxlIGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX3NwZWVkXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gbGluayB3aWR0aD1cIjgwcHhcIiBvbkNsaWNrPXt0aGlzLl90b2dnbGVTcGVlZENvbnRyb2x9PlxuICAgICAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb24gc3BlZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxSb2NrZXQgaGVpZ2h0PVwiMTVweFwiLz5cbiAgICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogIXNob3dTcGVlZENvbnRyb2wgPyAndmlzaWJsZScgOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyN3B4J1xuICAgICAgICAgICAgICAgIH19PntmaWx0ZXIuc3BlZWR9eDwvZGl2PlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAge3Nob3dTcGVlZENvbnRyb2wgPyA8QW5pbWF0aW9uU3BlZWRUb2dnbGVcbiAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuX3RvZ2dsZVNwZWVkQ29udHJvbH1cbiAgICAgICAgICAgICAgICB1cGRhdGVBbmltYXRpb25TcGVlZD17KHNwZWVkKSA9PiB1cGRhdGVBbmltYXRpb25TcGVlZChlbmxhcmdlZElkeCwgc3BlZWQpfVxuICAgICAgICAgICAgICAgIHNwZWVkPXtmaWx0ZXIuc3BlZWR9Lz4gOiBudWxsfVxuICAgICAgICAgICAgPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgICA8SWNvblJvdW5kU21hbGw+XG4gICAgICAgICAgICAgICAgPENsb3NlIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXsoKSA9PiBlbmxhcmdlRmlsdGVyKGVubGFyZ2VkSWR4KX0gLz5cbiAgICAgICAgICAgICAgPC9JY29uUm91bmRTbWFsbD5cbiAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgICA8L1RvcFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICAgIDxUaW1lUmFuZ2VGaWx0ZXJcbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgc2V0RmlsdGVyPXt2YWx1ZSA9PiBzZXRGaWx0ZXIoZW5sYXJnZWRJZHgsICd2YWx1ZScsIHZhbHVlKX1cbiAgICAgICAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nPXtpc0FueUZpbHRlckFuaW1hdGluZ31cbiAgICAgICAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkPXsoc3BlZWQpID0+IHVwZGF0ZUFuaW1hdGlvblNwZWVkKGVubGFyZ2VkSWR4LCBzcGVlZCl9XG4gICAgICAgICAgICB0b2dnbGVBbmltYXRpb249eygpID0+IHRvZ2dsZUFuaW1hdGlvbihlbmxhcmdlZElkeCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dpZGdldENvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IFRpbWVXaWRnZXRGYWN0b3J5ID0gKCkgPT4gVGltZVdpZGdldDtcbmV4cG9ydCBkZWZhdWx0IFRpbWVXaWRnZXRGYWN0b3J5O1xuIl19