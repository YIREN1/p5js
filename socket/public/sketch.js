let socket;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0, 50);
  socket = io.connect('http://localhost:3001/');
  const r = random(75, 200);
  const g = random(75, 200);
  const b = random(75, 200);

  socket.on('mouse', (data) => {
    console.log("Got: " + data.x + " " + data.y);
    // Draw a blue circle
    
    fill(r, g, b);
    noStroke();
    ellipse(data.x, data.y, 20, 20);
  });
}

function draw() {
  
}

function mouseDragged() {
  fill(255);
  noStroke();
  ellipse(mouseX,mouseY,20,20);

  sendmouse(mouseX,mouseY);
}

function sendmouse(x, y) {
  console.log("sendmouse: " + x + " " + y);
  
  // Make a little object with  and y
  var data = {
    x: x,
    y: y
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}