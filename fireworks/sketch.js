const fireworks = [];
let grav;
let wind;

function setup() {
  createCanvas(windowWidth,windowHeight);
  // const song = loadSound('longfirework.mp3', () => song.play());
  stroke(255);
  strokeWeight(4);
  grav = createVector(0, 0.2);
  wind = createVector(0, 0);
  // frameRate(10);
}

function draw() {
  background(0, 50);
  if (random(1) < 0.04) {
    fireworks.push(new Firework());
  }
  fireworks.map(firework => {
    firework.update();
    firework.show();
  });
  fireworks.filter(firework => !firework.done());

}