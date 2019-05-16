"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _d3Selection = require("d3-selection");

var _d3Brush = require("d3-brush");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .selection {\n    stroke: none;\n    fill: ", ";\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledG = styled.g(_templateObject(), function (props) {
  return props.theme.rangeBrushBgd;
});

var RangeBrush =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(RangeBrush, _Component);

  function RangeBrush() {
    (0, _classCallCheck2["default"])(this, RangeBrush);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RangeBrush).apply(this, arguments));
  }

  (0, _createClass2["default"])(RangeBrush, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      // We want the React app to respond to brush state and vice-versa
      // but d3-brush fires the same events for both user-initiated brushing
      // and programmatic brushing (brush.move). We need these flags to
      // distinguish between the uses.
      //
      // We don't use state because that would trigger another `componentDidUpdate`
      this.brushing = false;
      this.moving = false;
      this.root = (0, _d3Selection.select)(this.rootContainer);
      this.brush = (0, _d3Brush.brushX)().on('start', function () {
        _this.brushing = true;
      }).on('brush', function () {
        if (_this.moving) {
          return;
        }

        _d3Selection.event.selection === null ? _this._reset() : _this._brush(_d3Selection.event.selection);
      }).on('end', function () {
        if (!_this.moving && _d3Selection.event.selection === null) {
          _this._reset();
        }

        _this.brushing = false;
        _this.moving = false;
      });
      this.root.call(this.brush);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          _this$props$value = (0, _slicedToArray2["default"])(_this$props.value, 2),
          val0 = _this$props$value[0],
          val1 = _this$props$value[1],
          width = _this$props.width;

      var _prevProps$value = (0, _slicedToArray2["default"])(prevProps.value, 2),
          prevVal0 = _prevProps$value[0],
          prevVal1 = _prevProps$value[1];

      if (prevProps.width !== width) {
        // width change should not trigger this._brush
        this.moving = true;
        this.root.call(this.brush);

        this._move(val0, val1);
      }

      if (!this.brushing && !this.moving) {
        if (prevVal0 !== val0 || prevVal1 !== val1) {
          this.moving = true;

          this._move(val0, val1);
        }
      }
    }
  }, {
    key: "_reset",
    value: function _reset() {
      var _this$props$range = (0, _slicedToArray2["default"])(this.props.range, 2),
          minValue = _this$props$range[0],
          maxValue = _this$props$range[1];

      this._onBrush(minValue, maxValue);
    }
  }, {
    key: "_move",
    value: function _move(val0, val1) {
      var _this$props2 = this.props,
          _this$props2$domain = (0, _slicedToArray2["default"])(_this$props2.domain, 2),
          min = _this$props2$domain[0],
          max = _this$props2$domain[1],
          width = _this$props2.width;

      var scale = function scale(x) {
        return (x - min) * width / (max - min);
      };

      this.brush.move(this.root, [scale(val0), scale(val1)]);
    }
  }, {
    key: "_brush",
    value: function _brush(_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          sel0 = _ref2[0],
          sel1 = _ref2[1];

      var _this$props3 = this.props,
          _this$props3$domain = (0, _slicedToArray2["default"])(_this$props3.domain, 2),
          min = _this$props3$domain[0],
          max = _this$props3$domain[1],
          width = _this$props3.width;

      var invert = function invert(x) {
        return x * (max - min) / width + min;
      };

      this._onBrush(invert(sel0), invert(sel1));
    }
  }, {
    key: "_onBrush",
    value: function _onBrush(val0, val1) {
      var _this$props$value2 = (0, _slicedToArray2["default"])(this.props.value, 2),
          currentVal0 = _this$props$value2[0],
          currentVal1 = _this$props$value2[1];

      if (currentVal0 === val0 && currentVal1 === val1) {
        return;
      }

      this.props.onBrush(val0, val1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(StyledG, {
        className: "kg-range-slider__brush",
        ref: function ref(comp) {
          _this2.rootContainer = comp;
        }
      });
    }
  }]);
  return RangeBrush;
}(_react.Component);

