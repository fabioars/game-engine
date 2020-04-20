import Graphics from "../graphics/Graphics";

interface GameLogic {
  load: Function;
  loop: Function;
  draw: Function;
}

class Game {
  private setup: GameLogic;
  private graphics: Graphics;

  constructor(gameSetup: GameLogic, graphics: Graphics) {
    this.setup = gameSetup;
    this.graphics = graphics;

    this.setup.load();
    this.runLoop();
  }

  runLoop() {
    window.requestAnimationFrame(this.loop.bind(this));
  }

  loop() {
    this.setup.loop();
    this.graphics.clear();
    this.setup.draw();
    requestAnimationFrame(this.loop.bind(this));
  }
}

export default Game;
