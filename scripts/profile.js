// Preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none";
})


//Footer connect button
const connectBtn = document.getElementById('connect-btn');
const conOptions = document.getElementById('contact-options');
const closebtn = document.getElementById('closebtn');
conOptions.style.display = "none";

function showOptions(){
    conOptions.style.display = "block";
}
function closeOptions(){
    conOptions.style.display = "none";
}

//Underline animation

// Remove the transition class
const underline = document.querySelectorAll('.underline');

  // lineRemove();
  underline.forEach(line=>{
    line.classList.remove('underline-transition');
  })

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

        // lineAdd();
        underline.forEach(line=>{
          line.classList.add('underline-transition');
        })
        return;
    }
      // lineRemove();
      underline.forEach(line=>{
        line.classList.remove('underline-transition');
      })
  });
});

observer.observe(document.querySelector('.underline-wrapper'));
observer.observe(document.querySelector('.underline-wrapper-2'));

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

//Resume Show button
const resumeBtn = document.getElementById('resume-btn');
const resumeContainer = document.getElementById('resume-wrapper');
const resumeClosebtn = document.getElementById('resume-closebtn');
resumeContainer.style.display = "none";

function showResume(){
    resumeContainer.style.display = "block";
}
function closeResume(){
    resumeContainer.style.display = "none";
}