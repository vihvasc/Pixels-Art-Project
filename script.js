var penColor = 'black';

function setPenColor(color){
  penColor = color;
}

function setPixelColor(pixel){
  pixel.style.backgroundColor = penColor;
}

function cleanPixels(){
  var pixels = document.querySelectorAll(".pixel");
  for(let pixel of pixels){
    pixel.style.backgroundColor = "#fff";
  }
}