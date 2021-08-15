// CRIA QUADRO DE CORES

function createBoard() {
  const table = document.getElementById('pixel-board');
  const linhas = 5;
  const colunas = 5;

  for (let linhaAtual = 0; linhaAtual < linhas; linhaAtual += 1) {
    const divRow = document.createElement('div');
    divRow.className = 'lines';
    for (let criaColunas = 0; criaColunas < colunas; criaColunas += 1) {
      const divBox = document.createElement('div');
      divBox.className = 'pixel';
      divRow.appendChild(divBox);
    }
    table.appendChild(divRow);
  }
}
createBoard();

function corInicial() {
  const black = document.querySelector('.black');

  black.className += ' selected';
}
corInicial();

function removeAdicionaSelector(event) {
  const selected = document.querySelector('.selected');
  const corNova = event.target;

  selected.classList.remove('selected');
  corNova.classList.add('selected');
}

function adicionaClickNasCores() {
  const tabelaCores = document.querySelectorAll('.color');

  for (let index = 0; index < tabelaCores.length; index += 1) {
    tabelaCores[index].addEventListener('click', removeAdicionaSelector);
  }
}
adicionaClickNasCores();

// AQUI PRA BAIXO
// 1 - VERIFICAR QUAL COR TEM A CLASSE SELECTED
// 2 - PEGA A COR QUE TEM ESSA CLASSE. EX. RED
// 3 - ADICIONA A CLASSE RED NA DIV QUE FOR PINTAR

function pegaCorAtual(event) {
  const listaTodasCores = document.getElementById('color-palette').children;
  const corAtual = event.target;

  if (listaTodasCores[0].classList.contains('selected')) {
    corAtual.classList.remove('orange', 'red', 'royalblue');
    corAtual.classList.add('black');
  } else if (listaTodasCores[1].classList.contains('selected')) {
    corAtual.classList.remove('black', 'red', 'royalblue');
    corAtual.classList.add('orange');
  } else if (listaTodasCores[2].classList.contains('selected')) {
    corAtual.classList.remove('black', 'orange', 'royalblue');
    corAtual.classList.add('red');
  } else {
    corAtual.classList.remove('black', 'red', 'orange');
    corAtual.classList.add('royalblue');
  }
}

function adicionaEventoBloco() {
  const blocos = document.querySelectorAll('.pixel');

  for (let index = 0; index < blocos.length; index += 1) {
    blocos[index].addEventListener('click', pegaCorAtual);
  }
}
adicionaEventoBloco();

// function criaBotao() {
//   const button = document.createElement('button');
//   const todasCores = document.querySelector('#color-palette');

//   button.id = 'clear-board';
//   button.innerText = 'Limpar';
//   todasCores.appendChild(button);
// }
// criaBotao();

function removeTodasCores() {
  const blocos = document.querySelectorAll('.pixel');

  for (let index = 0; index < blocos.length; index += 1) {
    blocos[index].className = '';
    blocos[index].className = 'pixel';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', removeTodasCores);
