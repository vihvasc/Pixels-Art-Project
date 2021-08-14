const blackFirst = document.querySelector('.color-green');
blackFirst.style.backgroundColor = 'rgb(0,0,0)';
blackFirst.classList.add('selected');

const colorsPalette = document.querySelectorAll('.color');

function selectColor (originEvent) {
  const eventTarget = originEvent.target;
  for(let index = 0; index < colorsPalette.length; index += 1) {
    colorsPalette[index].classList.remove('selected');
  }
  eventTarget.classList.add('selected');
}

for (let index = 0; index < colorsPalette.length; index += 1) {
  colorsPalette[index].addEventListener('click', selectColor);
}

const whiteBoxes = document.querySelectorAll('.pixel');

function listenWhiteBoxes (originBox) {
  const selectedColor = document.querySelector('.selected');
  const colorToFill = getComputedStyle(selectedColor).getPropertyValue('background-color');
  const boxToPaint = originBox.target;
  boxToPaint.style.backgroundColor = colorToFill;
}

for(let index = 0; index < whiteBoxes.length; index += 1) {
    whiteBoxes[index].addEventListener('click', listenWhiteBoxes);
}
