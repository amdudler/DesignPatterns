// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { Tree } from "./actors/Tree.js";
import { SuperCircle } from "./actors/SuperCircle.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";

class MyGame extends Game {
  private actors: Actor[] = [];
  

  init(): void {
    console.log("Game started!");
    const r1 = new Rectangle(new RightMovement(50, 50, 100), 50, 50);
    const r2 = new Rectangle(new LeftMovement(100, 100, 100), 20, 20);
    const r3 = new Rectangle(new RightMovement(200, 150, 300), 50, 50);
    this.actors.push(
      new Circle(new RightMovement(100, 200, 200), 30),
        new Circle(new RightMovement(200, 300, 200), 50),
        new Circle(new LeftMovement(300, 400, 200), 75),
    );
    this.actors.push(r1, r2, r3);
    this.actors.push(new Tree(50, 250, 100));
    this.actors.push(new Tree(150, 500, 100));
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    this.actors.forEach((actor) => actor.move(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach((actor) => actor.render(ctx));
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
