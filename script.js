// section 1

const button1 = document.getElementById("button-1");
let r1 = 0;
function flip(){
    r1 += 360;
    button1.style.transform = "rotate(" + r1 + "deg)";
    console.log("test");
}
button1.addEventListener("click", flip);

// section 2

const square2 = document.getElementById("square-2");
const widthSlider2 = document.getElementById("width-2");
const heightSlider2 = document.getElementById("height-2");

function width2(){
    square2.style.width = widthSlider2.value + "px";
}
function height2(){
    square2.style.height = heightSlider2.value + "px";
}

widthSlider2.addEventListener("input", width2);
heightSlider2.addEventListener("input",height2);