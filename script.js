const btn = document.querySelector('#clear-board');
const pontoLuminoso = document.getElementsByClassName('pixel');
let corDoElemento = document.querySelector('.selected');
const paletas = document.getElementsByClassName('color');

paletas[0].style.backgroundColor = 'black';
paletas[1].style.backgroundColor = 'red';
paletas[2].style.backgroundColor = 'green';
paletas[3].style.backgroundColor = 'blue';

function limparQuadro() {
  for (const quadrado of pontoLuminoso) {
    quadrado.style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
btn.addEventListener('click', limparQuadro);

for (let index = 0; index < paletas.length; index += 1) {
  paletas[index].addEventListener('click', mudarClasse);
}

function mudarClasse(event) {
  const colorElement = document.getElementsByClassName('color');
  for (let index = 0; index < colorElement.length; index += 1) {
    colorElement[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
  corDoElemento = event.target;
}

function preencherPixel (){
    for(let index = 0; index < pontoLuminoso.length; index += 1) {
      pontoLuminoso[index].addEventListener('click', function() {
        pontoLuminoso[index].style.backgroundColor = corDoElemento.style.backgroundColor;
      })
    }
}

preencherPixel();