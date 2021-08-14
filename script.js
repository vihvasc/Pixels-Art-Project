window.onload = pixelArts;

function pixelArts() {
  pageTitle();
  createColorPalette();
  createColors();
  changeColor();
  pixelFrame();
  internalFrame();
  selectColor();
  selectFramePixel();
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
  let colorPalette = document.createElement('section');
  colorPalette.id = 'color-palette';
  document.body.appendChild(colorPalette);
}
function createColors() {
  let colors = ['brown', 'orange', 'green', 'red']
  for(color of colors) {
  let liColors = document.createElement('div');
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
  firstColor.classList.add('selected');
}
// requisito 4
function pixelFrame() {
  framePrincipal = document.createElement('section');
  framePrincipal.id = 'pixel-board';
  document.body.appendChild(framePrincipal);
}
function internalFrame() {
  let frames = ['F1', 'F2', 'F3', 'F4', 'F5'];
  let framePrincipal = document.getElementById('pixel-board');
  for(let square of frames) {
    for(square of frames) {
      let liInternalFrame = document.createElement('div');
      liInternalFrame.className = 'pixel';
      framePrincipal.appendChild(liInternalFrame);
    }
  }
}
// requisito 5
// feito no CSS 

// requisito 6
// feito na linha 38

// requisito 7
function selectColor() {
  let colorSelected = document.getElementsByClassName('color');
  for (let color = 0; color < colorSelected.length; color += 1) {
    colorSelected[color].addEventListener('click', changeSelectedColor);
  }
}
function changeSelectedColor(event) {
  let selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  event.target.classList.add('selected');
}
// requisito 8
function selectFramePixel() {
  let pixelBoardSelected = document.getElementById('pixel-board');
  pixelBoardSelected.addEventListener('click', paintFramePixel);
}
function paintFramePixel(event) {
  let color = document.querySelector('.selected');
  console.log(color);
  event.target.style.backgroundColor = color.style.backgroundColor;
}
