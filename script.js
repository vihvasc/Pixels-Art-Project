window.onload = function() {
    let blackSelect = document.querySelector('#black');
    blackSelect.classList.add('selected');
}


let colorSelect = document.querySelectorAll('.color');
function selecionaPixel () {
    for (let index = 0; index < colorSelect.length; index += 1) {
        colorSelect[index].addEventListener('click', function(event) {
            colorSelect.classList.remove('selected');
            event.target.classList.add('selected');
            colorSelect = event.target;
        })
    }
}

//digesan 9 gotas 
//enterogermina plus uma vez por dia