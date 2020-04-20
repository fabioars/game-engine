import { IRenderer, DrawMode, ISize } from "./interface";

class CanvasRender implements IRenderer {
  private ctx: CanvasRenderingContext2D;
  readonly size: ISize;

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.size = {
      width: canvas.width,
      height: canvas.height,
    };
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

  print(text: string, x: number, y: number): void {
    this.ctx.font = '12px sans-serif';
    this.ctx.fillText(text, x, y);
  }
}

export default CanvasRender;
