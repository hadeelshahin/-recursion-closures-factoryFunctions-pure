//pure functions without side effects :
//Notes:
/**
# pure-functions: is a function that always produces the same output for the same input and has no side effects
# It doesn't rely on any external state, and its result is solely determined by its input parameters.
# A pure function doesn't modify external state or variables
# It doesn't interact with the outside world in any way, such as modifying global variables, logging to the console, or making network requests.
*/
//ex:
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
/********************************************************************************** */
// Impure function with side effect
let result = 0;

function impureAdd(a, b) {
  result = a + b;
  return result;
}

console.log(impureAdd(2, 3)); // Outputs: 5
console.log(result); // Outputs: 5 (external state modified)
function addRandom(num) {
  return num + Math.random();
}
console.log(addRandom(5));

//Reducing side effects can lead to more maintainable, modular, and predictable code