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

// Requisito 4
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
