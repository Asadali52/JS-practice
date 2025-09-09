// Ek function likho jo ek string ka reverse return kare bina .reverse() use kiye.
{
    function reverseString(str) {
        let revStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            revStr += str[i];
        }
        return revStr;
    }
    console.log(reverseString('asad'))
}


// Ek function likho jo ek string me har vowel (a, e, i, o, u) ko * se replace kare.
{
    function changeIntoVowels(str) {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                newStr += '*';
            } else {
                newStr += str[i];
            }
        }
        return newStr;
    }
    console.log(changeIntoVowels('hello world'));
}
{
    function changeInVowels(string) {
        let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        let newString = '';
        for (let i = 0; i < string.length; i++) {
            if (vowels.includes(string[i])) {
                newString += '*';
            } else {
                newString += string[i];
            }
        }
        return newString;
    }
    console.log(changeInVowels('asad ali'))
}


// Ek function likho jo kisi number ke digits ka sum return kare.
// Input: 1234
// Output: 10 (1+2+3+4)
{
    function digitSum(num) {
        let str = num.toString();
        let sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str[i]);
        }
        return sum;
    }
    console.log(digitSum(123456789))
}


// Ek function likho jo ek sentence ke andar jitne words hain, unki count return kare.
{
    // function countWords(sentence) {
    //     let newSentence = sentence.trim();
    //     let count = 0;
    //     for (let i = 0; i < newSentence.length; i++) {
    //         if (newSentence[i] === ' ') {
    //             count++;
    //         }
    //     }
    //     return count + 1;
    // }
    // console.log(countWords('i love css'));

    let sentence = ' asa ahjdhj djfdjh    jfgdsfj   dfgjhdfj ';
    let newSentence = sentence.trim().split(" ").filter(word => word !== "");
    console.log(newSentence.length);
}


// Ek function likho jo ek array ke elements ko bina .sort() use kiye descending order me arrange kare.
{
    function descendingOrder(array) {
        for (let i = 0; i < array.length; i++) {

        }
    }
}


//  Ek function likho jo check kare ke ek array sorted hai ya nahi.
{
    function isSorted(arr) {
        for (let i = 0; i < arr.length + 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    }
    console.log(isSorted([1, 2, 2, 3, 4, 3, 2, 1]));
    console.log(isSorted([1, 2, 3, 4, 5, 6, 7]));
}


// Ek function likho jo ek array ke duplicate elements ko hata kar unique array return kare bina Set() use kiye.
{
    function uniqueArrayFunction(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i])
            }
        }
        return newArr;
    }
    console.log(uniqueArrayFunction([1, 2, 2, 2, 3, 4, 5]))
}


// Ek function likho jo check kare ke do strings anagrams hain ya nahi.
{
    function isAnagrams(str1, str2) {
        if (str1.length !== str2.length) return false;
        let string1 = str1.split("").sort().join("");
        let string2 = str2.split("").sort().join("");
        return string1 === string2;
    }
    console.log(isAnagrams('listen', 'silent'))
    console.log(isAnagrams('hell', 'world'))
}


{
    let str1 = 'cbaed';
    let output = str1.split("").sort()
    console.log(output)
    console.log(output.join(""));
}


// Ek function likho jo check kare ke ek sentence me kaun sa word sabse zyada baar aya hai. // pending
{
    function maxCountWord(sentence) {
        let arr = sentence.split(" ");
        let countWord = {};
        let maxCount = 0;
        let maxWord = "";

        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];

            if (countWord[word]) {
                countWord[word]++;
            } else {
                countWord[word] = 1;
            }

            if (countWord[word] > maxCount) {
                maxCount = countWord[word];
                maxWord = word;
            }
        }

        return { word: maxWord, count: maxCount };
    }
    console.log(maxCountWord("this is a test this is a test this")); // "this"
}


// Ek function likho jo ek array ka second largest number return kare. 
{
    function secondLargestNum(arr) {
        let max = -Infinity;
        let secondMax = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                secondMax = max;
                max = arr[i];
            } else if (arr[i] < max && arr[i] > secondMax) {
                secondMax = arr[i];
            }
        }

        return secondMax;
    }

    console.log(secondLargestNum([1, 30900, 4, 9, 19, 4783, 1111]));
}

