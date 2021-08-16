

let ChoiceSizeQuadrado = 5
let last = document.querySelectorAll(".pixel")[4]

function CreatQuadroDePixels (){
let number = 0


    for (let i = 1; i <= ChoiceSizeQuadrado; i+= 1){
    
    let CreatPixel = document.createElement('div')
    let SectionPixels = document.getElementById("pixel-board")
    SectionPixels.appendChild(CreatPixel)
  number ++
    CreatPixel.className ="pixel"  
  if(number === 5){
      CreatPixel.classList.add("last")
  }
  
}

}
CreatQuadroDePixels()
CreatQuadroDePixels()
CreatQuadroDePixels()
CreatQuadroDePixels()
CreatQuadroDePixels()

window.onload = addSelecteds





function addSelecteds(){
let AtualColor = "black"
let removeSelectedBlack = document.querySelector("#black")
let removeSelectedRed = document.querySelector("#red")
let removeSelectedGreen = document.querySelector("#green")
let removeSelectedBlue = document.querySelector("#blue")
//ADDblack
let addSelectedsBlack = document.querySelector("#black")
addSelectedsBlack.addEventListener("click", ADDBlackAtualColor)

function ADDBlackAtualColor(){  

removeSelectedBlack.classList.remove("selected")
removeSelectedRed.classList.remove("selected")
removeSelectedGreen.classList.remove("selected")
removeSelectedBlue.classList.remove("selected")
 addSelectedsBlack.classList.add("selected")

AtualColor = document.querySelector("#black").style.backgroundColor

}
// ADDred
let addSelectedsRed = document.querySelector("#red")
addSelectedsRed.addEventListener("click", ADDRedAtualColor)

function ADDRedAtualColor(){  
  removeSelectedBlack.classList.remove("selected")
  removeSelectedRed.classList.remove("selected")
  removeSelectedGreen.classList.remove("selected")
  removeSelectedBlue.classList.remove("selected")

   addSelectedsRed.classList.add("selected")
 

AtualColor = document.querySelector("#red").style.backgroundColor

}
// ADDgreen
let addSelectedsGreen = document.querySelector("#green")
addSelectedsGreen.addEventListener("click", ADDGreenAtualColor)

function ADDGreenAtualColor(){  

  removeSelectedBlack.classList.remove("selected")
removeSelectedRed.classList.remove("selected")
removeSelectedGreen.classList.remove("selected")
removeSelectedBlue.classList.remove("selected")

 addSelectedsGreen.classList.add("selected")

AtualColor = document.querySelector("#green").style.backgroundColor


}
// ADDblue
let addSelectedsBlue = document.querySelector("#blue")
addSelectedsBlue.addEventListener("click", ADDBlueAtualColor)

function ADDBlueAtualColor(){  
  removeSelectedBlack.classList.remove("selected")
  removeSelectedRed.classList.remove("selected")
  removeSelectedGreen.classList.remove("selected")
  removeSelectedBlue.classList.remove("selected")

   addSelectedsBlue.classList.add("selected")

AtualColor = document.querySelector("#blue").style.backgroundColor
console.log(AtualColor)
}
let Pixels = document.querySelectorAll(".pixel")
for (let i = 0; i < Pixels.length; i += 1){
Pixels[i].addEventListener("click",XD)
function XD (){
  Pixels[i].style.backgroundColor = AtualColor
}
}
}

addSelecteds()
function ClearPixels(){
  let Clear = document.createElement("button")
  Clear.innerText = "Limpar"
  let SectionClear = document.getElementById("Clear")
  SectionClear.appendChild(Clear)
  Clear.id = "clear-board"
  let Pixels = document.querySelectorAll(".pixel")
  for (let i = 0; i < Pixels.length; i += 1){
  Clear.addEventListener("click",XD)
  function XD (){
    Pixels[i].style.backgroundColor = "white"
  }
  }
  
  }
  ClearPixels()

