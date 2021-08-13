// 01. Adicione à página o título "Paleta de Cores".
// O título deverá ficar dentro de uma tag h1 com o id denominado title;
// O texto do título deve ser exatamente "Paleta de Cores".
function criarElementoH1() {
  const novoH1 = document.createElement('h1');
  novoH1.textContent = 'Paleta de Cores';
  novoH1.id = 'title';

  document.body.appendChild(novoH1);
};
criarElementoH1();

// 02. Adicione à página uma paleta de quatro cores distintas.
// A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual da paleta de cores deve possuir a classe color;
// A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;
// Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;
// A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

function criarPaletaCores() {
  const paletaCores = document.createElement('div');
  paletaCores.id = 'color-palette';
  const totalCores = 4;

  document.body.appendChild(paletaCores);
    
  for (let index = 0; index < totalCores; index += 1) {
    const novaCor = document.createElement('div');
    novaCor.className = 'color';
    novaCor.style.borderColor = 'black';
    novaCor.style.borderStyle = 'solid';
    novaCor.style.borderWidth = '1px';
    novaCor.style.display = 'inline-block';
    paletaCores.appendChild(novaCor);
  }
}
criarPaletaCores();