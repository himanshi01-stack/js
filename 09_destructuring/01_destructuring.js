// =====================================================
// DESTRUCTURING
// =====================================================

// 1. Array Destructuring - Basic
console.log("=== 1. Array Destructuring - Basic ===");
const colors = ["red", "green", "blue"];

// Old way
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];

// Destructuring
const [col1, col2, col3] = colors;
console.log(col1, col2, col3); // red green blue

// 2. Array Destructuring - Skipping Elements
console.log("\n=== 2. Skipping Elements ===");
const [first, , third] = colors;
console.log(first, third); // red blue

// 3. Array Destructuring - Rest Operator
console.log("\n=== 3. Rest Operator in Destructuring ===");
const [head, ...tail] = colors;
console.log(head); // red
console.log(tail); // ["green", "blue"]

// 4. Array Destructuring - Default Values
console.log("\n=== 4. Default Values ===");
const [a = 10, b = 20, c = 30, d = 40] = [1, 2];
console.log(a, b, c, d); // 1 2 30 40

// 5. Array Destructuring - Swapping Variables
console.log("\n=== 5. Swapping Variables ===");
let x = 5;
let y = 10;
console.log(`Before: x=${x}, y=${y}`);

[x, y] = [y, x];
console.log(`After: x=${x}, y=${y}`); // x=10, y=5

// 6. Object Destructuring - Basic
console.log("\n=== 6. Object Destructuring - Basic ===");
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

const { name, age, city } = person;
console.log(name, age, city); // John 30 New York

// 7. Object Destructuring - Renaming
console.log("\n=== 7. Renaming Properties ===");
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // John 30

// 8. Object Destructuring - Default Values
console.log("\n=== 8. Object Default Values ===");
const { name: n, age: ag, country = "USA" } = person;
console.log(n, ag, country); // John 30 USA

// 9. Object Destructuring - Rest Operator
console.log("\n=== 9. Rest in Object Destructuring ===");
const { name: nm, ...rest } = person;
console.log(nm); // John
console.log(rest); // { age: 30, city: "New York" }

// 10. Nested Array Destructuring
console.log("\n=== 10. Nested Array Destructuring ===");
const nestedArray = [1, [2, 3], 4];
const [num1, [num2, num3], num4] = nestedArray;
console.log(num1, num2, num3, num4); // 1 2 3 4

// 11. Nested Object Destructuring
console.log("\n=== 11. Nested Object Destructuring ===");
const employee = {
  id: 1,
  details: {
    firstName: "Alice",
    lastName: "Smith",
    address: {
      city: "Boston",
      zip: "02101"
    }
  }
};

const { details: { firstName, lastName, address: { city: empCity } } } = employee;
console.log(firstName, lastName, empCity); // Alice Smith Boston

// 12. Function Parameter Destructuring
console.log("\n=== 12. Function Parameter Destructuring ===");
function displayUser({ name, age }) {
  console.log(`${name} is ${age} years old`);
}

displayUser({ name: "Bob", age: 25 }); // Bob is 25 years old

// 13. Function with Array Destructuring
console.log("\n=== 13. Function with Array Destructuring ===");
function addNumbers([a, b]) {
  return a + b;
}

console.log(addNumbers([5, 10])); // 15

// 14. Destructuring in for...of Loop
console.log("\n=== 14. Destructuring in for...of ===");
const pairs = [[1, 2], [3, 4], [5, 6]];
for (const [first, second] of pairs) {
  console.log(`${first} and ${second}`);
}

// 15. Object Array Destructuring in Loop
console.log("\n=== 15. Object Array Destructuring in Loop ===");
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];

for (const { id, name } of users) {
  console.log(`ID: ${id}, Name: ${name}`);
}

// 16. Mixed Destructuring
console.log("\n=== 16. Mixed Destructuring ===");
const mixed = {
  title: "JavaScript",
  tags: ["programming", "web", "language"]
};

const { title, tags: [tag1, tag2] } = mixed;
console.log(title, tag1, tag2); // JavaScript programming web

// 17. Using Destructuring with Default Values in Functions
console.log("\n=== 17. Function Defaults with Destructuring ===");
function createUser({ name = "Guest", age = 0, role = "user" } = {}) {
  return { name, age, role };
}

console.log(createUser()); // { name: "Guest", age: 0, role: "user" }
console.log(createUser({ name: "Charlie", age: 28 })); // { name: "Charlie", age: 28, role: "user" }

// 18. Destructuring with Computed Properties
console.log("\n=== 18. Destructuring Function Returns ===");
function getCoordinates() {
  return { x: 10, y: 20 };
}

const { x, y } = getCoordinates();
console.log(`Point: (${x}, ${y})`); // Point: (10, 20)

// 19. Practical Example: API Response
console.log("\n=== 19. Practical: API Response ===");
const apiResponse = {
  status: 200,
  data: {
    user: {
      id: 1,
      name: "John Doe",
      email: "john@example.com"
    }
  }
};

const { status, data: { user: { name: userName, email } } } = apiResponse;
console.log(`Status: ${status}, User: ${userName} (${email})`);

// 20. Swapping with Destructuring
console.log("\n=== 20. Swapping Values ===");
let a1 = 100;
let b1 = 200;
[a1, b1] = [b1, a1];
console.log(a1, b1); // 200 100
