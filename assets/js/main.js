import k from "./kaboom.js"
import pickup from "./pickup.js"
import bullet from "./bullet.js"

loadSprite("ship", "./assets/sprites/ship.png");
loadSprite("enemy", "./assets/sprites/enemy.png");

const SHIP_SPEED = 300;

const ship = add([
    sprite("ship"),
    area(),
    pos(400, 300),
    "ship"
]);

loadSound("shoot", "./assets/sfx/shoot.wav");
loadSound("explosion", "./assets/sfx/explosion.wav");

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

//shoot

let bullets = new Set();

keyPress("z", () => {
    bullets.add(new bullet(ship.screenPos().x, ship.screenPos().y, 900));
    console.log("boom");
    play("shoot");
});

//enemys
const ENEMY_SPEED = 50;
let enemySpeedX = 10;

const enemy = add([
    sprite("enemy"),
    area(),
    pos(700, 550),
    "enemy"
]);

let colls = new Set();

for (let i = 0; i < 4; i++) {
    colls.add(new pickup(rand(0, 700), rand(0, 500), rand(10, 530)));
};

collides("bullet", "enemy", (enemy) => {
    play("explosion");
    enemy.moveTo(rand(40, 700), 60);
});

collides("bullet", "pickup", (bullet, pickup) => {
    play("explosion");
    bullet.moveTo(1500, 1500);
    pickup.moveTo(2500, 1500);
});


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

    bullets.forEach(bullet => {
        bullet.move();
    });



});



