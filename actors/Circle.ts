import { Actor } from "./Actor.js";

export class Circle implements Actor {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#ff6666";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  move(delta: number): void {
    this.y += delta * 200; // Move 100 pixels per second
  }
}
