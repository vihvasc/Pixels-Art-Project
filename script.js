const colorSelect = document.querySelectorAll('.color');
const paletteColors = document.querySelector('#color-palette');
function selecionaPixel(event) {
  for (let index = 0; index < colorSelect.length; index += 1) {
    colorSelect[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
paletteColors.addEventListener('click', selecionaPixel);

const pixelBoard = document.querySelector('#pixel-board');

function colorPixel(event) {
  if (colorSelect[0].classList.contains('selected')) {
    event.target.style.backgroundColor = 'black';
    }
  else if (colorSelect[1].classList.contains('selected')) {
    event.target.style.backgroundColor = 'red';
    }
  else if (colorSelect[2].classList.contains('selected')) {
    event.target.style.backgroundColor = 'blue';
    }
  else if (colorSelect[3].classList.contains('selected')) {
    event.target.style.backgroundColor = 'green';
    }
}
pixelBoard.addEventListener('click', colorPixel);

const buttonClearColors = document.querySelector('#clear-board');
const pixelBoardColor = document.querySelector('#pixel-board');
buttonClearColors.addEventListener('click', function () {
  const backgroundColorPadrao = 'white';
  const pixelsColorsTable = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsColorsTable.length; index += 1) {
    if (pixelsColorsTable[index].style.backgroundColor !== backgroundColorPadrao) {
      pixelsColorsTable[index].style.backgroundColor = backgroundColorPadrao;
    }
  }
});
