// {
//     let str = 'Hello World';
//     for(let i of str) {
//         console.log('i =', i)
//     }
// }

// {
//     let str = 'HEllo World';
//     for (let i of str[1]) {
//         console.log("i =", i)
//     }
// }

// {
//     let str = 'asad ali';
//     for(let i of str) {
//         console.log(i)
//     }
// }

// {
//     for(let i = 1; i <= 5; i++) {
//         console.log('i =', i);
//     }
// }

// {
//     let sum = 0;
//     for(let i = 0; i <= 10; i++) {
//         sum = sum + i
//     }
//     console.log(sum)
// }

// {
//     let multiply = 1;
//     for(let j = 1; j <= 10; j++) {
//         multiply = multiply * j
//     }
//     console.log(multiply);
// }

// {
//     let arr = ['cricket', 'football', 'tennis'];
//     for(let char of arr) {
//         console.log(char)
//     }
// }

// Chatgpt Qs 

// Write a for loop that prints numbers from 1 to 10.
{
   for (let count = 1; count <= 10; count++) {
      console.log(count)
   }
}


// Use a for loop to calculate the sum of all numbers from 1 to 100.
{
   let sum = 0;
   for (let i = 0; i <= 100; i++) {
      sum = sum + i;
   }
   console.log(sum);
}


// Write a for loop to print all even numbers between 1 and 20.
{
   for (let i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
         console.log(i)
      }
   }
}


// Create a for loop to display the multiplication table for 5.
// Create a for loop to display the multiplication table for 6.
// Create a for loop to display the multiplication table for 1000.
{
   for (let i = 1; i <= 10; i++) {
      console.log(`5 * ${i} = ${5 * i}`);
   }
   for (let i = 1; i <= 10; i++) {
      console.log(`6 * ${1} = ${6 * i}`)
   }
   for (let i = 1; i <= 10; i++) {
      console.log(`1000 * ${i} = ${1000 * i}`)
   }
}


// Write a loop that skips the number 5 while printing numbers from 1 to 10.
{
   for (let i = 1; i <= 10; i++) {
      if (i != 5) {
         console.log(i);
      }
   }
}


// Write a for loop to print numbers from 20 to 1 in reverse order.
{
   for (let i = 20; i >= 1; i--) {
      console.log(i);
   }
}


// Write a loop that prints all multiples of 3 between 1 and 30.
{
   for (i = 1; i <= 30; i++) {
      if (i % 3 === 0) {
         console.log(i);
      }
   }
}


//Write a loop to calculate and print the sum of all odd numbers between 1 and 50.
{
   let sum = 0
   for (let i = 1; i <= 50; i = i + 2) {
      sum += i
   }
   console.log(sum)
}

{
   let sum = 0;
   for (let i = 1; i <= 50; i++) {
      if (i % 2 !== 0) {
         sum = sum + i;
      }
   }
   console.log(sum);
}

// Write a loop to find and print all the divisors of a given number (e.g., for 12, the divisors are 1, 2, 3, 4, 6, 12).
{
   let number = 12;
   let divisors = [];
   for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
         divisors.push(i);
      }
   }
   console.log(`Divisors of ${number} are:`, divisors);
}

{
   let number = 100;
   let divisors = [];
   for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
         divisors.push(i);
      }
   }
   console.log(`Divisor of ${number} are:`, divisors);
}

{
   let num = 10000;
   for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
         console.log(i);
      }
   }
}

{
   let number = 10000;
   let divisors = [];
   for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
         divisors.push(i);
      }
   }
   console.log(`Divisor of ${number} are;`, divisors);
}


// for-in loop

{
   let obj = {
      name: 'Asad Ali',
      age: 'pen',
      cgpa: 5.5,
      isPass: true
   }
   for (let key in obj) {
      console.log('key =', key, 'value =', obj[key]);
   }
}

{
   let players = {
      babar: 56,
      virat: 18,
      starc: 56,
      shaheen: 10
   }
   for (let playerName in players) {
      console.log('player-name =', playerName, ': score =', players[playerName]);
   }
}

{
   let thing = {
      name: 'grip',
      price: 150,
      quantity: 20,
      quality: 'ok'
   }
   for (let i in thing) {
      console.log('key =', i, ': value =', thing[i]);
   }
}



// ------- chatgpt Qs -------
// Write a for-in loop to log all the properties of the following object:
{
   const person = {
      name: "Alice",
      age: 25,
      city: "New York"
   };
   for (let i in person) {
      console.log('properties =', i);
   }
}

