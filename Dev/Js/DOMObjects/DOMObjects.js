class DOMObjects {
    constructor() { }

    static getMainTools() { return document.querySelectorAll(`.tool-button`) }

    static getColorChooserButton() { return document.querySelector(`.tools-menu__color-chooser`) }

    static getColorPanel() { return document.querySelector(`.color-chooser`) }

    static getColorPanelButtons() { return document.querySelectorAll(`.color-chooser__color`) }

    static getModalConatiner() { return document.querySelector(`.modal`) }

    static getModalText() { return document.querySelector(`.modal__info-text`) }

    static getModalBackground() { return document.querySelector(`.modal__background`) }

    static getModalCloseButton() { return document.querySelector(`.modal__close-button`) }

    static getCanvasContainer() { return document.querySelector(`.canvas-container`) }

    static getCanvas() { return document.querySelector(`.canvas-container__canvas`) }

    static getCanvasTextContainer() { return document.querySelector(`.canvas-text-container`) }

    static getCanvasTextContainerTextArea() { return document.querySelector(`.canvas-text-input`) }

    static getSubbimtPropertiesButton(){ return document.querySelector(`.properties-menu__subbmit-button`)}

    static getFontSizeInput(){return document.querySelector(`input[tool="font-size"]`);}

    static getWidthInput(){return document.querySelector(`input[tool="canvas-width"]`);}

    static getHeightInput(){return document.querySelector(`input[tool="canvas-height"]`);}

    static getGeneratePDFButton(){ return document.querySelector(`.properties-menu__generate-pdf-button`)};

}

module.exports = {
    DOMObjects
};
