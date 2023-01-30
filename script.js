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

// section 4

const button4 = document.getElementById("button-4");
const shape4 = document.getElementById("shape-4");

function randomClipPath() {
    let arr = [0,0,0,0,0,0,0,0];
    for (let i in arr){
        arr[i] = random(0,100);
    }
    console.log(arr);
    shape4.style.clipPath = "polygon(" + arr[0] + "% " + arr[1] + "%, " + arr[2] + "% " + arr[3] + "%, " + arr[4] + "% " + arr[5] + "%, " + arr[6] + "% " + arr[7] + "% " + ")"; 
}

button4.addEventListener("click", randomClipPath);

// section 5

const square5 = document.getElementById("square-5");
const display5 = document.getElementById("display-5");
const slider15 = document.getElementById("slider-1-5");
const slider25 = document.getElementById("slider-2-5");
const slider35 = document.getElementById("slider-3-5");
let colorArr5 = [127,127,127];
function red5(){
    colorArr5[0] = slider15.value;
    setColor5();
}

function green5(){
    colorArr5[1] = slider25.value;
    setColor5();
}

function blue5(){
    colorArr5[2] = slider35.value;
    setColor5();
}
function setColor5(){
    a = "rgb(" + colorArr5[0] + ", " + colorArr5[1] + ", " + colorArr5[2] + ")";
    square5.style.backgroundColor = a;
    display5.innerHTML = a;
}

slider15.addEventListener("input", red5);
slider25.addEventListener("input", green5);
slider35.addEventListener("input", blue5);

// section 6

const div6 = document.getElementById("div-6");
const slider6 = document.getElementById("slider-6")

function setBorderRadius(){
    number = slider6.value;
    div6.style.borderRadius = number + "%";
    div6.innerHTML = number + "%";
}

slider6.addEventListener("input", setBorderRadius);

// section 7

const display7 = document.getElementById("display-7");
const section7 = document.getElementById("section-7");
let numberOne7 = "";
let numberTwo7 = "";
let operation7 = "";
let numbersState7 = [true, true];

function refreshDisplay7(){
    display7.innerHTML = numberOne7 + operation7 + numberTwo7;
}

function calculator(e){
    element = e.target;
    if(element.className.includes("number")){
        if(operation7 == ""){
            numberOne7 += element.innerHTML;
        }else{
            numberTwo7 += element.innerHTML;
        }
    }
    if(element.className.includes("operation")){
        if(numberOne7 != ""){
            operation7 = element.innerHTML;
        }
    }
    if(element.className.includes("equal")){
        if(numberOne7 != "" && operation7 != "" && numberTwo7 != ""){
            numberOne7 = parseInt(numberOne7);
            numberTwo7 = parseInt(numberTwo7);
            switch (operation7) {
                case "+":
                    numberOne7 = numberOne7 + numberTwo7;
                    break;
                case "-":
                    numberOne7 = numberOne7 - numberTwo7;
                    break;
                case "*":
                    numberOne7 = numberOne7 * numberTwo7;
                    break;
                case ":":
                    numberOne7 = numberOne7 / numberTwo7;
                    break;
                default:
                    break;
            }
            numberTwo7 = "";
            operation7 = "";
        }
    }   
    if(element.className.includes("clean")){
        numberOne7 = "";
        numberTwo7 = "";
        operation7 = "";
    }
    if(element.className.includes("minus")){
        if(operation7 == ""){
            if(numbersState7[0]){
                numberOne7 = -Math.abs(numberOne7);
                numbersState7[0] = false;
            }else{
                numberOne7 = Math.abs(numberOne7);
                numbersState7[0] = true;
            }
        }else{
            if(numbersState7[1]){
                numberTwo7 = -Math.abs(numberTwo7);
                numbersState7[1] = false;
            }else{
                numberTwo7 = Math.abs(numberTwo7);
                numbersState7[1] = true;
            }
        }
    }
    refreshDisplay7();
}
section7.addEventListener("click", calculator);

// section 8

const button8 = document.getElementById("button-8");
const coin8 = document.getElementById("coin-8");
let flip8 = false;
let spin = 0;

function coinFlip(){
    if(!flip8){
        flip8 = true;
        seed = random(0, 100);
        if(seed > 50){
            text = "EAGLE";
        }else{
            text = "HEADS";
        }
        spin += 720;
        coin8.style.transform = "rotateY(" + spin + "deg)";
        coin8.innerHTML = text;
        setTimeout(flip8 = false, 500);
        console.log(spin, text);
    }
}

button8.addEventListener("click", coinFlip);

// section 9

const input9 = document.getElementById("input-9");
const button9 = document.getElementById("button-9");

function enc(){
    text = input9.value;
    text = text.split("");
    arr = [...text];
    length = arr.length;
    for(let i in text){
        letter1 = text[i - 1];
        letter2 = text[length - i];
        arr[length - i] = letter1;
        arr[i - 1] = letter2;
    }
    text = arr.join("");
    console.log(text);
    input9.value = text;
}

button9.addEventListener("click", () => enc());

// section 10

const min10 = document.getElementById("min-10");
const max10 = document.getElementById("max-10");
const button10 = document.getElementById("button-10");
const display10 = document.querySelector(".display-10");

function genRandom(){
    min = min10.value;
    max = max10.value;
    if(min != "" && max != ""){
        result = random(min, max);
    }else{
        result = "MISSING ARGUMENT";
    }
    display10.innerHTML = result;
}

button10.addEventListener("click", genRandom);

// section 11

const display11 = document.querySelector(".display-11");
const button1_11 = document.getElementById("button-1-11")
const button2_11 = document.getElementById("button-2-11")

function startStopTimer11(){
    console.log("chuj");
    let dat = new Date();
    function print(){
        tempDate = new Date();
        tempDate = tempDate - dat;
        arr = [];
        arr[0] = tempDate.getHours() + 1;
        arr[1] = tempDate.getMinutes() + 1;
        arr[2] = tempDate.getSecondes() + 1;
        console.log(arr[0] + ":" + arr[1] + ":" + arr[2]);
    }
    setInterval(print, 1000);
}

button1_11.addEventListener("click",startStopTimer11)