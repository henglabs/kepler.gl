"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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

var _styledComponents = require("styled-components");

var _reactDom = require("react-dom");

var _window = require("global/window");

var _modal = _interopRequireDefault(require("./common/modal"));

var _dataProcessor = require("../processors/data-processor");

var _schemas = _interopRequireDefault(require("../schemas"));

var _exportImageUtils = require("../utils/export-image-utils");

var _deleteDataModal = _interopRequireDefault(require("./modals/delete-data-modal"));

var _dataTableModal = _interopRequireDefault(require("./modals/data-table-modal"));

var _loadDataModal = _interopRequireDefault(require("./modals/load-data-modal"));

var _exportImageModal = _interopRequireDefault(require("./modals/export-image-modal"));

var _exportDataModal = _interopRequireDefault(require("./modals/export-data-modal"));

var _exportMapModal = _interopRequireDefault(require("./modals/export-map-modal"));

var _addMapStyleModal = _interopRequireDefault(require("./modals/add-map-style-modal"));

var _mediaBreakpoints = require("../styles/media-breakpoints");

var _exportMap = require("../templates/export-map");

var _defaultSettings = require("../constants/default-settings");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  top: 60px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100vw;\n    padding: 0;\n    margin: 0;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  height: 85%;\n  width: 90%;\n  top: 80px;\n  padding: 32px 0 0 0;\n  max-width: unset;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject(), _mediaBreakpoints.media.palm(_templateObject2()));
var DeleteDatasetModalStyled = (0, _styledComponents.css)(_templateObject3());
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject4());
ModalContainerFactory.deps = [_deleteDataModal["default"], _dataTableModal["default"], _loadDataModal["default"], _exportImageModal["default"], _exportDataModal["default"], _exportMapModal["default"], _addMapStyleModal["default"]];

