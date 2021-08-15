const getColor = document.querySelectorAll(".color");
//console.log(getcolor)
for (let i = 0; i < getColor.length; i += 1) {
    getColor[i].addEventListener("click", selectedClass);
}

function coresAleatorias(){
    return '#' + parseInt((Math.random() * 0xFFFFFF)) //cores hexadecimais começam com #, concatena com os valores gerados
    .toString ( 16 ) // converte o valor de numero pra hexadecial
    .padStart ( 6, '0'); // ele força a colocar 0 a esquerda e a ter o tamanho máximo de 6
}

function selectedClass(event) {
    for (let i = 0; i < getColor.length; i += 1) {
        getColor[i].classList.remove("selected")
    } 
    event.target.classList.add("selected");
}
