"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fuzzy = _interopRequireDefault(require("fuzzy"));

var _classnames = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

var _window = require("global/window");

var _accessor = _interopRequireDefault(require("./accessor"));

var _keyevent = _interopRequireDefault(require("./keyevent"));

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _icons = require("../icons");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 15px;\n  top: 14px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  :focus {\n    outline: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DEFAULT_CLASS = 'typeahead';
/**
 * Copied mostly from 'react-typeahead', an auto-completing text input
 *
 * Renders an text input that shows options nearby that you can use the
 * keyboard or mouse to select.
 */

var TypeaheadWrapper = styled.div(_templateObject(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
});
var InputBox = styled.div(_templateObject2());
var TypeaheadInput = styled.input(_templateObject3(), function (props) {
  return props.theme.secondaryInput;
}, function (props) {
  return props.theme.secondaryInputBgd;
});
var InputIcon = styled.div(_templateObject4(), function (props) {
  return props.theme.inputPlaceholderColor;
});

var Typeahead =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Typeahead, _Component);

  function Typeahead(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Typeahead);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Typeahead).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOptionSelected", function (option, event) {
      if (_this.props.searchable) {
        // reset entry input
        _this.setState({
          searchResults: _this.getOptionsForValue('', _this.props.options),
          selection: '',
          entryValue: ''
        });
      }

      return _this.props.onOptionSelected(option, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onTextEntryUpdated", function () {
      if (_this.props.searchable) {
        var value = _this.entry.value;

        _this.setState({
          searchResults: _this.getOptionsForValue(value, _this.props.options),
          selection: '',
          entryValue: value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onEnter", function (event) {
      var selection = _this.getSelection();

      if (!selection) {
        return _this.props.onKeyDown(event);
      }

      return _this._onOptionSelected(selection, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navDown", function () {
      _this._nav(1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navUp", function () {
      _this._nav(-1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }

      _this._onTextEntryUpdated();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyDown", function (event) {
      // If there are no visible elements, don't perform selector navigation.
      // Just pass this up to the upstream onKeydown handler.
      // Also skip if the user is pressing the shift key, since none of our handlers are looking for shift
      if (!_this._hasHint() || event.shiftKey) {
        return _this.props.onKeyDown(event);
      }

      var handler = _this.eventMap()[event.keyCode];

      if (handler) {
        handler(event);
      } else {
        return _this.props.onKeyDown(event);
      } // Don't propagate the keystroke back to the DOM/browser


      event.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      if (_this.props.onFocus) {
        return _this.props.onFocus(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function (event) {
      _this.setState({
        isFocused: false
      });

      if (_this.props.onBlur) {
        return _this.props.onBlur(event);
      }
    });
    _this.state = {
      searchResults: _this.getOptionsForValue(_this.props.initialValue, _this.props.options),
      // This should be called something else, 'entryValue'
      entryValue: _this.props.value || _this.props.initialValue,
      // A valid typeahead value
      selection: _this.props.value,
      // Index of the selection
      selectionIndex: null,
      // Keep track of the focus state of the input element, to determine
      // whether to show options when empty (if showOptionsWhenEmpty is true)
      isFocused: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Typeahead, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        searchResults: this.getOptionsForValue('', this.props.options)
      }); // call focus on entry or div to trigger key events listener

      if (this.entry) {
        this.entry.focus();
      } else {
        this.root.focus();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var searchResults = this.getOptionsForValue(this.state.entryValue, nextProps.options);
      this.setState({
        searchResults: searchResults
      });
    }
  }, {
    key: "_shouldSkipSearch",
    value: function _shouldSkipSearch(input) {
      var emptyValue = !input || input.trim().length === 0; // this.state must be checked because it may not be defined yet if this function
      // is called from within getInitialState

      var isFocused = this.state && this.state.isFocused;
      return !(this.props.showOptionsWhenEmpty && isFocused) && emptyValue;
    }
  }, {
    key: "getOptionsForValue",
    value: function getOptionsForValue(value, options) {
      if (!this.props.searchable) {
        // directly pass through options if can not be searched
        return options;
      }

      if (this._shouldSkipSearch(value)) {
        return options;
      }

      var searchOptions = this._generateSearchFunction();

      return searchOptions(value, options);
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.entry) {
        this.entry.focus();
      }
    }
  }, {
    key: "_hasCustomValue",
    value: function _hasCustomValue() {
      return this.props.allowCustomValues > 0 && this.state.entryValue.length >= this.props.allowCustomValues && this.state.searchResults.indexOf(this.state.entryValue) < 0;
    }
  }, {
    key: "_getCustomValue",
    value: function _getCustomValue() {
      return this._hasCustomValue() ? this.state.entryValue : null;
    }
  }, {
    key: "_renderIncrementalSearchResults",
    value: function _renderIncrementalSearchResults() {
      return _react["default"].createElement(this.props.customListComponent, {
        fixedOptions: this.props.fixedOptions,
        options: this.props.maxVisible ? this.state.searchResults.slice(0, this.props.maxVisible) : this.state.searchResults,
        areResultsTruncated: this.props.maxVisible && this.state.searchResults.length > this.props.maxVisible,
        resultsTruncatedMessage: this.props.resultsTruncatedMessage,
        onOptionSelected: this._onOptionSelected,
        allowCustomValues: this.props.allowCustomValues,
        customValue: this._getCustomValue(),
        customClasses: this.props.customClasses,
        customListItemComponent: this.props.customListItemComponent,
        customListHeaderComponent: this.props.customListHeaderComponent,
        selectionIndex: this.state.selectionIndex,
        defaultClassNames: this.props.defaultClassNames,
        displayOption: this.props.displayOption,
        selectedItems: this.props.selectedItems
      });
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      var index = this.state.selectionIndex;

      if (this._hasCustomValue()) {
        if (index === 0) {
          return this.state.entryValue;
        }

        index--;
      }

      if (this._hasFixedOptions()) {
        return index < this.props.fixedOptions.length ? this.props.fixedOptions[index] : this.state.searchResults[index - this.props.fixedOptions.length];
      }

      return this.state.searchResults[index];
    }
  }, {
    key: "_onEscape",
    value: function _onEscape() {
      this.setState({
        selectionIndex: null
      });
    }
  }, {
    key: "_onTab",
    value: function _onTab(event) {
      var selection = this.getSelection();
      var option = selection ? selection : this.state.searchResults.length > 0 ? this.state.searchResults[0] : null;

      if (option === null && this._hasCustomValue()) {
        option = this._getCustomValue();
      }

      if (option !== null) {
        return this._onOptionSelected(option, event);
      }
    }
  }, {
    key: "eventMap",
    value: function eventMap(event) {
      var events = {};
      events[_keyevent["default"].DOM_VK_UP] = this.navUp;
      events[_keyevent["default"].DOM_VK_DOWN] = this.navDown;
      events[_keyevent["default"].DOM_VK_RETURN] = events[_keyevent["default"].DOM_VK_ENTER] = this._onEnter;
      events[_keyevent["default"].DOM_VK_ESCAPE] = this._onEscape;
      events[_keyevent["default"].DOM_VK_TAB] = this._onTab;
      return events;
    }
  }, {
    key: "_nav",
    value: function _nav(delta) {
      if (!this._hasHint()) {
        return;
      }

      var newIndex = this.state.selectionIndex === null ? delta === 1 ? 0 : delta : this.state.selectionIndex + delta;
      var length = this.props.maxVisible ? this.state.searchResults.slice(0, this.props.maxVisible).length : this.state.searchResults.length;

      if (this._hasCustomValue()) {
        length += 1;
      }

      if (newIndex < 0) {
        newIndex += length;
      } else if (newIndex >= length) {
        newIndex -= length;
      }

      this.setState({
        selectionIndex: newIndex
      });
    }
  }, {
    key: "_renderHiddenInput",
    value: function _renderHiddenInput() {
      if (!this.props.name) {
        return null;
      }

      return _react["default"].createElement("input", {
        type: "hidden",
        name: this.props.name,
        value: this.state.selection
      });
    }
  }, {
    key: "_generateSearchFunction",
    value: function _generateSearchFunction() {
      var searchOptionsProp = this.props.searchOptions;
      var filterOptionProp = this.props.filterOption;

      if (typeof searchOptionsProp === 'function') {
        if (filterOptionProp !== null) {
          _window.console.warn('searchOptions prop is being used, filterOption prop will be ignored');
        }

        return searchOptionsProp;
      } else if (typeof filterOptionProp === 'function') {
        // use custom filter option
        return function (value, options) {
          return options.filter(function (o) {
            return filterOptionProp(value, o);
          });
        };
      }

      var mapper = typeof filterOptionProp === 'string' ? _accessor["default"].generateAccessor(filterOptionProp) : _accessor["default"].IDENTITY_FN;
      return function (value, options) {
        return _fuzzy["default"].filter(value, options, {
          extract: mapper
        }).map(function (res) {
          return options[res.index];
        });
      };
    }
  }, {
    key: "_hasHint",
    value: function _hasHint() {
      return this.state.searchResults.length > 0 || this._hasCustomValue();
    }
  }, {
    key: "_hasFixedOptions",
    value: function _hasFixedOptions() {
      return Array.isArray(this.props.fixedOptions) && this.props.fixedOptions.length;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputClasses = {};
      inputClasses[this.props.customClasses.input] = Boolean(this.props.customClasses.input);
      var inputClassList = (0, _classnames["default"])(inputClasses);
      var classes = (0, _defineProperty2["default"])({}, DEFAULT_CLASS, this.props.defaultClassNames);
      classes[this.props.className] = Boolean(this.props.className);
      var classList = (0, _classnames["default"])(classes);
      return _react["default"].createElement(TypeaheadWrapper, {
        className: classList,
        ref: function ref(comp) {
          _this2.root = comp;
        },
        tabIndex: "0",
        onKeyDown: this._onKeyDown,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        onFocus: this._onFocus
      }, this._renderHiddenInput(), this.props.searchable ? _react["default"].createElement(InputBox, null, _react["default"].createElement(TypeaheadInput, (0, _extends2["default"])({
        ref: function ref(comp) {
          _this2.entry = comp;
        },
        type: "text",
        disabled: this.props.disabled
      }, this.props.inputProps, {
        placeholder: this.props.placeholder,
        className: inputClassList,
        value: this.state.entryValue,
        onChange: this._onChange,
        onBlur: this._onBlur
      })), _react["default"].createElement(InputIcon, null, _react["default"].createElement(_icons.Search, {
        height: "18px"
      }))) : null, this._renderIncrementalSearchResults());
    }
  }]);
  return Typeahead;
}(_react.Component);

exports["default"] = Typeahead;
(0, _defineProperty2["default"])(Typeahead, "propTypes", {
  name: _propTypes["default"].string,
  customClasses: _propTypes["default"].object,
  maxVisible: _propTypes["default"].number,
  resultsTruncatedMessage: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].any),
  fixedOptions: _propTypes["default"].arrayOf(_propTypes["default"].any),
  allowCustomValues: _propTypes["default"].number,
  initialValue: _propTypes["default"].string,
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  textarea: _propTypes["default"].bool,
  inputProps: _propTypes["default"].object,
  onOptionSelected: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyPress: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onBlur: _propTypes["default"].func,
  filterOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  searchOptions: _propTypes["default"].func,
  displayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  inputDisplayOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  formInputOption: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  defaultClassNames: _propTypes["default"].bool,
  customListComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListItemComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  customListHeaderComponent: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].func]),
  showOptionsWhenEmpty: _propTypes["default"].bool,
  searchable: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Typeahead, "defaultProps", {
  options: [],
  customClasses: {},
  allowCustomValues: 0,
  initialValue: '',
  value: '',
  placeholder: '',
  disabled: false,
  textarea: false,
  inputProps: {},
  onOptionSelected: function onOptionSelected(option) {},
  onChange: function onChange(event) {},
  onKeyDown: function onKeyDown(event) {},
  onKeyPress: function onKeyPress(event) {},
  onKeyUp: function onKeyUp(event) {},
  onFocus: function onFocus(event) {},
  onBlur: function onBlur(event) {},
  filterOption: null,
  searchOptions: null,
  inputDisplayOption: null,
  defaultClassNames: true,
  customListComponent: _dropdownList["default"],
  customListItemComponent: _dropdownList.ListItem,
  customListHeaderComponent: null,
  showOptionsWhenEmpty: true,
  searchable: true,
  resultsTruncatedMessage: null
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9pdGVtLXNlbGVjdG9yL3R5cGVhaGVhZC5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0NMQVNTIiwiVHlwZWFoZWFkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RTaGFkb3ciLCJJbnB1dEJveCIsIlR5cGVhaGVhZElucHV0IiwiaW5wdXQiLCJzZWNvbmRhcnlJbnB1dCIsInNlY29uZGFyeUlucHV0QmdkIiwiSW5wdXRJY29uIiwiaW5wdXRQbGFjZWhvbGRlckNvbG9yIiwiVHlwZWFoZWFkIiwib3B0aW9uIiwiZXZlbnQiLCJzZWFyY2hhYmxlIiwic2V0U3RhdGUiLCJzZWFyY2hSZXN1bHRzIiwiZ2V0T3B0aW9uc0ZvclZhbHVlIiwib3B0aW9ucyIsInNlbGVjdGlvbiIsImVudHJ5VmFsdWUiLCJvbk9wdGlvblNlbGVjdGVkIiwidmFsdWUiLCJlbnRyeSIsImdldFNlbGVjdGlvbiIsIm9uS2V5RG93biIsIl9vbk9wdGlvblNlbGVjdGVkIiwiX25hdiIsIm9uQ2hhbmdlIiwiX29uVGV4dEVudHJ5VXBkYXRlZCIsIl9oYXNIaW50Iiwic2hpZnRLZXkiLCJoYW5kbGVyIiwiZXZlbnRNYXAiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJpc0ZvY3VzZWQiLCJvbkZvY3VzIiwib25CbHVyIiwic3RhdGUiLCJpbml0aWFsVmFsdWUiLCJzZWxlY3Rpb25JbmRleCIsImZvY3VzIiwicm9vdCIsIm5leHRQcm9wcyIsImVtcHR5VmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwic2hvd09wdGlvbnNXaGVuRW1wdHkiLCJfc2hvdWxkU2tpcFNlYXJjaCIsInNlYXJjaE9wdGlvbnMiLCJfZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbiIsImFsbG93Q3VzdG9tVmFsdWVzIiwiaW5kZXhPZiIsIl9oYXNDdXN0b21WYWx1ZSIsImZpeGVkT3B0aW9ucyIsIm1heFZpc2libGUiLCJzbGljZSIsInJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlIiwiX2dldEN1c3RvbVZhbHVlIiwiY3VzdG9tQ2xhc3NlcyIsImN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IiwiY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCIsImRlZmF1bHRDbGFzc05hbWVzIiwiZGlzcGxheU9wdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJpbmRleCIsIl9oYXNGaXhlZE9wdGlvbnMiLCJldmVudHMiLCJLZXlFdmVudCIsIkRPTV9WS19VUCIsIm5hdlVwIiwiRE9NX1ZLX0RPV04iLCJuYXZEb3duIiwiRE9NX1ZLX1JFVFVSTiIsIkRPTV9WS19FTlRFUiIsIl9vbkVudGVyIiwiRE9NX1ZLX0VTQ0FQRSIsIl9vbkVzY2FwZSIsIkRPTV9WS19UQUIiLCJfb25UYWIiLCJkZWx0YSIsIm5ld0luZGV4IiwibmFtZSIsInNlYXJjaE9wdGlvbnNQcm9wIiwiZmlsdGVyT3B0aW9uUHJvcCIsImZpbHRlck9wdGlvbiIsIkNvbnNvbGUiLCJ3YXJuIiwiZmlsdGVyIiwibyIsIm1hcHBlciIsIkFjY2Vzc29yIiwiZ2VuZXJhdGVBY2Nlc3NvciIsIklERU5USVRZX0ZOIiwiZnV6enkiLCJleHRyYWN0IiwibWFwIiwicmVzIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5wdXRDbGFzc2VzIiwiQm9vbGVhbiIsImlucHV0Q2xhc3NMaXN0IiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbXAiLCJfb25LZXlEb3duIiwib25LZXlQcmVzcyIsIm9uS2V5VXAiLCJfb25Gb2N1cyIsIl9yZW5kZXJIaWRkZW5JbnB1dCIsImRpc2FibGVkIiwiaW5wdXRQcm9wcyIsInBsYWNlaG9sZGVyIiwiX29uQ2hhbmdlIiwiX29uQmx1ciIsIl9yZW5kZXJJbmNyZW1lbnRhbFNlYXJjaFJlc3VsdHMiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJudW1iZXIiLCJhcnJheU9mIiwiYW55IiwiYm9vbCIsInRleHRhcmVhIiwiZnVuYyIsIm9uZU9mVHlwZSIsImlucHV0RGlzcGxheU9wdGlvbiIsImZvcm1JbnB1dE9wdGlvbiIsImN1c3RvbUxpc3RDb21wb25lbnQiLCJlbGVtZW50IiwiRHJvcGRvd25MaXN0IiwiTGlzdEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsV0FBdEI7QUFDQTs7Ozs7OztBQU9BLElBQU1DLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLEdBQVYsb0JBR0EsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxlQUFoQjtBQUFBLENBSEwsRUFJTixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGtCQUFoQjtBQUFBLENBSkMsQ0FBdEI7QUFXQSxJQUFNQyxRQUFRLEdBQUdOLE1BQU0sQ0FBQ0MsR0FBVixvQkFBZDtBQUlBLElBQU1NLGNBQWMsR0FBR1AsTUFBTSxDQUFDUSxLQUFWLHFCQUNoQixVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLGNBQWhCO0FBQUEsQ0FEVyxFQUlJLFVBQUFQLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU8saUJBQWhCO0FBQUEsQ0FKVCxDQUFwQjtBQVFBLElBQU1DLFNBQVMsR0FBR1gsTUFBTSxDQUFDQyxHQUFWLHFCQUlKLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMscUJBQWhCO0FBQUEsQ0FKRCxDQUFmOztJQU9xQkMsUzs7Ozs7QUFzRW5CLHFCQUFZWCxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIscUhBQU1BLEtBQU47QUFEaUIsMEdBbUlD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LEVBTk87QUFPcEJGLEVBQUFBLFFBQVEsRUFBRSxLQVBVO0FBUXBCYyxFQUFBQSxRQUFRLEVBQUUsS0FSVTtBQVNwQmIsRUFBQUEsVUFBVSxFQUFFLEVBVFE7QUFVcEI3RixFQUFBQSxnQkFWb0IsNEJBVUhULE1BVkcsRUFVSyxDQUFFLENBVlA7QUFXcEJnQixFQUFBQSxRQVhvQixvQkFXWGYsS0FYVyxFQVdKLENBQUUsQ0FYRTtBQVlwQlksRUFBQUEsU0Fab0IscUJBWVZaLEtBWlUsRUFZSCxDQUFFLENBWkM7QUFhcEJnRyxFQUFBQSxVQWJvQixzQkFhVGhHLEtBYlMsRUFhRixDQUFFLENBYkE7QUFjcEJpRyxFQUFBQSxPQWRvQixtQkFjWmpHLEtBZFksRUFjTCxDQUFFLENBZEc7QUFlcEJ3QixFQUFBQSxPQWZvQixtQkFlWnhCLEtBZlksRUFlTCxDQUFFLENBZkc7QUFnQnBCeUIsRUFBQUEsTUFoQm9CLGtCQWdCYnpCLEtBaEJhLEVBZ0JOLENBQUUsQ0FoQkk7QUFpQnBCeUUsRUFBQUEsWUFBWSxFQUFFLElBakJNO0FBa0JwQnBDLEVBQUFBLGFBQWEsRUFBRSxJQWxCSztBQW1CcEJnRixFQUFBQSxrQkFBa0IsRUFBRSxJQW5CQTtBQW9CcEJuRSxFQUFBQSxpQkFBaUIsRUFBRSxJQXBCQztBQXFCcEJxRSxFQUFBQSxtQkFBbUIsRUFBRUUsd0JBckJEO0FBc0JwQnpFLEVBQUFBLHVCQUF1QixFQUFFMEUsc0JBdEJMO0FBdUJwQnpFLEVBQUFBLHlCQUF5QixFQUFFLElBdkJQO0FBd0JwQmQsRUFBQUEsb0JBQW9CLEVBQUUsSUF4QkY7QUF5QnBCbEMsRUFBQUEsVUFBVSxFQUFFLElBekJRO0FBMEJwQjRDLEVBQUFBLHVCQUF1QixFQUFFO0FBMUJMLEM7QUFxWnZCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGZ1enp5IGZyb20gJ2Z1enp5JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y29uc29sZSBhcyBDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IEFjY2Vzc29yIGZyb20gJy4vYWNjZXNzb3InO1xuaW1wb3J0IEtleUV2ZW50IGZyb20gJy4va2V5ZXZlbnQnO1xuaW1wb3J0IERyb3Bkb3duTGlzdCwge0xpc3RJdGVtfSBmcm9tICcuL2Ryb3Bkb3duLWxpc3QnO1xuaW1wb3J0IHtTZWFyY2h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcblxuY29uc3QgREVGQVVMVF9DTEFTUyA9ICd0eXBlYWhlYWQnO1xuLyoqXG4gKiBDb3BpZWQgbW9zdGx5IGZyb20gJ3JlYWN0LXR5cGVhaGVhZCcsIGFuIGF1dG8tY29tcGxldGluZyB0ZXh0IGlucHV0XG4gKlxuICogUmVuZGVycyBhbiB0ZXh0IGlucHV0IHRoYXQgc2hvd3Mgb3B0aW9ucyBuZWFyYnkgdGhhdCB5b3UgY2FuIHVzZSB0aGVcbiAqIGtleWJvYXJkIG9yIG1vdXNlIHRvIHNlbGVjdC5cbiAqL1xuXG5jb25zdCBUeXBlYWhlYWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdFNoYWRvd307XG5cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDhweDtcbmA7XG5cbmNvbnN0IFR5cGVhaGVhZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0fVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0QmdkfTtcbiAgfVxuYDtcblxuY29uc3QgSW5wdXRJY29uID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgdG9wOiAxNHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dFBsYWNlaG9sZGVyQ29sb3J9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZWFoZWFkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGN1c3RvbUNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbWF4VmlzaWJsZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICByZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KSxcbiAgICBmaXhlZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGFsbG93Q3VzdG9tVmFsdWVzOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGluaXRpYWxWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgdGV4dGFyZWE6IFByb3BUeXBlcy5ib29sLFxuICAgIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25PcHRpb25TZWxlY3RlZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgc2VhcmNoT3B0aW9uczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzcGxheU9wdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBpbnB1dERpc3BsYXlPcHRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gICAgZm9ybUlucHV0T3B0aW9uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICAgIGRlZmF1bHRDbGFzc05hbWVzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjdXN0b21MaXN0Q29tcG9uZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5mdW5jXG4gICAgXSksXG4gICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5mdW5jXG4gICAgXSksXG4gICAgc2hvd09wdGlvbnNXaGVuRW1wdHk6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlYXJjaGFibGU6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBbXSxcbiAgICBjdXN0b21DbGFzc2VzOiB7fSxcbiAgICBhbGxvd0N1c3RvbVZhbHVlczogMCxcbiAgICBpbml0aWFsVmFsdWU6ICcnLFxuICAgIHZhbHVlOiAnJyxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRleHRhcmVhOiBmYWxzZSxcbiAgICBpbnB1dFByb3BzOiB7fSxcbiAgICBvbk9wdGlvblNlbGVjdGVkKG9wdGlvbikge30sXG4gICAgb25DaGFuZ2UoZXZlbnQpIHt9LFxuICAgIG9uS2V5RG93bihldmVudCkge30sXG4gICAgb25LZXlQcmVzcyhldmVudCkge30sXG4gICAgb25LZXlVcChldmVudCkge30sXG4gICAgb25Gb2N1cyhldmVudCkge30sXG4gICAgb25CbHVyKGV2ZW50KSB7fSxcbiAgICBmaWx0ZXJPcHRpb246IG51bGwsXG4gICAgc2VhcmNoT3B0aW9uczogbnVsbCxcbiAgICBpbnB1dERpc3BsYXlPcHRpb246IG51bGwsXG4gICAgZGVmYXVsdENsYXNzTmFtZXM6IHRydWUsXG4gICAgY3VzdG9tTGlzdENvbXBvbmVudDogRHJvcGRvd25MaXN0LFxuICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50OiBMaXN0SXRlbSxcbiAgICBjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50OiBudWxsLFxuICAgIHNob3dPcHRpb25zV2hlbkVtcHR5OiB0cnVlLFxuICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U6IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hSZXN1bHRzOiB0aGlzLmdldE9wdGlvbnNGb3JWYWx1ZShcbiAgICAgICAgdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUsXG4gICAgICAgIHRoaXMucHJvcHMub3B0aW9uc1xuICAgICAgKSxcblxuICAgICAgLy8gVGhpcyBzaG91bGQgYmUgY2FsbGVkIHNvbWV0aGluZyBlbHNlLCAnZW50cnlWYWx1ZSdcbiAgICAgIGVudHJ5VmFsdWU6IHRoaXMucHJvcHMudmFsdWUgfHwgdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUsXG5cbiAgICAgIC8vIEEgdmFsaWQgdHlwZWFoZWFkIHZhbHVlXG4gICAgICBzZWxlY3Rpb246IHRoaXMucHJvcHMudmFsdWUsXG5cbiAgICAgIC8vIEluZGV4IG9mIHRoZSBzZWxlY3Rpb25cbiAgICAgIHNlbGVjdGlvbkluZGV4OiBudWxsLFxuXG4gICAgICAvLyBLZWVwIHRyYWNrIG9mIHRoZSBmb2N1cyBzdGF0ZSBvZiB0aGUgaW5wdXQgZWxlbWVudCwgdG8gZGV0ZXJtaW5lXG4gICAgICAvLyB3aGV0aGVyIHRvIHNob3cgb3B0aW9ucyB3aGVuIGVtcHR5IChpZiBzaG93T3B0aW9uc1doZW5FbXB0eSBpcyB0cnVlKVxuICAgICAgaXNGb2N1c2VkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFJlc3VsdHM6IHRoaXMuZ2V0T3B0aW9uc0ZvclZhbHVlKCcnLCB0aGlzLnByb3BzLm9wdGlvbnMpXG4gICAgfSk7XG5cbiAgICAvLyBjYWxsIGZvY3VzIG9uIGVudHJ5IG9yIGRpdiB0byB0cmlnZ2VyIGtleSBldmVudHMgbGlzdGVuZXJcbiAgICBpZiAodGhpcy5lbnRyeSkge1xuICAgICAgdGhpcy5lbnRyeS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvb3QuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSB0aGlzLmdldE9wdGlvbnNGb3JWYWx1ZShcbiAgICAgIHRoaXMuc3RhdGUuZW50cnlWYWx1ZSxcbiAgICAgIG5leHRQcm9wcy5vcHRpb25zXG4gICAgKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFJlc3VsdHN9KTtcbiAgfVxuXG4gIF9zaG91bGRTa2lwU2VhcmNoKGlucHV0KSB7XG4gICAgY29uc3QgZW1wdHlWYWx1ZSA9ICFpbnB1dCB8fCBpbnB1dC50cmltKCkubGVuZ3RoID09PSAwO1xuXG4gICAgLy8gdGhpcy5zdGF0ZSBtdXN0IGJlIGNoZWNrZWQgYmVjYXVzZSBpdCBtYXkgbm90IGJlIGRlZmluZWQgeWV0IGlmIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBpcyBjYWxsZWQgZnJvbSB3aXRoaW4gZ2V0SW5pdGlhbFN0YXRlXG4gICAgY29uc3QgaXNGb2N1c2VkID0gdGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlLmlzRm9jdXNlZDtcbiAgICByZXR1cm4gISh0aGlzLnByb3BzLnNob3dPcHRpb25zV2hlbkVtcHR5ICYmIGlzRm9jdXNlZCkgJiYgZW1wdHlWYWx1ZTtcbiAgfVxuXG4gIGdldE9wdGlvbnNGb3JWYWx1ZSh2YWx1ZSwgb3B0aW9ucykge1xuICAgIGlmICghdGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG4gICAgICAvLyBkaXJlY3RseSBwYXNzIHRocm91Z2ggb3B0aW9ucyBpZiBjYW4gbm90IGJlIHNlYXJjaGVkXG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMuX3Nob3VsZFNraXBTZWFyY2godmFsdWUpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBjb25zdCBzZWFyY2hPcHRpb25zID0gdGhpcy5fZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbigpO1xuICAgIHJldHVybiBzZWFyY2hPcHRpb25zKHZhbHVlLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZvY3VzKCkge1xuICAgIGlmICh0aGlzLmVudHJ5KSB7XG4gICAgICB0aGlzLmVudHJ5LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgX2hhc0N1c3RvbVZhbHVlKCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb3BzLmFsbG93Q3VzdG9tVmFsdWVzID4gMCAmJlxuICAgICAgdGhpcy5zdGF0ZS5lbnRyeVZhbHVlLmxlbmd0aCA+PSB0aGlzLnByb3BzLmFsbG93Q3VzdG9tVmFsdWVzICYmXG4gICAgICB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMuaW5kZXhPZih0aGlzLnN0YXRlLmVudHJ5VmFsdWUpIDwgMFxuICAgICk7XG4gIH1cblxuICBfZ2V0Q3VzdG9tVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkgPyB0aGlzLnN0YXRlLmVudHJ5VmFsdWUgOiBudWxsO1xuICB9XG5cbiAgX3JlbmRlckluY3JlbWVudGFsU2VhcmNoUmVzdWx0cygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRoaXMucHJvcHMuY3VzdG9tTGlzdENvbXBvbmVudFxuICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuZml4ZWRPcHRpb25zfVxuICAgICAgICBvcHRpb25zPXtcbiAgICAgICAgICB0aGlzLnByb3BzLm1heFZpc2libGVcbiAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4VmlzaWJsZSlcbiAgICAgICAgICAgIDogdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzXG4gICAgICAgIH1cbiAgICAgICAgYXJlUmVzdWx0c1RydW5jYXRlZD17XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXhWaXNpYmxlICYmXG4gICAgICAgICAgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA+IHRoaXMucHJvcHMubWF4VmlzaWJsZVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlPXt0aGlzLnByb3BzLnJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlfVxuICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXt0aGlzLl9vbk9wdGlvblNlbGVjdGVkfVxuICAgICAgICBhbGxvd0N1c3RvbVZhbHVlcz17dGhpcy5wcm9wcy5hbGxvd0N1c3RvbVZhbHVlc31cbiAgICAgICAgY3VzdG9tVmFsdWU9e3RoaXMuX2dldEN1c3RvbVZhbHVlKCl9XG4gICAgICAgIGN1c3RvbUNsYXNzZXM9e3RoaXMucHJvcHMuY3VzdG9tQ2xhc3Nlc31cbiAgICAgICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ9e3RoaXMucHJvcHMuY3VzdG9tTGlzdEl0ZW1Db21wb25lbnR9XG4gICAgICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ9e3RoaXMucHJvcHMuY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudH1cbiAgICAgICAgc2VsZWN0aW9uSW5kZXg9e3RoaXMuc3RhdGUuc2VsZWN0aW9uSW5kZXh9XG4gICAgICAgIGRlZmF1bHRDbGFzc05hbWVzPXt0aGlzLnByb3BzLmRlZmF1bHRDbGFzc05hbWVzfVxuICAgICAgICBkaXNwbGF5T3B0aW9uPXt0aGlzLnByb3BzLmRpc3BsYXlPcHRpb259XG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e3RoaXMucHJvcHMuc2VsZWN0ZWRJdGVtc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4O1xuXG4gICAgaWYgKHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5lbnRyeVZhbHVlO1xuICAgICAgfVxuICAgICAgaW5kZXgtLTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc0ZpeGVkT3B0aW9ucygpKSB7XG4gICAgICByZXR1cm4gaW5kZXggPCB0aGlzLnByb3BzLmZpeGVkT3B0aW9ucy5sZW5ndGhcbiAgICAgICAgPyB0aGlzLnByb3BzLmZpeGVkT3B0aW9uc1tpbmRleF1cbiAgICAgICAgOiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHNbaW5kZXggLSB0aGlzLnByb3BzLmZpeGVkT3B0aW9ucy5sZW5ndGhdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzW2luZGV4XTtcbiAgfVxuXG4gIF9vbk9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG4gICAgICAvLyByZXNldCBlbnRyeSBpbnB1dFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IHRoaXMuZ2V0T3B0aW9uc0ZvclZhbHVlKCcnLCB0aGlzLnByb3BzLm9wdGlvbnMpLFxuICAgICAgICBzZWxlY3Rpb246ICcnLFxuICAgICAgICBlbnRyeVZhbHVlOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZChvcHRpb24sIGV2ZW50KTtcbiAgfTtcblxuICAvLyB1c2UgKCkgPT4ge30gdG8gYXZvaWQgYmluZGluZyAndGhpcydcbiAgX29uVGV4dEVudHJ5VXBkYXRlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZW50cnkudmFsdWU7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hSZXN1bHRzOiB0aGlzLmdldE9wdGlvbnNGb3JWYWx1ZSh2YWx1ZSwgdGhpcy5wcm9wcy5vcHRpb25zKSxcbiAgICAgICAgc2VsZWN0aW9uOiAnJyxcbiAgICAgICAgZW50cnlWYWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfb25FbnRlciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fb25PcHRpb25TZWxlY3RlZChzZWxlY3Rpb24sIGV2ZW50KTtcbiAgfTtcblxuICBfb25Fc2NhcGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3Rpb25JbmRleDogbnVsbFxuICAgIH0pO1xuICB9XG5cbiAgX29uVGFiKGV2ZW50KSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gdGhpcy5nZXRTZWxlY3Rpb24oKTtcbiAgICBsZXQgb3B0aW9uID0gc2VsZWN0aW9uXG4gICAgICA/IHNlbGVjdGlvblxuICAgICAgOiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMFxuICAgICAgICA/IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c1swXVxuICAgICAgICA6IG51bGw7XG5cbiAgICBpZiAob3B0aW9uID09PSBudWxsICYmIHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkpIHtcbiAgICAgIG9wdGlvbiA9IHRoaXMuX2dldEN1c3RvbVZhbHVlKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29uT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZXZlbnRNYXAoZXZlbnQpIHtcbiAgICBjb25zdCBldmVudHMgPSB7fTtcblxuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfVVBdID0gdGhpcy5uYXZVcDtcbiAgICBldmVudHNbS2V5RXZlbnQuRE9NX1ZLX0RPV05dID0gdGhpcy5uYXZEb3duO1xuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfUkVUVVJOXSA9IGV2ZW50c1tcbiAgICAgIEtleUV2ZW50LkRPTV9WS19FTlRFUlxuICAgIF0gPSB0aGlzLl9vbkVudGVyO1xuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfRVNDQVBFXSA9IHRoaXMuX29uRXNjYXBlO1xuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfVEFCXSA9IHRoaXMuX29uVGFiO1xuXG4gICAgcmV0dXJuIGV2ZW50cztcbiAgfVxuXG4gIF9uYXYoZGVsdGEpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0hpbnQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbmV3SW5kZXggPVxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleCA9PT0gbnVsbFxuICAgICAgICA/IGRlbHRhID09PSAxID8gMCA6IGRlbHRhXG4gICAgICAgIDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleCArIGRlbHRhO1xuICAgIGxldCBsZW5ndGggPSB0aGlzLnByb3BzLm1heFZpc2libGVcbiAgICAgID8gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4VmlzaWJsZSkubGVuZ3RoXG4gICAgICA6IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkpIHtcbiAgICAgIGxlbmd0aCArPSAxO1xuICAgIH1cblxuICAgIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ICs9IGxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID49IGxlbmd0aCkge1xuICAgICAgbmV3SW5kZXggLT0gbGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGlvbkluZGV4OiBuZXdJbmRleH0pO1xuICB9XG5cbiAgbmF2RG93biA9ICgpID0+IHtcbiAgICB0aGlzLl9uYXYoMSk7XG4gIH07XG5cbiAgbmF2VXAgPSAoKSA9PiB7XG4gICAgdGhpcy5fbmF2KC0xKTtcbiAgfTtcblxuICBfb25DaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29uVGV4dEVudHJ5VXBkYXRlZCgpO1xuICB9O1xuXG4gIF9vbktleURvd24gPSBldmVudCA9PiB7XG4gICAgLy8gSWYgdGhlcmUgYXJlIG5vIHZpc2libGUgZWxlbWVudHMsIGRvbid0IHBlcmZvcm0gc2VsZWN0b3IgbmF2aWdhdGlvbi5cbiAgICAvLyBKdXN0IHBhc3MgdGhpcyB1cCB0byB0aGUgdXBzdHJlYW0gb25LZXlkb3duIGhhbmRsZXIuXG4gICAgLy8gQWxzbyBza2lwIGlmIHRoZSB1c2VyIGlzIHByZXNzaW5nIHRoZSBzaGlmdCBrZXksIHNpbmNlIG5vbmUgb2Ygb3VyIGhhbmRsZXJzIGFyZSBsb29raW5nIGZvciBzaGlmdFxuICAgIGlmICghdGhpcy5faGFzSGludCgpIHx8IGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZXIgPSB0aGlzLmV2ZW50TWFwKClbZXZlbnQua2V5Q29kZV07XG5cbiAgICBpZiAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XG4gICAgfVxuICAgIC8vIERvbid0IHByb3BhZ2F0ZSB0aGUga2V5c3Ryb2tlIGJhY2sgdG8gdGhlIERPTS9icm93c2VyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBfb25Gb2N1cyA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6IHRydWV9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgX29uQmx1ciA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6IGZhbHNlfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBfcmVuZGVySGlkZGVuSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgIG5hbWU9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0aW9ufVxuICAgICAgLz5cbiAgICApO1xuICB9XG5cbiAgX2dlbmVyYXRlU2VhcmNoRnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VhcmNoT3B0aW9uc1Byb3AgPSB0aGlzLnByb3BzLnNlYXJjaE9wdGlvbnM7XG4gICAgY29uc3QgZmlsdGVyT3B0aW9uUHJvcCA9IHRoaXMucHJvcHMuZmlsdGVyT3B0aW9uO1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoT3B0aW9uc1Byb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChmaWx0ZXJPcHRpb25Qcm9wICE9PSBudWxsKSB7XG4gICAgICAgIENvbnNvbGUud2FybihcbiAgICAgICAgICAnc2VhcmNoT3B0aW9ucyBwcm9wIGlzIGJlaW5nIHVzZWQsIGZpbHRlck9wdGlvbiBwcm9wIHdpbGwgYmUgaWdub3JlZCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZWFyY2hPcHRpb25zUHJvcDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb25Qcm9wID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyB1c2UgY3VzdG9tIGZpbHRlciBvcHRpb25cbiAgICAgIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+XG4gICAgICAgIG9wdGlvbnMuZmlsdGVyKG8gPT4gZmlsdGVyT3B0aW9uUHJvcCh2YWx1ZSwgbykpO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcHBlciA9XG4gICAgICB0eXBlb2YgZmlsdGVyT3B0aW9uUHJvcCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBBY2Nlc3Nvci5nZW5lcmF0ZUFjY2Vzc29yKGZpbHRlck9wdGlvblByb3ApXG4gICAgICAgIDogQWNjZXNzb3IuSURFTlRJVFlfRk47XG5cbiAgICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PlxuICAgICAgZnV6enlcbiAgICAgICAgLmZpbHRlcih2YWx1ZSwgb3B0aW9ucywge2V4dHJhY3Q6IG1hcHBlcn0pXG4gICAgICAgIC5tYXAocmVzID0+IG9wdGlvbnNbcmVzLmluZGV4XSk7XG4gIH1cblxuICBfaGFzSGludCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDAgfHwgdGhpcy5faGFzQ3VzdG9tVmFsdWUoKTtcbiAgfVxuXG4gIF9oYXNGaXhlZE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy5maXhlZE9wdGlvbnMpICYmIHRoaXMucHJvcHMuZml4ZWRPcHRpb25zLmxlbmd0aFxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRDbGFzc2VzID0ge307XG4gICAgaW5wdXRDbGFzc2VzW3RoaXMucHJvcHMuY3VzdG9tQ2xhc3Nlcy5pbnB1dF0gPSBCb29sZWFuKFxuICAgICAgdGhpcy5wcm9wcy5jdXN0b21DbGFzc2VzLmlucHV0XG4gICAgKTtcbiAgICBjb25zdCBpbnB1dENsYXNzTGlzdCA9IGNsYXNzTmFtZXMoaW5wdXRDbGFzc2VzKTtcblxuICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICBbREVGQVVMVF9DTEFTU106IHRoaXMucHJvcHMuZGVmYXVsdENsYXNzTmFtZXNcbiAgICB9O1xuICAgIGNsYXNzZXNbdGhpcy5wcm9wcy5jbGFzc05hbWVdID0gQm9vbGVhbih0aGlzLnByb3BzLmNsYXNzTmFtZSk7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gY2xhc3NOYW1lcyhjbGFzc2VzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8VHlwZWFoZWFkV3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTGlzdH1cbiAgICAgICAgcmVmPXtjb21wID0+IHtcbiAgICAgICAgICB0aGlzLnJvb3QgPSBjb21wO1xuICAgICAgICB9fVxuICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICBvbktleURvd249e3RoaXMuX29uS2V5RG93bn1cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5wcm9wcy5vbktleVByZXNzfVxuICAgICAgICBvbktleVVwPXt0aGlzLnByb3BzLm9uS2V5VXB9XG4gICAgICAgIG9uRm9jdXM9e3RoaXMuX29uRm9jdXN9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLl9yZW5kZXJIaWRkZW5JbnB1dCgpfVxuICAgICAgICB7dGhpcy5wcm9wcy5zZWFyY2hhYmxlID8gKFxuICAgICAgICA8SW5wdXRCb3g+XG4gICAgICAgICAgPFR5cGVhaGVhZElucHV0XG4gICAgICAgICAgICByZWY9e2NvbXAgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmVudHJ5ID0gY29tcDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmlucHV0UHJvcHN9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc0xpc3R9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbnRyeVZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlfVxuICAgICAgICAgICAgb25CbHVyPXt0aGlzLl9vbkJsdXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRJY29uPlxuICAgICAgICAgICAgPFNlYXJjaCBoZWlnaHQ9XCIxOHB4XCIvPlxuICAgICAgICAgIDwvSW5wdXRJY29uPlxuICAgICAgICA8L0lucHV0Qm94PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge3RoaXMuX3JlbmRlckluY3JlbWVudGFsU2VhcmNoUmVzdWx0cygpfVxuICAgICAgPC9UeXBlYWhlYWRXcmFwcGVyPlxuICAgICk7XG4gIH1cbn07XG4iXX0=