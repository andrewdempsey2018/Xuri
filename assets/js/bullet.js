import k from "./kaboom.js"

loadSprite("bullet", "./assets/sprites/bullet.png");

class bullet {

    constructor(xPos, yPos, speed) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.speed = speed;

        this.spr = k.add([
            sprite("bullet"),
            area(),
            pos(this.xPos, this.yPos)
        ]);
    }

    move() {
        this.spr.move(this.speed, 0);
    };
}

export default bullet;