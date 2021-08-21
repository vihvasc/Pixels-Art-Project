window.onload = function() {
    let blackSelect = document.querySelector('#black');
    blackSelect.classList.add('selected');
}

//Referência: requisito desenvolvido com ajuda da Adriana Martins.
let colorSelect = document.querySelectorAll('.color');
function selecionaPixel () {
    for (let index = 0; index < colorSelect.length; index += 1) {
        colorSelect[index].addEventListener('click', function(event) {
            event.target.classList.add('selected');
            colorSelect.classList.remove('selected');
        })
    }
}
selecionaPixel()

//digesan 9 gotas 
//enterogermina plus uma vez por dia