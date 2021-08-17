window.onload = function () {


  let colorClass = document.querySelectorAll(".color");

  for(count = 0; count < colorClass.length; count ++){
    colorClass[count].addEventListener("click", remove);
  }
  
  
  function remove(event) {
    const clicked = event.target;
    for(let count = 0; count < colorClass.length; count ++){
      colorClass[count].classList.remove("selected");
    }

    if(clicked.classList.contains("selected")){
      clicked.classList.remove("selected");
    }else {
      clicked.classList.add("selected");
    }
  }

  let selectPixel = document.querySelectorAll(".pixel");

  for(let count = 0; count < selectPixel.length; count++) {
    selectPixel[count].addEventListener("click", setColor)
  }
  
  function setColor(event){
    const selectedColor = document.querySelector(".selected");
    console.log(selectedColor.innerText);

    const clicked2 = event.target
    console.log(clicked2);
    
    if(selectedColor.innerText === 'Preto') {
      clicked2.style.backgroundColor = "black"
    }else if(selectedColor.innerText === 'Vermelho') {
      clicked2.style.backgroundColor = "red"
    }else if(selectedColor.innerText === 'Verde') {
      clicked2.style.backgroundColor = 'green'
    }else if(selectedColor.innerText === 'Azul') {
      clicked2.style.backgroundColor = 'blue'
    }
    
      
    
  
  }

}


  


