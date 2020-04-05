const DOMObjects = {
    mainTools: () => document.querySelectorAll(`.tool-button`),
    colorTool: () => document.querySelector(`.tools-menu__color-chooser`),
    modal: {
        modal: () => document.querySelector(`.modal`),
        modalText: () => document.querySelector(`.modal__info-text`),
        modalBackground: () => document.querySelector(`.modal__background`),
        modalCloseButton: () => document.querySelector(`.modal__close-button`)
    },
    colorPanel: () => document.querySelector(`.color-chooser`),
    colorPanelColorButtons: () => document.querySelectorAll(`.color-chooser__color`)

}

module.exports = {
    DOMObjects
};
