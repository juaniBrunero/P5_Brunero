var amplitude;
var level = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  amplitude = new p5.AudioIn();
  amplitude.start();
}

function draw(){
  background(0);

  level = height/1.5 * amplitude.getLevel(0);

  translate(0, height/2);
  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for (var i = 0; i < width; i++) {
    var a = level * sin(map(i, 0, width, 0, TWO_PI))
    var y = a * sin(map(i, 0, width, 0, 21 * TWO_PI));
    vertex( i, y);
  }
  endShape();
}
