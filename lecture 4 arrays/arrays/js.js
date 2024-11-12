// let marks = [ 55, 545, 445, 11, 999 ];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman", 'hulk', 'spiderman', 'shaktiman'];
// console.log(heroes);


// for loop
// let heroes = ["ironman", 'hulk', 'spiderman', 'shaktiman', 'rizwan', 'talha', 'ahmad'];
// for(let index=0; index < heroes.length; index++ ){
//   console.log(heroes[index]);
// }


// this is also a for loop
// let marks = [45, 4556, 3534, 87, 465646, 89989];
// for(let index=0; index < marks.length; index++){
//   console.log(marks[index]);
// }


// for of loop
// for (let element of heroes){
//   console.log(element);
// }

//----------------------------------
// Q1
let marks = [85, 97, 37, 44, 76, 60];
let sum = 0;
for (let val of marks){
  sum += val;
};
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);

//-----------------------------------------------------------
// Q2
let items = [250, 645, 300, 900, 50];

let i = 0;
for (let val of items){
  let offer = val / 10;
  items[i] -= offer;
  i++;
  console.log(`value after offer = ${items[i]}`);
}
