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
  const linha = value / 5;
  for (let key = 0; key < linha; key += 1) {
    for (let key1 = 0; key1 < 5; key1 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelBorder.appendChild(pixel);
    }
    const br = document.createElement('br');
    pixelBorder.appendChild(br);
  }
}
createPixel(25);
