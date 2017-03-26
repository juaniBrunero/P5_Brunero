var video;

var w = 5;

function setup() {
  createCanvas(640, 480);
  //colorMode(HSB, 255);
  video = createCapture(VIDEO);
  video.size(width/w, height/w);
  video.hide();
}

function draw() {
  background(0);
  noStroke();
  video.loadPixels();
  for(var i = 0; i < video.width; i++){
    for (var j = 0; j < video.height; j++) {
      var index = (i + j * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var brillo = (r+g+b)/3;
      //fill(255-brillo, 255, 255);
      fill(255);
      rectMode(CENTER);

      var h = map(brillo, 0, 255, 0, w);

      rect(i*w+w/2, j*w+w/2, h, h);


    }
  }
}
