function Punto(x, y, i) {

  this.x = x;
  this.y = y;
  this.i = i;

  this.mostrar = function(){
    stroke(255);
    strokeWeight(4);
    point(this.x, this.y);
  }

  this.linea = function(punto, c){

    var indice = floor((this.i * times) % c);

    strokeWeight(1);
    line(this.x, this.y, punto[indice].x, punto[indice].y);

  }

}
