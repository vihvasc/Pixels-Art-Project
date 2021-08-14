let preto = document.querySelectorAll(".color")[0];
preto.style.backgroundColor = "black";
let vermelho = document.querySelectorAll(".color")[1];
vermelho.style.backgroundColor = "red";
let azul = document.querySelectorAll(".color")[2];
azul.style.backgroundColor = "blue";
let verde = document.querySelectorAll(".color")[3];
verde.style.backgroundColor = "green";

function changeBlackClass(){
    let blackPixel = document.querySelectorAll(".color")[0];
    blackPixel.classList.add("selected");
};
changeBlackClass()


