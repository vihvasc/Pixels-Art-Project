function createElementByTagName(tagName, id) {
  const tag = document.createElement(`${tagName}`);
  tag.id = id;
  document.body.appendChild(tag);
  return tag;
}

function createTitle() {
  const titleDiv = createElementByTagName('div', 'title-div');
  const title = createElementByTagName('h1', 'title');
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(titleDiv);
  titleDiv.appendChild(title);
}

function createColorPalette() {
  const colorPalette = createElementByTagName('div', 'color-palette');
  document.body.appendChild(colorPalette);
}

function createColor(myColor) {
  const color = createElementByTagName('div', 'color');
  const colorPalette = document.getElementById('color-palette');
  colorPalette.appendChild(color);
  color.id = `${myColor}`;
  color.className = 'color';
}

function addBoard() {
  const pixelsDv = createElementByTagName('div', 'pixel-board');
  document.body.appendChild(pixelsDv);
}

function addPixels() {
  let count = 1;
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      const pixel = createElementByTagName('div', `pixel${count}`);
      const pixels = document.getElementById('pixel-board');
      pixels.appendChild(pixel);
      pixel.className = 'pixel';
      count += 1;
    }
  }
}

function createPixelArt() {
  createTitle();
  createColorPalette();
  createColor('black');
  createColor('red');
  createColor('blue');
  createColor('green');
  addBoard();
  addPixels();
}

window.onload = createPixelArt();
