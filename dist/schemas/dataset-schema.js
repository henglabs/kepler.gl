"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf4 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _window = require("global/window");

var _versions = require("./versions");

var _schema = _interopRequireDefault(require("./schema"));

var _dataProcessor = require("../processors/data-processor");

var _defaultSettings = require("../constants/default-settings");

var _datasetSchema;

// version v0
var fieldPropertiesV0 = {
  name: null,
  type: null
};
var fieldPropertiesV1 = {
  name: null,
  type: null,
  format: null
};

var FieldSchema =
/*#__PURE__*/
function (_Schema) {
  (0, _inherits2["default"])(FieldSchema, _Schema);

  function FieldSchema() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, FieldSchema);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf4["default"])(FieldSchema)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "key", 'fields');
    return _this;
  }

  (0, _createClass2["default"])(FieldSchema, [{
    key: "save",
    value: function save(fields) {
      var _this2 = this;

      return (0, _defineProperty2["default"])({}, this.key, fields.map(function (f) {
        return _this2.savePropertiesOrApplySchema(f)[_this2.key];
      }));
    }
  }, {
    key: "load",
    value: function load(fields) {
      return (0, _defineProperty2["default"])({}, this.key, fields);
    }
  }]);
  return FieldSchema;
}(_schema["default"]);

var propertiesV0 = {
  id: null,
  label: null,
  color: null,
  allData: null,
  fields: new FieldSchema({
    version: _versions.VERSIONS.v0,
    properties: fieldPropertiesV0
  })
};
var propertiesV1 = (0, _objectSpread2["default"])({}, propertiesV0, {
  fields: new FieldSchema({
    version: _versions.VERSIONS.v1,
    properties: fieldPropertiesV1
  })
});

var DatasetSchema =
/*#__PURE__*/
function (_Schema2) {
  (0, _inherits2["default"])(DatasetSchema, _Schema2);

  function DatasetSchema() {
    var _getPrototypeOf3;

    var _this3;

    (0, _classCallCheck2["default"])(this, DatasetSchema);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf3 = (0, _getPrototypeOf4["default"])(DatasetSchema)).call.apply(_getPrototypeOf3, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this3), "key", 'dataset');
    return _this3;
  }

  (0, _createClass2["default"])(DatasetSchema, [{
    key: "save",
    value: function save(dataset) {
      return this.savePropertiesOrApplySchema(dataset)[this.key];
    }
  }, {
    key: "load",
    value: function load(dataset) {
      var fields = dataset.fields,
          allData = dataset.allData;
      var updatedFields = fields; // recalculate field type
      // because we have updated type-analyzer
      // we need to add format to each field

      var needCalculateMeta = fields[0] && !fields[0].hasOwnProperty('format');

      if (needCalculateMeta) {
        var fieldOrder = fields.map(function (f) {
          return f.name;
        });
        var sampleData = (0, _dataProcessor.getSampleForTypeAnalyze)({
          fields: fieldOrder,
          allData: allData
        });
        var meta = (0, _dataProcessor.getFieldsFromData)(sampleData, fieldOrder);
        updatedFields = fields.map(function (f, i) {
          return (0, _objectSpread2["default"])({}, f, {
            // note here we add format to timestamp field
            format: f.type === _defaultSettings.ALL_FIELD_TYPES.timestamp ? meta[i].format : ''
          });
        });
        updatedFields.forEach(function (f, i) {
          if (meta[i].type !== f.type) {
            // if newly detected field type is different from saved type
            // we log it but won't update it, cause we don't want to break people's map
            _window.console.warn("detect ".concat(f.name, " type is now ").concat(meta[i].type, " instead of ").concat(f.type));
          }
        });
      } // get format of all fields


      return {
        data: {
          fields: updatedFields,
          rows: dataset.allData
        },
        info: (0, _lodash["default"])(dataset, ['id', 'label', 'color'])
      };
    }
  }]);
  return DatasetSchema;
}(_schema["default"]);

