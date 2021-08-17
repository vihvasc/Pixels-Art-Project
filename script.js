window.onload = function () {
     
    function getRandomColor() {
        /*Função pronta de um artigo do stackOverflow, porém sei exatamente como funciona. */ 
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

    function createColorPalette() {
        for (let i = 1; i <= 4; i += 1) {
            const colorPalette = document.querySelector('#color-palette');
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.id = `${'color-' + i}`;
            colorPalette.appendChild(colorDiv);
            if (i > 1) {
                document.getElementById(`${'color-' + i}`).style.backgroundColor = getRandomColor();
            }
        }
    }
    createColorPalette();

    function alertAndLimiters() {
        let input = document.querySelector('#board-size');
        if (input.value === '' || input.value === 0) {
            alert('Board inválido!');
        }
        if (input.value < 5) {
            input.value = 5;
        }
        if (input.value > 50) {
            input.value = 50;
        }
    }

    function createPixelBoard() {
        let input = document.querySelector('#board-size');
        alertAndLimiters();
        let boardSize = input.value;
        let pixelLength = `${(input.value * 42) + 'px'}`;
        if (input.value = '') {
            pixelLength = `${(5 * 42) + 'px'}`;
            boardSize = 5;
        }
        let pixelBoardSize = document.getElementById('pixel-board');
        pixelBoardSize.style.width = pixelLength;
        pixelBoardSize.style.height = pixelLength;
        let pixelBoard = document.querySelector('#pixel-board');
        if (pixelBoard.childNodes.length > 0) {
            for (let u = (pixelBoard.childNodes.length - 1); u >= 0; u -= 1) {
                pixelBoard.removeChild(pixelBoard.childNodes[u]);
            }
        } 
        for (let i = 1; i <= (boardSize ** 2); i += 1) {
            const pixelDiv = document.createElement('div');
            pixelDiv.className = 'pixel';
            pixelBoard.appendChild(pixelDiv);
        }
        
        pixelColorer();
        
    }
    
    createPixelBoard();

    

    document.querySelector('#generate-board').addEventListener('click' , createPixelBoard);

    function firstSelectedColor() {
        const colorBlack = document.querySelector('#color-1');
        colorBlack.classList.add('selected');
    }
    firstSelectedColor();

    function colorSelector() {
        const colors = document.querySelectorAll('.color');
        for (let i = 0, colorsLength = colors.length; i < colorsLength; i += 1) {
            colors[i].addEventListener('click', function () {
                for (let i2 = 0; i2 < colorsLength; i2 += 1) {
                    if (colors[i2].classList.contains('selected')) {
                        colors[i2].classList.remove('selected');
                    }
                }
                colors[i].classList.add('selected');
            });
        }
    }
    colorSelector();

    function pixelColorer() {
        let pixels = document.querySelectorAll('.pixel');
        for (let i = 0; i < (pixels.length); i += 1) {
            pixels[i].addEventListener('click', function () {
                let colorerColor = window.getComputedStyle(document.querySelector('.color.selected')).backgroundColor;
                if (pixels[i].style.backgroundColor !== colorerColor) {
                    pixels[i].style.backgroundColor = colorerColor;
                } else {
                    pixels[i].style.backgroundColor = 'unset';
                }
            });
        }
    }
    
    function clearButton() {
        const button = document.querySelector('#clear-board');
        button.addEventListener('click', function () {
            const pixels = document.querySelectorAll('.pixel');
            for (let i = 0, pixelsLength = pixels.length; i < pixelsLength; i += 1) {
                pixels[i].style.backgroundColor = 'white';
            }
        });
    }
    clearButton();
  
}