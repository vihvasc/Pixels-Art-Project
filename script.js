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
}

