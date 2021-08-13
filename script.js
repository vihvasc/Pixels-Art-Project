window.onload = pixelArts;

function pixelArts() {
  pageTitle();
  createColorPalette();
  createColors();
}
// requisito 1
function pageTitle() {
  let titleH1 = document.createElement('h1');
  titleH1.id = 'title';
  titleH1.innerText = 'Paleta de Cores';
  document.body.appendChild(titleH1);
}
// requisito 2
function createColorPalette() {
  let colorPalette = document.createElement('ul');
  colorPalette.id = 'color-palette';
  document.body.appendChild(colorPalette);
}
function createColors() {
  let colors = ['green', 'orange', 'brown', 'red']
  for(color of colors) {
  let liColors = document.createElement('li');
  let ulColorPalette = document.getElementById('color-palette');
  ulColorPalette.appendChild(liColors);
  liColors.className = 'color';
  liColors.style.backgroundColor = color;
  }
}