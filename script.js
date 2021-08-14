function titleH1() {
  const title1H1 = document.createElement('h1');
  title1H1.id = 'title';
  title1H1.innerText = 'Paleta de Cores';
  document.body.appendChild(title1H1);
}
titleH1();

function createDiv() {
  const arrayColor = ['black'];
  for (let index = 1; index < 4; index +=1){
  arrayColor.push(`rgb(${collorsRandom()}, ${collorsRandom()}, ${collorsRandom()})`)
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

let firstChild = document.querySelector('.color');
firstChild.classList.add('selected');

let allBoxCollor = document.querySelectorAll('.color');

function removeAddSelected() {
  for (let index = 0; index < allBoxCollor.length; index += 1) {
    allBoxCollor[index].addEventListener('click', function (event) {
      firstChild.classList.remove('selected');
      event.target.classList.add('selected');
      firstChild = event.target;
    })
  }
}
removeAddSelected();


let pixelBox = document.getElementsByClassName('pixel');
function selectPixel() {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', function (event) {
      let collorSelected = firstChild.style.backgroundColor;
      event.target.style.backgroundColor = collorSelected
    });
  }
}
selectPixel()

function createBotton() {
  let button = document.createElement('button');
  button.id = 'clear-board';
  button.innerText ='Limpar';
  document.body.insertBefore(button, document.querySelector('#pixel-board'));

  button.addEventListener('click', function(event){
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].style.backgroundColor = 'white';
  }
  })
}
createBotton();

function collorsRandom() {
  let collorRandom = Math.floor(Math.random() * 255) + 1;
  return collorRandom;

}
