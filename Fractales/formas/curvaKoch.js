function Koch(x, y, w, d){
  this.x = x;
  this.y = y;
  this.w = w;
  this.d = d;
  this.tocado = false;

  this.mostrar = function(){
    fill(255);
    //fill(51);
    stroke(255);
    beginShape();
    if(this.d == true){
      vertex(x , y);
      vertex(x + 2*w, y - 3*w);
      vertex(x + 4*w, y);
      vertex(x , y);
    }else{
      vertex(x , y);
      vertex(x + 2*w, y + 3*w);
      vertex(x + 4*w, y);
      vertex(x , y);
    }
    endShape();
  }

  this.dividir = function(arr){
    if(!this.tocado){
      if(this.d){
        var c1 = new Koch(x          ,y - w * 2, w/3, !this.d);
        var c2 = new Koch(x + w * 4/3,y        , w/3, !this.d);
        var c3 = new Koch(x + w * 8/3,y - w * 2, w/3, !this.d);

        var c4 = new Koch(x         ,y        , w/3, this.d);
        var c5 = new Koch(x + 8/3 *w,y        , w/3, this.d);
        var c6 = new Koch(x + w* 4/3,y - 6/3*w, w/3, this.d);

        arr.push(c1);
        arr.push(c2);
        arr.push(c3);
        arr.push(c4);
        arr.push(c5);
        arr.push(c6);
      }else{
        var c1 = new Koch(x          ,y + 2*w, w/3, !this.d);
        var c2 = new Koch(x + w * 4/3,y      , w/3, !this.d);
        var c3 = new Koch(x + w * 8/3,y + 2*w, w/3, !this.d);

        var c4 = new Koch(x          ,y        , w/3, this.d);
        var c5 = new Koch(x + w * 8/3,y        , w/3, this.d);
        var c6 = new Koch(x + w*4/3  ,y + 6/3*w, w/3, this.d);

        arr.push(c1);
        arr.push(c2);
        arr.push(c3);
        arr.push(c4);
        arr.push(c5);
        arr.push(c6);
      }

      this.tocado = true;
    }
  }
}

function definirKoch(){

  var w  = 100;

  master = new Array();

  nMaster = new Koch((width/2)-2*w, height/2-w/2 + w*3/2, w, true);

  master.push(nMaster);
}

function animarKoch(){
  if(generation > 0){
    var nMaster = new Array();

    for (var i = master.length-1; i >= 0; i--) {
      master[i].dividir(master);
    }

    //master = concat(nMaster, nMaster);

    generation--;
  }
}
