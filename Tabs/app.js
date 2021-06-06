const btnContainer = document.querySelector(".btn-container");
const btns = document.querySelectorAll(".btn-tab");
const articles = document.querySelectorAll(".content");


btnContainer.addEventListener("click", function(e) {

  btns.forEach(function(btn) {
    btn.classList.remove("active");  
  });
  e.target.classList.add("active"); 

  const id = e.target.dataset.id; 
  const element = document.getElementById(id);
  
  articles.forEach(function(article) {
    article.classList.remove("active");
  });
  element.classList.add("active");
})