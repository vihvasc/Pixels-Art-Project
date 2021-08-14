
  // requisito 1 
  const getTitle = document.getElementById('title');
  getTitle.innerText = 'Paleta de Cores';

  // requisito 2
  
  const colors = ['black', 'purple', 'green', 'blue'];
  for (let i = 0; i < colors.length; i += 1){
    let getDivColor = document.getElementById('color-palette')
    let addDivs = document.createElement('div');
    getDivColor.appendChild(addDivs);
    addDivs.className = 'color';
    addDivs.id = colors[i];
  }
  const divs = document.getElementsByClassName('color');
  for (let i = 0; i < divs.length; i += 1){
    let paletteColor = divs[i];
    paletteColor.style.backgroundColor = colors[i];
    paletteColor.style.display = 'inline-block'
  }


  function addPixel (number){  
    for(i = 0; i < number; i += 1){
      let getDivPixel = document.getElementById('pixel-board');
      let DivLines = document.createElement('div');
      getDivPixel.appendChild(DivLines);
      DivLines.className = 'pixel';
    }
  }
  addPixel(25);
window.onload = function(){
  const getBlackColor = document.querySelector('.color');
  getBlackColor.classList += ' selected';

  function selectColor() {
    const initialColor = document.querySelectorAll('.selected');
    initialColor[0].classList.remove('selected');
    const target = event.target;
    target.classList = 'color selected';
  }
  
  const getColors = document.querySelectorAll('.color');
  for (let i = 0; i < getColors.length; i += 1) {
  getColors[i].addEventListener('click', selectColor);
  }
}
 
  // let divColor = document.getElementsByClassName('color')
  // for (i = 0; i < divColor.length; i += 1) {
  //   divColor[i].addEventListener('click', changeClass)
  // }
  
  
  // let x = document.getElementById('black');
  // function changeClass (){
  //   let firstColor = document.getElementById('black');
  //   let secondColor = document.getElementById('purple');
  //   let thirdColor = document.getElementById('green');
  //   let fourthColor = document.getElementById('blue');
  //     if(firstColor.classList.contains('selected')){
  //       firstColor.classList.toggle('selected');
  //       console.log('cheguei aqui');
  //     } else {
  //       firstColor.classList.toggle('selected');
  //     }    
  // }
  
  // document.getElementById('green').addEventListener('click', changeClass);
  // document.getElementById('purple').addEventListener('click', changeClass);
  // document.getElementById('blue').addEventListener('click', changeClass);

  // function changeClass (){
    let getDivPalette = document.getElementsByClassName('color');
    for (i = 0; i < getDivPalette.length; i += 1){
      let buttonColor = getDivPalette[i];
      if(buttonColor.classList.contains('color')){
        buttonColor.classList = 'color selected';
      if(buttonColor.classList.contains('selected')){
        buttonColor.classList.remove('selected')}
      // } else if (buttonColor.classList.toggle('color')){
      //   buttonColor.classList.toggle('selected');
      }
    
    }
  // }
// }