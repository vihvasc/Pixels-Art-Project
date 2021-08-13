function titleH1(){
    let titleH1 = document.createElement('h1');
    titleH1.id = 'title';
    titleH1.innerText = 'Paleta de Cores';
    document.body.appendChild(titleH1);
} 
titleH1();

function createDiv() {
  const arrayColor = ['black', 'purple', 'green', 'blue'];
  const divColorFather = document.createElement('div');
  divColorFather.id = 'color-palette';
  document.body.appendChild(divColorFather);
  for (let index = 0; index < 4; index +=1) {
    const divColorSon = document.createElement('div');
    divColorSon.className = 'color';
    divColorSon.style.border = '1px solid black';
    divColorSon.style.backgroundColor = arrayColor[index];
    divColorFather.appendChild(divColorSon);
  }
}
createDiv();