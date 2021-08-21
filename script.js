function criarGrade(tamanho) {
  let grade = document.querySelector('#pixel-board');

  for (let i = 0; i < tamanho; i += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    grade.appendChild(pixel);
    pixel.style.backgroundColor = 'white';
    pixel.addEventListener('click', colorirPixel);
  }
}
criarGrade(25);
let color = document.getElementsByClassName('color');

function selecionaCor(event) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.classList.remove('selected');
  event.target.classList.add('selected');
}
function cleanBoard(event) {
  const botao = document.querySelector('button');
  let pixel = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
function addEvents() {
  for (let i = 0; i < color.length; i += 1) {
    color[i].addEventListener('click', selecionaCor);
  }
  let botao = document.querySelector('button');
  botao.addEventListener('click', cleanBoard);
}

let corSelecionada = document.querySelector('.selected');

function criaPaleta(cores) {
  const paleta = document.getElementById('color-palette');

  for (let i = 0; i < cores.length; i += 1) {
    const cor = document.createElement('div');
    paleta.appendChild(cor);
    cor.className = 'color ' + 'cor' + (i + 1);
    cor.style.backgroundColor = cores[i];
  }
}
criaPaleta(['black', 'red', 'blue', 'green']);

function colorirPixel(event) {
  let pixel = event.target;
  pixel.style.backgroundColor =
    document.querySelector('.selected').style.backgroundColor;
}

let blackColor = document.querySelector('.cor1');
blackColor.classList.add('selected');

addEvents();
