function selectColor(color) {
  const colors = document.querySelectorAll('.color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = 'color';
  }
  const selected = document.getElementById(color);
  selected.className += ' selected';
}
selectColor('black');

function setPixelColor(id) {
  const pixel = document.getElementById(id);
  console.log(pixel);
  const colorSelected = document.querySelector('.selected');
  pixel.style.backgroundColor = colorSelected.id;
}

function clearButton() {
  const buttonClear = document.createElement('button');
  buttonClear.innerText = 'Limpar';
  buttonClear.id = 'clear-board';
  document.body.appendChild(buttonClear);
  buttonClear.addEventListener('click', clear);
}
clearButton();

function squareOfPixels() {
  for (let x = 0; x < 5; x += 1) {
    const line = document.createElement('div');
    line.id = 'pixel-board';
    document.body.appendChild(line);

    for (let y = 0; y < 5; y += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      column.id = `${x}-${y}`;
      column.style.backgroundColor = 'white';
      line.appendChild(column);
      column.addEventListener('click', () => { setPixelColor(column.id); });
    }
  }
}
squareOfPixels();

function clear() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    const pixel = pixels[i];
    pixel.style.backgroundColor = 'white';
  }
}
