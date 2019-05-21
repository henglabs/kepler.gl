"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatasetTabs = exports.DatasetModalTab = exports.DataTableModal = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _window = _interopRequireDefault(require("global/window"));

var _defaultSettings = require("../../constants/default-settings");

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

var _datasetLabel = _interopRequireDefault(require("../common/dataset-label"));

var _icons = require("../common/icons");

var _mediaBreakpoints = require("../../styles/media-breakpoints");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-bottom: 3px solid ", ";\n  cursor: pointer;\n  display: flex;\n  height: 35px;\n  margin: 0 3px;\n  padding: 0 5px;\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: 0 ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0 -36px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    .react-grid-Container {\n      /* TODO: replace data-grid component with react-window */\n      /* We need to use important in this case to override data-grid styling */\n      width: 100vw !important;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .react-grid-Main {\n    outline: 0;\n  }\n\n  .react-grid-Grid {\n    border: 0;\n  }\n\n  .react-grid-Cell {\n    border-right: 0;\n    border-bottom: ", ";\n    padding-left: 16px;\n  }\n\n  .react-grid-HeaderCell {\n    border-right: 0;\n    border-bottom: 0;\n    background: ", ";\n    color: ", ";\n    padding: 14px 8px 14px 0;\n  }\n  .react-grid-Cell:first-child,\n  .react-grid-HeaderCell:first-child {\n    padding-left: ", ";\n  }\n  .react-grid-Cell:last-child,\n  .react-grid-HeaderCell:last-child {\n    padding-right: ", ";\n  }\n  .react-grid-Cell__value {\n    color: ", ";\n  }\n  .react-grid-Canvas {\n    ", ";\n  }\n  \n  ", ";\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ReactDataGrid = _window["default"].navigator ? require('react-data-grid/dist/react-data-grid.min') : null;
var shouldPreventScrollBack = false;

if (_window["default"].navigator && _window["default"].navigator.userAgent) {
  var navigator = _window["default"].navigator; // Detect browsers
  // http://stackoverflow.com/questions/5899783/detect-safari-using-jquery

  var isMac = navigator.userAgent.match(/Macintosh/);
  var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
  var is_safari = navigator.userAgent.indexOf('Safari') > -1;
  var is_firefox = navigator.userAgent.indexOf('Firefox') > -1; // prevent chrome scroll back

  shouldPreventScrollBack = isMac && (is_chrome || is_safari || is_firefox);
}

var dgSettings = {
  sidePadding: '38px'
};
var DataGridWrapper = styled.div(_templateObject(), function (props) {
  return props.theme.panelBorderLT;
}, function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, dgSettings.sidePadding, dgSettings.sidePadding, function (props) {
  return props.theme.labelColorLT;
}, function (props) {
  return props.theme.modalScrollBar;
}, _mediaBreakpoints.media.palm(_templateObject2()));
var StyledModal = styled.div(_templateObject3(), _mediaBreakpoints.media.palm(_templateObject4()));

var BooleanFormatter = function BooleanFormatter(_ref) {
  var value = _ref.value;
  return _react["default"].createElement("span", null, String(value));
};

var DataTableModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DataTableModal, _Component);

  function DataTableModal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DataTableModal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DataTableModal).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMouseWheel", function (e) {
      // Prevent futile scroll, which would trigger the Back/Next page event
      // https://github.com/micho/jQuery.preventMacBackScroll
      // This prevents scroll when reaching the topmost or leftmost
      // positions of a container.
      // react-data-grid canvas element can be scrolled
      var canvas = _this._root.querySelector('.react-grid-Canvas'); // If canvas can not be scrolled left anymore when we try to scroll left


      var prevent_left = e.deltaX < 0 && canvas.scrollLeft <= 0; // If canvas can not be scrolled up when we try to scroll up

      var prevent_up = e.deltaY < 0 && canvas.scrollTop <= 0;

      if (prevent_left || prevent_up) {
        e.preventDefault();
      }
    });
    _this._root = _react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(DataTableModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          datasets = _this$props.datasets,
          dataId = _this$props.dataId,
          showDatasetTable = _this$props.showDatasetTable;

      if (!datasets || !dataId) {
        return null;
      }

      var activeDataset = datasets[dataId]; // TODO: this should be all data

      var rows = activeDataset.data;
      var columns = activeDataset.fields.map(function (field, i) {
        return (0, _objectSpread2["default"])({}, field, {
          key: i,
          headerRenderer: _react["default"].createElement(FieldHeader, field),
          resizable: true,
          formatter: field.type === _defaultSettings.ALL_FIELD_TYPES["boolean"] ? BooleanFormatter : undefined
        });
      }).filter(function (_ref2) {
        var name = _ref2.name;
        return name !== '_geojson';
      });
      return _react["default"].createElement(StyledModal, {
        ref: this._root,
        className: "dataset-modal",
        style: {
          overflow: 'scroll'
        }
      }, _react["default"].createElement(DatasetTabs, {
        activeDataset: activeDataset,
        datasets: datasets,
        showDatasetTable: showDatasetTable
      }), _react["default"].createElement(DataGridWrapper, {
        onWheel: shouldPreventScrollBack ? this._onMouseWheel : null
      }, ReactDataGrid && _react["default"].createElement(ReactDataGrid, {
        headerRowHeight: 72,
        columns: columns,
        minColumnWidth: 172,
        minWidth: this.props.width,
        minHeight: this.props.height - 65,
        rowGetter: function rowGetter(i) {
          return rows[i];
        },
        rowHeight: 48,
        rowsCount: rows.length
      })));
    }
  }]);
  return DataTableModal;
}(_react.Component);

