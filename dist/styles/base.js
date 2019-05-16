"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkboxHeight = exports.checkboxWidth = exports.secondarySwitchBtnBgd = exports.secondarySwitchTrackBgd = exports.switchBtnHeight = exports.switchBtnWidth = exports.switchBtnBorderRadius = exports.switchBtnBoxShadow = exports.switchBtnBgdActive = exports.switchBtnBgd = exports.switchTrackBorderRadius = exports.switchTrackBgdActive = exports.switchTrackBgd = exports.switchLabelMargin = exports.switchHeight = exports.switchWidth = exports.dropdownListBorderTop = exports.dropdownListBgd = exports.dropdownListShadow = exports.dropdownListHighlightBg = exports.selectBorder = exports.selectBorderRadius = exports.selectBorderColorLT = exports.selectBorderColor = exports.selectBackgroundHoverLT = exports.selectBackgroundLT = exports.selectBackgroundHover = exports.selectBackground = exports.selectColorPlaceHolder = exports.selectFontWeightBold = exports.selectFontWeight = exports.selectFontSize = exports.selectActiveBorderColor = exports.selectColorLT = exports.selectColor = exports.secondaryInputBorderActiveColor = exports.secondaryInputBorderColor = exports.secondaryInputColor = exports.secondaryInputBgdActive = exports.secondaryInputBgdHover = exports.secondaryInputBgd = exports.secondaryInputHeight = exports.inputPlaceholderFontWeight = exports.inputPlaceholderColor = exports.inputBorderRadius = exports.inputColor = exports.inputBorderActiveColor = exports.inputBorderHoverColor = exports.inputBorderColor = exports.inputBgdActive = exports.inputBgdHover = exports.inputBgd = exports.inputFontWeight = exports.inputFontSize = exports.inputPadding = exports.inputBoxHeight = exports.negativeBtnActColor = exports.negativeBtnColor = exports.negativeBtnBgdHover = exports.negativeBtnActBgd = exports.negativeBtnBgd = exports.linkBtnActBgdHover = exports.linkBtnActColor = exports.linkBtnColor = exports.linkBtnActBgd = exports.linkBtnBgd = exports.secondaryBtnBgdHover = exports.secondaryBtnActColor = exports.secondaryBtnColor = exports.secondaryBtnActBgd = exports.secondaryBtnBgd = exports.primaryBtnRadius = exports.primaryBtnBgdHover = exports.primaryBtnActColor = exports.primaryBtnColor = exports.primaryBtnActBgd = exports.primaryBtnBgd = exports.errorColor = exports.activeColorHover = exports.activeColor = exports.textColorHlLT = exports.textColorHl = exports.titleTextColor = exports.subtextColorActive = exports.subtextColorLT = exports.subtextColor = exports.titleColorLT = exports.textColorLT = exports.textColor = exports.labelColorLT = exports.labelHoverColor = exports.labelColor = exports.borderColorLight = exports.borderColor = exports.borderRadius = exports.boxSizing = exports.boxShadow = exports.transitionSlow = exports.transitionFast = exports.transition = void 0;
exports.themeLT = exports.theme = exports.modalScrollBar = exports.textTruncate = exports.notificationPanelItemHeight = exports.notificationPanelItemWidth = exports.notificationPanelWidth = exports.notificationColors = exports.rangeBrushBgd = exports.sliderInputWidth = exports.sliderInputHeight = exports.sliderHandleShadow = exports.sliderHandleHoverColor = exports.sliderHandleColor = exports.sliderHandleWidth = exports.sliderHandleHeight = exports.sliderBarHeight = exports.sliderBarRadius = exports.sliderBarHoverColor = exports.sliderBarBgd = exports.sliderBarColor = exports.modalDialogColor = exports.modalDialogBgd = exports.modalPadding = exports.modalImagePlaceHolder = exports.modalFooterBgd = exports.modalTitleFontSize = exports.modalTitleColor = exports.tooltipColor = exports.tooltipBg = exports.mapPanelHeaderBackgroundColor = exports.mapPanelBackgroundColor = exports.panelBorderLT = exports.panelBorder = exports.panelBorderColor = exports.panelBackgroundLT = exports.panelBorderRadius = exports.panelBoxShadow = exports.panelHeaderHeight = exports.panelHeaderIconActive = exports.panelHeaderIcon = exports.panelActiveBgLT = exports.panelActiveBg = exports.panelBackgroundHover = exports.panelBackground = exports.sideBarCloseBtnBgdHover = exports.sideBarCloseBtnColor = exports.sideBarCloseBtnBgd = exports.sidePanelBg = exports.sidePanelHeaderBg = exports.checkboxBoxBgdChecked = exports.checkboxBoxBgd = exports.checkboxBorderColorLT = exports.checkboxBorderRadius = exports.checkboxBorderColor = exports.checkboxMargin = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _defaultSettings = require("../constants/default-settings");

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    width: 14px;\n    height: 16px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: white;\n  }\n  ::-webkit-scrollbar-track:horizontal {\n    background: ", ";\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border: 4px solid white;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb:hover {\n    background: #969da9;\n  }\n\n  ::-webkit-scrollbar-thumb:vertical {\n    border-radius: 7px;\n  }\n\n  ::-webkit-scrollbar-thumb:horizontal {\n    border-radius: 9px;\n    border: 4px solid ", ";\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", "\n\n    :vertical:hover {\n      background: ", ";\n      cursor: pointer;\n    }\n\n    :horizontal:hover {\n      background: ", ";\n      cursor: pointer;\n    }\n  }\n}"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", ";\n    :hover {\n      background: ", ";\n      cursor: pointer;\n    }\n  };\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", ";\n\n    :hover {\n      background: ", ";\n      cursor: pointer;\n    }\n  };\n}"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  overflow-y: auto;\n  max-height: 280px;\n  box-shadow: ", ";\n  border-radius: 2px;\n\n  .list__section {\n    ", ";\n  }\n  .list__header {\n    ", ";\n  }\n\n  .list__item {\n    ", ";\n  }\n\n  .list__item__anchor {\n    ", ";\n  }\n\n  ", ";\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 0 4px 0;\n  margin-bottom: 4px;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 11px;\n  padding: 5px 9px;\n  color: ", ";\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 11px;\n  padding: 3px 9px;\n  font-weight: 500;\n\n  &.hover,\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .list__item__anchor {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  padding-left: 3px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ::-webkit-scrollbar {\n    height: 10px;\n    width: 10px;\n  }\n\n  ::-webkit-scrollbar-corner {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ", ";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    background: ", ";\n    border: 3px solid ", ";\n  };\n\n  :vertical:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n}"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  :before {\n    ", " background: ", ";\n  }\n\n  :after {\n    ", "\n    background: ", ";\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  position: relative;\n  padding-left: 32px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: 12px;\n  color: ", ";\n  margin-left: -", "px;\n\n  :before {\n     ", ";\n  }\n\n  :after {\n    ", ";\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 10px;\n  height: 5px;\n  border-bottom: 2px solid white;\n  border-left: 2px solid white;\n  top: 4px;\n  left: 3px;\n  transform: rotate(-45deg);\n  display: block;\n  position: absolute;\n  opacity: ", ";\n  content: \"\";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: ", "px;\n  height: ", "px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 2px;\n  content: '';\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  user-select: none;\n  cursor: pointer;\n  line-height: 0;\n  font-weight: 500;\n  font-size: 12px;\n  color: ", ";\n  position: relative;\n  display: inline-block;\n  padding-top: ", "px;\n  padding-right: 0;\n  padding-bottom: 0;\n  padding-left: ", "px;\n\n  :before {\n    ", ";\n  }\n\n  :after {\n    ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  transition: ", ";\n  position: absolute;\n  top: 0;\n  left: ", "px;\n  content: '';\n  display: block;\n  height: ", ";\n  width: ", ";\n  background: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  position: absolute;\n  top: 0;\n  left: ", "px;\n  content: '';\n  display: block;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", " color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  line-height: 18px;\n  height: 24px;\n  font-weight: 400;\n  padding-left: 4px;\n  margin-left: -4px;\n  background-color: transparent;\n  border: 1px solid transparent;\n\n  :hover {\n    height: 24px;\n    cursor: text;\n    background-color: transparent;\n    border: 1px solid ", ";\n  }\n\n  :active,\n  .active,\n  :focus {\n    background-color: transparent;\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  cursor: pointer;\n  flex-wrap: wrap;\n  height: auto;\n  justify-content: start;\n  margin-bottom: 2px;\n  padding: 4px 7px 4px 4px;\n  white-space: normal;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  color: ", ";\n  background-color: ", ";\n  height: ", ";\n  border: 1px solid\n    ", ";\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  :active,\n  &.active {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n\n  background-color: ", ";\n  border: 1px solid\n  ", ";\n  color: ", ";\n  caret-color: ", ";\n\n  ::-webkit-input-placeholder {\n    color: ", ";\n    font-weight: 400;\n  }\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  :hover {\n    background-color: ", ";\n    cursor: ", ";\n    border-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: 2px;\n  caret-color: ", ";\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n  font-weight: ", ";\n  height: ", ";\n  justify-content: space-between;\n  outline: none;\n  overflow: hidden;\n  padding: ", ";\n  text-overflow: ellipsis;\n  transition: ", ";\n  white-space: nowrap;\n  width: 100%;\n  word-wrap: normal;\n  pointer-events: ", ";\n  opacity: ", ";\n\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  ::placeholder {\n    color: ", ";\n    font-weight: ", ";\n  }\n\n  /* Disable Arrows on Number Inputs */\n  ::-webkit-inner-spin-button,\n  ::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var transition = 'all .4s ease';
exports.transition = transition;
var transitionFast = 'all .2s ease';
exports.transitionFast = transitionFast;
var transitionSlow = 'all .8s ease';
exports.transitionSlow = transitionSlow;
var boxShadow = '0 1px 2px 0 rgba(0,0,0,0.10)';
exports.boxShadow = boxShadow;
var boxSizing = 'border-box';
exports.boxSizing = boxSizing;
var borderRadius = '1px';
exports.borderRadius = borderRadius;
var borderColor = '#3A414C';
exports.borderColor = borderColor;
var borderColorLight = '#F1F1F1'; // TEXT

exports.borderColorLight = borderColorLight;
var labelColor = '#6A7485';
exports.labelColor = labelColor;
var labelHoverColor = '#C6C6C6';
exports.labelHoverColor = labelHoverColor;
var labelColorLT = '#6A7485';
exports.labelColorLT = labelColorLT;
var textColor = '#A0A7B4';
exports.textColor = textColor;
var textColorLT = '#3A414C';
exports.textColorLT = textColorLT;
var titleColorLT = '#29323C';
exports.titleColorLT = titleColorLT;
var subtextColor = '#6A7485';
exports.subtextColor = subtextColor;
var subtextColorLT = '#A0A7B4';
exports.subtextColorLT = subtextColorLT;
var subtextColorActive = '#FFFFFF';
exports.subtextColorActive = subtextColorActive;
var titleTextColor = '#FFFFFF';
exports.titleTextColor = titleTextColor;
var textColorHl = '#D3D8E0';
exports.textColorHl = textColorHl;
var textColorHlLT = '#F1F1F1';
exports.textColorHlLT = textColorHlLT;
var activeColor = '#1FBAD6';
exports.activeColor = activeColor;
var activeColorHover = '#108188';
exports.activeColorHover = activeColorHover;
var errorColor = '#F9042C'; // Button

exports.errorColor = errorColor;
var primaryBtnBgd = '#0F9668';
exports.primaryBtnBgd = primaryBtnBgd;
var primaryBtnActBgd = '#13B17B';
exports.primaryBtnActBgd = primaryBtnActBgd;
var primaryBtnColor = '#FFFFFF';
exports.primaryBtnColor = primaryBtnColor;
var primaryBtnActColor = '#FFFFFF';
exports.primaryBtnActColor = primaryBtnActColor;
var primaryBtnBgdHover = '#13B17B';
exports.primaryBtnBgdHover = primaryBtnBgdHover;
var primaryBtnRadius = '2px';
exports.primaryBtnRadius = primaryBtnRadius;
var secondaryBtnBgd = '#6A7485';
exports.secondaryBtnBgd = secondaryBtnBgd;
var secondaryBtnActBgd = '#A0A7B4';
exports.secondaryBtnActBgd = secondaryBtnActBgd;
var secondaryBtnColor = '#FFFFFF';
exports.secondaryBtnColor = secondaryBtnColor;
var secondaryBtnActColor = '#FFFFFF';
exports.secondaryBtnActColor = secondaryBtnActColor;
var secondaryBtnBgdHover = '#A0A7B4';
exports.secondaryBtnBgdHover = secondaryBtnBgdHover;
var linkBtnBgd = 'transparent';
exports.linkBtnBgd = linkBtnBgd;
var linkBtnActBgd = linkBtnBgd;
exports.linkBtnActBgd = linkBtnActBgd;
var linkBtnColor = '#A0A7B4';
exports.linkBtnColor = linkBtnColor;
var linkBtnActColor = textColorHlLT;
exports.linkBtnActColor = linkBtnActColor;
var linkBtnActBgdHover = linkBtnBgd;
exports.linkBtnActBgdHover = linkBtnActBgdHover;
var negativeBtnBgd = errorColor;
exports.negativeBtnBgd = negativeBtnBgd;
var negativeBtnActBgd = '#FF193E';
exports.negativeBtnActBgd = negativeBtnActBgd;
var negativeBtnBgdHover = '#FF193E';
exports.negativeBtnBgdHover = negativeBtnBgdHover;
var negativeBtnColor = '#FFFFFF';
exports.negativeBtnColor = negativeBtnColor;
var negativeBtnActColor = '#FFFFFF'; // Input

exports.negativeBtnActColor = negativeBtnActColor;
var inputBoxHeight = '34px';
exports.inputBoxHeight = inputBoxHeight;
var inputPadding = '4px 10px';
exports.inputPadding = inputPadding;
var inputFontSize = '11px';
exports.inputFontSize = inputFontSize;
var inputFontWeight = 500;
exports.inputFontWeight = inputFontWeight;
var inputBgd = '#29323C';
exports.inputBgd = inputBgd;
var inputBgdHover = '#3A414C';
exports.inputBgdHover = inputBgdHover;
var inputBgdActive = '#3A414C';
exports.inputBgdActive = inputBgdActive;
var inputBorderColor = '#29323C';
exports.inputBorderColor = inputBorderColor;
var inputBorderHoverColor = '#3A414C';
exports.inputBorderHoverColor = inputBorderHoverColor;
var inputBorderActiveColor = '#D3D8E0';
exports.inputBorderActiveColor = inputBorderActiveColor;
var inputColor = '#A0A7B4';
exports.inputColor = inputColor;
var inputBorderRadius = '1px';
exports.inputBorderRadius = inputBorderRadius;
var inputPlaceholderColor = '#6A7485';
exports.inputPlaceholderColor = inputPlaceholderColor;
var inputPlaceholderFontWeight = 400;
exports.inputPlaceholderFontWeight = inputPlaceholderFontWeight;
var secondaryInputHeight = '28px';
exports.secondaryInputHeight = secondaryInputHeight;
var secondaryInputBgd = '#242730';
exports.secondaryInputBgd = secondaryInputBgd;
var secondaryInputBgdHover = '#3A414C';
exports.secondaryInputBgdHover = secondaryInputBgdHover;
var secondaryInputBgdActive = '#3A414C';
exports.secondaryInputBgdActive = secondaryInputBgdActive;
var secondaryInputColor = '#A0A7B4';
exports.secondaryInputColor = secondaryInputColor;
var secondaryInputBorderColor = '#242730';
exports.secondaryInputBorderColor = secondaryInputBorderColor;
var secondaryInputBorderActiveColor = '#D3D8E0'; // Select

exports.secondaryInputBorderActiveColor = secondaryInputBorderActiveColor;
var selectColor = inputColor;
exports.selectColor = selectColor;
var selectColorLT = titleColorLT;
exports.selectColorLT = selectColorLT;
var selectActiveBorderColor = '#D3D8E0';
exports.selectActiveBorderColor = selectActiveBorderColor;
var selectFontSize = '11px';
exports.selectFontSize = selectFontSize;
var selectFontWeight = '400';
exports.selectFontWeight = selectFontWeight;
var selectFontWeightBold = '500';
exports.selectFontWeightBold = selectFontWeightBold;
var selectColorPlaceHolder = '#6A7485';
exports.selectColorPlaceHolder = selectColorPlaceHolder;
var selectBackground = inputBgd;
exports.selectBackground = selectBackground;
var selectBackgroundHover = inputBgdHover;
exports.selectBackgroundHover = selectBackgroundHover;
var selectBackgroundLT = '#FFFFFF';
exports.selectBackgroundLT = selectBackgroundLT;
var selectBackgroundHoverLT = '#F8F8F9';
exports.selectBackgroundHoverLT = selectBackgroundHoverLT;
var selectBorderColor = '#D3D8E0';
exports.selectBorderColor = selectBorderColor;
var selectBorderColorLT = '#D3D8E0';
exports.selectBorderColorLT = selectBorderColorLT;
var selectBorderRadius = '1px';
exports.selectBorderRadius = selectBorderRadius;
var selectBorder = 0;
exports.selectBorder = selectBorder;
var dropdownListHighlightBg = '#6A7485';
exports.dropdownListHighlightBg = dropdownListHighlightBg;
var dropdownListShadow = '0 6px 12px 0 rgba(0,0,0,0.16)';
exports.dropdownListShadow = dropdownListShadow;
var dropdownListBgd = '#3A414C';
exports.dropdownListBgd = dropdownListBgd;
var dropdownListBorderTop = '#242730'; // Switch

exports.dropdownListBorderTop = dropdownListBorderTop;
var switchWidth = 24;
exports.switchWidth = switchWidth;
var switchHeight = 12;
exports.switchHeight = switchHeight;
var switchLabelMargin = 12;
exports.switchLabelMargin = switchLabelMargin;
var switchTrackBgd = '#29323C';
exports.switchTrackBgd = switchTrackBgd;
var switchTrackBgdActive = activeColor;
exports.switchTrackBgdActive = switchTrackBgdActive;
var switchTrackBorderRadius = '1px';
exports.switchTrackBorderRadius = switchTrackBorderRadius;
var switchBtnBgd = '#6A7485';
exports.switchBtnBgd = switchBtnBgd;
var switchBtnBgdActive = '#D3D8E0';
exports.switchBtnBgdActive = switchBtnBgdActive;
var switchBtnBoxShadow = '0 2px 4px 0 rgba(0,0,0,0.40)';
exports.switchBtnBoxShadow = switchBtnBoxShadow;
var switchBtnBorderRadius = '1px';
exports.switchBtnBorderRadius = switchBtnBorderRadius;
var switchBtnWidth = '12px';
exports.switchBtnWidth = switchBtnWidth;
var switchBtnHeight = '12px';
exports.switchBtnHeight = switchBtnHeight;
var secondarySwitchTrackBgd = '#242730';
exports.secondarySwitchTrackBgd = secondarySwitchTrackBgd;
var secondarySwitchBtnBgd = '#3A414C'; // Checkbox

exports.secondarySwitchBtnBgd = secondarySwitchBtnBgd;
var checkboxWidth = 16;
exports.checkboxWidth = checkboxWidth;
var checkboxHeight = 16;
exports.checkboxHeight = checkboxHeight;
var checkboxMargin = 12;
exports.checkboxMargin = checkboxMargin;
var checkboxBorderColor = selectBorderColor;
exports.checkboxBorderColor = checkboxBorderColor;
var checkboxBorderRadius = '2px';
exports.checkboxBorderRadius = checkboxBorderRadius;
var checkboxBorderColorLT = selectBorderColorLT;
exports.checkboxBorderColorLT = checkboxBorderColorLT;
var checkboxBoxBgd = 'white';
exports.checkboxBoxBgd = checkboxBoxBgd;
var checkboxBoxBgdChecked = primaryBtnBgd; // Side Panel

exports.checkboxBoxBgdChecked = checkboxBoxBgdChecked;
var sidePanelHeaderBg = '#29323C';
exports.sidePanelHeaderBg = sidePanelHeaderBg;
var sidePanelBg = '#242730';
exports.sidePanelBg = sidePanelBg;
var sideBarCloseBtnBgd = secondaryBtnBgd;
exports.sideBarCloseBtnBgd = sideBarCloseBtnBgd;
var sideBarCloseBtnColor = '#29323C';
exports.sideBarCloseBtnColor = sideBarCloseBtnColor;
var sideBarCloseBtnBgdHover = secondaryBtnActBgd;
exports.sideBarCloseBtnBgdHover = sideBarCloseBtnBgdHover;
var panelBackground = '#29323C';
exports.panelBackground = panelBackground;
var panelBackgroundHover = '#3A4552';
exports.panelBackgroundHover = panelBackgroundHover;
var panelActiveBg = '#3A4552';
exports.panelActiveBg = panelActiveBg;
var panelActiveBgLT = '#6A7485';
exports.panelActiveBgLT = panelActiveBgLT;
var panelHeaderIcon = '#6A7485';
exports.panelHeaderIcon = panelHeaderIcon;
var panelHeaderIconActive = '#A0A7B4';
exports.panelHeaderIconActive = panelHeaderIconActive;
var panelHeaderHeight = 48;
exports.panelHeaderHeight = panelHeaderHeight;
var panelBoxShadow = '0 6px 12px 0 rgba(0,0,0,0.16)';
exports.panelBoxShadow = panelBoxShadow;
var panelBorderRadius = '2px';
exports.panelBorderRadius = panelBorderRadius;
var panelBackgroundLT = '#f8f8f9';
exports.panelBackgroundLT = panelBackgroundLT;
var panelBorderColor = '#3A414C';
exports.panelBorderColor = panelBorderColor;
var panelBorder = "1px solid ".concat(borderColor);
exports.panelBorder = panelBorder;
var panelBorderLT = "1px solid ".concat(borderColorLight);
exports.panelBorderLT = panelBorderLT;
var mapPanelBackgroundColor = '#242730';
exports.mapPanelBackgroundColor = mapPanelBackgroundColor;
var mapPanelHeaderBackgroundColor = '#29323C';
exports.mapPanelHeaderBackgroundColor = mapPanelHeaderBackgroundColor;
var tooltipBg = '#F8F8F9';
exports.tooltipBg = tooltipBg;
var tooltipColor = '#333334'; // Modal

exports.tooltipColor = tooltipColor;
var modalTitleColor = '#3A414C';
exports.modalTitleColor = modalTitleColor;
var modalTitleFontSize = '24px';
exports.modalTitleFontSize = modalTitleFontSize;
var modalFooterBgd = '#F8F8F9';
exports.modalFooterBgd = modalFooterBgd;
var modalImagePlaceHolder = '#DDDFE3';
exports.modalImagePlaceHolder = modalImagePlaceHolder;
var modalPadding = '10px 0'; // Modal Dialog (Dark)

exports.modalPadding = modalPadding;
var modalDialogBgd = '#3A414C';
exports.modalDialogBgd = modalDialogBgd;
var modalDialogColor = textColorHl; // Slider

exports.modalDialogColor = modalDialogColor;
var sliderBarColor = '#6A7485';
exports.sliderBarColor = sliderBarColor;
var sliderBarBgd = '#3A414C';
exports.sliderBarBgd = sliderBarBgd;
var sliderBarHoverColor = '#D3D8E0';
exports.sliderBarHoverColor = sliderBarHoverColor;
var sliderBarRadius = '1px';
exports.sliderBarRadius = sliderBarRadius;
var sliderBarHeight = 4;
exports.sliderBarHeight = sliderBarHeight;
var sliderHandleHeight = 12;
exports.sliderHandleHeight = sliderHandleHeight;
var sliderHandleWidth = 12;
exports.sliderHandleWidth = sliderHandleWidth;
var sliderHandleColor = '#D3D8E0';
exports.sliderHandleColor = sliderHandleColor;
var sliderHandleHoverColor = '#FFFFFF';
exports.sliderHandleHoverColor = sliderHandleHoverColor;
var sliderHandleShadow = '0 2px 4px 0 rgba(0,0,0,0.40)';
exports.sliderHandleShadow = sliderHandleShadow;
var sliderInputHeight = 24;
exports.sliderInputHeight = sliderInputHeight;
var sliderInputWidth = 50; // Plot

exports.sliderInputWidth = sliderInputWidth;
var rangeBrushBgd = '#3A414C'; // Notification

exports.rangeBrushBgd = rangeBrushBgd;
var notificationColors = {
  info: '#276ef1',
  error: '#f25138',
  success: '#47b275',
  warning: '#ffc043'
};
exports.notificationColors = notificationColors;
var notificationPanelWidth = 240;
exports.notificationPanelWidth = notificationPanelWidth;
var notificationPanelItemWidth = notificationPanelWidth - 60;
exports.notificationPanelItemWidth = notificationPanelItemWidth;
var notificationPanelItemHeight = 60;
exports.notificationPanelItemHeight = notificationPanelItemHeight;
var textTruncate = {
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal'
}; // theme is passed to kepler.gl when it's mounted,
// it is used by styled-components to pass along to
// all child components

exports.textTruncate = textTruncate;
var input = (0, _styledComponents.css)(_templateObject(), function (props) {
  return props.theme.inputBgd;
}, function (props) {
  return props.active ? props.theme.inputBorderActiveColor : props.error ? props.theme.errorColor : props.theme.inputBgd;
}, function (props) {
  return props.theme.inputBorderActiveColor;
}, function (props) {
  return props.theme.inputColor;
}, function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputFontWeight;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.disabled ? 0.5 : 1;
}, function (props) {
  return props.type === 'number' ? 'text' : 'pointer';
}, function (props) {
  return props.active ? props.theme.inputBgdActive : props.theme.inputBgdHover;
}, function (props) {
  return props.active ? props.theme.inputBorderActiveColor : props.theme.inputBorderHoverColor;
}, function (props) {
  return props.theme.inputBgdActive;
}, function (props) {
  return props.theme.inputBorderActiveColor;
}, function (props) {
  return props.theme.inputPlaceholderColor;
}, function (props) {
  return props.theme.inputPlaceholderFontWeight;
});
var inputLT = (0, _styledComponents.css)(_templateObject2(), input, function (props) {
  return props.theme.selectBackgroundLT;
}, function (props) {
  return props.active ? props.theme.selectActiveBorderColor : props.error ? props.theme.errorColor : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.selectColorLT;
}, function (props) {
  return props.theme.selectColorLT;
}, function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.selectBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.selectBackgroundLT;
}, function (props) {
  return ['number', 'text'].includes(props.type) ? 'text' : 'pointer';
}, function (props) {
  return props.active ? props.theme.textColorLT : props.theme.subtextColor;
});
var secondaryInput = (0, _styledComponents.css)(_templateObject3(), function (props) {
  return props.theme.input;
}, function (props) {
  return props.theme.secondaryInputColor;
}, function (props) {
  return props.theme.secondaryInputBgd;
}, function (props) {
  return props.theme.secondaryInputHeight;
}, function (props) {
  return props.error ? props.theme.errorColor : props.theme.secondaryInputBorderColor;
}, function (props) {
  return props.theme.secondaryInputBgdHover;
}, function (props) {
  return props.theme.secondaryInputBgdHover;
}, function (props) {
  return props.theme.secondaryInputBgdActive;
}, function (props) {
  return props.theme.secondaryInputBorderActiveColor;
});
var chickletedInput = (0, _styledComponents.css)(_templateObject4(), function (props) {
  return props.theme.secondaryInput;
});
var inlineInput = (0, _styledComponents.css)(_templateObject5(), function (props) {
  return props.theme.input;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.inputBorderActiveColor;
});
var switchTrack = (0, _styledComponents.css)(_templateObject6(), function (props) {
  return props.checked ? props.theme.switchTrackBgdActive : props.theme.switchTrackBgd;
}, function (props) {
  return -props.theme.switchLabelMargin;
}, function (props) {
  return props.theme.switchWidth;
}, function (props) {
  return props.theme.switchHeight;
}, function (props) {
  return props.theme.switchTrackBorderRadius;
});
var switchButton = (0, _styledComponents.css)(_templateObject7(), function (props) {
  return props.theme.transition;
}, function (props) {
  return (props.checked ? props.theme.switchWidth / 2 : -1) - props.theme.switchLabelMargin;
}, function (props) {
  return props.theme.switchBtnHeight;
}, function (props) {
  return props.theme.switchBtnWidth;
}, function (props) {
  return props.checked ? props.theme.switchBtnBgdActive : props.theme.switchBtnBgd;
}, function (props) {
  return props.theme.switchBtnBoxShadow;
});
var inputSwitch = (0, _styledComponents.css)(_templateObject8(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.switchHeight / 2;
}, function (props) {
  return props.theme.switchWidth;
}, function (props) {
  return props.theme.switchTrack;
}, function (props) {
  return props.theme.switchButton;
}); // This is a light version checkbox

