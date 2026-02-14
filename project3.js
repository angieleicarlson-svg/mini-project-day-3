let a = 10;
let b = 10;

function setup() {
  createCanvas(400, 400);
  background(255);
  fill(random(255), random(255), random(255));
  noStroke();
}

function keyPressed() {
  if (key === 'c') {
    fill(random(255), random(255), random(255));
  }
  if (key === "r") {
    background(255);
  }
  if (key === "1") { a = 5; b = 5; }
  if (key === "2") { a = 10; b = 10; }
  if (key === "3") { a = 15; b = 15; }
  if (key === "4") { a = 20; b = 20; }
  if (key === "5") { a = 25; b = 25; }
  if (key === "6") { a = 30; b = 30; }
  if (key === "7") { a = 35; b = 35; }
  if (key === "8") { a = 40; b = 40; }
  if (key === "9") { a = 45; b = 45; }
  if (key === "0") { a = 50; b = 50; }
}

function mouseDragged() {
  ellipse(mouseX, mouseY, a, b);
}

function draw() {
}
