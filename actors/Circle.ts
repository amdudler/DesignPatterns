import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";
import { AbstractActor } from "./AbstractActor.js";
import { Observer } from "../observer/Observer.js";
import { GameStandings } from "./GameStandings.js";


export class Circle extends AbstractActor implements Observer {
  private radius: number = 0;
  private color: string = "#ff6666";
  

  constructor(
    protected movement: MoveStrategy,
    radius?: number,
    private standings?: GameStandings,
    
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
    super.move(delta);
    //if(this.movement.getX() > 400) {
    //  this.standings?.increaseScore(1);
    //}
  }

  inform(event: string, data?: any): void {
    console.log("i am a circle" + event + "data" + data);
    if (event === "click") {
      this.color = this.color === "#ff6666" ? "#66ff66" : "#ff6666";
    }
  }
}
