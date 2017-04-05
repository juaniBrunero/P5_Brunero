var pol1;
var pol2;
var pol3;

function setup() {
  pol1 = new Polinomio();
  for (var i = 0; i < 4; i++) {
    var n = new Numero(ceil(random(-4, 4)));
    pol1.cf.push(n);
  }

  pol2 = new Polinomio(1);
  for (var i = 0; i < 7; i++) {
    var n = new Numero(floor(random(-4, 4)));
    pol2.cf.push(n);
  }

  pol3 = sumarPol(pol1, pol2);

  console.log(pol1.mostrar());
  console.log(pol2.mostrar());
  console.log(pol3.mostrar());

  noLoop();
}
