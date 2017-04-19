var pol1;
var pol2;
var pol3;

function setup() {
  createCanvas(600, 600);

  background(51);

  fill(255);
  noStroke();
  textSize(20);

  pol1 = new Polinomio();
  for (var i = 0; i < 4; i++) {
    pol1.agregar(2, 5-i);
  }

  pol2 = new Polinomio();
  for (var i = 0; i < 4; i++) {
    pol2.agregar(-2, 3-i);
  }

  text("Pol1", 10, 80);
  pol1.mostrar(100,  80);

  text("Pol2", 10, 110);
  pol2.mostrar(100, 110);

  pol3 = new Polinomio();
  pol3 = suma(pol1, pol2);

  text("Sum", 10, 140);
  pol3.mostrar(100, 140);

  pol3 = escalar(pol3, 2);

  text("Escalar", 10, 170);
  pol3.mostrar(100, 170);
}
