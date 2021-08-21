function colorirPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
function criarGrade(tamanho) {
  const grade = document.querySelector('#pixel-board');

  for (let i = 0; i < tamanho; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    grade.appendChild(pixel);
    pixel.style.backgroundColor = 'white';
    pixel.addEventListener('click', colorirPixel);
  }
}
criarGrade(25);
const color = document.getElementsByClassName('color');

function selecionaCor(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}
function cleanBoard() {
  const pixel = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
function addEvents() {
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', selecionaCor);
  }
  const botao = document.querySelector('button');
  botao.addEventListener('click', cleanBoard);
}

function criaPaleta(cores) {
  const paleta = document.getElementById('color-palette');

  for (let i = 0; i < cores.length; i += 1) {
    const cor = document.createElement('div');
    paleta.appendChild(cor);
    cor.className = `color cor${i + 1}`;
    cor.style.backgroundColor = cores[i];
  }
}
criaPaleta(['black', 'red', 'blue', 'green']);

const blackColor = document.querySelector('.cor1');
blackColor.classList.add('selected');

addEvents();
