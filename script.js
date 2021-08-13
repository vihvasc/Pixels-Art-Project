function titleH1() {
  const title1H1 = document.createElement('h1');
  title1H1.id = 'title';
  title1H1.innerText = 'Paleta de Cores';
  document.body.appendChild(title1H1);
}
titleH1();

function createDiv() {
  const arrayColor = ['black', 'purple', 'green', 'blue'];
  const divColorFather = document.createElement('div');
  divColorFather.id = 'color-palette';
  document.body.appendChild(divColorFather);
  for (let index = 0; index < 4; index += 1) {
    const divColorSon = document.createElement('div');
    divColorSon.className = 'color';
    divColorSon.style.border = '1px solid black';
    divColorSon.style.backgroundColor = arrayColor[index];
    divColorFather.appendChild(divColorSon);
  }
}
createDiv();

function createBox() {
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
createBox();

const firstChild = document.querySelector('.color');
firstChild.classList.add('selected');
