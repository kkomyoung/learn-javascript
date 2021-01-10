// // default parameter를 사용하지 않는 다면...
// function multiply(a, b) { b = (typeof b !== 'undefined') ? b : 1; return a * b; }

// // default parameter를 사용한다면, 예외처리 없이 간단히 코딩 할 수 있다.
// function multiply(a, b = 1) { return a * b; }


function add(numArray = []){
  let total = 0;
  numArray.forEach((element) => {
    total += element;
  });

  console.log(total);
}

add();