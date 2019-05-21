"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledType = exports.StyledFilteredOption = exports.StyledExportSection = exports.StyledMapContainer = exports.StyledModalContent = exports.Table = exports.SelectionButton = exports.DatasetSquare = exports.ButtonGroup = exports.StyledPanelDropdown = exports.StyledPanelHeader = exports.InlineInput = exports.InputLight = exports.Input = exports.Button = exports.Tooltip = exports.SidePanelDivider = exports.SidePanelSection = exports.PanelContent = exports.PanelHeaderContent = exports.PanelHeaderTitle = exports.PanelLabelBold = exports.PanelLabelWrapper = exports.PanelLabel = exports.SBFlexboxItem = exports.SpaceBetweenFlexbox = exports.CenterFlexbox = exports.IconRoundSmall = exports.SelectTextBold = exports.SelectText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var styled = _interopRequireWildcard(require("styled-components"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _mediaBreakpoints = require("../../styles/media-breakpoints");

function _templateObject31() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  height: 100px;\n  margin: 4px;\n  padding: 6px 10px;\n  width: 100px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid ", ";\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  justify-content: center;\n  margin: 4px;\n  padding: 8px 12px;\n  width: 140px;\n\n  :hover {\n    border: 1px solid ", ";\n  }\n\n  .filtered-title {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .filtered-subtitle {\n    color: ", ";\n    font-size: 11px;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  margin: 35px 0;\n  width: 100%;\n\n  .description {\n    width: 185px;\n\n    .title {\n      font-weight: 500;\n      color: ", ";\n      font-size: 12px;\n    }\n    .subtitle {\n      color: ", ";\n      font-size: 11px;\n    }\n  }\n\n  .selection {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    padding-left: 50px;\n\n    select {\n      background-color: white;\n      border-radius: 1px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      margin: 0;\n      box-sizing: border-box;\n      appearance: none;\n      width: 250px;\n      height: 36px;\n\n      background-image:\n        linear-gradient(45deg, transparent 50%, gray 50%),\n        linear-gradient(135deg, gray 50%, transparent 50%),\n        linear-gradient(to right, #ccc, #ccc);\n      background-position:\n        calc(100% - 20px) calc(1em + 2px),\n        calc(100% - 15px) calc(1em + 2px),\n        calc(100% - 2.5em) 4.5em;\n      background-size:\n        5px 5px,\n        5px 5px,\n        1px 1.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image:\n        linear-gradient(45deg, green 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, green 50%),\n        linear-gradient(to right, #ccc, #ccc);\n      background-position:\n        calc(100% - 15px) 1em,\n        calc(100% - 20px) 1em,\n        calc(100% - 2.5em) 4.5em;\n      background-size:\n        5px 5px,\n        5px 5px,\n        1px 1.5em;\n      background-repeat: no-repeat;\n      border-color: green;\n      outline: 0;\n    }\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-map .mapboxgl-missing-css {\n    display: none;\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    padding: 16px ", ";\n    margin: 0 -", ";\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  padding: 24px ", ";\n  margin: 0 -", ";\n  justify-content: space-between;\n  ", ";\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border-spacing: 0;\n\n  thead {\n    tr th {\n      background: ", ";\n      color: ", ";\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n\n  tbody {\n   tr td {\n     border-bottom: ", ";\n     padding: 12px;\n   }\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  margin-right: 6px;\n  padding: 6px 10px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: rgb(", ");\n  margin-right: 12px\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ", ";\n    border-top-left-radius: ", ";\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: ", ";\n  overflow-y: auto;\n  box-shadow: ", ";\n  border-radius: ", ";\n  margin-top: 2px;\n  max-height: 500px;\n  position: relative;\n  z-index: 999;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-left: 3px solid\n    rgb(\n      ", "\n    );\n  padding: 0 10px 0 0;\n  height: ", "px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: ", ";\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: 500;\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ", ";\n  text-align: center;\n  transition: ", ";\n  vertical-align: middle;\n  width: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  svg {\n    margin-right: 8px;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.__react_component_tooltip {\n    font-size: 9.5px;\n    font-weight: 500;\n    padding: 7px 18px;\n\n    &.type-dark {\n      background-color: ", ";\n      color: ", ";\n      &.place-bottom {\n        :after {\n          border-bottom-color: ", ";\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ", ";\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ", ";\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 1px solid ", ";\n  height: 12px;\n  margin-bottom: 12px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding-left: 12px;\n\n  .icon {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: self-start;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-left: 16px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: space-between;\n  margin-left: -16px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ", "; // updated after checking sketch file\n  color: ", ";\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n\n  i {\n    font-size: 13px;\n    margin-right: 6px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SelectText = styled.span(_templateObject(), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.selectFontSize;
});
exports.SelectText = SelectText;
var SelectTextBold = styled(SelectText)(_templateObject2(), function (props) {
  return props.theme.textColor;
});
exports.SelectTextBold = SelectTextBold;
var IconRoundSmall = styled.div(_templateObject3(), function (props) {
  return props.theme.secondaryBtnBgdHover;
}, function (props) {
  return props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.secondaryBtnBgdHover;
});
exports.IconRoundSmall = IconRoundSmall;
var CenterFlexbox = styled.div(_templateObject4());
exports.CenterFlexbox = CenterFlexbox;
var SpaceBetweenFlexbox = styled.div(_templateObject5());
exports.SpaceBetweenFlexbox = SpaceBetweenFlexbox;
var SBFlexboxItem = styled.div(_templateObject6());
exports.SBFlexboxItem = SBFlexboxItem;
var PanelLabel = styled.label.attrs({
  className: 'side-panel-panel__label'
})(_templateObject7(), function (props) {
  return props.theme.labelColor;
});
exports.PanelLabel = PanelLabel;
var PanelLabelWrapper = styled.div.attrs({
  className: 'side-panel-panel__label-wrapper'
})(_templateObject8());
exports.PanelLabelWrapper = PanelLabelWrapper;
var PanelLabelBold = styled(PanelLabel)(_templateObject9());
exports.PanelLabelBold = PanelLabelBold;
var PanelHeaderTitle = styled.span.attrs({
  className: 'side-panel-panel__header__title'
})(_templateObject10(), function (props) {
  return props.theme.textColor;
});
exports.PanelHeaderTitle = PanelHeaderTitle;
var PanelHeaderContent = styled.div(_templateObject11(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
});
exports.PanelHeaderContent = PanelHeaderContent;
var PanelContent = styled.div.attrs({
  className: 'side-panel-panel__content'
})(_templateObject12(), function (props) {
  return props.theme.panelBackground;
});
exports.PanelContent = PanelContent;
var SidePanelSection = styled.div.attrs({
  className: 'side-panel-section'
})(_templateObject13(), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});
exports.SidePanelSection = SidePanelSection;
var SidePanelDivider = styled.div.attrs({
  className: 'side-panel-divider'
})(_templateObject14(), function (props) {
  return props.theme.panelBorderColor;
});
exports.SidePanelDivider = SidePanelDivider;
var Tooltip = styled(_reactTooltip["default"])(_templateObject15(), function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
});
exports.Tooltip = Tooltip;
var Button = styled.div.attrs({
  className: 'button'
})(_templateObject16(), function (props) {
  return props.negative ? props.theme.negativeBtnBgd : props.secondary ? props.theme.secondaryBtnBgd : props.link ? props.theme.linkBtnBgd : props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.negative ? props.theme.negativeBtnColor : props.secondary ? props.theme.secondaryBtnColor : props.link ? props.theme.linkBtnColor : props.theme.primaryBtnColor;
}, function (props) {
  return props.large ? '14px' : props.small ? '10px' : '11px';
}, function (props) {
  return props.large ? '14px 32px' : props.small ? '6px 9px' : '9px 12px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.negative ? props.theme.negativeBtnBgdHover : props.secondary ? props.theme.secondaryBtnBgdHover : props.link ? props.theme.linkBtnActBgdHover : props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.negative ? props.theme.negativeBtnActColor : props.secondary ? props.theme.secondaryBtnActColor : props.link ? props.theme.linkBtnActColor : props.theme.primaryBtnActColor;
});
exports.Button = Button;
var Input = styled.input(_templateObject17(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});
exports.Input = Input;
var InputLight = styled.input(_templateObject18(), function (props) {
  return props.theme.inputLT;
});
exports.InputLight = InputLight;
var InlineInput = styled(Input)(_templateObject19(), function (props) {
  return props.theme.inlineInput;
});
exports.InlineInput = InlineInput;
var StyledPanelHeader = styled.div(_templateObject20(), function (props) {
  return props.active ? props.theme.panelBackgroundHover : props.theme.panelBackground;
}, function (props) {
  return props.labelRCGColorValues ? props.labelRCGColorValues.join(',') : 'transparent';
}, function (props) {
  return props.theme.panelHeaderHeight;
}, function (props) {
  return props.theme.transition;
});
exports.StyledPanelHeader = StyledPanelHeader;
var StyledPanelDropdown = styled.div(_templateObject21(), function (props) {
  return props.theme.panelDropdownScrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return props.theme.panelBorderRadius;
});
exports.StyledPanelDropdown = StyledPanelDropdown;
var ButtonGroup = styled.div(_templateObject22(), function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
});
exports.ButtonGroup = ButtonGroup;
var DatasetSquare = styled.div(_templateObject23(), function (props) {
  return props.color.join(',');
});
exports.DatasetSquare = DatasetSquare;
var SelectionButton = styled.div(_templateObject24(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});
exports.SelectionButton = SelectionButton;
var Table = styled.table(_templateObject25(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.panelBorderLT;
});
exports.Table = Table;
var StyledModalContent = styled.div(_templateObject26(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.modalLateralPadding;
}, function (props) {
  return props.theme.modalLateralPadding;
}, _mediaBreakpoints.media.portable(_templateObject27(), function (props) {
  return props.theme.modalPortableLateralPadding;
}, function (props) {
  return props.theme.modalPortableLateralPadding;
}));
/**
 * Newer versions of mapbox.gl display an error message banner on top of the map by default
 * which will cause the map to display points in the wrong locations
 * This workaround will hide the error banner.
 */

