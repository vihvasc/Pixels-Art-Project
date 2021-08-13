const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');
const pixelBoard = document.getElementById('pixel-board');
const allPixel = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'green';
thirdColor.style.backgroundColor = 'orange';
fourthColor.style.backgroundColor = 'purple';

firstColor.addEventListener('click', addSelectedClass);
secondColor.addEventListener('click', addSelectedClass);
thirdColor.addEventListener('click', addSelectedClass);
fourthColor.addEventListener('click', addSelectedClass);
pixelBoard.addEventListener('click', changeColor);
clearButton.addEventListener('click', clearColor);

function addSelectedClass(event) {
  const checkSelected = document.querySelector('.selected');
  checkSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

function changeColor(event) {
  const ColorSelected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = ColorSelected;
}

function clearColor() {
  for (let index = 0; index < allPixel.length; index += 1) {
    allPixel[index].style.backgroundColor = 'white';
  }
}
