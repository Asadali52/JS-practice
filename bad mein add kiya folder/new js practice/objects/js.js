const person = {
    name: 'Alice',
    age: 20,
    greet: function () {
        console.log(`Hi, i am ${this.name}`)
    }
};
console.log(person)
person.greet();
console.log(`${person['age']} ${person.age}`)


const person2 = {
    name: 'saad ali',
    age: 26,
    greet() {
        return `hi i am ${this.name}`
    }
}

console.log(person2.greet());
console.log(person2.greet);
let key = 'age';
console.log(person2[key]);
person2.job = 'developer';
console.log(person2);
delete person2.greet;
console.log(person2);


const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 2;
console.log(obj1.a)


let car = {
    brand: 'BMW',
    model: 2000,
    year: 2010,
    start: function () {
        console.log('Engine started!');
    }
}

car.color = 'black';
delete car.year;
car.start();
// console.log(Object.keys(car));
// console.log(Object.values(car));

// ==================================================================

{
    let obj = {
        name: 'abd',
        age: 24
    }
    // console.log(obj.name);
    // console.log(obj['name']);
    // console.log(obj.age);
    // console.log(obj['age']);

    console.log(Object.keys(obj));
    console.log(Object.values(obj));
    console.log(Object.entries(obj));
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key}, ${value}`);
    })
}


{
    const user = {
        username: 'asad123',
        age: 30,
        isAdmin: true
    };

    for (let keys in user) {
        console.log(`for in: ${keys}, ${user[keys]}`);
    }

    console.log(Object.keys(user));
    console.log(Object.values(user));
    console.log(Object.entries(user));
    Object.entries(user).forEach(([key, value]) => {
        console.log(`${key} , ${value}`);
    })
}


{
    const fruits = ['apple', 'banana', 'cherry'];
    fruits.forEach((fruit, index) => {
        console.log(`${index + 1}. ${fruit}`);
    })
}


{
    const players = ['king babar', 'virat chokli', 'steven smithy'];
    players.forEach((player, index) => {
        console.log(`${index}. ${player}`);
    })
}


{
    let book = {
        title: 'Harry Potter',
        author: "J. K. Rowling",
        year: 1997,
    };
    for (let key in book) {
        console.log(`key: ${key}, value: ${book[key]}`);
    }

    console.log(Object.entries(book));
    // Object.entries(book).forEach(([key, value]) =>{
    //     console.log(`key: ${key}, value: ${value}`)
    // })
}


// {
//     const countries = {
//         india: 'virat',
//         australia: 'head',
//         england: 'joe',
//         zimbabwe: 'babar',
//         south_africa: 'bavuma',
//         new_zealand: 'kane mama',
//         ireland: 'harry tactor',
//         netherland: 'myburgh'
//     }
//     Object.entries(countries).forEach(([key, value]) => {
//         console.log(`key: ${key}, value: ${value}`)
//     });

//     countries.west_indies = 'gayle';

//     Object.entries(countries).forEach(([key, value]) => {
//         console.log(`key: ${key}, value: ${value}`)
//     });

//     delete countries.zimbabwe;

//     Object.entries(countries).forEach(([key, value]) => {
//         console.log(`key: ${key}, value: ${value}`)
//     });
// }



// You’re given an object with cricket player nicknames. Your tasks:
// 1. Add 2 new teams with players.
// 2. Change the player for england to 'buttler'.
// 3. Delete the ireland entry.
// 4. Print only the countries whose player names start with 'b'.
// {
//     const teams = {
//         india: 'kohli',
//         australia: 'warner',
//         england: 'root',
//         south_africa: 'de kock',
//         new_zealand: 'williamson',
//         ireland: 'tucker'
//     };

//     Object.assign(teams, {
//         pakistan: 'babar',
//         west_indies: 'lara'
//     });

//     teams.england = 'buttler';

//     delete teams.ireland;

//     for (let key in teams) {
//         if (teams[key][0] === 'b') {
//             console.log(`key: ${key}, value: ${teams[key]}`)
//         }
//     }
// }


// Print all players with their jersey numbers.
// Add 2 new players.
// Update kohli's jersey number to 18.
// Delete warner.
// Finally, print only the players who have jersey numbers less than 30.
// {
//     const players = {
//         kohli: 45,
//         warner: 31,
//         root: 66,
//         babar: 56
//     };

//     for (let key in players) {
//         console.log(`${key}, value: ${players[key]}`);
//     }

//     Object.assign(players, {
//         afridi: 10,
//         starc: 56
//     })

//     players.kohli = 18;

//     delete players.warner;

//     Object.entries(players).forEach(([key, value]) => {
//         if(value < 30) {
//             console.log(`key: ${key}, value: ${value}`);
//         }
//     })
// }


{
    const person = {
        name: 'Asad',
        greet() {
            console.log(`hi, i'm ${this.name}.`)
        }
    };
    person.greet(); // hi, i'm Asad

    const person2 = {
        name: 'Asad',
        greet: () => {
            console.log(`hi i'm ${this.name}.`);
        }
    };
    person2.greet(); // this will not print person2.name , because 'this' in arrow functions refers to the outer scope not in object.

    const original = {
        name: 'Ali',
        skills: {
            js: true
        }
    };
    const copy = { ...original };
    console.log(copy); // this is shallow copy 

    copy.skills.js = false;
    console.log(copy); // this will change in both

    // deep copy 
    const deepCopy = JSON.parse(JSON.stringify(original));
    console.log(deepCopy.skills)

    // spread operator 
    let obj1 = {
        a: 1
    };
    let obj2 = {
        b: 2
    };
    const merged = { ...obj1, ...obj2, c: 3 };
    console.log(merged);
    let arr = [3, 4];
    let newArr = [1, 2, ...arr];
    console.log(newArr);
}



// var argumentsLength = function (...args) {
//     return args.length
// };
// console.log(argumentsLength(1, 2, 3));
//
// function sum(...params) {
//     return params.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));
//
// function regularFn(...args) {
//     return args;
// }
// console.log(regularFn(1, 2, 3, 4, 5)); // return array
//
// const arrowFn = (...args) => {
//     return args;
// }
// console.log(arrowFn(1, 2, 3, 4)); // return array
//
// function regularFn() {
//     return arguments;
// }
// console.log(regularFn(1, 2, 3, 4, 5)); // return like array
//
// const arrawFn = () => {
//     return arguments;
// }
// console.log(arrawFn([1, 2, 3, 4])); // give reference ERROR


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }




// // Filter Based on Search Text (Case-insensitive) , Search string se match hone wale products return karo.
// // Output: [ { name: “Samsung Galaxy” } ]
// {
//     const products = [
//         { name: "iPhone 14" },
//         { name: "Samsung Galaxy" },
//         { name: "OnePlus" }
//     ];
//     const search = "gal";
//     // by filter function 
//     const result = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
//     console.log(result);

//     // by for of loop
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

// {
//     // by for loop 
//     const products = [
//         { name: "iPhone 14" },
//         { name: "Samsung Galaxy" },
//         { name: "OnePlus" }
//     ];
//     const search = "galax";
//     let res = [];

//     for (let i = 0; i < products.length; i++) {
//         let product = products[i];
//         let productName = product.name.toLowerCase();
//         let searchedValue = search.toLowerCase();
//         if (productName.includes(searchedValue)) {
//             res.push(product);
//         }
//     }
//     console.log(res);
// }