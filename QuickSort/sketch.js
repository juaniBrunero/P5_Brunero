function setup() {
  generarYordenar();
}

function generarYordenar(){
  var cant = 10000;
  var arr = new Array(cant);

  for (var i = 0; i < cant; i++) {
    arr[i] = floor(random(100));
  }

  // console.log("Arreglo desordenado" + arr);

  quickSort(arr, 0, arr.length-1);

  var esta = true;

  for (var i = 0; i < arr.length-1; i++) {
    esta = esta && (arr[i] <= arr[i+1]);
  }

  // console.log("Arreglo ordenado" + arr);
  console.log("Cantidad de elementos: " + cant);
  console.log("Comprobacion ordenado: " + esta);
}

function mousePressed(){
  generarYordenar();
}
