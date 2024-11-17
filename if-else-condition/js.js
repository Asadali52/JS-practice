let votingYears = 15;
if (votingYears > 18) {
    console.log('you can vote')
} else {
    console.log('you cannot vote')
}

// -------------------------

let mode = 'red';
let color;
if (mode === 'dark') {
    color = 'black'
} else if (mode === 'light') {
    color = 'white'
} else {
    color = 'system mode'
}
console.log(color);

// ---------------------

let marks = 51;
if (marks >= 50) {
    console.log('Pass')
} else {
    console.log('Fail')
}

// --------------------------

let age = 25;
if (age <= 12) {
    console.log('Child')
} else if (age <= 19) {
    console.log('Teenager')
} else if (age <= 59) {
    console.log('Adult')
} else {
    console.log('Senior')
}

// -------------------------

let number = 7;
if (number % 2 === 0) {
    console.log('Even')
} else {
    console.log('Odd')
}

// ---------------------------

let temperature = 10;
if (temperature < 0) {
    console.log('Freezing')
} else if (temperature <= 15) {
    console.log('Cold')
} else if (temperature <= 30) {
    console.log('Warm')
} else {
    console.log('Hot')
}

// --------------------------

{
    let num = -5;
    if (num === 0) {
        console.log('Zero')
    } else if (num < 0) {
        console.log('Negative')
    } else {
        console.log('Positive')
    }
}

// -------------------------

let day = 7;
let dayName;
if (day === 1) {
    dayName = 'Sunday'
} else if (day === 2) {
    dayName = 'Monday'
} else if (day === 3) {
    dayName = 'Tuesday'
} else if (day === 4) {
    dayName = 'Wednesday'
} else if (day === 5) {
    dayName = 'Thursday'
} else if (day === 6) {
    dayName = 'Friday'
} else if (day === 7) {
    dayName = 'Saturday'
} else {
    dayName = 'Invalid Day'
}
console.log(dayName);

//-------------------------------

let year = 2024;
if (year % 400 === 0) {
    console.log(`${year} is a leap year`);
} else if (year % 100 === 0) {
    console.log(`${year} is not a leap year`);
} else if (year % 4 === 0) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}

// -------------------------------

let password = 'abcD1234';
if (password.length < 8) {
    console.log('Weak Password')
} else if (!/[0-9]/.test(password)) {
    console.log('Moderate password')
} else {
    console.log('Strong Password')
}

//---------------------------------

let side1 = 9;
let side2 = 2;
let side3 = 1;

if (side1 === side2 && side2 === side3) {
    console.log('Equilateral Triangle')
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log('sosceles Triangle')
} else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    console.log('Scalene Triangle')
} else {
    console.log('Not a Triangle')
}

// ---------------------------------

let num = 30;
if(num === 0) {
    console.log('Zero')
} else if (num > 0 && num % 2 === 0) {
    console.log('Positive Even')
} else if (num > 0 && num % 2 !== 0) {
    console.log('Positive Odd')
} else if (num < 0 && num % 2 ===0) {
    console.log('Negative Even')
} else {
    console.log('Negative Odd')
}

// ------------------------------

let billAmount = 7500;
let discount = 0;
if (billAmount < 1000) {
    discount = 0;
} else if (billAmount >= 1000 && billAmount <= 5000) {
    discount = 0.10; 
} else if (billAmount >= 5000 && billAmount <= 10000) {
    discount = 0.20; 
} else {
    discount = 0.30;
}
let finalAmount = billAmount - (billAmount * discount);
console.log(`Final Bill after Discount: ${finalAmount}`);