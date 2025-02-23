//  Ek array diya gaya hai, usko ek single string mein convert karne ke liye reduce method ka use karo.
{
    const words = ['Hello', 'World', 'JavaScript'];
    let output = words.reduce((acc, curr) => {
        return acc + ' ' + curr;
    })
    console.log(output);
}


//  Ek array diya gaya hai, usme se duplicate values remove karne ke liye reduce method ka use karo.
{
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    let output = numbers.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, [])
    console.log(output);
}


// Ek nested array diya gaya hai, use flatten karne ke liye reduce method ka use karo.
{
    const nestedArray = [[1, 2], [3, 4], [5, 6]];
    let output = nestedArray.reduce((acc, curr) => {
        for (let i = 0; i < curr.length; i++) {
            acc.push(curr[i]);
        }
        return acc;
    }, [])
    console.log(output);
}


//  Ek array diya gaya hai, usme se sabse lamba word find karne ke liye reduce method ka use karo.
{
    const words = ['apple', 'banana', 'kiwi', 'strawberry'];
    let output = words.reduce((maxLength, curr) => {
        if (curr.length > maxLength.length) {
            maxLength = curr;
        }
        return maxLength;
    })
    console.log(output);
}


// Ek array diya gaya hai, usme har element ka square nikal kar ek naya array banane ke liye reduce method ka use karo.
{
    const numbers = [1, 2, 3, 4, 5];
    let output = numbers.reduce((acc, curr) => {
        acc.push(curr * curr)
        return acc;
    }, [])
    console.log(output);
}


// Ek array diya gaya hai, usme har string ko uppercase mein convert karne ke liye reduce method ka use karo.
{
    const words = ['hello', 'world', 'javascript'];
    let output = words.reduce((acc, curr) => {
        acc.push(curr.toUpperCase());
        return acc;
    }, [])
    console.log(output);
}


// Ek array diya gaya hai, usme positive numbers ka count nikalne ke liye reduce method ka use karo.
{
    const numbers = [1, -2, 3, -4, 5, -6];
    let output = numbers.reduce((acc, curr) => {
        if (curr > 0) {
            acc++;
        }
        return acc;
    }, 0)
    console.log(output);
}


// Ek array of objects diya gaya hai, usme se specific property (jaise marks) ka average nikalne ke liye reduce method ka use karo.
{
    const students = [
        { name: 'Alice', marks: 80 },
        { name: 'Bob', marks: 90 },
        { name: 'Charlie', marks: 70 }
    ];
    let output = students.reduce((acc, curr) => {
        return acc + curr.marks
    }, 0)
    let average = output / students.length;
    console.log(average);
}


//  Ek array diya gaya hai, usme har element ki factorial calculate karne ke liye reduce method ka use karo.
{
    const numbers = [1, 2, 3, 4, 5];
    let output = numbers.reduce((acc, curr) => {
        let factorial = 1;
        for (let i = 1; i <= curr; i++) {
            factorial = factorial * i;
        }
        acc.push(factorial);
        return acc;
    }, [])
    console.log(output);
}


// Ek array diya gaya hai, usme har element ko reverse karne ke liye reduce method ka use karo
{
    const words = ['hello', 'world', 'javascript'];
    let output = words.reduce((acc, curr) => {
        acc.push(curr.split('').reverse().join(''));
        return acc;
    }, [])
    console.log(output);
}


// Ek array diya gaya hai, usme har element ko odd ya even ke hisab se group karne ke liye reduce method ka use karo.
{
    const numbers = [1, 2, 3, 4, 5, 6];
    let output = numbers.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc.even.push(curr);
        } else {
            acc.odd.push(curr);
        }
        return acc;
    }, { odd: [], even: [] });
    console.log(output);
}


//  Ek array diya gaya hai, usme har element ki frequency count karne ke liye reduce method ka use karo. Ye count case-insensitive hona chahiye.
{
    const words = ['Apple', 'banana', 'apple', 'Orange', 'banana'];
    let output = words.reduce((acc, curr) => {
        let lowerCaseWord = curr.toLowerCase();
        acc[lowerCaseWord] = (acc[lowerCaseWord] || 0) + 1;
        return acc;
    }, {});
    console.log(output);
}


// Ek array diya gaya hai, usme har element ko multiply karke ek single value banane ke liye reduce method ka use karo.
{
    const numbers = [1, 2, 3, 4, 5];
    let output = numbers.reduce((acc, curr) => acc * curr);
    console.log(output);
}


// Ek array diya gaya hai, usme check karo ki kya sabhi elements even hain ya nahi, reduce method ka use karo.
{
    const numbers = [2, 4, 6, 7, 8, 10];
    let output = numbers.reduce((acc, curr) => acc && curr % 2 === 0, true)
    console.log(output);
}


// Ek array of objects diya gaya hai, usme se specific property ke unique values extract karne ke liye reduce method ka use karo.
{
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Alice' },
        { id: 4, name: 'Charlie' }
    ];
    let output = users.reduce((acc, curr) => {
        if (!acc.includes(curr.name)) {
            acc.push(curr.name);
        }
        return acc;
    }, []);
    console.log(output);
}


// Ek array diya gaya hai, usme har element ki power calculate karne ke liye reduce method ka use karo (jaise har element ko 2 ki power par raise karna).
{
    const numbers = [1, 2, 3, 4, 5];
    let output = numbers.reduce((acc, curr) => {
        acc.push(curr * curr);
        return acc;
    }, []);
    console.log(output);
}


// Ek array diya gaya hai, usme har element ko ek specific separator ke sath concatenate karne ke liye reduce method ka use karo.
{
    const words = ['Hello', 'World', 'JavaScript'];
    const separator = '-';
    let output = words.reduce((acc, curr) => {
        return acc + separator + curr;
    });
    console.log(output);
}


// Array mein har element ko check karna (sab elements specific condition ko satisfy karte hain ya nahi)
{
    const numbers = [12, 15, 20, 25];
    let output = numbers.reduce((acc, curr) => acc && curr > 10, true);
    console.log(output);
}


// Ek array of objects diya gaya hai, usme se specific property ki maximum value find karne ke liye reduce method ka use karo.
{
    const products = [
        { name: 'Phone', price: 800 },
        { name: 'Laptop', price: 1000 },
        { name: 'Tablet', price: 1200 }
    ];
    let output = products.reduce((max, curr) => {
        if (curr.price > max) {
            max = curr.price;
        }
        return max;
    }, 0);
    console.log(output);
}