//  Ek array ke sab numbers ka factorial nikaalo.
{
    let arr = [3, 4, 5];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let factorial = 1;
        for (let j = 1; j <= arr[i]; j++) {
            factorial = factorial * j;
        }
        newArr.push(factorial);
    }
    console.log(newArr);
}


// Ek array ke elements ko bina sort() method ke ascending order me arrange karo.
{
    function sortArray(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {

                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    let numbers = [5, 2, 9, 1, 5, 6];
    console.log(sortArray(numbers));
}


// Ek sentence ke har word ka last letter capital karo.
{
    let sentence = "hello world";
    console.log(sentence);
    let toArr = sentence.split(' ');
    console.log(toArr);
    let capital = [];
    for (let i of toArr) {
        capital.push(i.slice(0, -1) + i.slice(-1).toUpperCase());
    }
    console.log(capital);
    console.log(capital.join(" "));
}
{
    let sentence = 'i am learning javascript';
    let toArray = sentence.split(" ");
    let capital = [];
    for (let i = 0; i < toArray.length; i++) {
        capital.push(toArray[i].slice(0, -1) + toArray[i].slice(-1).toUpperCase());
    }
    console.log(capital.join(" "));
}


// Ek array ke andar jitne numbers even hain, unka sum return karo.
{
    let arr = [3, 6, 8, 9, 12];
    let evenSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i]
        }
    }
    console.log(evenSum);
}


// Ek array ke sab elements ka square nikaal kar sirf odd values return karo.
{
    let arr = [1, 2, 3, 4, 5];
    let squareArray = [];
    let oddArray = [];
    for (let i of arr) {
        squareArray.push(i ** 2);
    }
    for (let i of squareArray) {
        if (i % 2 !== 0) {
            oddArray.push(i)
        }
    }
    console.log(oddArray);
}

// Ek array ke sab elements ka reverse return karo bina .reverse() use kiye.
{
    let array = [1, 2, 3, 4, 5];
    let reversedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArr.push(array[i]);
    }
    console.log(reversedArr);
}


// Ek array me sabse bada aur sabse chhota number return karo.
{
    let numbers = [10, 4, 7, 15, 2];
    let maxNum = -Infinity;
    let minNum = Infinity;
    for (let i of numbers) {
        if (i > maxNum) {
            maxNum = i;
        }
    }
    for (let i of numbers) {
        if (i < minNum) {
            minNum = i;
        }
    }
    console.log("maxNum =", maxNum, "minNum =", minNum);
}


// Ek array ko bina splice() use kiye kisi index se element delete karo.
{
    function deleteElement(arr, index) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i !== index) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    }
    console.log(deleteElement([1, 2, 3, 4, 5, 6], 4))
}


// Ek array me sirf unique numbers return karo bina Set() use kiye.
{
    let arr = [1, 2, 2, 3, 3, 2, 4, 5, 5];
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

    console.log(uniqueArr);
}
{
    let numbers = [109, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
    let uniqueArray = [];
    for (let i = 0; i < numbers.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (numbers[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniqueArray.push(numbers[i]);
        }
    }
    console.log(uniqueArray);
}


// Ek array ke elements ka cumulative sum return karo.
{
    // function cumulativeSum(arr) {
    //     let result = [];
    //     arr.reduce((sum, num, index) => result[index] = sum + num, 0);
    //     return result;
    // }

    // let array = [1, 2, 3, 4, 5];
    // console.log(cumulativeSum(array)); // Output: [1, 3, 6, 10, 15]  

    function cumulativeSum(arr) {
        let result = [];
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            result.push(sum);
        }

        return result;
    }
    let array = [1, 2, 3, 4, 5];
    console.log(cumulativeSum(array));
}


//  Ek array ke sab elements ka sum nikalo bina for loop use kiye!
// (Tip: Recursion ya reduce() ka use kar sakte ho.)
{
    let array = [1, 2, 3, 4, 5];
    let output = array.reduce((sum, curr) => {
        return sum + curr;
    }, 0)
    console.log(output);
}