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

var _exportImageUtils = require("../../utils/export-image-utils");

var _defaultSettings = require("../../constants/default-settings");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

var _loadingSpinner = _interopRequireDefault(require("../common/loading-spinner"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  padding: 30px;\n\n  .dimension, .instruction {\n    padding: 8px 0px;\n  }\n\n  .preview-image {\n    background: #e2e2e2;\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.18);\n    width: 100%;\n    padding-bottom: ", ";\n    position: relative;\n  }\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ImageOptionList = styled.div(_templateObject());
var PreviewImageSection = styled.div(_templateObject2(), function (props) {
  return props.ratio === _defaultSettings.RATIOS.SCREEN ? "".concat(100 * props.height / props.width, "%") : props.ratio === _defaultSettings.RATIOS.SIXTEEN_BY_NINE ? '56.25%' : '75%';
});

var ExportImageModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ExportImageModal, _Component);

  function ExportImageModal() {
    (0, _classCallCheck2["default"])(this, ExportImageModal);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExportImageModal).apply(this, arguments));
  }

  (0, _createClass2["default"])(ExportImageModal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          legend = _this$props.legend,
          ratio = _this$props.ratio,
          resolution = _this$props.resolution,
          width = _this$props.width,
          exporting = _this$props.exporting,
          imageDataUri = _this$props.imageDataUri,
          onChangeRatio = _this$props.onChangeRatio,
          onChangeResolution = _this$props.onChangeResolution,
          onToggleLegend = _this$props.onToggleLegend;
      var exportImageSize = (0, _exportImageUtils.calculateExportImageSize)({
        width: width,
        height: height,
        ratio: ratio,
        resolution: resolution
      });
      return _react["default"].createElement(_styledComponents2.StyledModalContent, {
        className: "export-image-modal"
      }, _react["default"].createElement(ImageOptionList, null, _react["default"].createElement("div", {
        className: "image-option-section"
      }, _react["default"].createElement("div", {
        className: "image-option-section-title"
      }, "Ratio"), "Choose the ratio for various usages.", _react["default"].createElement("div", {
        className: "button-list"
      }, _defaultSettings.RATIO_OPTIONS.map(function (op) {
        return _react["default"].createElement(_styledComponents2.SelectionButton, {
          key: op.id,
          selected: ratio === op.id,
          onClick: function onClick() {
            return onChangeRatio({
              ratio: op.id
            });
          }
        }, op.label);
      }))), _react["default"].createElement("div", {
        className: "image-option-section"
      }, _react["default"].createElement("div", {
        className: "image-option-section-title"
      }, "Resolution"), "High resolution is better for prints.", _react["default"].createElement("div", {
        className: "button-list"
      }, _defaultSettings.RESOLUTION_OPTIONS.map(function (op) {
        return _react["default"].createElement(_styledComponents2.SelectionButton, {
          key: op.id,
          selected: resolution === op.id,
          onClick: function onClick() {
            return op.available && onChangeResolution({
              resolution: op.id
            });
          }
        }, op.label);
      }))), _react["default"].createElement("div", {
        className: "image-option-section"
      }, _react["default"].createElement("div", {
        className: "image-option-section-title"
      }, "Map Legend"), _react["default"].createElement(_switch["default"], {
        type: "checkbox",
        id: "add-map-legend",
        checked: legend,
        label: "Add legend on map",
        onChange: onToggleLegend
      }))), _react["default"].createElement(PreviewImageSection, {
        ratio: ratio,
        width: width,
        height: height
      }, _react["default"].createElement("div", {
        className: "dimension"
      }, "".concat(exportImageSize.width, " x ").concat(exportImageSize.height)), _react["default"].createElement("div", {
        className: "preview-image"
      }, exporting ? _react["default"].createElement("div", {
        className: "preview-image-spinner"
      }, _react["default"].createElement(_loadingSpinner["default"], null)) : _react["default"].createElement("img", {
        className: "preview-image-placeholder",
        src: imageDataUri
      }))));
    }
  }]);
  return ExportImageModal;
}(_react.Component);

(0, _defineProperty2["default"])(ExportImageModal, "propTypes", {
  height: _propTypes["default"].number.isRequired,
  ratio: _propTypes["default"].string.isRequired,
  resolution: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired,
  exporting: _propTypes["default"].bool.isRequired,
  imageDataUri: _propTypes["default"].string,
  // callbacks
  onChangeRatio: _propTypes["default"].func.isRequired,
  onChangeResolution: _propTypes["default"].func.isRequired,
  onToggleLegend: _propTypes["default"].func.isRequired
});