function ModalContainerFactory(DeleteDatasetModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportMapModal, AddMapStyleModal) {
  var ModalWrapper =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2["default"])(ModalWrapper, _Component);

    function ModalWrapper() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2["default"])(this, ModalWrapper);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ModalWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeModal", function () {
        _this.props.uiStateActions.toggleModal(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deleteDataset", function (key) {
        _this.props.visStateActions.removeDataset(key);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onAddCustomMapStyle", function () {
        _this.props.mapStyleActions.addCustomMapStyle();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFileUpload", function (blob) {
        _this.props.visStateActions.loadFiles(blob);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportImage", function () {
        var _this$props$uiState$e = _this.props.uiState.exportImage,
            exporting = _this$props$uiState$e.exporting,
            imageDataUri = _this$props$uiState$e.imageDataUri;

        if (!exporting && imageDataUri) {
          var file = (0, _exportImageUtils.dataURItoBlob)(imageDataUri);
          (0, _exportImageUtils.downloadFile)(file, _defaultSettings.DEFAULT_EXPORT_IMAGE_NAME);
        }

        _this.props.uiStateActions.cleanupExportImage();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportData", function () {
        var _this$props = _this.props,
            visState = _this$props.visState,
            uiState = _this$props.uiState;
        var datasets = visState.datasets;
        var _uiState$exportData = uiState.exportData,
            selectedDataset = _uiState$exportData.selectedDataset,
            dataType = _uiState$exportData.dataType,
            filtered = _uiState$exportData.filtered; // get the selected data

        var filename = 'kepler-gl';
        var selectedDatasets = datasets[selectedDataset] ? [datasets[selectedDataset]] : Object.values(datasets);

        if (!selectedDatasets.length) {
          // error: selected dataset not found.
          _this._closeModal();
        }

        selectedDatasets.forEach(function (selectedData) {
          var allData = selectedData.allData,
              data = selectedData.data,
              fields = selectedData.fields,
              label = selectedData.label;
          var exportData = filtered ? data : allData; // start to export data according to selected data type

          switch (dataType) {
            case _defaultSettings.EXPORT_DATA_TYPE.CSV:
              {
                var type = 'text/csv';
                var csv = (0, _dataProcessor.formatCsv)(exportData, fields);

                _this._downloadFile(csv, type, "".concat(filename, "_").concat(label, ".csv"));

                break;
              }
            // TODO: support more file types.

            default:
              break;
          }
        });

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportJSONMap", function () {
        var uiState = _this.props.uiState;
        var hasData = uiState.exportMap[_defaultSettings.EXPORT_MAP_FORMAT.JSON].hasData; // we pass all props because we avoid to create new variables

        var data = hasData ? _schemas["default"].save(_this.props) : _schemas["default"].getConfigToSave(_this.props);

        _this._downloadFile(JSON.stringify(data, null, 2), 'application/json', 'keplergl.json');

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportHTMLMap", function () {
        var uiState = _this.props.uiState;
        var _uiState$exportMap$EX = uiState.exportMap[_defaultSettings.EXPORT_MAP_FORMAT.HTML],
            userMapboxToken = _uiState$exportMap$EX.userMapboxToken,
            exportMapboxAccessToken = _uiState$exportMap$EX.exportMapboxAccessToken;
        var data = (0, _objectSpread2["default"])({}, _schemas["default"].save(_this.props), {
          mapboxApiAccessToken: (userMapboxToken || '') !== '' ? userMapboxToken : exportMapboxAccessToken
        });

        _this._downloadFile((0, _exportMap.exportMapToHTML)(data), 'text/html', 'kepler.gl.html');

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportMap", function () {
        var _EXPORT_MAP_FORMAT$HT;

        var uiState = _this.props.uiState;
        var format = uiState.exportMap.format;
        var downloader = (_EXPORT_MAP_FORMAT$HT = {}, (0, _defineProperty2["default"])(_EXPORT_MAP_FORMAT$HT, _defaultSettings.EXPORT_MAP_FORMAT.HTML, _this._onExportHTMLMap), (0, _defineProperty2["default"])(_EXPORT_MAP_FORMAT$HT, _defaultSettings.EXPORT_MAP_FORMAT.JSON, _this._onExportJSONMap), _EXPORT_MAP_FORMAT$HT)[format];
        downloader && downloader();
      });
      return _this;
    }

    (0, _createClass2["default"])(ModalWrapper, [{
      key: "_downloadFile",
      value: function _downloadFile(data, type, filename) {
        var fileBlob = new _window.Blob([data], {
          type: type
        });
        (0, _exportImageUtils.downloadFile)(fileBlob, filename);
      }
    }, {
      key: "render",

      /* eslint-disable complexity */
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            containerW = _this$props2.containerW,
            containerH = _this$props2.containerH,
            mapStyle = _this$props2.mapStyle,
            mapState = _this$props2.mapState,
            uiState = _this$props2.uiState,
            visState = _this$props2.visState,
            rootNode = _this$props2.rootNode,
            visStateActions = _this$props2.visStateActions;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;
        var template = null;
        var modalProps = {};

        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          template = _react["default"].createElement(currentModal.template, null);
          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _defaultSettings.DATA_TABLE_ID:
              template = _react["default"].createElement(DataTableModal, {
                width: containerW * 0.9,
                height: containerH * 0.85,
                datasets: datasets,
                dataId: editingDataset,
                showDatasetTable: visStateActions.showDatasetTable
              });
              modalProps.cssStyle = DataTableModalStyle;
              break;

            case _defaultSettings.DELETE_DATA_ID:
              // validate options
              if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                template = _react["default"].createElement(DeleteDatasetModal, {
                  dataset: datasets[datasetKeyToRemove],
                  layers: layers
                });
                modalProps = {
                  title: 'Delete Dataset',
                  cssStyle: DeleteDatasetModalStyled,
                  footer: true,
                  onConfirm: function onConfirm() {
                    return _this2._deleteDataset(datasetKeyToRemove);
                  },
                  onCancel: this._closeModal,
                  confirmButton: {
                    negative: true,
                    large: true,
                    children: 'Delete'
                  }
                };
              }

              break;
            // in case we add a new case after this one

            case _defaultSettings.ADD_DATA_ID:
              template = _react["default"].createElement(LoadDataModal, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload
              });
              modalProps = {
                title: 'Add Data To Map',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;

            case _defaultSettings.EXPORT_IMAGE_ID:
              var _uiState$exportImage = uiState.exportImage,
                  ratio = _uiState$exportImage.ratio,
                  legend = _uiState$exportImage.legend,
                  resolution = _uiState$exportImage.resolution,
                  exporting = _uiState$exportImage.exporting,
                  imageDataUri = _uiState$exportImage.imageDataUri;
              template = _react["default"].createElement(ExportImageModal, {
                width: containerW,
                height: containerH,
                legend: legend,
                ratio: ratio,
                resolution: resolution,
                exporting: exporting,
                imageDataUri: imageDataUri,
                onChangeRatio: this.props.uiStateActions.setRatio,
                onChangeResolution: this.props.uiStateActions.setResolution,
                onToggleLegend: this.props.uiStateActions.toggleLegend
              });
              modalProps = {
                close: false,
                title: 'Export Image',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: exporting,
                  children: 'Download'
                }
              };
              break;

            case _defaultSettings.EXPORT_DATA_ID:
              template = _react["default"].createElement(ExportDataModal, (0, _extends2["default"])({}, uiState.exportData, {
                datasets: datasets,
                onClose: this._closeModal,
                onChangeExportDataType: this.props.uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: this.props.uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: this.props.uiStateActions.setExportFiltered
              }));
              modalProps = {
                close: false,
                title: 'Export Data',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'Export'
                }
              };
              break;

            case _defaultSettings.EXPORT_MAP_ID:
              var keplerGlConfig = _schemas["default"].getConfigToSave({
                mapStyle: mapStyle,
                visState: visState,
                mapState: mapState,
                uiState: uiState
              });

              template = _react["default"].createElement(ExportMapModal, {
                config: keplerGlConfig,
                options: uiState.exportMap,
                onChangeExportMapFormat: this.props.uiStateActions.setExportMapFormat,
                onEditUserMapboxAccessToken: this.props.uiStateActions.setUserMapboxAccessToken
              });
              modalProps = {
                close: false,
                title: 'Export Map',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportMap,
                confirmButton: {
                  large: true,
                  children: 'Export'
                }
              };
              break;

            case _defaultSettings.ADD_MAP_STYLE_ID:
              template = _react["default"].createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                close: false,
                title: 'Add Custom Mapbox Style',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: !mapStyle.inputStyle.style,
                  children: 'Add Style'
                }
              };
              break;

            default:
              break;
          }
        }

        return this.props.rootNode ? _react["default"].createElement(_modal["default"], (0, _extends2["default"])({}, modalProps, {
          parentSelector: function parentSelector() {
            return (0, _reactDom.findDOMNode)(rootNode);
          },
          isOpen: Boolean(currentModal),
          close: this._closeModal
        }), template) : null;
      }
      /* eslint-enable complexity */

    }]);
    return ModalWrapper;
  }(_react.Component);

  (0, _defineProperty2["default"])(ModalWrapper, "propTypes", {
    rootNode: _propTypes["default"].object,
    containerW: _propTypes["default"].number,
    containerH: _propTypes["default"].number,
    mapboxApiAccessToken: _propTypes["default"].string.isRequired,
    mapState: _propTypes["default"].object.isRequired,
    mapStyle: _propTypes["default"].object.isRequired,
    uiState: _propTypes["default"].object.isRequired,
    visState: _propTypes["default"].object.isRequired,
    visStateActions: _propTypes["default"].object.isRequired,
    uiStateActions: _propTypes["default"].object.isRequired,
    mapStyleActions: _propTypes["default"].object.isRequired
  });
  return ModalWrapper;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL21vZGFsLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJEYXRhVGFibGVNb2RhbFN0eWxlIiwiY3NzIiwibWVkaWEiLCJwYWxtIiwiRGVsZXRlRGF0YXNldE1vZGFsU3R5bGVkIiwiTG9hZERhdGFNb2RhbFN0eWxlIiwiTW9kYWxDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIkRlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkiLCJEYXRhVGFibGVNb2RhbEZhY3RvcnkiLCJMb2FkRGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWxGYWN0b3J5IiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydE1hcE1vZGFsRmFjdG9yeSIsIkFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IiwiRGVsZXRlRGF0YXNldE1vZGFsIiwiRGF0YVRhYmxlTW9kYWwiLCJMb2FkRGF0YU1vZGFsIiwiRXhwb3J0SW1hZ2VNb2RhbCIsIkV4cG9ydERhdGFNb2RhbCIsIkV4cG9ydE1hcE1vZGFsIiwiQWRkTWFwU3R5bGVNb2RhbCIsIk1vZGFsV3JhcHBlciIsInByb3BzIiwidWlTdGF0ZUFjdGlvbnMiLCJ0b2dnbGVNb2RhbCIsImtleSIsInZpc1N0YXRlQWN0aW9ucyIsInJlbW92ZURhdGFzZXQiLCJfY2xvc2VNb2RhbCIsIm1hcFN0eWxlQWN0aW9ucyIsImFkZEN1c3RvbU1hcFN0eWxlIiwiYmxvYiIsImxvYWRGaWxlcyIsInVpU3RhdGUiLCJleHBvcnRJbWFnZSIsImV4cG9ydGluZyIsImltYWdlRGF0YVVyaSIsImZpbGUiLCJERUZBVUxUX0VYUE9SVF9JTUFHRV9OQU1FIiwiY2xlYW51cEV4cG9ydEltYWdlIiwidmlzU3RhdGUiLCJkYXRhc2V0cyIsImV4cG9ydERhdGEiLCJzZWxlY3RlZERhdGFzZXQiLCJkYXRhVHlwZSIsImZpbHRlcmVkIiwiZmlsZW5hbWUiLCJzZWxlY3RlZERhdGFzZXRzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsInNlbGVjdGVkRGF0YSIsImFsbERhdGEiLCJkYXRhIiwiZmllbGRzIiwibGFiZWwiLCJFWFBPUlRfREFUQV9UWVBFIiwiQ1NWIiwidHlwZSIsImNzdiIsIl9kb3dubG9hZEZpbGUiLCJoYXNEYXRhIiwiZXhwb3J0TWFwIiwiRVhQT1JUX01BUF9GT1JNQVQiLCJKU09OIiwiS2VwbGVyR2xTY2hlbWEiLCJzYXZlIiwiZ2V0Q29uZmlnVG9TYXZlIiwic3RyaW5naWZ5IiwiSFRNTCIsInVzZXJNYXBib3hUb2tlbiIsImV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJmb3JtYXQiLCJkb3dubG9hZGVyIiwiX29uRXhwb3J0SFRNTE1hcCIsIl9vbkV4cG9ydEpTT05NYXAiLCJmaWxlQmxvYiIsIkJsb2IiLCJjb250YWluZXJXIiwiY29udGFpbmVySCIsIm1hcFN0eWxlIiwibWFwU3RhdGUiLCJyb290Tm9kZSIsImN1cnJlbnRNb2RhbCIsImRhdGFzZXRLZXlUb1JlbW92ZSIsImxheWVycyIsImVkaXRpbmdEYXRhc2V0IiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwiaWQiLCJEQVRBX1RBQkxFX0lEIiwic2hvd0RhdGFzZXRUYWJsZSIsImNzc1N0eWxlIiwiREVMRVRFX0RBVEFfSUQiLCJ0aXRsZSIsImZvb3RlciIsIm9uQ29uZmlybSIsIl9kZWxldGVEYXRhc2V0Iiwib25DYW5jZWwiLCJjb25maXJtQnV0dG9uIiwibmVnYXRpdmUiLCJsYXJnZSIsImNoaWxkcmVuIiwiQUREX0RBVEFfSUQiLCJfb25GaWxlVXBsb2FkIiwiRVhQT1JUX0lNQUdFX0lEIiwicmF0aW8iLCJsZWdlbmQiLCJyZXNvbHV0aW9uIiwic2V0UmF0aW8iLCJzZXRSZXNvbHV0aW9uIiwidG9nZ2xlTGVnZW5kIiwiY2xvc2UiLCJfb25FeHBvcnRJbWFnZSIsImRpc2FibGVkIiwiRVhQT1JUX0RBVEFfSUQiLCJzZXRFeHBvcnREYXRhVHlwZSIsInNldEV4cG9ydFNlbGVjdGVkRGF0YXNldCIsInNldEV4cG9ydEZpbHRlcmVkIiwiX29uRXhwb3J0RGF0YSIsIkVYUE9SVF9NQVBfSUQiLCJrZXBsZXJHbENvbmZpZyIsInNldEV4cG9ydE1hcEZvcm1hdCIsInNldFVzZXJNYXBib3hBY2Nlc3NUb2tlbiIsIl9vbkV4cG9ydE1hcCIsIkFERF9NQVBfU1RZTEVfSUQiLCJpbnB1dFN0eWxlIiwiaW5wdXRNYXBTdHlsZSIsImxvYWRDdXN0b21NYXBTdHlsZSIsIl9vbkFkZEN1c3RvbU1hcFN0eWxlIiwic3R5bGUiLCJCb29sZWFuIiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwibnVtYmVyIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFHQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYUEsSUFBTUEsbUJBQW1CLE9BQUdDLHFCQUFILHFCQU1yQkMsd0JBQU1DLElBTmUscUJBQXpCO0FBYUEsSUFBTUMsd0JBQXdCLE9BQUdILHFCQUFILHFCQUE5QjtBQUtBLElBQU1JLGtCQUFrQixPQUFHSixxQkFBSCxxQkFBeEI7QUFJQUsscUJBQXFCLENBQUNDLElBQXRCLEdBQTZCLENBQzNCQywyQkFEMkIsRUFFM0JDLDBCQUYyQixFQUczQkMseUJBSDJCLEVBSTNCQyw0QkFKMkIsRUFLM0JDLDJCQUwyQixFQU0zQkMsMEJBTjJCLEVBTzNCQyw0QkFQMkIsQ0FBN0I7O0FBVWUsU0FBU1IscUJBQVQsQ0FDYlMsa0JBRGEsRUFFYkMsY0FGYSxFQUdiQyxhQUhhLEVBSWJDLGdCQUphLEVBS2JDLGVBTGEsRUFNYkMsY0FOYSxFQU9iQyxnQkFQYSxFQVFiO0FBQUEsTUFDTUMsWUFETjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNHQWdCZ0IsWUFBTTtBQUNsQixjQUFLQyxLQUFMLENBQVdDLGNBQVgsQ0FBMEJDLFdBQTFCLENBQXNDLElBQXRDO0FBQ0QsT0FsQkg7QUFBQSx5R0FvQm1CLFVBQUFDLEdBQUcsRUFBSTtBQUN0QixjQUFLSCxLQUFMLENBQVdJLGVBQVgsQ0FBMkJDLGFBQTNCLENBQXlDRixHQUF6Qzs7QUFDQSxjQUFLRyxXQUFMO0FBQ0QsT0F2Qkg7QUFBQSwrR0F5QnlCLFlBQU07QUFDM0IsY0FBS04sS0FBTCxDQUFXTyxlQUFYLENBQTJCQyxpQkFBM0I7O0FBQ0EsY0FBS0YsV0FBTDtBQUNELE9BNUJIO0FBQUEsd0dBOEJrQixVQUFBRyxJQUFJLEVBQUk7QUFDdEIsY0FBS1QsS0FBTCxDQUFXSSxlQUFYLENBQTJCTSxTQUEzQixDQUFxQ0QsSUFBckM7QUFDRCxPQWhDSDtBQUFBLHlHQWtDbUIsWUFBTTtBQUFBLG9DQUNhLE1BQUtULEtBQUwsQ0FBV1csT0FBWCxDQUFtQkMsV0FEaEM7QUFBQSxZQUNkQyxTQURjLHlCQUNkQSxTQURjO0FBQUEsWUFDSEMsWUFERyx5QkFDSEEsWUFERzs7QUFFckIsWUFBSSxDQUFDRCxTQUFELElBQWNDLFlBQWxCLEVBQWdDO0FBQzlCLGNBQU1DLElBQUksR0FBRyxxQ0FBY0QsWUFBZCxDQUFiO0FBQ0EsOENBQWFDLElBQWIsRUFBbUJDLDBDQUFuQjtBQUNEOztBQUNELGNBQUtoQixLQUFMLENBQVdDLGNBQVgsQ0FBMEJnQixrQkFBMUI7O0FBQ0EsY0FBS1gsV0FBTDtBQUNELE9BMUNIO0FBQUEsd0dBaURrQixZQUFNO0FBQUEsMEJBQ1EsTUFBS04sS0FEYjtBQUFBLFlBQ2JrQixRQURhLGVBQ2JBLFFBRGE7QUFBQSxZQUNIUCxPQURHLGVBQ0hBLE9BREc7QUFBQSxZQUViUSxRQUZhLEdBRURELFFBRkMsQ0FFYkMsUUFGYTtBQUFBLGtDQUcwQlIsT0FBTyxDQUFDUyxVQUhsQztBQUFBLFlBR2JDLGVBSGEsdUJBR2JBLGVBSGE7QUFBQSxZQUdJQyxRQUhKLHVCQUdJQSxRQUhKO0FBQUEsWUFHY0MsUUFIZCx1QkFHY0EsUUFIZCxFQUlwQjs7QUFDQSxZQUFNQyxRQUFRLEdBQUcsV0FBakI7QUFDQSxZQUFNQyxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDRSxlQUFELENBQVIsR0FBNEIsQ0FBQ0YsUUFBUSxDQUFDRSxlQUFELENBQVQsQ0FBNUIsR0FBMERLLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixRQUFkLENBQW5GOztBQUNBLFlBQUksQ0FBQ00sZ0JBQWdCLENBQUNHLE1BQXRCLEVBQThCO0FBQzVCO0FBQ0EsZ0JBQUt0QixXQUFMO0FBQ0Q7O0FBRURtQixRQUFBQSxnQkFBZ0IsQ0FBQ0ksT0FBakIsQ0FBeUIsVUFBQUMsWUFBWSxFQUFJO0FBQUEsY0FDaENDLE9BRGdDLEdBQ0FELFlBREEsQ0FDaENDLE9BRGdDO0FBQUEsY0FDdkJDLElBRHVCLEdBQ0FGLFlBREEsQ0FDdkJFLElBRHVCO0FBQUEsY0FDakJDLE1BRGlCLEdBQ0FILFlBREEsQ0FDakJHLE1BRGlCO0FBQUEsY0FDVEMsS0FEUyxHQUNBSixZQURBLENBQ1RJLEtBRFM7QUFFdkMsY0FBTWQsVUFBVSxHQUFHRyxRQUFRLEdBQUdTLElBQUgsR0FBVUQsT0FBckMsQ0FGdUMsQ0FHdkM7O0FBQ0Esa0JBQVFULFFBQVI7QUFDRSxpQkFBS2Esa0NBQWlCQyxHQUF0QjtBQUEyQjtBQUN6QixvQkFBTUMsSUFBSSxHQUFHLFVBQWI7QUFDQSxvQkFBTUMsR0FBRyxHQUFHLDhCQUFVbEIsVUFBVixFQUFzQmEsTUFBdEIsQ0FBWjs7QUFDQSxzQkFBS00sYUFBTCxDQUFtQkQsR0FBbkIsRUFBd0JELElBQXhCLFlBQWlDYixRQUFqQyxjQUE2Q1UsS0FBN0M7O0FBQ0E7QUFDRDtBQUNEOztBQUNBO0FBQ0U7QUFUSjtBQVlELFNBaEJEOztBQWtCQSxjQUFLNUIsV0FBTDtBQUNELE9BaEZIO0FBQUEsMkdBa0ZxQixZQUFNO0FBQUEsWUFDaEJLLE9BRGdCLEdBQ0wsTUFBS1gsS0FEQSxDQUNoQlcsT0FEZ0I7QUFBQSxZQUVoQjZCLE9BRmdCLEdBRUw3QixPQUFPLENBQUM4QixTQUFSLENBQWtCQyxtQ0FBa0JDLElBQXBDLENBRkssQ0FFaEJILE9BRmdCLEVBSXZCOztBQUNBLFlBQU1SLElBQUksR0FBR1EsT0FBTyxHQUFHSSxvQkFBZUMsSUFBZixDQUFvQixNQUFLN0MsS0FBekIsQ0FBSCxHQUNoQjRDLG9CQUFlRSxlQUFmLENBQStCLE1BQUs5QyxLQUFwQyxDQURKOztBQUdBLGNBQUt1QyxhQUFMLENBQ0VJLElBQUksQ0FBQ0ksU0FBTCxDQUFlZixJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCLENBREYsRUFFRSxrQkFGRixFQUdFLGVBSEY7O0FBTUEsY0FBSzFCLFdBQUw7QUFDRCxPQWpHSDtBQUFBLDJHQW1HcUIsWUFBTTtBQUFBLFlBQ2hCSyxPQURnQixHQUNMLE1BQUtYLEtBREEsQ0FDaEJXLE9BRGdCO0FBQUEsb0NBRTRCQSxPQUFPLENBQUM4QixTQUFSLENBQWtCQyxtQ0FBa0JNLElBQXBDLENBRjVCO0FBQUEsWUFFaEJDLGVBRmdCLHlCQUVoQkEsZUFGZ0I7QUFBQSxZQUVDQyx1QkFGRCx5QkFFQ0EsdUJBRkQ7QUFJdkIsWUFBTWxCLElBQUksc0NBQ0xZLG9CQUFlQyxJQUFmLENBQW9CLE1BQUs3QyxLQUF6QixDQURLO0FBRVJtRCxVQUFBQSxvQkFBb0IsRUFBRSxDQUFDRixlQUFlLElBQUksRUFBcEIsTUFBNEIsRUFBNUIsR0FBaUNBLGVBQWpDLEdBQW1EQztBQUZqRSxVQUFWOztBQUtBLGNBQUtYLGFBQUwsQ0FDRSxnQ0FBZ0JQLElBQWhCLENBREYsRUFFRSxXQUZGLEVBR0UsZ0JBSEY7O0FBTUEsY0FBSzFCLFdBQUw7QUFDRCxPQW5ISDtBQUFBLHVHQXFIaUIsWUFBTTtBQUFBOztBQUFBLFlBQ1pLLE9BRFksR0FDRCxNQUFLWCxLQURKLENBQ1pXLE9BRFk7QUFBQSxZQUVaeUMsTUFGWSxHQUVGekMsT0FBTyxDQUFDOEIsU0FGTixDQUVaVyxNQUZZO0FBSW5CLFlBQU1DLFVBQVUsR0FBRyxxRkFDaEJYLG1DQUFrQk0sSUFERixFQUNTLE1BQUtNLGdCQURkLDJEQUVoQlosbUNBQWtCQyxJQUZGLEVBRVMsTUFBS1ksZ0JBRmQsMEJBR2pCSCxNQUhpQixDQUFuQjtBQUtBQyxRQUFBQSxVQUFVLElBQUlBLFVBQVUsRUFBeEI7QUFDRCxPQS9ISDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG9DQTRDZ0JyQixJQTVDaEIsRUE0Q3NCSyxJQTVDdEIsRUE0QzRCYixRQTVDNUIsRUE0Q3NDO0FBQ2xDLFlBQU1nQyxRQUFRLEdBQUcsSUFBSUMsWUFBSixDQUFTLENBQUN6QixJQUFELENBQVQsRUFBaUI7QUFBQ0ssVUFBQUEsSUFBSSxFQUFKQTtBQUFELFNBQWpCLENBQWpCO0FBQ0EsNENBQWFtQixRQUFiLEVBQXVCaEMsUUFBdkI7QUFDRDtBQS9DSDtBQUFBOztBQWlJRTtBQWpJRiwrQkFrSVc7QUFBQTs7QUFBQSwyQkFVSCxLQUFLeEIsS0FWRjtBQUFBLFlBRUwwRCxVQUZLLGdCQUVMQSxVQUZLO0FBQUEsWUFHTEMsVUFISyxnQkFHTEEsVUFISztBQUFBLFlBSUxDLFFBSkssZ0JBSUxBLFFBSks7QUFBQSxZQUtMQyxRQUxLLGdCQUtMQSxRQUxLO0FBQUEsWUFNTGxELE9BTkssZ0JBTUxBLE9BTks7QUFBQSxZQU9MTyxRQVBLLGdCQU9MQSxRQVBLO0FBQUEsWUFRTDRDLFFBUkssZ0JBUUxBLFFBUks7QUFBQSxZQVNMMUQsZUFUSyxnQkFTTEEsZUFUSztBQUFBLFlBV0EyRCxZQVhBLEdBV29DcEQsT0FYcEMsQ0FXQW9ELFlBWEE7QUFBQSxZQVdjQyxrQkFYZCxHQVdvQ3JELE9BWHBDLENBV2NxRCxrQkFYZDtBQUFBLFlBWUE3QyxRQVpBLEdBWW9DRCxRQVpwQyxDQVlBQyxRQVpBO0FBQUEsWUFZVThDLE1BWlYsR0FZb0MvQyxRQVpwQyxDQVlVK0MsTUFaVjtBQUFBLFlBWWtCQyxjQVpsQixHQVlvQ2hELFFBWnBDLENBWWtCZ0QsY0FabEI7QUFjUCxZQUFJQyxRQUFRLEdBQUcsSUFBZjtBQUNBLFlBQUlDLFVBQVUsR0FBRyxFQUFqQjs7QUFFQSxZQUFJTCxZQUFZLElBQUlBLFlBQVksQ0FBQ00sRUFBN0IsSUFDRk4sWUFBWSxDQUFDSSxRQURmLEVBQ3lCO0FBQ3ZCO0FBQ0E7QUFDQUEsVUFBQUEsUUFBUSxHQUFJLGdDQUFDLFlBQUQsQ0FBYyxRQUFkLE9BQVo7QUFDQUMsVUFBQUEsVUFBVSxHQUFHTCxZQUFZLENBQUNLLFVBQTFCO0FBQ0QsU0FORCxNQU1PO0FBQ0wsa0JBQVFMLFlBQVI7QUFDRSxpQkFBS08sOEJBQUw7QUFDRUgsY0FBQUEsUUFBUSxHQUNOLGdDQUFDLGNBQUQ7QUFDRSxnQkFBQSxLQUFLLEVBQUVULFVBQVUsR0FBRyxHQUR0QjtBQUVFLGdCQUFBLE1BQU0sRUFBRUMsVUFBVSxHQUFHLElBRnZCO0FBR0UsZ0JBQUEsUUFBUSxFQUFFeEMsUUFIWjtBQUlFLGdCQUFBLE1BQU0sRUFBRStDLGNBSlY7QUFLRSxnQkFBQSxnQkFBZ0IsRUFBRTlELGVBQWUsQ0FBQ21FO0FBTHBDLGdCQURGO0FBU0FILGNBQUFBLFVBQVUsQ0FBQ0ksUUFBWCxHQUFzQi9GLG1CQUF0QjtBQUNBOztBQUNGLGlCQUFLZ0csK0JBQUw7QUFDRTtBQUNBLGtCQUFJVCxrQkFBa0IsSUFBSTdDLFFBQXRCLElBQWtDQSxRQUFRLENBQUM2QyxrQkFBRCxDQUE5QyxFQUFvRTtBQUNsRUcsZ0JBQUFBLFFBQVEsR0FDTixnQ0FBQyxrQkFBRDtBQUNFLGtCQUFBLE9BQU8sRUFBRWhELFFBQVEsQ0FBQzZDLGtCQUFELENBRG5CO0FBRUUsa0JBQUEsTUFBTSxFQUFFQztBQUZWLGtCQURGO0FBT0FHLGdCQUFBQSxVQUFVLEdBQUc7QUFDWE0sa0JBQUFBLEtBQUssRUFBRSxnQkFESTtBQUVYRixrQkFBQUEsUUFBUSxFQUFFM0Ysd0JBRkM7QUFHWDhGLGtCQUFBQSxNQUFNLEVBQUUsSUFIRztBQUlYQyxrQkFBQUEsU0FBUyxFQUFFO0FBQUEsMkJBQU0sTUFBSSxDQUFDQyxjQUFMLENBQW9CYixrQkFBcEIsQ0FBTjtBQUFBLG1CQUpBO0FBS1hjLGtCQUFBQSxRQUFRLEVBQUUsS0FBS3hFLFdBTEo7QUFNWHlFLGtCQUFBQSxhQUFhLEVBQUU7QUFDYkMsb0JBQUFBLFFBQVEsRUFBRSxJQURHO0FBRWJDLG9CQUFBQSxLQUFLLEVBQUUsSUFGTTtBQUdiQyxvQkFBQUEsUUFBUSxFQUFFO0FBSEc7QUFOSixpQkFBYjtBQVlEOztBQUNEO0FBQU87O0FBQ1QsaUJBQUtDLDRCQUFMO0FBQ0VoQixjQUFBQSxRQUFRLEdBQ04sZ0NBQUMsYUFBRDtBQUNFLGdCQUFBLE9BQU8sRUFBRSxLQUFLN0QsV0FEaEI7QUFFRSxnQkFBQSxZQUFZLEVBQUUsS0FBSzhFO0FBRnJCLGdCQURGO0FBTUFoQixjQUFBQSxVQUFVLEdBQUc7QUFDWE0sZ0JBQUFBLEtBQUssRUFBRSxpQkFESTtBQUVYRixnQkFBQUEsUUFBUSxFQUFFMUYsa0JBRkM7QUFHWDZGLGdCQUFBQSxNQUFNLEVBQUUsS0FIRztBQUlYQyxnQkFBQUEsU0FBUyxFQUFFLEtBQUt0RTtBQUpMLGVBQWI7QUFNQTs7QUFDRixpQkFBSytFLGdDQUFMO0FBQUEseUNBQ2lFMUUsT0FBTyxDQUFDQyxXQUR6RTtBQUFBLGtCQUNVMEUsS0FEVix3QkFDVUEsS0FEVjtBQUFBLGtCQUNpQkMsTUFEakIsd0JBQ2lCQSxNQURqQjtBQUFBLGtCQUN5QkMsVUFEekIsd0JBQ3lCQSxVQUR6QjtBQUFBLGtCQUNxQzNFLFNBRHJDLHdCQUNxQ0EsU0FEckM7QUFBQSxrQkFDZ0RDLFlBRGhELHdCQUNnREEsWUFEaEQ7QUFFRXFELGNBQUFBLFFBQVEsR0FDTixnQ0FBQyxnQkFBRDtBQUNFLGdCQUFBLEtBQUssRUFBRVQsVUFEVDtBQUVFLGdCQUFBLE1BQU0sRUFBRUMsVUFGVjtBQUdFLGdCQUFBLE1BQU0sRUFBRTRCLE1BSFY7QUFJRSxnQkFBQSxLQUFLLEVBQUVELEtBSlQ7QUFLRSxnQkFBQSxVQUFVLEVBQUVFLFVBTGQ7QUFNRSxnQkFBQSxTQUFTLEVBQUUzRSxTQU5iO0FBT0UsZ0JBQUEsWUFBWSxFQUFFQyxZQVBoQjtBQVFFLGdCQUFBLGFBQWEsRUFBRSxLQUFLZCxLQUFMLENBQVdDLGNBQVgsQ0FBMEJ3RixRQVIzQztBQVNFLGdCQUFBLGtCQUFrQixFQUFFLEtBQUt6RixLQUFMLENBQVdDLGNBQVgsQ0FBMEJ5RixhQVRoRDtBQVVFLGdCQUFBLGNBQWMsRUFBRSxLQUFLMUYsS0FBTCxDQUFXQyxjQUFYLENBQTBCMEY7QUFWNUMsZ0JBREY7QUFjQXZCLGNBQUFBLFVBQVUsR0FBRztBQUNYd0IsZ0JBQUFBLEtBQUssRUFBRSxLQURJO0FBRVhsQixnQkFBQUEsS0FBSyxFQUFFLGNBRkk7QUFHWEMsZ0JBQUFBLE1BQU0sRUFBRSxJQUhHO0FBSVhHLGdCQUFBQSxRQUFRLEVBQUUsS0FBS3hFLFdBSko7QUFLWHNFLGdCQUFBQSxTQUFTLEVBQUUsS0FBS2lCLGNBTEw7QUFNWGQsZ0JBQUFBLGFBQWEsRUFBRTtBQUNiRSxrQkFBQUEsS0FBSyxFQUFFLElBRE07QUFFYmEsa0JBQUFBLFFBQVEsRUFBRWpGLFNBRkc7QUFHYnFFLGtCQUFBQSxRQUFRLEVBQUU7QUFIRztBQU5KLGVBQWI7QUFZQTs7QUFDRixpQkFBS2EsK0JBQUw7QUFDRTVCLGNBQUFBLFFBQVEsR0FDTixnQ0FBQyxlQUFELGdDQUNNeEQsT0FBTyxDQUFDUyxVQURkO0FBRUUsZ0JBQUEsUUFBUSxFQUFFRCxRQUZaO0FBR0UsZ0JBQUEsT0FBTyxFQUFFLEtBQUtiLFdBSGhCO0FBSUUsZ0JBQUEsc0JBQXNCLEVBQUUsS0FBS04sS0FBTCxDQUFXQyxjQUFYLENBQTBCK0YsaUJBSnBEO0FBS0UsZ0JBQUEsNkJBQTZCLEVBQUUsS0FBS2hHLEtBQUwsQ0FBV0MsY0FBWCxDQUEwQmdHLHdCQUwzRDtBQU1FLGdCQUFBLHNCQUFzQixFQUFFLEtBQUtqRyxLQUFMLENBQVdDLGNBQVgsQ0FBMEJpRztBQU5wRCxpQkFERjtBQVVBOUIsY0FBQUEsVUFBVSxHQUFHO0FBQ1h3QixnQkFBQUEsS0FBSyxFQUFFLEtBREk7QUFFWGxCLGdCQUFBQSxLQUFLLEVBQUUsYUFGSTtBQUdYQyxnQkFBQUEsTUFBTSxFQUFFLElBSEc7QUFJWEcsZ0JBQUFBLFFBQVEsRUFBRSxLQUFLeEUsV0FKSjtBQUtYc0UsZ0JBQUFBLFNBQVMsRUFBRSxLQUFLdUIsYUFMTDtBQU1YcEIsZ0JBQUFBLGFBQWEsRUFBRTtBQUNiRSxrQkFBQUEsS0FBSyxFQUFFLElBRE07QUFFYkMsa0JBQUFBLFFBQVEsRUFBRTtBQUZHO0FBTkosZUFBYjtBQVdBOztBQUNGLGlCQUFLa0IsOEJBQUw7QUFDRSxrQkFBTUMsY0FBYyxHQUFHekQsb0JBQWVFLGVBQWYsQ0FDckI7QUFBRWMsZ0JBQUFBLFFBQVEsRUFBUkEsUUFBRjtBQUFZMUMsZ0JBQUFBLFFBQVEsRUFBUkEsUUFBWjtBQUFzQjJDLGdCQUFBQSxRQUFRLEVBQVJBLFFBQXRCO0FBQWdDbEQsZ0JBQUFBLE9BQU8sRUFBUEE7QUFBaEMsZUFEcUIsQ0FBdkI7O0FBR0F3RCxjQUFBQSxRQUFRLEdBQ04sZ0NBQUMsY0FBRDtBQUNFLGdCQUFBLE1BQU0sRUFBRWtDLGNBRFY7QUFFRSxnQkFBQSxPQUFPLEVBQUUxRixPQUFPLENBQUM4QixTQUZuQjtBQUdFLGdCQUFBLHVCQUF1QixFQUFFLEtBQUt6QyxLQUFMLENBQVdDLGNBQVgsQ0FBMEJxRyxrQkFIckQ7QUFJRSxnQkFBQSwyQkFBMkIsRUFBRSxLQUFLdEcsS0FBTCxDQUFXQyxjQUFYLENBQTBCc0c7QUFKekQsZ0JBREY7QUFRQW5DLGNBQUFBLFVBQVUsR0FBRztBQUNYd0IsZ0JBQUFBLEtBQUssRUFBRSxLQURJO0FBRVhsQixnQkFBQUEsS0FBSyxFQUFFLFlBRkk7QUFHWEMsZ0JBQUFBLE1BQU0sRUFBRSxJQUhHO0FBSVhHLGdCQUFBQSxRQUFRLEVBQUUsS0FBS3hFLFdBSko7QUFLWHNFLGdCQUFBQSxTQUFTLEVBQUUsS0FBSzRCLFlBTEw7QUFNWHpCLGdCQUFBQSxhQUFhLEVBQUU7QUFDYkUsa0JBQUFBLEtBQUssRUFBRSxJQURNO0FBRWJDLGtCQUFBQSxRQUFRLEVBQUU7QUFGRztBQU5KLGVBQWI7QUFXQTs7QUFDRixpQkFBS3VCLGlDQUFMO0FBQ0V0QyxjQUFBQSxRQUFRLEdBQ04sZ0NBQUMsZ0JBQUQ7QUFDRSxnQkFBQSxvQkFBb0IsRUFBRSxLQUFLbkUsS0FBTCxDQUFXbUQsb0JBRG5DO0FBRUUsZ0JBQUEsUUFBUSxFQUFFLEtBQUtuRCxLQUFMLENBQVc2RCxRQUZ2QjtBQUdFLGdCQUFBLFVBQVUsRUFBRUQsUUFBUSxDQUFDOEMsVUFIdkI7QUFJRSxnQkFBQSxhQUFhLEVBQUUsS0FBSzFHLEtBQUwsQ0FBV08sZUFBWCxDQUEyQm9HLGFBSjVDO0FBS0UsZ0JBQUEsa0JBQWtCLEVBQUUsS0FBSzNHLEtBQUwsQ0FBV08sZUFBWCxDQUEyQnFHO0FBTGpELGdCQURGO0FBU0F4QyxjQUFBQSxVQUFVLEdBQUc7QUFDWHdCLGdCQUFBQSxLQUFLLEVBQUUsS0FESTtBQUVYbEIsZ0JBQUFBLEtBQUssRUFBRSx5QkFGSTtBQUdYQyxnQkFBQUEsTUFBTSxFQUFFLElBSEc7QUFJWEcsZ0JBQUFBLFFBQVEsRUFBRSxLQUFLeEUsV0FKSjtBQUtYc0UsZ0JBQUFBLFNBQVMsRUFBRSxLQUFLaUMsb0JBTEw7QUFNWDlCLGdCQUFBQSxhQUFhLEVBQUU7QUFDYkUsa0JBQUFBLEtBQUssRUFBRSxJQURNO0FBRWJhLGtCQUFBQSxRQUFRLEVBQUUsQ0FBQ2xDLFFBQVEsQ0FBQzhDLFVBQVQsQ0FBb0JJLEtBRmxCO0FBR2I1QixrQkFBQUEsUUFBUSxFQUFFO0FBSEc7QUFOSixlQUFiO0FBWUE7O0FBRUY7QUFDRTtBQXhKSjtBQTBKRDs7QUFFRCxlQUFPLEtBQUtsRixLQUFMLENBQVc4RCxRQUFYLEdBQ0wsZ0NBQUMsaUJBQUQsZ0NBQ01NLFVBRE47QUFFRSxVQUFBLGNBQWMsRUFBRTtBQUFBLG1CQUFNLDJCQUFZTixRQUFaLENBQU47QUFBQSxXQUZsQjtBQUdFLFVBQUEsTUFBTSxFQUFFaUQsT0FBTyxDQUFDaEQsWUFBRCxDQUhqQjtBQUlFLFVBQUEsS0FBSyxFQUFFLEtBQUt6RDtBQUpkLFlBTUc2RCxRQU5ILENBREssR0FTSCxJQVRKO0FBVUQ7QUFDRDs7QUFqVUY7QUFBQTtBQUFBLElBQzJCNkMsZ0JBRDNCOztBQUFBLG1DQUNNakgsWUFETixlQUVxQjtBQUNqQitELElBQUFBLFFBQVEsRUFBRW1ELHNCQUFVQyxNQURIO0FBRWpCeEQsSUFBQUEsVUFBVSxFQUFFdUQsc0JBQVVFLE1BRkw7QUFHakJ4RCxJQUFBQSxVQUFVLEVBQUVzRCxzQkFBVUUsTUFITDtBQUlqQmhFLElBQUFBLG9CQUFvQixFQUFFOEQsc0JBQVVHLE1BQVYsQ0FBaUJDLFVBSnRCO0FBS2pCeEQsSUFBQUEsUUFBUSxFQUFFb0Qsc0JBQVVDLE1BQVYsQ0FBaUJHLFVBTFY7QUFNakJ6RCxJQUFBQSxRQUFRLEVBQUVxRCxzQkFBVUMsTUFBVixDQUFpQkcsVUFOVjtBQU9qQjFHLElBQUFBLE9BQU8sRUFBRXNHLHNCQUFVQyxNQUFWLENBQWlCRyxVQVBUO0FBUWpCbkcsSUFBQUEsUUFBUSxFQUFFK0Ysc0JBQVVDLE1BQVYsQ0FBaUJHLFVBUlY7QUFTakJqSCxJQUFBQSxlQUFlLEVBQUU2RyxzQkFBVUMsTUFBVixDQUFpQkcsVUFUakI7QUFVakJwSCxJQUFBQSxjQUFjLEVBQUVnSCxzQkFBVUMsTUFBVixDQUFpQkcsVUFWaEI7QUFXakI5RyxJQUFBQSxlQUFlLEVBQUUwRyxzQkFBVUMsTUFBVixDQUFpQkc7QUFYakIsR0FGckI7QUFvVUEsU0FBT3RILFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtCbG9ifSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4vY29tbW9uL21vZGFsJztcbmltcG9ydCB7Zm9ybWF0Q3N2fSBmcm9tICdwcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yJztcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdzY2hlbWFzJztcbmltcG9ydCB7ZG93bmxvYWRGaWxlLCBkYXRhVVJJdG9CbG9ifSBmcm9tICd1dGlscy9leHBvcnQtaW1hZ2UtdXRpbHMnO1xuLy8gbW9kYWxzXG5pbXBvcnQgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9kZWxldGUtZGF0YS1tb2RhbCc7XG5pbXBvcnQgRGF0YVRhYmxlTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2RhdGEtdGFibGUtbW9kYWwnO1xuaW1wb3J0IExvYWREYXRhTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2xvYWQtZGF0YS1tb2RhbCc7XG5pbXBvcnQgRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWltYWdlLW1vZGFsJztcbmltcG9ydCBFeHBvcnREYXRhTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2V4cG9ydC1kYXRhLW1vZGFsJztcbmltcG9ydCBFeHBvcnRNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LW1hcC1tb2RhbCc7XG5pbXBvcnQgQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvYWRkLW1hcC1zdHlsZS1tb2RhbCc7XG5cbi8vIEJyZWFrcG9pbnRzXG5pbXBvcnQge21lZGlhfSBmcm9tICdzdHlsZXMvbWVkaWEtYnJlYWtwb2ludHMnO1xuXG4vLyBUZW1wbGF0ZVxuaW1wb3J0IHtleHBvcnRNYXBUb0hUTUx9IGZyb20gJ3RlbXBsYXRlcy9leHBvcnQtbWFwJztcbmltcG9ydCB7XG4gIEFERF9EQVRBX0lELFxuICBEQVRBX1RBQkxFX0lELFxuICBERUZBVUxUX0VYUE9SVF9JTUFHRV9OQU1FLFxuICBERUxFVEVfREFUQV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9EQVRBX1RZUEUsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX01BUF9JRCxcbiAgQUREX01BUF9TVFlMRV9JRFxufSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5pbXBvcnQge0VYUE9SVF9NQVBfRk9STUFUfSBmcm9tICcuLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbmNvbnN0IERhdGFUYWJsZU1vZGFsU3R5bGUgPSBjc3NgXG4gIGhlaWdodDogODUlO1xuICB3aWR0aDogOTAlO1xuICB0b3A6IDgwcHg7XG4gIHBhZGRpbmc6IDMycHggMCAwIDA7XG4gIG1heC13aWR0aDogdW5zZXQ7XG4gICR7bWVkaWEucGFsbWBcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIGB9XG5gO1xuXG5jb25zdCBEZWxldGVEYXRhc2V0TW9kYWxTdHlsZWQgPSBjc3NgXG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAzMnB4IDQwcHg7XG5gO1xuXG5jb25zdCBMb2FkRGF0YU1vZGFsU3R5bGUgPSBjc3NgXG4gIHRvcDogNjBweDtcbmA7XG5cbk1vZGFsQ29udGFpbmVyRmFjdG9yeS5kZXBzID0gW1xuICBEZWxldGVEYXRhc2V0TW9kYWxGYWN0b3J5LFxuICBEYXRhVGFibGVNb2RhbEZhY3RvcnksXG4gIExvYWREYXRhTW9kYWxGYWN0b3J5LFxuICBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0TWFwTW9kYWxGYWN0b3J5LFxuICBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxDb250YWluZXJGYWN0b3J5KFxuICBEZWxldGVEYXRhc2V0TW9kYWwsXG4gIERhdGFUYWJsZU1vZGFsLFxuICBMb2FkRGF0YU1vZGFsLFxuICBFeHBvcnRJbWFnZU1vZGFsLFxuICBFeHBvcnREYXRhTW9kYWwsXG4gIEV4cG9ydE1hcE1vZGFsLFxuICBBZGRNYXBTdHlsZU1vZGFsXG4pIHtcbiAgY2xhc3MgTW9kYWxXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgcm9vdE5vZGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgICBjb250YWluZXJXOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgY29udGFpbmVySDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdGF0ZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHVpU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBtYXBTdHlsZUFjdGlvbnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICAgIH07XG5cbiAgICBfY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwobnVsbCk7XG4gICAgfTtcblxuICAgIF9kZWxldGVEYXRhc2V0ID0ga2V5ID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQoa2V5KTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uQWRkQ3VzdG9tTWFwU3R5bGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5hZGRDdXN0b21NYXBTdHlsZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25GaWxlVXBsb2FkID0gYmxvYiA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5sb2FkRmlsZXMoYmxvYik7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEltYWdlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2V4cG9ydGluZywgaW1hZ2VEYXRhVXJpfSA9IHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZTtcbiAgICAgIGlmICghZXhwb3J0aW5nICYmIGltYWdlRGF0YVVyaSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZGF0YVVSSXRvQmxvYihpbWFnZURhdGFVcmkpO1xuICAgICAgICBkb3dubG9hZEZpbGUoZmlsZSwgREVGQVVMVF9FWFBPUlRfSU1BR0VfTkFNRSk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZSgpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfZG93bmxvYWRGaWxlKGRhdGEsIHR5cGUsIGZpbGVuYW1lKSB7XG4gICAgICBjb25zdCBmaWxlQmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwge3R5cGV9KTtcbiAgICAgIGRvd25sb2FkRmlsZShmaWxlQmxvYiwgZmlsZW5hbWUpO1xuICAgIH1cblxuICAgIF9vbkV4cG9ydERhdGEgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7dmlzU3RhdGUsIHVpU3RhdGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtkYXRhc2V0c30gPSB2aXNTdGF0ZTtcbiAgICAgIGNvbnN0IHtzZWxlY3RlZERhdGFzZXQsIGRhdGFUeXBlLCBmaWx0ZXJlZH0gPSB1aVN0YXRlLmV4cG9ydERhdGE7XG4gICAgICAvLyBnZXQgdGhlIHNlbGVjdGVkIGRhdGFcbiAgICAgIGNvbnN0IGZpbGVuYW1lID0gJ2tlcGxlci1nbCc7XG4gICAgICBjb25zdCBzZWxlY3RlZERhdGFzZXRzID0gZGF0YXNldHNbc2VsZWN0ZWREYXRhc2V0XSA/IFtkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdXSA6IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpO1xuICAgICAgaWYgKCFzZWxlY3RlZERhdGFzZXRzLmxlbmd0aCkge1xuICAgICAgICAvLyBlcnJvcjogc2VsZWN0ZWQgZGF0YXNldCBub3QgZm91bmQuXG4gICAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0ZWREYXRhc2V0cy5mb3JFYWNoKHNlbGVjdGVkRGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHthbGxEYXRhLCBkYXRhLCBmaWVsZHMsIGxhYmVsfSA9IHNlbGVjdGVkRGF0YTtcbiAgICAgICAgY29uc3QgZXhwb3J0RGF0YSA9IGZpbHRlcmVkID8gZGF0YSA6IGFsbERhdGE7XG4gICAgICAgIC8vIHN0YXJ0IHRvIGV4cG9ydCBkYXRhIGFjY29yZGluZyB0byBzZWxlY3RlZCBkYXRhIHR5cGVcbiAgICAgICAgc3dpdGNoIChkYXRhVHlwZSkge1xuICAgICAgICAgIGNhc2UgRVhQT1JUX0RBVEFfVFlQRS5DU1Y6IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC9jc3YnO1xuICAgICAgICAgICAgY29uc3QgY3N2ID0gZm9ybWF0Q3N2KGV4cG9ydERhdGEsIGZpZWxkcyk7XG4gICAgICAgICAgICB0aGlzLl9kb3dubG9hZEZpbGUoY3N2LCB0eXBlLCBgJHtmaWxlbmFtZX1fJHtsYWJlbH0uY3N2YCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gVE9ETzogc3VwcG9ydCBtb3JlIGZpbGUgdHlwZXMuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEpTT05NYXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7dWlTdGF0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2hhc0RhdGF9ID0gdWlTdGF0ZS5leHBvcnRNYXBbRVhQT1JUX01BUF9GT1JNQVQuSlNPTl07XG5cbiAgICAgIC8vIHdlIHBhc3MgYWxsIHByb3BzIGJlY2F1c2Ugd2UgYXZvaWQgdG8gY3JlYXRlIG5ldyB2YXJpYWJsZXNcbiAgICAgIGNvbnN0IGRhdGEgPSBoYXNEYXRhID8gS2VwbGVyR2xTY2hlbWEuc2F2ZSh0aGlzLnByb3BzKVxuICAgICAgICA6IEtlcGxlckdsU2NoZW1hLmdldENvbmZpZ1RvU2F2ZSh0aGlzLnByb3BzKTtcblxuICAgICAgdGhpcy5fZG93bmxvYWRGaWxlKFxuICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSxcbiAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAna2VwbGVyZ2wuanNvbidcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uRXhwb3J0SFRNTE1hcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHt1aVN0YXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7dXNlck1hcGJveFRva2VuLCBleHBvcnRNYXBib3hBY2Nlc3NUb2tlbn0gPSB1aVN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVC5IVE1MXTtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgLi4uS2VwbGVyR2xTY2hlbWEuc2F2ZSh0aGlzLnByb3BzKSxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW46ICh1c2VyTWFwYm94VG9rZW4gfHwgJycpICE9PSAnJyA/IHVzZXJNYXBib3hUb2tlbiA6IGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuXG4gICAgICB9O1xuXG4gICAgICB0aGlzLl9kb3dubG9hZEZpbGUoXG4gICAgICAgIGV4cG9ydE1hcFRvSFRNTChkYXRhKSxcbiAgICAgICAgJ3RleHQvaHRtbCcsXG4gICAgICAgICdrZXBsZXIuZ2wuaHRtbCdcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX29uRXhwb3J0TWFwID0gKCkgPT4ge1xuICAgICAgY29uc3Qge3VpU3RhdGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtmb3JtYXR9ID0gdWlTdGF0ZS5leHBvcnRNYXA7XG5cbiAgICAgIGNvbnN0IGRvd25sb2FkZXIgPSB7XG4gICAgICAgIFtFWFBPUlRfTUFQX0ZPUk1BVC5IVE1MXTogdGhpcy5fb25FeHBvcnRIVE1MTWFwLFxuICAgICAgICBbRVhQT1JUX01BUF9GT1JNQVQuSlNPTl06IHRoaXMuX29uRXhwb3J0SlNPTk1hcFxuICAgICAgfVtmb3JtYXRdO1xuXG4gICAgICBkb3dubG9hZGVyICYmIGRvd25sb2FkZXIoKTtcbiAgICB9O1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgY29udGFpbmVyVyxcbiAgICAgICAgY29udGFpbmVySCxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgcm9vdE5vZGUsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9uc1xuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7Y3VycmVudE1vZGFsLCBkYXRhc2V0S2V5VG9SZW1vdmV9ID0gdWlTdGF0ZTtcbiAgICAgIGNvbnN0IHtkYXRhc2V0cywgbGF5ZXJzLCBlZGl0aW5nRGF0YXNldH0gPSB2aXNTdGF0ZTtcblxuICAgICAgbGV0IHRlbXBsYXRlID0gbnVsbDtcbiAgICAgIGxldCBtb2RhbFByb3BzID0ge307XG5cbiAgICAgIGlmIChjdXJyZW50TW9kYWwgJiYgY3VycmVudE1vZGFsLmlkICYmXG4gICAgICAgIGN1cnJlbnRNb2RhbC50ZW1wbGF0ZSkge1xuICAgICAgICAvLyBpZiBjdXJyZW50TWRvYWwgdGVtcGxhdGUgaXMgYWxyZWFkeSBwcm92aWRlZFxuICAgICAgICAvLyBUT0RPOiBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgdGVtcGxhdGUgaXMgdmFsaWRcbiAgICAgICAgdGVtcGxhdGUgPSAoPGN1cnJlbnRNb2RhbC50ZW1wbGF0ZS8+KTtcbiAgICAgICAgbW9kYWxQcm9wcyA9IGN1cnJlbnRNb2RhbC5tb2RhbFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChjdXJyZW50TW9kYWwpIHtcbiAgICAgICAgICBjYXNlIERBVEFfVEFCTEVfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPERhdGFUYWJsZU1vZGFsXG4gICAgICAgICAgICAgICAgd2lkdGg9e2NvbnRhaW5lclcgKiAwLjl9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtjb250YWluZXJIICogMC44NX1cbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgZGF0YUlkPXtlZGl0aW5nRGF0YXNldH1cbiAgICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXt2aXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzLmNzc1N0eWxlID0gRGF0YVRhYmxlTW9kYWxTdHlsZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgREVMRVRFX0RBVEFfSUQ6XG4gICAgICAgICAgICAvLyB2YWxpZGF0ZSBvcHRpb25zXG4gICAgICAgICAgICBpZiAoZGF0YXNldEtleVRvUmVtb3ZlICYmIGRhdGFzZXRzICYmIGRhdGFzZXRzW2RhdGFzZXRLZXlUb1JlbW92ZV0pIHtcbiAgICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgICAgPERlbGV0ZURhdGFzZXRNb2RhbFxuICAgICAgICAgICAgICAgICAgZGF0YXNldD17ZGF0YXNldHNbZGF0YXNldEtleVRvUmVtb3ZlXX1cbiAgICAgICAgICAgICAgICAgIGxheWVycz17bGF5ZXJzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBEYXRhc2V0JyxcbiAgICAgICAgICAgICAgICBjc3NTdHlsZTogRGVsZXRlRGF0YXNldE1vZGFsU3R5bGVkLFxuICAgICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX2RlbGV0ZURhdGFzZXQoZGF0YXNldEtleVRvUmVtb3ZlKSxcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgICBuZWdhdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICdEZWxldGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7IC8vIGluIGNhc2Ugd2UgYWRkIGEgbmV3IGNhc2UgYWZ0ZXIgdGhpcyBvbmVcbiAgICAgICAgICBjYXNlIEFERF9EQVRBX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxMb2FkRGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkZpbGVVcGxvYWQ9e3RoaXMuX29uRmlsZVVwbG9hZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ0FkZCBEYXRhIFRvIE1hcCcsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiBMb2FkRGF0YU1vZGFsU3R5bGUsXG4gICAgICAgICAgICAgIGZvb3RlcjogZmFsc2UsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fY2xvc2VNb2RhbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgRVhQT1JUX0lNQUdFX0lEOlxuICAgICAgICAgICAgY29uc3QgeyByYXRpbywgbGVnZW5kLCByZXNvbHV0aW9uLCBleHBvcnRpbmcsIGltYWdlRGF0YVVyaSB9ID0gdWlTdGF0ZS5leHBvcnRJbWFnZTtcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0SW1hZ2VNb2RhbFxuICAgICAgICAgICAgICAgIHdpZHRoPXtjb250YWluZXJXfVxuICAgICAgICAgICAgICAgIGhlaWdodD17Y29udGFpbmVySH1cbiAgICAgICAgICAgICAgICBsZWdlbmQ9e2xlZ2VuZH1cbiAgICAgICAgICAgICAgICByYXRpbz17cmF0aW99XG4gICAgICAgICAgICAgICAgcmVzb2x1dGlvbj17cmVzb2x1dGlvbn1cbiAgICAgICAgICAgICAgICBleHBvcnRpbmc9e2V4cG9ydGluZ31cbiAgICAgICAgICAgICAgICBpbWFnZURhdGFVcmk9e2ltYWdlRGF0YVVyaX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVJhdGlvPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldFJhdGlvfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlUmVzb2x1dGlvbj17dGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5zZXRSZXNvbHV0aW9ufVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlTGVnZW5kPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZUxlZ2VuZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICBjbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgIHRpdGxlOiAnRXhwb3J0IEltYWdlJyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkV4cG9ydEltYWdlLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGV4cG9ydGluZyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ0Rvd25sb2FkJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfREFUQV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0RGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnVpU3RhdGUuZXhwb3J0RGF0YX1cbiAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydERhdGFUeXBlPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydERhdGFUeXBlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0PXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEZpbHRlcmVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIGNsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgdGl0bGU6ICdFeHBvcnQgRGF0YScsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnREYXRhLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdFeHBvcnQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEVYUE9SVF9NQVBfSUQ6XG4gICAgICAgICAgICBjb25zdCBrZXBsZXJHbENvbmZpZyA9IEtlcGxlckdsU2NoZW1hLmdldENvbmZpZ1RvU2F2ZShcbiAgICAgICAgICAgICAgeyBtYXBTdHlsZSwgdmlzU3RhdGUsIG1hcFN0YXRlLCB1aVN0YXRlIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydE1hcE1vZGFsXG4gICAgICAgICAgICAgICAgY29uZmlnPXtrZXBsZXJHbENvbmZpZ31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt1aVN0YXRlLmV4cG9ydE1hcH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydE1hcEZvcm1hdD17dGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRNYXBGb3JtYXR9XG4gICAgICAgICAgICAgICAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuPXt0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnNldFVzZXJNYXBib3hBY2Nlc3NUb2tlbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICBjbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgIHRpdGxlOiAnRXhwb3J0IE1hcCcsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnRNYXAsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ0V4cG9ydCdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgQUREX01BUF9TVFlMRV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8QWRkTWFwU3R5bGVNb2RhbFxuICAgICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXt0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgIG1hcFN0YXRlPXt0aGlzLnByb3BzLm1hcFN0YXRlfVxuICAgICAgICAgICAgICAgIGlucHV0U3R5bGU9e21hcFN0eWxlLmlucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgaW5wdXRNYXBTdHlsZT17dGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMuaW5wdXRNYXBTdHlsZX1cbiAgICAgICAgICAgICAgICBsb2FkQ3VzdG9tTWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmxvYWRDdXN0b21NYXBTdHlsZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICBjbG9zZTogZmFsc2UsXG4gICAgICAgICAgICAgIHRpdGxlOiAnQWRkIEN1c3RvbSBNYXBib3ggU3R5bGUnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uQWRkQ3VzdG9tTWFwU3R5bGUsXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIW1hcFN0eWxlLmlucHV0U3R5bGUuc3R5bGUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdBZGQgU3R5bGUnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5yb290Tm9kZSA/IChcbiAgICAgICAgPE1vZGFsRGlhbG9nXG4gICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgcGFyZW50U2VsZWN0b3I9eygpID0+IGZpbmRET01Ob2RlKHJvb3ROb2RlKX1cbiAgICAgICAgICBpc09wZW49e0Jvb2xlYW4oY3VycmVudE1vZGFsKX1cbiAgICAgICAgICBjbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZW1wbGF0ZX1cbiAgICAgICAgPC9Nb2RhbERpYWxvZz5cbiAgICAgICkgOiBudWxsO1xuICAgIH1cbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNvbXBsZXhpdHkgKi9cbiAgfVxuXG4gIHJldHVybiBNb2RhbFdyYXBwZXI7XG59XG4iXX0=