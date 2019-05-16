"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationItemFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _icons = require("../common/icons");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  svg {\n    vertical-align: text-top;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 2;\n  width: ", "px;\n  margin: 0 1em;\n  overflow: ", ";\n  padding-right: ", ";\n  p {\n    margin-top: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  width: ", "px;\n  height: ", "px;\n  font-size: 10px;\n  margin-bottom: 1rem;\n  padding: 1em;\n  border-radius: 4px;\n  box-shadow: ", ";\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NotificationItemContent = styled.div(_templateObject(), function (props) {
  return props.theme.notificationColors[props.notification.type] || '#000';
}, function (props) {
  return props.theme.notificationPanelItemWidth * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.notificationPanelItemHeight * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.boxShadow;
});
var DeleteIcon = styled(_icons.Delete)(_templateObject2());
var NotificationMessage = styled.div(_templateObject3(), function (props) {
  return props.theme.notificationPanelItemWidth;
}, function (props) {
  return props.isExpanded ? 'auto' : 'hidden';
}, function (props) {
  return props.isExpanded ? '1em' : 0;
});
var NotificationIcon = styled.div(_templateObject4());
var icons = {
  info: _react["default"].createElement(_icons.Info, null),
  warning: _react["default"].createElement(_icons.Warning, null),
  error: _react["default"].createElement(_icons.Warning, null),
  success: _react["default"].createElement(_icons.Checkmark, null)
};

