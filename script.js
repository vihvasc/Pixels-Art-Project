const cor01 = document.querySelectorAll('.color')[0];
sessionStorage.setItem (cor01, 'black') // pra comecar com a cor preta

const cor02 = document.querySelectorAll('.color')[1];
const cor03 = document.querySelectorAll('.color')[2];
const cor04 = document.querySelectorAll('.color')[3];


function limparQuadro() {
//ao clicar o quadro de pixels é totalmente preenchido de branco
//pesquisado no w3school - https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createelement2
    const limparQuadro = document.querySelector('#clear-board');
    pixel.style.backgroundColor = 'white';
}
limparQuadro.addEventListener('click', limpaQuadro);




window.onload - paginaCarregada
// qdo a página for carregada o elemento cor 01 da paleta deve estar selecionado e na cor preta.
function paginaCarregada(){
    cor01 = black 
}