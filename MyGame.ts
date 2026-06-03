// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Actor } from "./actors/Actor.js";
import { Tree } from "./actors/Tree.js";
import { SuperCircle } from "./actors/SuperCircle.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { Homer } from "./actors/Homer.js";
import { Observer } from "./observer/Observer.js";

class MyGame extends Game {
  private actors: Actor[] = [];
  private observers: Observer[] = [];

  init(): void {
    console.log("Game started!");
    const r1 = new Rectangle(new RightMovement(50, 50, 100), 50, 50);
    const r2 = new Rectangle(new LeftMovement(100, 100, 100), 20, 20);
    const r3 = new Rectangle(new RightMovement(200, 150, 300), 50, 50
    );
    const c1: Circle = new Circle(new LeftMovement(300, 200, 150), 30);
    const c2: Circle = new Circle(new RightMovement(400, 250, 200), 40
    );
    this.actors.push(r1, r2, r3, c1, c2);
    const t1 = new Tree(500, 500, 150);
    this.actors.push(t1);
    this.actors.push(new Tree(50, 250, 100));
    this.actors.push(new Tree(150, 500, 100));
    this.actors.push(new Homer(new RightMovement(400, 400, 200)));

    this.addObserver(c1);
    this.addObserver(c2);
    this.addObserver(r1);
    this.addObserver(t1);
  }

  update(deltaTime: number): void {
    console.log("update:", deltaTime);
    this.actors.forEach((actor) => actor.move(deltaTime));
  }

  render(ctx: CanvasRenderingContext2D): void {
    this.actors.forEach((actor) => actor.render(ctx));
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(event: string, data?: any): void {
    this.observers.forEach((observer) => observer.inform(event, data));
  }
  onMouseClick(x: number, y: number): void {
    console.log("Mouse clicked at:", x, y);
    this.notifyObservers("click", { x, y });
  }
}

const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
