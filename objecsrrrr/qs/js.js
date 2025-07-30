// Create an object named student with properties: name, age, and grade. Then print each property using console.log.
// {
//     const student = {
//         name: 'asad',
//         age: 22,
//         grade: 'B'
//     }
//     console.log(student)
// }


// Check if 'color' exists
// {
//     const car = { brand: "Toyota", model: "Corolla" };
//     let findColor = car.hasOwnProperty('color');
//     console.log(findColor);
//     console.log(car.hasOwnProperty('model'));
// }


// Add a new property to an existing object:
// {
//     const book = { title: "1984", author: "George Orwell" };
//     book["yearPublished"] = 1949;
//     book["author"] = 'asad';
//     console.log(book);
// }


// Delete a property from the object:
// {
//     const user = { username: "john_doe", email: "john@example.com", password: "12345" };
//     delete user.password;
//     delete user.email;
//     user["fullName"] = 'john_abraham_doe';
//     console.log(user);
// }


// Write a function getFullName that takes an object like { firstName: "John", lastName: "Doe" } and returns "John Doe".
// {
//     function getFullName() {
//         const obj = {
//             firstName: 'john',
//             lastName: 'doe'
//         }
//         return `${obj.firstName} ${obj.lastName}`;
//     }
//     console.log(getFullName());
// }


// Convert an object to an array of its keys and values:
// {
//     const obj = { x: 10, y: 20 };
//     console.log(Object.entries(obj));
// }


// Merge two objects using the spread operator:
{
    const a = { a: 1 };
    const b = { b: 2 };
    const c = { ...a, ...b };
    console.log(c);
}


// Loop through an object and print all key-value pairs using for...in.
{
    let obj = {
        name: 'aa',
        age: 16,
        cgpa: 3
    };
    for (let keys in obj) {
        console.log(`${keys}: ${obj[keys]}`)
    }
}


// Create a function that takes an object and returns the number of properties in it.
{
    function numberOfProperties() {
        let obj = {
            a: 1,
            b: 2,
            c: 3,
            d: 4
        };
        let arr = Object.keys(obj);
        return arr.length;
    }
    console.log(numberOfProperties());
}


// Create a nested object representing a user with name, age, and an address (with city, zip code), then access the city.
{
    const user = {
        name: 'anwar',
        age: 33,
        address: {
            city: 'kasur',
            zipcode: 50550,
        }
    };
    console.log(user.address.city);
}


// Find the property with the highest value:
{
    const scores = { Alice: 88, Bob: 95, Charlie: 91 };
    let arr = Object.values(scores);
    let max = -Infinity;
    for (let i of arr) {
        if (i > max) {
            max = i;
        }
    }
    console.log(max)
}
{
    const scores = { Alice: 88, Bob: 95, Charlie: 91 };
    let maxScore = -Infinity;
    let topScorer = '';
    for (let key in scores) {
        if (scores[key] > maxScore) {
            maxScore = scores[key];
            topScorer = key;
        }
    }
    console.log(topScorer);
}


// You have an array of people objects. Group them by their age.
{
    const people = [
        { name: 'Ali', age: 20 },
        { name: 'Sara', age: 25 },
        { name: 'John', age: 20 },
        { name: 'Emma', age: 30 }
    ];
    const groupedByAge = people.reduce((acc, person) => {
        const age = person.age;
        if (!acc[age]) {
            acc[age] = [];
        }
        acc[age].push(person);
        return acc;
    }, {});

    console.log(groupedByAge);
}
{
    const users = [
        { name: 'zaman', role: 'admin' },
        { name: 'mirza baig', role: 'vendor' },
        { name: 'faisal', role: 'superadmin' },
        { name: 'mawaz', role: 'admin' },
        { namw: 'liaqat', role: 'vendor' }
    ];
    let groupedByRole = users.reduce((acc, users) => {
        const role = users.role;
        if (!acc[role]) {
            acc[role] = [];
        }
        acc[role].push(users);
        return acc;
    }, {});
    console.log(groupedByRole);
}