function colorirPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
function criarGrade(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const linhaDePixel = document.createElement('div');
    const linha = document.querySelector('#pixel-board');
    linha.appendChild(linhaDePixel);
    linhaDePixel.className = 'linha';
    for (let i2 = 0; i2 < tamanho; i2 += 1) {
      const colunaDePixel = document.createElement('div');
      const coluna = document.getElementsByClassName('linha')[i];
      coluna.appendChild(colunaDePixel);
      colunaDePixel.className = 'pixel';
      colunaDePixel.addEventListener('click', colorirPixel);
    }
  }
}
criarGrade(5);

const quantidadeDePixel = document.getElementById('board-size').value;

criarGrade(quantidadeDePixel);

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
const inputBoardSize = document.querySelector('#board-size');
function tamanhoMinEMax() {
  if (inputBoardSize.value < 5) {
    inputBoardSize.value = 5;
  } else if (inputBoardSize.value > 50) {
    inputBoardSize.value = 50;
  }
}
function apagaGrade() {
  const linhaDePixel = document.getElementsByClassName('linha');
  for (let i = linhaDePixel.length - 1; i >= 0; i -= 1) {
    linhaDePixel[i].remove();
  }
}
function alerta() {
  if (inputBoardSize.value === '') {
    alert('Board inválido!');
  }
}
function mudarOTamanho() {
  alerta();
  tamanhoMinEMax();
  apagaGrade();
  criarGrade(inputBoardSize.value);
}

function addEvents() {
  const paletaDeCores = document.getElementsByClassName('color');
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', selecionaCor);
  }
  const btnClean = document.querySelector('#clear-board');
  btnClean.addEventListener('click', cleanBoard);
  const btnVQV = document.querySelector('#generate-board');
  // btnVQV.addEventListener('click', tamanhoMinEMax);
  btnVQV.addEventListener('click', mudarOTamanho);
  btnVQV.addEventListener('click', alerta);
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

function gerarCorRandom() {
  const R = Math.trunc(Math.random() * 255);
  const G = Math.trunc(Math.random() * 255);
  const B = Math.trunc(Math.random() * 255);
  const corAleatoria = `rgb(${R}, ${G}, ${B})`;
  return corAleatoria;
}

criaPaleta(['black', gerarCorRandom(), gerarCorRandom(), gerarCorRandom()]);

const blackColor = document.querySelector('.cor1');
blackColor.classList.add('selected');

addEvents();

inputBoardSize.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    mudarOTamanho();
  }
});
