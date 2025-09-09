// let a = 0;
// var a = 0;
// console.log(a);
// a = 10;


// function a() {
//     let x = 10;
//     return function b() {
//         return function c() {
//             console.log(x);
//         }
//     }
// }

// let y = a();
// let z = y()
// console.log("🚀 ~ z:", z)
// z();



// function a(callBack) {
//     let x = 10;
//     return function b() {
//         return callBack();
//     }
// }

// let y = a(() => console.log('asad'));
// console.log("🚀 ~ y:", y())
// // let z = y()
// // console.log("🚀 ~ z:", z)



// function a(callBack) {
//     let x = 10;
//     return function b() {
//         return callBack(x);
//     }
// }

// let y = a((val) => console.log('Value of x is:', val));
// y();
// console.log("🚀 ~ y:", y)


// function outer() {
//     let a = 10;
//    return function inner() {
//         console.log(a++);
//     }
// }

// let res = outer();
// res();
// res();
// res();

// call, apply , bind method 

const printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state);
}

let name = {
    firstName: "Asad",
    lastName: "Ali",
};
printFullName.call(name, "Kasur", "Pakistan");

let name2 = {
    firstName: "Ahmad",
    lastName: 'Pasha',
};
printFullName.call(name2, "Raiwind", "Pakistan");

let name3 = {
    firstName: "Haji",
    lastName: 'Abd',
};
printFullName.apply(name3, ["Kasur", "Pakistan"]);


let printMyName = printFullName.bind(name2, "Raiwind", "Pakistan")
printMyName();



// ----

function greet(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name} ${punctuation}`);
}

const person1 = { name: 'Asad' };
const person2 = { name: 'Ahmad' };

greet.call(person1, "Hello", "!");
greet.apply(person2, ["Hi", '!!']);


const greetAsad = greet.bind(person1, "Salam");
greetAsad("?");

// ----

// Using call() for Method Borrowing
const student = {
    name: 'Haji',
    introduce: function (subject) {
        console.log(`I am ${this.name} and i study ${subject}.`);
    }
}
const teacher = { name: 'Abdullah' };

student.introduce.call(teacher, "Mathematics");


// ----

// apply() with Math Functions
const numbers = [3, 5, 7, 2, 9];
const max = Math.max.apply(null, numbers);
console.log(max);
// in modern js you would do it like this 
console.log(Math.max(...numbers));


// ----

//  bind() for Event Handlers in Objects
const counter = {
    count: 0,
    increament: function () {
        this.count++;
        console.log(this.count);
    },
};

const button = document.createElement("button");
button.innerText = "Click me";
document.body.appendChild(button);

// button.addEventListener("click", counter.increament);

button.addEventListener("click", counter.increament.bind(counter));


// ----

// Partial Application with bind()
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);

console.log(double(10));

console.log(double(7));


// ----