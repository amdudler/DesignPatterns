import { Actor } from "./Actor.js";

export class Tree implements Actor {
    constructor(
        public x: number,
        public y: number,
        public size: number,
    ) {}

    render(ctx: CanvasRenderingContext2D): void {
        // Trunk
        const trunkWidth = this.size * 0.2;
        const trunkHeight = this.size * 0.6;
        const trunkX = this.x - trunkWidth / 2;
        const trunkY = this.y - trunkHeight; // treat y as ground baseline

        ctx.fillStyle = "#8B5A2B";
        ctx.fillRect(trunkX, trunkY, trunkWidth, trunkHeight);

        // Foliage (three overlapping circles)
        const foliageRadius = this.size * 0.45;
        ctx.fillStyle = "#228B22";

        ctx.beginPath();
        ctx.arc(this.x, trunkY - foliageRadius * 0.2, foliageRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x - foliageRadius * 0.6, trunkY + foliageRadius * 0.1, foliageRadius * 0.9, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x + foliageRadius * 0.6, trunkY + foliageRadius * 0.1, foliageRadius * 0.9, 0, Math.PI * 2);
        ctx.fill();
    }

    move(_delta: number): void {
        // Trees are stationary by default
    }
}