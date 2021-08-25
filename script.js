window.onload = function (){

    //chama a função makeBox
    makeBox();
    selecionada();
    limparEscutador();
    
}

function makeBox(){

    let  selected = document.querySelector(".selected");

    // estrutura para criar 25 divs
    for (let contador = 0; contador < 25; contador++){
    // cria uma variavel que chama o pixel-board    
    let pixelBoard = document.getElementById("pixel-board");
    //cria a div pixel que será inserida dentro do pixel board
    let divBox = document.createElement("div");
    
    // insere a divBox dentro da pixel-board
    pixelBoard.appendChild(divBox);
    
    
    divBox.className = "pixel";
    divBox.style.display = "inline-block";
    divBox.style.padding = "0px";
    divBox.style.margin = "0px"
    divBox.style.backgroundColor = "rgb(255,255,255)"
    divBox.style.height = "40px";
    divBox.style.width  = "40px";
    divBox.style.border = "1px solid rgb(0,0,0)"
    divBox.style.margin = "block"
    divBox.addEventListener('click',function (event){
    
        let elementSelected = document.querySelector('.selected');
        let elementColor = window.getComputedStyle(elementSelected).backgroundColor;
        let elementClicked = event.target;
    
        elementClicked.style.backgroundColor = elementColor;
    
    });
    
    }
    
}

function selecionada(){

    let buttonPreto = document.getElementById('preto');
    let buttonAzul = document.getElementById('azul');
    let buttonAmarelo = document.getElementById('amarelo');
    let buttonVermelho = document.getElementById('vermelho');

    buttonPreto.addEventListener('click',corSelecionadaPreto);
    buttonAzul.addEventListener('click',corSelecionadaAzul);
    buttonAmarelo.addEventListener('click',corSelecionadaAmarelo);
    buttonVermelho.addEventListener('click',corSelecionadaVermelho);

}

function corSelecionadaPreto(){

    let preto = document.getElementById('preto');
    let amarelo = document.getElementById('amarelo');
    let azul = document.getElementById('azul');
    let vermelho = document.getElementById('vermelho');

    preto.className = "color selected";
    amarelo.className = "color";
    azul.className = "color";
    vermelho.className = "color";
}

function corSelecionadaAmarelo(){

    let preto = document.getElementById('preto');
    let amarelo = document.getElementById('amarelo');
    let azul = document.getElementById('azul');
    let vermelho = document.getElementById('vermelho');

    preto.className = "color";
    amarelo.className = "color selected";
    azul.className = "color";
    vermelho.className = "color";
}

function corSelecionadaAzul(){

    let preto = document.getElementById('preto');
    let amarelo = document.getElementById('amarelo');
    let azul = document.getElementById('azul');
    let vermelho = document.getElementById('vermelho');

    preto.className = "color";
    amarelo.className = "color";
    azul.className = "color selected";
    vermelho.className = "color";
}

function corSelecionadaVermelho(){

    let preto = document.getElementById('preto');
    let amarelo = document.getElementById('amarelo');
    let azul = document.getElementById('azul');
    let vermelho = document.getElementById('vermelho');

    preto.className = "color";
    amarelo.className = "color";
    azul.className = "color";
    vermelho.className = "color selected";
}

function limparEscutador (){
    let botaolimpar = document.getElementById('clear-board');
    botaolimpar.addEventListener('click',limpar);
}
function limpar(){
    let pixel = document.querySelectorAll('.pixel');
    
    for ( var contador = 0; contador < pixel.length; contador++){
        pixel[contador].style.backgroundColor = "rgb(255,255,255)";
    }
   
}