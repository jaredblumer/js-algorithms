// Binary Search in Javascript
// Author: Jared Blumer

function binarySearch(target, arr) {
  var start = 0,
      end = arr.length - 1,
      mid;

  while(start <= end) {
    mid = start + Math.floor((end - start) / 2);

    if (target === arr[mid]) return mid;

    if (target < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}
