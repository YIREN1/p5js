let snake;
const rez = 10;
let food;
let cols;
let rows;


function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  frameRate(8);
  cols = floor(width / rez);
  rows = floor(height / rez);
  foodLocation();
}

function foodLocation() {
  food = createVector(floor(random(cols)), floor(random(rows)));
}
function draw() {
  scale(rez);
  background(51);
  if (snake.eat(food)) {
    foodLocation();
  }
  
  snake.update();
  snake.show();

  if (snake.death()) {
    fill(255);
    // textAlign(CENTER, CENTER);
    print('Game Over!');
    text('Game Over!', 200, 200);
    alert('...');
    noLoop();
  }
  

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}

