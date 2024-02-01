// Closures
//every function in javascript is a closure
/**A closure allows an inner function to access the variables and parameters of its outer function,
 *  even after the outer function has finished executing. This is due to the way JavaScript's scoping works.
 *
 */
//#Closures are a powerful feature in JavaScript, and they are commonly used to create private variables, implement data hiding, and manage state in various programming patterns.

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();

// Now, closureExample is a function that "closes over" outerVariable
closureExample(); // Outputs: I am from outer function

let userName = "max";
function greetUser() {
    let name=userName
  console.log("hello " + name);
}
//greetUser(); //hello max

userName = "manual";
greetUser(); //hello manual
//When the greetUser function is called, it looks for the value of userName in its lexical scope. At the time of the function call, the lexical scope includes the updated global variable userName, which is now "manual".
 
//because the function  accesses the global variable in its lexical scope, and at the time of the function call