// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";

class MyGame extends Game {
  private x: number = 50;
  private y: number = 100;
  private x1: number = 50;
  private y1: number = 100;
  private isGoingRight: boolean = true;

  init(): void {
    console.log("Game started!");
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    this.y1 += 200 * deltaTime;

    if (this.isGoingRight) {
      this.x += 200 * deltaTime;
    } else {
      this.x -= 200 * deltaTime;
    }

    if (this.x > 800 && this.isGoingRight) {
      this.isGoingRight = false;
    }

    if (this.x < 20 && !this.isGoingRight) {
      this.isGoingRight = true;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    console.log("render");

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, 60, 40);
    ctx.fillRect(this.x1, this.y1, 20, 20);
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
