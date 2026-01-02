// var is function-scoped, so it is accessible outside the for loop
// even though it was declared inside the loop.
// This can lead to unexpected behavior.
// In modern JavaScript, it's better to use 'let' or 'const' for block scoping.

function sayHelloVar() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHelloVar();

// let is block-scoped, so it is not accessible outside the for loop
// This helps prevent accidental access to variables outside their intended scope.

function sayHelloLet() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
}

sayHelloLet();

// const is also block-scoped and is used for variables that should not be reassigned.
// However, if the const variable is an object or array, its properties or elements can still be modified.
const myArray = [1, 2, 3];
myArray.push(4);