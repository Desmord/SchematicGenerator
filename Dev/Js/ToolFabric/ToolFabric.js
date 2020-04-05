const Square = require(`./Tools/Square.js`).Square;
const Diamond = require(`./Tools/Daimond.js`).Diamond;
const Text = require(`./Tools/Text.js`).Text;
const Line = require(`./Tools/Line.js`).Line;
const Arrow = require(`./Tools/Arrow.js`).Arrow;
const Eraser = require(`./Tools/Eraser.js`).Eraser;

class ToolFabric {
    constructor() {
        this.square = new Square();
        this.diamond = new Diamond();
        this.text = new Text();
        this.line = new Line();
        this.arrow = new Arrow();
        this.eraser = new Eraser();
    }

    getTool(tool) {
        switch (tool) {
            case `square`:
                return this.square;
            case `diamond`:
                return this.diamond;
            case `text`:
                return this.text;
            case `line`:
                return this.line;
            case `arrow`:
                return this.arrow;
            case `eraser`:
                return this.eraser;
            default:
                return this.square;
        }
    }

    updateColor(color) {
        new Array(
            this.square,
            this.diamond,
            this.text,
            this.line,
            this.arrow,
            this.eraser
        ).forEach(tool => tool.updateColor(color));
    }

    updateFontSize(fontSize) {
        this.text.updateFontSize();
    }

}

module.exports = {
    ToolFabric
};