exports.DataTableModal = DataTableModal;
var tagContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
};

var FieldHeader = function FieldHeader(_ref3) {
  var name = _ref3.name,
      type = _ref3.type;
  return _react["default"].createElement("div", {
    style: tagContainerStyle
  }, _react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, _react["default"].createElement("div", {
    style: {
      marginRight: type === 'timestamp' ? '2px' : '18px',
      height: '16px'
    }
  }, type === 'timestamp' ? _react["default"].createElement(_icons.Clock, {
    height: "16px"
  }) : null), name), _react["default"].createElement("div", {
    style: {
      marginLeft: '18px'
    }
  }, _react["default"].createElement(_fieldToken["default"], {
    type: type
  })));
};

var DatasetCatalog = styled.div(_templateObject5(), dgSettings.sidePadding);
var DatasetModalTab = styled.div(_templateObject6(), function (props) {
  return props.active ? 'black' : 'transparent';
});
exports.DatasetModalTab = DatasetModalTab;

var DatasetTabs = function DatasetTabs(_ref4) {
  var activeDataset = _ref4.activeDataset,
      datasets = _ref4.datasets,
      showDatasetTable = _ref4.showDatasetTable;
  return _react["default"].createElement(DatasetCatalog, {
    className: "dataset-modal-catalog"
  }, Object.values(datasets).map(function (dataset) {
    return _react["default"].createElement(DatasetModalTab, {
      className: "dataset-modal-tab",
      active: dataset === activeDataset,
      key: dataset.id,
      onClick: function onClick() {
        return showDatasetTable(dataset.id);
      }
    }, _react["default"].createElement(_datasetLabel["default"], {
      dataset: dataset
    }));
  }));
};

exports.DatasetTabs = DatasetTabs;

var DataTableModalFactory = function DataTableModalFactory() {
  return DataTableModal;
};

