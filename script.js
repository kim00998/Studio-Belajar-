// ==============================
// HAKIM AI ACADEMY
// script.js
// ==============================

// MENU MOBILE
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.onclick = function(){

nav.classList.toggle("active");

}

}

// ==============================
// BUKA MATERI
// ==============================

function toggleMateri(id){

const semuaMateri = document.querySelectorAll(".materi-content");

semuaMateri.forEach(function(item){

if(item.id !== id){

item.style.display = "none";

}

});

const target = document.getElementById(id);

if(target.style.display === "block"){

target.style.display = "none";

}else{

target.style.display = "block";

}

}

// ==============================
// COPY PROMPT
// ==============================

function copyPrompt(id){

const text = document.getElementById(id);

navigator.clipboard.writeText(text.value);

alert("✅ Prompt berhasil disalin.");

}

// ==============================
// BACK TO TOP
// ==============================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll",function(){

if(window.scrollY > 300){

backTop.style.display = "flex";

}else{

backTop.style.display = "none";

}

});

backTop.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// ==============================
// MENU AKTIF
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",function(){

let current = "";

sections.forEach(function(section){

const sectionTop = section.offsetTop - 120;
const sectionHeight = section.offsetHeight;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(function(link){

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){

link.classList.add("active");

}

});

});

// ==============================
// PENCARIAN MATERI
// ==============================

const searchInput = document.querySelector(".search input");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const keyword = this.value.toLowerCase();

const cards = document.querySelectorAll(".materi-card");

cards.forEach(function(card){

const text = card.innerText.toLowerCase();

if(text.indexOf(keyword) > -1){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

}

console.log("✅ Hakim AI Academy Ready");