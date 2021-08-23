let colorSelect = document.querySelectorAll('.color');
let paletteColors = document.querySelector('#color-palette');
function selecionaPixel(event) {
    for (let index = 0; index < colorSelect.length; index += 1) {
            colorSelect[index].classList.remove('selected');
      }
    event.target.classList.add('selected'); 
}
paletteColors.addEventListener('click', selecionaPixel);



/* let colorPadrao = 'rgb(255, 255, 255)';
function clearPixels() {
    for (let index = 0; index < pixelsColorsTable.length; index += 1) {
        if (pixelsColorsTable[index].style.backgroundColor !== colorPadrao) {
            pixelsColorsTable[index].style.backgroundColor = colorPadrao;
        }
    }
}
buttonClearColors.addEventListener('click', clearPixels); */

let buttonClearColors = document.querySelector('#clear-board');
let pixelBoardColor = document.querySelector('#pixel-board');
buttonClearColors.addEventListener('click', function() {
  let backgroundColorPadrao = 'white';
  let pixelsColorsTable = document.querySelectorAll('.pixel');
  pixelBoardColor.style.backgroundColor = backgroundColorPadrao;
  for (let index = 0; index < pixelsColorsTable.length; index += 1) {
    if (pixelsColorsTable[index].style.backgroundColor !== backgroundColorPadrao) {
        pixelsColorsTable[index].style.backgroundColor = backgroundColorPadrao;
    }
  }
});

/* digesan 9 gotas 
enterogermina plus uma vez por dia */