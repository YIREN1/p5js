function Bird() {
  this.y = height / 2;
  this.x = 25;
  this.grav = 0.6;
  this.velo = 0;
  this.acce = -16;

  this.icon = birdSprite;
  this.width = 32;
  this.height = 32;

  this.show = function() {
    fill(255);
    // ellipse(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
    image(this.icon, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
  }

  this.up = function() {
    this.velo += this.acce;
  }

  this.update = function() {
    this.velo += this.grav;
    this.velo *= 0.9;
    this.y += this.velo;


    if (this.y > height) {
      this.y = height;
      this.velo = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velo = 0;
    }
  }
}
