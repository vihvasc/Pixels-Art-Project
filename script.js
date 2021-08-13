window.onload = function () {
  let colorList = ['black', 'gray', 'blue', 'green'];
  let colorPallete = document.getElementById('color-palette');
  let pixelBoard = document.getElementById('pixel-board');

  createColorPallete(colorList);

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

  //Cria os pixels do pixel board
  // function createPixel() {
  //   let pixel = createElement('div');

  // }
  //Cria as linhas do pixel board
  function createLines(numberOfLines) {
    for (let i = 0; i < numberOfLines; i += 1) {
      let line = document.createElement('div');
      line.classList.add('line');
      pixelBoard.appendChild(line);
    }
  }
};
