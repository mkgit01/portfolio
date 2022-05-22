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