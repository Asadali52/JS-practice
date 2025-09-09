// ******************* LOOPS *********************** //

//  1 se 100 tak ke sab odd numbers print karo.
{
    let odds = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            odds.push(i);
        }
    }
    console.log(odds);
}


// 1 se 50 tak ke sab even numbers ka sum nikalo.
{
    let sum = 0;
    for (let i = 0; i <= 50; i++) {
        if (i % 2 === 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}


// 1 se 10 tak ka multiplication table print karo (nested loop use kar sakte ho).
{
    for (let i = 1; i <= 10; i++) {
        for (j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
        console.log('----------------');
    }
}


// 5 factorial (5! = 5 * 4 * 3 * 2 * 1) ka value calculate karo.
{
    let num = 5;
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial = factorial * i;
    }
    console.log(factorial);
}


// Kisi bhi number ka reverse nikalo, jaise 1234 ka 4321 hona chahiye.
{
    let number = 1234;
    let str = number.toString();
    let reverseStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    console.log(reverseStr);
}

// ******************* ARRAYS *********************** //

// Ek array banao aur sabhi numbers ko triple karo (loop use karke).
{
    let arr = [1, 2, 3, 4, 5];
    let tripleArr = [];
    for (let i = 0; i < arr.length; i++) {
        tripleArr.push(arr[i] * 3);
    }
    console.log(tripleArr);
}


// Ek array me sabse chhota aur sabse bada number find karo bina built-in method ke.
{
    let arr = [100, 290, 903, 40, 705];
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Max:", max);
    console.log("Min:", min);
}


//  Ek array ka sabhi elements ka product nikalo.
{
    let arr = [100, 290, 903, 40, 705];
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    console.log(product);
}


//  Ek array me duplicate elements ko hatao bina kisi built-in method ke.
{
    let arr = [100, 290, 903, 903, 40, 705];
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    console.log(`orinigal arr: [${arr}] uniqueArr: [${uniqueArr}]`);
}
{
    let arr = ['apple', 'apple', 'mango', 'banana', 'melon', 'melon'];
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    console.log(`orinigal arr: [${arr}] uniqueArr: [${uniqueArr}]`);
}


// Ek array ka middle element find karo (odd aur even length dono handle karni hai).
{
    let arr = [1, 1, 2, 1, 3, 3];
    let midIndex = Math.floor(arr.length / 2);

    if (arr.length % 2 !== 0) {
        console.log(`middle element: ${arr[midIndex]}`)
    } else {
        console.log(`middle element: ${arr[midIndex - 1]}, ${arr[midIndex]}`)
    }
}


// map() use karke array ke har element ko cube (x³) karo.
{
    let arr = [2, 4, 8, 9, 10];
    let output = arr.map(x => x ** 3);
    console.log(output);
}


// filter() use karke sirf prime numbers return karo. // pending 
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2 || num === 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        return true;
    }

    let output = arr.filter(isPrime);
    console.log(output);
}


// reduce() use karke array ka maximum number find karo.
{
    let arr = [20, 40, 54, 87, 89, 33];
    let output = arr.reduce((max, curr) => {
        if (curr > max) {
            max = curr;
        }
        return max;
    })
    console.log(output);
}


// ***** BONUS QUESTIONS *****


// Ek 2D array banao aur uska transpose nikalo.
{
    function transposeMatrix(arr) {
        let result = [];
        for (let i = 0; i < arr[0].length; i++) {
            let row = [];
            for (let j = 0; j < arr.length; j++) {
                row.push(arr[j][i]);
            }
            result.push(row);
        }
        return result;
    }

    let arr = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    console.log(transposeMatrix(arr));
}
{
    let tow_D_arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let result = [];
    for (let i = 0; i < tow_D_arr[0].length; i++) {
        let row = [];
        for (let j = 0; j < tow_D_arr.length; j++) {
            row.push(tow_D_arr[j][i]);
        }
        result.push(row);
    }
    console.log(result);
}