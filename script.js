function createDivs() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    document.getElementById('pixel-board').appendChild(div).classList.add('pixel');
  }
}
createDivs();

let selectedColor = 'black';
const buttons = document.getElementsByClassName('color');

const buttonRed = document.getElementById('buttonRed');
function selectedInButtonRed() {
  for (let i = 0; i < 4; i += 1) {
    if (buttons[i].classList.contains('selected')) {
      buttons[i].classList.remove('selected');
    }
  }
  buttonRed.classList.add('selected');
  selectedColor = 'red';
}
buttonRed.addEventListener('click', selectedInButtonRed);

const buttonBlue = document.getElementById('buttonBlue');
function selectedInButtonBlue() {
  for (let i = 0; i < 4; i += 1) {
    if (buttons[i].classList.contains('selected')) {
      buttons[i].classList.remove('selected');
    }
  }
  buttonBlue.classList.add('selected');
  selectedColor = 'blue';
}
buttonBlue.addEventListener('click', selectedInButtonBlue);

const buttonGreen = document.getElementById('buttonGreen');
function selectedInButtonGreen() {
  for (let i = 0; i < 4; i += 1) {
    if (buttons[i].classList.contains('selected')) {
      buttons[i].classList.remove('selected');
    }
  }
  buttonGreen.classList.add('selected');
  selectedColor = 'green';
}
buttonGreen.addEventListener('click', selectedInButtonGreen);

const buttonBlack = document.getElementById('buttonBlack');
function selectedInButtonBlack() {
  for (let i = 0; i < 4; i += 1) {
    if (buttons[i].classList.contains('selected')) {
      buttons[i].classList.remove('selected');
    }
  }
  buttonBlack.classList.add('selected');
  selectedColor = 'black';
}
buttonBlack.addEventListener('click', selectedInButtonBlack);

const descolor = document.getElementById('clear-board');
const div = document.getElementsByClassName('pixel');

function cleanerBoard() {
  for (let i = 0; i < 25; i += 1) {
    div[i].style.backgroundColor = 'white';
  }
}
descolor.addEventListener('click', cleanerBoard);

const color = document.getElementById('pixel-board');

function changeColor(event) {
  const selectClick = event.target;
  if (selectClick.tagName === 'DIV') {
    event.target.style.backgroundColor = selectedColor;
  }
}
color.addEventListener('click', changeColor);
