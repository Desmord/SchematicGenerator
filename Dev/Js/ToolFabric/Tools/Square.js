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
        };
        this.canvasDrawingInitialState = null;
    }

    onMouseDown(canvas, x, y) {
        let ctx = canvas.getContext(`2d`);
        let image = document.createElement(`img`);

        image.src = canvas.toDataURL(`image/png`);

        this.canvasDrawingInitialState = image;
        this.isDrawing = true;
        this.startPoint.x = x - canvas.offsetLeft;
        this.startPoint.y = y - canvas.offsetTop;

    }

    onMouseMove(canvas, x, y) {
        if (this.isDrawing) {

            window.requestAnimationFrame(() => {
                let ctx = canvas.getContext(`2d`);

                this.endPoint.x = x - canvas.offsetLeft;
                this.endPoint.y = y - canvas.offsetTop;

                ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                ctx.drawImage(this.canvasDrawingInitialState, 0, 0);

                ctx.fillStyle = this.color;
                ctx.fillRect(
                    this.startPoint.x,
                    this.startPoint.y,
                    this.endPoint.x - this.startPoint.x,
                    this.endPoint.y - this.startPoint.y
                )

            })
        }
    }

    onMouseUp(canvas, x, y) {
        let ctx = canvas.getContext(`2d`);

        this.isDrawing = false;
        this.endPoint.x = x - canvas.offsetLeft;
        this.endPoint.y = y - canvas.offsetTop;

        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        ctx.drawImage(this.canvasDrawingInitialState, 0, 0);

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
