function creatColorClass(){
	let n = 4;
	let colorPalette = document.getElementById("color-palette");
	for(let cont = 1;cont <= n;cont += 1){
		let color = document.createElement("div");
		color.classList.add("color");
		colorPalette.appendChild(color);	
	}
}
creatColorClass();


//change color byid

function changeColorOfColor(){
	let arrClassColor = document.getElementsByClassName("color");
		arrClassColor[0].style.backgroundColor = "black"
		arrClassColor[1].style.backgroundColor = "red"
		arrClassColor[2].style.backgroundColor = "orange"
		arrClassColor[3].style.backgroundColor = "pink"
		
}
changeColorOfColor();
/*
### 4 - Adicione à página um quadro de pixels, com 25 pixels.

- O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de "pixels" deve possuir o `id` denominado `pixel-board`, ao passo que cada "pixel" individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

-  O quadro de "pixels" deve aparecer abaixo da paleta de cores.

**O que será verificado:**

- Verifica se o quadro de pixels possui o `id` denominado `pixel-board`

- Verifica se cada pixel individual dentro do quadro possui a `classe` denominada `pixel`.

- Verifica se a cor inicial dos pixels dentro do quadro, ao abrir a página, é branca.

- Verifica se o quadro de pixels aparece abaixo da paleta de cores

*/
function creatPixel(){
	let nPixel = 25;
	let pixelBoard = document.querySelector("#pixel-board");
	for(let cont = 1;cont <= nPixel; cont += 1){
	let pixel = document.createElement("div");
	pixel.classList.add("pixel")
	pixelBoard.appendChild(pixel);
			
	}

}
creatPixel();
	/* 
### 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

- O elemento da cor preta deve possuir, inicialmente, a `classe` `selected`;

- Note que o elemento que deverá receber a classe `selected` deve ser um dos elementos que possuem a classe `color`, como especificado no **requisito 2**.

**O que será verificado:**

- Verifica se o elemento da cor preta possui, inicialmente, a `classe` `selected`

- Verifica se nenhuma outra cor da paleta tem a `classe` `selected`
*/

console.log(document.querySelector(".color"));
function selectedColorBlack(){
	let blackSelected = document.querySelector(".color")
	blackSelected.classList.add("selected")

}
selectedColorBlack();

/*
7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;
Somente uma das cores da paleta deve ter a classe selected de cada vez;
Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

O que será verificado:

Verifica se somente uma cor da paleta de cores tem a classe selected de cada vez

Verifica se os pixels dentro do quadro não têm a classe selected quando são clicados

*/

	 let arrClassColor = document.getElementsByClassName("color");
	   let arrClassColor0 = arrClassColor[0]; 
	   let arrClassColor1 = arrClassColor[1]; 
		 let arrClassColor2 = arrClassColor[2]; 
	   let arrClassColor3 = arrClassColor[3]; 

		arrClassColor0.addEventListener("click",selectedClassName0);
		arrClassColor1.addEventListener("click",selectedClassName1);
		arrClassColor2.addEventListener("click",selectedClassName2);
		arrClassColor3.addEventListener("click",selectedClassName3);


		


	function selectedClassName0(){
		let arrClassColor = document.getElementsByClassName("color");
		arrClassColor[0].classList.add("selected");
		arrClassColor[1].classList.remove("selected")
		arrClassColor[2].classList.remove("selected")
		arrClassColor[3].classList.remove("selected")
	}
		
	function selectedClassName1(){
	  let arrClassColor = document.getElementsByClassName("color");
	  arrClassColor[1].classList.add("selected");
		arrClassColor[0].classList.remove("selected")
		arrClassColor[2].classList.remove("selected")
		arrClassColor[3].classList.remove("selected")
		
}
  function selectedClassName2(){
		let arrClassColor = document.getElementsByClassName("color");
		arrClassColor[2].classList.add("selected");
		arrClassColor[0].classList.remove("selected")
		arrClassColor[1].classList.remove("selected")
		arrClassColor[3].classList.remove("selected")
		
}
  function selectedClassName3(){
		let arrClassColor = document.getElementsByClassName("color");
		arrClassColor[3].classList.add("selected");
		arrClassColor[1].classList.remove("selected")
		arrClassColor[2].classList.remove("selected")
		arrClassColor[0].classList.remove("selected")
}
/*
### 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

**O que será verificado:**

- Verifica se ao carregar a página deve ser possível pintar os pixels de preto

- Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

- Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
*/

let pixels = document.getElementsByClassName("pixel");

for (let cont = 0 ;cont < pixels.length; cont += 1) {
	pixels[cont].addEventListener("click",changeColorSelected);

}
function changeColorSelected(click){
	let color = document.querySelector(".selected").style.backgroundColor
	click.target.style.backgroundColor = color;
}
	
 








