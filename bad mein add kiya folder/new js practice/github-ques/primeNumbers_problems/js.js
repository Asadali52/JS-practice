//1. Check if a number is prime or not
{
   let number = 7;
   let isPrime = true;

   if (number <= 1) {
      isPrime = false;
   } else {
      for (let i = 2; i < number; i++) {
         if (number % i === 0) {
            isPrime = false;
            break;
         }
      }
   }

   if (isPrime) {
      console.log(`${number} is a prime number`);
   } else {
      console.log(`${number} is not a prime number`);
   }
}


//2. Print all prime numbers up to N
{
   function printAllPrimes(N) {
      let primes = [];

      for (let num = 2; num <= N; num++) {
         let isPrime = true;

         for (let i = 2; i < num; i++) {
            if (num % i === 0) {
               isPrime = false;
               break;
            }
         };

         if (isPrime) {
            primes.push(num);
         }

      }
      return primes;
   }

   console.log(printAllPrimes(30));
}


//3. Count how many prime numbers up to N
{
   function countPrimes(N) {
      let count = 0;

      for (let num = 2; num <= N; num++) {
         let isPrime = true;

         for (let i = 2; i < num; i++) {
            if (num % i === 0) {
               isPrime = false;
               break;
            }
         }

         if (isPrime) {
            count++;
         };

      }
      return count;
   }
   console.log(countPrimes(20));
}


//4. Find the nth prime number
{
   function findNthPrimeNumber(nth_Prime) {
      let count = 0;

      for (let num = 2; ; num++) {
         let isPrime = true;

         for (let i = 2; i < num; i++) {
            if (num % i === 0) {
               isPrime = false;
               break;
            }
         }

         if (isPrime) {
            count++;
            if (count === nth_Prime) {
               return num;
            }
         }
      }
   }

   console.log(findNthPrimeNumber(50));
}


//5. Print all primes in a given range [a, b]

{
   function findGivenRangePrimes(a, b) {
      let primes = [];
      for (let num = a; num <= b; num++) {
         if (num < 2) continue;
         let isPrime = true;
         for (let i = 2; i < num; i++) {
            if (num % i === 0) {
               isPrime = false;
               break;
            }
         }
         if (isPrime) {
            primes.push(num);
         }
      }
      return primes;
   }

   console.log(findGivenRangePrimes(1, 10));
}


//6. Sum of primes in a given range

{
   function sumOfPrimes(a, b) {
      let sum = 0;

      for (let num = a; num <= b; num++) {
         if (num < 2) continue;

         let isPrime = true;

         for (let i = 2; i < num; i++) {
            if (num % i === 0) {
               isPrime = false;
               break;
            }
         }

         if (isPrime) {
            sum += num;
         }

      }
      return sum;
   }
   console.log(sumOfPrimes(10, 20));
}


//7. Check if two numbers are twin primes

{
   function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
         if (num % i === 0) {
            return false;
         }
      }
      return true;
   };

   function areTwinPrimes(a, b) {
      return isPrime(a) && isPrime(b) && (a - b === 2 || b - a === 2);
   }

   console.log(areTwinPrimes(7, 5));
}


//8. Product of first N primes
function productOfPrimes(N) {
   let product = 1;
   let count = 0

   for (let num = 2; ; num++) {
      let isPrime = true;

      for (let i = 2; i < num; i++) {
         if (num % i === 0) {
            isPrime = false;
            break;
         }
      }
      if (isPrime) {
         count++
         product = product * num;
      }
      if (count === N) break;
   }

   return product;
}

console.log(productOfPrimes(5));


//9. Sum of first N primes
function sumOfFirstN_Primes(N) {

   let count = 0;
   let sum = 0

   for (let num = 2; ; num++) {

      let isPrime = true;

      for (let i = 2; i < num; i++) {
         if (num % i === 0) {
            isPrime = false;
            break;
         }
      }

      if (isPrime) {
         count++;
         sum += num;
      }
      if (count === N) {
         break;
      }
   }
   return sum;
}
console.log(sumOfFirstN_Primes(5));


//10. Check if sum of two primes is also prime
{
   function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
         if (num % i === 0) {
            return false;
         }
      }
      return true;
   }

   function sumOfTwoPrimes(a, b) {
      return isPrime(a) && isPrime(b) && isPrime(a + b);
   }

   console.log(sumOfTwoPrimes(2, 3));
}