exports.StyledModalContent = StyledModalContent;
var StyledMapContainer = styled.div(_templateObject28());
exports.StyledMapContainer = StyledMapContainer;
var StyledExportSection = styled.div(_templateObject29(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColor;
});
exports.StyledExportSection = StyledExportSection;
var StyledFilteredOption = styled.div(_templateObject30(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColor;
});
exports.StyledFilteredOption = StyledFilteredOption;
var StyledType = styled.div(_templateObject31(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});
exports.StyledType = StyledType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJTZWxlY3RUZXh0Iiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJTZWxlY3RUZXh0Qm9sZCIsInRleHRDb2xvciIsIkljb25Sb3VuZFNtYWxsIiwiZGl2Iiwic2Vjb25kYXJ5QnRuQmdkSG92ZXIiLCJzZWNvbmRhcnlCdG5Db2xvciIsIkNlbnRlckZsZXhib3giLCJTcGFjZUJldHdlZW5GbGV4Ym94IiwiU0JGbGV4Ym94SXRlbSIsIlBhbmVsTGFiZWwiLCJsYWJlbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiUGFuZWxMYWJlbFdyYXBwZXIiLCJQYW5lbExhYmVsQm9sZCIsIlBhbmVsSGVhZGVyVGl0bGUiLCJQYW5lbEhlYWRlckNvbnRlbnQiLCJQYW5lbENvbnRlbnQiLCJwYW5lbEJhY2tncm91bmQiLCJTaWRlUGFuZWxTZWN0aW9uIiwiZGlzYWJsZWQiLCJTaWRlUGFuZWxEaXZpZGVyIiwicGFuZWxCb3JkZXJDb2xvciIsIlRvb2x0aXAiLCJSZWFjdFRvb2x0aXAiLCJ0b29sdGlwQmciLCJ0b29sdGlwQ29sb3IiLCJCdXR0b24iLCJuZWdhdGl2ZSIsIm5lZ2F0aXZlQnRuQmdkIiwic2Vjb25kYXJ5Iiwic2Vjb25kYXJ5QnRuQmdkIiwibGluayIsImxpbmtCdG5CZ2QiLCJwcmltYXJ5QnRuQmdkIiwicHJpbWFyeUJ0blJhZGl1cyIsIm5lZ2F0aXZlQnRuQ29sb3IiLCJsaW5rQnRuQ29sb3IiLCJwcmltYXJ5QnRuQ29sb3IiLCJsYXJnZSIsInNtYWxsIiwidHJhbnNpdGlvbiIsIndpZHRoIiwibmVnYXRpdmVCdG5CZ2RIb3ZlciIsImxpbmtCdG5BY3RCZ2RIb3ZlciIsInByaW1hcnlCdG5CZ2RIb3ZlciIsIm5lZ2F0aXZlQnRuQWN0Q29sb3IiLCJzZWNvbmRhcnlCdG5BY3RDb2xvciIsImxpbmtCdG5BY3RDb2xvciIsInByaW1hcnlCdG5BY3RDb2xvciIsIklucHV0IiwiaW5wdXQiLCJzZWNvbmRhcnlJbnB1dCIsIklucHV0TGlnaHQiLCJpbnB1dExUIiwiSW5saW5lSW5wdXQiLCJpbmxpbmVJbnB1dCIsIlN0eWxlZFBhbmVsSGVhZGVyIiwiYWN0aXZlIiwicGFuZWxCYWNrZ3JvdW5kSG92ZXIiLCJsYWJlbFJDR0NvbG9yVmFsdWVzIiwiam9pbiIsInBhbmVsSGVhZGVySGVpZ2h0IiwiU3R5bGVkUGFuZWxEcm9wZG93biIsInBhbmVsRHJvcGRvd25TY3JvbGxCYXIiLCJwYW5lbEJveFNoYWRvdyIsInBhbmVsQm9yZGVyUmFkaXVzIiwiQnV0dG9uR3JvdXAiLCJEYXRhc2V0U3F1YXJlIiwiY29sb3IiLCJTZWxlY3Rpb25CdXR0b24iLCJzZWxlY3RlZCIsInNlbGVjdEJvcmRlckNvbG9yTFQiLCJhdmFpbGFibGUiLCJUYWJsZSIsInRhYmxlIiwicGFuZWxCYWNrZ3JvdW5kTFQiLCJ0aXRsZUNvbG9yTFQiLCJwYW5lbEJvcmRlckxUIiwiU3R5bGVkTW9kYWxDb250ZW50IiwidGV4dENvbG9yTFQiLCJtb2RhbExhdGVyYWxQYWRkaW5nIiwibWVkaWEiLCJwb3J0YWJsZSIsIm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZyIsIlN0eWxlZE1hcENvbnRhaW5lciIsIlN0eWxlZEV4cG9ydFNlY3Rpb24iLCJTdHlsZWRGaWx0ZXJlZE9wdGlvbiIsIlN0eWxlZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBLENBWkssRUFhQyxVQUFBdEMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQzZFLFNBQU4sSUFBbUI3RSxLQUFLLENBQUNDLEtBQU4sQ0FBWXFDLGFBQW5DO0FBQUEsQ0FiTixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOSBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCAqIGFzIHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnc3R5bGVzL21lZGlhLWJyZWFrcG9pbnRzJztcblxuZXhwb3J0IGNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RGb250U2l6ZX07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0VGV4dEJvbGQgPSBzdHlsZWQoU2VsZWN0VGV4dClgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvblJvdW5kU21hbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RIb3Zlcn07IC8vIHVwZGF0ZWQgYWZ0ZXIgY2hlY2tpbmcgc2tldGNoIGZpbGVcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3J9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkJnZEhvdmVyfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENlbnRlckZsZXhib3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNwYWNlQmV0d2VlbkZsZXhib3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuYFxuZXhwb3J0IGNvbnN0IFNCRmxleGJveEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuYFxuXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbCA9IHN0eWxlZC5sYWJlbC5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtcGFuZWxfX2xhYmVsJ1xufSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbExhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19sYWJlbC13cmFwcGVyJ1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzZWxmLXN0YXJ0O1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsTGFiZWxCb2xkID0gc3R5bGVkKFBhbmVsTGFiZWwpYFxuICBmb250LXdlaWdodDogNTAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyVGl0bGUgPSBzdHlsZWQuc3Bhbi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtcGFuZWxfX2hlYWRlcl9fdGl0bGUnXG59KWBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC40M3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG5cbiAgLmljb24ge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fY29udGVudCdcbn0pYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIHBhZGRpbmc6IDEycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsU2VjdGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXNlY3Rpb24nXG59KWBcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjQgOiAxKX07XG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XG5gO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsRGl2aWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLWRpdmlkZXInXG59KWBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUb29sdGlwID0gc3R5bGVkKFJlYWN0VG9vbHRpcClgXG4gICYuX19yZWFjdF9jb21wb25lbnRfdG9vbHRpcCB7XG4gICAgZm9udC1zaXplOiA5LjVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDdweCAxOHB4O1xuXG4gICAgJi50eXBlLWRhcmsge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcENvbG9yfTtcbiAgICAgICYucGxhY2UtYm90dG9tIHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS10b3Age1xuICAgICAgICA6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnBsYWNlLXJpZ2h0IHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLnBsYWNlLWxlZnQge1xuICAgICAgICA6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnYnV0dG9uJ1xufSlgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5uZWdhdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkJnZFxuICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcbiAgICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RcbiAgICAgICAgOiBwcm9wcy5saW5rID8gcHJvcHMudGhlbWUubGlua0J0bkJnZCA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQ29sb3JcbiAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3JcbiAgICAgICAgOiBwcm9wcy5saW5rID8gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkNvbG9yfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgcHJvcHMubGFyZ2UgP1xuICAgICAgJzE0cHgnXG4gICAgICA6IHByb3BzLnNtYWxsXG4gICAgICAgID8gJzEwcHgnXG4gICAgICAgIDogJzExcHgnfTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5sYXJnZSA/XG4gICAgICAnMTRweCAzMnB4J1xuICAgICAgOiBwcm9wcy5zbWFsbFxuICAgICAgICA/ICc2cHggOXB4J1xuICAgICAgICA6ICc5cHggMTJweCd9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRoIHx8ICdhdXRvJ307XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC40IDogMSl9O1xuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xuXG4gIDpob3ZlcixcbiAgOmZvY3VzLFxuICA6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMubmVnYXRpdmVcbiAgICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkJnZEhvdmVyXG4gICAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RIb3ZlclxuICAgICAgICAgIDogcHJvcHMubGlua1xuICAgICAgICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQWN0QmdkSG92ZXJcbiAgICAgICAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZEhvdmVyfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMubmVnYXRpdmVcbiAgICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkFjdENvbG9yXG4gICAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5BY3RDb2xvclxuICAgICAgICAgIDogcHJvcHMubGlua1xuICAgICAgICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQWN0Q29sb3JcbiAgICAgICAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkFjdENvbG9yfTtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLnNlY29uZGFyeSA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0IDogcHJvcHMudGhlbWUuaW5wdXR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IElucHV0TGlnaHQgPSBzdHlsZWQuaW5wdXRgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRMVH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbmxpbmVJbnB1dCA9IHN0eWxlZChJbnB1dClgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5saW5lSW5wdXR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3ZlclxuICAgICAgOiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkXG4gICAgcmdiKFxuICAgICAgJHtwcm9wcyA9PlxuICAgICAgICBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzLmpvaW4oJywnKVxuICAgICAgICAgIDogJ3RyYW5zcGFyZW50J31cbiAgICApO1xuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxIZWFkZXJIZWlnaHR9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQYW5lbERyb3Bkb3duID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbERyb3Bkb3duU2Nyb2xsQmFyfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3hTaGFkb3d9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyUmFkaXVzfTtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICAuYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gIH1cbiAgLmJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5idXR0b246bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBEYXRhc2V0U3F1YXJlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKCR7cHJvcHMgPT4gcHJvcHMuY29sb3Iuam9pbignLCcpfSk7XG4gIG1hcmdpbi1yaWdodDogMTJweFxuYDtcblxuZXhwb3J0IGNvbnN0IFNlbGVjdGlvbkJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2QgOiBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvckxUfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGFibGUgPSBzdHlsZWQudGFibGVgXG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItc3BhY2luZzogMDtcblxuICB0aGVhZCB7XG4gICAgdHIgdGgge1xuICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRMVH07XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50aXRsZUNvbG9yTFR9O1xuICAgICAgcGFkZGluZzogMThweCAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgdGJvZHkge1xuICAgdHIgdGQge1xuICAgICBib3JkZXItYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyTFR9O1xuICAgICBwYWRkaW5nOiAxMnB4O1xuICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRMVH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAyNHB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxMYXRlcmFsUGFkZGluZ307XG4gIG1hcmdpbjogMCAtJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbExhdGVyYWxQYWRkaW5nfTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTZweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZ307XG4gICAgbWFyZ2luOiAwIC0ke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZ307XG4gIGB9O1xuYDtcblxuLyoqXG4gKiBOZXdlciB2ZXJzaW9ucyBvZiBtYXBib3guZ2wgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGJhbm5lciBvbiB0b3Agb2YgdGhlIG1hcCBieSBkZWZhdWx0XG4gKiB3aGljaCB3aWxsIGNhdXNlIHRoZSBtYXAgdG8gZGlzcGxheSBwb2ludHMgaW4gdGhlIHdyb25nIGxvY2F0aW9uc1xuICogVGhpcyB3b3JrYXJvdW5kIHdpbGwgaGlkZSB0aGUgZXJyb3IgYmFubmVyLlxuICovXG5leHBvcnQgY29uc3QgU3R5bGVkTWFwQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgLm1hcGJveGdsLW1hcCAubWFwYm94Z2wtbWlzc2luZy1jc3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFeHBvcnRTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAzNXB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDE4NXB4O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgfVxuXG4gIC5zZWxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuXG4gICAgc2VsZWN0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDMuNWVtIDAuNWVtIDFlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246XG4gICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSxcbiAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxuICAgICAgICBjYWxjKDEwMCUgLSAyLjVlbSkgNC41ZW07XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6XG4gICAgICAgIDVweCA1cHgsXG4gICAgICAgIDVweCA1cHgsXG4gICAgICAgIDFweCAxLjVlbTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgc2VsZWN0OmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgZ3JlZW4gNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyZWVuIDUwJSksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxuICAgICAgICBjYWxjKDEwMCUgLSAxNXB4KSAxZW0sXG4gICAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSxcbiAgICAgICAgY2FsYygxMDAlIC0gMi41ZW0pIDQuNWVtO1xuICAgICAgYmFja2dyb3VuZC1zaXplOlxuICAgICAgICA1cHggNXB4LFxuICAgICAgICA1cHggNXB4LFxuICAgICAgICAxcHggMS41ZW07XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsdGVyZWRPcHRpb24gPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA2MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB3aWR0aDogMTQwcHg7XG5cbiAgOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICB9XG5cbiAgLmZpbHRlcmVkLXRpdGxlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmZpbHRlcmVkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZFR5cGUgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuYXZhaWxhYmxlICYmIHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICB9XG5gO1xuIl19