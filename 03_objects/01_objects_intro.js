// =====================================================
// OBJECTS - Introduction and Basics
// =====================================================

// 1. Creating Objects - Object Literal
console.log("=== 1. Object Literal ===");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",
  isStudent: false
};

console.log(person);
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// 2. Accessing Properties
console.log("\n=== 2. Accessing Properties ===");
const key = "age";
console.log(person[key]); // Dynamic access with variable
console.log(person.email);

// 3. Adding/Modifying Properties
console.log("\n=== 3. Adding/Modifying Properties ===");
person.city = "New York"; // Add new property
person.age = 31; // Modify existing property
console.log(person);

// 4. Deleting Properties
console.log("\n=== 4. Deleting Properties ===");
delete person.isStudent;
console.log(person);

// 5. Object Methods
console.log("\n=== 5. Object Methods (Functions in Objects) ===");
const student = {
  name: "Alice",
  rollNo: 101,
  marks: 85,
  
  // Method - Function inside object
  greet: function() {
    console.log(`Hello, I'm ${this.name}`);
  },
  
  getGrade: function() {
    if (this.marks >= 90) return "A";
    if (this.marks >= 80) return "B";
    if (this.marks >= 70) return "C";
    return "D";
  }
};

student.greet();
console.log(`Grade: ${student.getGrade()}`);

// 6. Checking if Property Exists
console.log("\n=== 6. Checking if Property Exists ===");
console.log("name" in student); // true
console.log("marks" in student); // true
console.log("address" in student); // false
console.log(student.hasOwnProperty("name")); // true

// 7. Getting All Keys and Values
console.log("\n=== 7. Getting All Keys and Values ===");
console.log(Object.keys(person)); // Array of keys
console.log(Object.values(person)); // Array of values
console.log(Object.entries(person)); // Array of [key, value] pairs

// 8. Object.assign - Copying Objects
console.log("\n=== 8. Object.assign - Copying Objects ===");
const person2 = Object.assign({}, person); // Shallow copy
person2.firstName = "Jane";
console.log(person.firstName); // "John" - not affected
console.log(person2.firstName); // "Jane"

// 9. Spread Operator for Objects
console.log("\n=== 9. Spread Operator for Objects ===");
const person3 = { ...person };
person3.firstName = "Bob";
console.log(person.firstName); // "John"
console.log(person3.firstName); // "Bob"

// 10. Merging Objects
console.log("\n=== 10. Merging Objects ===");
const address = {
  city: "Mumbai",
  country: "India"
};

const completeProfile = { ...person, ...address };
console.log(completeProfile);

// 11. Nested Objects
console.log("\n=== 11. Nested Objects ===");
const employee = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  },
  contact: {
    email: "john@company.com",
    phone: "555-1234"
  }
};

console.log(employee.address.city); // New York
console.log(employee.contact.email); // john@company.com

// 12. Loop Through Object Properties
console.log("\n=== 12. Loop Through Object Properties ===");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// 13. Computed Property Names
console.log("\n=== 13. Computed Property Names ===");
const propName = "status";
const user = {
  name: "Charlie",
  [propName]: "active", // Computed property
  ["age_" + 2024]: "born in 1994"
};
console.log(user);

// 14. Object Shorthand (ES6)
console.log("\n=== 14. Object Shorthand (ES6) ===");
const firstName2 = "David";
const age2 = 25;
const city2 = "Boston";

const person4 = {
  firstName: firstName2,
  age: age2,
  city: city2
};

// Shorthand - when key and value variable have same name
const person5 = { firstName: firstName2, age: age2, city: city2 };
console.log(person5);
