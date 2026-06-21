// =====================================================
// STRING METHODS
// =====================================================

// 1. Basic String Properties
console.log("=== 1. String Length ===");
const str = "JavaScript";
console.log(str.length); // 10
console.log(str[0]); // "J"
console.log(str[9]); // "t"

// 2. charAt() and charCodeAt()
console.log("\n=== 2. charAt() and charCodeAt() ===");
console.log(str.charAt(0)); // "J"
console.log(str.charAt(4)); // "S"
console.log(str.charCodeAt(0)); // 74

// 3. indexOf() - Find first occurrence
console.log("\n=== 3. indexOf() ===");
const text = "Hello World, Hello JavaScript";
console.log(text.indexOf("Hello")); // 0
console.log(text.indexOf("Hello", 5)); // 13
console.log(text.indexOf("Python")); // -1

// 4. lastIndexOf() - Find last occurrence
console.log("\n=== 4. lastIndexOf() ===");
console.log(text.lastIndexOf("Hello")); // 13
console.log(text.lastIndexOf("o")); // 27

// 5. includes() - Check if contains
console.log("\n=== 5. includes() ===");
console.log(text.includes("World")); // true
console.log(text.includes("Python")); // false
console.log(text.includes("JavaScript")); // true

// 6. startsWith() and endsWith()
console.log("\n=== 6. startsWith() and endsWith() ===");
const email = "john@example.com";
console.log(email.startsWith("john")); // true
console.log(email.endsWith(".com")); // true
console.log(email.endsWith(".org")); // false

// 7. substring() - Extract portion
console.log("\n=== 7. substring() ===");
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4)); // "Script"

// 8. slice() - Extract portion with negative support
console.log("\n=== 8. slice() ===");
console.log(str.slice(0, 4)); // "Java"
console.log(str.slice(4)); // "Script"
console.log(str.slice(-6)); // "Script" (last 6 characters)
console.log(str.slice(-6, -2)); // "Scri"

// 9. substr() - Extract based on length
console.log("\n=== 9. substr() ===");
console.log(str.substr(0, 4)); // "Java"
console.log(str.substr(4, 6)); // "Script"

// 10. toUpperCase() and toLowerCase()
console.log("\n=== 10. toUpperCase() and toLowerCase() ===");
console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"

// 11. trim() - Remove whitespace
console.log("\n=== 11. trim() ===");
const withSpaces = "  Hello World  ";
console.log(withSpaces.length); // 15
console.log(withSpaces.trim().length); // 11
console.log(withSpaces.trimStart()); // "Hello World  "
console.log(withSpaces.trimEnd()); // "  Hello World"

// 12. replace() - Replace first occurrence
console.log("\n=== 12. replace() ===");
console.log(text.replace("Hello", "Hi")); // "Hi World, Hello JavaScript"
console.log(text.replace(/l/g, "L")); // Replace all 'l' with 'L'

// 13. replaceAll() - Replace all occurrences
console.log("\n=== 13. replaceAll() ===");
console.log(text.replaceAll("Hello", "Hi")); // "Hi World, Hi JavaScript"

// 14. split() - Convert to array
console.log("\n=== 14. split() ===");
const csv = "apple,banana,cherry,date";
console.log(csv.split(",")); // ["apple", "banana", "cherry", "date"]

const sentence = "The quick brown fox";
console.log(sentence.split(" ")); // ["The", "quick", "brown", "fox"]
console.log(sentence.split("")); // ["T","h","e"," "...]

// Limit number of splits
console.log(csv.split(",", 2)); // ["apple", "banana"]

// 15. concat() - Combine strings
console.log("\n=== 15. concat() ===");
const first = "Hello";
const last = "World";
console.log(first.concat(" ", last)); // "Hello World"
console.log("Hello".concat(" ", "World", "!")); // "Hello World!"

// 16. repeat() - Repeat string
console.log("\n=== 16. repeat() ===");
console.log("Ha".repeat(3)); // "HaHaHa"
console.log("*".repeat(10)); // "**********"

// 17. padStart() and padEnd()
console.log("\n=== 17. padStart() and padEnd() ===");
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"
console.log("Hello".padStart(10, "*")); // "*****Hello"
console.log("Hello".padEnd(10, "*")); // "Hello*****"

// 18. match() - Find matches
console.log("\n=== 18. match() ===");
const email1 = "user@example.com";
console.log(email1.match(/\w+/)); // ["user", ...]
console.log("aaa bbb ccc".match(/\w+/g)); // ["aaa", "bbb", "ccc"]

// 19. search() - Find first match index
console.log("\n=== 19. search() ===");
console.log(text.search(/world/i)); // 6

// 20. localeCompare() - Compare strings
console.log("\n=== 20. localeCompare() ===");
console.log("a".localeCompare("b")); // -1 (a comes before b)
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0

// 21. String Constructor Methods
console.log("\n=== 21. String.fromCharCode() ===");
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

// 22. Checking String Type
console.log("\n=== 22. Checking if String ===");
console.log(typeof "hello"); // "string"
console.log(typeof new String("hello")); // "object"
console.log("hello" instanceof String); // false
console.log(new String("hello") instanceof String); // true
