// we can declare variable by let, var, const
// {
//     let a = 'asad'; // ab hum isi ko ziada use kr skty ku k ye change b ho skta hai , it can be updated
//     var a = 'asad'; // this works globally , ab hum isy use ni krty
//     const b = 'asad'; // isy hum constant variable bi kehty hain ku k isko redeclare ni kr skty
// }

// Write a program to swap two numbers using a temporary variable.

{
   let num1 = 5;
   let num2 = 10;

   console.log('before swapping');
   console.log('num1 =', num1);
   console.log('num2 =', num2);

   let temp = num1;
   num1 = num2;
   num2 = temp;

   console.log('after swapping');
   console.log('num1 =', num1);
   console.log('num2 =', num2);;
}

// Write a program to check if a given number is even or odd.
//How do you write an if-else condition in JavaScript? Provide an example.
{
   let num = 24;
   if (num % 2 === 0) {
      console.log(num, 'is a even number');
   } else {
      console.log(num, 'is a odd number');
   }
}


// Write a loop to print numbers from 1 to 10.
{
   for (let i = 1; i <= 10; i++) {
      console.log(i);
   }
}

// Write a program to find the sum of all numbers from 1 to 100 using a loop.
{
   let sum = 0;
   let num = 100;
   for (let i = 1; i <= num; i++) {
      sum += i;
   }
   console.log(sum);
}

// Write a function that takes two numbers as arguments and returns their sum.
{
   function sum(a, b) {
      return a + b;
   }
   console.log(sum(10, 12))
}

//What is the difference between a regular function and an arrow function? Provide examples.
{
   function regularFunction(a) {
      return a ** a
   }
   const arrowFunction = (b) => {
      return b ** b
   }
   console.log(regularFunction(4));
   console.log(arrowFunction(7));
}

// Write a program to calculate the factorial of a number using a function.
{
   function factorialOfNum(num) {
      let factorial = 1;
      for (let i = num; i >= 1; i--) {
         factorial *= i;
      }
      return factorial;
   }
   console.log(factorialOfNum(6));

}

// Write a program to reverse a string.
{
   function reversedString(str) {
      let newStr = '';
      for (let i = str.length - 1; i >= 0; i--) {
         newStr += str[i];
      }
      return newStr;
   }
   console.log(reversedString('javascript'));
}

// How do you find the length of a string in JavaScript?
{
   let str = 'Hello World';
   console.log(str.length);
}

// Write a program to check if a given string is a palindrome.
{
   function isPalindrome(str) {
      let palindrome = true;
      for (let i = 0; i <= str.length / 2; i++) {
         if (str[i] !== str[str.length - 1 - i]) {
            palindrome = false;
            break;
         }
      }
      return palindrome ? `${str} is a palindrome` : `${str} is not a palindrome`;
   }
   console.log(isPalindrome('madam'));
   console.log(isPalindrome('hello'));
}

// How do you create an array in JavaScript? Provide an example.
{
   let arr = ['asad', 'ali', 123];
   console.log(arr);
}

// Write a program to find the largest number in an array.
{
   function LargestNumber(arr) {
      let max = -Infinity;
      for (let i of arr) {
         if (i > max) {
            max = i;
         }
      }
      return max;
   }
   console.log(LargestNumber([1, 2, 3, 4, 5]));
}

// Write a program to sort an array of numbers in ascending order.
{
   let arr = [5, 4, 3, 2, 1];
   arr.sort();
   console.log(arr);
}

// How do you create an object in JavaScript? Provide an example.
// Write a program to print all the keys and values of an object.
{
   let obj = {
      name: 'asad',
      age: 18
   }
   console.log(obj);
   console.log(obj.name, obj.age);
   for (let i in obj) {
      console.log('key:', i, ',', 'value', obj[i]);
   }
}

// What is the difference between dot notation and bracket notation when accessing object properties?
{
   let obj = {
      name: 'asad',
      age: 19
   }
   console.log(obj.name);
   console.log(obj.age);
   console.log(obj['name']);
   console.log(obj['age']);
}

