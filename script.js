window.onload = function () {
  function makeBoardLines() {
    let lines = document.getElementsByClassName('pixel-line');

    for (let i = 0; i < lines.length; i += 1) {
      createPixels(lines[i]);
    }
  }

  function createPixels(line) {
    for (let i = 0; i < 5; i += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';

    pixel.addEventListener('click', function () {
      // pega elemento classe selected
      let colorSelected = document.querySelector('.selected');
      
      // a cor de fundo do pixel deve se tornar a cor de fundo da classe selected
      pixel.style.background = colorSelected.style.background;
    })
    line.appendChild(pixel);
    }
  }

  makeBoardLines();

  function palletListener() {
    let palletColors = document.getElementsByClassName('color');
    let currentColor = palletColors[0];
    let blueColor = palletColors[1];
    let greenColor = palletColors[2];
    let yellowColor = palletColors[3];

    currentColor.style.background = 'black';
    blueColor.style.background = "blue";
    greenColor.style.background = "green";
    yellowColor.style.background = "yellow";

    for (let i = 0; i < palletColors.length; i += 1) {
      let color = palletColors[i];

      color.addEventListener('click', function () {
        // preciso remover a classe selected da cor atual
        currentColor.className = currentColor.className.replace(
          ' selected',
          ''
        );
        // preciso adicionar a classe selected na cor clicada 
        color.className += ' selected';

        // a cor que eu clicar precisa ser a nova cor atual
        currentColor = color;
      });
    }
  }
  palletListener();



};
