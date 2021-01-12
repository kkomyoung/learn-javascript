
// 다음 변수를 다음 값으로 만드시오(map, template literal 활용)
// var list = ['1. 하나', '2. 둘', '3. 셋'];
// <a href="#">1. 하나</a><a href="#">2. 둘</a><a href="#">3. 셋</a>

var list = ['1. 하나', '2. 둘', '3. 셋'];
var result = '';

var changeList = list.map(function(text){

  result += `<a href="#">${text}</a>`;
});


console.log(result);


