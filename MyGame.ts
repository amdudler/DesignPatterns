// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { SuperCircle } from "./actors/SuperCircle.js";

class MyGame extends Game {
  private rectangles: Rectangle[] = [];
  private circles: Circle[] = [];

  init(): void {
    console.log("Game started!");
    const r1 = new Rectangle(20, 20, 60, 40);
    const r2 = new Rectangle(100, 100, 20, 20);
    const r3 = new Rectangle(200, 150, 50, 50);
    this.circles.push(
      new Circle(300, 300, 50),
      new Circle(400, 200, 30),
      new Circle(500, 100, 40),
    );
    this.rectangles.push(r1, r2, r3);
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    this.rectangles.forEach((rect) => rect.move(deltaTime));
    this.circles.forEach((circle) => circle.move(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.rectangles.forEach((rect) => rect.render(ctx));
    this.circles.forEach((circle) => circle.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
