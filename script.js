// const pixelBoard = document.getElementById('pixel-board');

// for (let j = 0; j < 5; j += 1) {
//  for (let i = 0; i < 5; i += 1) {
//    const linesClass = document.createElement('div');
//    linesClass.classList.add('pixel');
//
//    pixelBoard.appendChild(linesClass);
//  }

// }

const ColorPalette = document.getElementsByClassName('color');

function selectedColor(event) {
  for (let i = 0; i < ColorPalette.length; i += 1) {
    if (ColorPalette[i].classList.contains('selected')) {
      ColorPalette[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
for (let i = 0; i < ColorPalette.length; i += 1) {
  ColorPalette[i].addEventListener('click', selectedColor);
}
