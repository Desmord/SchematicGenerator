class Eraser {
    constructor() {
        this.name = `eraser`;
        this.color = `rgba(90, 171,225,0.7)`;
        this.isDrawing = false;
        this.startPoint = {
            x: 0,
            y: 0
        };
        this.endPoint = {
            x: 0,
            y: 0
        }
    }

    onMouseDown(/* tutaj i w innych przekazujmy canvas, x,y i inne potrzebne */) {
        console.log(`klikniecie`);
    }

    onMouseMove() {
        console.log(`ruch`);
    }

    onMouseUp() {
        console.log(`puszczenie`);
    }

    updateColor(color) {
        this.color = color;
    }

    updateFontSize() { }

}

module.exports = {
    Eraser
};