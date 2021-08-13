function paletteColors() {
    let paletteColors = document.getElementById('color-palette');
    let contentColor = document.getElementsByClassName('color');
    let colors = ['black', 'yellow', 'green', 'red'];

    for (let index = 0; index < contentColor.length; index += 1) {
        contentColor[index].style.backgroundColor = colors[index];
    }
}

paletteColors();