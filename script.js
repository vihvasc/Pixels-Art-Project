const black = document.getElementById('black');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const purple = document.getElementById('purple');
const colors = document.querySelectorAll('.color');
const clearButton = document.getElementById('clear-board');
const pixels = document.querySelectorAll('.pixel');

function blackSelected() {
  black.classList = 'color selected';
}

blackSelected();

function addSelected(event) {
  const corSelecionada = event.target;

  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  corSelecionada.classList.add('selected');
}

black.addEventListener('click', addSelected);
blue.addEventListener('click', addSelected);
red.addEventListener('click', addSelected);
purple.addEventListener('click', addSelected);

function paiting(event) {
  const pixelSelecionado = event.target;
  const colorSelec = document.querySelectorAll('.selected');
  pixelSelecionado.style.backgroundColor = colorSelec[0].id;
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', paiting);
}

function clearAll() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearAll);
