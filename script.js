const selectColor = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const limpar = document.getElementById('clear-board');

// criar o evento de click//
function colorPaint(event) {
  const click = event.target;
  for (let i = 0; i < selectColor.length; i += 1) {
    selectColor[i].classList.remove('selected');
  }
  click.classList.add('selected');
}
for (let i = 0; i < selectColor.length; i += 1) {
  selectColor[i].addEventListener('click', colorPaint);
}
function pintar(eventPaint) {
  const selecionado = document.querySelector('.selected');
  const cor = window.getComputedStyle(selecionado);
  const event = eventPaint.target;
  event.style.backgroundColor = cor.backgroundColor;
  console.log(cor.backgroundColor);
}
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', pintar);
}
function limparQuadro() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
limpar.addEventListener('click', limparQuadro);
