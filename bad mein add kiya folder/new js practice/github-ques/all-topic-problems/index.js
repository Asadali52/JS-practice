// 1. Ek number input lo aur check karo ke even hai ya odd.
// function checkEvenOrOdd(num) {
//     if (num % 2 === 0) return `${num} is a Even Number`;
//     return `${num} is a Odd Number`;
// }

// console.log(checkEvenOrOdd(9));

//--------------------------

// 2. Reverse a String
// function reverseString(str) {
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }

// console.log(reverseString('dasa'));

//--------------------------

// 3. Ek function banao jo ek number ka factorial return kare.
// function factorialFunction(num) {
//     let res = 1;
//     for (let i = 1; i <= num; i++) {
//         res *= i;
//     }
//     return res;
// }

// console.log(factorialFunction(5));

//--------------------------

// 4. Ek string input lo aur check karo wo palindrome hai ya nahi.
// function checkPalindrome(str) {
//     let revStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str[i];
//     }
//     return str === revStr;
// }
// console.log(checkPalindrome('aassaa'));

//--------------------------

// 5. Largest Number in Array
// function largestNumber(arr) {
//     let max = -Infinity;
//     for (let i of arr) {
//         if (i > max) {
//             max = i;
//         }
//     }
//     return max;
// }
// console.log(largestNumber([-1, -211, -3, -6, -53]));

//--------------------------

// 6. n tak fibonacci series print karo.
// function fibonacciSeries(n) {
//     let series = [];
//     let a = 0, b = 1;

//     for (let i = 0; i < n; i++) {
//         series.push(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }

//     return series;
// }
// console.log(fibonacciSeries(10));

//--------------------------

// 7. Ek function banao jo check kare number prime hai ya nahi.
// function checkPrime(num) {

//     if (num < 2) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         };
//     };

//     return true;
// }
// console.log(checkPrime(31));

//--------------------------

// 8. Ek number 1234 ka digits sum karo → 1+2+3+4 = 10.
// function findSum(num) {
//     let arr = num.toString().split("");
//     let sum = 0;
//     for (let i of arr) {
//         sum += Number(i);
//     }
//     return sum;
// }
// console.log(findSum(1234));

//--------------------------

// 9. Ek string me kitne vowels hain (a, e, i, o, u) wo count karo.
// function countVowels(str) {
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("pppoioo"));

//--------------------------

// 10. Array me se second largest number nikalna hai.
// function findSecondLargest(arr) {
//     let max = -Infinity;
//     let secMax = -Infinity;

//     for (let i of arr) {
//         if (i > max) {
//             secMax = max;
//             max = i;
//         } else if (i > secMax && i < max) {
//             secMax = i;
//         }
//     }
//     return secMax;
// }

// console.log(findSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//--------------------------

// 11. Do strings diye gaye hain (listen, silent). Check karo wo anagram hain ya nahi.
// function checkAnagrams(str1, str2) {

//     if (str1.length !== str2.length) return false;

//     let string1 = str1.split("").sort().join("");
//     let string2 = str1.split("").sort().join("");

//     return string1 === string2;
// }
// console.log(checkAnagrams("listen", "silent"));

//--------------------------

// 12. Array [1,2,3,4,2,5,1] me duplicate elements find karo.
// function findDuplicates(arr) {
//     let seen = [];
//     let duplicates = [];

//     for (let i of arr) {
//         if (!seen.includes(i)) {
//             seen.push(i);
//         } else if (!duplicates.includes(i)) {
//             duplicates.push(i);
//         }
//     }

//     return duplicates;
// }
// console.log(findDuplicates([1, 2, 3, 4, 4, 3, 4, 5, 5, 7]));

//--------------------------

// 13. [1, [2, [3, 4], 5]] ko [1, 2, 3, 4, 5] banao.
// function makeFlatten(nestedArr) {
//     let flat = [];

//     for (let i of nestedArr) {
//         if (Array.isArray(i)) {
//             flat = flat.concat(makeFlatten(i));
//         } else {
//             flat.push(i);
//         }
//     }

//     return flat;
// }

// console.log(makeFlatten([1, [2, [3, 4], 5]]));

//--------------------------

// 13. Ek string me har character ki frequency count karo.
// function countFrequency(str) {
//     let freq = {};

//     for (let char of str) {
//         if (freq[char]) {
//             freq[char]++;
//         } else {
//             freq[char] = 1;
//         }
//     }

//     return freq;
// }

// console.log(countFrequency("apple"));

//--------------------------