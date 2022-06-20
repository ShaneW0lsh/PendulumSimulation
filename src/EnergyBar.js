class EnergyBar { 
    constructor(X, Y, W, H, kColor, pColor, K, P) { 
        this.X = X, this.Y = Y;
        this.W = W, this.H = H;
        this.color = createVector(kColor, pColor);
        this.K = K, this.P = P;
    }
    
    update(K, P) { 
        this.K = K;
        this.P = P;
    }

    show() {
        let kineticW = this.K / (this.K + this.P) * this.W,
            potentialW = this.P / (this.K + this.P) * this.W;

        push();
        noStroke();

        push();
        drawingContext.shadowColor = color(this.color.x);
        fill(this.color.x);
        rect(this.X, this.Y, kineticW, this.H);
        pop();

        push();
        drawingContext.shadowColor = color(this.color.y);
        fill(this.color.y);
        rect(this.X + kineticW, this.Y, potentialW, this.H);
        pop();

        pop();
    }
}
