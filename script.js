window.onload = function() {

    function createColorPalette() {
        for (let i = 1; i <= 4; i += 1) {
            let colorPalette = document.querySelector('#color-palette');
            let colorDiv = document.createElement('div');
            colorDiv.className = 'color';
            colorDiv.id = `${'color-' + i}`;
            colorPalette.appendChild(colorDiv);
        }
    }
    createColorPalette();

    function createPixelBoard() {
        for (let i = 1; i <= 25; i += 1) {
            let PixelBoard = document.querySelector('#pixel-board');
            let pixelDiv = document.createElement('div');
            pixelDiv.className = 'pixel';
            PixelBoard.appendChild(pixelDiv);
        }
    }
    createPixelBoard();

    function firstSelectedColor() {
        let colorBlack = document.querySelector('#color-1');
        colorBlack.classList.add('selected');
    }
    firstSelectedColor();

    function colorSelector() {
        let colors = document.querySelectorAll('.color');
        for (let i = 0, colorsLength = colors.length; i < colorsLength; i += 1) {
            colors[i].addEventListener('click', function() {
                for (let i2 = 0; i2 < colorsLength; i2 += 1) {
                    if (colors[i2].classList.contains('selected')) {
                        colors[i2].classList.remove('selected');
                    }
                }
                colors[i].classList.add('selected');
            })
        }
    }
    colorSelector();

    function pixelColorer() {
        let pixels = document.querySelectorAll('.pixel');
        for (let i = 0, pixelsLength = pixels.length; i < pixelsLength; i += 1) {
            pixels[i].addEventListener('click', function() {
                let colorerColor = window.getComputedStyle(document.querySelector('.color.selected')).backgroundColor;
                if (pixels[i].style.backgroundColor !== colorerColor) {
                    pixels[i].style.backgroundColor = colorerColor;
                } else {
                    pixels[i].style.backgroundColor = 'unset';
                }
            })
        }
    }
    pixelColorer();

    function clearButton() {
        let button = document.querySelector('#clear-board');
        button.addEventListener('click', function() {
            let pixels = document.querySelectorAll('.pixel');
            for (let i = 0, pixelsLength = pixels.length; i < pixelsLength; i += 1) {
                pixels[i].style.backgroundColor = 'white'
            }
        })
    }
    clearButton();
  
}