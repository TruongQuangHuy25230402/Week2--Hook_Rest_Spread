// Rest (You should read a file Spread.js first)
/*
Function: Rest is used to combine arguments into an array. It often used in function declarations to receive an unspecified number of arguments.
Syntax: ...
*/
// Example

const num = [1, 2, 3];
function numbers(...params){
    console.log(params)
}
numbers(...num)

// If my array is num = [1,2]
// Our result will be [1,2] instead of [1,2,undefined]
// With this example, i use rest to define my function, so that i can receive any arguments. It mean I have already handled the problem in file Spread.js

// Moreover, you can use destructuring with rest.

function logger({name,age}){
    console.log(name)
    console.log(age)
}

logger({
    name: 'John',
    age: 20,
    gender: 'Male'
})
// the result will be John and 20 instead of John, 20 and undefined