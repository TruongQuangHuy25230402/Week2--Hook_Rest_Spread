// Spread
/*
Function: Spread is used to unpack the element of an array or the properties of an object into individual element of the components.
Syntax: ...
*/
// Example

// array
let a = [1,2,3,4,5]
let b = [6,7,8,9,10]
let c = [...a,...b]
console.log(c)
// The result will be [1,2,3,4,5,6,7,8,9,10]

//object 
let student = {
    name: 'John',
    age: 20,
    gender:'male'
}
let school = {
    schoolName: 'Harvard',
    class: '12A2'
}
let all = {...student,...school}
console.log(all)

// We also can use spread as an argument ò a function 
const num = [1, 2, 3];
function numbers(a,b,c){
    console.log(a,b,c)
}
numbers(...num)
// The results will be [1,2,3]

// However, if our array is lack of an element. For instance: 
// const num = [1, 2];
// The results will be [1,2,undefined]
// to solve this problem, we will use Rest 