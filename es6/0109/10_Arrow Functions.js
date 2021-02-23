// function add(...nums) {
//   let total = nums.reduce(function (x, y) {
//     return x+y;
//   })

//   console.log(total);
// }

function add(...nums) {
  let total = nums.reduce((x, y) => x + y);

  console.log(total);
}

add(4, 5, 7, 8, 12);



var square = function(x) { return x*x; }; //기존

var square = (x) => { return x*x };
var square = (x, y, z) => { return x+y+z }; // 인수가 여러개 일 때
var square = x => x*x; // 인수가 한개일 때 괄호 생략가능, return 값만 있을 떄 중괄호와 return 키워드 생략가능
var square = () => {}; // 인수가 없으면 괄호 생략불가
