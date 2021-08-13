let square = document.body.querySelector('#pixel-board');

function squarePixel(numberOfElements) {
  for (let index = 1; index <= numberOfElements; index +=1) {
    let pixels = document.createElement('li');
    pixels.className = 'pixel';

    square.appendChild(pixels);
  }
}
squarePixel(25);
