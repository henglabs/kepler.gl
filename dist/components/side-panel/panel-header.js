"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SaveExportDropdownFactory = exports.SaveMapFactory = exports.ExportMapFactory = exports.ExportDataFactory = exports.ExportImageFactory = exports.PanelAction = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents2 = require("../common/styled-components");

var _logo = _interopRequireDefault(require("../common/logo"));

var _icons = require("../common/icons");

var _panelDropdown = _interopRequireDefault(require("./panel-dropdown"));

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  box-shadow: ", ";\n  font-size: 11px;\n  padding: 16px 0;\n  position: absolute;\n  left: 64px;\n  transition: ", ";\n  display: flex;\n  margin-top: ", ";\n  opacity: ", ";\n  transform: translateX(calc(-50% + 20px));\n  pointer-events:  ", ";\n  z-index: 1000;\n\n  .save-export-dropdown__inner {\n    box-shadow: none;\n    background-color: transparent;\n    display: flex;\n  }\n\n  .save-export-dropdown__item {\n    align-items: center;\n    border-right: 1px solid ", ";\n    color: ", ";\n    display: flex;\n    flex-direction: column;\n    padding: 0 22px;\n\n    :hover {\n      cursor: pointer;\n      color: ", ";\n    }\n\n    &:last-child {\n      border-right: 0;\n    }\n  }\n\n  .save-export-dropdown__title {\n    white-space: nowrap;\n    margin-top: 4px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  color: ", ";\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  width: 70px;\n  padding: 5px;\n  font-weight: bold;\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px 16px 0 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledPanelHeader = styled.div.attrs({
  className: 'side-side-panel__header'
})(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
});
var StyledPanelHeaderTop = styled.div.attrs({
  className: 'side-panel__header__top'
})(_templateObject2());
var StyledPanelTopActions = styled.div.attrs({
  className: 'side-panel__header__actions'
})(_templateObject3());
var StyledPanelAction = styled.div.attrs({
  className: 'side-panel__header__actions'
})(_templateObject4(), function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.secondaryBtnActBgd;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});
var StyledPanelDropdown = styled.div(_templateObject5(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.show ? '6px' : '20px';
}, function (props) {
  return props.show ? 1 : 0;
}, function (props) {
  return props.show ? 'all' : 'none';
}, function (props) {
  return props.theme.panelHeaderIcon;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PanelAction = function PanelAction(_ref) {
  var item = _ref.item,
      onClick = _ref.onClick;
  return _react["default"].createElement(StyledPanelAction, {
    className: "side-panel__panel-header__action",
    "data-tip": true,
    "data-for": "".concat(item.id, "-action"),
    onClick: onClick
  }, item.label ? _react["default"].createElement("p", null, item.label) : null, _react["default"].createElement("a", {
    target: item.blank ? '_blank' : '',
    href: item.href
  }, _react["default"].createElement(item.iconComponent, {
    height: "20px"
  })), item.tooltip ? _react["default"].createElement(_styledComponents2.Tooltip, {
    id: "".concat(item.id, "-action"),
    place: "bottom",
    delayShow: 500,
    effect: "solid"
  }, _react["default"].createElement("span", null, item.tooltip)) : null);
};

exports.PanelAction = PanelAction;

var PanelItem = function PanelItem(_ref2) {
  var onClose = _ref2.onClose,
      onClickHandler = _ref2.onClickHandler,
      label = _ref2.label,
      icon = _ref2.icon;
  return _react["default"].createElement("div", {
    className: "save-export-dropdown__item",
    onClick: function onClick(e) {
      e.stopPropagation();
      onClose();
      onClickHandler();
    }
  }, icon, _react["default"].createElement("div", {
    className: "save-export-dropdown__title"
  }, label));
};

var ExportImageFactory = function ExportImageFactory() {
  var ExportImage = function ExportImage(props) {
    return _react["default"].createElement(PanelItem, props);
  };

  ExportImage.defaultProps = {
    label: 'Export Image',
    icon: _react["default"].createElement(_icons.Picture, null)
  };
  return ExportImage;
};

exports.ExportImageFactory = ExportImageFactory;

var ExportDataFactory = function ExportDataFactory() {
  var ExportData = function ExportData(props) {
    return _react["default"].createElement(PanelItem, props);
  };

  ExportData.defaultProps = {
    label: 'Export Data',
    icon: _react["default"].createElement(_icons.Files, null)
  };
  return ExportData;
};

exports.ExportDataFactory = ExportDataFactory;

var ExportMapFactory = function ExportMapFactory() {
  var ExportMap = function ExportMap(props) {
    return _react["default"].createElement(PanelItem, props);
  };

  ExportMap.defaultProps = {
    label: 'Export Map',
    icon: _react["default"].createElement(_icons.Map, null)
  };
  return ExportMap;
};

exports.ExportMapFactory = ExportMapFactory;

var SaveMapFactory = function SaveMapFactory() {
  var SaveMap = function SaveMap(props) {
    return _react["default"].createElement(PanelItem, props);
  };

  SaveMap.defaultProps = {
    label: 'Save Map',
    icon: _react["default"].createElement(_icons.Share, null)
  };
  return SaveMap;
};

exports.SaveMapFactory = SaveMapFactory;

var SaveExportDropdownFactory = function SaveExportDropdownFactory(ExportImage, ExportData, ExportMap, SaveMap) {
  var SaveExportDropdown = function SaveExportDropdown(_ref3) {
    var onExportImage = _ref3.onExportImage,
        onExportData = _ref3.onExportData,
        onExportConfig = _ref3.onExportConfig,
        onExportMap = _ref3.onExportMap,
        onSaveMap = _ref3.onSaveMap,
        show = _ref3.show,
        onClose = _ref3.onClose;
    return _react["default"].createElement(StyledPanelDropdown, {
      show: show,
      className: "save-export-dropdown"
    }, _react["default"].createElement(_panelDropdown["default"], {
      className: "save-export-dropdown__inner",
      show: show,
      onClose: onClose
    }, _react["default"].createElement(ExportImage, {
      onClickHandler: onExportImage,
      onClose: onClose
    }), _react["default"].createElement(ExportData, {
      onClickHandler: onExportData,
      onClose: onClose
    }), _react["default"].createElement(ExportMap, {
      onClickHandler: onExportMap,
      onClose: onClose
    }), onSaveMap ? _react["default"].createElement(SaveMap, {
      onClickHandler: onSaveMap,
      onClose: onClose
    }) : null));
  };

  return SaveExportDropdown;
};

exports.SaveExportDropdownFactory = SaveExportDropdownFactory;
SaveExportDropdownFactory.deps = [ExportImageFactory, ExportDataFactory, ExportMapFactory, SaveMapFactory];
PanelHeaderFactory.deps = [SaveExportDropdownFactory];

function PanelHeaderFactory(SaveExportDropdown) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(PanelHeader, _Component);

    function PanelHeader() {
      (0, _classCallCheck2["default"])(this, PanelHeader);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(PanelHeader).apply(this, arguments));
    }

    (0, _createClass2["default"])(PanelHeader, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            version = _this$props.version,
            actionItems = _this$props.actionItems,
            onSaveMap = _this$props.onSaveMap,
            onExportImage = _this$props.onExportImage,
            onExportData = _this$props.onExportData,
            onExportConfig = _this$props.onExportConfig,
            onExportMap = _this$props.onExportMap,
            visibleDropdown = _this$props.visibleDropdown,
            showExportDropdown = _this$props.showExportDropdown,
            hideExportDropdown = _this$props.hideExportDropdown;
        return _react["default"].createElement(StyledPanelHeader, {
          className: "side-panel__panel-header"
        }, _react["default"].createElement(StyledPanelHeaderTop, {
          className: "side-panel__panel-header__top"
        }, _react["default"].createElement(this.props.logoComponent, {
          appName: appName,
          version: version
        }), _react["default"].createElement(StyledPanelTopActions, null, actionItems.map(function (item) {
          return _react["default"].createElement("div", {
            className: "side-panel__panel-header__right",
            key: item.id,
            style: {
              position: 'relative'
            }
          }, _react["default"].createElement(PanelAction, {
            item: item,
            onClick: function onClick() {
              if (item.dropdownComponent) {
                showExportDropdown(item.id);
              }

              item.onClick();
            }
          }), item.dropdownComponent ? _react["default"].createElement(item.dropdownComponent, {
            onClose: hideExportDropdown,
            show: visibleDropdown === item.id,
            onSaveMap: onSaveMap,
            onExportData: onExportData,
            onExportImage: onExportImage,
            onExportConfig: onExportConfig,
            onExportMap: onExportMap
          }) : null);
        }))));
      }
    }]);
    return PanelHeader;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    appName: _propTypes["default"].string,
    version: _propTypes["default"].string,
    uiState: _propTypes["default"].object,
    uiStateActions: _propTypes["default"].object,
    logoComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
    actionItems: _propTypes["default"].arrayOf(_propTypes["default"].any)
  }), (0, _defineProperty2["default"])(_class, "defaultProps", {
    logoComponent: _logo["default"],
    actionItems: [{
      id: 'save',
      iconComponent: _icons.Save,
      onClick: function onClick() {},
      label: 'Share',
      dropdownComponent: SaveExportDropdown
    }]
  }), _temp;
}

