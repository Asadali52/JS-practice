{
    function a() {
        console.log("a")
    }

    function b() {
        console.log("b")
    }

    console.log(a === b);
    console.log(a() === b());
}

// ################################################################

{
    function x() {
        return 'x';
    }
    function y() {
        return 'x';
    }

    console.log(x === b)
    console.log(x() === y());
}

// ################################################################

{
    const obj = { x: 1 };

    function a() {
        return obj;
    }
    function b() {
        return obj;
    }

    console.log(a === b);
}

// ################################################################

{
    function a() {
        let obj = { x: 1 };
        return obj;
    }
    function b() {
        let obj = { x: 1 };
        return obj;
    }

    console.log(a() == b());
}

// ################################################################

{
    const obj = { name: "Asad Ali" }
    console.log("🚀 ~ obj:", obj)

    const spreadObj = { ...obj };
    console.log("🚀 ~ spreadObj:", spreadObj)

    const copyObj = obj;
    console.log("🚀 ~ copyObj:", copyObj)

    console.log(obj === spreadObj);
    console.log(obj === copyObj);
}

// ################################################################

function outer() {

    function inner() {
        console.log("inner console")
    }

    return inner;
}

const itis = outer();
itis();

// ################################################################