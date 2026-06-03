import { MoveStrategy } from "../movements/MoveStrategy.js";
import { Actor } from "./Actor.js";
import { AbstractActor } from "./AbstractActor.js";
import { Observer } from "../observer/Observer.js";
import { GameStandings } from "./GameStandings.js";

export class Rectangle extends AbstractActor implements Observer {
  private score:GameStandings = GameStandings.createInstance();

  constructor(
    protected movement: MoveStrategy,
    private width: number,
    private height: number,
  ) {
    super(movement);
   }
  inform(event: string, data?: any): void {
    this.width += 5;
    this.height += 5;
    this.score.increaseScore(1);
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = "#66aaff";
    ctx.fillRect(this.movement.getX(), this.movement.getY(), this.width, this.height);
  }

  move(delta: number): void {
    this.movement.update(delta, this.movement.getX());
  }

}
