const colorChangeButton = document.getElementById("colorChanger");
const colorName = document.getElementById("colorName");
const backgroundColor = document.querySelector(".main");

const navRandom = document.getElementById("nav-random");
const navSimple = document.getElementById("nav-simple");
const navHex = document.getElementById("nav-hex");

const simpleColors = ["Red", "Green", "Blue", "Yellow"];
const hexColors = ["#f15025", "#70d6ff", "#ff70a6", "#ff9770"];

let currentMode = "random";

navRandom.addEventListener("click", () => (currentMode = "random"));
navSimple.addEventListener("click", () => (currentMode = "simple"));
navHex.addEventListener("click", () => (currentMode = "hex"));

colorChangeButton.addEventListener("click", () => {
  let finalColor = "";

  if (currentMode === "random") {
    const hexDigits = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexDigits[Math.floor(Math.random() * 16)];
    }
    finalColor = color;
  } else if (currentMode === "simple") {
    const randomNumber = Math.floor(Math.random() * simpleColors.length);
    finalColor = simpleColors[randomNumber];
  } else if (currentMode === "hex") {
    const randomNumber = Math.floor(Math.random() * hexColors.length);
    finalColor = hexColors[randomNumber];
  }

  colorName.textContent = finalColor;
  colorName.style.color = finalColor;
  backgroundColor.style.backgroundColor = finalColor;
});
