

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
}

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
  firstPalletColorDiv = document.querySelector(".color");
  firstPalletColorDiv.classList.add("selected");
  firstPalletColor = firstPalletColorDiv.style.backgroundColor;
  sessionStorage.setItem("selectedColor", firstPalletColor);
  // setFocous(firstPalletColorDiv);
};

// Pixel box

function startPixelBox() {
  pixelBoard = document.getElementById("pixel-board");
  for (let index = 0; index < 25; index += 1) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "white";
    pixelBoard.appendChild(pixel);
  };
};

