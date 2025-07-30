'use strict';
// **__1__** var, let, const ka farq samjhao aur example do.
// {
//     var user = 'Asad';
//     user = 'ali' // reassignment allowed
//     let myName = 'Asad ali';
//     myName = 'ali ilyas'; // reassignment allowed
//     const fullName = 'Asad Ilyas';
//     fullName = 'ali khan'; // reassignment not allowed
// }
// console.log(user); // this will console ali (function scope)
// console.log(myName) // this will give reference error (block scope)
// console.log(fullName); // this will give reference error (block scope)

// function test() {
//     console.log(user);      // undefined
//     // console.log(myName); //  ReferenceError
//     // console.log(fullName); //  ReferenceError

//     var user = 'Asad';
//     let myName = 'Ali';
//     const fullName = 'Ali Ilyas';

//     console.log(user);      // Asad
//     console.log(myName);    // Ali
//     console.log(fullName);  // Ali Ilyas
// }

// test();


// **__2__** Data types ko identify karo: typeof null, typeof [], typeof NaN.
console.log(typeof null); // object
console.log(typeof [23, 45]); // object
console.log(typeof NaN); // number


// **__3__** Ek program likho jo 1 se 10 tak numbers print kare.
{
  for (let i = 1; i <= 10; i++) {
    console.log(i)
  }
}


// **__4__** Function likho jo do numbers ka sum kare.
{
  function sum(num1, num2) {
    let result = num1 + num2;
    return result;
  }
  console.log(sum(1, 20));
}


// **__5__** Ek array mein se max value return karne wali function banao.
{
  function findMaxValue(arr) {
    if (arr.length === 0) {
      return undefined
    }
    let maxNum = -Infinity;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNum) {
        maxNum = arr[i];
      }
    }
    return maxNum
  }
  console.log(findMaxValue([1, 2, 13, 4, 95, 6]));
}


// **__6__** Truthy aur Falsy values kya hoti hain? 5 examples do.
{
  console.log(false, 0, -0, "", null); // falsy values
  console.log("hello", 1, [], {}, true) // truthy values
}


// **__7__** For loop aur while loop se even numbers print karo.
// {
//     for (let i = 0; i <= 50; i++) {
//         if (i % 2 === 0) {
//             console.log(i)
//         }
//     }
//     let i = 0;
//     while (i <= 50) {
//         if (i % 2 === 0) {
//             console.log(i);
//         };
//         i++
//     }
// }


// **__8__** String reverse karne ka function banao (e.g., reverseString("hello")).
{
  function reverseString(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      revStr = revStr + str[i];
    }
    return revStr;
  }
  console.log(reverseString("asad"));
}


// **__9__** Palindrome check karne ka function banao.
{
  function isPalindrome(str) {
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      revStr = revStr + str[i];
    }
    return str === revStr;
  }
  console.log(isPalindrome('madam'));
}


// **__10__**  Array ke duplicates remove karne ka function banao.
{
  function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
  console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 4, 4,]));
}


// **__11__** Template literals ka use karke ek greeting message banao.
{
  let name = 'Asad';
  let greeting = 'How are you ?';
  console.log(`Hi ${name}, ${greeting}`)
}


// **__12__** Ek object banao aur uske properties ko access karo.
{
  const student = {
    name: 'Asad',
    age: 22,
    cgpa: 1.3
  }
  console.log(student.name);
  console.log(student.age);
  console.log(student['cgpa'])
}


// **__13__** Array ko ascending order mein sort karo bina built-in method ke. (smj ni ai iski)
{
  function ascendingOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  console.log(ascendingOrder([1, 3, 2, 5, 7, 4]));
}


// **__14__** == aur === ka difference samjhao with examples.
{
  let a = 5;
  let b = '5';
  console.log(a == b); // only compare values
  console.log(a === b); // also compare data type
}


// **__15__** map, filter, aur reduce functions ka basic use samjhao.
{
  {
    let arr = [1, 2, 3, 4, 5];
    let result = arr.map(function (num) {
      return num * 3
    });
    console.log(result);
  }
  {
    let arr = [10, 20, 30, 40, 50];
    let result = arr.filter(num => num >= 30);
    console.log(result);
  }
  {
    let arr = [1, 2, 3, 4, 5];
    let result = arr.reduce(function (acc, curr, idx, arr) {
      let res = acc + curr;
      return res;
    });
    console.log(result);
  }
  {
    let nums = [30, 90, 30];
    let avg = nums.reduce((acc, curr, index, arr) => {
      acc = acc + curr;
      if (index === arr.length - 1) {
        return acc / arr.length;
      };
      return acc;
    });
    console.log(avg);
  }
}


