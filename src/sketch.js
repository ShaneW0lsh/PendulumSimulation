const g = 0.8;

var pendulum, bar;
var mechanicEnergy;
var pulse = 0.0;

function setup() { 
    createCanvas(1525, 925);

    noStroke();
    stroke(255, 255, 255);
    fill(255, 255, 255);
    textSize(35);
    drawingContext.shadowColor = color(255, 255, 255);

    pendulum = new Pendulum(createVector(width/2, height/4), 3, 475, PI/8);

    let kEColor = color(240, 84, 84);
    let pEColor = color(78, 116, 153);
    bar = new EnergyBar(0, 0, width, 30, kEColor, pEColor, 0, 0);
}

function draw() { 
    background(28, 33, 41);

    drawingContext.shadowBlur = sin(pulse) * 7 + 11;
    pulse += 0.09;

    pendulum.update();

    mechanicEnergy = pendulum.getEnergy();
    bar.update(mechanicEnergy.x, mechanicEnergy.y);
    bar.show();

    push();
    fill(221, 221, 221); 
    stroke(221, 221, 221);
    strokeWeight(10);
    drawingContext.shadowBlur = sin(pulse) * 12 + 17;
    drawingContext.shadowColor = color(221, 221, 221);
    pendulum.show();
    pop();
}
