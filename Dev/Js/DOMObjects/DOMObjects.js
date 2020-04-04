const DOMObjects = {
    mainTools: [
        {
            toolTip: `square`,
            getTool: () => document.querySelector(`.tool-button[tool="square"]`)
        },
        {
            toolTip: `diamond`,
            getTool: () => document.querySelector(`.tool-button[tool="diamond"]`)
        },
        {
            toolTip: `text`,
            getTool: () => document.querySelector(`.tool-button[tool="text"]`)
        },
        {
            toolTip: `line`,
            getTool: () => document.querySelector(`.tool-button[tool="line"]`)
        },
        {
            toolTip: `arrow`,
            getTool: () => document.querySelector(`.tool-button[tool="arrow"]`)
        },
        {
            toolTip: `eraser`,
            getTool: () => document.querySelector(`.tool-button[tool="eraser"]`)
        },
        {
            toolTip: `color`,
            getTool:() => document.querySelector(`.tools-menu__color-chooser`)
         }
    ],
modal: {
    container: () => document.querySelector(`.modal`)
},
colorPanel: {
    colorPanelContainer: () => document.querySelector(`.color-chooser`)
}
}

module.exports = {
    DOMObjects
};
