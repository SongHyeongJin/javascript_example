function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logStar = function (i) {
  stars = '';
  for (let j = 0; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
};

repeat(4, logStar);
