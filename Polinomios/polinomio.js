function Termino(c, e){
  this.coef = c;
  this.expo = e;
}

Termino.prototype.obtCoef = function(){
  return this.coef;
}

Termino.prototype.obtExpo = function(){
  return this.expo;
}

Termino.prototype.vectorizado = function(){
  return createVector(this.coef, this.expo);
}

function Polinomio(){
  this.terminos = [];
}

Polinomio.prototype.agregar = function (coef, expo) {
  this.terminos.push(new Termino(coef, expo));
}

Polinomio.prototype.ordenar = function(){
  for (var i = 0; i < this.terminos.length-1; i++) {
    for (var j = i+1; j < this.terminos.length; j++) {
      if(this.terminos[i].obtExpo() < this.terminos[j].obtExpo()){
        var temp = this.terminos[j];
        this.terminos[j] = this.terminos[i];
        this.terminos[i] = temp;
      }
    }
  }
}

Polinomio.prototype.lista = function () {
  var ar = [];
  this.ordenar();
  for (var i = 0; i < this.terminos.length; i++) {
    ar.push(this.terminos[i].vectorizado());
  }
  return ar;
}

Polinomio.prototype.mostrar = function(posX, posY){
  var t = this.lista();
  var txt = "";
  for (var i = 0; i < t.length; i++) {
    if(i == 0 && t[i].x > 0){
      txt +=               abs(t[i].x) + "x^" + t[i].y;
    }else if(t[i].y != 0 && t[i].x != 0){
      txt += signo(t[i]) + abs(t[i].x) + "x^" + t[i].y;
    }else if(t[i].y == 0){
      txt += signo(t[i]) + abs(t[i].x);
    }
  }
  text(txt, posX, posY);
}

function signo(a){
  if(a.x > 0){
    return " + "
  }else if(a.x < 0){
    return " - "
  }else{
    return ""
  }
}

function suma(a, b){
  var pol = new Polinomio();
  var liA = a.lista();
  var liB = b.lista();
  var i = 0;
  var j = 0;
  while(i < liA.length && j < liB.length){
    if(liA[i].y == liB[j].y){
      pol.agregar(liA[i].x + liB[j].x, liA[i].y);
      i++;
      j++;
    }else if(liA[i].y > liB[j].y){
      pol.agregar(liA[i].x, liA[i].y);
      i++;
    }else if(liA[i].y < liB[j].y){
      pol.agregar(liB[j].x, liB[j].y);
      j++;
    }
  }
  while(i < liA.length){
    pol.agregar(liA[i].x, liA[i].y);
    i++;
  }
  while(j < liB.length){
    pol.agregar(liB[j].x, liB[j].y);
    j++;
  }
  return pol;
}

function escalar(a, es){
  var pol = new Polinomio();
  var liP = a.lista();
  for (var i = 0; i < liP.length; i++) {
    pol.agregar(liP[i].x * es, liP[i].y);
  }
  return pol;
}
