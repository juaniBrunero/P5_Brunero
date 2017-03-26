var punto;

var distancia = 10;

var cant = 30;

function setup() {
  createCanvas(600, 400);

  punto = new Array(cant);

  for (var i = 0; i < punto.length; i++) {
    punto[i] = new Punto();
  }

  background(51);
}

function draw() {

  for (var i = punto.length-1; i > 0; i--) {
    punto[i].mover();
    for (var j = punto.length-1; j > 0; j--) {
      if(i != j){
        punto[i].tocar(punto[j]);
      }
    }
    if(punto[i].c == 0 || punto[i].l == 0){
      punto.splice(i, 1);
    }
  }

}
