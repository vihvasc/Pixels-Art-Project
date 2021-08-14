const corBlack = document.querySelector('.black');
const corPurple = document.querySelector('.purple');
const corOrange = document.querySelector('.orange');
const corGreenYellow = document.querySelector('.greenyellow');

function mudaClassSelected(event){
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(event.target);
}

corBlack.addEventListener('click', mudaClassSelected);
corPurple.addEventListener('click', mudaClassSelected);
corOrange.addEventListener('click', mudaClassSelected);
corGreenYellow.addEventListener('click', mudaClassSelected);