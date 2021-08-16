/*Variaveis */
const clearBoard = document.getElementById('clear-board');
const pixelBoard = document.querySelector('#pixel-board');
const allPixels = document.getElementsByClassName('pixel');
const sectionbuttons = document.getElementById('extras');
const inputBoard = document.getElementById('board-size');
const buttonValue = document.getElementById('generate-board');

/* Cores aleatórios */
const secondColor = document.getElementById('secondColor');
const thirdColor = document.getElementById('thirdColor');
const firstColor = document.getElementById('firstColor');
const black = document.getElementById('blackColor');

function randomColors() {
  const randomColors = Math.floor(Math.random() * 255);
  return randomColors;
}
firstColor.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
secondColor.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
thirdColor.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
black.style.backgroundColor = 'black';

/*botão VQV*/
buttonValue.addEventListener('click', function () {
  if (!inputBoard.value) {
    window.alert('Board inválido!');
  }
  if (inputBoard.value >= 5) {
    countValue = 5;
  }
  if (countValue < 50) {
    countValue = 50;
  }
});

/*Criando o board com 25 pixels*/

let amount = 25;
for (let i = 0; i < amount; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixelBoard.appendChild(pixel);
}

for (let index = 0; index < allPixels.length; index += 1) {
  allPixels[index].addEventListener('click', changeColor);
}

/*Página sempre inicia com o preto selecionado*/
window.onload = function () {
  black.className = 'color' + ' selected';
};

/*Mudando a classe de cada cor */
firstColor.addEventListener('click', function () {
  firstColor.className = 'color' + ' selected';
  secondColor.className = 'color';
  thirdColor.className = 'color';
  black.className = 'color';
});

secondColor.addEventListener('click', function () {
  firstColor.className = 'color';
  secondColor.className = 'color' + ' selected';
  thirdColor.className = 'color';
  black.className = 'color';
});

thirdColor.addEventListener('click', function () {
  firstColor.className = 'color';
  thirdColor.className = 'color' + ' selected';
  secondColor.className = 'color';
  black.className = 'color';
});

black.addEventListener('click', function () {
  black.className = 'color' + ' selected';
  firstColor.className = 'color';
  secondColor.className = 'color';
  thirdColor.className = 'color';
});

/*Cor clicada é a cor do pixel*/
function changeColor(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
}

/*Botão para deixar o board branco*/
clearBoard.addEventListener('click', clearingBoard);
function clearingBoard() {
  for (pixel of allPixels) {
    pixel.style.backgroundColor = 'white';
  }
}
