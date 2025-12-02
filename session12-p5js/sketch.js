let xPos = 31
let speed = 5

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  
}

function draw() {
  background(100);
      rect(88, 88, 100, 100);
  if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);

    fill(r, g, b);
    rect(mouseX, mouseY, 100, 100);
    
  }
   circle(200, 300, 100, 100);
  if (mouseIsPressed) {
    r = random(250);
    b = random(250);

    fill(r, g, b);
    circle(mouseX, mouseY, 100, 100);
}
  triangle(30, 75, 58, 20, 190, 275);
  if (mouseIsPressed) {
    r = random(200);

    fill(r, g, b);
    quad(mouseX, mouseY, 100, 100);
  }

triangle(230, 275, 58, 20, 390, 175);
  if (mouseIsPressed) {
    r = random(200);
    g = random(200);
    b = random(200);
    strokeWeight(0)

    fill(r, g, b);
    quad(mouseX, mouseY, 100, 100);
  }
  circle (xPos, height/2, 60)

  if(xPos > width - 30 || xPos <30){
    speed *= -1
  }
  xPos += speed
}