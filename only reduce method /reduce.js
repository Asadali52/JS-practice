// Ek array numbers = [2, 4, 6, 8, 10] diya gaya hai. Iska sum calculate karo using reduce method.
{
    let numbers = [2, 4, 6, 8, 10];
    let output = numbers.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0);
    console.log(output);
}


// Ek array numbers = [3, 5, 7, 9] diya gaya hai. Is array ka product (multiplication of all elements) find karo using reduce.
{
    let numbers = [3, 5, 7, 9];
    let output = numbers.reduce((acc, curr) => {
        acc = acc * curr;
        return acc;
    }, 1)
    console.log(output);
}


// Ek array diya gaya hai:
// people = [{ name: "Asad", age: 25 }, { name: "Ali", age: 30 }, { name: "Ahmed", age: 28 }]
// Total age ka sum find karo using reduce.
{
    const people = [
        { name: "Asad", age: 25 },
        { name: "Ali", age: 30 },
        { name: "Ahmed", age: 28 }
    ];
    let output1 = people.reduce((acc, curr) => {
        acc += curr.age;
        return acc;
    }, 0);
    console.log(output1);

    let output = people.map((x) => x.age).reduce((acc, curr) => acc + curr, 0);
    console.log(output);
}


// Ek string str = "javascript" diya gaya hai. Is string ke characters ko reverse karne ke liye reduce ka use karo.
// String ko array mein convert karne ke liye split('') ka use karo, aur accumulator mein reverse logic implement karo. 
// Finally, join('') se result ko string mein wapas convert karo.
{
    let str = "javascript";
    let output = str.split('').reduce((acc, curr) => {
        acc.unshift(curr);
        return acc;
    }, []).join('');
    console.log(output);


    const newStr = str.split("").reverse().join("")
    console.log(newStr);


    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    console.log(revStr)
}


// Ek array votes = ["yes", "no", "yes", "yes", "no", "no", "yes"] diya gaya hai. 
// Total yes aur no votes count karne ke liye ek object { yes: count, no: count } return karo.
{
    let votes = ["yes", "no", "yes", "yes", "no", "no", "yes"];
    let output = votes.reduce((acc, curr) => {

        if (acc[curr]) {
            acc[curr]++;
        } else {
            acc[curr] = 1
        }
        return acc;

    }, {});

    console.log(output);
}


// Ek array diya gaya hai:
// arr = [2, 5, 8, 10]
// Array mein jitne even numbers hain unka sum find karo using reduce.
{
    let arr = [2, 5, 8, 10];
    let output = arr.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc = acc + curr;
        }
        return acc;
    }, 0)
    console.log(output);
}


// Ek array numbers = [10, 20, 30, 40] diya gaya hai. Is array ka maximum number find karo using reduce.
{
    let numbers = [10, 20, 299, 200, 40];
    let output = numbers.reduce((max, curr) => {
        if (curr > max) {
            max = curr;
        }
        return max;
    }, 0);
    console.log(output);
}



// ------------------- PART2 ---------------------------- //



// Ek array diya gaya hai:
// numbers = [1, 2, 3, 4, 5]
// Is array mein jitni values hain, unka average calculate karo using reduce.
{
    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce((acc, curr) => {
        acc += curr;
        return acc;
    }, 0)
    let average = sum / numbers.length
    console.log(average);
}


// Ek array diya gaya hai:
// items = ["apple", "banana", "apple", "orange", "banana", "apple"]
// Is array mein har fruit ka count nikal kar ek object return karo.
{
    let items = ["apple", "banana", "apple", "orange", "banana", "apple"];
    let output = items.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1
        return acc;
    }, {});
    console.log(output);
}


// Ek array diya gaya hai:
// numbers = [-3, -1, 0, 4, 8, -2]
// Is array ke positive numbers ka sum nikal kar return karo using reduce.
{
    let numbers = [-3, -1, 0, 4, 8, -2];
    let output = numbers.reduce((acc, curr) => {
        if (curr > 0) {
            acc += curr;
        }
        return acc;
    }, 0);
    console.log(output);
}


