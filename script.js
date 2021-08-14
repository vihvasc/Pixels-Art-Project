const blackFirst = document.querySelector('.color-green');
blackFirst.style.backgroundColor = 'rgb(0,0,0)';
blackFirst.classList.add('selected');

let selectedBox = document.querySelector('.selected');
let colorsPalette = document.querySelectorAll('.color')

for (let index = 0; index < colorsPalette.length; index += 1) {
  colorsPalette[index].addEventListener('click', selectColor);
}

function selectColor (originEvent) {
  let eventTarget = originEvent.target;
  for (let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].classList.remove('selected');
  }
  eventTarget.classList.add('selected');
}


let whiteBoxes = document.querySelectorAll('.pixel');
for (let index = 0; index < whiteBoxes.length; index += 1) {
  whiteBoxes[index].addEventListener('click', listenWhiteBoxes);
}

function listenWhiteBoxes (originBox) {
  let selectedColor = document.querySelector('.selected');
  let colorToFill = getComputedStyle(selectedColor).getPropertyValue('background-color');
  originBox.target.style.backgroundColor = colorToFill;
}