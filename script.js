const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) { 
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

let intro = document.querySelector('.intro');
let logoHeader = document.querySelector('.logo-header'); 
let intrSpan = document.querySelectorAll('.intr');


window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        intrSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            intrSpan.forEach((span, idx) => { 

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

         setTimeout (()=>{
intro.style.top = '-100vh'
         }, 2300)
    }); 
});

window.addEventListener("scroll", function(){
var header = document.querySelector(".header");
header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function(){
    var logo = document.querySelector(".logo");
    logo.classList.toggle("sticky", window.scrollY > 0);
    });

    window.addEventListener("scroll", function(){
        var logoimg = document.querySelector(".logo-img");
        logoimg.classList.toggle("sticky", window.scrollY > 0);
        });

window.addEventListener("scroll", function(){
    var news = document.querySelector(".new");
    news.classList.toggle("active", window.scrollY > 0);
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('show-password').addEventListener('click', function() {
          const passwordField = document.getElementById('password');
          const passwordFieldType = passwordField.getAttribute('type');
          if (passwordFieldType === 'password') {
            passwordField.setAttribute('type', 'text');
            this.textContent = 'Hide Password';
          } else {
            passwordField.setAttribute('type', 'password');
            this.textContent = 'Show Password';
          }
        });
      });
    
      
