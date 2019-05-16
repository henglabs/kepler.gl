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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reselect = require("reselect");

var styled = _interopRequireWildcard(require("styled-components"));

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _icons = require("../../common/icons");

var _sourceDataSelector = _interopRequireDefault(require("../source-data-selector"));

var _styledComponents2 = require("../../common/styled-components");

var Filters = _interopRequireWildcard(require("../../filters"));

var _filterUtils = require("../../../utils/filter-utils");

var _defaultSettings = require("../../../constants/default-settings");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  padding: 10px 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n  border-radius: 1px;\n\n  .filter-panel__filter {\n    margin-top: 24px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledFilterPanel = styled.div(_templateObject());
var StyledFilterHeader = styled(_styledComponents2.StyledPanelHeader)(_templateObject2());
var StyledFilterContent = styled.div(_templateObject3(), function (props) {
  return props.theme.panelBackground;
});

function FilterPanelFactory() {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(FilterPanel, _Component);

    function FilterPanel() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, FilterPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FilterPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
        return props.filter.dataId && props.datasets[props.filter.dataId].fields || [];
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "nameSelector", function (props) {
        return props.filter.name;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataIdSelector", function (props) {
        return props.filter.dataId;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableFieldsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.filterSelector, _this.nameSelector, _this.dataIdSelector, function (fields, filters, name, dataId) {
        return fields.filter(function (f) {
          return f.type && f.type !== _defaultSettings.ALL_FIELD_TYPES.geojson && (f.name === name || !filters.find(function (d) {
            return d.name === f.name && d.dataId === dataId;
          }));
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(FilterPanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            datasets = _this$props.datasets,
            enlargeFilter = _this$props.enlargeFilter,
            filter = _this$props.filter,
            idx = _this$props.idx,
            isAnyFilterAnimating = _this$props.isAnyFilterAnimating,
            removeFilter = _this$props.removeFilter,
            _setFilter = _this$props.setFilter,
            toggleAnimation = _this$props.toggleAnimation;
        var name = filter.name,
            enlarged = filter.enlarged,
            type = filter.type,
            dataId = filter.dataId;
        var FilterComponent = type && Filters[_filterUtils.FILTER_COMPONENTS[type]];
        var allAvailableFields = this.availableFieldsSelector(this.props);
        return _react["default"].createElement(StyledFilterPanel, {
          className: "filter-panel"
        }, _react["default"].createElement(StyledFilterHeader, {
          className: "filter-panel__header",
          labelRCGColorValues: datasets[dataId].color
        }, _react["default"].createElement("div", {
          style: {
            flexGrow: 1
          }
        }, _react["default"].createElement(_fieldSelector["default"], {
          inputTheme: "secondary",
          fields: allAvailableFields,
          value: name,
          erasable: false,
          onSelect: function onSelect(value) {
            return _setFilter(idx, 'name', value.name);
          }
        })), _react["default"].createElement(_panelHeaderAction["default"], {
          id: filter.id,
          tooltip: "delete",
          tooltipType: "error",
          onClick: removeFilter,
          hoverColor: 'errorColor',
          IconComponent: _icons.Trash
        }), type === _filterUtils.FILTER_TYPES.timeRange && _react["default"].createElement(_panelHeaderAction["default"], {
          id: filter.id,
          onClick: enlargeFilter,
          tooltip: "Time Playback",
          IconComponent: _icons.Clock,
          active: enlarged
        })), _react["default"].createElement(StyledFilterContent, {
          className: "filter-panel__content"
        }, Object.keys(datasets).length > 1 && _react["default"].createElement(_sourceDataSelector["default"], {
          inputTheme: "secondary",
          datasets: datasets,
          disabled: filter.freeze,
          dataId: filter.dataId,
          onSelect: function onSelect(value) {
            return _setFilter(idx, 'dataId', value);
          }
        }), type && !enlarged && _react["default"].createElement("div", {
          className: "filter-panel__filter"
        }, _react["default"].createElement(FilterComponent, {
          filter: filter,
          idx: idx,
          isAnyFilterAnimating: isAnyFilterAnimating,
          toggleAnimation: toggleAnimation,
          setFilter: function setFilter(value) {
            return _setFilter(idx, 'value', value);
          }
        }))));
      }
    }]);
    return FilterPanel;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "propTypes", {
    idx: _propTypes["default"].number,
    filters: _propTypes["default"].arrayOf(_propTypes["default"].any).isRequired,
    filter: _propTypes["default"].object.isRequired,
    setFilter: _propTypes["default"].func.isRequired,
    removeFilter: _propTypes["default"].func.isRequired,
    enlargeFilter: _propTypes["default"].func.isRequired,
    toggleAnimation: _propTypes["default"].func.isRequired,
    datasets: _propTypes["default"].object,
    showDatasetTable: _propTypes["default"].func,
    isAnyFilterAnimating: _propTypes["default"].bool
  }), _temp;
}

var _default = FilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRGaWx0ZXJQYW5lbCIsInN0eWxlZCIsImRpdiIsIlN0eWxlZEZpbHRlckhlYWRlciIsIlN0eWxlZFBhbmVsSGVhZGVyIiwiU3R5bGVkRmlsdGVyQ29udGVudCIsInByb3BzIiwidGhlbWUiLCJwYW5lbEJhY2tncm91bmQiLCJGaWx0ZXJQYW5lbEZhY3RvcnkiLCJmaWx0ZXIiLCJkYXRhSWQiLCJkYXRhc2V0cyIsImZpZWxkcyIsImZpbHRlcnMiLCJuYW1lIiwiZmllbGRzU2VsZWN0b3IiLCJmaWx0ZXJTZWxlY3RvciIsIm5hbWVTZWxlY3RvciIsImRhdGFJZFNlbGVjdG9yIiwiZiIsInR5cGUiLCJBTExfRklFTERfVFlQRVMiLCJnZW9qc29uIiwiZmluZCIsImQiLCJlbmxhcmdlRmlsdGVyIiwiaWR4IiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVBbmltYXRpb24iLCJlbmxhcmdlZCIsIkZpbHRlckNvbXBvbmVudCIsIkZpbHRlcnMiLCJGSUxURVJfQ09NUE9ORU5UUyIsImFsbEF2YWlsYWJsZUZpZWxkcyIsImF2YWlsYWJsZUZpZWxkc1NlbGVjdG9yIiwiY29sb3IiLCJmbGV4R3JvdyIsInZhbHVlIiwiaWQiLCJUcmFzaCIsIkZJTFRFUl9UWVBFUyIsInRpbWVSYW5nZSIsIkNsb2NrIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImZyZWV6ZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZnVuYyIsInNob3dEYXRhc2V0VGFibGUiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7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TFo7QUFNakI3QixJQUFBQSxhQUFhLEVBQUV5QixzQkFBVU0sSUFBVixDQUFlRixVQU5iO0FBT2pCeEIsSUFBQUEsZUFBZSxFQUFFb0Isc0JBQVVNLElBQVYsQ0FBZUYsVUFQZjtBQVFqQjNDLElBQUFBLFFBQVEsRUFBRXVDLHNCQUFVSyxNQVJIO0FBU2pCRSxJQUFBQSxnQkFBZ0IsRUFBRVAsc0JBQVVNLElBVFg7QUFVakI3QixJQUFBQSxvQkFBb0IsRUFBRXVCLHNCQUFVUTtBQVZmLEdBRHJCO0FBOEdEOztlQUVjbEQsa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBhbmVsSGVhZGVyQWN0aW9uIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCB7VHJhc2gsIENsb2NrfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgU291cmNlRGF0YVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvc2lkZS1wYW5lbC9zb3VyY2UtZGF0YS1zZWxlY3Rvcic7XG5pbXBvcnQge1N0eWxlZFBhbmVsSGVhZGVyfSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBGaWx0ZXJzIGZyb20gJ2NvbXBvbmVudHMvZmlsdGVycyc7XG5cbmltcG9ydCB7RklMVEVSX1RZUEVTLCBGSUxURVJfQ09NUE9ORU5UU30gZnJvbSAndXRpbHMvZmlsdGVyLXV0aWxzJztcbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IFN0eWxlZEZpbHRlclBhbmVsID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuXG4gIC5maWx0ZXItcGFuZWxfX2ZpbHRlciB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRmlsdGVySGVhZGVyID0gc3R5bGVkKFN0eWxlZFBhbmVsSGVhZGVyKWBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG5gO1xuXG5jb25zdCBTdHlsZWRGaWx0ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICBwYWRkaW5nOiAxMnB4O1xuYDtcblxuZnVuY3Rpb24gRmlsdGVyUGFuZWxGYWN0b3J5KCkge1xuICByZXR1cm4gY2xhc3MgRmlsdGVyUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICBpZHg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuYW55KS5pc1JlcXVpcmVkLFxuICAgICAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBzZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICByZW1vdmVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICBlbmxhcmdlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgdG9nZ2xlQW5pbWF0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBzaG93RGF0YXNldFRhYmxlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICAvKiBzZWxlY3RvcnMgKi9cbiAgICBmaWVsZHNTZWxlY3RvciA9IHByb3BzID0+XG4gICAgICAocHJvcHMuZmlsdGVyLmRhdGFJZCAmJiBwcm9wcy5kYXRhc2V0c1twcm9wcy5maWx0ZXIuZGF0YUlkXS5maWVsZHMpIHx8IFtdO1xuICAgIGZpbHRlclNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVycztcbiAgICBuYW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5maWx0ZXIubmFtZTtcbiAgICBkYXRhSWRTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpbHRlci5kYXRhSWQ7XG5cbiAgICAvLyBvbmx5IHNob3cgY3VycmVudCBmaWVsZCBhbmQgZmllbGQgdGhhdCdzIG5vdCBhbHJlYWR5IGJlZW4gdXNlZCBhcyBhIGZpbHRlclxuICAgIGF2YWlsYWJsZUZpZWxkc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmZpZWxkc1NlbGVjdG9yLFxuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RvcixcbiAgICAgIHRoaXMubmFtZVNlbGVjdG9yLFxuICAgICAgdGhpcy5kYXRhSWRTZWxlY3RvcixcbiAgICAgIChmaWVsZHMsIGZpbHRlcnMsIG5hbWUsIGRhdGFJZCkgPT5cbiAgICAgICAgZmllbGRzLmZpbHRlcihcbiAgICAgICAgICBmID0+XG4gICAgICAgICAgICBmLnR5cGUgJiZcbiAgICAgICAgICAgIGYudHlwZSAhPT0gQUxMX0ZJRUxEX1RZUEVTLmdlb2pzb24gJiZcbiAgICAgICAgICAgIChmLm5hbWUgPT09IG5hbWUgfHxcbiAgICAgICAgICAgICAgIWZpbHRlcnMuZmluZChkID0+IGQubmFtZSA9PT0gZi5uYW1lICYmIGQuZGF0YUlkID09PSBkYXRhSWQpKVxuICAgICAgICApXG4gICAgKTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGVubGFyZ2VGaWx0ZXIsXG4gICAgICAgIGZpbHRlcixcbiAgICAgICAgaWR4LFxuICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZyxcbiAgICAgICAgcmVtb3ZlRmlsdGVyLFxuICAgICAgICBzZXRGaWx0ZXIsXG4gICAgICAgIHRvZ2dsZUFuaW1hdGlvblxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7bmFtZSwgZW5sYXJnZWQsIHR5cGUsIGRhdGFJZH0gPSBmaWx0ZXI7XG4gICAgICBjb25zdCBGaWx0ZXJDb21wb25lbnQgPSB0eXBlICYmIEZpbHRlcnNbRklMVEVSX0NPTVBPTkVOVFNbdHlwZV1dO1xuICAgICAgY29uc3QgYWxsQXZhaWxhYmxlRmllbGRzID0gdGhpcy5hdmFpbGFibGVGaWVsZHNTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZEZpbHRlclBhbmVsIGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbFwiPlxuICAgICAgICAgIDxTdHlsZWRGaWx0ZXJIZWFkZXIgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19oZWFkZXJcIlxuICAgICAgICAgICAgbGFiZWxSQ0dDb2xvclZhbHVlcz17ZGF0YXNldHNbZGF0YUlkXS5jb2xvcn0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleEdyb3c6IDF9fT5cbiAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBmaWVsZHM9e2FsbEF2YWlsYWJsZUZpZWxkc31cbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICBlcmFzYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e3ZhbHVlID0+IHNldEZpbHRlcihpZHgsICduYW1lJywgdmFsdWUubmFtZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICBpZD17ZmlsdGVyLmlkfVxuICAgICAgICAgICAgICB0b29sdGlwPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgdG9vbHRpcFR5cGU9XCJlcnJvclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3JlbW92ZUZpbHRlcn1cbiAgICAgICAgICAgICAgaG92ZXJDb2xvcj17J2Vycm9yQ29sb3InfVxuICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtUcmFzaH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dHlwZSA9PT0gRklMVEVSX1RZUEVTLnRpbWVSYW5nZSAmJiAoXG4gICAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICAgIGlkPXtmaWx0ZXIuaWR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17ZW5sYXJnZUZpbHRlcn1cbiAgICAgICAgICAgICAgICB0b29sdGlwPVwiVGltZSBQbGF5YmFja1wiXG4gICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17Q2xvY2t9XG4gICAgICAgICAgICAgICAgYWN0aXZlPXtlbmxhcmdlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9TdHlsZWRGaWx0ZXJIZWFkZXI+XG4gICAgICAgICAgPFN0eWxlZEZpbHRlckNvbnRlbnQgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICAgICAgICA8U291cmNlRGF0YVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgaW5wdXRUaGVtZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmaWx0ZXIuZnJlZXplfVxuICAgICAgICAgICAgICAgIGRhdGFJZD17ZmlsdGVyLmRhdGFJZH1cbiAgICAgICAgICAgICAgICBvblNlbGVjdD17dmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ2RhdGFJZCcsIHZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7dHlwZSAmJlxuICAgICAgICAgICAgIWVubGFyZ2VkICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxfX2ZpbHRlclwiPlxuICAgICAgICAgICAgICAgIDxGaWx0ZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgICAgICAgICAgICB0b2dnbGVBbmltYXRpb249e3RvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgICAgICAgIHNldEZpbHRlcj17dmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ3ZhbHVlJywgdmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N0eWxlZEZpbHRlckNvbnRlbnQ+XG4gICAgICAgIDwvU3R5bGVkRmlsdGVyUGFuZWw+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJQYW5lbEZhY3Rvcnk7XG4iXX0=