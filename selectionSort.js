// Selection Sort in Javascript
// Author: Jared Blumer

function swap(values, firstIndex, secondIndex) {
  var temp = values[firstIndex];
  values[firstIndex] = values[secondIndex];
  values[secondIndex] = temp;
}

function selectionSort(values) {
  var len = values.length,
      min;

  for (var i = 0; i < len; i++) {

    min = i;

    for (var j = i + 1; j < len; j++) {

      if (values[j] < values[min]) {
        min = j;
      }
    }

    if (min != i){
      swap(values, i, min);
    }
  }

}
