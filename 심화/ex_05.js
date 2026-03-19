for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

//i가 var로 선언되었기 때문에 비동기 처리가 끝난 1초 후 값을 참조하여 3이 나온다
//let으로 선언하면 각 반복마다 해당 시점의 값을 기억한다.
