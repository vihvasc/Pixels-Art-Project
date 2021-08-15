function createH1() {
  const tagH1 = document.createElement('h1');
  tagH1.id = 'title';
  tagH1.innerText = 'Paleta de Cores';
  document.body.appendChild(tagH1);
}

createH1();

function colorRandom() {
  const numberRandom = Math.floor(Math.random() * 255);
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

let numberInput = 5;

function createPixelFrame() {
  const divFather = document.createElement('div');
  let widhtAndHeight = 42 * numberInput;
  divFather.id = 'pixel-board';
  divFather.style.width = `${widhtAndHeight}px`;
  divFather.style.height = `${widhtAndHeight}px`;
  document.body.appendChild(divFather);
  for (let index = 0; index < (numberInput ** 2); index += 1) {
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

function createButtonClear() {
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

createButtonClear();

// requisito 10 / entre 5 e 10

const div = document.createElement('div');
div.id = 'button-input';
document.body.insertBefore(div, document.querySelector('#pixel-board'));

let input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
div.appendChild(input);

const button = document.createElement('button');
button.id = 'generate-board';
button.innerText = 'VQV';
div.appendChild(button);

function setInput() {
  button.addEventListener('click', function () {
    let numberDoInput = input.value;
    if (numberDoInput === '') {
      alert("Board inválido!");
      return;
    }
    if (numberDoInput < 5) {
      numberDoInput = 5
    }
    if (numberDoInput > 50) {
      numberDoInput = 50;
    }
    numberInput = numberDoInput;
    document.body.removeChild(document.querySelector('#pixel-board'));
    createPixelFrame()
    colorPixel()
  });
}

setInput();
