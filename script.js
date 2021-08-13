let firstColor = document.getElementById('color-palette').children[0];
let secondColor = document.getElementById('color-palette').children[1];
let thirdColor = document.getElementById('color-palette').children[2];
let fourthColor = document.getElementById('color-palette').children[3];

let arrayColors = [firstColor, secondColor, thirdColor, fourthColor];

function handleBlackFirst(element) {
  element.style.background = 'black';
}
handleBlackFirst(firstColor);

function handleSelectColor(event) {
  let elementSelectorClass = document.querySelector('.selected');
  elementSelectorClass.classList.remove('selected');
  event.target.classList.add('selected');
}

for (color of arrayColors) {
  color.addEventListener('click', handleSelectColor);
}
