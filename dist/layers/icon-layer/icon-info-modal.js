"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _d3Shape = require("d3-shape");

var _styledComponents2 = require("../../components/common/styled-components");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 20px;\n  letter-spacing: 1.25px;\n  margin: 18px 0 14px 0;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 6px;\n  width: 180px;\n  height: 48px;\n  margin-right: 12px;\n\n  .icon-table_item__name {\n    margin-left: 12px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var lineFunction = (0, _d3Shape.line)().x(function (d) {
  return d[0] * 10;
}).y(function (d) {
  return d[1] * 10;
});

var IconShape = function IconShape(_ref) {
  var mesh = _ref.mesh;
  return _react["default"].createElement("svg", {
    width: "20px",
    height: "20px"
  }, _react["default"].createElement("g", {
    transform: "translate(10, 10)"
  }, mesh.cells.map(function (cell, i) {
    return _react["default"].createElement("path", {
      key: i,
      fill: "#000000",
      d: lineFunction(cell.map(function (idx) {
        return mesh.positions[idx];
      }))
    });
  })));
};

var StyledIconItem = styled(_styledComponents2.CenterFlexbox)(_templateObject());
var StyledCode = styled.code(_templateObject2(), function (props) {
  return props.theme.titleColorLT;
});
var StyledTitle = styled.div(_templateObject3(), function (props) {
  return props.theme.titleColorLT;
});

var IconItem = function IconItem(_ref2) {
  var _ref2$icon = _ref2.icon,
      id = _ref2$icon.id,
      mesh = _ref2$icon.mesh;
  return _react["default"].createElement(StyledIconItem, {
    className: "icon-table__item"
  }, _react["default"].createElement(IconShape, {
    className: "icon-table__item__shape",
    mesh: mesh
  }), _react["default"].createElement("div", {
    className: "icon-table_item__name"
  }, _react["default"].createElement(StyledCode, null, id)));
};

var ExampleTable = function ExampleTable() {
  return _react["default"].createElement(_styledComponents2.Table, {
    className: "icon-example-table"
  }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, "point_lat"), _react["default"].createElement("th", null, "point_lng"), _react["default"].createElement("th", null, "icon"))), _react["default"].createElement("tbody", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.769897"), _react["default"].createElement("td", null, "-122.41168"), _react["default"].createElement("td", null, _react["default"].createElement(StyledCode, null, "android"))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.806928"), _react["default"].createElement("td", null, "-122.40218"), _react["default"].createElement("td", null)), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.778564"), _react["default"].createElement("td", null, "-122.39096"), _react["default"].createElement("td", null, _react["default"].createElement(StyledCode, null, "calendar"))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.745995"), _react["default"].createElement("td", null, "-122.30220"), _react["default"].createElement("td", null)), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "37.329841"), _react["default"].createElement("td", null, "-122.103847"), _react["default"].createElement("td", null, _react["default"].createElement(StyledCode, null, "control-off")))));
};

var IconTable = styled.div(_templateObject4());

var IconInfoModalFactory = function IconInfoModalFactory() {
  var svgIcons = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var IconInfoModal = function IconInfoModal() {
    return _react["default"].createElement("div", {
      className: "icon-info-modal"
    }, _react["default"].createElement("div", {
      className: "icon-info-modal__description"
    }, _react["default"].createElement("span", null, "In your csv, create a column, put the name of the icon you want to draw in it. You can leave the cell empty if you do not want the icon to show for some points. When the column is named", ' '), _react["default"].createElement("code", null, "icon"), _react["default"].createElement("span", null, " kepler.gl will automatically create a icon layer for you.")), _react["default"].createElement("div", {
      className: "icon-info-modal__example"
    }, _react["default"].createElement(StyledTitle, null, "Example:"), _react["default"].createElement(ExampleTable, null)), _react["default"].createElement("div", {
      className: "icon-info-modal__icons"
    }, _react["default"].createElement(StyledTitle, null, "Icons"), _react["default"].createElement(IconTable, {
      className: "icon-info-modal__icons__table"
    }, svgIcons.map(function (icon) {
      return _react["default"].createElement(IconItem, {
        key: icon.id,
        icon: icon
      });
    }))));
  };

  return IconInfoModal;
};

