// Promise is a effective way to handle asynchronous in Javascript
//Promises can be in one of three states:
/*
Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
*/
// We will use Then Catch in asynchronous. 
/*
The then...catch methods are used for handling promises and asynchronous operations. 
When you have a promise, you can use then to specify what to do when the promise is fulfilled 
and catch to handle any errors that occur during the asynchronous operation. */

// Creating a promise
let myPromise = new Promise((resolve, reject) => {
    let success = true; 
    setTimeout(() => {
      if (success) {
        resolve("Operation successful!");
      } else {
        reject("Operation failed.");
      }
    }, 2000);
  });
  
  // Using a promise
  myPromise
    .then((result) => {
      console.log(result); // "Operation successful!"
    })
    .catch((error) => {
      console.error(error); // "Operation failed."
    });
  
// this is how it work: 
/*
Firstly, I create a Promise. It take 2 functions resolve and reject as arguments.
If your code is done successfully, it will resolve the problem and print out "Operation successful".
But if your code is failed. It will reject and print out an error.

After creating, i use promise by the key word then. If there is a result, that mean my code is done successfully, it 
will print out "Operation successful". and in the opposite, if my code fails It will reject and print out "Operation failed."
*/


/*
Promise.all is a method that takes an array of promises and returns a single promise. 
This returned promise resolves when all the input promises have resolved or rejects when any of the input promises reject.
*/

//EX
// Creating multiple promises
let promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second"));
let promise3 = new Promise((resolve) => setTimeout(resolve, 3000, "Third"));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // ["First", "Second", "Third"]
  })
  .catch((error) => {
    console.error(error);
  });


  // But if one of my promise is failed. It will print out error

let promise4 = new Promise((resolve) => setTimeout(resolve, 1000, "4"));
let promise5 = new Promise((resolve, reject) => setTimeout(reject, 2000, "5 failed"));
let promise6 = new Promise((resolve) => setTimeout(resolve, 3000, "6"));

Promise.all([promise4, promise25, promise6])
  .then((results) => {
    console.log(results); // This will not run
  })
  .catch((error) => {
    console.error(error); // "5 failed"
  });