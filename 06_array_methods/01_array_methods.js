// =====================================================
// ARRAY METHODS - Essential Methods
// =====================================================

// 1. map() - Transform each element
console.log("=== 1. map() - Transform Array ===");
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" }
];

const names = users.map(user => user.name);
console.log(names); // ["John", "Alice", "Bob"]

// 2. filter() - Select elements that match condition
console.log("\n=== 2. filter() - Filter Array ===");
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const adults = users.filter(user => user.id > 1);
console.log(adults); // [Alice, Bob]

// 3. reduce() - Reduce array to single value
console.log("\n=== 3. reduce() - Reduce to Single Value ===");
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

const product = numbers.reduce((total, num) => total * num, 1);
console.log(product); // 120

// Count occurrences
const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// 4. forEach() - Execute function for each element
console.log("\n=== 4. forEach() - Loop Through Array ===");
numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// 5. find() - Get first element matching condition
console.log("\n=== 5. find() - Find First Match ===");
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

const userAlice = users.find(user => user.name === "Alice");
console.log(userAlice); // { id: 2, name: "Alice" }

// 6. findIndex() - Get index of first match
console.log("\n=== 6. findIndex() - Find Index ===");
const indexOfEven = numbers.findIndex(num => num % 2 === 0);
console.log(indexOfEven); // 1 (index of 2)

// 7. some() - Check if ANY element matches
console.log("\n=== 7. some() - Check ANY ===");
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false

// 8. every() - Check if ALL elements match
console.log("\n=== 8. every() - Check ALL ===");
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false

// 9. includes() - Check if array contains value
console.log("\n=== 9. includes() - Check Contains ===");
console.log(numbers.includes(3)); // true
console.log(numbers.includes(10)); // false

// 10. indexOf() - Find index of element
console.log("\n=== 10. indexOf() ===");
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(10)); // -1

// 11. lastIndexOf() - Find last index of element
console.log("\n=== 11. lastIndexOf() ===");
const arr = [1, 2, 3, 2, 1];
console.log(arr.lastIndexOf(2)); // 3

// 12. join() - Convert array to string
console.log("\n=== 12. join() - Array to String ===");
console.log(numbers.join()); // "1,2,3,4,5"
console.log(numbers.join("-")); // "1-2-3-4-5"
console.log(numbers.join(" | ")); // "1 | 2 | 3 | 4 | 5"

// 13. reverse() - Reverse array (mutates original)
console.log("\n=== 13. reverse() ===");
const arr1 = [1, 2, 3];
arr1.reverse();
console.log(arr1); // [3, 2, 1]

// 14. sort() - Sort array
console.log("\n=== 14. sort() ===");
const unsorted = [3, 1, 4, 1, 5, 9, 2];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log(sorted); // [1, 1, 2, 3, 4, 5, 9]

// Sort strings
const words = ["banana", "apple", "cherry"];
words.sort();
console.log(words); // ["apple", "banana", "cherry"]

// 15. slice() - Extract portion without mutation
console.log("\n=== 15. slice() ===");
const original = [1, 2, 3, 4, 5];
const portion = original.slice(1, 4);
console.log(portion); // [2, 3, 4]
console.log(original); // [1, 2, 3, 4, 5] - Unchanged

// 16. splice() - Modify array by removing/adding elements
console.log("\n=== 16. splice() ===");
const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.splice(2, 2); // Remove 2 elements starting at index 2
console.log(removed); // [3, 4]
console.log(arr2); // [1, 2, 5] - Modified

// Insert elements
arr2.splice(2, 0, 3, 4); // Insert at index 2
console.log(arr2); // [1, 2, 3, 4, 5]

// 17. concat() - Combine arrays
console.log("\n=== 17. concat() ===");
const arr3 = [1, 2];
const arr4 = [3, 4];
const combined = arr3.concat(arr4);
console.log(combined); // [1, 2, 3, 4]

// 18. flat() - Flatten nested arrays
console.log("\n=== 18. flat() - Flatten ===");
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// 19. flatMap() - map then flatten
console.log("\n=== 19. flatMap() ===");
const nums = [1, 2, 3];
const result = nums.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

// 20. fill() - Fill array with value
console.log("\n=== 20. fill() ===");
const arr5 = new Array(5);
arr5.fill(0);
console.log(arr5); // [0, 0, 0, 0, 0]

// Fill specific range
arr5.fill(1, 1, 4); // Fill 1 from index 1 to 4
console.log(arr5); // [0, 1, 1, 1, 0]
