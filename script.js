window.onload = function comeca() {
  const pixels = document.getElementsByClassName('pixel');
  function adicionaCor(evento) {
    const cor = sessionStorage.getItem('cor');
    const pixel = evento.target;
    pixel.style.backgroundColor = cor;
  }
  for (const pixel of pixels) {
    pixel.addEventListener('click', adicionaCor);
    pixel.style.backgroundColor = 'white';
  }
  sessionStorage.setItem('cor', '#000');
  const primeiro = document.getElementsByClassName('color')[0];
  primeiro.className = 'color selected';
};
function selecionaCor(evento) {
  const selecionado = evento.target;
  const selected = document.getElementsByClassName('selected')[0];
  selected.className = 'color';
  const cor = evento.target.style.backgroundColor;
  selecionado.className = 'color selected';
  sessionStorage.setItem('cor', cor);
}
const primeiro = document.getElementsByClassName('color')[0];
const segundo = document.getElementsByClassName('color')[1];
const terceiro = document.getElementsByClassName('color')[2];
const quarto = document.getElementsByClassName('color')[3];
primeiro.style.backgroundColor = '#000';
segundo.style.backgroundColor = '#6D597A';
terceiro.style.backgroundColor = '#67697C';
quarto.style.backgroundColor = '#C1C3C1';
primeiro.addEventListener('click', selecionaCor);
segundo.addEventListener('click', selecionaCor);
terceiro.addEventListener('click', selecionaCor);
quarto.addEventListener('click', selecionaCor);
function limpaCor() {
  const pixels = document.getElementsByClassName('pixel');
  const cor = 'white';
  for (const pixel of pixels) {
    pixel.style.backgroundColor = cor;
  }
}
document.getElementsByTagName('button')[0].addEventListener('click', limpaCor);
