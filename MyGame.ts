// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";

class MyGame extends Game {
  private rect1: Rectangle | null = null;
  private rect2: Rectangle | null = null;

  init(): void {
    console.log("Game started!");
    this.rect1 = new Rectangle(20, 20, 60, 40);
    this.rect2 = new Rectangle(100, 100, 20, 20);
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    this.rect1?.move(deltaTime);
    this.rect2?.move(deltaTime);
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.rect1?.render(ctx);
    this.rect2?.render(ctx);

  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
