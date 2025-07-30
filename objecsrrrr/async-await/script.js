{
    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolve value!! 1");
        }, 5000);
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolve value!! 2");
        }, 2000);
    })

    async function handlePromise() {
        console.log('Hello World before');

        const val1 = await p1;
        console.log('namaste js 1');
        console.log(val1);
        // p1.then(res => console.log(res));

        const val2 = await p2;
        console.log('namaste js 2');
        console.log(val2);
        // p2.then(res => console.log(res));

        console.log('Hello World after');
    }
    handlePromise();
}

{
    const URL = 'https://fakestoreapi.com/products';
    async function getData() {
        try {
            console.log(fetch(URL));
            const response = await fetch(URL);
            console.log(response);
            const data = await response.json();
            console.log(data[0].title);
        } catch (error) {
            console.log(error.message);
        }
    }
    getData();
}


{
    const URL = 'https://fakestoreapi.com/products';
    function getData() {
        console.log(fetch(URL));
        fetch(URL)
            .then(function (res) {
                console.log(res);
                return res.json();
            })
            .then(function (data) {
                console.log(data[0].title);
            })
    }
    getData();
}


{
    const API_URl = 'https://api.github.com/users/AsadAli52';

    async function getData() {
        try {
            console.log(fetch(API_URl));
            const res = await fetch(API_URl);
            console.log(res);
            const data = await res.json();
            console.log(data),
                console.log(data.login);
        } catch (error) {
            console.log(error);
        }
    }
    getData();
}