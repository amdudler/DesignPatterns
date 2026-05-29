// MyGame - Example implementation of Game interface
import { Game, GameFramework } from "./GameFramework.js";
import { Rectangle } from "./actors/Rectangle.js";
import { Circle } from "./actors/Circle.js";
import { Tree } from "./actors/Tree.js";
class MyGame extends Game {
    constructor() {
        super(...arguments);
        this.actors = [];
    }
    init() {
        console.log("Game started!");
        const r1 = new Rectangle(20, 20, 60, 40);
        const r2 = new Rectangle(100, 100, 20, 20);
        const r3 = new Rectangle(200, 150, 50, 50);
        this.actors.push(new Circle(300, 300, 50), new Circle(400, 200, 30), new Circle(500, 100, 40));
        this.actors.push(r1, r2, r3);
        this.actors.push(new Tree(50, 250, 100));
        this.actors.push(new Tree(150, 500, 100));
    }
    update(deltaTime) {
        console.log("update:", deltaTime);
        this.actors.forEach((actor) => actor.move(deltaTime));
    }
    render(ctx) {
        this.actors.forEach((actor) => actor.render(ctx));
    }
}
const game = new MyGame();
const framework = new GameFramework(game, 800, 600);
framework.start();
console.log("test");
