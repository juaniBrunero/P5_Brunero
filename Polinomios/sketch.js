var pol1;
var pol2;
var pol3;

function setup() {
  createCanvas(600, 600);

  background(51);

  pol1 = new Polinomio();
  for (var i = 0; i < 4; i++) {
    pol1.agregar(2, 5-i);
  }

  pol2 = new Polinomio();
  for (var i = 0; i < 4; i++) {
    pol2.agregar(-2, 5-i);
  }

  pol3 = new Polinomio();
  pol3 = suma(pol1, pol2);

  pol1.mostrar(20, 20);
  pol2.mostrar(20, 50);
  pol3.mostrar(20, 80);
}