{
   const person = {
      name: "Alice",
      age: 25,
      city: "New York"
   };
   for (let i in person) {
      console.log('properties =', i, 'value =', person[i]);
   }
}

// Write a program that counts and logs the number of properties in this object:
{
   const car = {
      brand: "Toyota",
      model: "Corolla",
      year: 2020,
   };
   counter = 0;
   for (let i in car) {
      console.log(i, car[i]);
      counter++;
   }
   console.log("car object has " + counter + " properties.");
}

{
   const person = {
      name: "Alice",
   };
   let counter = 0;
   for (let i in person) {
      counter++;
   }
   if (counter === 1) {
      console.log('person object has ' + counter + ' propertie.');
   } else {
      console.log('person object has ' + counter + ' properties.');
   }
}

// Write a for-in loop to log only the properties that have string values:
{
   const user = {
      username: "john_doe",
      age: 30,
      email: "john@example.com",
      isAdmin: false
   };
   for (let i in user) {
      if (user[i] === "john_doe" || user[i] === "john@example.com") {
         console.log(i);
      }
   }
}

{
   const user = {
      username: "john_doe",
      age: 30,
      email: "john@example.com",
      isAdmin: false
   };
   for (let i in user) {
      if (typeof user[i] === "string") {
         console.log(i);
      }
   }
}

//Use a for-in loop to check if the property "age" exists in this object:
{
   const profile = {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com"
   };
   let hasAge = false;
   for (let i in profile) {
      if (i === "age") {
         hasAge = true;
         break;
      }
   }
   console.log(hasAge);
}

{
   const profile = {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@example.com"
   };
   hasEmail = false;
   for (let i in profile) {
      if (i === 'email') {
         hasEmail = true;
         break;
      }
   }
   console.log(hasEmail);
}


//  Use a for-in loop to log all properties of this nested object:
{
   const book = {
      title: "1984",
      author: {
         firstName: "George",
         lastName: "Orwell"
      },
      year: 1949
   };
   for (let i in book) {
      if (i === 'author') {
         for (let j in book.author) {
            console.log(j);
         }
      } else {
         console.log(i);
      }
   }
}
{
   const book = {
      title: "1984",
      author: {
         firstName: "George",
         lastName: "Orwell"
      },
      year: 1949
   };

   for (let i in book) {
      console.log(i);
      if (i === 'author') {
         for (let j in book.author) {
            console.log(j);
         }
      }
   }
}
{
   const book = {
      title: "1984",
      author: {
         firstName: "George",
         lastName: "Orwell"
      },
      year: 1949
   };
   for (let i in book) {
      console.log(i);
      if (i === 'author') {
         for (let y in book.author) {
            console.log(y);
         }
      }
   }
}

// Use a for-in loop to log all the keys of an object in uppercase: actually this will print uppercase keys
{
   const movie = {
      title: "Inception",
      director: "Christopher Nolan",
      YEAR: 2010
   };
   for (let i in movie) {
      if (i === i.toUpperCase()) {
         console.log(i);
      }
   }
}

// Use a for-in loop to log all the keys of an object in uppercase:
{
   const movie = {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010
   };
   for (let i in movie) {
      console.log(i.toUpperCase())
   }
}

//  Write a for-in loop to check if the keys "name" and "age" exist in this object:
{
   const data = {
      name: "John",
      email: "john@example.com"
   };

   let hasAge = false;
   let hasName = false;

   for (let i in data) {
      if (i === 'name') {
         hasName = true;
      }
      if (i === 'age') {
         hasAge = true;
      }
   }

   if (hasName) {
      console.log("name key is in data object");
   } else {
      console.log("name key is not in data object");
   }

   if (hasAge) {
      console.log("age key is in data object")
   } else {
      console.log("age key is not in data object")
   }
}

//  Write a for-in loop to check if the keys "actor" and "year" exist in this object:
{
   const movie = {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010
   };

   let hasActor = false;
   let hasYear = false;

   for (let i in movie) {
      if (i === 'actor') {
         hasActor = true;
      }
      if (i === 'year') {
         hasYear = true;
      }
   }

   if (hasActor) {
      console.log('actor kay is in movie object')
   } else {
      console.log('actor key is not in movie object')
   }

   if (hasYear) {
      console.log('year kay is in movie object')
   } else {
      console.log('year key is not in movie object')
   }

}