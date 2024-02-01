// Immediately Invoked Function Expression
//It is a design pattern in JavaScript where a function is defined and executed immediately after its creation
//function expression which calls itself ()

(function(name) {
    console.log("Hello, " + name + "!");
  })("John");
  
  //a function that runs as soon as it is defined

  //we add the first set of parenthesis that tells the compiler that the function is not a function declaration, instead, it’s a function expression.
  //to invoke the function, we use the second set of parenthesis

  (function() {
    var age = 30;
    console.log(age); // 30
})()
 
console.log(age); // Error: "age is not defined"