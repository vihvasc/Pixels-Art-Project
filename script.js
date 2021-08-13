let classe = document.getElementsByClassName('color');

for (let i = 0; i < classe.length; i += 1) {
  let valor = classe[i].textContent;
  classe[i].style.backgroundColor = valor;
}

function criaQuadrado(string) {
  for (let i = 0; i < 5; i += 1) {
    let box = document.createElement('div');
    box.className = 'pixel';
    box.style.display = 'inline-block';
    box.style.backgroundColor = 'white';
    box.style.color = 'white';
    let fileira = document.getElementsByClassName(string)[0];
    fileira.appendChild(box);
  }
}
criaQuadrado('fileira1');
criaQuadrado('fileira2');
criaQuadrado('fileira3');
criaQuadrado('fileira4');
criaQuadrado('fileira5');
