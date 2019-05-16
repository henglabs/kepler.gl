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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var styled = _interopRequireWildcard(require("styled-components"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _styledComponents2 = require("../../common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 70%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 30%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  margin-bottom: 8px;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TopRow = styled.div(_templateObject());

var LayerColumnConfig =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(LayerColumnConfig, _Component);

  function LayerColumnConfig() {
    (0, _classCallCheck2["default"])(this, LayerColumnConfig);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LayerColumnConfig).apply(this, arguments));
  }

  (0, _createClass2["default"])(LayerColumnConfig, [{
    key: "_updateColumn",
    value: function _updateColumn(key, value) {
      var layer = this.props.layer;
      var columns = value && value.pair && layer.columnPairs ? layer.assignColumnPairs(key, value.pair) : layer.assignColumn(key, value);
      this.props.updateLayerConfig({
        columns: columns
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          layer = _this$props.layer,
          fields = _this$props.fields,
          fieldPairs = _this$props.fieldPairs;
      return _react["default"].createElement("div", null, _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement("div", {
        className: "layer-config__column"
      }, _react["default"].createElement(TopRow, null, _react["default"].createElement(_styledComponents2.PanelLabel, null, "Columns"), _react["default"].createElement(_styledComponents2.PanelLabel, null, "* Required")), Object.keys(layer.config.columns).map(function (key) {
        return _react["default"].createElement(ColumnSelector, {
          column: layer.config.columns[key],
          label: key,
          key: key,
          allFields: fields,
          fieldPairs: layer.columnPairs ? fieldPairs.map(function (fp) {
            return {
              name: fp.defaultName,
              type: 'point',
              pair: fp.pair
            };
          }) : null,
          onSelect: function onSelect(val) {
            return _this._updateColumn(key, val);
          }
        });
      }))));
    }
  }]);
  return LayerColumnConfig;
}(_react.Component);

exports["default"] = LayerColumnConfig;
(0, _defineProperty2["default"])(LayerColumnConfig, "propTypes", {
  layer: _propTypes["default"].object.isRequired,
  fields: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  updateLayerConfig: _propTypes["default"].func.isRequired,
  fieldPairs: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
;
var ColumnRow = styled.div(_templateObject2());
var ColumnName = styled.div(_templateObject3());
var ColumnSelect = styled.div(_templateObject4());

var ColumnSelector = function ColumnSelector(_ref) {
  var column = _ref.column,
      label = _ref.label,
      allFields = _ref.allFields,
      onSelect = _ref.onSelect,
      fieldPairs = _ref.fieldPairs;
  return _react["default"].createElement(ColumnRow, {
    className: "layer-config__column__selector"
  }, _react["default"].createElement(ColumnName, {
    className: "layer-config__column__name"
  }, _react["default"].createElement(_styledComponents2.PanelLabel, null, label), !column.optional ? _react["default"].createElement(_styledComponents2.PanelLabel, null, "  *") : null), _react["default"].createElement(ColumnSelect, {
    className: "layer-config__column__select"
  }, _react["default"].createElement(_fieldSelector["default"], {
    suggested: fieldPairs,
    error: !column.optional && !column.value,
    fields: allFields,
    value: column.value,
    erasable: Boolean(column.optional),
    onSelect: onSelect
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItY29sdW1uLWNvbmZpZy5qcyJdLCJuYW1lcyI6WyJUb3BSb3ciLCJzdHlsZWQiLCJkaXYiLCJMYXllckNvbHVtbkNvbmZpZyIsImtleSIsInZhbHVlIiwibGF5ZXIiLCJwcm9wcyIsImNvbHVtbnMiLCJwYWlyIiwiY29sdW1uUGFpcnMiLCJhc3NpZ25Db2x1bW5QYWlycyIsImFzc2lnbkNvbHVtbiIsInVwZGF0ZUxheWVyQ29uZmlnIiwiZmllbGRzIiwiZmllbGRQYWlycyIsIk9iamVjdCIsImtleXMiLCJjb25maWciLCJtYXAiLCJmcCIsIm5hbWUiLCJkZWZhdWx0TmFtZSIsInR5cGUiLCJ2YWwiLCJfdXBkYXRlQ29sdW1uIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJhbnkiLCJmdW5jIiwiQ29sdW1uUm93IiwiQ29sdW1uTmFtZSIsIkNvbHVtblNlbGVjdCIsIkNvbHVtblNlbGVjdG9yIiwiY29sdW1uIiwibGFiZWwiLCJhbGxGaWVsZHMiLCJvblNlbGVjdCIsIm9wdGlvbmFsIiwiQm9vbGVhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTUEsTUFBTSxHQUFHQyxNQUFNLENBQUNDLEdBQVYsbUJBQVo7O0lBS3FCQyxpQjs7Ozs7Ozs7Ozs7O2tDQVFMQyxHLEVBQUtDLEssRUFBTztBQUFBLFVBQ2pCQyxLQURpQixHQUNSLEtBQUtDLEtBREcsQ0FDakJELEtBRGlCO0FBR3hCLFVBQU1FLE9BQU8sR0FDWEgsS0FBSyxJQUFJQSxLQUFLLENBQUNJLElBQWYsSUFBdUJILEtBQUssQ0FBQ0ksV0FBN0IsR0FDSUosS0FBSyxDQUFDSyxp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RCxjQUFuQixHQUFzRCxJQUZ6RCxDQURGLEVBS0UsZ0NBQUMsWUFBRDtBQUFjLElBQUEsU0FBUyxFQUFDO0FBQXhCLEtBQ0UsZ0NBQUMseUJBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBRTFCLFVBRGI7QUFFRSxJQUFBLEtBQUssRUFBRSxDQUFDc0IsTUFBTSxDQUFDSSxRQUFSLElBQW9CLENBQUNKLE1BQU0sQ0FBQ2hDLEtBRnJDO0FBR0UsSUFBQSxNQUFNLEVBQUVrQyxTQUhWO0FBSUUsSUFBQSxLQUFLLEVBQUVGLE1BQU0sQ0FBQ2hDLEtBSmhCO0FBS0UsSUFBQSxRQUFRLEVBQUVxQyxPQUFPLENBQUNMLE1BQU0sQ0FBQ0ksUUFBUixDQUxuQjtBQU1FLElBQUEsUUFBUSxFQUFFRDtBQU5aLElBREYsQ0FMRixDQURxQjtBQUFBLENBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcblxuaW1wb3J0IHtcbiAgUGFuZWxMYWJlbCxcbiAgU2lkZVBhbmVsU2VjdGlvblxufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRvcFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyQ29sdW1uQ29uZmlnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYXllcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGZpZWxkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICB1cGRhdGVMYXllckNvbmZpZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBmaWVsZFBhaXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KVxuICB9O1xuXG4gIF91cGRhdGVDb2x1bW4oa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHtsYXllcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY29sdW1ucyA9XG4gICAgICB2YWx1ZSAmJiB2YWx1ZS5wYWlyICYmIGxheWVyLmNvbHVtblBhaXJzXG4gICAgICAgID8gbGF5ZXIuYXNzaWduQ29sdW1uUGFpcnMoa2V5LCB2YWx1ZS5wYWlyKVxuICAgICAgICA6IGxheWVyLmFzc2lnbkNvbHVtbihrZXksIHZhbHVlKTtcblxuICAgIHRoaXMucHJvcHMudXBkYXRlTGF5ZXJDb25maWcoe2NvbHVtbnN9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7bGF5ZXIsIGZpZWxkcywgZmllbGRQYWlyc30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uXCI+XG4gICAgICAgICAgPFRvcFJvdz5cbiAgICAgICAgICAgIDxQYW5lbExhYmVsPkNvbHVtbnM8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICA8UGFuZWxMYWJlbD4qIFJlcXVpcmVkPC9QYW5lbExhYmVsPlxuICAgICAgICAgIDwvVG9wUm93PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhsYXllci5jb25maWcuY29sdW1ucykubWFwKGtleSA9PiAoXG4gICAgICAgICAgICA8Q29sdW1uU2VsZWN0b3JcbiAgICAgICAgICAgICAgY29sdW1uPXtsYXllci5jb25maWcuY29sdW1uc1trZXldfVxuICAgICAgICAgICAgICBsYWJlbD17a2V5fVxuICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgYWxsRmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgIGZpZWxkUGFpcnM9e1xuICAgICAgICAgICAgICAgIGxheWVyLmNvbHVtblBhaXJzXG4gICAgICAgICAgICAgICAgICA/IGZpZWxkUGFpcnMubWFwKGZwID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogZnAuZGVmYXVsdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BvaW50JyxcbiAgICAgICAgICAgICAgICAgICAgICBwYWlyOiBmcC5wYWlyXG4gICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbCA9PiB0aGlzLl91cGRhdGVDb2x1bW4oa2V5LCB2YWwpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgQ29sdW1uUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQ29sdW1uTmFtZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAzMCU7XG5gO1xuY29uc3QgQ29sdW1uU2VsZWN0ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbmA7XG5cbmNvbnN0IENvbHVtblNlbGVjdG9yID0gKHtjb2x1bW4sIGxhYmVsLCBhbGxGaWVsZHMsIG9uU2VsZWN0LCBmaWVsZFBhaXJzfSkgPT4gKFxuICA8Q29sdW1uUm93IGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19zZWxlY3RvclwiPlxuICAgIDxDb2x1bW5OYW1lIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZ19fY29sdW1uX19uYW1lXCI+XG4gICAgICA8UGFuZWxMYWJlbD57bGFiZWx9PC9QYW5lbExhYmVsPlxuICAgICAgeyFjb2x1bW4ub3B0aW9uYWwgPyA8UGFuZWxMYWJlbD57YCAgKmB9PC9QYW5lbExhYmVsPiA6IG51bGx9XG4gICAgPC9Db2x1bW5OYW1lPlxuICAgIDxDb2x1bW5TZWxlY3QgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX19jb2x1bW5fX3NlbGVjdFwiPlxuICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgc3VnZ2VzdGVkPXtmaWVsZFBhaXJzfVxuICAgICAgICBlcnJvcj17IWNvbHVtbi5vcHRpb25hbCAmJiAhY29sdW1uLnZhbHVlfVxuICAgICAgICBmaWVsZHM9e2FsbEZpZWxkc31cbiAgICAgICAgdmFsdWU9e2NvbHVtbi52YWx1ZX1cbiAgICAgICAgZXJhc2FibGU9e0Jvb2xlYW4oY29sdW1uLm9wdGlvbmFsKX1cbiAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgLz5cbiAgICA8L0NvbHVtblNlbGVjdD5cbiAgPC9Db2x1bW5Sb3c+XG4pO1xuIl19