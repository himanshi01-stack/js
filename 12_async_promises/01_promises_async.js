// =====================================================
// PROMISES AND ASYNC/AWAIT
// =====================================================

// 1. Introduction to Promises
console.log("=== 1. Creating a Promise ===");
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
  }, 1000);
});

myPromise.then(result => {
  console.log(result); // Promise resolved! (after 1 second)
});

// 2. Promise States
console.log("\n=== 2. Promise States ===");
// Pending -> Fulfilled or Rejected

const fulfillPromise = new Promise((resolve) => {
  resolve("Fulfilled!");
});

const rejectPromise = new Promise((_, reject) => {
  reject("Rejected!");
});

fulfillPromise.then(result => console.log(result)); // Fulfilled!
rejectPromise.catch(error => console.log("Error:", error)); // Error: Rejected!

// 3. Promise.then()
console.log("\n=== 3. Promise.then() ===");
const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Data fetched"), 500);
});

fetchData
  .then(data => {
    console.log(data); // Data fetched
    return data.toUpperCase();
  })
  .then(result => {
    console.log(result); // DATA FETCHED
  });

// 4. Promise.catch()
console.log("\n=== 4. Promise.catch() ===");
const errorPromise = new Promise((_, reject) => {
  setTimeout(() => reject("Something went wrong"), 500);
});

errorPromise
  .then(data => console.log(data))
  .catch(error => {
    console.log("Caught error:", error); // Caught error: Something went wrong
  });

// 5. Promise.finally()
console.log("\n=== 5. Promise.finally() ===");
const finallyPromise = new Promise((resolve) => {
  resolve("Done");
});

finallyPromise
  .then(result => console.log(result)) // Done
  .finally(() => {
    console.log("Cleanup code here"); // Always executes
  });

// 6. Promise Chaining
console.log("\n=== 6. Promise Chaining ===");
const step1 = (value) => new Promise(resolve => {
  setTimeout(() => resolve(value + 10), 100);
});

const step2 = (value) => new Promise(resolve => {
  setTimeout(() => resolve(value * 2), 100);
});

step1(5)
  .then(result => {
    console.log("Step 1:", result); // 15
    return step2(result);
  })
  .then(result => {
    console.log("Step 2:", result); // 30
  });

// 7. Promise.all() - Wait for all promises
console.log("\n=== 7. Promise.all() ===");
const promise1 = Promise.resolve(1);
const promise2 = new Promise(resolve => setTimeout(() => resolve(2), 100));
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All results:", results); // [1, 2, 3]
  });

// 8. Promise.race() - First promise wins
console.log("\n=== 8. Promise.race() ===");
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));

Promise.race([fast, slow])
  .then(winner => {
    console.log("Winner:", winner); // Winner: Fast
  });

// 9. Promise.allSettled() - All results
console.log("\n=== 9. Promise.allSettled() ===");
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Also Success");

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
    // [
    //   { status: 'fulfilled', value: 'Success' },
    //   { status: 'rejected', reason: 'Error' },
    //   { status: 'fulfilled', value: 'Also Success' }
    // ]
  });

// 10. Async/Await Basics
console.log("\n=== 10. Async/Await Basics ===");
async function myAsyncFunction() {
  return "Hello from async!";
}

myAsyncFunction().then(result => {
  console.log(result); // Hello from async!
});

// 11. Async/Await with Promises
console.log("\n=== 11. Await Promises ===");
async function fetchAndProcess() {
  const result = await new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 500);
  });
  console.log(result); // Data received
  return result.toUpperCase();
}

fetchAndProcess().then(final => {
  console.log("Final:", final); // Final: DATA RECEIVED
});

// 12. Error Handling with Async/Await
console.log("\n=== 12. Error Handling ===");
async function handleErrors() {
  try {
    const result = await new Promise((_, reject) => {
      setTimeout(() => reject("API Error"), 300);
    });
  } catch (error) {
    console.log("Caught:", error); // Caught: API Error
  } finally {
    console.log("Finally block executed");
  }
}

handleErrors();

// 13. Multiple Awaits
console.log("\n=== 13. Multiple Awaits ===");
async function multipleOperations() {
  const first = await Promise.resolve("First");
  const second = await Promise.resolve("Second");
  const third = await Promise.resolve("Third");
  
  console.log(`${first}, ${second}, ${third}`);
}

multipleOperations(); // First, Second, Third

// 14. Parallel Execution with Async/Await
console.log("\n=== 14. Parallel Execution ===");
async function parallelFetch() {
  // These run in parallel
  const [result1, result2, result3] = await Promise.all([
    Promise.resolve("Data 1"),
    Promise.resolve("Data 2"),
    Promise.resolve("Data 3")
  ]);
  
  console.log(result1, result2, result3);
}

parallelFetch(); // Data 1 Data 2 Data 3

// 15. Async Loop
console.log("\n=== 15. Async in Loops ===");
async function asyncLoop() {
  const items = [1, 2, 3];
  
  // Sequential
  for (const item of items) {
    const result = await new Promise(resolve => {
      setTimeout(() => resolve(item * 2), 100);
    });
    console.log("Sequential:", result);
  }
}

// asyncLoop(); // Uncomment to see sequential execution

// 16. Practical: Simulated API Call
console.log("\n=== 16. Practical: API Simulation ===");
async function fetchUserData(userId) {
  try {
    const user = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId > 0) {
          resolve({ id: userId, name: "John Doe", email: "john@example.com" });
        } else {
          reject("Invalid user ID");
        }
      }, 500);
    });
    console.log("User:", user);
    return user;
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchUserData(1); // Fetches user
fetchUserData(-1); // Shows error

// 17. Creating Delay Function
console.log("\n=== 17. Delay Function ===");
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitAndLog() {
  console.log("Start");
  await delay(1000);
  console.log("After 1 second");
}

// waitAndLog(); // Uncomment to see

// 18. Promise vs Async/Await Comparison
console.log("\n=== 18. Promise vs Async/Await ===");
// Promise way
function promiseWay() {
  return fetchUserData(1)
    .then(user => user.name)
    .catch(err => console.log(err));
}

// Async/Await way (cleaner)
async function asyncWay() {
  try {
    const user = await fetchUserData(1);
    return user.name;
  } catch (err) {
    console.log(err);
  }
}

// 19. Higher Order Function with Async
console.log("\n=== 19. Higher Order Async Function ===");
function createAsyncFunction(delay) {
  return async () => {
    await new Promise(resolve => setTimeout(resolve, delay));
    return `Completed after ${delay}ms`;
  };
}

const asyncFunc = createAsyncFunction(300);
asyncFunc().then(msg => console.log(msg));

// 20. Async IIFE (Immediately Invoked)
console.log("\n=== 20. Async IIFE ===");
(async () => {
  const result = await Promise.resolve("IIFE Result");
  console.log(result); // IIFE Result
})();
