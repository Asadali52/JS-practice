
// let modeBtn = document.querySelector("#mode");

// let currMode = "Light";

// // modeBtn.addEventListener("click", () => {
// //   if(currMode === "Light"){
// //     currMode = "dark"
// //     document.querySelector('body').style.backgroundColor = "black"
// //   }else{
// //     currMode = "Light"
// //     document.querySelector('body').style.backgroundColor = "white"
// //   }

// //   console.log(currMode);
  
// // })

// modeBtn.addEventListener("click", () => {
//   if(currMode === "Light"){
//     currMode = "dark"
//     document.querySelector('body').classList.add("dark");
//   }else{
//     currMode = "Light"
//     document.querySelector('body').classList.add("light");
//   }

//   console.log(currMode);
  
// })


let modeBtn = document.querySelector("#mode");

let currMode = "Light";

modeBtn.addEventListener("click", () => {
  if(currMode === "Light"){
    currMode = "dark";
    document.querySelector('body').classList.remove("light");
    document.querySelector('body').classList.add("dark");
  } else {
    currMode = "Light";
    document.querySelector('body').classList.remove("dark");
    document.querySelector('body').classList.add("light");
  }

  console.log(currMode);
});
