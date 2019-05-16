"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var styled = _interopRequireWildcard(require("styled-components"));

var _accessor = _interopRequireDefault(require("./accessor"));

var _chickletedInput = _interopRequireDefault(require("./chickleted-input"));

var _typeahead = _interopRequireDefault(require("./typeahead"));

var _icons = require("../icons");

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: 100;\n  position: absolute;\n  bottom: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 6px;\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  overflow: hidden;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  .list__item__anchor {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * Converts non-arrays to arrays.  Leaves arrays alone.  Converts
 * undefined values to empty arrays ([] instead of [undefined]).
 * Otherwise, just returns [item] for non-array items.
 *
 * @param {*} item
 * @returns {array} boom! much array. very indexed. so useful.
 */
function _toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  if (typeof item === 'undefined' || item === null) {
    return [];
  }

  return [item];
}

var StyledDropdownSelect = styled.div(_templateObject(), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.theme.input;
}, function (props) {
  return props.theme.dropdownListAnchor;
});
var DropdownSelectValue = styled.span(_templateObject2(), function (props) {
  return props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.theme.selectColor;
});
var DropdownSelectErase = styled.div(_templateObject3());
var DropdownWrapper = styled.div(_templateObject4(), function (props) {
  return props.placement === 'top' ? props.theme.inputBoxHeight : 'auto';
}, function (props) {
  return props.placement === 'bottom' ? '4px' : 'auto';
}, function (props) {
  return props.placement === 'top' ? '4px' : 'auto';
});

var ItemSelector =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ItemSelector, _Component);

  function ItemSelector() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ItemSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ItemSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showTypeahead: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this._hideTypeahead();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function () {
      // note: chickleted input is not a real form element so we call onBlur()
      // when we feel the events are appropriate
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeItem", function (item, e) {
      // only used when multiSelect = true
      e.preventDefault();
      e.stopPropagation();
      var selectedItems = _this.props.selectedItems;
      var index = selectedItems.findIndex(function (t) {
        return t === item;
      });

      if (index < 0) {
        return;
      }

      var items = [].concat((0, _toConsumableArray2["default"])(selectedItems.slice(0, index)), (0, _toConsumableArray2["default"])(selectedItems.slice(index + 1, selectedItems.length)));

      _this.props.onChange(items);

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectItem", function (item) {
      var getValue = _accessor["default"].generateOptionToStringFor(_this.props.getOptionValue || _this.props.displayOption);

      var previousSelected = _toArray(_this.props.selectedItems);

      if (_this.props.multiSelect) {
        var items = (0, _lodash["default"])(previousSelected.concat(_toArray(item).map(getValue)));

        _this.props.onChange(items);
      } else {
        _this.props.onChange(getValue(item));
      }

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onErase", function (e) {
      e.stopPropagation();

      _this.props.onChange(null);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showTypeahead", function () {
      if (!_this.props.disabled) {
        _this.setState({
          showTypeahead: true
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ItemSelector, [{
    key: "_hideTypeahead",
    value: function _hideTypeahead() {
      this.setState({
        showTypeahead: false
      });

      this._onBlur();
    }
  }, {
    key: "_renderDropdown",
    value: function _renderDropdown() {
      return _react["default"].createElement(DropdownWrapper, {
        placement: this.props.placement
      }, _react["default"].createElement(_typeahead["default"], {
        customClasses: {
          results: 'list-selector',
          input: 'typeahead__input',
          listItem: 'list__item',
          listAnchor: 'list__item__anchor'
        },
        options: this.props.options,
        filterOption: this.props.filterOption,
        fixedOptions: this.props.fixedOptions,
        placeholder: "Search",
        onOptionSelected: this._selectItem,
        customListComponent: this.props.DropDownRenderComponent,
        customListHeaderComponent: this.props.DropdownHeaderComponent,
        customListItemComponent: this.props.DropDownLineItemRenderComponent,
        displayOption: _accessor["default"].generateOptionToStringFor(this.props.displayOption),
        searchable: this.props.searchable,
        showOptionsWhenEmpty: true,
        selectedItems: _toArray(this.props.selectedItems)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var selected = _toArray(this.props.selectedItems);

      var hasValue = selected.length;

      var displayOption = _accessor["default"].generateOptionToStringFor(this.props.displayOption);

      var dropdownSelectProps = {
        className: (0, _classnames["default"])("item-selector__dropdown", {
          active: this.state.showTypeahead
        }),
        disabled: this.props.disabled,
        onClick: this._showTypeahead,
        onFocus: this._showPopover,
        error: this.props.isError,
        inputTheme: this.props.inputTheme
      };
      return _react["default"].createElement("div", {
        className: "item-selector"
      }, _react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.multiSelect ? _react["default"].createElement(_chickletedInput["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
        selectedItems: _toArray(this.props.selectedItems),
        placeholder: this.props.placeholder,
        displayOption: displayOption,
        removeItem: this._removeItem
      })) : _react["default"].createElement(StyledDropdownSelect, dropdownSelectProps, _react["default"].createElement(DropdownSelectValue, {
        hasPlaceholder: !hasValue,
        className: "item-selector__dropdown__value"
      }, hasValue ? _react["default"].createElement(this.props.DropDownLineItemRenderComponent, {
        displayOption: displayOption,
        value: selected[0]
      }) : this.props.placeholder), this.props.erasable && hasValue ? _react["default"].createElement(DropdownSelectErase, null, _react["default"].createElement(_icons.Delete, {
        height: "12px",
        onClick: this._onErase
      })) : null), this.state.showTypeahead && this._renderDropdown()));
    }
  }]);
  return ItemSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ItemSelector, "propTypes", {
  // required properties
  selectedItems: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].bool, _propTypes["default"].object]),
  onChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
  // optional properties
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  erasable: _propTypes["default"].bool,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  getOptionValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  placement: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  isError: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  inputTheme: _propTypes["default"].string,
  onBlur: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  closeOnSelect: _propTypes["default"].bool,
  DropdownHeaderComponent: _propTypes["default"].func,
  DropDownRenderComponent: _propTypes["default"].func,
  DropDownLineItemRenderComponent: _propTypes["default"].func
});
(0, _defineProperty2["default"])(ItemSelector, "defaultProps", {
  erasable: false,
  placement: 'bottom',
  selectedItems: [],
  displayOption: null,
  getOptionValue: null,
  filterOption: null,
  fixedOptions: null,
  inputTheme: 'primary',
  multiSelect: true,
  placeholder: 'Enter a value',
  closeOnSelect: true,
  searchable: true,
  dropdownHeader: null,
  DropdownHeaderComponent: null,
  DropDownRenderComponent: _dropdownList["default"],
  DropDownLineItemRenderComponent: _dropdownList.ListItem
});
;

