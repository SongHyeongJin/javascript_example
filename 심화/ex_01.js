function filterLog(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      console.log(arr[i]);
    }
  }
  //   for (const item of arr) {
  //     if (callback(item)) {
  //       console.log(item);
  //     }
  //   }
}

filterLog([1, 2, 3, 4, 5], function (x) {
  return x % 2 === 0;
});
// 2
// 4
