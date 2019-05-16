"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListItem = exports.classList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var classList = {
  list: 'list-selector',
  listHeader: 'list__header',
  listSection: 'list__section',
  listItem: 'list__item',
  listItemAnchor: 'list__item__anchor'
};
exports.classList = classList;

var defaultDisplay = function defaultDisplay(d) {
  return d;
};

var ListItem = function ListItem(_ref) {
  var value = _ref.value,
      _ref$displayOption = _ref.displayOption,
      displayOption = _ref$displayOption === void 0 ? defaultDisplay : _ref$displayOption;
  return _react["default"].createElement("span", {
    className: classList.listItemAnchor
  }, displayOption(value));
};

exports.ListItem = ListItem;
var DropdownListWrapper = styled.div(_templateObject(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
}, function (props) {
  return props.theme.dropdownList;
});

var DropdownList =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DropdownList, _Component);

  function DropdownList() {
    (0, _classCallCheck2["default"])(this, DropdownList);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DropdownList).apply(this, arguments));
  }

  (0, _createClass2["default"])(DropdownList, [{
    key: "_onClick",
    value: function _onClick(result, event) {
      event.preventDefault();
      this.props.onOptionSelected(result, event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fixedOptions = this.props.fixedOptions;
      var display = this.props.displayOption; // Don't render if there are no options to display

      if (!this.props.options.length && this.props.allowCustomValues <= 0) {
        return false;
      }

      var valueOffset = Array.isArray(fixedOptions) ? fixedOptions.length : 0; // For some reason onClick is not fired when clicked on an option
      // onMouseDown is used here as a workaround of #205 and other

      return _react["default"].createElement(DropdownListWrapper, {
        className: classList.list
      }, this.props.customListHeaderComponent ? _react["default"].createElement("div", {
        className: classList.listHeader
      }, _react["default"].createElement(this.props.customListHeaderComponent, null)) : null, valueOffset > 0 ? _react["default"].createElement("div", {
        className: classList.listSection
      }, fixedOptions.map(function (value, i) {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i,
            fixed: true
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, _react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      })) : null, this.props.options.map(function (value, i) {
        return _react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this.props.selectionIndex === i + valueOffset
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this._onClick(value, e);
          }
        }, _react["default"].createElement(_this.props.customListItemComponent, {
          value: value,
          displayOption: display
        }));
      }));
    }
  }]);
  return DropdownList;
}(_react.Component);

