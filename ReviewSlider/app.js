const personArr = [
  {
    id: 1,
    src: "author/author1.jpg",
    author: "sara jones",
    job: "ux designer", 
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
  },
  {
    id: 2,
    src: "author/author2.jpg",
    author: "peter smith",
    job: "intern", 
    info: "Lorem lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
  },
  {
    id: 3,
    src: "author/author3.jpg",
    author: "susan belington",
    job: "web developer", 
    info: "Ipsum ipsum lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
  },
  {
    id: 4,
    src: "author/author4.jpg",
    author: "kelly greenfod",
    job: "creative director", 
    info: "Dolor lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto asperiores debitis incidunt, eius earum ipsam cupiditate libero? Iste, doloremque nihil?",
  }
]

const authorPhoto = document.querySelector("#person-img");
const author = document.querySelector("#author");
const authorJob = document.querySelector("#job");
const authorReview = document.querySelector("#info");

const btns = document.querySelector(".btn-container");
const randomBtn = document.querySelector(".btn-random");

let currentIndex = 0; 
window.addEventListener("DOMContentLoaded", function() {
  personInfo(currentIndex);
});

btns.addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-prev")) {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = personArr.length - 1;
    }
    personInfo(currentIndex);
  } else if (e.target.classList.contains("btn-next")) {
    currentIndex++;
    if (currentIndex > personArr.length - 1) {
      currentIndex = 0;
    }
    personInfo(currentIndex);
  }
});

randomBtn.addEventListener("click", function() {
  currentIndex = Math.floor(Math.random()*personArr.length);  
  personInfo(currentIndex);
})

function personInfo(personIndex) {
  authorPhoto.src = personArr[personIndex].src; 
  author.textContent = personArr[personIndex].author;
  authorJob.textContent = personArr[personIndex].job;
  authorReview.textContent = personArr[personIndex].info;
}
