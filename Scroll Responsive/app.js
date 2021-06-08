
const burgerBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const linksContainer = document.querySelector(".links"); 
const links = document.querySelectorAll(".scroll-link");


burgerBtn.addEventListener("click", function() {

  navHeight = nav.getBoundingClientRect().height;  
  linksHeight = linksContainer.getBoundingClientRect().height; 


  if (navHeight === 0) {
    nav.style.height = `${linksHeight}px`;
  } else {
    nav.style.height = 0;
  }
});

const upBtn = document.querySelector(".top-link");
const header = document.querySelector(".header");
const intro = document.querySelector(".intro");

window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset;
  const headerHeight = header.getBoundingClientRect().height;
  const introHeight = intro.getBoundingClientRect().height;
  

  if (scrollHeight > headerHeight) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }

  if (scrollHeight > introHeight) {
    upBtn.classList.add("show-links");
  } else {
    upBtn.classList.remove("show-links");
  }
});

links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const headerHeight = header.getBoundingClientRect().height;
    const fixedNav = header.classList.contains("fixed-nav");
    
    let position = element.offsetTop - headerHeight;

    if (!fixedNav) {
      position = position - headerHeight;
    }

    window.scrollTo ({
      top: position,
      left: 0,
    });

    nav.style.height = 0;




  });
});
