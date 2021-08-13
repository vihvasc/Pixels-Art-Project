function titlePage() {
    let h1Tag = document.createElement('h1');
    h1Tag.id = 'title';
    h1Tag.innerText = 'Paleta de Cores';
    document.body.appendChild(h1Tag);
    return h1Tag;
}
titlePage();

function colorPalette() {
    let paleta = ['black', 'green', 'purple', 'orange'];
    let divTag = document.createElement('div');
    divTag.id = 'color-palette';
    document.body.appendChild(divTag);

    for (let i = 0; i < paleta.length; i ++) {
        let paletteTag = document.createElement('button');
        paletteTag.className = 'color';
        document.getElementById('color-palette').appendChild(paletteTag);
        paletteTag.style.backgroundColor = paleta[i];
    }
    return paletteTag;
}
colorPalette();

