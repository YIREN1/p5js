const w = 1600;
const h = 1200;
const scl = 14;
let cols;
let rows;
let auto = false;

let flyingY = 0;
let flyingX = 0;

let terrain = [];


let bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, curImg, song;
let bgImgs = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5];
let index = 0;

function preload() {
  // bgImg1 = loadImage('./atmosphere-blue-sky-clouds-912110.jpg');
  // bgImg2 = loadImage('./agriculture-bright-clouds-440731.jpg');
  // bgImg3 = loadImage('./agriculture-arid-bright-46160.jpg');
  // bgImg4 = loadImage('./astronomy-beautiful-clouds-355465.jpg');
  // bgImg5 = loadImage('grass-wallpapers-27882-9885845.jpg');
  song = loadSound('./minecraft.mp3');
  curImg = bgImgs[0];
}

function getColor(height) {
  if (height < -40) {
    return color(20, 20, 180);
  } else if (height < 0) {
    return color(40, 150, 20);
  } else if (height < 40) {
    return color(180, 180, 20);
  } else if (height < 100) {
    return color(200, 200, 200);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = w / scl;
  rows = h / scl;
  const slider = createSlider(0, 1, 0.5, 0.01);
  createDiv('try type s')
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; // set to default 0
    }
  }
}

function buildTerrain() {
  let flyingSpeed = 0.05;
  if (keyIsDown(LEFT_ARROW)) {
    flyingX -= flyingSpeed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    flyingX += flyingSpeed;
  }

  if (keyIsDown(UP_ARROW)) {
    flyingY -= flyingSpeed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    flyingY += flyingSpeed;
  }

  if (auto) {
    flyingY -= 0.05;
  }

  let yoff = flyingY;
  for (let y = 0; y < rows; y++) {
    let xoff = flyingX;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.05;
    }
    yoff += 0.06;
  }
}

function draw() {
  buildTerrain();
  // pointLight(0xffffff, 0, -200, 0);
  // camera(0, -100, 600, 0, 0, 200, 0, 1, 0);
  // perspective(60 / 180 * PI, width / height);
  // image(curImg, 0, 0);
  background(0);
  // ambientLight(255);
  // directionalLight(255,255,255,0,-1,0);
  // ambientMaterial(255);
  // specularMaterial(0);

  // normalMaterial();

  // texture(bgImg2);
  // textureMode(NORMAL);
  orbitControl();
  translate(0, 50);
  rotateX((PI / 14) * 6);
  // noStroke();
  // stroke(255);
  // noFill();
  // fill(150,150,150, 30)
  translate(-w / 2, -h / 2);

  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    // normalMaterial();
    for (let x = 0; x < cols; x++) {
      fill(getColor(terrain[x][y]), 200);

      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}

function keyPressed() {
  // if (keyCode === UP_ARROW) {
  //   flyingY -= 0.15;
  // } else if (keyCode === DOWN_ARROW) {
  //   flyingY += 0.15;
  // } else if (keyCode === LEFT_ARROW) {
  //   flyingX -= 0.15;
  // } else if (keyCode === RIGHT_ARROW) {
  //   flyingX += 0.15;
  // }
  if (key == 's') {
    auto = !auto;
    song.isPlaying() ? song.pause() : song.play();
  }
}

function mouseClicked() {
  //   index++;
  //   if (index > 4) {
  //     index = 0;
  //   }
  //   curImg = bgImgs[index];
}