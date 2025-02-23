// Ek array hai [2, 4, 6, 8], isko map() ka use karke har element ka square nikalna hai.
{
    let array = [2, 4, 6, 8];
    let output = array.map(num => num * num);
    console.log(output);
}


// Ek array of strings ["asad", "ali", "ahmed"] hai, har naam ka first letter capital karna hai.
{
    let array = ["asad", "ali", "ahmed"];
    let output = array.map(str => str[0].toUpperCase() + str.slice(1));
    console.log(output);
}


// Ek array of numbers [1, 2, 3, 4, 5] diya gaya hai, isko map() ka use karke double karna hai.
{
    let numbers = [1, 2, 3, 4, 5];
    let output = numbers.map(num => num + num);
    console.log(output);
}


// const users = [{name: "Asad", age: 25}, {name: "Ali", age: 30}];
// Isse map() ka use karke sirf names ka ek new array banaana hai.
{
    const users = [{ name: "Asad", age: 25 }, { name: "Ali", age: 30 }, { name: "Nauroz", age: 30 }];
    let output = users.map(user => {
        return user.name
    });
    console.log(output);
}


// Ek array of numbers [1, 2, 3, 4, 5, 6, 7, 8] diya gaya hai, sirf even numbers ko filter karna hai.
{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let output = numbers.filter(even => {
        return even % 2 === 0;
    })
    console.log(output);
}


// const users = [{name: "Asad", age: 25}, {name: "Ali", age: 17}, {name: "Ahmed", age: 20}];
// Sirf 18+ users ko filter karna hai.
{
    const users = [{ name: "Asad", age: 25 }, { name: "Ali", age: 17 }, { name: "Ahmed", age: 20 }];
    let output = users.filter(user => user.age > 18);
    console.log(output);
}


// Ek array of strings ["apple", "banana", "grape", "avocado"] hai, sirf "a" or "A" se start hone wale words filter karna hai.
{
    let array = ["apple", "banana", "grape", "Avocado"];
    let output = array.filter(str => {
        if (str[0] === 'a' || str[0] === 'A') {
            return str;
        }
    });
    console.log(output);
}


// Ek array [1, 2, 3, 4, 5, 6, 7, 8] diya gaya hai, sirf prime numbers ko filter karna hai.
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    let output = array.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num;
    });
    console.log(output);
}


// Ek array [1, 2, 3, 4, 5] diya gaya hai, iska sum reduce() ka use karke nikalna hai.
{
    let array = [1, 2, 3, 4, 5];
    let output = array.reduce((acc, curr) => acc + curr, 0);
    console.log(output);
}


// Ek array [2, 3, 4, 5] hai, iska product (multiplication) reduce() ka use karke nikalna hai.
{
    let array = [2, 3, 4, 5];
    let output = array.reduce((acc, curr) => acc * curr, 1);
    console.log(output);
}


// Isme se reduce() ka use karke total price calculate karni hai.
{
    const items = [
        { name: "Apple", price: 50 },
        { name: "Banana", price: 20 },
        { name: "Mango", price: 30 }
    ];
    let output = items.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0)
    console.log(output);
}


// Ek array [10, 5, 8, 20, 15] diya gaya hai, reduce() ka use karke sabse bada number nikalna hai.
{
    let array = [10, 5, 8, 20, 15, 21];
    let output = array.reduce((acc, max) => {
        if (acc > max) {
            max = acc;
        }
        return max;
    })
    console.log(output);
}


// Ek array ["hello", "world", "javascript"] hai, har string ka reverse karna hai.
{
    let array = ["hello", "world", "javascript"];
    let output = array.map(str => {

    });
    console.log(output);
}