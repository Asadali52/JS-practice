// Ek function isPalindrome likho jo check kare ke diya gaya string palindrome hai ya nahi.
{
    function isPalindrome(str) {
        let palindromeFlag = true;
        for (let i = 0; i <= str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                palindromeFlag = false;
                break;
            }
        }
        return palindromeFlag ? `${str} is a palindrome` : `${str} is not a palindrome`;
    }
    console.log(isPalindrome('asad'));
    console.log(isPalindrome('madam'));
}


// Ek function printTable likho jo 1 se 10 tak kisi diya gaya number ka multiplication table print kare.
{
    function printTable(num) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} * ${i} = ${i * num}`);
        }
    }
    printTable(10);
}


// Ek function findMax likho jo ek array ka sabse bada number return kare.
{
    function findMax(arr) {
        max = arr[0];
        for (let i of arr) {
            if (i > max) {
                max = i;
            }
        }
        return max;
    }
    let array = [1, 2, 3, 4, 5, 6, 7, 800];
    console.log(findMax(array));
}


//  Ek function printStars likho jo ek triangle pattern print kare.
{
    function printStars(num) {
        let stars = '';
        for (let i = 1; i <= num; i++) {
            for (let j = i; j <= i; j++) {
                console.log(stars += ' ' + '*');
            }
        }
        return stars;
    }
    printStars(4);
}


//  Ek function reverseArray likho jo ek array ko reverse kare aur return kare.
{
    function reverseArray(arr) {
        let newArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i]);
        }
        return newArr;
    }
    let array = [1, 2, 3, 4];
    console.log(reverseArray(array));
}


// -----------------------------------------------------------------------------------------------------

// Ek function countCharacterFrequency likho jo ek string me har character ki frequency return kare.
{
    function countCharacterFrequency(str) {
        let frequency = {};
        for (let i of str) {
            if (frequency[i]) {
                frequency[i]++;
            } else {
                frequency[i] = 1;
            }
        }
        return frequency;
    };
    let str = 'hello world';
    console.log(countCharacterFrequency(str));
}

// Ek function sumEvenNumbers likho jo ek given range me (1 se N) sabhi even numbers ka sum kare.
{
    function sumEvenNumbers(num) {
        let sum = 0;
        for (let i = 0; i <= num; i += 2) {
            sum += i;
        }
        return sum;
    }
    console.log(sumEvenNumbers(100));
}


//Ek function removeDuplicates likho jo ek array se duplicate values ko remove kare.
{
    function removeDuplicates(arr) {
        let uniqueArr = [];
        for (let i of arr) {
            if (!uniqueArr.includes(i)) {
                uniqueArr.push(i);
            }
        }
        return uniqueArr;
    }
    let array = [1, 2, 2, 2, 34, 5, 5, 6, 6]
    console.log(removeDuplicates(array));
}
{
    let arr = [1, 2, 3, 4, 5, 5, , 6, 6];
    console.log(arr.includes(10));
    console.log(arr.includes(1));
}


//  Ek function isLeapYear likho jo check kare ke diya gaya year leap year hai ya nahi.
// Agar year divisible ho 4 se, lekin divisible na ho 100 se, to leap year hai.
// Agar year divisible ho 400 se, to bhi leap year hai.
{
    function isLeapYear(year) {
        if (year % 4 === 0 && year % 100 !== 0 || (year % 400 === 0)) {
            console.log(`${year} is a leap year`);
        } else {
            console.log(`${year} is not a leap year`);
        }
    }
    isLeapYear(2024);
    isLeapYear(2002)
}


// Ek function reverseString likho jo ek string ko reverse kar de.
{
    function reverseString(str) {
        let revStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            revStr += str[i];
        }
        return revStr;
    }
    console.log(reverseString('karzai'));
}


// Ek function findSecondLargest likho jo ek array me second largest element return kare.
{
    function findSecondLargest(arr) {

        if (arr.length < 2) {
            return null;
        }

        let max = -Infinity;
        let secMax = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                secMax = max;
                max = arr[i];
            } else if (max[i] > secMax && arr[i] !== max) {
                secMax === arr[i];
            }
        }

        return secMax === -Infinity ? null : secMax;
    }

    let array = [10, 15, 20, 25, 30];
    console.log(findSecondLargest(array));
}


// Ek function countOddNumbers likho jo 1 se N tak ke range me odd numbers ki count kare,
{
    function countOddNumbers(num) {
        let oddNum = 0;
        for (let i = 1; i <= num; i++) {
            if (i % 2 !== 0) {
                oddNum++;
            }
        }
        return oddNum;
    }

    console.log(countOddNumbers(100));
}


// Ek function removeWhitespaces likho jo ek string ke starting aur ending spaces ko remove kare.
{
    function removeWhitespaces(str) {
        return str.trim();
    }
    console.log(removeWhitespaces('  a    ab '));
}
{
    function removeExtraSpaces(str) {
        return str.replace(/\s+/g, ' ');
    }
    console.log(removeExtraSpaces('hello    world'));
    console.log(removeExtraSpaces('  a   b   c  '));
}


// Ek function factorial likho jo ek number ka factorial calculate kare.
{
    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i
        }
        return result;
    }
    console.log(factorial(5));
}