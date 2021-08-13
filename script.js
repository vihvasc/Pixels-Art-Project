

window.onload = function () {
  let colorsList = ["black", "red", "green", "blue"];
  startPallet(colorsList);
};

// Color Pallet

function startPallet(colorsList) {
  setColors(colorsList);
  setPalletEventListener();
}

function setColors (colorsList) {
  let baseDivs = document.getElementsByClassName("color");
  for (let index = 0; index < baseDivs.length; index += 1) {
    baseDivs[index].style.backgroundColor = colorsList[index];
  };
};

function setPalletEventListener() {
  let baseDivs = document.getElementsByClassName("color");
  for (div of baseDivs) {
    div.addEventListener("click", selectColor);
  };
};

function selectColor(event) {
  let selectedDiv = event.target;
  let color = selectedDiv.style.backgroundColor;
  sessionStorage.setItem("selectedColor", color);
  removeFocous();
  setFocous(selectedDiv);
};

function removeFocous() {
  let baseDivs = document.getElementsByClassName("color");
  for (div of baseDivs) {
    if (div.style.transform === "scale(1.3, 1.3)") {
      div.style.transform = ""
    };
  };
};

function setFocous(selectedDiv) {
  selectedDiv.style.transform = "scale(1.3, 1.3)"
};

// Pixel Art