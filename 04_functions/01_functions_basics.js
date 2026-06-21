// =====================================================
// FUNCTIONS - Basics and Declarations
// =====================================================

// 1. Function Declaration
console.log("=== 1. Function Declaration ===");
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("John"));
console.log(greet("Alice"));

// 2. Function Hoisting
console.log("\n=== 2. Function Hoisting ===");
// Can call function before declaration (hoisted)
console.log(add(5, 3)); // Works fine!

function add(a, b) {
  return a + b;
}

// 3. Function Expression
console.log("\n=== 3. Function Expression ===");
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20

// 4. Anonymous Function
console.log("\n=== 4. Anonymous Function ===");
const divide = function(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero

// 5. Arrow Functions (ES6)
console.log("\n=== 5. Arrow Functions ===");
const square = (x) => {
  return x * x;
};

const cube = (x) => x * x * x; // Implicit return

console.log(square(5)); // 25
console.log(cube(3)); // 27

// 6. Arrow Functions with Single Parameter
console.log("\n=== 6. Arrow Functions - Single Parameter ===");
const double = x => x * 2;
const triple = x => x * 3;

console.log(double(10)); // 20
console.log(triple(10)); // 30

// 7. Arrow Functions with No Parameters
console.log("\n=== 7. Arrow Functions - No Parameters ===");
const randomNumber = () => Math.random();
const getTime = () => new Date().toLocaleTimeString();

console.log(randomNumber());
console.log(getTime());

// 8. Default Parameters
console.log("\n=== 8. Default Parameters ===");
function greetUser(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greetUser()); // Hello, Guest!
console.log(greetUser("Bob")); // Hello, Bob!
console.log(greetUser("Charlie", "Hi")); // Hi, Charlie!

// 9. Rest Parameters (...)
console.log("\n=== 9. Rest Parameters ===");
function sum(...numbers) {
  console.log(numbers); // Array of all arguments
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
console.log(sum()); // 0

// 10. Function with Variable Number of Arguments
console.log("\n=== 10. Multiple Rest Parameters ===");
function introduce(greeting, ...names) {
  console.log(greeting);
  names.forEach(name => console.log(`- ${name}`));
}

introduce("Welcome:", "John", "Jane", "Bob");

// 11. Return Values
console.log("\n=== 11. Return Values ===");
function getResult(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  return "F";
}

console.log(getResult(95)); // A
console.log(getResult(75)); // C

// Function that returns object
function createUser(name, age) {
  return {
    name: name,
    age: age,
    isActive: true
  };
}

console.log(createUser("David", 28));

// 12. Functions Returning Functions
console.log("\n=== 12. Functions Returning Functions ===");
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double2 = makeMultiplier(2);
const triple3 = makeMultiplier(3);

console.log(double2(5)); // 10
console.log(triple3(5)); // 15

// 13. Callback Functions
console.log("\n=== 13. Callback Functions ===");
function processUserInput(callback) {
  const name = "John";
  callback(name);
}

processUserInput(function(name) {
  console.log(`Processing: ${name}`);
});

// Arrow function callback
processUserInput(name => console.log(`User: ${name}`));

// 14. Higher Order Functions
console.log("\n=== 14. Higher Order Functions ===");
function calculator(operation, a, b) {
  if (operation === "add") return a + b;
  if (operation === "subtract") return a - b;
  if (operation === "multiply") return a * b;
  if (operation === "divide") return b !== 0 ? a / b : "Error";
}

console.log(calculator("add", 10, 5)); // 15
console.log(calculator("multiply", 4, 7)); // 28

// 15. Function Parameters and Scope
console.log("\n=== 15. Function Parameters ===");
let globalVar = "I'm global";

function testScope(param1, param2) {
  let localVar = "I'm local";
  console.log(param1); // Can access parameters
  console.log(localVar); // Can access local variables
  console.log(globalVar); // Can access global variables
}

testScope("argument", 42);

// 16. typeof Operator for Functions
console.log("\n=== 16. typeof Functions ===");
console.log(typeof greet); // "function"
console.log(typeof multiply); // "function"
console.log(typeof double); // "function"
