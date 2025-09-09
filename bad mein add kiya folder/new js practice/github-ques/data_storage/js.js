const user_1 = {
    name: 'Asad',
    age: 200
}

const user_2 = {
    name: 'Zeeshan',
    age: 100
}

localStorage.setItem("user_1_copy", JSON.stringify(user_1));
localStorage.setItem("user_2_copy", JSON.stringify(user_2));

let store = JSON.parse(localStorage.getItem("user_1_copy"));
console.log(store)


// const user_1 = { name: 'Asad', age: 200 };
// const user_2 = { name: 'Zeeshan', age: 100 };

// const allUsers = {
//     user_1_copy: user_1,
//     user_2_copy: user_2
// };

// localStorage.setItem("users", JSON.stringify(allUsers));

// let storedData = JSON.parse(localStorage.getItem("users"));
// console.log(storedData);