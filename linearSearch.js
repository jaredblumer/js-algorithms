// Linear Search in Javascript
// Author: Jared Blumer

function linearSearch(key, arr) {
  var length = arr.length;

  for (var i = 0; i < length; i++) {
    if (arr[i] === key) return i;
  }

  return null;
}
