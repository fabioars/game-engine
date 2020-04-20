import Graphics from "../graphics/Graphics";
import Time from "./Time";

interface GameLogic {
  load: Function;
  loop: Function;
  draw: Function;
}

class Game {
  private logic: GameLogic;
  private graphics: Graphics;

  private time: Time;

  constructor(logic: GameLogic, graphics: Graphics, time?: Time) {
    this.logic = logic;
    this.graphics = graphics;
    this.time = time ? time : new Time();

    this.runLoop();
  }

  runLoop() {
    this.logic.load();
    this.time.update();
    
    window.requestAnimationFrame(this.loop.bind(this));
  }

  loop() {
    const dt = this.time.deltaTime();
    this.logic.loop(dt);
    this.graphics.clear();
    this.time.update();
    this.logic.draw(this.time.deltaTime());

    this.time.update()
    requestAnimationFrame(this.loop.bind(this));
  }
}

export default Game;
