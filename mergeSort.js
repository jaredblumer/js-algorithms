// Merge Sort in Javascript
// Author: Shy Blumer (they/them)

function mergeSort(arr) {

  if (arr.length === 1) {
    return arr;
  }

  var middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {

  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {

    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }

  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

}