// Write a program to check if a number is a prime number.
{
   let num = 7;
   let isPrime = true;
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         isPrime = false;
         break;
      }
   }
   console.log(isPrime ? `${num} is a prime number` : `${num} is not a prime number`);
}
{
   function isPrime(num) {
      let prime = true;
      for (let i = 2; i < num; i++) {
         if (num % i === 0) {
            prime = false;
            break;
         }
      }
      return prime ? `${num} is a prime number` : `${num} is not a prime number`;
   }
   console.log(isPrime(6));
}

// Write a program to generate a random number between 1 and 100.
{
   function getRandomNumber() {
      return Math.floor(Math.random() * 100) + 1;
   }
   console.log(getRandomNumber());
}

// What is the difference between == and === in JavaScript?
{
   let a = 2;
   let b = '2';
   console.log(`2 == '2'`, a == b); // this will return true;
   console.log(`2 === '2'`, a === b); // this is a ristric operator this will also compare the variable type this will return false
}


/* ------------------------ANOTHER SESSION------------------------------ */
/* ------------------------ANOTHER SESSION------------------------------ */
/* ------------------------ANOTHER SESSION------------------------------ */
/* ------------------------ANOTHER SESSION------------------------------ */
/* ------------------------ANOTHER SESSION------------------------------ */


// Tumhein ek function reverseString likhna hai jo input string ko reverse kare.
{
   function reversedString(str) {
      let revStr = '';
      for (let i = str.length - 1; i >= 0; i--) {
         revStr += str[i];
      }
      return revStr;
   }
   console.log(reversedString('Hello'));
   console.log(reversedString('Pakistan'));
}


// Tumhein ek function findLargest likhna hai jo ek array mein sabse bara number return kare.
{
   function findLargest(arr) {
      let max = -Infinity;
      for (let i of arr) {
         if (i > max) {
            max = i;
         }
      }
      return `${max} is the largest number in [${arr}]`;
   }
   console.log(findLargest([1, 2, 3, 4, 5, 6, 7, 8, 9,]));
}

// Tumhein ek function countVowels likhna hai jo string mein vowels (a, e, i, o, u) ki count return kare.
{
   function countVowels(str) {
      let vowelsNum = 0;
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      str = str.toLowerCase();
      for (let i = 0; i < str.length; i++) {
         if (vowels.includes(str[i])) {
            vowelsNum++;
         }
      }
      return `${vowelsNum} vowels letter in string "${str}"`;
   }
   console.log(countVowels('Asad Ali'));
}


// Tumhein ek function isPalindrome likhna hai jo check kare ke input string palindrome hai ya nahi (palindrome wo string hoti hai jo ulta aur seedha dono same ho).
{
   function isPalindrome(str) {
      let revStr = '';
      for (let i = str.length - 1; i >= 0; i--) {
         revStr += str[i];
      }
      return str === revStr ? `"${str}" is a palindrome` : `"${str}" is not a palindrome`
   }
   console.log(isPalindrome('javascript'));
   console.log(isPalindrome('level'));
}


// Tumhein ek function flattenArray likhna hai jo nested array ko flatten kare.
{
   function flattenArray(arr) {
      let result = [];
      function recursiveFlatten(arrayCheck) {
         for (let i = 0; i < arrayCheck.length; i++) {
            Array.isArray(arrayCheck[i]) ? recursiveFlatten(arrayCheck[i]) : result.push(arrayCheck[i]);
         }
      }
      recursiveFlatten(arr);
      return result;
   }
   const input = [[1, 2], [3, [4, 5]]];
   console.log(flattenArray(input));
}


