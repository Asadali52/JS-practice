// Rest operator _____ collect values into an array 
// used in function parameters in destructuring 
// PURPOSE : gather remaining elements into an array 


{
    function sum(...numbers) {
        return numbers.reduce((acc, curr) => acc + curr, 0)
    };
    console.log(sum(1, 2, 3, 4, 5, 6, 7));
}


{
    const [first, ...rest] = [10, 20, 30, 40, 50];
    console.log(first);
    console.log(rest);
}

{
    const { a, ...rest } = {
        a: 1,
        b: 2,
        c: 3
    };
    console.log(a);
    console.log(rest);
}


// spread operator ______ expand values
// used in function calls , arrays / object literals
// PURPOSE : spread element from an array or object into individual items


{
    const nums = [1, 2, 3, 4, 5];
    console.log(Math.max(...nums));
}
{
    let arr1 = [1, 2];
    let arr2 = [...arr1, 3, 4];
    let arr3 = [...arr2, 5, 6];
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
}
{
    let obj1 = { x: 1, y: 2 };
    let obj2 = { ...obj1, z: 3 };
    let obj3 = { a: 26, ...obj2 };
    console.log(obj1);
    console.log(obj2);
    console.log(obj3);
}

// _____________________________________________________________________

{
    const [a, b] = [10, 20];
    console.log(a, b);
}

{
    const user = { name: 'Ali', age: 25, city: 'Lahore' };
    const { name, age, ...rest } = user;
    console.log(name, age, rest);
}

{
    const [first, , third] = [1, 2, 3];
    console.log(third); // 3
}

{
    const person = { fName: 'Asad', lName: 'Ali' };
    const { fName: firstName, lName: lastName } = person;
    console.log(firstName);
    console.log(lastName);
}

{
    let x = 1;
    let y = 2;
    arr = [x, y];
    [y, x] = arr;
    console.log(`y = ${y} x = ${x}`);
}

{
    let { a, b = 5 } = { a: 3, }
    console.log(a, b); // 3 , 5
}

{
    const data = {
        user:
        {
            address:
            {
                zip: 12345
            }
        }
    };
    const { user: { address: { zip } } } = data;
    console.log(zip);
}

{
    const { age } = {};
    console.log(age); // undefined
}

{
    function sum(...nums) {
        return nums.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(1, 2, 3)); // 6
}

{
    const numbers = [10, 20, 30, 40];
    let [first, ...rest] = numbers;
    console.log(first);
    console.log(rest);
}

{
    const { a, ...rest } = { a: 1, b: 2, c: 3 };
    console.log(rest); // print whole object except a property
}

{
    // const { ...rest, a } = obj; // this is not valid syntax
}

{
    const nums = [1, 2];
    const moreNums = [...nums, 3, 4];
    console.log(moreNums);
}

{
    const values = [5, 10, 15];
    console.log(Math.max(...values)); // 15
}

{
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    const merged = { ...obj1, ...obj2 };
    console.log(merged);
}

{
    const objA = { x: 1, y: 2 };
    const objB = { y: 99, z: 3 };
    const merged = { ...objA, ...objB };
    console.log(merged); // will add second object property
}

// Part --------- II ------------ and advanced problems

{
    const arr = [1, [2, [3, [4, 5]]]];
    let [, [, [, [, five]]]] = arr;
    console.log(five);
}

{
    const data = { user: { name: 'Asad' } };
    const { user, user: { name: userName, age = 30 } } = data;
    console.log(user);
    console.log(userName, age);
}

{
    // Destructure the object directly in the function parameter:
    const user = { id: 101, name: 'Ali', role: 'admin' };
    function printUser({ name, role }) {
        console.log(`${name} is a ${role}`);
    };
    printUser(user);
}

{
    // Get only the 2nd and 4th items from:
    const items = ["a", "b", "c", "d", "e"];
    let [, second, , fourth] = items;
    console.log(second, fourth);
}

{
    function getProduct() {
        return {
            id: 101,
            title: "Bag",
            price: 3000,
            stock: 20
        };
    }
    const { title, stock } = getProduct(); // more optimized way
    console.log(title, stock);
    console.log(getProduct().title, getProduct().stock);
}


{
    function logFirstArg(first, ...others) {
        console.log(first); // array first element 
        console.log(others); // rest all
    }
    logFirstArg(1, 2, 3, 4);
}

{
    const employee = {
        name: "Asad",
        position: "Developer",
        salary: 5000,
        country: "Pakistan"
    };
    const { name, ...rest } = employee;
    console.log(name);
    console.log(rest);
}

{
    const { x: a, ...others } = { x: 1, y: 2, z: 3 };
    console.log(a);
    console.log(others);
}

{
    const original = { name: "Ali", age: 25 };
    const updated = { ...original, age: 30 };
    console.log(updated);
}

{
    const frontEnd = ["HTML", "CSS"];
    const backEnd = ["Node", "Express"];
    let res = [...frontEnd, ...backEnd];
    console.log(res);
}

{
    const marks = [88, 92, 76, 95, 89];
    console.log(Math.min(...marks));
}

{
    const word = 'hello';
    const letters = [...word];
    console.log(letters);
    // console.log(word.split(''));
}

{
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 99, c: 3 };
    const merged = { ...obj2, ...obj1 };
    console.log(merged);
}

/// ======================

{
    const nums = [5, 10, 15, 20];
    let [, , third] = nums;
    console.log(third);
}

{
    let a = "first";
    let b = "second";
    [b, a] = [a, b];
    console.log(`b = ${b}`);
    console.log(`a = ${a}`);
}

{
    const values = [1, 2, 3, 4, 5];
    let [first, second, ...rest] = values;
    console.log(first, second, rest);
}

{
    const [a = 10, b = 20] = [undefined, 30];
    console.log(a, b); // 10 30
}

{
    const arr = [1, [2, 3]];
    let [, [, three]] = arr;
    console.log(three);
}

{
    const product = { title: "Book", price: 500 };
    let { title, price: cost } = product;
    console.log(title, cost); // book 500
}

{
    const obj = { x: 1, y: 2, z: 3 };
    let { z } = obj;
    console.log(z);
}

{
    const { a, b = 2 } = { a: 1 };
    console.log(a, b);
}

{
    const user = { info: { address: { zip: 12345 } } };
    let { info: { address: { zip } } } = user;
    console.log(zip);
}

{
    const showInfo = ({ name, age }) => {
        console.log(`${name} is ${age} years old`);
    };
    const person = { name: "Ali", age: 25 };
    showInfo(person);
}


{
    function logAll(...args) {
        console.log(args);
    }
    logAll('asasa', 'df');
}