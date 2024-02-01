"# -recursion-closures-factoryFunctions-pure" 
*Closures:
Every JavaScript function is a closure, which means it retains access to variables from its outer (enclosing) scope.
Lexical scoping in JavaScript enables closures by allowing functions to "close over" variables in their lexical environment, even after the outer function has finished execution.

*Recursion:
A programming concept where a function calls itself to solve a smaller instance of the same problem.
Typically involves a base case to prevent infinite recursion.
Can be a powerful and elegant solution for certain problems, but requires careful consideration of termination conditions.

*Pure and Impure Functions:
Pure Functions: Functions that consistently produce the same output for the same input and have no side effects, meaning they don't rely on external state or modify external state (e.g., global variables, network requests, console logging).
Impure Functions: Functions that may have side effects or produce different outputs for the same input due to reliance on external state.

*Factory Functions:
Functions that produce and return object.
Difference from Constructor Functions: Unlike constructor functions, factory functions don't use the new keyword and typically return an object or a function without the need for the this keyword.

*IIFE (Immediately Invoked Function Expression):
A design pattern in JavaScript where a function is defined and executed immediately after its creation.
Often used to create a private scope for variables, avoiding pollution of the global scope.


