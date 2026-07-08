/*====================================
  HAKIM AI ACADEMY
  SCRIPT.JS
====================================*/

/*==========================
  MENU MOBILE
==========================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("show");

});

}

/*==========================
  BUKA / TUTUP MATERI
==========================*/

function toggleMateri(id){

const materi=document.getElementById(id);

if(materi.style.display==="block"){

materi.style.display="none";

}else{

document.querySelectorAll(".materi-detail").forEach(item=>{

item.style.display="none";

});

materi.style.display="block";

}

}

/*==========================
  COPY PROMPT
==========================*/

function copyPrompt(id){

const prompt=document.getElementById(id);

prompt.select();

prompt.setSelectionRange(0,99999);

navigator.clipboard.writeText(prompt.value);

alert("✅ Prompt berhasil disalin!");

}

/*==========================
  BACK TO TOP
==========================*/

const backTop=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================
  MENU AKTIF
==========================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;
const height=section.offsetHeight;

if(pageYOffset>=top){

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

/*==========================
  ANIMASI SCROLL
==========================*/

const cards=document.querySelectorAll(
".persiapan-card,.praktek-card,.bonus-card,.download-card"
);

const observer=new IntersectionObserver((entries)=>{

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
card.style.transition=".6s";

observer.observe(card);

});

console.log("Hakim AI Academy Ready 🚀");