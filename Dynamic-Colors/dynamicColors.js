// Create a funcion that change the background color a page using closure
function changeColor(color) {
  return function() {
    document.body.style.background = color;
  };
}

// Create the colors and store them into different variables
const bgColorBlue = changeColor("#063970");
const bgColorPink = changeColor("#D815CA");
const bgColorGreen = changeColor("#09E61D");

// Target each button to make them execute the changeColor function
document.querySelector("#blue").addEventListener("click", bgColorBlue);
document.querySelector("#pink").addEventListener("click", bgColorPink);
document.querySelector("#green").addEventListener("click", bgColorGreen);
