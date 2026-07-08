// =============================
// STUDIO BELAJAR AI
// script.js
// =============================

// MENU MOBILE
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// TUTUP MENU SAAT LINK DIKLIK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        if (nav) nav.classList.remove("active");
    });
});

// =============================
// BUKA / TUTUP MATERI
// =============================

function toggleMateri(id){

const target = document.getElementById(id);

if(!target) return;

document.querySelectorAll(".materi-content").forEach(item=>{

if(item.id!==id){

item.style.display="none";

}

});

target.style.display=(target.style.display==="block")?"none":"block";

}

// =============================
// COPY PROMPT
// =============================

function copyPrompt(id){

const textarea=document.getElementById(id);

if(!textarea) return;

textarea.select();
textarea.setSelectionRange(0,99999);

navigator.clipboard.writeText(textarea.value);

alert("✅ Prompt berhasil disalin!");

}

// =============================
// SEARCH MATERI
// =============================

const search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",function(){

const keyword=this.value.toLowerCase();

document.querySelectorAll(".materi-card").forEach(card=>{

const isi=card.innerText.toLowerCase();

card.style.display=isi.includes(keyword)?"block":"none";

});

});

}

// =============================
// BACK TO TOP
// =============================

const backTop=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(!backTop) return;

if(window.scrollY>250){

backTop.style.display="flex";

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

// =============================
// MENU ACTIVE
// =============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(window.pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// =============================
// ANIMASI CARD
// =============================

const cards=document.querySelectorAll(".kategori-card,.materi-card,.prompt-card,.produk-card");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".5s";

observer.observe(card);

});

console.log("✅ Studio Belajar AI siap digunakan.");