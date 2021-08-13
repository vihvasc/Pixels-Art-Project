// Color Pallet

function randomNumberGenerator(limit) {
  const number = (Math.random() * limit);
  const roundNumber = Math.round(number);
  return roundNumber;
}

function createColor() {
  const number1 = randomNumberGenerator(255);
  const number2 = randomNumberGenerator(255);
  const number3 = randomNumberGenerator(255);
  return `rgb(${number1}, ${number2}, ${number3})`;
}

function createColorsList(numberOfColors) {
  const colorsList = ['black'];
  for (let index = 0; index < numberOfColors - 1; index += 1) {
    colorsList.push(createColor());
  }
  return colorsList;
}

function createPalletDivs(lenght) {
  const palletBox = document.getElementById('color-palette');
  for (let index = 0; index < lenght; index += 1) {
    const palletDiv = document.createElement('div');
    palletDiv.className = 'color';
    palletBox.appendChild(palletDiv);
  }
}

function setColors(colorsList) {
  const palletDivs = document.getElementsByClassName('color');
  for (let index = 0; index < palletDivs.length; index += 1) {
    palletDivs[index].style.backgroundColor = colorsList[index];
  }
}

function removeSelectedClassFromOthers() {
  const palletDivs = document.getElementsByClassName('color');
  for (const div of palletDivs) {
    if (div.classList.contains('selected')) {
      div.classList.remove('selected');
    }
  }
}

function addSelecedClass(selectedDiv) {
  removeSelectedClassFromOthers();
  selectedDiv.classList.add('selected');
}

function selectColor(event) {
  const selectedDiv = event.target;
  const color = selectedDiv.style.backgroundColor;
  const sessionStorageColor = sessionStorage.getItem('selectedColor');
  if (sessionStorageColor !== color) {
    sessionStorage.setItem('selectedColor', color);
    addSelecedClass(selectedDiv);
  // } else {
  //   removeSelectedClassFromOthers();
  //   sessionStorage.removeItem('selectedColor');
  }

  // if (selectedDiv.style.transform === 'scale(1.3, 1.3)') {
  //   removeFocous();
  //   sessionStorage.removeItem('selectedColor');
  // } else {
  //   removeFocous();
  //   setFocous(selectedDiv);
  // };
}

function setPalletEventListener() {
  const palletDivs = document.getElementsByClassName('color');
  for (let div of palletDivs) {
    div.addEventListener('click', selectColor);
  }
}

// function removeFocous() {
//   const palletDivs = document.getElementsByClassName('color');
//   for (let div of palletDivs) {
//     if (div.style.transform === 'scale(1.3, 1.3)') {
//       div.style.transform = '';
//     }
//   }
// }

// function setFocous(selectedDiv) {
//   selectedDiv.style.transform = 'scale(1.3, 1.3)';
// }

function selectFirstColor() {
  const firstPalletColorDiv = document.querySelector('.color');
  firstPalletColorDiv.classList.add('selected');
  const firstPalletColor = firstPalletColorDiv.style.backgroundColor;
  sessionStorage.setItem('selectedColor', firstPalletColor);
  // setFocous(firstPalletColorDiv);
}

// Pixel box

function createPixelBoxItens(size) {
  const pixelBoard = document.getElementById('pixel-board');
  const pixelBoardCss = window.getComputedStyle(pixelBoard);
  pixelBoard.style.width = `${Math.sqrt(size) * 42}px`;
  console.log(pixelBoardCss.getPropertyValue('width'));
  for (let index = 0; index < size; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
}

// Color Pixel

function colorPixel(event) {
  const color = sessionStorage.getItem('selectedColor');
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function pixelAddEventListener() {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel of pixels) {
    pixel.addEventListener('click', colorPixel);
  }
}

// Clear Board

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

function clearButtonCreator() {
  const section = document.querySelector('.main-content');
  const buttom = document.createElement('button');
  buttom.innerText = 'Limpar';
  buttom.id = 'clear-board';
  section.appendChild(buttom);
  buttom.addEventListener('click', clearBoard);
}

//  size input

function inputSizeCreator() {
  const article = document.querySelector('.main-content');
  const input = document.createElement('input');
  input.id = 'board-size';
  input.type = 'number';
  input.min = '1';
  article.appendChild(input);
}

function filterSize(size) {
  if ((size >= 5) && (size <= 50)) {
    return size ** 2;
  } if (size < 5) {
    return 5 ** 2;
  }
  return 50 ** 2;
}

function excludeOldBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
}

function createNewBoard() {
  const input = document.getElementById('board-size');
  if (Number(input.value)) {
    const size = filterSize(Number(input.value));
    excludeOldBoard();
    createPixelBoxItens(size);
  } else {
    alert('Board inválido!');
  }
}

function inputButtonCreator() {
  const article = document.querySelector('.main-content');
  const inputButtom = document.createElement('button');
  inputButtom.id = 'generate-board';
  inputButtom.innerText = 'VQV';
  article.appendChild(inputButtom);
  inputButtom.addEventListener('click', createNewBoard);
}

function startPallet() {
  const colorsList = createColorsList(4);
  createPalletDivs(colorsList.length);
  setColors(colorsList);
  setPalletEventListener();
  selectFirstColor();
}

function startPixelBox() {
  createPixelBoxItens(25);
  pixelAddEventListener();
  inputSizeCreator();
  inputButtonCreator();
  clearButtonCreator();
}

window.onload = function () {
  startPallet();
  startPixelBox();
};
