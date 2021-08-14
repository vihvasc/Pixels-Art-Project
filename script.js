function createH1() {
  let h1 = document.createElement('h1');
  h1.id = 'title';
  h1.innerText = 'Paleta de Cores';
  document.body.appendChild(h1);
}
createH1();

function create4Palletes() {
  let colors = ['black', 'blue', 'green', 'orange']
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

function createPixels() {
  let divFather = document.createElement('div');
  divFather.id = 'pixel-board';
  document.body.appendChild(divFather);
  for (let index = 0; index < 25; index += 1) {
    let divChild = document.createElement('div');
    divChild.className = 'pixel';
    divChild.style.background = 'white';
    divFather.appendChild(divChild);
  }
}
createPixels();

let colorSelected = document.querySelector('.color');
colorSelected.classList.add('selected');

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
