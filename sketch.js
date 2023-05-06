function setup() {
  createCanvas(800, 800);
  background("green")
}
function draw() {
  fill("black");
  //console.log(mouseIsPressed);
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 20);
  }
}