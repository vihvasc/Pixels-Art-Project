window.onload = function(){

// Cores das caixas
function corBox(){
  let color = document.querySelectorAll('.color');
  let arrayColor = ['black', 'green', 'yellow', 'purple'];

  for (let index = 0; index < arrayColor.length; index += 1) {
  color[index].style.backgroundColor = arrayColor[index];
  }
}
corBox();

// Função Selected
function selecionar() {
  let selecao = document.querySelectorAll('.color')[0];
  selecao.className = 'color selected';

  for (let index = 0; index < selecao.length; index += 1) {
    if (selecao[index] === 0) {
      selecao.className = 'color selected';
    } else {
      selecao.className = 'color';
    }
  } 
}
selecionar();






















}