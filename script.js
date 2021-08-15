
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
function creatBox(qtd) {
    for (let i = 0; i < qtd; i += 1) {
        let divLineBox = document.createElement('div');
        for (let j = 0; j < qtd; j += 1) {
            let divBox = document.createElement('div');
            divBox.className = 'pixel';
            divLineBox.appendChild(divBox);
        }
        pixelBoard.appendChild(divLineBox);
    }
}
let n = 5;
creatBox(n);
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
let botao = document.querySelectorAll('button')[0];
botao.innerText = 'Limpar';
// criando a função para limpar
botao.addEventListener('click', clearColor);
// criando a função para limpar
function clearColor(evento) {
    for (let i = 0; i < 25; i += 1) {
        let limpar = document.querySelectorAll('.pixel')[i];
        limpar.style.backgroundColor = 'white';
        evento.target.style.backgroundColor = limpar;
    }
}

let botaoB = document.querySelectorAll('button')[1];
botaoB.innerText = 'VQV';

botaoB.addEventListener('click', function (evento) {
    evento.preventDefault();
    let number = document.querySelector('#board-size');// criando uma variavel o intput
    let value = number.value;// atriuindo o valor do input a variavel numero
    let tagMain = document.querySelectorAll('#pixel-board');
    let divMain = document.querySelectorAll('#pixel-board div');
    let n = 0;
    if (value === '') {
        window.alert('Board inválido!');
    } else if (value > 4 && value < 51) {
        n = value;

        for (let i = 0; i < divMain.length; i += 1) {
            divMain[i].remove();
        }

        // tagMain.removeChild(divMain);

        creatBox(n);
    }
    console.log(n);
    // for (let i = 0; i < n.length; i += 1) {
    //     let boxLittle = document.querySelectorAll('.pixel')[i];
    //     boxLittle.style.backgroundColor = 'white';
    //     boxLittle.style.width = n+'px';
    //     boxLittle.style.height = n+'px';

    // }

    //}
})