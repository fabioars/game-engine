type DrawMode = "fill" | "line";

class Graphics {
  private ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  setColor(color: string | CanvasGradient | CanvasPattern): Graphics {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;

    return this;
  }

  clear(): Graphics {
    const lastColor = this.ctx.fillStyle;
    this.setColor("#fff");
    this.rectangle("fill", 0, 0, 200, 200);
    this.setColor(lastColor.toString());

    return this;
  }

  rectangle(
    mode: DrawMode,
    x: number,
    y: number,
    width: number,
    height: number
  ): Graphics {
    const draw =
      mode === "fill"
        ? this.ctx.fillRect.bind(this.ctx)
        : this.ctx.strokeRect.bind(this.ctx);

    draw(x, y, width, height);
    return this;
  }

  point(x: number, y: number): Graphics {
    this.ctx.fillRect(x, y, 1, 1);
    return this;
  }

  line(fromX: number, fromY: number, toX: number, toY: number): Graphics {
    this.ctx.beginPath();
    this.ctx.moveTo(fromX, fromY);
    this.ctx.lineTo(toX, toY);
    this.ctx.closePath();
    this.ctx.stroke();

    return this;
  }
}

export default Graphics;
