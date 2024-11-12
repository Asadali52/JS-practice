// // this is a string
// let a = 'helloworld'

// console.log(a[0]);
// console.log(a[9]);
// console.log(a[1]);

//--------------------------------------

// template literals

// let specialString = `This is a template literal`;
// console.log(specialString);

// let obj = {
//   item: 'pen',
//   price: 10,
// }

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log('the cost of', obj.item , 'is' , obj.price, 'rupees');

// -------------------------------------------------------------------

// string interpolation 
// let specialString = `this is a template literals  ${1 + 2 + 3} `;
// console.log(specialString);

// console.log('Apna\nCollege');
// console.log('Apna\tCollege');

// let str = 'Apna College';
// console.log(str.length)
// let str1 = 'ApnaCollege';
// console.log(str1.length)
// let str2 = 'Apna\tCollege';
// console.log(str2.length);
// let str3 = 'Apna \n College';
// console.log(str3.length)

// let aa = "Apna College";
// console.log(aa.toUpperCase());

// console.log('Hello World'.toUpperCase());

// let bb = 'ApnA ColleGE';
// console.log(bb.toLowerCase());

// console.log('HELLo World'.toLowerCase());

// let str = 'Apna Colllege'
// let newstr = str.toUpperCase();
// console.log(str);
// console.log(newstr);

// let str = "     Apna COllege JS    "
// console.log(str.trim());

// let b = ' dfdg  454125        fdfg'
// console.log(b.trim(), b.toUpperCase());


// let str = '012345678';
// console.log(str.slice(1 , 5));

// let a = "hello";
// console.log(a.slice(1 , 4));

// let c = 'Apna College';
// console.log(c.slice(2));



// let str1 = 'Virat';
// let str2 = 'Kohli';
// console.log(str1.concat(str2));


// let a ='Apna';
// let b = 'College';
// let c = b.concat(a);
// console.log(c);

// let string1 = 'Babar ';
// let string2 = 'Azam';
// let FullName = string1.concat(string2);
// console.log(FullName);

// let x = 'apna';
// let y = 'college';
// let z = 'i m learning coding from ' + x + y;
// console.log(z);


// let str = 'hello'
// console.log(str.replace('h' , 'v'));

// let b = 'helolololo';
// console.log(b.replaceAll('lo' , 'p'));

// let a = '123456';
// console.log(a.replace(12345 , 110000000));


let str = 'I Love Js';
console.log(str.charAt(0));
console.log(str.charAt(5));

let str1 = 'I Love Coding';
str1 = str.replace('I' , 'u');
console.log(str1);