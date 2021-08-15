const id = ['title', 'color-palette', 'clear-board', 'board-size', 'generate-board', 'pixel-board'];
const configHeader = {
  elementType: 'body',
  elementNum: 0,
  newElementType: 'header',
  newElementId: '',
  newElementClass: '',
  newElementText: '',
};
const configH1 = {
  elementType: 'header',
  elementNum: 0,
  newElementType: 'h1',
  newElementId: id[0],
  newElementClass: '',
  newElementText: 'Paleta de Cores',
};
const configColorPalette = {
  elementType: 'body',
  elementNum: 0,
  newElementType: 'section',
  newElementId: id[1],
  newElementClass: '',
  newElementText: '',
};
const configSectionButtons = {
  elementType: 'body',
  elementNum: 0,
  newElementType: 'section',
  newElementId: '',
  newElementClass: '',
  newElementText: '',
};
const configDivClear = {
  elementType: 'section',
  elementNum: 1,
  newElementType: 'div',
  newElementId: '',
  newElementClass: '',
  newElementText: '',
};
const configButtonClear = {
  elementType: 'div',
  elementNum: 5,
  newElementType: 'button',
  newElementId: id[2],
  newElementClass: '',
  newElementText: 'Limpar',
};
const configDivSize = {
  elementType: 'section',
  elementNum: 1,
  newElementType: 'div',
  newElementId: '',
  newElementClass: '',
  newElementText: '',
};
const configInputSize = {
  elementType: 'div',
  elementNum: 6,
  newElementType: 'input',
  newElementId: id[3],
  newElementClass: '',
  newElementText: '',
};
const configButtonSize = {
  elementType: 'div',
  elementNum: 6,
  newElementType: 'button',
  newElementId: id[4],
  newElementClass: '',
  newElementText: 'VQV',
};
const configPixelBoard = {
  elementType: 'body',
  elementNum: 0,
  newElementType: 'section',
  newElementId: id[5],
  newElementClass: '',
  newElementText: '',
};

function createElement(object) {
  const myParent = document.getElementsByTagName(object.elementType)[object.elementNum];
  const myNewElement = document.createElement(object.newElementType);
  if (object.newElementId.length > 0) {
    myNewElement.id = object.newElementId;
  }
  if (object.newElementClass.length > 0) {
    myNewElement.className = object.newElementClass;
  }
  if (object.newElementText.length > 0) {
    myNewElement.innerText = object.newElementText;
  }
  myParent.appendChild(myNewElement);
}

function createCustomElements(parentId, newElementClass, numElements) {
  const myParent = document.getElementById(parentId);
  const myDiv = document.createElement('div');
  for (let index = 0; index < numElements; index += 1) {
    const myDivPixel = document.createElement('div');
    myDivPixel.className = newElementClass;
    myDiv.appendChild(myDivPixel);
  }
  myParent.appendChild(myDiv);
}

function createPageStructure() {
  createElement(configHeader);
  createElement(configH1);
  createElement(configColorPalette);
  createCustomElements(id[1], 'color', 4);
  createElement(configSectionButtons);
  createElement(configDivClear);
  createElement(configButtonClear);
  createElement(configDivSize);
  createElement(configInputSize);
  createElement(configButtonSize);
  createElement(configPixelBoard);
  for (let index = 0; index < 5; index += 1) {
    createCustomElements(id[5], 'pixel', 5);
  }
}

createPageStructure();

function randomColor() {
  let color = 'rgb(';
  for (let index = 0; index < 3; index += 1) {
    color += Math.floor(Math.random() * 255).toString(10);
    if (index < 2) {
      color += ', ';
    }
  }
  color += ')';
  return color;
}

function startColorPalette(idValue) {
  const parent = document.getElementById(idValue);
  const myDiv = parent.children[0];
  myDiv.childNodes[0].style.backgroundColor = 'black';
  myDiv.childNodes[1].style.backgroundColor = randomColor();
  myDiv.childNodes[2].style.backgroundColor = randomColor();
  myDiv.childNodes[3].style.backgroundColor = randomColor();
  myDiv.childNodes[0].classList.add('selected');
}

startColorPalette(id[1]);

function selectColorInPalette(event) {
  if (event.target.className === 'color') {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function selectPalette(idValue) {
  const parent = document.getElementById(idValue).children[0];
  parent.addEventListener('click', selectColorInPalette);
}

selectPalette(id[1]);

function paintSquareInBoard(event) {
  const square = event;
  if (event.target.className === 'pixel') {
    const selectedColor = document.querySelector('.selected');
    square.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}

function paintSquares(idValue) {
  const parent = document.getElementById(idValue);
  parent.addEventListener('click', paintSquareInBoard);
}

paintSquares(id[5]);

function cleanPixelBoard() {
  const parent = document.getElementById(id[5]).children;
  for (let index = 0; index < parent.length; index += 1) {
    for (let index2 = 0; index2 < parent[index].children.length; index2 += 1) {
      parent[index].children[index2].style.backgroundColor = 'white';
    }
  }
}

function startClearButton(idValue) {
  const button = document.getElementById(idValue);
  button.addEventListener('click', cleanPixelBoard);
}

startClearButton(id[2]);

function removePixelsBoard() {
  const parent = document.getElementById(id[5]);
  const sizeOfParent = parent.childElementCount;
  for (let index = 0; index < sizeOfParent; index += 1) {
    parent.removeChild(parent.firstChild);
  }
}

function createPixelsBoard(numPixels) {
  let newNumPixels = numPixels;
  if (numPixels > 50) {
    newNumPixels = 50;
  }
  if (numPixels < 5) {
    newNumPixels = 5;
  }
  for (let index = 0; index < newNumPixels; index += 1) {
    createCustomElements('pixel-board', 'pixel', newNumPixels);
  }
}

function newPixelsBoard() {
  const input = document.getElementById(id[3]);
  if (input.value !== '') {
    removePixelsBoard();
    createPixelsBoard(parseInt(input.value, 10));
  } else {
    window.alert('Board inválido!');
  }
}

function startNewPixelBoard() {
  const button = document.getElementById(id[4]);
  button.addEventListener('click', newPixelsBoard);
}

startNewPixelBoard();

function inputPixels() {
  const input = document.getElementById(id[3]);
  input.setAttribute('min', '1');
  input.setAttribute('type', 'number');
}

inputPixels();
