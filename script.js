// const pixelBoard = document.getElementById('pixel-board');

// for (let j = 0; j < 5; j += 1) {
//  for (let i = 0; i < 5; i += 1) {
//    const linesClass = document.createElement('div');
//    linesClass.classList.add('pixel');
//
//    pixelBoard.appendChild(linesClass);
//  }

// }

const colorPalette = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');

function paintSelectedColor(event) {
  const eventSelected = event;
  const color = ['black', 'red', 'blue', 'green'];
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList.contains('selected')) {
      eventSelected.target.style.backgroundColor = color[i];
    }
  }
}
for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', paintSelectedColor);
}

function selectedColor(event) {
  for (let i = 0; i < colorPalette.length; i += 1) {
    if (colorPalette[i].classList.contains('selected')) {
      colorPalette[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
  paintSelectedColor(event);
}
for (let i = 0; i < colorPalette.length; i += 1) {
  colorPalette[i].addEventListener('click', selectedColor);
}
