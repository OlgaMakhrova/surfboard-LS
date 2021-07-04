const iconMenu = document.querySelector(".menu__icon");
if(iconMenu){
  const menu = document.querySelector(".menu");
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("active");
    menu.classList.toggle("active");
  });
};