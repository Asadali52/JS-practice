let arr1 = [3 , 5 , 6, 8];
let arr2 = [7, 8, 10, 18];

let sumArr = arr1.concat(arr2);

sumArr.push('Apple', 77); // add at end

sumArr.pop(); // delete from end

sumArr.push('pushed-element'); // add at end

sumArr.shift(); // delete first

sumArr.unshift('ssss'); // add at start

sumArr.unshift('aaaa'); // add at start

console.log(sumArr);