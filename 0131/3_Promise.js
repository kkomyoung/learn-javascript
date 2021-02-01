"use strict" // js의 sloppy mode를 해제하고 제한된 버전을 사용함

// Promise is a JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
//Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'))
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally')
  });


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

//then : 값을 바로 전달해도 되고 Promise를 전달해도 된다.
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num -1), 1000);
  });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
// cook은 egg를 받아와서 그 egg로 후라이드를 만든다.
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getHen()
.then(getEgg)
.catch(error => {
  return '🍠';
})
.then(cook)
.then(console.log)
.catch(console.log);