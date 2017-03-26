function Triangulo(x, y, w){
  this.x = x;
  this.y = y;
  this.w = w;

  this.mostrar = function(){
    fill(51);
    stroke(255);
    beginShape();
    vertex(x , y);
    vertex(x + 2*w, y - 3*w);
    vertex(x + 4*w, y);
    vertex(x , y);
    endShape();
  }

  this.dividir = function(arr){
    var at = new Triangulo(x      , y        , w/2);
    var dt = new Triangulo(x + 2*w, y        , w/2);
    var it = new Triangulo(x + w  , y - 3/2*w, w/2);

    arr.push(at);
    arr.push(dt);
    arr.push(it);
  }
}

function definirTriangulo(){

  var w  = 100;

  master = new Array();

  nMaster = new Triangulo((width/2)-2*w, height/2 + w*3/2, w);

  master.push(nMaster);
}

function animarTriangulo(){
  if(generation > 0){
    var nMaster = new Array();
    
    for (var i = 0; i < master.length; i++) {
      master[i].dividir(nMaster);
    }

    master = concat(nMaster, nMaster);

    generation--;
  }
}
