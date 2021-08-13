// Requisito 1

function createTitle() {
  const h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  document.body.appendChild(h1);
}

createTitle();

// Requisito 2
function createPalette() {
  const colors = ['black', 'lightblue', 'lightgreen', 'pink'];
  const divFather = document.createElement('div');
  divFather.id = 'color-palette';
  document.body.appendChild(divFather);
  for (let index = 0; index < 4; index += 1) {
    const divChild = document.createElement('div');
    divChild.className = 'color';
    divChild.style.backgroundColor = colors[index];
    divChild.style.border = '1px solid black';
    divFather.appendChild(divChild);
  }
}

createPalette();
