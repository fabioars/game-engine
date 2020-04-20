import Graphics from "./graphics/Graphics";
import Game from "./game/Game";
import Input from "./game/Input";
import CanvasRender from "./renderer/CanvasRenderer";

let canvas: HTMLCanvasElement;
canvas = document.querySelector<HTMLCanvasElement>("#app");

const ctx: CanvasRenderingContext2D = canvas!.getContext("2d");
const renderer = new CanvasRender(ctx);

const graphics = new Graphics(renderer);

let player = { x: 0, y: 0, speed: 2 };

const game = new Game(
  {
    load() {},
    loop() {
      if (Input.keyboard.isDown("s")) {
        player.y += player.speed;
      }
      if (Input.keyboard.isDown("w")) {
        player.y -= player.speed;
      }
      if (Input.keyboard.isDown("a")) {
        player.x -= player.speed;
      }
      if (Input.keyboard.isDown("d")) {
        player.x += player.speed;
      }
    },
    draw() {
      graphics.rectangle("fill", player.x, player.y, 10, 10);
    }
  },
  graphics
);
