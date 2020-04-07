class Square {
    constructor() {
        this.name = `square`;
        this.color = `rgba(90, 171,225,0.7)`;
        this.lineWidth = `5`;
        this.isDrawing = false;
        this.startPoint = {
            x: 0,
            y: 0
        };
        this.endPoint = {
            x: 0,
            y: 0
        };
        this.canvasDrawingInitialState = null;
    }

    onMouseDown(canvas, x, y) {
        let ctx = canvas.getContext(`2d`);
        let image = document.createElement(`img`);

        image.src = canvas.toDataURL(`image/png`);

        this.isDrawing = true;
        this.canvasDrawingInitialState = image;
        this.startPoint.x = x - canvas.offsetLeft;
        this.startPoint.y = y - canvas.offsetTop;

    }

    onMouseMove(canvas, x, y) {

        if (this.isDrawing) {
            let ctx = canvas.getContext(`2d`);

            this.endPoint.x = x - canvas.offsetLeft;
            this.endPoint.y = y - canvas.offsetTop;

            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            ctx.drawImage(this.canvasDrawingInitialState, 0, 0);

            this.drawSquare(ctx);
        }
    }

    onMouseUp(canvas, x, y) {
        let ctx = canvas.getContext(`2d`);

        this.isDrawing = false;
        this.endPoint.x = x - canvas.offsetLeft;
        this.endPoint.y = y - canvas.offsetTop;

        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.drawImage(this.canvasDrawingInitialState, 0, 0);

        this.drawSquare(ctx);

    }

    updateColor(color) {
        this.color = color;
    }

    updateFontSize() { }

    drawSquare(ctx) {
        window.requestAnimationFrame(() => {
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;

            // left
            ctx.beginPath();
            ctx.moveTo(this.startPoint.x, this.startPoint.y);
            ctx.lineTo(this.startPoint.x, this.endPoint.y);
            ctx.stroke();
            //top
            ctx.beginPath();
            ctx.moveTo(this.startPoint.x, this.startPoint.y);
            ctx.lineTo(this.endPoint.x, this.startPoint.y);
            ctx.stroke();
            // right
            ctx.beginPath();
            ctx.moveTo(this.endPoint.x, this.startPoint.y);
            ctx.lineTo(this.endPoint.x, this.endPoint.y);
            ctx.stroke();
            // bottom
            ctx.beginPath();
            ctx.moveTo(this.startPoint.x, this.endPoint.y);
            ctx.lineTo(this.endPoint.x, this.endPoint.y);
            ctx.stroke();
        });
    }
}

module.exports = {
    Square
};