exports["default"] = DropdownList;
(0, _defineProperty2["default"])(DropdownList, "propTypes", {
  options: _propTypes["default"].arrayOf(_propTypes["default"].any),
  allowCustomValues: _propTypes["default"].number,
  customClasses: _propTypes["default"].object,
  customValues: _propTypes["default"].arrayOf(_propTypes["default"].any),
  customListItemComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListHeaderComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  selectionIndex: _propTypes["default"].number,
  onOptionSelected: _propTypes["default"].func,
  displayOption: _propTypes["default"].func.isRequired,
  defaultClassNames: _propTypes["default"].bool,
  areResultsTruncated: _propTypes["default"].bool,
  resultsTruncatedMessage: _propTypes["default"].string,
  listItemComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(DropdownList, "defaultProps", {
  customClasses: {},
  customListItemComponent: ListItem,
  customListHeaderComponent: null,
  allowCustomValues: 0,
  customValues: [],
  displayOption: defaultDisplay,
  onOptionSelected: function onOptionSelected() {},
  defaultClassNames: true,
  selectionIndex: null
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QuanMiXSwibmFtZXMiOlsiY2xhc3NMaXN0IiwibGlzdCIsImxpc3RIZWFkZXIiLCJsaXN0U2VjdGlvbiIsImxpc3RJdGVtIiwibGlzdEl0ZW1BbmNob3IiLCJkZWZhdWx0RGlzcGxheSIsImQiLCJMaXN0SXRlbSIsInZhbHVlIiwiZGlzcGxheU9wdGlvbiIsIkRyb3Bkb3duTGlzdFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiZHJvcGRvd25MaXN0IiwiRHJvcGRvd25MaXN0IiwicmVzdWx0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJmaXhlZE9wdGlvbnMiLCJkaXNwbGF5Iiwib3B0aW9ucyIsImxlbmd0aCIsImFsbG93Q3VzdG9tVmFsdWVzIiwidmFsdWVPZmZzZXQiLCJBcnJheSIsImlzQXJyYXkiLCJjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50IiwibWFwIiwiaSIsImhvdmVyIiwic2VsZWN0aW9uSW5kZXgiLCJmaXhlZCIsImUiLCJfb25DbGljayIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJudW1iZXIiLCJjdXN0b21DbGFzc2VzIiwib2JqZWN0IiwiY3VzdG9tVmFsdWVzIiwiY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0Q2xhc3NOYW1lcyIsImJvb2wiLCJhcmVSZXN1bHRzVHJ1bmNhdGVkIiwicmVzdWx0c1RydW5jYXRlZE1lc3NhZ2UiLCJzdHJpbmciLCJsaXN0SXRlbUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFD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LENBQUUsQ0FQTjtBQVFwQjhCLEVBQUFBLGlCQUFpQixFQUFFLElBUkM7QUFTcEJqQixFQUFBQSxjQUFjLEVBQUU7QUFUSSxDO0FBNkV2QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IGNsYXNzTGlzdCA9IHtcbiAgbGlzdDogJ2xpc3Qtc2VsZWN0b3InLFxuICBsaXN0SGVhZGVyOiAnbGlzdF9faGVhZGVyJyxcbiAgbGlzdFNlY3Rpb246ICdsaXN0X19zZWN0aW9uJyxcbiAgbGlzdEl0ZW06ICdsaXN0X19pdGVtJyxcbiAgbGlzdEl0ZW1BbmNob3I6ICdsaXN0X19pdGVtX19hbmNob3InXG59O1xuXG5jb25zdCBkZWZhdWx0RGlzcGxheSA9IGQgPT4gZDtcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9ICh7dmFsdWUsIGRpc3BsYXlPcHRpb24gPSBkZWZhdWx0RGlzcGxheX0pID0+IChcbiAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdEl0ZW1BbmNob3J9PntkaXNwbGF5T3B0aW9uKHZhbHVlKX08L3NwYW4+XG4pO1xuXG5jb25zdCBEcm9wZG93bkxpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCb3JkZXJUb3B9O1xuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGFsbG93Q3VzdG9tVmFsdWVzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGN1c3RvbUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY3VzdG9tVmFsdWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5mdW5jXG4gICAgXSksXG4gICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5mdW5jXG4gICAgXSksXG4gICAgc2VsZWN0aW9uSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25PcHRpb25TZWxlY3RlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lczogUHJvcFR5cGVzLmJvb2wsXG4gICAgYXJlUmVzdWx0c1RydW5jYXRlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbGlzdEl0ZW1Db21wb25lbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjdXN0b21DbGFzc2VzOiB7fSxcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogTGlzdEl0ZW0sXG4gICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudDogbnVsbCxcbiAgICBhbGxvd0N1c3RvbVZhbHVlczogMCxcbiAgICBjdXN0b21WYWx1ZXM6IFtdLFxuICAgIGRpc3BsYXlPcHRpb246IGRlZmF1bHREaXNwbGF5LFxuICAgIG9uT3B0aW9uU2VsZWN0ZWQ6ICgpID0+IHt9LFxuICAgIGRlZmF1bHRDbGFzc05hbWVzOiB0cnVlLFxuICAgIHNlbGVjdGlvbkluZGV4OiBudWxsXG4gIH07XG5cbiAgX29uQ2xpY2socmVzdWx0LCBldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbk9wdGlvblNlbGVjdGVkKHJlc3VsdCwgZXZlbnQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtmaXhlZE9wdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uO1xuXG4gICAgLy8gRG9uJ3QgcmVuZGVyIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcbiAgICBpZiAoIXRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGggJiYgdGhpcy5wcm9wcy5hbGxvd0N1c3RvbVZhbHVlcyA8PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVPZmZzZXQgPSBBcnJheS5pc0FycmF5KGZpeGVkT3B0aW9ucykgPyBmaXhlZE9wdGlvbnMubGVuZ3RoIDogMDtcblxuICAgIC8vIEZvciBzb21lIHJlYXNvbiBvbkNsaWNrIGlzIG5vdCBmaXJlZCB3aGVuIGNsaWNrZWQgb24gYW4gb3B0aW9uXG4gICAgLy8gb25Nb3VzZURvd24gaXMgdXNlZCBoZXJlIGFzIGEgd29ya2Fyb3VuZCBvZiAjMjA1IGFuZCBvdGhlclxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25MaXN0V3JhcHBlciBjbGFzc05hbWU9e2NsYXNzTGlzdC5saXN0fT5cbiAgICAgICAge3RoaXMucHJvcHMuY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3RIZWFkZXJ9PlxuICAgICAgICAgICAgPHRoaXMucHJvcHMuY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7dmFsdWVPZmZzZXQgPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdFNlY3Rpb259PlxuICAgICAgICAgICAge2ZpeGVkT3B0aW9ucy5tYXAoKHZhbHVlLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3NMaXN0Lmxpc3RJdGVtLCB7XG4gICAgICAgICAgICAgICAgICBob3ZlcjogdGhpcy5wcm9wcy5zZWxlY3Rpb25JbmRleCA9PT0gaSxcbiAgICAgICAgICAgICAgICAgIGZpeGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAga2V5PXtgJHtkaXNwbGF5KHZhbHVlKX1fJHtpfWB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLl9vbkNsaWNrKHZhbHVlLCBlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLmN1c3RvbUxpc3RJdGVtQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkaXNwbGF5fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIHt0aGlzLnByb3BzLm9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc0xpc3QubGlzdEl0ZW0sIHtcbiAgICAgICAgICAgICAgaG92ZXI6IHRoaXMucHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGkgKyB2YWx1ZU9mZnNldFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9e2Ake2Rpc3BsYXkodmFsdWUpfV8ke2l9YH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMuX29uQ2xpY2sodmFsdWUsIGUpfVxuICAgICAgICAgICAgb25DbGljaz17ZSA9PiB0aGlzLl9vbkNsaWNrKHZhbHVlLCBlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGhpcy5wcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudFxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICAgIGRpc3BsYXlPcHRpb249e2Rpc3BsYXl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvRHJvcGRvd25MaXN0V3JhcHBlcj5cbiAgICApO1xuICB9XG59O1xuIl19