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


function selectPixel() {
  let pixelBox = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', function (event) {
      let collorSelected = firstChild.style.backgroundColor;
      event.target.style.backgroundColor = collorSelected
    });
  }
}
selectPixel()