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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("./item-selector/item-selector"));

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

var _dropdownList = require("./item-selector/dropdown-list");

// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.name;
}; // custom list Item


var FieldListItemFactory = function FieldListItemFactory(showToken) {
  var FieldListItem = function FieldListItem(_ref) {
    var value = _ref.value,
        _ref$displayOption = _ref.displayOption,
        displayOption = _ref$displayOption === void 0 ? defaultDisplayOption : _ref$displayOption;
    return _react["default"].createElement("div", null, showToken ? _react["default"].createElement("div", {
      style: {
        display: 'inline-block',
        margin: '0 4px 0 0'
      }
    }, _react["default"].createElement(_fieldToken["default"], {
      type: value.type
    })) : null, _react["default"].createElement("span", {
      className: _dropdownList.classList.listItemAnchor
    }, displayOption(value)));
  };

  return FieldListItem;
};

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return _react["default"].createElement("div", null, "Suggested Field");
};

var FieldType = _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string, _propTypes["default"].shape({
  format: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  tableFieldIndex: _propTypes["default"].number,
  type: _propTypes["default"].number
})]);

var FieldSelector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(FieldSelector, _Component);

  function FieldSelector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, FieldSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FieldSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
      return props.fields;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "valueSelector", function (props) {
      return props.value;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterFieldTypesSelector", function (props) {
      return props.filterFieldTypes;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showTokenSelector", function (props) {
      return props.showToken;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
      return fields.filter(function (f) {
        return (Array.isArray(value) ? value : [value]).includes(defaultDisplayOption(f));
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldOptionsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
      if (!filterFieldTypes) {
        return fields;
      }

      var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
      return fields.filter(function (f) {
        return filters.includes(f.type);
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldListItemSelector", (0, _reselect.createSelector)(_this.showTokenSelector, FieldListItemFactory));
    return _this;
  }

  (0, _createClass2["default"])(FieldSelector, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null, _react["default"].createElement(_itemSelector["default"], {
        getOptionValue: function getOptionValue(d) {
          return d;
        },
        closeOnSelect: this.props.closeOnSelect,
        displayOption: defaultDisplayOption,
        filterOption: 'id',
        fixedOptions: this.props.suggested,
        inputTheme: this.props.inputTheme,
        isError: this.props.error,
        selectedItems: this.selectedItemsSelector(this.props),
        erasable: this.props.erasable,
        options: this.fieldOptionsSelector(this.props),
        multiSelect: this.props.multiSelect,
        placeholder: this.props.placeholder,
        placement: this.props.placement,
        onChange: this.props.onSelect,
        DropDownLineItemRenderComponent: this.fieldListItemSelector(this.props),
        DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null
      }));
    }
  }]);
  return FieldSelector;
}(_react.Component);

