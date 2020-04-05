const MAIN_TOOLS_BUTTONS = require(`../DOMObjects/DOMObjects.js`).DOMObjects.mainTools;
const MODAL = require(`../DOMObjects/DOMObjects.js`).DOMObjects.modal;
const COLOR_PANEL = require(`../DOMObjects/DOMObjects.js`).DOMObjects.colorPanel;

class ToolsUI {
    constructor() {
        this.init()
    }

    init() {
        this.setEvents();
    }

    setEvents() {
        this.setMainToolsEvents();
        this.setColorChooserEvents();
    }

    setMainToolsEvents() {

        MAIN_TOOLS_BUTTONS.forEach(getButton => {
            getButton().addEventListener(`click`, () => {

                if (getButton().getAttribute(`tool`) != `color`) {
                    this.changeCurrentActiveButton(getButton());
                }

            })
        });

    }

    setColorChooserEvents() {

        MAIN_TOOLS_BUTTONS.find(toolsButton => {
            return toolsButton().getAttribute(`tool`) == `color`;
        })().addEventListener(`click`, () => {
            COLOR_PANEL().style.display = `grid`;
            COLOR_PANEL().classList.add(`color-chooser-show-animation`);
        })

        //  zdarzenie colorow - klikniec -> wybor koloru + zmiana w fabrycie i powiadomienie wszystkich narzendzie + znikanie wyboru
        // zdarzenie zjechania myszka - znikanie wybory


    }

    changeCurrentActiveButton(button) {
        this.clearAllActiveButton();
        this.setActiveButton(button);
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
