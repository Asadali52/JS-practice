// {
//     const nums = [10, 20, 30, 40, 50];
//     const [x, y] = nums;
//     console.log(x);
//     console.log(y);
// }


// {
//     const colors = ["red"];
//     const [primary, secondary = 'blue'] = colors;
//     console.log(primary);
//     console.log(secondary);
// }


// {
//     const values = [1, [2, 3], 4];
//     const [a, [b], c] = values;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }


// {
//     const profile = {
//         name: 'Eva',
//         hobbies: ['reading', 'hiking', 'gaming'],
//         age: 15
//     };
//     const { name, hobbies: [hobby1, , hobby3], age = 13 } = profile;
//     console.log(name);
//     console.log(hobby1);
//     console.log(hobby3);
//     console.log(age);
// }


// {
//     function printUser({ userName = "guest", age }) {
//         console.log(`User: ${userName}, Age: ${age}`)
//     }
//     // printUser({ age: 35 });
//     printUser({ userName: 'Asad Ali', age: 22 });
//     printUser({ userName: 'riaz' })
// }


// {
//     let nums = [10, 20];
//     const [b, a] = nums;
//     console.log(b);
// }


// {
//     const people = [
//         { id: 1, name: 'john' },
//         { id: 2, name: 'jane' }
//     ];
//     const [{ id }, { name: secondPerson }] = people;
//     console.log(secondPerson);
//     console.log(id);
// }


// Filter Based on Search Text (Case-insensitive) , Search string se match hone wale products return karo.
// Output: [ { name: “Samsung Galaxy” } ]
// {
//     const products = [
//         { name: "iPhone 14" },
//         { name: "Samsung Galaxy" },
//         { name: "OnePlus" }
//     ];
//     const search = "gal";
//     // const result = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
//     // console.log(result);

//     let res = {};

//     for (let i of products) {
//         let product = i.name.toLowerCase();
//         let searchedValue = search.toLowerCase();
//         if (product.includes(searchedValue)) {
//             res.name = product;
//             console.log(res);
//         }
//     }
// }

{
    const products = [
        { name: "iPhone 14" },
        { name: "Samsung Galaxy" },
        { name: "OnePlus" }
    ];
    const search = "galax";
    let res = [];

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productName = product.name.toLowerCase();
        let searchedValue = search.toLowerCase();
        if (productName.includes(searchedValue)) {
            res.push(product);
        }
    }
    console.log(res);
}