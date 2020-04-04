const MAIN_TOOLS_BUTTONS = require(`../DOMObjects/DOMObjects.js`).DOMObjects.mainTools;
const MODAL = require(`../DOMObjects/DOMObjects.js`).DOMObjects.modal;
const COLOR_PANEL = require(`../DOMObjects/DOMObjects.js`).DOMObjects.colorPanel;

class ToolsUI {
    constructor() {
        this.init()
    }

    init() {
        this.setMainToolsEvents();
    }

    setMainToolsEvents() {

        MAIN_TOOLS_BUTTONS.forEach(button => {
            button.getTool().addEventListener(`click`, () => {
                if (button.getTool().getAttribute(`tool`) != `color`) {
                    this.clearAllActiveButtonStatus();
                    this.setButtonActiveStatus(button.getTool());
                }
            })
        });

    }

    setButtonActiveStatus(button) {
        const buttonBackgroundNodeIndex = 1;
        button
            .childNodes[buttonBackgroundNodeIndex]
            .classList.add(`tool-button__hover-background--active`);
    }

    clearAllActiveButtonStatus() {

        MAIN_TOOLS_BUTTONS.forEach(button => {
            const buttonBackgroundNodeIndex = 1;
            button.getTool()
                .childNodes[buttonBackgroundNodeIndex]
                .classList.remove(`tool-button__hover-background--active`);
        });
    }
}

module.exports = {
    ToolsUI
};
