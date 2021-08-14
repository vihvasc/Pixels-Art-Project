// Requisito 1

function createTitle() {
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  document.body.appendChild(h1);
}

createTitle();

// Requisito 2 e 3
function createPalette() {
  const colors = ['black', 'lightblue', 'lightgreen', 'pink'];
  const divFather = document.createElement('div');
  divFather.id = 'color-palette';
  document.body.appendChild(divFather);
  for (let index = 0; index < 4; index += 1) {
    const divChild = document.createElement('div');
    divChild.className = 'color';
    divChild.style.backgroundColor = colors[index];
    divFather.appendChild(divChild);
  }
}

createPalette();

// Requisito 4 e 5
function createFrame() {
  const divFather = document.createElement('div');
  divFather.id = 'pixel-board';
  document.body.appendChild(divFather);
  for (let index = 0; index < 25; index += 1) {
    const divChild = document.createElement('div');
    divChild.className = 'pixel';
    divChild.style.backgroundColor = 'white';
    divFather.appendChild(divChild);
  }
}

createFrame();

// Requisito 6
let colorSelected = document.querySelector('.color');
colorSelected.classList.add('selected');

// Requisito 7
function selectColor() {
  const divsPalette = document.querySelectorAll('.color');
  for (let index = 0; index < divsPalette.length; index += 1) {
    divsPalette[index].addEventListener('click', (event) => {
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
      colorSelected = event.target;
    });
  }
}

selectColor();

// Requisito 8
function pixelColor() {
  const pixelBox = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', (event) => {
      const colorPixelSelected = colorSelected.style.backgroundColor;
      event.target.style.backgroundColor = colorPixelSelected;
    });
  }
}

pixelColor();
