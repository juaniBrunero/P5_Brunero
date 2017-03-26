function Objeto(x, y){
  this.x = x;
  this.y = y;
  this.gen = floor(random(124, 125));
  this.fit = 0;

}

Objeto.prototype.mostrar = function(){

  fill(this.gen);
  ellipse(this.x, this.y, 8, 8);

}

Objeto.prototype.fitness = function(val){
  return abs(val - this.gen);
}
