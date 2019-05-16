"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatasetTag = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var styled = _interopRequireWildcard(require("styled-components"));

var _d3Format = require("d3-format");

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 11px;\n  color: ", ";\n  padding-left: 19px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 5px;\n  }\n\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    color: ", ";\n    cursor: ", ";\n\n    .dataset-action {\n      color: ", ";\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: white;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  transition: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var defaultRemoveDataset = function defaultRemoveDataset(datasetKey) {};

var numFormat = (0, _d3Format.format)(',');
var SourceDataCatelogWrapper = styled.div(_templateObject(), function (props) {
  return props.theme.transition;
});
var DatasetTitle = styled.div(_templateObject2(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.clickable ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.clickable ? 'pointer' : 'auto';
}, function (props) {
  return props.theme.textColorHl;
});
var DatasetTagWrapper = styled.div(_templateObject3(), function (props) {
  return props.theme.textColor;
});
var DataTagAction = styled.div(_templateObject4());
var DataRowCount = styled.div(_templateObject5(), function (props) {
  return props.theme.subtextColor;
});

var DatasetTag = function DatasetTag(_ref) {
  var onClick = _ref.onClick,
      dataset = _ref.dataset;
  return _react["default"].createElement(DatasetTagWrapper, {
    className: "source-data-tag",
    onClick: onClick
  }, _react["default"].createElement(_styledComponents2.DatasetSquare, {
    className: "dataset-color",
    color: dataset.color
  }), _react["default"].createElement("div", {
    className: "dataset-name"
  }, dataset.label));
};

exports.DatasetTag = DatasetTag;

var ShowDataTable = function ShowDataTable(_ref2) {
  var id = _ref2.id,
      showDatasetTable = _ref2.showDatasetTable;
  return _react["default"].createElement(DataTagAction, {
    className: "dataset-action show-data-table",
    "data-tip": true,
    "data-for": "data-table-".concat(id)
  }, _react["default"].createElement(_icons.Table, {
    height: "16px",
    onClick: function onClick() {
      return showDatasetTable(id);
    }
  }), _react["default"].createElement(_styledComponents2.Tooltip, {
    id: "data-table-".concat(id),
    effect: "solid"
  }, _react["default"].createElement("span", null, "Show data table")));
};

var RemoveDataset = function RemoveDataset(_ref3) {
  var datasetKey = _ref3.datasetKey,
      _ref3$removeDataset = _ref3.removeDataset,
      removeDataset = _ref3$removeDataset === void 0 ? defaultRemoveDataset : _ref3$removeDataset;
  return _react["default"].createElement(DataTagAction, {
    className: "dataset-action remove-dataset",
    "data-tip": true,
    "data-for": "delete-".concat(datasetKey)
  }, _react["default"].createElement(_icons.Trash, {
    height: "16px",
    onClick: function onClick(e) {
      e.stopPropagation();
      removeDataset(datasetKey);
    }
  }), _react["default"].createElement(_styledComponents2.Tooltip, {
    id: "delete-".concat(datasetKey),
    effect: "solid",
    type: "error"
  }, _react["default"].createElement("span", null, "Remove dataset")));
};

function SourceDataCatalogFactory() {
  var SourceDataCatalog = function SourceDataCatalog(_ref4) {
    var datasets = _ref4.datasets,
        showDatasetTable = _ref4.showDatasetTable,
        removeDataset = _ref4.removeDataset,
        _ref4$showDeleteDatas = _ref4.showDeleteDataset,
        showDeleteDataset = _ref4$showDeleteDatas === void 0 ? false : _ref4$showDeleteDatas;
    return _react["default"].createElement(SourceDataCatelogWrapper, {
      className: "source-data-catalog"
    }, Object.values(datasets).map(function (dataset, index) {
      return _react["default"].createElement(_styledComponents2.SidePanelSection, {
        key: dataset.id
      }, _react["default"].createElement(DatasetTitle, {
        className: "source-data-title",
        clickable: Boolean(showDatasetTable)
      }, _react["default"].createElement(DatasetTag, {
        dataset: dataset,
        onClick: showDatasetTable ? function () {
          return showDatasetTable(dataset.id);
        } : null
      }), showDatasetTable ? _react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "source-data-arrow"
      }, _react["default"].createElement(_icons.ArrowRight, {
        height: "12px"
      })) : null, showDatasetTable ? _react["default"].createElement(ShowDataTable, {
        id: dataset.id,
        showDatasetTable: showDatasetTable
      }) : null, showDeleteDataset ? _react["default"].createElement(RemoveDataset, {
        datasetKey: dataset.id,
        removeDataset: removeDataset
      }) : null), showDatasetTable ? _react["default"].createElement(DataRowCount, {
        className: "source-data-rows"
      }, "".concat(numFormat(dataset.allData.length), " rows")) : null);
    }));
  };

  return SourceDataCatalog;
}

