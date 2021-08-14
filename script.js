function colorPalette() {
  const colors = ['black', 'purple', 'orange', 'aqua'];
  const paletteContainer = document.getElementById('color-palette');

  for (let i = 0; i < 4; i += 1) {
    const paletteColor = colors[i];
    const paletteColorItem = document.createElement('li');
    paletteColorItem.style.backgroundColor = paletteColor;
    paletteColorItem.className = 'color';
    paletteColorItem.innerHTML = paletteColor;
    paletteColorItem.innerText = '';
    paletteContainer.appendChild(paletteColorItem);
  }
}

colorPalette();

function board() {
  const pixel = 5;
  const wide = pixel;
  const lines = document.getElementsByClassName('line');

  for (let i = 0; i < lines.length; i += 1) {
    for (let index = 0; index < wide; index += 1) {
      const square = document.createElement('div');
      lines[i].appendChild(square);
      square.className = 'pixel';
    }
  }
}

board();

function select() {
  const selectColorBlack = document.getElementsByClassName('color')[0];
  selectColorBlack.classList.add('selected');
}

select();

function selectedColor() {
  const selectColorPalette = document.getElementById('color-palette');
  const colorselect = document.getElementsByClassName('color');
  //  material acessado :https://github.com/tryber/sd-08-project-pixels-art/blob/fabio-ferreira-pixels-art-project/script.js
  function removeSelected() {
    for (let i = 0; i < colorselect.length; i += 1) {
      colorselect[i].className = 'color';
    }
  }
  // erro lint acessado:https://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-objec
  function getBoardColors(event) {
    const evitaError = event;
    removeSelected();
    evitaError.target.className = 'color selected';
  }
  // ...
  selectColorPalette.addEventListener('click', getBoardColors);
}
selectedColor();

function paintBoard() {
  const boardPaint = document.getElementById('pixel-board');

  function setColorBoard(event) {
    // erro lint acessado:https://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-object
    const evit = event;
    // ....
    evit.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor; // eslint-disable-line no-param-reassign
  }
  boardPaint.addEventListener('click', setColorBoard);
}
paintBoard();

function clearButton() {
  const getButton = document.querySelector('#clear-board');
  const getPixels = document.querySelectorAll('.pixel');
  const colorPixel = 'white';

  function getwhite() {
    for (let i = 0; i < getPixels.length; i += 1) {
      if (getPixels[i].style.backgroundColor !== colorPixel) {
        getPixels[i].style.backgroundColor = colorPixel;
      }
    }
  }
  getButton.addEventListener('click', getwhite);
}

clearButton();
