const DOMObjects = require(`../DOMObjects/DOMObjects.js`).DOMObjects;
const CanvasUI = require(`../CanvasUI/CanvasUI.js`).CanvasUI;
const ToolFabric = require(`../ToolFabric/ToolFabric.js`).ToolFabric;

class ToolsUI {
    constructor() {
        this.ToolFabric = new ToolFabric();
        this.CanvasUI = new CanvasUI();
        this.init()
    }

    init() {
        this.setEvents();
        this.CanvasUI.setTool(this.ToolFabric.getTool(`square`));
    }

    setEvents() {
        this.setMainToolsEvents();
        this.setColorChoosingEvents();
        this.setModalEvents();
        this.setTextAreaEvent();
    }

    setMainToolsEvents() {

        DOMObjects.getMainTools().forEach(button => {
            button.addEventListener(`click`, () => {
                this.changeCurrentActiveButton(button);
                this.CanvasUI.setTool(
                    this.ToolFabric.getTool(
                        button.getAttribute(`tool`)
                    )
                );
            })
        });

    }

    setColorChoosingEvents() {
        this.setColorToolEvents();
        this.setColorPanelEvents();
        this.setColorPanelColorButtonsEvents();
    }

    setColorToolEvents() {
        DOMObjects.getColorChooserButton().addEventListener(`click`, () => {
            this.showColorPanel();
        })
    }

    setColorPanelEvents() {

        DOMObjects.getColorPanel().addEventListener(`mouseleave`, () => {
            this.hideColorPanel();
        })

    }

    setColorPanelColorButtonsEvents() {

        DOMObjects.getColorPanelButtons().forEach(colorButton => {
            colorButton.addEventListener(`click`, e => {
                const selectedColor = window.getComputedStyle(e.target, null).getPropertyValue(`background-color`);

                DOMObjects.getColorChooserButton().childNodes[1].style.color = selectedColor;
                this.ToolFabric.updateColor(selectedColor);
                this.hideColorPanel();
            })
        })

    }

    showColorPanel() {
        const animationTime = 300;

        DOMObjects.getColorPanel().style.display = `grid`;
        DOMObjects.getColorPanel().classList.add(`color-chooser-show-animation`);
        setTimeout(() => {
            DOMObjects.getColorPanel().classList.remove(`color-chooser-show-animation`);
        }, animationTime);
    }

    hideColorPanel() {
        const animationTime = 300;

        DOMObjects.getColorPanel().classList.add(`color-chooser-close-animation`);
        setTimeout(() => {
            DOMObjects.getColorPanel().style.display = `none`;
            DOMObjects.getColorPanel().classList.remove(`color-chooser-close-animation`);
        }, animationTime);
    }

    setModalEvents() {

        DOMObjects.getModalCloseButton().addEventListener(`click`, () => {
            this.hideModal();
        })

        DOMObjects.getModalBackground().addEventListener(`click`, () => {
            this.hideModal();
        })

    }

    /**
     * Displays modal element with given text
     * @param { string } text
     */
    displayModal(text) {
        const animationTime = 300;

        DOMObjects.getModalText().innerHTML = text;
        DOMObjects.getModalConatiner().style.display = `flex`;
        DOMObjects.getModalConatiner().classList.add(`modal-show-animation`);

        setTimeout(() => {
            DOMObjects.getModalConatiner().classList.remove(`modal-show-animation`);
        }, animationTime);
    }

    hideModal() {
        const animationTime = 300;

        DOMObjects.getModalConatiner().classList.add(`modal-close-animation`);
        setTimeout(() => {
            DOMObjects.getModalConatiner().style.display = `none`;
            DOMObjects.getModalConatiner().classList.remove(`modal-close-animation`);
        }, animationTime);
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

        DOMObjects.getMainTools().forEach(button => {
            const buttonBackgroundNodeIndex = 1;
            button
                .childNodes[buttonBackgroundNodeIndex]
                .classList.remove(`tool-button__hover-background--active`);
        });

    }

    setTextAreaEvent() {
        let textArea = DOMObjects.getCanvasTextContainerTextArea();

        textArea.addEventListener(`keyup`, (e) => {
            this.ToolFabric.getTool(`text`).updateText(`${e.target.value}`);
        })
    }

}

module.exports = {
    ToolsUI
};
