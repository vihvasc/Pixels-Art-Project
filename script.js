/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */

window.onload = function pixelArt() {
  const pixelBoard = document.getElementById('pixel-board');

  let tableSize = 5;

  function table() {
    for (let j = 0; j < tableSize; j += 1) {
      const linesClass = document.createElement('div');

      pixelBoard.appendChild(linesClass);
      for (let i = 0; i < tableSize; i += 1) {
        const ColumnClass = document.createElement('div');

        ColumnClass.classList.add('pixel');

        pixelBoard.appendChild(ColumnClass);
      }
    }
  }
  table();

  function tableNumberSize() {
    const inputLine = document.querySelector('#board-size').value;
    const invalidBoard = 'Board inválido!';

    console.log(inputLine);
    if (inputLine === null) {
      alert(invalidBoard);
    } else if (inputLine < 5) {
      tableSize = 5;
      alert(invalidBoard);
    } else if (inputLine > 50) {
      tableSize = 50;
      alert(invalidBoard);
    } else tableSize = inputLine;
    console.log(inputLine);
    pixelBoard.innerHTML = '';
    table();
  }

  function paint() {
    const colorPalette = document.getElementsByClassName('color');
    const pixel = document.getElementsByClassName('pixel');

    function paintSelectedColor(event) {
      const eventSelected = event;
      const color = ['black', 'red', 'blue', 'green'];
      for (let i = 0; i < colorPalette.length; i += 1) {
        if (colorPalette[i].classList.contains('selected')) {
          eventSelected.target.style.backgroundColor = color[i];
        }
      }
    }

    for (let i = 0; i < pixel.length; i += 1) {
      pixel[i].addEventListener('click', paintSelectedColor);
    }

    function selectedColor(event) {
      for (let i = 0; i < colorPalette.length; i += 1) {
        if (colorPalette[i].classList.contains('selected')) {
          colorPalette[i].classList.remove('selected');
        }
      }
      event.target.classList.add('selected');
      paintSelectedColor(event);
    }

    for (let i = 0; i < colorPalette.length; i += 1) {
      colorPalette[i].addEventListener('click', selectedColor);
    }

    function erase() {
      for (let i = 0; i < pixel.length; i += 1) {
        pixel[i].style.backgroundColor = 'white';
      }
    }
    const confirmLine = document.querySelector('#generate-board');
    const eraseBoard = document.querySelector('#clear-board');
    confirmLine.addEventListener('click', tableNumberSize);
    confirmLine.addEventListener('click', paint);
    eraseBoard.addEventListener('click', erase);
  }
  paint();
};
