window.onload = function () {
  // requisito 1 
  const getTitle = document.getElementById('title');
  getTitle.innerText = 'Paleta de Cores';

  // requisito 2
  function addPalette (){
  const colors = ['black', 'purple', 'green', 'blue'];
  const getDivColors = document.getElementsByClassName('color');
  for (let i = 0; i < getDivColors.length; i += 1){
    let divs = getDivColors[i];
    divs.style.backgroundColor = colors[i];
    divs.style.display = 'inline-block'
  }
  }

  function addPixel (number){  
    for(i = 0; i < number; i += 1){
      let getDivPixel = document.getElementById('pixel-board');
    // console.log(getDivPixel);
    let DivLines = document.createElement('div');
    getDivPixel.appendChild(DivLines);
    DivLines.className = 'pixel';
    }
  }



addPalette();
addPixel(25);
}
