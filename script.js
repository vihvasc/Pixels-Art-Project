const containerOfPalettes = document.getElementById('color-palette');
const palettes = document.getElementsByClassName('color');

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

createPalettes();
