let divcolorPallete = document.getElementsByClassName('color selected')[0].style.backgroundColor ="black";
 divcolorPallete = document.getElementsByClassName('color')[1].style.backgroundColor ="gold";
 divcolorPallete = document.getElementsByClassName('color')[2].style.backgroundColor ="darkred";
 divcolorPallete = document.getElementsByClassName('color')[3].style.backgroundColor ="blue";


 window.onload = function(){

    let paleta = document.querySelectorAll('.color');
    let pixel = document.querySelectorAll('.pixel');
    let corselecionada = paleta[0].style.backgroundColor
 }

 function createBoard(pixels) {
    const pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';
    for (let i = 0; i < pixels; i += 1) {
      const pixelRow = document.createElement('div');
      pixelRow.className = 'pixel-row flex center';
      for (let ia = 0; ia < pixels; ia += 1) {
        const newPixel = document.createElement('div');
        newPixel.className = 'pixel';
        newPixel.addEventListener('click', (e) => {
          const selectedColor = document.querySelector('.selected');
          e.target.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
        });
        newPixel.addEventListener('dblclick', (e) => {
          e.target.style.backgroundColor = 'white';
        });
        pixelRow.appendChild(newPixel);
      }
      pixelBoard.appendChild(pixelRow);
    }
  }
 
  createBoard(5);

  



   

    

    