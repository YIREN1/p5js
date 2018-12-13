class Firework {

  constructor(x, y) {
    this.firework = new Particle(random(width), height, true);
    this.particles = [];
  }
  show() {
    if (this.firework) {
      this.firework.show();
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }

  done() {
    return this.particles.length === 0 && !this.firework;
  }
  explode() {
    if (random(1) < 0.7) {
      for (var i = 0; i < random(65, 90); i++) {
          this.particles.push(new Particle(this.firework.pos.x, this.firework.pos.y, false));
      }
  } else {
      // this turns out to be about 97 points...
      for (var t = 0; t <= TWO_PI; t += 0.065) {
          var x = (16 * pow(sin(t), 3)) * -1;
          var y = (13 * cos(t) - 5 * cos(t * 2) - 2 * cos(t * 3) - cos(t * 4)) * -1
          this.particles.push(new Particle(x, y, false, true, this.firework.pos.x, this.firework.pos.y));
      }
  }
  }

  update() {
    if (this.firework) {
      this.firework.applyForce(grav);
      this.firework.applyForce(wind);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.explode();
        this.firework = null;
      }
    }
    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(grav);
      this.particles[i].applyForce(wind);
      this.particles[i].update();
      
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }

  }



}