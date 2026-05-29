import { MoveStrategy } from '../movements/MoveStrategy.js';
import { AbstractActor } from './AbstractActor.js';

export class Homer extends AbstractActor {
    constructor(
        protected movement: MoveStrategy,
    ) {
        super(movement);
    }

    render(ctx: CanvasRenderingContext2D): void {
        // Draw the body
        ctx.fillStyle = "#ffcc99";
        ctx.beginPath();
        ctx.ellipse(this.movement.getX(), this.movement.getY(), 30, 40, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw the head
        ctx.beginPath();
        ctx.ellipse(this.movement.getX(), this.movement.getY() - 50, 25, 30, 0, 0, Math.PI * 2);
        ctx.fill();

        // Draw the eyes
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.movement.getX() - 10, this.movement.getY() - 60, 5, 0, Math.PI * 2);
        ctx.arc(this.movement.getX() + 10, this.movement.getY() - 60, 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw the mouth
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY() - 40, 15, 0, Math.PI);
        ctx.fill();
    }

    move(delta: number): void {
        this.movement.update(delta, this.movement.getX());
    }
}