const bottonLimpar = document.getElementById('clear-board');
bottonLimpar.addEventListener('click', Limpar);

function Limpar(){
    const allIn = document.getElementsByClassName('pixel');
    allIn.style.backgroundColor = 'red';}
    //document.body.style.backgroundColor = 'green'; }

    let color = document.getElementsByClassName("color");

    function selecionaCor(event) {
        const corSelecionada = document.querySelector(".selected");
        corSelecionada.classList.remove("selected");
        event.target.classList.add("selected");
    }

    function addEvents() {
        for (i = 0; i < color.length; i += 1) {
            color[i].addEventListener("click", selecionaCor);
        }
    }
    addEvents();