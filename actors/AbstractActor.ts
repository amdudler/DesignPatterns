import { Actor } from "./Actor.js";
import { MoveStrategy } from "../movements/MoveStrategy.js";

export abstract class AbstractActor implements Actor {
    abstract render(ctx: CanvasRenderingContext2D): void;

    constructor(protected movement: MoveStrategy) { }
    move(delta: number): void{
        this.movement.update(delta, 10);

    }
}