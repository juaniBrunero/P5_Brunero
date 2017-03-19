var foto;
var panda;

var temp;

var edgeX;
var edgeY;
var edgeSobel;
var edgeColor;

var nueMax;
var nueMin;

var matB = [[1, 2,  1],[2, 4,  2],[1 ,  2,  1]];
var divB = 16;

var matX = [[1, 0, -1],[2, 0, -2],[1 ,  0, -1]];
var matY = [[1, 2,  1],[0, 0,  0],[-1, -2, -1]];

function preload(){
  foto  = loadImage('panda.jpg');
}

function setup() {
  createCanvas(foto.width*2, foto.height*3);

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
  } //Copio el panda el array en brillo solo

  foto.updatePixels();

  edgeX = [];
  edgeY = [];
  for (var i = 0; i < panda.length; i++) {
    edgeX[i] = [];
    edgeY[i] = [];
    for (var j = 0; j < panda[i].length; j++) {
      edgeX[i][j] = panda[i][j];
      edgeY[i][j] = panda[i][j];
    }
  }

  copiarYAplicar(edgeX, matX);

  copiarYAplicar(edgeY, matY);

  edgeSobel = sobel(edgeSobel, edgeX, edgeY);
  edgeSobel = sacarMedio(edgeSobel);

  edgeColor = colorDe(edgeColor, edgeX, edgeY);

}

function draw() {
  background(255);

  //ORIGINAL
  image(foto, 0, 0);

  //BLANCO Y NEGRO
  for (var i = 0; i < foto.width; i++) {
    for (var j = 0; j < foto.height; j++) {
      stroke(panda[i][j]);
      point(foto.width+i, j);
    }
  }

  //SOBELX
  for (var i = 1; i < foto.width-1; i++) {
    for (var j = 1; j < foto.height-1; j++) {
      stroke(edgeX[i][j]);
      point(i, foto.height+j);
    }
  }

  //SOBELY
  for (var i = 1; i < foto.width-1; i++) {
    for (var j = 1; j < foto.height-1; j++) {
      stroke(edgeY[i][j]);
      point(foto.width+i, foto.height+j);
    }
  }

  //SOBEL MODULO
  for (var i = 1; i < foto.width-1; i++) {
    for (var j = 1; j < foto.height-1; j++) {
      stroke(edgeSobel[i][j]);
      point(i, foto.height*2+j);
    }
  }

  colorMode(HSB, TWO_PI);

  //SOBEL DIRECCION
  for (var i = 1; i < foto.width-1; i++) {
    for (var j = 1; j < foto.height-1; j++) {
      stroke(edgeColor[i][j], 255, edgeSobel[i][j]);
      point(foto.width+i, foto.height*2+j);
    }
  }

  noLoop();
}

//CONVOLUCION DE MATRIX DE 3X3
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

//DEVUELVE EL MAXIMO
function maximo(m){
  var maxi = m[m.length-1][m[m.length-1].length-1];
  for (var i = 1; i < m.length-1; i++) {
    for (var j = 1; j < m[i].length-1; j++) {
      maxi = (m[i][j] > maxi)? m[i][j] : maxi;
    }
  }
  return maxi;
}

//DEVUELVE EL MINIMO
function minimo(m){
  var mini = m[1][1];
  for (var i = 1; i < m.length-1; i++) {
    for (var j = 1; j < m[i].length-1; j++) {
      mini = (m[i][j] < mini)? m[i][j] : mini;
    }
  }
  return mini;
}

//UNA CONVOLUCION
function copiarYAplicar(m, mat){
  var nueva = [];
  for (var i = 1; i < panda.length-1; i++) { //Aplica la convolucion
    nueva[i] = [];
    for (var j = 1; j < panda[i].length-1; j++) {
      nueva[i][j] = conv(m, i, j, mat);
    }
  }

  var nueMax = maximo(nueva);
  var nueMin = minimo(nueva);

  for (var i = 1; i < panda.length-1; i++) { //Copia en el array
    for (var j = 1; j < panda[i].length-1; j++) {
      m[i][j] = map(nueva[i][j], nueMax, nueMin, 0, 255);
    }
  }
}

//CALCULO DEL MODULO CON LAS COMPONENTES DEL VECTOR
function sobel(a, x, y){
  a = [];
  for (var i = 1; i < x.length-1; i++) { //Calcula la gradiente
    a[i] = [];
    for (var j = 1; j < x[i].length-1; j++) {
      a[i][j] = sqrt(x[i][j] * x[i][j] + y[i][j] * y[i][j]);
    }
  }

  var nueMax = maximo(a);
  var nueMin = minimo(a);

  for (var i = 1; i < panda.length-1; i++) { //Copia en el array
    for (var j = 1; j < panda[i].length-1; j++) {
      a[i][j] = map(a[i][j], nueMax, nueMin, 0, 255);
    }
  }

  return a;
}

//NORMALIZAR VALORES PARA LOS EXTREMOS
function sacarMedio(a){
  for (var i = 1; i < a.length-1; i++) { //Copia en el array
    for (var j = 1; j < a[i].length-1; j++) {
      a[i][j] = abs(a[i][j] - 255/2);
      a[i][j] = map(a[i][j], 0, 255/2, 0, 255);
    }
  }

  for (var i = 1; i < a.length-1; i++) { //Copia en el array
    for (var j = 1; j < a[i].length-1; j++) {
      if(a[i][j] > 120){
        a[i][j] = 255;
      }else{
        a[i][j] = 0;
      }
    }
  }
  return a;
}

//EDGE COLOR CON SOBEL
function colorDe(a, x, y){
  var a = [];
  for (var i = 1; i < x.length-1; i++) { //Copia en el array
    a[i] = [];
    for (var j = 1; j < x[i].length-1; j++) {
      a[i][j] = atan(x[i][j] / max(y[i][j], 1));
    }
  }

  var nueMax = maximo(a);
  var nueMin = minimo(a);

  for (var i = 1; i < panda.length-1; i++) { //Copia en el array
    for (var j = 1; j < panda[i].length-1; j++) {
      a[i][j] = map(a[i][j], nueMax, nueMin, 0, TWO_PI);
    }
  }
  return a;
}
