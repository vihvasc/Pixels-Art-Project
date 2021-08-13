window.onload = selecionaPrimeira();

let classe = document.getElementsByClassName('color');

for (let i = 0; i < classe.length; i += 1) {
  let valor = classe[i].textContent;
  classe[i].style.backgroundColor = valor;
}

function criaQuadrado(string) {
  for (let i = 0; i < 5; i += 1) {
    let box = document.createElement('div');
    box.className = 'pixel';
    box.style.display = 'inline-block';
    box.style.backgroundColor = 'white';
    box.style.color = 'white';
    let fileira = document.getElementsByClassName(string)[0];
    fileira.appendChild(box);
  }
}
criaQuadrado('fileira1');
criaQuadrado('fileira2');
criaQuadrado('fileira3');
criaQuadrado('fileira4');
criaQuadrado('fileira5');

function selecionaPrimeira() {
  let corInicial = document.getElementsByClassName('color')[0];
  corInicial.classList.add('selected');
}
let corPreta = document.getElementsByClassName('color')[0];
let corVermelha = document.getElementsByClassName('color')[1];
let corAmarela = document.getElementsByClassName('color')[2];
let corVerde = document.getElementsByClassName('color')[3];

corVermelha.addEventListener('click', selecionarVermelha);
function selecionarVermelha() {
  corVermelha.classList.add('selected');
  corPreta.classList.remove('selected');
  corAmarela.classList.remove('selected');
  corVerde.classList.remove('selected');
}

corAmarela.addEventListener('click', selecionarAmarela);
function selecionarAmarela() {
  corAmarela.classList.add('selected');
  corPreta.classList.remove('selected');
  corVermelha.classList.remove('selected');
  corVerde.classList.remove('selected');
}

corVerde.addEventListener('click', selecionarVerde);
function selecionarVerde() {
  corVerde.classList.add('selected');
  corPreta.classList.remove('selected');
  corVermelha.classList.remove('selected');
  corAmarela.classList.remove('selected');
}

corPreta.addEventListener('click', selecionarPreta);
function selecionarPreta() {
  corPreta.classList.add('selected');
  corAmarela.classList.remove('selected');
  corVermelha.classList.remove('selected');
  corVerde.classList.remove('selected');
}
