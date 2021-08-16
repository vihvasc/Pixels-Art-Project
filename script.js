/*Variaveis */
const pixelBoard = document.querySelector('#pixel-board');
let amount = 25;
const pickingDarkPink = document.getElementById('dark-pink');
const pickingBrightPink = document.getElementById('bright-pink');
const pickingDarkBlue = document.getElementById('dark-blue');
const pickingDarkBlack = document.getElementById('dark-black');
const clearBoard = document.getElementById('clear-board');
const allPixels = document.getElementsByClassName('pixel');
const buttonValue = document.getElementById('generate-board');
const count = document.getElementById('board-size');
const countValue = count.value;
const valueBoard = countValue * countValue;

/* Cores aleatórios */
function randomColors() {
  const randomColors = Math.floor(Math.random() * 255);
  return randomColors;
}

pickingBrightPink.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
pickingDarkPink.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
pickingDarkBlue.style.backgroundColor = `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`;
pickingDarkBlack.style.backgroundColor = 'black';

/*botão VQV*/
buttonValue.addEventListener('click', function () {
  if (countValue === 0) {
    alert('Board inválido!');
    return;
  }
  if (countValue < 5) {
    countValue = 5;
  }
  if (countValue > 50) {
    countValue = 50;
  }
});

/*Criando o board com 25 pixels*/
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
  let black = document.getElementById('dark-black');
  black.className = 'color' + ' selected';
};

/*Mudando a classe de cada cor */
pickingDarkPink.addEventListener('click', function () {
  pickingDarkPink.className = 'color' + ' selected';
  pickingBrightPink.className = 'color';
  pickingDarkBlue.className = 'color';
  pickingDarkBlack.className = 'color';
});

pickingBrightPink.addEventListener('click', function () {
  pickingBrightPink.className = 'color' + ' selected';
  pickingDarkPink.className = 'color';
  pickingDarkBlue.className = 'color';
  pickingDarkBlack.className = 'color';
});

pickingDarkBlue.addEventListener('click', function () {
  pickingDarkBlue.className = 'color' + ' selected';
  pickingBrightPink.className = 'color';
  pickingDarkPink.className = 'color';
  pickingDarkBlack.className = 'color';
});

pickingDarkBlack.addEventListener('click', function () {
  pickingDarkBlack.className = 'color' + ' selected';
  pickingBrightPink.className = 'color';
  pickingDarkPink.className = 'color';
  pickingDarkBlue.className = 'color';
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
