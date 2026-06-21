// =====================================================
// JSON (JavaScript Object Notation)
// =====================================================

// 1. JSON Stringify - Convert to String
console.log("=== 1. JSON.stringify() ===");
const person = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John","age":30,"email":"john@example.com"}
console.log(typeof jsonString); // string

// 2. JSON Stringify with Formatting
console.log("\n=== 2. Formatted JSON ===");
const formatted = JSON.stringify(person, null, 2);
console.log(formatted);
// {
//   "name": "John",
//   "age": 30,
//   "email": "john@example.com"
// }

// 3. JSON Parse - Convert to Object
console.log("\n=== 3. JSON.parse() ===");
const jsonStr = '{"name":"Alice","age":25,"city":"Boston"}';
const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj); // { name: "Alice", age: 25, city: "Boston" }
console.log(parsedObj.name); // Alice

// 4. Array as JSON
console.log("\n=== 4. Array as JSON ===");
const colors = ["red", "green", "blue"];
const colorJson = JSON.stringify(colors);
console.log(colorJson); // ["red","green","blue"]

const parsedColors = JSON.parse(colorJson);
console.log(parsedColors); // ["red", "green", "blue"]

// 5. Nested Objects and Arrays
console.log("\n=== 5. Nested Data ===");
const company = {
  name: "TechCorp",
  employees: [
    { id: 1, name: "John", role: "Developer" },
    { id: 2, name: "Jane", role: "Manager" }
  ],
  address: {
    city: "New York",
    zip: "10001"
  }
};

const companyJson = JSON.stringify(company, null, 2);
console.log(companyJson);

const parsedCompany = JSON.parse(companyJson);
console.log(parsedCompany.employees[0].name); // John

// 6. JSON Replacer Function
console.log("\n=== 6. Replacer Function ===");
const user = {
  username: "john_doe",
  password: "secret123", // Don't include sensitive data
  email: "john@example.com",
  role: "admin"
};

const filtered = JSON.stringify(user, (key, value) => {
  // Exclude password field
  if (key === "password") return undefined;
  return value;
}, 2);

console.log(filtered);
// {
//   "username": "john_doe",
//   "email": "john@example.com",
//   "role": "admin"
// }

// 7. JSON with Custom Replacer Array
console.log("\n=== 7. Replacer Array ===");
const data = { name: "John", age: 30, email: "john@example.com", phone: "123-456" };
const limited = JSON.stringify(data, ["name", "email"]); // Only include these keys
console.log(limited); // {"name":"John","email":"john@example.com"}

// 8. Reviver Function - Parse with Custom Logic
console.log("\n=== 8. Reviver Function ===");
const dateJson = '{"date":"2024-01-15","name":"Event"}';
const revivedData = JSON.parse(dateJson, (key, value) => {
  if (key === "date") {
    return new Date(value);
  }
  return value;
});

console.log(revivedData.date); // 2024-01-15T00:00:00.000Z
console.log(revivedData.date instanceof Date); // true

// 9. Handling Special Values
console.log("\n=== 9. Special Values ===");
// undefined is not valid JSON
// Functions are not valid JSON
// Symbols are not valid JSON

const obj = {
  text: "hello",
  number: 42,
  boolean: true,
  nullValue: null,
  undefined: undefined, // Will be omitted
  date: new Date() // Converted to ISO string
};

console.log(JSON.stringify(obj, null, 2));

// 10. Safe JSON Parsing
console.log("\n=== 10. Safe JSON Parse ===");
function safeJsonParse(json, defaultValue = null) {
  try {
    return JSON.parse(json);
  } catch (error) {
    console.log("Invalid JSON:", error.message);
    return defaultValue;
  }
}

console.log(safeJsonParse('{"valid":"json"}')); // { valid: "json" }
console.log(safeJsonParse('invalid json', {})); // {} (default value)

// 11. JSON with Methods (replacer/reviver)
console.log("\n=== 11. Serializing Methods ===");
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  toJSON() {
    return `(${this.x}, ${this.y})`;
  }
}

const point = new Point(10, 20);
console.log(JSON.stringify(point)); // "(10, 20)"

// 12. Deep Clone Using JSON
console.log("\n=== 12. Deep Clone with JSON ===");
const original = {
  name: "Original",
  nested: { value: 42 }
};

const cloned = JSON.parse(JSON.stringify(original));
cloned.nested.value = 99;

console.log(original.nested.value); // 42 - Not affected
console.log(cloned.nested.value); // 99

// 13. JSON Validation
console.log("\n=== 13. JSON Validation ===");
function isValidJson(json) {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJson('{"valid":true}')); // true
console.log(isValidJson('invalid')); // false
console.log(isValidJson('{incomplete}')); // false

// 14. Pretty Print JSON
console.log("\n=== 14. Pretty Print ===");
const messy = { name: "John", age: 30, skills: ["JS", "Python", "Java"] };
console.log(JSON.stringify(messy, null, 4));

// 15. Compact JSON
console.log("\n=== 15. Compact JSON ===");
console.log(JSON.stringify(messy)); // No whitespace

// 16. Working with API Data
console.log("\n=== 16. API Response Example ===");
const apiResponse = `
{
  "status": "success",
  "data": {
    "users": [
      {"id": 1, "name": "Alice"},
      {"id": 2, "name": "Bob"}
    ]
  }
}
`;

const response = JSON.parse(apiResponse);
console.log(`Status: ${response.status}`);
console.log(`First user: ${response.data.users[0].name}`);

// 17. Filtering Large Objects
console.log("\n=== 17. Filtering Objects ===");
const largeData = {
  id: 1,
  username: "john",
  password: "secret",
  email: "john@example.com",
  apiKey: "key123",
  profile: {
    bio: "Developer",
    website: "example.com",
    token: "token123"
  }
};

const publicData = JSON.parse(
  JSON.stringify(largeData, (key, value) => {
    // Exclude sensitive fields
    if (key === "password" || key === "apiKey" || key === "token") {
      return undefined;
    }
    return value;
  })
);

console.log(publicData);

// 18. Date Handling in JSON
console.log("\n=== 18. Date Serialization ===");
const event = {
  name: "Conference",
  startDate: new Date("2024-06-15"),
  endDate: new Date("2024-06-17")
};

const eventJson = JSON.stringify(event, null, 2);
console.log(eventJson);

// Parse back with date conversion
const eventData = JSON.parse(eventJson, (key, value) => {
  if (value && typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2}/)) {
    return new Date(value);
  }
  return value;
});

console.log(eventData.startDate instanceof Date); // true

// 19. Streaming JSON (Simulated)
console.log("\n=== 19. JSON Stream Processing ===");
function streamJsonArray(jsonArray) {
  const items = JSON.parse(jsonArray);
  items.forEach((item, index) => {
    console.log(`Item ${index + 1}:`, item);
  });
}

streamJsonArray('[{"id":1,"name":"Item1"},{"id":2,"name":"Item2"}]');

// 20. JSON Schema Validation
console.log("\n=== 20. Simple Validation ===");
function validateUser(data) {
  const required = ["name", "email"];
  const missing = required.filter(field => !(field in data));
  
  if (missing.length > 0) {
    throw new Error(`Missing fields: ${missing.join(", ")}`);
  }
  
  return true;
}

try {
  const user1 = { name: "John", email: "john@example.com" };
  validateUser(user1);
  console.log("User valid");
  
  const user2 = { name: "Jane" }; // Missing email
  validateUser(user2);
} catch (error) {
  console.log(error.message); // Missing fields: email
}
