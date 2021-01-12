
const fruits = ['apple', 'watermelon', 'orange', 'peach'];

const result = fruits.filter(fruit => fruit.length > 5);
// const result = fruits.filter((fruit) => {return fruit.length > 5});

console.log(result);




// 6보다 작은 수 거르기
function condition(num){
  return num >= 6;
}

const numberArray = [1, 3, 5, 6, 7, 9, 11];
var filtered = numberArray.filter(condition);

console.log(filtered);


