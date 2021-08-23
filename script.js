window.onload = function (){

    //chama a função makeBox
    makeBox();
}

function makeBox(){

    
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
    
    
    
    }
    
}