let blob;
let blobs = [];
let zoom = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blob = new Blob(0, 0, 32);
  for (var i = 0; i < 200; i++) {
    var x = random(-2 * width, 2 * width);
    var y = random(-2 * height, 2 * height);
    blobs[i] = new Blob(x, y, 16, true);
  }
}

function draw() {
  background(243, 251, 255);
  translate(width / 2, height / 2);
  const newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x, -blob.pos.y);
  blob.show();
  blob.update();
  for (var i = blobs.length - 1; i >= 0; i--) {
    blobs[i].show();
    if (blob.eats(blobs[i])) {
      blobs.splice(i, 1);
    }
  }
}
