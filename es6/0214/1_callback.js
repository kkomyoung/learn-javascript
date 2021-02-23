'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration

console.log('1');
setTimeout(() => console.log('2'), 200);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback : 언제 코드가 실행될지 예측할 수 없음.
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);




// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess (id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWidthRole => {
        alert(`Hello ${userWidthRole.name}, you have a ${userWidthRole.role} role`);
      },
      error => {
        console.log(error);
      }
    )
  },
  error => {
    console.log(error);  
  }
);