var _default = (0, _reactOnclickoutside["default"])(ItemSelector);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiX3RvQXJyYXkiLCJpdGVtIiwiQXJyYXkiLCJpc0FycmF5IiwiU3R5bGVkRHJvcGRvd25TZWxlY3QiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImlucHV0VGhlbWUiLCJ0aGVtZSIsInNlY29uZGFyeUlucHV0IiwiaW5wdXQiLCJkcm9wZG93bkxpc3RBbmNob3IiLCJEcm9wZG93blNlbGVjdFZhbHVlIiwic3BhbiIsImhhc1BsYWNlaG9sZGVyIiwic2VsZWN0Q29sb3JQbGFjZUhvbGRlciIsInNlbGVjdENvbG9yIiwiRHJvcGRvd25TZWxlY3RFcmFzZSIsIkRyb3Bkb3duV3JhcHBlciIsInBsYWNlbWVudCIsImlucHV0Qm94SGVpZ2h0IiwiSXRlbVNlbGVjdG9yIiwic2hvd1R5cGVhaGVhZCIsIl9oaWRlVHlwZWFoZWFkIiwib25CbHVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwic2VsZWN0ZWRJdGVtcyIsImluZGV4IiwiZmluZEluZGV4IiwidCIsIml0ZW1zIiwic2xpY2UiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImNsb3NlT25TZWxlY3QiLCJzZXRTdGF0ZSIsIl9vbkJsdXIiLCJnZXRWYWx1ZSIsIkFjY2Vzc29yIiwiZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0ZvciIsImdldE9wdGlvblZhbHVlIiwiZGlzcGxheU9wdGlvbiIsInByZXZpb3VzU2VsZWN0ZWQiLCJtdWx0aVNlbGVjdCIsImNvbmNhdCIsIm1hcCIsImRpc2FibGVkIiwicmVzdWx0cyIsImxpc3RJdGVtIiwibGlzdEFuY2hvciIsIm9wdGlvbnMiLCJmaWx0ZXJPcHRpb24iLCJmaXhlZE9wdGlvbnMiLCJfc2VsZWN0SXRlbSIsIkRyb3BEb3duUmVuZGVyQ29tcG9uZW50IiwiRHJvcGRvd25IZWFkZXJDb21wb25lbnQiLCJEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50Iiwic2VhcmNoYWJsZSIsInNlbGVjdGVkIiwiaGFzVmFsdWUiLCJkcm9wZG93blNlbGVjdFByb3BzIiwiY2xhc3NOYW1lIiwiYWN0aXZlIiwic3RhdGUiLCJvbkNsaWNrIiwiX3Nob3dUeXBlYWhlYWQiLCJvbkZvY3VzIiwiX3Nob3dQb3BvdmVyIiwiZXJyb3IiLCJpc0Vycm9yIiwicG9zaXRpb24iLCJwbGFjZWhvbGRlciIsIl9yZW1vdmVJdGVtIiwiZXJhc2FibGUiLCJfb25FcmFzZSIsIl9yZW5kZXJEcm9wZG93biIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsImFycmF5Iiwic3RyaW5nIiwibnVtYmVyIiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYXJyYXlPZiIsImFueSIsImRyb3Bkb3duSGVhZGVyIiwiRHJvcGRvd25MaXN0IiwiTGlzdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7OztBQVFBLFNBQVNBLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQ3RCLE1BQUlDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixJQUFkLENBQUosRUFBeUI7QUFDdkIsV0FBT0EsSUFBUDtBQUNEOztBQUVELE1BQUksT0FBT0EsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxLQUFLLElBQTVDLEVBQWtEO0FBQ2hELFdBQU8sRUFBUDtBQUNEOztBQUVELFNBQU8sQ0FBQ0EsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsSUFBTUcsb0JBQW9CLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBVixvQkFDdEIsVUFBQUMsS0FBSztBQUFBLFNBQ0xBLEtBQUssQ0FBQ0MsVUFBTixLQUFxQixX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RSxFQUFBQSxVQUFVLEVBQUV3RSxzQkFBVUcsTUF0Qkw7QUF1QmpCMUQsRUFBQUEsTUFBTSxFQUFFdUQsc0JBQVVPLElBdkJEO0FBd0JqQmIsRUFBQUEsV0FBVyxFQUFFTSxzQkFBVUcsTUF4Qk47QUF5QmpCOUMsRUFBQUEsYUFBYSxFQUFFMkMsc0JBQVVLLElBekJSO0FBMEJqQjNCLEVBQUFBLHVCQUF1QixFQUFFc0Isc0JBQVVPLElBMUJsQjtBQTJCakI5QixFQUFBQSx1QkFBdUIsRUFBRXVCLHNCQUFVTyxJQTNCbEI7QUE0QmpCNUIsRUFBQUEsK0JBQStCLEVBQUVxQixzQkFBVU87QUE1QjFCLEM7aUNBRGZqRSxZLGtCQWdDa0I7QUFDcEJzRCxFQUFBQSxRQUFRLEVBQUUsS0FEVTtBQUVwQnhELEVBQUFBLFNBQVMsRUFBRSxRQUZTO0FBR3BCUyxFQUFBQSxhQUFhLEVBQUUsRUFISztBQUlwQmUsRUFBQUEsYUFBYSxFQUFFLElBSks7QUFLcEJELEVBQUFBLGNBQWMsRUFBRSxJQUxJO0FBTXBCVyxFQUFBQSxZQUFZLEVBQUUsSUFOTTtBQU9wQkMsRUFBQUEsWUFBWSxFQUFFLElBUE07QUFRcEIvQyxFQUFBQSxVQUFVLEVBQUUsU0FSUTtBQVNwQnNDLEVBQUFBLFdBQVcsRUFBRSxJQVRPO0FBVXBCNEIsRUFBQUEsV0FBVyxFQUFFLGVBVk87QUFXcEJyQyxFQUFBQSxhQUFhLEVBQUUsSUFYSztBQVlwQnVCLEVBQUFBLFVBQVUsRUFBRSxJQVpRO0FBYXBCK0IsRUFBQUEsY0FBYyxFQUFFLElBYkk7QUFjcEJqQyxFQUFBQSx1QkFBdUIsRUFBRSxJQWRMO0FBZXBCRCxFQUFBQSx1QkFBdUIsRUFBRW1DLHdCQWZMO0FBZ0JwQmpDLEVBQUFBLCtCQUErQixFQUFFa0M7QUFoQmIsQztBQXFMdkI7O2VBRWMscUNBQXNCdkUsWUFBdEIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IGxpc3RlbnNUb0NsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnLi9hY2Nlc3Nvcic7XG5pbXBvcnQgQ2hpY2tsZXRlZElucHV0IGZyb20gJy4vY2hpY2tsZXRlZC1pbnB1dCc7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4vdHlwZWFoZWFkJztcbmltcG9ydCB7RGVsZXRlfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgRHJvcGRvd25MaXN0LCB7TGlzdEl0ZW19IGZyb20gJy4vZHJvcGRvd24tbGlzdCc7XG5cbi8qKlxuICogQ29udmVydHMgbm9uLWFycmF5cyB0byBhcnJheXMuICBMZWF2ZXMgYXJyYXlzIGFsb25lLiAgQ29udmVydHNcbiAqIHVuZGVmaW5lZCB2YWx1ZXMgdG8gZW1wdHkgYXJyYXlzIChbXSBpbnN0ZWFkIG9mIFt1bmRlZmluZWRdKS5cbiAqIE90aGVyd2lzZSwganVzdCByZXR1cm5zIFtpdGVtXSBmb3Igbm9uLWFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7Kn0gaXRlbVxuICogQHJldHVybnMge2FycmF5fSBib29tISBtdWNoIGFycmF5LiB2ZXJ5IGluZGV4ZWQuIHNvIHVzZWZ1bC5cbiAqL1xuZnVuY3Rpb24gX3RvQXJyYXkoaXRlbSkge1xuICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpdGVtID09PSAndW5kZWZpbmVkJyB8fCBpdGVtID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcmV0dXJuIFtpdGVtXTtcbn1cblxuY29uc3QgU3R5bGVkRHJvcGRvd25TZWxlY3QgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+XG4gICAgcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ3NlY29uZGFyeSdcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRcbiAgICAgIDogcHJvcHMudGhlbWUuaW5wdXR9O1xuXG4gIC5saXN0X19pdGVtX19hbmNob3Ige1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QW5jaG9yfTtcbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25TZWxlY3RWYWx1ZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmhhc1BsYWNlaG9sZGVyXG4gICAgICA/IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yUGxhY2VIb2xkZXJcbiAgICAgIDogcHJvcHMudGhlbWUuc2VsZWN0Q29sb3J9O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuYDtcblxuY29uc3QgRHJvcGRvd25TZWxlY3RFcmFzZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBEcm9wZG93bldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAke3Byb3BzID0+XG4gICAgcHJvcHMucGxhY2VtZW50ID09PSAndG9wJyA/IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0IDogJ2F1dG8nfTtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiAocHJvcHMucGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICc0cHgnIDogJ2F1dG8nKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnBsYWNlbWVudCA9PT0gJ3RvcCcgPyAnNHB4JyA6ICdhdXRvJyl9O1xuYDtcblxuY2xhc3MgSXRlbVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyByZXF1aXJlZCBwcm9wZXJ0aWVzXG4gICAgc2VsZWN0ZWRJdGVtczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuYXJyYXksXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIFByb3BUeXBlcy5ib29sLFxuICAgICAgUHJvcFR5cGVzLm9iamVjdFxuICAgIF0pLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG5cbiAgICAvLyBvcHRpb25hbCBwcm9wZXJ0aWVzXG4gICAgZml4ZWRPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBlcmFzYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBnZXRPcHRpb25WYWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtdWx0aVNlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5wdXRUaGVtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuICAgIERyb3Bkb3duSGVhZGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBEcm9wRG93blJlbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudDogUHJvcFR5cGVzLmZ1bmNcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGVyYXNhYmxlOiBmYWxzZSxcbiAgICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICAgIHNlbGVjdGVkSXRlbXM6IFtdLFxuICAgIGRpc3BsYXlPcHRpb246IG51bGwsXG4gICAgZ2V0T3B0aW9uVmFsdWU6IG51bGwsXG4gICAgZmlsdGVyT3B0aW9uOiBudWxsLFxuICAgIGZpeGVkT3B0aW9uczogbnVsbCxcbiAgICBpbnB1dFRoZW1lOiAncHJpbWFyeScsXG4gICAgbXVsdGlTZWxlY3Q6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6ICdFbnRlciBhIHZhbHVlJyxcbiAgICBjbG9zZU9uU2VsZWN0OiB0cnVlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgZHJvcGRvd25IZWFkZXI6IG51bGwsXG4gICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ6IG51bGwsXG4gICAgRHJvcERvd25SZW5kZXJDb21wb25lbnQ6IERyb3Bkb3duTGlzdCxcbiAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50OiBMaXN0SXRlbVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3dUeXBlYWhlYWQ6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgIHRoaXMuX2hpZGVUeXBlYWhlYWQoKTtcbiAgfTtcblxuICBfaGlkZVR5cGVhaGVhZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xuICAgIHRoaXMuX29uQmx1cigpO1xuICB9XG5cbiAgX29uQmx1ciA9ICgpID0+IHtcbiAgICAvLyBub3RlOiBjaGlja2xldGVkIGlucHV0IGlzIG5vdCBhIHJlYWwgZm9ybSBlbGVtZW50IHNvIHdlIGNhbGwgb25CbHVyKClcbiAgICAvLyB3aGVuIHdlIGZlZWwgdGhlIGV2ZW50cyBhcmUgYXBwcm9wcmlhdGVcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9yZW1vdmVJdGVtID0gKGl0ZW0sIGUpID0+IHtcbiAgICAvLyBvbmx5IHVzZWQgd2hlbiBtdWx0aVNlbGVjdCA9IHRydWVcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCB7c2VsZWN0ZWRJdGVtc30gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGluZGV4ID0gc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgodCA9PiB0ID09PSBpdGVtKTtcblxuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIC4uLnNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgLi4uc2VsZWN0ZWRJdGVtcy5zbGljZShpbmRleCArIDEsIHNlbGVjdGVkSXRlbXMubGVuZ3RoKVxuICAgIF07XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGl0ZW1zKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgICB0aGlzLl9vbkJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX3NlbGVjdEl0ZW0gPSBpdGVtID0+IHtcbiAgICBjb25zdCBnZXRWYWx1ZSA9IEFjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IoXG4gICAgICB0aGlzLnByb3BzLmdldE9wdGlvblZhbHVlIHx8IHRoaXMucHJvcHMuZGlzcGxheU9wdGlvblxuICAgICk7XG5cbiAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gX3RvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHVuaXEocHJldmlvdXNTZWxlY3RlZC5jb25jYXQoX3RvQXJyYXkoaXRlbSkubWFwKGdldFZhbHVlKSkpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZ2V0VmFsdWUoaXRlbSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgICB0aGlzLl9vbkJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX29uRXJhc2UgPSBlID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UobnVsbCk7XG4gIH07XG5cbiAgX3Nob3dUeXBlYWhlYWQgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1R5cGVhaGVhZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9yZW5kZXJEcm9wZG93bigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duV3JhcHBlciBwbGFjZW1lbnQ9e3RoaXMucHJvcHMucGxhY2VtZW50fT5cbiAgICAgICAgPFR5cGVhaGVhZFxuICAgICAgICAgIGN1c3RvbUNsYXNzZXM9e3tcbiAgICAgICAgICAgIHJlc3VsdHM6ICdsaXN0LXNlbGVjdG9yJyxcbiAgICAgICAgICAgIGlucHV0OiAndHlwZWFoZWFkX19pbnB1dCcsXG4gICAgICAgICAgICBsaXN0SXRlbTogJ2xpc3RfX2l0ZW0nLFxuICAgICAgICAgICAgbGlzdEFuY2hvcjogJ2xpc3RfX2l0ZW1fX2FuY2hvcidcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMub3B0aW9uc31cbiAgICAgICAgICBmaWx0ZXJPcHRpb249e3RoaXMucHJvcHMuZmlsdGVyT3B0aW9ufVxuICAgICAgICAgIGZpeGVkT3B0aW9ucz17dGhpcy5wcm9wcy5maXhlZE9wdGlvbnN9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e3RoaXMuX3NlbGVjdEl0ZW19XG4gICAgICAgICAgY3VzdG9tTGlzdENvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wRG93blJlbmRlckNvbXBvbmVudH1cbiAgICAgICAgICBjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50PXt0aGlzLnByb3BzLkRyb3Bkb3duSGVhZGVyQ29tcG9uZW50fVxuICAgICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXt0aGlzLnByb3BzLkRyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnR9XG4gICAgICAgICAgZGlzcGxheU9wdGlvbj17QWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0ZvcihcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGxheU9wdGlvblxuICAgICAgICAgICl9XG4gICAgICAgICAgc2VhcmNoYWJsZT17dGhpcy5wcm9wcy5zZWFyY2hhYmxlfVxuICAgICAgICAgIHNob3dPcHRpb25zV2hlbkVtcHR5XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17X3RvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKX1cbiAgICAgICAgLz5cbiAgICAgIDwvRHJvcGRvd25XcmFwcGVyPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBfdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpO1xuICAgIGNvbnN0IGhhc1ZhbHVlID0gc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IGRpc3BsYXlPcHRpb24gPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKFxuICAgICAgdGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uXG4gICAgKTtcblxuICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0UHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoYGl0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duYCwge1xuICAgICAgICBhY3RpdmU6IHRoaXMuc3RhdGUuc2hvd1R5cGVhaGVhZFxuICAgICAgfSksXG4gICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX3Nob3dUeXBlYWhlYWQsXG4gICAgICBvbkZvY3VzOiB0aGlzLl9zaG93UG9wb3ZlcixcbiAgICAgIGVycm9yOiB0aGlzLnByb3BzLmlzRXJyb3IsXG4gICAgICBpbnB1dFRoZW1lOiB0aGlzLnByb3BzLmlucHV0VGhlbWVcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1zZWxlY3RvclwiPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgICB7LyogdGhpcyBwYXJ0IGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgbGFiZWwgKi99XG4gICAgICAgICAge3RoaXMucHJvcHMubXVsdGlTZWxlY3QgPyAoXG4gICAgICAgICAgICA8Q2hpY2tsZXRlZElucHV0XG4gICAgICAgICAgICAgIHsuLi5kcm9wZG93blNlbGVjdFByb3BzfVxuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtfdG9BcnJheSh0aGlzLnByb3BzLnNlbGVjdGVkSXRlbXMpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgICAgcmVtb3ZlSXRlbT17dGhpcy5fcmVtb3ZlSXRlbX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxTdHlsZWREcm9wZG93blNlbGVjdCB7Li4uZHJvcGRvd25TZWxlY3RQcm9wc30+XG4gICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdFZhbHVlIGhhc1BsYWNlaG9sZGVyPXshaGFzVmFsdWV9IGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgIHtoYXNWYWx1ZSA/IChcbiAgICAgICAgICAgICAgICAgIDx0aGlzLnByb3BzLkRyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGlzcGxheU9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkWzBdfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5wbGFjZWhvbGRlclxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RWYWx1ZT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXJhc2FibGUgJiYgaGFzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0RXJhc2U+XG4gICAgICAgICAgICAgICAgICA8RGVsZXRlIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXt0aGlzLl9vbkVyYXNlfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RFcmFzZT5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duU2VsZWN0PlxuICAgICAgICAgICl9XG4gICAgICAgICAgey8qIHRoaXMgcGFydCBpcyB1c2VkIHRvIGJ1aWx0IHRoZSBsaXN0ICovfVxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWQgJiYgdGhpcy5fcmVuZGVyRHJvcGRvd24oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaXN0ZW5zVG9DbGlja091dHNpZGUoSXRlbVNlbGVjdG9yKTtcbiJdfQ==