var _default = SourceDataCatalogFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwvc291cmNlLWRhdGEtY2F0YWxvZy5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0UmVtb3ZlRGF0YXNldCIsImRhdGFzZXRLZXkiLCJudW1Gb3JtYXQiLCJTb3VyY2VEYXRhQ2F0ZWxvZ1dyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwidHJhbnNpdGlvbiIsIkRhdGFzZXRUaXRsZSIsInRleHRDb2xvciIsImNsaWNrYWJsZSIsInRleHRDb2xvckhsIiwiRGF0YXNldFRhZ1dyYXBwZXIiLCJEYXRhVGFnQWN0aW9uIiwiRGF0YVJvd0NvdW50Iiwic3VidGV4dENvbG9yIiwiRGF0YXNldFRhZyIsIm9uQ2xpY2siLCJkYXRhc2V0IiwiY29sb3IiLCJsYWJlbCIsIlNob3dEYXRhVGFibGUiLCJpZCIsInNob3dEYXRhc2V0VGFibGUiLCJSZW1vdmVEYXRhc2V0IiwicmVtb3ZlRGF0YXNldCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3RvcnkiLCJTb3VyY2VEYXRhQ2F0YWxvZyIsImRhdGFzZXRzIiwic2hvd0RlbGV0ZURhdGFzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpbmRleCIsIkJvb2xlYW4iLCJhbGxEYXRhIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFBQyxVQUFVLEVBQUksQ0FBRSxDQUE3Qzs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsc0JBQU8sR0FBUCxDQUFsQjtBQUVBLElBQU1DLHdCQUF3QixHQUFHQyxNQUFNLENBQUNDLEdBQVYsb0JBQ2QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FB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TCxPQUFPLENBQUNJLEVBRGQ7QUFFRSxRQUFBLGdCQUFnQixFQUFFQztBQUZwQixRQURlLEdBS2IsSUFoQk4sRUFpQkdRLGlCQUFpQixHQUNoQixnQ0FBQyxhQUFEO0FBQ0UsUUFBQSxVQUFVLEVBQUViLE9BQU8sQ0FBQ0ksRUFEdEI7QUFFRSxRQUFBLGFBQWEsRUFBRUc7QUFGakIsUUFEZ0IsR0FLZCxJQXRCTixDQURGLEVBeUJHRixnQkFBZ0IsR0FDZixnQ0FBQyxZQUFEO0FBQWMsUUFBQSxTQUFTLEVBQUM7QUFBeEIsbUJBQStDdEIsU0FBUyxDQUN0RGlCLE9BQU8sQ0FBQ21CLE9BQVIsQ0FBZ0JDLE1BRHNDLENBQXhELFdBRGUsR0FJYixJQTdCTixDQUQyQjtBQUFBLEtBQTVCLENBREgsQ0FOd0I7QUFBQSxHQUExQjs7QUEyQ0EsU0FBT1QsaUJBQVA7QUFDRDs7ZUFFY0Qsd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Zm9ybWF0fSBmcm9tICdkMy1mb3JtYXQnO1xuXG5pbXBvcnQge1NpZGVQYW5lbFNlY3Rpb24sIFRvb2x0aXAsIERhdGFzZXRTcXVhcmUsIENlbnRlckZsZXhib3h9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VGFibGUsIFRyYXNoLCBBcnJvd1JpZ2h0fSBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9pY29ucyc7XG5cbmNvbnN0IGRlZmF1bHRSZW1vdmVEYXRhc2V0ID0gZGF0YXNldEtleSA9PiB7fTtcbmNvbnN0IG51bUZvcm1hdCA9IGZvcm1hdCgnLCcpO1xuXG5jb25zdCBTb3VyY2VEYXRhQ2F0ZWxvZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuYDtcblxuY29uc3QgRGF0YXNldFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgLnNvdXJjZS1kYXRhLWFycm93IHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMuY2xpY2thYmxlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGN1cnNvcjogJHtwcm9wcyA9PiAocHJvcHMuY2xpY2thYmxlID8gJ3BvaW50ZXInIDogJ2F1dG8nKX07XG5cbiAgICAuZGF0YXNldC1hY3Rpb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAuZGF0YXNldC1hY3Rpb246aG92ZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRGF0YXNldFRhZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgLmRhdGFzZXQtY29sb3Ige1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5kYXRhc2V0LW5hbWUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuYDtcblxuY29uc3QgRGF0YVRhZ0FjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG9wYWNpdHk6IDA7XG5gO1xuXG5jb25zdCBEYXRhUm93Q291bnQgPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gIHBhZGRpbmctbGVmdDogMTlweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBEYXRhc2V0VGFnID0gKHtvbkNsaWNrLCBkYXRhc2V0fSkgPT4gKFxuICA8RGF0YXNldFRhZ1dyYXBwZXIgY2xhc3NOYW1lPVwic291cmNlLWRhdGEtdGFnXCIgb25DbGljaz17b25DbGlja30+XG4gICAgPERhdGFzZXRTcXVhcmUgY2xhc3NOYW1lPVwiZGF0YXNldC1jb2xvclwiIGNvbG9yPXtkYXRhc2V0LmNvbG9yfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YXNldC1uYW1lXCI+e2RhdGFzZXQubGFiZWx9PC9kaXY+XG4gIDwvRGF0YXNldFRhZ1dyYXBwZXI+XG4pO1xuXG5jb25zdCBTaG93RGF0YVRhYmxlID0gKHtpZCwgc2hvd0RhdGFzZXRUYWJsZX0pID0+IChcbiAgPERhdGFUYWdBY3Rpb25cbiAgICBjbGFzc05hbWU9XCJkYXRhc2V0LWFjdGlvbiBzaG93LWRhdGEtdGFibGVcIlxuICAgIGRhdGEtdGlwXG4gICAgZGF0YS1mb3I9e2BkYXRhLXRhYmxlLSR7aWR9YH1cbiAgPlxuICAgIDxUYWJsZSBoZWlnaHQ9XCIxNnB4XCIgb25DbGljaz17KCkgPT4gc2hvd0RhdGFzZXRUYWJsZShpZCl9IC8+XG4gICAgPFRvb2x0aXAgaWQ9e2BkYXRhLXRhYmxlLSR7aWR9YH0gZWZmZWN0PVwic29saWRcIj5cbiAgICAgIDxzcGFuPlNob3cgZGF0YSB0YWJsZTwvc3Bhbj5cbiAgICA8L1Rvb2x0aXA+XG4gIDwvRGF0YVRhZ0FjdGlvbj5cbik7XG5cbmNvbnN0IFJlbW92ZURhdGFzZXQgPSAoe2RhdGFzZXRLZXksIHJlbW92ZURhdGFzZXQgPSBkZWZhdWx0UmVtb3ZlRGF0YXNldH0pID0+IChcbiAgPERhdGFUYWdBY3Rpb25cbiAgICBjbGFzc05hbWU9XCJkYXRhc2V0LWFjdGlvbiByZW1vdmUtZGF0YXNldFwiXG4gICAgZGF0YS10aXBcbiAgICBkYXRhLWZvcj17YGRlbGV0ZS0ke2RhdGFzZXRLZXl9YH1cbiAgPlxuICAgIDxUcmFzaFxuICAgICAgaGVpZ2h0PVwiMTZweFwiXG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmVtb3ZlRGF0YXNldChkYXRhc2V0S2V5KTtcbiAgICAgIH19XG4gICAgLz5cbiAgICA8VG9vbHRpcCBpZD17YGRlbGV0ZS0ke2RhdGFzZXRLZXl9YH0gZWZmZWN0PVwic29saWRcIiB0eXBlPVwiZXJyb3JcIj5cbiAgICAgIDxzcGFuPlJlbW92ZSBkYXRhc2V0PC9zcGFuPlxuICAgIDwvVG9vbHRpcD5cbiAgPC9EYXRhVGFnQWN0aW9uPlxuKTtcblxuZnVuY3Rpb24gU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5KCkge1xuICBjb25zdCBTb3VyY2VEYXRhQ2F0YWxvZyA9ICh7XG4gICAgZGF0YXNldHMsXG4gICAgc2hvd0RhdGFzZXRUYWJsZSxcbiAgICByZW1vdmVEYXRhc2V0LFxuICAgIHNob3dEZWxldGVEYXRhc2V0ID0gZmFsc2VcbiAgfSkgPT4gKFxuICAgIDxTb3VyY2VEYXRhQ2F0ZWxvZ1dyYXBwZXIgY2xhc3NOYW1lPVwic291cmNlLWRhdGEtY2F0YWxvZ1wiPlxuICAgICAge09iamVjdC52YWx1ZXMoZGF0YXNldHMpLm1hcCgoZGF0YXNldCwgaW5kZXgpID0+IChcbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24ga2V5PXtkYXRhc2V0LmlkfT5cbiAgICAgICAgICA8RGF0YXNldFRpdGxlIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLXRpdGxlXCIgY2xpY2thYmxlPXtCb29sZWFuKHNob3dEYXRhc2V0VGFibGUpfT5cbiAgICAgICAgICAgIDxEYXRhc2V0VGFnXG4gICAgICAgICAgICAgIGRhdGFzZXQ9e2RhdGFzZXR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGUgPyAoKSA9PiBzaG93RGF0YXNldFRhYmxlKGRhdGFzZXQuaWQpIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge3Nob3dEYXRhc2V0VGFibGUgP1xuICAgICAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJzb3VyY2UtZGF0YS1hcnJvd1wiPlxuICAgICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgICA8L0NlbnRlckZsZXhib3g+IDogbnVsbH1cbiAgICAgICAgICAgIHtzaG93RGF0YXNldFRhYmxlID8gKFxuICAgICAgICAgICAgICA8U2hvd0RhdGFUYWJsZVxuICAgICAgICAgICAgICAgIGlkPXtkYXRhc2V0LmlkfVxuICAgICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtzaG93RGVsZXRlRGF0YXNldCA/IChcbiAgICAgICAgICAgICAgPFJlbW92ZURhdGFzZXRcbiAgICAgICAgICAgICAgICBkYXRhc2V0S2V5PXtkYXRhc2V0LmlkfVxuICAgICAgICAgICAgICAgIHJlbW92ZURhdGFzZXQ9e3JlbW92ZURhdGFzZXR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0RhdGFzZXRUaXRsZT5cbiAgICAgICAgICB7c2hvd0RhdGFzZXRUYWJsZSA/IChcbiAgICAgICAgICAgIDxEYXRhUm93Q291bnQgY2xhc3NOYW1lPVwic291cmNlLWRhdGEtcm93c1wiPntgJHtudW1Gb3JtYXQoXG4gICAgICAgICAgICAgIGRhdGFzZXQuYWxsRGF0YS5sZW5ndGhcbiAgICAgICAgICAgICl9IHJvd3NgfTwvRGF0YVJvd0NvdW50PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICApKX1cbiAgICA8L1NvdXJjZURhdGFDYXRlbG9nV3JhcHBlcj5cbiAgKTtcblxuICByZXR1cm4gU291cmNlRGF0YUNhdGFsb2c7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeTtcbiJdfQ==