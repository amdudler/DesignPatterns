import { Actor } from "./Actor";

export class GameStandings implements Actor {
    private static instance: GameStandings | null = null;
    private constructor(
        private x: number,
        private y: number,
        private score: number
    ) { }

    public static createInstance(): GameStandings {
        if (this.instance !== null) {
            return this.instance;
        }
        this.instance = new GameStandings(10, 30, 0);
        return this.instance;
    }
    render(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = "black";
        ctx.font = "20px Arial";
        ctx.fillText("Score: " + this.score, this.x, this.y);
    }
    move(delta: number): void { }

    increaseScore(amount: number): void {
        this.score += amount;
    }
}