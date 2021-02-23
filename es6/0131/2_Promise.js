let myFirstPromise = new Promise((resolve, reject) => {
  // 비동기식으로 실행 중인 작업이 성공했을 때는 resolve(...)라고 부르고, 실패했을 때는 reject(...)합니다.
  // 이 예에서는 setTimeout(...)을 사용하여 비동기 코드를 시뮬레이션합니다.
  // 실제로 XHR이나 HTML5 API 같은 것을 사용할 수 있습니다.
  setTimeout(function(){
    resolve("Success!"); //Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage는 위의 resolve(...) 함수에서 전달한 것입니다.
  // 문자열일 필요는 없지만 성공 메시지일 경우 문자열일 수 있습니다.
  console.log("Yay!" + successMessage);
});