import { MoveStrategy } from "./MoveStrategy.js";
export class LeftMovement implements MoveStrategy {
    constructor(
        private x: number,
        private y: number,
        private speed: number,
    ) {}
    update(delta: number, x: number): number {
        this.x -= this.speed * delta;
        return this.x;
    }

    getX(): number {
        return this.x;
    }  

    getY(): number {
        return this.y;
    }
}