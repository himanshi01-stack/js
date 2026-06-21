// =====================================================
// REGULAR EXPRESSIONS (REGEX)
// =====================================================

// 1. Creating Regular Expressions
console.log("=== 1. Creating Regex ===");
// Method 1: Literal
const regex1 = /hello/;

// Method 2: Constructor
const regex2 = new RegExp("hello");

console.log(regex1.test("hello world")); // true
console.log(regex2.test("hello world")); // true

// 2. Flags
console.log("\n=== 2. Regex Flags ===");
const text = "Hello HELLO hello";

// i - Case insensitive
console.log(/hello/i.test(text)); // true

// g - Global (find all)
console.log(text.match(/hello/g)); // ["hello"]
console.log(text.match(/hello/gi)); // ["Hello", "HELLO", "hello"]

// m - Multiline
const multiline = "line1\nline2\nline3";
console.log(multiline.match(/^line/gm)); // ["line", "line", "line"]

// 3. test() - Check if matches
console.log("\n=== 3. test() Method ===");
const email = "test@example.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test(email)); // true
console.log(emailRegex.test("invalid-email")); // false

// 4. exec() - Get match details
console.log("\n=== 4. exec() Method ===");
const match = /(\w+)@(\w+)\.(\w+)/.exec("john@example.com");
console.log(match);
// ["john@example.com", "john", "example", "com", ...]

console.log(match[0]); // john@example.com (full match)
console.log(match[1]); // john (group 1)
console.log(match[2]); // example (group 2)
console.log(match[3]); // com (group 3)

// 5. Character Classes
console.log("\n=== 5. Character Classes ===");
console.log(/\d/.test("123")); // true - digit
console.log(/\D/.test("abc")); // true - non-digit
console.log(/\w/.test("a1_")); // true - word character
console.log(/\W/.test("!@#")); // true - non-word
console.log(/\s/.test(" ")); // true - whitespace
console.log(/\S/.test("text")); // true - non-whitespace

// 6. Quantifiers
console.log("\n=== 6. Quantifiers ===");
console.log(/a/.test("a")); // true - exactly one
console.log(/a+/.test("aaa")); // true - one or more
console.log(/a*/.test("")); // true - zero or more
console.log(/a?/.test("")); // true - zero or one
console.log(/a{3}/.test("aaa")); // true - exactly 3
console.log(/a{2,4}/.test("aaa")); // true - 2 to 4
console.log(/a{3,}/.test("aaaa")); // true - 3 or more

// 7. Anchors
console.log("\n=== 7. Anchors ===");
console.log(/^hello/.test("hello world")); // true - starts with
console.log(/world$/.test("hello world")); // true - ends with
console.log(/^hello$/.test("hello")); // true - exact match
console.log(/\bhello\b/.test("hello world")); // true - word boundary

// 8. String.match()
console.log("\n=== 8. String.match() ===");
const text2 = "The numbers are 123, 456, and 789";
console.log(text2.match(/\d+/)); // ["123"] - first match
console.log(text2.match(/\d+/g)); // ["123", "456", "789"] - all matches

// 9. String.replace()
console.log("\n=== 9. String.replace() ===");
const text3 = "Hello World";
console.log(text3.replace(/world/i, "JavaScript")); // Hello JavaScript
console.log(text3.replace(/l/g, "L")); // HeLLo WorLd

// 10. String.replaceAll()
console.log("\n=== 10. String.replaceAll() ===");
const text4 = "apple apple apple";
console.log(text4.replaceAll("apple", "orange")); // orange orange orange

// 11. String.split() with Regex
console.log("\n=== 11. String.split() with Regex ===");
const text5 = "apple, banana; cherry: date";
console.log(text5.split(/[,;:]/)); // ["apple", " banana", " cherry", " date"]

// 12. String.search()
console.log("\n=== 12. String.search() ===");
const text6 = "Hello World JavaScript";
console.log(text6.search(/world/i)); // 6 - index of match
console.log(text6.search(/xyz/)); // -1 - not found

// 13. Groups and Capturing
console.log("\n=== 13. Groups and Capturing ===");
const date = "2024-06-15";
const dateRegex = /(\d{4})-(\d{2})-(\d{2})/;
const [fullDate, year, month, day] = date.match(dateRegex);

