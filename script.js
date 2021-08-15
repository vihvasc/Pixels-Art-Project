const cor01 = document.querySelectorAll('.color')[0];
cor01.addEventListener("click", coresAleatorias);
const cor02 = document.querySelectorAll('.color')[1];
cor02.addEventListener("click", coresAleatorias);
const cor03 = document.querySelectorAll('.color')[2];
cor03.addEventListener("click", coresAleatorias);
const cor04 = document.querySelectorAll('.color')[3];
cor04.addEventListener("click", coresAleatorias);


//funçao cores aleatorias - com cores hexadecimais
//https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function coresAleatorias(){
    return '#' + parseInt((Math.random() * 0xFFFFFF)) //cores hexadecimais começam com #, concatena com os valores gerados
    .toString ( 16 ) // converte o valor de numero pra hexadecial
    .padStart ( 6, '0'); // ele força a colocar 0 a esquerda e a ter o tamanho máximo de 6
}

function selecionarCores(){
    let paleta = document.querySelectorAll(".color");
    for (let cores of paleta){
        if(cores.className == "selected") {
            cores.style.backgroundColor = "black"
        }
        else { cores.style.backgroundColor = coresAleatorias()}
    }
}
selecionarCores()

function limparQuadro() {
//ao clicar o quadro de pixels é totalmente preenchido de branco
//pesquisado no w3school - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2
    const limparQuadro = document.querySelector('#clear-board');
    pixel.style.backgroundColor = 'white';
}
limparQuadro.addEventListener("click", limparQuadro);



window.onload - paginaCarregada
// qdo a página for carregada o elemento cor 01 da paleta deve estar selecionado e na cor preta.
function paginaCarregada(){
    cor01 = black 
}