exports["default"] = FieldSelector;
(0, _defineProperty2["default"])(FieldSelector, "propTypes", {
  fields: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].arrayOf(FieldType)]),
  onSelect: _propTypes["default"].func.isRequired,
  placement: _propTypes["default"].string,
  value: FieldType,
  filterFieldTypes: _propTypes["default"].oneOfType([FieldType, _propTypes["default"].arrayOf(FieldType)]),
  inputTheme: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  erasable: _propTypes["default"].bool,
  error: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  closeOnSelect: _propTypes["default"].bool,
  showToken: _propTypes["default"].bool,
  suggested: _propTypes["default"].arrayOf(_propTypes["default"].any)
});
(0, _defineProperty2["default"])(FieldSelector, "defaultProps", {
  erasable: true,
  error: false,
  fields: [],
  onSelect: function onSelect() {},
  placement: 'bottom',
  value: null,
  multiSelect: false,
  closeOnSelect: true,
  showToken: true,
  placeholder: 'Select a field'
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWVsZC1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlzcGxheU9wdGlvbiIsImQiLCJuYW1lIiwiRmllbGRMaXN0SXRlbUZhY3RvcnkiLCJzaG93VG9rZW4iLCJGaWVsZExpc3RJdGVtIiwidmFsdWUiLCJkaXNwbGF5T3B0aW9uIiwiZGlzcGxheSIsIm1hcmdpbiIsInR5cGUiLCJjbGFzc0xpc3QiLCJsaXN0SXRlbUFuY2hvciIsIlN1Z2dlc3RlZEZpZWxkSGVhZGVyIiwiRmllbGRUeXBlIiwiUHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiYXJyYXlPZiIsInN0cmluZyIsInNoYXBlIiwiZm9ybWF0IiwiaWQiLCJ0YWJsZUZpZWxkSW5kZXgiLCJudW1iZXIiLCJGaWVsZFNlbGVjdG9yIiwicHJvcHMiLCJmaWVsZHMiLCJmaWx0ZXJGaWVsZFR5cGVzIiwiZmllbGRzU2VsZWN0b3IiLCJ2YWx1ZVNlbGVjdG9yIiwiZmlsdGVyIiwiZiIsIkFycmF5IiwiaXNBcnJheSIsImluY2x1ZGVzIiwiZmlsdGVyRmllbGRUeXBlc1NlbGVjdG9yIiwiZmlsdGVycyIsInNob3dUb2tlblNlbGVjdG9yIiwiY2xvc2VPblNlbGVjdCIsInN1Z2dlc3RlZCIsImlucHV0VGhlbWUiLCJlcnJvciIsInNlbGVjdGVkSXRlbXNTZWxlY3RvciIsImVyYXNhYmxlIiwiZmllbGRPcHRpb25zU2VsZWN0b3IiLCJtdWx0aVNlbGVjdCIsInBsYWNlaG9sZGVyIiwicGxhY2VtZW50Iiwib25TZWxlY3QiLCJmaWVsZExpc3RJdGVtU2VsZWN0b3IiLCJDb21wb25lbnQiLCJhcnJheSIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUExQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBTXBCekMsRUFBQUEsS0FBSyxFQUFFLElBTmE7QUFPcEJ1QyxFQUFBQSxXQUFXLEVBQUUsS0FQTztBQVFwQlAsRUFBQUEsYUFBYSxFQUFFLElBUks7QUFTcEJsQyxFQUFBQSxTQUFTLEVBQUUsSUFUUztBQVVwQjBDLEVBQUFBLFdBQVcsRUFBRTtBQVZPLEM7QUE0RXZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuXG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJy4vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCBGaWVsZFRva2VuIGZyb20gJy4uL2NvbW1vbi9maWVsZC10b2tlbic7XG5pbXBvcnQge2NsYXNzTGlzdH0gZnJvbSAnLi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xuXG5jb25zdCBkZWZhdWx0RGlzcGxheU9wdGlvbiA9IGQgPT4gZC5uYW1lO1xuXG4vLyBjdXN0b20gbGlzdCBJdGVtXG5jb25zdCBGaWVsZExpc3RJdGVtRmFjdG9yeSA9IHNob3dUb2tlbiA9PiB7XG4gIGNvbnN0IEZpZWxkTGlzdEl0ZW0gPSAoe3ZhbHVlLCBkaXNwbGF5T3B0aW9uID0gZGVmYXVsdERpc3BsYXlPcHRpb259KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIHtzaG93VG9rZW4gPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgbWFyZ2luOiAnMCA0cHggMCAwJ319PlxuICAgICAgICAgIDxGaWVsZFRva2VuIHR5cGU9e3ZhbHVlLnR5cGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0SXRlbUFuY2hvcn0+e2Rpc3BsYXlPcHRpb24odmFsdWUpfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gRmllbGRMaXN0SXRlbTtcbn07XG5cbmNvbnN0IFN1Z2dlc3RlZEZpZWxkSGVhZGVyID0gKCkgPT4gPGRpdj5TdWdnZXN0ZWQgRmllbGQ8L2Rpdj47XG5cbmNvbnN0IEZpZWxkVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsZUZpZWxkSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdHlwZTogUHJvcFR5cGVzLm51bWJlclxuICB9KVxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpZWxkczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXG4gICAgXSksXG4gICAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBGaWVsZFR5cGUsXG4gICAgZmlsdGVyRmllbGRUeXBlczogUHJvcFR5cGVzLm9uZU9mVHlwZShbRmllbGRUeXBlLCBQcm9wVHlwZXMuYXJyYXlPZihGaWVsZFR5cGUpXSksXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICAgIG11bHRpU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjbG9zZU9uU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaG93VG9rZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHN1Z2dlc3RlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSlcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVyYXNhYmxlOiB0cnVlLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBmaWVsZHM6IFtdLFxuICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIHZhbHVlOiBudWxsLFxuICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgIHNob3dUb2tlbjogdHJ1ZSxcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBhIGZpZWxkJ1xuICB9O1xuXG4gIGZpZWxkc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmllbGRzO1xuICB2YWx1ZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMudmFsdWU7XG4gIGZpbHRlckZpZWxkVHlwZXNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpbHRlckZpZWxkVHlwZXM7XG4gIHNob3dUb2tlblNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuc2hvd1Rva2VuO1xuXG4gIHNlbGVjdGVkSXRlbXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHRoaXMuZmllbGRzU2VsZWN0b3IsXG4gICAgdGhpcy52YWx1ZVNlbGVjdG9yLFxuICAgIChmaWVsZHMsIHZhbHVlKSA9PlxuICAgICAgZmllbGRzLmZpbHRlcihmID0+XG4gICAgICAgIChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogW3ZhbHVlXSkuaW5jbHVkZXMoXG4gICAgICAgICAgZGVmYXVsdERpc3BsYXlPcHRpb24oZilcbiAgICAgICAgKVxuICAgICAgKVxuICApO1xuXG4gIGZpZWxkT3B0aW9uc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5maWVsZHNTZWxlY3RvcixcbiAgICB0aGlzLmZpbHRlckZpZWxkVHlwZXNTZWxlY3RvcixcbiAgICAoZmllbGRzLCBmaWx0ZXJGaWVsZFR5cGVzKSA9PiB7XG4gICAgICBpZiAoIWZpbHRlckZpZWxkVHlwZXMpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbHRlcnMgPSBBcnJheS5pc0FycmF5KGZpbHRlckZpZWxkVHlwZXMpXG4gICAgICAgID8gZmlsdGVyRmllbGRUeXBlc1xuICAgICAgICA6IFtmaWx0ZXJGaWVsZFR5cGVzXTtcbiAgICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKGYgPT4gZmlsdGVycy5pbmNsdWRlcyhmLnR5cGUpKTtcbiAgICB9XG4gICk7XG5cbiAgZmllbGRMaXN0SXRlbVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgdGhpcy5zaG93VG9rZW5TZWxlY3RvcixcbiAgICBGaWVsZExpc3RJdGVtRmFjdG9yeVxuICApO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtkID0+IGR9XG4gICAgICAgICAgY2xvc2VPblNlbGVjdD17dGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0fVxuICAgICAgICAgIGRpc3BsYXlPcHRpb249e2RlZmF1bHREaXNwbGF5T3B0aW9ufVxuICAgICAgICAgIGZpbHRlck9wdGlvbj17J2lkJ31cbiAgICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuc3VnZ2VzdGVkfVxuICAgICAgICAgIGlucHV0VGhlbWU9e3RoaXMucHJvcHMuaW5wdXRUaGVtZX1cbiAgICAgICAgICBpc0Vycm9yPXt0aGlzLnByb3BzLmVycm9yfVxuICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RoaXMuc2VsZWN0ZWRJdGVtc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgIGVyYXNhYmxlPXt0aGlzLnByb3BzLmVyYXNhYmxlfVxuICAgICAgICAgIG9wdGlvbnM9e3RoaXMuZmllbGRPcHRpb25zU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgbXVsdGlTZWxlY3Q9e3RoaXMucHJvcHMubXVsdGlTZWxlY3R9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgcGxhY2VtZW50PXt0aGlzLnByb3BzLnBsYWNlbWVudH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdH1cbiAgICAgICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50PXt0aGlzLmZpZWxkTGlzdEl0ZW1TZWxlY3RvcihcbiAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICApfVxuICAgICAgICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50PXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3VnZ2VzdGVkID8gU3VnZ2VzdGVkRmllbGRIZWFkZXIgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufTtcbiJdfQ==