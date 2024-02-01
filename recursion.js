// function calls itself in its own definition

// function powerOf(b , n) { //2,3
//   let result=1;
//   for (let i = n; i >=1; i--) {
//     result *= b;
//   }
//   return result;
// }

// console.log(powerOf(2, 4)); //2*2*2

// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));

//using recursion:
//The base case is essential to prevent infinite recursion and provides a stopping condition for the recursion
function powerOf(b, n) {
  //   if (n === 0 || n===1) {
  //     return b;
  //   } else {
  //    b= b * powerOf(b, n - 1);
  //   }
  //   return b;
  return n === 1 ? b : b * powerOf(b, n - 1);
}

console.log(powerOf(2, 3));


/**
 * Base Case: The condition that stops the recursion. It defines the smallest subproblem that can be solved directly without further recursion.

Recursive Case: The part of the function that calls itself with a smaller or simpler input. It breaks down the original problem into smaller instances.
 */