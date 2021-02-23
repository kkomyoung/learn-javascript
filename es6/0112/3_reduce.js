const arr = [10, 20, 30, 40, 50];

arr.reduce(function(acc, cur, inx, src){
  //누적값 + 현재값
  acc + cur
}, 0); // 0은 초기값


// 초기값 0으로 설정 시
//누적값  / 현재값  / 인덱스  /  원본배열
// 0     /  10     /  0
// 10    /  20     /  1
// 30    /  30     /  2
// 60    /  40     /  3
// 100   /  50     /  4
// 150


// 초기값 미설정 시
//누적값  / 현재값  / 인덱스  /  원본배열
// 10    /  20     /  1
// 30    /  30     /  2
// 60    /  40     /  3
// 100   /  50     /  3
// 150







const array = [3, -1, 10, 5, 0];

const sum = array.reduce(function(accumulator, currentValue) {
  console.log(accumulator);
  console.log(currentValue);

  return accumulator + currentValue;
});

console.log(sum);


const sum1 = array.reduce((acc, value) => acc + value);
console.log(sum1);

var array2 = [
  {name: "james", age: 20},
  {name: "tom", age: 25},
  {name: "elisha", age: 30},
  {name: "peter", age: 35}
];

var sum3 = array2.reduce((acc, value) => acc + value.age, 0);

// 평균나이
console.log(sum3/array2.length);



