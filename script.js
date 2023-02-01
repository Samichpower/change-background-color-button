function changeBGColor(color) {
  document.body.style.background = color;
}

function swapColors() {
  let color = Math.floor(Math.random() * 4);
  console.log(color);

  if (color == 1) {
    changeBGColor("red");
  } else if (color == 2) {
    changeBGColor("blue");
  } else if (color == 3) {
    changeBGColor("yellow");
  } else if (color == 0) {
    changeBGColor("purple");
  }
}