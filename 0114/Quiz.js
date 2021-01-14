//당신은 식당 알바입니다. 주문 받은 총 메뉴의 수는 몇개인가요?
//답 6개

//reduce를 활용하여 답을 구하시오.

var orderLunchFoods = [
	{menu: '김치찌개', count: 3},
	{menu: '된장찌개', count: 2},
	{menu: '볶음밥', count: 1}
]

const menuCountSum = orderLunchFoods.reduce(function(accmulator, currentValue){
  return accmulator + currentValue.count;
}, 0);

console.log(menuCountSum + '개');





//test
// 왜 위에 배열은 초기값을 설정해줘야하고 아래는 안해줘도 될까... 
var testArray = [
  3, 2, 1
]

const testVar = testArray.reduce(function(acc, value){
  return acc + value;
});

console.log(testVar);





