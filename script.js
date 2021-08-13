const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const boardSize = 5;

const makePixel = () => {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');
  return pixel;
};

function makeBoardPixel(line, board) {
  for (let i = 1; i <= board; i += 1) {
    const pixel = makePixel();
    line.appendChild(pixel);
  }
}

const boardLine = () => {
  const line = document.createElement('div');
  line.classList.add('line', 'd-flex');

  return line;
};

function makeBoardLine(board) {
  for (let i = 1; i <= board; i += 1) {
    const line = boardLine();
    pixelBoard.appendChild(line);
    makeBoardPixel(line, board);
  }
}

makeBoardLine(boardSize);

colorPalette.addEventListener('click', (e) => {
  const el = e.target;
  const selected = document.querySelector('.selected');

  selected.classList.remove('selected');
  el.classList.add('selected');

});


pixelBoard.addEventListener('click', (e) => {
  const selectedBrush = document.querySelector('.selected');
  const computedStyle = getComputedStyle(selectedBrush);
  const color = computedStyle.getPropertyValue('background-color');
  const el = e.target;

  if (el.classList.contains('pixel')) {
    el.style.backgroundColor = color;
  }
});
