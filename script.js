const colors = [
  "red",
  "green",
  "blue",
  "rgb(25, 125, 225)",
  "rgb(50, 150, 250)",
  "rgb(10, 110, 210)",
  "#F1F4F7",
  "#7D0E0F",
  "#4A5B6C",
];
const colorBtn = document.querySelector(".jsColorBtn");
const color = document.querySelector(".jsColor");

colorBtn.addEventListener("click", () => {
  let number = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[number];
  color.textContent = ` ${colors[number]}`;
});
