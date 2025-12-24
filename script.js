const colorChangeButton = document.getElementById("colorChanger");
colorChangeButton.addEventListener("click", () => {
  const backgroundColor = document.querySelector(".main");
  const hexDigits = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexDigits[Math.floor(Math.random() * 16)];
  }

  const colorName = document.getElementById("colorName");
  colorName.textContent = `${color}`;
  colorName.style.color = `${color}`;
  backgroundColor.style.backgroundColor = color;
});
