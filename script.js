window.onload = function () {
  // requisito 1 
  const getTitle = document.getElementById('title');
  getTitle.innerText = 'Paleta de Cores';

  // requisito 2
  function addPalette (){
  const colors = ['black', 'purple', 'green', 'blue'];
  for (let i = 0; i < colors.length; i += 1){
    let getDivColor = document.getElementById('color-palette')
    let addDivs = document.createElement('div');
    getDivColor.appendChild(addDivs);
    addDivs.className = 'color';
  }
  const divs = document.getElementsByClassName('color');
  for (let i = 0; i < divs.length; i += 1){
    let paletteColor = divs[i];
    paletteColor.style.backgroundColor = colors[i];
    paletteColor.style.display = 'inline-block'
  }
  }

  function addPixel (number){  
    for(i = 0; i < number; i += 1){
      let getDivPixel = document.getElementById('pixel-board');
      let DivLines = document.createElement('div');
      getDivPixel.appendChild(DivLines);
      DivLines.className = 'pixel';
    }
  }

  function selectInitialColor (){
  const getBlackColor = document.querySelector('.color');
  getBlackColor.className = 'color selected';
  }



addPalette();
addPixel(25);
selectInitialColor();
}
