window.onload = function() {
  corBox();
  selectedFix();  
}

// Colorir paleta
function corBox(){
  let color = document.querySelectorAll('.color');
  let arrayColor = ['black', 'green', 'yellow', 'purple'];

  for (let index = 0; index < arrayColor.length; index += 1) {
  color[index].style.backgroundColor = arrayColor[index];
  }
}

// Cor Preta selecionada
function selectedFix() {
  let botaoBlack = 0;
  let fixo = document.querySelectorAll('.color');
  fixo[botaoBlack].classList.add ('selected');
}

// Escolher quantidade de linhas/colunas
let linhas = 5;

// Gerar tabela 
function gerarTabela() {
  for (let index = 1; index <= linhas; index += 1) {
    let secao = document.querySelector('.tabela');
    let tabela = document.createElement('ul');

    for (let index2 = 1; index2 <= linhas; index2 += 1) {
      let li = document.createElement('li');
      li.className = 'pixel';
      tabela.appendChild(li);
    }
    tabela.id = 'pixel-board';
    secao.appendChild(tabela);
  }
}
gerarTabela();

// Selecionar Box
let seletor = document.querySelectorAll('.color');
for (let index = 0; index < seletor.length; index += 1) {
  seletor[index].addEventListener('click', function() {
  let botao = document.querySelector('.selected');
  botao.classList.remove('selected');
  event.target.classList.add('selected');
  })
}

// Colorir Box
let colorir = document.querySelectorAll('.pixel');
let botao2 = document.getElementsByClassName('selected');

for (let index = 0; index < colorir.length; index += 1) {
  colorir[index].addEventListener('click', function(event) {
  colorir[index].style.backgroundColor = botao2[0].style.backgroundColor;
  })
}

// Limpar quadro
let limpar = document.querySelector('#clear-board');  
limpar.addEventListener('click', function() {
  for (let index = 0; index < colorir.length; index += 1) {
  colorir[index].style.backgroundColor = 'white';
  }
})