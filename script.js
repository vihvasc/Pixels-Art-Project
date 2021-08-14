const test = document.querySelector('#pixel-board');
const firstColor = document.getElementById('firstColor');
const secondColor = document.getElementById('secondColor');
const thirdColor = document.getElementById('thirdColor');
const fourthColor = document.getElementById('fourthColor');

function createPixelDivs(param1) {
  let lengthDivs;
  const yHeight = param1;
  const xWidth = param1;

  for (let index = 0; index < yHeight * xWidth; index += 1) {
    lengthDivs = document.createElement('div');
    test.appendChild(lengthDivs);
    lengthDivs.classList = 'pixel';
  }
}
createPixelDivs(5);

/* https://github.com/LeonardoMonti/trybe-exercicios/blob/exercicios/5.3/01-fundamentos/bloco-5-javascript-dom-eventos-e-web-storage/dia-3-javascript-eventos/para-fixar/main.js */
function addAndRemoveClassSelected(event) {
  firstColor.classList.remove('selected');
  secondColor.classList.remove('selected');
  thirdColor.classList.remove('selected');
  fourthColor.classList.remove('selected');

  event.target.classList.add('selected');
}
firstColor.addEventListener('click', addAndRemoveClassSelected);
secondColor.addEventListener('click', addAndRemoveClassSelected);
thirdColor.addEventListener('click', addAndRemoveClassSelected);
fourthColor.addEventListener('click', addAndRemoveClassSelected);
