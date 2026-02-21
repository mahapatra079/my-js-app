// Simple hoisting example

function Hello() {
    console.log("hoisted 1");
}
Hello();

// Hello();
// function Hello() {
//     console.log("hoisted 1, moved to the scope");
// }

// Fully hoisted

// var Hello = function Hello() {
//     console.log("hoisted 2");
// }
// Hello();

// Fully hoisted

// Hello();
//  function Hello() {
//   console.log("hoisted 3");
// }
// Fully hoisted

// let a = 10;
// console.log(a)
// Hello();
// function Hello() {
//     console.log("hoisted 4");
// }


// const hello = () => {
//   console.log("Hello");
// };
// hello();
// in arrow function it wont work in the top of the scope (var let const )