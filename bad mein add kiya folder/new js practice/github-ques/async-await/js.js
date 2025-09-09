// async will always returns promise;

// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved value");
// })

// // console.log("🚀 ~ p:", p)

// async function getData() {
//     return p;
// }

// const dataPromise = getData();
// console.log("🚀 ~ dataPromise:", dataPromise)

// dataPromise.then(function (res) {
//     console.log(res)
// });

//---------------------------------------------------------------------------------------------------------

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved value");
//     }, 10000);
// })


// // WITH ASYNC AWAIT

// async function handlePromise() {
//     const val = await p; // await is a keyword that can only be used inside async function
//     console.log("namaste") // this will print after resolved the promise
//     console.log("🚀 ~ handlePromise ~ val:", val)
// }

// handlePromise()



// OLDER WAY OF HANDLE PROMISE

// function getData() {
//     p.then(res => console.log(res));
//     console.log("Namaste") // this will print immediately 
// }

// getData();


/// -------------------------------------------------------------------------------------------------------


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve value 1");
    }, 10000);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolve value 2");
    }, 6000);
});


async function handlePromise() {

    console.log('hello world');

    const val1 = await p1;
    console.log("Hello 1");
    console.log(val1);

    console.log('hello world in center');

    const val2 = await p2;
    console.log("Hello 2");
    console.log(val2);

};

handlePromise();