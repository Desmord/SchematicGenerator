const DOMObjects = require(`../DOMObjects/DOMObjects.js`).DOMObjects;

class CanvasUI {
    constructor() {
        this.init();
        this.currentTool = null;
    }

    init() {
        // zrobic zdarzenie resize
        this.setCanvasSize();
        this.setCanvasEvents();
    }

    setCanvasSize() {
        DOMObjects.getCanvas().height = DOMObjects.getCanvas().clientHeight;
        DOMObjects.getCanvas().width = DOMObjects.getCanvas().clientWidth;
        DOMObjects.getWidthInput().value = DOMObjects.getCanvas().clientWidth;
        DOMObjects.getHeightInput().value = DOMObjects.getCanvas().clientHeight;
        DOMObjects.getFontSizeInput().value = 20;
        // zeby nie zapisywa tla czarnego
        let context = DOMObjects.getCanvas().getContext(`2d`);
        context.fillStyle = `rgba(255,255,255,1)`;
        context.fillRect(0,0,DOMObjects.getCanvas().clientWidth,DOMObjects.getCanvas().clientHeight)
    }

    setCanvasEvents() {

        DOMObjects.getCanvas().addEventListener(`mousedown`, (e) => {
            this.currentTool.onMouseDown(e.clientX, e.clientY);
        })

        DOMObjects.getCanvas().addEventListener(`mousemove`, (e) => {
            this.currentTool.onMouseMove(e.clientX, e.clientY);
        })

        DOMObjects.getCanvas().addEventListener(`mouseup`, (e) => {
            this.currentTool.onMouseUp(e.clientX, e.clientY);
        })

    }

    setTool(tool) {
        this.currentTool = tool;
    }

}

module.exports = {
    CanvasUI
};
