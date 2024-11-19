{
    function count(str) {
        return str.length;
    }
    console.log(count('Hello World'));
    console.log(count('Asad Ali'));
}

// -------------------------------

{
    function reverseStr(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed = reversed + str[i];
        }
        return reversed;
    }
    console.log(reverseStr('JawaScript is a programming language'));
}

// ---------------------------------

function isPalindrome(str) {
    str = str.toLowerCase();

    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// ------------------------------------

// let userName = prompt('Enter your Full Name');

// let userFullName = '@' + userName + userName.length;
// console.log(userFullName);

// -----------------------------------
{
    let str = 'Hello'
    let str1 = 'World'

    let res = str.concat(' ', str1);
    console.log(res);
}

// -----------------------------------

{
    let sentence = 'The quick brown fox jumps over the lazy dog.';
    let word = 'fox';
    console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

    let str = 'Hello, World';
    console.log(str.includes('Hello')); // true
    console.log(str.includes('world')); // because of case-sensitive in returns false
    console.log(str.includes(',')) // true
}

//-----------------------------

{
    let paragraph = "I think Ruth's dog is cuter than your dog dog";
    let searchTerm = "dog";

    let indexOfFirst = paragraph.indexOf(searchTerm);
    console.log(`The index of the first "${searchTerm}" is "${indexOfFirst}"`);
    console.log(`The index of the second "${searchTerm}" is "${paragraph.indexOf(searchTerm, indexOfFirst + 1)}"`);
}

// -----------------------------

{
    let str = "hello";
    console.log(str.lastIndexOf('e'));
    console.log(str.lastIndexOf('l'));
}

// ----------------------

// const mood = 'Happy! ';
// console.log(`I feel ${mood.repeat(3)}`);

// -----------------------------------------
{
    let paragraph = "I think Ruth's dog is cuter than your dog!";
    console.log(paragraph.replace("Ruth's", 'my'));
}

{
    let paragraph = "I think Ruth's dog is cuter than your dog! I think Ruth's dog is cuter than your dog! I think Ruth's dog is cuter than your dog! ";
    let str = paragraph.replaceAll("Ruth's", 'my');
    console.log(str);
    console.log(str[0]);
    console.log(str.slice(0, 40));
    console.log(str.toUpperCase());
}

{
    let str = "   Hello World    ";
    console.log(str.toLowerCase());
    let trimmedStr = str.trim().toUpperCase();
    console.log(trimmedStr);
    console.log(str.trimEnd());
    console.log(str.trimStart());
}

// ------------------------------------------------

{
    let firstName = 'Ali';
    let lastName = 'Khan';
    let fullName = firstName + ' ' + lastName;
    console.log(fullName);
}

{
    let myString = "JavaScript is awesome!";
    let stringLength = myString.length;
    console.log(stringLength);
}

{
    let text = "Learn JavaScript";
    let thirdChar = text[2];
    console.log(thirdChar);
    let lastChar = text[text.length - 1];
    console.log(lastChar);
}

{
    let sentence = "I am learning JavaScript";
    let hasWord = 'JavaScript';
    console.log(sentence.includes(hasWord));
}

{
    let quote = "Practice makes a man perfect.";
    let newQuote = quote.replace('man', 'person');
    console.log(newQuote)
}

{
    let text = "Hello World!";
    let upperText = text.toUpperCase();
    let loweText = text.toLowerCase();
    console.log(upperText);
    console.log(loweText);
}

{
    let sentence = "The quick brown fox jumps over the lazy dog.";
    let subString = sentence.slice(4, 15);
    console.log(subString);
}

{
    let phrase = "Learning JavaScript is fun!";
    let startsWithLearning = phrase.startsWith('Learning')
    console.log(startsWithLearning);
}

{
    let paddedString = "   Extra spaces at the beginning and end    ";
    let trimmedString = paddedString.trim();
    console.log(trimmedString);
}

{
    let fruits = "apple,banana,cherry";
    let fruitsArray = fruits.split(',')
    console.log(fruitsArray);
}

{
    let sentence = "I like JavaScript. JavaScript is awesome!";
    let replacedWord = sentence.replaceAll('JavaScript', 'TypeScript');
    console.log(replacedWord);
}

{
    let phrase = "The quick brown fox jumps over the lazy dog.";
    console.log(phrase.indexOf('fox'));
}

{
    let str = "The year is 2024.";
    let hasDigit = /\d/.test(str);
    console.log(hasDigit);
}

{
    let info = "The price is $50.";
    let price = parseInt(info.match(/\d+/)[0]);
    console.log(price);
}

{
    let sentence = "this is a test sentence";
    let word = sentence.split(' ');
    let titleCase = word.map(function (w) {
        return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    });
    console.log(titleCase.join(' '));
}
