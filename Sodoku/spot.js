function Spot(i, j) {

  this.i = i;
  this.j = j;

  this.numero = -1;

  this.puede = [true, true, true, true, true, true, true, true, true];

  this.mostrar = function(){
    fill(0);
    if(this.numero != -1)rect(this.j*w, this.i*w, w, w);
  }

  this.show = function(){
    textSize(32);
    fill(255);
    if(this.numero != -1)text(this.numero, j*w+w/3, i*w+2*w/3);
  }

  this.comprobarFila = function(i, j, num){
    var esta = false;
    for (var x = 0; x < cols; x++) {
      esta = grid[x][j].numero == num || esta;
    }
    return esta;
  }

  this.comprobarCol = function(i, j, num){
    var esta = false;
    for (var y = 0; y < rows; y++) {
      esta = grid[i][y].numero == num || esta;
    }
    return esta;
  }

  this.comprobarCua = function(i, j, num){
    var x = floor(i/3);
    var y = floor(j/3);
    var esta = false;
    for (var d = 0; d < 3; d++) {
      for (var f = 0; f < 3; f++) {
        esta = grid[x*3+d][y*3+f].numero == num || esta;
      }
    }
    return esta;
  }

  this.comprobar = function(){
    if(this.numero == -1){
      for(var num = 1; num < 10; num++){
        if(!grid[this.i][this.j].comprobarCua(this.i, this.j, num) && !grid[this.i][this.j].comprobarFila(this.i, this.j, num) && !grid[this.i][this.j].comprobarCol(this.i, this.j, num)){
          this.puede[num-1] = true;
        }else{
          this.puede[num-1] = false;
        }
      }
      var cant = 0;
      for(var num = 0; num < 9; num++){
        if(this.puede[num]){
          cant++;
        }
      }
      if(cant == 1){
        for(var num = 0; num < 9; num++){
          if(this.puede[num]){
            this.numero = num+1;
            cambios = true;
            console.log("Total");
          }
        }
      }
    }

  }

}
