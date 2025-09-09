// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function () {
//     proceedToPayment(orderId);
// })

// const promise = createOrder(cart);
// promise.then(function () {
//     proceedToPayment(orderId);
// });


// promise

// {
//     const DOG_API = "https://dog.ceo/api/breeds/image/random";

//     const userApi = fetch(DOG_API);
//     console.log(userApi);

//     userApi
//         .then(function (responseObject) {
//             console.log(responseObject);
//             return responseObject.json()
//         })
//         .then(function (actualData) {
//             console.log(actualData);
//         })
// }



{
    const JOKE_API = "https://official-joke-api.appspot.com/random_joke";
    // const jokeApi = fetch(JOKE_API);

    let setUpElement = document.getElementById("setUp");
    let punchLineElement = document.getElementById("punchLine");
    let jokeIdElement = document.getElementById("jokeId");

    function jokeFunction() {
        // jokeApi 
        fetch(JOKE_API)
            .then(function (responseObject) {
                console.log(responseObject);
                return responseObject.json();
            })
            .then(function (actualData) {
                console.log(actualData);
                jokeIdElement.innerText = actualData.id
                setUpElement.innerText = actualData.setup;
                punchLineElement.innerText = actualData.punchline
            })
    }
    jokeFunction();
}



// const GITHUB_API = "https://api.github.com/users/akshaymarch7";

// const user = fetch(GITHUB_API);

// console.log(user);

// user
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.login);
//     })
