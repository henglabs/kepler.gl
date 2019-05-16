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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  border-radius: ", ";\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSlider = styled.div(_templateObject(), function (props) {
  return props.active ? props.theme.sliderBarHoverColor : props.theme.sliderBarColor;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return props.theme.sliderBarRadius;
});

function nope() {}

var SliderBarHandle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(SliderBarHandle, _Component);

  function SliderBarHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderBarHandle);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SliderBarHandle).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.sliderBarListener,
      toggleMouseOver: _this.toggleMouseOver
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderBarHandle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          v0Left = _this$props.v0Left;
      var style = this.props.vertical ? {
        height: "".concat(width, "%"),
        bottom: "".concat(-100 + width + v0Left, "%")
      } : {
        width: "".concat(width, "%"),
        left: "".concat(v0Left, "%")
      };
      return _react["default"].createElement(StyledSlider, {
        active: this.state.mouseOver,
        className: (0, _classnames["default"])('kg-range-slider__bar', {
          'kg-range-slider__bar--active': this.state.mouseOver
        }),
        style: style,
        onMouseDown: this.props.enableBarDrag ? this.mouseEvent.handleMouseDown : nope,
        onTouchStart: this.props.enableBarDrag ? this.mouseEvent.handleTouchStart : nope
      });
    }
  }]);
  return SliderBarHandle;
}(_react.Component);

