const countNumber = document.querySelector(".countNumber");
const btnContainer = document.querySelector(".btn-container");

let count = 0;

btnContainer.addEventListener("click", function(e) {
  let btn = e.target;

  if (btn.classList.contains("btnDecrease")) {
    count--;    
    countNumber.style.color = "red";
  } else if (btn.classList.contains("btnReset")) {
    count = 0;
    countNumber.style.color = "black";   
  } else if (btn.classList.contains("btnIncrease")) {
    count++;
    countNumber.style.color = "green";    
  }
  countNumber.textContent = count;
});
