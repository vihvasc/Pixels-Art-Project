
const square = document.body.querySelector('#pixel-board');

function squarePixel(numberOfElements) {
  for (let index = 1; index <= numberOfElements; index += 1) {
    const pixels = document.createElement('div');
    pixels.className = 'pixel';

    square.appendChild(pixels);
  }
}
squarePixel(25);

const getColor = document.querySelectorAll('.color');
getColor[0].style.backgroundColor = 'black';
getColor[1].style.backgroundColor = 'purple';
getColor[2].style.backgroundColor = 'grey';
getColor[3].style.backgroundColor = 'pink';

for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', function(event) {
    for (let index = 0; index < getColor.length; index += 1){
      getColor[index].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

const pixels = document.getElementsByClassName('pixel');
console.log(pixels);
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', changeColor);
}

function changeColor(pixel) {
  pixel.target.style.backgroundColor = 'black';
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBoard);

function clearBoard() {
  const clear = document.getElementsByClassName('pixel');
  for (let index = 0; index < clear.length; index += 1) {
    const pixel = clear[index];
    pixel.style.backgroundColor = 'white';
  }
}
