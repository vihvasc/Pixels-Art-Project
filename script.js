window.onload = pixelArts;

function pixelArts() {
    pageTitle();
}

function pageTitle() {
    titleH1 = document.createElement('h1');
    titleH1.id = 'title';
    titleH1.innerText = 'Paleta de Cores';
    document.body.appendChild(titleH1);
}