// Gera cor aleatória para o Desafio 2
function colorGenerator() {
  const req1 = (Math.random() * 256) - 1;
  const req2 = (Math.random() * 256) - 1;
  const req3 = (Math.random() * 256) - 1;

  if (req1 === 255 && req2 === 255 && req3 === 255) {
    return colorGenerator();
  }

  const randomColor = `rgb(${req1},${req2},${req3})`;
  return randomColor;
}

// Verifica se a função acima não tem cor repetida
function colorRepeat() {
  const cores = document.querySelectorAll('.color');
  const newColor = colorGenerator();

  if (cores.length === 0) {
    return newColor;
  }
  for (let i = 0; i < 4; i += 1) {
    if (newColor === cores[i]) {
      colorGenerator();
    }
    return newColor;
  }
}

// Desafio 2
function fourDistinctColorPalette(quantCores) {
  const div = document.querySelector('#color-palette');

  for (let i = 1; i <= quantCores; i += 1) {
    const palette = document.createElement('div');
    palette.className = 'color';

    palette.style.backgroundColor = colorRepeat();
    palette.style.border = '1px solid black';
    div.appendChild(palette);		
  }
}

fourDistinctColorPalette(4);

// Desafio 3
function firstColorBlack() {
  const cores = document.querySelectorAll('.color');
  const tornaPreto = cores[0];

  tornaPreto.style.backgroundColor = 'black';
}

firstColorBlack();

// Desafio 6
function firstPick() {
  const standardColor = document.querySelector('.color');

  standardColor.classList.add('selected');
}

// Desafio 8
function paintPixels() {
  const pixelList = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixelList.length; i += 1) {
    const pixelSelected = pixelList[i];

    pixelSelected.addEventListener('click', function uselessNameSecond() {
      const colorItem = document.querySelector('.selected');
      const colorSelected = colorItem.style.backgroundColor;

      pixelSelected.style.backgroundColor = colorSelected;
    });
  }
}

// Desafio 4
function quadroDePixels(tamanho) {
  const quadroPixel = document.querySelector('#pixel-board');

  for (let index = 1; index <= tamanho; index += 1) {
    const linhaPixel = document.createElement('div');
    linhaPixel.className = 'newDiv';

    for (let i = 1; i <= tamanho; i += 1) {
      const pixelL = document.createElement('div');
      pixelL.className = 'pixel';
      pixelL.style.backgroundColor = 'white';
      linhaPixel.appendChild(pixelL);
    }
    quadroPixel.appendChild(linhaPixel);
    firstPick();
    paintPixels();
  }
}

quadroDePixels(5);

// Desafio 7
function selectColor() {
  const colorList = document.querySelectorAll('.color');

  for (let z = 0; z < colorList.length; z += 1) {
    const button = colorList[z];

    button.addEventListener('click', function uselessNameFirst() {
      for (let i = 0; i < colorList.length; i += 1) {
        colorList[i].classList.remove('selected');
      }
      button.classList.add('selected');
    });
  }
}

selectColor();

// Desafio 9
function clearButton() {
  const button = document.getElementById('clear-board');
  const board = document.querySelectorAll('.pixel');

  button.addEventListener('click', function uselessNameThird() {
    for (let i = 0; i < board.length; i += 1) {
      board[i].style.backgroundColor = 'white';
    }
  });
}

clearButton();

// Desafio 10
function resizeBoard() {
  const input = document.getElementById('board-size');
  const button = document.getElementById('generate-board');
  button.addEventListener('click', function uselessNameFour() {
    const entrada = input.value;
    const size = document.getElementById('pixel-board');
    if (entrada === '') {
      alert('Board inválido!');
    } else if (entrada >= 1 && entrada <= 5) {
      size.innerHTML = '';
      quadroDePixels(5);
    } else if (entrada >= 50) {
      size.innerHTML = '';
      quadroDePixels(50);
    } else if (entrada > 5 && entrada < 50) {
      size.innerHTML = '';
      quadroDePixels(entrada);
    }
  });
}

resizeBoard();
