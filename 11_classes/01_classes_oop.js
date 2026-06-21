// =====================================================
// CLASSES AND OOP
// =====================================================

// 1. Class Declaration
console.log("=== 1. Class Declaration ===");
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  describe() {
    return `${this.brand} ${this.model}`;
  }
}

const car1 = new Car("Toyota", "Camry");
console.log(car1.describe()); // Toyota Camry

// 2. Class Properties and Methods
console.log("\n=== 2. Class Properties and Methods ===");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `Hello, I'm ${this.name}`;
  }
  
  celebrate() {
    this.age++;
    return `${this.name} is now ${this.age}`;
  }
}

const person = new Person("John", 30);
console.log(person.greet()); // Hello, I'm John
console.log(person.celebrate()); // John is now 31

// 3. Getters and Setters
console.log("\n=== 3. Getters and Setters ===");
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get area() {
    return this.width * this.height;
  }
  
  set area(value) {
    // Custom logic - this example prevents change
    console.log("Area is calculated, cannot be set directly");
  }
  
  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(10, 20);
console.log(rect.area); // 200
console.log(rect.perimeter); // 60

// 4. Static Methods
console.log("\n=== 4. Static Methods ===");
class MathUtils {
  static add(a, b) {
    return a + b;
  }
  
  static subtract(a, b) {
    return a - b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(10, 5)); // 15
console.log(MathUtils.multiply(4, 7)); // 28

// 5. Static Properties
console.log("\n=== 5. Static Properties ===");
class User {
  static userCount = 0;
  
  constructor(name) {
    this.name = name;
    User.userCount++;
  }
  
  static getCount() {
    return User.userCount;
  }
}

new User("Alice");
new User("Bob");
new User("Charlie");
console.log(User.getCount()); // 3

// 6. Inheritance
console.log("\n=== 6. Inheritance ===");
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  makeSound() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  makeSound() {
    return `${this.name} barks`;
  }
}

class Cat extends Animal {
  makeSound() {
    return `${this.name} meows`;
  }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
console.log(dog.makeSound()); // Buddy barks
console.log(cat.makeSound()); // Whiskers meows

// 7. super Keyword
console.log("\n=== 7. super Keyword ===");
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  getInfo() {
    return `Brand: ${this.brand}`;
  }
}

class Bike extends Vehicle {
  constructor(brand, type) {
    super(brand); // Call parent constructor
    this.type = type;
  }
  
  getInfo() {
    return super.getInfo() + `, Type: ${this.type}`; // Call parent method
  }
}

const bike = new Bike("Honda", "Mountain");
console.log(bike.getInfo()); // Brand: Honda, Type: Mountain

// 8. Private Fields
console.log("\n=== 8. Private Fields ===");
class BankAccount {
  #balance = 0; // Private field
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  deposit(amount) {
    this.#balance += amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
// console.log(account.#balance); // Error - Cannot access private field

// 9. Private Methods
console.log("\n=== 9. Private Methods ===");
class PasswordManager {
  #password = "";
  
  setPassword(password) {
    if (this.#validatePassword(password)) {
      this.#password = password;
      console.log("Password set successfully");
    }
  }
  
  #validatePassword(password) {
    return password.length >= 8; // Private method
  }
}

const pm = new PasswordManager();
pm.setPassword("short"); // Password must be 8+ characters
pm.setPassword("longenough123"); // Password set successfully

// 10. instanceof Operator
console.log("\n=== 10. instanceof Operator ===");
console.log(dog instanceof Dog); // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Cat); // false

// 11. Polymorphism
console.log("\n=== 11. Polymorphism ===");
const animals = [
  new Dog("Rex"),
  new Cat("Mittens"),
  new Dog("Max")
];

animals.forEach(animal => {
  console.log(animal.makeSound());
});

// 12. Abstract Class Pattern
console.log("\n=== 12. Abstract Class Pattern ===");
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class");
    }
  }
  
  getArea() {
    throw new Error("getArea() must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.getArea().toFixed(2)); // 78.54

// 13. Mixins
console.log("\n=== 13. Mixins ===");
const canEat = {
  eat() {
    return `${this.name} is eating`;
  }
};

const canWalk = {
  walk() {
    return `${this.name} is walking`;
  }
};

class Person2 {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Person2.prototype, canEat, canWalk);
const person2 = new Person2("Alice");
console.log(person2.eat()); // Alice is eating
console.log(person2.walk()); // Alice is walking

// 14. Class Expression
console.log("\n=== 14. Class Expression ===");
const MyClass = class {
  constructor(x) {
    this.x = x;
  }
  
  getValue() {
    return this.x;
  }
};

const instance = new MyClass(42);
console.log(instance.getValue()); // 42

// 15. Practical: Todo List Class
console.log("\n=== 15. Practical: Todo Class ===");
class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  
  addTodo(item) {
    this.todos.push({ id: this.todos.length + 1, text: item, done: false });
  }
  
  completeTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.done = true;
  }
  
  getTodos() {
    return this.todos;
  }
  
  getCompletedCount() {
    return this.todos.filter(t => t.done).length;
  }
}

const list = new TodoList("Daily Tasks");
list.addTodo("Study JavaScript");
list.addTodo("Practice coding");
list.completeTodo(1);
console.log(`Completed: ${list.getCompletedCount()}/${list.todos.length}`);
