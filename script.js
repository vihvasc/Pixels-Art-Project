function colorPalette() {
  const paletaCores = document.querySelectorAll('.color');
  const cores = ['black', 'purple', 'darkblue', 'darkred'];
  for (let key = 0; key < paletaCores.length; key += 1) {
    paletaCores[key].classList.add(cores[key]);
  }
}
colorPalette();

function createPixel(value) {
  const pixelBorder = document.getElementById('pixel-board');
  for (let key = 0; key < value; key += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBorder.appendChild(pixel);
  }
}
createPixel(25);
