class Square {
    constructor() {
        this.name = `square`;
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
    /* tutaj i w innych przekazujmy canvas, x,y i inne potrzebne */
    onMouseDown(canvas, x, y) {
        let ctx = canvas.getContext(`2d`);

        this.isDrawing = true;
        this.startPoint.x = x - canvas.offsetLeft;
        this.startPoint.y = y - canvas.offsetTop;

        // console.log(this.startPoint.x);
        // console.log(canvas);

        // ctx.beginPath(0, 0);
        // ctx.fillStyle = this.color;
        // ctx.fillRect(20, 20, 150, 100)

    }

    onMouseMove() {
        if (this.isDrawing) {
            console.log(`ruch kwadratu`);
        }
    }

    onMouseUp(canvas, x, y) {
        let ctx = canvas.getContext(`2d`);

        this.isDrawing = false;
        this.endPoint.x = x - canvas.offsetLeft;
        this.endPoint.y = y - canvas.offsetTop;

        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.startPoint.x,
            this.startPoint.y,
            this.endPoint.x - this.startPoint.x,
            this.endPoint.y - this.startPoint.y
        )
    }

    updateColor(color) {
        this.color = color;
    }

    updateFontSize() { }

}

module.exports = {
    Square
};
