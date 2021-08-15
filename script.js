const btn = document.querySelector('#clear-board');
const pontoLuminoso = document.getElementsByClassName('pixel');

function limparQuadro() {
  for (const quadrado of pontoLuminoso) {
    quadrado.style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
btn.addEventListener('click', limparQuadro);

const paletas = document.getElementsByClassName('color');
for (let index = 0; index < paletas.length; index += 1) {
  paletas[index].addEventListener('click', mudarClasse);
}

function mudarClasse(event) {
  const colorElement = document.getElementsByClassName('color');
  for (let index = 0; index < colorElement.length; index += 1) {
    colorElement[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1){
  pixels[index].addEventListener('click', adicionarCores);
}

function adicionarCores(event) {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1){
}
  event.target.style.backgroundColor = 'red';
}

const classeSelecionada = document.getElementsByClassName('selected');
console.log(classeSelecionada[1]);