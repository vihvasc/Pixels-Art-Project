let firstColor = document.getElementById('color-palette').children[0];
let pixelBoard = document.getElementById('pixel-board');

function handleBlackFirst(element) {
  element.style.background = 'black';
}
handleBlackFirst(firstColor);
