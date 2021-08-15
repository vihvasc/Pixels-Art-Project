function createDivs() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    document.getElementById('pixel-board').appendChild(div).classList.add('pixel');
  }
}
createDivs();

const color = document.querySelectorAll('.pixel')[0];
color.addEventListener('click', changeColor);

function changeColor() {
  color.style.backgroundColor = 'black';
}

// Quando eu clicar, ele vai procurar pelo quadrado que tem a classe selected
// vai achar qual tiver no momento e retirar

const buttons = document.getElementsByClassName('color');

const buttonRed = document.getElementById('buttonRed');
function selectedInButtonRed() {
  for (let i = 0; i < 4; i += 1) {
    if (buttons[i].classList.contains('selected')) {
      buttons[i].classList.remove('selected');
    }
  }
  buttonRed.classList.add('selected');
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
}
buttonBlack.addEventListener('click', selectedInButtonBlack);

/* let selected = document.getElementsByClassName('color');
selected.addEventListener('click', searchSelected);

function searchSelected() {
  for (let i = 0; i < 5; i += 1) {
    if (selected[i].contains('selected')) {
      selected[i].remove('selected');
    }
  }
}
*/