let corPreto = document.getElementById("iPrimeiraCor");
let corAzul = document.getElementById("iSegundaCor");
let corVermelho = document.getElementById("iTerceiraCor");
let corAmarelo = document.getElementById("iQuartaCor");

function addCorAzul(){  
corPreto.classList.remove("selected");
corVermelho.classList.remove("selected");
corAmarelo.classList.remove("selected");
corAzul.classList.add("selected");
}
function addCorPreto(){
    corAzul.classList.remove("selected");
    corVermelho.classList.remove("selected");
    corAmarelo.classList.remove("selected");
    corPreto.classList.add("selected");
}
function addCorVermelho(){
    corPreto.classList.remove("selected");
    corAzul.classList.remove("selected");
    corAmarelo.classList.remove("selected");
    corVermelho.classList.add("selected");
}
function addCorAmarelo(){
    corPreto.classList.remove("selected");
    corAzul.classList.remove("selected");
    corVermelho.classList.remove("selected");
    corAmarelo.classList.add("selected");
}