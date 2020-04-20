export interface ISize {
  readonly width: number;
  readonly height: number;
}

export type DrawMode = "fill" | "line";

export interface IRenderer {
  readonly size: ISize;

  setColor(color: string): void;
  getColor(): string;
  clear(): void;

  rectangle(
    mode: DrawMode,
    x: number,
    y: number,
    width: number,
    height: number
  ): void;
  point(x: number, y: number): void;
  line(fromX: number, fromY: number, toX: number, toY: number): void;
  print(text:string, x: number, y: number): void;
}

export default IRenderer;
