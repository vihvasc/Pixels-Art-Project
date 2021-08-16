window.onload = function (){
    
    }
    // Seleciona cor com a classe selected
    let divColor = document.querySelectorAll(".color");;
    for (index = 0; index < divColor.length; index += 1){              
        divColor[index].addEventListener('click', verificaClasse);
       
   }  
   function verificaClasse(event){  
  let selectedClass = document.querySelector('.selected');              
          selectedClass.classList.remove('selected');
          event.target.classList.add('selected')
       
   }
     
   // Preenche pixel com a cor desejada 
   let selecionaDiv = document.querySelectorAll(".pixel");
   for (i = 0; i < selecionaDiv.length; i += 1){
    selecionaDiv[i].addEventListener('click', alteraCor)
   }
   
    function alteraCor(obj){
        let selectedClass = document.querySelector('.selected');       
         
            obj.target.style.backgroundColor = selectedClass.style.backgroundColor; 
                         
            
          }
              
      // Limpa a cor
     function limpar(){
        let pixels = document.querySelectorAll('.pixel');
        for (let pixel of pixels){
            pixel.style.backgroundColor = 'white';
           }
        console.log(pixels)
     }
             
            
          


    
    