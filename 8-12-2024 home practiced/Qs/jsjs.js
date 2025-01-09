// ------------------- PART 3 -------------------------

// write a js program to find the number of even digits in a array of integers
{
    function countEvenNumbers(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                count++;
            }
        }
        return `There are ${count} even numbers in this array [${arr}].`;
    }
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    console.log(countEvenNumbers([1, 2, 3, 4, 5, 6, 10]));
}



// js program to find the number of even values up to a given number;
{
    const FindEvenNumbers = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (i % 2 === 0) {
                count++;
            }
        }
        return `There are ${count} even values in ${num}.`;
    }
    console.log(FindEvenNumbers(14));
    console.log(FindEvenNumbers(43));
}



// js program to check whether a given array of integers is sorted in ascending order;
{
    const isAscending = (arr) => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return `This array [${arr}] is not sorted in Ascending order. (false)`;
            }
        }
        return `This array [${arr}] is sorted in Ascending order. (true)`;
    }
    console.log(isAscending([1, 2, 3, 4, 5, 6, 7, 4]));
    console.log(isAscending([1, 2, 3, 4]));
}



// js program to get a largest even number from an array of integers;
{
    const FindLargestEvenNumber = (arr) => {
        let max = -Infinity;
        let count = 0;
        for (let i of arr) {
            if (i % 2 === 0) {
                i > max;
                max = i;
            }
        }
        return `Maximum even num is "${max}" in this array [${arr}]`;
    }
    console.log(FindLargestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 910]));
    console.log(FindLargestEvenNumber([1, 2, 3, 4, 5, 6, 10]));
}
{
    const FindLargestEvenNumber = (arr) => {
        let max = -Infinity;
        let count = 0;
        let largestOdd;
        for (let i of arr) {
            if (i % 2 === 0) {
                i > max;
                max = i;
                count++;
            } else if (i % 2 !== 0) {
                max = i;
                largestOdd = max;
            }
        }
        return count === 0 ? `Maximum odd num is "${max}" in this array [${arr}]` : `Maximum even num is "${max}" in this array [${arr}]`;
    }
    console.log(FindLargestEvenNumber([1, 3, 5, 7, 9, 86, 91]));
    console.log(FindLargestEvenNumber([1, 2, 3, 4, 5, 6, 10]));
}
{
    const FindLargestEvenNumber = (arr) => {
        let max = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                arr[i] > max;
                max = arr[i];
            }
        }
        return `Maximum even num is "${max}" in this [${arr}]`;
    }
    console.log(FindLargestEvenNumber([1, 2, 3, 4, 5, 60, 7]));
    console.log(FindLargestEvenNumber([1, 2, 3, 4]));
}
{
    const checkLargestNum = (arr) => {
        let max = -Infinity;
        for (let i of arr) {
            i > max;
            max = i;
        }
        return max % 2 === 0 ? `Maximum num is "${max}" in this array [${arr}] and it is a even number` : `Maximum num is "${max}" in this array [${arr}] and it is a odd number`;
    }
    console.log(checkLargestNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 910]));
    console.log(checkLargestNum([1, 2, 3, 4, 5, 6, 10, 11]));
}



// write a js program to replace first digin from a string with $ Character;
{
    function replaceFirstDigit(str) {
        let newStr = str.replace(/[0-9]/, '$');
        return `${str} this is original string and after replacing first digit number by dollor sign ${newStr}.`;
    }
    console.log(replaceFirstDigit('4asad2232'));
    console.log(replaceFirstDigit('Asad2232'));
}


// --------------- PART 4 ------------------------

// given a year, report if it is a leap year;
{
    const isLeapYear = (year) => {
        let check = year % 4 === 0 ? `${year} is Leap Year.` : `${year} is not Leap Year.`;
        return check;
    }
    console.log(isLeapYear(2014));
    console.log(isLeapYear(2015));
    console.log(isLeapYear(2016));
    console.log(isLeapYear(2020));
}

let obj = {
    a: 1,
    b: 2
}
for (let key in obj) {
    console.log(key, obj[key]);
}


// write a javascript program to compare two objects to determine 
// if the first one contains the same properties as the second one (which may also have additional properties);
function containsProperties(obj1, obj2) {
    for (let key in obj2) {
        // Check if key exists in obj1 and the values match
        if (!(key in obj1) || obj1[key] !== obj2[key]) {
            return false; // If any key is missing or values don't match
        }
    }
    return true; // If all keys in obj2 are present in obj1
}

// Test cases
console.log(containsProperties({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })); // true
console.log(containsProperties({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })); // false
console.log(containsProperties({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 })); // false


// write a js program to add two arrays by index-vise
{
    function addTwoArrys(arr1, arr2) {
        let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
        let res = [];
        for (let i = 0; i < maxLength; i++) {
            let val1 = arr1[i] || 0;
            let val2 = arr2[i] || 0;
            res.push(val1 + val2);
        }
        return res;
    }
    console.log(addTwoArrys([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7]));
}
{
    const addTwoArraysIndexVise = (arr1, arr2) => {
        let maxlength = arr1.length > arr2.length ? arr1.length : arr2.length;
        let res = [];
        for (let i = 0; i < maxlength; i++) {
            res.push((arr1[i] || 0) + (arr2[i] || 0));
        }
        return res;
    }
    console.log(addTwoArraysIndexVise([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
}