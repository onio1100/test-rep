// section 1
const button1 = document.getElementById("button-1");
let r1 = 0;
function flip(){
    r1 += 360;
    button1.style.transform = "rotate(" + r1 + "deg)";
    console.log("test");
}
button1.addEventListener("click", flip);