// **__16__** Callback function kya hota hai? Ek example do.
{
  {
    function greet(name, callback) {
      console.log(`Hello ${name}`);
      callback();
    }

    function sayBye() {
      console.log("GoodBye");
    }
    greet('Ahmad', sayBye)
  }
  {
    function greet(name, callback) {
      console.log(`Hello ${name}`);
      callback();
    }

    greet("Asad", () => {
      console.log("GoodBye!");
    });
  }
}


// **__17__** Higher-order function kya hota hai? Function pass karo as argument.
{
  {
    function processNumber(num, callback) {
      return callback(num);
    }

    console.log(processNumber(19, n => n + 10))
  }
  {
    function processNumber(num, callback) {
      return callback(num);
    }

    function square(n) {
      return n * n;
    }

    console.log(processNumber(5, square));
  }
}


// **__18__**  Currying function implement karo.
{
  function add(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  };
  console.log(add(200)(292)(312));
}


// **__19__**  Closure kya hota hai? Ek practical example likho.
{
  {
    function outer() {
      let outerVariable = 'outer variable';
      return function inner() {
        let innerVariable = 'ali';
        console.log(outerVariable); // this will print asad
      };
      // console.log(innerVariable); // this will give reference error
    };
    const result = outer();
    result();
  }
  {
    function counter() {
      let count = 0;
      return function () {
        count++;
        console.log("current count:", count)
      };
    };
    const increment = counter();
    increment();
    increment();
  }
}


// **__20__** 'this' keyword ka context explain karo with example.
{
  // console.log(window) // give window object in both strict and unstrict mode
  function x() {
    console.log(this);
  }
  x(); // this will give undefined in strict mode but give window object in unstrict mode

  const obj = {
    a: 10,
    x: function () {
      console.log(this); // the value of this is whole obj here in both strict and unstrict mode 
      console.log(this.a) // this means obj and .a mein property of obj 
    }
  }
  obj.x();

  const student = {
    name: 'Asad',
    printName: function () {
      console.log(this.name);
    }
  };

  student.printName();

  const student2 = {
    name: 'Rida',
  };

  student.printName.call(student2);
}
{
  const obj = {
    a: 10,
    x: () => {
      console.log(this)
    }
  };
  obj.x();
}
{
  const obj = {
    a: 10,
    x: function () {
      const y = () => {
        console.log(this)
      }
      y();
    }
  };
  obj.x();
}


// **__21__** Spread operator aur rest parameter ka difference explain karo.

// Rest operator _____ collect values into an array 
// used in function parameters in destructuring 
// PURPOSE : gather remaining elements into an array 
{
  function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4, 5));
}
{
  const [first, second, , ...rest] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  console.log(first);
  console.log(second);
  console.log(rest);
}
{
  const { a: first, b, ...rest } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };
  console.log(first);
  console.log(b);
  console.log(rest);
}

// spread operator ______ expand values
// used in function calls , arrays / object literals
// PURPOSE : spread element from an array or object into individual items
{
  {
    let arr = [12, 45, 678, 34, 76];
    console.log(Math.max(...arr));
  }
  {
    let a = [1, 2, 3];
    let b = [4, 5, 6];
    let c = [...a, ...b];
    console.log(c);
  }
  {
    let obj1 = { fName: 'asad' };
    let obj2 = { lName: 'ali' };
    let merged = { ...obj1, ...obj2 };
    console.log(merged);
  }
}

// **__22__** Object destructuring aur array destructuring ka use dikhao.
{
  {
    let arr = ['first', 'second'];
    let [first, second] = arr;
    console.log(first, second);
  }

  {
    let arr = ["first", 'second', 'third'];
    let [first, , third] = arr; // skip second
    console.log(first, third);
  }

  {
    let arr = [1, 2, 3, 4,];
    let [, , , , fifth = 5] = arr; // skip all and add 5 with default value 5
    console.log(fifth);
  }

  {
    let obj = { fName: 'Asad', age: 20, cgpa: 2 };
    let { fName, age, cgpa } = obj;
    console.log(fName, age, cgpa);
  }

  {
    let obj = { fullName: 'Asad Ali', age: 20 };
    let { fullName, age = 22, stack = 'frontEnd' } = obj;
    console.log(fullName, age, stack);
  }
}

//**__23__** Ek function banao jo n factorial return kare (recursion use karo).
{
  function fictorial(n) {
    if (n === 1 || n === 0) return 1
    return n * fictorial(n - 1)
  };
  console.log(fictorial(5));
}
{
  function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log(fibonacci(10))
}

//**__24__** Debouncing function implement karo.