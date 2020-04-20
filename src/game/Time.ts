
class Time {
  private lastTime: number;

  constructor(time: number = performance.now()) {
    this.update(time);
  }

  public deltaTime(): number {
    return (performance.now() - this.lastTime)/1000;
  }

  public update(time: number = performance.now()): void {
    this.lastTime = time;
  }
}

export default Time;
