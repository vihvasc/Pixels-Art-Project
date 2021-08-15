window.onload = function (){
    
    }
    
    let divColor = document.querySelectorAll(".color");;
    for (index = 0; index < divColor.length; index += 1){
        //let divColorSelected = divColor[index];         
        divColor[index].addEventListener('click', verificaClasse);
       
   }  
   function verificaClasse(event){  
        let selectedClass = document.querySelector('.selected') ;              
          selectedClass.classList.remove('selected');
          event.target.classList.add('selected')
       
   }
     
    
    


