export interface MoveStrategy {
    update(delta: number, x: number): number;
    getX(): number;
    getY(): number;
}