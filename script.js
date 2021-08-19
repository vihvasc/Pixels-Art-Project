// fiz a tabela baseada nesse video https://www.youtube.com/watch?v=-dGWaHA3ud8
let botao = document.querySelectorAll('button')
let color = document.querySelectorAll('.color')
let selecinada = color[0] // pegando o primeiro color


function criarLinhas() {
  for (let index = 0; index < 5; index++) {
    const tabela = document.getElementById('pixel-board');
    const divs = document.createElement('div');
    tabela.appendChild(divs);

    for (let i = 0; i < 5; i++) {
      const sessao = document.createElement('section');
      sessao.classList.add('pixel');
      divs.appendChild(sessao);
    }
  }
   
    
    
    
    /* .addEventListener('click',function(){
    document.querySelectorAll('.pixel').style.color= 'rgb(0,0,0)'
    }) */
} 

function selecionar () {

  for (let index = 0; index < color.length; index++) {
    color[index].addEventListener('click',function(event){
     selecinada.classList.remove('selected')
     event.target.classList.add('selected')
     selecinada = event.target
     
   
    })
    
   }
  
}


criarLinhas() 
selecionar()