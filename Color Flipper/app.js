const arrHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E","F"];
const btn = document.querySelector(".btn");
const colorText = document.querySelector(".color");

btn.addEventListener("click", function() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += arrHex[randomIndex()];
  }
  
  document.body.style.backgroundColor = color;
  colorText.textContent = color;
});

function randomIndex() {
  return Math.floor(Math.random()*arrHex.length);
};