{
   const flattenArray = (arr) => {
      let result = [];
      const recursiveFlatten = (arrayCheck) => {
         for (let i = 0; i < arrayCheck.length; i++) {
            Array.isArray(arrayCheck[i]) ? recursiveFlatten(arrayCheck[i]) : result.push(arrayCheck[i]);
         }
      }
      recursiveFlatten(arr);
      return result;
   }
   console.log(flattenArray([[1], [2], [3], [4], [5]]));
}

// Tumhein ek function removeDuplicates likhna hai jo array ke duplicate elements ko remove kare

{
   function removeDuplicates(arr) {
      let UniqueArr = [];
      for (let i of arr) {
         if (!UniqueArr.includes(i)) {
            UniqueArr.push(i)
         }
      }
      return UniqueArr;
   }
   console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));
}

// Tumhein ek function fizzBuzz likhna hai jo 1 se N tak numbers print kare. Lekin:
// Agar number 3 ka multiple ho, to "Fizz" print kare.
// Agar number 5 ka multiple ho, to "Buzz" print kare.
// Agar number 3 aur 5 dono ka multiple ho, to "FizzBuzz" print kare.

{
   function fizzBuzz(num) {
      if (typeof num !== 'number') {
         console.log('Please provide a valid number');
         return;
      }

      for (let i = 1; i <= num; i++) {
         console.log(
            i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' :
               i % 3 === 0 ? 'Fizz' :
                  i % 5 === 0 ? 'Buzz' :
                     i
         );
      }
   }
   // fizzBuzz(100);
}


// Tumhein ek function findFactorial likhna hai jo kisi number ka factorial calculate kare.

{
   function findFactorial(num) {
      factorial = 1;
      for (let i = 1; i <= num; i++) {
         factorial *= i;
      }
      return factorial;
   }
   console.log(findFactorial(10));
}


// Tumhein ek function isSorted likhna hai jo check kare ke ek array ascending order mein sorted hai ya nahi.

{
   function isSorted(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
         if (arr[i] > arr[i + 1]) {
            return false;
         }
      }
      return true;
   }
   console.log(isSorted([1, 2, 3, 4, 5]));
   console.log(isSorted([5, 4, 3, 2, 1]));
}

// Tumhein ek function generateFibonacci likhna hai jo N numbers tak Fibonacci series return kare
// Input: 5
// Output: [0, 1, 1, 2, 3]
// Fibonacci series ka har number apne previous 2 numbers ka sum hota hai. Loop ya recursion use kar ke solve karo.
{
   function generateFibonacci(num) {
      if (num <= 0) {
         return [];
      }
      if (num === 1) {
         return [0];
      }
      let series = [0, 1];
      for (let i = 2; i < num; i++) {
         series.push(series[i - 1] + series[i - 2]);
      }
      return `Fibonacci of ${num} is [${series}]`;
   }
   console.log(generateFibonacci(10));
   console.log(generateFibonacci(7));
}
{
   function generateFibonacci(N) {
      if (N <= 0) {
         return [];
      }

      if (N === 1) {
         return [0];
      }

      let series = [0, 1];
      for (let i = 2; i < N; i++) {
         series.push(series[i - 1] + series[i - 2]);
      }
      return `Fibonacci of ${N} is [${series}]`;
   }
   console.log(generateFibonacci(21));
}


//  Tumhein do sorted arrays di gayi hain. Ek function mergeSortedArrays(arr1, arr2) likho jo dono arrays ko merge kar ke ek sorted array return kare.
{
   function mergeSortedArrays(arr1, arr2) {
      let arr3 = arr1.concat(arr2).sort();
      return arr3;
   }
   console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
}

//  Ek function findPrimes(n) likho jo 1 se n tak saare prime numbers return kare.
{
   function findPrimes(num) {
      let primes = [];

      for (let i = 2; i <= num; i++) {
         let isPrime = true;
         for (let j = 2; j < i; j++) {
            if (i % j === 0) {
               isPrime = false;
               break;
            }
         }
         if (isPrime) {
            primes.push(i);
         }
      }
      return primes;
   }
   console.log(findPrimes(10));
}