var master;
var nMaster;

var botTrian;
var botCua;
var botEsp;
var botKoch;
var botEe;

var generation;

var tocado = 0;

function setup() {
  createCanvas(600, 600);

  frameRate(1);

  master = new Array();

  botTrian = createButton("Triangulo de Sierpinski.  G = 6");
  botTrian.position(20, 620);
  botTrian.mousePressed(arrancarT);

  botCua = createButton("Cuadrado.  G = 5");
  botCua.position(20, 645);
  botCua.mousePressed(arrancarC);

  botEsp = createButton("Alfombra de Sierpinski.  G = 4");
  botEsp.position(20, 670);
  botEsp.mousePressed(arrancarE);

  botKoch = createButton("Curva de Koch.  G = 5");
  botKoch.position(250, 620);
  botKoch.mousePressed(arrancarK);

  botEe = createButton("E.  G = 5");
  botEe.position(250, 645);
  botEe.mousePressed(arrancarEe);

}

function draw(){
  background(51);

  for (var i = 0; i < master.length; i++) {
    master[i].mostrar();
  }

  switch(tocado){
    case 1:
      animarTriangulo();
    break;
    case 2:
      animarCuadrado();
    break;
    case 3:
      animarEsponja();
    break;
    case 4:
      animarKoch();
    break;
    case 5:
      animarE();
    break;
  }

}

function arrancarT(){
  definirTriangulo();
  tocado = 1;
  generation = 6;
}

function arrancarC(){
  definirCuadrado();
  tocado = 2;
  generation = 5;
}

function arrancarE(){
  definirEsponja();
  tocado = 3;
  generation = 4;
}

function arrancarK(){
  definirKoch();
  tocado = 4;
  generation = 5;
}

function arrancarEe(){
  definirE();
  tocado = 5;
  generation = 5;
}
