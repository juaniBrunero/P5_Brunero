function quickSort(a, lo, hi){ //Para arreglos de reales
  var pivot = a[round((hi + lo)/2)]; //Elije pivote

  var i = lo;
  var j = hi;

  while(i < j){
    while(a[i] < pivot){ //Saltea los mayores semi-ordenados
      i += 1;
    }
    while(a[j] > pivot){ //Saltea los menores semi-ordenados
      j -= 1;
    }
   if(i <= j){          //Hace el cambio para semi-ordenarlos
      swap(a, i, j);
      i += 1;
      j -= 1;
    }
  }

  if(lo < j) quickSort(a, lo, j); //Ordena el izquierdo
  if(hi > i) quickSort(a, i, hi); //Ordena el derecho
}

function swap(ar, a, b){ //Realiza un swap de dos elementos
  var temp = ar[a];
  ar[a] = ar[b];
  ar[b] = temp;
}
