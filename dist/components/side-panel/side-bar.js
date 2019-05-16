"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CollapseButtonFactory = void 0;

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

var _icons = require("../common/icons");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 1px;\n  color: ", ";\n  display: flex;\n  height: 20px;\n  position: absolute;\n  right: -8px;\n  top: ", "px;\n  width: 20px;\n\n  :hover {\n    cursor: pointer;\n    box-shadow: none;\n    background-color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: left 250ms, right 250ms;\n  left: ", "px;\n  align-items: stretch;\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 99;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSidePanelContainer = styled.div(_templateObject(), function (props) {
  return props.width + 2 * props.theme.sidePanel.margin.left;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
});
var SideBarContainer = styled.div(_templateObject2(), function (props) {
  return props.left;
});
var SideBarInner = styled.div(_templateObject3(), function (props) {
  return props.theme.sidePanelBg;
});
var StyledCollapseButton = styled.div(_templateObject4(), function (props) {
  return props.theme.sideBarCloseBtnBgd;
}, function (props) {
  return props.theme.sideBarCloseBtnColor;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sideBarCloseBtnBgdHover;
});

var CollapseButtonFactory = function CollapseButtonFactory() {
  var CollapseButton = function CollapseButton(_ref) {
    var onClick = _ref.onClick,
        isOpen = _ref.isOpen;
    return _react["default"].createElement(StyledCollapseButton, {
      className: "side-bar__close",
      onClick: onClick
    }, _react["default"].createElement(_icons.ArrowRight, {
      height: "12px",
      style: {
        transform: "rotate(".concat(isOpen ? 180 : 0, "deg)")
      }
    }));
  };

  return CollapseButton;
};

exports.CollapseButtonFactory = CollapseButtonFactory;
SidebarFactory.deps = [CollapseButtonFactory];

function SidebarFactory(CollapseButton) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(SideBar, _Component);

    function SideBar() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, SideBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(SideBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.onOpenOrClose({
          isOpen: !_this.props.isOpen
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(SideBar, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isOpen = _this$props.isOpen,
            minifiedWidth = _this$props.minifiedWidth,
            width = _this$props.width;
        var horizontalOffset = isOpen ? 0 : minifiedWidth - width;
        return _react["default"].createElement(StyledSidePanelContainer, {
          width: isOpen ? width : 0,
          className: "side-panel--container"
        }, _react["default"].createElement(SideBarContainer, {
          className: "side-bar",
          style: {
            width: "".concat(width, "px")
          },
          left: horizontalOffset
        }, isOpen ? _react["default"].createElement(SideBarInner, {
          className: "side-bar__inner"
        }, this.props.children) : null, _react["default"].createElement(CollapseButton, {
          isOpen: isOpen,
          onClick: this._onOpenOrClose
        })));
      }
    }]);
    return SideBar;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "defaultProps", {
    width: 300,
    minifiedWidth: 0,
    isOpen: true,
    onOpenOrClose: function noop() {}
  }), (0, _defineProperty2["default"])(_class, "propTypes", {
    width: _propTypes["default"].number,
    isOpen: _propTypes["default"].bool,
    minifiedWidth: _propTypes["default"].number,
    onOpenOrClose: _propTypes["default"].func
  }), _temp;
}

