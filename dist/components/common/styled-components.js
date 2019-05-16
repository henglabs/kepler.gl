"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledType = exports.StyledFilteredOption = exports.StyledExportSection = exports.StyledMapContainer = exports.StyledModalContent = exports.Table = exports.SelectionButton = exports.DatasetSquare = exports.ButtonGroup = exports.StyledPanelDropdown = exports.StyledPanelHeader = exports.InlineInput = exports.InputLight = exports.Input = exports.Button = exports.Tooltip = exports.SidePanelDivider = exports.SidePanelSection = exports.PanelContent = exports.PanelHeaderContent = exports.PanelHeaderTitle = exports.PanelLabelBold = exports.PanelLabelWrapper = exports.PanelLabel = exports.CenterFlexbox = exports.IconRoundSmall = exports.SelectTextBold = exports.SelectText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var styled = _interopRequireWildcard(require("styled-components"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

function _templateObject28() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  height: 100px;\n  margin: 4px;\n  padding: 6px 10px;\n  width: 100px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  border: 1px solid ", ";\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  height: 60px;\n  justify-content: center;\n  margin: 4px;\n  padding: 8px 12px;\n  width: 140px;\n\n  :hover {\n    border: 1px solid ", ";\n  }\n\n  .filtered-title {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .filtered-subtitle {\n    color: ", ";\n    font-size: 11px;\n  }\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  margin: 35px 0;\n  width: 100%;\n\n  .description {\n    width: 185px;\n\n    .title {\n      font-weight: 500;\n      color: ", ";\n      font-size: 12px;\n    }\n    .subtitle {\n      color: ", ";\n      font-size: 11px;\n    }\n  }\n\n  .selection {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    padding-left: 50px;\n\n    select {\n      background-color: white;\n      border-radius: 1px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      margin: 0;\n      box-sizing: border-box;\n      appearance: none;\n      width: 250px;\n      height: 36px;\n\n      background-image:\n        linear-gradient(45deg, transparent 50%, gray 50%),\n        linear-gradient(135deg, gray 50%, transparent 50%),\n        linear-gradient(to right, #ccc, #ccc);\n      background-position:\n        calc(100% - 20px) calc(1em + 2px),\n        calc(100% - 15px) calc(1em + 2px),\n        calc(100% - 2.5em) 4.5em;\n      background-size:\n        5px 5px,\n        5px 5px,\n        1px 1.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image:\n        linear-gradient(45deg, green 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, green 50%),\n        linear-gradient(to right, #ccc, #ccc);\n      background-position:\n        calc(100% - 15px) 1em,\n        calc(100% - 20px) 1em,\n        calc(100% - 2.5em) 4.5em;\n      background-size:\n        5px 5px,\n        5px 5px,\n        1px 1.5em;\n      background-repeat: no-repeat;\n      border-color: green;\n      outline: 0;\n    }\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-map .mapboxgl-missing-css {\n    display: none;\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  margin: 0 -96px;\n  padding: 30px 96px;\n  justify-content: space-between;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border-spacing: 0;\n\n  thead {\n    tr th {\n      background: ", ";\n      color: ", ";\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n\n  tbody {\n   tr td {\n     border-bottom: ", ";\n     padding: 12px;\n   }\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 2px;\n  border: 1px solid ", ";\n  color: ", ";\n  cursor: pointer;\n  font-weight: 500;\n  margin-right: 6px;\n  padding: 6px 10px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  background-color: rgb(", ");\n  margin-right: 12px\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ", ";\n    border-top-left-radius: ", ";\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: ", ";\n  overflow-y: auto;\n  box-shadow: ", ";\n  border-radius: ", ";\n  margin-top: 2px;\n  max-height: 500px;\n  position: relative;\n  z-index: 999;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-left: 3px solid\n    rgb(\n      ", "\n    );\n  padding: 0 10px 0 0;\n  height: ", "px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  transition: ", ";\n"]);

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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: 500;\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ", ";\n  text-align: center;\n  transition: ", ";\n  vertical-align: middle;\n  width: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  svg {\n    margin-right: 8px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  &.__react_component_tooltip {\n    font-size: 9.5px;\n    font-weight: 500;\n    padding: 7px 18px;\n\n    &.type-dark {\n      background-color: ", ";\n      color: ", ";\n      &.place-bottom {\n        :after {\n          border-bottom-color: ", ";\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ", ";\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ", ";\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ", ";\n        }\n      }\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 1px solid ", ";\n  height: 12px;\n  margin-bottom: 12px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding-left: 12px;\n\n  .icon {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: self-start;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n"]);

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
var PanelLabel = styled.label.attrs({
  className: 'side-panel-panel__label'
})(_templateObject5(), function (props) {
  return props.theme.labelColor;
});
exports.PanelLabel = PanelLabel;
var PanelLabelWrapper = styled.div.attrs({
  className: 'side-panel-panel__label-wrapper'
})(_templateObject6());
exports.PanelLabelWrapper = PanelLabelWrapper;
var PanelLabelBold = styled(PanelLabel)(_templateObject7());
exports.PanelLabelBold = PanelLabelBold;
var PanelHeaderTitle = styled.span.attrs({
  className: 'side-panel-panel__header__title'
})(_templateObject8(), function (props) {
  return props.theme.textColor;
});
exports.PanelHeaderTitle = PanelHeaderTitle;
var PanelHeaderContent = styled.div(_templateObject9(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
});
exports.PanelHeaderContent = PanelHeaderContent;
var PanelContent = styled.div.attrs({
  className: 'side-panel-panel__content'
})(_templateObject10(), function (props) {
  return props.theme.panelBackground;
});
exports.PanelContent = PanelContent;
var SidePanelSection = styled.div.attrs({
  className: 'side-panel-section'
})(_templateObject11(), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});
exports.SidePanelSection = SidePanelSection;
var SidePanelDivider = styled.div.attrs({
  className: 'side-panel-divider'
})(_templateObject12(), function (props) {
  return props.theme.panelBorderColor;
});
exports.SidePanelDivider = SidePanelDivider;
var Tooltip = styled(_reactTooltip["default"])(_templateObject13(), function (props) {
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
})(_templateObject14(), function (props) {
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
var Input = styled.input(_templateObject15(), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});
exports.Input = Input;
var InputLight = styled.input(_templateObject16(), function (props) {
  return props.theme.inputLT;
});
exports.InputLight = InputLight;
var InlineInput = styled(Input)(_templateObject17(), function (props) {
  return props.theme.inlineInput;
});
exports.InlineInput = InlineInput;
var StyledPanelHeader = styled.div(_templateObject18(), function (props) {
  return props.active ? props.theme.panelBackgroundHover : props.theme.panelBackground;
}, function (props) {
  return props.labelRCGColorValues ? props.labelRCGColorValues.join(',') : 'transparent';
}, function (props) {
  return props.theme.panelHeaderHeight;
}, function (props) {
  return props.theme.transition;
});
exports.StyledPanelHeader = StyledPanelHeader;
var StyledPanelDropdown = styled.div(_templateObject19(), function (props) {
  return props.theme.panelDropdownScrollBar;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return props.theme.panelBorderRadius;
});
exports.StyledPanelDropdown = StyledPanelDropdown;
var ButtonGroup = styled.div(_templateObject20(), function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
});
exports.ButtonGroup = ButtonGroup;
var DatasetSquare = styled.div(_templateObject21(), function (props) {
  return props.color.join(',');
});
exports.DatasetSquare = DatasetSquare;
var SelectionButton = styled.div(_templateObject22(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});
exports.SelectionButton = SelectionButton;
var Table = styled.table(_templateObject23(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.panelBorderLT;
});
exports.Table = Table;
var StyledModalContent = styled.div(_templateObject24(), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
});
/**
 * Newer versions of mapbox.gl display an error message banner on top of the map by default
 * which will cause the map to display points in the wrong locations
 * This workaround will hide the error banner.
 */

exports.StyledModalContent = StyledModalContent;
var StyledMapContainer = styled.div(_templateObject25());
exports.StyledMapContainer = StyledMapContainer;
var StyledExportSection = styled.div(_templateObject26(), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColor;
});
exports.StyledExportSection = StyledExportSection;
var StyledFilteredOption = styled.div(_templateObject27(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColor;
});
exports.StyledFilteredOption = StyledFilteredOption;
var StyledType = styled.div(_templateObject28(), function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.selected ? props.theme.primaryBtnBgd : props.theme.selectBorderColorLT;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
}, function (props) {
  return props.available && props.theme.primaryBtnBgd;
});
exports.StyledType = StyledType;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cy5qcyJdLCJuYW1lcyI6WyJTZWxlY3RUZXh0Iiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwic2VsZWN0Rm9udFNpemUiLCJTZWxlY3RUZXh0Qm9sZCIsInRleHRDb2xvciIsIkljb25Sb3VuZFNtYWxsIiwiZGl2Iiwic2Vjb25kYXJ5QnRuQmdkSG92ZXIiLCJzZWNvbmRhcnlCdG5Db2xvciIsIkNlbnRlckZsZXhib3giLCJQYW5lbExhYmVsIiwibGFiZWwiLCJhdHRycyIsImNsYXNzTmFtZSIsIlBhbmVsTGFiZWxXcmFwcGVyIiwiUGFuZWxMYWJlbEJvbGQiLCJQYW5lbEhlYWRlclRpdGxlIiwiUGFuZWxIZWFkZXJDb250ZW50IiwiUGFuZWxDb250ZW50IiwicGFuZWxCYWNrZ3JvdW5kIiwiU2lkZVBhbmVsU2VjdGlvbiIsImRpc2FibGVkIiwiU2lkZVBhbmVsRGl2aWRlciIsInBhbmVsQm9yZGVyQ29sb3IiLCJUb29sdGlwIiwiUmVhY3RUb29sdGlwIiwidG9vbHRpcEJnIiwidG9vbHRpcENvbG9yIiwiQnV0dG9uIiwibmVnYXRpdmUiLCJuZWdhdGl2ZUJ0bkJnZCIsInNlY29uZGFyeSIsInNlY29uZGFyeUJ0bkJnZCIsImxpbmsiLCJsaW5rQnRuQmdkIiwicHJpbWFyeUJ0bkJnZCIsInByaW1hcnlCdG5SYWRpdXMiLCJuZWdhdGl2ZUJ0bkNvbG9yIiwibGlua0J0bkNvbG9yIiwicHJpbWFyeUJ0bkNvbG9yIiwibGFyZ2UiLCJzbWFsbCIsInRyYW5zaXRpb24iLCJ3aWR0aCIsIm5lZ2F0aXZlQnRuQmdkSG92ZXIiLCJsaW5rQnRuQWN0QmdkSG92ZXIiLCJwcmltYXJ5QnRuQmdkSG92ZXIiLCJuZWdhdGl2ZUJ0bkFjdENvbG9yIiwic2Vjb25kYXJ5QnRuQWN0Q29sb3IiLCJsaW5rQnRuQWN0Q29sb3IiLCJwcmltYXJ5QnRuQWN0Q29sb3IiLCJJbnB1dCIsImlucHV0Iiwic2Vjb25kYXJ5SW5wdXQiLCJJbnB1dExpZ2h0IiwiaW5wdXRMVCIsIklubGluZUlucHV0IiwiaW5saW5lSW5wdXQiLCJTdHlsZWRQYW5lbEhlYWRlciIsImFjdGl2ZSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwibGFiZWxSQ0dDb2xvclZhbHVlcyIsImpvaW4iLCJwYW5lbEhlYWRlckhlaWdodCIsIlN0eWxlZFBhbmVsRHJvcGRvd24iLCJwYW5lbERyb3Bkb3duU2Nyb2xsQmFyIiwicGFuZWxCb3hTaGFkb3ciLCJwYW5lbEJvcmRlclJhZGl1cyIsIkJ1dHRvbkdyb3VwIiwiRGF0YXNldFNxdWFyZSIsImNvbG9yIiwiU2VsZWN0aW9uQnV0dG9uIiwic2VsZWN0ZWQiLCJzZWxlY3RCb3JkZXJDb2xvckxUIiwiYXZhaWxhYmxlIiwiVGFibGUiLCJ0YWJsZSIsInBhbmVsQmFja2dyb3VuZExUIiwidGl0bGVDb2xvckxUIiwicGFuZWxCb3JkZXJMVCIsIlN0eWxlZE1vZGFsQ29udGVudCIsInRleHRDb2xvckxUIiwiU3R5bGVkTWFwQ29udGFpbmVyIiwiU3R5bGVkRXhwb3J0U2VjdGlvbiIsIlN0eWxlZEZpbHRlcmVkT3B0aW9uIiwiU3R5bGVkVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsVUFBVSxHQUFHQyxNQUFN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QUFNLENBQUNTLEdBQVYsc0JBRUQsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ3lFLFFBQU4sR0FBaUJ6RSxLQUFLLENBQUNDLEtBQU4sQ0FBWW1DLGFBQTdCLEdBQTZDcEMsS0FBSyxDQUFDQyxLQUFOLENBQVl5RSxtQkFBN0Q7QUFBQSxDQUZKLEVBR1osVUFBQTFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUN5RSxRQUFOLEdBQWlCekUsS0FBSyxDQUFDQyxLQUFOLENBQVltQyxhQUE3QixHQUE2Q3BDLEtBQUssQ0FBQ0MsS0FBTixDQUFZeUUsbUJBQTdEO0FBQUEsQ0FITyxFQVlWLFVBQUExRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDMkUsU0FBTixJQUFtQjNFLEtBQUssQ0FBQ0MsS0FBTixDQUFZbUMsYUFBbkM7QUFBQSxDQVpLLEVBYUMsVUFBQXBDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUMyRSxTQUFOLElBQW1CM0UsS0FBSyxDQUFDQyxLQUFOLENBQVltQyxhQUFuQztBQUFBLENBYk4sQ0FBaEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTkgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgKiBhcyBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tICdyZWFjdC10b29sdGlwJztcblxuZXhwb3J0IGNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RGb250U2l6ZX07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0VGV4dEJvbGQgPSBzdHlsZWQoU2VsZWN0VGV4dClgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvblJvdW5kU21hbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5CZ2RIb3Zlcn07IC8vIHVwZGF0ZWQgYWZ0ZXIgY2hlY2tpbmcgc2tldGNoIGZpbGVcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQ29sb3J9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkJnZEhvdmVyfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENlbnRlckZsZXhib3ggPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsTGFiZWwgPSBzdHlsZWQubGFiZWwuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19sYWJlbCdcbn0pYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fbGFiZWwtd3JhcHBlcidcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbExhYmVsQm9sZCA9IHN0eWxlZChQYW5lbExhYmVsKWBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlclRpdGxlID0gc3R5bGVkLnNwYW4uYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19oZWFkZXJfX3RpdGxlJ1xufSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxIZWFkZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuXG4gIC5pY29uIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWwtcGFuZWxfX2NvbnRlbnQnXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICBwYWRkaW5nOiAxMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpZGVQYW5lbFNlY3Rpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1zZWN0aW9uJ1xufSlgXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC40IDogMSl9O1xuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNpZGVQYW5lbERpdmlkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1kaXZpZGVyJ1xufSlgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyQ29sb3J9O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IHN0eWxlZChSZWFjdFRvb2x0aXApYFxuICAmLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAge1xuICAgIGZvbnQtc2l6ZTogOS41cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nOiA3cHggMThweDtcblxuICAgICYudHlwZS1kYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBDb2xvcn07XG4gICAgICAmLnBsYWNlLWJvdHRvbSB7XG4gICAgICAgIDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYucGxhY2UtdG9wIHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS1yaWdodCB7XG4gICAgICAgIDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS1sZWZ0IHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2J1dHRvbidcbn0pYFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMubmVnYXRpdmVcbiAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5CZ2RcbiAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkXG4gICAgICAgIDogcHJvcHMubGluayA/IHByb3BzLnRoZW1lLmxpbmtCdG5CZ2QgOiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5uZWdhdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkNvbG9yXG4gICAgICA6IHByb3BzLnNlY29uZGFyeVxuICAgICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkNvbG9yXG4gICAgICAgIDogcHJvcHMubGluayA/IHByb3BzLnRoZW1lLmxpbmtCdG5Db2xvciA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5Db2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PlxuICAgIHByb3BzLmxhcmdlID9cbiAgICAgICcxNHB4J1xuICAgICAgOiBwcm9wcy5zbWFsbFxuICAgICAgICA/ICcxMHB4J1xuICAgICAgICA6ICcxMXB4J307XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAke3Byb3BzID0+XG4gICAgcHJvcHMubGFyZ2UgP1xuICAgICAgJzE0cHggMzJweCdcbiAgICAgIDogcHJvcHMuc21hbGxcbiAgICAgICAgPyAnNnB4IDlweCdcbiAgICAgICAgOiAnOXB4IDEycHgnfTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCB8fCAnYXV0byd9O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuNCA6IDEpfTtcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcblxuICA6aG92ZXIsXG4gIDpmb2N1cyxcbiAgOmFjdGl2ZSxcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5CZ2RIb3ZlclxuICAgICAgICA6IHByb3BzLnNlY29uZGFyeVxuICAgICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJcbiAgICAgICAgICA6IHByb3BzLmxpbmtcbiAgICAgICAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkFjdEJnZEhvdmVyXG4gICAgICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2RIb3Zlcn07XG4gICAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5BY3RDb2xvclxuICAgICAgICA6IHByb3BzLnNlY29uZGFyeVxuICAgICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQWN0Q29sb3JcbiAgICAgICAgICA6IHByb3BzLmxpbmtcbiAgICAgICAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkFjdENvbG9yXG4gICAgICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RDb2xvcn07XG4gIH1cblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dExpZ2h0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0TFR9XG5gO1xuXG5leHBvcnQgY29uc3QgSW5saW5lSW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlubGluZUlucHV0fTtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRQYW5lbEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmVcbiAgICAgID8gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJcbiAgICAgIDogcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZFxuICAgIHJnYihcbiAgICAgICR7cHJvcHMgPT5cbiAgICAgICAgcHJvcHMubGFiZWxSQ0dDb2xvclZhbHVlc1xuICAgICAgICAgID8gcHJvcHMubGFiZWxSQ0dDb2xvclZhbHVlcy5qb2luKCcsJylcbiAgICAgICAgICA6ICd0cmFuc3BhcmVudCd9XG4gICAgKTtcbiAgcGFkZGluZzogMCAxMHB4IDAgMDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVySGVpZ2h0fXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkUGFuZWxEcm9wZG93biA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxEcm9wZG93blNjcm9sbEJhcn1cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm94U2hhZG93fTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlclJhZGl1c307XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xuICB9XG4gIC5idXR0b246Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuYnV0dG9uOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRGF0YXNldFNxdWFyZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigke3Byb3BzID0+IHByb3BzLmNvbG9yLmpvaW4oJywnKX0pO1xuICBtYXJnaW4tcmlnaHQ6IDEycHhcbmA7XG5cbmV4cG9ydCBjb25zdCBTZWxlY3Rpb25CdXR0b24gPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuc2VsZWN0ZWQgPyBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkIDogcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmF2YWlsYWJsZSAmJiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLmF2YWlsYWJsZSAmJiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRhYmxlID0gc3R5bGVkLnRhYmxlYFxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG5cbiAgdGhlYWQge1xuICAgIHRyIHRoIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kTFR9O1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcbiAgICAgIHBhZGRpbmc6IDE4cHggMTJweDtcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cbiAgfVxuXG4gIHRib2R5IHtcbiAgIHRyIHRkIHtcbiAgICAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckxUfTtcbiAgICAgcGFkZGluZzogMTJweDtcbiAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kTFR9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwIC05NnB4O1xuICBwYWRkaW5nOiAzMHB4IDk2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbi8qKlxuICogTmV3ZXIgdmVyc2lvbnMgb2YgbWFwYm94LmdsIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBiYW5uZXIgb24gdG9wIG9mIHRoZSBtYXAgYnkgZGVmYXVsdFxuICogd2hpY2ggd2lsbCBjYXVzZSB0aGUgbWFwIHRvIGRpc3BsYXkgcG9pbnRzIGluIHRoZSB3cm9uZyBsb2NhdGlvbnNcbiAqIFRoaXMgd29ya2Fyb3VuZCB3aWxsIGhpZGUgdGhlIGVycm9yIGJhbm5lci5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0eWxlZE1hcENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC5tYXBib3hnbC1tYXAgLm1hcGJveGdsLW1pc3NpbmctY3NzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRXhwb3J0U2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMzVweCAwO1xuICB3aWR0aDogMTAwJTtcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxODVweDtcblxuICAgIC50aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuc3VidGl0bGUge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gIH1cblxuICAuc2VsZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcblxuICAgIHNlbGVjdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICBwYWRkaW5nOiAwLjVlbSAzLjVlbSAwLjVlbSAxZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGhlaWdodDogMzZweDtcblxuICAgICAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOlxuICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksXG4gICAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSxcbiAgICAgICAgY2FsYygxMDAlIC0gMi41ZW0pIDQuNWVtO1xuICAgICAgYmFja2dyb3VuZC1zaXplOlxuICAgICAgICA1cHggNXB4LFxuICAgICAgICA1cHggNXB4LFxuICAgICAgICAxcHggMS41ZW07XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIH1cblxuICAgIHNlbGVjdDpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGdyZWVuIDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdHJhbnNwYXJlbnQgNTAlLCBncmVlbiA1MCUpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjY2MsICNjY2MpO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpcbiAgICAgICAgY2FsYygxMDAlIC0gMTVweCkgMWVtLFxuICAgICAgICBjYWxjKDEwMCUgLSAyMHB4KSAxZW0sXG4gICAgICAgIGNhbGMoMTAwJSAtIDIuNWVtKSA0LjVlbTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTpcbiAgICAgICAgNXB4IDVweCxcbiAgICAgICAgNXB4IDVweCxcbiAgICAgICAgMXB4IDEuNWVtO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEZpbHRlcmVkT3B0aW9uID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgd2lkdGg6IDE0MHB4O1xuXG4gIDpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgfVxuXG4gIC5maWx0ZXJlZC10aXRsZSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5maWx0ZXJlZC1zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUeXBlID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2QgOiBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvckxUfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDRweDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIHdpZHRoOiAxMDBweDtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmF2YWlsYWJsZSAmJiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLmF2YWlsYWJsZSAmJiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkfTtcbiAgfVxuYDtcbiJdfQ==