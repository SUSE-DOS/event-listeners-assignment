const hoverTxt = document.querySelector("#hoverPara");
const displayEffect = document.querySelector("#effect");

hoverTxt.addEventListener("mouseover", respondMouseOver);
hoverTxt.addEventListener("mouseout", respondMouseOut);

function respondMouseOver() {
  displayEffect.textContent = "mouseover event";
}

function respondMouseOut() {
  displayEffect.textContent = "mouseout event";
}
