// variáveis globais
const colorPalette = document.getElementById('color-palette');
const selectedClass = document.getElementsByClassName('selected');

function removeSelect(color) {
  color.classList.remove('selected');
}

function selectColor(color) {
  color.addEventListener('click', () => {
    for (let i = 0; i < selectedClass.length; i += 1) {
      removeSelect(selectedClass[i]);
    }
    color.classList.add('selected');
  });
}

window.onload = () => {
  if (selectedClass.length === 0) {
    colorPalette.children[0].classList.add('selected');
  }

  for (let i = 0; i < colorPalette.children.length; i += 1) {
    selectColor(colorPalette.children[i]);
  }
};