exports["default"] = SliderBarHandle;
(0, _defineProperty2["default"])(SliderBarHandle, "propTypes", {
  width: _propTypes["default"].number,
  left: _propTypes["default"].string,
  sliderBarListener: _propTypes["default"].func,
  enableBarDrag: _propTypes["default"].bool,
  vertical: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(SliderBarHandle, "defaultProps", {
  sliderBarListener: nope,
  enableBarDrag: false,
  vertical: false
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zbGlkZXIvc2xpZGVyLWJhci1oYW5kbGUuanMiXSwibmFtZXMiOlsiU3R5bGVkU2xpZGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJhY3RpdmUiLCJ0aGVtZSIsInNsaWRlckJhckhvdmVyQ29sb3IiLCJzbGlkZXJCYXJDb2xvciIsInZlcnRpY2FsIiwic2xpZGVyQmFySGVpZ2h0Iiwic2xpZGVyQmFyUmFkaXVzIiwibm9wZSIsIlNsaWRlckJhckhhbmRsZSIsIm1vdXNlT3ZlciIsInNldFN0YXRlIiwic3RhdGUiLCJtb3VzZUV2ZW50IiwiTW91c2VFdmVudEhhbmRsZXIiLCJ2YWx1ZUxpc3RlbmVyIiwic2xpZGVyQmFyTGlzdGVuZXIiLCJ0b2dnbGVNb3VzZU92ZXIiLCJ3aWR0aCIsInYwTGVmdCIsInN0eWxlIiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsImVuYWJsZUJhckRyYWciLCJoYW5kbGVNb3VzZURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwibnVtYmVyIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxNQUFNLENBQUNDLEdBQVYsb0JBRUksVUFBQUMsS0FBSztBQUFBLFNBQ3ZCQSxLQUFLLENBQUNDLE1BQU4sR0FDSUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLG1CQURoQixHQUVJSCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsY0FITztBQUFBLENBRlQsRUFNZCxVQUFBSixLQUFLO0FBQUEsbUJBQU9BLEtBQUssQ0FBQ0ssUUFBTixHQUFpQixPQUFqQixHQUEyQixRQUFsQyxlQUErQ0wsS0FBSyxDQUFDRSxLQUFOLENBQVlJLGVBQTNEO0FBQUEsQ0FOUyxFQU9DLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUssZUFBaEI7QUFBQSxDQVBOLENBQWxCOztBQWNBLFNBQVNDLElBQVQsR0FBZ0IsQ0FBRTs7SUFFR0MsZTs7Ozs7QUFnQm5CLDJCQUFZVCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsMkhBQU1BLEtBQU47QUFEaUIsOEZBU1g7QUFBQ1UsTUFBQUEsU0FBUyxFQUFFO0FBQVosS0FUVztBQUFBLHdHQVdELFlBQU07QUFDdEIsWUFBS0MsUUFBTCxDQUFjO0FBQUNELFFBQUFBLFNBQVMsRUFBRSxDQUFDLE1BQUtFLEtBQUwsQ0FBV0Y7QUFBeEIsT0FBZDtBQUNELEtBYmtCO0FBRWpCLFVBQUtHLFVBQUwsR0FBa0IsSUFBSUMsc0JBQUosQ0FBc0I7QUFDdENULE1BQUFBLFFBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQURzQjtBQUV0Q1UsTUFBQUEsYUFBYSxFQUFFZixLQUFLLENBQUNnQixpQkFGaUI7QUFHdENDLE1BQUFBLGVBQWUsRUFBRSxNQUFLQTtBQUhnQixLQUF0QixDQUFsQjtBQUZpQjtBQU9sQjs7Ozs2QkFRUTtBQUFBLHdCQUNpQixLQUFLakIsS0FEdEI7QUFBQSxVQUNBa0IsS0FEQSxlQUNBQSxLQURBO0FBQUEsVUFDT0MsTUFEUCxlQUNPQSxNQURQO0FBR1AsVUFBTUMsS0FBSyxHQUFHLEtBQUtwQixLQUFMLENBQVdLLFFBQVgsR0FBc0I7QUFDbENnQixRQUFBQSxNQUFNLFlBQUtILEtBQUwsTUFENEI7QUFFbENJLFFBQUFBLE1BQU0sWUFBSyxDQUFDLEdBQUQsR0FBT0osS0FBUCxHQUFlQyxNQUFwQjtBQUY0QixPQUF0QixHQUdWO0FBQ0ZELFFBQUFBLEtBQUssWUFBS0EsS0FBTCxNQURIO0FBRUZLLFFBQUFBLElBQUksWUFBS0osTUFBTDtBQUZGLE9BSEo7QUFRQSxhQUNFLGdDQUFDLFlBQUQ7QUFDRSxRQUFBLE1BQU0sRUFBRSxLQUFLUCxLQUFMLENBQVdGLFNBRHJCO0FBRUUsUUFBQSxTQUFTLEVBQUUsNEJBQVcsc0JBQVgsRUFBbUM7QUFDNUMsMENBQWdDLEtBQUtFLEtBQUwsQ0FBV0Y7QUFEQyxTQUFuQyxDQUZiO0FBS0UsUUFBQSxLQUFLLEVBQUVVLEtBTFQ7QUFNRSxRQUFBLFdBQVcsRUFBRSxLQUFLcEIsS0FBTCxDQUFXd0IsYUFBWCxHQUEyQixLQUFLWCxVQUFMLENBQWdCWSxlQUEzQyxHQUE2RGpCLElBTjVFO0FBT0UsUUFBQSxZQUFZLEVBQUUsS0FBS1IsS0FBTCxDQUFXd0IsYUFBWCxHQUEyQixLQUFLWCxVQUFMLENBQWdCYSxnQkFBM0MsR0FBOERsQjtBQVA5RSxRQURGO0FBV0Q7OztFQXJEMENtQixnQjs7O2lDQUF4QmxCLGUsZUFFQTtBQUNqQlMsRUFBQUEsS0FBSyxFQUFFVSxzQkFBVUMsTUFEQTtBQUVqQk4sRUFBQUEsSUFBSSxFQUFFSyxzQkFBVUUsTUFGQztBQUdqQmQsRUFBQUEsaUJBQWlCLEVBQUVZLHNCQUFVRyxJQUhaO0FBSWpCUCxFQUFBQSxhQUFhLEVBQUVJLHNCQUFVSSxJQUpSO0FBS2pCM0IsRUFBQUEsUUFBUSxFQUFFdUIsc0JBQVVJO0FBTEgsQztpQ0FGQXZCLGUsa0JBVUc7QUFDcEJPLEVBQUFBLGlCQUFpQixFQUFFUixJQURDO0FBRXBCZ0IsRUFBQUEsYUFBYSxFQUFFLEtBRks7QUFHcEJuQixFQUFBQSxRQUFRLEVBQUU7QUFIVSxDO0FBNEN2QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNb3VzZUV2ZW50SGFuZGxlciBmcm9tICcuL21vdXNlLWV2ZW50JztcblxuY29uc3QgU3R5bGVkU2xpZGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLnNsaWRlckJhckhvdmVyQ29sb3JcbiAgICAgIDogcHJvcHMudGhlbWUuc2xpZGVyQmFyQ29sb3J9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJSYWRpdXN9O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5mdW5jdGlvbiBub3BlKCkge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyQmFySGFuZGxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxlZnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2xpZGVyQmFyTGlzdGVuZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGVuYWJsZUJhckRyYWc6IFByb3BUeXBlcy5ib29sLFxuICAgIHZlcnRpY2FsOiBQcm9wVHlwZXMuYm9vbFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2xpZGVyQmFyTGlzdGVuZXI6IG5vcGUsXG4gICAgZW5hYmxlQmFyRHJhZzogZmFsc2UsXG4gICAgdmVydGljYWw6IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5tb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnRIYW5kbGVyKHtcbiAgICAgIHZlcnRpY2FsOiBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIHZhbHVlTGlzdGVuZXI6IHByb3BzLnNsaWRlckJhckxpc3RlbmVyLFxuICAgICAgdG9nZ2xlTW91c2VPdmVyOiB0aGlzLnRvZ2dsZU1vdXNlT3ZlclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUgPSB7bW91c2VPdmVyOiBmYWxzZX07XG5cbiAgdG9nZ2xlTW91c2VPdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogIXRoaXMuc3RhdGUubW91c2VPdmVyfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt3aWR0aCwgdjBMZWZ0fSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMucHJvcHMudmVydGljYWwgPyB7XG4gICAgICBoZWlnaHQ6IGAke3dpZHRofSVgLFxuICAgICAgYm90dG9tOiBgJHstMTAwICsgd2lkdGggKyB2MExlZnR9JWBcbiAgICB9IDoge1xuICAgICAgd2lkdGg6IGAke3dpZHRofSVgLFxuICAgICAgbGVmdDogYCR7djBMZWZ0fSVgXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkU2xpZGVyXG4gICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctcmFuZ2Utc2xpZGVyX19iYXInLCB7XG4gICAgICAgICAgJ2tnLXJhbmdlLXNsaWRlcl9fYmFyLS1hY3RpdmUnOiB0aGlzLnN0YXRlLm1vdXNlT3ZlclxuICAgICAgICB9KX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnID8gdGhpcy5tb3VzZUV2ZW50LmhhbmRsZU1vdXNlRG93biA6IG5vcGV9XG4gICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnID8gdGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnQgOiBub3BlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59O1xuIl19