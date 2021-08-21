/* eslint-disable no-use-before-define */
const primeiraCor = document.querySelector('.primeira-cor');
const segundaCor = document.querySelector('.segunda-cor');
const terceiraCor = document.querySelector('.terceira-cor');
const quartaCor = document.querySelector('.quarta-cor');

// criar cor com numero RGB
function coresAleatorias() {
  primeiraCor.style.backgroundColor = `rgb(${corAleatoria(0)}, ${corAleatoria(0)}, ${corAleatoria(0)})`;
  segundaCor.style.backgroundColor = `rgb(${corAleatoria(255)}, ${corAleatoria(255)}, ${corAleatoria(255)})`;
  terceiraCor.style.backgroundColor = `rgb(${corAleatoria(255)}, ${corAleatoria(255)}, ${corAleatoria(255)})`;
  quartaCor.style.backgroundColor = `rgb(${corAleatoria(255)}, ${corAleatoria(255)}, ${corAleatoria(255)})`;
}
// gerar numeros aleartorios
function corAleatoria(number) {
  return Math.floor(Math.random() * number);
}

window.onload = coresAleatorias;

// função para definir tamanho do quadrado
function criandoLinhasColuna() {
  const input = document.getElementById('board-size');
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < input.value; index++) {
    const tr = document.createElement('div');
    tr.className = 'tr';
    pixelBoard.appendChild(tr);

    for (let count = 0; count < input.value; count++) {
      const td = document.createElement('div');
      td.className = 'pixel td';
      tr.appendChild(td);
    }
  }
}
// funçao condicoes de limite do tamanho da tabela
function dimencionarTabela() {
  deletePixels();

  const input = document.getElementById('board-size');

  if (input.value === '') {
    alert('Board inválido!');
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }

  criandoLinhasColuna();
}

// acionar o botao e criar tabela por meio das funcoes dimencionarTabela e criandoLinhasColuna
const gerarTabela = document.getElementById('generate-board');

gerarTabela.addEventListener('click', dimencionarTabela);

// funçao remove o quadro de pixel inicial
function deletePixels() {
  const pixelBoard = document.getElementById('pixel-board');

  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

// função para alterar a cor de seleçao da paleta paleta

const listaDeCor = document.querySelectorAll('.color');

function changeSelected(event) {
  const selecionarCor = document.querySelector('.selected');

  selecionarCor.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < listaDeCor.length; index += 1) {
  listaDeCor[index].addEventListener('click', changeSelected);
}

// função para colorir pixels de acordo com a cor da paleta escolhida
const selecionaPixel = document.querySelectorAll('.pixel');

function colorir(event) {
  const selecionarCor = document.querySelector('.selected');

  event.target.style.backgroundColor = selecionarCor.style.backgroundColor;
}

for (let index = 0; index < selecionaPixel.length; index += 1) {
  selecionaPixel[index].addEventListener('click', colorir);
}

// funçao botao limpar o quadro de pixel faxendo fcar branco de novo
const botaoLimpar = document.getElementById('clear-board');

botaoLimpar.addEventListener('click', () => {
  for (let list = 0; list < selecionaPixel.length; list += 1) {
    selecionaPixel[list].style.backgroundColor = 'white';
  }
})