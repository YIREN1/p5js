class Particle {

  constructor(x, y, isFirework, isHeart, fx, fy) {
    this.pos = createVector(x, y);
    this.acc = createVector(0, 0);
    this.isFirework = isFirework;
    this.lifetime = 255;
    this.isHeart = isHeart;
    this.fx = fx;
    this.fy = fy;
    this.r = random(75, 255);
    this.g = random(75, 255);
    this.b = random(75, 255);
    if (this.isFirework) {
      this.vel = createVector(0, random(-1.7, -3.2));
      this.acc = createVector(0, random(-11, -13.5));
    } else if (this.isHeart) {
      this.vel = createVector(0, 0);
      this.vel.mult(random(7, 20));

    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(7, 20));

    }
  }
  show() {
    if (!this.isFirework) {
      strokeWeight(3);
      stroke(this.r, this.g, this.b, this.lifetime);

    } else {
      strokeWeight(2);
      stroke(255, random(153, 255), 0);
    }
    if (this.isHeart) {
      push();
      translate(this.fx, this.fy);
      strokeWeight(2);
      point(this.pos.x, this.pos.y);
      pop();
    } else {
      point(this.pos.x, this.pos.y);
    }

  }
  update() {
    if (!this.isFirework) {
      this.vel.mult(0.9);
      this.lifetime -= 3;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done = function () {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }


}