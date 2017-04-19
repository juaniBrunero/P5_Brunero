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
      txt +=               abs(t[i].x) + "x^" + t[i].y + " ";
    }else if(t[i].x != 0){
      txt += signo(t[i]) + abs(t[i].x) + "x^" + t[i].y + " ";
    }
  }
  noStroke();
  fill(255);
  textSize(20);
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
  return pol;
}
