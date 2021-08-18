const coresPaleta = document.querySelectorAll(".color")
const lista = ["#000","#f00","#00f","#008000" ];

function coresCria() {
    for(let index = 0; index < coresPaleta.length; index+= 1) {
        coresPaleta[index].style.backgroundColor = lista[index];
    }
}

coresCria()