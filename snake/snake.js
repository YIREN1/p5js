class Snake {
  constructor () {
    this.xspeed = 1;
    this.yspeed = 0;
    this.body = [];
    this.body[0] = createVector(0, 0);
  }

  death = () => {
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;

    if(x > cols - 1 || x < 0 || y > rows - 1 || y < 0) {
      this.body = [];
      return true;
    }

    for (let i = 0; i < this.body.length - 1; i++) {
      var pos = this.body[i];

      if (x ===  pos.x && y === pos.y) {
        this.body = [];
        return true;
      }

      return false;
    }
  }

  update = () => {
    const head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xspeed;
    head.y += this.yspeed;
    this.body.push(head);
  }

  grow = () => {
    let head = this.body[this.body.length - 1].copy();
    this.body.push(head);
  }

  show = () => {
    fill(255);
    noStroke();
    for (let i = 0; i < this.body.length; i++) {
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }

  dir = (x, y) => {
    this.xspeed = x;
    this.yspeed = y;
  }

  eat = (pos) => {
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x === pos.x && y === pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
};