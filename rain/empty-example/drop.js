function Drop() {
    this.x = random(width);
    this.y = random(-500, -100);
    this.dist = random(0, 20);
    this.yspeed = map(this.dist, 0, 20, 1, 6);
    this.length = map(this.dist, 0, 20, 5, 15);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    

    this.getColor = function() {
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
    }

    this.fall = function() {
        this.y = this.y + this.yspeed;
        var gravity = map(this.dist, 0, 20, 0, 0.15);
        this.yspeed += gravity;
        if (this.y > height) {
            this.y = random(-200, -100);
            this.yspeed = map(this.dist, 0, 20, 4, 10);
            this.getColor();
        }
 }

    this.show = function() {
        var thick = map(this.dist, 0, 20, 1, 3);
        strokeWeight(thick);
        stroke(this.r, this.g, this.b);
        // stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.length);
    }

}

