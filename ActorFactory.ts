import { Actor } from "./actors/Actor.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Homer } from "./actors/Homer.js";
import { Tree } from "./actors/Tree.js";
import { RightMovement } from "./movements/RightMovement.js";
import { LeftMovement } from "./movements/LeftMovement.js";
import { MoveStrategy } from "./movements/MoveStrategy.js";

/**
 * Factory for creating random actors
 */
export class ActorFactory {
  private canvasWidth: number;
  private canvasHeight: number;

  constructor(canvasWidth: number = 800, canvasHeight: number = 600) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  /**
   * Generate a random movement strategy
   */
  private createRandomMovement(): MoveStrategy {
    const x = Math.random() * this.canvasWidth;
    const y = Math.random() * this.canvasHeight;
    const speed = Math.random() * 100 + 20; // Speed between 20 and 120

    // Randomly choose between left and right movement
    if (Math.random() < 0.5) {
      return new RightMovement(x, y, speed);
    } else {
      return new LeftMovement(x, y, speed);
    }
  }

  /**
   * Create a random Rectangle
   */
  private createRectangle(): Actor {
    const width = Math.random() * 80 + 20; // Width between 20 and 100
    const height = Math.random() * 80 + 20; // Height between 20 and 100
    return new Rectangle(this.createRandomMovement(), width, height);
  }

  /**
   * Create a random Circle
   */
  private createCircle(): Actor {
    const radius = Math.random() * 40 + 10; // Radius between 10 and 50
    return new Circle(this.createRandomMovement(), radius);
  }

  /**
   * Create a random Homer
   */
  private createHomer(): Actor {
    return new Homer(this.createRandomMovement());
  }

  /**
   * Create a random Tree
   */
  private createTree(): Actor {
    const x = Math.random() * this.canvasWidth;
    const y = Math.random() * this.canvasHeight;
    const height = Math.random() * 100 + 50; // Height between 50 and 150
    return new Tree(x, y, height);
  }

  /**
   * Create a random actor from the available types
   */
  createRandomActor(): Actor {
    const actorTypes = ["rectangle", "circle", "homer", "tree"];
    const randomType =
      actorTypes[Math.floor(Math.random() * actorTypes.length)];

    switch (randomType) {
      case "rectangle":
        return this.createRectangle();
      case "circle":
        return this.createCircle();
      case "homer":
        return this.createHomer();
      case "tree":
        return this.createTree();
      default:
        return this.createRectangle();
    }
  }

  /**
   * Create multiple random actors
   */
  createRandomActors(count: number): Actor[] {
    const actors: Actor[] = [];
    for (let i = 0; i < count; i++) {
      actors.push(this.createRandomActor());
    }
    return actors;
  }
}