{
    let age = 15;
    let TommyAge = "Tommy is" + " " + age + " " + "years old"  // this is string concatenation 
    console.log(TommyAge);
    let tommyAge = (`Tommy is ${age} years old`); // this is string interpolation
    console.log(tommyAge);
}

// // //-------
{
    k = 5;
    l = 5;
    let postIncrement = k++;
    console.log(postIncrement);
    console.log(k);
    let preIncrement = ++l;
    console.log(preIncrement);
    console.log(l);
}

// // // --------

let x = 2 ** 5; // exponention
console.log(x);


let y = 5 % 3; // modulus
console.log(y);

// Assignment Operators
let m = 10;
console.log(m += 5); // m = m + 5
let n = 16;
console.log(n -= 5); // n = n - 5
let p = 6;
console.log(p *= 13); // p = p * 13 
let q = 17;
console.log(q ** 13); // q = q ** 13 //-------   17 ki power 13
let r = 12;
console.log(r %= 10); // r = 12 / 10

// // //---------------

let a = 5;
let b = 3;

function check() {
    a != b;
    return;
};
console.log(check()); // this return undefined

function checkAgain() {
    return a != b;
};
console.log(checkAgain()); // true

const ArrowFunction = () => {
    return a == b;
}
console.log(ArrowFunction()); // false

// // --------------------------

{
    let x = 1;
    let y = '1';

    console.log(x == y);
    console.log(x === y);
    console.log(x != y);
    console.log(x !== y);
}

// // -------------------

{
    let cond1 = 6 > 5; // true
    let cond2 = 6 === 6; // true
    console.log('cond1 && cond2 =', cond1 && cond2); // true


    let sen1 = 400 >= 100; // true
    let sen2 = 400 == 100; // false
    console.log('sen1 && sen2 =', sen1 && sen2); // false


    let con1 = 10 <= 8; // false
    let con2 = 10 === '10'; // false
    console.log('con1 || con2 =', con1 || con2); // false


    let condition1 = 50 > 3; // true
    let condition2 = 3 >= 50; // false
    console.log('condtion1 || condition2 =', condition1 || condition2); // true
}


// ================= LOOPS =================== //

for (let i = 1; i <= 5; i++) {
    console.log('Hello World');
};


let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i
};
console.log('sum =', sum);


let multiply = 1;
for (let i = 1; i < 6; i++) {
    multiply = multiply * i;
}
console.log(multiply);


let subtract = 100;
for (let i = 1; i < 6; i++) {
    subtract = subtract - i;
}
console.log(subtract);


let str = 'Hello World';
for (let i of str) {
    console.log(i);
};


let arr = ['chota-bheem', 'raju', 'jagu', 'chutki'];
for (let i of arr[0]) {
    console.log(i);
};
for (let i of arr) {
    console.log(i);
}


{
    let arr = ['zimbu', 'rizi', 'ifti', 'khushi'];
    for (let i of arr) {
        if (i === arr[0]) {
            for (let char of i) {
                console.log(char);
            }
        } else {
            console.log(i);
        }
    }
}


{
    let arr = ['zimbu', 'rizi', 'ifti', 'khushi'];
    for (let i of arr) {
        if (i === arr[3]) {
            for (let char of i) {
                console.log(char);
            }
        } else {
            console.log(i);
        }
    }
}

{
    let arr = ['chota-bheem', 'raju', 'jagu', 'chutki'];
    for (let j of arr) {
        if (j === arr[1]) {
            for (let char of j) {
                console.log(char);
            }
        } else {
            console.log(j);
        }
    }
}



//=============================================//

{
    let even = [2, 4, 6, 8, 10];
    let odd = [1, 3, 5, 7, 9];
    let sum = ['asad'];
    for (let i = 0; i < even.length; i++) {
        sum[1 + i] = even[i] + odd[i];
    }
    console.log(sum);
    console.log(even.concat(odd));
}


// -------------
{
    let array1 = [2, 5, 7, 99];
    let array2 = [29, 4, 6, 100];
    let add = [];
    for (let i = 0; i < array1.length; i++) {
        add[i] = array1[i] + array2[i]
    };
    console.log(add);
    console.log(array1.concat(array2))
}

//--------------

{
    let a = ['chokli', 'mahi', 'yuvi'];
    for (let i of a) {
        if (i === a[0]) {
            for (let char of i) {
                console.log(char);
            }
        } else {
            console.log(i);
        }
    }
}

{
    let arr = ['liaqat', 'ishfaq', 'muzafar', 'moiz'];
    for (let i of arr) {
        if (i === arr[0]) {
            for (let char of i) {
                console.log(char);
            }
        } else if (i === arr[1]) {
            for (let j of i) {
                console.log(j)
            }
        }
        else {
            console.log(i)
        }
    }
}


{
    let student = {
        fullName: 'Rahul Gandhi',
        age: '180',
        country: 'bhharat',
        religion: 'hindu'
    }
    console.log(student["age"] + ' ' + student['fullName']);
    console.log(`${student.country} ${student.religion}`);
}