function NotificationItemFactory() {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(NotificationItem, _Component);

    function NotificationItem(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, NotificationItem);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NotificationItem).call(this, props));
      _this.state = {
        isExpanded: false
      };
      return _this;
    }

    (0, _createClass2["default"])(NotificationItem, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            notification = _this$props.notification,
            removeNotification = _this$props.removeNotification;
        return _react["default"].createElement(NotificationItemContent, (0, _extends2["default"])({
          className: "notification-item"
        }, this.props, {
          onClick: function onClick() {
            return _this2.setState({
              isExpanded: !_this2.state.isExpanded
            });
          },
          isExpanded: this.state.isExpanded
        }), _react["default"].createElement(NotificationIcon, {
          className: "notification-item--icon"
        }, icons[notification.type]), _react["default"].createElement(NotificationMessage, {
          className: "notification-item--message",
          expanded: this.state.isExpanded,
          theme: this.props.theme
        }, _react["default"].createElement(_reactMarkdown["default"], {
          source: notification.message
        })), _react["default"].createElement("div", {
          className: "notification-item--action"
        }, _react["default"].createElement(DeleteIcon, {
          height: "10px",
          onClick: function onClick() {
            return removeNotification(notification.id);
          }
        })));
      }
    }]);
    return NotificationItem;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    notification: _propTypes["default"].shape({
      id: _propTypes["default"].string.isRequired,
      type: _propTypes["default"].string.isRequired,
      message: _propTypes["default"].string.isRequired
    }).isRequired
  }), _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYW5lbC9ub3RpZmljYXRpb24taXRlbS5qcyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25JdGVtQ29udGVudCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJub3RpZmljYXRpb25Db2xvcnMiLCJub3RpZmljYXRpb24iLCJ0eXBlIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtV2lkdGgiLCJOdW1iZXIiLCJpc0V4cGFuZGVkIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0IiwiYm94U2hhZG93IiwiRGVsZXRlSWNvbiIsIkRlbGV0ZSIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJOb3RpZmljYXRpb25JY29uIiwiaWNvbnMiLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwic3VjY2VzcyIsIk5vdGlmaWNhdGlvbkl0ZW1GYWN0b3J5Iiwic3RhdGUiLCJyZW1vdmVOb3RpZmljYXRpb24iLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJpZCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MsTUFBTSxDQUFDQyxHQUFWLG9CQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsa0JBQVosQ0FBK0JGLEtBQUssQ0FBQ0csWUFBTixDQUFtQkMsSUFBbEQsS0FBMkQsTUFBL0Q7QUFBQSxDQURFLEVBS2xCLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksMEJBQVosSUFBMEMsSUFBSUMsTUFBTSxDQUFDTixLQUFLLENBQUNPLFVBQVAsQ0FBcEQs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QkgsTUFBQUEsRUFBRSxFQUFFRSxzQkFBVUUsTUFBVixDQUFpQkMsVUFETztBQUU1QnpCLE1BQUFBLElBQUksRUFBRXNCLHNCQUFVRSxNQUFWLENBQWlCQyxVQUZLO0FBRzVCTixNQUFBQSxPQUFPLEVBQUVHLHNCQUFVRSxNQUFWLENBQWlCQztBQUhFLEtBQWhCLEVBSVhBO0FBTGMsR0FEckI7QUEwQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtEZWxldGUsIEluZm8sIFdhcm5pbmcsIENoZWNrbWFya30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuXG5jb25zdCBOb3RpZmljYXRpb25JdGVtQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uQ29sb3JzW3Byb3BzLm5vdGlmaWNhdGlvbi50eXBlXSB8fCAnIzAwMCd9O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uUGFuZWxJdGVtV2lkdGggKiAoMSArIE51bWJlcihwcm9wcy5pc0V4cGFuZGVkKSl9cHg7XG4gIGhlaWdodDogJHtwcm9wcyA9PlxuICAgIHByb3BzLnRoZW1lLm5vdGlmaWNhdGlvblBhbmVsSXRlbUhlaWdodCAqICgxICsgTnVtYmVyKHByb3BzLmlzRXhwYW5kZWQpKVxuICB9cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuYDtcblxuY29uc3QgRGVsZXRlSWNvbiA9IHN0eWxlZChEZWxldGUpYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBOb3RpZmljYXRpb25NZXNzYWdlID0gc3R5bGVkLmRpdmBcbiAgZmxleC1ncm93OiAyO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aH1weDtcbiAgbWFyZ2luOiAwIDFlbTtcbiAgb3ZlcmZsb3c6ICR7cHJvcHMgPT4gcHJvcHMuaXNFeHBhbmRlZCA/ICdhdXRvJyA6ICdoaWRkZW4nfTtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy5pc0V4cGFuZGVkID8gJzFlbScgOiAwfTtcbiAgcCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuYDtcblxuY29uc3QgTm90aWZpY2F0aW9uSWNvbiA9IHN0eWxlZC5kaXZgXG4gIHN2ZyB7XG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICB9XG5gO1xuXG5jb25zdCBpY29ucyA9IHtcbiAgaW5mbzogPEluZm8gLz4sXG4gIHdhcm5pbmc6IDxXYXJuaW5nIC8+LFxuICBlcnJvcjogPFdhcm5pbmcgLz4sXG4gIHN1Y2Nlc3M6IDxDaGVja21hcmsgLz5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbkl0ZW1GYWN0b3J5KClcbntcbiAgcmV0dXJuIGNsYXNzIE5vdGlmaWNhdGlvbkl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBub3RpZmljYXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgICB9KS5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBpc0V4cGFuZGVkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bm90aWZpY2F0aW9uLCByZW1vdmVOb3RpZmljYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RpZmljYXRpb25JdGVtQ29udGVudFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pdGVtXCJcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtpc0V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5pc0V4cGFuZGVkfSl9XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS5pc0V4cGFuZGVkfT5cbiAgICAgICAgICA8Tm90aWZpY2F0aW9uSWNvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWl0ZW0tLWljb25cIj5cbiAgICAgICAgICAgIHtpY29uc1tub3RpZmljYXRpb24udHlwZV19XG4gICAgICAgICAgPC9Ob3RpZmljYXRpb25JY29uPlxuICAgICAgICAgIDxOb3RpZmljYXRpb25NZXNzYWdlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJub3RpZmljYXRpb24taXRlbS0tbWVzc2FnZVwiXG4gICAgICAgICAgICBleHBhbmRlZD17dGhpcy5zdGF0ZS5pc0V4cGFuZGVkfVxuICAgICAgICAgICAgdGhlbWU9e3RoaXMucHJvcHMudGhlbWV9PlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtub3RpZmljYXRpb24ubWVzc2FnZX0gLz5cbiAgICAgICAgICA8L05vdGlmaWNhdGlvbk1lc3NhZ2U+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWl0ZW0tLWFjdGlvblwiPlxuICAgICAgICAgICAgPERlbGV0ZUljb24gaGVpZ2h0PVwiMTBweFwiIG9uQ2xpY2s9eygpID0+IHJlbW92ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24uaWQpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L05vdGlmaWNhdGlvbkl0ZW1Db250ZW50PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==