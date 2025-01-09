// Ek loop likhein jo 1 se 20 tak ke numbers ko print kare.
{
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}



// Ek loop likhein jo 1 se 50 tak sirf odd numbers ko print kare.
{
    for (let i = 1; i <= 50; i += 2) {
        console.log(i);
    }
}


// User se ek number input lein aur uski 10 tak ki multiplication table print karein.
{
    let num = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${i * num}`);
    }
}


// Kisi bhi number ka factorial calculate karne ke liye ek loop likhein.
{
    let num = 5;
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    console.log(factorial);
}


// Ek array ke saare elements ka sum nikalne ke liye ek function likhein.
{
    let numbers = [10, 20, 30, 40, 50];
    let res = 0;
    for (let i of numbers) {
        res = res + i;
    }
    console.log(res);
}


// Ek array ka sabse bara number find karne ka function likhein.
{
    let arr = [1, 2, 3, 4, 5, 15];
    let max = arr[0];
    for (let i of arr) {
        if (i > max) {
            max = i;
        }
    }
    console.log(max);
}


// Ek function likhein jo ek array se duplicate values hata de.
{
    let arr = [1, 2, 3, 2, 4, 5, 4, 6];
    let uniqurArr = [];
    for (i of arr) {
        if (!uniqurArr.includes(i)) {
            uniqurArr.push(i);
        }
    }
    console.log(uniqurArr);
}
{
    let arr = ['asad', 'ali', 'king', 'king'];
    let uniArr = [];
    for (let i of arr) {
        if (!uniArr.includes(i)) {
            uniArr.push(i);
        }
    }
    console.log(uniArr);
}


// Ek function likhein jo kisi string ko reverse kare bina built-in methods ke.
{
    let str = "javascript";
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr = revStr + str[i];
    }
    console.log(revStr);
}
{
    let str = 'zimbuAzam';
    let revStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    console.log(revStr);
}
{
    function reversedStr(str) {
        let revString = '';
        for (let i = str.length - 1; i >= 0; i--) {
            revString += str[i];
        }
        return revString;
    }
    console.log(reversedStr('asad'));
}


// Ek function likhein jo kisi string ke vowels (a, e, i, o, u) ki counting kare.
{
    let str = "programming";
    let vowels = 0;
    let consonant = 0;
    let vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', "U"];
    for (let i of str) {
        if (vowelList.includes(i)) {
            vowels++;
        } else {
            consonant++;
        }
    }
    console.log(`vowels: ${vowels} , consonants: ${consonant}`);
}


// Ek function likhein jo check kare ke koi string palindrome hai ya nahi.
{
    let str = 'programming';
    let isPalindrome = true;
    for (let i = 0; i <= str.length / 2; i++) {
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


// Ek function likhein jo kisi string se saari white spaces remove kare bina built-in methods ke.
{
    function trimming(str) {
        newStr = '';
        for (let i of str) {
            if (i !== ' ') {
                newStr = newStr + i;
            }
        }
        console.log(newStr);
    }

    let str = "I am learning JavaScript";
    trimming(str);
}
{
    function trimming(str) {
        let newArr = [];
        for (let i of str) {
            if (i !== ' ') {
                newArr.push(i);
            }
        }
        console.log(newArr.join(''));
    }

    let str = "I am learning JavaScript";
    trimming(str);
}


// Ek loop ka use karte huye 1 se 100 tak ke numbers ka sum calculate karein.
{
    let num = 100;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
    console.log(sum);
}


// Ek array ke sirf even numbers ko nikalne ke liye ek function likhein.
{
    function evenNumbers(arr) {
        let newArray = [];
        for (let i of arr) {
            if (i % 2 === 0) {
                newArray.push(i);
            }
        }
        console.log(newArray);
    }
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    evenNumbers(array);
}


// Kisi string ke har word ka pehla letter capital banayein.
{
    let str = "javascript is amazing";
    let words = str.split(' ');

    let result = words.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }).join(' ');
    console.log(result);
}


// ------------------------------------------

// 1 se 100 tak numbers print karein.
// Jo numbers 3 se divisible hain unke liye "Fizz" print karein.
// Jo 5 se divisible hain unke liye "Buzz" print karein.
// Jo dono se divisible hain unke liye "FizzBuzz" print karein.
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


// Ek loop likhein jo 1 se 100 tak ke prime numbers ko print kare.
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


// Ek loop ka use karte huye yeh pattern print karein:
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
{
    let num = 10;
    let stars = '';
    for (let i = 1; i <= num; i++) {
        stars = stars + '*';
        console.log(stars);
    }
}


// Ek array ka second largest number find karne ke liye ek function likhein.
{
    function findSecondLargest(arr) {
        if (arr.length < 2) {
            return null; // Array mein agar sirf 1 ya koi number na ho to `null` return karein.
        }

        let max = 0; // Sabse bara number track karne ke liye
        let secondMax = 0; // Doosra bara number track karne ke liye

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                secondMax = max; // Purane max ko secondMax banate hain
                max = arr[i]; // Naya max update karte hain
            } else if (arr[i] > secondMax && arr[i] !== max) {
                secondMax = arr[i]; // Agar current number max ke barabar nahi aur secondMax se bara hai
            }
        }

        return secondMax === 0 ? null : secondMax; // Agar secondMax na mile to `null` return karein
    }

    let arr = [12, 45, 21, 76, 38, 90];
    console.log(findSecondLargest(arr)); // Output: 76
}




// Array Chunking: Write a function that splits an array into smaller arrays of a specified size.
{
    function chunkArray(array, size) {
        if (size <= 0) {
            return []; // Return an empty array if size is not valid
        }

        let result = []; // Initialize an empty array to hold chunks

        for (let i = 0; i < array.length; i += size) {
            // Slice the array into chunks of the given size and push them to the result
            result.push(array.slice(i, i + size));
        }

        return result;
    }

    // Example Usage:
    let inputArray = [1, 2, 3, 4, 5];
    let chunkSize = 2;

    console.log(chunkArray(inputArray, chunkSize)); // Output: [[1, 2], [3, 4], [5]]
}