var _default = DataTableModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0RGF0YUdyaWQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJyZXF1aXJlIiwic2hvdWxkUHJldmVudFNjcm9sbEJhY2siLCJ1c2VyQWdlbnQiLCJpc01hYyIsIm1hdGNoIiwiaXNfY2hyb21lIiwiaW5kZXhPZiIsImlzX3NhZmFyaSIsImlzX2ZpcmVmb3giLCJkZ1NldHRpbmdzIiwic2lkZVBhZGRpbmciLCJEYXRhR3JpZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwicGFuZWxCb3JkZXJMVCIsInBhbmVsQmFja2dyb3VuZExUIiwidGl0bGVDb2xvckxUIiwibGFiZWxDb2xvckxUIiwibW9kYWxTY3JvbGxCYXIiLCJtZWRpYSIsInBhbG0iLCJTdHlsZWRNb2RhbCIsIkJvb2xlYW5Gb3JtYXR0ZXIiLCJ2YWx1ZSIsIlN0cmluZyIsIkRhdGFUYWJsZU1vZGFsIiwiZSIsImNhbnZhcyIsIl9yb290IiwicXVlcnlTZWxlY3RvciIsInByZXZlbnRfbGVmdCIsImRlbHRhWCIsInNjcm9sbExlZnQiLCJwcmV2ZW50X3VwIiwiZGVsdGFZIiwic2Nyb2xsVG9wIiwicHJldmVudERlZmF1bHQiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImRhdGFzZXRzIiwiZGF0YUlkIiwic2hvd0RhdGFzZXRUYWJsZSIsImFjdGl2ZURhdGFzZXQiLCJyb3dzIiwiZGF0YSIsImNvbHVtbnMiLCJmaWVsZHMiLCJtYXAiLCJmaWVsZCIsImkiLCJrZXkiLCJoZWFkZXJSZW5kZXJlciIsInJlc2l6YWJsZSIsImZvcm1hdHRlciIsInR5cGUiLCJBTExfRklFTERfVFlQRVMiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJuYW1lIiwib3ZlcmZsb3ciLCJfb25Nb3VzZVdoZWVsIiwid2lkdGgiLCJoZWlnaHQiLCJsZW5ndGgiLCJDb21wb25lbnQiLCJ0YWdDb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJGaWVsZEhlYWRlciIsImFsaWduSXRlbXMiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJEYXRhc2V0Q2F0YWxvZyIsIkRhdGFzZXRNb2RhbFRhYiIsImFjdGl2ZSIsIkRhdGFzZXRUYWJzIiwiT2JqZWN0IiwidmFsdWVzIiwiZGF0YXNldCIsImlkIiwiRGF0YVRhYmxlTW9kYWxGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLG1CQUFPQyxTQUFQLEdBQW1CQyxPQUFPLENBQUMsMENBQUQsQ0FBMUIsR0FBeUUsSUFBL0Y7QUFFQSxJQUFJQyx1QkFBdUIsR0FBRyxLQUE5Qjs7QUFFQSxJQUFJSCxtQkFBT0MsU0FBUCxJQUFvQkQsbUJBQU9DLFNBQVAsQ0FBaUJHLFNBQXpDLEVBQW9EO0FBQUEsTUFDM0NILFNBRDJDLEdBQzlCRCxrQkFEOEIsQ0FDM0NDLFNBRDJDLEVBRWxEO0FBQ0E7O0FBQ0EsTUFBTUksS0FBSyxHQUFHSixTQUFTLENBQUNHLFNBQVYsQ0FBb0JFLEtBQXBCLENBQTBCLFdBQTFCLENBQWQ7QUFDQSxNQUFNQyxTQUFTLEdBQUdOLFNBQVMsQ0FBQ0csU0FBVixDQUFvQkksT0FBcEIsQ0FBNEIsUUFBNUIsSUFBd0MsQ0FBQyxDQUEzRDtBQUNBLE1BQU1DLFNBQVMsR0FBR1IsU0FBUyxDQUFDRyxTQUFWLENBQW9CSSxPQUFwQixDQUE0QixRQUE1QixJQUF3QyxDQUFDLENBQTNEO0FBQ0EsTUFBTUUsVUFBVSxHQUFHVCxTQUFTLENBQUNHLFNBQVYsQ0FBb0JJLE9BQXBCLENBQTRCLFNBQTVCLElBQXlDLENBQUMs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QkEsUUFBakI7QUFBQSxNQUEyQkUsZ0JBQTNCLFNBQTJCQSxnQkFBM0I7QUFBQSxTQUN6QixnQ0FBQyxjQUFEO0FBQWdCLElBQUEsU0FBUyxFQUFDO0FBQTFCLEtBQ0dvQyxNQUFNLENBQUNDLE1BQVAsQ0FBY3ZDLFFBQWQsRUFBd0JRLEdBQXhCLENBQTRCLFVBQUFnQyxPQUFPO0FBQUEsV0FDbEMsZ0NBQUMsZUFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLG1CQURaO0FBRUUsTUFBQSxNQUFNLEVBQUVBLE9BQU8sS0FBS3JDLGFBRnRCO0FBR0UsTUFBQSxHQUFHLEVBQUVxQyxPQUFPLENBQUNDLEVBSGY7QUFJRSxNQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU12QyxnQkFBZ0IsQ0FBQ3NDLE9BQU8sQ0FBQ0MsRUFBVCxDQUF0QjtBQUFBO0FBSlgsT0FNRSxnQ0FBQyx3QkFBRDtBQUFjLE1BQUEsT0FBTyxFQUFFRDtBQUF2QixNQU5GLENBRGtDO0FBQUEsR0FBbkMsQ0FESCxDQUR5QjtBQUFBLENBQXBCOzs7O0FBZVAsSUFBTUUscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QjtBQUFBLFNBQU14RCxjQUFOO0FBQUEsQ0FBOUI7O2VBQ2V3RCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQgRmllbGRUb2tlbiBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9maWVsZC10b2tlbic7XG5pbXBvcnQgRGF0YXNldExhYmVsIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2RhdGFzZXQtbGFiZWwnO1xuaW1wb3J0IHtDbG9ja30gZnJvbSAnY29tcG9uZW50cy9jb21tb24vaWNvbnMvaW5kZXgnO1xuXG4vLyBCcmVha3BvaW50c1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzJztcblxuY29uc3QgUmVhY3REYXRhR3JpZCA9IHdpbmRvdy5uYXZpZ2F0b3IgPyByZXF1aXJlKCdyZWFjdC1kYXRhLWdyaWQvZGlzdC9yZWFjdC1kYXRhLWdyaWQubWluJykgOiBudWxsO1xuXG5sZXQgc2hvdWxkUHJldmVudFNjcm9sbEJhY2sgPSBmYWxzZTtcblxuaWYgKHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHtcbiAgY29uc3Qge25hdmlnYXRvcn0gPSB3aW5kb3c7XG4gIC8vIERldGVjdCBicm93c2Vyc1xuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU4OTk3ODMvZGV0ZWN0LXNhZmFyaS11c2luZy1qcXVlcnlcbiAgY29uc3QgaXNNYWMgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9NYWNpbnRvc2gvKTtcbiAgY29uc3QgaXNfY2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuICBjb25zdCBpc19zYWZhcmkgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTE7XG4gIGNvbnN0IGlzX2ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xO1xuXG4gIC8vIHByZXZlbnQgY2hyb21lIHNjcm9sbCBiYWNrXG4gIHNob3VsZFByZXZlbnRTY3JvbGxCYWNrID0gaXNNYWMgJiYgKGlzX2Nocm9tZSB8fCBpc19zYWZhcmkgfHwgaXNfZmlyZWZveCk7XG59XG5cbmNvbnN0IGRnU2V0dGluZ3MgPSB7XG4gIHNpZGVQYWRkaW5nOiAnMzhweCdcbn07XG5cbmNvbnN0IERhdGFHcmlkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC5yZWFjdC1ncmlkLU1haW4ge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAucmVhY3QtZ3JpZC1HcmlkIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAucmVhY3QtZ3JpZC1DZWxsIHtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckxUfTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIH1cblxuICAucmVhY3QtZ3JpZC1IZWFkZXJDZWxsIHtcbiAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZExUfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xuICAgIHBhZGRpbmc6IDE0cHggOHB4IDE0cHggMDtcbiAgfVxuICAucmVhY3QtZ3JpZC1DZWxsOmZpcnN0LWNoaWxkLFxuICAucmVhY3QtZ3JpZC1IZWFkZXJDZWxsOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6ICR7ZGdTZXR0aW5ncy5zaWRlUGFkZGluZ307XG4gIH1cbiAgLnJlYWN0LWdyaWQtQ2VsbDpsYXN0LWNoaWxkLFxuICAucmVhY3QtZ3JpZC1IZWFkZXJDZWxsOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7ZGdTZXR0aW5ncy5zaWRlUGFkZGluZ307XG4gIH1cbiAgLnJlYWN0LWdyaWQtQ2VsbF9fdmFsdWUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3JMVH07XG4gIH1cbiAgLnJlYWN0LWdyaWQtQ2FudmFzIHtcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsU2Nyb2xsQmFyfTtcbiAgfVxuICBcbiAgJHttZWRpYS5wYWxtYFxuICAgIC5yZWFjdC1ncmlkLUNvbnRhaW5lciB7XG4gICAgICAvKiBUT0RPOiByZXBsYWNlIGRhdGEtZ3JpZCBjb21wb25lbnQgd2l0aCByZWFjdC13aW5kb3cgKi9cbiAgICAgIC8qIFdlIG5lZWQgdG8gdXNlIGltcG9ydGFudCBpbiB0aGlzIGNhc2UgdG8gb3ZlcnJpZGUgZGF0YS1ncmlkIHN0eWxpbmcgKi9cbiAgICAgIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICAgIH1cbiAgYH07XG4gIFxuYDtcbmNvbnN0IFN0eWxlZE1vZGFsID0gc3R5bGVkLmRpdmBcbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbjogMCAtMzZweDtcbiAgYH1cbmA7XG5jb25zdCBCb29sZWFuRm9ybWF0dGVyID0gKHt2YWx1ZX0pID0+IDxzcGFuPntTdHJpbmcodmFsdWUpfTwvc3Bhbj47XG5cbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5fcm9vdCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgX29uTW91c2VXaGVlbCA9IGUgPT4ge1xuICAgIC8vIFByZXZlbnQgZnV0aWxlIHNjcm9sbCwgd2hpY2ggd291bGQgdHJpZ2dlciB0aGUgQmFjay9OZXh0IHBhZ2UgZXZlbnRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljaG8valF1ZXJ5LnByZXZlbnRNYWNCYWNrU2Nyb2xsXG4gICAgLy8gVGhpcyBwcmV2ZW50cyBzY3JvbGwgd2hlbiByZWFjaGluZyB0aGUgdG9wbW9zdCBvciBsZWZ0bW9zdFxuICAgIC8vIHBvc2l0aW9ucyBvZiBhIGNvbnRhaW5lci5cblxuICAgIC8vIHJlYWN0LWRhdGEtZ3JpZCBjYW52YXMgZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWRcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9yb290LnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1ncmlkLUNhbnZhcycpO1xuXG4gICAgLy8gSWYgY2FudmFzIGNhbiBub3QgYmUgc2Nyb2xsZWQgbGVmdCBhbnltb3JlIHdoZW4gd2UgdHJ5IHRvIHNjcm9sbCBsZWZ0XG4gICAgY29uc3QgcHJldmVudF9sZWZ0ID0gZS5kZWx0YVggPCAwICYmIGNhbnZhcy5zY3JvbGxMZWZ0IDw9IDA7XG4gICAgLy8gSWYgY2FudmFzIGNhbiBub3QgYmUgc2Nyb2xsZWQgdXAgd2hlbiB3ZSB0cnkgdG8gc2Nyb2xsIHVwXG4gICAgY29uc3QgcHJldmVudF91cCA9IGUuZGVsdGFZIDwgMCAmJiBjYW52YXMuc2Nyb2xsVG9wIDw9IDA7XG5cbiAgICBpZiAocHJldmVudF9sZWZ0IHx8IHByZXZlbnRfdXApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkYXRhc2V0cywgZGF0YUlkLCBzaG93RGF0YXNldFRhYmxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRhdGFzZXRzIHx8ICFkYXRhSWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZURhdGFzZXQgPSBkYXRhc2V0c1tkYXRhSWRdO1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIGFsbCBkYXRhXG4gICAgY29uc3Qgcm93cyA9IGFjdGl2ZURhdGFzZXQuZGF0YTtcbiAgICBjb25zdCBjb2x1bW5zID0gYWN0aXZlRGF0YXNldC5maWVsZHNcbiAgICAgIC5tYXAoKGZpZWxkLCBpKSA9PiAoe1xuICAgICAgICAuLi5maWVsZCxcbiAgICAgICAga2V5OiBpLFxuICAgICAgICBoZWFkZXJSZW5kZXJlcjogPEZpZWxkSGVhZGVyIHsuLi5maWVsZH0gLz4sXG4gICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgICAgZm9ybWF0dGVyOlxuICAgICAgICAgIGZpZWxkLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy5ib29sZWFuID8gQm9vbGVhbkZvcm1hdHRlciA6IHVuZGVmaW5lZFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKCh7bmFtZX0pID0+IG5hbWUgIT09ICdfZ2VvanNvbicpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRNb2RhbCByZWY9e3RoaXMuX3Jvb3R9IGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWxcIiBzdHlsZT17e292ZXJmbG93OiAnc2Nyb2xsJ319PlxuICAgICAgICA8RGF0YXNldFRhYnNcbiAgICAgICAgICBhY3RpdmVEYXRhc2V0PXthY3RpdmVEYXRhc2V0fVxuICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXtzaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAvPlxuICAgICAgICA8RGF0YUdyaWRXcmFwcGVyXG4gICAgICAgICAgb25XaGVlbD17c2hvdWxkUHJldmVudFNjcm9sbEJhY2sgPyB0aGlzLl9vbk1vdXNlV2hlZWwgOiBudWxsfVxuICAgICAgICA+XG4gICAgICAgICAge1JlYWN0RGF0YUdyaWQgJiYgKFxuICAgICAgICAgICAgPFJlYWN0RGF0YUdyaWRcbiAgICAgICAgICAgICAgaGVhZGVyUm93SGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgbWluQ29sdW1uV2lkdGg9ezE3Mn1cbiAgICAgICAgICAgICAgbWluV2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHQgLSA2NX1cbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtpID0+IHJvd3NbaV19XG4gICAgICAgICAgICAgIHJvd0hlaWdodD17NDh9XG4gICAgICAgICAgICAgIHJvd3NDb3VudD17cm93cy5sZW5ndGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRGF0YUdyaWRXcmFwcGVyPlxuICAgICAgPC9TdHlsZWRNb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IHRhZ0NvbnRhaW5lclN0eWxlID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG59O1xuXG5jb25zdCBGaWVsZEhlYWRlciA9ICh7bmFtZSwgdHlwZX0pID0+IChcbiAgPGRpdiBzdHlsZT17dGFnQ29udGFpbmVyU3R5bGV9PlxuICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IHR5cGUgPT09ICd0aW1lc3RhbXAnID8gJzJweCcgOiAnMThweCcsXG4gICAgICAgICAgaGVpZ2h0OiAnMTZweCdcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3R5cGUgPT09ICd0aW1lc3RhbXAnID8gPENsb2NrIGhlaWdodD1cIjE2cHhcIiAvPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtuYW1lfVxuICAgIDwvZGl2PlxuICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMThweCd9fT5cbiAgICAgIDxGaWVsZFRva2VuIHR5cGU9e3R5cGV9IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGF0YXNldENhdGFsb2cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwICR7ZGdTZXR0aW5ncy5zaWRlUGFkZGluZ307XG5gO1xuXG5leHBvcnQgY29uc3QgRGF0YXNldE1vZGFsVGFiID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/ICdibGFjaycgOiAndHJhbnNwYXJlbnQnKX07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW46IDAgM3B4O1xuICBwYWRkaW5nOiAwIDVweDtcblxuICA6Zmlyc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERhdGFzZXRUYWJzID0gKHthY3RpdmVEYXRhc2V0LCBkYXRhc2V0cywgc2hvd0RhdGFzZXRUYWJsZX0pID0+IChcbiAgPERhdGFzZXRDYXRhbG9nIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtY2F0YWxvZ1wiPlxuICAgIHtPYmplY3QudmFsdWVzKGRhdGFzZXRzKS5tYXAoZGF0YXNldCA9PiAoXG4gICAgICA8RGF0YXNldE1vZGFsVGFiXG4gICAgICAgIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWwtdGFiXCJcbiAgICAgICAgYWN0aXZlPXtkYXRhc2V0ID09PSBhY3RpdmVEYXRhc2V0fVxuICAgICAgICBrZXk9e2RhdGFzZXQuaWR9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNob3dEYXRhc2V0VGFibGUoZGF0YXNldC5pZCl9XG4gICAgICA+XG4gICAgICAgIDxEYXRhc2V0TGFiZWwgZGF0YXNldD17ZGF0YXNldH0vPlxuICAgICAgPC9EYXRhc2V0TW9kYWxUYWI+XG4gICAgKSl9XG4gIDwvRGF0YXNldENhdGFsb2c+XG4pO1xuXG5jb25zdCBEYXRhVGFibGVNb2RhbEZhY3RvcnkgPSAoKSA9PiBEYXRhVGFibGVNb2RhbDtcbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZU1vZGFsRmFjdG9yeTtcbiJdfQ==