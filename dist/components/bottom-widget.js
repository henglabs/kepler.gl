"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BottomWidgetFactory;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _timeWidget = _interopRequireDefault(require("./filters/time-widget"));

// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var propTypes = {
  filters: _propTypes["default"].arrayOf(_propTypes["default"].object),
  datasets: _propTypes["default"].object,
  uiState: _propTypes["default"].object,
  visStateActions: _propTypes["default"].object,
  sidePanelWidth: _propTypes["default"].number,
  containerW: _propTypes["default"].number
};
var maxWidth = 1080;
BottomWidgetFactory.deps = [_timeWidget["default"]];

function BottomWidgetFactory(TimeWidget) {
  var BottomWidget = function BottomWidget(props) {
    var datasets = props.datasets,
        filters = props.filters,
        visStateActions = props.visStateActions,
        containerW = props.containerW,
        uiState = props.uiState,
        sidePanelWidth = props.sidePanelWidth;
    var activeSidePanel = uiState.activeSidePanel;
    var isOpen = Boolean(activeSidePanel);
    var enlargedFilterIdx = filters.findIndex(function (f) {
      return f.enlarged;
    });
    var isAnyFilterAnimating = filters.some(function (f) {
      return f.isAnimating;
    });
    var enlargedFilterWidth = isOpen ? containerW - sidePanelWidth : containerW;

    if (enlargedFilterIdx < 0) {
      return null;
    }

    return _react["default"].createElement(TimeWidget, {
      fields: datasets[filters[enlargedFilterIdx].dataId].fields,
      setFilterPlot: visStateActions.setFilterPlot,
      setFilter: visStateActions.setFilter,
      toggleAnimation: visStateActions.toggleAnimation,
      updateAnimationSpeed: visStateActions.updateAnimationSpeed,
      enlargeFilter: visStateActions.enlargeFilter,
      width: Math.min(maxWidth, enlargedFilterWidth),
      isAnyFilterAnimating: isAnyFilterAnimating,
      enlargedIdx: enlargedFilterIdx,
      filter: filters[enlargedFilterIdx]
    });
  };

  BottomWidget.propTypes = propTypes;
  return BottomWidget;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2JvdHRvbS13aWRnZXQuanMiXSwibmFtZXMiOlsicHJvcFR5cGVzIiwiZmlsdGVycyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJvYmplY3QiLCJkYXRhc2V0cyIsInVpU3RhdGUiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJzaWRlUGFuZWxXaWR0aCIsIm51bWJlciIsImNvbnRhaW5lclciLCJtYXhXaWR0aCIsIkJvdHRvbVdpZGdldEZhY3RvcnkiLCJkZXBzIiwiVGltZVdpZGdldEZhY3RvcnkiLCJUaW1lV2lkZ2V0IiwiQm90dG9tV2lkZ2V0IiwicHJvcHMiLCJhY3RpdmVTaWRlUGFuZWwiLCJpc09wZW4iLCJCb29sZWFuIiwiZW5sYXJnZWRGaWx0ZXJJZHgiLCJmaW5kSW5kZXgiLCJmIiwiZW5sYXJnZWQiLCJpc0FueUZpbHRlckFuaW1hdGluZyIsInNvbWUiLCJpc0FuaW1hdGluZyIsImVubGFyZ2VkRmlsdGVyV2lkdGgiLCJkYXRhSWQiLCJmaWVsZHMiLCJzZXRGaWx0ZXJQbG90Iiwic2V0RmlsdGVyIiwidG9nZ2xlQW5pbWF0aW9uIiwidXBkYXRlQW5pbWF0aW9uU3BlZWQiLCJlbmxhcmdlRmlsdGVyIiwiTWF0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BLElBQU1BLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFQyxzQkFBVUMsT0FBVixDQUFrQkQsc0JBQVVFLE1BQTVCLENBRE87QUFFaEJDLEVBQUFBLFFBQVEsRUFBRUgsc0JBQVVFLE1BRko7QUFHaEJFLEVBQUFBLE9BQU8sRUFBRUosc0JBQVVFLE1BSEg7QUFJaEJHLEVBQUFBLGVBQWUsRUFBRUwsc0JBQVVFLE1BSlg7QUFLaEJJLEVBQUFBLGNBQWMsRUFBRU4sc0JBQVVPLE1BTFY7QUFNaEJDLEVBQUFBLFVBQVUsRUFBRVIsc0JBQVVPO0FBTk4sQ0FBbEI7QUFTQSxJQUFNRSxRQUFRLEdBQUcsSUFBakI7QUFFQUMsbUJBQW1CLENBQUNDLElBQXBCLEdBQTJCLENBQUNDLHNCQUFELENBQTNCOztBQUVlLFNBQVNGLG1CQUFULENBQTZCRyxVQUE3QixFQUF5QztBQUV0RCxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFBQSxRQUU1QlosUUFGNEIsR0FRMUJZLEtBUjBCLENBRTVCWixRQUY0QjtBQUFBLFFBRzVCSixPQUg0QixHQVExQmdCLEtBUjBCLENBRzVCaEIsT0FINEI7QUFBQSxRQUk1Qk0sZUFKNEIsR0FRMUJVLEtBUjBCLENBSTVCVixlQUo0QjtBQUFBLFFBSzVCRyxVQUw0QixHQVExQk8sS0FSMEIsQ0FLNUJQLFVBTDRCO0FBQUEsUUFNNUJKLE9BTjRCLEdBUTFCVyxLQVIwQixDQU01QlgsT0FONEI7QUFBQSxRQU81QkUsY0FQNEIsR0FRMUJTLEtBUjBCLENBTzVCVCxjQVA0QjtBQUFBLFFBU3ZCVSxlQVR1QixHQVNKWixPQVRJLENBU3ZCWSxlQVR1QjtBQVU5QixRQUFNQyxNQUFNLEdBQUdDLE9BQU8sQ0FBQ0YsZUFBRCxDQUF0QjtBQUVBLFFBQU1HLGlCQUFpQixHQUFHcEIsT0FBTyxDQUFDcUIsU0FBUixDQUFrQixVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDQyxRQUFOO0FBQUEsS0FBbkIsQ0FBMUI7QUFDQSxRQUFNQyxvQkFBb0IsR0FBR3hCLE9BQU8sQ0FBQ3lCLElBQVIsQ0FBYSxVQUFBSCxDQUFDO0FBQUEsYUFBSUEsQ0FBQyxDQUFDSSxXQUFOO0FBQUEsS0FBZCxDQUE3QjtBQUNBLFFBQU1DLG1CQUFtQixHQUFHVCxNQUFNLEdBQUdULFVBQVUsR0FBR0YsY0FBaEIsR0FBaUNFLFVBQW5FOztBQUVBLFFBQUlXLGlCQUFpQixHQUFHLENBQXhCLEVBQTJCO0FBQ3pCLGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQ0UsZ0NBQUMsVUFBRDtBQUNFLE1BQUEsTUFBTSxFQUFFaEIsUUFBUSxDQUFDSixPQUFPLENBQUNvQixpQkFBRCxDQUFQLENBQTJCUSxNQUE1QixDQUFSLENBQTRDQyxNQUR0RDtBQUVFLE1BQUEsYUFBYSxFQUFFdkIsZUFBZSxDQUFDd0IsYUFGakM7QUFHRSxNQUFBLFNBQVMsRUFBRXhCLGVBQWUsQ0FBQ3lCLFNBSDdCO0FBSUUsTUFBQSxlQUFlLEVBQUV6QixlQUFlLENBQUMwQixlQUpuQztBQUtFLE1BQUEsb0JBQW9CLEVBQUUxQixlQUFlLENBQUMyQixvQkFMeEM7QUFNRSxNQUFBLGFBQWEsRUFBRTNCLGVBQWUsQ0FBQzRCLGFBTmpDO0FBT0UsTUFBQSxLQUFLLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTMUIsUUFBVCxFQUFtQmlCLG1CQUFuQixDQVBUO0FBUUUsTUFBQSxvQkFBb0IsRUFBRUgsb0JBUnhCO0FBU0UsTUFBQSxXQUFXLEVBQUVKLGlCQVRmO0FBVUUsTUFBQSxNQUFNLEVBQUVwQixPQUFPLENBQUNvQixpQkFBRDtBQVZqQixNQURGO0FBY0QsR0FsQ0Q7O0FBb0NBTCxFQUFBQSxZQUFZLENBQUNoQixTQUFiLEdBQXlCQSxTQUF6QjtBQUVBLFNBQU9nQixZQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUaW1lV2lkZ2V0RmFjdG9yeSBmcm9tICcuL2ZpbHRlcnMvdGltZS13aWRnZXQnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGZpbHRlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICBkYXRhc2V0czogUHJvcFR5cGVzLm9iamVjdCxcbiAgdWlTdGF0ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdmlzU3RhdGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzaWRlUGFuZWxXaWR0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgY29udGFpbmVyVzogUHJvcFR5cGVzLm51bWJlclxufTtcblxuY29uc3QgbWF4V2lkdGggPSAxMDgwO1xuXG5Cb3R0b21XaWRnZXRGYWN0b3J5LmRlcHMgPSBbVGltZVdpZGdldEZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3R0b21XaWRnZXRGYWN0b3J5KFRpbWVXaWRnZXQpIHtcblxuICBjb25zdCBCb3R0b21XaWRnZXQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGZpbHRlcnMsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICBjb250YWluZXJXLFxuICAgICAgdWlTdGF0ZSxcbiAgICAgIHNpZGVQYW5lbFdpZHRoXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHthY3RpdmVTaWRlUGFuZWx9ID0gdWlTdGF0ZTtcbiAgICBjb25zdCBpc09wZW4gPSBCb29sZWFuKGFjdGl2ZVNpZGVQYW5lbCk7XG5cbiAgICBjb25zdCBlbmxhcmdlZEZpbHRlcklkeCA9IGZpbHRlcnMuZmluZEluZGV4KGYgPT4gZi5lbmxhcmdlZCk7XG4gICAgY29uc3QgaXNBbnlGaWx0ZXJBbmltYXRpbmcgPSBmaWx0ZXJzLnNvbWUoZiA9PiBmLmlzQW5pbWF0aW5nKTtcbiAgICBjb25zdCBlbmxhcmdlZEZpbHRlcldpZHRoID0gaXNPcGVuID8gY29udGFpbmVyVyAtIHNpZGVQYW5lbFdpZHRoIDogY29udGFpbmVyVztcblxuICAgIGlmIChlbmxhcmdlZEZpbHRlcklkeCA8IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8VGltZVdpZGdldFxuICAgICAgICBmaWVsZHM9e2RhdGFzZXRzW2ZpbHRlcnNbZW5sYXJnZWRGaWx0ZXJJZHhdLmRhdGFJZF0uZmllbGRzfVxuICAgICAgICBzZXRGaWx0ZXJQbG90PXt2aXNTdGF0ZUFjdGlvbnMuc2V0RmlsdGVyUGxvdH1cbiAgICAgICAgc2V0RmlsdGVyPXt2aXNTdGF0ZUFjdGlvbnMuc2V0RmlsdGVyfVxuICAgICAgICB0b2dnbGVBbmltYXRpb249e3Zpc1N0YXRlQWN0aW9ucy50b2dnbGVBbmltYXRpb259XG4gICAgICAgIHVwZGF0ZUFuaW1hdGlvblNwZWVkPXt2aXNTdGF0ZUFjdGlvbnMudXBkYXRlQW5pbWF0aW9uU3BlZWR9XG4gICAgICAgIGVubGFyZ2VGaWx0ZXI9e3Zpc1N0YXRlQWN0aW9ucy5lbmxhcmdlRmlsdGVyfVxuICAgICAgICB3aWR0aD17TWF0aC5taW4obWF4V2lkdGgsIGVubGFyZ2VkRmlsdGVyV2lkdGgpfVxuICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgIGVubGFyZ2VkSWR4PXtlbmxhcmdlZEZpbHRlcklkeH1cbiAgICAgICAgZmlsdGVyPXtmaWx0ZXJzW2VubGFyZ2VkRmlsdGVySWR4XX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIEJvdHRvbVdpZGdldC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbiAgcmV0dXJuIEJvdHRvbVdpZGdldDtcbn1cbiJdfQ==