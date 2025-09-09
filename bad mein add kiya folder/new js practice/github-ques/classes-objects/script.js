// const student = {
//     fullName: 'Asad Ali',
//     marks: 40,
//     printMarks: function () {
//         console.log(this.marks)
//     }
// }

// student.printMarks()

// ----------

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     }
// };
// const karanArjun = {
//     sallery: 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// };

// karanArjun.__proto__ = employee;
// console.log("🚀 ~ karanArjun:", karanArjun);


// -----------


// class ToyotaCar {
//     start() {
//         console.log("start")
//     }
//     stop() {
//         console.log("stop")
//     }
//     setBrand(brand) {
//         this.brandName = brand;
//     }
// }

// class childToyotaCar extends ToyotaCar {
//     midd() {
//         console.log("start")
//     }
// }

// let ppp = new childToyotaCar;
// ppp.start();

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");


// ---------


// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age
//     };
//     sayHello() {
//         console.log(`Hi, i am ${this.name} and i am ${this.age} years old.`)
//     }
// }

// const asad = new Student("Asad", 30);


// let obj = {
//     name: 'Asad',
//     age: 234
// }

// // let copy = obj;
// // copy.name = 'fullName';
// // console.log(copy);
// // console.log("🚀 ~ obj:", obj);

// let deep_copy = obj;
// console.log(deep_copy === obj)



// let arr = [10, 20, 30, 40, 60, 70];
// // let sliced = arr.slice(1, 4);
// // console.log(sliced);
// // console.log(arr);


// // let spliced = arr.splice(2, 2);
// // console.log(spliced);
// // console.log(arr);
// let addsplice = arr.splice(2, 1, 13, 16);
// console.log(addsplice);
// console.log(arr);


// -------

class Parent {
    constructor(name) {
      this.name = name;
    }

    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  class Child extends Parent {
    constructor(name, age) {
      super(name); // Parent ka constructor call
      this.age = age;
    }

    info() {
      console.log(`${this.name} is ${this.age} years old`);
    }
  }

  const childObj = new Child("Sehar", 22);
  childObj.greet(); // Parent method
  childObj.info();  // Child method


// --------
