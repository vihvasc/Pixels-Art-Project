window.onload = function() {
  const colorPalette = document.querySelector('#color-palette');
  const boardLines = document.querySelectorAll('.line');
  const colors = ['black', 'green','yellow', 'red'];
  const initialColor = 'white';
  paletteCreator(colorPalette);
  fillBoard(boardLines);
  colorSelect();

  // paleta de cores
  function paletteCreator(linha) {
    for (let i = 0; i < colors.length; i += 1) {
      const colorBox = boxCreator('color');

      colorBox.style.backgroundColor = colors[i];
      linha.appendChild(colorBox);
    }
  }

  function boxCreator(classe) {
    const box = document.createElement("div");
    box.className = classe;
    return box;
  }
  // Quadro de pixels
 
  function fillBoard(linhas) {
    for(let i = 0; i < linhas.length; i += 1) {
      fillLine(linhas[i]);//  para cada linha cria 5 divs
    }
  }

  function fillLine(boardLine) {
    for (let i = 0; i < boardLines.length; i += 1) {
      const box = boxCreator('pixel');

      box.style.backgroundColor = initialColor;
      boardLine.appendChild(box);
    }
  }
};
function colorSelect() {
  const color = document.querySelectorAll('.color');
  for (let i = 0; i < color.length; i++) {
    color[0].classList.add('selected');
    color[i].addEventListener('click', function(event) {
      const colorSelected = document.querySelector('.selected');
      colorSelected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }      
}

function colorChange() {
  const paint = document.querySelectorAll('.color');
  console.log(paint)
}
colorChange();
