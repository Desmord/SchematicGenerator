const MAIN_TOOLS_BUTTONS = require(`../DOMObjects/DOMObjects.js`).DOMObjects.mainTools;
const COLOR_TOOL_BUTTON = require(`../DOMObjects/DOMObjects.js`).DOMObjects.colorTool;
const MODAL = require(`../DOMObjects/DOMObjects.js`).DOMObjects.modal;
const COLOR_PANEL = require(`../DOMObjects/DOMObjects.js`).DOMObjects.colorPanel;
const COLOR_PANEL_COLOR_BUTTONS = require(`../DOMObjects/DOMObjects.js`).DOMObjects.colorPanelColorButtons;

class ToolsUI {
    constructor() {
        this.init()
    }

    init() {
        this.setEvents();
    }

    setEvents() {
        this.setMainToolsEvents();
        this.setColorChoosingEvents();
    }

    setMainToolsEvents() {

        MAIN_TOOLS_BUTTONS.forEach(button => {
            button().addEventListener(`click`, () => {
                    this.changeCurrentActiveButton(button());
            })
        });

    }

    setColorChoosingEvents() {
        this.setColorToolEvents();
        this.setColorPanelEvents();
        this.setColorPanelColorButtonsEvents();
    }

    setColorToolEvents() {

        COLOR_TOOL_BUTTON().addEventListener(`click`, () => {
            this.showColorPanel();
        })

    }

    setColorPanelEvents() {

        COLOR_PANEL().addEventListener(`mouseleave`, () => {
            this.hideColorPanel();
        })

    }

    setColorPanelColorButtonsEvents() {

        COLOR_PANEL_COLOR_BUTTONS().forEach(colorButton => {
            colorButton.addEventListener(`click`, e => {
                const selectedColor = window.getComputedStyle(e.target, null).getPropertyValue(`background-color`);

                COLOR_TOOL_BUTTON().childNodes[1].style.color = selectedColor;
                this.hideColorPanel();
            })
        })

    }

    showColorPanel() {
        const animationTime = 300;

        COLOR_PANEL().style.display = `grid`;
        COLOR_PANEL().classList.add(`color-chooser-show-animation`);
        setTimeout(() => {
            COLOR_PANEL().classList.remove(`color-chooser-show-animation`);
        }, animationTime);
    }

    hideColorPanel() {
        const animationTime = 300;

        COLOR_PANEL().classList.add(`color-chooser-close-animation`);
        setTimeout(() => {
            COLOR_PANEL().style.display = `none`;
            COLOR_PANEL().classList.remove(`color-chooser-close-animation`);
        }, animationTime);
    }

    displayModal(){

    }

    hideModal(){

    }

    changeCurrentActiveButton(selectedButton) {
        this.clearAllActiveButton();
        this.setActiveButton(selectedButton);
    }

    setActiveButton(button) {
        const buttonBackgroundNodeIndex = 1;
        button
            .childNodes[buttonBackgroundNodeIndex]
            .classList.add(`tool-button__hover-background--active`);
    }

    clearAllActiveButton() {

        MAIN_TOOLS_BUTTONS.forEach(button => {
            const buttonBackgroundNodeIndex = 1;
            button()
                .childNodes[buttonBackgroundNodeIndex]
                .classList.remove(`tool-button__hover-background--active`);
        });
    }
}

module.exports = {
    ToolsUI
};
