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
