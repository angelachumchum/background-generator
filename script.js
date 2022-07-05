let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.querySelector("#gradient");
let random = document.querySelector("#genRandom");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";   

    css.textContent = body.style.background + ";";
}

function rbgToHex(n) {
    return n.toString(16).padStart(2,'0');
    // return (hex.length<2)?'0'+hex:hex
    // if (hex.length < 2) {
    //     hex = "0" + hex;
    // }
    // return hex;
}

function genRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "#" + rbgToHex(r) + rbgToHex(g) + rbgToHex(b);

}

function genRandomBg() {
    color1.value = genRandomColor();
    color2.value = genRandomColor();
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", genRandomBg);

