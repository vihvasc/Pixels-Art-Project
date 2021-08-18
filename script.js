let cor1 = document.getElementById('color1');
let cor2 = document.getElementById('color2');
let cor3 = document.getElementById('color3');
let cor4 = document.getElementById('color4');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'blue';
cor3.style.backgroundColor = 'red';
cor4.style.backgroundColor = 'yellow';

cor1.addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected');
    cor1.classList.add('selected');
})

cor2.addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected');
    cor2.classList.add('selected');
})

cor3.addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected');
    cor3.classList.add('selected');
})

cor4.addEventListener('click', function(){
    document.querySelector('.selected').classList.remove('selected');
    cor4.classList.add('selected');
})
