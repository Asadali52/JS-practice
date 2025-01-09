// Ek variable declare karein jo aapka naam store kare aur usse console mein print karein.
// const aur let ka difference samajh kar example ke saath likhein.
// Kisi number ko string mein kaise convert karte hain? Example ke saath likhein.
{
    let name = 'Asad Ali';
    console.log(name);
    name = 2222;
    console.log(name);

    const age = 22;
    console.log(age);
    // age = 12; // this will through an error

    let num = 123;
    console.log(num);
    let numtoStr = num.toString();
    console.log(numtoStr);
    console.log(typeof numtoStr);
    console.log(typeof num);
}


// Ek program likhein jo check karein ke ek number odd hai ya even.
{
    let num = 3;
    let res = false;
    if (num % 2 === 0) {
        res = true
    } else {
        res = false
    }
    console.log(res);
}
{
    let num = 4;
    let res = num % 2 === 0
    console.log(res);
}


// Agar kisi student ka percentage 90% se zyada hai, "Excellent" print karein, agar 50%-90% ke beech hai, "Good", aur agar 50% se kam hai to "Fail" print karein.

{
    let percentage = 7;
    if (percentage >= 90) {
        console.log("Excellent");
    } else if (percentage >= 50) {
        console.log('Good');
    } else {
        console.log('Fail');
    }
}


// Ek program likhein jo 1 se 10 tak ke numbers print karein (for loop ka use karke).
{
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}


// Ek array ke saare elements ko console mein print karein (for-of loop ka use karke).
{
    let arr = [1, 'eeee', 44, 99];
    for (let i of arr) {
        console.log(i);
    }
}


// for loop ka use karke 5 se 1 tak ke numbers reverse order mein print karein.
{
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
}

// Ek function likhein jo do numbers ko add kare aur result return kare.
{
    function plus(num1, num2) {
        return num1 + num2;
    }
    console.log(plus(100, 2));
    console.log(plus('asad', 52));
}


// Ek function likhein jo ek string ko input le aur uska length return kare.
{
    function strLength(str) {
        return str.length;
    }
    console.log(strLength('asad'));
    console.log(strLength('javaScript'));
}


// Ek array declare karein jo 4 fruits store kare aur usse console mein print karein.
{
    let arr = ['apple', 'mango', 'litchi', 'strawberry'];
    console.log(arr);
}


// Use a for loop to reverse the digits of a given number (e.g., input 1234 → output 4321).
{
    let num = 'asad';
    let reversed = '';
    for (let i = num.length - 1; i >= 0; i--) {
        reversed = reversed + num[i];
    }
    console.log(reversed);
}
// agr variable num ho 
{
    let number = 123456789;
    let numberStr = number.toString();
    let reversed = '';
    for (let i = numberStr.length - 1; i >= 0; i--) {
        reversed = reversed + numberStr[i];
    }
    console.log(reversed);
}


// Ek program likhein jo ek array ke saare numbers ka sum calculate karein.
{
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i of arr) {
        sum = sum + i
    }
    console.log(sum);
}


// Ek program likhein jo ek 2 arrays ko index vise sum kry.
{
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [1, 2, 3, 4, 5];
    let sum = [];
    for (let i = 0; i < arr1.length; i++) {
        sum.push(arr1[i] + arr2[i])
    }
    console.log(sum);
}
{
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [1, 2, 3, 4];
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            sum.push(arr1[i] + arr2[i]);
        }
        console.log(sum);
    } else {
        console.log('Arrays are not of the same length!');
    }

}


// Ek string declare karein aur uska first character console mein print karein.
{
    let str = 'Hello World';
    console.log(str[0]);
}


// Ek program likhein jo ek string ko reverse karein (e.g., "hello" => "olleh").
{
    let str = 'Hello';
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }
    console.log(reversed);
}


// Ek object create karein jo ek student ka naam, age aur grade store kare.
{
    let student = {
        name: 'Asad',
        age: 12,
        grade: 'D'
    }
    console.log(student);
    for (let key in student) {
        console.log(key, student[key]);
    }
}


// Object ke andar ek property kaise add karein ya delete karein? Example ke saath likhein.
{
    let obj = {
        name: 'Asad',
        age: 12,
        grade: 'D'
    }
    obj.city = 'kasur';
    obj.country = 'pak'
    console.log(obj);
    delete obj.grade
    console.log(obj);
    delete obj.age;
    console.log(obj);
}


// Ek program likhein jo check karein ki ek given number positive hai, negative hai ya zero.
{
    let num = 0;
    if (num < 0) {
        console.log('Negative');
    } else if (num === 0) {
        console.log('Zero');
    } else {
        console.log('Positive');
    }
}


// Ek function likhein jo ek array ko input le aur uske maximum aur minimum numbers return kare.
{
    let arr = [-1, 2, 3, 4, 5, 6, 7, 8, 999999];
    let max = arr[0];
    let min = arr[0];
    for (let i of arr) {
        if (i > max) {
            max = i;
        }
        if (i < min) {
            min = i;
        }
    }
    console.log(`minValue: ${min} & maxValue: ${max}`);
}

// --------------Ek program likhein jo 1 se 50 tak ke numbers print kare:
// Agar number 3 se divisible hai to "Fizz" print kare.
// Agar number 5 se divisible hai to "Buzz" print kare.
// Agar dono se divisible hai to "FizzBuzz" print kare.

{
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i);
        }
    }
}

