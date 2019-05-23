"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.propertiesV1 = exports.propertiesV0 = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _versions = require("./versions");

var _schema = _interopRequireDefault(require("./schema"));

var _mapStateSchema;

// version v0
var propertiesV0 = {
  bearing: null,
  dragRotate: null,
  latitude: null,
  longitude: null,
  pitch: null,
  zoom: null
};
exports.propertiesV0 = propertiesV0;
var propertiesV1 = (0, _objectSpread2["default"])({}, propertiesV0, {
  isSplit: null
});
exports.propertiesV1 = propertiesV1;
var mapStateSchema = (_mapStateSchema = {}, (0, _defineProperty2["default"])(_mapStateSchema, _versions.VERSIONS.v0, new _schema["default"]({
  version: _versions.VERSIONS.v0,
  properties: propertiesV0,
  key: 'mapState'
})), (0, _defineProperty2["default"])(_mapStateSchema, _versions.VERSIONS.v1, new _schema["default"]({
  version: _versions.VERSIONS.v1,
  properties: propertiesV1,
  key: 'mapState'
})), _mapStateSchema);
var _default = mapStateSchema;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL21hcC1zdGF0ZS1zY2hlbWEuanMiXSwibmFtZXMiOlsicHJvcGVydGllc1YwIiwiYmVhcmluZyIsImRyYWdSb3RhdGUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInBpdGNoIiwiem9vbSIsInByb3BlcnRpZXNWMSIsImlzU3BsaXQiLCJtYXBTdGF0ZVNjaGVtYSIsIlZFUlNJT05TIiwidjAiLCJTY2hlbWEiLCJ2ZXJzaW9uIiwicHJvcGVydGllcyIsImtleSIsInYxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7O0FBRUE7QUFDTyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLEVBQUFBLE9BQU8sRUFBRSxJQURpQjtBQUUxQkMsRUFBQUEsVUFBVSxFQUFFLElBRmM7QUFHMUJDLEVBQUFBLFFBQVEsRUFBRSxJQUhnQjtBQUkxQkMsRUFBQUEsU0FBUyxFQUFFLElBSmU7QUFLMUJDLEVBQUFBLEtBQUssRUFBRSxJQUxtQjtBQU0xQkMsRUFBQUEsSUFBSSxFQUFFO0FBTm9CLENBQXJCOztBQVNBLElBQU1DLFlBQVksc0NBQ3BCUCxZQURvQjtBQUV2QlEsRUFBQUEsT0FBTyxFQUFFO0FBRmMsRUFBbEI7O0FBS1AsSUFBTUMsY0FBYyw0RUFDakJDLG1CQUFTQyxFQURRLEVBQ0gsSUFBSUMsa0JBQUosQ0FBVztBQUN4QkMsRUFBQUEsT0FBTyxFQUFFSCxtQkFBU0MsRUFETTtBQUV4QkcsRUFBQUEsVUFBVSxFQUFFZCxZQUZZO0FBR3hCZSxFQUFBQSxHQUFHLEVBQUU7QUFIbUIsQ0FBWCxDQURHLHFEQU1qQkwsbUJBQVNNLEVBTlEsRUFNSCxJQUFJSixrQkFBSixDQUFXO0FBQ3hCQyxFQUFBQSxPQUFPLEVBQUVILG1CQUFTTSxFQURNO0FBRXhCRixFQUFBQSxVQUFVLEVBQUVQLFlBRlk7QUFHeEJRLEVBQUFBLEdBQUcsRUFBRTtBQUhtQixDQUFYLENBTkcsbUJBQXBCO2VBYWVOLGMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge1ZFUlNJT05TfSBmcm9tICcuL3ZlcnNpb25zJztcbmltcG9ydCBTY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuXG4vLyB2ZXJzaW9uIHYwXG5leHBvcnQgY29uc3QgcHJvcGVydGllc1YwID0ge1xuICBiZWFyaW5nOiBudWxsLFxuICBkcmFnUm90YXRlOiBudWxsLFxuICBsYXRpdHVkZTogbnVsbCxcbiAgbG9uZ2l0dWRlOiBudWxsLFxuICBwaXRjaDogbnVsbCxcbiAgem9vbTogbnVsbFxufTtcblxuZXhwb3J0IGNvbnN0IHByb3BlcnRpZXNWMSA9IHtcbiAgLi4ucHJvcGVydGllc1YwLFxuICBpc1NwbGl0OiBudWxsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVNjaGVtYSA9IHtcbiAgW1ZFUlNJT05TLnYwXTogbmV3IFNjaGVtYSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjAsXG4gICAgcHJvcGVydGllczogcHJvcGVydGllc1YwLFxuICAgIGtleTogJ21hcFN0YXRlJ1xuICB9KSxcbiAgW1ZFUlNJT05TLnYxXTogbmV3IFNjaGVtYSh7XG4gICAgdmVyc2lvbjogVkVSU0lPTlMudjEsXG4gICAgcHJvcGVydGllczogcHJvcGVydGllc1YxLFxuICAgIGtleTogJ21hcFN0YXRlJ1xuICB9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFwU3RhdGVTY2hlbWE7XG4iXX0=