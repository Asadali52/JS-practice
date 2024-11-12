let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
  console.log('btn1 clicked');
  prompt('hello world')
  let a = 25;
  a++;
  console.log(a);
}

// ==================

let jsSpanBox = document.querySelector("span");

jsSpanBox.onclick = () => {
  console.log('you are inside jsSpanBox');
  let a = 25;
  a--;
  console.log(a);
}

// =======================

let ObjectEvent1 = document.querySelector('nav');

ObjectEvent1.onclick = (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.clientX , event.clientY);
}

// ----------------

let ObjectEvent2 = document.querySelector('section');

ObjectEvent2.onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX , e.clientY);
} 

// ========================================================

let btnListener = document.querySelector('#eListenerBtn')

btnListener.addEventListener('click' , (evt) => {
  console.log(evt);
  console.log('eListenerBtn was clicked');
} )

btnListener.addEventListener('click' , () => {
  console.log('eListenerBtn was clicked - Handler 1')
} )