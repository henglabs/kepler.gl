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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

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

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-bottom: 3px solid ", ";\n  cursor: pointer;\n  display: flex;\n  height: 35px;\n  margin: 0 3px;\n  padding: 0 5px;\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: 0 ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .react-grid-Main {\n    outline: 0;\n  }\n\n  .react-grid-Grid {\n    border: 0;\n  }\n\n  .react-grid-Cell {\n    border-right: 0;\n    border-bottom: ", ";\n    padding-left: 16px;\n  }\n\n  .react-grid-HeaderCell {\n    border-right: 0;\n    border-bottom: 0;\n    background: ", ";\n    color: ", ";\n    padding: 14px 8px 14px 0;\n  }\n  .react-grid-Cell:first-child,\n  .react-grid-HeaderCell:first-child {\n    padding-left: ", ";\n  }\n  .react-grid-Cell:last-child,\n  .react-grid-HeaderCell:last-child {\n    padding-right: ", ";\n  }\n  .react-grid-Cell__value {\n    color: ", ";\n  }\n  .react-grid-Canvas {\n    ", ";\n  }\n"]);

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
});

var BooleanFormatter = function BooleanFormatter(_ref) {
  var value = _ref.value;
  return _react["default"].createElement("span", null, String(value));
};

var DataTableModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DataTableModal, _Component);

  function DataTableModal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, DataTableModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(DataTableModal)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
    return _this;
  }

  (0, _createClass2["default"])(DataTableModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

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
      return _react["default"].createElement("div", {
        ref: function ref(_ref3) {
          _this2._root = _ref3;
        },
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
      }, ReactDataGrid ? _react["default"].createElement(ReactDataGrid, {
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
      }) : null));
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

