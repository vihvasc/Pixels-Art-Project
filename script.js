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




















}