// ---------------------------------------------------------------------------------------------

//Ek function likhein jo 2 numbers ka average calculate karein aur result return karein.
{
    function average(num1, num2) {
        sum = (num1 + num2) / 2;
        return sum;
    }
    console.log(`Average number is ${average(1, 20)}`);
    console.log(`Average number is ${average(50, 21)}`);
}


// Ek function likhein jo ek string ko input le aur uska uppercase version return karein.
{
    function normalStr(str) {
        return str.toUpperCase();
    }
    console.log(` "${normalStr('asad')}" this is upperCase version of asad`);
    console.log(` "${normalStr('javascript')}" this is upperCase version of javascript`);
}


// Ek program likhein jo ek array ko reverse karein bina reverse() method ke use ke.
{
    let arr = [1, 2, 3, 4, 5];
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    console.log(reversed);
}


// Ek array ke andar se duplicate elements ko remove karein aur updated array print karein.
{
    let arr = [2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
    uniqueArr = [];
    for (let i of arr) {
        if (!uniqueArr.includes(i)) {
            uniqueArr.push(i);
        }
    }
    console.log("Original Array:", arr);
    console.log("Array with Unique Elements:", uniqueArr);
}
{
    let array = ['asad', 'asad', 'ali', 'ali', 'shani'];
    let UniqueArray = [];
    for (let i of array) {
        if (!UniqueArray.includes(i)) {
            UniqueArray.push(i);
        }
    }
    console.log('Original: ', array);
    console.log('Unique: ', UniqueArray);
}


// Ek program likhein jo 1 se 100 tak ke numbers mein se sirf prime numbers print karein.
{
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
}


// Ek object create karein jo ek book ka naam, author, aur price store kare.
{
    let object = {
        book: 'Iqbal-e-zarin',
        author: 'iqbal',
        price: 500
    }
    for (let i in object) {
        console.log(i, ':', object[i]);
    }
}


// Ek function likhein jo ek object ko input le aur uske saare keys ko console mein print kare.
{
    function objFunction(obj) {
        for (let key in obj) {
            console.log(key, ':', obj[key]);
        }
    }
    let student = {
        name: 'guha',
        age: 24
    }
    objFunction(student);
}


// Ek object mein ek new property ko dynamically add karein (e.g., obj['newProperty'] = value).
{
    let team = {
        kohli: 18,
        babar: 56,
        dhoni: 7
    }
    team['starc'] = 56;
    console.log(team);
}


// Ek function likhein jo ek string ko input le aur agar wo palindrome ho to true return kare, otherwise false.
{
    let str = "madam";
    let isPalindrome = true;

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        console.log(true);
    } else {
        console.log(false);
    }
}
{
    let str = 'Hello';
    let isPalindrome = true;

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    if (isPalindrome) {
        console.log(true);
    } else {
        console.log(false);
    }
}
{
    let str = "racecar";
    let isPalindrome = true;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    console.log(isPalindrome);
}


// Ek program likhein jo ek string ke saare vowels ko remove karein (e.g., "hello" → "hll").
{
    let str = 'hello';
    filterStr = '';
    for (let i of str) {
        if (i !== 'a' && i !== 'e' && i !== 'i' && i !== 'o' && i !== 'u') {
            filterStr += i;
        }
    }
    console.log(filterStr);
}
{
    let str = 'aepppllllloiou';
    let newStr = '';
    for (let i of str) {
        if (!'aeiou'.includes(i)) {
            newStr += i;
        }
    }
    console.log(newStr);
}
{
    let str = 'hello';
    let isInclude = str.includes('p');
    console.log(isInclude);
}
{
    let str = 'hello';
    let isInclude = str.includes('ll');
    console.log(isInclude);
}


// Ek program likhein jo ek array mein sabse bada number find karein without using Math.max().
{
    let arr = [25, 45, 67, 99, 101];
    let max = arr[0];
    for (let i of arr) {
        if (i > max) {
            max = i;
        }
    }
    console.log(max);
}
{
    let arr = [25, 45, 67, 99, 101];
    let min = arr[0];
    for (let i of arr) {
        if (i < min) {
            min = i;
        }
    }
    console.log(min);
}


// Ek program likhein jo ek array ke har element ko 3 times print karein (e.g., [1, 2, 3] → 1 1 1 2 2 2 3 3 3).
{
    let arr = [1, 2, 3, 4, 0];
    let line = '';
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < 4; j++) {
            line += arr[i];
            newArr.push(i);
        }
    }
    console.log(line);
    console.log(newArr);
}


// Ek array of numbers banayein aur usme map ka use karke har number ko 2 se multiply karein.
{
    let num = [2, 3, 4, 5, 6];
    let mapped = num.map((x) => x * 2);
    console.log(mapped);
}


// Ek array of numbers banayein aur usme filter ka use karke sirf even numbers ko extract karein.
{
    let arr = [11, 22, 33, 44, 55, 66];
    let filterArr = [];
    for (let i of arr) {
        if (i % 2 === 0) {
            filterArr.push(i);
        }
    }
    console.log(`Even numbers filter by custom: [${filterArr}]`);
    let evenNumbers = arr.filter((num) => num % 2 === 0); // by filter method
    console.log(`Even numbers filter by filter method: [${evenNumbers}]`);
}


// Ek recursive function likhein jo ek number ke factorial ko calculate karein.
{
    function factorials(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
    console.log(factorials(5))
}