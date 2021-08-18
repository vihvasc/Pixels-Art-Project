const coresPaleta = document.querySelectorAll(".color")
const lista = ["rgba(0,0,0)","rgba(22,45,34)","rgba(189,66,25)","rgba(40,45,20)"];


// (Requisito 2)
function coresCria() {
    for(let index = 0; index < coresPaleta.length; index+= 1) {
        coresPaleta[index].style.backgroundColor = lista[index];   
    }
}

coresCria()

