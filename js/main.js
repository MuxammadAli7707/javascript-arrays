// let elButton = document.querySelector("#btn");
// let count = 0;
// elButton.addEventListener("click", () => {
//   if(count == 0){
//     elButton.style.backgroundColor = "blue";
//     count++;
//   } else {
//     elButton.style.backgroundColor = "red";
//     count--;
//   }
// });  



// let elCarusel = document.getElementsByClassName('carusel__box');
// let elRight = document.getElementById('right');
// let elLeft = document.getElementById('left');

// console.log(elCarusel);


// elRight.addEventListener('click', ()=> {
//   elCarusel[0].style.transform = 'translateX(-670px)';
// });

// elLeft.addEventListener('click', ()=> {
//   elCarusel[0].style.transform = 'translateX(0)';
// });

// let elCarusel = document.getElementsByClassName('carusel__box');
// let elRight = document.getElementById('right');
// let elLeft = document.getElementById('left');
// let px = 670;
// let next = 1;

// console.log(elCarusel);


// elRight.addEventListener('click', ()=> {
//   if(next >= elCarusel.length) {
//     next = 0;
//     px = 670;
//   }
//   elCarusel[next].style.transform = `translateX(-${670}px)`;
//   ++next;
//   px +=670;
// });

// elLeft.addEventListener('click', ()=> {
//   elCarusel[0].style.transform = 'translateX(0)';
// });

let elCarusel = document.getElementsByClassName('carusel__imgbox');
let elRight = document.getElementById('right');
let elLeft = document.getElementById('left');
let next = 1;
let slide = 800;

console.log(elCarusel);


elRight.addEventListener('click', ()=> {
  if(next >= elCarusel.length) {
  next = 0;
  slide = 800;
  }
  elCarusel[next].style.transform = `translateX(-${slide}px)`;
  ++next;
  slide += 800;

});

elLeft.addEventListener('click', ()=> {
  if(next > elCarusel.length) {
  next = 0;
  slide = 800;
  }
  elCarusel[next].style.transform = `translateX(+${slide}px)`;
  --next;
  slide -= 800;

});


// elLeft.addEventListener('click', ()=> {
//   elCarusel[next].style.transform = 'translateX(0)';
// });
// let elCarusel = document.getElementsByClassName('carusel');
// let elRight = document.getElementById('right');
// let elLeft = document.getElementById('left');
// let count = 0;

// let img = document.querySelectorAll('#carusel img');

// console.log(img);

// function slideCarusel() {
//   elCarusel[0].style.transform = 'translateX(-670px)';
//   elCarusel[2].style.transform = 'translateX(-870px)';
// }

// elRight.addEventListener('click', function nextCarusel() {
//   count++;

//   slideCarusel();
// });


// elLeft.addEventListener('click', ()=> {
//   elCarusel[0].style.transform = 'translateX(0)';
// });