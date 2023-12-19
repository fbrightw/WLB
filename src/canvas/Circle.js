import Tool from "./Tool";

export default class Circle extends Tool{

    constructor(canvas) {
        super(canvas);
        this.listen();
    }

    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this);
        this.canvas.onmouseup = this.mouseUpHandler.bind(this);
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    }

    mouseUpHandler(e) {
        this.mouseDown = false;
    }

    mouseDownHandler(e) {
        this.mouseDown = true;
        this.ctx.beginPath();
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
    }

    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.currentX = e.pageX - e.target.offsetLeft;
            this.currentY = e.pageY - e.target.offsetTop;
            let radius = Math.sqrt((this.currentX - this.startX)**2 + (this.currentY - this.startY)**2);
            this.draw(this.startX, this.startY, radius);
        }
    }

    draw(x1, y1, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x1, y1, radius, 0, Math.PI*2);
        this.ctx.stroke();
    }
}