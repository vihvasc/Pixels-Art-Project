  window.onload = function() {
  const boxPaleta = 4;
  const linhaPaleta = document.querySelector("#color-palette");
  //const colorBoxs = document.querySelectorAll(".color");
  // const colors = {cor: 'black', cor: 'green', cor: 'yellow', cor: 'red'}
  
  lineCreator(linhaPaleta);
  //toColor();


  function boxCreator(classe) {
    let box = document.createElement("div");
    box.className = classe; 
    return box;
  }
  
  function lineCreator(linha) {
    const colors = ['black', 'green', 'yellow', 'red'];
    for (let i = 0; i < colors.length; i += 1) {
      let colorBox = boxCreator("color");

      colorBox.style.backgroundColor =colors[i];
      linha.appendChild(colorBox);
    }
  }

  // function toColor() {
  //   const colors = ['black', 'green', 'yellow', 'red'];
  //   const colorBoxs = document.querySelectorAll(".color");
  //     for (let i = 0; i <= colors.length; i += 1) {
  //     colorBoxs[i].style.backgroundColor =colors[i];  
  //   }
  // }
}