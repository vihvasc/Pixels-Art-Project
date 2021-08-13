window.onload = function () {
  let colorList = ['black', 'gray', 'blue', 'green'];
  let pixelBoardSize = 5;
  let colorPallete = document.getElementById('color-palette');
  let pixelBoard = document.getElementById('pixel-board');

  createColorPallete(colorList);
  createPixelBoard(pixelBoardSize);

  //cria a paleta com as cores presentes em colorList
  function createColorPallete(colorList) {
    for (let color of colorList) {
      let newColor = document.createElement('div');

      newColor.classList.add('color');
      newColor.classList.add(color);
      newColor.style.backgroundColor = color;

      colorPallete.appendChild(newColor);
    }
  }

  //CRIANDO O PIXEL BOARD

  //Cria o pixel board de acordo com a quantidade de linhas e colunas passadas por parâmetro
  function createPixelBoard(boardSize) {
    let lines = createLines(boardSize);

    for (let line of lines) {
      for (let i = 0; i < boardSize; i += 1) {
        let pixel = createPixel();
        line.appendChild(pixel);
      }
    }
  }

  //Cria um pixel para o pixel board
  function createPixel() {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    return pixel;
  }

  //Cria as linhas do pixel board
  function createLines(numberOfLines) {
    for (let i = 0; i < numberOfLines; i += 1) {
      let line = document.createElement('div');
      line.classList.add('line');
      pixelBoard.appendChild(line);
    }

    return document.getElementsByClassName('line');
  }
};
