window.onload = function(){
let colorPalette = document.getElementsByClassName("color");
for(let index = 0; index < colorPalette.length; index +=1){
    colorPalette[index].addEventListener("click", recebeClick);
}

function recebeClick(color){
    for(let index =0; index < colorPalette.length; index += 1){
        if(colorPalette[index].classList.contains("selected")){
            colorPalette[index].classList.toggle("selected")
        }
    }
    color.target.classList.toggle("selected")
}
}