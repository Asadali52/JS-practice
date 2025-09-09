// constructor function -- base blue print

// function Person(fname, lname, contact) {
//     this.fname = fname;
//     this.lname = lname;
//     this.contact = contact;
//     this.getName = function () {
//         console.log(`${this.fname} ${this.lname}`);
//     }
//     this.getContact = function () {
//         console.log(this.contact);
//     }
// }


// class Person {
//     constructor(fname, lname, contact) {
//         this.fname = fname;
//         this.lname = lname;
//         this.contact = contact
//     }
//     getContact() {
//         console.log(this.contact);
//     }
//     getName() {
//         console.log(`${this.fname} ${this.lname}`);
//     }
// }


// const p1 = new Person("Asad", "Ali", "000900990");
// console.log(p1);
// p1.getName();
// p1.getContact();


// const p2 = new Person("Ahmad", "Ali", "1234543");
// console.log(p2);
// p2.getName();
// p2.getContact();

// ------ In JS everything is an Object ----

// const p1 = {
//     fname: 'piyush',
//     lname: 'garg',
//     getFullName() {
//         return `${this.fname} ${this.lname}`
//     }
// }

// const p2 = Object.create(p1);
// p2.__proto__.fname = "Hack";
// console.log("p1 is: ", p1);
// console.log("p2 is: ", p2);

// -----

// class String {

// }

// let str = true
// console.log(str.__proto__);

// -----

const p1 = {
    xp1: "i am inside p1",
}

const p2 = {
    xp2: "i am inside p2",
    __proto__: p1,
}

const p3 = {
    xp3: "i am inside p3",
    __proto__ : p2,
}

// -----

// class Student {

//     constructor() {
//         this.fname = "Piyush";
//     }

//     getName() {
//         return "i am inside get name";
//     }
// }

// const s1 = new Student();
// const s2 = { __proto__: Student.prototype };