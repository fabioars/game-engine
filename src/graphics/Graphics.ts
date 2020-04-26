import { IRenderer, DrawMode, ISize } from "../renderer/interface";

class Graphics {
  private renderer: IRenderer;
  readonly rendererSize: ISize;

  constructor(renderer: IRenderer) {
    this.renderer = renderer;
    this.rendererSize = renderer.size;
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

  line(fromX: number, fromY: number, toX: number, toY: number): Graphics {
    this.renderer.line(fromX, fromY, toX, toY);

    return this;
  }

  print(text: string, x: number, y: number): Graphics {
    this.renderer.print(text, x, y);
    return this;
  }

  ellipse(mode: DrawMode, x: number, y: number, radiusX: number, radiusY: number): Graphics {
    this.renderer.ellipse(mode, x, y, radiusX, radiusY);
    return this;
  }
}

export default Graphics;
