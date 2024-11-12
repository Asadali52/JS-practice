// OBJECTS IN JAVASCRIPT

// let student = {
//     fullName: "asad ali",
//     marks: 78.5,
//     printMarks: function () {
//         console.log("marks =", this.marks) // student.marks
//     },
//     printName: function () {
//         console.log("fullName =", this.fullName) // student.fullName
//     },
// }

// const employee = {
//     calcTax () {
//         console.log("Tax rate is 10%")
//     },

//     // calcTax2: function () {
//     //     console.log('Tax rate is 10%')
//     // },
// }

// const  karanArjun = {
//     salary: 50000,
// }

// const  karanArjun2 = {
//     salary: 40000,
// }

// const  karanArjun3 = {
//     salary: 30000,
// }

// const  karanArjun4 = {
//     salary: 20000,
// }

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// _______________________________

// const employee = {
//     calcTax () {
//         console.log("Tax rate is 10%")
//     },
// }

// const karanArjun = {
//     salary: 50000,
//     calcTax () {
//         console.log("Tax rate is 20%")
//     },
// }

// karanArjun__proto__ = employee;

 // ======================================== ANOTHER EXAMPLE ==================================

//  const student = {
// 	name: "ali",
// 	marks: 60.9,

// 	printMarks() {
// 		console.log("marks =", this.marks);
// 	},

// 	printName() {
// 		console.log("name =", this.name)
// 	}
//  }

//  const suleman = {
// 	age: 15,
//  }

//  let proto = suleman__proto__ = student;
//  console.log(proto);

// ========================================================

// CLASSES IN JAVASCRIPT

// class ToyotaCar {
// 	constructor() {
// 		console.log("creating new objects");
// 	}
// 	start() {
// 		console.log('start');
// 	}
// 	stop() {
// 		console.log('stop');
// 	}
// 	setBrand(brand) {
// 		this.brandName = brand;
// 	}
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");


// we can also write like this

// class ToyotaCar {
// 	constructor(brand, mileage) {
// 		console.log("creating new objects");
// 		this.brand = brand;
// 		this.mileage = mileage;
// 	}
// 	start() {
// 		console.log('start');
// 	}
// 	stop() {
// 		console.log('stop');
// 	}
// }

// let fortuner = new ToyotaCar('suzuki', 10);
// console.log(fortuner);
// let lexus = new ToyotaCar('lexus', 12);
// console.log(lexus);