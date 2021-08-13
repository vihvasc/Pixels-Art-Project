function titlePage() {
    let h1Tag = document.createElement('h1');
    h1Tag.id = 'title';
    h1Tag.innerText = 'Paleta de Cores';
    document.body.appendChild(h1Tag);
    return h1Tag;
}
titlePage();

