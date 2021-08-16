function colorPaletteSquares() {
  const colors = ['black', 'blue', 'red', 'green'];
  const colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < colors.length; index += 1) {
    const colorsDiv = document.createElement('button');
    colorsDiv.className = 'color';
    colorPalette.appendChild(colorsDiv);
    colorsDiv.style.display = 'inline-block';
    colorsDiv.style.backgroundColor = colors[index];
  }
}
colorPaletteSquares();

function whitePixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('load', () => {
      pixels[index].style.backgroundColor = 'white';
    });
  }
}
whitePixels();

function onloadSelected() {
  const colors = document.querySelectorAll('.color');
  const blackColor = colors[0];
  blackColor.classList.add('selected');
}

onloadSelected();

function selectColor() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', (color) => {
      for (let index = 0; index < colors.length; index += 1) {
        if (colors[index].classList.contains('selected')) {
          colors[index].classList.toggle('selected');
        }
      }
      color.target.classList.toggle('selected');
    });
  }
}
selectColor();

function paintPixel() {
  const pixels = document.getElementsByClassName('pixel');
  const selectedColor = document.getElementsByClassName('selected');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      pixels[index].style.backgroundColor = selectedColor[0].style.backgroundColor;
    });
  }
}

paintPixel();

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