console.log(`Year: ${year}, Month: ${month}, Day: ${day}`); // Year: 2024, Month: 06, Day: 15

// 14. Alternation (OR)
console.log("\n=== 14. Alternation ===");
console.log(/cat|dog/.test("I have a cat")); // true
console.log(/cat|dog/.test("I have a dog")); // true
console.log(/cat|dog/.test("I have a bird")); // false

// 15. Escape Special Characters
console.log("\n=== 15. Escaping Special Chars ===");
console.log(/\$\d+/.test("$100")); // true
console.log(/\(.*\)/.test("(test)")); // true
console.log(/\d+\.\d+/.test("3.14")); // true - escaped dot

// 16. Case Insensitive
console.log("\n=== 16. Case Insensitive ===");
const text7 = "JavaScript JAVASCRIPT javascript";
console.log(text7.match(/javascript/)); // null
console.log(text7.match(/javascript/i)); // ["JavaScript"]
console.log(text7.match(/javascript/gi)); // ["JavaScript", "JAVASCRIPT", "javascript"]

// 17. Form Validation Patterns
console.log("\n=== 17. Validation Patterns ===");
// Email
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test("user@example.com")); // true

// Phone number (US format)
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
console.log(phonePattern.test("123-456-7890")); // true

// Password (8+ chars, at least one uppercase, one number)
const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(passwordPattern.test("Password123")); // true
console.log(passwordPattern.test("weak")); // false

// 18. Remove Whitespace
console.log("\n=== 18. Remove/Trim Whitespace ===");
const text8 = "  hello   world  ";
console.log(text8.replace(/^\s+|\s+$/g, "")); // "hello   world"
console.log(text8.replace(/\s+/g, " ").trim()); // "hello world"

// 19. Extract Information
console.log("\n=== 19. Extract Information ===");
const url = "https://www.example.com:8080/path?query=value&id=123";
const urlPattern = /^(https?):\/\/([\w.]+):?(\d+)?(.*)$/;
const urlMatch = url.match(urlPattern);

console.log(`Protocol: ${urlMatch[1]}`); // https
console.log(`Domain: ${urlMatch[2]}`); // www.example.com
console.log(`Port: ${urlMatch[3]}`); // 8080
console.log(`Path: ${urlMatch[4]}`); // /path?query=value&id=123

// 20. Named Capture Groups
console.log("\n=== 20. Named Capture Groups ===");
const dateStr = "2024-06-15";
const datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const dateMatched = dateStr.match(datePattern);

console.log(dateMatched.groups.year); // 2024
console.log(dateMatched.groups.month); // 06
console.log(dateMatched.groups.day); // 15

// 21. Lookahead and Lookbehind
console.log("\n=== 21. Lookahead Assertions ===");
// Positive lookahead (?=...)
console.log(/\d+(?=px)/.test("100px")); // true

// Negative lookahead (?!...)
console.log(/\d+(?!px)/.test("100pt")); // true
console.log(/\d+(?!px)/.test("100px")); // false

// 22. Practical: URL Validation
console.log("\n=== 22. URL Validation ===");
const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)$/;

console.log(urlRegex.test("https://www.example.com")); // true
console.log(urlRegex.test("invalid url")); // false

// 23. Practical: HTML Tag Removal
console.log("\n=== 23. HTML Tag Removal ===");
const html = "<h1>Hello</h1><p>World</p>";
const plainText = html.replace(/<[^>]*>/g, "");
console.log(plainText); // HelloWorld

// 24. Practical: Color Hex Validation
console.log("\n=== 24. Hex Color Validation ===");
const hexColorPattern = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

console.log(hexColorPattern.test("#FF5733")); // true
console.log(hexColorPattern.test("FF5733")); // true
console.log(hexColorPattern.test("FFF")); // true
console.log(hexColorPattern.test("GGGGGG")); // false

// 25. Regex Performance
console.log("\n=== 25. Regex Performance ===");
const perfText = "aaaaaaaaaaaaaaaaaab";

console.time("Greedy");
/a+b/.test(perfText);
console.timeEnd("Greedy");

console.time("Non-greedy");
/a+?b/.test(perfText);
console.timeEnd("Non-greedy");
