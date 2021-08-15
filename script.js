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
	let npixel = 25;
	let pixelBoard = document.querySelector("#pixel-board");
	for(let cont = 1;cont <= 25; cont += 1){
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


