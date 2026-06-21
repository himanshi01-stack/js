// =====================================================
// FUNCTIONS - Advanced Concepts
// =====================================================

// 1. Scope and this Binding
console.log("=== 1. Arrow Functions vs Regular Functions (this binding) ===");
const person = {
  name: "John",
  age: 30,
  
  // Regular function - has its own 'this'
  greetRegular: function() {
    console.log(`Hello, I'm ${this.name}`);
  },
  
  // Arrow function - inherits 'this' from parent scope
  greetArrow: () => {
    console.log(`Hello, I'm ${this.name}`); // 'this' is window/global
  }
};

person.greetRegular(); // Hello, I'm John
person.greetArrow(); // Hello, I'm undefined

// 2. Function.prototype.call()
console.log("\n=== 2. call() Method ===");
const user1 = { name: "Alice", balance: 1000 };
const user2 = { name: "Bob", balance: 500 };

function showBalance() {
  console.log(`${this.name} has $${this.balance}`);
}

showBalance.call(user1); // Alice has $1000
showBalance.call(user2); // Bob has $500

// 3. Function.prototype.apply()
console.log("\n=== 3. apply() Method ===");
function withdraw(amount, currency) {
  this.balance -= amount;
  console.log(`${this.name} withdrew ${amount} ${currency}. Balance: $${this.balance}`);
}

withdraw.apply(user1, [100, "USD"]); // Alice withdrew 100 USD. Balance: $900
withdraw.apply(user2, [50, "EUR"]); // Bob withdrew 50 EUR. Balance: $450

// 4. Function.prototype.bind()
console.log("\n=== 4. bind() Method ===");
const unboundGetName = function() {
  return this.name;
};

const boundGetName = unboundGetName.bind(user1);
console.log(boundGetName()); // Alice

// Useful for event handlers
const logBalance = showBalance.bind(user1);
logBalance(); // Alice has $900

// 5. Immediately Invoked Function Expression (IIFE)
console.log("\n=== 5. IIFE (Immediately Invoked Function Expression) ===");
(function() {
  const privateVar = "I'm private";
  console.log(privateVar); // I'm private
})();

// Cannot access privateVar here
// console.log(privateVar); // Error!

// IIFE with parameters
(function(name, age) {
  console.log(`Inside IIFE: ${name} is ${age} years old`);
})("Charlie", 25);

// 6. Generator Functions
console.log("\n=== 6. Generator Functions ===");
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Generator with for...of
function* colorGenerator() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

console.log("Colors:");
for (let color of colorGenerator()) {
  console.log(color);
}

// 7. Pure Functions
console.log("\n=== 7. Pure Functions ===");
// Pure function - same input always produces same output
function purePower(x) {
  return x * x;
}

console.log(purePower(5)); // 25
console.log(purePower(5)); // 25 - Always the same

// Impure function - depends on external state
let multiplier = 2;
function impureMultiply(x) {
  return x * multiplier; // Depends on external variable
}

console.log(impureMultiply(5)); // 10
multiplier = 3;
console.log(impureMultiply(5)); // 15 - Different output!

// 8. Function Composition
console.log("\n=== 8. Function Composition ===");
const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

// Compose functions
const compose = (a, b) => x => a(b(x));
const composedFunc = compose(multiply2, add5);

console.log(composedFunc(10)); // (10 + 5) * 2 = 30

// 9. Currying
console.log("\n=== 9. Currying ===");
// Regular function
function addRegular(a, b, c) {
  return a + b + c;
}

// Curried version
function addCurried(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(addRegular(1, 2, 3)); // 6
console.log(addCurried(1)(2)(3)); // 6

// Practical currying example
const curry = fn => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return (...nextArgs) => curried.apply(this, args.concat(nextArgs));
    }
  };
};

const curriedAdd = curry(addRegular);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6

// 10. Memoization (Caching Function Results)
console.log("\n=== 10. Memoization ===");
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Expensive: fibonacci(40) takes time

// Memoized version
function memoizedFibonacci() {
  const cache = {};
  
  return function fib(n) {
    if (n in cache) {
      console.log(`Getting ${n} from cache`);
      return cache[n];
    }
    
    console.log(`Computing ${n}`);
    if (n <= 1) {
      cache[n] = n;
    } else {
      cache[n] = fib(n - 1) + fib(n - 2);
    }
    return cache[n];
  };
}

const fib = memoizedFibonacci();
console.log(fib(5)); // 5
console.log(fib(5)); // From cache
console.log(fib(6)); // Computing 6, using cached 5
