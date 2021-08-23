const numberOfLines = 5;
const numberOfColumns = 5;

function createPixel(numberOfColumnsCP, divElementLine) {
  for (let index = 0; index < numberOfColumnsCP; index += 1) {
    const divElementPixel = document.createElement('div');
    divElementPixel.className = 'pixel';

    divElementLine.appendChild(divElementPixel);
  }
}

function createBoard(numberOfLinesCB, numberOfColumnsCB) {
  for (let index = 0; index < numberOfLinesCB; index += 1) {
    const divElementLine = document.createElement('div');
    divElementLine.className = 'pixel-line';

    createPixel(numberOfColumnsCB, divElementLine);

    document.getElementById('pixel-board').appendChild(divElementLine);
  }
}

createBoard(numberOfLines, numberOfColumns);


let colorPixel = document.querySelectorAll('.pixel');

function colorsBox(){
for (let index = 0; index < colorPixel.length; index += 1){
  colorPixel[index].addEventListener('click',function(event){
    let acesso = colorsSelect.style.backgroundColor;
    event.target.style.backgroundColor = acesso;
  })
}
}
colorsBox();

let firstChild = document.querySelector('.color');
firstChild.classList.add('selected');
let colorsSelect = document.querySelector('.color');
colorsSelect.classList.add('selected');


let seleciona = document.querySelectorAll('.color')
function selectClicks(){
  for (let index = 0; index < seleciona.length; index +=1){
    seleciona[index].addEventListener('click',function(event) {
      colorsSelect.classList.remove('selected');
      event.target.classList.add('selected');
      colorsSelect = event.target;
    });
  }
}
selectClicks()

function clearButton(){
let buttonClear = document.createElement('button');
buttonClear.id = 'clear-board';
buttonClear.innerText = 'Limpar';
let pixelBoard = document.getElementById('pixel-board');

document.body.insertBefore(buttonClear, pixelBoard);
buttonClear.addEventListener('click', function(){
  for(let index = 0;index < colorPixel.length; index += 1){
    colorPixel[index].style.backgroundColor = 'white';
    }
});
}

clearButton();


