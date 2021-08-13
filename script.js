window.onload = function(){

  square()
}


function square(){
  let l = 5;
  let c = 5;
  for(let count = 0; count < l; count ++){
    let pixelBoard = document.querySelectorAll("pixel-board")[count];
    for(let count2 =0; count2 < c; count ++){
      let createSquare = document.createElement('div')
      createSquare.className = 'pixel'
      pixelBoard = appendChild(createSquare);
    } 
  
  }
}

