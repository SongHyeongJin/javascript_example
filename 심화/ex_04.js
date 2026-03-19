console.log('A');

setTimeout(function () {
  console.log('B');
}, 0);

console.log('C');

//A->C->B
//대기시간이 0이여도 이미 비동기 처리로
// libuv의 Node API로 넘어가 콜백 큐로 들어갔기 때문에
// 콜스택의 처리가 끝나 비어야 다시 콜백큐에서 콜스택으로 돌아온다.
