window.onload = function() {
  const colorPalette = document.querySelector('#color-palette');
  const boardLines = document.querySelectorAll('.line');
  const colors = ['black', 'green', 'yellow', 'red'];
  const initialColor = 'white';
  paletteCreator(colorPalette);
  fillBoard(boardLines);

  // paleta de cores
  function paletteCreator(linha) {
    for (let i = 0; i < colors.length; i += 1) {
      let colorBox = boxCreator('color');

      colorBox.style.backgroundColor = colors[i];
      linha.appendChild(colorBox);
    }
  }

  function boxCreator(classe) {
    let box = document.createElement("div");
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
      let box = boxCreator('pixel');

      box.style.backgroundColor = initialColor;
      boardLine.appendChild(box);
    }
  }
};
// function fillBoard(boardLine) {
//   for (let i = 0; i < 25; i += 1) {
//     let box = boxCreator('pixel');

//     box.style.backgroundColor = initialColor;
//     boardLine.appendChild(box);
//   }
// }