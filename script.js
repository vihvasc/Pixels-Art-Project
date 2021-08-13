function createH1() {
  const tagH1 = document.createElement('h1');
  tagH1.id = 'title';
  tagH1.innerText = 'Paleta de Cores';
  document.body.appendChild(tagH1);
}

createH1();

function createDiv() {
  const arrayColor = ['black', 'aqua', 'green', 'purple'];
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
  const classSelected = document.querySelector('.color');
  classSelected.classList.add('selected');
}
createDiv();

function createPixelFrame() {
  const divFather = document.createElement('div');
  divFather.id = 'pixel-board';
  document.body.appendChild(divFather);
  for (let index = 0; index < 25; index += 1) {
    const divSon = document.createElement('div');
    divSon.className = 'pixel';
    divSon.style.backgroundColor = 'white';
    divFather.appendChild(divSon);
  }
}
createPixelFrame();
