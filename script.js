generatePalette();
setupClearBtn();
inputs();
setupGrid(5, 5, 40);

// Função retirada de https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function generatePalette() {
  let palette = document.querySelector('#color-palette');
  let black = document.createElement('div');
  black.className = 'color selected';
  black.style.backgroundColor = 'black';
  palette.appendChild(black);
  for (let index = 0; index < 3; index++) {
    let color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = randomColor();
    palette.appendChild(color);
  }
  document.body.appendChild(palette);
}

function setupClearBtn() {
  let clearGridBtn = document.createElement('button');

  clearGridBtn.id = 'clear-board';
  clearGridBtn.innerText = 'Limpar';
  document.body.appendChild(clearGridBtn);
  clearGridBtn.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((e) => {
      e.style.backgroundColor = 'white';
    });
  });
}

function setupGrid(y, x, pixelSize) {
  let grid = document.createElement('div');
  document.body.appendChild(grid);

  document.documentElement.style.setProperty('--pixel-size', pixelSize + 'px');

  grid.id = `pixel-board`;
  grid.style.maxWidth = `${x * pixelSize} px`;
  grid.style.maxHeight = `${y * pixelSize} px`;

  for (let index = 0; index < x; index++) {
    let line = document.createElement('div');
    line.style.display = 'flex';
    for (let index = 0; index < y; index++) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      pixel.style.border = '1px solid black';

      line.appendChild(pixel);
    }
    grid.appendChild(line);
  }

  console.log(`Created a grid of ${x} by ${y} with a size of ${pixelSize} px.`);

  let palette = document.querySelectorAll('.color');

  palette.forEach((e) => {
    e.addEventListener('click', (e) => {
      let selectedColor = document.querySelector('.selected');
      selectedColor.className = 'color';
      console.log('clicked' + e.target);
      e.target.className = 'color selected';
    });
  });

  let pixels = document.querySelectorAll('.pixel');

  pixels.forEach((e) => {
    e.addEventListener('click', (e) => {
      let color = document.querySelector('.selected').style.backgroundColor;
      console.log(color);
      e.target.style.backgroundColor = color;
    });
  });
}

function inputs() {
  let container = document.createElement('div');
  container.style.display = 'flex';
  let input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  input.min = 1;
  let inputBtn = document.createElement('button');
  inputBtn.id = 'generate-board';
  inputBtn.innerText = 'VQV';
  console.log('input: ' + input.value);
  inputBtn.addEventListener('click', () => {
    if (input.value == '') {
      alert('Board inválido!');
    } else if (input.value < 5) {
      if (document.querySelector('#pixel-board')) {
        document.querySelector('#pixel-board').remove();
      }
      setupGrid(5, 5, 40);
    } else if (input.value > 50) {
      if (document.querySelector('#pixel-board')) {
        document.querySelector('#pixel-board').remove();
      }
      setupGrid(50, 50, 40);
    } else {
      if (document.querySelector('#pixel-board')) {
        document.querySelector('#pixel-board').remove();
      }
      setupGrid(input.value, input.value, 40);
    }
  });

  container.append(input, inputBtn);
  document.body.appendChild(container);
}
