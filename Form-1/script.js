let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");

function register() {
  x.style.left = "-450px";
  y.style.left = "0px";
  z.style.left = "150px";
  console.log("clicked");
}

function login() {
  x.style.left = "0px";
  y.style.left = "450px";
  z.style.left = "0px";
  console.log("clicked");
}