var FieldHeader = function FieldHeader(_ref4) {
  var name = _ref4.name,
      type = _ref4.type;
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

var DatasetCatalog = styled.div(_templateObject2(), dgSettings.sidePadding);
var DatasetModalTab = styled.div(_templateObject3(), function (props) {
  return props.active ? 'black' : 'transparent';
});
exports.DatasetModalTab = DatasetModalTab;

var DatasetTabs = function DatasetTabs(_ref5) {
  var activeDataset = _ref5.activeDataset,
      datasets = _ref5.datasets,
      showDatasetTable = _ref5.showDatasetTable;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9kYXRhLXRhYmxlLW1vZGFsLmpzIl0sIm5hbWVzIjpbIlJlYWN0RGF0YUdyaWQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJyZXF1aXJlIiwic2hvdWxkUHJldmVudFNjcm9sbEJhY2siLCJ1c2VyQWdlbnQiLCJpc01hYyIsIm1hdGNoIiwiaXNfY2hyb21lIiwiaW5kZXhPZiIsImlzX3NhZmFyaSIsImlzX2ZpcmVmb3giLCJkZ1NldHRpbmdzIiwic2lkZVBhZGRpbmciLCJEYXRhR3JpZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwicGFuZWxCb3JkZXJMVCIsInBhbmVsQmFja2dyb3VuZExUIiwidGl0bGVDb2xvckxUIiwibGFiZWxDb2xvckxUIiwibW9kYWxTY3JvbGxCYXIiLCJCb29sZWFuRm9ybWF0dGVyIiwidmFsdWUiLCJTdHJpbmciLCJEYXRhVGFibGVNb2RhbCIsImUiLCJjYW52YXMiLCJfcm9vdCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2ZW50X2xlZnQiLCJkZWx0YVgiLCJzY3JvbGxMZWZ0IiwicHJldmVudF91cCIsImRlbHRhWSIsInNjcm9sbFRvcCIsInByZXZlbnREZWZhdWx0IiwiZGF0YXNldHMiLCJkYXRhSWQiLCJzaG93RGF0YXNldFRhYmxlIiwiYWN0aXZlRGF0YXNldCIsInJvd3MiLCJkYXRhIiwiY29sdW1ucyIsImZpZWxkcyIsIm1hcCIsImZpZWxkIiwiaSIsImtleSIsImhlYWRlclJlbmRlcmVyIiwicmVzaXphYmxlIiwiZm9ybWF0dGVyIiwidHlwZSIsIkFMTF9GSUVMRF9UWVBFUyIsInVuZGVmaW5lZCIsImZpbHRlciIsIm5hbWUiLCJyZWYiLCJvdmVyZmxvdyIsIl9vbk1vdXNlV2hlZWwiLCJ3aWR0aCIsImhlaWdodCIsImxlbmd0aCIsIkNvbXBvbmVudCIsInRhZ0NvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIkZpZWxkSGVhZGVyIiwiYWxpZ25JdGVtcyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIkRhdGFzZXRDYXRhbG9nIiwiRGF0YXNldE1vZGFsVGFiIiwiYWN0aXZlIiwiRGF0YXNldFRhYnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJkYXRhc2V0IiwiaWQiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLGFBQWEsR0FBR0MsbUJBQU9DLFNBQVAsR0FBbUJDLE9BQU8sQ0FBQywwQ0FBRCxDQUExQixHQUF5RSxJQUEvRjtBQUVBLElBQUlDLHVCQUF1QixHQUFHLEtBQTlCOztBQUVBLElBQUlILG1CQUFPQyxTQUFQLElBQW9CRCxtQkFBT0MsU0FBUCxDQUFpQkcsU0FBekMsRUFBb0Q7QUFBQSxNQUMzQ0gsU0FEMkMsR0FDOUJELGtCQUQ4QixDQUMzQ0MsU0FEMkMsRUFFbEQ7QUFDQTs7QUFDQSxNQUFNSSxLQUFLLEdBQUdKLFNBQVMsQ0FBQ0csU0FBVixDQUFvQkUsS0FBcEIsQ0FBMEIsV0FBMUIsQ0FBZDtBQUNBLE1BQU1DLFNBQVMsR0FBR04sU0FBUyxDQUFDRyxTQUFWLENBQW9CSSxPQUFwQixDQUE0QixRQUE1QixJQUF3QyxDQUFDLENBQTNEO0FBQ0EsTUFBTUMsU0FBUyxHQUFHUixTQUFTLENBQUNHLFNBQVYsQ0FBb0JJLE9BQXBCLENBQTRCLFFBQTVCLElBQXdDLENBQUMsQ0FBM0Q7QUFDQSxNQUFNRSxVQUFVLEdBQUdULFNBQVMsQ0FBQ0csU0FBVixDQUFvQkksT0FBcEIsQ0FBNEIsU0FBNUIsSUFBeUMsQ0FBQyxDQUE3RCxDQVBrRCxDQVNsRDs7QUFDQUwsRUFBQUEsdUJBQXVCLEdBQUdFLEtBQUssS0FBS0UsU0FBUyxJQUFJRSxTQUFiLElBQTBCQyxV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LE1BQUEsTUFBTSxFQUFFQSxPQUFPLEtBQUt0QyxhQUZ0QjtBQUdFLE1BQUEsR0FBRyxFQUFFc0MsT0FBTyxDQUFDQyxFQUhmO0FBSUUsTUFBQSxPQUFPLEVBQUU7QUFBQSxlQUFNeEMsZ0JBQWdCLENBQUN1QyxPQUFPLENBQUNDLEVBQVQsQ0FBdEI7QUFBQTtBQUpYLE9BTUUsZ0NBQUMsd0JBQUQ7QUFBYyxNQUFBLE9BQU8sRUFBRUQ7QUFBdkIsTUFORixDQURrQztBQUFBLEdBQW5DLENBREgsQ0FEeUI7QUFBQSxDQUFwQjs7OztBQWVQLElBQU1FLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0I7QUFBQSxTQUFNdkQsY0FBTjtBQUFBLENBQTlCOztlQUNldUQscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgd2luZG93IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuXG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuaW1wb3J0IEZpZWxkVG9rZW4gZnJvbSAnY29tcG9uZW50cy9jb21tb24vZmllbGQtdG9rZW4nO1xuaW1wb3J0IERhdGFzZXRMYWJlbCBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9kYXRhc2V0LWxhYmVsJztcbmltcG9ydCB7Q2xvY2t9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zL2luZGV4JztcbmNvbnN0IFJlYWN0RGF0YUdyaWQgPSB3aW5kb3cubmF2aWdhdG9yID8gcmVxdWlyZSgncmVhY3QtZGF0YS1ncmlkL2Rpc3QvcmVhY3QtZGF0YS1ncmlkLm1pbicpIDogbnVsbDtcblxubGV0IHNob3VsZFByZXZlbnRTY3JvbGxCYWNrID0gZmFsc2U7XG5cbmlmICh3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB7XG4gIGNvbnN0IHtuYXZpZ2F0b3J9ID0gd2luZG93O1xuICAvLyBEZXRlY3QgYnJvd3NlcnNcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODk5NzgzL2RldGVjdC1zYWZhcmktdXNpbmctanF1ZXJ5XG4gIGNvbnN0IGlzTWFjID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvTWFjaW50b3NoLyk7XG4gIGNvbnN0IGlzX2Nocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPiAtMTtcbiAgY29uc3QgaXNfc2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+IC0xO1xuICBjb25zdCBpc19maXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMTtcblxuICAvLyBwcmV2ZW50IGNocm9tZSBzY3JvbGwgYmFja1xuICBzaG91bGRQcmV2ZW50U2Nyb2xsQmFjayA9IGlzTWFjICYmIChpc19jaHJvbWUgfHwgaXNfc2FmYXJpIHx8IGlzX2ZpcmVmb3gpO1xufVxuXG5jb25zdCBkZ1NldHRpbmdzID0ge1xuICBzaWRlUGFkZGluZzogJzM4cHgnXG59O1xuXG5jb25zdCBEYXRhR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAucmVhY3QtZ3JpZC1NYWluIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5cbiAgLnJlYWN0LWdyaWQtR3JpZCB7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgLnJlYWN0LWdyaWQtQ2VsbCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJMVH07XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG5cbiAgLnJlYWN0LWdyaWQtSGVhZGVyQ2VsbCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRMVH07XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcbiAgICBwYWRkaW5nOiAxNHB4IDhweCAxNHB4IDA7XG4gIH1cbiAgLnJlYWN0LWdyaWQtQ2VsbDpmaXJzdC1jaGlsZCxcbiAgLnJlYWN0LWdyaWQtSGVhZGVyQ2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAke2RnU2V0dGluZ3Muc2lkZVBhZGRpbmd9O1xuICB9XG4gIC5yZWFjdC1ncmlkLUNlbGw6bGFzdC1jaGlsZCxcbiAgLnJlYWN0LWdyaWQtSGVhZGVyQ2VsbDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAke2RnU2V0dGluZ3Muc2lkZVBhZGRpbmd9O1xuICB9XG4gIC5yZWFjdC1ncmlkLUNlbGxfX3ZhbHVlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yTFR9O1xuICB9XG4gIC5yZWFjdC1ncmlkLUNhbnZhcyB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFNjcm9sbEJhcn07XG4gIH1cbmA7XG5cbmNvbnN0IEJvb2xlYW5Gb3JtYXR0ZXIgPSAoe3ZhbHVlfSkgPT4gPHNwYW4+e1N0cmluZyh2YWx1ZSl9PC9zcGFuPjtcblxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgX29uTW91c2VXaGVlbCA9IGUgPT4ge1xuICAgIC8vIFByZXZlbnQgZnV0aWxlIHNjcm9sbCwgd2hpY2ggd291bGQgdHJpZ2dlciB0aGUgQmFjay9OZXh0IHBhZ2UgZXZlbnRcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWljaG8valF1ZXJ5LnByZXZlbnRNYWNCYWNrU2Nyb2xsXG4gICAgLy8gVGhpcyBwcmV2ZW50cyBzY3JvbGwgd2hlbiByZWFjaGluZyB0aGUgdG9wbW9zdCBvciBsZWZ0bW9zdFxuICAgIC8vIHBvc2l0aW9ucyBvZiBhIGNvbnRhaW5lci5cblxuICAgIC8vIHJlYWN0LWRhdGEtZ3JpZCBjYW52YXMgZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWRcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLl9yb290LnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1ncmlkLUNhbnZhcycpO1xuXG4gICAgLy8gSWYgY2FudmFzIGNhbiBub3QgYmUgc2Nyb2xsZWQgbGVmdCBhbnltb3JlIHdoZW4gd2UgdHJ5IHRvIHNjcm9sbCBsZWZ0XG4gICAgY29uc3QgcHJldmVudF9sZWZ0ID0gZS5kZWx0YVggPCAwICYmIGNhbnZhcy5zY3JvbGxMZWZ0IDw9IDA7XG4gICAgLy8gSWYgY2FudmFzIGNhbiBub3QgYmUgc2Nyb2xsZWQgdXAgd2hlbiB3ZSB0cnkgdG8gc2Nyb2xsIHVwXG4gICAgY29uc3QgcHJldmVudF91cCA9IGUuZGVsdGFZIDwgMCAmJiBjYW52YXMuc2Nyb2xsVG9wIDw9IDA7XG5cbiAgICBpZiAocHJldmVudF9sZWZ0IHx8IHByZXZlbnRfdXApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkYXRhc2V0cywgZGF0YUlkLCBzaG93RGF0YXNldFRhYmxlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRhdGFzZXRzIHx8ICFkYXRhSWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2ZURhdGFzZXQgPSBkYXRhc2V0c1tkYXRhSWRdO1xuICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGJlIGFsbCBkYXRhXG4gICAgY29uc3Qgcm93cyA9IGFjdGl2ZURhdGFzZXQuZGF0YTtcbiAgICBjb25zdCBjb2x1bW5zID0gYWN0aXZlRGF0YXNldC5maWVsZHNcbiAgICAgIC5tYXAoKGZpZWxkLCBpKSA9PiAoe1xuICAgICAgICAuLi5maWVsZCxcbiAgICAgICAga2V5OiBpLFxuICAgICAgICBoZWFkZXJSZW5kZXJlcjogPEZpZWxkSGVhZGVyIHsuLi5maWVsZH0gLz4sXG4gICAgICAgIHJlc2l6YWJsZTogdHJ1ZSxcbiAgICAgICAgZm9ybWF0dGVyOlxuICAgICAgICAgIGZpZWxkLnR5cGUgPT09IEFMTF9GSUVMRF9UWVBFUy5ib29sZWFuID8gQm9vbGVhbkZvcm1hdHRlciA6IHVuZGVmaW5lZFxuICAgICAgfSkpXG4gICAgICAuZmlsdGVyKCh7bmFtZX0pID0+IG5hbWUgIT09ICdfZ2VvanNvbicpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtyZWYgPT4ge3RoaXMuX3Jvb3QgPSByZWZ9fSBjbGFzc05hbWU9XCJkYXRhc2V0LW1vZGFsXCIgc3R5bGU9e3tvdmVyZmxvdzogJ3Njcm9sbCd9fT5cbiAgICAgICAgPERhdGFzZXRUYWJzXG4gICAgICAgICAgYWN0aXZlRGF0YXNldD17YWN0aXZlRGF0YXNldH1cbiAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgc2hvd0RhdGFzZXRUYWJsZT17c2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgLz5cbiAgICAgICAgPERhdGFHcmlkV3JhcHBlclxuICAgICAgICAgIG9uV2hlZWw9e3Nob3VsZFByZXZlbnRTY3JvbGxCYWNrID8gdGhpcy5fb25Nb3VzZVdoZWVsIDogbnVsbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtSZWFjdERhdGFHcmlkID8gKFxuICAgICAgICAgICAgPFJlYWN0RGF0YUdyaWRcbiAgICAgICAgICAgICAgaGVhZGVyUm93SGVpZ2h0PXs3Mn1cbiAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgbWluQ29sdW1uV2lkdGg9ezE3Mn1cbiAgICAgICAgICAgICAgbWluV2lkdGg9e3RoaXMucHJvcHMud2lkdGh9XG4gICAgICAgICAgICAgIG1pbkhlaWdodD17dGhpcy5wcm9wcy5oZWlnaHQgLSA2NX1cbiAgICAgICAgICAgICAgcm93R2V0dGVyPXtpID0+IHJvd3NbaV19XG4gICAgICAgICAgICAgIHJvd0hlaWdodD17NDh9XG4gICAgICAgICAgICAgIHJvd3NDb3VudD17cm93cy5sZW5ndGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0RhdGFHcmlkV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgdGFnQ29udGFpbmVyU3R5bGUgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbidcbn07XG5cbmNvbnN0IEZpZWxkSGVhZGVyID0gKHtuYW1lLCB0eXBlfSkgPT4gKFxuICA8ZGl2IHN0eWxlPXt0YWdDb250YWluZXJTdHlsZX0+XG4gICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5SaWdodDogdHlwZSA9PT0gJ3RpbWVzdGFtcCcgPyAnMnB4JyA6ICcxOHB4JyxcbiAgICAgICAgICBoZWlnaHQ6ICcxNnB4J1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dHlwZSA9PT0gJ3RpbWVzdGFtcCcgPyA8Q2xvY2sgaGVpZ2h0PVwiMTZweFwiIC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAge25hbWV9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6ICcxOHB4J319PlxuICAgICAgPEZpZWxkVG9rZW4gdHlwZT17dHlwZX0gLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEYXRhc2V0Q2F0YWxvZyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgJHtkZ1NldHRpbmdzLnNpZGVQYWRkaW5nfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBEYXRhc2V0TW9kYWxUYWIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gJ2JsYWNrJyA6ICd0cmFuc3BhcmVudCcpfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogMCAzcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuXG4gIDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGF0YXNldFRhYnMgPSAoe2FjdGl2ZURhdGFzZXQsIGRhdGFzZXRzLCBzaG93RGF0YXNldFRhYmxlfSkgPT4gKFxuICA8RGF0YXNldENhdGFsb2cgY2xhc3NOYW1lPVwiZGF0YXNldC1tb2RhbC1jYXRhbG9nXCI+XG4gICAge09iamVjdC52YWx1ZXMoZGF0YXNldHMpLm1hcChkYXRhc2V0ID0+IChcbiAgICAgIDxEYXRhc2V0TW9kYWxUYWJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGF0YXNldC1tb2RhbC10YWJcIlxuICAgICAgICBhY3RpdmU9e2RhdGFzZXQgPT09IGFjdGl2ZURhdGFzZXR9XG4gICAgICAgIGtleT17ZGF0YXNldC5pZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0RhdGFzZXRUYWJsZShkYXRhc2V0LmlkKX1cbiAgICAgID5cbiAgICAgICAgPERhdGFzZXRMYWJlbCBkYXRhc2V0PXtkYXRhc2V0fS8+XG4gICAgICA8L0RhdGFzZXRNb2RhbFRhYj5cbiAgICApKX1cbiAgPC9EYXRhc2V0Q2F0YWxvZz5cbik7XG5cbmNvbnN0IERhdGFUYWJsZU1vZGFsRmFjdG9yeSA9ICgpID0+IERhdGFUYWJsZU1vZGFsO1xuZXhwb3J0IGRlZmF1bHQgRGF0YVRhYmxlTW9kYWxGYWN0b3J5O1xuIl19