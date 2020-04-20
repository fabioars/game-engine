import { IRenderer, DrawMode } from "../renderer/interface";

class Graphics {
  private renderer: IRenderer;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
  }

  setColor(color: string): Graphics {
    this.renderer.setColor(color);

    return this;
  }

  clear(): Graphics {
    this.renderer.clear();

    return this;
  }

  rectangle(
    mode: DrawMode,
    x: number,
    y: number,
    width: number,
    height: number
  ): Graphics {
    this.renderer.rectangle(mode, x, y, width, height);

    return this;
  }

  point(x: number, y: number): Graphics {
    this.renderer.point(x, y);

    return this;
  }

  line(fromX: number, fromY: number, toX: number, toY: number) {
    this.renderer.line(fromX, fromY, toX, toY);

    return this;
  }
}

export default Graphics;
