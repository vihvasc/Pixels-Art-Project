// Requisito 1
function createH1() {
  let h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  document.body.appendChild(h1);
}
createH1();

// Requisito 2
// Requisito 3
function create4Palletes() {
  let colors = ['black']
  for (let index = 0; index < 3; index += 1) {
    colors.push(`rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`)
  }
  let bigDiv = document.createElement('div');
  bigDiv.id = 'color-palette';
  for (let index = 0; index < 4; index += 1) {
    let smallDiv = document.createElement('div');
    smallDiv.className = 'color';
    smallDiv.style.border = '1px solid black'
    smallDiv.style.backgroundColor = colors[index];
    bigDiv.appendChild(smallDiv);
  }
  document.body.appendChild(bigDiv);
}
create4Palletes();

// Requisito 4
let dimensionsOfBoard = 5;
function createPixels() {
  let divFather = document.createElement('div');
  let valorDeAlturaELargura = 42 * dimensionsOfBoard;
  divFather.id = 'pixel-board';
  divFather.style.width = `${valorDeAlturaELargura}px`;
  divFather.style.height = `${valorDeAlturaELargura}px`;
  document.body.appendChild(divFather);
  for (let index = 0; index < (dimensionsOfBoard ** 2); index += 1) {
    let divChild = document.createElement('div');
    divChild.className = 'pixel';
    divChild.style.backgroundColor = 'white';
    divFather.appendChild(divChild);
  }
}
createPixels();

// Requisito 6
let colorSelected = document.querySelector('.color');
colorSelected.classList.add('selected');

// Requisito 7
let allDivsBoard = document.querySelectorAll('.color');
function removeAndAddSelected() {
  for (let index = 0; index < allDivsBoard.length; index += 1) {
    allDivsBoard[index].addEventListener('click', function(event) {
      colorSelected.classList.remove('selected'); // Remove selected da div colorSelected
      event.target.classList.add('selected'); // Adiciona selected ao alvo do clique
      colorSelected = event.target; // Adiciona a div do clique ao colorSelected
    })
  }
}
removeAndAddSelected();

// Requisito 8
let allPixels = document.getElementsByClassName('pixel');
function addColorForClick() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].addEventListener('click', function(event) {
      let colorActual = colorSelected.style.backgroundColor;
      event.target.style.backgroundColor = colorActual;
    })
  }
}
addColorForClick();

// Requisito 9
function resetColors() {
  let button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText = 'Limpar';
  button.addEventListener('click', function(event) {
    for (let index = 0; index < allPixels.length; index += 1) {
      allPixels[index].style.backgroundColor = 'white';
    }
  })

  document.body.insertBefore(button, document.querySelector('#color-palette').nextElementSibling);

}
resetColors();

// Requisito 10
let div = document.createElement('div');
div.id = 'button-input';
document.body.insertBefore(div, document.querySelector('#clear-board'));

let input = document.createElement('input');
input.id = 'board-size';
input.type = 'number';
input.min = '1';
div.appendChild(input);

let button = document.createElement('button');
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
      numberDoInput = 5;
    }
    if (numberDoInput > 50) {
      numberDoInput = 50;
    }
    dimensionsOfBoard = numberDoInput;
    document.body.removeChild(document.querySelector('#pixel-board'));
    createPixels();
    addColorForClick();
  });
}
setInput();

// Requisito 12
function randomColors() {
  let randomNumber = Math.floor(Math.random() * 255) + 1;
  return randomNumber;
}
