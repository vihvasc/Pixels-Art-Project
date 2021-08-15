// fiz a tabela baseada nesse video https://www.youtube.com/watch?v=-dGWaHA3ud8




 function criarLinhas() {
 
  for (let index = 0; index < 5; index++) {
    let tabela = document.getElementById('pixel-board');
    let divs = document.createElement('div')
    tabela.appendChild(divs)
       
    for (let i = 0; i < 5; i++) {
    let criar =  document.createElement('section')
       criar.classList.add('pixel')
      divs.appendChild(criar)
      
    }

  }
  

}
 criarLinhas()

 