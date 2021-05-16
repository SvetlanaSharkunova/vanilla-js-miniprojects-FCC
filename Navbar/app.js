const burgerBtn = document.querySelector("#nav-burger");
const nav = document.querySelector(".nav");


burgerBtn.addEventListener("click", function() {
  burgerBtn.classList.toggle("active");
  nav.classList.toggle("active");  
})