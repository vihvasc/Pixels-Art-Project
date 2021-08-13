var buttonBlack = document.querySelector('.color')
buttonBlack.classList.add('selected')
function createGrid(){
    numberOfLines = 5;
    numberOfColumns = 5;
    for(let index = 0; index < numberOfLines; index += 1){
        let line = document.querySelectorAll('.line-pixel')[index]
        for(let index2 = 0; index2 < numberOfColumns; index2 +=1 ){
            let pixelBox = document.createElement('div')
            pixelBox.className = 'pixel'
            line.appendChild(pixelBox) 
        }
    }
}
createGrid();

