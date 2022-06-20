class Pendulum { 
    constructor(startPoint, mass, armLength, angle) {
        this.startPoint = startPoint; // is a coordinate {x, y}
        this.mass = mass;
        this.armLength = armLength;
        this.angle = angle;
        this.angleV = 0.0;
        this.dumping = 0.9995;
    }

    update() { 
        let angleAcc = cos(this.angle) * g / (this.armLength);
        this.angleV += angleAcc;
        this.angleV *= this.dumping;
        this.angle += this.angleV;
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
}