exports["default"] = RangeBrush;
(0, _defineProperty2["default"])(RangeBrush, "propTypes", {
  domain: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  onBrush: _propTypes["default"].func.isRequired,
  range: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  value: _propTypes["default"].arrayOf(_propTypes["default"].number).isRequired,
  width: _propTypes["default"].number.isRequired
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9yYW5nZS1icnVzaC5qcyJdLCJuYW1lcyI6WyJTdHlsZWRHIiwic3R5bGVkIiwiZyIsInByb3BzIiwidGhlbWUiLCJyYW5nZUJydXNoQmdkIiwiUmFuZ2VCcnVzaCIsImJydXNoaW5nIiwibW92aW5nIiwicm9vdCIsInJvb3RDb250YWluZXIiLCJicnVzaCIsIm9uIiwiZXZlbnQiLCJzZWxlY3Rpb24iLCJfcmVzZXQiLCJfYnJ1c2giLCJjYWxsIiwicHJldlByb3BzIiwidmFsdWUiLCJ2YWwwIiwidmFsMSIsIndpZHRoIiwicHJldlZhbDAiLCJwcmV2VmFsMSIsIl9tb3ZlIiwicmFuZ2UiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwiX29uQnJ1c2giLCJkb21haW4iLCJtaW4iLCJtYXgiLCJzY2FsZSIsIngiLCJtb3ZlIiwic2VsMCIsInNlbDEiLCJpbnZlcnQiLCJjdXJyZW50VmFsMCIsImN1cnJlbnRWYWwxIiwib25CcnVzaCIsImNvbXAiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJhcnJheU9mIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxNQUFNLENBQUNDLENBQVYsb0JBR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxhQUFoQjtBQUFBLENBSEosQ0FBYjs7SUFRcUJDLFU7Ozs7Ozs7Ozs7Ozt3Q0FTQztBQUFBOztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxXQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQWQ7QUFFQSxXQUFLQyxJQUFMLEdBQVkseUJBQU8sS0FBS0MsYUFBWixDQUFaO0FBQ0EsV0FBS0MsS0FB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c0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7ZXZlbnQsIHNlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7YnJ1c2hYfSBmcm9tICdkMy1icnVzaCc7XG5cbmNvbnN0IFN0eWxlZEcgPSBzdHlsZWQuZ2BcbiAgLnNlbGVjdGlvbiB7XG4gICAgc3Ryb2tlOiBub25lO1xuICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucmFuZ2VCcnVzaEJnZH07XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VCcnVzaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZG9tYWluOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKS5pc1JlcXVpcmVkLFxuICAgIG9uQnJ1c2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcmFuZ2U6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFdlIHdhbnQgdGhlIFJlYWN0IGFwcCB0byByZXNwb25kIHRvIGJydXNoIHN0YXRlIGFuZCB2aWNlLXZlcnNhXG4gICAgLy8gYnV0IGQzLWJydXNoIGZpcmVzIHRoZSBzYW1lIGV2ZW50cyBmb3IgYm90aCB1c2VyLWluaXRpYXRlZCBicnVzaGluZ1xuICAgIC8vIGFuZCBwcm9ncmFtbWF0aWMgYnJ1c2hpbmcgKGJydXNoLm1vdmUpLiBXZSBuZWVkIHRoZXNlIGZsYWdzIHRvXG4gICAgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiB0aGUgdXNlcy5cbiAgICAvL1xuICAgIC8vIFdlIGRvbid0IHVzZSBzdGF0ZSBiZWNhdXNlIHRoYXQgd291bGQgdHJpZ2dlciBhbm90aGVyIGBjb21wb25lbnREaWRVcGRhdGVgXG5cbiAgICB0aGlzLmJydXNoaW5nID0gZmFsc2U7XG4gICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMucm9vdCA9IHNlbGVjdCh0aGlzLnJvb3RDb250YWluZXIpO1xuICAgIHRoaXMuYnJ1c2ggPSBicnVzaFgoKVxuICAgICAgLm9uKCdzdGFydCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5icnVzaGluZyA9IHRydWU7XG4gICAgICB9KVxuICAgICAgLm9uKCdicnVzaCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnNlbGVjdGlvbiA9PT0gbnVsbCA/IHRoaXMuX3Jlc2V0KCkgOiB0aGlzLl9icnVzaChldmVudC5zZWxlY3Rpb24pO1xuICAgICAgfSlcbiAgICAgIC5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMubW92aW5nICYmIGV2ZW50LnNlbGVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJydXNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICB9KTtcblxuICAgIHRoaXMucm9vdC5jYWxsKHRoaXMuYnJ1c2gpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHt2YWx1ZTogW3ZhbDAsIHZhbDFdLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IFtwcmV2VmFsMCwgcHJldlZhbDFdID0gcHJldlByb3BzLnZhbHVlO1xuXG4gICAgaWYgKHByZXZQcm9wcy53aWR0aCAhPT0gd2lkdGgpIHtcblxuICAgICAgLy8gd2lkdGggY2hhbmdlIHNob3VsZCBub3QgdHJpZ2dlciB0aGlzLl9icnVzaFxuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5yb290LmNhbGwodGhpcy5icnVzaCk7XG4gICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5icnVzaGluZyAmJiAhdGhpcy5tb3ZpbmcpIHtcblxuICAgICAgaWYgKHByZXZWYWwwICE9PSB2YWwwIHx8IHByZXZWYWwxICE9PSB2YWwxKSB7XG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbW92ZSh2YWwwLCB2YWwxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmVzZXQoKSB7XG4gICAgY29uc3QgW21pblZhbHVlLCBtYXhWYWx1ZV0gPSB0aGlzLnByb3BzLnJhbmdlO1xuICAgIHRoaXMuX29uQnJ1c2gobWluVmFsdWUsIG1heFZhbHVlKTtcbiAgfVxuXG4gIF9tb3ZlKHZhbDAsIHZhbDEpIHtcbiAgICBjb25zdCB7ZG9tYWluOiBbbWluLCBtYXhdLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHNjYWxlID0geCA9PiAoeCAtIG1pbikgKiB3aWR0aCAvIChtYXggLSBtaW4pO1xuICAgIHRoaXMuYnJ1c2gubW92ZSh0aGlzLnJvb3QsIFtzY2FsZSh2YWwwKSwgc2NhbGUodmFsMSldKTtcbiAgfVxuXG4gIF9icnVzaChbc2VsMCwgc2VsMV0pIHtcbiAgICBjb25zdCB7ZG9tYWluOiBbbWluLCBtYXhdLCB3aWR0aH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGludmVydCA9IHggPT4geCAqIChtYXggLSBtaW4pIC8gd2lkdGggKyBtaW47XG4gICAgdGhpcy5fb25CcnVzaChpbnZlcnQoc2VsMCksIGludmVydChzZWwxKSk7XG4gIH1cblxuICBfb25CcnVzaCh2YWwwLCB2YWwxKSB7XG4gICAgY29uc3Qge3ZhbHVlOiBbY3VycmVudFZhbDAsIGN1cnJlbnRWYWwxXX0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGN1cnJlbnRWYWwwID09PSB2YWwwICYmIGN1cnJlbnRWYWwxID09PSB2YWwxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkJydXNoKHZhbDAsIHZhbDEpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZEdcbiAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyX19icnVzaFwiXG4gICAgICAgIHJlZj17Y29tcCA9PiB7XG4gICAgICAgICAgdGhpcy5yb290Q29udGFpbmVyID0gY29tcDtcbiAgICAgIH19Lz5cbiAgICApO1xuICB9XG59O1xuIl19