// =====================================================
// OBJECTS - Advanced Concepts
// =====================================================

// 1. this Keyword in Objects
console.log("=== 1. 'this' Keyword in Objects ===");
const book = {
  title: "JavaScript Guide",
  author: "John Smith",
  year: 2023,
  
  describe: function() {
    return `${this.title} by ${this.author} (${this.year})`;
  }
};

console.log(book.describe());

// 2. Object.freeze - Make Object Immutable
console.log("\n=== 2. Object.freeze ===");
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

Object.freeze(config);
config.timeout = 10000; // This won't work - silent failure in non-strict mode
console.log(config.timeout); // Still 5000

// 3. Object.seal - Allow modification but not addition/deletion
console.log("\n=== 3. Object.seal ===");
const settings = {
  theme: "dark",
  language: "en"
};

Object.seal(settings);
settings.theme = "light"; // This works
settings.newProp = "value"; // This won't work
console.log(settings);

// 4. Getters and Setters
console.log("\n=== 4. Getters and Setters ===");
const bank = {
  _balance: 1000, // Convention: _ prefix for "private" properties
  
  get balance() {
    return this._balance;
  },
  
  set balance(amount) {
    if (amount < 0) {
      console.log("Balance cannot be negative");
      return;
    }
    this._balance = amount;
  }
};

console.log(bank.balance); // Uses getter - logs 1000
bank.balance = 2000; // Uses setter
console.log(bank.balance); // 2000
bank.balance = -100; // Won't work

// 5. defineProperty - Define properties with control
console.log("\n=== 5. Object.defineProperty ===");
const car = {};

Object.defineProperty(car, "brand", {
  value: "Toyota",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(car.brand); // Toyota
car.brand = "Honda"; // Works because writable: true

// 6. Creating Read-only Property
console.log("\n=== 6. Read-only Property ===");
const laptop = {};

Object.defineProperty(laptop, "serialNumber", {
  value: "SN123456",
  writable: false, // Cannot be changed
  enumerable: true,
  configurable: false // Cannot be reconfigured
});

console.log(laptop.serialNumber); // SN123456
laptop.serialNumber = "SN999999"; // Won't work
console.log(laptop.serialNumber); // Still SN123456

// 7. Object Comparison
console.log("\n=== 7. Object Comparison ===");
const obj1 = { name: "John" };
const obj2 = { name: "John" };
const obj3 = obj1;

console.log(obj1 === obj2); // false - Different references
console.log(obj1 === obj3); // true - Same reference
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true - Same content

// 8. Checking if Objects are Empty
console.log("\n=== 8. Checking if Object is Empty ===");
const emptyObj = {};
const filledObj = { name: "John" };

console.log(Object.keys(emptyObj).length === 0); // true
console.log(Object.keys(filledObj).length === 0); // false

// 9. Copying Nested Objects (Deep Copy)
console.log("\n=== 9. Deep Copy of Nested Objects ===");
const original = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001"
  }
};

// Shallow copy problem
const shallow = { ...original };
shallow.address.city = "Boston";
console.log(original.address.city); // "Boston" - Original affected!

// Deep copy solution 1: JSON method
const deepCopy1 = JSON.parse(JSON.stringify(original));
deepCopy1.address.city = "Los Angeles";
console.log(original.address.city); // "Boston" - Original NOT affected

// Note: Recreate original for next demo
const original2 = {
  name: "John",
  address: {
    city: "New York",
    zip: "10001"
  }
};

// 10. Iterate Over Object Entries
console.log("\n=== 10. Iterating Over Objects ===");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};

// Using Object.entries and forEach
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// 11. Object Composition
console.log("\n=== 11. Object Composition ===");
const canEat = {
  eat: function() {
    return `${this.name} is eating`;
  }
};

const canWalk = {
  walk: function() {
    return `${this.name} is walking`;
  }
};

const canBark = {
  bark: function() {
    return `${this.name} is barking`;
  }
};

const dog = Object.assign({ name: "Buddy" }, canEat, canWalk, canBark);
console.log(dog.eat());
console.log(dog.walk());
console.log(dog.bark());

// 12. Symbol Property - Unique, non-enumerable properties
console.log("\n=== 12. Symbol Properties ===");
const privateId = Symbol("id");

const user = {
  name: "Alice",
  [privateId]: "secret-123"
};

console.log(user.name); // "Alice"
console.log(user[privateId]); // "secret-123"
console.log(Object.keys(user)); // ["name"] - Symbol not enumerated
