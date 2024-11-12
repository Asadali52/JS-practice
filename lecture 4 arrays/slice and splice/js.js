// // slice

let marvelHeroes = ['thor', 'spiderman', 'ironman', 'antman', 'shaktiman'];

console.log(marvelHeroes);
let heroes = marvelHeroes.slice(2, 4);
console.log(heroes);

// another example of slice 

let boys = ["asad" , "zeeshan" , "rizwan" , "saad" , "ahmad"]

console.log(boys);
let brothers = boys.slice(0 , 3);
console.log(brothers);


let marks = [87, 98, 45, 12, 53, 57, 555];

console.log(marks);
let sliceMarks = marks.slice(2, 5);
console.log(sliceMarks);

// // splice

let food = ['apple', 'banana', 'mango', 'litchi' , 'burger', 'pizza', 'shawarma', 'legpiece'];

console.log(food);
let spliceFood = food.splice(1, 3, 'add tomato in place of banana _ mango _ litchi');
console.log(spliceFood);
console.log(food);


let num = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(num);
let spliceNum = num.splice(3, 4, 'banana', 'mango', 'piece'); // remove from index 3 and removed 4 items and add 'banana' , 'mango' , 'piece'
console.log(spliceNum);
console.log(num);


// Question 

let companies = ['bloomberg', 'microsoft', 'uber', 'google', 'IBM', 'netflix'];

console.log(companies.shift()); // removed bloomberg
console.log(companies); // now array at this point ['microsoft' , 'uber' , 'google' , 'IBM' , 'netflix']
console.log(companies.splice(1, 1, 'Ola')); // remove from index 1 and removed 1 item and add 'ola' inplace of it 
console.log(companies); // predict answer here

let newCompany = ['amazon']; // another array

let finalRes = (companies.concat(newCompany)); // concat means add and new one will at end
console.log(finalRes); // predict final result

//===============================================================

let Mycompanies = ['bloomberg', 'microsoft', 'uber', 'google', 'IBM', 'netflix'];

console.log(Mycompanies.shift());
console.log(Mycompanies);
console.log(Mycompanies.splice(1, 4, 'Ola'));
console.log(Mycompanies);
console.log(Mycompanies.push('amazon'));
console.log(Mycompanies);