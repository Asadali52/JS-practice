// /* -------------- LEXICAL SCOPING AND CLOSURE -----------------*/
// /* -------------- LEXICAL SCOPING AND CLOSURE -----------------*/
// /* -------------- LEXICAL SCOPING AND CLOSURE -----------------*/
// /* -------------- LEXICAL SCOPING AND CLOSURE -----------------*/
// /* -------------- LEXICAL SCOPING AND CLOSURE -----------------*/

// {
//     function outer() {
//         let userName = 'asad';
//         // console.log(secret);  // THIS WILL THROUGH REFERENCE ERROR BECAUSE WE CANNOT ACCESS HERE TO SECRET VERIABLE;
//         function inner() {
//             let secret = 'my123';
//             console.log('inner Function:', userName);
//         }
//         function innerTwo() {
//             // console.log(secret);  // THIS WILL THROUGH REFERENCE ERROR BECAUSE WE CANNOT ACCESS HERE TO SECRET VERIABLE;
//             console.log('inner two Function:', userName);
//         }
//         inner();
//         innerTwo();
//     }
//     outer();
//     // console.log(userName); // IS KO ACCESS NAI KR SKTY
//     // inner(); // INNER FUNCTION SIRF OUTER FUNCTION KI BODY MEIN KAM KRY GA
// }


// {
//     function makeFunc() {
//         let name = 'Mozilla';
//         function displayName() {
//             console.log(name);
//         }
//         return displayName;
//     }

//     let myFunc = makeFunc();
//     myFunc();
// }

// // document.getElementById("orange").onclick = function () {
// //     document.body.style.background = "orange";
// // }
// // document.getElementById("green").onclick = function () {
// //     document.body.style.background = "green"
// // }

// function clickHandler(color) {
//     // document.body.style.background = `${color}`
//     return function () {
//         document.body.style.background = `${color}`;
//     }
// }

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");