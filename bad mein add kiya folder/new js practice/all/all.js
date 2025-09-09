// let obj1 = {
//     name: 'aaaa',
//     age: 12
// };

// let obj2 = { ...obj1 };
// let obj3 = obj1;

// console.log("🚀 ~ obj1:", obj1);
// console.log("🚀 ~ obj2:", obj2);
// console.log("🚀 ~ obj3:", obj3);
// console.log(obj1 === obj2);
// console.log(obj1 === obj3);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(arr.splice(1, 4));
// console.log(arr);


// ------------------------------------------------------------------------------------------------------
{
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    for (i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log("🚀 ~ matrix:", matrix[i][j])
        }
    }
}


{
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let sum = 0;
    for (let i of matrix) {
        for (let j of i) {
            sum += j;
        }
    }
    console.log("🚀 ~ sum:", sum);
}


{
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let diagSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagSum = diagSum + matrix[i][i];
    }
    console.log("🚀 ~ diagSum:", diagSum)
}


{
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let flatArr = matrix.flat();
    console.log(flatArr);
}


{
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let flatArr = matrix.reduce((acc, curr) => acc.concat(curr), []);
    console.log(flatArr);
}


{
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let flatArr = [].concat(...matrix);
    console.log(flatArr);
}


{
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let flatArr = [];
    for (let i of matrix) {
        for (let j of i) {
            flatArr.push(j)
        }
    }
    console.log("🚀 ~ flatArr:", flatArr)
}