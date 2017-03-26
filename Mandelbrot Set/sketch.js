var x0;
var y0;

var x;
var y;

var interation;
var maxIteration = 1000;

var i = 0;

var mandelbrot = true;

function setup() {

  createCanvas(700, 600);

}


function draw() {
    //for(var i = 0; i < width; i++){
     loadPixels();
      for(var j = 0; j < height; j++){
        if(j < height / 2 && i < width / 2){
          x0 = map(i, 0, width/2, -2.7, 1.7);
          y0 = map(j, 0, height/2, -2.0, 2.0);
          cx = x0;
          cy = y0;
          maxIteration = 100;
        }else if(j >= height / 2 && i < width / 2){
          x0 = map(i, 0, width/2, -2.2, 2.2);
          y0 = map(j, height/2, height, -2.0, 2.0);
          cx = -0.8;
          cy = -0.2321;
          maxIteration = 100;
        }else if(j < height / 2 && i >= width / 2){
          x0 = map(i, width/2, width, -2.2, 2.2);
          y0 = map(j, 0, height / 2, -2.0, 2.0);
          cx = 0;
          cy = -0.8;
          maxIteration = 100;
        }else{
          x0 = map(i, width/2, width, -2.2, 2.2);
          y0 = map(j, height/2, height, -2.0, 2.0);
          cx = -0.74543;
          cy = +0.11301;
          maxIteration = 1000;
        }

        x = x0;
        y = y0;

        iteration = 0;

        while (iteration < maxIteration) {
          var aa = x * x - y * y;
          var bb = 2 * x * y;
          x = aa + cx;
          y = bb + cy;
          if (x * x + y * y > 16) {
            break;
          }

          iteration++;
        }

        var index = (i + j * width)*4;

        var  brillo = map(iteration, 0, maxIteration, 0, 1);
        brillo = map(sqrt(brillo), 0, 1, 0, 230);

        if (iteration == maxIteration) {
          brillo = 0;
        }

        pixels[index + 0] = 20;
        pixels[index + 1] = 20;
        pixels[index + 2] = 127;
        pixels[index + 3] = 25+brillo;
      }
      updatePixels();
      //}
    i++;

    if(i == width){
      i = 0;
      noLoop();
    }

}
