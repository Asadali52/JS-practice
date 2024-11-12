// console.log("start");

// setTimeout(() => {
//   console.log('This prints after two seconds');
// }, 2000);

// console.log("End");

// Promises

// let myPromise = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     reject("promise reject!");

//   }, 2000);

//   setTimeout(() => {
//     resolve("promise fulfilled!");
//   }, 2000);

// });

// myPromise.then(result => {
//   console.log(result);
// })

// console.log(myPromise)

// console.log("Start");

// myPromise.then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error);
// });

// console.log("End");

// --------------------------

// function fetchDataFromAPI() {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve({
//           status: 200,
//           data: {
//             userId: 1,
//             name: "John Doe",
//             email: "john.doe@example.com"
//           },
//           message: "Data fetched successfully"
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Failed to fetch data"
//         });
//       }
//     }, 2000);
//   });
// }

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data fetched!");
//   }, 5000);
// }

// fetchData(result => {
//   console.log(result);
// });


// console.log("Start fetching data...");

// fetchDataFromAPI()
//   .then(response => {
//     console.log("Success:", response);
//   })
//   .catch(error => {
//     console.log("Error:", error);
//   })
//   .finally(() => {
//     console.log("Fetching operation completed.");
//   });

// console.log("Fetching initiated...");

// ==================

// let a = 20;
// {
//   let a = "this variable is printing by shadowing uppr one";
//   let b = 100;   // not in the global scope
//   const c = 20;  // not in the global scope
//   // console.log(b);
//   // console.log(c);
// }

// console.log(a);
// // console.log(b);
// // console.log(c);

// let a = 20;
// let b; // Declare b in the outer scope
// const c = 30; // Declare c in the outer scope

// {
//   a = "this variable is printing by shadowing the upper one";
//   b = 100;   // Modify outer scope variable b
//   console.log(b);
// }

// console.log(a); // Logs: "this variable is printing by shadowing the upper one"
// console.log(b); // Logs: 100
// console.log(c); // Logs: 30


// Array Methods =================================================================================================

// let arr = [97, 87, 51, 1, 66, 99];
// console.log(arr);
// console.log(arr.length);
// let doubledArr = arr.map(num => num * 2);
// console.log(doubledArr);


// let myArr = [1, 4, 8, 5];
// let flatedMapArr = myArr.flatMap(num => [num, num * 2]);
// console.log(flatedMapArr);


// let letters = ['a', 'b', 'c', 'd', 'z', 'x' , 1];
// let reversedLetters = letters.reverse();
// console.log(reversedLetters);


// let heroes1 = ['antman', 'ironman', 'spiderman'];
// let heroes2 = ['shaktiman']
// let heroes = heroes1.concat(heroes2);
// console.log(heroes);


// let atArray = ['mangoes', 'apple', 'litchi'];
// let attMethod = atArray.at(1);
// console.log(attMethod);


// let batsmenArray = ['ifti-chachu', 'bobbyKing', 'riziBradMan'];
// let bowlerArray = ['sheenuLangra', 'naseema', 'amirKing'];
// let teamArray = batsmenArray.concat(bowlerArray);
// console.log(teamArray);


// let indianPlayers = ['kingKohli', 'dhoni', 'yuvi'];
// indianPlayers.push('yuzi-chahal');
// let indianTeam = indianPlayers;
// console.log(indianTeam);

// let pushArray = ['asad', 'ali'];
// pushArray.push(1);
// console.log(pushArray);


// let fruits = ['mangoes', 'apple', 'grapes', 'strawberry'];
// console.log(fruits);
// let removeFruit = fruits.pop();
// console.log(removeFruit);
// console.log(fruits);


// let popArray = [1, 5, 8, 77, 1000]
// console.log(popArray);
// let popedMethod = popArray.pop();
// console.log(popedMethod);
// console.log(popArray);


// closures ----------------

// function x () {
//   var a = 5;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// var z = x();
// console.log(z);

x();
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
  // y();
}

