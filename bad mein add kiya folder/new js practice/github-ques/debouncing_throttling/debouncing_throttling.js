let counter = 0;

const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data ...", counter++)
}

const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d);
    }
}

debounce(getData, 300);

// --- throttling example

let count = 0;

let apiCalled;

const throttle = (fn, time) => {
    if (apiCalled) return;
    apiCalled = true;
    setTimeout(() => {
        fn();
        apiCalled = false;
    }, time);
};

const sendEmail = () => {
    throttle(() => {
        console.log("sending email ....", count++)
    }, 1000)
}