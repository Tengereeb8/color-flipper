const colorChangeButton = document.getElementById("colorChanger");
colorChangeButton.addEventListener("click", () => {
  const backgroundColor = document.querySelector(".main");
  const color = Math.floor(Math.random() * 4) + 1;
  if (color === 1) {
    colorText = backgroundColor.style.backgroundColor = "#6aeb70";
  }
  if (color === 2) {
    colorText = backgroundColor.style.backgroundColor = "#d76aeb";
  }
  if (color === 3) {
    colorText = backgroundColor.style.backgroundColor = "#eb996a";
  }
  if (color === 4) {
    colorText = backgroundColor.style.backgroundColor = "#6a82eb";
  }
  const colorName = document.getElementById("colorName");
  colorName.textContent = `${colorText}`;
  colorName.style.color = `${colorText}`;
});
