const selectId = document.querySelector('#pixel-board');
const lineBase = 5;
const colunmBase = 5;

function crateSquare() {
  for (let index = 0; index < lineBase; index += 1) {
    for (let main = 0; main < colunmBase; main += 1) {
      const creatColunm = document.createElement('div');
      creatColunm.classList.add('pixel');
      selectId.appendChild(creatColunm);
    }
  }
}

crateSquare();

function getColorButton() {
  const selectColor = document.querySelectorAll('.color');
  selectColor[0].classList.add('selected');

  for (const color of selectColor) {
    color.addEventListener('click', (event) => {
      const selectColor = document.querySelector('.selected');
      selectColor.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}

getColorButton();

function colorTransfer() {
  const selectDiv = document.querySelectorAll('.pixel');
  for (const pixel of selectDiv) {
    pixel.addEventListener('click', () => {
      const sele = window.getComputedStyle(document.querySelector('.selected'));
      const changecolor = sele.getPropertyValue('background-color');
      pixel.style.backgroundColor = changecolor;
    });
  }
}

colorTransfer();

function buttonClear() {
  const buttonPosition = document.querySelector('#clear-board');
  const selectDiv = document.querySelectorAll('.pixel');
  buttonPosition.addEventListener('click', () => {
    for (const butclear of selectDiv) {
      const getColor = window.getComputedStyle(butclear);
      const diColor = getColor.getPropertyValue('background-color');
      if (butclear.style.backgroundColor === diColor) { butclear.style.backgroundColor = 'white'; }
    }
  });
}

buttonClear();
