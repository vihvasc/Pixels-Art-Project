function setPixelColor(id) {
  const pixel = document.getElementById(id);
  const colorSelected = document.querySelector('.selected');
  pixel.style.backgroundColor = colorSelected.id;
}

function squareOfPixels(pixels) {
  document.getElementById('square').innerHTML = '';
  for (let x = 0; x < pixels; x += 1) {
    const line = document.createElement('div');
    line.id = 'pixel-board';
    const sectionSquare = document.getElementById('square');
    sectionSquare.appendChild(line);
    console.log(line);
    for (let y = 0; y < pixels; y += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      column.id = `${x}-${y}`;
      column.style.backgroundColor = 'white';
      line.appendChild(column);
      column.addEventListener('click', () => setPixelColor(column.id));
      console.log(column);
    }
  }
}
squareOfPixels(5);

function selectColor(color) {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  const selected = document.getElementById(color);
  selected.className += ' selected';
}
selectColor('black');

function clear() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.style.backgroundColor = 'white';
  }
}

const section = document.querySelector('#buttons');

function input() {
  const sizeInput = document.createElement('input');
  sizeInput.id = 'board-size';
  sizeInput.type = 'number';
  sizeInput.min = '1';
  sizeInput.max = '50';
  section.appendChild(sizeInput);
}
input();

function changePixelSize() {
  const size = document.querySelector('#board-size');
  const { value } = size;
  let pixelSize = value;
  const inputValue = document.querySelector('#board-size');
  if (inputValue.value === '') {
    window.alert('Board inválido!');
    return;
  }
  if (pixelSize >= 50) {
    pixelSize = '50';
  } else if (pixelSize < 5) {
    pixelSize = '5';
  }
  clear();
  squareOfPixels(pixelSize);
}
function buttonPixelSize() {
  const button = document.createElement('button');
  button.id = 'generate-board';
  button.innerText = 'VQV';
  button.addEventListener('click', changePixelSize);
  section.appendChild(button);
  button.style.marginLeft = '10px';
}
buttonPixelSize();

function clearButton() {
  const buttonClear = document.createElement('button');
  buttonClear.innerText = 'Limpar';
  buttonClear.id = 'clear-board';
  section.appendChild(buttonClear);
  buttonClear.addEventListener('click', clear);
  buttonClear.style.marginLeft = '10px';
}
clearButton();
