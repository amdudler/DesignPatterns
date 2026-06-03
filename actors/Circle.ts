import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";
import { Observer } from "../observer/Observer.js";


export class Circle extends AbstractActor implements Observer {
  private radius: number = 0;
  private color: string = "#ff6666";

  constructor(
    protected movement: MoveStrategy,
    radius?: number,
    
  ) {
      super(movement);
    if (radius !== undefined) {
      this.radius = radius;
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  move(delta: number): void {
    this.movement.update(delta, this.movement.getX());
  }

  inform(event: string, data?: any): void {
    console.log("i am a circle" + event + "data" + data);
    if (event === "click") {
      this.color = this.color === "#ff6666" ? "#66ff66" : "#ff6666";
    }
  }
}
