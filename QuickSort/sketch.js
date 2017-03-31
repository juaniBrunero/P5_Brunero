
function setup() {
  generarYordenar();
  frameRate(1);
}

function draw(){
  generarYordenar();
}

function quickSort(a, lo, hi){
  var pivot = a[round((hi + lo)/2)];

  var i = lo;
  var j = hi;

  while(i < j){
    while(a[i] < pivot){
      i += 1;
    }
    while(a[j] > pivot){
      j -= 1;
    }
    if(i <= j){
      swap(a, i, j);
      i += 1;
      j -= 1;
    }
  }
  if(lo < j) quickSort(a, lo, j);
  if(hi > i) quickSort(a, i, hi);

}

function swap(a, f, g){
  var temp = a[f];
  a[f] = a[g];
  a[g] = temp;
}

function generarYordenar(){
  var cant = floor(random(10000));
  var arr = new Array(cant);

  for (var i = 0; i < cant; i++) {
    arr[i] = floor(random(100));
  }

  // console.log(arr);

  quickSort(arr, 0, arr.length-1);

  var esta = true;

  for (var i = 0; i < arr.length-1; i++) {
    esta = esta && (arr[i] <= arr[i+1]);
  }

  // console.log(arr);
  console.log(cant);
  console.log(esta);
}

function mousePressed(){
  generarYordenar();
}
