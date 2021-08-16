function createLine() {
  const board = document.getElementById('pixel-board');
  const numberOfLines = 5;
  for (let l = 0; l < numberOfLines; l += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    board.appendChild(line);
  }
}

function createPixel() {
  const pixelPerLine = 5;
  const linesToFill = document.getElementsByClassName('line');
  for (let l = 0; l < linesToFill.length; l += 1) {
    for (let p = 0; p < pixelPerLine; p += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linesToFill[l].appendChild(pixel);
    }
  }
}

function changeSelected(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function paintPixel(event) {
  const color = document.querySelector('.selected');
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = `${color.id}`;
}

function limpar() {
  const pixels = document.querySelectorAll('.pixel');
  for (let p = 0; p < pixels.length; p += 1) {
    pixels[p].style.backgroundColor = 'white';
  }
}

window.onload = function initPage() {
  createLine();
  createPixel();

  const cores = document.querySelectorAll('.color');
  cores.forEach((item) => {
    item.addEventListener('click', changeSelected);
  });

  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => {
    item.addEventListener('click', paintPixel);
  });

  document.getElementById('clear-board').addEventListener('click', limpar);
};
