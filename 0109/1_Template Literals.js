let word1 = 'YoungAe';
let word2 = 'Kim';
let a = 5;
let b = 2;

// ES6 이전 표현식
// var fullName = word1 + ' ' + word2;

// 템플릿 리터럴
const fullName = `${word1} ${word2}`;
const age = `${a+b}살`

console.log(fullName);
console.log(age);