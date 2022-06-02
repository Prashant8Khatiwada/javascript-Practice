// to change converter button text
document.getElementById("btn1").addEventListener("click", toFahrenheit);
document.getElementById("btn2").addEventListener("click", tocelcius);

function toFahrenheit() {
  let Convert = document.getElementById("converter");
  Convert.innerHTML = "<button >Convert To Fahrenheit</button>";
  console.log("clicked");
//  to perform actual conversion
  Convert.addEventListener("click",Fahrenheit);
}
function tocelcius() {
  let Convert =  document.getElementById("converter")
  Convert.innerHTML ="<button >Convert To celcious</button>";
  console.log("clicked");
  //  to perform actual conversion
  Convert.addEventListener("click", Celcious )
}

//  to perform actual conversion
let input = document.getElementById("input");
let output = document.getElementById("output")
function Fahrenheit(){
    let answer = (parseFloat(input.value)*9/5)+32;
    output.innerText = parseFloat(answer.toFixed(3)) + " degree Fahrenheit";
    console.log(clicked);
}

function Celcious(){
    // let input = document.getElementById("input");
    // let output = document.getElementById("output")
    let answer = (parseFloat(input.value)-32)/1.8;
    output.innerText = parseFloat(answer.toFixed(3)) + " degree Celcious";
    console.log(clicked);
}