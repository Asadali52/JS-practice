// let str = "apnaCollege";
// console.log(str[5]);

// let string = "AsadAli";
// console.log(string[0]);

// let obj = {
//   item: "pen",
//   price: 100
// }
// console.log("the cost of", obj.item, "is", obj.price, "rupees");
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// TEMPLATE LITERALS

// let obj = {
//   item: "pen",
//   price: 100
// }
// let specialString = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(specialString);
// console.log(typeof specialString);

// //---

// let object = {
//   player: "Kohli",
//   country: "India",
// };
// console.log(`${object.player} belongs to ${object.country}`);

//==========

// ESCAPE CHARACTERS
// console.log("Apna \n College");
// console.log("Apna \nCollege");
// console.log("Apna \t College");
// console.log("Apna \tCollege");

// let str = "Apna\nCollege"
// console.log(str.length); // \n will count as 1 character


// STRING METHODS

// let a = " Bobby King ";
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.trim());
// let upperCase = a.toUpperCase();
// console.log(upperCase);

// // slice method
// let b = "Rizzi Superman";
// console.log(b.slice(6));
// console.log(b.slice(0, 2)); // end point is optional or agr end point index dein to wo include ni hota

// Concatination 

// let str1 = "Apna";
// let str2 = "College";
// console.log(str1+" "+str2);
// console.log(str2.concat(str1));
// console.log(str1 + str2 + str2);
// console.log(str1.charAt(2));

// // replace method
// let str = "hello";
// console.log(str.replace("he", "y"));

// let rep = "hellololololo"
// console.log(rep.replaceAll('lo', "p"));
// console.log(rep.charAt(10));
// console.log(rep.charAt(0));


// QUESTION STRING

// let fullName = prompt("Enter full name without spaces");
// let userName = "@" + fullName + fullName.length;
// console.log(userName);

//--------------------- MDN PRACTICE------------------------// 

// const browserType = "mozilla";
// if (browserType.includes("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }



// const browserType = "mozilla";
// if (browserType.startsWith("zilla")) {
//   console.log("not start with zilla!");
// } else {
//   console.log("No zilla here!");
// }



// const browserType = "mozilla";
// if (browserType.endsWith("zilla")) {
//   console.log("Ends with zilla!");
// } else {
//   console.log("No zilla here!");
// }




// const tagline = "MDN - Resources for developers, by developers";
// console.log(tagline.indexOf("developers")); // 20
// console.log(tagline.indexOf("by")); //32
// console.log(tagline.indexOf("x"));



// const tagline = "MDN - Resources for developers, by developers";
// const firstOccurrence = tagline.indexOf("developers");
// const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);
// const thirdOcuurance = tagline.indexOf("developers", secondOccurrence + 1);
// console.log(firstOccurrence); // 20
// console.log(secondOccurrence); // 35
// console.log(thirdOcuurance); // -1