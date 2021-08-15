// para poder autera a cor no html
let segundaCor = document.querySelector('.segunda-cor');
let terceiraCor = document.querySelector('.terceira-cor');
let quartaCor = document.querySelector('.quarta-cor');

// criar cor com numero RGB
function coresAleatorias() {
segundaCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
terceiraCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
quartaCor.style.backgroundColor = `rgb(${corAleatoria(255)} , ${corAleatoria(255)} , ${corAleatoria(255)})`;
}
// gerar numeros aleartorios 
function corAleatoria(number) {
return Math.floor(Math.random() * number) + 1;  // +1 para nao dar branco no aleatorio
}
// transferir numeros aleatorios para gerar as cores
window.onload = coresAleatorias;
