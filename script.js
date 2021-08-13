const square = document.body.querySelector('#pixel-board');

function squarePixel(numberOfElements) {
  for (let index = 1; index <= numberOfElements; index +=1) {
    const pixels = document.createElement('li');
    pixels.className = 'pixel';

    square.appendChild(pixels);
  }
}
squarePixel(25);

/* selectColor = document.body.getElementsByClassName('color');
selectColor.addEvent

function select() {
  if 
} */

const button = document.body.querySelector('#clear-board');
button.addEventListener('click', clearBoard);

function clearBoard() {
  const pixels = document.body.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    const pixel = pixels[index];
    pixel.style.backgroundColor = 'white';
  }
}
