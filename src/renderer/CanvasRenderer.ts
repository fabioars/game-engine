import { IRenderer, DrawMode } from "./interface";

class CanvasRender implements IRenderer {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  getColor(): string {
    return this.ctx.fillStyle.toString();
  }

  setColor(color: string): void {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
  }

  clear(): void {
    const lastColor = this.ctx.fillStyle.toString();
    this.setColor("#fff");
    this.rectangle("fill", 0, 0, 200, 200);
    this.setColor(lastColor);
  }

  rectangle(
    mode: DrawMode,
    x: number,
    y: number,
    width: number,
    height: number
  ): void {
    const draw =
      mode === "fill"
        ? this.ctx.fillRect.bind(this.ctx)
        : this.ctx.strokeRect.bind(this.ctx);

    draw(x, y, width, height);
  }

  point(x: number, y: number): void {
    this.ctx.fillRect(x, y, 1, 1);
  }

  line(fromX: number, fromY: number, toX: number, toY: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.closePath();
    this.ctx.stroke();
  }
}

export default CanvasRender;
