function criarGrade(tamanho){
let grade = document.querySelector("#pixel-board");

for (i = 0; i < tamanho; i += 1){
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    grade.appendChild(pixel);
    pixel.style.backgroundColor = "white"
    pixel.addEventListener("click", colorirPixel)
}
}
criarGrade(25)
let color = document.getElementsByClassName("color");



function selecionaCor(event) {
    const corSelecionada = document.querySelector(".selected");
    corSelecionada.classList.remove("selected");
    event.target.classList.add("selected");
}
function addEvents() {
    for (i = 0; i < color.length; i += 1) {
        color[i].addEventListener("click", selecionaCor);
    }
}




let corSelecionada = document.querySelector(".selected")

function criaPaleta(cores) {
    const paleta = document.getElementById("color-palette");

    for (i = 0; i < cores.length; i += 1) {
    let cor = document.createElement("div");
    paleta.appendChild(cor);
    cor.className = "color " + "cor" + (i + 1);
    cor.style.backgroundColor = cores[i];
    }
}
criaPaleta(["black", "red", "blue", "green"]);



function colorirPixel(event) {
    let pixel = event.target;
    pixel.style.backgroundColor = document.querySelector(".selected").style.backgroundColor;
}


let blackColor = document.querySelector(".cor1");
blackColor.classList.add("selected")

addEvents();