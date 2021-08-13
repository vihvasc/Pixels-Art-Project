let classe = document.getElementsByClassName('color')

for(let i = 0; i < classe.length; i+= 1){
    let valor = classe[i].textContent
    classe[i].style.backgroundColor = valor
}