var ExportImageModalFactory = function ExportImageModalFactory() {
  return ExportImageModal;
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOlsiSW1hZ2VPcHRpb25MaXN0Iiwic3R5bGVkIiwiZGl2IiwiUHJldmlld0ltYWdlU2VjdGlvbiIsInByb3BzIiwicmF0aW8iLCJSQVRJT1MiLCJTQ1JFRU4iLCJoZWlnaHQiLCJ3aWR0aCIsIlNJWFRFRU5fQllfTklORSIsIkV4cG9ydEltYWdlTW9kYWwiLCJsZWdlbmQiLCJyZXNvbHV0aW9uIiwiZXhwb3J0aW5nIiwiaW1hZ2VEYXRhVXJpIiwib25DaGFuZ2VSYXRpbyIsIm9uQ2hhbmdlUmVzb2x1dGlvbiIsIm9uVG9nZ2xlTGVnZW5kIiwiZXhwb3J0SW1hZ2VTaXplIiwiUkFUSU9fT1BUSU9OUyIsIm1hcCIsIm9wIiwiaWQiLCJsYWJlbCIsIlJFU09MVVRJT05fT1BUSU9OUyIsImF2YWlsYWJsZSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJib29sIiwiZnVuYyIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyxNQUFNLENBQUNDLEdBQVYsbUJBQXJCO0FBd0JBLElBQU1DLG1CQUFtQixHQUFHRixNQUFNLENBQUNDLEdBQVYscUJBaUJILFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0JDLHdCQUFPQyxNQUF2QixhQUN0QixNQUFNSCxLQUFLLENBQUNJLE1BQVosR0FBbUJKLEtBQUssQ0FBQ0ssS0FESCxTQUV4QkwsS0FBSyxDQUFDQyxLQUFOLEtBQWdCQyx3QkFBT0ksZUFBdkIsR0FBeUMsUUFBekMsR0FBb0QsS0FGaEM7QUFB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LEVBREYsRUFFRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDR00sU0FBUyxHQUNSO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLGdDQUFDLDBCQUFELE9BREYsQ0FEUSxHQUlSO0FBQUssUUFBQSxTQUFTLEVBQUMsMkJBQWY7QUFBMkMsUUFBQSxHQUFHLEVBQUVDO0FBQWhELFFBTEosQ0FGRixDQTFDRixDQURGO0FBd0REOzs7RUExRjRCWSxnQjs7aUNBQXpCaEIsZ0IsZUFFZTtBQUNqQkgsRUFBQUEsTUFBTSxFQUFFb0Isc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFI7QUFFakJ6QixFQUFBQSxLQUFLLEVBQUV1QixzQkFBVUcsTUFBVixDQUFpQkQsVUFGUDtBQUdqQmpCLEVBQUFBLFVBQVUsRUFBRWUsc0JBQVVHLE1BQVYsQ0FBaUJELFVBSFo7QUFJakJyQixFQUFBQSxLQUFLLEVBQUVtQixzQkFBVUMsTUFBVixDQUFpQkMsVUFKUDtBQUtqQmhCLEVBQUFBLFNBQVMsRUFBRWMsc0JBQVVJLElBQVYsQ0FBZUYsVUFMVDtBQU1qQmYsRUFBQUEsWUFBWSxFQUFFYSxzQkFBVUcsTUFOUDtBQU9qQjtBQUNBZixFQUFBQSxhQUFhLEVBQUVZLHNCQUFVSyxJQUFWLENBQWVILFVBUmI7QUFTakJiLEVBQUFBLGtCQUFrQixFQUFFVyxzQkFBVUssSUFBVixDQUFlSCxVQVRsQjtBQVVqQlosRUFBQUEsY0FBYyxFQUFFVSxzQkFBVUssSUFBVixDQUFlSDtBQVZkLEM7O0FBMkZyQixJQUFNSSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCO0FBQUEsU0FBTXZCLGdCQUFOO0FBQUEsQ0FBaEM7O2VBQ2V1Qix1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7Y2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplfSBmcm9tICd1dGlscy9leHBvcnQtaW1hZ2UtdXRpbHMnO1xuaW1wb3J0IHtcbiAgUkFUSU9fT1BUSU9OUyxcbiAgUkFUSU9TLFxuICBSRVNPTFVUSU9OX09QVElPTlNcbn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQge1N0eWxlZE1vZGFsQ29udGVudCwgU2VsZWN0aW9uQnV0dG9ufSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N3aXRjaCc7XG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSAnY29tcG9uZW50cy9jb21tb24vbG9hZGluZy1zcGlubmVyJztcblxuY29uc3QgSW1hZ2VPcHRpb25MaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAyNTBweDtcblxuICAuaW1hZ2Utb3B0aW9uLXNlY3Rpb24ge1xuICAgIC5pbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5idXR0b24tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFByZXZpZXdJbWFnZVNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcblxuICAuZGltZW5zaW9uLCAuaW5zdHJ1Y3Rpb24ge1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gIH1cblxuICAucHJldmlldy1pbWFnZSB7XG4gICAgYmFja2dyb3VuZDogI2UyZTJlMjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwwLDAsMC4xOCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMucmF0aW8gPT09IFJBVElPUy5TQ1JFRU4gP1xuICAgICAgYCR7MTAwICogcHJvcHMuaGVpZ2h0L3Byb3BzLndpZHRofSVgOlxuICAgICAgKHByb3BzLnJhdGlvID09PSBSQVRJT1MuU0lYVEVFTl9CWV9OSU5FID8gJzU2LjI1JScgOiAnNzUlJylcbiAgICB9O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Utc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xuICB9XG5gO1xuXG5jbGFzcyBFeHBvcnRJbWFnZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHJhdGlvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcmVzb2x1dGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZXhwb3J0aW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGltYWdlRGF0YVVyaTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAvLyBjYWxsYmFja3NcbiAgICBvbkNoYW5nZVJhdGlvOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlUmVzb2x1dGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblRvZ2dsZUxlZ2VuZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoZWlnaHQsXG4gICAgICBsZWdlbmQsXG4gICAgICByYXRpbyxcbiAgICAgIHJlc29sdXRpb24sXG4gICAgICB3aWR0aCxcbiAgICAgIGV4cG9ydGluZyxcbiAgICAgIGltYWdlRGF0YVVyaSxcbiAgICAgIC8vIGNhbGxiYWNrczpcbiAgICAgIG9uQ2hhbmdlUmF0aW8sXG4gICAgICBvbkNoYW5nZVJlc29sdXRpb24sXG4gICAgICBvblRvZ2dsZUxlZ2VuZFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgZXhwb3J0SW1hZ2VTaXplID0gY2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplKHtcbiAgICAgIHdpZHRoLCBoZWlnaHQsIHJhdGlvLCByZXNvbHV0aW9uXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZE1vZGFsQ29udGVudCBjbGFzc05hbWU9XCJleHBvcnQtaW1hZ2UtbW9kYWxcIj5cbiAgICAgICAgPEltYWdlT3B0aW9uTGlzdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+UmF0aW88L2Rpdj5cbiAgICAgICAgICAgICAgQ2hvb3NlIHRoZSByYXRpbyBmb3IgdmFyaW91cyB1c2FnZXMuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCI+XG4gICAgICAgICAgICAgIHtSQVRJT19PUFRJT05TLm1hcChvcCA9PlxuICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17b3AuaWR9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmF0aW8gPT09IG9wLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VSYXRpbyh7cmF0aW86IG9wLmlkfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZVwiPlJlc29sdXRpb248L2Rpdj5cbiAgICAgICAgICAgIEhpZ2ggcmVzb2x1dGlvbiBpcyBiZXR0ZXIgZm9yIHByaW50cy5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWxpc3RcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFJFU09MVVRJT05fT1BUSU9OUy5tYXAob3AgPT5cbiAgICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3Jlc29sdXRpb24gPT09IG9wLmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcC5hdmFpbGFibGUgJiYgb25DaGFuZ2VSZXNvbHV0aW9uKHtyZXNvbHV0aW9uOiBvcC5pZH0pfT5cbiAgICAgICAgICAgICAgICAgICAge29wLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Rpb25CdXR0b24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+TWFwIExlZ2VuZDwvZGl2PlxuICAgICAgICAgICAgPFN3aXRjaCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImFkZC1tYXAtbGVnZW5kXCJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGVnZW5kfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBsZWdlbmQgb24gbWFwXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uVG9nZ2xlTGVnZW5kfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW1hZ2VPcHRpb25MaXN0PlxuICAgICAgICA8UHJldmlld0ltYWdlU2VjdGlvbiByYXRpbz17cmF0aW99IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uXCI+e2Ake2V4cG9ydEltYWdlU2l6ZS53aWR0aH0geCAke2V4cG9ydEltYWdlU2l6ZS5oZWlnaHR9YH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2VcIj5cbiAgICAgICAgICAgIHtleHBvcnRpbmcgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiPlxuICAgICAgICAgICAgICAgIDxMb2FkaW5nU3Bpbm5lciAvPlxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXJcIiBzcmM9e2ltYWdlRGF0YVVyaX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QcmV2aWV3SW1hZ2VTZWN0aW9uPlxuICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSA9ICgpID0+IEV4cG9ydEltYWdlTW9kYWw7XG5leHBvcnQgZGVmYXVsdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeTtcbiJdfQ==