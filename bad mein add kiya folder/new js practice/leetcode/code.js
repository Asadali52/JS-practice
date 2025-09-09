// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

{
    let expect = function (val) {
        return {
            toBe(expected) {
                if (expected === val) {
                    return true;
                } else {
                    throw new Error('Not Equal');
                }
            },
            notToBe(expected) {
                if (expected !== val) {
                    return true;
                } else {
                    throw new Error('Equal');
                }
            }
        }
    }
    console.log(expect(6).toBe(6)); // true
    // console.log(expect('ali').toBe('asad')); // error => not equal
    console.log(expect(10).notToBe(9)); // true
    // console.log(expect('asad').notToBe('asad')); // error => equal

    // try {
    //     let ans = expect(5).notToBe(6);
    //     console.log(ans)
    // } catch (e) {
    //     console.log(e.message);
    // }
}

// ======================================================================================================================================================================================

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

{
    var createCounter = function (init) {
        let current = init;
        return {
            increment: function () {
                return ++current;
            },
            reset: function () {
                current = init;
                return current;
            },
            decrement: function () {
                return --current;
            }
        };
    };

    const counter = createCounter(5)
    console.log(counter.increment());
    console.log(counter.reset());
    console.log(counter.decrement());
}

// ======================================================================================================================================================================================

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// {
//     function map(arr, fn) {
//         let result = [];
//         for (let i = 0; i < arr.length; i++) {
//             result.push(fn(arr[i], i));
//         }
//         return result;
//     };

//     let arr = [1, 2, 3];
//     function plusOne(n) {
//         return n + 1;
//     }
//     function plusIndex(n, i) {
//         return n + i;
//     }
//     function constant() {
//         return 42;
//     }

//     // const result = map(arr, plusOne);
//     // const result = map(arr, plusIndex);
//     const result = map(arr, constant);
//     console.log(result);
// }


{
    function mapped(arr, fn) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i))
        }
        return result;
    }

    function plusOne(n) {
        return n + 1;
    };
    function plusIndex(n, i) {
        return n + i;
    }
    function constant() {
        return 42;
    }

    let arr = [1, 2, 3, 4, 5];

    let resultOfPlusOne = mapped(arr, plusOne);
    console.log(resultOfPlusOne);
    let resultOfPlusIndex = mapped(arr, plusIndex);
    console.log(resultOfPlusIndex);
    let resultOfConstant = mapped(arr, constant);
    console.log(resultOfConstant);

    console.log(mapped([10, 20, 30, 40, 50], function plusTwo(n) {
        return n + 2;
    }))
}


// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
{
    function filter(arr, fn) {
        let filteredArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i)) {
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr;
    };

    let array = [0, 1200, 15, 20, 40];
    function greaterThan10(n) {
        return n > 10;
    }

    console.log(filter(array, greaterThan10));

    // console.log(filter([0, 10, 20, 30], function greaterThan10(n) {
    //     return n > 10;
    // }));
}

{
    function filtered(array, fn) {
        let filteredArray = [];
        for (let i = 0; i < array.length; i++) {
            if (fn(array[i], i)) {
                filteredArray.push(array[i]);
            }
        }
        return filteredArray;
    }

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function evens(n) {
        return n % 2 === 0
    }
    console.log(filtered(array, evens));

    console.log(filtered([10, 20, 30, 40, 50], function lessThan33(n) {
        return n < 33;
    }))
}


// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
{
    const reduce = function (nums, fn, init) {
        let val = init;
        for (let i = 0; i < nums.length; i++) {
            val = fn(val, nums[i]);
        }
        return val;
    };

    let arr = [1, 2, 3, 4];
    console.log(reduce(arr, function (acc, curr) { return acc + curr }, 100));
}


{
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [1, 2, 3, 4, 5];
    let res = [];
    for(let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i]);
    }
    console.log(res)
    let mapped = arr1.map((num, index) => num + arr2[index]);
    console.log(mapped);
}
let arr = ['a', 'b', 'c'];

arr.map((element, index, array) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});
