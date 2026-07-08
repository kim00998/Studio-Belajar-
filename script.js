/* ==========================================
   HAKIM AI ACADEMY
   script.js
========================================== */

// =====================
// MOBILE MENU
// =====================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
}

// =====================
// MENU AKTIF
// =====================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (pageYOffset >= top) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// =====================
// SMOOTH SCROLL
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// =====================
// BACK TO TOP
// =====================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backTop.style.display="block";

    }else{

        backTop.style.display="none";

    }

});

if(backTop){

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// =====================
// ANIMASI SCROLL
// =====================

const reveal = document.querySelectorAll(

".persiapan-card,.praktek-card,.download-card,.progress-item,.info-card,.hero-card"

);

function revealOnScroll(){

    reveal.forEach(el=>{

        const top=el.getBoundingClientRect().top;

        const visible=window.innerHeight-100;

        if(top<visible){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

}

reveal.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".6s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// =====================
// HEADER SHADOW
// =====================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>20){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";

}

});

// =====================
// LOADING BUTTON
// =====================

document.querySelectorAll(".btn-task").forEach(btn=>{

btn.addEventListener("click",function(){

this.innerHTML="Membuka...";

});

});

// =====================
// COPY PROMPT
// =====================

document.querySelectorAll(".copy-btn").forEach(button=>{

button.addEventListener("click",()=>{

const target=document.getElementById(button.dataset.copy);

if(!target) return;

navigator.clipboard.writeText(target.innerText);

button.innerHTML="✅ Berhasil Disalin";

setTimeout(()=>{

button.innerHTML="📋 Copy Prompt";

},2000);

});

});

// =====================
// PROGRESS BAR
// =====================

const progress=document.querySelector(".progress-fill");

if(progress){

let value=0;

const interval=setInterval(()=>{

value++;

progress.style.width=value+"%";

if(value>=75){

clearInterval(interval);

}

},20);

}