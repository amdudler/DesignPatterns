import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";


export class Circle implements Actor {
  private radius: number = 0;

  constructor(
    private movement: MoveStrategy,
    radius?: number,
    
  ) {
    if (radius !== undefined) {
      this.radius = radius;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#ff6666";
    ctx.beginPath();
    ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  move(delta: number): void {
   this.movement.update(delta, 10); // Move 100 pixels per second
  }
}
