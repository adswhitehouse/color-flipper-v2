const colorBtn = document.querySelector(".jsColorBtn");
const color = document.querySelector(".jsColor");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

// function getRandomArrayItem() {
//   let randomNumber = Math.floor(Math.random() * hexValues.length)
//   let randomArrayItem = hexValues[randomNumber]
//   return randomArrayItem
// }

// colorBtn.addEventListener("click", () => {
//   color.textContent = ` #${getRandomArrayItem()}${getRandomArrayItem()}${getRandomArrayItem()}${getRandomArrayItem()}${getRandomArrayItem()}${getRandomArrayItem()}`
//   document.body.style.backgroundColor = color.textContent
// })

colorBtn.addEventListener("click", () => {
  let hexColor = " #"
  for(let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexValues.length)
    let randomIndex = hexValues[randomNumber]
    hexColor += randomIndex
  }
  color.textContent = hexColor
  document.body.style.backgroundColor = hexColor
})