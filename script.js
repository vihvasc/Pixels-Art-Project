const root = document.documentElement;

window.onload = initialSetup;

function initialSetup() {
  var pixelBoard = document.querySelector('#pixel-board');
  var pixelSize = Number(getComputedStyle(root).getPropertyValue('--user-input'));
  gridSize = pixelSize * pixelSize;
  var gridSizeString = String(gridSize) + 'px';
  root.style.setProperty('--grid-size', gridSizeString);
  for (let index = 1; index <= gridSize; index += 1) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixelBoard.appendChild(pixel);
  }

  var pixels = document.querySelectorAll('.pixel');
  var pixelsArray = Array.from(pixels);
  var pixelsArrayLength = pixelsArray.length;
  var colors = document.querySelectorAll('.color');
  var colorsArray = Array.from(colors);
  var colorsArrayLength = colorsArray.length;
  var blackColor = colorsArray[0];
  var clearButton = document.querySelector('#clear-board');
  var input = document.querySelector('#board-size');
  var gridButton = document.querySelector('#generate-board');

  blackColor.classList.add('selected');

  for (let index = 0; index < colorsArrayLength; index += 1) {
    colorsArray[index].addEventListener('click', addSelected);
  }
  
  for (let index = 0; index < pixelsArrayLength; index += 1) {
    pixelsArray[index].addEventListener('click', paintSquare);
  }
  
  clearButton.addEventListener('click', clearBoard);
  
  gridButton.addEventListener('click', checkInput);

  function addSelected(originEvent) {
    const element = originEvent.target;
    for (let counter = 0; counter < colorsArrayLength; counter += 1) {
      if (colorsArray[counter].classList.contains('selected')) {
        colorsArray[counter].classList.remove('selected');
      }
    }
    element.classList.add('selected');
  }
  
  function paintSquare(originEvent) {
    const selectedColorElement = document.querySelector('.selected');
    const selectedColor = getComputedStyle(selectedColorElement).backgroundColor;
    const myPixel = originEvent.target;
    myPixel.style.background = selectedColor;
  }
  
  function checkInput() {
    let inputValue = input.value;
    if (inputValue < 0) {
      alert('Board inválido!');
      return;
    } else if (inputValue === '') {
      alert('Board inválido!');
      return;
    } else if (inputValue < 5 || inputValue > 50) {
      alert('Board inválido!');
      return;
    } else {
      addPixels();
    }
  }
  
  function addPixels() {
    var pixelSize = input.value;
    var pixelSizeString = String(pixelSize);
    console.log(pixelSizeString)
    var gridSize = pixelSize * pixelSize;
    var gridSizeString = String(gridSize) + 'px';
    root.style.setProperty('--user-input', pixelSizeString);
    root.style.setProperty('--grid-size', gridSizeString);
    pixelBoard.innerHTML = '';
    for (let index = 1; index <= gridSize; index += 1) {
      let pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelBoard.appendChild(pixel);
    }
    root.style.setProperty('--number-of-elements', pixelSize);
    clearBoard();
  }
  
  function clearBoard() {
    for (let index = 0; index < pixelsArrayLength; index += 1) {
      pixelsArray[index].style.background = 'white';
    }
  }
}

