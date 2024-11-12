// let DATA = 'secret information of college';

// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     viewData () {
//         console.log('data =', DATA);
//     }
// }

// let student1 = new user('Asad Ali', 'itsasadali5@gmail.com');
// console.log(student1);
// console.log(student1.viewData);
// console.log(student1.viewData());

// let student2 = new user('rizzi', 'itsrizi5@gmail.com');
// console.log(student2);
// console.log(student2.viewData);
// console.log(student2.viewData());





let DATA = 'secret information of college';

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log('data =', DATA);
    }
}


class Admin extends user {
    constructor (name, email) {
        super(name, email);
    }
     
    editData() {
        DATA = 'some new value';
    }
}

let student1 = new user('Asad Ali', 'itsasadali5@gmail.com');
let student2 = new user('rizzi', 'itsrizi5@gmail.com');
let teacher1 = new user('Dean', 'dean@college.com');

let Admin1 = new Admin('ali', 'ali@gmail.com');