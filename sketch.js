function setup() {
createCanvas(700,500); background('grey');
}


function draw() {
if(mouseIsPressed) { fill('pink'); }
else { fill('purple'); }
ellipse(mouseX, mouseY, 80,80);
}