// =====================================================
// ERROR HANDLING
// =====================================================

// 1. try-catch Block
console.log("=== 1. try-catch Block ===");
try {
  const result = 10 / 2;
  console.log("Result:", result); // 5
} catch (error) {
  console.log("Error caught:", error);
}

// 2. Catching Errors
console.log("\n=== 2. Catching Errors ===");
try {
  throw new Error("Something went wrong!");
} catch (error) {
  console.log("Error message:", error.message); // Something went wrong!
  console.log("Error name:", error.name); // Error
}

// 3. try-catch-finally
console.log("\n=== 3. try-catch-finally ===");
try {
  console.log("In try block");
  throw new Error("Test error");
} catch (error) {
  console.log("In catch block:", error.message);
} finally {
  console.log("In finally block - always executes");
}

// 4. Error Types
console.log("\n=== 4. Error Types ===");

// TypeError
try {
  const obj = null;
  obj.method(); // TypeError
} catch (error) {
  console.log("TypeError:", error.message);
}

// ReferenceError
try {
  console.log(undefinedVariable); // ReferenceError
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// RangeError
try {
  const arr = new Array(-1); // RangeError
} catch (error) {
  console.log("RangeError:", error.message);
}

// SyntaxError (compile-time, can't be caught)
// try { eval("invalid syntax here"); } catch(e) { console.log(e); }

// 5. Custom Error Class
console.log("\n=== 5. Custom Error ===");
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

try {
  throw new CustomError("Custom error occurred");
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}

// 6. Validation Error
console.log("\n=== 6. Validation Error ===");
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError("email", "Invalid email format");
  }
  return email;
}

try {
  validateEmail("invalidemail");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation failed for ${error.field}: ${error.message}`);
  }
}

// 7. Nested try-catch
console.log("\n=== 7. Nested try-catch ===");
try {
  try {
    throw new Error("Inner error");
  } catch (innerError) {
    console.log("Inner catch:", innerError.message);
    throw new Error("Re-thrown error");
  }
} catch (outerError) {
  console.log("Outer catch:", outerError.message);
}

// 8. Error Handling in Functions
console.log("\n=== 8. Function Error Handling ===");
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Error thrown
} catch (error) {
  console.log("Error:", error.message);
}

// 9. Async Error Handling
console.log("\n=== 9. Async Error Handling ===");
async function fetchData() {
  try {
    const data = await new Promise((_, reject) => {
      setTimeout(() => reject("API Error"), 500);
    });
  } catch (error) {
    console.log("Caught async error:", error);
  }
}

fetchData();

// 10. Error in Promise Chain
console.log("\n=== 10. Promise Chain Error ===");
Promise.resolve(10)
  .then(result => {
    if (result < 20) throw new Error("Value too small");
    return result;
  })
  .then(result => console.log("Result:", result))
  .catch(error => console.log("Promise error:", error.message));

// 11. Multiple Errors
console.log("\n=== 11. Multiple Errors ===");
function processData(data) {
  const errors = [];
  
  if (!data) errors.push("Data is required");
  if (typeof data !== "object") errors.push("Data must be an object");
  if (Object.keys(data).length === 0) errors.push("Data cannot be empty");
  
  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }
  
  return data;
}

try {
  processData({});
} catch (error) {
  console.log("Validation errors:", error.message);
}

// 12. Error Stack Trace
console.log("\n=== 12. Error Stack Trace ===");
function functionA() {
  functionB();
}

function functionB() {
  throw new Error("Error in B");
}

try {
  functionA();
} catch (error) {
  console.log("Stack:", error.stack);
}

// 13. Global Error Handler
console.log("\n=== 13. Global Error Handler ===");
// Note: In browsers, use: window.onerror or window.addEventListener("error", ...)
// In Node.js: process.on("uncaughtException", ...)

// 14. Throwing Different Types
console.log("\n=== 14. Throwing Different Types ===");
try {
  throw "This is a string error"; // Can throw anything
} catch (error) {
  console.log("Caught:", error);
}

try {
  throw { custom: "object error" };
} catch (error) {
  console.log("Caught object:", error);
}

// 15. Error Handling Pattern
console.log("\n=== 15. Error Handling Pattern ===");
class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "AppError";
  }
}

function getUserData(userId) {
  if (!userId) throw new AppError(400, "User ID is required");
  if (userId < 0) throw new AppError(400, "Invalid user ID");
  return { id: userId, name: "User" };
}

try {
  console.log(getUserData(1));
} catch (error) {
  if (error instanceof AppError) {
    console.log(`HTTP ${error.statusCode}: ${error.message}`);
  }
}

// 16. Finally for Cleanup
console.log("\n=== 16. Finally for Cleanup ===");
function fileOperation() {
  let file = null;
  try {
    file = "opened";
    console.log("File opened");
    throw new Error("Read error");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    if (file) {
      console.log("File closed");
    }
  }
}

fileOperation();

// 17. Timeout Error Pattern
console.log("\n=== 17. Timeout Error Pattern ===");
class TimeoutError extends Error {
  constructor(duration) {
    super(`Operation timed out after ${duration}ms`);
    this.name = "TimeoutError";
  }
}

async function withTimeout(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => reject(new TimeoutError(ms)), ms);
  });
  return Promise.race([promise, timeout]);
}

// Usage: withTimeout(somePromise, 5000)

// 18. Retry Logic
console.log("\n=== 18. Retry Logic ===");
async function retryOperation(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.log(`Retry ${i + 1}/${maxRetries - 1}`);
    }
  }
}

// 19. Error Context
console.log("\n=== 19. Error Context ===");
function wrapError(error, context) {
  const wrapped = new Error(`${context}: ${error.message}`);
  wrapped.originalError = error;
  wrapped.context = context;
  return wrapped;
}

try {
  throw wrapError(new Error("Database error"), "User creation");
} catch (error) {
  console.log("Wrapped error:", error.message);
  console.log("Context:", error.context);
}

// 20. Error Logging
console.log("\n=== 20. Error Logging ===");
function logError(error, context = "") {
  console.group("Error Log");
  console.error("Message:", error.message);
  console.error("Type:", error.name);
  if (context) console.error("Context:", context);
  console.error("Stack:", error.stack);
  console.groupEnd();
}

try {
  throw new Error("Critical error");
} catch (error) {
  logError(error, "Payment processing");
}
