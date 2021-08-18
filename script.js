const colorPalette = document.getElementById('color-palette');
const buttonVQV = document.getElementById('generate-board');
const buttonClear = document.getElementById('clear-board');
const inputPixelBoard = document.getElementById('board-size');
const pixelBoard = document.getElementById('pixel-board');

function createColorPalette() {
  for (let i = 0; i < 4; i += 1) {
    const createElement = document.createElement('div');
    colorPalette.appendChild(createElement);
    createElement.classList.add('color');
  }
}

const pixels = document.getElementsByClassName('pixel')
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', paintPixel)
}

function paletteColors() {
  const palette = document.getElementsByClassName('color');
  for (let i = 0; i < palette.length; i += 1) {
    if (i === 0) {
      palette[i].style.backgroundColor = 'black';
      palette[i].classList.add('selected');
      palette[i].addEventListener('click', getColor)
    } else {
      let color = '#';
      for (let i2 = 1; i2 < 7; i2 += 1) {
        color += Math.floor(Math.random() * 10);
      }
      palette[i].style.backgroundColor = color;
      palette[i].addEventListener('click', getColor)
    }
  }
}

function getColor() {
  const palette = document.getElementsByClassName('color');
  for (let i = 0; i < palette.length; i += 1) {
    palette[i].classList.remove('selected');
  }
  const colorSelected = event.target;
  colorSelected.classList.add('selected');
}

function paintPixel() {
  const colorSelected = document.getElementsByClassName('selected');
  event.target.style.backgroundColor = colorSelected[0].style.backgroundColor;  
  console.log(colorSelected[0].style.backgroundColor)

}

function createBoard() {
  const n = inputPixelBoard.value;
  for (let i = 0; i < n; i += 1) {
    const createElement = document.createElement('div');
    pixelBoard.appendChild(createElement);
    createElement.classList.add('lines');
  }
  const lines = document.getElementsByClassName('lines');
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const createElement = document.createElement('div');
      lines[i].appendChild(createElement);
      createElement.classList.add('pixel');
      createElement.style.backgroundColor = 'white';
      createElement.addEventListener('click', paintPixel);
    }
  }
}

function createBoard5() {
  const n = 5;
  for (let i = 0; i < n; i += 1) {
    const createElement = document.createElement('div');
    pixelBoard.appendChild(createElement);
    createElement.classList.add('lines');
  }
  const lines = document.getElementsByClassName('lines');
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const createElement = document.createElement('div');
      lines[i].appendChild(createElement);
      createElement.classList.add('pixel');
      createElement.style.backgroundColor = 'white';
      createElement.addEventListener('click', paintPixel);
    }
  }
}

function createBoard50() {
  const n = 50;
  for (let i = 0; i < n; i += 1) {
    const createElement = document.createElement('div');
    pixelBoard.appendChild(createElement);
    createElement.classList.add('lines');
  }
  const lines = document.getElementsByClassName('lines');
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const createElement = document.createElement('div');
      lines[i].appendChild(createElement);
      createElement.classList.add('pixel');
      createElement.style.backgroundColor = 'white';
      createElement.addEventListener('click', paintPixel);
    }
  }
}

function createBoardByButton() {
  console.log(inputPixelBoard.value);
  if (inputPixelBoard.value > 0) {
    pixelBoard.innerHTML = '';
    if (inputPixelBoard.value < 5) {
      createBoard5();
    } else if (inputPixelBoard.value > 50) {
      createBoard50();
    } else {
      createBoard();
    }
  } else {
    alert('Board inválido!');
  }
}

function clear() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

createColorPalette();
paletteColors();

buttonVQV.addEventListener('click', createBoardByButton);
buttonClear.addEventListener('click', clear);
