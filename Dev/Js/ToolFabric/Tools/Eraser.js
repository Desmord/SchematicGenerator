class Eraser {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext(`2d`);
        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;
        this.name = `eraser`;
        this.color = `rgba(90, 171,225,0.7)`;
        this.lineWidth = `5`;
        this.isDrawing = false;
        this.startPoint = {
            x: 0,
            y: 0
        };
        this.currentPoint = {
            x: 0,
            y: 0
        }
        this.canvasDrawingInitialState = null;
    }

    onMouseDown(x, y) {
        this.saveState();
        this.isDrawing = true;
        this.startPoint.x = x - this.canvas.offsetLeft;
        this.startPoint.y = y - this.canvas.offsetTop;
    }

    onMouseMove(x, y) {
        if (this.isDrawing) {
            this.currentPoint.x = x - this.canvas.offsetLeft;
            this.currentPoint.y = y - this.canvas.offsetTop;
            // zmienic czysczenie na tylko z terenu tego co rysujemy by nie mrogalo
            this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
            this.context.drawImage(this.canvasDrawingInitialState, 0, 0);
            this.drawSquare();
        }
    }

    onMouseUp(x, y) {
        this.isDrawing = false;
        this.currentPoint.x = x - this.canvas.offsetLeft;
        this.currentPoint.y = y - this.canvas.offsetTop;

        this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        this.context.drawImage(this.canvasDrawingInitialState, 0, 0);
        this.drawSquare();
    }

    updateColor(color) {
        this.color = color;
    }

    drawSquare() {

        window.requestAnimationFrame(() => {
            this.context.fillStyle = `rgba(255,255,255,1)`;
            this.context.lineWidth = this.lineWidth;

            this.context.beginPath();
            this.context.clearRect(
                this.startPoint.x,
                this.startPoint.y,
                this.currentPoint.x - this.startPoint.x,
                this.currentPoint.y - this.startPoint.y
            );
            this.context.stroke();
        });

    }

    saveState() {
        let image = document.createElement(`img`);
        image.src = this.canvas.toDataURL(`image/png`);
        this.canvasDrawingInitialState = image;
    }

    upadteCurrentPosition(x, y) {
        this.currentPoint.x = x - this.canvas.offsetLeft;
        this.currentPoint.y = y - this.canvas.offsetTop;
    }

    updateFontSize() { }

}

module.exports = {
    Eraser
};