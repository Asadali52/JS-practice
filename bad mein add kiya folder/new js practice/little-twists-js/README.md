# ##############################################################
# Example 1: comparing functions and their return values

    function a() {
        console.log("a")
    }

    function b() {
        console.log("b")
    }

    console.log(a === b); ❌ false

 Reason: "a" and "b" are two separate function objects in memory.
 Functions are non-primitive types, so equality checks reference identity.
 Different references => false.

    console.log(a() === b()); ✅ true

 Calling a() logs "a", calling b() logs "b".
 Both functions return "undefined" (no explicit return).
 undefined === undefined => true.

# ##############################################################
# Example 2: comparing function references vs return values

    function x() {
        return 'x';
    }
    function y() {
        return 'x';
    }

    console.log(x === y); ❌ false

 Even though they have identical code, "x" and "y" are
 different function objects => different references => false.

    console.log(x() === y()); ✅ true

 Both return the string 'x'.
 Strings are primitive values, compared by value.
 'x' === 'x' => true.

# ##############################################################
# Example 3: both functions return the SAME shared object

    const obj = { x: 1 }; one object created in memory

    function a() {
        return obj; returns reference to SAME object
    }
    function b() {
        return obj; returns reference to SAME object
    }

    console.log(a === b); ❌ false
Because functions are objects in JS, and you’re checking reference equality. Since a and b don’t share the same reference, result is false.

    console.log(a() === b()); ✅ true

 Both functions return the same "obj" reference in memory.
 Same reference => true.

# ##############################################################
# Example 4: both functions return NEW objects each time

    function a() {
        let obj = { x: 1 }; creates a fresh object on every call
        return obj;
    }
    function b() {
        let obj = { x: 1 }; also creates a fresh object
        return obj;
    }

    console.log(a() === b()); ❌ false

 Even though contents look the same { x: 1 },
 each call creates a new object at a different memory location.
 Different references => false.

# ##############################################################
# Example 5:

    const obj = { name: "Asad Ali" }
    console.log("🚀 ~ obj:", obj)
     reference to an object in memory, e.g., 0x123 → { name: "Asad Ali" }

    const spreadObj = { ...obj };
    console.log("🚀 ~ spreadObj:", spreadObj)
     spreadObj → a NEW object is created with the same properties
    different memory address, e.g., 0x456 → { name: "Asad Ali" }

    const copyObj = obj;
    console.log("🚀 ~ copyObj:", copyObj)
  copyObj → points to the SAME memory address as obj (0x123)

    console.log(obj === spreadObj);  ❌ false

  Even though values look the same, obj and spreadObj are stored in different memory locations.
  Different references → false.

    console.log(obj === copyObj);  ✅ true

  copyObj and obj both point to the same memory reference (0x123).
  Same reference → true.
