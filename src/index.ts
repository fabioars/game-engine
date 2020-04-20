import Graphics from "./graphics/Graphics";
import Game from "./game/Game";
import Input from "./game/Input";
import CanvasRender from "./renderer/CanvasRenderer";

const canvas = document.querySelector<HTMLCanvasElement>("#app");
const renderer = new CanvasRender(canvas);
const graphics = new Graphics(renderer);

const player = { x: 0, y: 0, speed: 200 };

const game = new Game(
  {
    load() {},
    loop(dt: number) {
      if (Input.keyboard.isDown("s")) {
        if(player.y < graphics.rendererSize.height - 10) {
          player.y += player.speed * dt;
        }
      }
      if (Input.keyboard.isDown("w")) {
        if(player.y > 0) {
          player.y -= player.speed * dt;
        }
      }
      if (Input.keyboard.isDown("a")) {
        if(player.x > 0) {
          player.x -= player.speed * dt;
        }
      }
      if (Input.keyboard.isDown("d")) {
        if(player.x < graphics.rendererSize.width - 10) {
          player.x += player.speed * dt;
        }
      }
    },
    draw() {
      graphics.setColor('#000');
      graphics.rectangle("fill", player.x, player.y, 10, 10);
      graphics.setColor('#f00');
      graphics.print('Hello World', 5, 15);
    }
  },
  graphics
);
