// Preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})

//navbar md background toggle
let nav_toggle = document.getElementById("navbar-toggler");
let resumeBtn = document.getElementById('resume');
let nav = document.querySelector('nav');

var counter = true;
nav_toggle.addEventListener('click',function(){
    if(counter == true){
        nav.classList.add('bg-black');
        trigger.style.display = "none";

        counter = false;
    }else if(counter == false){
        nav.classList.remove('bg-black');
        trigger.style.display = "block";
        counter = true;
    };
});

//Theme toggle
let trigger = document.getElementById("theme-icon")
let themeText = document.querySelectorAll(".theme-text")
let logo = document.querySelector(".MK-name")

   
trigger.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        trigger.src = "/images/moon.svg";
        nav.classList.add('bg-light');
        for(let i=0; i<themeText.length; i++){
            themeText.item(i).classList.add("text-dark")
        }
        logo.src = "/images/2(2).svg"

    }else{
        trigger.src = "/images/sun.svg"
        logo.src = "/images/1(2).svg"
        for(let i=0; i<themeText.length; i++){
            themeText.item(i).classList.remove("text-dark")
        }
        nav.classList.remove('bg-light');
    }
}
//Resume Show button
const resumeContainer = document.getElementById('resume-wrapper');
resumeContainer.style.display = "none";

function showResume(){
    resumeContainer.style.display = "block";
}
function closeResume(){
    resumeContainer.style.display = "none";
}
// -------------------------INTERSECTION OBSERVERS-----------------------------------
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});