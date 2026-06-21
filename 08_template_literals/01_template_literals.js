// =====================================================
// TEMPLATE LITERALS
// =====================================================

// 1. Basic Template Literals
console.log("=== 1. Basic Template Literals ===");
const name = "Alice";
const age = 25;

// Old way - concatenation
const oldWay = "My name is " + name + " and I am " + age + " years old";
console.log(oldWay);

// Template literals - using backticks
const newWay = `My name is ${name} and I am ${age} years old`;
console.log(newWay);

// 2. Expression in Template Literals
console.log("\n=== 2. Expressions in Template Literals ===");
const x = 10;
const y = 20;
console.log(`${x} + ${y} = ${x + y}`);
console.log(`${x} > ${y} is ${x > y}`);

// 3. Function Calls in Template Literals
console.log("\n=== 3. Function Calls ===");
function greet(name) {
  return `Hello, ${name}!`;
}

const greeting = `The function returns: ${greet("Bob")}`;
console.log(greeting);

// 4. Multiline Strings
console.log("\n=== 4. Multiline Strings ===");
const multiline = `
This is a multiline string.
It spans multiple lines.
No need to use \n or + operator.
`;
console.log(multiline);

// 5. Preserving Formatting
console.log("\n=== 5. Preserving Formatting ===");
const html = `
<div>
  <h1>Hello</h1>
  <p>This is HTML</p>
</div>
`;
console.log(html);

// 6. Array Iteration in Template Literals
console.log("\n=== 6. Array Iteration ===");
const fruits = ["apple", "banana", "cherry"];
console.log(`Fruits: ${fruits.join(", ")}`);

const items = fruits.map(fruit => `- ${fruit}`).join("\n");
console.log(`List:\n${items}`);

// 7. Object Properties in Template Literals
console.log("\n=== 7. Object Properties ===");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York"
};

console.log(`${person.firstName} ${person.lastName} is ${person.age} years old from ${person.city}`);

// 8. Nested Template Literals
console.log("\n=== 8. Nested Template Literals ===");
const active = true;
const message = `The user is ${active ? `active in ${person.city}` : "inactive"}`;
console.log(message);

// 9. Tagged Template Literals
console.log("\n=== 9. Tagged Template Literals ===");
function highlight(strings, ...values) {
  console.log("Strings:", strings);
  console.log("Values:", values);
  return strings.map((str, i) => str + (values[i] || "")).join("");
}

const product = "Laptop";
const price = 999;
const result = highlight`Product: ${product}, Price: $${price}`;
console.log(result);

// 10. HTML Template Literal Helper
console.log("\n=== 10. HTML Helper ===");
function html(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    result += str;
    if (values[i] !== undefined) {
      // Escape HTML special characters
      result += String(values[i]).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  });
  return result;
}

const username = "<admin>";
const htmlString = html`<div>Welcome ${username}</div>`;
console.log(htmlString);

// 11. CSS in Template Literals
console.log("\n=== 11. CSS in Template Literals ===");
const color = "blue";
const size = "16px";
const styles = `
  color: ${color};
  font-size: ${size};
  margin: 10px;
`;
console.log(styles);

// 12. SQL Query Template (Example)
console.log("\n=== 12. SQL Query Example ===");
const userId = 123;
const username2 = "alice";
const query = `
  SELECT * FROM users
  WHERE id = ${userId}
  AND username = '${username2}'
`;
console.log(query);

// 13. Template Literal with Conditional
console.log("\n=== 13. Conditional in Template ===");
const score = 85;
const result2 = `Your score: ${score} - ${score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F"}`;
console.log(result2);

// 14. Default Values in Template Literals
console.log("\n=== 14. Default Values ===");
const username3 = "Charlie";
const status = undefined;
const profile = `User: ${username3 || "Anonymous"}, Status: ${status || "Offline"}`;
console.log(profile);

// 15. Template Literal vs String
console.log("\n=== 15. Performance Consideration ===");
const iterations = 1000;

console.time("Concatenation");
for (let i = 0; i < iterations; i++) {
  const concat = "Name: " + name + ", Age: " + age;
}
console.timeEnd("Concatenation");

console.time("Template Literal");
for (let i = 0; i < iterations; i++) {
  const template = `Name: ${name}, Age: ${age}`;
}
console.timeEnd("Template Literal");
