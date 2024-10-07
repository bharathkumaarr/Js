const checkk = document.querySelector('.js-button')
// console.log(checkk.classList.contains('js-button'));
const gamingButtonElement = document.querySelector('.js-gaming-button');
const musicElement = document.querySelector('.js-music-button');
const techElement = document.querySelector('.js-tech-button');



function toggle(para){
  
  if (para.classList.contains('is-toggled') || para.classList.contains('is-toggled') || para.classList.contains('is-toggled')){
    para.classList.remove('is-toggled');
  } 
  else {
    para.classList.add('is-toggled');
  }
}


