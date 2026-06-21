// =====================================================
// SCOPE AND CLOSURES
// =====================================================

// 1. Global Scope
console.log("=== 1. Global Scope ===");
var globalVar = "I'm global";
let globalLet = "I'm global let";
const globalConst = "I'm global const";

function checkGlobal() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

checkGlobal();

// 2. Function Scope (Local Scope)
console.log("\n=== 2. Function Scope ===");
function functionScope() {
  var funcVar = "Inside function";
  let funcLet = "Inside function let";
  const funcConst = "Inside function const";
  
  console.log(funcVar); // Accessible
}

functionScope();
// console.log(funcVar); // Error - Not accessible outside function

// 3. Block Scope (let and const)
console.log("\n=== 3. Block Scope ===");
if (true) {
  var blockVar = "I'm var in block";
  let blockLet = "I'm let in block";
  const blockConst = "I'm const in block";
}

console.log(blockVar); // Accessible (var is function-scoped)
// console.log(blockLet); // Error - Block scoped
// console.log(blockConst); // Error - Block scoped

// 4. var vs let vs const
console.log("\n=== 4. var vs let vs const ===");
// var - function scoped, can be redeclared, hoisted with undefined
// let - block scoped, cannot be redeclared, hoisted but not initialized
// const - block scoped, cannot be redeclared, must be initialized, cannot be reassigned

for (var i = 0; i < 3; i++) {
  // var
}
console.log(i); // 3 - Accessible outside loop

for (let j = 0; j < 3; j++) {
  // let
}
// console.log(j); // Error - j is block scoped

// 5. Temporal Dead Zone (TDZ)
console.log("\n=== 5. Temporal Dead Zone ===");
console.log(typeof x); // undefined (var is hoisted)

// This would cause ReferenceError before the declaration
// console.log(y); // ReferenceError - let is hoisted but not initialized
let y = 5;

// 6. Closures - Basic
console.log("\n=== 6. Closures - Basic ===");
function outer() {
  let count = 0; // This variable is enclosed by the closure
  
  function inner() {
    count++;
    return count;
  }
  
  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// 7. Closures - Multiple Instances
console.log("\n=== 7. Closures - Multiple Instances ===");
const counter1 = outer();
const counter2 = outer();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 - Separate closure
console.log(counter1()); // 3

// 8. Closures - Practical Example: Data Privacy
console.log("\n=== 8. Closures - Data Privacy ===");
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: function(amount) {
      balance += amount;
      return `Deposited $${amount}. Balance: $${balance}`;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return `Withdrew $${amount}. Balance: $${balance}`;
      }
      return "Insufficient funds";
    },
    getBalance: function() {
      return `Current balance: $${balance}`;
    }
  };
}

const account = createBankAccount(1000);
console.log(account.deposit(500)); // Deposited $500. Balance: $1500
console.log(account.withdraw(200)); // Withdrew $200. Balance: $1300
console.log(account.getBalance()); // Current balance: $1300
// console.log(account.balance); // undefined - Private!

// 9. Closures in Loops
console.log("\n=== 9. Closures in Loops ===");
// Problem: var in loop
var functions1 = [];
for (var i = 0; i < 3; i++) {
  functions1.push(function() {
    return i;
  });
}
console.log(functions1[0]()); // 3 - Not 0!
console.log(functions1[1]()); // 3 - Not 1!
console.log(functions1[2]()); // 3 - Not 2!

// Solution 1: Use let
var functions2 = [];
for (let i = 0; i < 3; i++) {
  functions2.push(function() {
    return i;
  });
}
console.log(functions2[0]()); // 0
console.log(functions2[1]()); // 1
console.log(functions2[2]()); // 2

// Solution 2: Use IIFE
var functions3 = [];
for (var i = 0; i < 3; i++) {
  functions3.push((function(j) {
    return function() {
      return j;
    };
  })(i));
}
console.log(functions3[0]()); // 0
console.log(functions3[1]()); // 1
console.log(functions3[2]()); // 2

// 10. Closures - Function Factory
console.log("\n=== 10. Closures - Function Factory ===");
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3)); // 8
console.log(add5(7)); // 12
console.log(add10(3)); // 13

// 11. Closures - Event Handlers
console.log("\n=== 11. Closures - Event Handlers (Example) ===");
function setupButtons() {
  for (let i = 1; i <= 3; i++) {
    // In real DOM: create buttons with closures
    const buttonClick = (function(buttonNum) {
      return function() {
        console.log(`Button ${buttonNum} clicked`);
      };
    })(i);
    
    // Would attach: button.addEventListener('click', buttonClick);
    buttonClick(); // Simulating click
  }
}

setupButtons();

// 12. Lexical vs Dynamic Scope
console.log("\n=== 12. Lexical Scope ===");
let globalX = "global";

function outer2() {
  let globalX = "outer";
  
  function inner2() {
    console.log(globalX); // Uses lexical scope - finds 'globalX' in outer
  }
  
  inner2();
}

outer2(); // "outer" - Not "global"
