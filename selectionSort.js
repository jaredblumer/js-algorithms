// Selection Sort in Javascript
// Author: Jared Blumer

function selectionSort(arr) {
  var len = arr.length,
      min;

  for (var i = 0; i < len; i++) {
    min = i;

    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i){
      // Swap values
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;

}