var datasetSchema = (_datasetSchema = {}, (0, _defineProperty2["default"])(_datasetSchema, _versions.VERSIONS.v0, new DatasetSchema({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0
})), (0, _defineProperty2["default"])(_datasetSchema, _versions.VERSIONS.v1, new DatasetSchema({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1
})), _datasetSchema);
var _default = datasetSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2RhdGFzZXQtc2NoZW1hLmpzIl0sIm5hbWVzIjpbImZpZWxkUHJvcGVydGllc1YwIiwibmFtZSIsInR5cGUiLCJmaWVsZFByb3BlcnRpZXNWMSIsImZvcm1hdCIsIkZpZWxkU2NoZW1hIiwiZmllbGRzIiwia2V5IiwibWFwIiwiZiIsInNhdmVQcm9wZXJ0aWVzT3JBcHBseVNjaGVtYSIsIlNjaGVtYSIsInByb3BlcnRpZXNWMCIsImlkIiwibGFiZWwiLCJjb2xvciIsImFsbERhdGEiLCJ2ZXJzaW9uIiwiVkVSU0lPTlMiLCJ2MCIsInByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzVjEiLCJ2MSIsIkRhdGFzZXRTY2hlbWEiLCJkYXRhc2V0IiwidXBkYXRlZEZpZWxkcyIsIm5lZWRDYWxjdWxhdGVNZXRhIiwiaGFzT3duUHJvcGVydHkiLCJmaWVsZE9yZGVyIiwic2FtcGxlRGF0YSIsIm1ldGEiLCJpIiwiQUxMX0ZJRUxEX1RZUEVTIiwidGltZXN0YW1wIiwiZm9yRWFjaCIsImdsb2JhbENvbnNvbGUiLCJ3YXJuIiwiZGF0YSIsInJvd3MiLCJpbmZvIiwiZGF0YXNldFNjaGVtYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBO0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUc7QUFDeEJDLEVBQUFBLElBQUksRUFBRSxJQURrQjtBQUV4QkMsRUFBQUEsSUFBSSxFQUFFO0FBRmtCLENBQTFCO0FBS0EsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJGLEVBQUFBLElBQUksRUFBRSxJQURrQjtBQUV4QkMsRUFBQUEsSUFBSSxFQUFFLElBRmtCO0FBR3hCRSxFQUFBQSxNQUFNLEVBQUU7QUFIZ0IsQ0FBMUI7O0lBTU1DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUNFLFE7Ozs7Ozt5QkFDREMsTSxFQUFRO0FBQUE7O0FBQ1gsa0RBQ0csS0FBS0MsR0FEUixF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RTtBQUFDL0IsVUFBQUEsTUFBTSxFQUFFbUIsYUFBVDtBQUF3QmEsVUFBQUEsSUFBSSxFQUFFZCxPQUFPLENBQUNSO0FBQXRDLFNBREQ7QUFFTHVCLFFBQUFBLElBQUksRUFBRSx3QkFBS2YsT0FBTCxFQUFjLENBQUMsSUFBRCxFQUFPLE9BQVAsRUFBZ0IsT0FBaEIsQ0FBZDtBQUZELE9BQVA7QUFJRDs7O0VBM0N5QmIsa0I7O0FBOEM1QixJQUFNNkIsYUFBYSwwRUFDaEJ0QixtQkFBU0MsRUFETyxFQUNGLElBQUlJLGFBQUosQ0FBa0I7QUFDL0JOLEVBQUFBLE9BQU8sRUFBRUMsbUJBQVNDLEVBRGE7QUFFL0JDLEVBQUFBLFVBQVUsRUFBRVI7QUFGbUIsQ0FBbEIsQ0FERSxvREFLaEJNLG1CQUFTSSxFQUxPLEVBS0YsSUFBSUMsYUFBSixDQUFrQjtBQUMvQk4sRUFBQUEsT0FBTyxFQUFFQyxtQkFBU0ksRUFEYTtBQUUvQkYsRUFBQUEsVUFBVSxFQUFFQztBQUZtQixDQUFsQixDQUxFLGtCQUFuQjtlQVdlbUIsYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcbmltcG9ydCB7Y29uc29sZSBhcyBnbG9iYWxDb25zb2xlfSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuaW1wb3J0IHtWRVJTSU9OU30gZnJvbSAnLi92ZXJzaW9ucyc7XG5pbXBvcnQgU2NoZW1hIGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7Z2V0RmllbGRzRnJvbURhdGEsIGdldFNhbXBsZUZvclR5cGVBbmFseXplfSBmcm9tICdwcm9jZXNzb3JzL2RhdGEtcHJvY2Vzc29yJztcbmltcG9ydCB7QUxMX0ZJRUxEX1RZUEVTfSBmcm9tICdjb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncyc7XG5cbi8vIHZlcnNpb24gdjBcbmNvbnN0IGZpZWxkUHJvcGVydGllc1YwID0ge1xuICBuYW1lOiBudWxsLFxuICB0eXBlOiBudWxsXG59O1xuXG5jb25zdCBmaWVsZFByb3BlcnRpZXNWMSA9IHtcbiAgbmFtZTogbnVsbCxcbiAgdHlwZTogbnVsbCxcbiAgZm9ybWF0OiBudWxsXG59O1xuXG5jbGFzcyBGaWVsZFNjaGVtYSBleHRlbmRzIFNjaGVtYSB7XG4gIGtleSA9ICdmaWVsZHMnO1xuICBzYXZlKGZpZWxkcykge1xuICAgIHJldHVybiB7XG4gICAgICBbdGhpcy5rZXldOiBmaWVsZHMubWFwKGYgPT4gdGhpcy5zYXZlUHJvcGVydGllc09yQXBwbHlTY2hlbWEoZilbdGhpcy5rZXldKVxuICAgIH07XG4gIH1cbiAgbG9hZChmaWVsZHMpIHtcbiAgICByZXR1cm4ge1t0aGlzLmtleV06IGZpZWxkc307XG4gIH1cbn1cblxuY29uc3QgcHJvcGVydGllc1YwID0ge1xuICBpZDogbnVsbCxcbiAgbGFiZWw6IG51bGwsXG4gIGNvbG9yOiBudWxsLFxuICBhbGxEYXRhOiBudWxsLFxuICBmaWVsZHM6IG5ldyBGaWVsZFNjaGVtYSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gICAgcHJvcGVydGllczogZmllbGRQcm9wZXJ0aWVzVjBcbiAgfSlcbn07XG5cbmNvbnN0IHByb3BlcnRpZXNWMSA9IHtcbiAgLi4ucHJvcGVydGllc1YwLFxuICBmaWVsZHM6IG5ldyBGaWVsZFNjaGVtYSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogZmllbGRQcm9wZXJ0aWVzVjFcbiAgfSlcbn07XG5cbmNsYXNzIERhdGFzZXRTY2hlbWEgZXh0ZW5kcyBTY2hlbWEge1xuICBrZXkgPSAnZGF0YXNldCc7XG5cbiAgc2F2ZShkYXRhc2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuc2F2ZVByb3BlcnRpZXNPckFwcGx5U2NoZW1hKGRhdGFzZXQpW3RoaXMua2V5XTtcbiAgfVxuICBsb2FkKGRhdGFzZXQpIHtcbiAgICBjb25zdCB7ZmllbGRzLCBhbGxEYXRhfSA9IGRhdGFzZXQ7XG4gICAgbGV0IHVwZGF0ZWRGaWVsZHMgPSBmaWVsZHM7XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBmaWVsZCB0eXBlXG4gICAgLy8gYmVjYXVzZSB3ZSBoYXZlIHVwZGF0ZWQgdHlwZS1hbmFseXplclxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGZvcm1hdCB0byBlYWNoIGZpZWxkXG4gICAgY29uc3QgbmVlZENhbGN1bGF0ZU1ldGEgPSBmaWVsZHNbMF0gJiYgIWZpZWxkc1swXS5oYXNPd25Qcm9wZXJ0eSgnZm9ybWF0Jyk7XG5cbiAgICBpZiAobmVlZENhbGN1bGF0ZU1ldGEpIHtcbiAgICAgIGNvbnN0IGZpZWxkT3JkZXIgPSBmaWVsZHMubWFwKGYgPT4gZi5uYW1lKTtcblxuICAgICAgY29uc3Qgc2FtcGxlRGF0YSA9IGdldFNhbXBsZUZvclR5cGVBbmFseXplKHtmaWVsZHM6IGZpZWxkT3JkZXIsIGFsbERhdGF9KTtcbiAgICAgIGNvbnN0IG1ldGEgPSBnZXRGaWVsZHNGcm9tRGF0YShzYW1wbGVEYXRhLCBmaWVsZE9yZGVyKTtcblxuICAgICAgdXBkYXRlZEZpZWxkcyA9IGZpZWxkcy5tYXAoKGYsIGkpID0+ICh7XG4gICAgICAgIC4uLmYsXG4gICAgICAgIC8vIG5vdGUgaGVyZSB3ZSBhZGQgZm9ybWF0IHRvIHRpbWVzdGFtcCBmaWVsZFxuICAgICAgICBmb3JtYXQ6IGYudHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcCA/IG1ldGFbaV0uZm9ybWF0IDogJydcbiAgICAgIH0pKTtcblxuICAgICAgdXBkYXRlZEZpZWxkcy5mb3JFYWNoKChmLCBpKSA9PiB7XG4gICAgICAgIGlmIChtZXRhW2ldLnR5cGUgIT09IGYudHlwZSkge1xuICAgICAgICAgIC8vIGlmIG5ld2x5IGRldGVjdGVkIGZpZWxkIHR5cGUgaXMgZGlmZmVyZW50IGZyb20gc2F2ZWQgdHlwZVxuICAgICAgICAgIC8vIHdlIGxvZyBpdCBidXQgd29uJ3QgdXBkYXRlIGl0LCBjYXVzZSB3ZSBkb24ndCB3YW50IHRvIGJyZWFrIHBlb3BsZSdzIG1hcFxuICAgICAgICAgIGdsb2JhbENvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBkZXRlY3QgJHtmLm5hbWV9IHR5cGUgaXMgbm93ICR7bWV0YVtpXS50eXBlfSBpbnN0ZWFkIG9mICR7Zi50eXBlfWBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBnZXQgZm9ybWF0IG9mIGFsbCBmaWVsZHNcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YToge2ZpZWxkczogdXBkYXRlZEZpZWxkcywgcm93czogZGF0YXNldC5hbGxEYXRhfSxcbiAgICAgIGluZm86IHBpY2soZGF0YXNldCwgWydpZCcsICdsYWJlbCcsICdjb2xvciddKVxuICAgIH07XG4gIH1cbn1cblxuY29uc3QgZGF0YXNldFNjaGVtYSA9IHtcbiAgW1ZFUlNJT05TLnYwXTogbmV3IERhdGFzZXRTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYwLFxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMFxuICB9KSxcbiAgW1ZFUlNJT05TLnYxXTogbmV3IERhdGFzZXRTY2hlbWEoe1xuICAgIHZlcnNpb246IFZFUlNJT05TLnYxLFxuICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNWMVxuICB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YXNldFNjaGVtYTtcbiJdfQ==