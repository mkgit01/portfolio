let nav_toggle = document.getElementById("navbar-toggler");
let resumeBtn = document.getElementById('resume');
let nav = document.querySelector('nav');

var counter = true;
nav_toggle.addEventListener('click',function(){
    if(counter == true){
        nav.classList.add('bg-black');
        counter = false;
    }else if(counter == false){
        nav.classList.remove('bg-black');
        counter = true;
    };
});




// var nav = document.querySelector('nav');
// window.addEventListener('scroll',function(){
//     if(window.scrollY > 100){
//         nav.classList.add('bg-black');
//     }else{
//         nav.classList.remove('bg-black');
//     }
// });
// function HideScrollbar() {
//     var style = document.createElement("style");
//     if(window.scrollY < 100){
//     style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
//     document.head.appendChild(style);
// }else{
//     style.innerHTML = `body::-webkit-scrollbar {display: block;}`;
//     document.head.appendChild(style);
// }
//   };
//   HideScrollbar();