// Reverse a string without using extra space.
{
    function reversedStr(str) {
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        };
        return newStr;
    }
    console.log(reversedStr('asad'));
    console.log(reversedStr('ali'));
}


// Check if a string is a palindrome.
{
    function checkIsPalindrome(str) {
        let newStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        };
        return newStr === str;
    }
    console.log(checkIsPalindrome("asad"));
    console.log(checkIsPalindrome("madam"))
}


// Find the first non-repeating character in a string.
{
    function removeFirstNonRepeating(str) {
        let frequency = {};
        for (let i = 0; i < str.length; i++) {
            frequency[str[i]] = (frequency[str[i]] || 0) + 1;
        }
        // return frequency;
        for (let i = 0; i < str.length; i++) {
            if (frequency[str[i]] === 1) {
                return str[i];
            }
        }
    }
    console.log(removeFirstNonRepeating('asad'))
}


// Count the frequency of each character in a string
{
    function countFrequency(str) {
        let frequency = {};
        for (let i = 0; i < str.length; i++) {
            frequency[str[i]] = (frequency[str[i]] || 0) + 1;
        }
        return frequency;
    }
    console.log(countFrequency('hello'))
}


// Check if two strings are anagram or not
{
    function isAnagrams(str1, str2) {

        if (str1.length !== str2.length) return false;

        let string1 = str1.toLowerCase().split("").sort().join('');
        let string2 = str2.toLowerCase().split("").sort().join('');

        return string1 === string2;

    };
    console.log(isAnagrams('asad', 'ali'));
    console.log(isAnagrams('asad', 'saad'));
}

// tips
{
    let obj = {};
    let asad = 'age';
    obj[asad] = 15;
    console.log(obj);

    //=====================

    let obj2 = {};
    obj2['a'] = 3;
    obj2['b'] = 5;
    obj2['a'] = 5;
    console.log(obj2);

    // =====================

    let object = [
        { id: 7, name: 'john' },
        { id: 6, name: 'grace' },
        { id: 2, name: 'jane' },
        { id: 10, name: 'julie' }
    ];
    const sorted = object.sort((a, b) => {
        return a.id - b.id;
    });
    console.log(sorted);
}


// Implement a basic string compression algorithm.
{
    function compressionString(str) {
        let result = '';
        let count = 1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                count++;
            } else {
                result += str[i] + count;
                count = 1;
            };
        }
        return `${result}`
    };
    console.log(compressionString('asaad'));
}


// Find the longest common prefix among a set of strings.
{
    let arr = ['flower', 'flow', 'flight'];
    let prefix = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let temp = '';
        for (let j = 0; j < prefix.length && j < arr[i].length; j++) {
            if (prefix[j] === arr[i][j]) {
                temp += prefix[j];
            } else {
                break;
            }
        }
        prefix = temp;
        if (prefix === '') break;
    }
    console.log(prefix);
}