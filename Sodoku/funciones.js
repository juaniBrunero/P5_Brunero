function terminarCua(d, f){

  for(var num = 0; num < 9; num++){
    var cant = 0;
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        if(grid[d*3+i][f*3+j].numero == -1  && grid[d*3+i][f*3+j].puede[num]){
          cant++;
        }
      }
    }
    if(cant == 1){
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          if(grid[d*3+i][f*3+j].numero == -1  && grid[d*3+i][f*3+j].puede[num]){
            grid[d*3+i][f*3+j].numero = num+1;
            cambios = true;
            console.log("Cuadrante");
          }
        }
      }
    }

  }

}

function terminarFil(f){
  for(var num = 0; num < 9; num++){
    var cant = 0;
    for(var i = 0; i < 9; i++){
      if(grid[f][i].numero == -1 && grid[f][i].puede[num]){
        cant++;
      }
    }
    if(cant == 1){
      for(var i = 0; i < 9; i++){
        if(grid[f][i].numero == -1 && grid[f][i].puede[num]){
          grid[f][i].numero = num+1;
          cambios = true;
          console.log("Fila");
        }
      }
    }
  }
}

function terminarCol(i){
  for(var num = 0; num < 9; num++){
    var cant = 0;
    for(var f = 0; f < 9; f++){
      if(grid[f][i].numero == -1 && grid[f][i].puede[num]){
        cant++;
      }
    }
    if(cant == 1){
      for(var f = 0; f < 9; f++){
        if(grid[f][i].numero == -1 && grid[f][i].puede[num]){
          grid[f][i].numero = num+1;
          cambios = true;
          console.log("Columna");
        }
      }
    }
  }
}
