// given a array , report if it is a leap year;
{
    function isLeapYear(year) {
        return year % 4 === 0 ? 'a leap year' : 'is not a leap year';
    }
    console.log(isLeapYear(2016));
    console.log(isLeapYear(2029));
    console.log(isLeapYear(2024));
}


// write a javascript program to compare two objects to determine 
// if the first one contains the same properties as the second one (which may also have additional properties);
{
    function containsProperties(obj1, obj2) {
        for (let key in obj2) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
        return true;
    }
    console.log(containsProperties({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 })); // true
    console.log(containsProperties({ x: 1, y: 2, z: 3 }, { x: 1, y: 2, z: 3 })); // true
    console.log(containsProperties({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })); // false
    console.log(containsProperties({ a: 1, b: 2, c: 3 }, { a: 1, b: 3 })); // false
}

// simple object
{
    let obj = {
        name: 'ali',
        age: 20
    }
    for (let key in obj) {
        console.log(key, ':', obj[key]);
    }
}


// write a js program to convert a comma-seperated values (CSV) string to a 2D arrray. A new line indicates a new row in the array::
{
    const parseCSV = (csvStr) => {
        return csvStr.split('\n').map(row => row.split(','));
    }
    let str = `abc,def,ght
lia,diya,hai
thf,hfn,dks`;
    console.log(parseCSV(str));
}

// array map method
{
    let arr = [5, 1, 3, 2, 6];
    function double(x) {
        return x * 2;
    }
    console.log(arr.map(double));
}


// array filter method 
{
    let arr = [5, 1, 3, 2, 6];
    function isOdd(x) {
        return x % 2;
    }
    console.log(arr.filter(isOdd));
}


// array reduce method 
{
    let array = [5, 1, 3, 2, 6];
    function findSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    console.log(findSum(array));


    // by reduce method
    // const findSumByReduce = array.reduce((acc, curr) => acc = acc + curr, 0)
    const findSumByReduce = array.reduce(function (acc, curr) {
        acc = acc + curr;
        return acc;
    }, 0)
    console.log(findSumByReduce);
}
// find max
{
    let array = [12, 49.9, 50, 6, 70, 33];
    function findMax(arr) {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    console.log(findMax(array));


    // by reduce method
    const output = array.reduce(function (max, current) {
        if (current > max) {
            max = current;
        }
        return max;
    }, 0)
    console.log(output);
}

{
    let users = [
        { firstname: 'akshy', lastname: 'saini', age: 25 },
        { firstname: 'khan', lastname: 'baba', age: 45 },
        { firstname: 'akash', lastname: 'deep', age: 225 },
        { firstname: 'pta', lastname: 'ni', age: 725 },
    ];
    let fullName = users.map(x => x.firstname + ' ' + x.lastname);
    console.log(fullName);
}

// ------------ QUESTIONS FOR MAP FUNCTION , FILTER FUNCTION AND REDUCE FUNCTION ------------

// Given an array of numbers [2, 4, 6, 8], return a new array containing the square of each number. with map
{
    let arr = [2, 4, 6, 8];
    let output = arr.map(x => x * x);
    console.log(output);
}


// Given an array of strings ['hello', 'world'], return a new array where each string is converted to uppercase. with map
{
    let arr = ['hello', 'world'];
    let output = arr.map(x => x.toUpperCase());
    console.log(output);
}


// Given an array of objects [{ name: 'Alice' }, { name: 'Bob' }], add an id property to each object starting from 1. with map
// Hint: Use the map method to return a new object for each item and add the id based on the index.
{
    let arr = [{ name: 'Alice' }, { name: 'Bob' }];
    let output = arr.map((x, index) => {
        x.id = index + 1
        return x;
    });
    console.log(output);
}


// Given an array of numbers [1, 2, 3, 4, 5, 6], return a new array containing only the even numbers. with filter
{
    let arr = [1, 2, 3, 4, 5, 6];
    let output = arr.filter(x => x % 2 == 0);
    console.log(output);
}


// Given an array of strings ['a', 'abc', 'abcd', 'abcde'], filter out strings with a length less than 3. with filter
{
    let arr = ['a', 'abc', 'abcd', 'abcde'];
    let output = arr.filter(x => x.length < 3);
    console.log(output);
}


// Given an array of user objects [ { name: 'Alice', active: true }, { name: 'Bob', active: false } ], return only the active users.
// with filter // Check the active property in the filter method.
{
    let arr = [{ name: 'Alice', active: true }, { name: 'Bob', active: false }];
    let output = arr.filter(x => x.active);
    console.log(output);
}

// Given an array of numbers [1, 2, 3, 4], calculate the sum of all the numbers. with reduce
{
    let arr = [1, 2, 3, 4];
    let output = arr.reduce((acc, curr) => {
        sum = acc + curr;
        return sum;
    }, 0)
    console.log(output);
}


//  Given an array of numbers [10, 20, 5, 30], find the maximum number. with reduce
{
    let arr = [10, 20, 5, 30];
    let output = arr.reduce((max, curr) => {
        if (curr > max) {
            max = curr;
        }
        return max;
    }, arr[0])
    console.log(output);
}