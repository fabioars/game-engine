export type DrawMode = "fill" | "line";

export interface IRenderer {
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
}

export default IRenderer;
