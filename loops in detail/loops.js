// for (let i = 1; i <= 5; i++) {
//   console.log('Loops are very imp in js' );
// }

// for (let a = 1; a <= 100 ; a = a + 1) {
//   console.log('For Loop exmaple')
// }

// calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++ ){
//   sum = sum + i
// }
// console.log('sum =', sum);
//

// let a = 2;
// for(let i = 1; i < 5; i++ ){
//   add = a + i
// }
// console.log('add =', add);

// print 1 to 5 
// for ( let i = 1; i <= 5; i++ ){
//   console.log('i =', i)
// }

// print 1 to 5 by var 
// for ( var i = 1; i <= 5; i++ ){
//   console.log('i =', i)
// }
// console.log(i);

// print 0 to lac with gap of 100
// for ( let b = 0; b <= 100000; b = b + 100 ){
//   console.log('b =', b)
// }
// console.log(b);

//------------- FOR LOOP END -----------------//
//------------ FOR OF LOOP START ------------//

// let str = "apnacollege";
// for (let i of str) {
//   console.log("i =", i)
// }
// console.log("loop ended");

// =========

// let val = "jawaScript";
// let size = 0;
// for (let i of val) {
//   console.log("i =", i);
//   size++;
// }

// console.log("string size =", size);
// console.log("loop ended");

//=============================

// let player = "ZimbuAzam";
// let length = 0;
// for (let i of player) {
//   console.log("i =", i);
//   length++;
// }
// console.log("string =", length )
// console.log("loop ended");

// let arr = ['ali', 'asad', 'rizzi', 'shanu'];
// let length = 0;
// for(let i of arr){
//   console.log("i =", i);
//   length++;
// }
// console.log("length is ",length);

// const arrayWithObjects = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Doe" }
// ];
// for (const obj of arrayWithObjects) {
//   console.log(`ID: ${obj.id}, Name: ${obj.name}`);
// }

//-------------FOR OF LOOP END ----------------//
//------------- FOR IN LOOP START ---------------//

// let student = {
//   name: "Rahul Kumar",
//   age: 22,
//   cgpa: 7.5,
//   isPass: true
// };
// for ( let myobj in student ){
//   console.log("key =", myobj, "value =", student[myobj]);
// }

//======================

// let student = {
//   name: "Rahul Gandhi",
//   age: 100,
//   cgpa: 5.1,
//   ispass: false
// };
// for (let key in student){
//   console.log("key: ", key ,"--------------", "value: ", student[key]);
// }


// ==================== PRACTICE QUESTION ==========================//
// Print all even numbers from 0 to 100

// for (let num=0; num <=100; num++){
//   if( num%2 === 0){
//     console.log(num, 'num is even')
//   }
// }

// Print all odd numbers from 0 to 100

// for(let count=0; count <=100; count++){
//   if(count%2 != 0) {
//     console.log(count, "num is odd")
//   }
// }

// print all number divided by 5 from 0 t0 100

// for(let num=0; num <=100; num++){
//   if(num%5 === 0) {
//     console.log(num, "num is dividing by 5");
//   }
// }

// ---------------------Q2-----------------
//GUESS RIGHT NUMBER IN PROMPT

// let gameNum = 25;
// let userNum = prompt('Guess the Game number:');

// while(userNum != gameNum){
//  userNum =  prompt("You entered wrong number, guess again");
// };

// console.log("congrats you entered right num");
