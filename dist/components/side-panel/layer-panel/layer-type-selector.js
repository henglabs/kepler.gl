"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var styled = _interopRequireWildcard(require("styled-components"));

var _dropdownList = require("../../common/item-selector/dropdown-list");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _defaultSettings = require("../../../constants/default-settings");

var _styledComponents2 = require("../../common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  // override item-selector dropdown padding\n  .item-selector .item-selector__dropdown {\n    padding: 4px 10px 4px 2px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: 12px 0 0 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.list {\n    display: flex;\n    align-items: center;\n\n    .layer-type-selector__item__icon {\n      color: ", ";\n      background-size: ", "px ", "px;\n      margin-right: 12px;\n    }\n  }\n\n  .layer-type-selector__item__icon {\n    color: ", ";\n    display: flex;\n    background-image: url(", ");\n    background-size: ", "px ", "px;\n  }\n\n  .layer-type-selector__item__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n  padding-right: 12px;\n\n  &.selected {\n    .layer-type-selector__item__icon {\n      border: 1px solid #caf2f4;\n    }\n  }\n\n  :hover,\n  &.selected {\n    cursor: pointer;\n    .layer-type-selector__item__icon {\n      color: ", ";\n    }\n\n    .layer-type-selector__item__label {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ITEM_SIZE = {
  large: 60,
  small: 28
};
var StyledDropdownListItem = styled.div(_templateObject(), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.textColor;
});
var StyledListItem = styled.div(_templateObject2(), function (props) {
  return props.theme.activeColor;
}, ITEM_SIZE.small, ITEM_SIZE.small, function (props) {
  return props.theme.labelColor;
}, "".concat(_defaultSettings.CLOUDFRONT, "/kepler.gl-layer-icon-bg.png"), ITEM_SIZE.large, ITEM_SIZE.large, function (props) {
  return props.theme.labelColor;
});
var DropdownListWrapper = styled.div(_templateObject3(), function (props) {
  return props.theme.dropdownList;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
});

var LayerTypeListItem = function LayerTypeListItem(_ref) {
  var value = _ref.value,
      isTile = _ref.isTile;
  return _react["default"].createElement(StyledListItem, {
    className: (0, _classnames["default"])('layer-type-selector__item__inner', {
      list: !isTile
    })
  }, _react["default"].createElement("div", {
    className: "layer-type-selector__item__icon"
  }, _react["default"].createElement(value.icon, {
    height: "".concat(isTile ? ITEM_SIZE.large : ITEM_SIZE.small, "px")
  })), _react["default"].createElement("div", {
    className: "layer-type-selector__item__label"
  }, value.label));
};

var LayerTypeDropdownList = function LayerTypeDropdownList(props) {
  return _react["default"].createElement(DropdownListWrapper, {
    className: _dropdownList.classList.list
  }, props.options.map(function (value, i) {
    return _react["default"].createElement(StyledDropdownListItem, {
      className: (0, _classnames["default"])('layer-type-selector__item', {
        selected: props.selectedItems.find(function (it) {
          return it.id === value.id;
        }),
        hover: props.selectionIndex === i
      }),
      key: "".concat(value.id, "_").concat(i),
      onMouseDown: function onMouseDown(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      },
      onClick: function onClick(e) {
        e.preventDefault();
        props.onOptionSelected(value, e);
      }
    }, _react["default"].createElement(props.customListItemComponent, {
      value: value,
      isTile: true
    }));
  }));
};

var propTypes = {
  layer: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func.isRequired
};
var StyledLayerTypeSelector = styled.div(_templateObject4());

var LayerTypeSelector = function LayerTypeSelector(_ref2) {
  var layer = _ref2.layer,
      layerTypeOptions = _ref2.layerTypeOptions,
      onSelect = _ref2.onSelect;
  return _react["default"].createElement(_styledComponents2.SidePanelSection, null, _react["default"].createElement(StyledLayerTypeSelector, {
    className: "layer-config__type"
  }, _react["default"].createElement(_itemSelector["default"], {
    selectedItems: layerTypeOptions.find(function (op) {
      return op.id === layer.type;
    }),
    options: layerTypeOptions,
    multiSelect: false,
    placeholder: "Select A Type",
    onChange: onSelect,
    getOptionValue: function getOptionValue(op) {
      return op.id;
    },
    filterOption: "label",
    displayOption: function displayOption(op) {
      return op.label;
    },
    DropDownLineItemRenderComponent: LayerTypeListItem,
    DropDownRenderComponent: LayerTypeDropdownList
  })));
};

