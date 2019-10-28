function setup() {
  createCanvas(710, 400);
  background(132, 163, 225); 
}

function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY); 
  {fill(204, 179, 255)};
}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed); 
  ellipse(x, y, speed, speed);
}