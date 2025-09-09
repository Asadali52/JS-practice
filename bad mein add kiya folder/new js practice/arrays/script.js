{
    let fruits = ['apple', 'mango', 'banana', 'pineapple', 'melon'];
    console.log(fruits);
    fruits.push('watermelon');
    console.log(fruits);
    fruits.pop();
    console.log(fruits);
    console.log(fruits.length);
    fruits[3] = 'peanut';
    console.log(fruits);
}

{
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            console.log(num[i]);
        }
    }
}

{
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evens = [];
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            evens.push(num[i]);
        }
    }
    console.log(evens);
}

{
    let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenNumber = num.filter(n => n % 2 === 0);
    console.log(evenNumber);
}

// Ek array ko reverse order me print karo without built-in method.
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let revArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArr.push(array[i]);
    }
    console.log(revArr);
}

//Ek array banao aur uske har element ko double value me convert karo using loop.
{
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let doubleArray = [];
    for (let i = 0; i < array.length; i++) {
        doubleArray.push(array[i] * 2);
    }
    console.log(doubleArray);
}


// Ek array ka first aur last element swap karo.
{
    let num = [1, 2, 3, 4, 5];

    let temp = num[0];
    num[0] = num[num.length - 1];
    num[num.length - 1] = temp;

    console.log(num);
}
{
    let fruits = ['mango', 'bnana', 'apple', 'melon'];

    let temp = fruits[0]; // store first element in temp variable
    fruits[0] = fruits[fruits.length - 1]; // replace first element with last
    fruits[fruits.length - 1] = temp; // replace last element with first

    console.log(fruits);
}


// Ek array me kisi specific value ka index find karo.
{
    let fruits = ['mango', 'bnana', 'apple', 'melon'];
    let indexOfApple = -1;
    let indexOfBnana = -1;

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === 'apple') {
            indexOfApple = i;
            break;
        }
    }

    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === 'bnana') {
            indexOfBnana = i;
            break;
        }
    }

    console.log(`indexOfApple in this array [${fruits}] is ${indexOfApple}`);
    console.log(`indexOfBnana in this array [${fruits}] is ${indexOfBnana}`);
}