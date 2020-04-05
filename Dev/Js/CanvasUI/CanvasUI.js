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

    setCanvasSize(){
        DOMObjects.getCanvas().height = DOMObjects.getCanvas().clientHeight;
        DOMObjects.getCanvas().width = DOMObjects.getCanvas().clientWidth;
    }

    setCanvasEvents() {

        DOMObjects.getCanvas().addEventListener(`mousedown`, (e) => {
            this.currentTool.onMouseDown(e.target,e.clientX,e.clientY);
        })

        DOMObjects.getCanvas().addEventListener(`mousemove`, (e) => {
            this.currentTool.onMouseMove(e.target,e.clientX,e.clientY);
        })

        DOMObjects.getCanvas().addEventListener(`mouseup`, (e) => {
            this.currentTool.onMouseUp(e.target,e.clientX,e.clientY);
        })

    }

    setTool(tool) {
        this.currentTool = tool;
    }

}

module.exports = {
    CanvasUI
};
