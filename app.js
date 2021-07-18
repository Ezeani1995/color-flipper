const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let colorSpan = document.querySelector(".color");
let btn = document.getElementById("btn");
let body = document.body;

btn.addEventListener("click", () => {
  let colorInput = colors[getRandomColor()];
  colorSpan.textContent = colorInput;
  colorSpan.style.color = colorInput;
  body.style.backgroundColor = colorInput;
});

function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
