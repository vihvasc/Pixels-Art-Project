let ChoiceSizeQuadrado = 5
let altura = ChoiceSizeQuadrado
let largura = ChoiceSizeQuadrado
 
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

function clicksColors (){
    let AtualColor = "";
    window.onload = Blacked
    function Blacked(){
  
    let firstColor = "black"
     AtualColor = firstColor.value;
    
    }
    let black = document.querySelectorAll(".color")[1]
 Peç.addEventListener("click", MudaCorDoBackground)
       function MudaCorDoBackground (){

        AtualColor = Palette.style.backgroundColr
        console.log("AtualColor")
       }
      } 
   


clicksColors()