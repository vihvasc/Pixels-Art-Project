window.onload = function comeca() {
  const pixels = document.getElementsByClassName('pixel');
  function adicionaCor(evento) {
    const cor = sessionStorage.getItem('cor');
    const pixel = evento.target;
    pixel.style.backgroundColor = cor;
  }
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', adicionaCor);
    pixels[index].style.backgroundColor = 'white';
  }
  sessionStorage.setItem('cor', '#000');
  const primeiro = document.getElementsByClassName('color')[0];
  primeiro.className = 'color selected';
};
function selecionaCor(evento) {
  const selecionado = evento.target;
  const selected = document.getElementsByClassName('selected')[0];
  selected.className = 'color';
  const cor = evento.target.style.backgroundColor;
  selecionado.className = 'color selected';
  sessionStorage.setItem('cor', cor);
}
const primeiro = document.getElementsByClassName('color')[0];
const segundo = document.getElementsByClassName('color')[1];
const terceiro = document.getElementsByClassName('color')[2];
const quarto = document.getElementsByClassName('color')[3];
primeiro.style.backgroundColor = '#000';
segundo.style.backgroundColor = '#6D597A';
terceiro.style.backgroundColor = '#67697C';
quarto.style.backgroundColor = '#C1C3C1';
primeiro.addEventListener('click', selecionaCor);
segundo.addEventListener('click', selecionaCor);
terceiro.addEventListener('click', selecionaCor);
quarto.addEventListener('click', selecionaCor);
function adicionaCor(evento) {
  const cor = sessionStorage.getItem('cor');
  const pixel = evento.target;
  pixel.style.backgroundColor = cor;
}
function limpaCor() {
  const pixels = document.getElementsByClassName('pixel');
  const cor = 'white';
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = cor;
  }
}
document.getElementById("clear-board").addEventListener('click', limpaCor);
function apagaLinhas() {
  let N = document.querySelector("#board-size").value;
  if (N<5) {
    N = 5
  } else if (N>50) {
    N = 50
  }
  let pixelBoard = document.querySelector("#pixel-board")
  let filho = pixelBoard.children
  let quantasLinhas = pixelBoard.children.length -1
  for (let index = quantasLinhas; index >= 0; index = index - 1) {
    pixelBoard.removeChild(filho[index]);
  }
}
function criaLinha() {
  let N = document.querySelector("#board-size").value;
  if (N<5) {
    N = 5
  } else if (N>50) {
    N = 50
  }
  apagaLinhas();
  pixelBoard = document.querySelector("#pixel-board");
  for (let index = 0; index < N; index += 1) {
    let linha = document.createElement("section");
    linha.className = "line";
    pixelBoard.appendChild(linha);
  }

}
function criaPixels() {
  let N = document.querySelector("#board-size").value;
  if (N === '') {
    window.alert("Board inválido!");
  }
  if (N<5) {
    N = 5;
  } else if (N>50) {
    N = 50;
  }
  central()
  criaLinha()
  let linhas = document.getElementsByClassName("line")
  for (let index = 0 ; index<linhas.length ; index += 1) {
    let linha = linhas[index];
    linhas[0].style.marginTop = '45px';
    for (let index = 0; index<N; index += 1) {
      let div = document.createElement("div");
      div.className = "pixel";
      div.style.backgroundColor = "white";
      div.addEventListener("click", adicionaCor);
      linha.appendChild(div);
    }
  }
}
let vqv = document.querySelector("#generate-board");
vqv.addEventListener("click", criaPixels);
let pixelsBoard = document.querySelector("#pixel-board");
function central() {
  let N = document.querySelector("#board-size").value;
  if (N <= 8) {
    pixelsBoard.style.left = '33%'
  } else if (N <= 16 || N >= 9) {
    pixelsBoard.style.left = '20%'
  } else if (N > 16 || N <= 27) {
    pixelsBoard.style.left = '-20%'
  } else if (N > 28) {
    pixelsBoard.style.left = '-10%'
  }
}
pixelsBoard.style.left = '33%'