var _default = PanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlN0eWxlZFBhbmVsSGVhZGVyIiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsSGVhZGVyQmciLCJTdHlsZWRQYW5lbEhlYWRlclRvcCIsIlN0eWxlZFBhbmVsVG9wQWN0aW9ucyIsIlN0eWxlZFBhbmVsQWN0aW9uIiwiYWN0aXZlIiwidGV4dENvbG9ySGwiLCJzdWJ0ZXh0Q29sb3IiLCJzZWNvbmRhcnlCdG5BY3RCZ2QiLCJTdHlsZWRQYW5lbERyb3Bkb3duIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0U2hhZG93IiwidHJhbnNpdGlvblNsb3ciLCJzaG93IiwicGFuZWxIZWFkZXJJY29uIiwidGV4dENvbG9yIiwiUGFuZWxBY3Rpb24iLCJpdGVtIiwib25DbGljayIsImlkIiwibGFiZWwiLCJibGFuayIsImhyZWYiLCJ0b29sdGlwIiwiUGFuZWxJdGVtIiwib25DbG9zZSIsIm9uQ2xpY2tIYW5kbGVyIiwiaWNvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJFeHBvcnRJbWFnZUZhY3RvcnkiLCJFeHBvcnRJbWFnZSIsImRlZmF1bHRQcm9wcyIsIkV4cG9ydERhdGFGYWN0b3J5IiwiRXhwb3J0RGF0YSIsIkV4cG9ydE1hcEZhY3RvcnkiLCJFeHBvcnRNYXAiLCJTYXZlTWFwRmFjdG9yeSIsIlNhdmVNYXAiLCJTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5IiwiU2F2ZUV4cG9ydERyb3Bkb3duIiwib25FeHBvcnRJbWFnZSIsIm9uRXhwb3J0RGF0YSIsIm9uRXhwb3J0Q29uZmlnIiwib25FeHBvcnRNYXAiLCJvblNhdmVNYXAiLCJkZXBzIiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsInZlcnNpb24iLCJhY3Rpb25JdGVtcyIsInZpc2libGVEcm9wZG93biIsInNob3dFeHBvcnREcm9wZG93biIsImhpZGVFeHBvcnREcm9wZG93biIsIm1hcCIsInBvc2l0aW9uIiwiZHJvcGRvd25Db21wb25lbnQiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJ1aVN0YXRlIiwib2JqZWN0IiwidWlTdGF0ZUFjdGlvbnMiLCJsb2dvQ29tcG9uZW50Iiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJhcnJheU9mIiwiYW55IiwiS2VwbGVyR2xMb2dvIiwiaWNvbkNvbXBvbmVudCIsIlNhdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsTUFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLEVBQUFBLFNBQVMsRUFBRTtBQUQ4QixDQUFqQixDQUFILG9CQUdELFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsaUJBQWhCO0FBQUEsQ0FISixDQUF2QjtBQU9BLElBQU1DLG9CQUFvQixHQUFHUCxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUM1Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRGlDLENBQWpCLENBQUgsb0JBQTFCO0FBU0EsSUFBTUsscUJBQXFCLEdBQUdSLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzdDQyxFQUFBQSxTQUFTLEVBQUU7QUFEa0MsQ0FBakIsQ0FBSCxvQkFBM0I7QUFNQSxJQUFNTSxpQkFBaUIsR0FBR1QsTUFBTSxDQUFDQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLEVBQUFBLFNBQVMsRUFBRTtBQUQ4QixDQUFqQixDQUFILHFCQUtaLFVBQUFDLEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNNLE1BQU4sR0FB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RyxJQXJCTixDQURtQjtBQUFBLFNBQXBCLENBREgsQ0FGRixDQURGLENBREY7QUFrQ0Q7QUF0RUg7QUFBQTtBQUFBLElBQWlDYSxnQkFBakMseURBQ3FCO0FBQ2pCVCxJQUFBQSxPQUFPLEVBQUVVLHNCQUFVQyxNQURGO0FBRWpCVixJQUFBQSxPQUFPLEVBQUVTLHNCQUFVQyxNQUZGO0FBR2pCQyxJQUFBQSxPQUFPLEVBQUVGLHNCQUFVRyxNQUhGO0FBSWpCQyxJQUFBQSxjQUFjLEVBQUVKLHNCQUFVRyxNQUpUO0FBS2pCRSxJQUFBQSxhQUFhLEVBQUVMLHNCQUFVTSxTQUFWLENBQW9CLENBQUNOLHNCQUFVTyxPQUFYLEVBQW9CUCxzQkFBVVEsSUFBOUIsQ0FBcEIsQ0FMRTtBQU1qQmhCLElBQUFBLFdBQVcsRUFBRVEsc0JBQVVTLE9BQVYsQ0FBa0JULHNCQUFVVSxHQUE1QjtBQU5JLEdBRHJCLDREQVV3QjtBQUNwQkwsSUFBQUEsYUFBYSxFQUFFTSxnQkFESztBQUVwQm5CLElBQUFBLFdBQVcsRUFBRSxDQUFDO0FBQ1ovQixNQUFBQSxFQUFFLEVBQUUsTUFEUTtBQUVabUQsTUFBQUEsYUFBYSxFQUFFQyxXQUZIO0FBR1pyRCxNQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUhMO0FBSVpFLE1BQUFBLEtBQUssRUFBRSxPQUpLO0FBS1pvQyxNQUFBQSxpQkFBaUIsRUFBRWhCO0FBTFAsS0FBRDtBQUZPLEdBVnhCO0FBd0VEOztlQUVjTyxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9nbyc7XG5pbXBvcnQge1NhdmUsIEZpbGVzLCBTaGFyZSwgUGljdHVyZSwgTWFwfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93biBmcm9tICdjb21wb25lbnRzL3NpZGUtcGFuZWwvcGFuZWwtZHJvcGRvd24nO1xuXG5jb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXNpZGUtcGFuZWxfX2hlYWRlcidcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX2hlYWRlcl9fdG9wJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbFRvcEFjdGlvbnMgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9faGVhZGVyX19hY3Rpb25zJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbEFjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsX19oZWFkZXJfX2FjdGlvbnMnXG59KWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnRleHRDb2xvckhsIDogcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkFjdEJnZH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRQYW5lbERyb3Bkb3duID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdFNoYWRvd307XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMTZweCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDY0cHg7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvblNsb3d9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnNob3cgPyAnNnB4JyA6ICcyMHB4J307XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMuc2hvdyA/IDEgOiAwfTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTUwJSArIDIwcHgpKTtcbiAgcG9pbnRlci1ldmVudHM6ICAke3Byb3BzID0+IHByb3BzLnNob3cgPyAnYWxsJyA6ICdub25lJ307XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgLnNhdmUtZXhwb3J0LWRyb3Bkb3duX19pbm5lciB7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLnNhdmUtZXhwb3J0LWRyb3Bkb3duX19pdGVtIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDIycHg7XG5cbiAgICA6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgLnNhdmUtZXhwb3J0LWRyb3Bkb3duX190aXRsZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbEFjdGlvbiA9ICh7aXRlbSwgb25DbGlja30pID0+IChcbiAgPFN0eWxlZFBhbmVsQWN0aW9uIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX3BhbmVsLWhlYWRlcl9fYWN0aW9uXCJcbiAgICBkYXRhLXRpcCBkYXRhLWZvcj17YCR7aXRlbS5pZH0tYWN0aW9uYH0gb25DbGljaz17b25DbGlja30+XG4gICAge2l0ZW0ubGFiZWwgPyA8cD57aXRlbS5sYWJlbH08L3A+IDogbnVsbH1cbiAgICA8YSB0YXJnZXQ9e2l0ZW0uYmxhbmsgPyAnX2JsYW5rJyA6ICcnfSBocmVmPXtpdGVtLmhyZWZ9PlxuICAgICAgPGl0ZW0uaWNvbkNvbXBvbmVudCBoZWlnaHQ9XCIyMHB4XCIgLz5cbiAgICA8L2E+XG4gICAge2l0ZW0udG9vbHRpcCA/ICg8VG9vbHRpcFxuICAgICAgaWQ9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9XG4gICAgICBwbGFjZT1cImJvdHRvbVwiXG4gICAgICBkZWxheVNob3c9ezUwMH1cbiAgICAgIGVmZmVjdD1cInNvbGlkXCJcbiAgICA+XG4gICAgICA8c3Bhbj57aXRlbS50b29sdGlwfTwvc3Bhbj5cbiAgICA8L1Rvb2x0aXA+KSA6IG51bGwgfVxuICA8L1N0eWxlZFBhbmVsQWN0aW9uPlxuKTtcblxuY29uc3QgUGFuZWxJdGVtID0gKHtvbkNsb3NlLCBvbkNsaWNrSGFuZGxlciwgbGFiZWwsIGljb259KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1leHBvcnQtZHJvcGRvd25fX2l0ZW1cIiBvbkNsaWNrPXsoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25DbG9zZSgpO1xuICAgIG9uQ2xpY2tIYW5kbGVyKCk7XG4gIH19PlxuICAgIHtpY29ufVxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2F2ZS1leHBvcnQtZHJvcGRvd25fX3RpdGxlXCI+e2xhYmVsfTwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBFeHBvcnRJbWFnZUZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IEV4cG9ydEltYWdlID0gKHByb3BzKSA9PiAoXG4gICAgPFBhbmVsSXRlbSB7Li4ucHJvcHN9Lz5cbiAgKTtcbiAgRXhwb3J0SW1hZ2UuZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsOiAnRXhwb3J0IEltYWdlJyxcbiAgICBpY29uOiA8UGljdHVyZSAvPlxuICB9O1xuXG4gIHJldHVybiBFeHBvcnRJbWFnZTtcbn07XG5cbmV4cG9ydCBjb25zdCBFeHBvcnREYXRhRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgRXhwb3J0RGF0YSA9IChwcm9wcykgPT4gKFxuICAgIDxQYW5lbEl0ZW0gey4uLnByb3BzfS8+XG4gICk7XG4gIEV4cG9ydERhdGEuZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsOiAnRXhwb3J0IERhdGEnLFxuICAgIGljb246IDxGaWxlcyAvPlxuICB9O1xuXG4gIHJldHVybiBFeHBvcnREYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IEV4cG9ydE1hcEZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IEV4cG9ydE1hcCA9IChwcm9wcykgPT4gKFxuICAgIDxQYW5lbEl0ZW0gey4uLnByb3BzfS8+XG4gICk7XG4gIEV4cG9ydE1hcC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGFiZWw6ICdFeHBvcnQgTWFwJyxcbiAgICBpY29uOiA8TWFwIC8+XG4gIH07XG5cbiAgcmV0dXJuIEV4cG9ydE1hcDtcbn07XG5cbmV4cG9ydCBjb25zdCBTYXZlTWFwRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgU2F2ZU1hcCA9IChwcm9wcykgPT4gKFxuICAgIDxQYW5lbEl0ZW0gey4uLnByb3BzfS8+XG4gICk7XG4gIFNhdmVNYXAuZGVmYXVsdFByb3BzID0ge1xuICAgIGxhYmVsOiAnU2F2ZSBNYXAnLFxuICAgIGljb246IDxTaGFyZSAvPlxuICB9O1xuXG4gIHJldHVybiBTYXZlTWFwO1xufTtcblxuZXhwb3J0IGNvbnN0IFNhdmVFeHBvcnREcm9wZG93bkZhY3RvcnkgPSAoXG4gIEV4cG9ydEltYWdlLFxuICBFeHBvcnREYXRhLFxuICBFeHBvcnRNYXAsXG4gIFNhdmVNYXApID0+IHtcbiAgY29uc3QgU2F2ZUV4cG9ydERyb3Bkb3duID0gKHtcbiAgICBvbkV4cG9ydEltYWdlLFxuICAgIG9uRXhwb3J0RGF0YSxcbiAgICBvbkV4cG9ydENvbmZpZyxcbiAgICBvbkV4cG9ydE1hcCxcbiAgICBvblNhdmVNYXAsXG4gICAgc2hvdyxcbiAgICBvbkNsb3NlXG4gIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZFBhbmVsRHJvcGRvd24gc2hvdz17c2hvd30gY2xhc3NOYW1lPVwic2F2ZS1leHBvcnQtZHJvcGRvd25cIj5cbiAgICAgICAgPENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24gY2xhc3NOYW1lPVwic2F2ZS1leHBvcnQtZHJvcGRvd25fX2lubmVyXCJcbiAgICAgICAgICBzaG93PXtzaG93fVxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9PlxuICAgICAgICAgIDxFeHBvcnRJbWFnZVxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e29uRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEV4cG9ydERhdGFcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXtvbkV4cG9ydERhdGF9XG4gICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEV4cG9ydE1hcFxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e29uRXhwb3J0TWFwfVxuICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtvblNhdmVNYXAgPyAoXG4gICAgICAgICAgICA8U2F2ZU1hcFxuICAgICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17b25TYXZlTWFwfVxuICAgICAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9DbGlja091dHNpZGVDbG9zZURyb3Bkb3duPlxuICAgICAgPC9TdHlsZWRQYW5lbERyb3Bkb3duPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFNhdmVFeHBvcnREcm9wZG93bjtcbn07XG5cblNhdmVFeHBvcnREcm9wZG93bkZhY3RvcnkuZGVwcyA9IFtcbiAgRXhwb3J0SW1hZ2VGYWN0b3J5LFxuICBFeHBvcnREYXRhRmFjdG9yeSxcbiAgRXhwb3J0TWFwRmFjdG9yeSxcbiAgU2F2ZU1hcEZhY3Rvcnlcbl07XG5cblBhbmVsSGVhZGVyRmFjdG9yeS5kZXBzID0gW1xuICBTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5XG5dO1xuXG5mdW5jdGlvbiBQYW5lbEhlYWRlckZhY3RvcnkoXG4gIFNhdmVFeHBvcnREcm9wZG93blxuKSB7XG4gIHJldHVybiBjbGFzcyBQYW5lbEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgIGFwcE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2ZXJzaW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgdWlTdGF0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAgIHVpU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgICAgbG9nb0NvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgICBhY3Rpb25JdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSlcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGxvZ29Db21wb25lbnQ6IEtlcGxlckdsTG9nbyxcbiAgICAgIGFjdGlvbkl0ZW1zOiBbe1xuICAgICAgICBpZDogJ3NhdmUnLFxuICAgICAgICBpY29uQ29tcG9uZW50OiBTYXZlLFxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICAgICAgbGFiZWw6ICdTaGFyZScsXG4gICAgICAgIGRyb3Bkb3duQ29tcG9uZW50OiBTYXZlRXhwb3J0RHJvcGRvd25cbiAgICAgIH1dXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgYWN0aW9uSXRlbXMsXG4gICAgICAgIG9uU2F2ZU1hcCxcbiAgICAgICAgb25FeHBvcnRJbWFnZSxcbiAgICAgICAgb25FeHBvcnREYXRhLFxuICAgICAgICBvbkV4cG9ydENvbmZpZyxcbiAgICAgICAgb25FeHBvcnRNYXAsXG4gICAgICAgIHZpc2libGVEcm9wZG93bixcbiAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duLFxuICAgICAgICBoaWRlRXhwb3J0RHJvcGRvd25cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkUGFuZWxIZWFkZXIgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyXCI+XG4gICAgICAgICAgPFN0eWxlZFBhbmVsSGVhZGVyVG9wIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX3BhbmVsLWhlYWRlcl9fdG9wXCI+XG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5sb2dvQ29tcG9uZW50IGFwcE5hbWU9e2FwcE5hbWV9IHZlcnNpb249e3ZlcnNpb259Lz5cbiAgICAgICAgICAgIDxTdHlsZWRQYW5lbFRvcEFjdGlvbnM+XG4gICAgICAgICAgICAgIHthY3Rpb25JdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgICAgICAgPFBhbmVsQWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kcm9wZG93bkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duKGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5kcm9wZG93bkNvbXBvbmVudCA/IChcbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0uZHJvcGRvd25Db21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoaWRlRXhwb3J0RHJvcGRvd259XG4gICAgICAgICAgICAgICAgICAgICAgc2hvdz17dmlzaWJsZURyb3Bkb3duID09PSBpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZU1hcD17b25TYXZlTWFwfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRXhwb3J0RGF0YT17b25FeHBvcnREYXRhfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRXhwb3J0SW1hZ2U9e29uRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgb25FeHBvcnRDb25maWc9e29uRXhwb3J0Q29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgIG9uRXhwb3J0TWFwPXtvbkV4cG9ydE1hcH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3R5bGVkUGFuZWxUb3BBY3Rpb25zPlxuICAgICAgICAgIDwvU3R5bGVkUGFuZWxIZWFkZXJUb3A+XG4gICAgICAgIDwvU3R5bGVkUGFuZWxIZWFkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lbEhlYWRlckZhY3Rvcnk7XG4iXX0=