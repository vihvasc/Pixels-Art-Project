const palleteColors = ['red', 'green', 'blue', 'orange']


function addClassAndBackgroundToColors(colors){
  const colorsUl = document.querySelector('.colors-ul')

  for(let i = 0; i < colors.length; i += 1){
    li = document.createElement('li')
    li.classList.add('color')
    li.classList.add(colors[i])
    li.style.backgroundColor = colors[i]
    colorsUl.appendChild(li)
  }
}
addClassAndBackgroundToColors(palleteColors)
