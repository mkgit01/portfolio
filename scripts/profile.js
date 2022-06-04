// Preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

const connectBtn = document.getElementById('connect-btn');
const conOptions = document.getElementById('contact-options');
const closebtn = document.getElementById('closebtn');
let buttonClick = true;
conOptions.style.display = "none";

function showOptions(){
    conOptions.style.display = "block";
}
function closeOptions(){
    conOptions.style.display = "none";
}