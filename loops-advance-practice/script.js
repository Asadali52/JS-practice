// Ek loop likhein jo 1 se 50 tak saaray numbers print kare. Har number ke baad newline add karein.
for (let i = 1; i <= 50; i++) {
    console.log(i)
}


// Ek loop likhein jo 1 se 100 tak saaray even numbers ko console mein print kare.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Ek loop likhein jo 50 se 1 tak numbers ko reverse order mein print kare.
for (let i = 50; i >= 1; i--) {
    console.log(i);
}


//Ek number input lein aur uski table (multiplication table) 1 se 10 tak print karein.
{
    let number = 5;
    for (let i = 1; i <= 10; i++) {
        let res = i * number
        console.log(`${number} * ${i} = ${res}`)
    }
}


// Ek loop likhein jo 1 se 10 tak numbers ka sum calculate kare aur result print kare.
{
    let sum = 0
    for (let i = 1; i <= 10; i++) {
        sum = sum + i
    }
    console.log(`The sum of numbers from 1 to 10 is:::: ${sum}`);
}


// Ek number ka factorial calculate karne ke liye loop likhein. Factorial formula: n! = n × (n-1) × (n-2) × ... × 1
{
    let num = 6;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i
    }
    console.log(`The factorial of ${num} is:::: ${factorial}`);
}


// Ek nested loop ka use karke 2 se 10 tak saari tables ko print karein.
{
    for (let i = 2; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    }
    console.log(`we print all tables from 2 to 10 by nested loop`);
}


// Aapko output generate karna hai:
// *
// **
// ***
// ****
// *****
{
    let star = "";
    for (let i = 1; i <= 5; i++) {
        star = star + "*";
        console.log(star);
    }
}


// Ek loop likhein jo 1 se 100 tak prime numbers ko print kare.
{
    for (let i = 1; i <= 100; i++) {
        isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

// ------------- Ek loop likhein jo 1 se 100 tak numbers print kare:
// Agar number 3 se divisible ho, "Fizz" print karein.
// Agar number 5 se divisible ho, "Buzz" print karein.
// Agar dono se divisible ho to "FizzBuzz" print karein.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


// Ek loop likhein jo is array ke har naam ko console par print kare.
{
    const names = ["Ali", "Sara", "Ahmed", "Zain", "Ayesha"];
    for (let i of names) {
        console.log(i);
    }
}


// Ek array ko reverse karne ke liye loop likhein. Built-in methods ka use na karein.
{
    let count = [1, 2, 3, 4, 5];
    let reversedCount = [];
    for (let i = count.length - 1; i >= 0; i--) {
        reversedCount.push(count[i]);
    }
    console.log(reversedCount)
}


// Ek loop likhein jo odd aur even numbers ko alag count kare aur result print kare.
{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let evens = 0;
    let odds = 0;
    for (let i of numbers) {
        if (i % 2 === 0) {
            evens++
        } else {
            odds++
        }
    }
    console.log(`[${numbers}] This array has ${evens} even numbers`);
    console.log(`[${numbers}] This array has ${odds} odd numbers`);
}


// Loop ka use karke maximum number dhoondein. Built-in methods ka use na karein.
{
    let numbers = [5, 12, 7, 3, 8, 15];
    let max = numbers[0];
    for (let i of numbers) {
        if (i > max) {
            max = i
        }
    }
    console.log(`The maximum number is: ${max}`);
}
{
    let arr = ['asad', 'ali', 'waqar', 'shanaa'];
    let maxLength = 0;
    let longestString = '';
    for (let i of arr) {
        if (i.length > maxLength) {
            maxLength = i.length;
            longestString = i;
        }
    }
    console.log(`The longest string is: "${longestString}" with length ${maxLength}`);
}


// Ek string ko reverse karne ke liye loop likhein:
{
    let str = "javascript";
    let toString = str.toString();
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(`Original string: "${str}"`);
    console.log(`Reversed string: "${reversed}"`);
}


// Ek string mein vowels (a, e, i, o, u) ka count karne ke liye loop likhein:
{
    let str = "Hello, how areA you?";
    let vowels = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ||
            str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
            vowels++
        }
    }
    console.log(vowels);
}


//Palindrome check karne ke liye loop likhein: // ye Question gpt sy krwaya tha
{
    let str = "madam";
    let isPalindrome = true;

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        console.log(`"${str}" is a palindrome.`);
    } else {
        console.log(`"${str}" is not a palindrome.`);
    }
}
