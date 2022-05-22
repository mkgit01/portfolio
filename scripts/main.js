//navbar md background toggle
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

//Contact form back-end
function sendEmail(){
    Email.send({
        SecureToken: "10852066-0dff-46e8-95ef-3627315b45d6",
        To : 'minaketann3@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New MK Enquiry",
        Body : "Name: "+document.getElementById("username").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> Phone no: "+ document.getElementById("phone").value
        + "<br> Message: "+document.getElementById("message").value
    }).then(
      message => {
          alert(message)
        }
    )
}

//Theme toggle
let trigger = document.getElementById("theme-icon")
let themeText = document.querySelectorAll(".theme-text")
let logo = document.querySelector(".MK-name")
trigger.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        trigger.src = "/images/moon.svg";
        nav.classList.add('bg-black');
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
        nav.classList.remove('bg-black');
    }
}


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