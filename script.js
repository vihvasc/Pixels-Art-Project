

window.onload = function () {
  let colorsList = ["black", "red", "green", "blue"];
  startPallet(colorsList);
  startPixelBox();
};



// Color Pallet

function startPallet(colorsList) {
  createPalletDivs(colorsList.length)
  setColors(colorsList);
  setPalletEventListener();
  selectFirstColor();
};

function createPalletDivs(lenght) {
  let palletBox = document.getElementById("color-palette");
  for (let index = 0; index < lenght; index += 1) {
    let palletDiv = document.createElement("div");
    palletDiv.className = "color";
    palletBox.appendChild(palletDiv);
  };
};

function setColors (colorsList) {
  let palletDivs = document.getElementsByClassName("color");
  for (let index = 0; index < palletDivs.length; index += 1) {
    palletDivs[index].style.backgroundColor = colorsList[index];
  };
};

function setPalletEventListener() {
  let palletDivs = document.getElementsByClassName("color");
  for (div of palletDivs) {
    div.addEventListener("click", selectColor);
  };
};

function selectColor(event) {
  let selectedDiv = event.target;
  let color = selectedDiv.style.backgroundColor;
  let sessionStorageColor = sessionStorage.getItem("selectedColor");
  if (sessionStorageColor !== color) {
    sessionStorage.setItem("selectedColor", color);
    addSelecedClass(selectedDiv);
  // } else {
  //   removeSelectedClassFromOthers();
  //   sessionStorage.removeItem("selectedColor");
  };
  
  // if (selectedDiv.style.transform === "scale(1.3, 1.3)") {
  //   removeFocous();
  //   sessionStorage.removeItem("selectedColor");
  // } else {
  //   removeFocous();
  //   setFocous(selectedDiv);
  // };
};

function addSelecedClass(selectedDiv) {
  removeSelectedClassFromOthers()
  selectedDiv.classList.add("selected");
}

function removeSelectedClassFromOthers() {
  let palletDivs = document.getElementsByClassName("color");
  for (let div of palletDivs) {
    if (div.classList.contains("selected")) {
      div.classList.remove("selected");
    };
  };
};

function removeFocous() {
  let palletDivs = document.getElementsByClassName("color");
  for (div of palletDivs) {
    if (div.style.transform === "scale(1.3, 1.3)") {
      div.style.transform = ""
    };
  };
};

function setFocous(selectedDiv) {
  selectedDiv.style.transform = "scale(1.3, 1.3)";
};

function selectFirstColor() {
  let firstPalletColorDiv = document.querySelector(".color");
  firstPalletColorDiv.classList.add("selected");
  let firstPalletColor = firstPalletColorDiv.style.backgroundColor;
  sessionStorage.setItem("selectedColor", firstPalletColor);
  // setFocous(firstPalletColorDiv);
};

// Pixel box

function startPixelBox() {
  createPixelBoxItens(25);
  pixelAddEventListener();
  inputSizeCreator();
  inputButtonCreator();
  clearButtonCreator();
};

function createPixelBoxItens(size) {
  let pixelBoard = document.getElementById("pixel-board");
  let pixelBoardCss = window.getComputedStyle(pixelBoard)
  pixelBoard.style.width = Math.sqrt(size) * 42 + "px"
  console.log(pixelBoardCss.getPropertyValue("width"));
  for (let index = 0; index < size; index += 1) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "white";
    pixelBoard.appendChild(pixel);
  };
};

// Color Pixel

function pixelAddEventListener() {
  let pixels = document.getElementsByClassName("pixel");
  for (pixel of pixels) {
    pixel.addEventListener("click", colorPixel);
  };
};

function colorPixel(event) {
  let color = sessionStorage.getItem("selectedColor")
  let pixel = event.target;
  pixel.style.backgroundColor = color;
};

// Clear Board

function clearButtonCreator() {
  let section = document.querySelector(".main-content")
  let buttom = document.createElement("button");
  buttom.innerText = "Limpar";
  buttom.id = "clear-board";
  section.appendChild(buttom);
  buttom.addEventListener("click", clearBoard);
};

function clearBoard() {
  let pixels = document.getElementsByClassName("pixel");
  for (let pixel of pixels) {
    pixel.style.backgroundColor = "white";
  };
};

//  size input

function inputSizeCreator() {
  let article = document.querySelector(".main-content");
  let input = document.createElement("input");
  input.id = "board-size";
  input.type = "number";
  input.min = "1"
  article.appendChild(input);
};

function inputButtonCreator() {
  let article = document.querySelector(".main-content");
  let inputButtom = document.createElement("button");
  inputButtom.id = "generate-board";
  inputButtom.innerText = "VQV";
  article.appendChild(inputButtom);
  inputButtom.addEventListener("click", createNewBoard);
};


function createNewBoard(event) {
  let input = document.getElementById("board-size");
  if (Number(input.value)) {
    let size = filterSize(Number(input.value));
    excludeOldBoard();
    createPixelBoxItens(size);
  } else {
    alert("Board inválido!");
  };
};

function filterSize(size) {
  if ((size >= 5) && (size <= 50)) {
    return size ** 2;
  } else if (size < 5) {
    return 5 ** 2;
  } else {
    return 50 ** 2;
  };
};

function excludeOldBoard() {
  let pixelBoard = document.getElementById("pixel-board");
  pixelBoard.innerHTML = "";
};