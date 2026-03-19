function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

myForEach(['a', 'b', 'c'], function (item, index) {
  console.log(index, item);
});
