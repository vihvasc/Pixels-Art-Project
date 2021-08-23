const selectColor = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');
const vqv = document.querySelector('.inserir');
const boardSize = document.getElementById('board-size');
const pixelBoard = document.getElementById('pixel-board');

// criar o evento de click//
function colorPaint(event) {
  const click = event.target;
  for (let i = 0; i < selectColor.length; i += 1) {
    selectColor[i].classList.remove('selected');
  }
  click.classList.add('selected');
}
for (let i = 0; i < selectColor.length; i += 1) {
  selectColor[i].addEventListener('click', colorPaint);
}
function pintar(eventPaint) {
  const selecionado = document.querySelector('.selected');
  const cor = window.getComputedStyle(selecionado);
  const event = eventPaint.target;
  event.style.backgroundColor = cor.backgroundColor;
  console.log(cor.backgroundColor);
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', pintar);
}
function limparQuadro() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
limpar.addEventListener('click', limparQuadro);

function createBoard() {
  // se não existe o valor do input para o código //
  if (!boardSize.value) {
    window.alert('Board inválido!');
    return;
  }
  let size = boardSize.value;
  if (size < 5) return;
  if (size > 50)size = 50;
  pixelBoard.innerHTML = '';
  pixelBoard.style.width = `${size * 42}px`;
  const quantidade = size * size;
  for (let i = 0; i < quantidade; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.addEventListener('click', pintar);
    pixelBoard.appendChild(pixel);
  }
}
vqv.addEventListener('click', createBoard);

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
function colorGenerator() {
  for (let i = 1; i < selectColor.length; i += 1) {
    selectColor[i].style.backgroundColor = randomColor();
  }
}
colorGenerator();
