var cols = 9;
var rows = 9;

var grid;

var w;

var cambios;

var input;
var texto;

var arranco = false;

var empezar;

function setup() {
  createCanvas(603, 603);

  texto = createElement('h2', 'Numero:');
  texto.position(20, 590);

  empezar = createButton("Empezar");
  empezar.position(200, 620);
  empezar.mousePressed(arrancar);

  w = floor(width/cols);

  grid = new Array(cols);

  for(var i = 0; i < cols; i++){
    grid[i] = new Array(rows);
  }

  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j] = new Spot(i, j);
    }
  }

  /*
  grid[0][1].numero = 6;
  grid[0][3].numero = 1;
  grid[0][5].numero = 4;
  grid[0][7].numero = 5;

  grid[1][2].numero = 8;
  grid[1][3].numero = 3;
  grid[1][5].numero = 5;
  grid[1][6].numero = 6;

  grid[2][0].numero = 2;
  grid[2][8].numero = 1;

  grid[3][0].numero = 8;
  grid[3][3].numero = 4;
  grid[3][5].numero = 7;
  grid[3][8].numero = 6;

  grid[4][2].numero = 6;
  grid[4][6].numero = 3;

  grid[5][0].numero = 7;
  grid[5][3].numero = 9;
  grid[5][5].numero = 1;
  grid[5][8].numero = 4;

  grid[6][0].numero = 5;
  grid[6][8].numero = 2;

  grid[7][2].numero = 7;
  grid[7][3].numero = 2;
  grid[7][5].numero = 6;
  grid[7][6].numero = 9;

  grid[8][1].numero = 4;
  grid[8][3].numero = 5;
  grid[8][5].numero = 8;
  grid[8][7].numero = 7;
  */

  background(51);

  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j].mostrar();
    }
  }

}

function draw() {

  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j].show();
    }
  }

  noFill();
  stroke(255);

  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
        if(i == 3 || i == 6 || i == 9)strokeWeight(4);
        else strokeWeight(1);
        line(i*w, j*w, i*w, j*w + w);
        if(j == 3 || j == 6 || j == 9)strokeWeight(4);
        else strokeWeight(1);
        line(i*w, j*w, i*w + w, j*w);
    }
  }

  if(arranco){
    do{
      resolver();
    }while(cambios);

    termino = true;
    for(var i = 0; i < cols; i++){
      for(var j = 0; j < rows; j++){
        termino = (grid[i][j].numero != -1) && termino;
      }
    }

    console.log("Frame");

    if(termino){
      noLoop();
      console.log("Listo");
      arranco = false;
      for(var i = 0; i < cols; i++){
        for(var j = 0; j < rows; j++){
          grid[i][j].show();
        }
      }
    }else if(!cambios){
      console.log("No se puede");
      arranco = false;
    }

  }else{
    if(mouseIsPressed && mouseAdentro() && keyIsPressed && keyCode > 48 && keyCode < 58){
      var i = floor(mouseX / w);
      var j = floor(mouseY / w);
      grid[j][i].numero = keyCode-48;
      grid[j][i].mostrar();
    }else if(mouseIsPressed && keyIsPressed && keyCode == 48 && mouseAdentro()){
      var i = floor(mouseX / w);
      var j = floor(mouseY / w);
      grid[j][i].numero = -1;
      fill(51);
      rect(i*w, j*w, w, w);
    }
  }



}

function resolver(){
  cambios = false;

  for(var i = 0; i < cols; i++){
    for(var j = 0; j < rows; j++){
      grid[i][j].comprobar();
    }
  }

  if(!cambios){
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        terminarCua(i, j);
      }
    }
  }

  if(!cambios){
    for(var i = 0; i < 9; i++){
      terminarFil(i);
    }
  }

  if(!cambios){
    for(var i = 0; i < 9; i++){
      terminarCol(i);
    }
  }
}

function mouseAdentro(){
  return (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height);
}

function arrancar(){
  arranco = true;
}
