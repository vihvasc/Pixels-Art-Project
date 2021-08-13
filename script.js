

function createGrid(){
    let gridSize = 5;
    let local = document.querySelector('#pixel-board')
    for (let linhas = 0; linhas < gridSize; linhas++) {
        let divsLinhas = document.createElement('div')
            local.appendChild(divsLinhas)
        for (let colunas = 0; colunas < gridSize; colunas++) {
            let pixel = createPixel()
             divsLinhas.appendChild(pixel)
            
        }
    }
    

}
createGrid()
function createPixel(){ 
    let pixel = document.createElement('div');
        pixel.className = 'pixel';
       return pixel;
}

