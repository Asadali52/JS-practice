//  Array ke har element ka cube return karo.
{
    let arr = [1, 2, 3, 4];
    let cubicArr = [];
    for (let i = 0; i < arr.length; i++) {
        cubicArr.push(arr[i] ** 3);
    }
    console.log(cubicArr);
}


// find max
{
    let arr = [-4, 7, 1, 9, 12, 5];
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}


// Ek array me se sirf odd numbers nikal kar naye array me store karo.
{
    let arr = [2, 5, 8, 9, 12, 13];
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odds.push(arr[i]);
        }
    }
    console.log(odds);
}


//  Ek array ka duplicate-free version return karo.
{
    let arr = [1, 2, 2, 3, 4, 4, 5];
    let duplicateFree = [];
    for (let i of arr) {
        if (!duplicateFree.includes(i)) {
            duplicateFree.push(i);
        }
    };
    console.log(duplicateFree);
}


// Ek array ke sab elements ka sum nikalo bina .reduce() method ke.
{
    let arr = [10, 20, 30, 40];
    let sum = 0;
    for (let i of arr) {
        sum = sum + i;
    }
    console.log(sum);
}


// Ek string me vowels (a, e, i, o, u) count karo.
{
    let str = "javascript";
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    console.log(count);
}


// Palindrome check karo (word same forward aur backward).
{
    function isPalindrome(str) {
        let palindrome = true;
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[str.length - 1 - i]) {
                palindrome = false;
                break;
            }
        }
        return palindrome ? `${str} is a palindrome` : `${str} is not a palindrome;`
    }
    console.log(isPalindrome('madam'));
    console.log(isPalindrome('hello'));
}


// Ek sentence ke har word ka pehla letter capital karo.
{
    let sentence = "hello world";
    let arr = sentence.split(' ');
    let capital = [];
    for (let i of arr) {
        capital.push(i[0].toUpperCase() + i.slice(1));
    }
    sentence = capital.join(' ');
    console.log(sentence);
}
{
    let sentence = "i am learning js";
    let array = sentence.split(' ');
    let upperCase = [];
    for (let i = 0; i < array.length; i++) {
        upperCase.push(array[i][0].toUpperCase() + array[i].slice(1));
    }
    sentence = upperCase.join(' ');
    console.log(sentence);
}


// Fibonacci series generate karo kisi bhi n numbers tak.
{
    function fibonacci(n) {
        let fibSeries = [0, 1];
        for (let i = 2; i < n; i++) {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
        return fibSeries.slice(0, n)
    }
    console.log(fibonacci(10))
}


//  Ek number prime hai ya nahi, check karo.
{
    function isPrime(num) {
        if (num < 2) return false;

        for (let i = 2; i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    console.log(isPrime(5));
    console.log(isPrime(10))
}


// 1 sy 100 tk prime numbers print kro
{
    function primes(num) {
        if (num < 2) return false;
        for (let i = 2; i < num / 2; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 0; i <= 100; i++) {
        if (primes(i)) {
            console.log(i)
        }
    }
}