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
}

