export class LeftMovement {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    update(delta, x) {
        this.x -= this.speed * delta;
        return this.x;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}
