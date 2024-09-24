// Every Javascript file will run from the beginning to the end. We call it synchronous.
// Or to be specific, synchronous is one operation must be done before the next one starts
// Synchronous example
console.log("Start");
function longRunningOperation() {
  // Simulate a long-running operation
  let start = Date.now();
  while (Date.now() - start < 3000) {}
  console.log("Long operation finished");
}

longRunningOperation();
console.log("End");


// Asynchronous allows other operations to run while waiting for the long-running task to complete. 
//This approach prevents blocking and can make the program more responsive.
// Asynchronous example using callbacks
console.log("Start");

function longRunningOperation(callback) {
  // Simulate a long-running operation
  setTimeout(() => {
    console.log("Long operation finished");
    callback();
  }, 3000);
}

longRunningOperation(() => {
  console.log("End");
});
//In the above example, "End" will be logged immediately after "Start"
// because setTimeout schedules the operation to complete in the future, allowing the program to continue running.