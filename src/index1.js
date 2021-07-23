const pageBody = document.querySelector("body");
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");
const myColours = ["red", "orange", "yellow", "green", "blue", "violet"];

myButton.addEventListener("click", colourChange);

function colourChange() {
  let colourPicked = Math.floor(Math.random() * myColours.length);
  pageBody.style.backgroundColor = myColours[colourPicked];
  myHeading.textContent = `Welcome, the colour selected is ${
    getComputedStyle(pageBody).backgroundColor
  }`;
}
