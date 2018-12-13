var bird;
var pipes = [];
var score = 0;
var fontsize = 40;
var mic;
var birdSprite;
var song;

// add limit to the hole
// color
// 

function preload() {
  // pipeBodySprite = loadImage('graphics/pipe_marshmallow_fix.png');
  // pipePeakSprite = loadImage('graphics/pipe_marshmallow_fix.png');
  birdSprite = loadImage('graphics/See_No_Evil_Monkey_Emoji.png');
  bgImg = loadImage('graphics/background.png');
  song = loadSound('./One.mp3');
}

function setup() {
  createCanvas(430, 600);
  mic = new p5.AudioIn();
  mic.start();
  bird = new Bird();
  pipes.push(new Pipe());
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  song.play();
}

function draw() {
  background(0);
  image(bgImg, 0, 0, width, height);
  fill(230, 230, 250);
  text(score, width / 2, 150);

  var vol = mic.getLevel();

  if (vol >= 0.20 && vol <= 0.22) {
    // bird.up();
  } else {}

  if (frameCount % 100 == 0) { // 
    pipes.push(new Pipe());
  } else {}

  for (var i = 0; i < pipes.length; i++) {
    

    if (pipes[i].hit(bird)) {
      score--;
    }
    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
      score++;
    }  
    pipes[i].show();
    pipes[i].update();
  }

  bird.show();
  bird.update();
  fill(0, 0, 255);
  var yVol = map(vol, 0, 1, height, 0);
  rect(width - 30, yVol, 30, height - yVol);
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
  } else {

  }
}

function mouseClicked() {
  bird.up();
}

