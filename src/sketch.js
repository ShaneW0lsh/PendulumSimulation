var pendulum, bar;
var mechanicEnergy;
var pulse = 0.0;
const g = 0.8;

function setup() { 
    createCanvas(1900, 925);

    stroke(255, 255, 255);
    fill(255, 255, 255);
    textSize(35);
    drawingContext.shadowColor = color(255, 255, 255);

    pendulum = new Pendulum(createVector(width/2, height/4), 3, 475, PI/8);
    bar = new EnergyBar(0, 60, 20, color(243, 179, 117), color(0, 0, 0), 3, 2);
}

function draw() { 
    background(33, 33, 46);

    drawingContext.shadowBlur = sin(pulse) * 7 + 11;
    pulse += 0.09;

    pendulum.update();

    mechanicEnergy = pendulum.getEnergy();
    //bar.show();

    rect(120, height-150, 30, -int(mechanicEnergy.x));
    rect(160, height-150, 30, -int(mechanicEnergy.y));
    text("K", 120, height-118);
    text("P", 160, height-118);

    push();
    fill(243, 179, 117); 
    stroke(243, 179, 117);
    strokeWeight(10);
    drawingContext.shadowBlur = sin(pulse) * 12 + 17;
    drawingContext.shadowColor = color(243, 179, 117);
    pendulum.show();
    pop();
}
