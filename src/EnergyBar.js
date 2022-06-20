class EnergyBar { 
    constructor(x, y, height, kColor, pColor, K, P) { 
        this.pos = createVector(x, y);
        this.H = height;
        this.color = createVector(kColor, pColor);
        this.kineticEnergy = K;
        this.potentialEnergy = P;
    }
    
    update(K, P) { 
        this.kineticEnergy = K;
        this.potentialEnergy = P;
    }

    show() {
        let X = this.pos.x, Y = this.pos.y;
        let kineticW = this.K / (this.K + this.P),
            potentialW = this.P / (this.K + this.P);

        push();
        strokeWeight(5);
        stroke(0);
        fill(this.color.x);
        rect(X, Y, kineticW, this.H);
        fill(this.color.y);
        rect(X + kineticW, Y, potentialW, this.H);
        pop();
    }
}
