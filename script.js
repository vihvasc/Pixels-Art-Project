const palleteItems = document.getElementsByClassName('color');
const takeBody = document.getElementsByTagName('body');
const listColor = ['#000', '#3df', '#F5D622', '#F52022'];
const gridLength = 5;

function appendColor() {
  for(let index = 0; index < palleteItems.length; index ++) {
    palleteItems[index].style.backgroundColor = listColor[index];
  }
}

function generateGrid() {
  const containerGrid = document.createElement('div');
  containerGrid.id = 'pixel-board';

  for (let linha = 0; linha < gridLength; linha ++) {
    const contaienrLine = document.createElement('div');
    contaienrLine.className = 'grid-line';
    for (let coluna = 0; coluna < gridLength; coluna ++) {
      const containerColumn = document.createElement('div');
      containerColumn.className = 'pixel';

      contaienrLine.appendChild(containerColumn);
    }
    containerGrid.appendChild(contaienrLine);
  }
  takeBody[0].appendChild(containerGrid)
}

window.onload = function() {
  appendColor();
  generateGrid();
}
