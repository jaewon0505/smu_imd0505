let s;
let scl = 20;
let food;


function setup() {
    createCanvas(600, 600);
    s = new Snake();
    frameRate(13);
    pickLocation();
    scoreElem = createDiv('🌴');
    scoreElem.position(18, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(50, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(82, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(114, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(146, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(178, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(210, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(242, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(274, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(306, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(338, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(370, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(402, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(434, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(466, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(498, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(530, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(562, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(592, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 680,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 648,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 616,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 584,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 552,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 520,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 488,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 456,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 424,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 392,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 360,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 328,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 296,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 264,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 232,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 200,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 168,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 136,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 104,);
    scoreElem = createDiv('🌴');
    scoreElem.position(620, 72,);





}

function pickLocation() {
    let cols = floor(width / scl);
    let rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function checkGameStatus() {
    if (
        cols[cols.length - 1] > width ||
        cols[cols.length - 1] < 0 ||
        rows[rows.length - 1] > height ||
        rows[rows.length - 1] < 0 ||
        checkSnakeCollision()
    ) {
        noLoop();
        const scoreVal = parseInt(scoreElem.html().substring(8));
        scoreElem.html('Game ended! Your score was : ' + scoreVal);
    }
}



function draw() {
    background(255, 229, 204);
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