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


function clickSelectedPixel(event){
let  previousColor= document.querySelector(".selected");
previousColor.classList.remove("selected");
event.target.classList.add("selected");
}




document.querySelector(".pixel").classList.add("selectedP");

let selectedPixel = document.querySelectorAll(".pixel");
for(let index2 = 0 ; index2 < selectedPixel.length; index2 +=1){
    selectedPixel[index2].addEventListener("click",clickTablePixel);
    selectedPixel[index2].addEventListener("click",changeColor);
}

let colors = document.getElementsByClassName("color");
for(let index = 0 ; index < colors.length ; index += 1){
    colors[index].addEventListener("click", clickSelectedPixel);
}


function clickTablePixel(event){
    document.querySelector(".pixel").classList.add(".selectedP");
    let pixelSelected = document.querySelector(".selectedP");
    pixelSelected.classList.remove("selectedP");
    event.target.classList.add("selectedP");
}


function changeColor(){
    let pallet = document.querySelector(".selected").id;
    let pixel2 = document.querySelector(".selectedP");
    pixel2.style.backgroundColor = pallet;
}

