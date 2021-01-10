// 기존 방식
var arr1 = [1,2,3]; 
var arr2 = [4,5,6]; 

var arr = arr1.concat(arr2); 
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ] 


//ES6
let example1 = [1,2,3,4,5,6];
let example2 = [...example1,7,8];

console.log(example2);