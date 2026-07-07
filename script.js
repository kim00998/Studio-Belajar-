/* =====================================
   Hakim AI Academy
   script.js
===================================== */

// ================================
// Loader
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 500);

});


// ================================
// Smooth Scroll Menu
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ================================
// Active Menu
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});


// ================================
// Reveal Animation
// ================================

const revealItems=document.querySelectorAll(

".card,.task-card,.prepare-card a,.download-card a"

);

function revealOnScroll(){

    revealItems.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-80){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// ================================
// Copy Prompt Button
// ================================

document.querySelectorAll(".copy-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        const target=button.dataset.target;

        const text=document.getElementById(target).innerText;

        navigator.clipboard.writeText(text);

        button.innerHTML="✅ Berhasil Disalin";

        setTimeout(()=>{

            button.innerHTML="📋 Copy Prompt";

        },2000);

    });

});


// ================================
// Back To Top Button
// ================================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="flex";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ================================
// Console Message
// ================================

console.log("🚀 Hakim AI Academy Loaded Successfully");