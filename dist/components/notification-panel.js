"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationPanelFactory;

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

var _notificationItem = _interopRequireDefault(require("./notification-panel/notification-item"));

var _defaultSettings = require("../constants/default-settings");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 4px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  z-index: 10000;\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var NotificationPanelContent = styled.div(_templateObject());
NotificationPanelFactory.deps = [_notificationItem["default"]];

function NotificationPanelFactory(NotificationItem) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(NotificationPanel, _Component);

    function NotificationPanel() {
      (0, _classCallCheck2["default"])(this, NotificationPanel);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NotificationPanel).apply(this, arguments));
    }

    (0, _createClass2["default"])(NotificationPanel, [{
      key: "render",
      value: function render() {
        var _this = this;

        var globalNotifications = this.props.notifications.filter(function (n) {
          return n.topic === _defaultSettings.DEFAULT_NOTIFICATION_TOPICS.global;
        });
        return _react["default"].createElement(NotificationPanelContent, {
          className: "notification-panel",
          style: {
            display: globalNotifications.length ? 'block' : 'none'
          }
        }, globalNotifications.map(function (n) {
          return _react["default"].createElement(NotificationItem, {
            key: n.id,
            notification: n,
            removeNotification: _this.props.removeNotification
          });
        }));
      }
    }]);
    return NotificationPanel;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    removeNotification: _propTypes["default"].func.isRequired,
    notifications: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired
  }), _temp;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYW5lbC5qcyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25QYW5lbENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJOb3RpZmljYXRpb25QYW5lbEZhY3RvcnkiLCJkZXBzIiwiTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkiLCJOb3RpZmljYXRpb25JdGVtIiwiZ2xvYmFsTm90aWZpY2F0aW9ucyIsInByb3BzIiwibm90aWZpY2F0aW9ucyIsImZpbHRlciIsIm4iLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsImRpc3BsYXkiLCJsZW5ndGgiLCJtYXAiLCJpZCIsInJlbW92ZU5vdGlmaWNhdGlvbiIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsd0JBQXdCLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixtQkFBOUI7QUFlQUMsd0JBQXdCLENBQUNDLElBQXpCLEdBQWdDLENBQUNDLDRCQUFELENBQWhDOztBQUVlLFNBQVNGLHdCQUFULENBQWtDRyxnQkFBbEMsRUFBb0Q7QUFBQTs7QUFDakU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLCtCQU1XO0FBQUE7O0FBQ1AsWUFBTUMsbUJBQW1CLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxhQUFYLENBQXlCQyxNQUF6QixDQUMxQixVQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUMsQ0FBQ0MsS0FBRixLQUFZQyw2Q0FBNEJDLE1BQTVDO0FBQUEsU0FEeUIsQ0FBNUI7QUFHQSxlQUNFLGdDQUFDLHdCQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMsb0JBRFo7QUFFRSxVQUFBLEtBQUssRUFBRTtBQUFDQyxZQUFBQSxPQUFPLEVBQUVSLG1CQUFtQixDQUFDUyxNQUFwQixHQUE2QixPQUE3QixHQUF1QztBQUFqRDtBQUZULFdBSUdULG1CQUFtQixDQUFDVSxHQUFwQixDQUF3QixVQUFBTixDQUFDO0FBQUEsaUJBQ3hCLGdDQUFDLGdCQUFEO0FBQ0UsWUFBQSxHQUFHLEVBQUVBLENBQUMsQ0FBQ08sRUFEVDtBQUVFLFlBQUEsWUFBWSxFQUFFUCxDQUZoQjtBQUdFLFlBQUEsa0JBQWtCLEVBQUUsS0FBSSxDQUFDSCxLQUFMLENBQVdXO0FBSGpDLFlBRHdCO0FBQUEsU0FBekIsQ0FKSCxDQURGO0FBY0Q7QUF4Qkg7QUFBQTtBQUFBLElBQXVDQyxnQkFBdkMseURBQ3FCO0FBQ2pCRCxJQUFBQSxrQkFBa0IsRUFBRUUsc0JBQVVDLElBQVYsQ0FBZUMsVUFEbEI7QUFFakJkLElBQUFBLGFBQWEsRUFBRVksc0JBQVVHLE9BQVYsQ0FBa0JILHNCQUFVSSxNQUE1QixFQUFvQ0Y7QUFGbEMsR0FEckI7QUEwQkQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkgZnJvbSAnLi9ub3RpZmljYXRpb24tcGFuZWwvbm90aWZpY2F0aW9uLWl0ZW0nO1xuaW1wb3J0IHtERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1N9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgTm90aWZpY2F0aW9uUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogNHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFlbTtcbiAgcmlnaHQ6IDFlbTtcbiAgei1pbmRleDogMTAwMDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuXG5Ob3RpZmljYXRpb25QYW5lbEZhY3RvcnkuZGVwcyA9IFtOb3RpZmljYXRpb25JdGVtRmFjdG9yeV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeShOb3RpZmljYXRpb25JdGVtKSB7XG4gIHJldHVybiBjbGFzcyBOb3RpZmljYXRpb25QYW5lbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIHJlbW92ZU5vdGlmaWNhdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIG5vdGlmaWNhdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgZ2xvYmFsTm90aWZpY2F0aW9ucyA9IHRoaXMucHJvcHMubm90aWZpY2F0aW9ucy5maWx0ZXIoXG4gICAgICAgIG4gPT4gbi50b3BpYyA9PT0gREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLmdsb2JhbFxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RpZmljYXRpb25QYW5lbENvbnRlbnRcbiAgICAgICAgICBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tcGFuZWxcIlxuICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogZ2xvYmFsTm90aWZpY2F0aW9ucy5sZW5ndGggPyAnYmxvY2snIDogJ25vbmUnfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnbG9iYWxOb3RpZmljYXRpb25zLm1hcChuID0+IChcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25JdGVtXG4gICAgICAgICAgICAgIGtleT17bi5pZH1cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtufVxuICAgICAgICAgICAgICByZW1vdmVOb3RpZmljYXRpb249e3RoaXMucHJvcHMucmVtb3ZlTm90aWZpY2F0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Ob3RpZmljYXRpb25QYW5lbENvbnRlbnQ+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==