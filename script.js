let black = document.querySelector('#color-black')
let blue = document.querySelector('#color-blue')
let pink = document.querySelector('#color-pink')
let red = document.querySelector('#color-red')

black.classList.add('selected')

let selected = black 

black.addEventListener('click', function() {
    selected.classList.remove('selected')
    black.classList.add('selected')
    selected = black
})

blue.addEventListener('click', function() {
    selected.classList.remove('selected')
    blue.classList.add('selected')
    selected = blue
})

pink.addEventListener('click', function() {
    selected.classList.remove('selected')
    pink.classList.add('selected')
    selected = pink
})

red.addEventListener('click', function() {
    selected.classList.remove('selected')
    red.classList.add('selected')
    selected = red
})
// renderizar os pixels de formar dinamica 
//js definir as divs
let pixelList = document.querySelectorAll('.pixel')

for(let index = 0; index < pixelList.length; index += 1){
    pixelList[index].addEventListener('click', function(){
        pixelList[index].className = 'pixel'
        if (selected == black)
        pixelList[index].className += ' divBlack'
        else if (selected == blue)
        pixelList[index].className += ' divBlue'
        else if (selected == pink)
        pixelList[index].className += ' divPink'
        else if (selected == red)
        pixelList[index].className += ' divRed'
    })
}


