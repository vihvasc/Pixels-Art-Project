//1 - Adicione à página o título "Paleta de Cores".
function criarH1() {
  const novoH1 = document.createElement('h1');
  novoH1.textContent = 'Paleta de Cores';
  novoH1.id = 'title';
  document.body.appendChild(novoH1);
}
criarH1();

