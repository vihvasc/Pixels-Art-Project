window.onload = function (){
    
    }
    
    let divColor = document.querySelectorAll(".color");;
    for (index = 0; index < divColor.length; index += 1){              
        divColor[index].addEventListener('click', verificaClasse);
       
   }  
   function verificaClasse(event){  
  let selectedClass = document.querySelector('.selected');              
          selectedClass.classList.remove('selected');
          event.target .classList.add('selected')
       
   }
     
    
   let selecionaDiv = document.querySelectorAll(".pixel");
   for (i = 0; i < selecionaDiv.length; i += 1){
    selecionaDiv[i].addEventListener('click', alteraCor)
   }
   
    function alteraCor(obj){
        let selectedClass = document.querySelector('.selected');       
         
            obj.target.style.backgroundColor = selectedClass.style.backgroundColor; 
          }
         
      


    
    