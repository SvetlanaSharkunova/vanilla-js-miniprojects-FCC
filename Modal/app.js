const modalBtn = document.querySelector(".btn-modal");
const modalCloseBtn = document.querySelector(".btn-close");
const modalOverlay = document.querySelector(".modal-overlay");


modalBtn.addEventListener("click", function() {
  modalOverlay.classList.add("active");
});

modalCloseBtn.addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});