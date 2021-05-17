const countNumber = document.querySelector(".countNumber");
const btnContainer = document.querySelector(".btn-container");

let count = 0;

btnContainer.addEventListener("click", function(e) {
  let btn = e.target.classList;

  if (btn.contains("btnDecrease")) {
    count--;    
    countNumber.style.color = "red";
  } else if (btn.contains("btnReset")) {
    count = 0;
    countNumber.style.color = "black";   
  } else if (btn.contains("btnIncrease")) {
    count++;
    countNumber.style.color = "green";    
  }
  countNumber.textContent = count;
});