// array diya gaya hai:
// words = ["hello", "world", "javascript", "is", "awesome"]
// Sabse lamba word find karo using reduce.
{
    let words = ["hello", "world", "javascript", "is", "awesome"];
    let longestElement = words.reduce((max, curr) => {
        if (curr.length > max.length) {
            max = curr;
        }
        return max;
    }, "");
    console.log(longestElement);
}


// Ek array diya gaya hai:
// orders = [ { id: 1, amount: 200 }, { id: 2, amount: 450 }, { id: 3, amount: 300 } ]
// Total amount calculate karo using reduce.
{
    let orders = [{ id: 1, amount: 200 }, { id: 2, amount: 450 }, { id: 3, amount: 300 }];
    let sum = orders.reduce((acc, curr) => {
        acc += curr.amount;
        return acc;
    }, 0);
    console.log(sum);
}


// Ek array diya gaya hai:
// numbers = [10, 20, 30, 40, 50];
// Is array ko cumulative sum mein convert karo.
{
    let numbers = [10, 20, 30, 40, 50];
    let cumulativeSum = numbers.reduce((acc, curr, index) => {
        if (index === 0) {
            acc.push(curr);
        } else {
            acc.push(acc[index - 1] + curr);
        }
        return acc;
    }, []);
    console.log(cumulativeSum);

    let numberss = [10, 20, 30, 40, 50];
    let newArr = [numberss[0]];
    for (let i = 1; i < numberss.length; i++) {
        newArr.push(newArr[i - 1] + numberss[i]);
    }
    console.log(newArr);
}


// Ek array diya gaya hai:
// arr = [5, 3, 2, 6, 3, 6, 8, 3]
// Is array mein sabse zyada baar repeat hone wala number find karo.
{
    let arr = [5, 3, 2, 6, 3, 6, 8, 3];
    let count = {};
    let maxCount = 0;
    let mostRepeated = null;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = (count[num] || 0) + 1;

        if (count[num] > maxCount) {
            maxCount = count[num];
            mostRepeated = num;
        }
    }
    console.log(`The number that repeats the most is ${mostRepeated} with a frequency of ${maxCount}.`);
}


// Ek array diya gaya hai:
// numbers = [3, 5, 7, 10, 15]
// Array ke sab numbers ka factorial calculate karo using reduce.
// Example output:
// 3! = 6, 5! = 120, 7! = 5040, ...
{
    let numbers = [3, 5, 7, 10, 15];
    const factorial = (num) => {
        return Array.from({ length: num }, (_, i) => i + 1)
            .reduce((acc, val) => acc * val, 1);
    };

    numbers.forEach(num => console.log(`${num}! = ${factorial(num)}`));
}


// students = [ { name: "Asad", marks: 85 }, { name: "Ali", marks: 92 }, { name: "Ahmed", marks: 78 } ]
// Is array mein se highest marks find karo using reduce.
{
    let students = [{ name: "Asad", marks: 85 }, { name: "Ali", marks: 92 }, { name: "Ahmed", marks: 78 }];
    let output = students.reduce((maxMark, curr) => {
        return curr.marks > maxMark ? curr.marks : maxMark;
    }, 0)
    console.log(output);
}


// votes = ["yes", "no", "no", "abstain", "yes", "abstain", "yes"]
// Sab votes ka count nikal kar ek object return karo, aur saath mein total votes ka bhi count add karo.
// { yes: 3, no: 2, abstain: 2, total: 7 }
{
    let votes = ["yes", "no", "no", "abstain", "yes", "abstain", "yes"];
    let output = votes.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        acc.total = (acc.total || 0) + 1;
        return acc;
    }, {})
    console.log(output);
}