{
    function findSecondLargest(array) {
        let max = -Infinity;
        let secondMax = -Infinity;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                secondMax = max;
                max = array[i];
            } else if (array[i] < max && array[i] > secondMax) {
                secondMax = array[i]
            }
        }
        return secondMax;
    }
    console.log(findSecondLargest([1, 2, 3, 4, 8, 5, 6, 7, 9]));
}


// Ek function likho jo ek sentence me har word ka pehla aur akhri letter swap kare.
{
    function myFunction(sentence) {
        let words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.length > 1) {
                let firstChar = word[0];
                let lastChar = word[word.length - 1];
                let middle = word.slice(1, word.length - 1);
                words[i] = lastChar + middle + firstChar;
            }
        }
        return words.join(" ");
    }
    console.log(myFunction('hello world'));
    console.log(myFunction('i love javascript'));
}

{
    function reverseWords(sentence) {
        let words = sentence.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.length > 1) {
                let firstChar = word[0];
                let lastChar = word[word.length - 1];
                let middle = word.slice(1, word.length - 1);
                words[i] = lastChar + middle + firstChar;
            }
        }
        return words.join(' ');
    }
    console.log(reverseWords('asad ali'));
}

{
    function myFunction(sentence) {
        let words = sentence.split(' ');
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            if (word.length > 1) {
                let firstChar = word[0];
                let lastChar = word[word.length - 1];
                let middleChars = word.slice(1, word.length - 1);
                words[i] = lastChar + middleChars + firstChar;
            }
        }
        return words.join(' ');
    }
    console.log(myFunction('i love css'));
}


// Ek function likho jo kisi bhi given time format ko 12-hour ya 24-hour format me convert kare.
// Input: "18:30" (24-hour)
// Output: "06:30 PM" (12-hour)
{
    function setTimeFormat(time24) {
        let [hour, minute] = time24.split(":").map(Number);
        let period = hour >= 12 ? "PM" : "AM";

        hour = hour % 12;
        if (hour === 0) hour = 12;

        let formattedHour = hour.toString().padStart(2, "0");
        let formattedMinute = minute.toString().padStart(2, "0");

        return `${formattedHour}:${formattedMinute} ${period}`;
    }
    console.log(setTimeFormat("18:30"));
    console.log(setTimeFormat("00:15"));
}
{
    function setTimeFormat(time24) {
        let [hour, minute] = time24.split(':').map(Number);
        let period = hour >= 12 ? 'PM' : 'AM';

        hour = hour % 12;
        if (hour === 0) hour = 12;

        let formattedHour = hour.toString().padStart(2, '0');
        let formattedMinute = minute.toString().padStart(2, '0');
        return `${formattedHour}:${formattedMinute} ${period}`;
    }
    console.log(setTimeFormat("18:30"));
    console.log(setTimeFormat("00:15"));
}


//Get Only Unique Values.
{
    let arr = [1, 2, 2, 3, 1, 4];
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    console.log(uniqueArray)
}


// // object and function
// {
//     function myFunc(theObject) {
//         theObject.make = "Toyota";
//     }
//     const myCar = {
//         make: "Honda",
//         model: "Accord",
//         year: 1998,
//     };
//     console.log(myCar.make);
//     myFunc(myCar);
//     console.log(myCar);
// }

// {
//     function myFunction(theObject) {
//         theObject.year = 2000;
//     }

//     const car = {
//         make: 'frari',
//         model: 'accord',
//         year: 1990,
//     };

//     console.log(car.year);
//     myFunction(car);
//     console.log(car);
// }


// {

//     console.log(true + false);
// }


// {
//     function addSquares(a, b) {
//         function square(x) {
//             return x * x;
//         }
//         return square(a) + square(b);
//     }
//     console.log(addSquares(10, 20));
// }
// {
//     function multiplySquare(a, b) {
//         function square(x) {
//             return x * x;
//         }
//         return square(a) * square(b);
//     }
//     console.log(multiplySquare(10, 20))
// }

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// console.log(factorial(1)); 
// console.log(factorial(2)); 
// console.log(factorial(3)); 
// console.log(factorial(4)); 
// console.log(factorial(5)); 

//Convert Array of Words to camelCase Sentence
{
    const words = ["hello", "my", "name", "is", "sehar"];
    let sentence = '';
    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            sentence += words[i]
        } else {
            sentence += words[i][0].toUpperCase() + words[i].slice(1)
        }
    }
    console.log(sentence);
}