var pendulum;
const g = 1;

function setup() { 
    createCanvas(1900, 925);

    fill(243, 179, 117); 
    stroke(243, 179, 117);
    strokeWeight(10);

    pendulum = new Pendulum(createVector(width/2, height/8), 1, 600, 0);
}

function draw() { 
    background(33, 33, 46);

    drawingContext.shadowBlur = 16;
    drawingContext.shadowColor = color(243, 179, 117);

    pendulum.update();
    pendulum.show();
}
