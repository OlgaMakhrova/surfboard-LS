const plankBurger = document.querySelector(".burger");
if(plankBurger){
  const menu = document.querySelector(".menu");
  plankBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    plankBurger.classList.toggle("_active");
    menu.classList.toggle("_active");
  });
};

// let burger  = document.querySelector('.burger');
// let overlay = document.querySelector('.overlay');
// let body = document.querySelector('body');

// let links = document.querySelectorAll('.menu__link');

// links.forEach(function(element){
//   element.addEventListener('click' , toggleMenu);
// })

// function toggleMenu(){
//   burger.classList.toggle('burger--active');
//   overlay.classList.toggle('overlay--active');
//   body.classList.toggle('body--active-menu');
// }

// burger.addEventListener('click' , toggleMenu);