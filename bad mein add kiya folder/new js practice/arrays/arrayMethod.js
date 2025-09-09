// Ek array me map() ka use karke har element ko square karo.
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // let output = arr.map(x => x* x);
    let output = arr.map((x) => {
        return x * x
    });
    console.log(output);
}

// Ek array me filter() ka use karke sirf even numbers return karo.
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let output = arr.filter(x => x % 2 === 0);
    console.log(output);
}


// Ek array me reduce() ka use karke saare elements ka sum nikalo.
{
    let arr = [1, 2, 3, 4, 5];
    let output = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(output);
}


// push() aur pop() ka use karke array me elements add aur remove karo.
{
    let fruits = ['mango', 'apple'];
    fruits.push('bnana');
    console.log(fruits);
    fruits.pop();
    console.log(fruits);
}


// unshift() aur shift() ka use karke starting me element add aur remove karo.
{
    let fruits = ['mango', 'apple'];
    fruits.shift();
    console.log(fruits);
    fruits.unshift('melon');
    console.log(fruits);
}


// includes() ka use karke check karo ke koi element array me hai ya nahi.
{
    let fruits = ['strawberry', 'melon', 'mango', 'apple'];
    console.log(fruits.includes('strawberry')); // true
    console.log(fruits.includes('bnana')); // false
}


// slice() ka use karke array ka ek part return karo.
{
    let arr = [16, 26, 93, 94, 45, 61, 72, 18, 99, 33];
    console.log(arr.slice(1, 4)); // 4th index element return ni hoga
}


// concat() ka use karke do arrays ko combine karo.
{
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    console.log(arr1.concat(arr2));
}


// ******************** BONUS TASK ********************************* //
{
    let products = [
        { name: 'pencil', price: 100 },
        { name: 'bag', price: 1200 },
        { name: 'cycle', price: 6000 }
    ];

    const totalPrice = products.reduce((acc, curr) => {
        return acc + curr.price;
    }, 0)
    console.log(totalPrice);

    const above1000Products = products.filter(x => x.price > 1000);
    console.log(above1000Products);
}