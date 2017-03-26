var r = 150; //Radio

var cant = 200;

var w;

var punto;

var flecha;

var centro;

var times = 2.0;

var slideT;
var valT;
var slideC;
var valC;

function setup() {
  createCanvas(400, 400);

  centro = createVector(width/2, height/2);

  w = TWO_PI / cant;

  slideT = createSlider(10, 200, times*10);
  slideT.position(20, 420);

  valT = createElement("h3", "-");
  valT.position(170, 400);

  slideC = createSlider(10, cant*2, cant);
  slideC.position(20, 440);

  valC = createElement("h3", "-");
  valC.position(170, 420);

  punto = new Array(cant);

  for (var i = 0; i < cant; i++) {
    flecha = p5.Vector.fromAngle(i*w + PI);
    flecha.normalize();
    flecha.mult(r);

    punto[i] = new Punto(centro.x + flecha.x, centro.y + flecha.y, i);
  }

}

function draw(){
  background(51);

  stroke(0);
  noFill();
  strokeWeight(1);
  ellipse(centro.x, centro.y, r*2, r*2);

  times = slideT.value()/10;
  valT.html(times);

  var nV = slideC.value();
  valC.html(nV);

  if(nV != cant){
    redefinir(nV);
    cant = nV;
  }

  fill(255);

  for (var i = 0; i < punto.length; i++) {
    //punto[i].mostrar();
    punto[i].linea(punto, cant);
  }

}


function redefinir(nC){

  w = TWO_PI / nC;

  punto = new Array;

  for (var i = 0; i < nC; i++) {
    flecha = p5.Vector.fromAngle(i*w + PI);
    flecha.normalize();
    flecha.mult(r);

    punto[i] = new Punto(centro.x + flecha.x, centro.y + flecha.y, i);
  }

}
