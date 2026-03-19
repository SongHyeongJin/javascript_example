function myMap(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = callback(arr[i]);
  }
  return arr;
}

const result = myMap([1, 2, 3], function (x) {
  return x * 2;
});

console.log(result); // [2, 4, 6]
