// section 1

const button1 = document.getElementById("button-1");
let r1 = 0;
function flip1(){
    r1 += 360;
    button1.style.transform = "rotate(" + r1 + "deg)";
}
button1.addEventListener("click", flip1);

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

// section 3

const display3 = document.getElementById("display-3");
const mainButton3 = document.getElementById("main-button-3");
const button13 = document.getElementById("button-1-3");
let clicks3 = 0;
let controlValue = [10, button13, "button-wraper-3-on", autoClick3];

function plus3(){
    clicks3++;
    display3.innerHTML = clicks3;
    control(controlValue);
}

function minus3(value){
    clicks3 = clicks3 - value;
    display3.innerHTML = clicks3;
}

function control(cv){
    if(clicks3 == cv[0]){
        unlockButton3(cv[1], cv[2], cv[3]);
    }
}

function unlockButton3(buttonName, className, functionName){
    buttonName.classList.add(className);
    buttonName.lastElementChild.addEventListener("click", functionName);
    controlValue = [next, 100];
}

function autoClick3(){
    console.log("click test");
    if(clicks3 > 9){
        minus3(10);
        setInterval(plus3, 1000);
    }
}

function next(){
    console.log("you win");
};

mainButton3.addEventListener("click", plus3);