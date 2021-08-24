//FUNÇÃO LIMPAR
const bottonLimpar = document.getElementById('clear-board');
bottonLimpar.addEventListener('click', Limpar);

function Limpar(){
    const allIn = document.getElementsByClassName('pixel');
          
        for (let i = 0; i < allIn.length; i += 1) {
          allIn[i].style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }    

    //PINTANDO PIXELS
    function pintandoPixels() {
        let pixelsGotcha = document.querySelectorAll('.pixel');
      
        for (let index = 0; index < pixelsGotcha.length; index++) {
            pixelsGotcha[index].addEventListener('click', Pintar);
        }
      
        function Pintar(event) {
          let corSelecionada = document.querySelector('.selected');
          event.target.style.backgroundColor = corSelecionada.style.backgroundColor;
        }
      }
      pintandoPixels();
      
      //CORES ALEATORIAS, EXCETO O PRETO
      function coresAleatorias() {
        let paletaRed = document.querySelector('#red');
        let paletaVerde = document.querySelector('#green');
        let paletaAzul = document.querySelector('#blue');
        let tresCores = [paletaRed, paletaVerde, paletaAzul];
      
        for (let index = 0; index < tresCores.length; index++) {
          let resultadoUm = Math.random() * 255;
          let resultadoDois = Math.random() * 255;
          let resultadoTres = Math.random() * 255;
      
          tresCores[index].style.backgroundColor = 'rgb(' + resultadoUm + ', ' + resultadoDois + ', ' + resultadoTres + ')';
        }
      }
      //Dos testes que fiz no npm test não estava conseguindo
      //fazer a função carregar com o window.onload corretamente
      coresAleatorias(); 


    
        
    

    //Pegando cor selecionada e .select
    let corPaleta = document.getElementsByClassName("color");

    function selecionarCor(event) {
        const SelecionaCor = document.querySelector(".selected");
        SelecionaCor.classList.remove("selected");
        event.target.classList.add("selected");
    }

    function corClick() {
        for (i = 0; i < corPaleta.length; i += 1) {
            corPaleta[i].addEventListener("click", selecionarCor);
        }
    }
    corClick();