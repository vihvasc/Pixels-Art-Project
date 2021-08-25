var currentClass =undefined
var pixels = document.getElementsByClassName("pixel")
var colors = document.getElementsByClassName("color")
var colorClass = undefined
var elements = undefined
const input = document.querySelector('#borracha')
const input1 = document.querySelectorAll("#clear-board")

function clickPixel (event) {
    let classPixel = event.target
    classPixel.className = currentClass
}

function clickPalette (event) { 
    elements = document.querySelector('#color-palette').children
    for(let i = 0; i < elements.length; i++) {
         for(let o = 0; o < elements[i].classList.length; o++)
            if( elements[i].classList[o] === "selected"){
            elements[i].classList.remove("selected")
            }
    }
    colorClass =  event.target
    currentClass = colorClass.className 
    colorClass.classList.add("selected")
}

function selectBlackListener () {
    let Black = document.querySelector(".black").classList[1]
    currentClass = Black
    document.getElementsByClassName("black")[0].classList.add("selected")
    
    for(let i = 0; i < pixels.length; i++){
        pixels[i].addEventListener("click",clickPixel)
    };

    for(let i = 0; i < colors.length; i++){
        colors[i].addEventListener("click", clickPalette)
    }
input.addEventListener("click", erase)
    function erase () {
        currentClass = "pixel"
    }
};
window.onload = selectBlackListener

