// Criar função que aumenta o tamanho do quadrado da paleta de cores quando selecionada (utilizar a classe .selected-color do CSS).

// Inicia Scripts:
const getColorPalette = document.getElementsByClassName('color');

function handleColorPaletteSelection(event) {
  const targetEvent = event;
  for (let i = 0; i < getColorPalette.length; i += 1) {
    getColorPalette[i].classList.remove('selected');
  }
  targetEvent.target.classList.add('selected');
}

for (let i = 0; i < getColorPalette.length; i += 1) {
  getColorPalette[i].addEventListener('click', handleColorPaletteSelection);
}
