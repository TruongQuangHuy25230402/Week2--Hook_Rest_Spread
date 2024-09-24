/*
The try...catch statement is used to handle exceptions that occur during the execution of SYNCHRONOUS code.
It allows you to catch and handle errors that might occur in a block of code, preventing the program from crashing.

*/
try {
    // Attempting to parse a JSON string
    let jsonString = '{"name": "John", "age": 30}'; // A valid JSON string
    let user = JSON.parse(jsonString);
    console.log(user.name); // Should log "John"
  
    // Now let's use an invalid JSON string
    let invalidJsonString = '{"name": "John", "age": 30'; // Missing closing brace
    let userInvalid = JSON.parse(invalidJsonString); // This will throw an error
    console.log(userInvalid.name); // This line will not be executed
  } catch (error) {
    // Code to handle the error
    console.error("JSON parsing error:", error.message);
  }


// So we will use try...catch in a synchronous code. And then...catch in a asynchronous code.
// I have already explained then...catch in promise_promiseAll.js file.