const containerOfPalettes = document.getElementById('color-palette');
const palettes = Array.from(document.getElementsByClassName('color'));
const pixelBoard = document.getElementById('pixel-board');
let qntOfPixels = 5;
let initialColorSelected = palettes[0];

function generateRandomNumber() {
  // Valores entre 0 e 254, desconderando o 255/branco
  const randomNumber = Math.floor(Math.random() * 255);
  return randomNumber;
}

function generateRandomColors() {
  const red = generateRandomNumber();
  const green = generateRandomNumber();
  const blue = generateRandomNumber();
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb;
}

function createPalettes() {
  for (let index = 1; index < palettes.length; index += 1) {
    palettes[index].style.backgroundColor = generateRandomColors();
  }
}

function defineSizeOfPixelBoard(pixels) {
  // 42 é o tamanho do pixel considerando as bordas horizontais ou verticais
  const widthAndHeight = 42 * pixels;
  pixelBoard.style.width = `${widthAndHeight}px`;
  pixelBoard.style.height = `${widthAndHeight}px`;
}

function createPixels(num) {
  // num é elevado ao quadrado para ter a mesma quantidade de altura e largura
  const pixelCount = num ** 2;
  for (let index = 0; index < pixelCount; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    div.style.width = '40px';
    div.style.height = '40px';
    div.style.border = '1px solid black';
    div.style.backgroundColor = 'white';
    pixelBoard.appendChild(div);
  }
}

function clickForSelectColor() {
  palettes.forEach((color) => {
    color.addEventListener('click', (event) => {
      initialColorSelected.classList.remove('selected');
      event.target.classList.add('selected');
      initialColorSelected = event.target;
    });
  });
}

createPalettes();
defineSizeOfPixelBoard(qntOfPixels);
createPixels(qntOfPixels);
clickForSelectColor();
