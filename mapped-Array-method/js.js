{
    let map1 = new Map();

    map1.set('a', 1);
    map1.set('b', 2);
    map1.set('c', 3);

    console.log(map1.get('a'));

    map1.set('a', 100);

    console.log(map1.get('a'));

    console.log(map1.size);

    map1.delete('c');

    console.log(map1.size);
}


{
    let arr = [45, 23, 12];
    let a = arr.map((value, index, arr) => {
        console.log(value, index, arr);
        return value + 1
    })
    console.log(a);
}

{
    let arr = [29, 15, 78];
    let newArr = arr.map((a, b, c) => {
        console.log(a, b, c);
        return a + 100
    })
    console.log(newArr);
}

{
    let arr = [24, 50, 70, 100];
    arr.map((value, index, arr) => {
        console.log(index, value, arr);
    })
}



// Ek array const numbers = [1, 2, 3, 4, 5]; diya gaya hai. har element ko 2 sy mutiply krein, 
// Ek map() method ka use karke har number ko 2 se multiply karke nayi array banao.
{
    let numbers = [1, 2, 3, 4, 5];
    let arr = numbers.map((value) => {
        return value * 2;
    })
    console.log(arr);
}



// Ek array const names = ['Ali', 'Asad', 'Sara']; diya gaya hai.
// map() ka use karke in names ko uppercase mein convert karo.
{
    let names = ['Ali', 'Asad', 'Sara'];
    let newArr = names.map((value) => {
        return value.toUpperCase();
    })
    console.log(newArr);
}



// Ek array of objects diya gaya hai:
// map() ka use karke ek nayi array banao jo sirf users ke names return kare.
{
    let users = [
        { id: 1, name: 'Ali' },
        { id: 2, name: 'Sara' },
        { id: 3, name: 'Asad' }
    ];
    let names = users.map((value) => {
        return value.name;
    })
    console.log(names);
}



// Ek array const numbers = [5, 10, 15]; diya gaya hai.
// map() ka use karke ek nayi array banao jo har number ko { number: x, square: x * x } format mein ho.
{
    let numbers = [5, 10, 15];
    let format = numbers.map((value) => {
        return `number: ${value}, square: ${value * value}`
    })
    console.log(format);
}



// Ek array const scores = [50, 80, 90, 30, 70]; diya gaya hai.
// map() ka use karke ek nayi array banao jisme agar score 60 se zyada ho to "Pass" aur agar 60 se kam ho to "Fail" likha ho.
{
    let scores = [50, 80, 90, 30, 70];
    let check = scores.map((value) => { return value > 60 ? 'Pass' : 'Fail' })
    console.log(check);
}



// Ek array const fruits = ['Apple', 'Banana', 'Mango']; diya gaya hai.
// map() ka use karke ek nayi array banao jo har fruit ke sath uska index bhi dikhaye, e.g., "0: Apple", "1: Banana".
{
    let fruits = ['Apple', 'Banana', 'Mango'];
    let newArr = fruits.map((value, index,) => {
        return `${index}: ${value}`
    })
    console.log(newArr);
}



// Ek array const words = ['hello', 'world', 'javascript']; diya gaya hai.
// map() ka use karke ek nayi array banao jo har word ki length return kare.
{
    let words = ['hello', 'world', 'javascript'];
    let newArr = words.map((value) => {
        return value.length;
    })
    console.log(newArr);
}



// Ek array of objects diya gaya hai:
// map() ka use karke har student object mein ek nayi property grade add karo, jisme:
// Marks >= 90 ho to "A"
// Marks >= 80 ho to "B"
// Otherwise "C"
{
    let students = [
        { name: 'Ali', marks: 85 },
        { name: 'Sara', marks: 92 },
        { name: 'Asad', marks: 78 }
    ];
    let newArr = students.map((student) => {
        let grade;
        if (student.marks >= 90) {
            grade = 'A';
        } else if (student.marks >= 80) {
            grade = 'B';
        } else {
            grade = 'C';
        }
        return { ...student, grade };
    })
    console.log(newArr);
}



// Ek array const numbers = [1, 2, 3, 4, 5, 6]; diya gaya hai.
// map() ka use karke ek nayi array banao jisme:
// Agar number odd ho, uska double ho.
// Agar even ho, wahi number ho.
{
    let numbers = [1, 2, 3, 4, 5, 6];
    let newArr = numbers.map((value) => {
        if (value % 2 !== 0) {
            return value + value
        } else {
            return value;
        }
    })
    console.log(newArr);
}



// Ek array const names = ['Ali', 'Asad', 'Sara']; diya gaya hai.
// map() ka use karke har name ke sath "_UI Developer" suffix add karo, e.g., Ali_UI Developer.
{
    let names = ['Ali', 'Asad', 'Sara'];
    let newArr = names.map((value) =>
        // return value + '_UI Developer'
        value === 'Ali' ? value + '_UI developer' : value === 'Asad' ? value + '_Frontend Developer' : value + '_Backend Developer'
    )
    console.log(newArr);
}


// Ek array of objects diya gaya hai:
// map() ka use karke ek nayi array banao jo sirf age values return kare.
{
    let people = [
        { name: 'Ali', age: 25 },
        { name: 'Sara', age: 30 },
        { name: 'Asad', age: 35 }
    ];
    let ageArr = people.map((value) => {
        return value.age;
    })
    console.log(ageArr);
}



// Ek array const numbers = [2, 4, 6, 8]; diya gaya hai.
// map() ka use karke ek nayi array banao jo har element ko uske index ke saath multiply kare.
{
    let numbers = [2, 4, 6, 8];
    let newArr = numbers.map((value, index) => {
        return value * index
    })
    console.log(newArr);
}



// Ek array const sentences = ['Hello World!', 'JavaScript is amazing', 'I love coding']; diya gaya hai.
// map() ka use karke har sentence ko 10 characters tak truncate karo (agar length zyada ho).
//  Truncated string ke end mein "..." lagana hai.
{
    let sentences = ['Hello World!', 'JavaScript is amazing', 'I love coding'];
    let truncatedArr = sentences.map((value) => {
        return value.slice(0, 10) + '...';
    })
    console.log(truncatedArr);
}



// Ek array of objects diya gaya hai:
// map() ka use karke ek nayi array banao jo har user ka full name return kare ("Ali Khan", "Sara Ahmed").
{
    let users = [
        { firstName: 'Ali', lastName: 'Khan' },
        { firstName: 'Sara', lastName: 'Ahmed' },
        { firstName: 'Asad', lastName: 'Ali' }
    ];
    let fullName = users.map((value) =>
        value.firstName + ' ' + value.lastName
    );
    console.log(fullName);
}