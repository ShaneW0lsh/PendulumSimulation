var pendulum;
var mechanicEnergy;
var pulse = 0.0;
const g = 1.5;

function setup() { 
    createCanvas(1900, 925);

    stroke(255, 255, 255);
    fill(255, 255, 255);
    textSize(35);
    drawingContext.shadowColor = color(255, 255, 255);

    pendulum = new Pendulum(createVector(width/3, height/4), 1, 475, PI/8);
}

function draw() { 
    background(33, 33, 46);

    drawingContext.shadowBlur = sin(pulse) * 7 + 11;
    pulse += 0.09;

    pendulum.update();

    mechanicEnergy = pendulum.getEnergy();
    let energyText = `Kinetic energy: ${int(mechanicEnergy.x)}\nPotential energy: ${int(mechanicEnergy.y)}`
    text(energyText, width/4, 55)

    push();
    fill(243, 179, 117); 
    stroke(243, 179, 117);
    strokeWeight(10);
    drawingContext.shadowBlur = sin(pulse) * 12 + 17;
    drawingContext.shadowColor = color(243, 179, 117);
    pendulum.show();
    pop();
}