var checkboxBox = (0, _styledComponents.css)(_templateObject9(), function (props) {
  return props.theme.checkboxWidth;
}, function (props) {
  return props.theme.checkboxHeight;
}, function (props) {
  return props.checked ? props.theme.checkboxBoxBgdChecked : props.theme.checkboxBoxBgd;
}, function (props) {
  return props.checked ? props.theme.checkboxBoxBgdChecked : props.theme.checkboxBorderColor;
});
var checkboxCheck = (0, _styledComponents.css)(_templateObject10(), function (props) {
  return props.checked ? 1 : 0;
});
var inputCheckbox = (0, _styledComponents.css)(_templateObject11(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.switchLabelMargin;
}, function (props) {
  return props.theme.checkboxBox;
}, function (props) {
  return props.theme.checkboxCheck;
});
var secondarySwitch = (0, _styledComponents.css)(_templateObject12(), function (props) {
  return props.theme.inputSwitch;
}, function (props) {
  return props.theme.switchTrack;
}, function (props) {
  return props.checked ? props.theme.switchTrackBgdActive : props.theme.secondarySwitchTrackBgd;
}, function (props) {
  return props.theme.switchButton;
}, function (props) {
  return props.checked ? props.theme.switchBtnBgdActive : props.theme.secondarySwitchBtnBgd;
});
var dropdownScrollBar = (0, _styledComponents.css)(_templateObject13(), function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.textColorHl;
});
var dropdownListAnchor = (0, _styledComponents.css)(_templateObject14(), function (props) {
  return props.theme.selectColor;
});
var dropdownListItem = (0, _styledComponents.css)(_templateObject15(), function (props) {
  return props.theme.dropdownListHighlightBg;
}, function (props) {
  return props.theme.textColorHl;
});
var dropdownListHeader = (0, _styledComponents.css)(_templateObject16(), function (props) {
  return props.theme.labelColor;
});
var dropdownListSection = (0, _styledComponents.css)(_templateObject17(), function (props) {
  return props.theme.labelColor;
});
var dropdownList = (0, _styledComponents.css)(_templateObject18(), function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.dropdownListSection;
}, function (props) {
  return props.theme.dropdownListHeader;
}, function (props) {
  return props.theme.dropdownListItem;
}, function (props) {
  return props.theme.dropdownListAnchor;
}, function (props) {
  return props.theme.dropdownScrollBar;
});
var sidePanelScrollBar = (0, _styledComponents.css)(_templateObject19(), function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.labelColor;
});
var panelDropdownScrollBar = (0, _styledComponents.css)(_templateObject20(), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.labelColor;
});
var scrollBar = (0, _styledComponents.css)(_templateObject21(), function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});
var modalScrollBar = (0, _styledComponents.css)(_templateObject22(), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.labelColorLT;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});
exports.modalScrollBar = modalScrollBar;
var theme = (0, _objectSpread2["default"])({}, _defaultSettings.DIMENSIONS, {
  // templates
  input: input,
  inputLT: inputLT,
  inlineInput: inlineInput,
  chickletedInput: chickletedInput,
  secondaryInput: secondaryInput,
  dropdownScrollBar: dropdownScrollBar,
  dropdownList: dropdownList,
  dropdownListItem: dropdownListItem,
  dropdownListAnchor: dropdownListAnchor,
  dropdownListHeader: dropdownListHeader,
  dropdownListSection: dropdownListSection,
  dropdownListShadow: dropdownListShadow,
  modalScrollBar: modalScrollBar,
  scrollBar: scrollBar,
  sidePanelScrollBar: sidePanelScrollBar,
  inputSwitch: inputSwitch,
  secondarySwitch: secondarySwitch,
  switchTrack: switchTrack,
  switchButton: switchButton,
  inputCheckbox: inputCheckbox,
  checkboxBox: checkboxBox,
  checkboxCheck: checkboxCheck,
  // Transitions
  transition: transition,
  transitionFast: transitionFast,
  transitionSlow: transitionSlow,
  // styles
  activeColor: activeColor,
  activeColorHover: activeColorHover,
  borderRadius: borderRadius,
  boxShadow: boxShadow,
  errorColor: errorColor,
  dropdownListHighlightBg: dropdownListHighlightBg,
  dropdownListBgd: dropdownListBgd,
  dropdownListBorderTop: dropdownListBorderTop,
  labelColor: labelColor,
  labelColorLT: labelColorLT,
  labelHoverColor: labelHoverColor,
  mapPanelBackgroundColor: mapPanelBackgroundColor,
  mapPanelHeaderBackgroundColor: mapPanelHeaderBackgroundColor,
  // Select
  selectActiveBorderColor: selectActiveBorderColor,
  selectBackground: selectBackground,
  selectBackgroundLT: selectBackgroundLT,
  selectBackgroundHover: selectBackgroundHover,
  selectBackgroundHoverLT: selectBackgroundHoverLT,
  selectBorder: selectBorder,
  selectBorderColor: selectBorderColor,
  selectBorderRadius: selectBorderRadius,
  selectBorderColorLT: selectBorderColorLT,
  selectColor: selectColor,
  selectColorPlaceHolder: selectColorPlaceHolder,
  selectFontSize: selectFontSize,
  selectFontWeight: selectFontWeight,
  selectColorLT: selectColorLT,
  selectFontWeightBold: selectFontWeightBold,
  // Input
  inputBgd: inputBgd,
  inputBgdHover: inputBgdHover,
  inputBgdActive: inputBgdActive,
  inputBoxHeight: inputBoxHeight,
  inputBorderColor: inputBorderColor,
  inputBorderActiveColor: inputBorderActiveColor,
  inputBorderHoverColor: inputBorderHoverColor,
  inputBorderRadius: inputBorderRadius,
  inputColor: inputColor,
  inputPadding: inputPadding,
  inputFontSize: inputFontSize,
  inputFontWeight: inputFontWeight,
  inputPlaceholderColor: inputPlaceholderColor,
  inputPlaceholderFontWeight: inputPlaceholderFontWeight,
  secondaryInputBgd: secondaryInputBgd,
  secondaryInputBgdHover: secondaryInputBgdHover,
  secondaryInputBgdActive: secondaryInputBgdActive,
  secondaryInputHeight: secondaryInputHeight,
  secondaryInputColor: secondaryInputColor,
  secondaryInputBorderColor: secondaryInputBorderColor,
  secondaryInputBorderActiveColor: secondaryInputBorderActiveColor,
  // Switch
  switchWidth: switchWidth,
  switchHeight: switchHeight,
  switchTrackBgd: switchTrackBgd,
  switchTrackBgdActive: switchTrackBgdActive,
  switchTrackBorderRadius: switchTrackBorderRadius,
  switchBtnBgd: switchBtnBgd,
  switchBtnBgdActive: switchBtnBgdActive,
  switchBtnBoxShadow: switchBtnBoxShadow,
  switchBtnBorderRadius: switchBtnBorderRadius,
  switchBtnWidth: switchBtnWidth,
  switchBtnHeight: switchBtnHeight,
  switchLabelMargin: switchLabelMargin,
  secondarySwitchTrackBgd: secondarySwitchTrackBgd,
  secondarySwitchBtnBgd: secondarySwitchBtnBgd,
  // Checkbox
  checkboxWidth: checkboxWidth,
  checkboxHeight: checkboxHeight,
  checkboxMargin: checkboxMargin,
  checkboxBorderColor: checkboxBorderColor,
  checkboxBorderRadius: checkboxBorderRadius,
  checkboxBorderColorLT: checkboxBorderColorLT,
  checkboxBoxBgd: checkboxBoxBgd,
  checkboxBoxBgdChecked: checkboxBoxBgdChecked,
  // Button
  primaryBtnBgd: primaryBtnBgd,
  primaryBtnActBgd: primaryBtnActBgd,
  primaryBtnColor: primaryBtnColor,
  primaryBtnActColor: primaryBtnActColor,
  primaryBtnBgdHover: primaryBtnBgdHover,
  primaryBtnRadius: primaryBtnRadius,
  secondaryBtnBgd: secondaryBtnBgd,
  secondaryBtnActBgd: secondaryBtnActBgd,
  secondaryBtnBgdHover: secondaryBtnBgdHover,
  secondaryBtnColor: secondaryBtnColor,
  secondaryBtnActColor: secondaryBtnActColor,
  negativeBtnBgd: negativeBtnBgd,
  negativeBtnActBgd: negativeBtnActBgd,
  negativeBtnBgdHover: negativeBtnBgdHover,
  negativeBtnColor: negativeBtnColor,
  negativeBtnActColor: negativeBtnActColor,
  linkBtnBgd: linkBtnBgd,
  linkBtnActBgd: linkBtnActBgd,
  linkBtnColor: linkBtnColor,
  linkBtnActColor: linkBtnActColor,
  linkBtnActBgdHover: linkBtnActBgdHover,
  // Modal
  modalTitleColor: modalTitleColor,
  modalTitleFontSize: modalTitleFontSize,
  modalFooterBgd: modalFooterBgd,
  modalImagePlaceHolder: modalImagePlaceHolder,
  modalPadding: modalPadding,
  modalDialogBgd: modalDialogBgd,
  modalDialogColor: modalDialogColor,
  // Side Panel
  sidePanelBg: sidePanelBg,
  sideBarCloseBtnBgd: sideBarCloseBtnBgd,
  sideBarCloseBtnColor: sideBarCloseBtnColor,
  sideBarCloseBtnBgdHover: sideBarCloseBtnBgdHover,
  sidePanelHeaderBg: sidePanelHeaderBg,
  // Side Panel Panel
  panelActiveBg: panelActiveBg,
  panelBackground: panelBackground,
  panelBackgroundHover: panelBackgroundHover,
  panelBackgroundLT: panelBackgroundLT,
  panelBoxShadow: panelBoxShadow,
  panelBorderRadius: panelBorderRadius,
  panelBorder: panelBorder,
  panelBorderColor: panelBorderColor,
  panelBorderLT: panelBorderLT,
  panelHeaderIcon: panelHeaderIcon,
  panelHeaderIconActive: panelHeaderIconActive,
  panelHeaderHeight: panelHeaderHeight,
  panelDropdownScrollBar: panelDropdownScrollBar,
  // Text
  textColor: textColor,
  textColorLT: textColorLT,
  textColorHl: textColorHl,
  titleTextColor: titleTextColor,
  subtextColor: subtextColor,
  subtextColorLT: subtextColorLT,
  subtextColorActive: subtextColorActive,
  textTruncate: textTruncate,
  titleColorLT: titleColorLT,
  tooltipBg: tooltipBg,
  tooltipColor: tooltipColor,
  // Slider
  sliderBarColor: sliderBarColor,
  sliderBarBgd: sliderBarBgd,
  sliderBarHoverColor: sliderBarHoverColor,
  sliderBarRadius: sliderBarRadius,
  sliderBarHeight: sliderBarHeight,
  sliderHandleHeight: sliderHandleHeight,
  sliderHandleWidth: sliderHandleWidth,
  sliderHandleColor: sliderHandleColor,
  sliderHandleHoverColor: sliderHandleHoverColor,
  sliderHandleShadow: sliderHandleShadow,
  sliderInputHeight: sliderInputHeight,
  sliderInputWidth: sliderInputWidth,
  // Plot
  rangeBrushBgd: rangeBrushBgd,
  // Notifications
  notificationColors: notificationColors,
  notificationPanelWidth: notificationPanelWidth,
  notificationPanelItemWidth: notificationPanelItemWidth,
  notificationPanelItemHeight: notificationPanelItemHeight
});
exports.theme = theme;
var themeLT = (0, _objectSpread2["default"])({}, theme, {
  // template
  input: inputLT,
  textColor: textColorLT,
  sidePanelBg: '#ffffff',
  titleTextColor: '#000000',
  sidePanelHeaderBg: '#f7f7F7',
  subtextColorActive: '#2473bd',
  tooltipBg: '#1869b5',
  tooltipColor: '#ffffff',
  dropdownListBgd: '#ffffff',
  textColorHl: '#2473bd',
  inputBgd: '#f7f7f7',
  inputBgdHover: '#ffffff',
  inputBgdActive: '#ffffff',
  dropdownListHighlightBg: '#f0f0f0',
  panelBackground: '#f7f7F7',
  panelBackgroundHover: '#f7f7F7',
  panelBorderColor: '#D3D8E0',
  secondaryInputBgd: '#f7f7F7',
  secondaryInputBgdActive: '#f7f7F7',
  secondaryInputBgdHover: '#ffffff',
  panelActiveBg: '#f7f7F7',
  mapPanelBackgroundColor: '#ffffff',
  mapPanelHeaderBackgroundColor: '#f7f7F7',
  sliderBarBgd: '#D3D8E0',
  secondarySwitchBtnBgd: '#D3D8E0',
  switchTrackBgd: '#D3D8E0'
});
exports.themeLT = themeLT;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZXMvYmFzZS5qcyJdLCJuYW1lcyI6WyJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbkZhc3QiLCJ0cmFuc2l0aW9uU2xvdyIsImJveFNoYWRvdyIsImJveFNpemluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ29sb3JMaWdodCIsImxhYmVsQ29sb3IiLCJsYWJlbEhvdmVyQ29sb3IiLCJsYWJlbENvbG9yTFQiLCJ0ZXh0Q29sb3IiLCJ0ZXh0Q29sb3JMVCIsInRpdGxlQ29sb3JMVCIsInN1YnRleHRDb2xvciIsInN1YnRleHRDb2xvckxUIiwic3VidGV4dENvbG9yQWN0aXZlIiwidGl0bGVUZXh0Q29sb3IiLCJ0ZXh0Q29sb3JIbCIsInRleHRDb2xvckhsTFQiLCJhY3RpdmVDb2xvciIsImFjdGl2ZUNvbG9ySG92ZXIiLCJlcnJvckNvbG9yIiwicHJpbWFyeUJ0bkJnZCIsInByaW1hcnlCdG5BY3RCZ2QiLCJwcmltYXJ5QnRuQ29sb3IiLCJwcmltYXJ5QnRuQWN0Q29sb3IiLCJwcmltYXJ5QnRuQmdkSG92ZXIiLCJwcmltYXJ5QnRuUmFkaXVzIiwic2Vjb25kYXJ5QnRuQmdkIiwic2Vjb25kYXJ5QnRuQWN0QmdkIiwic2Vjb25kYXJ5QnRuQ29sb3IiLCJzZWNvbmRhcnlCdG5BY3RDb2xvciIsInNlY29uZGFyeUJ0bkJnZEhvdmVyIiwibGlua0J0bkJnZCIsImxpbmtCdG5BY3RCZ2QiLCJsaW5rQnRuQ29sb3IiLCJsaW5rQnRuQWN0Q29sb3IiLCJsaW5rQnRuQWN0QmdkSG92ZXIiLCJuZWdhdGl2ZUJ0bkJnZCIsIm5lZ2F0aXZlQnRuQWN0QmdkIiwibmVnYXRpdmVCdG5CZ2RIb3ZlciIsIm5lZ2F0aXZlQnRuQ29sb3IiLCJuZWdhdGl2ZUJ0bkFjdENvbG9yIiwiaW5wdXRCb3hIZWlnaHQiLCJpbnB1dFBhZGRpbmciLCJpbnB1dEZvbnRTaXplIiwiaW5wdXRGb250V2VpZ2h0IiwiaW5wdXRCZ2QiLCJpbnB1dEJnZEhvdmVyIiwiaW5wdXRCZ2RBY3RpdmUiLCJpbnB1dEJvcmRlckNvbG9yIiwiaW5wdXRCb3JkZXJIb3ZlckNvbG9yIiwiaW5wdXRCb3JkZXJBY3RpdmVDb2xvciIsImlucHV0Q29sb3IiLCJpbnB1dEJvcmRlclJhZGl1cyIsImlucHV0UGxhY2Vob2xkZXJDb2xvciIsImlucHV0UGxhY2Vob2xkZXJGb250V2VpZ2h0Iiwic2Vjb25kYXJ5SW5wdXRIZWlnaHQiLCJzZWNvbmRhcnlJbnB1dEJnZCIsInNlY29uZGFyeUlucHV0QmdkSG92ZXIiLCJzZWNvbmRhcnlJbnB1dEJnZEFjdGl2ZSIsInNlY29uZGFyeUlucHV0Q29sb3IiLCJzZWNvbmRhcnlJbnB1dEJvcmRlckNvbG9yIiwic2Vjb25kYXJ5SW5wdXRCb3JkZXJBY3RpdmVDb2xvciIsInNlbGVjdENvbG9yIiwic2VsZWN0Q29sb3JMVCIsInNlbGVjdEFjdGl2ZUJvcmRlckNvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJzZWxlY3RGb250V2VpZ2h0Iiwic2VsZWN0Rm9udFdlaWdodEJvbGQiLCJzZWxlY3RDb2xvclBsYWNlSG9sZGVyIiwic2VsZWN0QmFja2dyb3VuZCIsInNlbGVjdEJhY2tncm91bmRIb3ZlciIsInNlbGVjdEJhY2tncm91bmRMVCIsInNlbGVjdEJhY2tncm91bmRIb3ZlckxUIiwic2VsZWN0Qm9yZGVyQ29sb3IiLCJzZWxlY3RCb3JkZXJDb2xvckxUIiwic2VsZWN0Qm9yZGVyUmFkaXVzIiwic2VsZWN0Qm9yZGVyIiwiZHJvcGRvd25MaXN0SGlnaGxpZ2h0QmciLCJkcm9wZG93bkxpc3RTaGFkb3ciLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RCb3JkZXJUb3AiLCJzd2l0Y2hXaWR0aCIsInN3aXRjaEhlaWdodCIsInN3aXRjaExhYmVsTWFyZ2luIiwic3dpdGNoVHJhY2tCZ2QiLCJzd2l0Y2hUcmFja0JnZEFjdGl2ZSIsInN3aXRjaFRyYWNrQm9yZGVyUmFkaXVzIiwic3dpdGNoQnRuQmdkIiwic3dpdGNoQnRuQmdkQWN0aXZlIiwic3dpdGNoQnRuQm94U2hhZG93Iiwic3dpdGNoQnRuQm9yZGVyUmFkaXVzIiwic3dpdGNoQnRuV2lkdGgiLCJzd2l0Y2hCdG5IZWlnaHQiLCJzZWNvbmRhcnlTd2l0Y2hUcmFja0JnZCIsInNlY29uZGFyeVN3aXRjaEJ0bkJnZCIsImNoZWNrYm94V2lkdGgiLCJjaGVja2JveEhlaWdodCIsImNoZWNrYm94TWFyZ2luIiwiY2hlY2tib3hCb3JkZXJDb2xvciIsImNoZWNrYm94Qm9yZGVyUmFkaXVzIiwiY2hlY2tib3hCb3JkZXJDb2xvckxUIiwiY2hlY2tib3hCb3hCZ2QiLCJjaGVja2JveEJveEJnZENoZWNrZWQiLCJzaWRlUGFuZWxIZWFkZXJCZyIsInNpZGVQYW5lbEJnIiwic2lkZUJhckNsb3NlQnRuQmdkIiwic2lkZUJhckNsb3NlQnRuQ29sb3IiLCJzaWRlQmFyQ2xvc2VCdG5CZ2RIb3ZlciIsInBhbmVsQmFja2dyb3VuZCIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwicGFuZWxBY3RpdmVCZyIsInBhbmVsQWN0aXZlQmdMVCIsInBhbmVsSGVhZGVySWNvbiIsInBhbmVsSGVhZGVySWNvbkFjdGl2ZSIsInBhbmVsSGVhZGVySGVpZ2h0IiwicGFuZWxCb3hTaGFkb3ciLCJwYW5lbEJvcmRlclJhZGl1cyIsInBhbmVsQmFja2dyb3VuZExUIiwicGFuZWxCb3JkZXJDb2xvciIsInBhbmVsQm9yZGVyIiwicGFuZWxCb3JkZXJMVCIsIm1hcFBhbmVsQmFja2dyb3VuZENvbG9yIiwibWFwUGFuZWxIZWFkZXJCYWNrZ3JvdW5kQ29sb3IiLCJ0b29sdGlwQmciLCJ0b29sdGlwQ29sb3IiLCJtb2RhbFRpdGxlQ29sb3IiLCJtb2RhbFRpdGxlRm9udFNpemUiLCJtb2RhbEZvb3RlckJnZCIsIm1vZGFsSW1hZ2VQbGFjZUhvbGRlciIsIm1vZGFsUGFkZGluZyIsIm1vZGFsRGlhbG9nQmdkIiwibW9kYWxEaWFsb2dDb2xvciIsInNsaWRlckJhckNvbG9yIiwic2xpZGVyQmFyQmdkIiwic2xpZGVyQmFySG92ZXJDb2xvciIsInNsaWRlckJhclJhZGl1cyIsInNsaWRlckJhckhlaWdodCIsInNsaWRlckhhbmRsZUhlaWdodCIsInNsaWRlckhhbmRsZVdpZHRoIiwic2xpZGVySGFuZGxlQ29sb3IiLCJzbGlkZXJIYW5kbGVIb3ZlckNvbG9yIiwic2xpZGVySGFuZGxlU2hhZG93Iiwic2xpZGVySW5wdXRIZWlnaHQiLCJzbGlkZXJJbnB1dFdpZHRoIiwicmFuZ2VCcnVzaEJnZCIsIm5vdGlmaWNhdGlvbkNvbG9ycyIsImluZm8iLCJlcnJvciIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwibm90aWZpY2F0aW9uUGFuZWxXaWR0aCIsIm5vdGlmaWNhdGlvblBhbmVsSXRlbVdpZHRoIiwibm90aWZpY2F0aW9uUGFuZWxJdGVtSGVpZ2h0IiwidGV4dFRydW5jYXRlIiwibWF4V2lkdGgiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJ3b3JkV3JhcCIsImlucHV0IiwiY3NzIiwicHJvcHMiLCJ0aGVtZSIsImFjdGl2ZSIsImRpc2FibGVkIiwidHlwZSIsImlucHV0TFQiLCJpbmNsdWRlcyIsInNlY29uZGFyeUlucHV0IiwiY2hpY2tsZXRlZElucHV0IiwiaW5saW5lSW5wdXQiLCJzd2l0Y2hUcmFjayIsImNoZWNrZWQiLCJzd2l0Y2hCdXR0b24iLCJpbnB1dFN3aXRjaCIsImNoZWNrYm94Qm94IiwiY2hlY2tib3hDaGVjayIsImlucHV0Q2hlY2tib3giLCJzZWNvbmRhcnlTd2l0Y2giLCJkcm9wZG93blNjcm9sbEJhciIsImRyb3Bkb3duTGlzdEFuY2hvciIsImRyb3Bkb3duTGlzdEl0ZW0iLCJkcm9wZG93bkxpc3RIZWFkZXIiLCJkcm9wZG93bkxpc3RTZWN0aW9uIiwiZHJvcGRvd25MaXN0Iiwic2lkZVBhbmVsU2Nyb2xsQmFyIiwicGFuZWxEcm9wZG93blNjcm9sbEJhciIsInNjcm9sbEJhciIsIm1vZGFsU2Nyb2xsQmFyIiwiRElNRU5TSU9OUyIsInRoZW1lTFQiXSwibWFwcGluZ3MiOiI7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QmxCK0IsRUFBQUEsZUFBZSxFQUFFLFNBbEJDO0FBbUJsQkMsRUFBQUEsb0JBQW9CLEVBQUUsU0FuQko7QUFvQmxCUyxFQUFBQSxnQkFBZ0IsRUFBRSxTQXBCQTtBQXFCbEI5RCxFQUFBQSxpQkFBaUIsRUFBRSxTQXJCRDtBQXNCbEJFLEVBQUFBLHVCQUF1QixFQUFFLFNBdEJQO0FBdUJsQkQsRUFBQUEsc0JBQXNCLEVBQUUsU0F2Qk47QUF3QmxCcUQsRUFBQUEsYUFBYSxFQUFFLFNBeEJHO0FBeUJsQlcsRUFBQUEsdUJBQXVCLEVBQUUsU0F6QlA7QUEwQmxCQyxFQUFBQSw2QkFBNkIsRUFBRSxTQTFCYjtBQTJCbEJXLEVBQUFBLFlBQVksRUFBRSxTQTNCSTtBQTRCbEJ2QyxFQUFBQSxxQkFBcUIsRUFBRSxTQTVCTDtBQTZCbEJWLEVBQUFBLGNBQWMsRUFBRTtBQTdCRSxFQUFiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE5IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjc3N9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7RElNRU5TSU9OU30gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5leHBvcnQgY29uc3QgdHJhbnNpdGlvbiA9ICdhbGwgLjRzIGVhc2UnO1xuZXhwb3J0IGNvbnN0IHRyYW5zaXRpb25GYXN0ID0gJ2FsbCAuMnMgZWFzZSc7XG5leHBvcnQgY29uc3QgdHJhbnNpdGlvblNsb3cgPSAnYWxsIC44cyBlYXNlJztcblxuZXhwb3J0IGNvbnN0IGJveFNoYWRvdyA9ICcwIDFweCAycHggMCByZ2JhKDAsMCwwLDAuMTApJztcbmV4cG9ydCBjb25zdCBib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5leHBvcnQgY29uc3QgYm9yZGVyUmFkaXVzID0gJzFweCc7XG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3IgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3JMaWdodCA9ICcjRjFGMUYxJztcblxuLy8gVEVYVFxuZXhwb3J0IGNvbnN0IGxhYmVsQ29sb3IgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3QgbGFiZWxIb3ZlckNvbG9yID0gJyNDNkM2QzYnO1xuZXhwb3J0IGNvbnN0IGxhYmVsQ29sb3JMVCA9ICcjNkE3NDg1JztcblxuZXhwb3J0IGNvbnN0IHRleHRDb2xvciA9ICcjQTBBN0I0JztcbmV4cG9ydCBjb25zdCB0ZXh0Q29sb3JMVCA9ICcjM0E0MTRDJztcbmV4cG9ydCBjb25zdCB0aXRsZUNvbG9yTFQgPSAnIzI5MzIzQyc7XG5cbmV4cG9ydCBjb25zdCBzdWJ0ZXh0Q29sb3IgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3Qgc3VidGV4dENvbG9yTFQgPSAnI0EwQTdCNCc7XG5leHBvcnQgY29uc3Qgc3VidGV4dENvbG9yQWN0aXZlID0gJyNGRkZGRkYnO1xuXG5leHBvcnQgY29uc3QgdGl0bGVUZXh0Q29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3QgdGV4dENvbG9ySGwgPSAnI0QzRDhFMCc7XG5leHBvcnQgY29uc3QgdGV4dENvbG9ySGxMVCA9ICcjRjFGMUYxJztcbmV4cG9ydCBjb25zdCBhY3RpdmVDb2xvciA9ICcjMUZCQUQ2JztcbmV4cG9ydCBjb25zdCBhY3RpdmVDb2xvckhvdmVyID0gJyMxMDgxODgnO1xuZXhwb3J0IGNvbnN0IGVycm9yQ29sb3IgPSAnI0Y5MDQyQyc7XG5cbi8vIEJ1dHRvblxuZXhwb3J0IGNvbnN0IHByaW1hcnlCdG5CZ2QgPSAnIzBGOTY2OCc7XG5leHBvcnQgY29uc3QgcHJpbWFyeUJ0bkFjdEJnZCA9ICcjMTNCMTdCJztcbmV4cG9ydCBjb25zdCBwcmltYXJ5QnRuQ29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3QgcHJpbWFyeUJ0bkFjdENvbG9yID0gJyNGRkZGRkYnO1xuZXhwb3J0IGNvbnN0IHByaW1hcnlCdG5CZ2RIb3ZlciA9ICcjMTNCMTdCJztcbmV4cG9ydCBjb25zdCBwcmltYXJ5QnRuUmFkaXVzID0gJzJweCc7XG5cbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlCdG5CZ2QgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5QnRuQWN0QmdkID0gJyNBMEE3QjQnO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUJ0bkNvbG9yID0gJyNGRkZGRkYnO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUJ0bkFjdENvbG9yID0gJyNGRkZGRkYnO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUJ0bkJnZEhvdmVyID0gJyNBMEE3QjQnO1xuXG5leHBvcnQgY29uc3QgbGlua0J0bkJnZCA9ICd0cmFuc3BhcmVudCc7XG5leHBvcnQgY29uc3QgbGlua0J0bkFjdEJnZCA9IGxpbmtCdG5CZ2Q7XG5leHBvcnQgY29uc3QgbGlua0J0bkNvbG9yID0gJyNBMEE3QjQnO1xuZXhwb3J0IGNvbnN0IGxpbmtCdG5BY3RDb2xvciA9IHRleHRDb2xvckhsTFQ7XG5leHBvcnQgY29uc3QgbGlua0J0bkFjdEJnZEhvdmVyID0gbGlua0J0bkJnZDtcblxuZXhwb3J0IGNvbnN0IG5lZ2F0aXZlQnRuQmdkID0gZXJyb3JDb2xvcjtcbmV4cG9ydCBjb25zdCBuZWdhdGl2ZUJ0bkFjdEJnZCA9ICcjRkYxOTNFJztcbmV4cG9ydCBjb25zdCBuZWdhdGl2ZUJ0bkJnZEhvdmVyID0gJyNGRjE5M0UnO1xuZXhwb3J0IGNvbnN0IG5lZ2F0aXZlQnRuQ29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3QgbmVnYXRpdmVCdG5BY3RDb2xvciA9ICcjRkZGRkZGJztcblxuLy8gSW5wdXRcbmV4cG9ydCBjb25zdCBpbnB1dEJveEhlaWdodCA9ICczNHB4JztcbmV4cG9ydCBjb25zdCBpbnB1dFBhZGRpbmcgPSAnNHB4IDEwcHgnO1xuZXhwb3J0IGNvbnN0IGlucHV0Rm9udFNpemUgPSAnMTFweCc7XG5leHBvcnQgY29uc3QgaW5wdXRGb250V2VpZ2h0ID0gNTAwO1xuZXhwb3J0IGNvbnN0IGlucHV0QmdkID0gJyMyOTMyM0MnO1xuZXhwb3J0IGNvbnN0IGlucHV0QmdkSG92ZXIgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3QgaW5wdXRCZ2RBY3RpdmUgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3QgaW5wdXRCb3JkZXJDb2xvciA9ICcjMjkzMjNDJztcbmV4cG9ydCBjb25zdCBpbnB1dEJvcmRlckhvdmVyQ29sb3IgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3QgaW5wdXRCb3JkZXJBY3RpdmVDb2xvciA9ICcjRDNEOEUwJztcbmV4cG9ydCBjb25zdCBpbnB1dENvbG9yID0gJyNBMEE3QjQnO1xuZXhwb3J0IGNvbnN0IGlucHV0Qm9yZGVyUmFkaXVzID0gJzFweCc7XG5leHBvcnQgY29uc3QgaW5wdXRQbGFjZWhvbGRlckNvbG9yID0gJyM2QTc0ODUnO1xuZXhwb3J0IGNvbnN0IGlucHV0UGxhY2Vob2xkZXJGb250V2VpZ2h0ID0gNDAwO1xuXG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5SW5wdXRIZWlnaHQgPSAnMjhweCc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5SW5wdXRCZ2QgPSAnIzI0MjczMCc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5SW5wdXRCZ2RIb3ZlciA9ICcjM0E0MTRDJztcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlJbnB1dEJnZEFjdGl2ZSA9ICcjM0E0MTRDJztcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlJbnB1dENvbG9yID0gJyNBMEE3QjQnO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeUlucHV0Qm9yZGVyQ29sb3IgPSAnIzI0MjczMCc7XG5leHBvcnQgY29uc3Qgc2Vjb25kYXJ5SW5wdXRCb3JkZXJBY3RpdmVDb2xvciA9ICcjRDNEOEUwJztcblxuLy8gU2VsZWN0XG5leHBvcnQgY29uc3Qgc2VsZWN0Q29sb3IgPSBpbnB1dENvbG9yO1xuZXhwb3J0IGNvbnN0IHNlbGVjdENvbG9yTFQgPSB0aXRsZUNvbG9yTFQ7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RBY3RpdmVCb3JkZXJDb2xvciA9ICcjRDNEOEUwJztcbmV4cG9ydCBjb25zdCBzZWxlY3RGb250U2l6ZSA9ICcxMXB4JztcbmV4cG9ydCBjb25zdCBzZWxlY3RGb250V2VpZ2h0ID0gJzQwMCc7XG5leHBvcnQgY29uc3Qgc2VsZWN0Rm9udFdlaWdodEJvbGQgPSAnNTAwJztcblxuZXhwb3J0IGNvbnN0IHNlbGVjdENvbG9yUGxhY2VIb2xkZXIgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3Qgc2VsZWN0QmFja2dyb3VuZCA9IGlucHV0QmdkO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJhY2tncm91bmRIb3ZlciA9IGlucHV0QmdkSG92ZXI7XG5leHBvcnQgY29uc3Qgc2VsZWN0QmFja2dyb3VuZExUID0gJyNGRkZGRkYnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJhY2tncm91bmRIb3ZlckxUID0gJyNGOEY4RjknO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJvcmRlckNvbG9yID0gJyNEM0Q4RTAnO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEJvcmRlckNvbG9yTFQgPSAnI0QzRDhFMCc7XG5leHBvcnQgY29uc3Qgc2VsZWN0Qm9yZGVyUmFkaXVzID0gJzFweCc7XG5leHBvcnQgY29uc3Qgc2VsZWN0Qm9yZGVyID0gMDtcblxuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTGlzdEhpZ2hsaWdodEJnID0gJyM2QTc0ODUnO1xuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTGlzdFNoYWRvdyA9ICcwIDZweCAxMnB4IDAgcmdiYSgwLDAsMCwwLjE2KSc7XG5leHBvcnQgY29uc3QgZHJvcGRvd25MaXN0QmdkID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IGRyb3Bkb3duTGlzdEJvcmRlclRvcCA9ICcjMjQyNzMwJztcblxuLy8gU3dpdGNoXG5leHBvcnQgY29uc3Qgc3dpdGNoV2lkdGggPSAyNDtcbmV4cG9ydCBjb25zdCBzd2l0Y2hIZWlnaHQgPSAxMjtcbmV4cG9ydCBjb25zdCBzd2l0Y2hMYWJlbE1hcmdpbiA9IDEyO1xuXG5leHBvcnQgY29uc3Qgc3dpdGNoVHJhY2tCZ2QgPSAnIzI5MzIzQyc7XG5leHBvcnQgY29uc3Qgc3dpdGNoVHJhY2tCZ2RBY3RpdmUgPSBhY3RpdmVDb2xvcjtcbmV4cG9ydCBjb25zdCBzd2l0Y2hUcmFja0JvcmRlclJhZGl1cyA9ICcxcHgnO1xuZXhwb3J0IGNvbnN0IHN3aXRjaEJ0bkJnZCA9ICcjNkE3NDg1JztcbmV4cG9ydCBjb25zdCBzd2l0Y2hCdG5CZ2RBY3RpdmUgPSAnI0QzRDhFMCc7XG5leHBvcnQgY29uc3Qgc3dpdGNoQnRuQm94U2hhZG93ID0gJzAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC40MCknO1xuZXhwb3J0IGNvbnN0IHN3aXRjaEJ0bkJvcmRlclJhZGl1cyA9ICcxcHgnO1xuZXhwb3J0IGNvbnN0IHN3aXRjaEJ0bldpZHRoID0gJzEycHgnO1xuZXhwb3J0IGNvbnN0IHN3aXRjaEJ0bkhlaWdodCA9ICcxMnB4JztcblxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeVN3aXRjaFRyYWNrQmdkID0gJyMyNDI3MzAnO1xuZXhwb3J0IGNvbnN0IHNlY29uZGFyeVN3aXRjaEJ0bkJnZCA9ICcjM0E0MTRDJztcblxuLy8gQ2hlY2tib3hcbmV4cG9ydCBjb25zdCBjaGVja2JveFdpZHRoID0gMTY7XG5leHBvcnQgY29uc3QgY2hlY2tib3hIZWlnaHQgPSAxNjtcbmV4cG9ydCBjb25zdCBjaGVja2JveE1hcmdpbiA9IDEyO1xuZXhwb3J0IGNvbnN0IGNoZWNrYm94Qm9yZGVyQ29sb3IgPSBzZWxlY3RCb3JkZXJDb2xvcjtcbmV4cG9ydCBjb25zdCBjaGVja2JveEJvcmRlclJhZGl1cyA9ICcycHgnO1xuZXhwb3J0IGNvbnN0IGNoZWNrYm94Qm9yZGVyQ29sb3JMVCA9IHNlbGVjdEJvcmRlckNvbG9yTFQ7XG5leHBvcnQgY29uc3QgY2hlY2tib3hCb3hCZ2QgPSAnd2hpdGUnO1xuZXhwb3J0IGNvbnN0IGNoZWNrYm94Qm94QmdkQ2hlY2tlZCA9IHByaW1hcnlCdG5CZ2Q7XG5cbi8vIFNpZGUgUGFuZWxcbmV4cG9ydCBjb25zdCBzaWRlUGFuZWxIZWFkZXJCZyA9ICcjMjkzMjNDJztcbmV4cG9ydCBjb25zdCBzaWRlUGFuZWxCZyA9ICcjMjQyNzMwJztcbmV4cG9ydCBjb25zdCBzaWRlQmFyQ2xvc2VCdG5CZ2QgPSBzZWNvbmRhcnlCdG5CZ2Q7XG5leHBvcnQgY29uc3Qgc2lkZUJhckNsb3NlQnRuQ29sb3IgPSAnIzI5MzIzQyc7XG5leHBvcnQgY29uc3Qgc2lkZUJhckNsb3NlQnRuQmdkSG92ZXIgPSBzZWNvbmRhcnlCdG5BY3RCZ2Q7XG5cbmV4cG9ydCBjb25zdCBwYW5lbEJhY2tncm91bmQgPSAnIzI5MzIzQyc7XG5leHBvcnQgY29uc3QgcGFuZWxCYWNrZ3JvdW5kSG92ZXIgPSAnIzNBNDU1Mic7XG5leHBvcnQgY29uc3QgcGFuZWxBY3RpdmVCZyA9ICcjM0E0NTUyJztcbmV4cG9ydCBjb25zdCBwYW5lbEFjdGl2ZUJnTFQgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3QgcGFuZWxIZWFkZXJJY29uID0gJyM2QTc0ODUnO1xuZXhwb3J0IGNvbnN0IHBhbmVsSGVhZGVySWNvbkFjdGl2ZSA9ICcjQTBBN0I0JztcbmV4cG9ydCBjb25zdCBwYW5lbEhlYWRlckhlaWdodCA9IDQ4O1xuZXhwb3J0IGNvbnN0IHBhbmVsQm94U2hhZG93ID0gJzAgNnB4IDEycHggMCByZ2JhKDAsMCwwLDAuMTYpJztcbmV4cG9ydCBjb25zdCBwYW5lbEJvcmRlclJhZGl1cyA9ICcycHgnO1xuZXhwb3J0IGNvbnN0IHBhbmVsQmFja2dyb3VuZExUID0gJyNmOGY4ZjknO1xuXG5leHBvcnQgY29uc3QgcGFuZWxCb3JkZXJDb2xvciA9ICcjM0E0MTRDJztcbmV4cG9ydCBjb25zdCBwYW5lbEJvcmRlciA9IGAxcHggc29saWQgJHtib3JkZXJDb2xvcn1gO1xuZXhwb3J0IGNvbnN0IHBhbmVsQm9yZGVyTFQgPSBgMXB4IHNvbGlkICR7Ym9yZGVyQ29sb3JMaWdodH1gO1xuXG5leHBvcnQgY29uc3QgbWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3IgPSAnIzI0MjczMCc7XG5leHBvcnQgY29uc3QgbWFwUGFuZWxIZWFkZXJCYWNrZ3JvdW5kQ29sb3IgPSAnIzI5MzIzQyc7XG5leHBvcnQgY29uc3QgdG9vbHRpcEJnID0gJyNGOEY4RjknO1xuZXhwb3J0IGNvbnN0IHRvb2x0aXBDb2xvciA9ICcjMzMzMzM0JztcblxuLy8gTW9kYWxcbmV4cG9ydCBjb25zdCBtb2RhbFRpdGxlQ29sb3IgPSAnIzNBNDE0Qyc7XG5leHBvcnQgY29uc3QgbW9kYWxUaXRsZUZvbnRTaXplID0gJzI0cHgnO1xuZXhwb3J0IGNvbnN0IG1vZGFsRm9vdGVyQmdkID0gJyNGOEY4RjknO1xuZXhwb3J0IGNvbnN0IG1vZGFsSW1hZ2VQbGFjZUhvbGRlciA9ICcjRERERkUzJztcbmV4cG9ydCBjb25zdCBtb2RhbFBhZGRpbmcgPSAnMTBweCAwJztcblxuLy8gTW9kYWwgRGlhbG9nIChEYXJrKVxuZXhwb3J0IGNvbnN0IG1vZGFsRGlhbG9nQmdkID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IG1vZGFsRGlhbG9nQ29sb3IgPSB0ZXh0Q29sb3JIbDtcblxuLy8gU2xpZGVyXG5leHBvcnQgY29uc3Qgc2xpZGVyQmFyQ29sb3IgPSAnIzZBNzQ4NSc7XG5leHBvcnQgY29uc3Qgc2xpZGVyQmFyQmdkID0gJyMzQTQxNEMnO1xuZXhwb3J0IGNvbnN0IHNsaWRlckJhckhvdmVyQ29sb3IgPSAnI0QzRDhFMCc7XG5leHBvcnQgY29uc3Qgc2xpZGVyQmFyUmFkaXVzID0gJzFweCc7XG5leHBvcnQgY29uc3Qgc2xpZGVyQmFySGVpZ2h0ID0gNDtcbmV4cG9ydCBjb25zdCBzbGlkZXJIYW5kbGVIZWlnaHQgPSAxMjtcbmV4cG9ydCBjb25zdCBzbGlkZXJIYW5kbGVXaWR0aCA9IDEyO1xuZXhwb3J0IGNvbnN0IHNsaWRlckhhbmRsZUNvbG9yID0gJyNEM0Q4RTAnO1xuZXhwb3J0IGNvbnN0IHNsaWRlckhhbmRsZUhvdmVyQ29sb3IgPSAnI0ZGRkZGRic7XG5leHBvcnQgY29uc3Qgc2xpZGVySGFuZGxlU2hhZG93ID0gJzAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC40MCknO1xuZXhwb3J0IGNvbnN0IHNsaWRlcklucHV0SGVpZ2h0ID0gMjQ7XG5leHBvcnQgY29uc3Qgc2xpZGVySW5wdXRXaWR0aCA9IDUwO1xuXG4vLyBQbG90XG5leHBvcnQgY29uc3QgcmFuZ2VCcnVzaEJnZCA9ICcjM0E0MTRDJztcblxuLy8gTm90aWZpY2F0aW9uXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uQ29sb3JzID0ge1xuICBpbmZvOiAnIzI3NmVmMScsXG4gIGVycm9yOiAnI2YyNTEzOCcsXG4gIHN1Y2Nlc3M6ICcjNDdiMjc1JyxcbiAgd2FybmluZzogJyNmZmMwNDMnXG59O1xuXG5leHBvcnQgY29uc3Qgbm90aWZpY2F0aW9uUGFuZWxXaWR0aCA9IDI0MDtcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aCA9IG5vdGlmaWNhdGlvblBhbmVsV2lkdGggLSA2MDtcbmV4cG9ydCBjb25zdCBub3RpZmljYXRpb25QYW5lbEl0ZW1IZWlnaHQgPSA2MDtcblxuZXhwb3J0IGNvbnN0IHRleHRUcnVuY2F0ZSA9IHtcbiAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICB3b3JkV3JhcDogJ25vcm1hbCdcbn07XG5cbi8vIHRoZW1lIGlzIHBhc3NlZCB0byBrZXBsZXIuZ2wgd2hlbiBpdCdzIG1vdW50ZWQsXG4vLyBpdCBpcyB1c2VkIGJ5IHN0eWxlZC1jb21wb25lbnRzIHRvIHBhc3MgYWxvbmcgdG9cbi8vIGFsbCBjaGlsZCBjb21wb25lbnRzXG5cbmNvbnN0IGlucHV0ID0gY3NzYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0QmdkfTtcbiAgYm9yZGVyOiAxcHggc29saWRcbiAgICAke3Byb3BzID0+XG4gICAgICBwcm9wcy5hY3RpdmVcbiAgICAgICAgPyBwcm9wcy50aGVtZS5pbnB1dEJvcmRlckFjdGl2ZUNvbG9yXG4gICAgICAgIDogcHJvcHMuZXJyb3IgPyBwcm9wcy50aGVtZS5lcnJvckNvbG9yIDogcHJvcHMudGhlbWUuaW5wdXRCZ2R9O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNhcmV0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Qm9yZGVyQWN0aXZlQ29sb3J9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Rm9udFNpemV9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRXZWlnaHR9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHR9O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQYWRkaW5nfTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjUgOiAxKX07XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6ICR7cHJvcHMgPT4gcHJvcHMudHlwZSA9PT0gJ251bWJlcicgPyAndGV4dCcgOiAncG9pbnRlcid9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmlucHV0QmdkQWN0aXZlIDogcHJvcHMudGhlbWUuaW5wdXRCZ2RIb3Zlcn07XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5hY3RpdmVcbiAgICAgICAgPyBwcm9wcy50aGVtZS5pbnB1dEJvcmRlckFjdGl2ZUNvbG9yXG4gICAgICAgIDogcHJvcHMudGhlbWUuaW5wdXRCb3JkZXJIb3ZlckNvbG9yfTtcbiAgfVxuXG4gIDphY3RpdmUsXG4gIDpmb2N1cyxcbiAgJi5mb2N1cyxcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCZ2RBY3RpdmV9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEJvcmRlckFjdGl2ZUNvbG9yfTtcbiAgfVxuXG4gIDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0UGxhY2Vob2xkZXJDb2xvcn07XG4gICAgZm9udC13ZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQbGFjZWhvbGRlckZvbnRXZWlnaHR9O1xuICB9XG5cbiAgLyogRGlzYWJsZSBBcnJvd3Mgb24gTnVtYmVyIElucHV0cyAqL1xuICA6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4gIDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgaW5wdXRMVCA9IGNzc2BcbiAgJHtpbnB1dH1cblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJhY2tncm91bmRMVH07XG4gIGJvcmRlcjogMXB4IHNvbGlkXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmVcbiAgICAgID8gcHJvcHMudGhlbWUuc2VsZWN0QWN0aXZlQm9yZGVyQ29sb3JcbiAgICAgIDogcHJvcHMuZXJyb3JcbiAgICAgID8gcHJvcHMudGhlbWUuZXJyb3JDb2xvclxuICAgICAgOiBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvckxUfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JMVH07XG4gIGNhcmV0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yTFR9O1xuXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yTFR9O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICA6YWN0aXZlLFxuICA6Zm9jdXMsXG4gICYuZm9jdXMsXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJhY2tncm91bmRMVH07XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RCYWNrZ3JvdW5kTFR9O1xuICAgIGN1cnNvcjogJHtwcm9wcyA9PiBbJ251bWJlcicsICd0ZXh0J10uaW5jbHVkZXMocHJvcHMudHlwZSkgPyAndGV4dCcgOiAncG9pbnRlcid9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVFxuICAgICAgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBzZWNvbmRhcnlJbnB1dCA9IGNzc2BcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dH1cbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRDb2xvcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRCZ2R9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRIZWlnaHR9O1xuICBib3JkZXI6IDFweCBzb2xpZFxuICAgICR7cHJvcHMgPT4gcHJvcHMuZXJyb3JcbiAgICAgICAgICA/IHByb3BzLnRoZW1lLmVycm9yQ29sb3JcbiAgICAgICAgICA6IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0Qm9yZGVyQ29sb3J9O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRCZ2RIb3Zlcn07XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0QmdkSG92ZXJ9O1xuICB9XG5cbiAgOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRCZ2RBY3RpdmV9O1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dEJvcmRlckFjdGl2ZUNvbG9yfTtcbiAgfVxuYDtcblxuY29uc3QgY2hpY2tsZXRlZElucHV0ID0gY3NzYFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0fVxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG4gIHBhZGRpbmc6IDRweCA3cHggNHB4IDRweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbmA7XG5cbmNvbnN0IGlubGluZUlucHV0ID0gY3NzYFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0fSBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjQzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gIDpob3ZlciB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGN1cnNvcjogdGV4dDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICB9XG5cbiAgOmFjdGl2ZSxcbiAgLmFjdGl2ZSxcbiAgOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Qm9yZGVyQWN0aXZlQ29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBzd2l0Y2hUcmFjayA9IGNzc2BcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PlxuICAgIHByb3BzLmNoZWNrZWRcbiAgICAgID8gcHJvcHMudGhlbWUuc3dpdGNoVHJhY2tCZ2RBY3RpdmVcbiAgICAgIDogcHJvcHMudGhlbWUuc3dpdGNoVHJhY2tCZ2R9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogJHtwcm9wcyA9PiAtcHJvcHMudGhlbWUuc3dpdGNoTGFiZWxNYXJnaW59cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoV2lkdGh9cHg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hIZWlnaHR9cHg7XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoVHJhY2tCb3JkZXJSYWRpdXN9O1xuYDtcblxuY29uc3Qgc3dpdGNoQnV0dG9uID0gY3NzYFxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogJHtwcm9wcyA9PiAocHJvcHMuY2hlY2tlZCA/IHByb3BzLnRoZW1lLnN3aXRjaFdpZHRoIC8gMiA6IC0xKSAtIHByb3BzLnRoZW1lLnN3aXRjaExhYmVsTWFyZ2lufXB4O1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hCdG5IZWlnaHR9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hCdG5XaWR0aH07XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMuY2hlY2tlZCA/XG4gIHByb3BzLnRoZW1lLnN3aXRjaEJ0bkJnZEFjdGl2ZSA6IHByb3BzLnRoZW1lLnN3aXRjaEJ0bkJnZH07XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoQnRuQm94U2hhZG93fTtcbmA7XG5cbmNvbnN0IGlucHV0U3dpdGNoID0gY3NzYFxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN3aXRjaEhlaWdodCAvIDJ9cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoV2lkdGh9cHg7XG5cbiAgOmJlZm9yZSB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hUcmFja307XG4gIH1cblxuICA6YWZ0ZXIge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoQnV0dG9ufTtcbiAgfVxuYDtcblxuLy8gVGhpcyBpcyBhIGxpZ2h0IHZlcnNpb24gY2hlY2tib3hcbmNvbnN0IGNoZWNrYm94Qm94ID0gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNoZWNrYm94V2lkdGh9cHg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jaGVja2JveEhlaWdodH1weDtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5jaGVja2VkID8gcHJvcHMudGhlbWUuY2hlY2tib3hCb3hCZ2RDaGVja2VkIDogcHJvcHMudGhlbWUuY2hlY2tib3hCb3hCZ2R9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLmNoZWNrZWQgPyBwcm9wcy50aGVtZS5jaGVja2JveEJveEJnZENoZWNrZWQgOiBwcm9wcy50aGVtZS5jaGVja2JveEJvcmRlckNvbG9yfTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb250ZW50OiAnJztcbmA7XG5cbmNvbnN0IGNoZWNrYm94Q2hlY2sgPSBjc3NgXG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHdoaXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogM3B4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLmNoZWNrZWQgPyAxIDogMH07XG4gIGNvbnRlbnQ6IFwiXCI7XG5gO1xuXG5jb25zdCBpbnB1dENoZWNrYm94ID0gY3NzYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBtYXJnaW4tbGVmdDogLSR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoTGFiZWxNYXJnaW59cHg7XG5cbiAgOmJlZm9yZSB7XG4gICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2hlY2tib3hCb3h9O1xuICB9XG5cbiAgOmFmdGVyIHtcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNoZWNrYm94Q2hlY2t9O1xuICB9XG5gO1xuXG5jb25zdCBzZWNvbmRhcnlTd2l0Y2ggPSBjc3NgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRTd2l0Y2h9XG4gIDpiZWZvcmUge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3dpdGNoVHJhY2t9IGJhY2tncm91bmQ6ICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMuY2hlY2tlZFxuICAgICAgICAgID8gcHJvcHMudGhlbWUuc3dpdGNoVHJhY2tCZ2RBY3RpdmVcbiAgICAgICAgICA6IHByb3BzLnRoZW1lLnNlY29uZGFyeVN3aXRjaFRyYWNrQmdkfTtcbiAgfVxuXG4gIDphZnRlciB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hCdXR0b259XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy5jaGVja2VkXG4gICAgICAgICAgPyBwcm9wcy50aGVtZS5zd2l0Y2hCdG5CZ2RBY3RpdmVcbiAgICAgICAgICA6IHByb3BzLnRoZW1lLnNlY29uZGFyeVN3aXRjaEJ0bkJnZH07XG4gIH1cbmA7XG5cbmNvbnN0IGRyb3Bkb3duU2Nyb2xsQmFyID0gY3NzYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgfTtcblxuICA6dmVydGljYWw6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufWA7XG5cbmNvbnN0IGRyb3Bkb3duTGlzdEFuY2hvciA9IGNzc2BcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3J9O1xuICBwYWRkaW5nLWxlZnQ6IDNweDtcbmA7XG5cbmNvbnN0IGRyb3Bkb3duTGlzdEl0ZW0gPSBjc3NgXG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAmLmhvdmVyLFxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RIaWdobGlnaHRCZ307XG5cbiAgICAubGlzdF9faXRlbV9fYW5jaG9yIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGRyb3Bkb3duTGlzdEhlYWRlciA9IGNzc2BcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA1cHggOXB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbmA7XG5cbmNvbnN0IGRyb3Bkb3duTGlzdFNlY3Rpb24gPSBjc3NgXG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbmA7XG5cbmNvbnN0IGRyb3Bkb3duTGlzdCA9IGNzc2BcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWF4LWhlaWdodDogMjgwcHg7XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuXG4gIC5saXN0X19zZWN0aW9uIHtcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdFNlY3Rpb259O1xuICB9XG4gIC5saXN0X19oZWFkZXIge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0SGVhZGVyfTtcbiAgfVxuXG4gIC5saXN0X19pdGVtIHtcbiAgICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEl0ZW19O1xuICB9XG5cbiAgLmxpc3RfX2l0ZW1fX2FuY2hvciB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RBbmNob3J9O1xuICB9XG5cbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93blNjcm9sbEJhcn07XG5gO1xuXG5jb25zdCBzaWRlUGFuZWxTY3JvbGxCYXIgPSBjc3NgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEJnfTtcbiAgfVxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQmd9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEJnfTtcblxuICAgIDpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfTtcbn1gO1xuXG5jb25zdCBwYW5lbERyb3Bkb3duU2Nyb2xsQmFyID0gY3NzYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gICAgOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9O1xuYDtcblxuY29uc3Qgc2Nyb2xsQmFyID0gY3NzYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfVxuXG4gICAgOnZlcnRpY2FsOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIDpob3Jpem9udGFsOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufWA7XG5cbmV4cG9ydCBjb25zdCBtb2RhbFNjcm9sbEJhciA9IGNzc2BcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3Jpem9udGFsIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3JMVH07XG4gICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjOTY5ZGE5O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3Jpem9udGFsIHtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgYm9yZGVyOiA0cHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgLi4uRElNRU5TSU9OUyxcbiAgLy8gdGVtcGxhdGVzXG4gIGlucHV0LFxuICBpbnB1dExULFxuICBpbmxpbmVJbnB1dCxcbiAgY2hpY2tsZXRlZElucHV0LFxuICBzZWNvbmRhcnlJbnB1dCxcbiAgZHJvcGRvd25TY3JvbGxCYXIsXG4gIGRyb3Bkb3duTGlzdCxcbiAgZHJvcGRvd25MaXN0SXRlbSxcbiAgZHJvcGRvd25MaXN0QW5jaG9yLFxuICBkcm9wZG93bkxpc3RIZWFkZXIsXG4gIGRyb3Bkb3duTGlzdFNlY3Rpb24sXG4gIGRyb3Bkb3duTGlzdFNoYWRvdyxcbiAgbW9kYWxTY3JvbGxCYXIsXG4gIHNjcm9sbEJhcixcbiAgc2lkZVBhbmVsU2Nyb2xsQmFyLFxuICBpbnB1dFN3aXRjaCxcbiAgc2Vjb25kYXJ5U3dpdGNoLFxuICBzd2l0Y2hUcmFjayxcbiAgc3dpdGNoQnV0dG9uLFxuICBpbnB1dENoZWNrYm94LFxuICBjaGVja2JveEJveCxcbiAgY2hlY2tib3hDaGVjayxcblxuICAvLyBUcmFuc2l0aW9uc1xuICB0cmFuc2l0aW9uLFxuICB0cmFuc2l0aW9uRmFzdCxcbiAgdHJhbnNpdGlvblNsb3csXG5cbiAgLy8gc3R5bGVzXG4gIGFjdGl2ZUNvbG9yLFxuICBhY3RpdmVDb2xvckhvdmVyLFxuICBib3JkZXJSYWRpdXMsXG4gIGJveFNoYWRvdyxcbiAgZXJyb3JDb2xvcixcbiAgZHJvcGRvd25MaXN0SGlnaGxpZ2h0QmcsXG4gIGRyb3Bkb3duTGlzdEJnZCxcbiAgZHJvcGRvd25MaXN0Qm9yZGVyVG9wLFxuXG4gIGxhYmVsQ29sb3IsXG4gIGxhYmVsQ29sb3JMVCxcbiAgbGFiZWxIb3ZlckNvbG9yLFxuICBtYXBQYW5lbEJhY2tncm91bmRDb2xvcixcbiAgbWFwUGFuZWxIZWFkZXJCYWNrZ3JvdW5kQ29sb3IsXG5cbiAgLy8gU2VsZWN0XG4gIHNlbGVjdEFjdGl2ZUJvcmRlckNvbG9yLFxuICBzZWxlY3RCYWNrZ3JvdW5kLFxuICBzZWxlY3RCYWNrZ3JvdW5kTFQsXG4gIHNlbGVjdEJhY2tncm91bmRIb3ZlcixcbiAgc2VsZWN0QmFja2dyb3VuZEhvdmVyTFQsXG4gIHNlbGVjdEJvcmRlcixcbiAgc2VsZWN0Qm9yZGVyQ29sb3IsXG4gIHNlbGVjdEJvcmRlclJhZGl1cyxcbiAgc2VsZWN0Qm9yZGVyQ29sb3JMVCxcbiAgc2VsZWN0Q29sb3IsXG4gIHNlbGVjdENvbG9yUGxhY2VIb2xkZXIsXG4gIHNlbGVjdEZvbnRTaXplLFxuICBzZWxlY3RGb250V2VpZ2h0LFxuICBzZWxlY3RDb2xvckxULFxuICBzZWxlY3RGb250V2VpZ2h0Qm9sZCxcblxuICAvLyBJbnB1dFxuICBpbnB1dEJnZCxcbiAgaW5wdXRCZ2RIb3ZlcixcbiAgaW5wdXRCZ2RBY3RpdmUsXG4gIGlucHV0Qm94SGVpZ2h0LFxuICBpbnB1dEJvcmRlckNvbG9yLFxuICBpbnB1dEJvcmRlckFjdGl2ZUNvbG9yLFxuICBpbnB1dEJvcmRlckhvdmVyQ29sb3IsXG4gIGlucHV0Qm9yZGVyUmFkaXVzLFxuICBpbnB1dENvbG9yLFxuICBpbnB1dFBhZGRpbmcsXG4gIGlucHV0Rm9udFNpemUsXG4gIGlucHV0Rm9udFdlaWdodCxcbiAgaW5wdXRQbGFjZWhvbGRlckNvbG9yLFxuICBpbnB1dFBsYWNlaG9sZGVyRm9udFdlaWdodCxcblxuICBzZWNvbmRhcnlJbnB1dEJnZCxcbiAgc2Vjb25kYXJ5SW5wdXRCZ2RIb3ZlcixcbiAgc2Vjb25kYXJ5SW5wdXRCZ2RBY3RpdmUsXG4gIHNlY29uZGFyeUlucHV0SGVpZ2h0LFxuICBzZWNvbmRhcnlJbnB1dENvbG9yLFxuICBzZWNvbmRhcnlJbnB1dEJvcmRlckNvbG9yLFxuICBzZWNvbmRhcnlJbnB1dEJvcmRlckFjdGl2ZUNvbG9yLFxuXG4gIC8vIFN3aXRjaFxuICBzd2l0Y2hXaWR0aCxcbiAgc3dpdGNoSGVpZ2h0LFxuICBzd2l0Y2hUcmFja0JnZCxcbiAgc3dpdGNoVHJhY2tCZ2RBY3RpdmUsXG4gIHN3aXRjaFRyYWNrQm9yZGVyUmFkaXVzLFxuICBzd2l0Y2hCdG5CZ2QsXG4gIHN3aXRjaEJ0bkJnZEFjdGl2ZSxcbiAgc3dpdGNoQnRuQm94U2hhZG93LFxuICBzd2l0Y2hCdG5Cb3JkZXJSYWRpdXMsXG4gIHN3aXRjaEJ0bldpZHRoLFxuICBzd2l0Y2hCdG5IZWlnaHQsXG4gIHN3aXRjaExhYmVsTWFyZ2luLFxuXG4gIHNlY29uZGFyeVN3aXRjaFRyYWNrQmdkLFxuICBzZWNvbmRhcnlTd2l0Y2hCdG5CZ2QsXG5cbiAgLy8gQ2hlY2tib3hcbiAgY2hlY2tib3hXaWR0aCxcbiAgY2hlY2tib3hIZWlnaHQsXG4gIGNoZWNrYm94TWFyZ2luLFxuICBjaGVja2JveEJvcmRlckNvbG9yLFxuICBjaGVja2JveEJvcmRlclJhZGl1cyxcbiAgY2hlY2tib3hCb3JkZXJDb2xvckxULFxuICBjaGVja2JveEJveEJnZCxcbiAgY2hlY2tib3hCb3hCZ2RDaGVja2VkLFxuXG4gIC8vIEJ1dHRvblxuICBwcmltYXJ5QnRuQmdkLFxuICBwcmltYXJ5QnRuQWN0QmdkLFxuICBwcmltYXJ5QnRuQ29sb3IsXG4gIHByaW1hcnlCdG5BY3RDb2xvcixcbiAgcHJpbWFyeUJ0bkJnZEhvdmVyLFxuICBwcmltYXJ5QnRuUmFkaXVzLFxuICBzZWNvbmRhcnlCdG5CZ2QsXG4gIHNlY29uZGFyeUJ0bkFjdEJnZCxcbiAgc2Vjb25kYXJ5QnRuQmdkSG92ZXIsXG4gIHNlY29uZGFyeUJ0bkNvbG9yLFxuICBzZWNvbmRhcnlCdG5BY3RDb2xvcixcblxuICBuZWdhdGl2ZUJ0bkJnZCxcbiAgbmVnYXRpdmVCdG5BY3RCZ2QsXG4gIG5lZ2F0aXZlQnRuQmdkSG92ZXIsXG4gIG5lZ2F0aXZlQnRuQ29sb3IsXG4gIG5lZ2F0aXZlQnRuQWN0Q29sb3IsXG5cbiAgbGlua0J0bkJnZCxcbiAgbGlua0J0bkFjdEJnZCxcbiAgbGlua0J0bkNvbG9yLFxuICBsaW5rQnRuQWN0Q29sb3IsXG4gIGxpbmtCdG5BY3RCZ2RIb3ZlcixcblxuICAvLyBNb2RhbFxuICBtb2RhbFRpdGxlQ29sb3IsXG4gIG1vZGFsVGl0bGVGb250U2l6ZSxcbiAgbW9kYWxGb290ZXJCZ2QsXG4gIG1vZGFsSW1hZ2VQbGFjZUhvbGRlcixcbiAgbW9kYWxQYWRkaW5nLFxuXG4gIG1vZGFsRGlhbG9nQmdkLFxuICBtb2RhbERpYWxvZ0NvbG9yLFxuXG4gIC8vIFNpZGUgUGFuZWxcbiAgc2lkZVBhbmVsQmcsXG5cbiAgc2lkZUJhckNsb3NlQnRuQmdkLFxuICBzaWRlQmFyQ2xvc2VCdG5Db2xvcixcbiAgc2lkZUJhckNsb3NlQnRuQmdkSG92ZXIsXG4gIHNpZGVQYW5lbEhlYWRlckJnLFxuXG4gIC8vIFNpZGUgUGFuZWwgUGFuZWxcbiAgcGFuZWxBY3RpdmVCZyxcbiAgcGFuZWxCYWNrZ3JvdW5kLFxuICBwYW5lbEJhY2tncm91bmRIb3ZlcixcbiAgcGFuZWxCYWNrZ3JvdW5kTFQsXG4gIHBhbmVsQm94U2hhZG93LFxuICBwYW5lbEJvcmRlclJhZGl1cyxcbiAgcGFuZWxCb3JkZXIsXG4gIHBhbmVsQm9yZGVyQ29sb3IsXG4gIHBhbmVsQm9yZGVyTFQsXG4gIHBhbmVsSGVhZGVySWNvbixcbiAgcGFuZWxIZWFkZXJJY29uQWN0aXZlLFxuICBwYW5lbEhlYWRlckhlaWdodCxcbiAgcGFuZWxEcm9wZG93blNjcm9sbEJhcixcblxuICAvLyBUZXh0XG4gIHRleHRDb2xvcixcbiAgdGV4dENvbG9yTFQsXG4gIHRleHRDb2xvckhsLFxuICB0aXRsZVRleHRDb2xvcixcbiAgc3VidGV4dENvbG9yLFxuICBzdWJ0ZXh0Q29sb3JMVCxcbiAgc3VidGV4dENvbG9yQWN0aXZlLFxuICB0ZXh0VHJ1bmNhdGUsXG4gIHRpdGxlQ29sb3JMVCxcbiAgdG9vbHRpcEJnLFxuICB0b29sdGlwQ29sb3IsXG5cbiAgLy8gU2xpZGVyXG4gIHNsaWRlckJhckNvbG9yLFxuICBzbGlkZXJCYXJCZ2QsXG4gIHNsaWRlckJhckhvdmVyQ29sb3IsXG4gIHNsaWRlckJhclJhZGl1cyxcbiAgc2xpZGVyQmFySGVpZ2h0LFxuICBzbGlkZXJIYW5kbGVIZWlnaHQsXG4gIHNsaWRlckhhbmRsZVdpZHRoLFxuICBzbGlkZXJIYW5kbGVDb2xvcixcbiAgc2xpZGVySGFuZGxlSG92ZXJDb2xvcixcbiAgc2xpZGVySGFuZGxlU2hhZG93LFxuICBzbGlkZXJJbnB1dEhlaWdodCxcbiAgc2xpZGVySW5wdXRXaWR0aCxcblxuICAvLyBQbG90XG4gIHJhbmdlQnJ1c2hCZ2QsXG5cbiAgLy8gTm90aWZpY2F0aW9uc1xuICBub3RpZmljYXRpb25Db2xvcnMsXG4gIG5vdGlmaWNhdGlvblBhbmVsV2lkdGgsXG4gIG5vdGlmaWNhdGlvblBhbmVsSXRlbVdpZHRoLFxuICBub3RpZmljYXRpb25QYW5lbEl0ZW1IZWlnaHRcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZUxUID0ge1xuICAuLi50aGVtZSxcblxuICAvLyB0ZW1wbGF0ZVxuICBpbnB1dDogaW5wdXRMVCxcbiAgdGV4dENvbG9yOiB0ZXh0Q29sb3JMVCxcbiAgc2lkZVBhbmVsQmc6ICcjZmZmZmZmJyxcbiAgdGl0bGVUZXh0Q29sb3I6ICcjMDAwMDAwJyxcbiAgc2lkZVBhbmVsSGVhZGVyQmc6ICcjZjdmN0Y3JyxcbiAgc3VidGV4dENvbG9yQWN0aXZlOiAnIzI0NzNiZCcsXG4gIHRvb2x0aXBCZzogJyMxODY5YjUnLFxuICB0b29sdGlwQ29sb3I6ICcjZmZmZmZmJyxcbiAgZHJvcGRvd25MaXN0QmdkOiAnI2ZmZmZmZicsXG4gIHRleHRDb2xvckhsOiAnIzI0NzNiZCcsXG4gIGlucHV0QmdkOiAnI2Y3ZjdmNycsXG4gIGlucHV0QmdkSG92ZXI6ICcjZmZmZmZmJyxcbiAgaW5wdXRCZ2RBY3RpdmU6ICcjZmZmZmZmJyxcbiAgZHJvcGRvd25MaXN0SGlnaGxpZ2h0Qmc6ICcjZjBmMGYwJyxcbiAgcGFuZWxCYWNrZ3JvdW5kOiAnI2Y3ZjdGNycsXG4gIHBhbmVsQmFja2dyb3VuZEhvdmVyOiAnI2Y3ZjdGNycsXG4gIHBhbmVsQm9yZGVyQ29sb3I6ICcjRDNEOEUwJyxcbiAgc2Vjb25kYXJ5SW5wdXRCZ2Q6ICcjZjdmN0Y3JyxcbiAgc2Vjb25kYXJ5SW5wdXRCZ2RBY3RpdmU6ICcjZjdmN0Y3JyxcbiAgc2Vjb25kYXJ5SW5wdXRCZ2RIb3ZlcjogJyNmZmZmZmYnLFxuICBwYW5lbEFjdGl2ZUJnOiAnI2Y3ZjdGNycsXG4gIG1hcFBhbmVsQmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gIG1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yOiAnI2Y3ZjdGNycsXG4gIHNsaWRlckJhckJnZDogJyNEM0Q4RTAnLFxuICBzZWNvbmRhcnlTd2l0Y2hCdG5CZ2Q6ICcjRDNEOEUwJyxcbiAgc3dpdGNoVHJhY2tCZ2Q6ICcjRDNEOEUwJ1xufTtcbiJdfQ==