{
    let numbers = [2, 4, 6, 8, 10];
    let square = numbers.map(x => x * x);
    console.log(square);
}



{
    let names = ["asad", "ali", "ahmed"];
    let capitalize = names.map(n => n[0].toUpperCase() + n.slice(1));
    console.log(capitalize);
}



{
    const users = [
        { name: "Asad", age: 25 },
        { name: "Ali", age: 30 },
        { name: "Ahmed", age: 20 },
    ];
    let userName = users.map(a => a.name);
    console.log(userName);
}



{
    const numbers = [1, 5, 8, 12, 19, 21];
    console.log(numbers.filter(x => x % 2 === 0));
}



{
    const products = [
        { name: "Laptop", price: 800 },
        { name: "Phone", price: 500 },
        { name: "Tablet", price: 300 },
    ];
    let output = products.filter(x => x.price > 500);
    console.log(output);
}



{
    const words = ["apple", "banana", "cherry", "date", "fig"];
    let output = words.filter(x => {
        if (x.length >= 5) {
            return x;
        }
    });
    console.log(output);
}



{
    const numbers = [1, 2, 3, 4, 5];
    let output = numbers.reduce((acc, curr) => acc + curr);
    console.log(output);
}



{
    const expenses = [
        { category: "food", amount: 500 },
        { category: "transport", amount: 200 },
        { category: "entertainment", amount: 300 },
    ];
    let output = expenses.map((x) => x.amount).reduce(function (acc, curr) {
        acc += curr;
        return acc;
    }, 0);
    console.log(output);
}


{
    const numbers = [5, 3, 8, 10, 2];
    let output = numbers.reduce((max, curr) => {
        if (curr > max) {
            max = curr;
        }
        return max;
    }, 0)
    console.log(output);
}