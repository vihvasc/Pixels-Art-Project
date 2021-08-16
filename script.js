//1 - Adicione à página o título "Paleta de Cores".
function criarH1() {
  const novoH1 = document.createElement('h1');
  novoH1.textContent = 'Paleta de Cores';
  novoH1.id = 'title';
  document.getElementById('paleta-de-cores').appendChild(novoH1);
}
criarH1();

// 2 - Adicione à página uma paleta de quatro cores distintas.

// referência: https://css-tricks.com/snippets/javascript/random-hex-color/
function randomColor() {
  let randomColorString = 'FFFFFF';
  while (randomColorString === 'FFFFFF') {
    randomColorString = Math.floor(Math.random()*16777215).toString(16);
    while (randomColorString.length < 6) {
      randomColorString = Math.floor(Math.random()*16777215).toString(16);
    }
  }
  return ('#' + randomColorString);
}

function criarPaleta() {
  let numeroDeCores = 4;
  const paletaDeCores = document.createElement('div');
  paletaDeCores.id = 'color-palette';
  document.getElementById('paleta-de-cores').appendChild(paletaDeCores);

   let cores = [];
   cores[0] = '#000000';

  for(let index = 1; index < numeroDeCores; index += 1) {
    cores[index] = randomColor();
  }

  for(let index = 0; index < numeroDeCores; index += 1) {
    const divColorida = document.createElement('div');
    divColorida.className = 'color';

    divColorida.style.borderColor = 'black';
    divColorida.style.borderStyle = 'solid';
    divColorida.style.borderWidth = '1px';
    divColorida.style.display = 'inline-block';
    divColorida.style.backgroundColor = cores[index];
    divColorida.style.width = '30px';
    divColorida.style.height = '30px';

    paletaDeCores.appendChild(divColorida);
  }
}
criarPaleta();
