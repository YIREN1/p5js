// x = r * cos(phi) * cos(theta)
// y = r * cos(phi) * sin(theta)
// z = r * sin(phi)

// which are the equations for converting from polar to Cartesian coordinates except that we make r, theta, phi a function of a parameter beta which ranges from 0 to pi.

// For the following

// r(beta) = 0.8 + 1.6 * sin(6 * beta)
// theta(beta) = 2 * beta
// phi(beta) = 0.6 * pi * sin(12 * beta)
let angle = 0;
let vectors = [];
let beta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function drawKnot() {
  let r = 80 * (0.8 + 1.6 * sin(6 * beta));
  let theta = 2 * beta;
  let phi = 0.6 * PI * sin(12 * beta);
  let x = r * cos(phi) * cos(theta);
  let y = r * cos(phi) * sin(theta);
  let z = r * sin(phi);

  vectors.push({ x, y, z }); 
  beta += 0.005;

  noFill();
  // stroke(x, y, z);
  stroke(255);
  strokeWeight(6);
  beginShape();
  vectors.map(v => {
    let d = int(dist(v.x, v.y, v.z, 0, 0, 0));
    red = map(v.x, -100, 100, 100, 255);
    gre = map(v.y, -100, 100, 100, 255);
    stroke(red, gre, d);
    vertex(v.x, v.y, v.z);
  });
  endShape();
}

function draw() {
  background(color(0, 0, 0), 150);
  // background(0);
  rotateY(angle);
  rotateX(angle);
  rotateZ(angle);
  
  angle += 0.01;
  drawKnot();
}

