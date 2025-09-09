// 155
// {
//     let randomValue = { name: "Lydia" }
//     randomValue = 23

//     if (!typeof randomValue === "string") {
//         console.log("It's not a string!")
//     } else {
//         console.log("Yay it's a string!")
//     }
// }


// 154
// {
//     const createMember = ({ email, address = {} }) => {
//         const validEmail = /.+\@.+\..+/.test(email)
//         if (!validEmail) throw new Error("Valid email pls")

//         return {
//             email,
//             address: address ? address : null
//         }
//     }

//     const member = createMember({ email: "my@email.com" })
//     console.log(member)
// }


// 153
// {
//     const keys = ["name", "age"];
//     const values = ["Lydia", 22];

//     const method = "fromEntries";
//     const result = Object[method](keys.map((_, i) => {
//         return [keys[i], values[i]];
//     }));
//     console.log("🚀 ~ result:", result)
// }


// {
//     let keys = ['name', 'age',];
//     let values = ['nadia', 55];
//     let object = Object.fromEntries(keys.map((_, i) => {
//         return [keys[i], values[i]]
//     }));
//     console.log("🚀 ~ object:", object)
// }


// {
//     let array = [["name", 'asad'], ["age", 22]];
//     let obj = Object.fromEntries(array);
//     console.log("🚀 ~ obj:", obj)
// }


// {
//     let obj = { name: 'asad', age: 22 };
//     let array = Object.entries(obj);
//     console.log("🚀 ~ array:", array);
// }


// 152
// {
//     const promise1 = Promise.resolve('First')
//     const promise2 = Promise.resolve('Second')
//     const promise3 = Promise.reject('Third')
//     const promise4 = Promise.resolve('Fourth')

//     const runPromises = async () => {
//         const res1 = await Promise.all([promise1, promise2])
//         const res2 = await Promise.all([promise3, promise4])
//         return [res1, res2]
//     }

//     runPromises()
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }


// 151
// {
//     const user = {
//         email: "my@email.com",
//         updateEmail: email => {
//             this.email = email
//         }
//     }

//     user.updateEmail("new@email.com") // not updating
//     console.log("🚀 ~ user:", user.email)
// }


// {
//     const user = {
//         email: 'my@gmail.io',
//         updateEmail: function (email) {
//             this.email = email;
//         }
//     }
//     user.updateEmail("new@mgail.io"); // updating
//     console.log("🚀 ~ user:", user.email)
// }


// // 150 
// {
//     const animals = {};
//     let dog = { emoji: '🐶' }
//     let cat = { emoji: '🐈' }

//     animals[dog] = { ...dog, name: "Mara" };
//     animals[cat] = { ...cat, name: "Sara" };

//     console.log(animals[dog]);
// }


// {
//     function a() {
//         return 'x'
//     }
//     function b() {
//         return 'x'
//     }
//     console.log(typeof a)
//     console.log(a() === b()); // it is comparing their return values
//     console.log(a === b); // it is comparing their refrence which are never the same
// }

// ---

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let evens = [];
// let odds = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evens.push(arr[i]);
//     } else {
//         odds.push(arr[i]);
//     }
// }
// console.log("evens:", evens);
// console.log("odds:", odds);

// ---

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// let counts = {
//     evens: 0,
//     odds: 0
// };

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         counts.evens++;
//     } else {
//         counts.odds++;
//     }
// }

// console.log(counts);
// // { evens: 5, odds: 6 }

// -----


// let counts = arr.reduce((acc, num) => {
//     acc[num % 2 === 0 ? 'evens' : 'odds']++;
//     return acc;
// }, { evens: 0, odds: 0 });

// console.log(counts); 
//  // { evens: 5, odds: 6 }

// ------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let counts = arr.reduce((acc, num) => {
//     acc[num % 2 === 0 ? 'evens' : 'odds']++;
//     return acc;
// }, { evens: 0, odds: 0 });

// console.log(counts)


// ------

// const obj = {
//     name: 'Asad',
//     greeting: () => {
//         console.log(this.name)
//     }
// }

// obj.greeting();

// -----


{
    function a() {
        console.log('1')
    }

    function b() {
        console.log('2')
    }


    console.log(a() === b());
    console.log(a === b)
}

{
    function a() {
        return 'y'
    }

    function b() {
        return 'x'
    }


    console.log(a() === b());
    console.log(a === b)
}


// {
//     function sayHi() {
//         console.log(name);
//         console.log(age);
//         var name = "Asad";
//         let age = 25;
//     }

//     sayHi();
// }


const myObject = {
    property: 'Value!',
    otherProperty: 77,
};

const variable = 'property';

// console.log(myObject[variable]); /// why it is undefined 
console.log(myObject.variable);
// console.log(myObject['otherProperty']);

console.log(myObject);