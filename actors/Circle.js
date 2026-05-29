import { AbstractActor } from "./AbstractActor.js";
export class Circle extends AbstractActor {
    constructor(movement, radius) {
        super(movement);
        this.movement = movement;
        this.radius = 0;
        if (radius !== undefined) {
            this.radius = radius;
        }
    }
    render(ctx) {
        ctx.fillStyle = "#ff6666";
        ctx.beginPath();
        ctx.arc(this.movement.getX(), this.movement.getY(), this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}
