const paleta_de_cores = ['black', 'blue', 'red', 'yellow'];

function cores_da_paleta () {
    const color_divs = document.getElementsByClassName('color');

    for (index=0; index < color_divs.length; index +=1) {
        const cor_atual = paleta_de_cores[index];
        const cor_atual_da_div = color_divs[index];
        cor_atual_da_div.style.backgroundColor = cor_atual;

    }
}

function preto_incial (color_divs) {
    color_divs.classList.add('selected');

}



window.onload = function () {
    cores_da_paleta ();
    preto_incial (document.querySelector('.color'));
}