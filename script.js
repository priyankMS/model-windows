'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal  =document.querySelector('.close-modal');
const btnsOpenModal=document.querySelectorAll('.show-modal')
           
const openModal= function(){
   console.log('button clicked');
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden')
}


const closeModal=function(){
   modal.classList.add('hidden');
   overlay.classList.add('hidden')
}


//  btnCloseModal.addEventListener('click',function(){
   //     modal.classList.add('hidden')
   //     overlay.classList.add('hidden')
   // })
   // overlay.addEventListener('click',function(){
      //    modal.classList.add('hidden')
      //    overlay.classList.add('hidden')})
      
      for(let i=0;i<btnsOpenModal.length;i++)
      btnsOpenModal[i].addEventListener('click',openModal); 

btnCloseModal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal)

/*
const keyP=function(){
   console.log('key is press');
}

document.addEventListener('keypress',keyP)
document.addEventListener('keyup',keyP) */

document.addEventListener('keydown',function(e){
   console.log(e.key);
})

// document.addEventListener('keypress',function(){
//    console.log("key press on keybord");
// })

// document.addEventListener('keyup',function () {
//    console.log();
// })