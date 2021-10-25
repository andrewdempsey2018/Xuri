import k from "./kaboom.js"

loadSprite("pickup", "./assets/sprites/pickup.png");

class pickup {

    constructor(xPos, yPos, speed) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.speed = speed;

        this.spr = k.add([
            sprite("pickup"),
            area(),
            pos(this.xPos, this.yPos)
        ]);
    }

    move() {
        this.spr.move(this.speed, 10);
    };
}

export default pickup;