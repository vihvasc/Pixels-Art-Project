function defineTamanhoDaGrade(tamanho){
let grade = document.querySelector("#pixel-board");

for (i = 0; i < tamanho; i += 1){
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    grade.appendChild(pixel);
    pixel.style.backgroundColor = "white"
}
}
defineTamanhoDaGrade(25)