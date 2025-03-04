var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("#randomBtn");

// Updated to arrow function - Set gradient of background color 

setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
	console.log("gradient set");
}

// Adopt default color 1 & 2 for background gradient on page load
document.addEventListener("DOMContentLoaded", setGradient);

// Change background gradient by color 1 & 2 input values
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// random color 1 & 2
function randomInteger(max) {
	return Math.floor(Math.random()*(max + 1));
}

function randomRGB() {
	var r = randomInteger(255);
	var g = randomInteger(255);
	var b = randomInteger(255);
	return [r, g, b];

}

function randomHEX() {
	var [r, g, b] = randomRGB();
	var hexR = r.toString(16).padStart(2, "0");
	var hexG = g.toString(16).padStart(2, "0");
	var hexB = b.toString(16).padStart(2, "0");
	return "#" + hexR + hexG + hexB;

}

function randomColor() {
	color1.value = randomHEX();
	color2.value = randomHEX();
	console.log("color1: ", color1.value, "; color2: ", color2.value);
}

randomBtn.addEventListener("click", randomColor);
randomBtn.addEventListener("click", setGradient);

// Change background gradient by clicking the "random color" button
