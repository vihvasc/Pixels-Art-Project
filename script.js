let classe = document.getElementsByClassName('color')

for(var i in classe){
    let valor = classe[i].textContent
    classe[i].style.backgroundColor = valor
}