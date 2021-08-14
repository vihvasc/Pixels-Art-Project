
// adicionando cores as paletas de cores e add a uma variavel
let boxBlackA = document.getElementsByClassName('color')[0];
boxBlackA.style.backgroundColor = 'black';

let boxBlackB = document.getElementsByClassName('color')[1];
boxBlackB.style.backgroundColor = 'Tomato';

let boxBlackC = document.getElementsByClassName('color')[2];
boxBlackC.style.backgroundColor = 'SkyBlue';

let boxBlackD = document.getElementsByClassName('color')[3];
boxBlackD.style.backgroundColor = 'MediumSpringGreen';

let pixelBoard = document.getElementById('pixel-board');
// criando a tela com as boxs
function creatBox() {
    for (let i = 0; i < 5; i += 1) {
        let divLineBox = document.createElement('div');
        for (let j = 0; j < 5; j += 1) {
            let divBox = document.createElement('div');
            divBox.className = 'pixel';
            divLineBox.appendChild(divBox);
        }
        pixelBoard.appendChild(divLineBox);
    }
}

creatBox();
// função para selecionar a cor
function selectColor(evento) {

    let selecionado = document.querySelector('.selected');
    selecionado.classList.remove('selected');
    evento.target.classList.add('selected');
}

boxBlackA.addEventListener('click', selectColor);
boxBlackB.addEventListener('click', selectColor);
boxBlackC.addEventListener('click', selectColor);
boxBlackD.addEventListener('click', selectColor);

let main = document.querySelector('main');

main.addEventListener('click', colorPrint);
// funação para pintar as boxs
function colorPrint(evento) {
    let corSelecionada = document.querySelector('.selected');
    evento.target.style.backgroundColor = corSelecionada.style.backgroundColor;
}
//adicionando o texto limpar no botão
let botao = document.querySelector('button');
botao.innerText = 'Limpar';
// criando a função para limpar
botao.addEventListener('click', clearColor);

function clearColor(evento) {
    for (let i = 0; i < 25; i += 1) {
        let limpar = document.querySelectorAll('.pixel')[i];
        limpar.style.backgroundColor = 'white';
        evento.target.style.backgroundColor = limpar;
    }
    

}