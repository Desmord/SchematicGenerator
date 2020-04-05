const DOMObjects = {
    mainTools: [
        () => document.querySelector(`.tool-button[tool="square"]`),
        () => document.querySelector(`.tool-button[tool="diamond"]`),
        () => document.querySelector(`.tool-button[tool="text"]`),
        () => document.querySelector(`.tool-button[tool="line"]`),
        () => document.querySelector(`.tool-button[tool="arrow"]`),
        () => document.querySelector(`.tool-button[tool="eraser"]`),
        () => document.querySelector(`.tools-menu__color-chooser`)
    ],
    modal: () => document.querySelector(`.modal`),
    colorPanel: () => document.querySelector(`.color-chooser`)

}

module.exports = {
    DOMObjects
};
