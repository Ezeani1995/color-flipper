const body = document.body;
const colorSpan = document.querySelector(".color");
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  const color =
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0");
  colorSpan.textContent = color;
  body.style.backgroundColor = color;
  colorSpan.style.color = color;
});
