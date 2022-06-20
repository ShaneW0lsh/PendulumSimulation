class Pendulum { 
    constructor(startPoint, mass, armLength, angle) {
        this.startPoint = startPoint; // is a coordinate {x, y}
        this.mass = mass;
        this.armLength = armLength;
        this.angle = angle;
        this.angleV = 0.0;
        this.damping = 1;//0.9995;      {kinetic, potential}
        this.mechanicEnergy = createVector(0, mass * g * (armLength - armLength * sin(angle)));
    }

    update() { 
        let angleAcc = cos(this.angle) * g / (this.armLength);
        this.angleV += angleAcc;
        this.angleV *= this.damping;
        this.angle += this.angleV;

        let linearVelocity = this.angleV * this.armLength;
        this.mechanicEnergy = createVector(this.mass * linearVelocity * linearVelocity / 2,
                                        this.mass * g * (this.armLength - this.armLength * sin(this.angle)));
    }

    show() { 
        let endPoint = createVector(this.armLength * cos(this.angle), 
                                    this.armLength * sin(this.angle));
        let SX = this.startPoint.x, SY = this.startPoint.y;
        let EX = SX + endPoint.x, EY = SY + endPoint.y;

        line(SX, SY, EX, EY);
        push()
        noStroke();
        circle(EX, EY, 90);
        pop();
    }

    getEnergy() { 
        return this.mechanicEnergy;
    }
}
