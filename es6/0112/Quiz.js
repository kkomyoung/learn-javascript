
// 다음 변수를 다음 값으로 만드시오(map, template literal 활용)
// var list = ['1. 하나', '2. 둘', '3. 셋'];
// <a href="#">1. 하나</a><a href="#">2. 둘</a><a href="#">3. 셋</a>


// forEach, map
// 공통점 : 배열을 이용한다.
// 차이점 : forEach는 return 값 못 받음 / map은 가능


var list = ['1. 하나', '2. 둘', '3. 셋'];
var result = '';


var forEachVersion = list.forEach((text) => {

  result += `<a href="#">${text}</a>`;
  
  // return result -> undefined
});

console.log(result);


var mapVersion = list.map((text) => {

  return `<a href="#">${text}</a>`;
});

console.log(mapVersion.join(''));


