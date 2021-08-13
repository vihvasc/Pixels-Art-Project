const pixelBd = document.querySelector('#pixel-board');
const blackBloc = document.querySelector('#black');
const redBloc = document.querySelector('#red');
const blueBloc = document.querySelector('#blue');
const greenBloc = document.querySelector('#green');

// Requisito 7
function selectorColor(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Requisito 8
blackBloc.addEventListener('click', selectorColor);
redBloc.addEventListener('click', selectorColor);
blueBloc.addEventListener('click', selectorColor);
greenBloc.addEventListener('click', selectorColor);

function coloredPixel(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectedColor.id;
}

pixelBd.addEventListener('click', coloredPixel);

// Requisito 9
const pixel = document.querySelectorAll('.pixel');
const clearButton = document.querySelector('#clear-board');

function clearBloc() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
} clearButton.addEventListener('click', clearBloc);