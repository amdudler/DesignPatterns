import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./Actor.js";
export class Rectangle implements Actor {
  constructor(
    private movement: MoveStrategy,
    private width: number,
    private height: number,
  ) { }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
  }

  move(delta: number): void {
    this.movement.update(delta, 200); // Move 200 pixels per second
  }

  sayHello(): void {
    console.log("Hello from Rectangle!");
  }
}