LayerTypeSelector.propTypes = propTypes;
var _default = LayerTypeSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvbGF5ZXItcGFuZWwvbGF5ZXItdHlwZS1zZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJJVEVNX1NJWkUiLCJsYXJnZSIsInNtYWxsIiwiU3R5bGVkRHJvcGRvd25MaXN0SXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsIlN0eWxlZExpc3RJdGVtIiwibGFiZWxDb2xvciIsIkNMT1VERlJPTlQiLCJEcm9wZG93bkxpc3RXcmFwcGVyIiwiZHJvcGRvd25MaXN0IiwiZHJvcGRvd25MaXN0QmdkIiwiZHJvcGRvd25MaXN0Qm9yZGVyVG9wIiwiTGF5ZXJUeXBlTGlzdEl0ZW0iLCJ2YWx1ZSIsImlzVGlsZSIsImxpc3QiLCJsYWJlbCIsIkxheWVyVHlwZURyb3Bkb3duTGlzdCIsImNsYXNzTGlzdCIsIm9wdGlvbnMiLCJtYXAiLCJpIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEl0ZW1zIiwiZmluZCIsIml0IiwiaWQiLCJob3ZlciIsInNlbGVjdGlvbkluZGV4IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25PcHRpb25TZWxlY3RlZCIsInByb3BUeXBlcyIsImxheWVyIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm9uU2VsZWN0IiwiZnVuYyIsIlN0eWxlZExheWVyVHlwZVNlbGVjdG9yIiwiTGF5ZXJUeXBlU2VsZWN0b3IiLCJsYXllclR5cGVPcHRpb25zIiwib3AiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUc7QUFDaEJDLEVBQUFBLEtBQUssRUFBRSxFQURTO0FBRWhCQyxFQUFBQSxLQUFLLEVBQUU7QUFGUyxD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LElBQUEsY0FBYyxFQUFFLHdCQUFBSyxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDaEIsRUFBUDtBQUFBLEtBTnBCO0FBT0UsSUFBQSxZQUFZLEVBQUMsT0FQZjtBQVFFLElBQUEsYUFBYSxFQUFFLHVCQUFBZ0IsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQzFCLEtBQVA7QUFBQSxLQVJuQjtBQVNFLElBQUEsK0JBQStCLEVBQUVKLGlCQVRuQztBQVVFLElBQUEsdUJBQXVCLEVBQUVLO0FBVjNCLElBREYsQ0FERixDQUR3QjtBQUFBLENBQTFCOztBQW1CQXVCLGlCQUFpQixDQUFDUixTQUFsQixHQUE4QkEsU0FBOUI7ZUFFZVEsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtjbGFzc0xpc3R9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge0NMT1VERlJPTlR9IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuaW1wb3J0IHtTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IElURU1fU0laRSA9IHtcbiAgbGFyZ2U6IDYwLFxuICBzbWFsbDogMjhcbn07XG5cbmNvbnN0IFN0eWxlZERyb3Bkb3duTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcblxuICAmLnNlbGVjdGVkIHtcbiAgICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvbiB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2FmMmY0O1xuICAgIH1cbiAgfVxuXG4gIDpob3ZlcixcbiAgJi5zZWxlY3RlZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yfTtcbiAgICB9XG5cbiAgICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9fbGFiZWwge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZExpc3RJdGVtID0gc3R5bGVkLmRpdmBcbiAgJi5saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbV9faWNvbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3RpdmVDb2xvcn07XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6ICR7SVRFTV9TSVpFLnNtYWxsfXB4ICR7SVRFTV9TSVpFLnNtYWxsfXB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Ake0NMT1VERlJPTlR9L2tlcGxlci5nbC1sYXllci1pY29uLWJnLnBuZ2B9KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICR7SVRFTV9TSVpFLmxhcmdlfXB4ICR7SVRFTV9TSVpFLmxhcmdlfXB4O1xuICB9XG5cbiAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2xhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBEcm9wZG93bkxpc3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3R9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJnZH07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJvcmRlclRvcH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEycHggMCAwIDEycHg7XG5gO1xuXG5jb25zdCBMYXllclR5cGVMaXN0SXRlbSA9ICh7dmFsdWUsIGlzVGlsZX0pID0+IChcbiAgPFN0eWxlZExpc3RJdGVtXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pbm5lcicsIHtsaXN0OiAhaXNUaWxlfSl9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb25cIj5cbiAgICAgIDx2YWx1ZS5pY29uXG4gICAgICAgIGhlaWdodD17YCR7aXNUaWxlID8gSVRFTV9TSVpFLmxhcmdlIDogSVRFTV9TSVpFLnNtYWxsfXB4YH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbFwiPnt2YWx1ZS5sYWJlbH08L2Rpdj5cbiAgPC9TdHlsZWRMaXN0SXRlbT5cbik7XG5cbmNvbnN0IExheWVyVHlwZURyb3Bkb3duTGlzdCA9IHByb3BzID0+IChcbiAgPERyb3Bkb3duTGlzdFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdH0+XG4gICAge3Byb3BzLm9wdGlvbnMubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgPFN0eWxlZERyb3Bkb3duTGlzdEl0ZW1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdsYXllci10eXBlLXNlbGVjdG9yX19pdGVtJywge1xuICAgICAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZEl0ZW1zLmZpbmQoaXQgPT4gaXQuaWQgPT09IHZhbHVlLmlkKSxcbiAgICAgICAgICBob3ZlcjogcHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGlcbiAgICAgICAgfSl9XG4gICAgICAgIGtleT17YCR7dmFsdWUuaWR9XyR7aX1gfVxuICAgICAgICBvbk1vdXNlRG93bj17ZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByb3BzLm9uT3B0aW9uU2VsZWN0ZWQodmFsdWUsIGUpO1xuICAgICAgICB9fVxuICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJvcHMub25PcHRpb25TZWxlY3RlZCh2YWx1ZSwgZSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxwcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudCB2YWx1ZT17dmFsdWV9IGlzVGlsZSAvPlxuICAgICAgPC9TdHlsZWREcm9wZG93bkxpc3RJdGVtPlxuICAgICkpfVxuICA8L0Ryb3Bkb3duTGlzdFdyYXBwZXI+XG4pO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGxheWVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBTdHlsZWRMYXllclR5cGVTZWxlY3RvciA9IHN0eWxlZC5kaXZgXG4gIC8vIG92ZXJyaWRlIGl0ZW0tc2VsZWN0b3IgZHJvcGRvd24gcGFkZGluZ1xuICAuaXRlbS1zZWxlY3RvciAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24ge1xuICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCAycHg7XG4gIH1cbmA7XG5jb25zdCBMYXllclR5cGVTZWxlY3RvciA9ICh7bGF5ZXIsIGxheWVyVHlwZU9wdGlvbnMsIG9uU2VsZWN0fSkgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8U3R5bGVkTGF5ZXJUeXBlU2VsZWN0b3IgY2xhc3NOYW1lPVwibGF5ZXItY29uZmlnX190eXBlXCI+XG4gICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e2xheWVyVHlwZU9wdGlvbnMuZmluZChvcCA9PiBvcC5pZCA9PT0gbGF5ZXIudHlwZSl9XG4gICAgICAgIG9wdGlvbnM9e2xheWVyVHlwZU9wdGlvbnN9XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgQSBUeXBlXCJcbiAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0fVxuICAgICAgICBnZXRPcHRpb25WYWx1ZT17b3AgPT4gb3AuaWR9XG4gICAgICAgIGZpbHRlck9wdGlvbj1cImxhYmVsXCJcbiAgICAgICAgZGlzcGxheU9wdGlvbj17b3AgPT4gb3AubGFiZWx9XG4gICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e0xheWVyVHlwZUxpc3RJdGVtfVxuICAgICAgICBEcm9wRG93blJlbmRlckNvbXBvbmVudD17TGF5ZXJUeXBlRHJvcGRvd25MaXN0fVxuICAgICAgLz5cbiAgICA8L1N0eWxlZExheWVyVHlwZVNlbGVjdG9yPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5MYXllclR5cGVTZWxlY3Rvci5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyVHlwZVNlbGVjdG9yO1xuIl19