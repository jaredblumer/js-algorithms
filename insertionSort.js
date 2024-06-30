// Insertion Sort in Javascript
// Author: Shy Blumer (they/them)

function insertionSort(arr) {
  var length = arr.length,
      temp;

  for (var i = 1, j; i < length; i++) {
    temp = arr[i];

    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j+1] = arr[j];
    }

    arr[j+1] = temp;
  }

  return arr;
}
