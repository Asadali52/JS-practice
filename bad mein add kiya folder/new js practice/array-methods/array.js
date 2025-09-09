// 1. push()
// adds one or more elements to the end of the array 
// changes the original array
// returns the new length of the array

// {
//     let arr = [1, 2, 3];
//     let newLength = arr.push(4, 5);
//     console.log("🚀 ~ newLength:", newLength) // 5
//     console.log("🚀 ~ arr:", arr) // [1, 2, 3, 4, 5]
// }

// ------------------------------------------------------------------------------------

// 2. pop()
// remove the last element of the array 
// changes the original array
// returns the remove element

// {
//     let arr = [1, 2, 3];
//     let removed = arr.pop();
//     console.log("🚀 ~ removed:", removed); // 3
//     console.log("🚀 ~ arr:", arr); // [1, 2]
// }


// ------------------------------------------------------------------------------------


// 3. shift()
// removes the first element from the array 
// changes the original array
// returns the removes element

// {
//     let arr = [1, 2, 3];
//     let shifted = arr.shift();
//     console.log("🚀 ~ shifted:", shifted) // 1
//     console.log("🚀 ~ arr:", arr); // [2, 3]
// }


// ------------------------------------------------------------------------------------


// 4. unshift()
// adds one or more elements at the begining of the array
// changes the original array
// returns the new length of the array

// {
//     let arr = [2, 3];
//     let unshifted = arr.unshift(0, 1);
//     console.log("🚀 ~ unshifted:", unshifted); // 4
//     console.log("🚀 ~ arr:", arr); // [0, 1, 2, 3]
// }


// ------------------------------------------------------------------------------------


// 5. filter()
// Loops thrugh array and returns a new array with element that pass the condition
// Does not change the original array 

// {
//     let arr = [1, 2, 3, 4, 5];
//     let even = arr.filter(num => num % 2 === 0);
//     console.log("🚀 ~ arr:", arr) // [1, 2, 3, 4, 5]
//     console.log("🚀 ~ even:", even) // [2, 4]
// }


// ------------------------------------------------------------------------------------

// 6. map()
// loops through array and returns a new array with transformed values 
// Does not change the original array 

// {
//     let arr = [1, 2, 3, 4, 5];
//     let doubled = arr.map(num => num * 2);
//     console.log("🚀 ~ arr:", arr); // [1, 2, 3, 4, 5]
//     console.log("🚀 ~ doubled:", doubled) // [2, 4, 6, 8, 10]
// }


// ------------------------------------------------------------------------------------

// 7. forEach()
// Loop thorugh array and executes a function on each element 
// Does not returns a new array (returns undefined)
// Used for side effects (logging , updating, etc.)

// {
//     let arr = [1, 2, 3];
//     let result = arr.forEach(num => console.log(num * 2));
//     console.log("🚀 ~ result:", result);  // its returns undefined
//     console.log("🚀 ~ arr:", arr) // [1, 2, 3] => no change in origial arrray
// }


// ------------------------------------------------------------------------------------


// 8. reduce()
// Loops through an array and returns a single value (sum, product, object, etc)
// Does not change original array

// {
//     let arr = [1, 2, 3, 4];
//     let sum = arr.reduce((acc, curr) => {
//         return acc + curr
//     },0);
//     console.log("🚀 ~ arr:", arr) // [1, 2, 3, 4]
//     console.log("🚀 ~ sum:", sum) // 10
// }


// ------------------------------------------------------------------------------------


// 9. concat()
// joins two or more arrays into new one
// does not change the original array
// Returns new array

// {
//     let arr1 = [1, 2];
//     let arr2 = [3, 4];
//     let combined = arr1.concat(arr2);
//     console.log("🚀 ~ arr1:", arr1); // [1, 2]
//     console.log("🚀 ~ arr2:", arr2); // [3, 4]
//     console.log("🚀 ~ combined:", combined); // [1, 2, 3, 4]
// }


// ------------------------------------------------------------------------------------


// 10. Set(new Set()) 
// A  set is not an array method but a data structure in JS
// it stores unique value only
// can be used to removed duplicates from the arrray

// {
//     let arr = [1, 2, 2, 3, 4, 4, 5];
//     // let unique = [...new Set(arr)];
//     let unique = new Set(arr)
//     console.log("🚀 ~ unique:", unique); // [1,2,3,4,5]
//     console.log("🚀 ~ arr:", arr); // [1, 2, 2, 3, 4, 4, 5]
// }


// ------------------------------------------------------------------------------------


// 11. slice()
//  Does not change the original array/string
// Returns a new copy (a shallow copy for arrays, substring for strings).
// slice(start, end) // end is not included

// {
//     let arr = [10, 20, 30, 40, 50];
//     let sliced = arr.slice(1, 4);
//     console.log("🚀 ~ sliced:", sliced) // [20, 30, 40] new array
//     console.log("🚀 ~ arr:", arr) // unchanged original array

//     let str = "javascript";
//     let slicedStr = str.slice(0, 4);
//     console.log("🚀 ~ slicedStr:", slicedStr) // java (new string)
//     console.log("🚀 ~ str:", str) // unchanged string
// }


// ------------------------------------------------------------------------------------


// 12. splice() // STRINGS DO NOT HAVE SPLICE METHOD
// changes the original array 
// Returns the remove elements as a new array
// splice(start, deleteCount, item1, item2, ....)


// {
//     let arr = [10, 20, 30, 40, 50];
//     let spliced = arr.splice(1, 2);
//     console.log("🚀 ~ spliced:", spliced); // [20 , 30] removed elements
//     console.log("🚀 ~ arr:", arr); // [10, 40, 50] changed origial array 
// }
// {
//     let arr = [1, 2, 5];
//     arr.splice(2, 0, 3, 4);
//     console.log("🚀 ~ arr:", arr)
// }