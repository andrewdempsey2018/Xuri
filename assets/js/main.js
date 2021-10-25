import k from "./kaboom.js"
import pickup from "./pickup.js"

loadSprite("ship", "./assets/sprites/ship.png");
loadSprite("enemy", "./assets/sprites/enemy.png");

const SHIP_SPEED = 300;

const ship = add([
    sprite("ship"),
    area(),
    pos(400, 300),
]);



// controls
keyDown("up", () => {
    ship.move(0, -SHIP_SPEED);
});

keyDown("down", () => {
    ship.move(0, SHIP_SPEED);
});

keyDown("left", () => {
    ship.move(-SHIP_SPEED, 0);
});

keyDown("right", () => {
    ship.move(SHIP_SPEED, 0);
});

//enemys
const ENEMY_SPEED = 250;
let enemySpeedX = 10;

const enemy = add([
    sprite("enemy"),
    area(),
    pos(700, 550),
]);

let colls = new Set();

for (let i = 0; i < 200; i++) {
    colls.add(new pickup(rand(0, 700), rand(0, 500), rand(10, 530)));
}

action(() => {
    enemy.move(enemySpeedX, -ENEMY_SPEED);
    enemySpeedX += 10;

    if (enemy.screenPos().y <= -40) {
        enemy.moveTo(rand(40, 700), 600);

        enemySpeedX = 10;
    }

    if (enemy.screenPos().x >= 800) {

        enemySpeedX = enemySpeedX * -1;
    }

    colls.forEach(coll => {
        coll.move();
        
    });
    
});