var _default = SidebarFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc2lkZS1iYXIuanMiXSwibmFtZXMiOlsiU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ3aWR0aCIsInRoZW1lIiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwiU2lkZUJhckNvbnRhaW5lciIsIlNpZGVCYXJJbm5lciIsInNpZGVQYW5lbEJnIiwiU3R5bGVkQ29sbGFwc2VCdXR0b24iLCJzaWRlQmFyQ2xvc2VCdG5CZ2QiLCJzaWRlQmFyQ2xvc2VCdG5Db2xvciIsInNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyIiwiQ29sbGFwc2VCdXR0b25GYWN0b3J5IiwiQ29sbGFwc2VCdXR0b24iLCJvbkNsaWNrIiwiaXNPcGVuIiwidHJhbnNmb3JtIiwiU2lkZWJhckZhY3RvcnkiLCJkZXBzIiwib25PcGVuT3JDbG9zZSIsIm1pbmlmaWVkV2lkdGgiLCJob3Jpem9udGFsT2Zmc2V0IiwiY2hpbGRyZW4iLCJfb25PcGVuT3JDbG9zZSIsIkNvbXBvbmVudCIsIm5vb3AiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx3QkFBd0IsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUduQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsSUFBSUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCQyxJQUFuRDtBQUFBLENBSGMsRUFPYixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRC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LEVBQUM7QUFGWixXQUlFLGdDQUFDLGdCQUFEO0FBQWtCLFVBQUEsU0FBUyxFQUFDLFVBQTVCO0FBQXVDLFVBQUEsS0FBSyxFQUFFO0FBQUNBLFlBQUFBLEtBQUssWUFBS0EsS0FBTDtBQUFOLFdBQTlDO0FBQ2tCLFVBQUEsSUFBSSxFQUFFd0I7QUFEeEIsV0FFR04sTUFBTSxHQUNMLGdDQUFDLFlBQUQ7QUFBYyxVQUFBLFNBQVMsRUFBQztBQUF4QixXQUNHLEtBQUtuQixLQUFMLENBQVcwQixRQURkLENBREssR0FJSCxJQU5OLEVBT0UsZ0NBQUMsY0FBRDtBQUNFLFVBQUEsTUFBTSxFQUFFUCxNQURWO0FBRUUsVUFBQSxPQUFPLEVBQUUsS0FBS1E7QUFGaEIsVUFQRixDQUpGLENBREY7QUFtQkQ7QUExQ0g7QUFBQTtBQUFBLElBQTZCQyxnQkFBN0IsNERBQ3dCO0FBQ3BCM0IsSUFBQUEsS0FBSyxFQUFFLEdBRGE7QUFFcEJ1QixJQUFBQSxhQUFhLEVBQUUsQ0FGSztBQUdwQkwsSUFBQUEsTUFBTSxFQUFFLElBSFk7QUFJcEJJLElBQUFBLGFBQWEsRUFBRSxTQUFTTSxJQUFULEdBQWdCLENBQUU7QUFKYixHQUR4Qix5REFRcUI7QUFDakI1QixJQUFBQSxLQUFLLEVBQUU2QixzQkFBVUMsTUFEQTtBQUVqQlosSUFBQUEsTUFBTSxFQUFFVyxzQkFBVUUsSUFGRDtBQUdqQlIsSUFBQUEsYUFBYSxFQUFFTSxzQkFBVUMsTUFIUjtBQUlqQlIsSUFBQUEsYUFBYSxFQUFFTyxzQkFBVUc7QUFKUixHQVJyQjtBQTRDRDs7ZUFFY1osYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Fycm93UmlnaHR9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuY29uc3QgU3R5bGVkU2lkZVBhbmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGggKyAyICogcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5sZWZ0fXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyNTBtcztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLnRvcH1weDtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLnJpZ2h0fXB4O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmJvdHRvbX1weDtcbiAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ubGVmdH1weDtcbmA7XG5cbmNvbnN0IFNpZGVCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDI1MG1zLCByaWdodCAyNTBtcztcbiAgbGVmdDogJHtwcm9wcyA9PiBwcm9wcy5sZWZ0fXB4O1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgZmxleC1ncm93OiAxO1xuYDtcblxuY29uc3QgU2lkZUJhcklubmVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxCZ307XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgU3R5bGVkQ29sbGFwc2VCdXR0b24gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlQmFyQ2xvc2VCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkNvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtOHB4O1xuICB0b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHdpZHRoOiAyMHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlQmFyQ2xvc2VCdG5CZ2RIb3Zlcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzZUJ1dHRvbkZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IENvbGxhcHNlQnV0dG9uID0gKHtvbkNsaWNrLCBpc09wZW59KSA9PiAoXG4gICAgPFN0eWxlZENvbGxhcHNlQnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJzaWRlLWJhcl9fY2xvc2VcIlxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8QXJyb3dSaWdodFxuICAgICAgICBoZWlnaHQ9XCIxMnB4XCJcbiAgICAgICAgc3R5bGU9e3t0cmFuc2Zvcm06IGByb3RhdGUoJHtpc09wZW4gPyAxODAgOiAwfWRlZylgfX1cbiAgICAgIC8+XG4gICAgPC9TdHlsZWRDb2xsYXBzZUJ1dHRvbj5cbiAgKTtcbiAgcmV0dXJuIENvbGxhcHNlQnV0dG9uO1xufTtcblxuU2lkZWJhckZhY3RvcnkuZGVwcyA9IFtDb2xsYXBzZUJ1dHRvbkZhY3RvcnldO1xuXG5mdW5jdGlvbiBTaWRlYmFyRmFjdG9yeShDb2xsYXBzZUJ1dHRvbikge1xuICByZXR1cm4gY2xhc3MgU2lkZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIHdpZHRoOiAzMDAsXG4gICAgICBtaW5pZmllZFdpZHRoOiAwLFxuICAgICAgaXNPcGVuOiB0cnVlLFxuICAgICAgb25PcGVuT3JDbG9zZTogZnVuY3Rpb24gbm9vcCgpIHt9XG4gICAgfTtcblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgICBtaW5pZmllZFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgb25PcGVuT3JDbG9zZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgX29uT3Blbk9yQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uT3Blbk9yQ2xvc2Uoe2lzT3BlbjogIXRoaXMucHJvcHMuaXNPcGVufSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpc09wZW4sIG1pbmlmaWVkV2lkdGgsIHdpZHRofSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBob3Jpem9udGFsT2Zmc2V0ID0gaXNPcGVuID8gMCA6IG1pbmlmaWVkV2lkdGggLSB3aWR0aDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFNpZGVQYW5lbENvbnRhaW5lclxuICAgICAgICAgIHdpZHRoPXtpc09wZW4gPyB3aWR0aCA6IDB9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2lkZS1wYW5lbC0tY29udGFpbmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTaWRlQmFyQ29udGFpbmVyIGNsYXNzTmFtZT1cInNpZGUtYmFyXCIgc3R5bGU9e3t3aWR0aDogYCR7d2lkdGh9cHhgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0PXtob3Jpem9udGFsT2Zmc2V0fT5cbiAgICAgICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgICAgIDxTaWRlQmFySW5uZXIgY2xhc3NOYW1lPVwic2lkZS1iYXJfX2lubmVyXCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvU2lkZUJhcklubmVyPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8Q29sbGFwc2VCdXR0b25cbiAgICAgICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uT3Blbk9yQ2xvc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU2lkZUJhckNvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWRTaWRlUGFuZWxDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckZhY3Rvcnk7XG4iXX0=