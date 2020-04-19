import Graphics from "../graphics/Graphics";

interface GameSetup {
  load: Function;
  loop: Function;
  draw: Function;
}

class Game {
  private setup: GameSetup;
  private graphics: Graphics;
  private lastTimestamp: number;

  constructor(gameSetup: GameSetup, graphics: Graphics) {
    this.setup = gameSetup;
    this.graphics = graphics;

    this.setup.load();
    this.runLoop();
  }

  runLoop() {
    this.lastTimestamp = this.getTimestamp();
    window.requestAnimationFrame(this.loop.bind(this));
  }

  loop() {
    const currentTimsetamp = this.getTimestamp();
    const dt = currentTimsetamp - this.lastTimestamp;

    this.setup.loop(dt);
    this.graphics.clear();
    this.setup.draw();
    requestAnimationFrame(this.loop.bind(this));
  }

  private getTimestamp(): number {
    return Math.round(new Date().getTime() / 1000);
  }
}

export default Game;
