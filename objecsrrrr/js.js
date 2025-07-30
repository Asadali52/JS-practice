let sym = Symbol('key1');


const obj = {
    name: 'asad',
    "user name": 'asad ali',
    [sym]: 'key1',
}

obj.greeting = function () {
    console.log(`hello js user ${this.name}`);
}


console.log(typeof obj.greeting); // function 
console.log(obj["user name"]); // asad ali
console.log(obj.name); // asad
console.log(obj['name']) // asad
console.log(typeof obj[sym]) // string


const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'bobby',
            lastname: 'badshah',
        },
    },
}

console.log(regularUser.fullname.userfullname.firstname); // bobby 
console.log(regularUser.fullname.userfullname.lastname); // badshah

//---------

const target = { 1: 'a', 2: 'b' };
const source = { 3: 'c', 4: 'd' };
// const returnedTarget = { target, source };
const returnedTarget = Object.assign(target, source); // merge both objeects
console.log(returnedTarget);
console.log(target === returnedTarget); // true

//--------

// spread operator in objects
const obj1 = { 1: 'a', 2: 'b', 3: 'c' };
const obj2 = { 4: 'd', 5: 'e', 6: 'f' };

const obj3 = { ...obj1, ...obj2 }; // merged
console.log(obj3);


// == = = = = = 

// spread operator in arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr1, ...arr2]; // merged
console.log(arr3);


{
    let users = [
        {
            id: 17564674,
            email: 'someone@gmail.com'
        },
        {
            id: 42425762,
            email: 'someone@gmail.com'
        },
        {
            id: 76563554233,
            email: 'someone@gmail.com',
            isLoggedIn: false
        }
    ];
    console.log(users[0].id);
    console.log(users[1].email)
    console.log(users[2])
    console.log(Object.keys(users[2]));
    console.log(Object.values(users[2]));
    console.log(Object.entries(users[1]));
    console.log(users[0].hasOwnProperty('id'));
}


{
    const object = {
        name: 'hitesh',
        email: "hitesh@gmail.com"
    };
    console.log(object.name);
    console.log(Object.keys(object));
    console.log(Object.values(object));
    console.log(Object.entries(object));
    console.log(object.hasOwnProperty('name'));
    console.log(object.hasOwnProperty('isLoggedIn'));
}

{
    let users = [];
    let userId = 123456;

    users.push({
        name: 'someone',
        id: userId,
        ['custom_' + userId]: 'dynamic value'
    });

    console.log(users[0]['custom_123456']); // 'dynamic value';
    console.log(users)
}


{
    const course = {
        courseName: 'js in urdu',
        coursePrice: '999',
        courseInstructor: 'hitesh'
    };

    const { courseName } = course;
    const { courseInstructor: instructor } = course;
    console.log(courseName);
    console.log(instructor);
}


{
    const course = {
        courseName: 'js in urdu',
        coursePrice: 999,
    };

    console.log(Object.keys(course));
    console.log(Object.values(course));
    console.log(Object.entries(course));
    const checkInstructor = course.hasOwnProperty('courseInstructor');
    console.log(course)
    if (checkInstructor === false) {
        course.courseInstructor = 'hitesh';
    }
    console.log(course)
}