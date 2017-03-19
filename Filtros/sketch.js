var foto;
var panda;
var nueva;
var nuevo;

var matB = [[1, 2, 1],[2, 4, 2],[1, 2, 1]];
var divB = 16;

var matX = [[1, 0, -1],[2, 0, -2],[1, 0, -1]];

function preload(){
  foto = loadImage('panda.jpg');
}

function setup() {
  createCanvas(271*2, 186*2);

  foto.loadPixels();

  panda = new Array();
  for (var i = 0; i < foto.width; i++) {
    panda[i] = new Array();
    for (var j = 0; j < foto.height; j++) {
      var indice = (i + j * foto.width) * 4;
      var brillo = foto.pixels[indice] + foto.pixels[indice+1] + foto.pixels[indice+2];
      brillo = brillo / 3;
      panda[i][j] = brillo;
    }
  }

  foto.updatePixels();

  nueva = panda;

  nuevo = [];

  for (var i = 1; i < panda.length-1; i++) {
    nuevo[i] = [];
    for (var j = 1; j < panda[i].length-1; j++) {
      nuevo[i][j] = conv(nueva, i, j, matB, divB);
    }
  }

  swap(nuevo, nueva);

  for (var i = 1; i < panda.length-1; i++) {
    for (var j = 1; j < panda[i].length-1; j++) {
      //nuevo[i][j] = conv(nueva, i, j, matX);
    }
  }

  swap(nuevo, nueva);

}

function draw() {
  background(255);

  image(foto, 0, 0);

  for (var i = 0; i < foto.width; i++) {
    for (var j = 0; j < foto.height; j++) {
      stroke(panda[i][j]);
      point(271+i, j);
    }
  }

  for (var i = 0; i < foto.width; i++) {
    for (var j = 0; j < foto.height; j++) {
      stroke(nueva[i][j]);
      point(i, 186+j);
    }
  }

  noLoop();
}

function conv(m, x, y, mat, t=1){
  var sum = 0;
  sum += m[x-1][y-1] * mat[0][0];
  sum += m[x-1][y  ] * mat[0][1];
  sum += m[x-1][y+1] * mat[0][2];
  sum += m[x  ][y-1] * mat[1][0];
  sum += m[x  ][y  ] * mat[1][1];
  sum += m[x  ][y+1] * mat[1][2];
  sum += m[x+1][y-1] * mat[2][0];
  sum += m[x+1][y  ] * mat[2][1];
  sum += m[x+1][y+1] * mat[2][2];
  return sum/t;
}

function swap(pri, seg){
  var temp = pri;
  pri = seg;
  seg = temp;
}

function nuevoAr(a, b){
  a = new Array();
  for (var i = 0; i < b; i++) {
    a[i] = new Array();
  }
  return a;
}
