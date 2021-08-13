window.onload = corbranca;

function corbranca (){
let pixels = document.getElementsByClassName("pixel")
for(i = 0; i < pixels.length; i +=1) {
    pixels[i].style.backgroundColor = "white"
}
}

let cor1 = document.getElementsByClassName("color")[0]
cor1.style.backgroundColor = "black";

let cor2 = document.getElementsByClassName("color")[1]
cor2.style.backgroundColor = "red";

let cor3 = document.getElementsByClassName("color")[2]
cor3.style.backgroundColor = "blue";

let cor4 = document.getElementsByClassName("color")[3]
cor4.style.backgroundColor = "purple";
