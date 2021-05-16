const toggleBtn = document.querySelector(".btn-toggle");
const sidebar = document.querySelector(".sidebar");
const navItems = document.querySelectorAll(".nav__item");



toggleBtn.addEventListener("click", function() {
  toggleBtn.classList.toggle("active");
  sidebar.classList.toggle("show");
});


navItems.forEach(function(item) {
  item.addEventListener("mouseover", function(e) {
    this.classList.add("active");
  })
})
navItems.forEach(function(item) {
  item.addEventListener("mouseout", function(e) {
    this.classList.remove("active");
  })
})
