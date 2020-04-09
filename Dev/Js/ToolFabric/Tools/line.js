class Line {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext(`2d`);
        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;
        this.name = `line`;
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
            this.upadteCurrentPosition(x,y);
            // zmienic czysczenie na tylko z terenu tego co rysujemy by nie mrugalo
            this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
            this.context.drawImage(this.canvasDrawingInitialState, 0, 0);
            this.drawLine();
        }
    }

    onMouseUp(x, y) {
        this.isDrawing = false;
        this.upadteCurrentPosition(x,y);
        this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        this.context.drawImage(this.canvasDrawingInitialState, 0, 0);
        this.drawLine();
    }

    updateColor(color) {
        this.color = color;
    }

    drawLine() {
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.lineWidth;

        this.context.beginPath();
        this.context.moveTo(this.startPoint.x, this.startPoint.y);
        this.context.lineTo(this.currentPoint.x, this.currentPoint.y);
        this.context.stroke();
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
    Line
};