// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

let s;
let scl = 20;
let food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function mousePressed() {
    s.total++;
}

function checkGameStatus() {
    if (
        xCor[xCor.length - 1] > width ||
        xCor[xCor.length - 1] < 0 ||
        yCor[yCor.length - 1] > height ||
        yCor[yCor.length - 1] < 0 ||
        checkSnakeCollision()
    ) {
        noLoop();
        const scoreVal = parseInt(scoreElem.html().substring(8));
        scoreElem.html('Game ended! Your score was : ' + scoreVal);
    }
}

function draw() {
    background(51);
    if (s.eat(food)) {
        pickLocation();
    }
    s.death();
    s.update();
    s.show();
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1, 0);
    }
}