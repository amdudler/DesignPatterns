import { Actor } from "./Actor";

export class GameStandings implements Actor{
    
    constructor(private x: number, private y: number, private score: number) {}
    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + this.score, this.x, this.y);
    }
    move(delta: number): void {}

    increaseScore(amount: number): void {
        this.score += amount;
    }
}