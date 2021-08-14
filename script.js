function criarPaletas() {
  const div = document.getElementById('color-palette');
  const ul = document.createElement('ul');
  div.appendChild(ul);
  
  const cores = ['black', 'red', 'blue', 'green'];

  for (let i = 0; i < cores.length; i += 1) {
    const li = document.createElement('li');
    li.className = 'color';
    if(i === 0) {
      li.className += " selected";
    }
    li.style.backgroundColor = cores[i];
    ul.appendChild(li);
  }
}

criarPaletas();

function adicionarEscutadores() {
  const li = document.getElementsByTagName('li');
  for (let elemento of li) {
    elemento.addEventListener('click', mudarClasse);
  }
}

function mudarClasse(elemento) {
  document.querySelector('#efeito').play();
  elemento.target.className += ' selected efeito';
  pegarElementosLi(elemento);
}

function pegarElementosLi(elemento) {
  let selecionado = document.getElementsByClassName('selected');
  if(selecionado.length > 1) {
    deletarLi(elemento, selecionado);
  }
}

function deletarLi(elemento, listali) {
  for (let i of listali) {
    if(i !== elemento.target) {
      i.className = 'color';
    }
  }
}

adicionarEscutadores();

function criarQuadrosDePixels() {
  let linha = document.getElementsByClassName('linha');
  for(let i = 0; i < linha.length; i += 1) {
    for(let gerar = 1; gerar < 6; gerar += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      linha[i].appendChild(pixel);
    }
  }
}

criarQuadrosDePixels();