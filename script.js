function createH1() {
  const tagH1 = document.createElement('h1');
  tagH1.id = 'title';
  tagH1.innerText = 'Paleta de Cores';
  document.body.appendChild(tagH1);
}

createH1();

function colorRandom() {
  const numberRandom = Math.floor(Math.random() * 255) + 1;
  return numberRandom;
}

function createDiv() {
  const arrayColor = ['black'];
  for (let index = 0; index < 3; index += 1) {
    arrayColor.push(`rgb(${colorRandom()}, ${colorRandom()}, ${colorRandom()})`);
  }
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

let classSelected = document.querySelector('.color');
classSelected.classList.add('selected');

const allDivs = document.querySelectorAll('.color');

function addClass() {
  for (let index = 0; index < allDivs.length; index += 1) {
    allDivs[index].addEventListener('click', function (event) {
      classSelected.classList.remove('selected');
      event.target.classList.add('selected');
      classSelected = event.target;
    });
  }
}
addClass();

const boxPixel = document.getElementsByClassName('pixel');

function colorPixel() {
  for (let index = 0; index < boxPixel.length; index += 1) {
    boxPixel[index].addEventListener('click', function (event) {
      const colorSelected = classSelected.style.backgroundColor;
      event.target.style.backgroundColor = colorSelected;
    });
  }
}
colorPixel();

function createButton() {
  const button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  document.body.insertBefore(button, document.querySelector('#pixel-board'));

  button.addEventListener('click', function () {
    for (let index = 0; index < boxPixel.length; index += 1) {
      boxPixel[index].style.backgroundColor = 'white';
    }
  });
}

createButton();
