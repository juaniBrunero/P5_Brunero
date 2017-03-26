function Punto() {

  this.pos = createVector(floor(random(width/distancia))*distancia, floor(random(height/distancia))*distancia);
  this.lpos = new Array();

  this.l = 1000;
  this.c = 255;


  this.mover = function(){
    var r = floor(random(4));
    this.lpos.push(this.pos.copy());

    switch(r){
      case 0:
        this.pos.x = this.pos.x + distancia;
      break;
      case 1:
        this.pos.x = this.pos.x - distancia;
      break;
      case 2:
        this.pos.y  = this.pos.y + distancia;
      break;
      case 3:
        this.pos.y  = this.pos.y - distancia;
      break;
    }

    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);

    stroke(this.c);
    line(this.pos.x, this.pos.y, this.lpos[this.lpos.length-1].x, this.lpos[this.lpos.length-1].y);

    this.l--;
  }

  this.tocar = function(otro){
    var tocado = false;
    for (var i = 0; i < otro.lpos.length; i++) {
      tocado = otro.lpos[i].equals(this.pos);
      break;
    }
    if (tocado){
      this.c = this.c - 255/10;
      this.c = constrain(this.c, 0, 255);
    }
  }
}
