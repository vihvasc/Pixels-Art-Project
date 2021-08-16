let quadroPixel = document.querySelector('#pixel-board');

let linha = 5;

function makeLine() {
  for (let i = 0; i < linha; i += 1) {
    let line = document.createElement('div');
    line.className = 'line';
    quadroPixel.appendChild(line);
    makePixels(line);
  }
}

makeLine();

function makePixels(ondeGuarda) {
  for (let i = 0; i < linha; i += 1) {
    let pixel = document.createElement('div');
    // let line = document.querySelector(".line")
    pixel.className = 'pixel';

    ondeGuarda.appendChild(pixel);
  }
}

//  Requisito 7

/* Primeiro passo = dar a classe select dinamicamente para o botão que for clicado
obs preto começa com a classe select 
- sei que vai ser um evento  pois quero que isso aconteça quando o usuário faça uma interação
nesse evento terá uma função que dará a classe select  para o botão


*/
let selected = document.querySelector('.color');
selected.classList.add('selected');

let buttonSelect = document.querySelectorAll('.color');
function addClassSelected() {
  for (let index = 0; index < buttonSelect.length; index += 1) {
    buttonSelect[index].addEventListener('click', function (event) {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
      selected = event.target;
    });
  }
}
addClassSelected();
