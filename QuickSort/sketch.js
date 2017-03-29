
function setup() {
  var arr;
  var cant = 1000000;

  arr = new Array(cant);
  for (var i = 0; i < cant; i++) {
    arr[i] = floor(random(100));
  }

  //console.log(arr);

  quickSort(arr, 0, arr.length-1);

  var esta = true;

  for (var i = 0; i < arr.length-1; i++) {
    esta = esta && (arr[i] <= arr[i+1]);
  }

  //console.log(arr);
  console.log(esta);

}

function quickSort(a, lo, hi){
  if(lo < hi){
    var p = partition(a, lo, hi);
    quickSort(a, lo   , p - 1);
    quickSort(a, p + 1, hi);
  }
}

function partition(a, lo, hi){
  var pivot = a[hi];
  var i = lo-1;
  for (var j = lo; j < hi; j++) {
    if(a[j] <= pivot){
      i = i + 1;
      swap(a, i, j);
    }
  }
  swap(a, i+1, hi);
  return i+1;
}

function swap(a, f, g){
  var temp = a[f];
  a[f] = a[g];
  a[g] = temp;
}
