


const color = document.getElementsByClassName('color');

const pixel = document.getElementsByClassName('pixel');



const corBlack = document.querySelector('.black');
const corPurple = document.querySelector('.purple');
const corOrange = document.querySelector('.orange');
const corGreenYellow = document.querySelector('.greenyellow');

function mudaClassSelected(event){
  const selectedElement = document.querySelector('.selected')
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(event.target);
  
}



corBlack.addEventListener('click', mudaClassSelected);
corPurple.addEventListener('click', mudaClassSelected);
corOrange.addEventListener('click', mudaClassSelected);
corGreenYellow.addEventListener('click', mudaClassSelected);


let pixelBoard = document.getElementsByClassName('pixel');
for(let i = 0; i < pixelBoard.length; i +=1 ){
  pixelBoard[i].addEventListener('click', paintBox);
}



function paintBox(event){
  let backgroundSelected = document.querySelector('.selected');
  event.target.classList.add(backgroundSelected.classList[1]);
  console.log(event.target);
  }



  