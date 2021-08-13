const pixelBd = document.querySelector('#pixel-board');
const blackBloc = document.querySelector('#black');
const redBloc = document.querySelector('#red');
const blueBloc = document.querySelector('#blue');
const greenBloc = document.querySelector('#green');

function selectorColor(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

blackBloc.addEventListener('click', selectorColor);
redBloc.addEventListener('click', selectorColor);
blueBloc.addEventListener('click', selectorColor);
greenBloc.addEventListener('click', selectorColor);

function coloredPixel(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = selectedColor.id;
}

pixelBd.addEventListener('click', coloredPixel);
