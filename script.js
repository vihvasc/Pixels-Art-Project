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

window.onload = Blacked

function Blacked (){
let ADD = document.querySelector(".color")
  ADD.classList.add("selected")
}


function addSelecteds(){
let AtualColor;
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
}

addSelecteds()
