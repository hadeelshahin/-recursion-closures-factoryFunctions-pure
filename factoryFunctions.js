// Factory Function : it is a function that produce another function
//Notes : //it returns object
/*
# it returns an object
#Factory functions are useful for creating multiple objects with similar structures without the need for the new keyword and the complexity of constructors. They allow for encapsulation and can be a more flexible and lightweight alternative in certain scenarios.
#Unlike a constructor function (which is used with the new keyword to create instances of objects
# more simple than new keyword and less complex than constructo functions to create multible objects with same structure
*/

//ex:
function createPerson(name, age) {
  // Create a new object
  const person = {};

  // Add properties to the object
  person.name = name;
  person.age = age;

  // Add methods to the object (if needed)
  person.sayHello = function () {
    console.log(
      `Hello, my name is ${person.name} and I'm ${person.age} years old.`
    );
  };

  // Return the created object
  return person;
}

// Use the factory function to create a person object
const john = createPerson("John", 25);

// Access properties and methods of the created object
console.log(john.name); // Outputs: John
console.log(john.age); // Outputs: 25
john.sayHello(); // Outputs: Hello, my name is John and I'm 25 years old.

//ex:

function createTaxCalculato(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax; //just return a pointer at this function
}
//this constant hold the inner function 
const calculateVatAmount = createTaxCalculato(0.17); 
const calculateIncomeTaxAmount = createTaxCalculato(0.35);

console.log(calculateIncomeTaxAmount(400));
console.log(calculateVatAmount(70));
