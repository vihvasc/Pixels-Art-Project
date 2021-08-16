let linha1 = window.document.getElementById("linha1")
for (let index = 0; index < 5; index += 1){
let div = document.createElement("div");
div.className = "pixel";
linha1.appendChild(div);
}
let linha2 = window.document.getElementById("linha2")
for (let index = 0; index < 5; index += 1){
let div = document.createElement("div");
div.className = "pixel";
linha2.appendChild(div);
}
let linha3 = window.document.getElementById("linha3")
for (let index = 0; index < 5; index += 1){
let div = document.createElement("div");
div.className = "pixel";
linha3.appendChild(div);
}
let linha4 = window.document.getElementById("linha4")
for (let index = 0; index < 5; index += 1){
let div = document.createElement("div");
div.className = "pixel";
linha4.appendChild(div);
}
let linha5 = window.document.getElementById("linha5")
for (let index = 0; index < 5; index += 1){
let div = document.createElement("div");
div.className = "pixel";
linha5.appendChild(div);
}

let black = document.getElementById("black");
let red = document.getElementById("red");
let orangered = document.getElementById("orangered");
let green = document.getElementById("green");

black.addEventListener("click", blackSelect);
function blackSelect(){
    black.className = "color selected";
    red.className = "color";
    orangered.className = "color";
    green.className = "color";
    console.log(orangered, red, black, green);
}
red.addEventListener("click", redSelect);
function redSelect(){
    red.className = "color selected";
    black.className = "color";
    orangered.className = "color";
    green.className = "color";
    console.log(orangered, red, black, green);
}
orangered.addEventListener("click", orangeredSelect);
function orangeredSelect(){
    orangered.className = "color selected";
    red.className = "color";
    black.className = "color";
    green.className = "color";
    console.log(orangered, red, black, green);
}
green.addEventListener("click", greenSelect);
function greenSelect(){
    green.className = "color selected";
    orangered.className = "color";
    red.className = "color";
    black.className = "color";
    console.log(orangered, red, black, green);
}
let pixel = document.getElementsByClassName("pixel");
let colorSelected = document.getElementsByClassName("color selected");
for(let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', click);
    pixel[i].id = i;
    function click(){
    document.getElementById(i).style.backgroundColor = colorSelected[0].id;
    }
}
let btnClear = document.getElementById("clear-board");
btnClear.addEventListener("click", limpar);
function limpar(){
    for(let i = 0; i < pixel.length; i++) {
        pixel[i].id = i;
        document.getElementById(i).style.backgroundColor = "white";
}
}