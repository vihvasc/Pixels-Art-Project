let colorSelect = document.querySelectorAll('.color');
let paletteColors = document.querySelector('#color-palette');
function selecionaPixel(event) {
    for (let index = 0; index < colorSelect.length; index += 1) {
            colorSelect[index].classList.remove('selected');
      }
    event.target.classList.add('selected'); 
}
paletteColors.addEventListener('click', selecionaPixel);

let pixelBoard = document.querySelector('#pixel-board');
let selectedColors = document.querySelector('.selected');
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

let buttonClearColors = document.querySelector('#clear-board');
let pixelBoardColor = document.querySelector('#pixel-board');
buttonClearColors.addEventListener('click', function() {
  let backgroundColorPadrao = 'white';
  let pixelsColorsTable = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsColorsTable.length; index += 1) {
    if (pixelsColorsTable[index].style.backgroundColor !== backgroundColorPadrao) {
        pixelsColorsTable[index].style.backgroundColor = backgroundColorPadrao;
    }
  }
});

/* digesan 9 gotas 
enterogermina plus uma vez por dia */