let x = 100,
    y = 100,
    angle1 = 0.0,
    segLength = 40;

function setup() {
    createCanvas(710, 400);
    strokeWeight(20.30);
    stroke(51, 255, 51, 100);
}

function draw() {
    background(153, 0, 153);

    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - cos(angle1) * segLength;
    y = mouseY - sin(angle1) * segLength;

    segment(x, y, angle1);
    ellipse(x, y, 30, 30);
}

function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, segLength, 0);
    pop();
}