var cube = [];
var value = 0;
var colorList1 = ["black", "white"];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // by defaults equals to 30
  setShakeThreshold(5);
  frameRate(60);
}

function draw() {
  background("black");
  for (var j = 0; j < value; j++) {
    cube[j].move();
    cube[j].display();
  }
}

//define the cubes
function Box(_x, _y) {
  this.s = random(0, 50);
  this.x = _x;
  this.y = _y;
  this.r = random(0.01, 0.05);
  this.color = color(random(0, 255), random(0, 255), random(0, 255), 95);
  this.speedX = 1;
  this.speedY = 1;
  var xDir = random(2, 5);
  var yDir = random(2, 5);

  //move of the cubes
  this.move = function() {
    this.x += this.speedX * xDir;
    this.y += this.speedY * yDir;
  }

  //appearence of the cubes
  this.display = function() {
    fill(this.color);
    var index = floor(random() * colorList1.length);
    var colorS = colorList1[index];
    stroke(color(colorS));
    strokeWeight(2);
    push();
    translate(this.x, this.y);
    rotateX(frameCount * this.r);
    rotateY(frameCount * this.r);
    box(this.s);
    pop();
  }
}

//define what happens when the user shakes the mobile
function deviceShaken() {
  value = value + 1;
  for (var i = 0; i < value; i++) {
      var myCube = new Box(0, 0);
      myCube.speedX = random(-1.5, 1.5);
      myCube.speedY = random(-1.5, 1.5);
      cube.push(myCube);
  }
  //if it will be over 1000 cubes, the display will reset
  if (value > 1000) {
    value = 0;
  }
}

//page won't slide when touched
function touchMoved() {
  return false;
}
