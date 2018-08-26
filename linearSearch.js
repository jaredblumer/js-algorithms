// Linear Search in Javascript
// Author: Jared Blumer

function linearSearch(target, arr) {
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
}
