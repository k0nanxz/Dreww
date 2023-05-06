function setup() {
    createCanvas(700, 400);
    background("green")
  }
  function draw() {
    fill("black");
    //console.log(mouseIsPressed);
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }