// =====================================================
// SPREAD AND REST OPERATORS
// =====================================================

// 1. Rest Parameters (Collecting Arguments)
console.log("=== 1. Rest Parameters ===");
function sum(...numbers) {
  console.log(numbers); // Array of all arguments
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// 2. Rest with Other Parameters
console.log("\n=== 2. Rest with Other Parameters ===");
function introduce(greeting, ...names) {
  console.log(`${greeting}: ${names.join(", ")}`);
}

introduce("Hello", "Alice", "Bob", "Charlie");

// 3. Spread Operator - Arrays
console.log("\n=== 3. Spread Operator - Arrays ===");
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Insert element in middle
const withMiddle = [0, ...arr1, 3.5, ...arr2];
console.log(withMiddle); // [0, 1, 2, 3, 3.5, 4, 5, 6]

// 4. Spread for Array Copy
console.log("\n=== 4. Spread for Array Copy ===");
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - Not modified
console.log(copy); // [1, 2, 3, 4]

// 5. Spread with Functions
console.log("\n=== 5. Spread with Functions ===");
const numbers = [1, 5, 3, 9, 2];
console.log(Math.max(...numbers)); // 9 - Equivalent to Math.max(1, 5, 3, 9, 2)
console.log(Math.min(...numbers)); // 1

// 6. Spread Operator - Objects
console.log("\n=== 6. Spread Operator - Objects ===");
const person1 = { name: "John", age: 30 };
const person2 = { city: "New York", country: "USA" };

const combined2 = { ...person1, ...person2 };
console.log(combined2); // { name: "John", age: 30, city: "New York", country: "USA" }

// 7. Spread for Object Copy
console.log("\n=== 7. Spread for Object Copy ===");
const obj = { a: 1, b: 2 };
const objCopy = { ...obj };
objCopy.c = 3;
console.log(obj); // { a: 1, b: 2 } - Not affected
console.log(objCopy); // { a: 1, b: 2, c: 3 }

// 8. Overriding Properties
console.log("\n=== 8. Overriding Properties ===");
const defaults = { name: "User", role: "guest", active: true };
const user = { ...defaults, name: "John", role: "admin" };
console.log(user); // { name: "John", role: "admin", active: true }

// 9. Shallow Copy with Nested Objects
console.log("\n=== 9. Shallow Copy - Nested Objects ===");
const parent = {
  name: "Parent",
  child: { name: "Child" }
};

const copy2 = { ...parent };
copy2.child.name = "Modified Child";
console.log(parent.child.name); // "Modified Child" - Parent affected!

// 10. Rest in Object Destructuring
console.log("\n=== 10. Rest in Object Destructuring ===");
const person3 = { name: "Alice", age: 25, city: "Boston", zip: "02101" };
const { name: nm, age: ag, ...address } = person3;
console.log(nm, ag); // Alice 25
console.log(address); // { city: "Boston", zip: "02101" }

// 11. Rest in Array Destructuring
console.log("\n=== 11. Rest in Array Destructuring ===");
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second); // 1 2
console.log(rest); // [3, 4, 5]

// 12. Spread with String
console.log("\n=== 12. Spread with Strings ===");
const str = "Hello";
const chars = [...str];
console.log(chars); // ["H", "e", "l", "l", "o"]

// 13. Spread with Set
console.log("\n=== 13. Spread with Set ===");
const set = new Set([1, 2, 2, 3, 3, 3]);
const uniqueArray = [...set];
console.log(uniqueArray); // [1, 2, 3]

// 14. Spread with Map.entries()
console.log("\n=== 14. Spread with Map ===");
const map = new Map([["a", 1], ["b", 2], ["c", 3]]);
const entries = [...map];
console.log(entries); // [["a", 1], ["b", 2], ["c", 3]]

// 15. Array Method with Spread
console.log("\n=== 15. Array Methods with Spread ===");
const arr = [1, 2, 3];
console.log([0, ...arr, 4]); // [0, 1, 2, 3, 4]

// Flatten
const nested = [1, [2, 3], [4, [5, 6]]];
console.log([...nested]); // [1, [2, 3], [4, [5, 6]]]

// 16. Function Argument vs Parameter
console.log("\n=== 16. Arguments array ===");
function oldStyle() {
  console.log(arguments); // Old way - not recommended
}

oldStyle(1, 2, 3);

// Modern way with rest
function modern(...args) {
  console.log(args); // [1, 2, 3]
}

modern(1, 2, 3);

// 17. Practical: Default Values with Spread
console.log("\n=== 17. Practical: Default Config ===");
const defaultConfig = { timeout: 5000, retry: 3, debug: false };
const userConfig = { debug: true, extra: "value" };
const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig); // { timeout: 5000, retry: 3, debug: true, extra: "value" }

// 18. Clone Array of Objects
console.log("\n=== 18. Clone Array of Objects ===");
const origArray = [{ id: 1 }, { id: 2 }];
const newArray = origArray.map(obj => ({ ...obj })); // Shallow copy each object
newArray[0].id = 99;
console.log(origArray[0].id); // 1 - Original not affected
console.log(newArray[0].id); // 99

// 19. Filter and Spread
console.log("\n=== 19. Filter and Spread ===");
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = [0, ...numbers2.filter(n => n % 2 === 0)];
console.log(evens); // [0, 2, 4, 6]

// 20. Combine REST and SPREAD
console.log("\n=== 20. Combining REST and SPREAD ===");
function logMultiple(...items) {
  console.log("Items:", items);
}

const itemArray = ["a", "b", "c"];
logMultiple(...itemArray); // Spread converts array to arguments
