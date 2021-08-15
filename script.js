const classe = document.getElementsByClassName('color');

for (let i = 0; i < classe.length; i += 1) {
  const valor = classe[i].textContent;
  classe[i].style.backgroundColor = valor;
}

function criaQuadrado(string) {
  for (let i = 0; i < 5; i += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    box.style.display = 'inline-block';
    box.style.backgroundColor = 'white';
    box.style.color = 'white';
    const fileira = document.getElementsByClassName(string)[0];
    fileira.appendChild(box);
  }
}
criaQuadrado('fileira1');
criaQuadrado('fileira2');
criaQuadrado('fileira3');
criaQuadrado('fileira4');
criaQuadrado('fileira5');

function selecionaPrimeira() {
  const corInicial = document.getElementsByClassName('color')[0];
  corInicial.classList.add('selected');
}
// eslint-disable-next-line sonarjs/no-use-of-empty-return-value
window.onload = selecionaPrimeira();

const corPreta = document.getElementsByClassName('color')[0];
const corVermelha = document.getElementsByClassName('color')[1];
const corAmarela = document.getElementsByClassName('color')[2];
const corVerde = document.getElementsByClassName('color')[3];

function selecionarVermelha() {
  corVermelha.classList.add('selected');
  corPreta.classList.remove('selected');
  corAmarela.classList.remove('selected');
  corVerde.classList.remove('selected');
}
corVermelha.addEventListener('click', selecionarVermelha);

function selecionarAmarela() {
  corAmarela.classList.add('selected');
  corPreta.classList.remove('selected');
  corVermelha.classList.remove('selected');
  corVerde.classList.remove('selected');
}
corAmarela.addEventListener('click', selecionarAmarela);

function selecionarVerde() {
  corVerde.classList.add('selected');
  corPreta.classList.remove('selected');
  corVermelha.classList.remove('selected');
  corAmarela.classList.remove('selected');
}
corVerde.addEventListener('click', selecionarVerde);

function selecionarPreta() {
  corPreta.classList.add('selected');
  corAmarela.classList.remove('selected');
  corVermelha.classList.remove('selected');
  corVerde.classList.remove('selected');
}
corPreta.addEventListener('click', selecionarPreta);

const pegarBotao = document.getElementById('clear-board');

function limpaBotao() {
  const quadrados = document.getElementsByClassName('pixel');
  for (let i = 0; i < quadrados.length; i += 1) {
    const todosQuadrados = quadrados[i];
    todosQuadrados.style.backgroundColor = 'white';
  }
}
pegarBotao.addEventListener('click', limpaBotao);

function mudarCor() {
  const quadrado1 = document.getElementsByClassName('pixel');
  for (const i of quadrado1) {
    i.addEventListener('click', pintaQuadrado);
  }
}
mudarCor();

function pintaQuadrado(selecionado) {
  const pegaCor = document.getElementsByClassName('color selected')[0];
  const cor = pegaCor.innerText;
  selecionado.target.style.backgroundColor = cor;
}
