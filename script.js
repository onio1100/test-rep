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
const button23 = document.getElementById("button-2-3");
const button33 = document.getElementById("button-3-3");
let plusValue = 1;
let clicks3 = 0;
let multiplier3 = [0, 0];
let controlValue = 
[10, button13, autoClick3,
    [100, button23, double3, [
        150, button33, gift3, [
            "s","s","s"
]]]];

function plus3(){
    clicks3 += plusValue;
    display3.innerHTML = clicks3;
    control(controlValue);
}

function minus3(value){
    clicks3 = clicks3 - value;
    display3.innerHTML = clicks3;
}

function control(cv){
    if(clicks3 >= cv[0]){
        unlockButton3(cv[1], cv[2]);
    }
}

function unlockButton3(buttonName, functionName){
    buttonName.classList.add("button-wraper-3-on");
    buttonName.lastElementChild.addEventListener("click", functionName);
    controlValue = controlValue[3];
}

function multiplierControl3(element, index){
    multiplier3[index]++;
    element.firstElementChild.classList.add("multiplier-3-on");
    element.firstElementChild.innerHTML = multiplier3[index];
}

function autoClick3(){
    if(clicks3 > 9){
        minus3(10);
        multiplierControl3(button13, 0);
        setInterval(plus3, 1000);
    }
}

function double3(){
    if(clicks3 > 99){
        minus3(100);
        multiplierControl3(button23, 1);
        plusValue++;
    }
};
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
function gift3(){
    if(clicks3 > 149){
        minus3(150);
        clicks3 += random(1,300);
        display3.innerHTML = clicks3;
    }
}

mainButton3.addEventListener("click", plus3);
