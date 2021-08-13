function colorPaletteSquares() {
    const colors = ['red', 'blue', 'black', 'green']
    let colorPalette = document.getElementById('color-palette')
    for (let index = 0; index < colors.length; index += 1) {
        let colorsDiv = document.createElement('div')
        colorsDiv.className = 'color'
        colorPalette.appendChild(colorsDiv)
        colorsDiv.style.display = 'inline-block'
        colorsDiv.style.backgroundColor = colors[index]   
    }
}
colorPaletteSquares()