var _default = IconInfoModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXllcnMvaWNvbi1sYXllci9pY29uLWluZm8tbW9kYWwuanMiXSwibmFtZXMiOlsibGluZUZ1bmN0aW9uIiwieCIsImQiLCJ5IiwiSWNvblNoYXBlIiwibWVzaCIsImNlbGxzIiwibWFwIiwiY2VsbCIsImkiLCJpZHgiLCJwb3NpdGlvbnMiLCJTdHlsZWRJY29uSXRlbSIsInN0eWxlZCIsIkNlbnRlckZsZXhib3giLCJTdHlsZWRDb2RlIiwiY29kZSIsInByb3BzIiwidGhlbWUiLCJ0aXRsZUNvbG9yTFQiLCJTdHlsZWRUaXRsZSIsImRpdiIsIkljb25JdGVtIiwiaWNvbiIsImlkIiwiRXhhbXBsZVRhYmxlIiwiSWNvblRhYmxlIiwiSWNvbkluZm9Nb2RhbEZhY3RvcnkiLCJzdmdJY29ucyIsIkljb25JbmZvTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksR0FBRyxxQkFDbEJDLENBRGtCLENBQ2hCLFVBQUFDLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sRUFBWDtBQUFBLENBRGUsRUFFbEJDLENBRmtCLENBRWhCLFVBQUFELENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU8sRUFBWDtBQUFBLENBRmUsQ0FBckI7O0FBSUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxTQUNoQjtBQUFLLElBQUEsS0FBSyxFQUFDLE1BQVg7QUFBa0IsSUFBQSxNQUFNLEVBQUM7QUFBekIsS0FDRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsS0FDQ0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNkO0FBQU0sTUFB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UUFBQSxJQUFJLEVBQUVEO0FBQTlCLFFBRGdCO0FBQUEsS0FBakIsQ0FESCxDQUZGLENBZEYsQ0FEb0I7QUFBQSxHQUF0Qjs7QUEwQkEsU0FBT00sYUFBUDtBQUNELENBNUJEOztlQThCZUYsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7bGluZX0gZnJvbSAnZDMtc2hhcGUnXG5pbXBvcnQge1RhYmxlLCBDZW50ZXJGbGV4Ym94fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGxpbmVGdW5jdGlvbiA9IGxpbmUoKVxuICAueChkID0+IGRbMF0gKiAxMClcbiAgLnkoZCA9PiBkWzFdICogMTApO1xuXG5jb25zdCBJY29uU2hhcGUgPSAoe21lc2h9KSA9PiAoXG4gIDxzdmcgd2lkdGg9XCIyMHB4XCIgaGVpZ2h0PVwiMjBweFwiPlxuICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMCwgMTApXCI+XG4gICAge21lc2guY2VsbHMubWFwKChjZWxsLCBpKSA9PlxuICAgICAgPHBhdGgga2V5PXtpfVxuICAgICAgICBmaWxsPVwiIzAwMDAwMFwiXG4gICAgICAgICAgICBkPXtsaW5lRnVuY3Rpb24oY2VsbC5tYXAoaWR4ID0+IG1lc2gucG9zaXRpb25zW2lkeF0pKX0vPlxuICAgICl9XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IFN0eWxlZEljb25JdGVtID0gc3R5bGVkKENlbnRlckZsZXhib3gpYFxuICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcblxuICAuaWNvbi10YWJsZV9pdGVtX19uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQ29kZSA9IHN0eWxlZC5jb2RlYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xuYDtcblxuY29uc3QgU3R5bGVkVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XG4gIG1hcmdpbjogMThweCAwIDE0cHggMDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcbmA7XG5cbmNvbnN0IEljb25JdGVtID0gKHtpY29uOiB7aWQsIG1lc2h9fSkgPT4gKFxuICA8U3R5bGVkSWNvbkl0ZW1cbiAgICBjbGFzc05hbWU9XCJpY29uLXRhYmxlX19pdGVtXCI+XG4gICAgPEljb25TaGFwZSBjbGFzc05hbWU9XCJpY29uLXRhYmxlX19pdGVtX19zaGFwZVwiIG1lc2g9e21lc2h9Lz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tdGFibGVfaXRlbV9fbmFtZVwiPlxuICAgICAgPFN0eWxlZENvZGU+e2lkfTwvU3R5bGVkQ29kZT5cbiAgICA8L2Rpdj5cbiAgPC9TdHlsZWRJY29uSXRlbT5cbik7XG5cbmNvbnN0IEV4YW1wbGVUYWJsZSA9ICgpID0+IChcbiAgPFRhYmxlIGNsYXNzTmFtZT1cImljb24tZXhhbXBsZS10YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICA8dHI+XG4gICAgICA8dGg+cG9pbnRfbGF0PC90aD5cbiAgICAgIDx0aD5wb2ludF9sbmc8L3RoPlxuICAgICAgPHRoPmljb248L3RoPlxuICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgPHRyPlxuICAgICAgPHRkPjM3Ljc2OTg5NzwvdGQ+XG4gICAgICA8dGQ+LTEyMi40MTE2ODwvdGQ+XG4gICAgICA8dGQ+PFN0eWxlZENvZGU+YW5kcm9pZDwvU3R5bGVkQ29kZT48L3RkPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPjM3LjgwNjkyODwvdGQ+XG4gICAgICA8dGQ+LTEyMi40MDIxODwvdGQ+XG4gICAgICA8dGQgLz5cbiAgICA8L3RyPlxuICAgIDx0cj5cbiAgICAgIDx0ZD4zNy43Nzg1NjQ8L3RkPlxuICAgICAgPHRkPi0xMjIuMzkwOTY8L3RkPlxuICAgICAgPHRkPjxTdHlsZWRDb2RlPmNhbGVuZGFyPC9TdHlsZWRDb2RlPjwvdGQ+XG4gICAgPC90cj5cbiAgICA8dHI+XG4gICAgICA8dGQ+MzcuNzQ1OTk1PC90ZD5cbiAgICAgIDx0ZD4tMTIyLjMwMjIwPC90ZD5cbiAgICAgIDx0ZCAvPlxuICAgIDwvdHI+XG4gICAgPHRyPlxuICAgICAgPHRkPjM3LjMyOTg0MTwvdGQ+XG4gICAgICA8dGQ+LTEyMi4xMDM4NDc8L3RkPlxuICAgICAgPHRkPjxTdHlsZWRDb2RlPmNvbnRyb2wtb2ZmPC9TdHlsZWRDb2RlPjwvdGQ+XG4gICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L1RhYmxlPlxuKTtcblxuY29uc3QgSWNvblRhYmxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbmA7XG5cbmNvbnN0IEljb25JbmZvTW9kYWxGYWN0b3J5ID0gKHN2Z0ljb25zID0gW10pID0+IHtcbiAgY29uc3QgSWNvbkluZm9Nb2RhbCA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24taW5mby1tb2RhbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWluZm8tbW9kYWxfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIEluIHlvdXIgY3N2LCBjcmVhdGUgYSBjb2x1bW4sIHB1dCB0aGUgbmFtZSBvZiB0aGUgaWNvbiB5b3Ugd2FudCB0b1xuICAgICAgICAgIGRyYXcgaW4gaXQuIFlvdSBjYW4gbGVhdmUgdGhlIGNlbGwgZW1wdHkgaWYgeW91IGRvIG5vdCB3YW50IHRoZSBpY29uXG4gICAgICAgICAgdG8gc2hvdyBmb3Igc29tZSBwb2ludHMuIFdoZW4gdGhlIGNvbHVtbiBpcyBuYW1lZHsnICd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGNvZGU+aWNvbjwvY29kZT5cbiAgICAgICAgPHNwYW4+IGtlcGxlci5nbCB3aWxsIGF1dG9tYXRpY2FsbHkgY3JlYXRlIGEgaWNvbiBsYXllciBmb3IgeW91Ljwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWluZm8tbW9kYWxfX2V4YW1wbGVcIj5cbiAgICAgICAgPFN0eWxlZFRpdGxlPkV4YW1wbGU6PC9TdHlsZWRUaXRsZT5cbiAgICAgICAgPEV4YW1wbGVUYWJsZS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1pbmZvLW1vZGFsX19pY29uc1wiPlxuICAgICAgICA8U3R5bGVkVGl0bGU+SWNvbnM8L1N0eWxlZFRpdGxlPlxuICAgICAgICA8SWNvblRhYmxlIGNsYXNzTmFtZT1cImljb24taW5mby1tb2RhbF9faWNvbnNfX3RhYmxlXCI+XG4gICAgICAgICAge3N2Z0ljb25zLm1hcChpY29uID0+IChcbiAgICAgICAgICAgIDxJY29uSXRlbSBrZXk9e2ljb24uaWR9IGljb249e2ljb259Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9JY29uVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gSWNvbkluZm9Nb2RhbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbkluZm9Nb2RhbEZhY3Rvcnk7XG4iXX0=