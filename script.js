let corPreto = document.getElementById("iPrimeiraCor");
let corAzul = document.getElementById("iSegundaCor");
let corVermelho = document.getElementById("iTerceiraCor");
let corAmarelo = document.getElementById("iQuartaCor");

function addCorAzul(){  
    corPreto.classList.remove("selected");
    corVermelho.classList.remove("selected");
    corAmarelo.classList.remove("selected");
    corAzul.classList.add("selected");
}
function addCorPreto(){
    corAzul.classList.remove("selected");
    corVermelho.classList.remove("selected");
    corAmarelo.classList.remove("selected");
    corPreto.classList.add("selected");
}
function addCorVermelho(){
    corPreto.classList.remove("selected");
    corAzul.classList.remove("selected");
    corAmarelo.classList.remove("selected");
    corVermelho.classList.add("selected");
}
function addCorAmarelo(){
    corPreto.classList.remove("selected");
    corAzul.classList.remove("selected");
    corVermelho.classList.remove("selected");
    corAmarelo.classList.add("selected");
}
function pintura1(){
        document.getElementsByClassName("pixel")[0].style.backgroundColor = "black";
}
function pintura2(){
    document.getElementsByClassName("pixel")[1].style.backgroundColor = "black";
}
function pintura3(){
    document.getElementsByClassName("pixel")[2].style.backgroundColor = "black";
}
function pintura4(){
    document.getElementsByClassName("pixel")[3].style.backgroundColor = "black";
}
function pintura5(){
    document.getElementsByClassName("pixel")[4].style.backgroundColor = "black";
}
function pintura6(){
    document.getElementsByClassName("pixel")[5].style.backgroundColor = "black";
}
function pintura7(){
    document.getElementsByClassName("pixel")[6].style.backgroundColor = "black";
}
function pintura8(){
    document.getElementsByClassName("pixel")[7].style.backgroundColor = "black";
}
function pintura9(){
    document.getElementsByClassName("pixel")[8].style.backgroundColor = "black";
}
function pintura10(){
    document.getElementsByClassName("pixel")[9].style.backgroundColor = "black";
}
function pintura11(){
    document.getElementsByClassName("pixel")[10].style.backgroundColor = "black";
}
function pintura12(){
    document.getElementsByClassName("pixel")[11].style.backgroundColor = "black";
}
function pintura13(){
    document.getElementsByClassName("pixel")[12].style.backgroundColor = "black";
}
function pintura14(){
    document.getElementsByClassName("pixel")[13].style.backgroundColor = "black";
}
function pintura15(){
    document.getElementsByClassName("pixel")[14].style.backgroundColor = "black";
}
function pintura16(){
    document.getElementsByClassName("pixel")[15].style.backgroundColor = "black";
}
function pintura17(){
    document.getElementsByClassName("pixel")[16].style.backgroundColor = "black";
}
function pintura18(){
    document.getElementsByClassName("pixel")[17].style.backgroundColor = "black";
}
function pintura19(){
    document.getElementsByClassName("pixel")[18].style.backgroundColor = "black";
}
function pintura20(){
    document.getElementsByClassName("pixel")[19].style.backgroundColor = "black";
}
function pintura21(){
    document.getElementsByClassName("pixel")[20].style.backgroundColor = "black";
}
function pintura22(){
    document.getElementsByClassName("pixel")[21].style.backgroundColor = "black";
}
function pintura23(){
    document.getElementsByClassName("pixel")[22].style.backgroundColor = "black";
}
function pintura24(){
    document.getElementsByClassName("pixel")[23].style.backgroundColor = "black";
}
function pintura25(){
    document.getElementsByClassName("pixel")[24].style.backgroundColor = "black";
}
function limpeza(){
document.getElementsByClassName("pixel")[0].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[1].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[2].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[3].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[4].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[5].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[6].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[7].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[8].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[9].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[10].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[11].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[12].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[13].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[14].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[15].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[16].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[17].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[18].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[19].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[20].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[21].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[22].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[23].style.backgroundColor= "white";
document.getElementsByClassName("pixel")[24].style.backgroundColor= "white";
}
console.log(limpeza())