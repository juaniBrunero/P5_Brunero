function Esponja(x, y, w){
  this.x = x;
  this.y = y;
  this.w = w;

  this.mostrar = function(){
    fill(255);
    noStroke();
    rect(x, y, 3*w, 3*w);
  }

  this.dividir = function(arr){
    var c1 = new Esponja(x      , y      , w/3);
    var c2 = new Esponja(x + w  , y      , w/3);
    var c3 = new Esponja(x + 2*w, y      , w/3);
    var c4 = new Esponja(x      , y + w  , w/3);
    var c5 = new Esponja(x + 2*w, y + w  , w/3);
    var c6 = new Esponja(x      , y + 2*w, w/3);
    var c7 = new Esponja(x + w  , y + 2*w, w/3);
    var c8 = new Esponja(x + 2*w, y + 2*w, w/3);

    arr.push(c1);
    arr.push(c2);
    arr.push(c3);
    arr.push(c4);
    arr.push(c5);
    arr.push(c6);
    arr.push(c7);
    arr.push(c8);
  }
}

function definirEsponja(){

  var w  = 100;

  master = new Array();

  nMaster = new Esponja(width/4, height/4, w);

  master.push(nMaster);
}

function animarEsponja(){
  if(generation > 0){
    var nMaster = new Array();

    for (var i = 0; i < master.length; i++) {
      master[i].dividir(nMaster);
    }

    master = concat(nMaster, nMaster);

    generation--;
  }
}
