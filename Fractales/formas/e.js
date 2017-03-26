function Es(x, y, w, d){
  this.x = x;
  this.y = y;
  this.w = w;
  this.d = d;

  this.mostrar = function(){
    fill(255);
    noStroke();
    if(this.d == 0 || this.d == 2){
      rect(x, y, 2*w, 4*w);
    }else{
      rect(x, y, 4*w, 2*w);
    }
  }

  this.dividir = function(arr){
    switch(this.d){
    case 0:
      var c1 = new Es(x    , y + w    , w/2, this.d);
      var c2 = new Es(x    , y        , w/2, (this.d+1) % 4);
      var c3 = new Es(x + w, y + 1.5*w, w/4, (this.d+2) % 4);
      var c4 = new Es(x    , y + 3*w  , w/2, (this.d+3) % 4);
    break;
    case 1:
      var c1 = new Es(x + w   , y    , w/2, this.d);
      var c2 = new Es(x +3*w  , y    , w/2, (this.d+1) % 4);
      var c3 = new Es(x +1.5*w, y + w, w/4, (this.d+2) % 4);
      var c4 = new Es(x       , y    , w/2, (this.d+3) % 4);
    break;
    case 2:
      var c1 = new Es(x + w   , y + w    , w/2, this.d);
      var c2 = new Es(x       , y        , w/2, (this.d+3) % 4);
      var c3 = new Es(x +0.5*w, y + 1.5*w, w/4, (this.d+2) % 4);
      var c4 = new Es(x       , y + 3*w  , w/2, (this.d+1) % 4);
    break;
    case 3:
      var c1 = new Es(x + w   , y + w   , w/2, this.d);
      var c2 = new Es(x       , y       , w/2, (this.d+1) % 4);
      var c3 = new Es(x +1.5*w, y +0.5*w, w/4, (this.d+2) % 4);
      var c4 = new Es(x +3*w  , y       , w/2, (this.d+3) % 4);
    break;
    }
    arr.push(c1);
    arr.push(c2);
    arr.push(c3);
    arr.push(c4);
  }
}

function definirE(){

  var w  = 100;

  master = new Array();

  nMaster = new Es((width-2*w)/2, 100, w, 0);

  master.push(nMaster);
}

function animarE(){
  if(generation > 0){
    var nMaster = new Array();

    for (var i = 0; i < master.length; i++) {
      master[i].dividir(nMaster);
    }

    master = concat(nMaster, nMaster);

    generation--;
  }
}
