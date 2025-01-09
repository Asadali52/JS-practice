// Tumhein do sorted arrays di gayi hain. Ek function mergeSortedArrays(arr1, arr2) likho jo dono arrays ko merge kar ke ek sorted array return kare.
{
    function mergeSortedArrays(arr1, arr2) {
        let res = arr1.concat(arr2).sort();
        return res;
    }
    console.log(mergeSortedArrays([1, 3, 5, 6], [2, 4, 7, 8]));
}


// // Ek function findPrimes(n) likho jo 1 se n tak saare prime numbers return kare.
{
    function findPrimes(num) {
        let res = [];
        for (let i = 2; i <= num; i++) {
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                res.push(i);
            }
        }
        return `Primes number in 10 are ${res}`;
    }
    console.log(findPrimes(10));
}


// // Ek function rotateArray(arr, k) likho jo array ko k times rotate kare.
{
    function rotateArray(arr, k) {
        if (arr.length === 0) return arr;

        k = k % arr.length;
        if (k === 0) return arr;

        for (let i = 0; i < k; i++) {
            let lastElement = arr[arr.length - 1];
            for (let j = arr.length - 1; j > 0; j--) {
                arr[j] = arr[j - 1];
            }
            arr[0] = lastElement;
        }

        return arr;
    }

    console.log(rotateArray([1, 2, 3, 4, 5], 2));
    console.log(rotateArray([1, 2, 3, 4, 5], 3));
    console.log(rotateArray([1, 2, 3, 4, 5], 0));
}


// //Tumhein ek sentence diya gaya hai. Ek function findLongestWord(sentence) likho jo sabse lambi word return kare.
{
    function findLongestWord(sentence) {
        let arr = sentence.split(' ');
        let maxWord = arr[0];
        for (let i of arr) {
            if (maxWord.length < i.length) {
                maxWord = i;
            }
        }
        return `Longest word in the sentence "${sentence}" is "${maxWord}".`;
    }
    console.log(findLongestWord("The quick brown fox jumps over the lazy dog"));
}
{
    function findShortestWord(sentence) {
        let arr = sentence.split(' ');
        let minWord = arr[0];
        for (let i of arr) {
            if (i.length < minWord.length) {
                minWord = i;
            }
        }
        return `Shortest word in the sentence "${sentence}" is "${minWord}".`;
    }
    console.log(findShortestWord("The quick brown fox jumps over a dog"));
}


// // Ek function isAnagram(str1, str2) likho jo check kare ke do strings anagrams hain ya nahi.
{
    function isAnagram(str1, str2) {
        let sortedStr1 = str1.split('').sort().join('');
        let sortedStr2 = str2.split('').sort().join('');

        return sortedStr1 === sortedStr2;
    }
    console.log(isAnagram('asad', 'dasa'));
    console.log(isAnagram('hello', 'world'));
}

// Ek function wordFrequency(sentence) likho jo ek string ke har word ki frequency return kare.
{
    function wordFrequency(sentence) {
        // Pehle sentence ko words me todte hain (space ke basis par)
        let words = [];
        let tempWord = '';

        for (let i = 0; i < sentence.length; i++) {
            if (sentence[i] !== ' ') {
                tempWord += sentence[i]; // Word ka part jodte hain
            } else {
                if (tempWord !== '') {
                    words.push(tempWord); // Word ko array me daalte hain
                    tempWord = ''; // Word reset karte hain
                }
            }
        }
        if (tempWord !== '') {
            words.push(tempWord); // Akhri word ko bhi daal dete hain
        }

        // Word frequency calculate karte hain
        let frequency = {};
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (frequency[word]) {
                frequency[word]++;
            } else {
                frequency[word] = 1;
            }
        }

        return frequency;
    }
    2
    // Example usage
    const sentence = "this is a test. this is only a test.";
    console.log(wordFrequency(sentence));
}

//  Tumhein ek array diya gaya hai jo 1 se n tak ke numbers contain karta hai, 
//  lekin ek number missing hai. Ek function findMissingNumber(arr, n) likho jo missing number return kare.
// Input: arr = [1, 2, 4, 6, 3, 7, 8], n = 8
// Output: 5
{
    function findMissingNumber(arr, n) {
        let sumOfNth = 0;
        let sumOfArr = 0;
        for (let i = 1; i <= n; i++) {
            sumOfNth += i;
        }
        for (let i of arr) {
            sumOfArr += i;
        }
        return sumOfNth - sumOfArr;
    }
    console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8))
}



// Ek function groupEvenOdd(arr) likho jo array ke numbers ko even aur odd groups mein divide kare aur ek object return kare.
// Input: arr = [1, 2, 3, 4, 5, 6]
// Output: { even: [2, 4, 6], odd: [1, 3, 5] }
{
    function groupEvenOdd(arr) {
        let obj = { even: [], odd: [] };
        for (let i of arr) {
            i % 2 === 0 ? obj.even.push(i) : obj.odd.push(i);
        }
        return obj;
    }
    console.log(groupEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
}

// OBJECT PRACTICE 
{
    let obj = {
        name: 'asad',
        age: 22
    }
    obj.cgpa = 5;

    delete obj.age;

    console.log(obj);

    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
}

// //write a js program to check two numbers and return true if one of the number is 100 or if the sum of two numbers is 100.
{
    const CheckNumbers = (num1, num2) => {
        return num1 + num2 == 100 || num1 == 100 || num2 == 100 ? true : false
    }
    console.log(CheckNumbers(90, 10));
    console.log(CheckNumbers(12, 10));
    console.log(CheckNumbers(100, 10));
}


// aik function bnao us main aik parameter lo array, or us array k har element ko 3 sy multiply kro;
function MultiplyByThree(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] * 3);
    }
    return res;
}
console.log(MultiplyByThree([20, 3, 4,]));



// wrie a js program to check a given string contains 2 to 4 occurances of a specific character.
{
    const checkChahractersOccurance = (str, character) => {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === character) {
                count++;
            }
        }
        return count >= 2 && count <= 4;
    }
    console.log(checkChahractersOccurance('helllo world', 'l'));
    console.log(checkChahractersOccurance('helllo world', 'e'));
}


{
    let str = 'asad';
    console.log(str.split(''));
}
{
    function StrConvertToArr(str) {
        let arr = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                arr.push(str[i]);
            }
        }
        return arr;
    }
    console.log(StrConvertToArr('i am learning js'));
}


// js program to find even number from array of integers;
{
    const CountEvenNums = (arr) => {
        let count = 0;
        for (let i of arr) {
            if (i % 2 === 0) {
                count++;
            }
        }
        return `${count} even numbers in this array [${arr}]`;
    }
    console.log(CountEvenNums([1, 2, 3, 4, 5, 6, 7, 8]));
}

{
    let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length >= 7);
    console.log(result);
}