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
import { AbstractActor } from "./actors/AbstractActor.js";
import { ActorFactory } from "./ActorFactory.js";
import { GameStandings } from "./actors/GameStandings.js";

class MyGame extends Game {
  private actors: Actor[] = [];
  private observers: Observer[] = [];

  init(): void {
    const acts: Actor[] = [];
    const factory = new ActorFactory(800, 600);
    acts.push(...factory.createRandomActors(10));
    this.actors.push(...acts);

    const s1: GameStandings = GameStandings.createInstance();
    this.actors.push(s1);

    const c1: Circle = new Circle(factory["createRandomMovement"](), 20, s1);
    const c2: Circle = new Circle(factory["createRandomMovement"](), 30, s1);
    this.actors.push(c1);
    this.actors.push(c2);

    const r1: Rectangle = new Rectangle(factory["createRandomMovement"](), 50, 30);
    
    this.actors.push(r1);

    this.addObserver(c1);
    this.addObserver(c2);
    this.addObserver(r1);
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
