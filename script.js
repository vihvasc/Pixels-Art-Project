window.onload = pixelArts;

function pixelArts() {
  pageTitle();
  createColorPalette();
  createColors();
  changeColor();
  pixelFrame();
  internalFrame();
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
  let colors = ['brown', 'orange', 'green', 'red']
  for(color of colors) {
  let liColors = document.createElement('li');
  let ulColorPalette = document.getElementById('color-palette');
  ulColorPalette.appendChild(liColors);
  liColors.className = 'color';
  liColors.style.backgroundColor = color;
  }
}
// requisito 3
function changeColor() {
  let firstColor = document.getElementById('color-palette').firstChild;
  firstColor.style.backgroundColor = 'black';
  firstColor.classList = 'color selected';
}
// requisito 4
function pixelFrame() {
  framePrincipal = document.createElement('ul');
  framePrincipal.id = 'pixel-board';
  document.body.appendChild(framePrincipal);
}
function internalFrame() {
  let frames = ['F1', 'F2', 'F3', 'F4', 'F5'];
  let framePrincipal = document.getElementById('pixel-board');
  for(let square of frames) {
    for(square of frames) {
      let liInternalFrame = document.createElement('li');
      liInternalFrame.className = 'pixel';
      framePrincipal.appendChild(liInternalFrame);
      console.log(square);
    }
  }
}
// requisito 5
// feito no CSS 

// requisito 6
